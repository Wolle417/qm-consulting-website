import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Leistungen() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative section-padding pt-24">
          <div className="relative z-10 max-w-[80%] mx-auto px-8">
            <div className="text-center mb-12">
              <h1 
                className="text-4xl font-bold"
                style={{
                  fontFamily: "'Cormorant', serif",
                  color: '#1e293b',
                }}
              >
                Leistungen
              </h1>
              <p className="text-xl mt-2" style={{ color: '#475569' }}>
                Qualitätsmanagement, das funktioniert – nicht nur auf dem Papier.
              </p>
            </div>

            {/* Service Box 1 */}
            <div className="bg-qcore-navy bg-opacity-30 p-8 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                QM-System Aufbau & Zertifizierung
              </h2>
              
              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Das Problem</h3>
              <p style={{ color: '#000000' }}>
                Sie brauchen eine ISO-Zertifizierung – für Kunden, Ausschreibungen oder regulatorische Anforderungen. Aber intern fehlt die Zeit, das Know-how oder beides. Ein Zertifizierungsprojekt neben dem Tagesgeschäft stemmen? Unrealistisch.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Meine Lösung</h3>
              <p style={{ color: '#000000' }}>
                Ich baue mit Ihnen ein QM-System, das zu Ihrem Unternehmen passt – schlank, praktikabel, zertifizierungsfähig. Keine Copy-Paste-Vorlagen, sondern Prozesse, die Ihre Mitarbeiter verstehen und leben können.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Typischer Ablauf</h3>
              <div style={{ color: '#000000' }}>
                <p>1. Kostenlose Erstberatung (30 Min)</p>
                <p>2. Gap-Analyse: Wo stehen Sie, was fehlt?</p>
                <p>3. Konzept & Zeitplan</p>
                <p>4. Umsetzung: Prozesse, Dokumentation, Schulung</p>
                <p>5. Internes Audit & Feinschliff</p>
                <p>6. Begleitung beim Zertifizierungsaudit</p>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Das Ergebnis</h3>
              <p style={{ color: '#000000' }}>
                Ein funktionierendes QM-System, das Zertifikat in der Hand, und ein Team, das die Prozesse versteht – nicht nur abheftet.
              </p>

              <p className="mt-6 text-sm" style={{ color: '#475569' }}>
                <strong>Relevante Standards:</strong> ISO 9001, ISO 13485, GMP
              </p>
            </div>

            {/* Service Box 2 */}
            <div className="bg-qcore-navy bg-opacity-30 p-8 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                Audit-Vorbereitung & Begleitung
              </h2>
              
              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Das Problem</h3>
              <p style={{ color: '#000000' }}>
                Das Audit steht vor der Tür – in 4 Wochen, vielleicht 8. Die Dokumentation hat Lücken, die letzte Management-Bewertung ist überfällig, und niemand weiß genau, was der Auditor fragen wird. Panik macht sich breit.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Meine Lösung</h3>
              <p style={{ color: '#000000' }}>
                Systematische Vorbereitung statt Aktionismus. Ich identifiziere die kritischen Lücken, priorisiere nach Audit-Relevanz, und bereite Ihr Team auf typische Fragen vor. Optional: Ein internes Mock-Audit, damit der Ernstfall keine Überraschung wird.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Typischer Ablauf</h3>
              <div style={{ color: '#000000' }}>
                <p>1. Kick-off: Audit-Termin, Scope, bisherige Findings</p>
                <p>2. Dokumenten-Review: Was fehlt, was ist veraltet?</p>
                <p>3. Priorisierte Maßnahmenliste</p>
                <p>4. Umsetzungsbegleitung (Dokumentation, Nachweise)</p>
                <p>5. Mock-Audit mit realistischen Fragen</p>
                <p>6. Audit-Begleitung vor Ort (optional)</p>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Das Ergebnis</h3>
              <p style={{ color: '#000000' }}>
                Sie gehen vorbereitet ins Audit. Keine bösen Überraschungen, weniger Stress, bessere Ergebnisse.
              </p>

              <p className="mt-6 text-sm" style={{ color: '#475569' }}>
                <strong>Geeignet für:</strong> Überwachungsaudits, Re-Zertifizierungen, Kundenaudits, Behördeninspektionen
              </p>
            </div>

            {/* Service Box 3 */}
            <div className="bg-qcore-navy bg-opacity-30 p-8 rounded-lg mt-8">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                Technische Dokumentation & Risikoanalyse
              </h2>
              
              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Das Problem</h3>
              <p style={{ color: '#000000' }}>
                Die Norm fordert eine FMEA, einen Validierungsbericht, eine technische Akte – aber wer soll das schreiben? Ihre Entwickler entwickeln lieber, als Dokumente zu wälzen. Verständlich. Aber ohne Dokumentation keine Zulassung, kein Audit, keine Compliance.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Meine Lösung</h3>
              <p style={{ color: '#000000' }}>
                Ich erstelle oder überarbeite Ihre technische Dokumentation – als Ingenieur, der die Technik versteht. Keine Textbausteine, sondern Dokumente, die zum Produkt passen und vor Auditoren bestehen.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Leistungen im Detail</h3>
              <div style={{ color: '#000000' }}>
                <p>• FMEA (Design-FMEA, Prozess-FMEA) – Moderation & Dokumentation</p>
                <p>• Risikoanalysen nach ISO 14971 (Medizinprodukte)</p>
                <p>• Technische Akten / Design History Files</p>
                <p>• Validierungsprotokolle (IQ/OQ/PQ)</p>
                <p>• Prozessbeschreibungen & Arbeitsanweisungen</p>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Das Ergebnis</h3>
              <p style={{ color: '#000000' }}>
                Lückenlose, normkonforme Dokumentation – und Entwickler, die sich auf ihre eigentliche Arbeit konzentrieren können.
              </p>

              <p className="mt-6 text-sm" style={{ color: '#475569' }}>
                <strong>Branchen:</strong> Medizintechnik, Pharma, regulierte Fertigung
              </p>
            </div>

            {/* Service Box 4 */}
            <div className="bg-qcore-navy bg-opacity-30 p-8 rounded-lg mt-8 mb-12">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                Schulungen & Workshops
              </h2>
              
              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Das Problem</h3>
              <p style={{ color: '#000000' }}>
                QM-Systeme funktionieren nur, wenn die Mitarbeiter sie verstehen. Aber die letzte Schulung war vor drei Jahren, neue Kollegen wurden "nebenbei" eingewiesen, und beim Thema FMEA zucken alle mit den Schultern.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Meine Lösung</h3>
              <p style={{ color: '#000000' }}>
                Praxisnahe Schulungen, die hängen bleiben. Keine PowerPoint-Marathons, sondern interaktive Workshops mit echten Beispielen aus Ihrer Branche. Danach weiß Ihr Team nicht nur WAS, sondern auch WARUM.
              </p>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Themen (Auswahl)</h3>
              <div style={{ color: '#000000' }}>
                <p>• QM-Grundlagen für neue Mitarbeiter</p>
                <p>• FMEA-Workshop (mit praktischer Übung)</p>
                <p>• Audit-Training: Wie verhalte ich mich im Audit?</p>
                <p>• Dokumentenlenkung & Änderungsmanagement</p>
                <p>• CAPA: Korrektur- und Vorbeugemaßnahmen</p>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Formate</h3>
              <div style={{ color: '#000000' }}>
                <p>• Vor-Ort (halbtags oder ganztags)</p>
                <p>• Remote via Teams/Zoom</p>
                <p>• Einzel-Coaching für QM-Verantwortliche</p>
              </div>

              <h3 className="text-lg font-semibold mt-6 mb-2" style={{ color: '#1e293b' }}>Das Ergebnis</h3>
              <p style={{ color: '#000000' }}>
                Mitarbeiter, die QM verstehen – nicht nur die Unterschrift auf dem Teilnahmezertifikat.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
