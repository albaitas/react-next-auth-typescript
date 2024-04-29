import { authConfig } from '../config/auth';
import { getServerSession } from 'next-auth';

export const metadata = {
  title: 'Profile page'
};

export default async function Profile() {
  const session = await getServerSession(authConfig);

  return (
    <div className='container'>
      <p className='text-2xl font-medium text-center'>Profile of {session?.user?.name}</p>
    </div>
  );
}
