import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '@/utils/styles/stitches.config';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
          <link rel='preconnect' href='https://fonts.googleapis.com' />
          <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
          <link
            href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700;900&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
