import Link from 'next/link';

const TipBox = ({ children }) => (
  <div className="bg-qcore-navy bg-opacity-40 border-l-4 border-qcore-cyan p-4 my-4 rounded-r">
    <p className="text-gray-300 font-semibold mb-1">💡 Praxis-Tipp</p>
    <div className="text-gray-200">{children}</div>
  </div>
);

const InfoBox = ({ children }) => (
  <div className="bg-qcore-navy bg-opacity-40 border-l-4 border-blue-400 p-4 my-4 rounded-r">
    <p className="text-gray-300 font-semibold mb-1">ℹ️ Info</p>
    <div className="text-gray-200">{children}</div>
  </div>
);

const WarningBox = ({ children }) => (
  <div className="bg-qcore-navy bg-opacity-40 border-l-4 border-yellow-500 p-4 my-4 rounded-r">
    <p className="text-yellow-400 font-semibold mb-1">⚠️ Wichtig</p>
    <div className="text-gray-200">{children}</div>
  </div>
);

const ExampleBox = ({ children }) => (
  <div className="bg-qcore-navy bg-opacity-40 border-l-4 border-purple-400 p-4 my-4 rounded-r">
    <p className="text-gray-300 font-semibold mb-1">📌 Beispiel</p>
    <div className="text-gray-200">{children}</div>
  </div>
);

const QMDiagram = () => (
  <div className="bg-qcore-navy bg-opacity-50 p-6 rounded-lg my-6 max-w-md mx-auto">
    <div className="text-center font-bold text-lg mb-4 text-qcore-cyan">
      Qualitätsmanagement (QM)
    </div>
    <div className="flex justify-center gap-4">
      <div className="bg-blue-800 p-4 rounded text-center flex-1">
        <p className="font-bold text-white">QS</p>
        <p className="text-sm text-gray-300">vorbeugen</p>
      </div>
      <div className="bg-blue-800 p-4 rounded text-center flex-1">
        <p className="font-bold text-white">QK</p>
        <p className="text-sm text-gray-300">prüfen</p>
      </div>
    </div>
  </div>
);

const TwoColumnsDiagram = () => (
  <div className="bg-qcore-navy bg-opacity-50 p-6 rounded-lg my-6 max-w-2xl mx-auto">
    <div className="text-center font-bold text-lg mb-6 text-qcore-cyan border-b-2 border-qcore-cyan pb-3">
      Kundenzufriedenheit
    </div>
    <div className="flex justify-center gap-6">
      <div className="bg-blue-800 p-5 rounded text-center flex-1">
        <p className="font-bold text-xl mb-2 text-white">Säule 1</p>
        <p className="font-semibold text-white mb-2">Prozess-<br/>orientierung</p>
        <p className="text-xs text-gray-300">Arbeit als Abfolge von Prozessen mit klaren Schnittstellen</p>
      </div>
      <div className="bg-blue-800 p-5 rounded text-center flex-1">
        <p className="font-bold text-xl mb-2 text-white">Säule 2</p>
        <p className="font-semibold text-white mb-2">Kontinuierliche<br/>Verbesserung</p>
        <p className="text-xs text-gray-300">Ständige Optimierung durch PDCA-Zyklus</p>
      </div>
    </div>
  </div>
);

