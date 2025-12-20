// Hilfsfunktionen für Boxen
const TipBox = ({ children }) => (
  <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
    <div className="flex items-start">
      <span className="text-xl mr-3">💡</span>
      <div>
        <h4 className="font-semibold" style={{ color: '#1e293b' }}>Praxis-Tipp</h4>
        <p className="text-sm" style={{ color: '#000000' }}>{children}</p>
      </div>
    </div>
  </div>
);

const WarningBox = ({ children }) => (
  <div className="bg-amber-900 bg-opacity-20 border-l-4 border-amber-500 rounded-r-lg p-4 my-6">
    <div className="flex items-start">
      <span className="text-xl mr-3">⚠️</span>
      <div>
        <h4 className="font-semibold" style={{ color: '#1e293b' }}>Wichtig</h4>
        <p className="text-sm" style={{ color: '#000000' }}>{children}</p>
      </div>
    </div>
  </div>
);

const InfoBox = ({ title, children }) => (
  <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-6 my-6 border border-gray-600">
    <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>{title}</h4>
    <p style={{ color: '#000000' }}>{children}</p>
  </div>
);

const ExampleBox = ({ children }) => (
  <div className="bg-purple-900 bg-opacity-20 border-l-4 border-purple-400 rounded-r-lg p-4 my-6">
    <div className="flex items-start">
      <span className="text-xl mr-3">📌</span>
      <div>
        <h4 className="font-semibold" style={{ color: '#1e293b' }}>Beispiel</h4>
        <p className="text-sm" style={{ color: '#000000' }}>{children}</p>
      </div>
    </div>
  </div>
);

const QMDiagram = () => (
  <div className="bg-qcore-navy bg-opacity-20 p-6 rounded-lg my-6 max-w-md mx-auto border border-gray-600">
    <div className="text-center font-bold text-lg mb-4" style={{ color: '#1e293b' }}>
      Qualitätsmanagement (QM)
    </div>
    <div className="flex justify-center gap-4">
      <div className="bg-qcore-navy bg-opacity-40 p-4 rounded text-center flex-1 border border-gray-600">
        <p className="font-bold" style={{ color: '#1e293b' }}>QS</p>
        <p className="text-sm" style={{ color: '#000000' }}>vorbeugen</p>
      </div>
      <div className="bg-qcore-navy bg-opacity-40 p-4 rounded text-center flex-1 border border-gray-600">
        <p className="font-bold" style={{ color: '#1e293b' }}>QK</p>
        <p className="text-sm" style={{ color: '#000000' }}>prüfen</p>
      </div>
    </div>
  </div>
);

const TwoColumnsDiagram = () => (
  <div className="bg-qcore-navy bg-opacity-20 p-6 rounded-lg my-6 max-w-2xl mx-auto border border-gray-600">
    <div className="text-center font-bold text-lg mb-6 pb-3 border-b border-gray-600" style={{ color: '#1e293b' }}>
      Kundenzufriedenheit
    </div>
    <div className="flex justify-center gap-6">
      <div className="bg-qcore-navy bg-opacity-40 p-5 rounded text-center flex-1 border border-gray-600">
        <p className="font-bold text-xl mb-2" style={{ color: '#1e293b' }}>Säule 1</p>
        <p className="font-semibold mb-2" style={{ color: '#1e293b' }}>Prozess-<br/>orientierung</p>
        <p className="text-xs" style={{ color: '#000000' }}>Arbeit als Abfolge von Prozessen mit klaren Schnittstellen</p>
      </div>
      <div className="bg-qcore-navy bg-opacity-40 p-5 rounded text-center flex-1 border border-gray-600">
        <p className="font-bold text-xl mb-2" style={{ color: '#1e293b' }}>Säule 2</p>
        <p className="font-semibold mb-2" style={{ color: '#1e293b' }}>Kontinuierliche<br/>Verbesserung</p>
        <p className="text-xs" style={{ color: '#000000' }}>Ständige Optimierung durch PDCA-Zyklus</p>
      </div>
    </div>
  </div>
);

