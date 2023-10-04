import { NextResponse } from 'next/server';
import prisma from '@/lib/prismadb';
import bcrypt from 'bcrypt';
import * as z from 'zod';

//define a schema for input validation

const userSchema = z.object({
  name: z
    .string()
    .min(1, { message: 'Passwort ist erforderlich.' })
    .min(2, { message: 'Name muss mindesten aus 2 Bustaben bestehen.' })
    .max(30, {
      message: 'Name darf nicht aus mehr als 30 Buchstagen bestehen.',
    }),

  email: z.string().email({
    message: 'Dies ist keine gültige Email.',
  }),
  password: z
    .string()
    .min(1, { message: 'Passwort ist erforderlich.' })
    .min(6, {
      message: 'Passwort muss mindestens aus 6 Zeichen bestehen.',
    }),
});

export const POST = async (req: Request) => {
  try {
    const body = await req.json();

    const { email, name, password } = userSchema.parse(body);

    if (!email || !name || !password) {
      return NextResponse.json(
        { message: 'Email, Name und Password sind erforderlich' },
        { status: 400 }
      );
    }

    // check if email exists

    const existingUserByEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, message: 'User mit Email existiert bereits.' },
        { status: 400 }
      );
    }

    // check if name exists

    const existingUserByName = await prisma.user.findUnique({
      where: {
        name,
      },
    });

    if (existingUserByName) {
      return NextResponse.json(
        { user: null, message: 'User mit Name existiert bereits.' },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 11);

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    // ensure that you not send the password to the user
    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, message: 'User erfolgreich erstellt', success: true },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