const WasIstQMArticle = () => {
  return (
    <article className="prose prose-invert max-w-none">
      {/* 1. Definition in einem Satz */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
          1. Definition in einem Satz
        </h2>
        <blockquote className="border-l-4 border-qcore-cyan pl-4 py-2 bg-qcore-navy bg-opacity-30 my-4">
          <p className="text-lg font-medium" style={{ color: '#000000' }}>
            <strong>Qualitätsmanagement (QM)</strong> ist die systematische Steuerung aller Aktivitäten, 
            die dazu beitragen, dass Produkte und Dienstleistungen die Anforderungen der Kunden erfüllen.
          </p>
        </blockquote>
        
        <InfoBox>
          Kurz gesagt: QM sorgt dafür, dass das rauskommt, was der Kunde erwartet – und zwar zuverlässig und wiederholbar.
        </InfoBox>
      </section>

      {/* 2. Was bedeutet "Qualität"? */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
          2. Was bedeutet "Qualität"?
        </h2>
        <p style={{ color: '#000000' }}>
          Qualität ist kein absoluter Begriff. Sie bedeutet:
        </p>
        
        <div className="overflow-x-auto my-4">
          <table className="min-w-full bg-white bg-opacity-90 rounded-lg overflow-hidden">
            <thead className="bg-qcore-navy">
              <tr>
                <th className="px-6 py-3 text-left text-white font-semibold">Qualität ist...</th>
                <th className="px-6 py-3 text-left text-white font-semibold">Qualität ist NICHT...</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Erfüllung von Kundenanforderungen</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>"Das Teuerste"</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Zuverlässigkeit und Konsistenz</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>"Null Fehler um jeden Preis"</td>
              </tr>
              <tr>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Geeignet für den Verwendungszweck</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Perfektion ohne Ziel</td>
              </tr>
            </tbody>
          </table>
        </div>

        <ExampleBox>
          Ein Einweg-Kugelschreiber für 50 Cent kann hohe Qualität haben – wenn er zuverlässig schreibt 
          und so lange hält, wie der Kunde erwartet. Ein 500€-Füller mit Aussetzern hat schlechte Qualität.
        </ExampleBox>
      </section>

      {/* 3. QM vs. QS vs. QK */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
          3. QM vs. QS vs. QK – Was ist der Unterschied?
        </h2>
        <p style={{ color: '#000000' }}>
          Diese Begriffe werden oft verwechselt:
        </p>
        
        <div className="overflow-x-auto my-4">
          <table className="min-w-full bg-white bg-opacity-90 rounded-lg overflow-hidden">
            <thead className="bg-qcore-navy">
              <tr>
                <th className="px-6 py-3 text-left text-white font-semibold">Begriff</th>
                <th className="px-6 py-3 text-left text-white font-semibold">Bedeutung</th>
                <th className="px-6 py-3 text-left text-white font-semibold">Fokus</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-3 font-semibold" style={{ color: '#1e293b' }}>QM – Qualitätsmanagement</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Gesamtsystem zur Qualitätssteuerung</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Prozesse, Organisation, Strategie</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-6 py-3 font-semibold" style={{ color: '#1e293b' }}>QS – Qualitätssicherung</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Maßnahmen zur Fehlervermeidung</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Vorbeugend, systemisch</td>
              </tr>
              <tr>
                <td className="px-6 py-3 font-semibold" style={{ color: '#1e293b' }}>QK – Qualitätskontrolle</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Prüfung von Produkten/Ergebnissen</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Nachträglich, produktbezogen</td>
              </tr>
            </tbody>
          </table>
        </div>

        <TipBox>
          QM ist das Dach, unter dem QS und QK stattfinden. QM fragt: "Wie organisieren wir Qualität?" – 
          QK fragt: "Ist dieses Teil in Ordnung?"
        </TipBox>

        <QMDiagram />
      </section>

      {/* 4. Warum braucht man QM? */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
          4. Warum braucht man QM?
        </h2>
        
        <div className="grid md:grid-cols-2 gap-4 my-6">
          {/* Ohne QM */}
          <div className="bg-qcore-navy bg-opacity-40 p-4 rounded border border-red-500/30">
            <p className="text-red-400 font-semibold mb-2">✗ Ohne QM:</p>
            <ul className="text-gray-300 space-y-1 text-sm">
              <li>• Jeder arbeitet nach eigenem Verständnis</li>
              <li>• Fehler wiederholen sich</li>
              <li>• Wissen geht verloren, wenn Mitarbeiter gehen</li>
              <li>• Kunden bekommen unterschiedliche Qualität</li>
              <li>• Probleme werden erst beim Kunden entdeckt</li>
            </ul>
          </div>
          
          {/* Mit QM */}
          <div className="bg-qcore-navy bg-opacity-40 p-4 rounded border border-green-500/30">
            <p className="text-green-400 font-semibold mb-2">✓ Mit QM:</p>
            <ul className="text-gray-300 space-y-1 text-sm">
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
      </section>

      {/* 5. Die zwei Säulen des QM */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
          5. Die zwei Säulen des QM
        </h2>
        
        <TwoColumnsDiagram />

        <div className="mt-6 space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>
              1. Prozessorientierung
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>Arbeit wird als Abfolge von Prozessen verstanden</li>
              <li>Jeder Prozess hat Input, Tätigkeit, Output</li>
              <li>Schnittstellen sind klar definiert</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>
              2. Kontinuierliche Verbesserung
            </h3>
            <ul className="list-disc list-inside text-gray-800 space-y-1">
              <li>Nie "fertig" – immer besser werden</li>
              <li>Fehler als Lernchance</li>
              <li>Der PDCA-Zyklus als Motor</li>
            </ul>
          </div>
        </div>

        <div className="mt-4 text-qcore-cyan hover:text-white transition-colors">
          <p>→ Mehr zum PDCA-Zyklus im Artikel "Der PDCA-Zyklus"</p>
        </div>
      </section>

      {/* 6. Wo wird QM eingesetzt? */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
          6. Wo wird QM eingesetzt?
        </h2>
        <p style={{ color: '#000000' }}>
          QM ist branchenübergreifend relevant:
        </p>
        
        <div className="overflow-x-auto my-4">
          <table className="min-w-full bg-white bg-opacity-90 rounded-lg overflow-hidden">
            <thead className="bg-qcore-navy">
              <tr>
                <th className="px-6 py-3 text-left text-white font-semibold">Branche</th>
                <th className="px-6 py-3 text-left text-white font-semibold">Typische QM-Norm</th>
                <th className="px-6 py-3 text-left text-white font-semibold">Besonderheit</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Industrie allgemein</td>
                <td className="px-6 py-3 font-semibold" style={{ color: '#1e293b' }}>ISO 9001</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Der "Klassiker"</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Medizintechnik</td>
                <td className="px-6 py-3 font-semibold" style={{ color: '#1e293b' }}>ISO 13485</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Fokus auf Produktsicherheit</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Automotive</td>
                <td className="px-6 py-3 font-semibold" style={{ color: '#1e293b' }}>IATF 16949</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Sehr strenge Anforderungen</td>
              </tr>
              <tr className="border-b bg-gray-50">
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Pharma</td>
                <td className="px-6 py-3 font-semibold" style={{ color: '#1e293b' }}>GMP</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Gesetzlich vorgeschrieben</td>
              </tr>
              <tr className="border-b">
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Lebensmittel</td>
                <td className="px-6 py-3 font-semibold" style={{ color: '#1e293b' }}>ISO 22000 / HACCP</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Hygiene und Rückverfolgbarkeit</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>IT/Software</td>
                <td className="px-6 py-3 font-semibold" style={{ color: '#1e293b' }}>ISO 27001, CMMI</td>
                <td className="px-6 py-3" style={{ color: '#1e293b' }}>Informationssicherheit, Reife</td>
              </tr>
            </tbody>
          </table>
        </div>

        <InfoBox>
          Die Grundprinzipien sind überall gleich. Die Normen unterscheiden sich in den branchenspezifischen Anforderungen.
        </InfoBox>

        <div className="mt-4 text-qcore-cyan hover:text-white transition-colors">
          <p>→ Vertiefung: "ISO 9001 erklärt", "ISO 13485 für Medizinprodukte", "GMP Grundlagen"</p>
        </div>
      </section>

      {/* 7. Was macht ein QM-Beauftragter? */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
          7. Was macht ein QM-Beauftragter?
        </h2>
        <p style={{ color: '#000000' }} className="mb-4">
          Typische Aufgaben eines QMB:
        </p>
        
        <ul className="list-disc list-inside text-gray-800 space-y-2 mb-4">
          <li>QM-System aufbauen und pflegen</li>
          <li>Prozesse dokumentieren und verbessern</li>
          <li>Interne Audits durchführen</li>
          <li>Schulungen organisieren</li>
          <li>Schnittstelle zu Zertifizierungsstellen</li>
          <li>Management über Qualitätskennzahlen informieren</li>
        </ul>

        <TipBox>
          Ein guter QMB ist kein "Polizist", sondern ein Berater und Unterstützer für alle Abteilungen.
        </TipBox>
      </section>

      {/* 8. Zusammenfassung */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4" style={{ color: '#1e293b' }}>
          8. Zusammenfassung
        </h2>
        
        <div className="bg-qcore-navy bg-opacity-50 border-2 border-qcore-cyan p-6 rounded-lg">
          <p className="font-bold text-lg text-qcore-cyan mb-4">Qualitätsmanagement auf einen Blick:</p>
          <ul className="space-y-2 text-white">
            <li>✓ Systematische Steuerung von Qualität</li>
            <li>✓ Fokus auf Kundenanforderungen</li>
            <li>✓ Prozesse statt Einzelaktionen</li>
            <li>✓ Ständige Verbesserung (PDCA)</li>
            <li>✓ Dokumentiert, messbar, nachvollziehbar</li>
          </ul>
        </div>
      </section>

      {/* CTA-Bereich */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-qcore-navy to-blue-900 p-8 rounded-lg border border-qcore-cyan">
          <h2 className="text-2xl font-bold mb-4 text-white">Nächste Schritte</h2>
          <p className="text-gray-200 mb-4">
            Jetzt wo Sie wissen, was QM ist, vertiefen Sie Ihr Wissen:
          </p>
          <ul className="space-y-2 text-qcore-cyan mb-6">
            <li>→ ISO 9001 erklärt – Die wichtigste QM-Norm verstehen</li>
            <li>→ Der PDCA-Zyklus – Das Herzstück jeder Verbesserung</li>
            <li>→ Begriffe & Definitionen – Das QM-Vokabular</li>
          </ul>
          <p className="text-gray-200 mb-4">Oder direkt in die Praxis?</p>
          <Link 
            href="/kontakt"
            className="inline-block bg-qcore-cyan text-qcore-navy px-6 py-3 rounded-lg font-semibold hover:bg-white transition-colors"
          >
            Beratung anfragen
          </Link>
        </div>
      </section>
    </article>
  );
};

export default WasIstQMArticle;
