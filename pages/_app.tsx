import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import "./globals.css";
import "katex/dist/katex.min.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout><Component {...pageProps} /></Layout>
  );
}
