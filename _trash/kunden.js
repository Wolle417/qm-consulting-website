import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Kunden() {
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
                Für wen ich arbeite
              </h1>
              <p className="text-xl mt-2" style={{ color: '#475569' }}>
                Erkennen Sie sich wieder?
              </p>
            </div>

            {/* Target Group 1: MedTech */}
            <div className="bg-qcore-navy bg-opacity-30 p-8 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                Medizintechnik-Unternehmen
              </h2>
              <p className="text-lg mb-6" style={{ color: '#475569' }}>
                10–100 Mitarbeiter, eigene Produkte, regulatorischer Druck
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-4" style={{ color: '#1e293b' }}>
                Kommt Ihnen das bekannt vor?
              </h3>

              <div className="space-y-3 pl-4 border-l-2 border-qcore-blue">
                <p className="italic" style={{ color: '#000000' }}>
                  „Die MDR-Umstellung sollte längst abgeschlossen sein – aber das Tagesgeschäft frisst alle Kapazitäten."
                </p>
                <p className="italic" style={{ color: '#000000' }}>
                  „Unser QM-System existiert, aber wenn der Auditor fragt, finden wir die Hälfte der Dokumente nicht."
                </p>
                <p className="italic" style={{ color: '#000000' }}>
                  „Die technische Dokumentation ist lückenhaft. Unsere Entwickler sind gut – aber Normen-Texte schreiben ist nicht ihr Ding."
                </p>
                <p className="italic" style={{ color: '#000000' }}>
                  „In 6 Wochen kommt die Benannte Stelle. Wir wissen nicht, ob wir bestehen."
                </p>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>
                Was Sie brauchen
              </h3>
              <p style={{ color: '#000000' }}>
                Jemanden, der ISO 13485 und ISO 14971 nicht nur kennt, sondern auch versteht, wie Ihre Produkte funktionieren. Der anpackt statt nur Checklisten abzuhaken.
              </p>

              <p className="mt-4 text-sm" style={{ color: '#475569' }}>
                <strong>Relevante Standards:</strong> ISO 13485, ISO 14971, EU-MDR, FMEA
              </p>
            </div>

            {/* Target Group 2: Pharma & Biotech */}
            <div className="bg-qcore-navy bg-opacity-30 p-8 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                Pharma- & Biotech-Startups
              </h2>
              <p className="text-lg mb-6" style={{ color: '#475569' }}>
                GMP-Anforderungen, erste Produktion, Behördeninspektion
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-4" style={{ color: '#1e293b' }}>
                Kommt Ihnen das bekannt vor?
              </h3>

              <div className="space-y-3 pl-4 border-l-2 border-qcore-blue">
                <p className="italic" style={{ color: '#000000' }}>
                  „Wir haben ein großartiges Produkt entwickelt – aber die GMP-Anforderungen für die Produktion überfordern uns komplett."
                </p>
                <p className="italic" style={{ color: '#000000' }}>
                  „Unser Team besteht aus Wissenschaftlern. QM-Dokumentation ist für uns Neuland."
                </p>
                <p className="italic" style={{ color: '#000000' }}>
                  „Die erste Behördeninspektion steht an. Wir wissen nicht einmal, welche Fragen kommen."
                </p>
                <p className="italic" style={{ color: '#000000' }}>
                  „Validierung, Qualifizierung, Change Control – wir ertrinken in Begriffen, die wir nicht vollständig verstehen."
                </p>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>
                Was Sie brauchen
              </h3>
              <p style={{ color: '#000000' }}>
                Einen pragmatischen Begleiter, der GMP-Compliance aufbaut, ohne Ihr Startup in Bürokratie zu ersticken. Der erklärt, statt nur zu fordern.
              </p>

              <p className="mt-4 text-sm" style={{ color: '#475569' }}>
                <strong>Relevante Standards:</strong> GMP, Validierung (IQ/OQ/PQ), GDP
              </p>
            </div>

            {/* Target Group 3: Tech & Manufacturing */}
            <div className="bg-qcore-navy bg-opacity-30 p-8 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                Technologie-KMU & Fertigung
              </h2>
              <p className="text-lg mb-6" style={{ color: '#475569' }}>
                ISO 9001 nötig, Kundenforderungen, Prozessoptimierung
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-4" style={{ color: '#1e293b' }}>
                Kommt Ihnen das bekannt vor?
              </h3>

              <div className="space-y-3 pl-4 border-l-2 border-qcore-blue">
                <p className="italic" style={{ color: '#000000' }}>
                  „Ein Großkunde verlangt ISO 9001 – ohne Zertifikat kein Auftrag. Wir haben 6 Monate Zeit."
                </p>
                <p className="italic" style={{ color: '#000000' }}>
                  „Unsere Prozesse funktionieren – aber dokumentiert ist fast nichts. Das rächt sich bei jeder Reklamation."
                </p>
                <p className="italic" style={{ color: '#000000' }}>
                  „Wir hatten mal ein QM-System, aber seit der QMB gegangen ist, kümmert sich niemand mehr darum."
                </p>
                <p className="italic" style={{ color: '#000000' }}>
                  „Jedes Jahr das gleiche Spiel: Kurz vor dem Audit wird hektisch aufgeräumt. Das kostet Zeit und Nerven."
                </p>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>
                Was Sie brauchen
              </h3>
              <p style={{ color: '#000000' }}>
                Ein schlankes QM-System, das im Alltag funktioniert – nicht nur im Audit-Ordner verstaubt. Prozesse, die Ihre Mitarbeiter verstehen und nutzen.
              </p>

              <p className="mt-4 text-sm" style={{ color: '#475569' }}>
                <strong>Relevante Standards:</strong> ISO 9001, IATF 16949, Prozessoptimierung
              </p>
            </div>

            {/* Common Denominator */}
            <div className="bg-qcore-navy bg-opacity-30 p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-semibold mb-6" style={{ color: '#1e293b' }}>
                Was alle meine Kunden gemeinsam haben
              </h2>
              <div className="space-y-3" style={{ color: '#000000' }}>
                <p>• Sie sind zu klein für eine eigene QM-Abteilung – aber zu groß, um Compliance zu ignorieren.</p>
                <p>• Sie wollen ein QM-System, das funktioniert – nicht eines, das nur existiert.</p>
                <p>• Sie suchen einen Partner, der mitdenkt – nicht einen, der nur Häkchen macht.</p>
                <p>• Sie haben keine Zeit für Berater-Deutsch. Sie brauchen klare Ansagen.</p>
              </div>
            </div>

            {/* Testimonials Placeholder */}
            <div className="bg-qcore-navy bg-opacity-30 p-8 rounded-lg mt-12 border-2 border-dashed border-gray-400">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                Kundenstimmen
              </h2>
              <p className="italic" style={{ color: '#64748b' }}>
                Dieser Bereich wird mit Referenzen und Erfahrungsberichten gefüllt, sobald erste Projekte abgeschlossen sind.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-qcore-navy bg-opacity-30 p-8 rounded-lg mt-12 mb-12 text-center">
              <h2 className="text-2xl font-semibold" style={{ color: '#1e293b' }}>
                Wiedergefunden?
              </h2>
              <p className="mt-4" style={{ color: '#000000' }}>
                Dann lassen Sie uns reden. 30 Minuten, kostenlos, unverbindlich.
              </p>
              <p className="mt-2" style={{ color: '#475569' }}>
                Kein Verkaufsgespräch – sondern ein ehrlicher Check, ob ich der Richtige für Ihr Problem bin.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
                <a
                  href="mailto:kontakt@qcore-consulting.de"
                  className="bg-qcore-blue text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
                >
                  E-Mail schreiben
                </a>
                <a
                  href="tel:+491771940539"
                  className="bg-qcore-blue text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
                >
                  Anrufen
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
