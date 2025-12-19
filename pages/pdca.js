import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import QMWissenSidebar from '../../components/QMWissenSidebar';

export default function PDCAArtikel() {
  return (
    <>
      <Head>
        <title>Der PDCA-Zyklus erklärt | QCore Consulting</title>
        <meta name="description" content="PDCA-Zyklus einfach erklärt: Plan-Do-Check-Act als Grundlage kontinuierlicher Verbesserung. Praktische Anwendung und Beispiele." />
      </Head>

      <Navbar />

      <main className="min-h-screen pt-20">
        <div className="flex">
          {/* Sidebar */}
          <QMWissenSidebar currentArticle="pdca" />

          {/* Content */}
          <div className="flex-1 px-8 py-6 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/qm-wissen" className="hover:text-qcore-blue">QM-Wissen</Link>
              <span className="mx-2">›</span>
              <Link href="/qm-wissen#grundlagen" className="hover:text-qcore-blue">Grundlagen</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">Der PDCA-Zyklus</span>
            </nav>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-dark-navy">
                Der PDCA-Zyklus
              </h1>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span>5 Min Lesezeit</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                  <span>Einsteiger</span>
                </div>
              </div>
            </div>

            {/* Artikel-Inhalt */}
            <article className="prose prose-lg max-w-none">

              {/* 1. Was ist PDCA? */}
              <h2 className="text-2xl font-serif text-dark-navy mt-8 mb-4">
                1. Was ist PDCA?
              </h2>

              {/* Definition Box */}
              <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
                <div className="text-qcore-blue text-sm font-medium mb-2">PDCA - Definition</div>
                <p className="text-gray-200 m-0">
                  Systematischer Vier-Phasen-Zyklus zur kontinuierlichen Verbesserung von Prozessen, 
                  Produkten und Dienstleistungen. Auch bekannt als Deming-Kreis oder Shewhart-Zyklus.
                </p>
              </div>

              <p className="text-gray-700">
                PDCA steht für <strong>Plan – Do – Check – Act</strong>. Es ist das Herzstück jedes 
                Qualitätsmanagementsystems und bildet die Grundlage für systematische Verbesserung.
              </p>

              <p className="text-gray-700">
                Der Zyklus wiederholt sich kontinuierlich – nach jedem Durchlauf beginnt der nächste. 
                So entsteht eine Spirale der stetigen Verbesserung.
              </p>

              {/* 2. Die 4 Phasen */}
              <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                2. Die 4 Phasen im Detail
              </h2>

              {/* PDCA Tabelle */}
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-700/80">
                      <th className="text-left p-3 text-gray-200 font-medium">Phase</th>
                      <th className="text-left p-3 text-gray-200 font-medium">Bedeutung</th>
                      <th className="text-left p-3 text-gray-200 font-medium">Kernfragen</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">PLAN</td>
                      <td className="p-3 text-gray-700">Planen</td>
                      <td className="p-3 text-gray-700">Was wollen wir erreichen? Wie messen wir Erfolg?</td>
                    </tr>
                    <tr className="bg-slate-600/20 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">DO</td>
                      <td className="p-3 text-gray-700">Umsetzen</td>
                      <td className="p-3 text-gray-700">Maßnahmen durchführen, Daten sammeln</td>
                    </tr>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">CHECK</td>
                      <td className="p-3 text-gray-700">Überprüfen</td>
                      <td className="p-3 text-gray-700">Haben wir das Ziel erreicht? Was zeigen die Daten?</td>
                    </tr>
                    <tr className="bg-slate-600/20">
                      <td className="p-3 text-gray-800 font-semibold">ACT</td>
                      <td className="p-3 text-gray-700">Handeln</td>
                      <td className="p-3 text-gray-700">Standardisieren oder anpassen? Nächster Zyklus?</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Phase Details */}
              <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
                🎯 PLAN – Die Planungsphase
              </h3>
              <p className="text-gray-700">
                In der Plan-Phase wird das Problem analysiert und ein Verbesserungsziel definiert. 
                Hier entstehen konkrete Maßnahmen mit messbaren Erfolgskriterien.
              </p>
              <ul className="text-gray-700 list-disc pl-6 space-y-1">
                <li>Ist-Zustand analysieren</li>
                <li>Ursachen identifizieren (z.B. mit Ishikawa, 5-Why)</li>
                <li>Ziele und KPIs festlegen</li>
                <li>Maßnahmenplan erstellen</li>
              </ul>

              <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
                ⚡ DO – Die Umsetzungsphase
              </h3>
              <p className="text-gray-700">
                Die geplanten Maßnahmen werden umgesetzt – idealerweise zunächst im kleinen Maßstab 
                (Pilotprojekt), um Risiken zu minimieren.
              </p>
              <ul className="text-gray-700 list-disc pl-6 space-y-1">
                <li>Maßnahmen durchführen</li>
                <li>Daten erheben und dokumentieren</li>
                <li>Abweichungen festhalten</li>
              </ul>

              <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
                🔍 CHECK – Die Überprüfungsphase
              </h3>
              <p className="text-gray-700">
                Die Ergebnisse werden mit den geplanten Zielen verglichen. Diese Phase ist entscheidend 
                – ohne ehrliche Überprüfung keine echte Verbesserung.
              </p>
              <ul className="text-gray-700 list-disc pl-6 space-y-1">
                <li>Soll-Ist-Vergleich durchführen</li>
                <li>Daten auswerten</li>
                <li>Erkenntnisse dokumentieren</li>
              </ul>

              <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
                🔄 ACT – Die Handlungsphase
              </h3>
              <p className="text-gray-700">
                Basierend auf den Erkenntnissen wird entschieden: Standardisieren (wenn erfolgreich) 
                oder anpassen (wenn nicht). Dann beginnt der nächste Zyklus.
              </p>
              <ul className="text-gray-700 list-disc pl-6 space-y-1">
                <li>Erfolgreiche Änderungen standardisieren</li>
                <li>Prozessdokumentation aktualisieren</li>
                <li>Lessons Learned festhalten</li>
                <li>Nächsten PDCA-Zyklus starten</li>
              </ul>

              {/* Praxis-Tipp Box */}
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 my-6">
                <div className="flex items-center gap-2 text-amber-700 font-medium mb-2">
                  <span>💡</span>
                  <span>Praxis-Tipp</span>
                </div>
                <p className="text-gray-700 m-0">
                  Der häufigste Fehler: Die CHECK-Phase wird übersprungen oder oberflächlich durchgeführt. 
                  Nehmen Sie sich Zeit für eine ehrliche Analyse – nur so lernen Sie aus jedem Zyklus.
                </p>
              </div>

              {/* 3. Ursprung */}
              <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                3. Woher kommt PDCA?
              </h2>

              <p className="text-gray-700">
                Der PDCA-Zyklus wurde in den 1930er Jahren von <strong>Walter A. Shewhart</strong> entwickelt 
                und später von <strong>W. Edwards Deming</strong> weiterentwickelt und weltweit bekannt gemacht.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-700/80">
                      <th className="text-left p-3 text-gray-200 font-medium">Jahr</th>
                      <th className="text-left p-3 text-gray-200 font-medium">Ereignis</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800">1930er</td>
                      <td className="p-3 text-gray-700">Shewhart entwickelt den Zyklus bei Bell Labs</td>
                    </tr>
                    <tr className="bg-slate-600/20 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800">1950er</td>
                      <td className="p-3 text-gray-700">Deming bringt PDCA nach Japan</td>
                    </tr>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800">1980er</td>
                      <td className="p-3 text-gray-700">Integration in TQM und Lean Management</td>
                    </tr>
                    <tr className="bg-slate-600/20">
                      <td className="p-3 text-gray-800">Heute</td>
                      <td className="p-3 text-gray-700">Grundlage aller ISO-Managementnormen</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 4. PDCA in der Praxis */}
              <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                4. PDCA in der Praxis: Ein Beispiel
              </h2>

              <p className="text-gray-700">
                <strong>Ausgangssituation:</strong> Ein MedTech-Unternehmen hat eine Reklamationsquote von 3,2% 
                bei einem Produkt. Ziel: Reduktion auf unter 1%.
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-700/80">
                      <th className="text-left p-3 text-gray-200 font-medium">Phase</th>
                      <th className="text-left p-3 text-gray-200 font-medium">Maßnahmen im Beispiel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">PLAN</td>
                      <td className="p-3 text-gray-700">
                        Pareto-Analyse zeigt: 70% der Reklamationen durch Lötfehler. 
                        Maßnahme: Neue Lötprofile, Schulung der Mitarbeiter.
                      </td>
                    </tr>
                    <tr className="bg-slate-600/20 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">DO</td>
                      <td className="p-3 text-gray-700">
                        Pilotlinie mit neuen Parametern. 2 Wochen Testproduktion, 
                        100% Prüfung der Lötverbindungen.
                      </td>
                    </tr>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">CHECK</td>
                      <td className="p-3 text-gray-700">
                        Auswertung: Lötfehler um 85% reduziert. 
                        Gesamtreklamationsquote sinkt auf 0,8%.
                      </td>
                    </tr>
                    <tr className="bg-slate-600/20">
                      <td className="p-3 text-gray-800 font-semibold">ACT</td>
                      <td className="p-3 text-gray-700">
                        Neue Parameter als Standard. Arbeitsanweisung aktualisiert. 
                        Nächster Zyklus: Verpackungsfehler analysieren.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 5. PDCA in der ISO 9001 */}
              <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                5. PDCA in der ISO 9001
              </h2>

              <p className="text-gray-700">
                Die gesamte ISO 9001 ist nach dem PDCA-Prinzip strukturiert. Die Norm-Kapitel 
                lassen sich direkt den vier Phasen zuordnen:
              </p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-700/80">
                      <th className="text-left p-3 text-gray-200 font-medium">Phase</th>
                      <th className="text-left p-3 text-gray-200 font-medium">ISO 9001 Kapitel</th>
                      <th className="text-left p-3 text-gray-200 font-medium">Inhalt</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">PLAN</td>
                      <td className="p-3 text-gray-700">Kap. 4-6</td>
                      <td className="p-3 text-gray-700">Kontext, Führung, Planung</td>
                    </tr>
                    <tr className="bg-slate-600/20 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">DO</td>
                      <td className="p-3 text-gray-700">Kap. 7-8</td>
                      <td className="p-3 text-gray-700">Unterstützung, Betrieb</td>
                    </tr>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">CHECK</td>
                      <td className="p-3 text-gray-700">Kap. 9</td>
                      <td className="p-3 text-gray-700">Bewertung der Leistung</td>
                    </tr>
                    <tr className="bg-slate-600/20">
                      <td className="p-3 text-gray-800 font-semibold">ACT</td>
                      <td className="p-3 text-gray-700">Kap. 10</td>
                      <td className="p-3 text-gray-700">Verbesserung</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Info Box */}
              <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 my-6">
                <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
                  <span>ℹ️</span>
                  <span>Info</span>
                </div>
                <p className="text-gray-700 m-0">
                  Auch die ISO 13485 (Medizinprodukte) und ISO 14001 (Umwelt) folgen der gleichen 
                  PDCA-Struktur. Wer PDCA versteht, versteht das Grundprinzip aller Managementnormen.
                </p>
              </div>

              {/* 6. Häufige Fehler */}
              <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                6. Häufige Fehler beim PDCA
              </h2>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-700/80">
                      <th className="text-left p-3 text-gray-200 font-medium">Fehler</th>
                      <th className="text-left p-3 text-gray-200 font-medium">Auswirkung</th>
                      <th className="text-left p-3 text-gray-200 font-medium">Lösung</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800">Kein messbares Ziel</td>
                      <td className="p-3 text-gray-700">CHECK-Phase unmöglich</td>
                      <td className="p-3 text-gray-700">SMART-Ziele definieren</td>
                    </tr>
                    <tr className="bg-slate-600/20 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800">CHECK überspringen</td>
                      <td className="p-3 text-gray-700">Kein Lerneffekt</td>
                      <td className="p-3 text-gray-700">Zeit für Analyse einplanen</td>
                    </tr>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800">Zu große Schritte</td>
                      <td className="p-3 text-gray-700">Ursache-Wirkung unklar</td>
                      <td className="p-3 text-gray-700">Kleine Pilotprojekte</td>
                    </tr>
                    <tr className="bg-slate-600/20">
                      <td className="p-3 text-gray-800">Keine Standardisierung</td>
                      <td className="p-3 text-gray-700">Verbesserung verpufft</td>
                      <td className="p-3 text-gray-700">Dokumentation aktualisieren</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 7. Fazit */}
              <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                7. Fazit
              </h2>

              <p className="text-gray-700">
                Der PDCA-Zyklus ist simpel – aber mächtig. Er funktioniert für kleine Prozessverbesserungen 
                genauso wie für komplexe Transformationsprojekte.
              </p>

              <p className="text-gray-700">
                <strong>Die wichtigsten Punkte:</strong>
              </p>
              <ul className="text-gray-700 list-disc pl-6 space-y-1">
                <li>PDCA ist ein <strong>kontinuierlicher</strong> Zyklus, kein einmaliges Projekt</li>
                <li>Ohne <strong>messbare Ziele</strong> keine echte Überprüfung</li>
                <li>Die <strong>CHECK-Phase</strong> ist der Schlüssel zum Lernen</li>
                <li>Erfolgreiche Änderungen müssen <strong>standardisiert</strong> werden</li>
              </ul>

              {/* Praxis-Tipp Box */}
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 my-6">
                <div className="flex items-center gap-2 text-amber-700 font-medium mb-2">
                  <span>💡</span>
                  <span>Praxis-Tipp</span>
                </div>
                <p className="text-gray-700 m-0">
                  Starten Sie mit einem kleinen, überschaubaren Problem. Ein erfolgreicher PDCA-Zyklus 
                  schafft Vertrauen in die Methode – und motiviert für den nächsten.
                </p>
              </div>

              {/* Navigation zu anderen Artikeln */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <Link 
                    href="/qm-wissen/iso-9001" 
                    className="text-qcore-blue hover:underline flex items-center gap-2"
                  >
                    <span>←</span>
                    <span>ISO 9001 erklärt</span>
                  </Link>
                  <Link 
                    href="/qm-wissen/begriffe" 
                    className="text-qcore-blue hover:underline flex items-center gap-2"
                  >
                    <span>Begriffe & Definitionen</span>
                    <span>→</span>
                  </Link>
                </div>
              </div>

            </article>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
