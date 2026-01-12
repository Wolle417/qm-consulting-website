import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';

const documents = [
  {
    name: 'CAPA SOP',
    description: 'Standard Operating Procedure mit klarer Prozesslogik, Verantwortlichkeiten und Eskalationsstufen.',
    format: 'Word (.docx)',
  },
  {
    name: 'CAPA Form',
    description: 'Strukturiertes Formular für die CAPA-Erfassung mit allen Pflichtfeldern nach ISO 13485 und FDA.',
    format: 'Word (.docx)',
  },
  {
    name: 'CAPA Tracking Log',
    description: 'Übersicht aller laufenden und abgeschlossenen CAPAs mit Status, Fristen und Verantwortlichen.',
    format: 'Excel (.xlsx)',
  },
  {
    name: 'Root Cause Analysis Toolkit',
    description: '5-Why Template, Ishikawa-Diagramm, Anleitung zur systematischen Ursachenanalyse.',
    format: 'Word (.docx) + Excel (.xlsx)',
  },
  {
    name: 'CAPA Quick Reference Card',
    description: 'Ein-Seiten-Übersicht für den Schreibtisch: Prozess, Fristen, Eskalation auf einen Blick.',
    format: 'PDF',
  },
  {
    name: 'Ausgefülltes Beispiel',
    description: 'Realistische Beispiel-CAPA durchgespielt – zeigt wie die Dokumente im Alltag funktionieren.',
    format: 'Word (.docx)',
  },
  {
    name: 'ReadMe & Implementierung',
    description: 'Anleitung zur Integration in Ihr bestehendes QM-System.',
    format: 'PDF',
  },
];

