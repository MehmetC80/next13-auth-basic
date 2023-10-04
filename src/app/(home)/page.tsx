import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1 className='text-4xl'>Home</h1>
      <Link className={cn(buttonVariants(), 'bg-slate-700')} href={'/admin'}>
        Admin Bereich
      </Link>
    </div>
  );
}
