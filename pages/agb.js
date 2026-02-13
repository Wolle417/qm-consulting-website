import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function AGB() {
  return (
    <>
      <Head>
        <title>AGB | QCore Consulting</title>
        <meta name="robots" content="noindex" />
      </Head>
      <Navigation />
      <main className="relative min-h-screen">
        <section className="relative pt-28 pb-16">
          <div className="relative z-10 max-w-3xl mx-auto px-6">
            <h1
              className="text-4xl font-bold mb-2"
              style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}
            >
              Allgemeine Geschäftsbedingungen (AGB)
            </h1>
            <p className="mb-10" style={{ color: '#475569' }}>
              QCore Consulting — Stefan Schönwälder
            </p>

            <div
              className="rounded-xl p-8"
              style={{
                backgroundColor: 'rgba(30, 58, 138, 0.06)',
                border: '1px solid rgba(30, 58, 138, 0.1)',
                backdropFilter: 'blur(3px)',
              }}
            >
              <p className="mb-8" style={{ color: '#334155' }}>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Beratungsleistungen
                der Unternehmensberatung <strong>QCore Consulting</strong>, Inhaber Stefan Schönwälder,
                gegenüber <strong>Geschäftskunden (B2B)</strong> im Bereich Qualitätsmanagement.
              </p>

              {[
                {
                  title: '1. Geltungsbereich',
                  content: 'Diese AGB gelten für alle aktuellen und zukünftigen Verträge zwischen QCore Consulting und dem Auftraggeber, sofern nicht ausdrücklich abweichende Vereinbarungen schriftlich getroffen wurden. Abweichende Bedingungen des Auftraggebers werden nicht anerkannt, es sei denn, QCore Consulting stimmt ihnen ausdrücklich schriftlich zu.',
                },
                {
                  title: '2. Vertragsschluss',
                  content: 'Ein Vertrag kommt zustande durch das schriftliche Angebot von QCore Consulting und die schriftliche Annahme (Auftragsbestätigung) des Auftraggebers. Mündliche Absprachen werden erst durch schriftliche Bestätigung verbindlich.',
                },
                {
                  title: '3. Leistungsumfang',
                  content: 'Der konkrete Leistungsumfang — z.B. Beratung, Audit-Vorbereitung, Dokumentationserstellung, Workshops oder Schulungen — wird individuell im jeweiligen Einzelauftrag festgelegt. QCore Consulting erbringt Beratungs- und Unterstützungsleistungen, jedoch keine Garantie für Zertifizierungserfolge oder bestimmte wirtschaftliche Ergebnisse.',
                },
                {
                  title: '4. Mitwirkungspflichten des Kunden',
                  content: 'Der Auftraggeber verpflichtet sich, alle erforderlichen Informationen, Dokumente und Zugänge bereitzustellen, qualifiziertes Personal für Rückfragen und Abstimmungen bereitzuhalten und Entscheidungen zeitnah zu treffen. Verzögerungen aufgrund mangelnder Mitwirkung verlängern die Projektlaufzeit entsprechend und können zu Mehrkosten führen.',
                },
                {
                  title: '5. Vergütung',
                  content: 'Die Vergütung erfolgt je nach Vereinbarung als Tagessatz, Stundensatz oder Pauschalhonorar. Alle Preise verstehen sich zzgl. gesetzlicher Umsatzsteuer (sofern diese anfällt). Mehraufwendungen, Reisezeiten, Reisekosten und Nebenkosten werden nach vorheriger Abstimmung gesondert berechnet.',
                },
                {
                  title: '6. Zahlungsbedingungen',
                  content: 'Die Rechnungsstellung erfolgt nach Leistungserbringung oder gemäß vereinbartem Zahlungsplan. Rechnungen sind innerhalb von 14 Tagen ohne Abzüge zahlbar. Bei Zahlungsverzug behält sich QCore Consulting vor, Verzugszinsen gemäß § 288 BGB zu berechnen und weitere Leistungen bis zur Zahlung zurückzuhalten.',
                },
                {
                  title: '7. Geheimhaltung / Vertraulichkeit',
                  content: 'Beide Parteien verpflichten sich zur strikten Vertraulichkeit über alle im Rahmen der Zusammenarbeit erlangten Informationen und Geschäftsgeheimnisse. Diese Pflicht gilt auch nach Beendigung des Vertragsverhältnisses fort.',
                },
                {
                  title: '8. Haftung',
                  content: 'QCore Consulting haftet ausschließlich für Vorsatz oder grobe Fahrlässigkeit. Eine Haftung für leichte Fahrlässigkeit ist ausgeschlossen. Eine Haftung für mittelbare Schäden, entgangenen Gewinn oder Folgeschäden ist ebenfalls ausgeschlossen. Der Auftraggeber bleibt für die Umsetzung aller Maßnahmen und Entscheidungen verantwortlich.',
                },
                {
                  title: '9. Nutzungsrechte an erstellten Dokumenten',
                  content: 'QCore Consulting räumt dem Auftraggeber ein einfaches, zeitlich unbegrenztes Nutzungsrecht an allen im Projekt erstellten Dokumenten ein. Eine Weitergabe an Dritte oder Veröffentlichung ist nur mit Zustimmung von QCore Consulting zulässig.',
                },
                {
                  title: '10. Kündigung / Stornierung',
                  content: 'Der Vertrag kann aus wichtigem Grund von beiden Parteien gekündigt werden. Stornierung bis 7 Tage vor Termin: kostenfrei. 6–3 Tage vor Termin: 50 % der vereinbarten Vergütung. Weniger als 3 Tage vor Termin: 100 % der vereinbarten Vergütung. Bereits erbrachte Leistungen werden in jedem Fall vollständig abgerechnet.',
                },
                {
                  title: '11. Schlussbestimmungen',
                  content: 'Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts. Gerichtsstand ist — soweit rechtlich zulässig — Herzogenaurach. Sollten einzelne Bestimmungen dieser AGB unwirksam sein, bleibt die Wirksamkeit der übrigen Regelungen unberührt (salvatorische Klausel).',
                },
              ].map((section, i) => (
                <div key={i} className={i > 0 ? 'mt-8 pt-8 border-t' : ''} style={{ borderColor: 'rgba(30, 58, 138, 0.1)' }}>
                  <h2
                    className="text-xl font-semibold mb-3"
                    style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}
                  >
                    {section.title}
                  </h2>
                  <p className="leading-relaxed" style={{ color: '#334155' }}>
                    {section.content}
                  </p>
                </div>
              ))}

              <p className="text-sm mt-8" style={{ color: '#94a3b8' }}>Stand: Dezember 2025</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
