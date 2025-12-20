import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QMWissenSidebar from '../components/QMWissenSidebar';
import EUMDRArticle from '../components/articles/EUMDRArticle';

export default function EUMDRArtikel() {
  return (
    <>
      <Head>
        <title>EU-MDR Grundlagen: Medical Device Regulation erklärt | QCore Consulting</title>
        <meta name="description" content="EU-MDR (Medical Device Regulation 2017/745) vollständig erklärt: Klassifizierung, technische Dokumentation, klinische Bewertung, PMS, UDI, EUDAMED und Übergangsfristen für Medizinprodukte-Hersteller." />
      </Head>

      <Navigation />

      <main className="min-h-screen pt-20">
        <div className="flex">
          {/* Sidebar */}
          <QMWissenSidebar currentArticle="eu-mdr" />

          {/* Content */}
          <div className="flex-1 px-8 py-6 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/qm-wissen" className="hover:text-qcore-blue">QM-Wissen</Link>
              <span className="mx-2">›</span>
              <Link href="/qm-wissen#branchen" className="hover:text-qcore-blue">Branchenspezifisch</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">EU-MDR Grundlagen</span>
            </nav>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-dark-navy">
                EU-MDR Grundlagen
              </h1>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span>14 Min Lesezeit</span>
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
            <EUMDRArticle />

            {/* Navigation between articles */}
            <div className="flex justify-between mt-12 pt-6 border-t border-gray-300">
              <Link
                href="/audit-vorbereitung"
                className="flex items-center text-qcore-blue hover:underline"
              >
                <span className="mr-2">←</span>
                Vorheriger: Audit-Vorbereitung
              </Link>
              <Link
                href="/iso-13485"
                className="flex items-center text-qcore-blue hover:underline"
              >
                Nächster: ISO 13485
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
