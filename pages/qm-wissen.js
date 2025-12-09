import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function QMWissen() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding pt-32">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 
                className="text-4xl font-bold"
                style={{
                  fontFamily: "'Cormorant', serif",
                  color: '#1e293b',
                }}
              >
                QM-Wissen
              </h1>
              <p className="text-xl mt-2" style={{ color: '#475569' }}>
                Praktisches Know-how für Qualitätsmanagement
              </p>
              <p className="text-base mt-4" style={{ color: '#000000' }}>
                Methoden, Standards und Best Practices – verständlich erklärt.
              </p>
            </div>

            {/* Categories Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {/* Category 1: Grundlagen */}
              <div className="bg-slate-300 bg-opacity-70 p-6 rounded-lg border border-transparent hover:border-qcore-blue transition-all">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                  📚 Grundlagen
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: '#000000' }}>
                  <li>• Was ist Qualitätsmanagement?</li>
                  <li>• ISO 9001 erklärt</li>
                  <li>• Begriffe & Definitionen</li>
                  <li>• Der PDCA-Zyklus</li>
                </ul>
                <p className="text-xs italic mt-4" style={{ color: '#64748b' }}>
                  Demnächst verfügbar
                </p>
              </div>

              {/* Category 2: Methoden */}
              <div className="bg-slate-300 bg-opacity-70 p-6 rounded-lg border border-transparent hover:border-qcore-blue transition-all">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                  🔧 Methoden
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: '#000000' }}>
                  <li>• FMEA (Fehlermöglichkeits-Analyse)</li>
                  <li>• Root Cause Analysis (5-Why, Ishikawa)</li>
                  <li>• CAPA – Korrektur- und Vorbeugemaßnahmen</li>
                  <li>• Audit-Vorbereitung</li>
                  <li>• Prozessoptimierung (KVP, Lean)</li>
                </ul>
                <p className="text-xs italic mt-4" style={{ color: '#64748b' }}>
                  Demnächst verfügbar
                </p>
              </div>

              {/* Category 3: Branchenspezifisch */}
              <div className="bg-slate-300 bg-opacity-70 p-6 rounded-lg border border-transparent hover:border-qcore-blue transition-all">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                  🏭 Branchenspezifisch
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: '#000000' }}>
                  <li>• ISO 13485 (Medical Devices)</li>
                  <li>• GMP (Pharma)</li>
                  <li>• EU-MDR Grundlagen</li>
                  <li>• KTA-Standards (Nuklear)</li>
                </ul>
                <p className="text-xs italic mt-4" style={{ color: '#64748b' }}>
                  Demnächst verfügbar
                </p>
              </div>

              {/* Category 4: Validation */}
              <div className="bg-slate-300 bg-opacity-70 p-6 rounded-lg border border-transparent hover:border-qcore-blue transition-all">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                  ✅ Validation
                </h3>
                <ul className="space-y-2 text-sm" style={{ color: '#000000' }}>
                  <li>• IQ/OQ/PQ erklärt</li>
                  <li>• Process Validation</li>
                  <li>• Computer System Validation</li>
                  <li>• Equipment Qualification</li>
                </ul>
                <p className="text-xs italic mt-4" style={{ color: '#64748b' }}>
                  Demnächst verfügbar
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-slate-300 bg-opacity-70 p-6 rounded-lg mt-12 mb-12 text-center">
              <h3 className="text-lg font-semibold" style={{ color: '#1e293b' }}>
                Inhalte in Entwicklung
              </h3>
              <p className="mt-2" style={{ color: '#000000' }}>
                Diese Wissensdatenbank wird kontinuierlich erweitert. 
                Die ersten Artikel zu FMEA und ISO 9001 erscheinen in Kürze.
              </p>
              <p className="mt-4" style={{ color: '#475569' }}>
                Interesse an einem bestimmten Thema? Schreiben Sie mir:
              </p>
              <a 
                href="mailto:kontakt@qcore-consulting.de"
                className="hover:underline"
                style={{ color: '#3b82f6' }}
              >
                kontakt@qcore-consulting.de
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
