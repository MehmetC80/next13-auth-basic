import { authOptions } from '@/app/api/auth/[...nextauth]/auth';
import { getServerSession } from 'next-auth';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);

  if (session?.user) {
    return (
      <h2 className='text-2xl'>
        Admin Bereich- Willkommen zurück {session?.user.name}
      </h2>
    );
  }

  return <div>Du musst eingeloggt sein um in diesen Bereich zu gelangen </div>;
};
export default AdminPage;
