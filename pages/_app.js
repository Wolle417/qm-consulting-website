import '../styles/globals.css';
import NetworkBackground from '../components/NetworkBackground';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NetworkBackground />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
