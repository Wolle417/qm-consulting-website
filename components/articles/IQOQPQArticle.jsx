const IQOQPQArticle = () => {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Definition Box */}
      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">Qualifizierung - Definition</div>
        <p className="text-gray-200 m-0">
          <strong>Qualifizierung</strong> ist der dokumentierte Nachweis, dass Ausrüstungen, Räume oder Systeme ordnungsgemäß installiert sind, korrekt funktionieren und die erwarteten Ergebnisse liefern. Sie ist Voraussetzung für die Prozessvalidierung.
        </p>
      </div>

      {/* Section 1: Was ist Qualifizierung? */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Was ist Qualifizierung?</h2>

      <p style={{ color: '#000000' }}>
        Qualifizierung ist der systematische Nachweis, dass Anlagen, Geräte und Systeme das tun, was sie sollen – reproduzierbar und zuverlässig. Ohne qualifizierte Anlagen keine validen Prozesse.
      </p>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Qualifizierung vs. Validierung</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Begriff</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Bezieht sich auf</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Fragestellung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Qualifizierung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Anlagen, Geräte, Räume</td>
            <td className="border border-gray-600 px-4 py-2">"Funktioniert die Maschine wie spezifiziert?"</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Validierung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Prozesse</td>
            <td className="border border-gray-600 px-4 py-2">"Liefert der Prozess reproduzierbar das gewünschte Ergebnis?"</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Einfach gesagt</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Erst qualifizieren Sie die Anlage, dann validieren Sie den Prozess, der auf dieser Anlage läuft. Ohne qualifizierte Anlage keine valide Prozessvalidierung.
        </p>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Das V-Modell</h3>

      <pre className="bg-slate-800 p-4 rounded text-sm font-mono text-gray-300 overflow-x-auto my-6">
{`Anforderungen                                        Qualifizierung
     │                                                      │
     ▼                                                      ▼
┌─────────────┐                                    ┌─────────────┐
│   URS       │◄──────────────────────────────────►│    PQ       │
│ (User Req.) │                                    │ (Leistung)  │
└─────────────┘                                    └─────────────┘
     │                                                      ▲
     ▼                                                      │
┌─────────────┐                                    ┌─────────────┐
│   FS        │◄──────────────────────────────────►│    OQ       │
│ (Funktional)│                                    │ (Funktion)  │
└─────────────┘                                    └─────────────┘
     │                                                      ▲
     ▼                                                      │
┌─────────────┐                                    ┌─────────────┐
│   DS        │◄──────────────────────────────────►│    IQ       │
│ (Design)    │                                    │(Installation)│
└─────────────┘                                    └─────────────┘
                         │
                         ▼
                  ┌─────────────┐
                  │   Bau/      │
                  │ Beschaffung │
                  └─────────────┘`}
      </pre>

      <p style={{ color: '#000000' }}>
        <strong>Das V-Modell zeigt:</strong> Jede Spezifikationsebene links hat eine korrespondierende Qualifizierungsebene rechts.
      </p>

      {/* Section 2: Qualifizierungsphasen im Überblick */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Die Qualifizierungsphasen im Überblick</h2>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Phase</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Vollständiger Name</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Kernfrage</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Wann?</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>DQ</strong></td>
            <td className="border border-gray-600 px-4 py-2">Design Qualification</td>
            <td className="border border-gray-600 px-4 py-2">Ist das Design geeignet?</td>
            <td className="border border-gray-600 px-4 py-2">Vor Beschaffung</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>IQ</strong></td>
            <td className="border border-gray-600 px-4 py-2">Installation Qualification</td>
            <td className="border border-gray-600 px-4 py-2">Ist alles richtig installiert?</td>
            <td className="border border-gray-600 px-4 py-2">Nach Installation</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>OQ</strong></td>
            <td className="border border-gray-600 px-4 py-2">Operational Qualification</td>
            <td className="border border-gray-600 px-4 py-2">Funktioniert alles wie spezifiziert?</td>
            <td className="border border-gray-600 px-4 py-2">Nach IQ</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>PQ</strong></td>
            <td className="border border-gray-600 px-4 py-2">Performance Qualification</td>
            <td className="border border-gray-600 px-4 py-2">Liefert es reproduzierbar Ergebnisse?</td>
            <td className="border border-gray-600 px-4 py-2">Nach OQ</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Hinweis zur Praxis</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          In der Praxis wird DQ oft in den Beschaffungsprozess integriert (Lieferantenauswahl, Lastenprüfung). IQ, OQ und PQ sind die "klassischen" Qualifizierungsphasen.
        </p>
      </div>

      {/* Section 3: DQ - Design Qualification */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>DQ – Design Qualification</h2>

      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">Design Qualification (DQ) - Definition</div>
        <p className="text-gray-200 m-0">
          Die <strong>Design Qualification (DQ)</strong> ist der dokumentierte Nachweis, dass das Design einer Anlage oder eines Systems die Benutzeranforderungen (URS) erfüllt und für den vorgesehenen Zweck geeignet ist.
        </p>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Wann wird DQ durchgeführt?</h3>

      <ul style={{ color: '#000000' }}>
        <li>Vor der Beschaffung</li>
        <li>Bei Eigenentwicklung: Während der Designphase</li>
        <li>Bei Standardanlagen: Prüfung der Spezifikationen gegen URS</li>
      </ul>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>DQ-Inhalte</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Element</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>URS-Abgleich</strong></td>
            <td className="border border-gray-600 px-4 py-2">Erfüllt das Design alle Benutzeranforderungen?</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Normenkonformität</strong></td>
            <td className="border border-gray-600 px-4 py-2">Entspricht es relevanten Standards (CE, GMP, etc.)?</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Lieferantenbewertung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Ist der Lieferant qualifiziert?</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Risikoanalyse</strong></td>
            <td className="border border-gray-600 px-4 py-2">Welche Risiken bestehen?</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>💡</span>
          <span>Praxis-Tipp</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Führen Sie DQ als formale Prüfung gegen eine Checkliste durch. Dokumentieren Sie Abweichungen und deren Akzeptanz. Das spart später Diskussionen.
        </p>
      </div>

      {/* Section 4: IQ - Installation Qualification */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>IQ – Installation Qualification</h2>

      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">Installation Qualification (IQ) - Definition</div>
        <p className="text-gray-200 m-0">
          Die <strong>Installation Qualification (IQ)</strong> ist der dokumentierte Nachweis, dass Anlagen, Systeme und Ausrüstungen korrekt gemäß Spezifikationen und Herstellerangaben installiert wurden.
        </p>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Was wird bei IQ geprüft?</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Kategorie</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Prüfpunkte</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Lieferumfang</strong></td>
            <td className="border border-gray-600 px-4 py-2">Alle Komponenten geliefert? Transportschäden?</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Dokumentation</strong></td>
            <td className="border border-gray-600 px-4 py-2">Bedienungsanleitung, Zertifikate, Schaltpläne vorhanden?</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Installation</strong></td>
            <td className="border border-gray-600 px-4 py-2">Mechanisch korrekt aufgestellt? Ausgerichtet?</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Versorgung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Strom, Wasser, Druckluft angeschlossen? Spezifikationsgerecht?</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Umgebung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Temperatur, Feuchtigkeit, Sauberkeit im Toleranzbereich?</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Software</strong></td>
            <td className="border border-gray-600 px-4 py-2">Richtige Version installiert? Konfiguration dokumentiert?</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Sicherheit</strong></td>
            <td className="border border-gray-600 px-4 py-2">Not-Aus funktioniert? Schutzvorrichtungen montiert?</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>IQ-Dokumentation</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Dokument</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Inhalt</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>IQ-Protokoll</strong></td>
            <td className="border border-gray-600 px-4 py-2">Alle Prüfpunkte, Ergebnisse, Abweichungen</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Anlagenstammblatt</strong></td>
            <td className="border border-gray-600 px-4 py-2">Seriennummer, Standort, Verantwortlicher</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Kalibrierzertifikate</strong></td>
            <td className="border border-gray-600 px-4 py-2">Für Messgeräte und Sensoren</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Zeichnungen</strong></td>
            <td className="border border-gray-600 px-4 py-2">As-Built-Zeichnungen (wie tatsächlich installiert)</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>⚠️</span>
          <span>Wichtig</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          IQ ist nicht einfach "Abhaken, dass alles da ist". Prüfen Sie tatsächlich: Stimmt die Spannung? Ist der Druckluftanschluss korrekt dimensioniert? Fehler hier rächen sich später.
        </p>
      </div>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>💡</span>
          <span>Praxis-Tipp</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Fotografieren Sie die Installation! Bilder von Anschlüssen, Typenschildern und der Gesamtaufstellung sind wertvolle Dokumentation und erleichtern spätere Fehlersuche.
        </p>
      </div>

      {/* Section 5: OQ - Operational Qualification */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>OQ – Operational Qualification</h2>

      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">Operational Qualification (OQ) - Definition</div>
        <p className="text-gray-200 m-0">
          Die <strong>Operational Qualification (OQ)</strong> ist der dokumentierte Nachweis, dass installierte Anlagen innerhalb der spezifizierten Betriebsgrenzen wie vorgesehen funktionieren.
        </p>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Was wird bei OQ geprüft?</h3>

      <p style={{ color: '#000000' }}>
        <strong>Kernprinzip:</strong> Testen an den Grenzen des Betriebsbereichs (Worst Case)
      </p>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Kategorie</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Prüfpunkte</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Funktionen</strong></td>
            <td className="border border-gray-600 px-4 py-2">Alle Funktionen einzeln testen</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Alarme</strong></td>
            <td className="border border-gray-600 px-4 py-2">Lösen Alarme korrekt aus?</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Grenzwerte</strong></td>
            <td className="border border-gray-600 px-4 py-2">Verhalten bei Min/Max-Werten</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Wiederholbarkeit</strong></td>
            <td className="border border-gray-600 px-4 py-2">Mehrfache Durchläufe identisch?</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Verriegelungen</strong></td>
            <td className="border border-gray-600 px-4 py-2">Sicherheitslogik funktioniert?</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Kalibrierung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Messgeräte kalibriert und rückführbar?</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Bedieneroberfläche</strong></td>
            <td className="border border-gray-600 px-4 py-2">Alle Eingaben/Ausgaben korrekt?</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>OQ ohne Produkt</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          OQ wird idealerweise ohne Produkt durchgeführt (z.B. mit Wasser statt Wirkstoff, mit Dummy-Material). So können Sie die Anlage testen, ohne Produkt zu riskieren.
        </p>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Beispiel: OQ eines Autoklaven</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Prüfung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Akzeptanzkriterium</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Temperatur</strong></td>
            <td className="border border-gray-600 px-4 py-2">Erreicht Solltemperatur von 121°C</td>
            <td className="border border-gray-600 px-4 py-2">±1°C</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Haltezeit</strong></td>
            <td className="border border-gray-600 px-4 py-2">Hält 15 min bei 121°C</td>
            <td className="border border-gray-600 px-4 py-2">≥15 min</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Temperaturverteilung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Mapping mit 12 Sensoren</td>
            <td className="border border-gray-600 px-4 py-2">Max. Differenz &lt;2°C</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Druckaufbau</strong></td>
            <td className="border border-gray-600 px-4 py-2">Erreicht 2,1 bar</td>
            <td className="border border-gray-600 px-4 py-2">±0,1 bar</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Alarm Übertemperatur</strong></td>
            <td className="border border-gray-600 px-4 py-2">Löst bei 125°C aus</td>
            <td className="border border-gray-600 px-4 py-2">125°C ±1°C</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Not-Aus</strong></td>
            <td className="border border-gray-600 px-4 py-2">Unterbricht Heizung sofort</td>
            <td className="border border-gray-600 px-4 py-2">&lt;2 Sekunden</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>💡</span>
          <span>Praxis-Tipp</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Testen Sie auch Fehlerzustände! Was passiert bei Stromausfall? Bei Druckverlust? Bei Sensordefekt? Diese Worst-Case-Szenarien zeigen, ob die Anlage sicher ist.
        </p>
      </div>

      {/* Section 6: PQ - Performance Qualification */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>PQ – Performance Qualification</h2>

      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">Performance Qualification (PQ) - Definition</div>
        <p className="text-gray-200 m-0">
          Die <strong>Performance Qualification (PQ)</strong> ist der dokumentierte Nachweis, dass eine Anlage unter realen Produktionsbedingungen mit Produkt zuverlässig und reproduzierbar die spezifizierten Ergebnisse liefert.
        </p>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Unterschied OQ vs. PQ</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Aspekt</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">OQ</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">PQ</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Fokus</strong></td>
            <td className="border border-gray-600 px-4 py-2">Anlage</td>
            <td className="border border-gray-600 px-4 py-2">Prozess auf der Anlage</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Material</strong></td>
            <td className="border border-gray-600 px-4 py-2">Ohne Produkt (Dummies)</td>
            <td className="border border-gray-600 px-4 py-2">Mit realem Produkt</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Bedingungen</strong></td>
            <td className="border border-gray-600 px-4 py-2">Spezifikationsgrenzen</td>
            <td className="border border-gray-600 px-4 py-2">Produktionsbedingungen</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Ziel</strong></td>
            <td className="border border-gray-600 px-4 py-2">"Funktioniert die Maschine?"</td>
            <td className="border border-gray-600 px-4 py-2">"Liefert sie gute Produkte?"</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>PQ-Durchführung</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Element</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Chargenanzahl</strong></td>
            <td className="border border-gray-600 px-4 py-2">Mindestens 3 aufeinanderfolgende Chargen</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Personal</strong></td>
            <td className="border border-gray-600 px-4 py-2">Geschultes Produktionspersonal (nicht Qualifizierungsteam)</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Parameter</strong></td>
            <td className="border border-gray-600 px-4 py-2">Produktionsparameter (nicht Extremwerte)</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Prüfung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Vollständige Produktprüfung nach Spezifikation</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Dokumentation</strong></td>
            <td className="border border-gray-600 px-4 py-2">Chargendokumentation wie in Routine</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Beispiel: PQ einer Abfüllanlage</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Prüfung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Akzeptanzkriterium</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Füllmenge</strong></td>
            <td className="border border-gray-600 px-4 py-2">100 Flaschen pro Charge, 3 Chargen</td>
            <td className="border border-gray-600 px-4 py-2">100 ml ±2%</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Dichtheit</strong></td>
            <td className="border border-gray-600 px-4 py-2">Vakuumtest</td>
            <td className="border border-gray-600 px-4 py-2">Keine Undichtigkeit</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Optische Prüfung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Partikel, Verfärbung</td>
            <td className="border border-gray-600 px-4 py-2">Keine sichtbaren Defekte</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Prozessfähigkeit</strong></td>
            <td className="border border-gray-600 px-4 py-2">Cpk-Berechnung</td>
            <td className="border border-gray-600 px-4 py-2">Cpk ≥1,33</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>⚠️</span>
          <span>Wichtig</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          PQ ist keine einmalige Sache! Bei signifikanten Änderungen (neues Produkt, Umbau, neue Parameter) muss requalifiziert werden.
        </p>
      </div>

      {/* Section 7: Dokumentation */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Dokumentation</h2>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Qualifizierungsdokumente</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Dokument</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Inhalt</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Wann erstellt?</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Validierungsmasterplan (VMP)</strong></td>
            <td className="border border-gray-600 px-4 py-2">Gesamtstrategie, Verantwortlichkeiten, Zeitplan</td>
            <td className="border border-gray-600 px-4 py-2">Zu Projektbeginn</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>URS</strong></td>
            <td className="border border-gray-600 px-4 py-2">Benutzeranforderungen</td>
            <td className="border border-gray-600 px-4 py-2">Vor DQ</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Qualifizierungsplan</strong></td>
            <td className="border border-gray-600 px-4 py-2">Prüfpunkte, Akzeptanzkriterien, Methoden</td>
            <td className="border border-gray-600 px-4 py-2">Vor jeder Phase</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Qualifizierungsprotokoll</strong></td>
            <td className="border border-gray-600 px-4 py-2">Durchführung, Ergebnisse, Abweichungen</td>
            <td className="border border-gray-600 px-4 py-2">Während/Nach Durchführung</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Qualifizierungsbericht</strong></td>
            <td className="border border-gray-600 px-4 py-2">Zusammenfassung, Bewertung, Freigabe</td>
            <td className="border border-gray-600 px-4 py-2">Nach Abschluss</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Änderungshistorie</strong></td>
            <td className="border border-gray-600 px-4 py-2">Alle Änderungen nach Erstqualifizierung</td>
            <td className="border border-gray-600 px-4 py-2">Laufend</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Struktur eines Qualifizierungsprotokolls</h3>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>Inhalte Qualifizierungsprotokoll</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ Zweck und Geltungsbereich</li>
          <li>□ Verantwortlichkeiten</li>
          <li>□ Beschreibung des Prüfobjekts</li>
          <li>□ Voraussetzungen (z.B. IQ abgeschlossen)</li>
          <li>□ Prüfpunkte mit Akzeptanzkriterien</li>
          <li>□ Durchführungsanweisungen</li>
          <li>□ Ergebnisdokumentation (Tabellen)</li>
          <li>□ Abweichungsbehandlung</li>
          <li>□ Unterschriften (Durchführung, Prüfung, Freigabe)</li>
          <li>□ Anhänge (Rohdaten, Zertifikate, Fotos)</li>
        </ul>
      </div>

      {/* Section 8: Risikobasierter Ansatz */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Risikobasierter Ansatz</h2>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Moderne Qualifizierung</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Moderne Qualifizierung ist risikobasiert. Nicht alles muss mit gleicher Intensität geprüft werden. Der Aufwand richtet sich nach dem Risiko.
        </p>
      </div>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Risikobasierte Priorisierung</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Risiko</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Prüftiefe</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beispiel</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Hoch</strong></td>
            <td className="border border-gray-600 px-4 py-2">Umfangreich, mehrfach</td>
            <td className="border border-gray-600 px-4 py-2">Sterilisator für Implantate</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Mittel</strong></td>
            <td className="border border-gray-600 px-4 py-2">Standard</td>
            <td className="border border-gray-600 px-4 py-2">Verpackungsmaschine</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Niedrig</strong></td>
            <td className="border border-gray-600 px-4 py-2">Reduziert</td>
            <td className="border border-gray-600 px-4 py-2">Büromöbel im Reinraum</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Critical Process Parameters (CPP) und Critical Quality Attributes (CQA)</h3>

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
            <td className="border border-gray-600 px-4 py-2"><strong>CPP</strong></td>
            <td className="border border-gray-600 px-4 py-2">Prozessparameter mit direktem Einfluss auf Produktqualität</td>
            <td className="border border-gray-600 px-4 py-2">Temperatur beim Sterilisieren</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>CQA</strong></td>
            <td className="border border-gray-600 px-4 py-2">Qualitätsmerkmal des Produkts</td>
            <td className="border border-gray-600 px-4 py-2">Sterilität</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>💡</span>
          <span>Praxis-Tipp</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Konzentrieren Sie den Qualifizierungsaufwand auf die CPPs! Ein Temperaturregler, der die Sterilisation steuert, braucht mehr Aufmerksamkeit als der Lüfter im Schaltschrank.
        </p>
      </div>

      {/* Section 9: Requalifizierung */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Requalifizierung</h2>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Wann ist Requalifizierung erforderlich?</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Auslöser</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Umfang</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Umzug der Anlage</strong></td>
            <td className="border border-gray-600 px-4 py-2">Komplett (IQ/OQ/PQ)</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Hardware-Änderung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Abhängig vom Umfang</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Software-Update</strong></td>
            <td className="border border-gray-600 px-4 py-2">Mindestens OQ der betroffenen Funktionen</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Neues Produkt</strong></td>
            <td className="border border-gray-600 px-4 py-2">PQ</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Abweichungen im Betrieb</strong></td>
            <td className="border border-gray-600 px-4 py-2">Gezielt für betroffenen Bereich</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Periodisch</strong></td>
            <td className="border border-gray-600 px-4 py-2">Risikobasiert festlegen (z.B. jährlich kritische Parameter)</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Periodische Requalifizierung</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Periodische Requalifizierung ist nicht immer vorgeschrieben, aber gute Praxis. Typisch: Jährliche Überprüfung kritischer Parameter oder nach einer definierten Anzahl Chargen.
        </p>
      </div>

      {/* Section 10: Branchen-Spezifika */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Branchen-Spezifika</h2>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Pharma (GMP)</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Anforderung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Quelle</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Qualifizierung aller kritischen Anlagen</td>
            <td className="border border-gray-600 px-4 py-2">EU GMP Annex 15</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Dokumentierte Änderungskontrolle</td>
            <td className="border border-gray-600 px-4 py-2">EU GMP Annex 15</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Periodische Requalifizierung</td>
            <td className="border border-gray-600 px-4 py-2">EU GMP Annex 15</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Prozessvalidierung nach PQ</td>
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
            <td className="border border-gray-600 px-4 py-2">Validierung von Produktions- und Dienstleistungsprozessen</td>
            <td className="border border-gray-600 px-4 py-2">ISO 13485:2016, 7.5.6</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Spezielle Prozesse validieren</td>
            <td className="border border-gray-600 px-4 py-2">ISO 13485:2016, 7.5.6</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Software-Validierung</td>
            <td className="border border-gray-600 px-4 py-2">ISO 13485:2016, 7.5.6, 7.6</td>
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
            <td className="border border-gray-600 px-4 py-2">Produktionsprozess-Qualifizierung</td>
            <td className="border border-gray-600 px-4 py-2">IATF 16949, 8.3.4.4</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Run@Rate</td>
            <td className="border border-gray-600 px-4 py-2">IATF 16949, 8.3.4.4</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">PPAP (Production Part Approval Process)</td>
            <td className="border border-gray-600 px-4 py-2">AIAG</td>
          </tr>
        </tbody>
      </table>

      {/* Section 11: Typische Fehler */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Typische Fehler</h2>

      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>⚠️</span>
          <span>Diese Fehler führen zu Beanstandungen bei Audits</span>
        </div>
        <div style={{ color: '#000000' }}>
          <p className="font-medium mt-4 mb-1">Fehler 1: IQ ohne echte Prüfung</p>
          <p className="m-0 mb-3">"Wir haben alles abgehakt, aber nicht wirklich geprüft."<br />→ IQ ist kein Papiertiger. Prüfen Sie physisch!</p>

          <p className="font-medium mb-1">Fehler 2: OQ nur im Normalbereich</p>
          <p className="m-0 mb-3">"Wir haben nur im Arbeitsbereich getestet, nicht an den Grenzen."<br />→ OQ muss Extremwerte testen (Worst Case).</p>

          <p className="font-medium mb-1">Fehler 3: PQ mit "perfekten" Bedingungen</p>
          <p className="m-0 mb-3">"Bei PQ war das erfahrenste Team dabei."<br />→ PQ muss reale Produktionsbedingungen abbilden.</p>

          <p className="font-medium mb-1">Fehler 4: Keine Rückverfolgbarkeit</p>
          <p className="m-0 mb-3">"Wir wissen nicht mehr, welche Messgeräte wir verwendet haben."<br />→ Alle Prüfmittel dokumentieren, Kalibrierung nachweisen.</p>

          <p className="font-medium mb-1">Fehler 5: Änderungen ohne Requalifizierung</p>
          <p className="m-0">"Das war nur eine kleine Änderung."<br />→ Jede Änderung bewerten. Im Zweifel: Requalifizieren.</p>
        </div>
      </div>

      {/* Section 12: Praxisbeispiel Reinraum */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Praxisbeispiel: Qualifizierung eines Reinraums</h2>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Schritt 1: DQ</h3>

      <ul style={{ color: '#000000' }}>
        <li>Planung entspricht ISO 14644 Klasse 7?</li>
        <li>HVAC-Auslegung für Partikellast ausreichend?</li>
        <li>Materialien reinraumtauglich?</li>
      </ul>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Schritt 2: IQ</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Prüfpunkt</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Ergebnis</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">HEPA-Filter installiert</td>
            <td className="border border-gray-600 px-4 py-2">✓ Typ H14, Zertifikat vorhanden</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Luftwechselrate</td>
            <td className="border border-gray-600 px-4 py-2">✓ 25-fach/Stunde gemessen</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Druckkaskade</td>
            <td className="border border-gray-600 px-4 py-2">✓ +15 Pa zum Flur</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Oberflächen</td>
            <td className="border border-gray-600 px-4 py-2">✓ Glatt, abwischbar, keine Risse</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Schritt 3: OQ</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Prüfpunkt</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Methode</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Ergebnis</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Partikelzählung (at rest)</td>
            <td className="border border-gray-600 px-4 py-2">ISO 14644-3</td>
            <td className="border border-gray-600 px-4 py-2">Klasse 7 erreicht</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Luftgeschwindigkeit</td>
            <td className="border border-gray-600 px-4 py-2">Anemometer</td>
            <td className="border border-gray-600 px-4 py-2">0,3-0,5 m/s ✓</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Filterintegrität</td>
            <td className="border border-gray-600 px-4 py-2">DOP-Test</td>
            <td className="border border-gray-600 px-4 py-2">Alle Filter dicht</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Temperatur</td>
            <td className="border border-gray-600 px-4 py-2">Mapping 24h</td>
            <td className="border border-gray-600 px-4 py-2">20-22°C ±1°C ✓</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Feuchte</td>
            <td className="border border-gray-600 px-4 py-2">Mapping 24h</td>
            <td className="border border-gray-600 px-4 py-2">45-55% rF ✓</td>
          </tr>
        </tbody>
      </table>

      <h3 className="mt-8" style={{ color: '#1e293b' }}>Schritt 4: PQ</h3>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Prüfpunkt</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Methode</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Ergebnis</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Partikelzählung (in operation)</td>
            <td className="border border-gray-600 px-4 py-2">ISO 14644-3</td>
            <td className="border border-gray-600 px-4 py-2">Klasse 7 erreicht</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">Mikrobiologie</td>
            <td className="border border-gray-600 px-4 py-2">Sedimentationsplatten</td>
            <td className="border border-gray-600 px-4 py-2">&lt;1 KBE/Platte ✓</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">Recovery-Test</td>
            <td className="border border-gray-600 px-4 py-2">Partikelabklingzeit</td>
            <td className="border border-gray-600 px-4 py-2">&lt;20 min ✓</td>
          </tr>
        </tbody>
      </table>

      {/* Section 13: Zusammenfassung */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Zusammenfassung</h2>

      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">IQ/OQ/PQ auf einen Blick</div>
        <div className="text-gray-200">
          <p className="mb-2">✓ <strong>DQ:</strong> Ist das Design geeignet? (Vor Beschaffung)</p>
          <p className="mb-2">✓ <strong>IQ:</strong> Ist alles richtig installiert? (Physische Prüfung!)</p>
          <p className="mb-2">✓ <strong>OQ:</strong> Funktioniert es an den Grenzen? (Worst Case)</p>
          <p className="mb-2">✓ <strong>PQ:</strong> Liefert es reproduzierbar gute Produkte? (Mit Produkt)</p>
          <p className="mb-2">✓ <strong>Risikobasiert:</strong> Aufwand nach Kritikalität</p>
          <p className="mb-2">✓ <strong>Dokumentation:</strong> Plan → Protokoll → Bericht</p>
          <p className="m-0">✓ <strong>Requalifizierung:</strong> Bei Änderungen und periodisch</p>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-qcore-navy bg-opacity-30 border border-gray-600 rounded-lg p-6 my-8">
        <h3 className="mt-0 mb-3" style={{ color: '#1e293b' }}>Qualifizierung steht an und Sie brauchen Unterstützung?</h3>
        <p className="mb-4" style={{ color: '#000000' }}>
          Ich helfe Ihnen bei:
        </p>
        <ul className="mb-4" style={{ color: '#000000' }}>
          <li>Qualifizierungsplanung (VMP, Protokolle)</li>
          <li>IQ/OQ/PQ Durchführung und Dokumentation</li>
          <li>Risikobasierte Qualifizierungsstrategie</li>
          <li>Requalifizierung nach Änderungen</li>
          <li>Auditvorbereitung für GMP/ISO-Inspektionen</li>
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

export default IQOQPQArticle;
