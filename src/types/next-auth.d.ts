import NextAuth from 'next-auth/next';

declare module 'next-auth' {
  interface User {
    name: string;
  }
  interface Session {
    user: User & {
      name: string;
    };
    token: {
      name: string;
    };
  }
}
