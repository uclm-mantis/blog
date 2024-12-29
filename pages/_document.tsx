import { Html, Head, Main, NextScript } from 'next/document';
import config from '../next.config';

const basePath = config.basePath || '';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href={`${basePath}/favicon.ico`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
