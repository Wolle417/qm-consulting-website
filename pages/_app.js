import '../styles/globals.css';
import NetworkBackground from '../components/NetworkBackground';
import { Analytics } from '@vercel/analytics/react';
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* MailerLite Universal */}
      <Script id="mailerlite-universal" strategy="afterInteractive">
        {`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '2045707');
        `}
      </Script>
      
      <NetworkBackground />
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
