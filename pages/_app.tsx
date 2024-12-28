import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import 'katex/dist/katex.min.css'; // Estilos de KaTeX

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout><Component {...pageProps} /></Layout>
  );
}
