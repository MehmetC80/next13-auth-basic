'use client';

import { FC } from 'react';
import { Button } from './ui/button';
import { signIn } from 'next-auth/react';

interface GithunSignInButtonProps {
  children: React.ReactNode;
}

const GithubSignInButton: FC<GithunSignInButtonProps> = ({ children }) => {
  const loginWithGithub = () => {
    signIn('github', {
      callbackUrl: 'http://localhost:3000/admin',
    });
  };

  return (
    <Button className='w-full' onClick={loginWithGithub}>
      {children}
    </Button>
  );
};
export default GithubSignInButton;
