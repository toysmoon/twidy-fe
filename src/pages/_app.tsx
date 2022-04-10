import ThemeUpdater from 'features/settings/components/ThemeUpdater';
import { GetServerSidePropsContext, NextPageContext } from 'next';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import 'normalize.css';
import React, { useCallback, useEffect } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MutableSnapshot, RecoilRoot } from 'recoil';
import Boundary from 'shared/components/Boundary';
import GlobalTweet from 'shared/components/GlobalTweet';
import GoogleForm from 'shared/components/GoogleForm';
import Toast from 'shared/components/Toast';
import { themeState } from 'shared/states/themeState';
import 'shared/styles/global.css';
import { parseCookie } from 'shared/utils/cookie';
import 'tailwindcss/tailwind.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
      suspense: true,
      useErrorBoundary: true,
    },
  },
});

function Maeum({ Component, pageProps }: AppProps) {
  const { theme, ...nextPageProps }: { theme?: string } = pageProps ?? {};

  const initializeState = useCallback(
    ({ set }: MutableSnapshot): void => {
      set(themeState, theme ?? 'black');
    },
    [theme]
  );

  console.log('Maeum');

  return (
    <QueryClientProvider client={queryClient}>
      <TwidyMeta />
      <RecoilRoot initializeState={initializeState}>
        <Boundary pending={<div />} reject={ErrorFallback}>
          <Component {...nextPageProps} />
          <Boundary pending={<div />} reject={DefaultError}>
            <ThemeUpdater />
          </Boundary>
        </Boundary>
        <GlobalTweet />
        <Toast />
        <GoogleForm />
      </RecoilRoot>
    </QueryClientProvider>
  );
}

function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  const e = error as any;
  const router = useRouter();

  useEffect(() => {
    if (e.code === -100) {
      router.replace('/about');
      resetErrorBoundary();
    }
  }, [error]);

  return <div></div>;
}

function DefaultError() {
  return <div />;
}

function TwidyMeta() {
  return (
    <Head>
      <title>Twidy</title>
      <meta name="description" content="Tidy up your liked tweets!" />
      <meta property="og:title" content="Twidy" />
      <meta property="og:image" content="/images/og.png" key="image" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito:wght@800;900&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/variable/pretendardvariable.css"
      />
    </Head>
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

  const cookie = parseCookie(appContext.ctx.req.headers.cookie);
  appProps.pageProps.theme = cookie.theme;

  return { ...appProps };
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
