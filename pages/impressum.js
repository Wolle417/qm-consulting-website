import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Impressum() {
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
              Impressum
            </h1>
          </div>
        </section>
        
        <section className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto px-6">
            <div className="p-8 bg-slate-300 bg-opacity-70 rounded-lg">
              <div className="space-y-6" style={{ color: '#000000' }}>
                <div>
                  <p className="font-bold">QCore Consulting</p>
                  <p>Inhaber: <strong>Stefan Schönwälder</strong></p>
                  <p>Gleiwitzer Str. 2</p>
                  <p>91074 Herzogenaurach</p>
                  <p>Deutschland</p>
                </div>

                <div>
                  <p className="font-bold">Kontakt:</p>
                  <p>Telefon: 0177 / 194 05 39</p>
                  <p>E-Mail: kontakt@qcore-consulting.de</p>
                </div>

                <p><strong>Rechtsform:</strong> Einzelunternehmen (nicht im Handelsregister eingetragen)</p>

                <p><strong>Umsatzsteuer-Identifikationsnummer gemäß §27a UStG:</strong><br />
                noch nicht vorhanden / wird nachgereicht</p>

                <div>
                  <p><strong>Berufsbezeichnung:</strong><br />
                  Unternehmensberater / Qualitätsmanagement-Berater<br />
                  Keine berufsrechtliche Zulassung, keine Kammerzugehörigkeit.</p>
                </div>

                <hr className="border-gray-400" />

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>Haftung für Inhalte</h2>
                  <p>Als Diensteanbieter bin ich gemäß §§ 7 bis 10 TMG bzw. DDG für eigene Inhalte verantwortlich.<br />
                  Eine Haftung ist erst ab Kenntnis konkreter Rechtsverletzungen möglich.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>Haftung für externe Links</h2>
                  <p>Für Inhalte externer Links übernehme ich keine Haftung.<br />
                  Bei Bekanntwerden rechtswidriger Inhalte werden diese Links entfernt.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>Urheberrecht</h2>
                  <p>Alle Inhalte dieser Website unterliegen dem deutschen Urheberrecht.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>Online-Streitbeilegung / Verbraucherschlichtung</h2>
                  <p>Plattform der EU-Kommission: <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" style={{ color: '#3b82f6' }}>https://ec.europa.eu/consumers/odr/</a><br />
                  Ich bin nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
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
