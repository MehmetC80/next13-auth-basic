'use client';

import { FC } from 'react';
import { SessionProvider } from 'next-auth/react';

interface MySessionProviderProps {
  children: React.ReactNode;
}

const MySessionProvider: FC<MySessionProviderProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default MySessionProvider;
