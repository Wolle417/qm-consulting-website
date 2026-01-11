import '../styles/globals.css';
import NetworkBackground from '../components/NetworkBackground';
import { Analytics } from '@vercel/analytics/next';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NetworkBackground />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
