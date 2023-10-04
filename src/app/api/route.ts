import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]/auth';
import { NextResponse } from 'next/server';

export const GET = async (req: Request) => {
  const session = await getServerSession(authOptions);

  return NextResponse.json({ authenticated: !!session });
};
