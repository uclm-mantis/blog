import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import "katex/dist/katex.min.css";
import "./globals.css";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentSlug = router.pathname.split('/')[1] || '';

  return (
    <Layout sections={pageProps.sections || []} currentSlug={currentSlug}>
      <Component {...pageProps} />
    </Layout>
  );
}
