const ProcessValidationArticle = () => {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Definition Box */}
      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">Prozessvalidierung - Definition</div>
        <p className="text-gray-200 m-0">
          <strong>Prozessvalidierung</strong> ist der dokumentierte Nachweis, dass ein Prozess dauerhaft ein Produkt erzeugt, das seine vorgegebenen Spezifikationen und Qualitätsmerkmale erfüllt. Sie stellt sicher, dass der Prozess reproduzierbar und robust ist.
        </p>
      </div>

      {/* Section 1: Was ist Prozessvalidierung? */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Was ist Prozessvalidierung?</h2>

      <p style={{ color: '#000000' }}>
        Prozessvalidierung ist mehr als nur "drei Chargen laufen lassen". Sie ist der systematische Nachweis, dass Ihr Prozess das tut, was er soll – reproduzierbar und zuverlässig über den gesamten Produktlebenszyklus.
      </p>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Warum Prozessvalidierung?</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Grund</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Erklärung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Regulatorisch</strong></td>
            <td className="border border-gray-600 px-4 py-2">Gesetzliche Anforderung (FDA, EU GMP, ISO 13485)</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Qualität</strong></td>
            <td className="border border-gray-600 px-4 py-2">Nachweis, dass Produkte konsistent spezifikationsgerecht sind</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Risiko</strong></td>
            <td className="border border-gray-600 px-4 py-2">Reduzierung von Ausschuss, Rückrufen, Patientengefährdung</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Wirtschaftlich</strong></td>
            <td className="border border-gray-600 px-4 py-2">Weniger Nacharbeit, weniger Prüfaufwand</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Validierung vs. Verifizierung</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Begriff</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Definition</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beispiel</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Verifizierung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Prüfung gegen Spezifikation (Stichprobe)</td>
            <td className="border border-gray-600 px-4 py-2">100 Tabletten wiegen, Mittelwert prüfen</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Validierung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Nachweis der Prozessfähigkeit (systematisch)</td>
            <td className="border border-gray-600 px-4 py-2">3 Chargen produzieren, Cpk berechnen</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Wichtiger Unterschied</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Verifizierung prüft das Produkt. Validierung prüft den Prozess. Beide sind notwendig, aber sie ersetzen sich nicht gegenseitig.
        </p>
      </div>

      {/* Section 2: Regulatorische Grundlagen */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Regulatorische Grundlagen</h2>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>FDA Process Validation Guidance (2011)</h3>

      <p style={{ color: '#000000' }}>
        Die FDA hat 2011 ihre Guidance grundlegend überarbeitet und den <strong>Lifecycle-Ansatz</strong> eingeführt:
      </p>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Phase</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Name</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Stage 1</strong></td>
            <td className="border border-gray-600 px-4 py-2">Process Design</td>
            <td className="border border-gray-600 px-4 py-2">Prozesswissen aufbauen, Parameter festlegen</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Stage 2</strong></td>
            <td className="border border-gray-600 px-4 py-2">Process Qualification</td>
            <td className="border border-gray-600 px-4 py-2">Nachweis, dass der Prozess reproduzierbar funktioniert</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Stage 3</strong></td>
            <td className="border border-gray-600 px-4 py-2">Continued Process Verification</td>
            <td className="border border-gray-600 px-4 py-2">Laufende Überwachung im Routinebetrieb</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Lifecycle-Ansatz</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Der Lifecycle-Ansatz bedeutet: Validierung ist keine einmalige Aktivität, sondern ein kontinuierlicher Prozess über die gesamte Produktlebensdauer.
        </p>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>EU GMP Annex 15 (2015)</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Anforderung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Prospektive Validierung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Vor Routineproduktion (Standard)</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Concurrent Validation</strong></td>
            <td className="border border-gray-600 px-4 py-2">Während Produktion (Ausnahme, begründet)</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Retrospektive Validierung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Basierend auf historischen Daten (nicht mehr empfohlen)</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Revalidierung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Bei Änderungen oder periodisch</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>ISO 13485:2016</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Kapitel</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Anforderung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>7.5.6</strong></td>
            <td className="border border-gray-600 px-4 py-2">Validierung von Prozessen für Produktion und Dienstleistung</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>7.5.7</strong></td>
            <td className="border border-gray-600 px-4 py-2">Besondere Anforderungen an die Validierung von Sterilisationsprozessen</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>⚠️</span>
          <span>Spezielle Prozesse</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          ISO 13485 fordert Validierung insbesondere für <strong>spezielle Prozesse</strong> – Prozesse, deren Ergebnis nicht vollständig durch nachfolgende Prüfung verifiziert werden kann (z.B. Sterilisation, Schweißen, Beschichten).
        </p>
      </div>

      {/* Section 3: Stage 1 - Process Design */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Stage 1: Process Design</h2>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Ziel</h3>

      <p style={{ color: '#000000' }}>
        Prozesswissen aufbauen und einen robusten Prozess entwickeln, der konsistent Qualitätsprodukte liefert.
      </p>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Aktivitäten</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Aktivität</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Risikobewertung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Welche Parameter beeinflussen die Qualität?</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>DoE (Design of Experiments)</strong></td>
            <td className="border border-gray-600 px-4 py-2">Systematische Versuchsplanung</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>CPP/CQA Identifikation</strong></td>
            <td className="border border-gray-600 px-4 py-2">Kritische Parameter und Attribute festlegen</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Design Space</strong></td>
            <td className="border border-gray-600 px-4 py-2">Bereich, in dem Qualität gewährleistet ist</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Kontrollstrategie</strong></td>
            <td className="border border-gray-600 px-4 py-2">Wie werden Parameter kontrolliert?</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>CPP und CQA</h3>

      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">CPP und CQA - Definitionen</div>
        <div className="text-gray-200">
          <p className="mb-2"><strong>Critical Process Parameter (CPP):</strong> Prozessparameter, dessen Variabilität einen Einfluss auf ein kritisches Qualitätsmerkmal hat und der deshalb überwacht oder kontrolliert werden muss.</p>
          <p className="m-0"><strong>Critical Quality Attribute (CQA):</strong> Physikalische, chemische, biologische oder mikrobiologische Eigenschaft, die innerhalb eines definierten Bereichs liegen muss, um die gewünschte Produktqualität sicherzustellen.</p>
        </div>
      </div>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Prozess</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">CPP (Prozessparameter)</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">CQA (Qualitätsmerkmal)</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Tablettierung</td>
            <td className="border border-gray-600 px-4 py-2">Presskraft, Geschwindigkeit</td>
            <td className="border border-gray-600 px-4 py-2">Härte, Zerfallszeit</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Sterilisation</td>
            <td className="border border-gray-600 px-4 py-2">Temperatur, Zeit, Druck</td>
            <td className="border border-gray-600 px-4 py-2">Sterilität (SAL)</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Spritzguss</td>
            <td className="border border-gray-600 px-4 py-2">Temperatur, Druck, Kühlzeit</td>
            <td className="border border-gray-600 px-4 py-2">Maßhaltigkeit, Oberfläche</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Schweißen</td>
            <td className="border border-gray-600 px-4 py-2">Strom, Zeit, Anpressdruck</td>
            <td className="border border-gray-600 px-4 py-2">Festigkeit, Dichtheit</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Design Space</h3>

      <pre className="bg-slate-800 p-4 rounded text-sm font-mono text-gray-300 overflow-x-auto my-6">
{`                    Proven Acceptable Range (PAR)
    ┌─────────────────────────────────────────────────┐
    │                                                 │
    │       ┌─────────────────────────────┐          │
    │       │                             │          │
    │       │      Design Space           │          │
    │       │   (validierter Bereich)     │          │
    │       │                             │          │
    │       │    ┌───────────────┐        │          │
    │       │    │ Normal        │        │          │
    │       │    │ Operating     │        │          │
    │       │    │ Range (NOR)   │        │          │
    │       │    └───────────────┘        │          │
    │       │                             │          │
    │       └─────────────────────────────┘          │
    │                                                 │
    └─────────────────────────────────────────────────┘`}
      </pre>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>💡</span>
          <span>Praxis-Tipp</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Investieren Sie Zeit in Stage 1! Ein gut verstandener Prozess macht Stage 2 einfacher und Stage 3 robuster. Viele Validierungsprobleme entstehen durch unzureichendes Prozessverständnis.
        </p>
      </div>

      {/* Section 4: Stage 2 - Process Qualification */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Stage 2: Process Qualification</h2>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Ziel</h3>

      <p style={{ color: '#000000' }}>
        Nachweis, dass der Prozess unter realen Produktionsbedingungen reproduzierbar das gewünschte Ergebnis liefert.
      </p>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Voraussetzungen</h3>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>Vor Stage 2 erledigt?</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ Anlagen qualifiziert (IQ/OQ abgeschlossen)?</li>
          <li>□ Personal geschult?</li>
          <li>□ Arbeitsanweisungen freigegeben?</li>
          <li>□ Prüfmethoden validiert?</li>
          <li>□ Rohstoffe qualifiziert?</li>
          <li>□ Validierungsprotokoll genehmigt?</li>
          <li>□ Akzeptanzkriterien definiert?</li>
        </ul>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>PPQ – Process Performance Qualification</h3>

      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">Process Performance Qualification (PPQ) - Definition</div>
        <p className="text-gray-200 m-0">
          <strong>Process Performance Qualification (PPQ)</strong> ist der Nachweis, dass der Produktionsprozess unter Routinebedingungen konsistent Produkte liefert, die alle Qualitätsanforderungen erfüllen.
        </p>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Wie viele Chargen?</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Ansatz</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Anwendung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Traditionell: 3 Chargen</strong></td>
            <td className="border border-gray-600 px-4 py-2">Historische Konvention</td>
            <td className="border border-gray-600 px-4 py-2">Einfache, gut verstandene Prozesse</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Statistisch begründet</strong></td>
            <td className="border border-gray-600 px-4 py-2">Basierend auf Risiko und Variabilität</td>
            <td className="border border-gray-600 px-4 py-2">Komplexe Prozesse, höheres Risiko</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Continued Process Verification</strong></td>
            <td className="border border-gray-600 px-4 py-2">Weniger PPQ-Chargen, mehr Monitoring</td>
            <td className="border border-gray-600 px-4 py-2">Bei sehr gutem Prozessverständnis</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>3 Chargen-Regel</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Die "3 Chargen-Regel" ist keine regulatorische Anforderung, sondern historische Praxis. Die FDA fordert eine statistisch begründete Anzahl. In der Praxis sind 3 Chargen oft der Mindeststandard, aber mehr können erforderlich sein.
        </p>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>PPQ-Durchführung</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Schritt</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Aktivität</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>1</strong></td>
            <td className="border border-gray-600 px-4 py-2">Validierungsprotokoll erstellen und genehmigen</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>2</strong></td>
            <td className="border border-gray-600 px-4 py-2">Erhöhte Probenahme und In-Prozess-Kontrollen</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>3</strong></td>
            <td className="border border-gray-600 px-4 py-2">Alle CPPs dokumentieren</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>4</strong></td>
            <td className="border border-gray-600 px-4 py-2">Vollständige Produktprüfung</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>5</strong></td>
            <td className="border border-gray-600 px-4 py-2">Statistische Auswertung (Cpk, Mittelwert, Streuung)</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>6</strong></td>
            <td className="border border-gray-600 px-4 py-2">Abweichungen dokumentieren und bewerten</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>7</strong></td>
            <td className="border border-gray-600 px-4 py-2">Validierungsbericht erstellen</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Statistische Auswertung</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Kennzahl</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Bedeutung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Akzeptanzkriterium</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Cpk</strong></td>
            <td className="border border-gray-600 px-4 py-2">Prozessfähigkeit (zentriert)</td>
            <td className="border border-gray-600 px-4 py-2">≥ 1,33 (oft ≥ 1,0 akzeptiert)</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Cp</strong></td>
            <td className="border border-gray-600 px-4 py-2">Prozessfähigkeit (nicht zentriert)</td>
            <td className="border border-gray-600 px-4 py-2">≥ 1,33</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Ppk</strong></td>
            <td className="border border-gray-600 px-4 py-2">Prozessleistung (Performance)</td>
            <td className="border border-gray-600 px-4 py-2">≥ 1,33</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Mittelwert</strong></td>
            <td className="border border-gray-600 px-4 py-2">Zentrallage</td>
            <td className="border border-gray-600 px-4 py-2">Innerhalb Spezifikation</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Standardabweichung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Streuung</td>
            <td className="border border-gray-600 px-4 py-2">Möglichst gering</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>⚠️</span>
          <span>Cpk verstehen</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Ein Cpk von 1,0 bedeutet: Der Prozess nutzt die gesamte Spezifikationsbreite aus. Bei 1,33 bleibt Sicherheitsmarge. Bei &lt;1,0 produzieren Sie statistisch Ausschuss!
        </p>
      </div>

      {/* Section 5: Stage 3 - Continued Process Verification */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Stage 3: Continued Process Verification</h2>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Ziel</h3>

      <p style={{ color: '#000000' }}>
        Sicherstellen, dass der Prozess während der Routineproduktion im validierten Zustand bleibt.
      </p>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Aktivitäten</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Aktivität</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Häufigkeit</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Prozessmonitoring</strong></td>
            <td className="border border-gray-600 px-4 py-2">CPPs und CQAs überwachen</td>
            <td className="border border-gray-600 px-4 py-2">Laufend</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Trendanalyse</strong></td>
            <td className="border border-gray-600 px-4 py-2">Statistische Auswertung über Zeit</td>
            <td className="border border-gray-600 px-4 py-2">Periodisch (z.B. monatlich)</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>SPC (Statistical Process Control)</strong></td>
            <td className="border border-gray-600 px-4 py-2">Regelkarten führen</td>
            <td className="border border-gray-600 px-4 py-2">Laufend</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Annual Product Review</strong></td>
            <td className="border border-gray-600 px-4 py-2">Jährliche Produktbewertung</td>
            <td className="border border-gray-600 px-4 py-2">Jährlich</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Revalidierung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Bei Abweichungen oder Änderungen</td>
            <td className="border border-gray-600 px-4 py-2">Bei Bedarf</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Regelkarten (Control Charts)</h3>

      <pre className="bg-slate-800 p-4 rounded text-sm font-mono text-gray-300 overflow-x-auto my-6">
{`UCL ─────────────────────────────────────────────── Obere Warngrenze

        ·    ·         ·              ·
    ·        ·    ·         ·    ·
CL  ─────·───────·─────────────·───────────────────── Mittelwert
              ·         ·              ·    ·
        ·              ·         ·

LCL ─────────────────────────────────────────────── Untere Warngrenze

    └───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
     1   2   3   4   5   6   7   8   9  10  11  (Chargen)`}
      </pre>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>💡</span>
          <span>Praxis-Tipp</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Führen Sie Regelkarten für alle CPPs! Sie erkennen Trends, bevor Spezifikationsgrenzen überschritten werden. Das ist proaktives Qualitätsmanagement.
        </p>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Wann ist Revalidierung erforderlich?</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Auslöser</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beispiel</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Umfang</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Prozessänderung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Neuer Lieferant, neue Parameter</td>
            <td className="border border-gray-600 px-4 py-2">Abhängig von Änderung</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Anlagenänderung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Neues Equipment, Standortwechsel</td>
            <td className="border border-gray-600 px-4 py-2">Oft vollständige Revalidierung</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Negative Trends</strong></td>
            <td className="border border-gray-600 px-4 py-2">Cpk sinkt, Ausschuss steigt</td>
            <td className="border border-gray-600 px-4 py-2">Ursachenanalyse + ggf. Revalidierung</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Out-of-Spec</strong></td>
            <td className="border border-gray-600 px-4 py-2">Chargen außerhalb Spezifikation</td>
            <td className="border border-gray-600 px-4 py-2">Ursachenanalyse + ggf. Revalidierung</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Regulatorische Änderung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Neue Anforderungen</td>
            <td className="border border-gray-600 px-4 py-2">Bewertung erforderlich</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Zeitbasiert</strong></td>
            <td className="border border-gray-600 px-4 py-2">Periodische Revalidierung</td>
            <td className="border border-gray-600 px-4 py-2">Risikobasiert festlegen</td>
          </tr>
        </tbody>
      </table>

      {/* Section 6: Spezielle Prozesse */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Spezielle Prozesse</h2>

      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">Spezielle Prozesse - Definition</div>
        <p className="text-gray-200 m-0">
          <strong>Spezielle Prozesse</strong> sind Prozesse, deren Ergebnis nicht vollständig durch nachfolgende Überwachung oder Messung am Produkt verifiziert werden kann. Bei diesen ist Validierung besonders kritisch.
        </p>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Beispiele spezieller Prozesse</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Prozess</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Warum speziell?</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Validierungsanforderung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Sterilisation</strong></td>
            <td className="border border-gray-600 px-4 py-2">Sterilität nicht zerstörungsfrei prüfbar</td>
            <td className="border border-gray-600 px-4 py-2">ISO 11135, ISO 17665, ISO 11137</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Schweißen</strong></td>
            <td className="border border-gray-600 px-4 py-2">Festigkeit nur durch Zerstörung prüfbar</td>
            <td className="border border-gray-600 px-4 py-2">Schweißverfahrensprüfung</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Beschichten</strong></td>
            <td className="border border-gray-600 px-4 py-2">Haftung nur durch Zerstörung prüfbar</td>
            <td className="border border-gray-600 px-4 py-2">Beschichtungsvalidierung</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Reinigung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Rückstände nicht immer messbar</td>
            <td className="border border-gray-600 px-4 py-2">Reinigungsvalidierung</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Kleben</strong></td>
            <td className="border border-gray-600 px-4 py-2">Festigkeit nur durch Zerstörung prüfbar</td>
            <td className="border border-gray-600 px-4 py-2">Klebprozessvalidierung</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Versiegeln</strong></td>
            <td className="border border-gray-600 px-4 py-2">Dichtheit nur durch Zerstörung prüfbar</td>
            <td className="border border-gray-600 px-4 py-2">Siegelvalidierung</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Sterilisationsvalidierung (Beispiel)</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Phase</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Aktivität</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>IQ</strong></td>
            <td className="border border-gray-600 px-4 py-2">Installation des Autoklaven prüfen</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>OQ</strong></td>
            <td className="border border-gray-600 px-4 py-2">Temperaturverteilung, Leer-Kammer</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>PQ</strong></td>
            <td className="border border-gray-600 px-4 py-2">Mit Beladung, Biologische Indikatoren</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Routine</strong></td>
            <td className="border border-gray-600 px-4 py-2">Physikalische Parameter + BI pro Charge</td>
          </tr>
        </tbody>
      </table>

      {/* Section 7: Validierungsdokumentation */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Validierungsdokumentation</h2>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Validierungsmasterplan (VMP)</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Inhalt</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Geltungsbereich</strong></td>
            <td className="border border-gray-600 px-4 py-2">Welche Prozesse, Anlagen, Produkte?</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Verantwortlichkeiten</strong></td>
            <td className="border border-gray-600 px-4 py-2">Wer macht was?</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Strategie</strong></td>
            <td className="border border-gray-600 px-4 py-2">Risikobasierter Ansatz</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Dokumentation</strong></td>
            <td className="border border-gray-600 px-4 py-2">Welche Dokumente werden erstellt?</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Zeitplan</strong></td>
            <td className="border border-gray-600 px-4 py-2">Wann wird was validiert?</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Akzeptanzkriterien</strong></td>
            <td className="border border-gray-600 px-4 py-2">Allgemeine Vorgaben</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Revalidierung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Wann und wie?</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Validierungsprotokoll</h3>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>Inhalte Validierungsprotokoll</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ Zweck und Geltungsbereich</li>
          <li>□ Verantwortlichkeiten</li>
          <li>□ Prozessbeschreibung</li>
          <li>□ CPPs und CQAs</li>
          <li>□ Akzeptanzkriterien (quantitativ!)</li>
          <li>□ Versuchsplan (Chargenanzahl, Probenahme)</li>
          <li>□ Prüfmethoden und -anweisungen</li>
          <li>□ Dokumentationsformulare</li>
          <li>□ Abweichungsbehandlung</li>
          <li>□ Genehmigungen</li>
        </ul>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Validierungsbericht</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Inhalt</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Zusammenfassung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Ergebnis: Bestanden/Nicht bestanden</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Durchführung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Abweichungen vom Protokoll?</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Ergebnisse</strong></td>
            <td className="border border-gray-600 px-4 py-2">Rohdaten, statistische Auswertung</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Abweichungen</strong></td>
            <td className="border border-gray-600 px-4 py-2">Liste mit Bewertung und Maßnahmen</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Schlussfolgerung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Prozess validiert? Einschränkungen?</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Empfehlungen</strong></td>
            <td className="border border-gray-600 px-4 py-2">Für Routinebetrieb, Monitoring</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Freigabe</strong></td>
            <td className="border border-gray-600 px-4 py-2">Unterschriften</td>
          </tr>
        </tbody>
      </table>

      {/* Section 8: Praxisbeispiel */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Praxisbeispiel: Validierung eines Tablettierungsprozesses</h2>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Stage 1: Process Design</h3>

      <p style={{ color: '#000000' }}><strong>Identifizierte CPPs:</strong></p>
      <ul style={{ color: '#000000' }}>
        <li>Presskraft</li>
        <li>Tablettiergeschwindigkeit</li>
        <li>Granulatfeuchte</li>
      </ul>

      <p style={{ color: '#000000' }}><strong>Identifizierte CQAs:</strong></p>
      <ul style={{ color: '#000000' }}>
        <li>Tablettenhärte</li>
        <li>Zerfallszeit</li>
        <li>Wirkstoffgehalt</li>
        <li>Gewichtsvariation</li>
      </ul>

      <p style={{ color: '#000000' }}><strong>DoE-Ergebnis:</strong></p>
      <ul style={{ color: '#000000' }}>
        <li>Presskraft hat größten Einfluss auf Härte</li>
        <li>Design Space: 10-15 kN Presskraft, 60-80 Tabl./min</li>
      </ul>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Stage 2: PPQ</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Parameter</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Charge 1</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Charge 2</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Charge 3</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Spezifikation</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Cpk</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Härte (N)</td>
            <td className="border border-gray-600 px-4 py-2">85 ± 5</td>
            <td className="border border-gray-600 px-4 py-2">87 ± 4</td>
            <td className="border border-gray-600 px-4 py-2">84 ± 5</td>
            <td className="border border-gray-600 px-4 py-2">70-100 N</td>
            <td className="border border-gray-600 px-4 py-2">1,67</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Zerfall (min)</td>
            <td className="border border-gray-600 px-4 py-2">4,2</td>
            <td className="border border-gray-600 px-4 py-2">4,5</td>
            <td className="border border-gray-600 px-4 py-2">4,1</td>
            <td className="border border-gray-600 px-4 py-2">≤ 15 min</td>
            <td className="border border-gray-600 px-4 py-2">&gt;2,0</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Gehalt (%)</td>
            <td className="border border-gray-600 px-4 py-2">99,2</td>
            <td className="border border-gray-600 px-4 py-2">100,1</td>
            <td className="border border-gray-600 px-4 py-2">99,8</td>
            <td className="border border-gray-600 px-4 py-2">95-105%</td>
            <td className="border border-gray-600 px-4 py-2">1,89</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Gewicht (mg)</td>
            <td className="border border-gray-600 px-4 py-2">500 ± 3</td>
            <td className="border border-gray-600 px-4 py-2">501 ± 4</td>
            <td className="border border-gray-600 px-4 py-2">499 ± 3</td>
            <td className="border border-gray-600 px-4 py-2">490-510 mg</td>
            <td className="border border-gray-600 px-4 py-2">1,42</td>
          </tr>
        </tbody>
      </table>

      <p style={{ color: '#000000' }}><strong>Ergebnis:</strong> Alle Cpk &gt; 1,33 → Prozess validiert</p>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Stage 3: Continued Verification</h3>

      <p style={{ color: '#000000' }}><strong>Monitoring-Plan:</strong></p>
      <ul style={{ color: '#000000' }}>
        <li>Härte: Jede Stunde 10 Tabletten</li>
        <li>Gewicht: Alle 30 min Stichprobe</li>
        <li>Regelkarten für Härte und Gewicht</li>
        <li>Monatliche Trendauswertung</li>
        <li>Jährlicher APR (Annual Product Review)</li>
      </ul>

      {/* Section 9: Typische Fehler */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Typische Fehler</h2>

      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>⚠️</span>
          <span>Diese Fehler führen zu Beanstandungen bei Inspektionen</span>
        </div>
        <div style={{ color: '#000000' }}>
          <p className="font-medium mt-4 mb-1">Fehler 1: Validierung als einmaliges Projekt</p>
          <p className="m-0 mb-3">"Wir haben vor 10 Jahren validiert, seitdem läuft es."<br />→ Stage 3 fehlt! Continued Verification ist Pflicht.</p>

          <p className="font-medium mb-1">Fehler 2: Keine statistische Begründung</p>
          <p className="m-0 mb-3">"Wir machen immer 3 Chargen."<br />→ Warum 3? Bei hohem Risiko oder hoher Variabilität brauchen Sie mehr.</p>

          <p className="font-medium mb-1">Fehler 3: CPPs nicht überwacht</p>
          <p className="m-0 mb-3">"Wir prüfen nur das Endprodukt."<br />→ Prozessüberwachung ist essenziell. Endprüfung allein reicht nicht.</p>

          <p className="font-medium mb-1">Fehler 4: Änderungen ohne Bewertung</p>
          <p className="m-0 mb-3">"Das war nur eine kleine Änderung am Prozess."<br />→ Jede Änderung muss auf Validierungsimpact bewertet werden.</p>

          <p className="font-medium mb-1">Fehler 5: Unzureichende Dokumentation</p>
          <p className="m-0">"Die Daten sind irgendwo im System."<br />→ Validierungsdokumentation muss vollständig und auffindbar sein.</p>
        </div>
      </div>

      {/* Section 10: Branchenspezifische Anforderungen */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Branchenspezifische Anforderungen</h2>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Pharma (FDA/EU GMP)</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Anforderung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Quelle</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Lifecycle-Ansatz (3 Stages)</td>
            <td className="border border-gray-600 px-4 py-2">FDA Guidance 2011</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Prospektive Validierung</td>
            <td className="border border-gray-600 px-4 py-2">EU GMP Annex 15</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Annual Product Review</td>
            <td className="border border-gray-600 px-4 py-2">21 CFR 211.180</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Ongoing Process Verification</td>
            <td className="border border-gray-600 px-4 py-2">EU GMP Annex 15</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Medizintechnik (ISO 13485)</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Anforderung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Quelle</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Validierung spezieller Prozesse</td>
            <td className="border border-gray-600 px-4 py-2">ISO 13485:2016, 7.5.6</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Sterilisationsvalidierung</td>
            <td className="border border-gray-600 px-4 py-2">ISO 11135, 11137, 17665</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Verpackungsvalidierung</td>
            <td className="border border-gray-600 px-4 py-2">ISO 11607</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Automotive (IATF 16949)</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Anforderung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Quelle</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">PPAP (Production Part Approval)</td>
            <td className="border border-gray-600 px-4 py-2">AIAG</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Run@Rate</td>
            <td className="border border-gray-600 px-4 py-2">IATF 16949</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">SPC als Standard</td>
            <td className="border border-gray-600 px-4 py-2">AIAG SPC Manual</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">MSA (Measurement System Analysis)</td>
            <td className="border border-gray-600 px-4 py-2">AIAG MSA Manual</td>
          </tr>
        </tbody>
      </table>

      {/* Section 11: Zusammenfassung */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Zusammenfassung</h2>

      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">Prozessvalidierung auf einen Blick</div>
        <div className="text-gray-200">
          <p className="mb-2">✓ <strong>Stage 1 – Process Design:</strong> Prozess verstehen, CPP/CQA identifizieren</p>
          <p className="mb-2">✓ <strong>Stage 2 – Process Qualification:</strong> PPQ mit statistischer Auswertung</p>
          <p className="mb-2">✓ <strong>Stage 3 – Continued Verification:</strong> Laufende Überwachung, Regelkarten</p>
          <p className="mb-2">✓ <strong>Lifecycle-Ansatz:</strong> Validierung ist nie "fertig"</p>
          <p className="mb-2">✓ <strong>Statistik:</strong> Cpk ≥ 1,33 als Ziel</p>
          <p className="mb-2">✓ <strong>Dokumentation:</strong> VMP → Protokoll → Bericht</p>
          <p className="m-0">✓ <strong>Spezielle Prozesse:</strong> Besondere Aufmerksamkeit</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-qcore-navy bg-opacity-30 border border-gray-600 rounded-lg p-6 my-8">
        <h3 className="mt-0 mb-3" style={{ color: '#1e293b' }}>Prozessvalidierung geplant?</h3>
        <p className="mb-4" style={{ color: '#000000' }}>
          Ich unterstütze Sie bei:
        </p>
        <ul className="mb-4" style={{ color: '#000000' }}>
          <li>Validierungsmasterplan erstellen</li>
          <li>CPP/CQA-Analyse und Risikobewertung</li>
          <li>Validierungsprotokolle schreiben</li>
          <li>Statistische Auswertung (Cpk, SPC)</li>
          <li>Vorbereitung auf FDA-/GMP-Inspektionen</li>
          <li>Continued Process Verification aufbauen</li>
        </ul>
        <a
          href="/kontakt"
          className="inline-block bg-qcore-blue text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Kostenloses Erstgespräch vereinbaren
        </a>
      </div>
    </article>
  );
};

export default ProcessValidationArticle;
