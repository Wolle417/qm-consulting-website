import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QMWissenSidebar from '../components/QMWissenSidebar';
import ProcessValidationArticle from '../components/articles/ProcessValidationArticle';

export default function ProcessValidationArtikel() {
  return (
    <>
      <Head>
        <title>Process Validation: Prozessvalidierung nach FDA und GMP | QCore Consulting</title>
        <meta name="description" content="Prozessvalidierung einfach erklärt: Die drei Phasen nach FDA Guidance, EU GMP Annex 15 und ISO 13485. Praktische Anleitung mit Beispielen für Pharma und MedTech." />
      </Head>

      <Navigation />

      <main className="min-h-screen pt-20">
        <div className="flex">
          {/* Sidebar */}
          <QMWissenSidebar currentArticle="process-validation" />

          {/* Content */}
          <div className="flex-1 px-8 py-6 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/qm-wissen" className="hover:text-qcore-blue">QM-Wissen</Link>
              <span className="mx-2">›</span>
              <Link href="/qm-wissen#validation" className="hover:text-qcore-blue">Validation</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">Process Validation</span>
            </nav>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-dark-navy">
                Process Validation
              </h1>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span>13 Min Lesezeit</span>
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
            <ProcessValidationArticle />

            {/* Navigation between articles */}
            <div className="flex justify-between mt-12 pt-6 border-t border-gray-300">
              <Link
                href="/iq-oq-pq"
                className="flex items-center text-qcore-blue hover:underline"
              >
                <span className="mr-2">←</span>
                Vorheriger: IQ/OQ/PQ erklärt
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