export default function CAPASystem() {
  return (
    <>
      <Head>
        <title>CAPA System Bundle | ISO 13485 & FDA konforme Templates | QCore</title>
        <meta name="description" content="Audit-fertiges CAPA-System für MedTech: SOP, Formulare, Tracking, Root Cause Toolkit. ISO 13485, FDA 21 CFR 820.100, EU MDR konform. €129." />
        <meta name="keywords" content="CAPA Template, CAPA SOP, ISO 13485 CAPA, FDA 21 CFR 820, CAPA System Medical Device, Corrective Action Preventive Action" />
        <meta property="og:title" content="CAPA System Bundle | QCore Consulting" />
        <meta property="og:description" content="7 Dokumente für ein audit-fertiges CAPA-System. ISO 13485, FDA, EU MDR konform." />
        <meta property="og:type" content="product" />
        <meta property="product:price:amount" content="129" />
        <meta property="product:price:currency" content="EUR" />
      </Head>
      
      {/* Gumroad Script für Overlay */}
      <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
      
      <Navigation />
      <main className="relative min-h-screen">
        {/* Breadcrumb */}
        <section className="relative pt-20 pb-2">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <nav className="text-sm" style={{ color: '#64748b' }}>
              <Link href="/produkte" className="hover:underline">Produkte</Link>
              <span className="mx-2">→</span>
              <span style={{ color: '#1e293b' }}>CAPA System Bundle</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative pt-4 pb-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Left: Info */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded text-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}>ISO 13485</span>
                  <span className="px-3 py-1 rounded text-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}>FDA 21 CFR 820.100</span>
                  <span className="px-3 py-1 rounded text-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}>EU MDR</span>
                </div>
                
                <h1 
                  className="text-4xl md:text-5xl font-bold mb-4"
                  style={{
                    fontFamily: "'Cormorant', serif",
                    color: '#1e293b',
                  }}
                >
                  CAPA System Bundle
                </h1>
                
                <p className="text-xl mb-6" style={{ color: '#475569' }}>
                  7 Dokumente für ein funktionierendes, audit-fertiges CAPA-System. 
                  Sofort einsetzbar, mit ausgefülltem Beispiel.
                </p>

                {/* Problem Statement */}
                <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6 rounded-r">
                  <p className="font-semibold mb-1" style={{ color: '#991b1b' }}>Das Problem:</p>
                  <p className="text-sm" style={{ color: '#7f1d1d' }}>
                    CAPA ist einer der Top-3 Audit Findings bei ISO 13485. Nicht weil QM-Teams ihre Arbeit nicht machen – 
                    sondern weil viele CAPA-Systeme so aufgebaut sind, dass sie im Alltag scheitern.
                  </p>
                </div>

                {/* Solution */}
                <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6 rounded-r">
                  <p className="font-semibold mb-1" style={{ color: '#166534' }}>Die Lösung:</p>
                  <p className="text-sm" style={{ color: '#15803d' }}>
                    Ein CAPA-System, das drei Dinge kann: Sofort nutzbar (ohne Schulung), Auditor überzeugen 
                    (Nachvollziehbarkeit), im echten Alltag funktionieren.
                  </p>
                </div>
              </div>

              {/* Right: Buy Box */}
              <div className="lg:sticky lg:top-24">
                <div className="bg-white border-2 border-gray-200 rounded-lg p-6 shadow-lg">
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold" style={{ color: '#1e293b' }}>€129</span>
                    <span className="text-sm ml-2" style={{ color: '#64748b' }}>einmalig</span>
                  </div>

                  {/* Gumroad Button */}
                  <a 
                    href="https://qcore33.gumroad.com/l/capa-system"
                    className="gumroad-button block w-full text-center px-6 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90 mb-4"
                    style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}
                  >
                    Jetzt kaufen
                  </a>

                  <p className="text-xs text-center mb-6" style={{ color: '#64748b' }}>
                    Sichere Zahlung via Gumroad · Sofortiger Download
                  </p>

                  {/* What's included summary */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="font-semibold mb-3 text-sm" style={{ color: '#1e293b' }}>Im Bundle enthalten:</p>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center" style={{ color: '#334155' }}>
                        <span className="mr-2 text-green-600">✓</span>
                        7 Dokumente (Word, Excel, PDF)
                      </li>
                      <li className="flex items-center" style={{ color: '#334155' }}>
                        <span className="mr-2 text-green-600">✓</span>
                        Ausgefülltes Beispiel
                      </li>
                      <li className="flex items-center" style={{ color: '#334155' }}>
                        <span className="mr-2 text-green-600">✓</span>
                        Kostenlose Updates
                      </li>
                      <li className="flex items-center" style={{ color: '#334155' }}>
                        <span className="mr-2 text-green-600">✓</span>
                        Unternehmensweite Lizenz
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Documents Detail */}
        <section className="relative py-12">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h2 
              className="text-3xl font-bold mb-8"
              style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
            >
              Was ist enthalten?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <div 
                  key={index}
                  className="bg-qcore-navy bg-opacity-20 p-5 rounded-lg"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold" style={{ color: '#1e293b' }}>
                      {index + 1}. {doc.name}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded bg-gray-100" style={{ color: '#64748b' }}>
                      {doc.format}
                    </span>
                  </div>
                  <p className="text-sm" style={{ color: '#475569' }}>
                    {doc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why this bundle */}
        <section className="relative py-12">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h2 
              className="text-3xl font-bold mb-8"
              style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
            >
              Warum dieses Bundle?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white bg-opacity-60 p-6 rounded-lg">
                <div className="text-3xl mb-3">🎯</div>
                <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Praxiserprobt</h3>
                <p className="text-sm" style={{ color: '#475569' }}>
                  Entwickelt aus 17 Jahren QM-Erfahrung in regulierten Industrien. 
                  Nicht aus Lehrbüchern kopiert, sondern aus echten Audits gelernt.
                </p>
              </div>
              <div className="bg-white bg-opacity-60 p-6 rounded-lg">
                <div className="text-3xl mb-3">⚡</div>
                <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Sofort nutzbar</h3>
                <p className="text-sm" style={{ color: '#475569' }}>
                  Keine 2-Tages-Schulung nötig. Das ausgefüllte Beispiel zeigt genau, 
                  wie die Dokumente im Alltag funktionieren.
                </p>
              </div>
              <div className="bg-white bg-opacity-60 p-6 rounded-lg">
                <div className="text-3xl mb-3">✓</div>
                <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Audit-ready</h3>
                <p className="text-sm" style={{ color: '#475569' }}>
                  Erfüllt die Anforderungen von ISO 13485, FDA 21 CFR 820.100 und EU MDR. 
                  Mit ChatGPT Audit Score 25/25 bewertet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-12">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h2 
              className="text-3xl font-bold mb-8"
              style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
            >
              Häufige Fragen
            </h2>
            
            <div className="space-y-4 max-w-3xl">
              <div className="bg-white bg-opacity-60 p-5 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Kann ich die Templates anpassen?</h3>
                <p className="text-sm" style={{ color: '#475569' }}>
                  Ja, alle Dokumente sind in Word und Excel – vollständig editierbar. 
                  Logo, Begriffe, Prozessschritte können Sie an Ihr Unternehmen anpassen.
                </p>
              </div>
              <div className="bg-white bg-opacity-60 p-5 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Für welche Unternehmensgröße ist das Bundle geeignet?</h3>
                <p className="text-sm" style={{ color: '#475569' }}>
                  Primär für MedTech-Startups und KMU (10-200 Mitarbeiter), die ein strukturiertes 
                  CAPA-System aufbauen oder ihr bestehendes verbessern wollen.
                </p>
              </div>
              <div className="bg-white bg-opacity-60 p-5 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Ist die Sprache Englisch oder Deutsch?</h3>
                <p className="text-sm" style={{ color: '#475569' }}>
                  Die Dokumente sind auf Englisch – der Industriestandard für internationale 
                  Zertifizierungen und FDA-Submissions.
                </p>
              </div>
              <div className="bg-white bg-opacity-60 p-5 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Wie funktioniert die Zahlung?</h3>
                <p className="text-sm" style={{ color: '#475569' }}>
                  Die Zahlung läuft über Gumroad (Kreditkarte, PayPal). Nach der Zahlung 
                  erhalten Sie sofort den Download-Link per E-Mail.
                </p>
              </div>
              <div className="bg-white bg-opacity-60 p-5 rounded-lg">
                <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Gibt es Support bei Fragen?</h3>
                <p className="text-sm" style={{ color: '#475569' }}>
                  Ja, bei Fragen zur Implementierung können Sie mich per E-Mail kontaktieren. 
                  Für umfangreichere Anpassungen biete ich auch Beratung an.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-12 pb-16">
          <div className="relative z-10 max-w-[90%] mx-auto px-8 text-center">
            <h2 
              className="text-2xl font-bold mb-4"
              style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
            >
              Bereit für ein CAPA-System, das funktioniert?
            </h2>
            <p className="text-lg mb-6 max-w-2xl mx-auto" style={{ color: '#475569' }}>
              €129 für ein audit-fertiges System, das Ihnen Wochen an Entwicklungszeit spart.
            </p>
            <a 
              href="https://qcore33.gumroad.com/l/capa-system"
              className="gumroad-button inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}
            >
              Jetzt kaufen – €129
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
