import Link from 'next/link';

const AuditVorbereitungArticle = () => {
  return (
    <article className="prose prose-lg max-w-none">

      {/* 1. Was ist ein Audit? */}
      <h2 className="text-2xl font-serif text-dark-navy mt-8 mb-4">
        1. Was ist ein Audit?
      </h2>

      {/* Definition Box */}
      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">Audit - Definition</div>
        <p className="text-gray-200 m-0">
          <strong>Audit</strong> ist ein systematischer, unabhängiger und dokumentierter Prozess
          zur Erlangung von Auditnachweisen und deren objektiver Auswertung, um zu ermitteln,
          inwieweit Auditkriterien erfüllt sind. (nach ISO 19011)
        </p>
      </div>

      <p className="text-gray-700">
        Einfacher gesagt: Ein Audit prüft, ob Sie tun, was Sie sagen – und ob das, was Sie tun,
        den Anforderungen entspricht.
      </p>

      <p className="text-gray-700">
        <strong>Die drei Grundfragen eines Auditors:</strong>
      </p>

      {/* Grundfragen Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Frage</th>
              <th className="text-left p-3 text-gray-200 font-medium">Was geprüft wird</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">"Gibt es eine Vorgabe?"</td>
              <td className="p-3 text-gray-700">Dokumentation (Prozesse, Anweisungen)</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">"Wird sie befolgt?"</td>
              <td className="p-3 text-gray-700">Umsetzung in der Praxis</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800">"Funktioniert es?"</td>
              <td className="p-3 text-gray-700">Wirksamkeit, Ergebnisse</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 2. Audit-Arten */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        2. Audit-Arten
      </h2>

      {/* Audit-Typen Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Typ</th>
              <th className="text-left p-3 text-gray-200 font-medium">Durchgeführt von</th>
              <th className="text-left p-3 text-gray-200 font-medium">Zweck</th>
              <th className="text-left p-3 text-gray-200 font-medium">Beispiel</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>1st Party</strong> (Intern)</td>
              <td className="p-3 text-gray-700">Eigene Mitarbeiter</td>
              <td className="p-3 text-gray-700">Selbstbewertung, Vorbereitung</td>
              <td className="p-3 text-gray-700">Internes Audit vor Zertifizierung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>2nd Party</strong> (Lieferant)</td>
              <td className="p-3 text-gray-700">Kunde</td>
              <td className="p-3 text-gray-700">Lieferantenqualifizierung</td>
              <td className="p-3 text-gray-700">OEM auditiert Zulieferer</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800"><strong>3rd Party</strong> (Zertifizierung)</td>
              <td className="p-3 text-gray-700">Unabhängige Stelle</td>
              <td className="p-3 text-gray-700">Zertifikat erhalten/erhalten</td>
              <td className="p-3 text-gray-700">TÜV, DEKRA, BSI</td>
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
          Interne Audits sind nicht "weniger wichtig" als externe. Sie sind Ihre Chance,
          Probleme zu finden, bevor der externe Auditor kommt.
        </p>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Audit-Anlässe
      </h3>

      {/* Audit-Anlässe Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Anlass</th>
              <th className="text-left p-3 text-gray-200 font-medium">Beschreibung</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Erstzertifizierung</strong></td>
              <td className="p-3 text-gray-700">Erstmalige Zertifizierung nach einer Norm</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Überwachungsaudit</strong></td>
              <td className="p-3 text-gray-700">Jährliche Prüfung (zwischen Rezertifizierungen)</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Rezertifizierung</strong></td>
              <td className="p-3 text-gray-700">Alle 3 Jahre, umfassender als Überwachung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Sonderaudit</strong></td>
              <td className="p-3 text-gray-700">Bei Problemen, Änderungen, Beschwerden</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Prozessaudit</strong></td>
              <td className="p-3 text-gray-700">Fokus auf einzelnen Prozess</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>Produktaudit</strong></td>
              <td className="p-3 text-gray-700">Fokus auf Produktkonformität</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 3. Vorbereitung: 4 Wochen vorher */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        3. Vorbereitung: 4 Wochen vorher
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Woche 4: Grundlagen klären
      </h3>

      {/* Checklisten Box */}
      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>Grundlagen-Check</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ Audit-Termin bestätigt?</li>
          <li>□ Audit-Scope bekannt? (Welche Bereiche, Prozesse, Standorte?)</li>
          <li>□ Auditor(en) bekannt?</li>
          <li>□ Letzter Auditbericht vorhanden?</li>
          <li>□ Offene Maßnahmen aus letztem Audit bekannt?</li>
          <li>□ Normversion aktuell? (ISO 9001:2015, ISO 13485:2016)</li>
        </ul>
      </div>

      {/* Praxis-Tipp Box */}
      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
        <div className="flex items-start">
          <span className="text-xl mr-3">💡</span>
          <div>
            <h4 className="font-semibold" style={{ color: '#1e293b' }}>Praxis-Tipp</h4>
            <p className="text-sm" style={{ color: '#000000' }}>
              Fordern Sie den Audit-Plan frühzeitig an. Gute Zertifizierer schicken ihn 2-3 Wochen
              vorher. Daraus sehen Sie: Wer wird wann zu welchem Thema befragt.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Woche 3: Dokumentation prüfen
      </h3>

      <p className="text-gray-700">
        <strong>Was muss aktuell und verfügbar sein?</strong>
      </p>

      {/* Dokumentation Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Dokument</th>
              <th className="text-left p-3 text-gray-200 font-medium">Prüfpunkte</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>QM-Handbuch</strong></td>
              <td className="p-3 text-gray-700">Aktueller Stand, Freigabe, Verteilung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Prozessbeschreibungen</strong></td>
              <td className="p-3 text-gray-700">Vollständig, aktuell, in der Praxis bekannt</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Arbeitsanweisungen</strong></td>
              <td className="p-3 text-gray-700">Am Arbeitsplatz verfügbar, lesbar, aktuell</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Aufzeichnungen</strong></td>
              <td className="p-3 text-gray-700">Vollständig, unterschrieben, auffindbar</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Organigramm</strong></td>
              <td className="p-3 text-gray-700">Aktuell, Verantwortlichkeiten klar</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Managementbewertung</strong></td>
              <td className="p-3 text-gray-700">Durchgeführt, dokumentiert</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Interne Audits</strong></td>
              <td className="p-3 text-gray-700">Geplant und durchgeführt</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>CAPA-Liste</strong></td>
              <td className="p-3 text-gray-700">Offene und geschlossene Maßnahmen</td>
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
              Der häufigste Audit-Fehler: Dokumente sind nicht aktuell oder am Arbeitsplatz nicht
              bekannt. "Das steht im Intranet" hilft nicht, wenn der Mitarbeiter es nicht findet.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Woche 2: Team vorbereiten
      </h3>

      <p className="text-gray-700">
        <strong>Wer muss vorbereitet werden?</strong>
      </p>

      {/* Team Vorbereitung Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Rolle</th>
              <th className="text-left p-3 text-gray-200 font-medium">Vorbereitung</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Geschäftsführung</strong></td>
              <td className="p-3 text-gray-700">Qualitätspolitik, Ziele, Ressourcen</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>QMB</strong></td>
              <td className="p-3 text-gray-700">Gesamtsystem, Kennzahlen, CAPA, Audits</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Prozessverantwortliche</strong></td>
              <td className="p-3 text-gray-700">Eigene Prozesse, Schnittstellen</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>Mitarbeiter</strong></td>
              <td className="p-3 text-gray-700">Eigene Aufgaben, wo stehen Dokumente</td>
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
              Machen Sie eine kurze Auffrischung mit den Mitarbeitern: "Was sind unsere Qualitätsziele?
              Wo finde ich meine Arbeitsanweisung? Was mache ich, wenn ich einen Fehler finde?" – 15 Minuten reichen.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Woche 1: Generalprobe
      </h3>

      {/* Checklisten Box */}
      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>Letzte Woche vor dem Audit</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ Internes Kurzaudit durchgeführt?</li>
          <li>□ Offene Maßnahmen: Status aktualisiert?</li>
          <li>□ Besprechungsraum reserviert?</li>
          <li>□ Beamer/Bildschirm funktioniert?</li>
          <li>□ Kaffee, Wasser, Snacks organisiert?</li>
          <li>□ Alle relevanten Dokumente griffbereit?</li>
          <li>□ Backup-Ansprechpartner benannt (falls jemand krank)?</li>
        </ul>
      </div>

      {/* 4. Am Audit-Tag */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        4. Am Audit-Tag
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Vor dem Audit
      </h3>

      {/* Vor dem Audit Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Zeit</th>
              <th className="text-left p-3 text-gray-200 font-medium">Aktivität</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>-30 Min</strong></td>
              <td className="p-3 text-gray-700">Raum prüfen, Technik testen</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>-15 Min</strong></td>
              <td className="p-3 text-gray-700">Dokumente bereitlegen</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800"><strong>-5 Min</strong></td>
              <td className="p-3 text-gray-700">Durchatmen, ruhig werden</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Während des Audits
      </h3>

      <p className="text-gray-700">
        <strong>Die goldenen Regeln:</strong>
      </p>

      {/* Goldene Regeln Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Regel</th>
              <th className="text-left p-3 text-gray-200 font-medium">Erklärung</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Zuhören</strong></td>
              <td className="p-3 text-gray-700">Frage verstehen, bevor Sie antworten</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Ehrlich sein</strong></td>
              <td className="p-3 text-gray-700">Niemals lügen oder verschleiern</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Konkret antworten</strong></td>
              <td className="p-3 text-gray-700">Nicht abschweifen, beim Thema bleiben</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Zeigen statt erzählen</strong></td>
              <td className="p-3 text-gray-700">Nachweise vorlegen, nicht nur behaupten</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Nachfragen erlaubt</strong></td>
              <td className="p-3 text-gray-700">"Können Sie die Frage präzisieren?" ist okay</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>Grenzen kennen</strong></td>
              <td className="p-3 text-gray-700">"Das müsste Kollege X beantworten" ist okay</td>
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
              Wenn Sie etwas nicht wissen: Sagen Sie es. "Das weiß ich nicht, aber ich kann es
              nachschlagen" ist besser als eine falsche Antwort. Notieren Sie es und liefern Sie nach.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Typische Audit-Fragen
      </h3>

      {/* Typische Fragen Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Kapitel</th>
              <th className="text-left p-3 text-gray-200 font-medium">Typische Fragen</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>4 Kontext</strong></td>
              <td className="p-3 text-gray-700">"Wer sind Ihre interessierten Parteien?"</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>5 Führung</strong></td>
              <td className="p-3 text-gray-700">"Wie kommuniziert die Leitung die Qualitätspolitik?"</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>6 Planung</strong></td>
              <td className="p-3 text-gray-700">"Welche Risiken haben Sie identifiziert?"</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>7 Unterstützung</strong></td>
              <td className="p-3 text-gray-700">"Wie stellen Sie Kompetenz der Mitarbeiter sicher?"</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>8 Betrieb</strong></td>
              <td className="p-3 text-gray-700">"Zeigen Sie mir den Prozess von Auftragseingang bis Lieferung"</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>9 Bewertung</strong></td>
              <td className="p-3 text-gray-700">"Welche Kennzahlen überwachen Sie?"</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800"><strong>10 Verbesserung</strong></td>
              <td className="p-3 text-gray-700">"Zeigen Sie mir Ihre CAPA-Liste"</td>
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
          Auditoren fragen oft nach der "roten Linie" – dem Weg eines Auftrags durch Ihr Unternehmen.
          Bereiten Sie ein konkretes Beispiel vor, das Sie durchspielen können.
        </p>
      </div>

      {/* 5. Typische Stolperfallen */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        5. Typische Stolperfallen
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Stolperfalle 1: Dokumentenlenkung
      </h3>

      {/* Stolperfalle 1 Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Problem</th>
              <th className="text-left p-3 text-gray-200 font-medium">Konsequenz</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Veraltete Dokumente im Umlauf</td>
              <td className="p-3 text-gray-700">Hauptabweichung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Keine Freigabe erkennbar</td>
              <td className="p-3 text-gray-700">Nebenabweichung</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800">Mitarbeiter kennt Dokument nicht</td>
              <td className="p-3 text-gray-700">Nebenabweichung</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Stolperfalle 2: Schulungsnachweise
      </h3>

      {/* Stolperfalle 2 Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Problem</th>
              <th className="text-left p-3 text-gray-200 font-medium">Konsequenz</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Keine Schulungsmatrix</td>
              <td className="p-3 text-gray-700">Nebenabweichung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Schulungen nicht dokumentiert</td>
              <td className="p-3 text-gray-700">Nebenabweichung</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800">Wirksamkeit nicht geprüft</td>
              <td className="p-3 text-gray-700">Nebenabweichung</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Stolperfalle 3: Kalibrierung
      </h3>

      {/* Stolperfalle 3 Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Problem</th>
              <th className="text-left p-3 text-gray-200 font-medium">Konsequenz</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Prüfmittel überfällig</td>
              <td className="p-3 text-gray-700">Hauptabweichung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Kein Kalibrierplan</td>
              <td className="p-3 text-gray-700">Nebenabweichung</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800">Ergebnisse nicht rückverfolgbar</td>
              <td className="p-3 text-gray-700">Hauptabweichung</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Stolperfalle 4: Managementbewertung
      </h3>

      {/* Stolperfalle 4 Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Problem</th>
              <th className="text-left p-3 text-gray-200 font-medium">Konsequenz</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Nicht durchgeführt</td>
              <td className="p-3 text-gray-700">Hauptabweichung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Nicht alle Inputs behandelt</td>
              <td className="p-3 text-gray-700">Nebenabweichung</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800">Maßnahmen nicht verfolgt</td>
              <td className="p-3 text-gray-700">Nebenabweichung</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Stolperfalle 5: Interne Audits
      </h3>

      {/* Stolperfalle 5 Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Problem</th>
              <th className="text-left p-3 text-gray-200 font-medium">Konsequenz</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Nicht alle Bereiche auditiert</td>
              <td className="p-3 text-gray-700">Nebenabweichung</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800">Auditor nicht unabhängig</td>
              <td className="p-3 text-gray-700">Nebenabweichung</td>
            </tr>
            <tr className="bg-slate-600/30">
              <td className="p-3 text-gray-800">Keine Maßnahmenverfolgung</td>
              <td className="p-3 text-gray-700">Nebenabweichung</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* 6. Umgang mit Feststellungen */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        6. Umgang mit Feststellungen
      </h2>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Arten von Feststellungen
      </h3>

      {/* Feststellungen Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">Art</th>
              <th className="text-left p-3 text-gray-200 font-medium">Definition</th>
              <th className="text-left p-3 text-gray-200 font-medium">Reaktion</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Hauptabweichung</strong> (Major)</td>
              <td className="p-3 text-gray-700">Systemversagen, Norm nicht erfüllt</td>
              <td className="p-3 text-gray-700">Sofortmaßnahme + CAPA, Frist kurz</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Nebenabweichung</strong> (Minor)</td>
              <td className="p-3 text-gray-700">Einzelfall, geringe Auswirkung</td>
              <td className="p-3 text-gray-700">CAPA, Frist länger</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-800"><strong>Beobachtung</strong></td>
              <td className="p-3 text-gray-700">Verbesserungspotenzial</td>
              <td className="p-3 text-gray-700">Empfehlung, keine Pflicht</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-800"><strong>Positive Feststellung</strong></td>
              <td className="p-3 text-gray-700">Besonders gut umgesetzt</td>
              <td className="p-3 text-gray-700">Freuen!</td>
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
              Diskutieren Sie nicht mit dem Auditor über die Einstufung. Nehmen Sie die Feststellung
              an, verstehen Sie sie, und korrigieren Sie sie. Eine konstruktive Haltung wird positiv
              wahrgenommen.
            </p>
          </div>
        </div>
      </div>

      <h3 className="text-xl font-serif text-dark-navy mt-8 mb-3">
        Nach dem Audit
      </h3>

      {/* Checklisten Box */}
      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>Nach dem Audit</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ Auditbericht erhalten und gelesen?</li>
          <li>□ Feststellungen im Team besprochen?</li>
          <li>□ Root Cause Analysis für Abweichungen?</li>
          <li>□ Maßnahmenplan erstellt?</li>
          <li>□ Fristen eingetragen?</li>
          <li>□ Verantwortliche benannt?</li>
          <li>□ Nachweispflicht klar?</li>
        </ul>
      </div>

      {/* 7. Audit-Etikette */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        7. Audit-Etikette: Do's and Don'ts
      </h2>

      {/* Do's and Don'ts Tabelle */}
      <div className="overflow-x-auto my-6">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-slate-700/80">
              <th className="text-left p-3 text-gray-200 font-medium">✅ Do</th>
              <th className="text-left p-3 text-gray-200 font-medium">❌ Don't</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-700">Pünktlich sein</td>
              <td className="p-3 text-gray-700">Zu spät kommen</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-700">Aktiv zuhören</td>
              <td className="p-3 text-gray-700">Unterbrechen</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-700">Nachweise zeigen</td>
              <td className="p-3 text-gray-700">Nur erzählen</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-700">Ehrlich antworten</td>
              <td className="p-3 text-gray-700">Ausreden erfinden</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-700">Notizen machen</td>
              <td className="p-3 text-gray-700">Alles vergessen</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-700">Nachfragen bei Unklarheit</td>
              <td className="p-3 text-gray-700">Raten</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-700">Ruhig bleiben</td>
              <td className="p-3 text-gray-700">Nervös werden</td>
            </tr>
            <tr className="bg-slate-600/20 border-b border-slate-600/50">
              <td className="p-3 text-gray-700">Fehler zugeben</td>
              <td className="p-3 text-gray-700">Vertuschen</td>
            </tr>
            <tr className="bg-slate-600/30 border-b border-slate-600/50">
              <td className="p-3 text-gray-700">Gastfreundlich sein</td>
              <td className="p-3 text-gray-700">Auditor ignorieren</td>
            </tr>
            <tr className="bg-slate-600/20">
              <td className="p-3 text-gray-700">Konstruktiv sein</td>
              <td className="p-3 text-gray-700">Defensiv reagieren</td>
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
              Niemals den Auditor anlügen! Wenn Sie bei einer Unwahrheit erwischt werden, verlieren
              Sie jede Glaubwürdigkeit. Das wiegt schwerer als jede Abweichung.
            </p>
          </div>
        </div>
      </div>

      {/* 8. Zusammenfassung */}
      <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">
        8. Zusammenfassung
      </h2>

      <div className="bg-slate-700/80 rounded-lg p-6 my-6">
        <h3 className="text-qcore-cyan text-lg font-semibold mb-3">Audit-Vorbereitung auf einen Blick</h3>
        <ul className="text-gray-200 space-y-2">
          <li>✓ <strong>4 Wochen vorher:</strong> Grundlagen, Scope, offene Maßnahmen</li>
          <li>✓ <strong>3 Wochen:</strong> Dokumentation prüfen und aktualisieren</li>
          <li>✓ <strong>2 Wochen:</strong> Team informieren und vorbereiten</li>
          <li>✓ <strong>1 Woche:</strong> Generalprobe, letzte Checks</li>
          <li>✓ <strong>Am Tag:</strong> Zuhören, ehrlich sein, Nachweise zeigen</li>
          <li>✓ <strong>Danach:</strong> Feststellungen analysieren, CAPA umsetzen</li>
          <li>✓ <strong>Immer:</strong> Ruhig bleiben, konstruktiv sein, lernen</li>
        </ul>
      </div>

      {/* CTA-Bereich */}
      <div className="bg-qcore-navy bg-opacity-30 rounded-lg p-8 mt-12 text-center border border-gray-600">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
          Audit steht bevor und Sie sind unsicher?
        </h3>
        <p className="mb-6" style={{ color: '#000000' }}>
          Mit Erfahrung in der Medizintechnik unterstütze ich Sie bei Mock-Audits zur Vorbereitung,
          Gap-Analysen gegen die Norm, Dokumentenreviews und Coaching für Führungskräfte und Mitarbeiter -
          pragmatisch und praxisnah.
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

export default AuditVorbereitungArticle;
