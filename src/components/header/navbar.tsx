import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Atom } from 'lucide-react';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import UserAccountNav from './user-account-av';
import Image from 'next/image';

export const Navbar = async () => {
  const session = await getServerSession(authOptions);

  console.log(session?.user.image);
  return (
    <div className='bg-zinc-100 py-2 border-b border-s-zinc-200 fixed  top-0 w-full z-10'>
      <div className='container flex items-center'>
        <Link href={'/'}>
          <Atom />
        </Link>
        {session?.user ? (
          <UserAccountNav />
        ) : (
          <>
            {' '}
            <Link
              href={'/login'}
              className={cn(buttonVariants({ variant: 'outline' }), 'ml-auto')}
            >
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};
export default Navbar;
