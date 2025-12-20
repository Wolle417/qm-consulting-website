import Link from 'next/link';

const FMEAArticle = () => {
  return (
    <article className="prose prose-lg max-w-none">

      {/* 1. Was ist eine FMEA? */}
      <h2 className="text-2xl font-serif text-dark-navy mt-8 mb-4">
        1. Was ist eine FMEA?
      </h2>

      {/* Definition Box */}
      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">FMEA - Definition</div>
        <p className="text-gray-200 m-0">
          <strong>FMEA (Failure Mode and Effects Analysis)</strong> ist eine systematische, präventive
          Analysemethode zur Identifikation potenzieller Fehler, deren Ursachen und Auswirkungen –
          bevor sie auftreten. Ziel ist die Risikominimierung durch frühzeitige Gegenmaßnahmen.
        </p>
      </div>

      <p className="text-gray-700">
        Die FMEA wurde in den 1960er Jahren von der NASA für das Apollo-Programm entwickelt.
        Heute ist sie Standard in nahezu allen Industrien – von Automotive über Medizintechnik
        bis zur Luft- und Raumfahrt.
      </p>

      <p className="text-gray-700">
        <strong>Kernidee:</strong> Fehler zu finden ist teuer. Fehler zu verhindern ist günstiger.
        Je früher ein Fehler erkannt wird, desto geringer die Kosten.
      </p>

      {/* Fehlerkosten Tabelle */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Entdeckungszeitpunkt</th>
              <th className="text-left p-3 text-gray-200 font-medium">Relative Kosten</th>
              <th className="text-left p-3 text-gray-200 font-medium">Beispiel</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Konzeptphase</td>
              <td className="p-3 text-gray-700 font-semibold">1x</td>
              <td className="p-3 text-gray-700">Fehler im CAD erkannt</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Entwicklung</td>
              <td className="p-3 text-gray-700 font-semibold">10x</td>
              <td className="p-3 text-gray-700">Prototyp versagt im Test</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Produktion</td>
              <td className="p-3 text-gray-700 font-semibold">100x</td>
              <td className="p-3 text-gray-700">Ausschuss, Nacharbeit</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Beim Kunden</td>
              <td className="p-3 text-gray-700 font-semibold">1.000x</td>
              <td className="p-3 text-gray-700">Rückruf, Imageschaden</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800">Feldversagen (kritisch)</td>
              <td className="p-3 text-gray-700 font-semibold">10.000x+</td>
              <td className="p-3 text-gray-700">Produkthaftung, Verletzungen</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2. FMEA-Arten */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        2. FMEA-Arten: Design vs. Prozess
      </h2>

      <p className="text-gray-700">
        Es gibt zwei Haupttypen der FMEA, die sich in ihrem Fokus unterscheiden:
      </p>

      {/* Design-FMEA vs. Prozess-FMEA Tabelle */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Aspekt</th>
              <th className="text-left p-3 text-gray-200 font-medium">Design-FMEA (DFMEA)</th>
              <th className="text-left p-3 text-gray-200 font-medium">Prozess-FMEA (PFMEA)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800 font-semibold">Fokus</td>
              <td className="p-3 text-gray-700">Produktdesign</td>
              <td className="p-3 text-gray-700">Fertigungsprozess</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800 font-semibold">Fragestellung</td>
              <td className="p-3 text-gray-700">"Was kann am Produkt versagen?"</td>
              <td className="p-3 text-gray-700">"Was kann bei der Herstellung schiefgehen?"</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800 font-semibold">Zeitpunkt</td>
              <td className="p-3 text-gray-700">Entwicklungsphase</td>
              <td className="p-3 text-gray-700">Prozessplanung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800 font-semibold">Verantwortung</td>
              <td className="p-3 text-gray-700">Entwicklung/Konstruktion</td>
              <td className="p-3 text-gray-700">Produktion/Qualität</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800 font-semibold">Beispiel</td>
              <td className="p-3 text-gray-700">Schweißnaht reißt unter Last</td>
              <td className="p-3 text-gray-700">Schweißtemperatur zu niedrig eingestellt</td>
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
          In der Medizintechnik (ISO 13485) wird zusätzlich oft eine <strong>Use-FMEA</strong>
          (Anwendungs-FMEA) durchgeführt, die analysiert, wie Anwender das Produkt falsch
          benutzen könnten.
        </p>
      </div>

      {/* 3. Die 7 Schritte */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        3. Die 7 Schritte der FMEA
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 1: FMEA-Team zusammenstellen
      </h3>
      <p className="text-gray-700">
        Eine FMEA ist Teamarbeit. Typische Teilnehmer:
      </p>
      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li>Konstruktion/Entwicklung</li>
        <li>Produktion/Fertigung</li>
        <li>Qualitätsmanagement</li>
        <li>Einkauf (bei kritischen Zukaufteilen)</li>
        <li>Service/Kundendienst (bei Felderfahrung)</li>
      </ul>

      {/* Praxis-Tipp Box */}
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 text-amber-700 font-medium mb-2">
          <span>💡</span>
          <span>Praxis-Tipp</span>
        </div>
        <p className="text-gray-700 m-0">
          Laden Sie immer einen "Querdenker" ein – jemanden, der nicht täglich am Produkt
          arbeitet. Frische Perspektiven finden Fehler, die Insider übersehen.
        </p>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 2: Systemgrenzen und Umfang definieren
      </h3>
      <p className="text-gray-700">
        Bevor Sie loslegen: Was genau wird analysiert?
      </p>
      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li>Welche Baugruppe/welcher Prozess?</li>
        <li>Welche Schnittstellen?</li>
        <li>Welche Betriebszustände (normal, Grenzbereich, Fehlbedienung)?</li>
        <li>Welche Normanforderungen gelten?</li>
      </ul>

      {/* Info Box */}
      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
          <span>ℹ️</span>
          <span>Info</span>
        </div>
        <p className="text-gray-700 m-0">
          Eine zu breite FMEA wird oberflächlich. Eine zu enge übersieht Systemfehler.
          Die richtige Granularität ist entscheidend.
        </p>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 3: Funktionen und Anforderungen analysieren
      </h3>
      <p className="text-gray-700">
        Für jedes Element definieren:
      </p>
      <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
        <li><strong>Funktion:</strong> Was soll es tun?</li>
        <li><strong>Anforderung:</strong> Welche Spezifikation muss erfüllt sein?</li>
      </ul>

      {/* Beispiel-Tabelle */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Element</th>
              <th className="text-left p-3 text-gray-200 font-medium">Funktion</th>
              <th className="text-left p-3 text-gray-200 font-medium">Anforderung</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Dichtung</td>
              <td className="p-3 text-gray-700">Flüssigkeit abdichten</td>
              <td className="p-3 text-gray-700">Leckrate &lt; 0,1 ml/min bei 3 bar</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Sensor</td>
              <td className="p-3 text-gray-700">Temperatur messen</td>
              <td className="p-3 text-gray-700">Genauigkeit ±0,5°C im Bereich 0-100°C</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800">Gehäuse</td>
              <td className="p-3 text-gray-700">Elektronik schützen</td>
              <td className="p-3 text-gray-700">IP67, Falltest 1m auf Beton</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 4: Fehlerarten identifizieren (Failure Modes)
      </h3>
      <p className="text-gray-700">
        Für jede Funktion: Was kann schiefgehen?
      </p>
      <p className="text-gray-700">
        <strong>Systematische Fragestellungen:</strong>
      </p>
      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li>Funktion wird nicht erfüllt</li>
        <li>Funktion wird nur teilweise erfüllt</li>
        <li>Funktion wird übermäßig erfüllt</li>
        <li>Funktion wird intermittierend erfüllt</li>
        <li>Funktion wird zum falschen Zeitpunkt erfüllt</li>
      </ul>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 5: Risikobewertung (S × O × D)
      </h3>
      <p className="text-gray-700">
        Das Herzstück der FMEA: Jede Fehlerart wird nach drei Kriterien bewertet:
      </p>

      {/* Bewertungskriterien Tabelle */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Kriterium</th>
              <th className="text-left p-3 text-gray-200 font-medium">Abkürzung</th>
              <th className="text-left p-3 text-gray-200 font-medium">Frage</th>
              <th className="text-left p-3 text-gray-200 font-medium">Skala</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800 font-semibold">Severity (Bedeutung)</td>
              <td className="p-3 text-gray-700">S</td>
              <td className="p-3 text-gray-700">Wie schwerwiegend ist die Auswirkung?</td>
              <td className="p-3 text-gray-700">1-10</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800 font-semibold">Occurrence (Auftreten)</td>
              <td className="p-3 text-gray-700">O</td>
              <td className="p-3 text-gray-700">Wie wahrscheinlich tritt der Fehler auf?</td>
              <td className="p-3 text-gray-700">1-10</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800 font-semibold">Detection (Entdeckung)</td>
              <td className="p-3 text-gray-700">D</td>
              <td className="p-3 text-gray-700">Wie wahrscheinlich wird der Fehler entdeckt?</td>
              <td className="p-3 text-gray-700">1-10</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700">
        <strong>Risikoprioritätszahl (RPZ) = S × O × D</strong>
      </p>
      <p className="text-gray-700">
        Wertebereich: 1 (minimales Risiko) bis 1.000 (maximales Risiko)
      </p>

      {/* Severity Skala Tabelle */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">S</th>
              <th className="text-left p-3 text-gray-200 font-medium">Bedeutung</th>
              <th className="text-left p-3 text-gray-200 font-medium">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">1</td>
              <td className="p-3 text-gray-700">Keine</td>
              <td className="p-3 text-gray-700">Fehler hat keine Auswirkung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">2-3</td>
              <td className="p-3 text-gray-700">Gering</td>
              <td className="p-3 text-gray-700">Kunde bemerkt Fehler kaum</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">4-6</td>
              <td className="p-3 text-gray-700">Mäßig</td>
              <td className="p-3 text-gray-700">Kunde unzufrieden, Funktion eingeschränkt</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">7-8</td>
              <td className="p-3 text-gray-700">Hoch</td>
              <td className="p-3 text-gray-700">Funktion versagt, Reklamation wahrscheinlich</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">9</td>
              <td className="p-3 text-gray-700">Sehr hoch</td>
              <td className="p-3 text-gray-700">Sicherheitsrelevant, Gesetzesverstoß möglich</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800">10</td>
              <td className="p-3 text-gray-700">Gefährlich</td>
              <td className="p-3 text-gray-700">Personenschaden möglich ohne Vorwarnung</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Warnung Box */}
      <div className="bg-orange-50 border-l-4 border-orange-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 text-orange-700 font-medium mb-2">
          <span>⚠️</span>
          <span>Häufiger Fehler</span>
        </div>
        <p className="text-gray-700 m-0">
          <strong>RPZ-Werte allein sagen wenig aus!</strong> Ein Fehler mit S=10, O=1, D=8 (RPZ=80)
          ist kritischer als einer mit S=4, O=5, D=5 (RPZ=100). Die Severity muss immer priorisiert
          betrachtet werden.
        </p>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 6: Maßnahmen definieren
      </h3>
      <p className="text-gray-700">
        Für jeden Fehler mit hohem Risiko: Was tun wir dagegen?
      </p>

      {/* Maßnahmenarten Tabelle */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Typ</th>
              <th className="text-left p-3 text-gray-200 font-medium">Ziel</th>
              <th className="text-left p-3 text-gray-200 font-medium">Beispiel</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800 font-semibold">Vermeidungsmaßnahme</td>
              <td className="p-3 text-gray-700">O reduzieren</td>
              <td className="p-3 text-gray-700">Materialänderung, Toleranzanpassung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800 font-semibold">Entdeckungsmaßnahme</td>
              <td className="p-3 text-gray-700">D reduzieren</td>
              <td className="p-3 text-gray-700">Zusätzliche Prüfung, Sensor</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800 font-semibold">Design-Änderung</td>
              <td className="p-3 text-gray-700">S reduzieren</td>
              <td className="p-3 text-gray-700">Fail-Safe-Konstruktion</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Praxis-Tipp Box */}
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 text-amber-700 font-medium mb-2">
          <span>💡</span>
          <span>Praxis-Tipp</span>
        </div>
        <p className="text-gray-700 m-0">
          Priorisieren Sie Maßnahmen, die die <strong>Severity</strong> oder <strong>Occurrence</strong>
          reduzieren. Eine bessere Entdeckung (D) verhindert nicht den Fehler – sie findet ihn nur früher.
        </p>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 7: Wirksamkeit prüfen und Neubewertung
      </h3>
      <p className="text-gray-700">
        Nach Umsetzung der Maßnahmen:
      </p>
      <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
        <li>RPZ neu berechnen</li>
        <li>Dokumentieren, wer was wann umgesetzt hat</li>
        <li>Restrisiko akzeptabel?</li>
      </ul>

      {/* Vorher/Nachher Tabelle */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Fehlerart</th>
              <th className="text-center p-3 text-gray-200 font-medium">S</th>
              <th className="text-center p-3 text-gray-200 font-medium">O</th>
              <th className="text-center p-3 text-gray-200 font-medium">D</th>
              <th className="text-center p-3 text-gray-200 font-medium">RPZ (alt)</th>
              <th className="text-left p-3 text-gray-200 font-medium">Maßnahme</th>
              <th className="text-center p-3 text-gray-200 font-medium">S</th>
              <th className="text-center p-3 text-gray-200 font-medium">O</th>
              <th className="text-center p-3 text-gray-200 font-medium">D</th>
              <th className="text-center p-3 text-gray-200 font-medium">RPZ (neu)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Dichtung undicht</td>
              <td className="p-3 text-gray-700 text-center">7</td>
              <td className="p-3 text-gray-700 text-center">5</td>
              <td className="p-3 text-gray-700 text-center">6</td>
              <td className="p-3 text-gray-700 text-center font-semibold">210</td>
              <td className="p-3 text-gray-700">Materialwechsel + 100%-Prüfung</td>
              <td className="p-3 text-gray-700 text-center">7</td>
              <td className="p-3 text-gray-700 text-center">2</td>
              <td className="p-3 text-gray-700 text-center">3</td>
              <td className="p-3 text-gray-700 text-center font-semibold">42</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800">Sensor ungenau</td>
              <td className="p-3 text-gray-700 text-center">6</td>
              <td className="p-3 text-gray-700 text-center">4</td>
              <td className="p-3 text-gray-700 text-center">7</td>
              <td className="p-3 text-gray-700 text-center font-semibold">168</td>
              <td className="p-3 text-gray-700">Kalibrierprüfung</td>
              <td className="p-3 text-gray-700 text-center">6</td>
              <td className="p-3 text-gray-700 text-center">4</td>
              <td className="p-3 text-gray-700 text-center">2</td>
              <td className="p-3 text-gray-700 text-center font-semibold">48</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 4. FMEA in der Medizintechnik */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        4. FMEA in der Medizintechnik
      </h2>

      {/* Info Box */}
      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Info</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          In der Medizintechnik ist FMEA Teil des Risikomanagements nach <strong>ISO 14971</strong>.
          Sie ist oft verpflichtend für die Zulassung (CE-Kennzeichnung, FDA).
        </p>
      </div>

      <p className="text-gray-700">
        <strong>Besonderheiten in MedTech:</strong>
      </p>
      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li>Strenge Dokumentationsanforderungen</li>
        <li>Verknüpfung mit Risikomanagementakte</li>
        <li>Rückverfolgbarkeit zu Design Inputs</li>
        <li>Berücksichtigung von Anwendungsfehlern (Use-FMEA)</li>
        <li>Regelmäßige Aktualisierung im Produktlebenszyklus</li>
      </ul>

      {/* Normen Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Norm</th>
              <th className="text-left p-3 text-gray-200 font-medium">Branche</th>
              <th className="text-left p-3 text-gray-200 font-medium">FMEA-Anforderung</th>
              <th className="text-left p-3 text-gray-200 font-medium">Besonderheit</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">ISO 9001</td>
              <td className="p-3 text-gray-700">QM generell</td>
              <td className="p-3 text-gray-700">Risikobasiertes Denken (Kap. 6.1)</td>
              <td className="p-3 text-gray-700">FMEA empfohlen, nicht explizit gefordert</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">ISO 13485</td>
              <td className="p-3 text-gray-700">Medizintechnik</td>
              <td className="p-3 text-gray-700">Risikomanagement (Kap. 7.1)</td>
              <td className="p-3 text-gray-700">FMEA als typische Methode</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">ISO 14971</td>
              <td className="p-3 text-gray-700">Medizintechnik</td>
              <td className="p-3 text-gray-700">Risikobewertung (Kap. 5)</td>
              <td className="p-3 text-gray-700">FMEA explizit als Beispielmethode genannt</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800">IATF 16949</td>
              <td className="p-3 text-gray-700">Automotive</td>
              <td className="p-3 text-gray-700">PFMEA/DFMEA (Kap. 8.3.5)</td>
              <td className="p-3 text-gray-700">Verpflichtend, detaillierte Vorgaben</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 5. Typische Fehler */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        5. Typische Fehler bei der FMEA
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 1: Einmal erstellt, nie aktualisiert
      </h3>
      <p className="text-gray-700">
        Die FMEA ist ein lebendes Dokument. Sie muss aktualisiert werden bei:
      </p>
      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li>Designänderungen</li>
        <li>Prozessänderungen</li>
        <li>Feldfehlern</li>
        <li>Neuen Erkenntnissen</li>
      </ul>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 2: Zu breite oder zu enge Systemgrenzen
      </h3>
      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li>Zu breit → oberflächliche Analyse</li>
        <li>Zu eng → Schnittstellen-Fehler übersehen</li>
      </ul>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 3: RPZ als einziges Entscheidungskriterium
      </h3>
      <p className="text-gray-700">
        Ein niedriger RPZ-Wert bedeutet nicht automatisch "sicher". Severity muss immer
        gesondert betrachtet werden.
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 4: FMEA als Einzelaktion statt Teamprozess
      </h3>
      <p className="text-gray-700">
        FMEA lebt vom interdisziplinären Austausch. Eine FMEA am Schreibtisch allein erstellt
        verfehlt den Zweck.
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 5: Maßnahmen ohne Verantwortlichen und Termin
      </h3>
      <p className="text-gray-700">
        "Irgendwann prüfen wir das" ist keine Maßnahme. Jede Maßnahme braucht:
      </p>
      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li>Verantwortliche Person</li>
        <li>Termin</li>
        <li>Nachweis der Umsetzung</li>
      </ul>

      {/* 6. FMEA-Tools */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        6. FMEA-Tools und Software
      </h2>

      {/* Software Tabelle */}
      <div className="overflow-x-auto mb-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Tool</th>
              <th className="text-left p-3 text-gray-200 font-medium">Eignung</th>
              <th className="text-left p-3 text-gray-200 font-medium">Kosten</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Excel</td>
              <td className="p-3 text-gray-700">Einstieg, kleine Projekte</td>
              <td className="p-3 text-gray-700">Gering</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">APIS IQ-RM</td>
              <td className="p-3 text-gray-700">Automotive-Standard</td>
              <td className="p-3 text-gray-700">Hoch</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Plato SCIO</td>
              <td className="p-3 text-gray-700">Medizintechnik</td>
              <td className="p-3 text-gray-700">Mittel-Hoch</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Siemens Teamcenter</td>
              <td className="p-3 text-gray-700">Großunternehmen</td>
              <td className="p-3 text-gray-700">Sehr hoch</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800">Open-Source (z.B. OpenFMEA)</td>
              <td className="p-3 text-gray-700">Einfache Anwendungen</td>
              <td className="p-3 text-gray-700">Kostenlos</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Praxis-Tipp Box */}
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 text-amber-700 font-medium mb-2">
          <span>💡</span>
          <span>Praxis-Tipp</span>
        </div>
        <p className="text-gray-700 m-0">
          Für KMU und Einstieg: Starten Sie mit Excel. Eine gut strukturierte Tabelle reicht
          für die meisten Anwendungen. Die Software kann später kommen.
        </p>
      </div>

      {/* 7. Zusammenfassung */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        7. Zusammenfassung
      </h2>

      {/* Zusammenfassung Box */}
      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">FMEA auf einen Blick:</div>
        <ul className="text-gray-200 space-y-1 m-0 list-none pl-0">
          <li>✓ Präventive Fehlererkennung vor Produktion/Einsatz</li>
          <li>✓ Teambasierte, systematische Analyse</li>
          <li>✓ Risikobewertung mit S × O × D = RPZ</li>
          <li>✓ Maßnahmen priorisiert nach Severity</li>
          <li>✓ Lebendes Dokument – regelmäßig aktualisieren</li>
          <li>✓ In MedTech: Verknüpfung mit ISO 14971</li>
        </ul>
      </div>

      {/* CTA-Bereich */}
      <div className="bg-qcore-navy bg-opacity-30 rounded-lg p-8 mt-12 text-center border border-gray-600">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
          Sie brauchen Unterstützung bei Ihrer FMEA?
        </h3>
        <p className="mb-6" style={{ color: '#000000' }}>
          Mit langjähriger Erfahrung in der Medizintechnik helfe ich Ihnen bei FMEA-Workshops, Reviews bestehender FMEAs und der Integration in Ihr Risikomanagement - pragmatisch und audit-sicher.
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

export default FMEAArticle;
