import React from 'react';
import { 
  DefinitionBox, 
  TipBox, 
  InfoBox, 
  WarningBox,
  Table, 
  Section, 
  Paragraph,
  CTABox 
} from '../qm-wissen/ArticleComponents';

export default function BegriffeArticle() {
  return (
    <article>
      <Paragraph>
        Qualitätsmanagement hat seine eigene Sprache. Dieses Glossar erklärt die wichtigsten 
        Begriffe – von A wie Audit bis W wie Wirksamkeit.
      </Paragraph>

      <InfoBox>
        Die Definitionen orientieren sich an der ISO 9000:2015, der offiziellen Norm 
        für QM-Grundlagen und Begriffe.
      </InfoBox>

      {/* Schnellnavigation */}
      <div className="bg-slate-100 rounded-lg p-4 mb-8">
        <div className="text-sm font-medium text-gray-600 mb-2">📑 Schnellnavigation</div>
        <div className="flex flex-wrap gap-2">
          {['A', 'C', 'D', 'F', 'K', 'N', 'P', 'Q', 'R', 'V', 'W'].map((letter) => (
            <a
              key={letter}
              href={`#${letter.toLowerCase()}`}
              className="px-3 py-1 bg-white border border-gray-300 rounded hover:border-blue-500 hover:text-blue-600 transition-colors text-sm font-medium"
            >
              {letter}
            </a>
          ))}
        </div>
      </div>

      <Section number={1} title="A" id="a">
        <DefinitionBox title="Abweichung">
          Nichterfüllung einer Anforderung. Eine Abweichung liegt vor, wenn ein Produkt, 
          Prozess oder System nicht den festgelegten Spezifikationen entspricht.
        </DefinitionBox>

        <Paragraph>
          Abweichungen müssen dokumentiert, bewertet und bearbeitet werden. Je nach Schweregrad 
          erfolgt eine Risikoabschätzung und ggf. eine CAPA-Maßnahme.
        </Paragraph>

        <DefinitionBox title="Anforderung">
          Erfordernis oder Erwartung, das oder die festgelegt, üblicherweise vorausgesetzt 
          oder verpflichtend ist.
        </DefinitionBox>

        <Paragraph>
          <strong>Arten von Anforderungen:</strong>
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>Kundenanforderungen (explizit oder implizit)</li>
          <li>Gesetzliche und behördliche Anforderungen</li>
          <li>Organisationsinterne Anforderungen</li>
          <li>Normenanforderungen (z.B. ISO 9001)</li>
        </ul>

        <DefinitionBox title="Audit">
          Systematischer, unabhängiger und dokumentierter Prozess zur Erlangung von 
          Nachweisen und deren objektiver Auswertung, um zu bestimmen, inwieweit 
          Auditkriterien erfüllt sind.
        </DefinitionBox>

        <Paragraph>
          <strong>Audit-Typen:</strong>
        </Paragraph>

        <Table 
          headers={['Typ', 'Beschreibung', 'Durchgeführt von']}
          rows={[
            ['1st Party (Internes Audit)', 'Organisation prüft sich selbst', 'Eigene Mitarbeiter/interne Auditoren'],
            ['2nd Party (Lieferantenaudit)', 'Kunde prüft Lieferanten', 'Kunde oder in seinem Auftrag'],
            ['3rd Party (Zertifizierungsaudit)', 'Unabhängige Prüfung für Zertifikat', 'Akkreditierte Zertifizierungsstelle'],
          ]}
        />

        <TipBox>
          Interne Audits sind kein "Polizei-Einsatz", sondern Lernchancen. Ein guter Auditor 
          sucht nicht nach Schuldigen, sondern nach Verbesserungspotenzial.
        </TipBox>
      </Section>

      <Section number={2} title="C" id="c">
        <DefinitionBox title="CAPA (Corrective and Preventive Action)">
          Systematischer Prozess zur Beseitigung der Ursachen von festgestellten (korrigierend) 
          oder potenziellen (vorbeugend) Fehlern oder unerwünschten Situationen.
        </DefinitionBox>

        <Table 
          headers={['Art', 'Zeitpunkt', 'Ziel', 'Beispiel']}
          rows={[
            ['Corrective Action (Korrekturmaßnahme)', 'Nach aufgetretenem Problem', 'Ursache beseitigen', 'Reklamation analysieren, Prozess anpassen'],
            ['Preventive Action (Vorbeugemaßnahme)', 'Vor potenziellem Problem', 'Problem verhindern', 'Risikoanalyse, präventive Wartung'],
          ]}
        />

        <Paragraph>
          <strong>Typischer CAPA-Prozess:</strong>
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>Problem identifizieren und beschreiben</li>
          <li>Root Cause Analysis (z.B. 5-Why, Ishikawa)</li>
          <li>Maßnahmen definieren und umsetzen</li>
          <li>Wirksamkeit überprüfen (Effectiveness Check)</li>
          <li>Dokumentieren und ggf. standardisieren</li>
        </ul>

        <WarningBox>
          Häufigster Fehler: Die Symptome werden bekämpft, nicht die Ursache. Ein echter CAPA 
          erfordert eine gründliche Root-Cause-Analyse.
        </WarningBox>
      </Section>

      <Section number={3} title="D" id="d">
        <DefinitionBox title="Dokumentierte Information">
          Information, die von einer Organisation gelenkt und aufrechterhalten werden muss, 
          sowie das Medium, auf dem sie enthalten ist.
        </DefinitionBox>

        <Paragraph>
          ISO 9001:2015 verwendet bewusst den technologie-neutralen Begriff "dokumentierte Information" 
          statt "Dokument" und "Aufzeichnung". Das kann sein:
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>Papier-Dokumente</li>
          <li>Elektronische Dateien (PDF, Word, Excel)</li>
          <li>Datenbanken und Software-Systeme</li>
          <li>Fotos, Videos, Audio-Aufzeichnungen</li>
        </ul>

        <TipBox>
          Weniger ist mehr: Dokumentieren Sie nur, was wirklich Mehrwert bringt. Jedes Dokument 
          muss gepflegt, versioniert und bei Audits vorgelegt werden.
        </TipBox>
      </Section>

      <Section number={4} title="F" id="f">
        <DefinitionBox title="FMEA (Failure Mode and Effects Analysis)">
          Systematische Methode zur Identifizierung potenzieller Fehler, deren Ursachen und 
          Auswirkungen sowie zur Bewertung und Priorisierung von Risiken.
        </DefinitionBox>

        <Paragraph>
          Die FMEA ist ein präventives Werkzeug, das in der Produktentwicklung und Prozessplanung 
          eingesetzt wird. Sie bewertet Risiken anhand von:
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li><strong>Auftretenswahrscheinlichkeit (A)</strong> – Wie oft tritt der Fehler auf?</li>
          <li><strong>Bedeutung/Schweregrad (B)</strong> – Wie schwerwiegend ist die Auswirkung?</li>
          <li><strong>Entdeckungswahrscheinlichkeit (E)</strong> – Wie gut wird der Fehler erkannt?</li>
        </ul>

        <Paragraph>
          Die Risikoprioritätszahl (RPZ = A × B × E) bestimmt, welche Fehler prioritär behandelt werden müssen.
        </Paragraph>

        <DefinitionBox title="Freigabe">
          Erlaubnis, zur nächsten Phase eines Prozesses überzugehen oder ein Produkt/eine 
          Dienstleistung an den Kunden auszuliefern.
        </DefinitionBox>

        <Paragraph>
          Freigaben sind kritische Kontrollpunkte im QMS. Sie müssen klar definiert sein: 
          Wer darf was wann freigeben? Typische Freigaben: Materialfreigabe, Produktfreigabe, 
          Freigabe zur Auslieferung.
        </Paragraph>
      </Section>

      <Section number={5} title="K" id="k">
        <DefinitionBox title="Kalibrierung">
          Tätigkeit, die unter festgelegten Bedingungen in einem ersten Schritt eine Beziehung 
          zwischen den durch Normale bereitgestellten Werten und den entsprechenden Anzeigen 
          mit ihren Messunsicherheiten herstellt.
        </DefinitionBox>

        <Paragraph>
          Einfach gesagt: Kalibrierung stellt sicher, dass Messmittel richtig messen. 
          Wichtig in regulierten Branchen – falsche Messungen = falsche Produkte.
        </Paragraph>

        <Paragraph>
          <strong>Typischer Kalibrierprozess:</strong>
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>Messmittel identifizieren und kennzeichnen</li>
          <li>Kalibrierintervalle festlegen</li>
          <li>Durch akkreditiertes Labor kalibrieren lassen</li>
          <li>Kalibrierschein dokumentieren und ablegen</li>
          <li>Bei Abweichung: Rückverfolgbarkeit prüfen</li>
        </ul>

        <DefinitionBox title="Kontext der Organisation">
          Kombination aus internen und externen Themen, die einen Einfluss auf den Ansatz 
          einer Organisation zur Erreichung ihrer Ziele haben können.
        </DefinitionBox>

        <Paragraph>
          ISO 9001:2015 fordert explizit, dass Organisationen ihren Kontext verstehen. Das bedeutet:
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>Externe Faktoren: Markt, Regulierung, Wettbewerb, Technologie</li>
          <li>Interne Faktoren: Ressourcen, Kultur, Wissen, Prozesse</li>
          <li>Interessierte Parteien: Kunden, Lieferanten, Behörden, Mitarbeiter</li>
        </ul>

        <DefinitionBox title="KVP (Kontinuierlicher Verbesserungsprozess)">
          Wiederkehrende Tätigkeit zur Verbesserung der Leistung. Auch bekannt als 
          "Kaizen" oder "Continuous Improvement".
        </DefinitionBox>

        <Paragraph>
          KVP ist kein einmaliges Projekt, sondern eine dauerhafte Haltung. Kleine, stetige 
          Verbesserungen führen langfristig zu großen Erfolgen – meist wirksamer als 
          disruptive Großprojekte.
        </Paragraph>
      </Section>

      <Section number={6} title="N" id="n">
        <DefinitionBox title="Nichtkonformität">
          Nichterfüllung einer Anforderung. Synonym zu "Abweichung", aber der ISO-konforme 
          Begriff in Normtexten.
        </DefinitionBox>

        <Paragraph>
          <strong>Arten von Nichtkonformitäten:</strong>
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li><strong>Produkt-NK:</strong> Produkt erfüllt Spezifikation nicht</li>
          <li><strong>Prozess-NK:</strong> Prozess läuft nicht wie dokumentiert</li>
          <li><strong>System-NK:</strong> QMS-Anforderung nicht erfüllt</li>
        </ul>

        <Paragraph>
          Jede Nichtkonformität muss bewertet werden: Kann das Produkt verwendet werden? 
          Muss nachgearbeitet werden? Ist eine CAPA erforderlich?
        </Paragraph>

        <WarningBox>
          In regulierten Branchen (Pharma, MedTech) sind Nichtkonformitäten meldepflichtig 
          und werden bei Audits besonders genau geprüft.
        </WarningBox>
      </Section>

      <Section number={7} title="P" id="p">
        <DefinitionBox title="PDCA-Zyklus">
          Systematischer Vier-Phasen-Zyklus zur kontinuierlichen Verbesserung: 
          Plan – Do – Check – Act. Siehe separaten Artikel "Der PDCA-Zyklus" für Details.
        </DefinitionBox>

        <DefinitionBox title="Prozess">
          Satz zusammenhängender oder sich gegenseitig beeinflussender Tätigkeiten, 
          der Eingaben zum Erzielen eines vorgesehenen Ergebnisses verwendet.
        </DefinitionBox>

        <Paragraph>
          <strong>Prozessarten im QMS:</strong>
        </Paragraph>

        <Table 
          headers={['Art', 'Beschreibung', 'Beispiele']}
          rows={[
            ['Führungsprozesse', 'Strategische Steuerung', 'Managementreview, Zielsetzung, Risikomanagement'],
            ['Kernprozesse', 'Wertschöpfende Tätigkeiten', 'Entwicklung, Produktion, Vertrieb, Service'],
            ['Unterstützungsprozesse', 'Ermöglichen die Kernprozesse', 'IT, HR, QM, Einkauf, Wartung'],
          ]}
        />

        <Paragraph>
          Ein prozessorientierter Ansatz bedeutet: Tätigkeiten nicht isoliert betrachten, 
          sondern als Teil eines Ablaufs mit Input, Output und Schnittstellen.
        </Paragraph>
      </Section>

      <Section number={8} title="Q" id="q">
        <DefinitionBox title="Qualität">
          Grad, in dem ein Satz inhärenter Merkmale eines Objekts Anforderungen erfüllt.
        </DefinitionBox>

        <Paragraph>
          Qualität ist nicht absolut, sondern relativ zu den Anforderungen. Ein Porsche ist nicht 
          "qualitativ besser" als ein VW – beide erfüllen unterschiedliche Anforderungen.
        </Paragraph>

        <DefinitionBox title="QMS (Qualitätsmanagementsystem)">
          System bezüglich Qualität zum Festlegen von Politik, Zielen sowie Prozessen, 
          um diese Ziele zu erreichen.
        </DefinitionBox>

        <Paragraph>
          Ein QMS besteht aus:
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>Organisationsstruktur (Rollen, Verantwortlichkeiten)</li>
          <li>Prozessen und Verfahren</li>
          <li>Dokumentierter Information</li>
          <li>Ressourcen (Personal, Infrastruktur, Wissen)</li>
        </ul>

        <DefinitionBox title="QMB (Qualitätsmanagementbeauftragter)">
          Person mit der Verantwortung und Befugnis sicherzustellen, dass das QMS 
          aufrechterhalten und verbessert wird.
        </DefinitionBox>

        <Paragraph>
          Die ISO 9001:2015 fordert keinen expliziten QMB mehr – aber die Rolle existiert 
          in den meisten Unternehmen weiter, da jemand die QM-Aktivitäten koordinieren muss.
        </Paragraph>
      </Section>

      <Section number={9} title="R" id="r">
        <DefinitionBox title="Risiko">
          Auswirkung von Ungewissheit auf ein erwartetes Ergebnis.
        </DefinitionBox>

        <Paragraph>
          Wichtig: Risiko ist nicht nur negativ. Es gibt Chancen (positive Risiken) und 
          Gefahren (negative Risiken). Beide müssen im QMS betrachtet werden.
        </Paragraph>

        <DefinitionBox title="Risikobasiertes Denken">
          Berücksichtigung von Risiken bei Planung, Durchführung und Bewertung von Prozessen 
          und Tätigkeiten.
        </DefinitionBox>

        <Paragraph>
          ISO 9001:2015 fordert risikobasiertes Denken durchgängig – nicht nur in einem 
          separaten "Risikomanagement-Kapitel". Jeder Prozess soll mit Blick auf Risiken 
          gestaltet werden.
        </Paragraph>

        <TipBox>
          Risikobasiertes Denken bedeutet nicht, dass jedes Risiko formal dokumentiert werden muss. 
          Für einfache Prozesse reicht manchmal gesunder Menschenverstand.
        </TipBox>

        <DefinitionBox title="Rückverfolgbarkeit (Traceability)">
          Fähigkeit, den Werdegang, die Verwendung oder den Ort eines Objekts zu verfolgen.
        </DefinitionBox>

        <Paragraph>
          In regulierten Branchen essentiell: Bei Problemen muss nachvollziehbar sein, 
          welche Produkte betroffen sind, welche Materialien verwendet wurden, wer wann was gemacht hat.
        </Paragraph>

        <Paragraph>
          <strong>Typische Rückverfolgbarkeit umfasst:</strong>
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>Materialnummern und Chargen</li>
          <li>Produktionsaufträge und Zeitstempel</li>
          <li>Verwendete Messmittel und Prüfprotokolle</li>
          <li>Personalzuordnung (wer hat produziert/geprüft)</li>
        </ul>
      </Section>

      <Section number={10} title="V" id="v">
        <DefinitionBox title="Validierung">
          Bestätigung durch Bereitstellung eines objektiven Nachweises, dass die Anforderungen 
          für einen spezifischen beabsichtigten Gebrauch oder eine spezifische beabsichtigte 
          Anwendung erfüllt worden sind.
        </DefinitionBox>

        <DefinitionBox title="Verifizierung">
          Bestätigung durch Bereitstellung eines objektiven Nachweises, dass festgelegte 
          Anforderungen erfüllt worden sind.
        </DefinitionBox>

        <Paragraph>
          Der Unterschied ist subtil, aber wichtig:
        </Paragraph>

        <Table 
          headers={['', 'Verifizierung', 'Validierung']}
          rows={[
            ['Frage', '"Bauen wir das Produkt richtig?"', '"Bauen wir das richtige Produkt?"'],
            ['Fokus', 'Erfüllung der Spezifikationen', 'Erfüllung des Kundenbedürfnisses'],
            ['Zeitpunkt', 'Nach jedem Entwicklungsschritt', 'Am Ende, im Einsatzumfeld'],
            ['Beispiel', 'Prüfung: Produkt hält 100°C aus (laut Spezifikation)', 'Test: Kunde kann Produkt wie beabsichtigt nutzen'],
          ]}
        />

        <TipBox>
          Merkhilfe: Verifizierung = "Prüfung gegen Spezifikation". Validierung = "Beweis, 
          dass es funktioniert, was es soll".
        </TipBox>
      </Section>

      <Section number={11} title="W" id="w">
        <DefinitionBox title="Wirksamkeit (Effectiveness)">
          Ausmaß, in dem geplante Tätigkeiten verwirklicht und geplante Ergebnisse erreicht werden.
        </DefinitionBox>

        <DefinitionBox title="Effizienz (Efficiency)">
          Verhältnis zwischen dem erreichten Ergebnis und den eingesetzten Ressourcen.
        </DefinitionBox>

        <Table 
          headers={['', 'Wirksamkeit', 'Effizienz']}
          rows={[
            ['Frage', '"Erreichen wir unser Ziel?"', '"Erreichen wir unser Ziel mit minimalem Aufwand?"'],
            ['Fokus', 'Zielerreichung', 'Ressourceneinsatz'],
            ['Beispiel', 'Reklamationsquote von 2% auf 0,5% gesenkt', 'Reklamationsquote gesenkt UND weniger Prüfaufwand'],
            ['Priorität', 'Zuerst wirkam sein...', '...dann effizienter werden'],
          ]}
        />

        <Paragraph>
          Ein QMS soll sowohl wirksam (erreicht Qualitätsziele) als auch effizient 
          (mit vertretbarem Aufwand) sein.
        </Paragraph>

        <WarningBox>
          Häufiger Fehler: Zu früh auf Effizienz optimieren. Erst muss ein Prozess wirksam sein – 
          dann kann man ihn effizienter gestalten.
        </WarningBox>
      </Section>

      <Section number={12} title="Die 10 wichtigsten QM-Begriffe auf einen Blick">
        <Paragraph>
          Diese Tabelle fasst die Schlüsselbegriffe zusammen, die in jedem QMS-Kontext 
          verwendet werden:
        </Paragraph>

        <Table 
          headers={['Begriff', 'Kurz erklärt', 'Warum wichtig?']}
          rows={[
            ['Qualität', 'Erfüllung von Anforderungen', 'Zentraler Begriff – definiert, worum es geht'],
            ['Prozess', 'Input → Tätigkeiten → Output', 'QMS ist prozessorientiert'],
            ['Anforderung', 'Was erfüllt werden muss', 'Basis für alle QM-Aktivitäten'],
            ['Audit', 'Systematische Prüfung', 'Wichtigstes Überwachungsinstrument'],
            ['Nichtkonformität', 'Anforderung nicht erfüllt', 'Auslöser für Korrekturmaßnahmen'],
            ['CAPA', 'Korrektur-/Vorbeugemaßnahme', 'Kernprozess der Verbesserung'],
            ['Risiko', 'Auswirkung von Ungewissheit', 'Basis für risikobasiertes Denken'],
            ['Verifizierung', 'Prüfung gegen Spezifikation', 'Qualitätssicherung im Prozess'],
            ['Validierung', 'Beweis der Zwecktauglichkeit', 'Sicherheit, dass es wirklich funktioniert'],
            ['PDCA', 'Plan-Do-Check-Act', 'Grundprinzip aller Verbesserung'],
          ]}
        />
      </Section>

      <Section number={13} title="Fazit">
        <Paragraph>
          Dieses Glossar bietet einen soliden Einstieg in die QM-Terminologie. Die meisten 
          dieser Begriffe sind in der ISO 9000:2015 präzise definiert – bei Unklarheiten 
          lohnt sich ein Blick in diese Norm.
        </Paragraph>

        <TipBox>
          QM-Begriffe korrekt zu verwenden ist nicht Selbstzweck: Es schafft eine gemeinsame 
          Sprache im Team, vermeidet Missverständnisse und erleichtert die Kommunikation 
          mit Auditoren und Kunden.
        </TipBox>
      </Section>

      {/* CTA */}
      <CTABox title="Fragen zu QM-Begriffen oder Konzepten?">
        <p>Als erfahrener QM-Berater unterstütze ich Sie bei:</p>
        <ul className="mt-2 space-y-1">
          <li>• Schulungen zu QM-Grundlagen und Terminologie</li>
          <li>• Aufbau eines gemeinsamen QM-Verständnisses im Team</li>
          <li>• Praxisnaher Umsetzung von QM-Konzepten</li>
        </ul>
      </CTABox>
    </article>
  );
}
