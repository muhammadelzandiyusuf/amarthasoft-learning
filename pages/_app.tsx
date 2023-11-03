import { type ReactElement, type ReactNode } from 'react';

import type { AppProps } from 'next/app';
import type { NextPage } from 'next/types';
import { Provider } from 'react-redux';

import { wrapper } from '@/store/store';
import globalStyle from '@/utils/styles/globalStyle';

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode;
};

function MyApp({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { pageProps } = props;
  const getLayout = (Component as NextPageWithLayout).getLayout || ((page: ReactNode) => page);
  globalStyle();

  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>,
  );
}
export default MyApp;
