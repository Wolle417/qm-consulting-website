import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function AGB() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen">
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 
              className="text-5xl md:text-6xl font-bold"
              style={{
                fontFamily: "'Cormorant', serif",
                color: '#1e293b',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Allgemeine Geschäftsbedingungen
            </h1>
          </div>
        </section>
        
        <section className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto px-6">
            <div className="p-8 bg-slate-300 bg-opacity-70 rounded-lg">
              <div className="space-y-6" style={{ color: '#000000' }}>
                <p className="text-center font-semibold">QCore Consulting – Stefan Schönwälder</p>
                <p>Diese AGB gelten für alle Beratungsleistungen gegenüber <strong>Geschäftskunden (B2B)</strong> im Bereich Qualitätsmanagement.</p>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>1. Geltungsbereich</h2>
                  <p>Diese AGB gelten für alle Verträge zwischen QCore Consulting und dem Auftraggeber.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>2. Vertragsschluss</h2>
                  <p>Ein Vertrag kommt zustande durch schriftliches Angebot und schriftliche Annahme.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>3. Leistungsumfang</h2>
                  <p>Der Leistungsumfang wird im Einzelauftrag festgelegt. QCore Consulting erbringt Beratungsleistungen, jedoch <strong>keine Garantie für Zertifizierungserfolge</strong>.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>4. Mitwirkungspflichten des Kunden</h2>
                  <p>Der Auftraggeber stellt erforderliche Informationen, Dokumente und Zugänge bereit.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>5. Vergütung</h2>
                  <p>Vergütung erfolgt als Tagessatz, Stundensatz oder Pauschalhonorar, zzgl. MwSt.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>6. Zahlungsbedingungen</h2>
                  <p>Rechnungen sind <strong>innerhalb von 14 Tagen</strong> zahlbar.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>7. Geheimhaltung</h2>
                  <p>Beide Parteien verpflichten sich zur Vertraulichkeit über alle Geschäftsgeheimnisse.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>8. Haftung</h2>
                  <p>QCore Consulting haftet nur für <strong>Vorsatz oder grobe Fahrlässigkeit</strong>.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>9. Nutzungsrechte</h2>
                  <p>Der Auftraggeber erhält ein einfaches, zeitlich unbegrenztes Nutzungsrecht an erstellten Dokumenten.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>10. Stornierung</h2>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Bis 7 Tage vor Termin: kostenfrei</li>
                    <li>6–3 Tage: 50 %</li>
                    <li>Unter 3 Tage: 100 %</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>11. Schlussbestimmungen</h2>
                  <p>Es gilt deutsches Recht. Gerichtsstand ist Herzogenaurach.</p>
                </div>

                <p className="text-sm" style={{ color: '#64748b' }}>Stand: Dezember 2025</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
