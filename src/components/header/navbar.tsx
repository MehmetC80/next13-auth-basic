import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Atom } from 'lucide-react';

export const Navbar = () => {
  return (
    <div className='bg-zinc-100 py-2 border-b border-s-zinc-200 fixed  top-0 w-full z-10'>
      <div className='container flex items-center'>
        <Link href={'/'}>
          <Atom />
        </Link>
        <Link
          href={'/login'}
          className={cn(buttonVariants({ variant: 'outline' }), 'ml-auto')}
        >
          Login
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
