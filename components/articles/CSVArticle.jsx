const CSVArticle = () => {
  return (
    <article className="prose max-w-none">
      {/* 1. Was ist Computer System Validation? */}
      <h2 className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#1e293b' }}>
        1. Was ist Computer System Validation?
      </h2>

      <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-6 my-6 border border-gray-600">
        <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Computer System Validation (CSV) - Definition</h4>
        <p style={{ color: '#000000' }}>
          Computer System Validation (CSV) ist der dokumentierte Nachweis, dass ein computergestütztes System konsistent und reproduzierbar gemäß seiner Spezifikation und den regulatorischen Anforderungen arbeitet. CSV stellt sicher, dass Software in regulierten Umgebungen zuverlässig und nachvollziehbar funktioniert.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
        Warum CSV?
      </h3>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Aspekt</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Erklärung</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Datenintegrität</td>
              <td className="px-4 py-2 border-b border-gray-600">Elektronische Daten müssen verlässlich und unverfälscht sein</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Rückverfolgbarkeit</td>
              <td className="px-4 py-2 border-b border-gray-600">Wer hat wann was geändert?</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Regulatorisch</td>
              <td className="px-4 py-2 border-b border-gray-600">FDA, EU GMP, ISO 13485 fordern validierte Systeme</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Patientensicherheit</td>
              <td className="px-4 py-2 border-b border-gray-600">Fehlerhafte Software kann Patienten gefährden</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Audit Trail</td>
              <td className="px-4 py-2 border-b border-gray-600">Jede Änderung muss nachvollziehbar sein</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
        Was ist ein "Computergestütztes System"?
      </h3>

      <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-6 my-6 border border-gray-600">
        <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Computergestütztes System - Definition</h4>
        <p style={{ color: '#000000' }}>
          Ein <strong>computergestütztes System</strong> besteht aus Hardware, Software, Netzwerkkomponenten, Peripheriegeräten, Dokumentation, Personal und den zugehörigen Prozessen, die zusammen eine bestimmte Funktion erfüllen.
        </p>
      </div>

      <p style={{ color: '#000000' }}>
        <strong>Beispiele:</strong>
      </p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Kategorie</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Beispiele</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Labor</td>
              <td className="px-4 py-2 border-b border-gray-600">LIMS, HPLC-Software, Waagen-Software</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Produktion</td>
              <td className="px-4 py-2 border-b border-gray-600">SCADA, MES, SPS-Steuerungen</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Qualität</td>
              <td className="px-4 py-2 border-b border-gray-600">QMS-Software, CAPA-Systeme, Dokumentenmanagement</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Logistik</td>
              <td className="px-4 py-2 border-b border-gray-600">ERP (SAP, etc.), Warehouse Management</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Klinisch</td>
              <td className="px-4 py-2 border-b border-gray-600">EDC-Systeme, eCTD, eTMF</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2. Regulatorische Grundlagen */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        2. Regulatorische Grundlagen
      </h2>

      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
        21 CFR Part 11 (FDA)
      </h3>

      <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-6 my-6 border border-gray-600">
        <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>21 CFR Part 11 - Definition</h4>
        <p style={{ color: '#000000' }}>
          <strong>21 CFR Part 11</strong> ist die FDA-Verordnung, die Anforderungen an elektronische Aufzeichnungen und elektronische Unterschriften definiert. Sie legt fest, wann elektronische Dokumente als gleichwertig zu Papierdokumenten gelten.
        </p>
      </div>

      <p style={{ color: '#000000' }}>
        <strong>Kernanforderungen:</strong>
      </p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Anforderung</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Beschreibung</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Audit Trail</td>
              <td className="px-4 py-2 border-b border-gray-600">Automatische Aufzeichnung aller Änderungen</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Elektronische Signaturen</td>
              <td className="px-4 py-2 border-b border-gray-600">Eindeutig, nicht übertragbar, mit Zeitstempel</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Zugriffskontrolle</td>
              <td className="px-4 py-2 border-b border-gray-600">Benutzer-IDs, Passwörter, Berechtigungen</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">System Security</td>
              <td className="px-4 py-2 border-b border-gray-600">Schutz vor unbefugtem Zugriff</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Datenintegrität</td>
              <td className="px-4 py-2 border-b border-gray-600">ALCOA+ Prinzipien</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
        ALCOA+ Prinzipien
      </h3>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Buchstabe</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Bedeutung</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Erklärung</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">A</td>
              <td className="px-4 py-2 border-b border-gray-600">Attributable</td>
              <td className="px-4 py-2 border-b border-gray-600">Wer hat die Daten erzeugt?</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">L</td>
              <td className="px-4 py-2 border-b border-gray-600">Legible</td>
              <td className="px-4 py-2 border-b border-gray-600">Lesbar und dauerhaft</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">C</td>
              <td className="px-4 py-2 border-b border-gray-600">Contemporaneous</td>
              <td className="px-4 py-2 border-b border-gray-600">Zeitnah erfasst</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">O</td>
              <td className="px-4 py-2 border-b border-gray-600">Original</td>
              <td className="px-4 py-2 border-b border-gray-600">Originalaufzeichnung oder zertifizierte Kopie</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">A</td>
              <td className="px-4 py-2 border-b border-gray-600">Accurate</td>
              <td className="px-4 py-2 border-b border-gray-600">Fehlerfrei und korrekt</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">+</td>
              <td className="px-4 py-2 border-b border-gray-600">Complete</td>
              <td className="px-4 py-2 border-b border-gray-600">Vollständig</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">+</td>
              <td className="px-4 py-2 border-b border-gray-600">Consistent</td>
              <td className="px-4 py-2 border-b border-gray-600">Widerspruchsfrei</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">+</td>
              <td className="px-4 py-2 border-b border-gray-600">Enduring</td>
              <td className="px-4 py-2 border-b border-gray-600">Dauerhaft verfügbar</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">+</td>
              <td className="px-4 py-2 border-b border-gray-600">Available</td>
              <td className="px-4 py-2 border-b border-gray-600">Bei Bedarf zugänglich</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
        EU GMP Annex 11
      </h3>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Kapitel</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Anforderung</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Risikomanagement</td>
              <td className="px-4 py-2 border-b border-gray-600">Risikobasierter Ansatz für Validierungsumfang</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Personal</td>
              <td className="px-4 py-2 border-b border-gray-600">Schulung und Qualifikation</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Lieferanten</td>
              <td className="px-4 py-2 border-b border-gray-600">Lieferantenbewertung für Software</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Validierung</td>
              <td className="px-4 py-2 border-b border-gray-600">Dokumentierter Nachweis der Eignung</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Daten</td>
              <td className="px-4 py-2 border-b border-gray-600">Integrität, Backup, Archivierung</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Security</td>
              <td className="px-4 py-2 border-b border-gray-600">Zugriffskontrolle, Audit Trail</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Änderungen</td>
              <td className="px-4 py-2 border-b border-gray-600">Change Control für alle Änderungen</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Periodische Bewertung</td>
              <td className="px-4 py-2 border-b border-gray-600">Regelmäßige Überprüfung</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
        ISO 13485:2016
      </h3>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Kapitel</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Anforderung</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">4.1.6</td>
              <td className="px-4 py-2 border-b border-gray-600">Validierung von Software für QMS</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">7.5.6</td>
              <td className="px-4 py-2 border-b border-gray-600">Validierung von Produktionssoftware</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">7.6</td>
              <td className="px-4 py-2 border-b border-gray-600">Validierung von Software für Überwachung/Messung</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. GAMP 5 */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        3. GAMP 5: Der Industriestandard
      </h2>

      <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-6 my-6 border border-gray-600">
        <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>GAMP 5 - Definition</h4>
        <p style={{ color: '#000000' }}>
          <strong>GAMP 5 (Good Automated Manufacturing Practice)</strong> ist ein Leitfaden der ISPE, der einen risikobasierten Ansatz für die Validierung computergestützter Systeme in regulierten Industrien beschreibt.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
        GAMP 5 Softwarekategorien
      </h3>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Kategorie</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Beschreibung</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Beispiele</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Validierungsaufwand</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">1</td>
              <td className="px-4 py-2 border-b border-gray-600">Infrastruktur-Software</td>
              <td className="px-4 py-2 border-b border-gray-600">Betriebssysteme, Datenbanken, Netzwerk</td>
              <td className="px-4 py-2 border-b border-gray-600">Gering (Konfiguration dokumentieren)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">3</td>
              <td className="px-4 py-2 border-b border-gray-600">Nicht-konfigurierbare Software</td>
              <td className="px-4 py-2 border-b border-gray-600">Firmware, einfache Tools</td>
              <td className="px-4 py-2 border-b border-gray-600">Mittel (Funktionstest)</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">4</td>
              <td className="px-4 py-2 border-b border-gray-600">Konfigurierbare Software</td>
              <td className="px-4 py-2 border-b border-gray-600">ERP, LIMS, MES (Standard)</td>
              <td className="px-4 py-2 border-b border-gray-600">Mittel-Hoch (Konfiguration validieren)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">5</td>
              <td className="px-4 py-2 border-b border-gray-600">Maßgeschneiderte Software</td>
              <td className="px-4 py-2 border-b border-gray-600">Eigenentwicklung, Custom Code</td>
              <td className="px-4 py-2 border-b border-gray-600">Hoch (Vollständiger SDLC)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">ℹ️</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Info</h4>
            <p className="text-sm m-0" style={{ color: '#000000' }}>
              Kategorie 2 (Firmware) wurde in GAMP 5 Second Edition in Kategorie 3 integriert. Die meisten aktuellen Referenzen sprechen von Kategorien 1, 3, 4 und 5.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
        Validierungsaufwand nach Kategorie
      </h3>

      <pre className="bg-slate-800 p-4 rounded text-sm font-mono text-gray-300 overflow-x-auto my-6">
{`Validierungsaufwand
        ▲
        │
Hoch    │                                    ┌─────┐
        │                                    │ Kat │
        │                            ┌─────┐ │  5  │
        │                            │ Kat │ │     │
Mittel  │                    ┌─────┐ │  4  │ │     │
        │            ┌─────┐ │ Kat │ │     │ │     │
        │            │ Kat │ │  4  │ │     │ │     │
Gering  │    ┌─────┐ │  3  │ │(low)│ │(high)│     │
        │    │ Kat │ │     │ │     │ │     │ │     │
        │    │  1  │ │     │ │     │ │     │ │     │
        └────┴─────┴─┴─────┴─┴─────┴─┴─────┴─┴─────┴──►
             Infra-  Nicht-  Konfig. Konfig. Custom
             struktur konf.  (simple) (complex)`}
      </pre>

      {/* 4. Der CSV-Lifecycle */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        4. Der CSV-Lifecycle
      </h2>

      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
        V-Modell für CSV
      </h3>

      <pre className="bg-slate-800 p-4 rounded text-sm font-mono text-gray-300 overflow-x-auto my-6">
{`Anforderungen                              Qualifizierung/Test
     │                                            │
     ▼                                            ▼
┌─────────────┐                          ┌─────────────┐
│    URS      │◄────────────────────────►│    PQ       │
│(User Req.)  │                          │(Performance)│
└─────────────┘                          └─────────────┘
     │                                            ▲
     ▼                                            │
┌─────────────┐                          ┌─────────────┐
│    FS       │◄────────────────────────►│    OQ       │
│(Functional) │                          │(Operational)│
└─────────────┘                          └─────────────┘
     │                                            ▲
     ▼                                            │
┌─────────────┐                          ┌─────────────┐
│    DS/CS    │◄────────────────────────►│    IQ       │
│(Design/Conf)│                          │(Installation)│
└─────────────┘                          └─────────────┘
                      │
                      ▼
               ┌─────────────┐
               │   Coding/   │
               │   Config    │
               └─────────────┘`}
      </pre>

      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
        CSV-Phasen
      </h3>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Phase</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Aktivitäten</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Planung</td>
              <td className="px-4 py-2 border-b border-gray-600">Validierungsplan, Risikobewertung, Kategorisierung</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Spezifikation</td>
              <td className="px-4 py-2 border-b border-gray-600">URS, FS, DS/CS</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Konfiguration/Entwicklung</td>
              <td className="px-4 py-2 border-b border-gray-600">System einrichten, Code entwickeln</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Test</td>
              <td className="px-4 py-2 border-b border-gray-600">IQ, OQ, PQ, UAT</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Freigabe</td>
              <td className="px-4 py-2 border-b border-gray-600">Validierungsbericht, Go-Live-Freigabe</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Betrieb</td>
              <td className="px-4 py-2 border-b border-gray-600">Change Control, periodische Reviews</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Außerbetriebnahme</td>
              <td className="px-4 py-2 border-b border-gray-600">Datenmigration, Archivierung</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 5. Validierungsdokumentation */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        5. Validierungsdokumentation
      </h2>

      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
        Validierungsplan (VP)
      </h3>

      <div className="bg-green-900 bg-opacity-20 border-l-4 border-green-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">✅</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Checkliste: Inhalte Validierungsplan</h4>
            <ul className="text-sm mt-2 space-y-1" style={{ color: '#000000' }}>
              <li>☐ Systembeschreibung</li>
              <li>☐ Geltungsbereich</li>
              <li>☐ GAMP-Kategorie</li>
              <li>☐ Risikobewertung</li>
              <li>☐ Validierungsstrategie</li>
              <li>☐ Rollen und Verantwortlichkeiten</li>
              <li>☐ Zu erstellende Dokumente</li>
              <li>☐ Testansatz</li>
              <li>☐ Akzeptanzkriterien</li>
              <li>☐ Zeitplan</li>
              <li>☐ Genehmigungen</li>
            </ul>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
        User Requirements Specification (URS)
      </h3>

      <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-6 my-6 border border-gray-600">
        <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>URS - Definition</h4>
        <p style={{ color: '#000000' }}>
          Die <strong>User Requirements Specification (URS)</strong> beschreibt, was das System aus Anwendersicht leisten muss. Sie ist die Basis für alle weiteren Spezifikationen und Tests.
        </p>
      </div>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Abschnitt</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Inhalt</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Zweck</td>
              <td className="px-4 py-2 border-b border-gray-600">Wofür wird das System verwendet?</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Funktionale Anforderungen</td>
              <td className="px-4 py-2 border-b border-gray-600">Was muss das System tun?</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Datenanforderungen</td>
              <td className="px-4 py-2 border-b border-gray-600">Welche Daten werden verarbeitet?</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Schnittstellen</td>
              <td className="px-4 py-2 border-b border-gray-600">Mit welchen Systemen wird kommuniziert?</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Regulatorische Anforderungen</td>
              <td className="px-4 py-2 border-b border-gray-600">21 CFR Part 11, Annex 11, etc.</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Leistungsanforderungen</td>
              <td className="px-4 py-2 border-b border-gray-600">Geschwindigkeit, Verfügbarkeit</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Sicherheitsanforderungen</td>
              <td className="px-4 py-2 border-b border-gray-600">Zugriff, Audit Trail, Backup</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">💡</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Praxis-Tipp</h4>
            <p className="text-sm m-0" style={{ color: '#000000' }}>
              Schreiben Sie URS so, dass sie testbar ist! "Das System soll benutzerfreundlich sein" ist nicht testbar. "Der Benutzer kann einen Datensatz in maximal 3 Klicks anlegen" ist testbar.
            </p>
          </div>
        </div>
      </div>

      {/* 6. Testen - Condensed */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        6. Testen: IQ, OQ, PQ
      </h2>

      <p style={{ color: '#000000' }}>
        Die Testphasen IQ, OQ und PQ sind zentral für die Validierung. Jede Phase prüft gegen verschiedene Spezifikationen und wird von unterschiedlichen Rollen durchgeführt.
      </p>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Test</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Was wird geprüft?</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Beispiele</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">IQ</td>
              <td className="px-4 py-2 border-b border-gray-600">Installation & Konfiguration</td>
              <td className="px-4 py-2 border-b border-gray-600">Server installiert, Software-Version korrekt, Backup funktioniert</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">OQ</td>
              <td className="px-4 py-2 border-b border-gray-600">Funktionen & Features</td>
              <td className="px-4 py-2 border-b border-gray-600">Berechnungen korrekt, Audit Trail protokolliert, Zugr iffsrechte funktionieren</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">PQ/UAT</td>
              <td className="px-4 py-2 border-b border-gray-600">Geschäftsprozesse End-to-End</td>
              <td className="px-4 py-2 border-b border-gray-600">Workflows mit echten Daten, Performance unter Last, Anwenderakzeptanz</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-900 bg-opacity-20 border-l-4 border-amber-500 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">⚠️</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Wichtig</h4>
            <p className="text-sm m-0" style={{ color: '#000000' }}>
              Testen Sie auch negative Szenarien! Was passiert bei falschen Eingaben? Bei Netzwerkausfall? Bei zu vielen gleichzeitigen Benutzern? Diese Tests sind oft wichtiger als die "Happy Path" Tests.
            </p>
          </div>
        </div>
      </div>

      {/* 7. Audit Trail - Condensed */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        7. Audit Trail und elektronische Unterschriften
      </h2>

      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Element</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Beschreibung</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Wer</td>
              <td className="px-4 py-2 border-b border-gray-600">Benutzer-ID (eindeutig)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Was</td>
              <td className="px-4 py-2 border-b border-gray-600">Welche Daten wurden geändert</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Wann</td>
              <td className="px-4 py-2 border-b border-gray-600">Zeitstempel (mit Zeitzone)</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Warum</td>
              <td className="px-4 py-2 border-b border-gray-600">Grund für Änderung (wenn erforderlich)</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Alter Wert</td>
              <td className="px-4 py-2 border-b border-gray-600">Vorheriger Zustand</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">Neuer Wert</td>
              <td className="px-4 py-2 border-b border-gray-600">Aktueller Zustand</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-amber-900 bg-opacity-20 border-l-4 border-amber-500 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">⚠️</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Kritisch</h4>
            <p className="text-sm m-0" style={{ color: '#000000' }}>
              Der Audit Trail muss unveränderlich sein! Wenn Benutzer den Audit Trail deaktivieren oder Einträge löschen können, ist das System nicht Part 11 compliant.
            </p>
          </div>
        </div>
      </div>

      {/* 8. Change Control - Condensed */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        8. Change Control und Maintenance
      </h2>

      <pre className="bg-slate-800 p-4 rounded text-sm font-mono text-gray-300 overflow-x-auto my-6">
{`┌─────────────────┐
│ Change Request  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Bewertung     │
│ (Impact, Risiko)│
└────────┬────────┘
         │
         ▼
┌─────────────────┐     Nein
│  Genehmigung?   │─────────► Ablehnung
└────────┬────────┘
         │ Ja
         ▼
┌─────────────────┐
│  Implementierung│
│   (Test, Doku)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Freigabe     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Validierungs-   │
│ dokumente       │
│ aktualisieren   │
└─────────────────┘`}
      </pre>

      {/* 9. Typische Fehler - Condensed */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        9. Typische Fehler vermeiden
      </h2>

      <div className="bg-amber-900 bg-opacity-20 border-l-4 border-amber-500 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">⚠️</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Diese Fehler führen zu FDA Warning Letters:</h4>
            <ul className="text-sm mt-2 space-y-2" style={{ color: '#000000' }}>
              <li><strong>Kein Audit Trail:</strong> Änderungen nicht nachvollziehbar</li>
              <li><strong>Shared Logins:</strong> Mehrere Benutzer verwenden denselben Account</li>
              <li><strong>Keine Change Control:</strong> Updates ohne Bewertung eingespielt</li>
              <li><strong>Excel nicht validiert:</strong> Spreadsheets mit GxP-Berechnungen nicht validiert</li>
              <li><strong>Backup nie getestet:</strong> Wiederherstellung funktioniert nicht</li>
              <li><strong>Veraltete Dokumentation:</strong> Validierungsdoku nicht aktuell</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 14. Zusammenfassung */}
      <h2 className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        14. Zusammenfassung
      </h2>

      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">CSV auf einen Blick</div>
        <div className="text-gray-200">
          <p className="mb-2">✓ <strong>Regulatorisch:</strong> 21 CFR Part 11, EU GMP Annex 11, ISO 13485</p>
          <p className="mb-2">✓ <strong>GAMP 5:</strong> Kategorien 1, 3, 4, 5 mit unterschiedlichem Aufwand</p>
          <p className="mb-2">✓ <strong>Datenintegrität:</strong> ALCOA+ Prinzipien</p>
          <p className="mb-2">✓ <strong>Audit Trail:</strong> Wer, Was, Wann, Warum – unveränderlich</p>
          <p className="mb-2">✓ <strong>Risikobasiert:</strong> Aufwand nach GxP-Relevanz</p>
          <p className="mb-2">✓ <strong>Dokumentation:</strong> URS → FS → CS/DS → IQ → OQ → PQ</p>
          <p className="mb-2">✓ <strong>Change Control:</strong> Jede Änderung bewerten und dokumentieren</p>
          <p className="m-0">✓ <strong>Periodische Reviews:</strong> System bleibt validiert</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-qcore-navy bg-opacity-30 rounded-lg p-8 mt-12 text-center border border-gray-600">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
          CSV-Projekt geplant oder Audit steht bevor?
        </h3>
        <p className="mb-6" style={{ color: '#000000' }}>
          Ich unterstütze Sie bei der Validierung computergestützter Systeme - von der GAMP-Kategorisierung über URS und Testprotokolle bis zur 21 CFR Part 11 Compliance.
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

export default CSVArticle;
