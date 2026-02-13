import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function Impressum() {
  return (
    <>
      <Head>
        <title>Impressum | QCore Consulting</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Navigation />
      <main className="relative min-h-screen">
        <section className="relative pt-28 pb-16">
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h1
              className="text-4xl font-bold mb-10"
              style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}
            >
              Impressum
            </h1>

            <div
              className="rounded-xl p-8 space-y-8"
              style={{
                backgroundColor: 'rgba(30, 58, 138, 0.06)',
                border: '1px solid rgba(30, 58, 138, 0.1)',
                backdropFilter: 'blur(3px)',
              }}
            >
              {/* Anbieter */}
              <div>
                <p className="font-semibold text-lg" style={{ color: '#1e293b' }}>QCore Consulting</p>
                <p style={{ color: '#334155' }}>
                  Inhaber: <strong>Stefan Schönwälder</strong>
                </p>
                <p style={{ color: '#334155' }}>Gleiwitzer Str. 2</p>
                <p style={{ color: '#334155' }}>91074 Herzogenaurach</p>
                <p style={{ color: '#334155' }}>Deutschland</p>
              </div>

              {/* Kontakt */}
              <div>
                <p className="font-semibold mb-1" style={{ color: '#1e293b' }}>Kontakt</p>
                <p style={{ color: '#334155' }}>Telefon: 0177 / 194 05 39</p>
                <p style={{ color: '#334155' }}>
                  E-Mail:{' '}
                  <a href="mailto:kontakt@qcore-consulting.de" className="underline" style={{ color: '#1e3a8a' }}>
                    kontakt@qcore-consulting.de
                  </a>
                </p>
              </div>

              {/* Rechtsform */}
              <div>
                <p className="font-semibold mb-1" style={{ color: '#1e293b' }}>Rechtsform</p>
                <p style={{ color: '#334155' }}>Einzelunternehmen (nicht im Handelsregister eingetragen)</p>
              </div>

              {/* USt */}
              <div>
                <p className="font-semibold mb-1" style={{ color: '#1e293b' }}>Umsatzsteuer-Identifikationsnummer gemäß §27a UStG</p>
                <p style={{ color: '#334155' }}>Noch nicht vorhanden / wird nachgereicht</p>
              </div>

              {/* Berufsbezeichnung */}
              <div>
                <p className="font-semibold mb-1" style={{ color: '#1e293b' }}>Berufsbezeichnung</p>
                <p style={{ color: '#334155' }}>Unternehmensberater / Qualitätsmanagement-Berater</p>
                <p style={{ color: '#334155' }}>Keine berufsrechtliche Zulassung, keine Kammerzugehörigkeit.</p>
              </div>

              {/* Haftung Inhalte */}
              <div>
                <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  Haftung für Inhalte
                </h2>
                <p style={{ color: '#334155' }}>
                  Als Diensteanbieter bin ich gemäß §§ 7 bis 10 TMG bzw. DDG für eigene Inhalte verantwortlich.
                  Eine Haftung ist erst ab Kenntnis konkreter Rechtsverletzungen möglich.
                </p>
              </div>

              {/* Haftung Links */}
              <div>
                <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  Haftung für externe Links
                </h2>
                <p style={{ color: '#334155' }}>
                  Für Inhalte externer Links übernehme ich keine Haftung.
                  Bei Bekanntwerden rechtswidriger Inhalte werden diese Links entfernt.
                </p>
              </div>

              {/* Urheberrecht */}
              <div>
                <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  Urheberrecht
                </h2>
                <p style={{ color: '#334155' }}>
                  Alle Inhalte dieser Website unterliegen dem deutschen Urheberrecht.
                </p>
              </div>

              {/* OS / Verbraucherschlichtung */}
              <div>
                <h2 className="text-xl font-semibold mb-2" style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}>
                  Online-Streitbeilegung / Verbraucherschlichtung
                </h2>
                <p style={{ color: '#334155' }}>
                  Plattform der EU-Kommission:{' '}
                  <a
                    href="https://ec.europa.eu/consumers/odr/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                    style={{ color: '#1e3a8a' }}
                  >
                    https://ec.europa.eu/consumers/odr/
                  </a>
                </p>
                <p className="mt-1" style={{ color: '#334155' }}>
                  Ich bin nicht verpflichtet und nicht bereit, an Streitbeilegungsverfahren
                  vor einer Verbraucherschlichtungsstelle teilzunehmen.
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
