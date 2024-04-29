'use client';

import { SessionProvider } from 'next-auth/react';
import { ProviderProps } from '../../types';

const Providers = ({ children }: ProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default Providers;
