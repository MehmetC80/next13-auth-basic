'use client';

import { signOut, useSession } from 'next-auth/react';
import { Button } from '../ui/button';

import Image from 'next/image';

const UserAccountNav = () => {
  const { data: session } = useSession();
  return (
    <>
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
      {session?.user.image && (
        <Image
          alt='image'
          src={session.user.image}
          width={40}
          height={40}
          className='rounded-full ml-4'
        />
      )}
    </>
  );
};
export default UserAccountNav;
