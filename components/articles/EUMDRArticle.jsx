const EUMDRArticle = () => {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Definition Box */}
      <div className="bg-slate-700/80 rounded-lg p-4 mb-6 border-l-4 border-qcore-blue">
        <div className="text-qcore-blue text-sm font-medium mb-2">EU-MDR - Definition</div>
        <p className="text-gray-200 m-0">
          Die <strong>EU-MDR (Medical Device Regulation 2017/745)</strong> ist die aktuelle europäische Verordnung für Medizinprodukte, die am 26. Mai 2021 in Kraft getreten ist und die alte Richtlinie 93/42/EWG (MDD) abgelöst hat. Sie harmonisiert die Anforderungen an Sicherheit und Leistung von Medizinprodukten EU-weit und stellt höhere Anforderungen an klinische Bewertung, technische Dokumentation und Post-Market Surveillance.
        </p>
      </div>

      {/* Intro */}
      <p style={{ color: '#000000' }}>
        Die EU-MDR hat die Spielregeln für Medizinprodukte-Hersteller grundlegend verändert. Was früher mit der MDD noch möglich war, reicht heute nicht mehr aus. Ob Start-up oder etablierter Player – wer Produkte in der EU auf den Markt bringen will, muss die MDR-Anforderungen erfüllen. Dieser Artikel zeigt Ihnen, was die MDR konkret bedeutet, welche Fristen gelten und worauf Sie achten müssen.
      </p>

      {/* Section 1: Was ist die EU-MDR? */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Was ist die EU-MDR?</h2>

      <p style={{ color: '#000000' }}>
        Die Medical Device Regulation (MDR) ist eine EU-Verordnung, die direkt in allen Mitgliedsstaaten gilt – ohne nationale Umsetzung. Sie ersetzt die alte Medical Device Directive (MDD) und die Active Implantable Medical Device Directive (AIMDD) durch ein einheitliches, strengeres Regelwerk.
      </p>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>MDR vs. MDD – Die wichtigsten Unterschiede</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li><strong>Klinische Bewertung:</strong> Deutlich umfangreichere Nachweise erforderlich, auch für Bestandsprodukte</li>
          <li><strong>Technische Dokumentation:</strong> Mehr Details, mehr Tiefe, mehr Nachweise (Anhang II/III)</li>
          <li><strong>Post-Market Surveillance:</strong> Systematische Überwachung nach Inverkehrbringen ist Pflicht</li>
          <li><strong>Person Responsible for Regulatory Compliance (PRRC):</strong> Neue verpflichtende Rolle im Unternehmen</li>
          <li><strong>Benannte Stellen:</strong> Strengere Kontrollen, mehr unangemeldete Audits</li>
          <li><strong>UDI-System:</strong> Eindeutige Produktkennzeichnung und Registrierung in EUDAMED</li>
        </ul>
      </div>

      {/* Section 2: Zeitplan und Übergangsfristen */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Zeitplan und Übergangsfristen</h2>

      <p style={{ color: '#000000' }}>
        Die MDR wurde 2017 veröffentlicht, trat aber erst am 26. Mai 2021 in Kraft. Für Bestandsprodukte gab es Übergangsfristen – die sind mittlerweile ausgelaufen.
      </p>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Datum</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Ereignis</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Bedeutung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">25.05.2017</td>
            <td className="border border-gray-600 px-4 py-2">Veröffentlichung MDR</td>
            <td className="border border-gray-600 px-4 py-2">Verordnung im EU-Amtsblatt publiziert</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">26.05.2021</td>
            <td className="border border-gray-600 px-4 py-2">MDR tritt in Kraft</td>
            <td className="border border-gray-600 px-4 py-2">Neue Produkte müssen MDR-konform sein</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2">26.05.2024</td>
            <td className="border border-gray-600 px-4 py-2">Ende Übergangsfrist (normal)</td>
            <td className="border border-gray-600 px-4 py-2">MDD-Zertifikate verlieren Gültigkeit</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2">31.12.2027</td>
            <td className="border border-gray-600 px-4 py-2">Ende Sell-off-Phase</td>
            <td className="border border-gray-600 px-4 py-2">Keine MDD-Produkte mehr in Verkehr bringen</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>⚠️</span>
          <span>Achtung: Keine Sell-off-Garantie</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Auch wenn theoretisch eine Sell-off-Phase bis Ende 2027 existiert, können Benannte Stellen verlangen, dass Bestandsprodukte früher auf MDR umgestellt werden. Verlassen Sie sich nicht auf die Übergangsfristen – starten Sie die MDR-Transition so früh wie möglich.
        </p>
      </div>

      {/* Section 3: Klassifizierung nach MDR */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Klassifizierung nach MDR</h2>

      <p style={{ color: '#000000' }}>
        Die MDR verwendet dasselbe Klassifizierungssystem wie die MDD (Klasse I, IIa, IIb, III), hat aber die Regeln teilweise verschärft. Manche Produkte, die früher Klasse IIa waren, sind jetzt IIb – mit entsprechend höheren Anforderungen.
      </p>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Klasse</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Risiko</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beispiele</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Benannte Stelle nötig?</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Klasse I</strong></td>
            <td className="border border-gray-600 px-4 py-2">Geringes Risiko</td>
            <td className="border border-gray-600 px-4 py-2">Nicht-invasive Produkte (Rollstuhl, Stethoskop, Verbandsmaterial)</td>
            <td className="border border-gray-600 px-4 py-2">Nein (außer steril/Messfunktion)</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Klasse IIa</strong></td>
            <td className="border border-gray-600 px-4 py-2">Mittleres Risiko</td>
            <td className="border border-gray-600 px-4 py-2">Kurzfristig invasive Produkte (Kontaktlinsen, Hörgeräte, Dentalfüllungen)</td>
            <td className="border border-gray-600 px-4 py-2">Ja</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Klasse IIb</strong></td>
            <td className="border border-gray-600 px-4 py-2">Erhöhtes Risiko</td>
            <td className="border border-gray-600 px-4 py-2">Langfristig invasive Produkte (Röntgengeräte, Beatmungsgeräte, Kondome)</td>
            <td className="border border-gray-600 px-4 py-2">Ja</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Klasse III</strong></td>
            <td className="border border-gray-600 px-4 py-2">Höchstes Risiko</td>
            <td className="border border-gray-600 px-4 py-2">Implantierbare Produkte (Herzschrittmacher, Hüftimplantate, Stents)</td>
            <td className="border border-gray-600 px-4 py-2">Ja</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>💡</span>
          <span>Praxis-Tipp: Klassifizierung prüfen</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Auch wenn Ihr Produkt unter der MDD bereits klassifiziert war, prüfen Sie die Einstufung erneut unter MDR-Regeln (Anhang VIII). Einige Produkte wurden hochgestuft – z. B. Software mit therapeutischem Zweck oder Produkte mit Nanomaterialien.
        </p>
      </div>

      {/* Section 4: Akteure und Rollen */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Akteure und Rollen</h2>

      <p style={{ color: '#000000' }}>
        Die MDR definiert klare Rollen und Verantwortlichkeiten. Besonders wichtig ist die neue Rolle der Person Responsible for Regulatory Compliance (PRRC).
      </p>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Akteur</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Rolle</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Hauptverantwortung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Hersteller</strong></td>
            <td className="border border-gray-600 px-4 py-2">Entwickelt und produziert das Medizinprodukt</td>
            <td className="border border-gray-600 px-4 py-2">Konformität, Technische Dokumentation, PMS, Vigilanz</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>PRRC</strong></td>
            <td className="border border-gray-600 px-4 py-2">Person Responsible for Regulatory Compliance</td>
            <td className="border border-gray-600 px-4 py-2">Überwacht regulatorische Konformität, Ansprechpartner für Behörden</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Bevollmächtigter</strong></td>
            <td className="border border-gray-600 px-4 py-2">Authorized Representative (AR)</td>
            <td className="border border-gray-600 px-4 py-2">Vertritt Nicht-EU-Hersteller gegenüber Behörden</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Benannte Stelle</strong></td>
            <td className="border border-gray-600 px-4 py-2">Notified Body (NB)</td>
            <td className="border border-gray-600 px-4 py-2">Konformitätsbewertung, Zertifizierung, Audits</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Importeur</strong></td>
            <td className="border border-gray-600 px-4 py-2">Bringt Nicht-EU-Produkte in EU in Verkehr</td>
            <td className="border border-gray-600 px-4 py-2">Prüft Konformität, registriert sich in EUDAMED</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Händler</strong></td>
            <td className="border border-gray-600 px-4 py-2">Distributor</td>
            <td className="border border-gray-600 px-4 py-2">Stellt sicher, dass Produkte konform sind, bevor sie weitergegeben werden</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>PRRC-Anforderungen</span>
        </div>
        <p className="mb-2" style={{ color: '#000000' }}>Die PRRC muss folgende Qualifikationen haben:</p>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ Mindestens 1 Jahr Erfahrung in regulatorischen Angelegenheiten oder QM-Systemen für Medizinprodukte</li>
          <li>□ Fachkenntnisse in den relevanten EU-Vorschriften (MDR, IVDR)</li>
          <li>□ Ständig im Unternehmen verfügbar (nicht nur extern beauftragt)</li>
          <li>□ Qualifikationen müssen dokumentiert und nachweisbar sein</li>
        </ul>
      </div>

      {/* Section 5: Technische Dokumentation */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Technische Dokumentation (Anhang II und III)</h2>

      <p style={{ color: '#000000' }}>
        Die technische Dokumentation ist das Herzstück der MDR-Konformität. Anhang II beschreibt, was für alle Produkte erforderlich ist. Anhang III ergänzt spezifische Anforderungen für Klasse III und implantierbare Produkte.
      </p>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>Anhang II – Mindestinhalte</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ <strong>Produktbeschreibung:</strong> Zweckbestimmung, Varianten, Zubehör, Software-Versionen</li>
          <li>□ <strong>Design und Entwicklung:</strong> Entwicklungsplan, Verifizierung, Validierung, Designänderungen</li>
          <li>□ <strong>Risikomanagement:</strong> Risikoanalyse gemäß ISO 14971, regelmäßige Updates</li>
          <li>□ <strong>Produktverifizierung und -validierung:</strong> Testberichte, klinische Daten</li>
          <li>□ <strong>Normen und Vorschriften:</strong> Liste angewandter harmonisierter Normen (z. B. ISO 13485, IEC 60601)</li>
          <li>□ <strong>Klinische Bewertung:</strong> Clinical Evaluation Report (CER), Clinical Evaluation Plan (CEP)</li>
          <li>□ <strong>Labeling und Gebrauchsanweisung:</strong> Etiketten, IFU, Symbole (ISO 15223-1)</li>
          <li>□ <strong>Post-Market Surveillance:</strong> PMS-Plan, PSUR, Vorkommnismeldungen</li>
        </ul>
      </div>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>💡</span>
          <span>Praxis-Tipp: Dokumentation früh starten</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Technische Dokumentation ist kein Projekt für die letzten Wochen vor dem Audit. Beginnen Sie parallel zur Produktentwicklung und pflegen Sie die Dokumentation kontinuierlich. So vermeiden Sie Last-Minute-Stress und können bei Audits souverän reagieren.
        </p>
      </div>

      {/* Section 6: Klinische Bewertung */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Klinische Bewertung</h2>

      <p style={{ color: '#000000' }}>
        Die klinische Bewertung ist unter der MDR deutlich strenger als unter der MDD. Selbst für Bestandsprodukte müssen Hersteller nachweisen, dass Sicherheit und Leistung auf aktuellen klinischen Daten basieren.
      </p>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Dokument</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Zweck</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Häufigkeit</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Clinical Evaluation Plan (CEP)</strong></td>
            <td className="border border-gray-600 px-4 py-2">Plant Methodik und Umfang der klinischen Bewertung</td>
            <td className="border border-gray-600 px-4 py-2">Initial, bei wesentlichen Änderungen</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Clinical Evaluation Report (CER)</strong></td>
            <td className="border border-gray-600 px-4 py-2">Dokumentiert klinische Daten, Literaturrecherche, Äquivalenz</td>
            <td className="border border-gray-600 px-4 py-2">Initial, jährlich aktualisieren (Klasse III/IIb), alle 2-5 Jahre (IIa/I)</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Post-Market Clinical Follow-up (PMCF)</strong></td>
            <td className="border border-gray-600 px-4 py-2">Überwacht klinische Performance nach Markteinführung</td>
            <td className="border border-gray-600 px-4 py-2">Kontinuierlich</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>ℹ️</span>
          <span>Äquivalenznachweis nach MEDDEV 2.7/1 Rev. 4</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Wenn Sie sich auf klinische Daten eines ähnlichen Produkts (Äquivalenzprodukt) stützen, müssen Sie nachweisen, dass Ihr Produkt technisch und klinisch äquivalent ist. Die Anforderungen sind streng: gleiche Materialien, gleiche technische Spezifikationen, gleiche Zweckbestimmung. Ein einfacher Verweis auf "ähnliche" Produkte reicht nicht.
        </p>
      </div>

      {/* Section 7: Risikomanagement */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Risikomanagement nach ISO 14971</h2>

      <p style={{ color: '#000000' }}>
        Risikomanagement ist ein zentraler Bestandteil der MDR. Die harmonisierte Norm ISO 14971:2019 beschreibt den Prozess, aber die MDR verlangt zusätzlich, dass das Benefit-Risk-Verhältnis positiv ist.
      </p>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>Risikomanagement-Prozess</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ <strong>Risikoanalyse:</strong> Identifikation von Gefährdungen (mechanisch, elektrisch, thermisch, biologisch, Software, Gebrauch)</li>
          <li>□ <strong>Risikobewertung:</strong> Bewertung von Schweregrad und Wahrscheinlichkeit</li>
          <li>□ <strong>Risikobeherrschung:</strong> Maßnahmen zur Risikominderung (inhärent sicher, Schutzmaßnahmen, Warnhinweise)</li>
          <li>□ <strong>Risiko-Nutzen-Analyse:</strong> Nachweis, dass Nutzen die Restrisiken überwiegt</li>
          <li>□ <strong>Produktionsrisiken:</strong> Berücksichtigung von Risiken aus der Fertigung</li>
          <li>□ <strong>Post-Market-Risiken:</strong> Überwachung und Aktualisierung basierend auf PMS-Daten</li>
        </ul>
      </div>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>💡</span>
          <span>Praxis-Tipp: Risikomanagement-Akte pflegen</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Die Risikomanagement-Akte (Risk Management File) muss über den gesamten Produktlebenszyklus gepflegt werden. Neue Erkenntnisse aus PMCF, Vorkommnissen oder Design-Änderungen müssen in die Risikoanalyse einfließen und dokumentiert werden.
        </p>
      </div>

      {/* Section 8: Konformitätsbewertung */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Konformitätsbewertungsverfahren</h2>

      <p style={{ color: '#000000' }}>
        Je nach Klasse Ihres Produkts gibt es unterschiedliche Konformitätsbewertungsverfahren. Anhang IX bis XI der MDR beschreiben die verschiedenen Verfahren.
      </p>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Klasse</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Verfahren</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Klasse I</strong></td>
            <td className="border border-gray-600 px-4 py-2">Selbstzertifizierung (Anhang IV)</td>
            <td className="border border-gray-600 px-4 py-2">Hersteller erstellt EU-Konformitätserklärung selbst (außer steril/Messfunktion)</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Klasse IIa</strong></td>
            <td className="border border-gray-600 px-4 py-2">Anhang IX (QM-System + Produktprüfung)</td>
            <td className="border border-gray-600 px-4 py-2">Benannte Stelle prüft QM-System und technische Dokumentation</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Klasse IIb</strong></td>
            <td className="border border-gray-600 px-4 py-2">Anhang IX oder X</td>
            <td className="border border-gray-600 px-4 py-2">QM-System-Prüfung + Produktprüfung (stichprobenartig oder Baumusterprüfung)</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Klasse III</strong></td>
            <td className="border border-gray-600 px-4 py-2">Anhang IX + Produktprüfung (Anhang X oder XI)</td>
            <td className="border border-gray-600 px-4 py-2">Vollständige QM-System-Prüfung + umfassende Produktprüfung</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>⚠️</span>
          <span>Achtung: Benannte Stellen überlastet</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Viele Benannte Stellen haben lange Wartezeiten (6–18 Monate). Stellen Sie den Kontakt frühzeitig her und planen Sie ausreichend Vorlaufzeit ein. Ohne Zertifikat dürfen Sie Ihr Produkt nicht in Verkehr bringen (außer Klasse I).
        </p>
      </div>

      {/* Section 9: UDI-System */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Unique Device Identification (UDI)</h2>

      <p style={{ color: '#000000' }}>
        Das UDI-System sorgt für eindeutige Identifikation und Rückverfolgbarkeit von Medizinprodukten. Jedes Produkt erhält einen UDI-Code, der auf dem Label und in der EUDAMED-Datenbank gespeichert wird.
      </p>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Komponente</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beispiel</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>UDI-DI</strong></td>
            <td className="border border-gray-600 px-4 py-2">Device Identifier (produktspezifisch, Version unabhängig)</td>
            <td className="border border-gray-600 px-4 py-2">04012345678901</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>UDI-PI</strong></td>
            <td className="border border-gray-600 px-4 py-2">Production Identifier (Chargen-/Seriennummer, Verfallsdatum)</td>
            <td className="border border-gray-600 px-4 py-2">LOT12345, SN67890</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>UDI-Träger</strong></td>
            <td className="border border-gray-600 px-4 py-2">Barcode, RFID, Datamatrix auf dem Label</td>
            <td className="border border-gray-600 px-4 py-2">GS1-128, HIBC-Code</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>UDI-Implementierung Schritte</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ Wählen Sie eine UDI-Issuing-Organisation (GS1, HIBCC, ICCBBA, IFA)</li>
          <li>□ Erstellen Sie UDI-DI für jede Produktvariante</li>
          <li>□ Registrieren Sie UDI-DI in EUDAMED</li>
          <li>□ Fügen Sie UDI-Träger (Barcode) auf Produktlabel hinzu</li>
          <li>□ Dokumentieren Sie UDI in der Technischen Dokumentation</li>
          <li>□ Aktualisieren Sie UDI bei Design-Änderungen, die die Identität betreffen</li>
        </ul>
      </div>

      {/* Section 10: Post-Market Surveillance (PMS) */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Post-Market Surveillance (PMS)</h2>

      <p style={{ color: '#000000' }}>
        Post-Market Surveillance ist unter der MDR verpflichtend. Sie müssen systematisch Daten über die Performance und Sicherheit Ihres Produkts sammeln – während der gesamten Lebensdauer.
      </p>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Dokument</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Zweck</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Häufigkeit</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>PMS-Plan</strong></td>
            <td className="border border-gray-600 px-4 py-2">Definiert Methoden und Datenquellen für PMS</td>
            <td className="border border-gray-600 px-4 py-2">Initial, bei Änderungen aktualisieren</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>PSUR</strong></td>
            <td className="border border-gray-600 px-4 py-2">Periodic Safety Update Report (zusammenfassender Sicherheitsbericht)</td>
            <td className="border border-gray-600 px-4 py-2">Jährlich (Klasse III/IIb), alle 2 Jahre (IIa)</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Trend-Report</strong></td>
            <td className="border border-gray-600 px-4 py-2">Analyse von Vorkommnissen und Trends</td>
            <td className="border border-gray-600 px-4 py-2">Kontinuierlich</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>💡</span>
          <span>Praxis-Tipp: PMS-Datenquellen definieren</span>
        </div>
        <p className="mb-2" style={{ color: '#000000' }}>Typische PMS-Datenquellen:</p>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>Kundenbeschwerden und Feedback</li>
          <li>Vorkommnismeldungen (MDR Art. 87)</li>
          <li>Literaturrecherche und wissenschaftliche Publikationen</li>
          <li>Marktdaten und Wettbewerber-Recalls</li>
          <li>PMCF-Studien (Post-Market Clinical Follow-up)</li>
          <li>Feldüberwachung und Anwendungsbeobachtung</li>
        </ul>
      </div>

      {/* Section 11: Vigilanz und Meldepflichten */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Vigilanz und Meldepflichten</h2>

      <p style={{ color: '#000000' }}>
        Hersteller müssen schwerwiegende Vorkommnisse und Sicherheitskorrekturmaßnahmen (FSCAs) an die zuständigen Behörden melden. Die MDR definiert klare Fristen.
      </p>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Ereignis</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Meldepflicht</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Frist</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Tod oder schwere Gesundheitsschädigung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Meldung an zuständige Behörde (EUDAMED)</td>
            <td className="border border-gray-600 px-4 py-2">Sofort (innerhalb 2 Tage nach Kenntnis)</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Schwerwiegendes Vorkommnis</strong></td>
            <td className="border border-gray-600 px-4 py-2">Meldung an zuständige Behörde</td>
            <td className="border border-gray-600 px-4 py-2">Innerhalb 10 Tage nach Kenntnis</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Field Safety Corrective Action (FSCA)</strong></td>
            <td className="border border-gray-600 px-4 py-2">FSCA-Benachrichtigung an Behörden und Kunden</td>
            <td className="border border-gray-600 px-4 py-2">Unmittelbar bei Einleitung der Maßnahme</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Trend-Meldung</strong></td>
            <td className="border border-gray-600 px-4 py-2">Meldung bei statistisch signifikanten Trends</td>
            <td className="border border-gray-600 px-4 py-2">Sofort bei Erkennung</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>⚠️</span>
          <span>Achtung: Fristen einhalten</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Verspätete Meldungen können zu Sanktionen führen. Etablieren Sie einen klaren Prozess zur Bewertung von Vorkommnissen und zur Meldung an Behörden. Dokumentieren Sie alle Entscheidungen – auch wenn Sie sich gegen eine Meldung entscheiden.
        </p>
      </div>

      {/* Section 12: EUDAMED */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>EUDAMED – European Database on Medical Devices</h2>

      <p style={{ color: '#000000' }}>
        EUDAMED ist die zentrale europäische Datenbank für Medizinprodukte. Hersteller, Importeure, Bevollmächtigte und Benannte Stellen müssen sich registrieren und Produktdaten hochladen.
      </p>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>EUDAMED-Module</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ <strong>Actor Registration:</strong> Registrierung von Herstellern, Bevollmächtigten, Importeuren</li>
          <li>□ <strong>UDI Database:</strong> Registrierung von UDI-DI und Produktinformationen</li>
          <li>□ <strong>Notified Bodies and Certificates:</strong> Zertifikate und Audits</li>
          <li>□ <strong>Clinical Investigations:</strong> Registrierung klinischer Prüfungen</li>
          <li>□ <strong>Vigilance:</strong> Meldung von Vorkommnissen und FSCAs</li>
          <li>□ <strong>Market Surveillance:</strong> Marktüberwachung durch Behörden</li>
        </ul>
      </div>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>💡</span>
          <span>Praxis-Tipp: EUDAMED-Registrierung vorbereiten</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          EUDAMED wird schrittweise eingeführt. Registrieren Sie sich frühzeitig als Akteur und bereiten Sie Produktdaten vor (UDI, technische Daten, Klassifizierung). Der Aufbau der Datenbank kann zeitaufwendig sein – planen Sie mehrere Wochen ein.
        </p>
      </div>

      {/* Section 13: Herausforderungen der MDR-Umsetzung */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Herausforderungen der MDR-Umsetzung</h2>

      <p style={{ color: '#000000' }}>
        Die MDR-Transition ist komplex. Viele Hersteller kämpfen mit den gestiegenen Anforderungen. Hier sind die häufigsten Herausforderungen:
      </p>

      <table className="w-full my-6 border-collapse border border-gray-600">
        <thead>
          <tr className="bg-slate-700/80">
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Herausforderung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Beschreibung</th>
            <th className="border border-gray-600 px-4 py-2 text-left text-gray-200">Lösungsansatz</th>
          </tr>
        </thead>
        <tbody style={{ color: '#000000' }}>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Klinische Daten</strong></td>
            <td className="border border-gray-600 px-4 py-2">CER erfordert umfangreiche klinische Nachweise</td>
            <td className="border border-gray-600 px-4 py-2">PMCF-Studien starten, Literaturrecherche vertiefen, Äquivalenznachweise prüfen</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>Benannte Stellen</strong></td>
            <td className="border border-gray-600 px-4 py-2">Überlastung, lange Wartezeiten</td>
            <td className="border border-gray-600 px-4 py-2">Frühzeitig Kontakt aufnehmen, Gap-Analysen durchführen</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>Ressourcen</strong></td>
            <td className="border border-gray-600 px-4 py-2">Höherer Dokumentationsaufwand</td>
            <td className="border border-gray-600 px-4 py-2">QM-Team aufstocken, externe Berater einbinden</td>
          </tr>
          <tr className="bg-slate-600/20">
            <td className="border border-gray-600 px-4 py-2"><strong>EUDAMED</strong></td>
            <td className="border border-gray-600 px-4 py-2">Komplexe Registrierung, technische Probleme</td>
            <td className="border border-gray-600 px-4 py-2">Schulungen nutzen, schrittweise Einführung, Support kontaktieren</td>
          </tr>
          <tr className="bg-slate-600/30">
            <td className="border border-gray-600 px-4 py-2"><strong>PMS/Vigilanz</strong></td>
            <td className="border border-gray-600 px-4 py-2">Kontinuierliche Überwachung und Meldung</td>
            <td className="border border-gray-600 px-4 py-2">PMS-Software nutzen, Prozesse automatisieren, klare Verantwortlichkeiten</td>
          </tr>
        </tbody>
      </table>

      <div className="bg-orange-900 bg-opacity-30 border-l-4 border-orange-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>⚠️</span>
          <span>Achtung: Produktrücknahmen</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Einige Hersteller haben Produkte vom Markt genommen, weil sie die MDR-Anforderungen nicht erfüllen konnten. Bewerten Sie frühzeitig, ob Ihr Produkt-Portfolio MDR-konform ist. Falls nicht: Entscheiden Sie, ob Sie die Investition in die MDR-Transition leisten können oder das Produkt zurückziehen.
        </p>
      </div>

      {/* Section 14: MDR-Readiness Checklist */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>MDR-Readiness Checklist</h2>

      <p style={{ color: '#000000' }}>
        Nutzen Sie diese Checkliste, um Ihren MDR-Readiness-Status zu bewerten. Je mehr Punkte Sie abhaken können, desto besser sind Sie aufgestellt.
      </p>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>Organisation & Rollen</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ PRRC ernannt und qualifiziert?</li>
          <li>□ QM-System nach ISO 13485:2016 zertifiziert?</li>
          <li>□ Verantwortlichkeiten für PMS und Vigilanz definiert?</li>
          <li>□ Bevollmächtigter (AR) ernannt (falls Nicht-EU-Hersteller)?</li>
        </ul>
      </div>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>Technische Dokumentation</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ Technische Dokumentation gemäß Anhang II/III vollständig?</li>
          <li>□ Clinical Evaluation Report (CER) erstellt und aktuell?</li>
          <li>□ Risikomanagement-Akte nach ISO 14971:2019 vorhanden?</li>
          <li>□ PMS-Plan definiert und dokumentiert?</li>
          <li>□ PMCF-Plan erstellt (falls erforderlich)?</li>
        </ul>
      </div>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>Konformität & Zertifizierung</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ Produktklassifizierung nach MDR geprüft?</li>
          <li>□ Benannte Stelle kontaktiert und Vertrag geschlossen?</li>
          <li>□ Konformitätsbewertungsverfahren gestartet?</li>
          <li>□ EU-Konformitätserklärung erstellt?</li>
          <li>□ CE-Kennzeichnung korrekt angebracht?</li>
        </ul>
      </div>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>UDI & EUDAMED</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ UDI-DI erstellt und registriert?</li>
          <li>□ UDI-Träger (Barcode) auf Produktlabel?</li>
          <li>□ In EUDAMED als Akteur registriert?</li>
          <li>□ Produktdaten in EUDAMED hochgeladen?</li>
        </ul>
      </div>

      <div className="bg-qcore-navy bg-opacity-20 border-l-4 border-green-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>✅</span>
          <span>Post-Market & Vigilanz</span>
        </div>
        <ul className="m-0 space-y-1" style={{ color: '#000000' }}>
          <li>□ PMS-Daten werden systematisch gesammelt?</li>
          <li>□ PSUR (Periodic Safety Update Report) erstellt?</li>
          <li>□ Vigilanz-Prozess etabliert (Vorkommnismeldungen)?</li>
          <li>□ Trend-Reporting implementiert?</li>
        </ul>
      </div>

      {/* Section 15: Fazit */}
      <h2 className="mt-12" style={{ color: '#1e293b' }}>Fazit: MDR ist ein Marathon, kein Sprint</h2>

      <p style={{ color: '#000000' }}>
        Die MDR stellt höhere Anforderungen an Medizinprodukte-Hersteller – von der technischen Dokumentation über klinische Bewertung bis hin zu Post-Market Surveillance. Die Umstellung erfordert Ressourcen, Zeit und Know-how. Aber: Die MDR ist nicht optional. Wer Produkte in der EU verkaufen will, muss MDR-konform sein.
      </p>

      <p style={{ color: '#000000' }}>
        Starten Sie früh, priorisieren Sie kritische Punkte (CER, PMS, EUDAMED) und holen Sie sich Unterstützung – intern oder extern. Mit der richtigen Vorbereitung meistern Sie die MDR-Transition erfolgreich.
      </p>

      <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 font-medium mb-2" style={{ color: '#1e293b' }}>
          <span>💡</span>
          <span>Praxis-Tipp: Externe Expertise nutzen</span>
        </div>
        <p className="m-0" style={{ color: '#000000' }}>
          Die MDR-Transition ist komplex. Wenn Sie unsicher sind, holen Sie sich Unterstützung von erfahrenen Regulatory-Affairs-Beratern, CER-Autoren oder QM-Experten. Eine professionelle Begleitung spart langfristig Zeit, Geld und Nerven.
        </p>
      </div>

      {/* CTA */}
      <div className="bg-qcore-navy bg-opacity-30 border border-gray-600 rounded-lg p-6 my-8">
        <h3 className="mt-0 mb-3" style={{ color: '#1e293b' }}>MDR-Transition professionell begleiten lassen?</h3>
        <p className="mb-4" style={{ color: '#000000' }}>
          QCore Consulting unterstützt Sie bei der MDR-Umsetzung: Gap-Analysen, CER-Erstellung, PMS-Implementierung, technische Dokumentation und Audit-Vorbereitung.
        </p>
        <a
          href="/kontakt"
          className="inline-block bg-qcore-blue text-white px-6 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Jetzt Erstgespräch vereinbaren
        </a>
      </div>
    </article>
  );
};

export default EUMDRArticle;
