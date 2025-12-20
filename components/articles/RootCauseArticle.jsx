import Link from 'next/link';

const RootCauseArticle = () => {
  return (
    <article className="prose prose-lg max-w-none">

      {/* 1. Was ist Root Cause Analysis? */}
      <h2 className="text-2xl font-serif text-dark-navy mt-8 mb-4">
        1. Was ist Root Cause Analysis?
      </h2>

      {/* Definition Box */}
      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">Root Cause Analysis - Definition</div>
        <p className="text-gray-200 m-0">
          <strong>Root Cause Analysis (RCA)</strong> ist ein systematischer Problemlösungsprozess
          zur Identifikation der grundlegenden Ursache(n) eines Problems oder Fehlers. Ziel ist nicht
          die Behandlung von Symptomen, sondern die dauerhafte Beseitigung der Fehlerquelle.
        </p>
      </div>

      <p className="text-gray-700">
        <strong>Der Unterschied:</strong>
      </p>

      {/* Vergleichstabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Ansatz</th>
              <th className="text-left p-3 text-gray-200 font-medium">Frage</th>
              <th className="text-left p-3 text-gray-200 font-medium">Ergebnis</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Symptombehandlung</td>
              <td className="p-3 text-gray-700">"Wie beheben wir das Problem schnell?"</td>
              <td className="p-3 text-gray-700">Problem tritt wieder auf</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800">Root Cause Analysis</td>
              <td className="p-3 text-gray-700">"Warum ist das Problem entstanden?"</td>
              <td className="p-3 text-gray-700">Problem wird dauerhaft gelöst</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Info Box */}
      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Info</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Root Cause Analysis ist keine einzelne Methode, sondern ein Oberbegriff für verschiedene
          Techniken. Die bekanntesten sind <strong>5-Why</strong> und das <strong>Ishikawa-Diagramm</strong>.
        </p>
      </div>

      {/* 2. Die 5-Why-Methode */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        2. Die 5-Why-Methode
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Grundprinzip
      </h3>

      <p className="text-gray-700">
        Die 5-Why-Methode wurde von Taiichi Ohno bei Toyota entwickelt. Das Prinzip ist simpel:
        Frage fünfmal "Warum?", um von der Oberfläche zur Wurzel des Problems vorzudringen.
      </p>

      {/* Definition Box */}
      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">5-Why - Definition</div>
        <p className="text-gray-200 m-0">
          <strong>5-Why:</strong> Iterative Fragetechnik, bei der durch wiederholtes Fragen nach
          dem "Warum" die tieferliegende Ursache eines Problems aufgedeckt wird. Die Zahl 5 ist ein
          Richtwert – manchmal reichen 3 Fragen, manchmal braucht man 7.
        </p>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Beispiel: Maschine steht still
      </h3>

      {/* 5-Why Beispiel Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Frage</th>
              <th className="text-left p-3 text-gray-200 font-medium">Antwort</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>1. Warum</strong> steht die Maschine?</td>
              <td className="p-3 text-gray-700">Die Sicherung ist durchgebrannt.</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>2. Warum</strong> ist die Sicherung durchgebrannt?</td>
              <td className="p-3 text-gray-700">Der Motor war überlastet.</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>3. Warum</strong> war der Motor überlastet?</td>
              <td className="p-3 text-gray-700">Das Lager war nicht ausreichend geschmiert.</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>4. Warum</strong> war das Lager nicht geschmiert?</td>
              <td className="p-3 text-gray-700">Die Schmierpumpe fördert nicht genug.</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800"><strong>5. Warum</strong> fördert die Pumpe nicht genug?</td>
              <td className="p-3 text-gray-700">Der Pumpenfilter ist verstopft.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700">
        <strong>→ Root Cause:</strong> Verstopfter Pumpenfilter<br />
        <strong>→ Maßnahme:</strong> Filterreinigung in Wartungsplan aufnehmen
      </p>

      {/* Praxis-Tipp Box */}
      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">💡</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Praxis-Tipp</h4>
            <p className="text-sm" style={{ color: '#000000' }}>
              Stoppen Sie nicht bei der ersten "bequemen" Antwort. Wenn die Antwort auf ein Why
              mit "menschliches Versagen" endet, fragen Sie weiter: Warum konnte der Mensch diesen
              Fehler machen? Was hat das System nicht verhindert?
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Regeln für effektive 5-Why
      </h3>

      <ol className="text-gray-700 list-decimal pl-6 space-y-1">
        <li><strong>Faktenbasiert arbeiten</strong> – keine Vermutungen</li>
        <li><strong>Am Ort des Geschehens</strong> (Gemba) durchführen</li>
        <li><strong>Team einbeziehen</strong> – verschiedene Perspektiven</li>
        <li><strong>Nicht bei Personen stoppen</strong> – Systemfehler suchen</li>
        <li><strong>Dokumentieren</strong> – für spätere Nachvollziehbarkeit</li>
      </ol>

      {/* Warnung Box */}
      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">⚠️</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Häufiger Fehler</h4>
            <p className="text-sm" style={{ color: '#000000' }}>
              Die 5-Why-Analyse endet bei "Mitarbeiter hat nicht aufgepasst". Das ist keine Root Cause!
              Fragen Sie weiter: Warum konnte er nicht aufpassen? War die Arbeitsanweisung unklar?
              Fehlte eine Prüfung?
            </p>
          </div>
        </div>
      </div>

      {/* 3. Das Ishikawa-Diagramm */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        3. Das Ishikawa-Diagramm (Fischgräten-Diagramm)
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Grundprinzip
      </h3>

      <p className="text-gray-700">
        Das Ishikawa-Diagramm wurde von Kaoru Ishikawa in den 1960er Jahren entwickelt. Es visualisiert
        mögliche Ursachen eines Problems in kategorisierten Zweigen – ähnlich einer Fischgräte.
      </p>

      {/* Definition Box */}
      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">Ishikawa-Diagramm - Definition</div>
        <p className="text-gray-200 m-0">
          <strong>Ishikawa-Diagramm:</strong> Grafische Methode zur strukturierten Sammlung und
          Kategorisierung potenzieller Fehlerursachen. Der "Kopf" des Fisches ist das Problem,
          die "Gräten" sind Ursachenkategorien.
        </p>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Die 6 M (klassische Kategorien)
      </h3>

      {/* 6M Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">M</th>
              <th className="text-left p-3 text-gray-200 font-medium">Kategorie</th>
              <th className="text-left p-3 text-gray-200 font-medium">Beispielfragen</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>M</strong>ensch</td>
              <td className="p-3 text-gray-700">Personal, Qualifikation</td>
              <td className="p-3 text-gray-700">Ausbildung? Erfahrung? Motivation?</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>M</strong>aschine</td>
              <td className="p-3 text-gray-700">Anlagen, Werkzeuge</td>
              <td className="p-3 text-gray-700">Zustand? Wartung? Kalibrierung?</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>M</strong>aterial</td>
              <td className="p-3 text-gray-700">Rohstoffe, Zukaufteile</td>
              <td className="p-3 text-gray-700">Qualität? Spezifikation? Lieferant?</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>M</strong>ethode</td>
              <td className="p-3 text-gray-700">Prozesse, Verfahren</td>
              <td className="p-3 text-gray-700">Arbeitsanweisung? Reihenfolge?</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>M</strong>essung</td>
              <td className="p-3 text-gray-700">Prüfmittel, Messverfahren</td>
              <td className="p-3 text-gray-700">Genauigkeit? Häufigkeit?</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>M</strong>itwelt</td>
              <td className="p-3 text-gray-700">Umgebung, Umwelt</td>
              <td className="p-3 text-gray-700">Temperatur? Feuchtigkeit? Sauberkeit?</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Info Box */}
      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Info</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Je nach Branche werden die Kategorien angepasst. In der Dienstleistung z.B.: Mensch, Methode,
          Material, Management, Umgebung.
        </p>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Durchführung Schritt für Schritt
      </h3>

      <ol className="text-gray-700 list-decimal pl-6 space-y-1">
        <li><strong>Problem definieren</strong> (rechts am "Fischkopf")</li>
        <li><strong>Hauptkategorien festlegen</strong> (6 M oder angepasst)</li>
        <li><strong>Brainstorming</strong> – alle möglichen Ursachen sammeln</li>
        <li><strong>Zuordnen</strong> – Ursachen den Kategorien zuweisen</li>
        <li><strong>Vertiefen</strong> – für jede Ursache: Warum? (Sub-Gräten)</li>
        <li><strong>Priorisieren</strong> – wahrscheinlichste Ursachen markieren</li>
        <li><strong>Verifizieren</strong> – Hypothesen mit Daten prüfen</li>
      </ol>

      {/* Praxis-Tipp Box */}
      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">💡</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Praxis-Tipp</h4>
            <p className="text-sm" style={{ color: '#000000' }}>
              Führen Sie das Ishikawa-Diagramm am Whiteboard oder Flipchart durch – nicht am PC.
              Die visuelle, gemeinsame Arbeit fördert die Kreativität und Beteiligung des Teams.
            </p>
          </div>
        </div>
      </div>

      {/* 4. Weitere RCA-Methoden */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        4. Weitere RCA-Methoden
      </h2>

      {/* Methoden-Übersicht Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Methode</th>
              <th className="text-left p-3 text-gray-200 font-medium">Beschreibung</th>
              <th className="text-left p-3 text-gray-200 font-medium">Einsatz</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>5-Why</strong></td>
              <td className="p-3 text-gray-700">Iteratives Warum-Fragen</td>
              <td className="p-3 text-gray-700">Schnelle Analyse, einfache Probleme</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Ishikawa</strong></td>
              <td className="p-3 text-gray-700">Kategorisierte Ursachensammlung</td>
              <td className="p-3 text-gray-700">Komplexe Probleme, Teamarbeit</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Fault Tree Analysis (FTA)</strong></td>
              <td className="p-3 text-gray-700">Top-Down, logische Verknüpfungen</td>
              <td className="p-3 text-gray-700">Sicherheitskritische Systeme</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Pareto-Analyse</strong></td>
              <td className="p-3 text-gray-700">80/20-Regel, häufigste Ursachen</td>
              <td className="p-3 text-gray-700">Priorisierung bei vielen Fehlern</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Kepner-Tregoe</strong></td>
              <td className="p-3 text-gray-700">Strukturierte Problemanalyse</td>
              <td className="p-3 text-gray-700">Komplexe, unklare Situationen</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>Apollo Root Cause</strong></td>
              <td className="p-3 text-gray-700">Realitätsbasierte Ursachenketten</td>
              <td className="p-3 text-gray-700">Investigative Analysen</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Info Box */}
      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Info</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          In der Praxis werden oft mehrere Methoden kombiniert: Ishikawa für die Ursachensammlung,
          5-Why für die Vertiefung, Pareto für die Priorisierung.
        </p>
      </div>

      {/* 5. RCA in der Praxis */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        5. RCA in der Praxis: Ein Beispiel
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Ausgangssituation
      </h3>

      <p className="text-gray-700">
        Ein MedTech-Unternehmen erhält Kundenreklamationen: "Batterie des tragbaren Monitors entlädt
        sich zu schnell."
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 1: Ishikawa-Brainstorming
      </h3>

      <p className="text-gray-700">
        <strong>Gesammelte Ursachen:</strong>
      </p>

      {/* Ishikawa Ursachen Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Kategorie</th>
              <th className="text-left p-3 text-gray-200 font-medium">Mögliche Ursachen</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Mensch</strong></td>
              <td className="p-3 text-gray-700">Falsche Handhabung, Lagerung beim Kunden</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Maschine</strong></td>
              <td className="p-3 text-gray-700">Produktionsfehler, Lötqualität</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Material</strong></td>
              <td className="p-3 text-gray-700">Batteriequalität, neuer Lieferant</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Methode</strong></td>
              <td className="p-3 text-gray-700">Firmware-Bug, Energiemanagement</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Messung</strong></td>
              <td className="p-3 text-gray-700">Endprüfung erfasst Problem nicht</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>Mitwelt</strong></td>
              <td className="p-3 text-gray-700">Transport, Temperatur im Lager</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 2: Priorisierung mit Daten
      </h3>

      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li>Reklamationen erst seit Monat X → Korrelation mit neuem Batterielieferant</li>
        <li>Seriennummern-Analyse → betrifft nur bestimmte Chargen</li>
        <li>Labor-Test → neue Batterien haben 15% weniger Kapazität als spezifiziert</li>
      </ul>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 3: 5-Why auf priorisierte Ursache
      </h3>

      {/* 5-Why Praxisbeispiel Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Frage</th>
              <th className="text-left p-3 text-gray-200 font-medium">Antwort</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>1. Warum</strong> entlädt sich die Batterie zu schnell?</td>
              <td className="p-3 text-gray-700">Die Kapazität ist geringer als spezifiziert.</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>2. Warum</strong> ist die Kapazität geringer?</td>
              <td className="p-3 text-gray-700">Der neue Lieferant verwendet andere Zellen.</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>3. Warum</strong> wurden andere Zellen akzeptiert?</td>
              <td className="p-3 text-gray-700">Die Wareneingangsprüfung prüft nur Spannung, nicht Kapazität.</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>4. Warum</strong> wird Kapazität nicht geprüft?</td>
              <td className="p-3 text-gray-700">Es gab keine Spezifikation dafür.</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800"><strong>5. Warum</strong> keine Spezifikation?</td>
              <td className="p-3 text-gray-700">Bei Lieferantenwechsel wurde kein Design Review durchgeführt.</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700">
        <strong>→ Root Cause:</strong> Fehlender Design Review bei Lieferantenwechsel<br />
        <strong>→ Maßnahme:</strong> Prozess "Lieferantenwechsel kritischer Komponenten" mit verpflichtendem Review einführen
      </p>

      {/* 6. RCA im Qualitätsmanagement */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        6. RCA im Qualitätsmanagement
      </h2>

      {/* Normen Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Norm</th>
              <th className="text-left p-3 text-gray-200 font-medium">Anforderung</th>
              <th className="text-left p-3 text-gray-200 font-medium">Kapitel</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">ISO 9001</td>
              <td className="p-3 text-gray-700">Ursachenanalyse bei Nichtkonformitäten</td>
              <td className="p-3 text-gray-700">10.2.1</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">ISO 13485</td>
              <td className="p-3 text-gray-700">Korrekturmaßnahmen inkl. Ursachenanalyse</td>
              <td className="p-3 text-gray-700">8.5.2</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">IATF 16949</td>
              <td className="p-3 text-gray-700">Systematische Problemlösung (8D)</td>
              <td className="p-3 text-gray-700">10.2.3</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800">FDA 21 CFR 820</td>
              <td className="p-3 text-gray-700">CAPA mit Root Cause</td>
              <td className="p-3 text-gray-700">§820.100</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Info Box */}
      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Info</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          RCA ist keine eigenständige Norm-Anforderung, sondern integraler Bestandteil von CAPA
          (Corrective and Preventive Action). Ohne echte Ursachenanalyse keine wirksame Korrekturmaßnahme.
        </p>
      </div>

      {/* 7. Häufige Fehler */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        7. Häufige Fehler bei der Root Cause Analysis
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 1: Zu früh aufhören
      </h3>
      <p className="text-gray-700">
        Nach dem ersten "Warum" ist meist nur ein Symptom gefunden. Graben Sie tiefer!
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 2: Schuld statt System
      </h3>
      <p className="text-gray-700">
        "Mitarbeiter X hat Fehler gemacht" ist keine Root Cause. Fragen Sie: Warum konnte der Fehler
        passieren? Was hat das System nicht verhindert?
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 3: Keine Daten
      </h3>
      <p className="text-gray-700">
        Vermutungen statt Fakten führen zu falschen Maßnahmen. Verifizieren Sie Ihre Hypothesen!
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 4: Alleine arbeiten
      </h3>
      <p className="text-gray-700">
        RCA ist Teamarbeit. Unterschiedliche Perspektiven finden unterschiedliche Ursachen.
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 5: Keine Dokumentation
      </h3>
      <p className="text-gray-700">
        Ohne Dokumentation gehen Erkenntnisse verloren. Ähnliche Probleme werden erneut analysiert.
      </p>

      {/* 8. Zusammenfassung */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        8. Zusammenfassung
      </h2>

      <div className="bg-slate-700/80 rounded-lg p-6 my-6">
        <h3 className="text-qcore-cyan text-lg font-semibold mb-3">Root Cause Analysis auf einen Blick</h3>
        <ul className="text-gray-200 space-y-2">
          <li>✓ Ziel: Grundursache finden, nicht Symptome behandeln</li>
          <li>✓ <strong>5-Why:</strong> Einfach, schnell, iterativ</li>
          <li>✓ <strong>Ishikawa:</strong> Strukturiert, visuell, für komplexe Probleme</li>
          <li>✓ Immer im Team durchführen</li>
          <li>✓ Faktenbasiert arbeiten, Hypothesen verifizieren</li>
          <li>✓ System hinterfragen, nicht Menschen beschuldigen</li>
          <li>✓ Ergebnisse dokumentieren</li>
        </ul>
      </div>

      {/* CTA-Bereich */}
      <div className="bg-qcore-navy bg-opacity-30 rounded-lg p-8 mt-12 text-center border border-gray-600">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
          Probleme tauchen immer wieder auf?
        </h3>
        <p className="mb-6" style={{ color: '#000000' }}>
          Mit Erfahrung in systematischer Problemlösung unterstütze ich Sie bei RCA-Workshops,
          der Etablierung systematischer Problemlösungsprozesse und dem Aufbau wirksamer CAPA-Systeme -
          pragmatisch und nachhaltig.
        </p>
        <Link
          href="/kontakt"
          className="inline-block bg-qcore-blue text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Kostenloses Erstgespräch vereinbaren
        </Link>
      </div>

    </article>
  );
};

export default RootCauseArticle;
