import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Datenschutz() {
  return (
    <>
      <Head>
        <title>Datenschutzerklärung | QCore Consulting</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Navigation />
      <main className="relative min-h-screen">
        <section className="relative pt-28 pb-16">
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h1
              className="text-4xl font-bold mb-4"
              style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}
            >
              Datenschutzerklärung
            </h1>
            <p className="mb-10" style={{ color: '#475569' }}>
              Diese Datenschutzerklärung informiert Sie gemäß Art. 13 und 14 DSGVO über die
              Verarbeitung personenbezogener Daten auf der Website <strong>qcore-consulting.de</strong>.
            </p>

            <div
              className="rounded-xl p-8 space-y-10"
              style={{
                backgroundColor: 'rgba(30, 58, 138, 0.06)',
                border: '1px solid rgba(30, 58, 138, 0.1)',
                backdropFilter: 'blur(3px)',
              }}
            >
              {/* 1. Verantwortlicher */}
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  1. Verantwortlicher
                </h2>
                <p style={{ color: '#334155' }}>
                  <strong>QCore Consulting</strong><br />
                  Inhaber: Stefan Schönwälder<br />
                  Gleiwitzer Str. 2, 91074 Herzogenaurach, Deutschland<br />
                  E-Mail:{' '}
                  <a href="mailto:kontakt@qcore-consulting.de" className="underline" style={{ color: '#1e3a8a' }}>
                    kontakt@qcore-consulting.de
                  </a>
                </p>
              </div>

              {/* 2. Datenerhebung */}
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  2. Erhebung und Speicherung personenbezogener Daten
                </h2>

                <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>2.1 Aufruf der Website</h3>
                <p className="mb-2" style={{ color: '#334155' }}>
                  Beim Zugriff auf unsere Website werden durch den Hosting-Anbieter <strong>Vercel Inc.</strong>,
                  440 N Barranca Ave #4133, Covina, CA 91723, USA, automatisch folgende Daten verarbeitet:
                </p>
                <p className="mb-2 pl-4" style={{ color: '#334155' }}>
                  IP-Adresse, Datum und Uhrzeit des Zugriffs, Browsertyp und -version,
                  Betriebssystem, aufgerufene Seiten, Referrer-URL.
                </p>
                <p className="mb-2" style={{ color: '#334155' }}>
                  <strong>Zweck:</strong> Sicherstellung des technischen Betriebs, Serverstabilität und
                  Sicherheit (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
                <p className="mb-2" style={{ color: '#334155' }}>
                  <strong>Hosting in den USA:</strong> Vercel verarbeitet Daten teilweise auf Servern in den USA.
                  Die Übermittlung erfolgt auf Grundlage von Standardvertragsklauseln der EU-Kommission (SCC).
                </p>
                <p style={{ color: '#334155' }}>
                  Weitere Details:{' '}
                  <a href="https://vercel.com/legal/privacy" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#1e3a8a' }}>
                    vercel.com/legal/privacy
                  </a>
                </p>
              </div>

              {/* 3. Kontaktformular */}
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  3. Kontaktformular
                </h2>
                <p className="mb-2" style={{ color: '#334155' }}>
                  Bei Nutzung des Kontaktformulars verarbeiten wir: Name, E-Mail-Adresse, Ihre Nachricht.
                </p>
                <p className="mb-2" style={{ color: '#334155' }}>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)
                  oder Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an Kommunikation).
                </p>
                <p className="mb-2" style={{ color: '#334155' }}>
                  <strong>Speicherdauer:</strong> Nach Abschluss der Anfrage max. 12 Monate oder
                  entsprechend gesetzlicher Aufbewahrungspflichten.
                </p>
                <p style={{ color: '#334155' }}>
                  Daten werden nicht ohne Ihre Einwilligung weitergegeben.
                </p>
              </div>

              {/* 4. E-Mail */}
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  4. E-Mail-Kommunikation
                </h2>
                <p className="mb-2" style={{ color: '#334155' }}>
                  Eingehende E-Mails über <strong>Microsoft 365</strong> werden verarbeitet und gespeichert.
                </p>
                <p className="mb-2" style={{ color: '#334155' }}>
                  Anbieter: Microsoft Ireland Operations Limited, One Microsoft Place,
                  South County Business Park, Leopardstown, Dublin 18, D18 P521, Irland.
                </p>
                <p style={{ color: '#334155' }}>
                  <strong>Datenübermittlung:</strong> Microsoft kann Daten in die USA übertragen;
                  dies basiert auf Standardvertragsklauseln (SCC).
                </p>
              </div>

              {/* 5. Cookies */}
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  5. Cookies
                </h2>
                <p className="mb-2" style={{ color: '#334155' }}>
                  Unsere Website verwendet ausschließlich <strong>technisch notwendige Cookies</strong>,
                  die für den Betrieb erforderlich sind.
                </p>
                <p className="mb-2" style={{ color: '#334155' }}>
                  Keine Analyse- oder Tracking-Cookies. Kein Google Analytics. Kein Marketing-Tracking.
                </p>
                <p style={{ color: '#334155' }}>
                  <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO.
                  Ein Cookie-Banner ist daher nicht erforderlich.
                </p>
              </div>

              {/* 6. Keine externen Dienste */}
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  6. Keine externen Dienste
                </h2>
                <p style={{ color: '#334155' }}>
                  Auf dieser Website werden keine externen Inhalte nachgeladen
                  (kein Google Analytics, YouTube, Social Media Plugins, Google Maps, Werbenetzwerke).
                </p>
              </div>

              {/* 7. Weitergabe */}
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  7. Weitergabe von Daten
                </h2>
                <p style={{ color: '#334155' }}>
                  Eine Übermittlung personenbezogener Daten an Dritte findet nicht statt, außer:
                  es ist gesetzlich vorgeschrieben (Art. 6 Abs. 1 lit. c DSGVO),
                  es ist zur Vertragserfüllung notwendig,
                  es besteht ein berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO),
                  oder eine Einwilligung liegt vor (Art. 6 Abs. 1 lit. a DSGVO).
                </p>
              </div>

              {/* 8. Aufbewahrung */}
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  8. Aufbewahrungsfristen
                </h2>
                <p className="pl-4" style={{ color: '#334155' }}>
                  Kontaktformular-Anfragen: bis zu 12 Monate<br />
                  Geschäftskommunikation (E-Mail): gemäß handels- und steuerrechtlicher Vorgaben bis zu 10 Jahre<br />
                  Server-Logs: i.d.R. 7–30 Tage (durch Vercel)
                </p>
              </div>

              {/* 9. Rechte */}
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  9. Rechte der betroffenen Personen
                </h2>
                <p className="mb-3" style={{ color: '#334155' }}>Sie haben jederzeit folgende Rechte:</p>
                <div className="space-y-2 pl-4">
                  {[
                    ['Auskunft (Art. 15 DSGVO)', 'Welche Daten wir gespeichert haben'],
                    ['Berichtigung (Art. 16 DSGVO)', 'Korrektur unrichtiger Daten'],
                    ['Löschung (Art. 17 DSGVO)', 'Recht auf Vergessenwerden'],
                    ['Einschränkung (Art. 18 DSGVO)', 'Einschränkung der Verarbeitung'],
                    ['Datenübertragbarkeit (Art. 20 DSGVO)', 'Erhalt der Daten in maschinenlesbarer Form'],
                    ['Widerspruch (Art. 21 DSGVO)', 'Jederzeit gegen Verarbeitung'],
                    ['Widerruf einer Einwilligung (Art. 7 DSGVO)', 'Mit Wirkung für die Zukunft'],
                  ].map(([right, desc], i) => (
                    <p key={i} style={{ color: '#334155' }}>
                      <strong>{right}</strong> — {desc}
                    </p>
                  ))}
                </div>
                <p className="mt-3" style={{ color: '#334155' }}>
                  Zur Ausübung Ihrer Rechte genügt eine E-Mail an:{' '}
                  <a href="mailto:kontakt@qcore-consulting.de" className="underline" style={{ color: '#1e3a8a' }}>
                    kontakt@qcore-consulting.de
                  </a>
                </p>
              </div>

              {/* 10. Sicherheit */}
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  10. Sicherheit der Daten
                </h2>
                <p style={{ color: '#334155' }}>
                  Wir verwenden technische und organisatorische Maßnahmen (TLS/SSL),
                  um Ihre Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu schützen.
                </p>
              </div>

              {/* 11. Änderungen */}
              <div>
                <h2 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  11. Änderungen dieser Datenschutzerklärung
                </h2>
                <p style={{ color: '#334155' }}>
                  Diese Datenschutzerklärung kann bei Bedarf angepasst werden,
                  um rechtliche oder technische Änderungen abzubilden.
                </p>
              </div>

              <p className="text-sm" style={{ color: '#94a3b8' }}>Stand: Dezember 2025</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
