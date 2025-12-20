import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QMWissenSidebar from '../components/QMWissenSidebar';
import AuditVorbereitungArticle from '../components/articles/AuditVorbereitungArticle';

export default function AuditVorbereitungArtikel() {
  return (
    <>
      <Head>
        <title>Audit-Vorbereitung: Checkliste und Tipps | QCore Consulting</title>
        <meta name="description" content="Audit-Vorbereitung leicht gemacht: Checkliste, typische Fragen und praktische Tipps für interne Audits, Lieferantenaudits und Zertifizierungsaudits nach ISO 9001 und ISO 13485." />
      </Head>

      <Navigation />

      <main className="min-h-screen pt-20">
        <div className="flex">
          {/* Sidebar */}
          <QMWissenSidebar currentArticle="audit-vorbereitung" />

          {/* Content */}
          <div className="flex-1 px-8 py-6 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/qm-wissen" className="hover:text-qcore-blue">QM-Wissen</Link>
              <span className="mx-2">›</span>
              <Link href="/qm-wissen#methoden" className="hover:text-qcore-blue">Methoden</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">Audit-Vorbereitung</span>
            </nav>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-dark-navy">
                Audit-Vorbereitung
              </h1>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span>12 Min Lesezeit</span>
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
            <AuditVorbereitungArticle />

            {/* Navigation between articles */}
            <div className="flex justify-between mt-12 pt-6 border-t border-gray-300">
              <Link
                href="/capa"
                className="flex items-center text-qcore-blue hover:underline"
              >
                <span className="mr-2">←</span>
                Vorheriger: CAPA umsetzen
              </Link>
              <Link
                href="/qm-wissen"
                className="flex items-center text-qcore-blue hover:underline"
              >
                QM-Wissen Übersicht
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
