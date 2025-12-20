import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QMWissenSidebar from '../components/QMWissenSidebar';
import RootCauseArticle from '../components/articles/RootCauseArticle';

export default function RootCauseAnalysisArtikel() {
  return (
    <>
      <Head>
        <title>Root Cause Analysis: 5-Why und Ishikawa erklärt | QCore Consulting</title>
        <meta name="description" content="Root Cause Analysis einfach erklärt: 5-Why-Methode, Ishikawa-Diagramm und systematische Ursachenanalyse. Praktische Anleitung mit Beispielen aus der Industrie." />
      </Head>

      <Navigation />

      <main className="min-h-screen pt-20">
        <div className="flex">
          {/* Sidebar */}
          <QMWissenSidebar currentArticle="root-cause" />

          {/* Content */}
          <div className="flex-1 px-8 py-6 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/qm-wissen" className="hover:text-qcore-blue">QM-Wissen</Link>
              <span className="mx-2">›</span>
              <Link href="/qm-wissen#methoden" className="hover:text-qcore-blue">Methoden</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">Root Cause Analysis</span>
            </nav>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-dark-navy">
                Root Cause Analysis: Ursachen systematisch finden
              </h1>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span>10 Min Lesezeit</span>
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
            <RootCauseArticle />

            {/* Navigation between articles */}
            <div className="flex justify-between mt-12 pt-6 border-t border-gray-300">
              <Link
                href="/fmea"
                className="flex items-center text-qcore-blue hover:underline"
              >
                <span className="mr-2">←</span>
                Vorheriger: FMEA Grundlagen
              </Link>
              <Link
                href="/qm-wissen"
                className="flex items-center text-qcore-blue hover:underline"
              >
                Nächster: CAPA umsetzen
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
