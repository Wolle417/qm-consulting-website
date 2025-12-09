import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Datenschutz() {
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
              Datenschutzerklärung
            </h1>
          </div>
        </section>
        
        <section className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto px-6">
            <div className="p-8 bg-slate-300 bg-opacity-70 rounded-lg">
              <div className="space-y-6" style={{ color: '#000000' }}>
                <p>Diese Datenschutzerklärung informiert Sie gemäß Art. 13 und 14 DSGVO über die Verarbeitung personenbezogener Daten auf der Website <strong>qcore-consulting.de</strong>.</p>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>1. Verantwortlicher</h2>
                  <p><strong>QCore Consulting</strong><br />
                  Inhaber: <strong>Stefan Schönwälder</strong><br />
                  Gleiwitzer Str. 2<br />
                  91074 Herzogenaurach<br />
                  Deutschland</p>
                  <p>E-Mail: <strong>kontakt@qcore-consulting.de</strong></p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>2. Erhebung und Speicherung personenbezogener Daten</h2>
                  
                  <h3 className="text-xl font-semibold mt-4 mb-2" style={{ color: '#1e293b' }}>2.1 Aufruf der Website</h3>
                  <p>Beim Zugriff auf unsere Website werden durch den Hosting-Anbieter <strong>Vercel Inc.</strong> automatisch folgende Daten verarbeitet:</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>IP-Adresse</li>
                    <li>Datum und Uhrzeit des Zugriffs</li>
                    <li>Browsertyp und Browserversion</li>
                    <li>Betriebssystem</li>
                    <li>aufgerufene Seiten</li>
                    <li>Referrer-URL</li>
                  </ul>
                  <p className="mt-2"><strong>Zweck:</strong> Sicherstellung des technischen Betriebs (Art. 6 Abs. 1 lit. f DSGVO).</p>
                  <p><strong>Hosting in den USA:</strong> Vercel verarbeitet Daten auf Grundlage von Standardvertragsklauseln (SCC).</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>3. Kontaktformular</h2>
                  <p>Bei Nutzung des Kontaktformulars verarbeiten wir Name, E-Mail-Adresse und Ihre Nachricht.</p>
                  <p><strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)</p>
                  <p><strong>Speicherdauer:</strong> Max. 12 Monate nach Abschluss der Anfrage.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>4. E-Mail-Kommunikation</h2>
                  <p>E-Mails werden über <strong>Microsoft 365</strong> verarbeitet (Microsoft Ireland Operations Limited).</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>5. Cookies</h2>
                  <p>Unsere Website verwendet ausschließlich <strong>technisch notwendige Cookies</strong>.</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li>Keine Analyse- oder Tracking-Cookies</li>
                    <li>Kein Google Analytics</li>
                  </ul>
                  <p className="mt-2">Ein Cookie-Banner ist daher <strong>nicht erforderlich</strong>.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>6. Keine externen Dienste</h2>
                  <p>Auf dieser Website werden keine externen Inhalte nachgeladen (kein YouTube, kein Google Maps, keine Social Media Plugins).</p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>7. Ihre Rechte</h2>
                  <p>Sie haben Recht auf: Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit, Widerspruch.</p>
                  <p>Kontakt: <strong>kontakt@qcore-consulting.de</strong></p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold mb-2" style={{ color: '#1e293b' }}>8. Sicherheit</h2>
                  <p>Wir verwenden TLS/SSL-Verschlüsselung zum Schutz Ihrer Daten.</p>
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
