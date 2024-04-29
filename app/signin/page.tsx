import GoogleButton from '../components/GoogleButton';
import SigninForm from '../components/SigninForm';
import GithubButton from './../components/GithubButton';
import { Suspense } from 'react';

export default async function Signin() {
  return (
    <div className='w-full flex flex-col items-center justify-center py-8 '>
      <div className='flex flex-col items-center p-8 shadow-md bg-slate-200'>
        <h1 className='mt-5 mb-4 text-2xl font-bold'>Sign In</h1>
        <Suspense fallback={<p>Loading...</p>}>
          <GoogleButton />
          <GithubButton />
        </Suspense>
        <span className='text-xl font-semibold text-center mt-8'>Or</span>
        <SigninForm />
      </div>
    </div>
  );
}
