import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QMWissenSidebar from '../components/QMWissenSidebar';

export default function BegriffeArtikel() {
  return (
    <>
      <Head>
        <title>QM Begriffe & Definitionen | QCore Consulting</title>
        <meta name="description" content="Die wichtigsten Begriffe im Qualitätsmanagement erklärt: Von Audit bis Validierung. Kompaktes Glossar für Einsteiger und Profis." />
      </Head>

      <Navigation />

      <main className="min-h-screen pt-20">
        <div className="flex">
          {/* Sidebar */}
          <QMWissenSidebar currentArticle="begriffe" />

          {/* Content */}
          <div className="flex-1 px-8 py-6 max-w-4xl">
            {/* Breadcrumb */}
            <nav className="text-sm text-gray-500 mb-6">
              <Link href="/qm-wissen" className="hover:text-qcore-blue">QM-Wissen</Link>
              <span className="mx-2">›</span>
              <Link href="/qm-wissen#grundlagen" className="hover:text-qcore-blue">Grundlagen</Link>
              <span className="mx-2">›</span>
              <span className="text-gray-700">Begriffe & Definitionen</span>
            </nav>

            {/* Header */}
            <div className="flex justify-between items-start mb-8">
              <h1 className="text-4xl md:text-5xl font-serif text-dark-navy">
                Begriffe & Definitionen
              </h1>
              <div className="text-right text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-qcore-blue"></span>
                  <span>6 Min Lesezeit</span>
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

              {/* Einleitung */}
              <p className="text-gray-700 text-lg">
                Qualitätsmanagement hat seine eigene Sprache. Dieses Glossar erklärt die wichtigsten 
                Begriffe – von A wie Audit bis V wie Validierung.
              </p>

              {/* Info Box */}
              <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 my-6">
                <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
                  <span>ℹ️</span>
                  <span>Info</span>
                </div>
                <p className="text-gray-700 m-0">
                  Die Definitionen orientieren sich an der ISO 9000:2015, der offiziellen Norm 
                  für QM-Grundlagen und Begriffe.
                </p>
              </div>

              {/* Schnellnavigation */}
              <div className="bg-slate-100 rounded-lg p-4 mb-8">
                <div className="text-sm font-medium text-gray-600 mb-2">Schnellnavigation</div>
                <div className="flex flex-wrap gap-2">
                  {['A', 'C', 'D', 'F', 'K', 'N', 'P', 'Q', 'R', 'V', 'W'].map((letter) => (
                    <a 
                      key={letter}
                      href={`#${letter.toLowerCase()}`} 
                      className="px-3 py-1 bg-white border border-gray-300 rounded hover:border-qcore-blue hover:text-qcore-blue transition-colors"
                    >
                      {letter}
                    </a>
                  ))}
                </div>
              </div>

              {/* A */}
              <h2 id="a" className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                A
              </h2>

              <div className="space-y-4">
                {/* Audit */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Audit</div>
                  <p className="text-gray-200 m-0">
                    Systematischer, unabhängiger und dokumentierter Prozess zur Erlangung von 
                    Nachweisen und deren objektiver Auswertung, um zu bestimmen, inwieweit 
                    Kriterien erfüllt sind.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-700/80">
                        <th className="text-left p-3 text-gray-200 font-medium">Audit-Typ</th>
                        <th className="text-left p-3 text-gray-200 font-medium">Beschreibung</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-slate-600/30 border-b border-slate-600/50">
                        <td className="p-3 text-gray-800 font-semibold">1st Party (Intern)</td>
                        <td className="p-3 text-gray-700">Organisation prüft sich selbst</td>
                      </tr>
                      <tr className="bg-slate-600/20 border-b border-slate-600/50">
                        <td className="p-3 text-gray-800 font-semibold">2nd Party (Lieferant)</td>
                        <td className="p-3 text-gray-700">Kunde prüft seinen Lieferanten</td>
                      </tr>
                      <tr className="bg-slate-600/30">
                        <td className="p-3 text-gray-800 font-semibold">3rd Party (Zertifizierung)</td>
                        <td className="p-3 text-gray-700">Unabhängige Stelle prüft (z.B. TÜV, DEKRA)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Abweichung */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Abweichung (Nonconformity)</div>
                  <p className="text-gray-200 m-0">
                    Nichterfüllung einer Anforderung. Kann sich auf Produkte, Prozesse oder das 
                    Managementsystem beziehen.
                  </p>
                </div>

                {/* Anforderung */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Anforderung (Requirement)</div>
                  <p className="text-gray-200 m-0">
                    Erfordernis oder Erwartung, das/die festgelegt, üblicherweise vorausgesetzt 
                    oder verpflichtend ist.
                  </p>
                </div>
              </div>

              {/* C */}
              <h2 id="c" className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                C
              </h2>

              <div className="space-y-4">
                {/* CAPA */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">CAPA (Corrective and Preventive Action)</div>
                  <p className="text-gray-200 m-0">
                    Systematischer Prozess zur Beseitigung der Ursachen von Fehlern (Korrektur) 
                    und zur Vermeidung potenzieller Fehler (Prävention).
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-700/80">
                        <th className="text-left p-3 text-gray-200 font-medium">Begriff</th>
                        <th className="text-left p-3 text-gray-200 font-medium">Fokus</th>
                        <th className="text-left p-3 text-gray-200 font-medium">Zeitpunkt</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-slate-600/30 border-b border-slate-600/50">
                        <td className="p-3 text-gray-800 font-semibold">Korrektur</td>
                        <td className="p-3 text-gray-700">Symptom beseitigen</td>
                        <td className="p-3 text-gray-700">Nach dem Fehler</td>
                      </tr>
                      <tr className="bg-slate-600/20 border-b border-slate-600/50">
                        <td className="p-3 text-gray-800 font-semibold">Korrekturmaßnahme</td>
                        <td className="p-3 text-gray-700">Ursache beseitigen</td>
                        <td className="p-3 text-gray-700">Nach dem Fehler</td>
                      </tr>
                      <tr className="bg-slate-600/30">
                        <td className="p-3 text-gray-800 font-semibold">Vorbeugemaßnahme</td>
                        <td className="p-3 text-gray-700">Potenzielle Ursache eliminieren</td>
                        <td className="p-3 text-gray-700">Vor dem Fehler</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* D */}
              <h2 id="d" className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                D
              </h2>

              <div className="space-y-4">
                {/* Dokumentierte Information */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Dokumentierte Information</div>
                  <p className="text-gray-200 m-0">
                    Information, die von einer Organisation gelenkt und aufrechterhalten werden muss, 
                    und das Medium, auf dem sie enthalten ist. Ersetzt die alten Begriffe "Dokument" 
                    und "Aufzeichnung".
                  </p>
                </div>
              </div>

              {/* Praxis-Tipp Box */}
              <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 my-6">
                <div className="flex items-center gap-2 text-amber-700 font-medium mb-2">
                  <span>💡</span>
                  <span>Praxis-Tipp</span>
                </div>
                <p className="text-gray-700 m-0">
                  Der Begriff "dokumentierte Information" ist bewusst technologie-neutral. 
                  Ob Papier, PDF oder Datenbank – die Norm schreibt kein Format vor.
                </p>
              </div>

              {/* F */}
              <h2 id="f" className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                F
              </h2>

              <div className="space-y-4">
                {/* FMEA */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">FMEA (Fehlermöglichkeits- und Einflussanalyse)</div>
                  <p className="text-gray-200 m-0">
                    Systematische Methode zur Identifikation und Bewertung potenzieller Fehler 
                    in Produkten oder Prozessen, bevor sie auftreten.
                  </p>
                </div>

                {/* Freigabe */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Freigabe (Release)</div>
                  <p className="text-gray-200 m-0">
                    Erlaubnis, zur nächsten Stufe eines Prozesses oder zum nächsten Prozess überzugehen.
                  </p>
                </div>
              </div>

              {/* K */}
              <h2 id="k" className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                K
              </h2>

              <div className="space-y-4">
                {/* Kontext der Organisation */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Kontext der Organisation</div>
                  <p className="text-gray-200 m-0">
                    Kombination interner und externer Themen, die Einfluss auf die strategische 
                    Ausrichtung und die Fähigkeit der Organisation haben, ihre Ziele zu erreichen.
                  </p>
                </div>

                {/* KVP */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">KVP (Kontinuierlicher Verbesserungsprozess)</div>
                  <p className="text-gray-200 m-0">
                    Fortlaufende Aktivitäten zur Verbesserung der Leistung. Basiert auf dem 
                    PDCA-Zyklus und ist Kernforderung jeder ISO-Managementnorm.
                  </p>
                </div>

                {/* Kalibrierung */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Kalibrierung</div>
                  <p className="text-gray-200 m-0">
                    Vergleich eines Messgeräts mit einem Normal (Referenz) unter festgelegten 
                    Bedingungen, um Abweichungen zu ermitteln.
                  </p>
                </div>
              </div>

              {/* N */}
              <h2 id="n" className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                N
              </h2>

              <div className="space-y-4">
                {/* Nichtkonformität */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Nichtkonformität</div>
                  <p className="text-gray-200 m-0">
                    Siehe "Abweichung". Die Begriffe werden synonym verwendet.
                  </p>
                </div>
              </div>

              {/* P */}
              <h2 id="p" className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                P
              </h2>

              <div className="space-y-4">
                {/* Prozess */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Prozess</div>
                  <p className="text-gray-200 m-0">
                    Satz zusammenhängender oder sich gegenseitig beeinflussender Tätigkeiten, 
                    der Eingaben in Ergebnisse umwandelt.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-700/80">
                        <th className="text-left p-3 text-gray-200 font-medium">Prozesstyp</th>
                        <th className="text-left p-3 text-gray-200 font-medium">Beispiele</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-slate-600/30 border-b border-slate-600/50">
                        <td className="p-3 text-gray-800 font-semibold">Führungsprozesse</td>
                        <td className="p-3 text-gray-700">Strategie, Planung, Management Review</td>
                      </tr>
                      <tr className="bg-slate-600/20 border-b border-slate-600/50">
                        <td className="p-3 text-gray-800 font-semibold">Kernprozesse</td>
                        <td className="p-3 text-gray-700">Entwicklung, Produktion, Vertrieb</td>
                      </tr>
                      <tr className="bg-slate-600/30">
                        <td className="p-3 text-gray-800 font-semibold">Unterstützungsprozesse</td>
                        <td className="p-3 text-gray-700">HR, IT, Einkauf, QM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* PDCA */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">PDCA-Zyklus</div>
                  <p className="text-gray-200 m-0">
                    Plan-Do-Check-Act. Systematischer Vier-Phasen-Zyklus zur kontinuierlichen 
                    Verbesserung. <Link href="/qm-wissen/pdca" className="text-qcore-blue hover:underline">→ Mehr erfahren</Link>
                  </p>
                </div>
              </div>

              {/* Q */}
              <h2 id="q" className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                Q
              </h2>

              <div className="space-y-4">
                {/* Qualität */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Qualität</div>
                  <p className="text-gray-200 m-0">
                    Grad, in dem ein Satz inhärenter Merkmale eines Objekts Anforderungen erfüllt.
                  </p>
                </div>

                {/* Info Box */}
                <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
                    <span>ℹ️</span>
                    <span>Info</span>
                  </div>
                  <p className="text-gray-700 m-0">
                    Qualität ist relativ – sie bezieht sich immer auf definierte Anforderungen. 
                    Ein Produkt kann für einen Kunden "hohe Qualität" haben, für einen anderen nicht.
                  </p>
                </div>

                {/* QMS */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">QMS (Qualitätsmanagementsystem)</div>
                  <p className="text-gray-200 m-0">
                    Managementsystem bezüglich Qualität. Umfasst Tätigkeiten, mit denen die Organisation 
                    ihre Qualitätsziele festlegt und die Prozesse und Ressourcen bestimmt, die zur 
                    Erreichung der Ziele erforderlich sind.
                  </p>
                </div>

                {/* QMB */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">QMB (Qualitätsmanagementbeauftragter)</div>
                  <p className="text-gray-200 m-0">
                    Person mit der Verantwortung für das Qualitätsmanagementsystem. 
                    Seit ISO 9001:2015 nicht mehr explizit gefordert, aber in der Praxis weiterhin 
                    übliche Rolle.
                  </p>
                </div>
              </div>

              {/* R */}
              <h2 id="r" className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                R
              </h2>

              <div className="space-y-4">
                {/* Risiko */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Risiko</div>
                  <p className="text-gray-200 m-0">
                    Auswirkung von Ungewissheit. Kann positiv (Chance) oder negativ (Gefahr) sein.
                  </p>
                </div>

                {/* Risikobasiertes Denken */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Risikobasiertes Denken (Risk-based Thinking)</div>
                  <p className="text-gray-200 m-0">
                    Ansatz der ISO 9001:2015, bei dem Risiken und Chancen bei der Planung und 
                    Durchführung von Prozessen berücksichtigt werden. Ersetzt formal das 
                    "Vorbeugende Maßnahmen"-Kapitel der älteren Norm.
                  </p>
                </div>

                {/* Rückverfolgbarkeit */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Rückverfolgbarkeit (Traceability)</div>
                  <p className="text-gray-200 m-0">
                    Möglichkeit, den Werdegang, die Verwendung oder den Ort eines Objekts zu verfolgen.
                    Besonders wichtig in der Medizintechnik und Lebensmittelindustrie.
                  </p>
                </div>
              </div>

              {/* V */}
              <h2 id="v" className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                V
              </h2>

              <div className="space-y-4">
                {/* Validierung vs Verifizierung */}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-700/80">
                        <th className="text-left p-3 text-gray-200 font-medium">Begriff</th>
                        <th className="text-left p-3 text-gray-200 font-medium">Frage</th>
                        <th className="text-left p-3 text-gray-200 font-medium">Beispiel</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-slate-600/30 border-b border-slate-600/50">
                        <td className="p-3 text-gray-800 font-semibold">Verifizierung</td>
                        <td className="p-3 text-gray-700">"Bauen wir das Produkt richtig?"</td>
                        <td className="p-3 text-gray-700">Entspricht das Produkt den Spezifikationen?</td>
                      </tr>
                      <tr className="bg-slate-600/20">
                        <td className="p-3 text-gray-800 font-semibold">Validierung</td>
                        <td className="p-3 text-gray-700">"Bauen wir das richtige Produkt?"</td>
                        <td className="p-3 text-gray-700">Erfüllt das Produkt den Kundenbedarf?</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Praxis-Tipp Box */}
                <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-amber-700 font-medium mb-2">
                    <span>💡</span>
                    <span>Praxis-Tipp</span>
                  </div>
                  <p className="text-gray-700 m-0">
                    Eselsbrücke: <strong>Veri</strong>fizierung = <strong>Veri</strong>fy against specifications. 
                    <strong>Vali</strong>dierung = <strong>Vali</strong>date with customer/user.
                  </p>
                </div>
              </div>

              {/* W */}
              <h2 id="w" className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                W
              </h2>

              <div className="space-y-4">
                {/* Wirksamkeit */}
                <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                  <div className="text-qcore-blue text-sm font-medium mb-2">Wirksamkeit (Effectiveness)</div>
                  <p className="text-gray-200 m-0">
                    Ausmaß, in dem geplante Tätigkeiten verwirklicht und geplante Ergebnisse 
                    erreicht werden.
                  </p>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-slate-700/80">
                        <th className="text-left p-3 text-gray-200 font-medium">Begriff</th>
                        <th className="text-left p-3 text-gray-200 font-medium">Frage</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-slate-600/30 border-b border-slate-600/50">
                        <td className="p-3 text-gray-800 font-semibold">Wirksamkeit</td>
                        <td className="p-3 text-gray-700">"Tun wir die richtigen Dinge?"</td>
                      </tr>
                      <tr className="bg-slate-600/20">
                        <td className="p-3 text-gray-800 font-semibold">Effizienz</td>
                        <td className="p-3 text-gray-700">"Tun wir die Dinge richtig?" (Ressourceneinsatz)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Zusammenfassung */}
              <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
                Übersicht: Die 10 wichtigsten Begriffe
              </h2>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-slate-700/80">
                      <th className="text-left p-3 text-gray-200 font-medium">Begriff</th>
                      <th className="text-left p-3 text-gray-200 font-medium">Kurzform</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">Qualität</td>
                      <td className="p-3 text-gray-700">Erfüllung von Anforderungen</td>
                    </tr>
                    <tr className="bg-slate-600/20 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">Prozess</td>
                      <td className="p-3 text-gray-700">Eingaben → Tätigkeiten → Ergebnisse</td>
                    </tr>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">Audit</td>
                      <td className="p-3 text-gray-700">Systematische Überprüfung</td>
                    </tr>
                    <tr className="bg-slate-600/20 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">CAPA</td>
                      <td className="p-3 text-gray-700">Korrektur- und Vorbeugemaßnahmen</td>
                    </tr>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">Verifizierung</td>
                      <td className="p-3 text-gray-700">Prüfung gegen Spezifikation</td>
                    </tr>
                    <tr className="bg-slate-600/20 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">Validierung</td>
                      <td className="p-3 text-gray-700">Prüfung gegen Kundenbedarf</td>
                    </tr>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">Risiko</td>
                      <td className="p-3 text-gray-700">Auswirkung von Ungewissheit</td>
                    </tr>
                    <tr className="bg-slate-600/20 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">KVP</td>
                      <td className="p-3 text-gray-700">Ständige Verbesserung (PDCA)</td>
                    </tr>
                    <tr className="bg-slate-600/30 border-b border-slate-600/50">
                      <td className="p-3 text-gray-800 font-semibold">Wirksamkeit</td>
                      <td className="p-3 text-gray-700">Zielerreichung</td>
                    </tr>
                    <tr className="bg-slate-600/20">
                      <td className="p-3 text-gray-800 font-semibold">Dokumentierte Information</td>
                      <td className="p-3 text-gray-700">Dokumente + Aufzeichnungen</td>
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
                  Die vollständigen Definitionen finden Sie in der ISO 9000:2015 
                  "Qualitätsmanagementsysteme – Grundlagen und Begriffe".
                </p>
              </div>

              {/* Navigation zu anderen Artikeln */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <Link 
                    href="/qm-wissen/pdca" 
                    className="text-qcore-blue hover:underline flex items-center gap-2"
                  >
                    <span>←</span>
                    <span>Der PDCA-Zyklus</span>
                  </Link>
                  <Link 
                    href="/qm-wissen/fmea" 
                    className="text-qcore-blue hover:underline flex items-center gap-2"
                  >
                    <span>FMEA Grundlagen</span>
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
