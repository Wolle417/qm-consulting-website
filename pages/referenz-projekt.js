import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

// Dokument-Daten
const documents = [
  {
    id: 'qm-001',
    number: 'QM-001',
    title: 'Quality Manual',
    pages: 36,
    description: 'Vollständiges QMS nach ICH Q7 / EU GMP. Organisation, Dokumentation, Personal, Produktion, QC, Validation, CAPA, Change Control.',
    highlights: ['ICH Q7 konform', 'EU GMP Annex 1', '20 Kapitel'],
    folder: '01_Quality_Manual',
    filename: 'QM-001_Quality_Manual_v1.1',
  },
  {
    id: 'mvp-001',
    number: 'MVP-001',
    title: 'Master Validation Plan',
    pages: 22,
    description: 'Validierungsstrategie für Equipment, Utilities, Prozess, Cleaning, analytische Methoden und CSV. Inkl. 12-Monats-Timeline.',
    highlights: ['Equipment Qualification', 'Process Validation', 'CSV-Strategie'],
    folder: '02_Master_Validation_Plan',
    filename: 'MVP-001_Master_Validation_Plan_v1.0',
  },
  {
    id: 'pvp-fam-001',
    number: 'PVP-FAM-001',
    title: 'Process Validation Protocol',
    pages: 25,
    description: 'Prospektive Validierung des Fampridin-Syntheseprozesses. 6 Herstellungsschritte, 9 CPPs, 5 IPCs, 8 CQAs.',
    highlights: ['6 Prozessschritte', '3 Chargen', 'Statistische Auswertung'],
    folder: '04_Process_Validation',
    filename: 'PVP-FAM-001_Process_Validation_Protocol_Fampridin_v1.0',
  },
  {
    id: 'amv-hplc-001',
    number: 'AMV-HPLC-001',
    title: 'Analytical Method Validation',
    pages: 18,
    description: 'Validierung einer HPLC-Methode für Assay und Impurities gemäß ICH Q2(R1). Specificity, Linearity, Accuracy, Precision.',
    highlights: ['ICH Q2(R1)', 'Forced Degradation', 'LOD/LOQ'],
    folder: '05_Analytical_Method_Validation',
    filename: 'AMV-HPLC-001_Analytical_Method_Validation_HPLC_Fampridin_v1.0',
  },
  {
    id: 'capa-2025-001',
    number: 'CAPA-2025-001',
    title: 'CAPA Report',
    pages: 15,
    description: 'Beispiel-Deviation (HVAC-Druckabweichung) mit vollständiger Root Cause Analysis, Corrective & Preventive Actions.',
    highlights: ['5-Why Analyse', 'Ishikawa', 'Effectiveness Check'],
    folder: '06_CAPA_Report',
    filename: 'CAPA-2025-001_HVAC_Overpressure_Deviation_v1.0',
  },
  {
    id: 'dmf-fam-001',
    number: 'DMF-FAM-001',
    title: 'Drug Master File (CTD 3.2.S)',
    pages: 28,
    description: 'Module 3.2.S für PMDA-Submission: Herstellung, Charakterisierung, Spezifikation, Stabilität, Validierung.',
    highlights: ['CTD-Format', 'PMDA Japan', '7 Sub-Sections'],
    folder: '07_DMF_Drug_Master_File',
    filename: 'DMF-FAM-001_Module_3.2.S_Fampridin_v1.0',
  },
  {
    id: 'reg-proc-001',
    number: 'REG-PROC-001',
    title: 'Regulatory Process Flowchart',
    pages: 2,
    description: 'Übersicht des regulatorischen Gesamtprozesses in fünf Phasen mit ca. 70 identifizierten Dokumenten.',
    highlights: ['5 Phasen', '~70 Dokumente', 'Roadmap'],
    folder: '03_Regulatory_Process_Overview',
    filename: 'REG-PROC-001_Regulatory_Process_API_Export_Japan_Fampridin_v1.0',
  },
];

// Statistiken
const stats = [
  { value: '7', label: 'GMP-Dokumente' },
  { value: '150+', label: 'Seiten' },
  { value: '~1', label: 'Woche Erstellung' },
  { value: '4', label: 'Augen-Prinzip' },
];

