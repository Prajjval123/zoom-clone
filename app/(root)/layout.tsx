import { ReactNode } from 'react';

import StreamVideoProvider from '@/provider/StreamClientProvider';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Loom",
  description: "Video calling App",
  icons: {
    icon: '/icons/logo.svg'
  }
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => {
  return (
    <main>
      <StreamVideoProvider>{children}</StreamVideoProvider>
    </main>
  );
};

export default RootLayout;