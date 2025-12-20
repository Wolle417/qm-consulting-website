import Link from 'next/link';

const CAPAArticle = () => {
  return (
    <article className="prose prose-lg max-w-none">

      {/* 1. Was ist CAPA? */}
      <h2 className="text-2xl font-serif text-dark-navy mt-8 mb-4">
        1. Was ist CAPA?
      </h2>

      {/* Definition Box */}
      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">CAPA - Definition</div>
        <p className="text-gray-200 m-0">
          <strong>CAPA (Corrective and Preventive Action)</strong> ist ein systematischer Prozess
          zur Behandlung von Abweichungen und Fehlern. Er umfasst Korrekturmaßnahmen (CA) zur
          Beseitigung aufgetretener Probleme und Vorbeugemaßnahmen (PA) zur Verhinderung potenzieller Probleme.
        </p>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Der Unterschied: Korrektur vs. Korrekturmaßnahme vs. Vorbeugemaßnahme
      </h3>

      {/* Vergleichstabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Begriff</th>
              <th className="text-left p-3 text-gray-200 font-medium">Definition</th>
              <th className="text-left p-3 text-gray-200 font-medium">Beispiel</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Korrektur</strong></td>
              <td className="p-3 text-gray-700">Sofortmaßnahme zur Beseitigung eines Fehlers</td>
              <td className="p-3 text-gray-700">Fehlerhaftes Teil aussortieren</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Korrekturmaßnahme (CA)</strong></td>
              <td className="p-3 text-gray-700">Maßnahme zur Beseitigung der Fehlerursache</td>
              <td className="p-3 text-gray-700">Prozessparameter anpassen</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800"><strong>Vorbeugemaßnahme (PA)</strong></td>
              <td className="p-3 text-gray-700">Maßnahme zur Verhinderung potenzieller Fehler</td>
              <td className="p-3 text-gray-700">Präventive Wartung einführen</td>
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
          Der entscheidende Unterschied: Eine <strong>Korrektur</strong> behebt das Symptom,
          eine <strong>Korrekturmaßnahme</strong> behebt die Ursache. Nur letztere verhindert
          das Wiederauftreten.
        </p>
      </div>

      {/* 2. Warum ist CAPA wichtig? */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        2. Warum ist CAPA wichtig?
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Aus Unternehmenssicht
      </h3>

      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li>Wiederkehrende Fehler kosten Geld und Zeit</li>
        <li>Kundenreklamationen schaden dem Image</li>
        <li>Ohne systematischen Prozess: gleiche Fehler immer wieder</li>
      </ul>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Aus Normsicht
      </h3>

      {/* CAPA-Anforderungen Tabelle */}
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
              <td className="p-3 text-gray-800">ISO 9001:2015</td>
              <td className="p-3 text-gray-700">Nichtkonformität und Korrekturmaßnahmen</td>
              <td className="p-3 text-gray-700">10.2</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">ISO 13485:2016</td>
              <td className="p-3 text-gray-700">Korrekturmaßnahmen</td>
              <td className="p-3 text-gray-700">8.5.2</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">ISO 13485:2016</td>
              <td className="p-3 text-gray-700">Vorbeugemaßnahmen</td>
              <td className="p-3 text-gray-700">8.5.3</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">FDA 21 CFR 820</td>
              <td className="p-3 text-gray-700">CAPA</td>
              <td className="p-3 text-gray-700">§820.100</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800">IATF 16949</td>
              <td className="p-3 text-gray-700">Problemlösung</td>
              <td className="p-3 text-gray-700">10.2.3</td>
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
          In der Medizintechnik und bei FDA-regulierten Produkten ist CAPA ein "Hot Topic" bei Audits.
          Ein schwaches CAPA-System ist einer der häufigsten Gründe für FDA Warning Letters.
        </p>
      </div>

      {/* 3. Der CAPA-Prozess */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        3. Der CAPA-Prozess: 8 Schritte
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Übersicht
      </h3>

      <div className="bg-slate-700/80 rounded-lg p-6 my-6">
        <ol className="text-gray-200 space-y-2 list-decimal pl-6">
          <li>Problem erfassen</li>
          <li>Sofortmaßnahme (Korrektur)</li>
          <li>Risiko bewerten</li>
          <li>Root Cause Analysis</li>
          <li>Maßnahmen definieren (CA/PA)</li>
          <li>Maßnahmen umsetzen</li>
          <li>Wirksamkeit prüfen</li>
          <li>CAPA abschließen & dokumentieren</li>
        </ol>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 1: Problem erfassen
      </h3>

      <p className="text-gray-700">
        Woher kommen CAPA-Auslöser?
      </p>

      {/* CAPA Quellen Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Quelle</th>
              <th className="text-left p-3 text-gray-200 font-medium">Beispiele</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Extern</strong></td>
              <td className="p-3 text-gray-700">Kundenreklamationen, Feldfehler, Rückrufe</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Intern</strong></td>
              <td className="p-3 text-gray-700">Audits, Prozessabweichungen, Ausschuss</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800"><strong>Proaktiv</strong></td>
              <td className="p-3 text-gray-700">Trendanalysen, FMEA-Erkenntnisse, Near Misses</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700">
        <strong>Was muss erfasst werden?</strong>
      </p>

      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li>Eindeutige CAPA-Nummer</li>
        <li>Datum der Erfassung</li>
        <li>Beschreibung des Problems (was, wo, wann, wie viele?)</li>
        <li>Betroffene Produkte/Prozesse/Chargen</li>
        <li>Quelle der Information</li>
        <li>Verantwortlicher für CAPA</li>
      </ul>

      {/* Praxis-Tipp Box */}
      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">💡</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Praxis-Tipp</h4>
            <p className="text-sm" style={{ color: '#000000' }}>
              Formulieren Sie das Problem so konkret wie möglich. "Qualitätsproblem bei Produkt X"
              ist zu vage. Besser: "Bei Charge 2024-0815 von Produkt X wurden 12 von 500 Einheiten
              (2,4%) mit Rissen im Gehäuse gefunden."
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 2: Sofortmaßnahme (Korrektur)
      </h3>

      <p className="text-gray-700">
        Bevor die Ursache analysiert wird: Schaden begrenzen!
      </p>

      <p className="text-gray-700">
        <strong>Typische Sofortmaßnahmen:</strong>
      </p>

      {/* Sofortmaßnahmen Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Maßnahme</th>
              <th className="text-left p-3 text-gray-200 font-medium">Wann?</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Produkt sperren</td>
              <td className="p-3 text-gray-700">Verdacht auf fehlerhafte Charge</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">100%-Prüfung</td>
              <td className="p-3 text-gray-700">Fehler nicht durch Stichprobe abgedeckt</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Kunden informieren</td>
              <td className="p-3 text-gray-700">Sicherheitsrelevanter Fehler</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Prozess stoppen</td>
              <td className="p-3 text-gray-700">Fehlerquelle nicht eingegrenzt</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800">Nacharbeit/Austausch</td>
              <td className="p-3 text-gray-700">Fehler beim Kunden</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Warnung Box */}
      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">⚠️</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Häufiger Fehler</h4>
            <p className="text-sm" style={{ color: '#000000' }}>
              Sofortmaßnahmen sind wichtig, aber kein Ersatz für Korrekturmaßnahmen! Ein CAPA,
              das nur aus Sofortmaßnahmen besteht, ist nicht normkonform.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 3: Risiko bewerten
      </h3>

      <p className="text-gray-700">
        Nicht jedes Problem rechtfertigt den vollen CAPA-Aufwand. Risikobewertung entscheidet über den Umfang.
      </p>

      <p className="text-gray-700">
        <strong>Bewertungskriterien:</strong>
      </p>

      {/* Risikobewertung Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Kriterium</th>
              <th className="text-left p-3 text-gray-200 font-medium">Niedrig</th>
              <th className="text-left p-3 text-gray-200 font-medium">Mittel</th>
              <th className="text-left p-3 text-gray-200 font-medium">Hoch</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Sicherheit</strong></td>
              <td className="p-3 text-gray-700">Kein Einfluss</td>
              <td className="p-3 text-gray-700">Möglicherweise betroffen</td>
              <td className="p-3 text-gray-700">Direkte Gefährdung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Häufigkeit</strong></td>
              <td className="p-3 text-gray-700">Einzelfall</td>
              <td className="p-3 text-gray-700">Sporadisch</td>
              <td className="p-3 text-gray-700">Systematisch</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Kundenauswirkung</strong></td>
              <td className="p-3 text-gray-700">Keine</td>
              <td className="p-3 text-gray-700">Unzufriedenheit</td>
              <td className="p-3 text-gray-700">Funktionsverlust</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>Regulatorisch</strong></td>
              <td className="p-3 text-gray-700">Keine Anforderung</td>
              <td className="p-3 text-gray-700">Normabweichung</td>
              <td className="p-3 text-gray-700">Gesetzesverstoß</td>
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
          Die Risikobewertung bestimmt auch die Bearbeitungszeit. Ein sicherheitskritisches CAPA
          muss schneller bearbeitet werden als ein kosmetisches Problem.
        </p>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 4: Root Cause Analysis
      </h3>

      <p className="text-gray-700">
        Der wichtigste Schritt – und der am häufigsten unterschätzte.
      </p>

      <p className="text-gray-700">
        <strong>Methoden:</strong>
      </p>

      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li><strong>5-Why</strong> – für einfache Probleme</li>
        <li><strong>Ishikawa</strong> – für komplexe Probleme mit vielen möglichen Ursachen</li>
        <li><strong>Fault Tree Analysis</strong> – für sicherheitskritische Analysen</li>
      </ul>

      {/* Root Cause Kategorien Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Kategorie</th>
              <th className="text-left p-3 text-gray-200 font-medium">Typische Ursachen</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Mensch</strong></td>
              <td className="p-3 text-gray-700">Fehlende Schulung, Überlastung, unklare Anweisung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Methode</strong></td>
              <td className="p-3 text-gray-700">Prozess fehlt, Prozess ungeeignet, nicht befolgt</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Material</strong></td>
              <td className="p-3 text-gray-700">Spezifikation falsch, Lieferantenqualität</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Maschine</strong></td>
              <td className="p-3 text-gray-700">Wartung, Verschleiß, Kalibrierung</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Messung</strong></td>
              <td className="p-3 text-gray-700">Prüfmethode, Prüfhäufigkeit</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>Management</strong></td>
              <td className="p-3 text-gray-700">Ressourcen, Priorisierung, Kommunikation</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Praxis-Tipp Box */}
      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">💡</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Praxis-Tipp</h4>
            <p className="text-sm" style={{ color: '#000000' }}>
              Dokumentieren Sie den Weg zur Root Cause, nicht nur das Ergebnis. Bei Audits wird
              oft gefragt: "Wie sind Sie auf diese Ursache gekommen?"
            </p>
          </div>
        </div>
      </div>

      <p className="text-gray-700">
        → Ausführliche Anleitung im Artikel <Link href="/root-cause-analysis" className="text-qcore-blue hover:underline">Root Cause Analysis</Link>
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 5: Maßnahmen definieren
      </h3>

      <p className="text-gray-700">
        Basierend auf der Root Cause: Was tun wir dagegen?
      </p>

      <p className="text-gray-700">
        <strong>Maßnahmentypen:</strong>
      </p>

      {/* Maßnahmentypen Tabelle */}
      <div className="overflow-x-auto my-6">
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
              <td className="p-3 text-gray-800"><strong>Korrekturmaßnahme</strong></td>
              <td className="p-3 text-gray-700">Ursache des aufgetretenen Fehlers beseitigen</td>
              <td className="p-3 text-gray-700">Prozessanweisung überarbeiten</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Vorbeugemaßnahme</strong></td>
              <td className="p-3 text-gray-700">Potenzielle Fehler verhindern</td>
              <td className="p-3 text-gray-700">FMEA für ähnliche Produkte durchführen</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800"><strong>Systemische Maßnahme</strong></td>
              <td className="p-3 text-gray-700">Übergreifende Verbesserung</td>
              <td className="p-3 text-gray-700">Schulungsprogramm etablieren</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700">
        <strong>Für jede Maßnahme definieren:</strong>
      </p>

      {/* Maßnahmen-Elemente Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Element</th>
              <th className="text-left p-3 text-gray-200 font-medium">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Was</strong></td>
              <td className="p-3 text-gray-700">Konkrete Beschreibung der Maßnahme</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Wer</strong></td>
              <td className="p-3 text-gray-700">Verantwortliche Person (Name, nicht Abteilung!)</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Wann</strong></td>
              <td className="p-3 text-gray-700">Termin (realistisch, aber verbindlich)</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>Nachweis</strong></td>
              <td className="p-3 text-gray-700">Wie wird die Umsetzung belegt?</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Warnung Box */}
      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">⚠️</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Häufiger Fehler</h4>
            <p className="text-sm" style={{ color: '#000000' }}>
              "Mitarbeiter sensibilisieren" ist keine Maßnahme! Definieren Sie konkret: Welche
              Schulung? Für wen? Bis wann? Mit welchem Inhalt?
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 6: Maßnahmen umsetzen
      </h3>

      <p className="text-gray-700">
        Die Umsetzung verfolgen und dokumentieren.
      </p>

      <p className="text-gray-700">
        <strong>Erfolgsfaktoren:</strong>
      </p>

      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li>Klare Verantwortlichkeiten</li>
        <li>Realistische Termine</li>
        <li>Regelmäßiges Tracking (CAPA-Review-Meetings)</li>
        <li>Eskalationspfad bei Verzögerungen</li>
        <li>Dokumentation der Umsetzung</li>
      </ul>

      {/* Praxis-Tipp Box */}
      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">💡</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Praxis-Tipp</h4>
            <p className="text-sm" style={{ color: '#000000' }}>
              Führen Sie ein monatliches CAPA-Review durch. Dabei werden offene CAPAs besprochen,
              Termine geprüft und Eskalationen entschieden. Das hält den Prozess am Laufen.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 7: Wirksamkeit prüfen
      </h3>

      <p className="text-gray-700">
        Die entscheidende Frage: Hat die Maßnahme funktioniert?
      </p>

      {/* Wirksamkeitsprüfung Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Methode</th>
              <th className="text-left p-3 text-gray-200 font-medium">Beschreibung</th>
              <th className="text-left p-3 text-gray-200 font-medium">Zeitpunkt</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Fehlerrate prüfen</strong></td>
              <td className="p-3 text-gray-700">Tritt der Fehler noch auf?</td>
              <td className="p-3 text-gray-700">Nach angemessener Zeit</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Prozessaudit</strong></td>
              <td className="p-3 text-gray-700">Wird die neue Methode angewendet?</td>
              <td className="p-3 text-gray-700">4-8 Wochen nach Umsetzung</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Kennzahlen</strong></td>
              <td className="p-3 text-gray-700">Hat sich die Metrik verbessert?</td>
              <td className="p-3 text-gray-700">Trend über Zeit</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>Stichprobenprüfung</strong></td>
              <td className="p-3 text-gray-700">Sind Produkte fehlerfrei?</td>
              <td className="p-3 text-gray-700">Laufend</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700">
        <strong>Wann ist ein CAPA wirksam?</strong>
      </p>

      <ul className="text-gray-700 list-disc pl-6 space-y-1">
        <li>Fehler tritt nicht mehr auf (bei Korrekturmaßnahme)</li>
        <li>Risiko wurde nachweislich reduziert (bei Vorbeugemaßnahme)</li>
        <li>Kennzahl hat sich verbessert</li>
      </ul>

      {/* Warnung Box */}
      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">⚠️</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Häufiger Fehler</h4>
            <p className="text-sm" style={{ color: '#000000' }}>
              "Keine weiteren Reklamationen eingegangen" reicht oft nicht als Wirksamkeitsnachweis.
              Prüfen Sie aktiv, ob die Maßnahme greift – warten Sie nicht auf das nächste Problem.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Schritt 8: CAPA abschließen & dokumentieren
      </h3>

      <p className="text-gray-700">
        <strong>Was gehört in die CAPA-Akte?</strong>
      </p>

      {/* CAPA Dokumentation Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Dokument</th>
              <th className="text-left p-3 text-gray-200 font-medium">Inhalt</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Problembeschreibung</strong></td>
              <td className="p-3 text-gray-700">Was ist passiert?</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Risikobewertung</strong></td>
              <td className="p-3 text-gray-700">Wie kritisch?</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Root Cause Analysis</strong></td>
              <td className="p-3 text-gray-700">Warum ist es passiert?</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Maßnahmenplan</strong></td>
              <td className="p-3 text-gray-700">Was, wer, wann?</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Umsetzungsnachweise</strong></td>
              <td className="p-3 text-gray-700">Belege für Durchführung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Wirksamkeitsnachweis</strong></td>
              <td className="p-3 text-gray-700">Hat es funktioniert?</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800"><strong>Abschluss</strong></td>
              <td className="p-3 text-gray-700">Datum, Unterschrift, Freigabe</td>
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
          Die CAPA-Dokumentation ist Teil der Qualitätsaufzeichnungen und muss gemäß Norm
          aufbewahrt werden (meist 10+ Jahre in MedTech).
        </p>
      </div>

      {/* 4. CAPA-Kennzahlen */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        4. CAPA-Kennzahlen
      </h2>

      {/* CAPA Metrics Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Kennzahl</th>
              <th className="text-left p-3 text-gray-200 font-medium">Berechnung</th>
              <th className="text-left p-3 text-gray-200 font-medium">Ziel</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Offene CAPAs</strong></td>
              <td className="p-3 text-gray-700">Anzahl nicht abgeschlossener CAPAs</td>
              <td className="p-3 text-gray-700">Niedrig halten</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Überfällige CAPAs</strong></td>
              <td className="p-3 text-gray-700">CAPAs mit überschrittenem Termin</td>
              <td className="p-3 text-gray-700">0 anstreben</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Durchlaufzeit</strong></td>
              <td className="p-3 text-gray-700">Zeit von Eröffnung bis Abschluss</td>
              <td className="p-3 text-gray-700">Branchenüblich: 30-90 Tage</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Wiederholungsfehler</strong></td>
              <td className="p-3 text-gray-700">CAPAs für gleiches Problem</td>
              <td className="p-3 text-gray-700">0 anstreben</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800"><strong>CAPA-Effektivität</strong></td>
              <td className="p-3 text-gray-700">Wirksame CAPAs / Alle CAPAs</td>
              <td className="p-3 text-gray-700">&gt;90%</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Praxis-Tipp Box */}
      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">💡</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Praxis-Tipp</h4>
            <p className="text-sm" style={{ color: '#000000' }}>
              Tracken Sie die Kennzahlen monatlich und berichten Sie im Management Review.
              Trends zeigen, ob Ihr CAPA-System funktioniert.
            </p>
          </div>
        </div>
      </div>

      {/* 5. CAPA in der Praxis */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        5. CAPA in der Praxis: Ein Beispiel
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Ausgangssituation
      </h3>

      <p className="text-gray-700">
        Kundenreklamation: "Display zeigt sporadisch falsche Werte an."
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        CAPA-Durchführung
      </h3>

      {/* CAPA Beispiel Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Schritt</th>
              <th className="text-left p-3 text-gray-200 font-medium">Durchführung</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>1. Erfassung</strong></td>
              <td className="p-3 text-gray-700">CAPA-2024-042, 15 Reklamationen seit März</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>2. Sofortmaßnahme</strong></td>
              <td className="p-3 text-gray-700">Betroffene Charge gesperrt, Kunden informiert</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>3. Risikobewertung</strong></td>
              <td className="p-3 text-gray-700">Hoch (Fehlmessung kann zu Fehlbehandlung führen)</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>4. Root Cause</strong></td>
              <td className="p-3 text-gray-700">5-Why: Steckverbinder lockert sich durch Vibration</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>5. Maßnahme CA</strong></td>
              <td className="p-3 text-gray-700">Steckverbinder mit Sicherung versehen</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>5. Maßnahme PA</strong></td>
              <td className="p-3 text-gray-700">Designregel für vibrationskritische Verbindungen</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>6. Umsetzung</strong></td>
              <td className="p-3 text-gray-700">Konstruktionsänderung, neue Charge produziert</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>7. Wirksamkeit</strong></td>
              <td className="p-3 text-gray-700">3 Monate Feldüberwachung: 0 Reklamationen</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800"><strong>8. Abschluss</strong></td>
              <td className="p-3 text-gray-700">CAPA geschlossen am 15.07.2024</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 6. CAPA-Software und Tools */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        6. CAPA-Software und Tools
      </h2>

      {/* CAPA Tools Tabelle */}
      <div className="overflow-x-auto my-6">
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
              <td className="p-3 text-gray-800"><strong>Excel/SharePoint</strong></td>
              <td className="p-3 text-gray-700">Kleine Unternehmen, Einstieg</td>
              <td className="p-3 text-gray-700">Gering</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Jira/Asana</strong></td>
              <td className="p-3 text-gray-700">Wenn schon im Einsatz</td>
              <td className="p-3 text-gray-700">Gering-Mittel</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>MasterControl</strong></td>
              <td className="p-3 text-gray-700">MedTech, FDA-reguliert</td>
              <td className="p-3 text-gray-700">Hoch</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Greenlight Guru</strong></td>
              <td className="p-3 text-gray-700">MedTech-Spezifisch</td>
              <td className="p-3 text-gray-700">Mittel-Hoch</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>SAP QM</strong></td>
              <td className="p-3 text-gray-700">Großunternehmen</td>
              <td className="p-3 text-gray-700">Sehr hoch</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>Eigenentwicklung</strong></td>
              <td className="p-3 text-gray-700">Spezifische Anforderungen</td>
              <td className="p-3 text-gray-700">Variabel</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Praxis-Tipp Box */}
      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">💡</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Praxis-Tipp</h4>
            <p className="text-sm" style={{ color: '#000000' }}>
              Für KMU: Starten Sie mit Excel oder SharePoint. Eine gute Tabelle mit Statusverfolgung
              reicht für die Normkonformität. Die teure Software können Sie später kaufen, wenn Sie wachsen.
            </p>
          </div>
        </div>
      </div>

      {/* 7. Häufige Fehler */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        7. Häufige Fehler im CAPA-Prozess
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 1: Symptom statt Ursache behandelt
      </h3>
      <p className="text-gray-700">
        "Problem: Kunde hat falsches Produkt erhalten. Maßnahme: Richtiges Produkt nachgeschickt."<br />
        → Das ist eine Korrektur, keine Korrekturmaßnahme!
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 2: Keine echte Root Cause Analysis
      </h3>
      <p className="text-gray-700">
        "Ursache: Mitarbeiter hat Fehler gemacht."<br />
        → Fragen Sie weiter: Warum konnte er den Fehler machen?
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 3: Maßnahmen ohne Verantwortlichen
      </h3>
      <p className="text-gray-700">
        "Maßnahme: Prozess verbessern."<br />
        → Wer macht was bis wann?
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 4: Keine Wirksamkeitsprüfung
      </h3>
      <p className="text-gray-700">
        CAPA wird als erledigt markiert, sobald die Maßnahme umgesetzt ist.<br />
        → Ohne Wirksamkeitsnachweis ist das CAPA nicht abgeschlossen!
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 5: CAPA-Friedhof
      </h3>
      <p className="text-gray-700">
        Hunderte offene CAPAs, die niemand verfolgt.<br />
        → Regelmäßige Reviews, realistische Termine, Eskalation.
      </p>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Fehler 6: Alibi-CAPAs
      </h3>
      <p className="text-gray-700">
        CAPAs werden eröffnet, um Auditoren zufriedenzustellen, aber nie ernsthaft bearbeitet.<br />
        → Lieber weniger CAPAs, die wirksam sind.
      </p>

      {/* 8. CAPA und 8D-Report */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        8. CAPA und 8D-Report
      </h2>

      {/* Info Box */}
      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Info</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          In der Automobilindustrie wird oft der 8D-Report gefordert. 8D und CAPA sind verwandt,
          aber nicht identisch.
        </p>
      </div>

      {/* CAPA vs 8D Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">CAPA</th>
              <th className="text-left p-3 text-gray-200 font-medium">8D-Report</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-700">Allgemeiner QM-Prozess</td>
              <td className="p-3 text-gray-700">Spezifisches Automotive-Format</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-700">Intern oder extern ausgelöst</td>
              <td className="p-3 text-gray-700">Meist durch Kundenreklamation</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-700">Flexibles Format</td>
              <td className="p-3 text-gray-700">Standardisiertes 8-Schritte-Format</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-700">ISO 9001/13485</td>
              <td className="p-3 text-gray-700">IATF 16949, VDA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-gray-700">
        <strong>Die 8 Disziplinen:</strong>
      </p>

      {/* 8D Disziplinen Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">D</th>
              <th className="text-left p-3 text-gray-200 font-medium">Disziplin</th>
              <th className="text-left p-3 text-gray-200 font-medium">CAPA-Äquivalent</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">D1</td>
              <td className="p-3 text-gray-700">Team bilden</td>
              <td className="p-3 text-gray-700">(Teil von Planung)</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">D2</td>
              <td className="p-3 text-gray-700">Problem beschreiben</td>
              <td className="p-3 text-gray-700">Schritt 1</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">D3</td>
              <td className="p-3 text-gray-700">Sofortmaßnahme</td>
              <td className="p-3 text-gray-700">Schritt 2</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">D4</td>
              <td className="p-3 text-gray-700">Ursachenanalyse</td>
              <td className="p-3 text-gray-700">Schritt 4</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">D5</td>
              <td className="p-3 text-gray-700">Abstellmaßnahme wählen</td>
              <td className="p-3 text-gray-700">Schritt 5</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">D6</td>
              <td className="p-3 text-gray-700">Abstellmaßnahme einführen</td>
              <td className="p-3 text-gray-700">Schritt 6</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">D7</td>
              <td className="p-3 text-gray-700">Wiederholung verhindern</td>
              <td className="p-3 text-gray-700">PA in Schritt 5</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800">D8</td>
              <td className="p-3 text-gray-700">Team würdigen</td>
              <td className="p-3 text-gray-700">(Abschluss)</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 9. Zusammenfassung */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        9. Zusammenfassung
      </h2>

      <div className="bg-slate-700/80 rounded-lg p-6 my-6">
        <h3 className="text-qcore-cyan text-lg font-semibold mb-3">CAPA auf einen Blick</h3>
        <ul className="text-gray-200 space-y-2">
          <li>✓ <strong>CA</strong> = Ursache beseitigen (aufgetretener Fehler)</li>
          <li>✓ <strong>PA</strong> = Risiko reduzieren (potenzieller Fehler)</li>
          <li>✓ Korrektur ≠ Korrekturmaßnahme</li>
          <li>✓ 8 Schritte: Erfassung → RCA → Maßnahme → Wirksamkeit</li>
          <li>✓ Jede Maßnahme: Was, Wer, Wann, Nachweis</li>
          <li>✓ Ohne Wirksamkeitsprüfung kein Abschluss</li>
          <li>✓ Dokumentation = Qualitätsaufzeichnung</li>
        </ul>
      </div>

      {/* CTA-Bereich */}
      <div className="bg-qcore-navy bg-opacity-30 rounded-lg p-8 mt-12 text-center border border-gray-600">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
          Ihr CAPA-Prozess funktioniert nicht richtig?
        </h3>
        <p className="mb-6" style={{ color: '#000000' }}>
          Mit Erfahrung in der Medizintechnik unterstütze ich Sie beim Aufbau oder der Optimierung
          Ihres CAPA-Prozesses, beim Aufarbeiten von Altlasten und bei der Audit-Vorbereitung -
          pragmatisch und normkonform.
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

export default CAPAArticle;
