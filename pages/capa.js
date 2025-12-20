import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QMWissenSidebar from '../components/QMWissenSidebar';
import CAPAArticle from '../components/articles/CAPAArticle';

export default function CAPAArtikel() {
  return (
    <>
      <Head>
        <title>CAPA richtig umsetzen: Korrektur- und Vorbeugemaßnahmen | QCore Consulting</title>
        <meta name="description" content="CAPA-Prozess Schritt für Schritt erklärt: Von der Fehlererfassung bis zur Wirksamkeitsprüfung. Praktische Anleitung für ISO 9001, ISO 13485 und FDA-Compliance." />
      </Head>

      <Navigation />

      <main className="min-h-screen pt-20">
        <div className="flex">
          {/* Sidebar */}
          <QMWissenSidebar currentArticle="capa" />

          {/* Content */}
          <div className="flex-1 px-8 py-6 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/qm-wissen" className="hover:text-qcore-blue">QM-Wissen</Link>
              <span className="mx-2">›</span>
              <Link href="/qm-wissen#methoden" className="hover:text-qcore-blue">Methoden</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">CAPA richtig umsetzen</span>
            </nav>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-dark-navy">
                CAPA richtig umsetzen
              </h1>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span>11 Min Lesezeit</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  <span>Fortgeschritten</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <CAPAArticle />

            {/* Navigation between articles */}
            <div className="flex justify-between mt-12 pt-6 border-t border-gray-300">
              <Link
                href="/root-cause-analysis"
                className="flex items-center text-qcore-blue hover:underline"
              >
                <span className="mr-2">←</span>
                Vorheriger: Root Cause Analysis
              </Link>
              <Link
                href="/qm-wissen"
                className="flex items-center text-qcore-blue hover:underline"
              >
                Nächster: Audit-Vorbereitung
                <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
