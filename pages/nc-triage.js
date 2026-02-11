import Head from 'next/head';
import Navigation from '../components/Navigation';
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
      </Head>
      <Navigation />
      <main className="relative min-h-screen bg-gray-50">
        <div className="pt-20">
          <iframe
            src="/nc-triage-tool/index.html"
            title="NC-Triage + Justifier"
            className="w-full border-0"
            style={{ height: 'calc(100vh - 5rem)', minHeight: '700px' }}
            allow="clipboard-write"
          />
        </div>
      </main>
    </>
  );
}
