import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';

const products = [
  {
    id: 'capa-system',
    title: 'CAPA System Bundle',
    subtitle: '7 Dokumente für ein audit-fertiges CAPA-System',
    description: 'Alles was Sie für ein funktionierendes CAPA-System brauchen: SOP, Formulare, Tracking, Root Cause Toolkit – sofort einsatzbereit.',
    price: '€129',
    badges: ['ISO 13485', 'FDA 820.100', 'EU MDR'],
    highlights: [
      'SOP mit klarer Prozesslogik',
      'CAPA-Formular mit Eskalationsstufen',
      'Root Cause Analysis Toolkit (5-Why, Ishikawa)',
      'Tracking Log für Übersicht',
      'Ausgefülltes Beispiel inklusive',
      'Quick Reference Card',
    ],
    href: '/produkte/capa-system',
    available: true,
  },
  {
    id: 'nc-system',
    title: 'Nonconformity System Bundle',
    subtitle: 'Strukturiertes Abweichungsmanagement',
    description: 'NC-Erfassung, Bewertung, Eskalation zu CAPA – nahtlos integriert.',
    price: '€99',
    badges: ['ISO 13485', 'GMP'],
    highlights: [
      'NC-Formular mit Klassifizierung',
      'Bewertungsmatrix',
      'Eskalationslogik zu CAPA',
      'Tracking & Reporting',
    ],
    href: '/produkte/nc-system',
    available: false,
    comingSoon: true,
  },
  {
    id: 'audit-prep',
    title: 'Audit Preparation Kit',
    subtitle: 'Vorbereitet ins Audit',
    description: 'Checklisten, typische Fragen, Dokumenten-Review-Guide.',
    price: '€79',
    badges: ['ISO 13485', 'ISO 9001'],
    highlights: [
      'Pre-Audit Checkliste',
      'Typische Auditfragen & Antworten',
      'Dokumenten-Review-Template',
      'Mock-Audit Guide',
    ],
    href: '/produkte/audit-prep',
    available: false,
    comingSoon: true,
  },
];

export default function Produkte() {
  return (
    <>
      <Head>
        <title>QM-Produkte & Templates | QCore Consulting</title>
        <meta name="description" content="Audit-fertige QM-Templates für MedTech und Pharma. CAPA-System, NC-Management, Audit-Vorbereitung. ISO 13485, FDA, EU MDR konform." />
        <meta name="keywords" content="CAPA Template, ISO 13485, FDA 21 CFR 820, QM Templates, MedTech, Medical Device" />
      </Head>
      <Navigation />
      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                fontFamily: "'Cormorant', serif",
                color: '#1e293b',
              }}
            >
              Produkte
            </h1>
            <p className="text-xl max-w-3xl" style={{ color: '#475569' }}>
              Audit-fertige QM-Templates – durchdacht, praxiserprobt, sofort einsetzbar.
            </p>
          </div>
        </section>

        {/* Value Proposition */}
        <section className="relative py-6">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="bg-qcore-navy bg-opacity-20 p-6 rounded-lg">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl mb-2">⏱️</div>
                  <h3 className="font-semibold mb-1" style={{ color: '#1e293b' }}>Sofort einsatzbereit</h3>
                  <p className="text-sm" style={{ color: '#475569' }}>Keine 2-Tages-Schulung nötig</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">✓</div>
                  <h3 className="font-semibold mb-1" style={{ color: '#1e293b' }}>Audit-ready</h3>
                  <p className="text-sm" style={{ color: '#475569' }}>Erfüllt ISO 13485, FDA, EU MDR Anforderungen</p>
                </div>
                <div>
                  <div className="text-2xl mb-2">📋</div>
                  <h3 className="font-semibold mb-1" style={{ color: '#1e293b' }}>Mit Beispiel</h3>
                  <p className="text-sm" style={{ color: '#475569' }}>Ausgefüllte Muster zeigen die Anwendung</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="relative py-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className={`bg-qcore-navy bg-opacity-30 hover:bg-opacity-45 transition-all duration-300 p-6 rounded-lg flex flex-col ${product.comingSoon ? 'opacity-60' : ''}`}
                >
                  {/* Header */}
                  <div className="mb-4">
                    <div className="flex items-start justify-between mb-2">
                      <h2 
                        className="text-xl font-bold"
                        style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
                      >
                        {product.title}
                      </h2>
                      {product.comingSoon && (
                        <span className="px-2 py-1 text-xs rounded bg-yellow-100 text-yellow-800">
                          Bald
                        </span>
                      )}
                    </div>
                    <p className="text-sm mb-3" style={{ color: '#475569' }}>
                      {product.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.badges.map((badge) => (
                        <span 
                          key={badge}
                          className="px-2 py-0.5 rounded text-xs"
                          style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm mb-4 flex-grow" style={{ color: '#334155' }}>
                    {product.description}
                  </p>

                  {/* Highlights */}
                  <ul className="text-sm mb-4 space-y-1">
                    {product.highlights.slice(0, 4).map((highlight, i) => (
                      <li key={i} className="flex items-start" style={{ color: '#334155' }}>
                        <span className="mr-2 text-green-600">✓</span>
                        {highlight}
                      </li>
                    ))}
                    {product.highlights.length > 4 && (
                      <li className="text-sm" style={{ color: '#64748b' }}>
                        + {product.highlights.length - 4} weitere...
                      </li>
                    )}
                  </ul>

                  {/* Price & CTA */}
                  <div className="mt-auto pt-4 border-t border-gray-300">
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-2xl font-bold"
                        style={{ color: '#1e293b' }}
                      >
                        {product.price}
                      </span>
                      {product.available ? (
                        <Link
                          href={product.href}
                          className="px-4 py-2 rounded text-sm font-semibold transition-all hover:opacity-90"
                          style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}
                        >
                          Details →
                        </Link>
                      ) : (
                        <span className="px-4 py-2 rounded text-sm text-gray-500 bg-gray-200 cursor-not-allowed">
                          Bald verfügbar
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="relative py-12">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="bg-white bg-opacity-60 p-8 rounded-lg">
              <h2 
                className="text-2xl font-bold mb-6"
                style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
              >
                Häufige Fragen
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>In welchem Format sind die Templates?</h3>
                  <p className="text-sm" style={{ color: '#475569' }}>Word (.docx) und Excel (.xlsx) – editierbar, kein PDF-Ausfüllen.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Kann ich die Templates an mein Unternehmen anpassen?</h3>
                  <p className="text-sm" style={{ color: '#475569' }}>Ja, alle Dokumente sind zur Anpassung gedacht. Logo, Prozesse, Begriffe – alles editierbar.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Sind Updates inklusive?</h3>
                  <p className="text-sm" style={{ color: '#475569' }}>Ja, bei regulatorischen Änderungen erhalten Sie kostenlose Updates.</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Für wie viele Nutzer gilt die Lizenz?</h3>
                  <p className="text-sm" style={{ color: '#475569' }}>Eine Lizenz gilt für ein Unternehmen – unbegrenzte interne Nutzung.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-8 pb-16">
          <div className="relative z-10 max-w-[90%] mx-auto px-8 text-center">
            <p className="text-lg mb-4" style={{ color: '#475569' }}>
              Sie brauchen ein anderes Template oder eine individuelle Anpassung?
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-6 py-3 rounded text-sm font-semibold transition-all border-2 hover:bg-opacity-10"
              style={{ borderColor: '#1e3a8a', color: '#1e3a8a' }}
            >
              Anfrage stellen
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
