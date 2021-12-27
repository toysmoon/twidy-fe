import getSetting from 'features/users/api/getSetting';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import 'normalize.css';
import React, { useCallback } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import getUser from 'shared/api/auth/getUser';
import { User } from 'shared/api/types';
import Toast from 'shared/components/Toast';
import Dim from 'shared/components/Dim';
import GlobalTweet from 'shared/components/GlobalTweet';
import { userState } from 'shared/states/userState';
import 'shared/styles/global.css';
import 'tailwindcss/tailwind.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { retry: false, refetchOnWindowFocus: false, suspense: true },
  },
});

function Maeum({ Component, pageProps }: AppProps) {
  const { user, ...nextPageProps }: { user?: User } = pageProps ?? {};

  const initializeState = useCallback(
    ({ set }: MutableSnapshot): void => {
      set(userState, user ?? null);
    },
    [user]
  );

  return (
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Twidy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <RecoilRoot initializeState={initializeState}>
        <Component {...nextPageProps} />
        <GlobalTweet />
        <Toast />
        <Dim />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

const noLoginPages = ['/about', '/_error', '/[userName]', '/thumbnail'];
Maeum.getInitialProps = async (appContext: AppContext) => {
  const { ctx } = appContext;
  const { pathname } = ctx;
  const isNeedToLoginPage = noLoginPages
    .map((url) => pathname.includes(url))
    .every((isInclude) => !isInclude);

  const appProps = await App.getInitialProps(appContext);
  if (!appContext.ctx.req || !isNeedToLoginPage) {
    return { ...appProps };
  }

  try {
    const user = await getUser(ctx);
    const setting = await getSetting(user.userId);

    appProps.pageProps.user = { ...user, setting };

    return { ...appProps };
  } catch (e) {
    redirectUser(ctx, '/about');
    return {};
  }
};

export function redirectUser(
  ctx: NextPageContext | GetServerSidePropsContext,
  location: string
) {
  try {
    if (ctx.req) {
      ctx.res?.writeHead(302, { Location: location });
      ctx.res?.end();
    } else {
      Router.push(location);
    }
  } catch (e) {
    console.error(e);
  }
}

export default Maeum;
