'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const GoogleButton = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/profile';

  return (
    <button
      className='w-full flex items-center font-semibold justify-center rounded-md h-14 px-6 mt-4 text-xl transition-colors duration-300 bg-indigo-600  text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      onClick={() => signIn('google', { callbackUrl })}
    >
      Sign in with Google
    </button>
  );
};
export default GoogleButton;
