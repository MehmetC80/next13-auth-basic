'use client';

import { Button } from '@/components/ui/button';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import GithubSignInButton from '@/components/githubSiginButton';

const formSchema = z
  .object({
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
    confirmPassword: z
      .string()
      .min(1, { message: 'Passwort Wiederholung ist erforderlich.' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwörter stimmen nicht überein!',
  });

const RegisterForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='w-full space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder='Name' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder='Email' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='password'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passwort</FormLabel>
              <FormControl>
                <Input placeholder='Passwort' {...field} type='password' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='confirmPassword'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passwort Wiederholen</FormLabel>
              <FormControl>
                <Input
                  placeholder='Passwort Wiederholen'
                  {...field}
                  type='password'
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className='w-full mt-6' type='submit'>
          registrieren
        </Button>
      </form>
      <div className='mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400'>
        oder
      </div>
      <GithubSignInButton>Registieren mit Github</GithubSignInButton>
      <p className='text-center text-sm text-gray-600 mt-2'>
        Du bist bereits registriert?Bitte&nbsp;
        <Link className='text-blue-500 hover:underline' href={'/login'}>
          zum Login
        </Link>
      </p>
    </Form>
  );
};
export default RegisterForm;
