import Head from 'next/head';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { themeState } from 'shared/states/themeState';

interface ContainerProps {
  children: React.ReactNode;
  color?: string;
}

export default function Container({ children, color }: ContainerProps) {
  const theme = useRecoilValue(themeState);

  return (
    <div className="h-full max-w-xl my-0 mx-auto box-border bg-transparent ">
      {children}
      <Head>
        <meta name="theme-color" content={themeColor[color ?? theme]} />
      </Head>
      <style jsx global>{`
        html,
        body {
          background-color: ${themeColor[color ?? theme]};
          --colors-primary: ${themeColor[color ?? theme]};
        }
      `}</style>
    </div>
  );
}

const themeColor: Record<string, string> = {
  black: '#000000',
  violet: '#745aff',
  twitter: '#1da1f2',
  mint: '#00c2b7',
  orange: '#ff9f1c',
  heart: '#ff508f',
  yellow: '#ffdc23',
};
