import { buttonVariants } from '@/components/ui/button';
import User from '@/components/user';
import { cn } from '@/lib/utils';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { authOptions } from '../api/auth/[...nextauth]/auth';

const Home = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div>
      <h1 className='text-4xl'>Home</h1>
      <Link className={cn(buttonVariants(), 'bg-slate-700')} href={'/admin'}>
        Admin Bereich
      </Link>
      <h2>Client Session</h2>
      <User />
      <h2>Server Session</h2>
      {JSON.stringify(session)}
    </div>
  );
};
export default Home;
