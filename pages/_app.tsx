import { type ReactElement, type ReactNode } from 'react';

import type { AppProps } from 'next/app';
import type { NextPage } from 'next/types';

import globalStyle from '@/utils/styles/globalStyle';

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

function MyApp({ Component, pageProps }: AppProps) {
  const getLayout = (Component as NextPageWithLayout).getLayout || ((page: ReactNode) => page);
  globalStyle();

  return getLayout(<Component {...pageProps} />);
}
export default MyApp;
