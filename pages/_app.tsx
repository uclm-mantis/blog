import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import "katex/dist/katex.min.css";
import "./globals.css";

export default function App({ Component, pageProps }: AppProps) {
  //console.log('App', JSON.stringify(pageProps));
  return (
    <Layout sections={pageProps.sections || []} currentSection={pageProps.currentSection}>
      <Component {...pageProps} />
    </Layout>
  );
}
