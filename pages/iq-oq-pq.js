import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QMWissenSidebar from '../components/QMWissenSidebar';
import IQOQPQArticle from '../components/articles/IQOQPQArticle';

export default function IQOQPQArtikel() {
  return (
    <>
      <Head>
        <title>IQ/OQ/PQ erklärt: Qualifizierung von Anlagen und Prozessen | QCore Consulting</title>
        <meta name="description" content="IQ, OQ, PQ einfach erklärt: Installations-, Funktions- und Leistungsqualifizierung für Anlagen und Prozesse. Praktische Anleitung mit Beispielen für Pharma und MedTech." />
      </Head>

      <Navigation />

      <main className="min-h-screen pt-20">
        <div className="flex">
          {/* Sidebar */}
          <QMWissenSidebar currentArticle="iq-oq-pq" />

          {/* Content */}
          <div className="flex-1 px-8 py-6 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/qm-wissen" className="hover:text-qcore-blue">QM-Wissen</Link>
              <span className="mx-2">›</span>
              <Link href="/qm-wissen#validation" className="hover:text-qcore-blue">Validation</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">IQ/OQ/PQ erklärt</span>
            </nav>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-dark-navy">
                IQ/OQ/PQ erklärt
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
            <IQOQPQArticle />

            {/* Navigation between articles */}
            <div className="flex justify-between mt-12 pt-6 border-t border-gray-300">
              <Link
                href="/eu-mdr"
                className="flex items-center text-qcore-blue hover:underline"
              >
                <span className="mr-2">←</span>
                Vorheriger: EU-MDR Grundlagen
              </Link>
              <Link
                href="/csv"
                className="flex items-center text-qcore-blue hover:underline"
              >
                Nächster: Computer System Validation
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