const WasIstQMArticle = () => {
  return (
    <article className="prose max-w-none">
      {/* 1. Definition in einem Satz */}
      <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#1e293b' }}>
        1. Definition in einem Satz
      </h2>

      <InfoBox title="Qualitätsmanagement (QM) - Definition">
        Systematische Steuerung aller Aktivitäten, die dazu beitragen, dass Produkte und Dienstleistungen die Anforderungen der Kunden erfüllen.
      </InfoBox>

      <TipBox>
        Kurz gesagt: QM sorgt dafür, dass das rauskommt, was der Kunde erwartet – und zwar zuverlässig und wiederholbar.
      </TipBox>

      {/* 2. Was bedeutet "Qualität"? */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        2. Was bedeutet "Qualität"?
      </h2>

      <p style={{ color: '#000000' }}>
        Qualität ist kein absoluter Begriff. Sie bedeutet:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Qualität ist...</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Qualität ist NICHT...</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Erfüllung von Kundenanforderungen</td>
              <td className="px-4 py-2 border-b border-gray-600">"Das Teuerste"</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Zuverlässigkeit und Konsistenz</td>
              <td className="px-4 py-2 border-b border-gray-600">"Null Fehler um jeden Preis"</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Geeignet für den Verwendungszweck</td>
              <td className="px-4 py-2 border-b border-gray-600">Perfektion ohne Ziel</td>
            </tr>
          </tbody>
        </table>
      </div>

      <ExampleBox>
        Ein Einweg-Kugelschreiber für 50 Cent kann hohe Qualität haben – wenn er zuverlässig schreibt
        und so lange hält, wie der Kunde erwartet. Ein 500€-Füller mit Aussetzern hat schlechte Qualität.
      </ExampleBox>

      {/* 3. QM vs. QS vs. QK */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        3. QM vs. QS vs. QK – Was ist der Unterschied?
      </h2>

      <p style={{ color: '#000000' }}>
        Diese Begriffe werden oft verwechselt:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Begriff</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Bedeutung</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Fokus</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">QM – Qualitätsmanagement</td>
              <td className="px-4 py-2 border-b border-gray-600">Gesamtsystem zur Qualitätssteuerung</td>
              <td className="px-4 py-2 border-b border-gray-600">Prozesse, Organisation, Strategie</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">QS – Qualitätssicherung</td>
              <td className="px-4 py-2 border-b border-gray-600">Maßnahmen zur Fehlervermeidung</td>
              <td className="px-4 py-2 border-b border-gray-600">Vorbeugend, systemisch</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">QK – Qualitätskontrolle</td>
              <td className="px-4 py-2 border-b border-gray-600">Prüfung von Produkten/Ergebnissen</td>
              <td className="px-4 py-2 border-b border-gray-600">Nachträglich, produktbezogen</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox>
        QM ist das Dach, unter dem QS und QK stattfinden. QM fragt: "Wie organisieren wir Qualität?" –
        QK fragt: "Ist dieses Teil in Ordnung?"
      </TipBox>

      <QMDiagram />

      {/* 4. Warum braucht man QM? */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        4. Warum braucht man QM?
      </h2>

      <div className="grid md:grid-cols-2 gap-4 my-6">
        {/* Ohne QM */}
        <div className="bg-qcore-navy bg-opacity-20 p-4 rounded border border-gray-600">
          <p className="font-semibold mb-2" style={{ color: '#1e293b' }}>✗ Ohne QM:</p>
          <ul className="space-y-1 text-sm" style={{ color: '#000000' }}>
            <li>• Jeder arbeitet nach eigenem Verständnis</li>
            <li>• Fehler wiederholen sich</li>
            <li>• Wissen geht verloren, wenn Mitarbeiter gehen</li>
            <li>• Kunden bekommen unterschiedliche Qualität</li>
            <li>• Probleme werden erst beim Kunden entdeckt</li>
          </ul>
        </div>

        {/* Mit QM */}
        <div className="bg-qcore-navy bg-opacity-20 p-4 rounded border border-gray-600">
          <p className="font-semibold mb-2" style={{ color: '#1e293b' }}>✓ Mit QM:</p>
          <ul className="space-y-1 text-sm" style={{ color: '#000000' }}>
            <li>• Einheitliche Standards für alle</li>
            <li>• Aus Fehlern wird gelernt (CAPA)</li>
            <li>• Prozesse sind dokumentiert und übertragbar</li>
            <li>• Konsistente Qualität</li>
            <li>• Probleme werden früh erkannt</li>
          </ul>
        </div>
      </div>

      <WarningBox>
        QM ist keine Bürokratie zum Selbstzweck. Schlechtes QM = Papierberge ohne Nutzen.
        Gutes QM = weniger Stress, weniger Nacharbeit, zufriedenere Kunden.
      </WarningBox>

      {/* 5. Die zwei Säulen des QM */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        5. Die zwei Säulen des QM
      </h2>

      <TwoColumnsDiagram />

      <div className="space-y-4 my-6">
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">📘</span> 1. Prozessorientierung
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Arbeit wird als Abfolge von Prozessen verstanden. Jeder Prozess hat Input, Tätigkeit, Output.
            Schnittstellen sind klar definiert.
          </p>
        </div>

        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">🔄</span> 2. Kontinuierliche Verbesserung
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Nie "fertig" – immer besser werden. Fehler als Lernchance. Der PDCA-Zyklus als Motor.
          </p>
        </div>
      </div>

      {/* 6. Wo wird QM eingesetzt? */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        6. Wo wird QM eingesetzt?
      </h2>

      <p style={{ color: '#000000' }}>
        QM ist branchenübergreifend relevant:
      </p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Branche</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Typische QM-Norm</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Besonderheit</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Industrie allgemein</td>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">ISO 9001</td>
              <td className="px-4 py-2 border-b border-gray-600">Der "Klassiker"</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Medizintechnik</td>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">ISO 13485</td>
              <td className="px-4 py-2 border-b border-gray-600">Fokus auf Produktsicherheit</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Automotive</td>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">IATF 16949</td>
              <td className="px-4 py-2 border-b border-gray-600">Sehr strenge Anforderungen</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Pharma</td>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">GMP</td>
              <td className="px-4 py-2 border-b border-gray-600">Gesetzlich vorgeschrieben</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Lebensmittel</td>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">ISO 22000 / HACCP</td>
              <td className="px-4 py-2 border-b border-gray-600">Hygiene und Rückverfolgbarkeit</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">IT/Software</td>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">ISO 27001, CMMI</td>
              <td className="px-4 py-2 border-b border-gray-600">Informationssicherheit, Reife</td>
            </tr>
          </tbody>
        </table>
      </div>

      <TipBox>
        Die Grundprinzipien sind überall gleich. Die Normen unterscheiden sich in den branchenspezifischen Anforderungen.
      </TipBox>

      {/* 7. Was macht ein QM-Beauftragter? */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        7. Was macht ein QM-Beauftragter?
      </h2>

      <p style={{ color: '#000000' }}>
        Typische Aufgaben eines QMB:
      </p>

      <div className="space-y-4 my-6">
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">🏗️</span> QM-System aufbauen und pflegen
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Strukturierung und kontinuierliche Weiterentwicklung des Qualitätsmanagementsystems.
          </p>
        </div>

        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">📋</span> Prozesse dokumentieren und verbessern
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Erstellung und Optimierung von Prozessdokumentationen sowie Arbeitsanweisungen.
          </p>
        </div>

        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">🔍</span> Interne Audits & Schulungen
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Durchführung von internen Audits und Organisation von Qualitätsschulungen für Mitarbeiter.
          </p>
        </div>
      </div>

      <TipBox>
        Ein guter QMB ist kein "Polizist", sondern ein Berater und Unterstützer für alle Abteilungen.
      </TipBox>

      {/* 8. Zusammenfassung */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        8. Zusammenfassung
      </h2>

      <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-6 my-6 border border-gray-600">
        <h4 className="font-semibold mb-4" style={{ color: '#1e293b' }}>Qualitätsmanagement auf einen Blick:</h4>
        <ul className="space-y-2" style={{ color: '#000000' }}>
          <li>✓ Systematische Steuerung von Qualität</li>
          <li>✓ Fokus auf Kundenanforderungen</li>
          <li>✓ Prozesse statt Einzelaktionen</li>
          <li>✓ Ständige Verbesserung (PDCA)</li>
          <li>✓ Dokumentiert, messbar, nachvollziehbar</li>
        </ul>
      </div>

      {/* CTA-Bereich */}
      <div className="bg-qcore-navy bg-opacity-30 rounded-lg p-8 mt-12 text-center border border-gray-600">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
          Sie möchten ein QM-System aufbauen oder optimieren?
        </h3>
        <p className="mb-6" style={{ color: '#000000' }}>
          Mit langjähriger Erfahrung in verschiedenen Branchen unterstütze ich Sie beim Aufbau
          und der Optimierung Ihres Qualitätsmanagementsystems - pragmatisch und praxisnah.
        </p>
        <a
          href="/kontakt"
          className="inline-block bg-qcore-blue text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Kostenlose Erstberatung vereinbaren
        </a>
      </div>
    </article>
  );
};

export default WasIstQMArticle;
