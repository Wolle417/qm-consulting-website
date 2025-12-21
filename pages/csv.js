import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QMWissenSidebar from '../components/QMWissenSidebar';
import CSVArticle from '../components/articles/CSVArticle';

export default function CSVArtikel() {
  return (
    <>
      <Head>
        <title>Computer System Validation (CSV): GAMP 5 und 21 CFR Part 11 | QCore Consulting</title>
        <meta name="description" content="Computer System Validation einfach erklärt: GAMP 5 Kategorien, 21 CFR Part 11, EU GMP Annex 11. Praktische Anleitung zur Validierung von Software und IT-Systemen in Pharma und MedTech." />
      </Head>

      <Navigation />

      <main className="min-h-screen pt-20">
        <div className="flex">
          {/* Sidebar */}
          <QMWissenSidebar currentArticle="csv" />

          {/* Content */}
          <div className="flex-1 px-8 py-6 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/qm-wissen" className="hover:text-qcore-blue">QM-Wissen</Link>
              <span className="mx-2">›</span>
              <Link href="/qm-wissen#validation" className="hover:text-qcore-blue">Validation</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">Computer System Validation</span>
            </nav>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-dark-navy">
                Computer System Validation
              </h1>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span>14 Min Lesezeit</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span>Fortgeschritten</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <CSVArticle />

            {/* Navigation between articles */}
            <div className="flex justify-between mt-12 pt-6 border-t border-gray-300">
              <Link
                href="/process-validation"
                className="flex items-center text-qcore-blue hover:underline"
              >
                <span className="mr-2">←</span>
                Vorheriger: Process Validation
              </Link>
              <div className="text-gray-400">
                {/* Placeholder for next article */}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