export default function ReferenzProjekt() {
  const [expandedDoc, setExpandedDoc] = useState(null);

  return (
    <>
      <Navigation />
      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-0">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="mb-8">
              <span 
                className="inline-block px-4 py-1 rounded-full text-sm mb-4"
                style={{ 
                  backgroundColor: 'rgba(30, 58, 138, 0.15)',
                  color: '#1e3a8a',
                  fontFamily: "'Inter', sans-serif",
                }}
              >
                Praxisbeispiel
              </span>
              <h1 
                className="text-4xl md:text-5xl font-bold mb-4"
                style={{
                  fontFamily: "'Cormorant', serif",
                  color: '#1e293b',
                }}
              >
                GMP-Dokumentation: <span style={{ color: '#1e3a8a' }}>In Tagen statt Monaten</span>
              </h1>
              <p className="text-xl mt-4 max-w-4xl" style={{ color: '#475569' }}>
                Ein komplettes pharmazeutisches QM-Dokumentationspaket für API-Herstellung und Japan-Export –<br />
                systematisch erarbeitet und audit-fähig dokumentiert.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index}
                  className="bg-qcore-navy bg-opacity-20 hover:bg-opacity-35 transition-all duration-300 backdrop-blur-sm rounded-lg p-6 flex items-baseline justify-center cursor-default"
                >
                  <span 
                    className="text-4xl font-bold mr-3"
                    style={{ color: '#1e3a8a', fontFamily: "'Cormorant', serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-2xl" style={{ color: '#475569', fontFamily: "'Cormorant', serif" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Kontext Section */}
        <section className="relative pt-4 pb-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="bg-qcore-navy bg-opacity-30 hover:bg-opacity-45 transition-all duration-300 backdrop-blur-sm rounded-lg p-8 cursor-default">
              <h2 
                className="text-2xl font-semibold mb-6"
                style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
              >
                Das Projekt
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Szenario</h3>
                  <p style={{ color: '#334155' }}>
                    Fiktives Pharma-Unternehmen plant die Herstellung des Wirkstoffs 
                    <strong> Fampridin</strong> (4-Aminopyridin) für den Export nach Japan (PMDA-Zulassung).
                  </p>
                  
                  <h3 className="font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Fragestellung</h3>
                  <ul className="space-y-1" style={{ color: '#334155' }}>
                    <li>• Welche regulatorischen Schritte sind notwendig?</li>
                    <li>• Welche Dokumente müssen erstellt werden?</li>
                    <li>• Wie sieht audit-fähige GMP-Dokumentation aus?</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Regulatorische Basis</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {['ICH Q7', 'EU GMP', 'ICH Q2(R1)', 'PMDA Japan', 'CTD Format'].map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs"
                        style={{ 
                          backgroundColor: 'rgba(30, 58, 138, 0.1)',
                          color: '#1e3a8a',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Methodik</h3>
                  <p style={{ color: '#334155' }}>
                    LLM-gestützte Erstellung mit anschließendem fachlichen Review 
                    (4-Augen-Prinzip). Strukturierte Analyse der Regularien, 
                    systematischer Dokumentenaufbau, iterative Verbesserung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dokumente Section */}
        <section className="relative py-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
            >
              Erstellte Dokumente
            </h2>
            
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
              {documents.map((doc) => (
                <div 
                  key={doc.id}
                  className="bg-qcore-navy bg-opacity-20 hover:bg-opacity-35 backdrop-blur-sm rounded-lg p-6 transition-all duration-300 cursor-default"
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <span 
                        className="text-xs font-mono px-2 py-1 rounded"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}
                      >
                        {doc.number}
                      </span>
                      <h3 
                        className="text-lg font-semibold mt-2"
                        style={{ color: '#1e293b' }}
                      >
                        {doc.title}
                      </h3>
                    </div>
                    <span 
                      className="text-sm px-2 py-1 rounded"
                      style={{ backgroundColor: 'rgba(100, 116, 139, 0.1)', color: '#64748b' }}
                    >
                      {doc.pages} S.
                    </span>
                  </div>
                  
                  <p className="text-sm mb-4" style={{ color: '#475569' }}>
                    {doc.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {doc.highlights.map((h) => (
                      <span 
                        key={h}
                        className="text-xs px-2 py-1 rounded"
                        style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#15803d' }}
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <a
                      href={`/docs/${doc.filename}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm px-4 py-2 rounded-lg transition-colors hover:opacity-90"
                      style={{ 
                        backgroundColor: '#1e3a8a',
                        color: '#ffffff',
                      }}
                    >
                      PDF ansehen
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ergebnis Section */}
        <section className="relative py-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h2 
              className="text-3xl md:text-4xl font-bold mb-8"
              style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
            >
              Ergebnis & Übertragbarkeit
            </h2>
            <div className="bg-qcore-navy bg-opacity-30 hover:bg-opacity-45 transition-all duration-300 backdrop-blur-sm rounded-lg p-8 cursor-default">
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4">
                  <div className="text-4xl mb-3">✅</div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Audit-fähig</h3>
                  <p className="text-sm" style={{ color: '#475569' }}>
                    Jedes Dokument erfüllt die formalen Anforderungen für GMP-Inspektionen
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl mb-3">🔄</div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Übertragbar</h3>
                  <p className="text-sm" style={{ color: '#475569' }}>
                    Die Methodik funktioniert für jeden Wirkstoff und jede Zielregion
                  </p>
                </div>
                <div className="text-center p-4">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Effizient</h3>
                  <p className="text-sm" style={{ color: '#475569' }}>
                    Moderne Methoden reduzieren den Dokumentationsaufwand um 70-80%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-12">
          <div className="relative z-10 max-w-[90%] mx-auto px-8 text-center">
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
            >
              Sie brauchen GMP-Dokumentation?
            </h2>
            <p className="text-lg mb-8" style={{ color: '#475569' }}>
              Ich erstelle audit-fähige Dokumentation für Ihr Produkt – 
              systematisch, effizient, compliance-ready.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/kontakt"
                className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
                style={{ 
                  backgroundColor: '#1e3a8a',
                  color: '#ffffff',
                }}
              >
                Kostenloses Erstgespräch
              </Link>
              <Link
                href="/leistungen"
                className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
                style={{ 
                  backgroundColor: 'transparent',
                  color: '#1e3a8a',
                  border: '2px solid #1e3a8a',
                }}
              >
                Alle Leistungen
              </Link>
            </div>
          </div>
        </section>

        {/* Hinweis */}
        <section className="relative py-8">
          <div className="relative z-10 max-w-3xl mx-auto px-8">
            <p className="text-xs text-center" style={{ color: '#94a3b8' }}>
              Hinweis: Alle Dokumente sind als fiktive, exemplarische Unterlagen erstellt 
              und dienen der Veranschaulichung von Prozessen und Strukturen im Pharma-QM.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
