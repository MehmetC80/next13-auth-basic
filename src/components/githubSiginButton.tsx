'use client';

import { FC } from 'react';
import { Button } from './ui/button';

interface GithunSignInButtonProps {
  children: React.ReactNode;
}

const GithubSignInButton: FC<GithunSignInButtonProps> = ({ children }) => {
  const loginWithGithub = () => {
    console.log('login with github');
  };

  return (
    <Button className='w-full' onClick={loginWithGithub}>
      {children}
    </Button>
  );
};
export default GithubSignInButton;
