import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';

export default function NCTriage() {
  const { locale } = useRouter();
  const isDE = locale === 'de';

  return (
    <>
      <Head>
        <title>{isDE ? 'NC-Triage Tool — CAPA oder Korrektur? | QCore' : 'NC-Triage Tool — CAPA or Correction? | QCore'}</title>
        <meta name="description" content={isDE
          ? 'Kostenloser NC-Triage + Justifier: In unter 3 Minuten zur audit-sicheren Begründung. MedTech (ISO 13485) & Pharma (EU-GMP).'
          : 'Free NC-Triage + Justifier: Get an audit-safe justification in under 3 minutes. MedTech (ISO 13485) & Pharma (EU-GMP).'
        } />
        <link rel="canonical" href={`https://qcore-consulting.de/${locale === 'en' ? 'en/' : ''}nc-triage`} />
      </Head>

      {/* Gradient background matching Stichprobenrechner */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)' }} />
      </div>

      <Navigation />

      <main className="relative min-h-screen">
        <div className="pt-20">
          <iframe
            key={locale}
            src={`/nc-triage-tool/index.html?lang=${locale === 'en' ? 'en' : 'de'}`}
            title="NC-Triage + Justifier"
            className="w-full border-0"
            style={{
              height: 'calc(100vh - 5rem)',
              minHeight: '700px',
              background: 'transparent',
            }}
            allow="clipboard-write"
          />
        </div>
      </main>
    </>
  );
}
