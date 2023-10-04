'use client';

import { signOut } from 'next-auth/react';
import { Button } from '../ui/button';

const UserAccountNav = () => {
  return (
    <Button
      //if signout redirect to login page
      onClick={() =>
        signOut({
          redirect: true,
          callbackUrl: `${window.location.origin}/login`,
        })
      }
      variant={'destructive'}
      className='ml-auto'
    >
      Logout
    </Button>
  );
};
export default UserAccountNav;
