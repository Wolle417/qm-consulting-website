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

export default function PDCAArticle() {
  return (
    <article>
      <Section number={1} title="Was ist PDCA?">
        <DefinitionBox title="PDCA - Definition">
          Systematischer Vier-Phasen-Zyklus zur kontinuierlichen Verbesserung von Prozessen, 
          Produkten und Dienstleistungen. Auch bekannt als Deming-Kreis oder Shewhart-Zyklus.
        </DefinitionBox>

        <Paragraph>
          PDCA steht für <strong>Plan – Do – Check – Act</strong>. Es ist das Herzstück jedes 
          Qualitätsmanagementsystems und bildet die Grundlage für systematische Verbesserung.
        </Paragraph>

        <Paragraph>
          Der Zyklus wiederholt sich kontinuierlich – nach jedem Durchlauf beginnt der nächste. 
          So entsteht eine Spirale der stetigen Verbesserung.
        </Paragraph>
      </Section>

      <Section number={2} title="Die 4 Phasen im Detail">
        <Table 
          headers={['Phase', 'Bedeutung', 'Kernfragen']}
          rows={[
            ['PLAN', 'Planen', 'Was wollen wir erreichen? Wie messen wir Erfolg?'],
            ['DO', 'Umsetzen', 'Maßnahmen durchführen, Daten sammeln'],
            ['CHECK', 'Überprüfen', 'Haben wir das Ziel erreicht? Was zeigen die Daten?'],
            ['ACT', 'Handeln', 'Standardisieren oder anpassen? Nächster Zyklus?'],
          ]}
        />

        <Paragraph>
          <strong>🎯 PLAN – Die Planungsphase</strong>
        </Paragraph>
        <Paragraph>
          In der Plan-Phase wird das Problem analysiert und ein Verbesserungsziel definiert. 
          Hier entstehen konkrete Maßnahmen mit messbaren Erfolgskriterien.
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>Ist-Zustand analysieren</li>
          <li>Ursachen identifizieren (z.B. mit Ishikawa, 5-Why)</li>
          <li>Ziele und KPIs festlegen</li>
          <li>Maßnahmenplan erstellen</li>
        </ul>

        <Paragraph>
          <strong>⚡ DO – Die Umsetzungsphase</strong>
        </Paragraph>
        <Paragraph>
          Die geplanten Maßnahmen werden umgesetzt – idealerweise zunächst im kleinen Maßstab 
          (Pilotprojekt), um Risiken zu minimieren.
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>Maßnahmen durchführen</li>
          <li>Daten erheben und dokumentieren</li>
          <li>Abweichungen festhalten</li>
        </ul>

        <Paragraph>
          <strong>🔍 CHECK – Die Überprüfungsphase</strong>
        </Paragraph>
        <Paragraph>
          Die Ergebnisse werden mit den geplanten Zielen verglichen. Diese Phase ist entscheidend 
          – ohne ehrliche Überprüfung keine echte Verbesserung.
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>Soll-Ist-Vergleich durchführen</li>
          <li>Daten auswerten</li>
          <li>Erkenntnisse dokumentieren</li>
        </ul>

        <Paragraph>
          <strong>🔄 ACT – Die Handlungsphase</strong>
        </Paragraph>
        <Paragraph>
          Basierend auf den Erkenntnissen wird entschieden: Standardisieren (wenn erfolgreich) 
          oder anpassen (wenn nicht). Dann beginnt der nächste Zyklus.
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>Erfolgreiche Änderungen standardisieren</li>
          <li>Prozessdokumentation aktualisieren</li>
          <li>Lessons Learned festhalten</li>
          <li>Nächsten PDCA-Zyklus starten</li>
        </ul>

        <TipBox>
          Der häufigste Fehler: Die CHECK-Phase wird übersprungen oder oberflächlich durchgeführt. 
          Nehmen Sie sich Zeit für eine ehrliche Analyse – nur so lernen Sie aus jedem Zyklus.
        </TipBox>
      </Section>

      <Section number={3} title="Woher kommt PDCA?">
        <Paragraph>
          Der PDCA-Zyklus wurde in den 1930er Jahren von <strong>Walter A. Shewhart</strong> entwickelt 
          und später von <strong>W. Edwards Deming</strong> weiterentwickelt und weltweit bekannt gemacht.
        </Paragraph>

        <Table 
          headers={['Jahr', 'Ereignis']}
          rows={[
            ['1930er', 'Shewhart entwickelt den Zyklus bei Bell Labs'],
            ['1950er', 'Deming bringt PDCA nach Japan'],
            ['1980er', 'Integration in TQM und Lean Management'],
            ['Heute', 'Grundlage aller ISO-Managementnormen'],
          ]}
        />
      </Section>

      <Section number={4} title="PDCA in der Praxis: Ein Beispiel">
        <Paragraph>
          <strong>Ausgangssituation:</strong> Ein MedTech-Unternehmen hat eine Reklamationsquote von 3,2% 
          bei einem Produkt. Ziel: Reduktion auf unter 1%.
        </Paragraph>

        <Table 
          headers={['Phase', 'Maßnahmen im Beispiel']}
          rows={[
            ['PLAN', 'Pareto-Analyse zeigt: 70% der Reklamationen durch Lötfehler. Maßnahme: Neue Lötprofile, Schulung der Mitarbeiter.'],
            ['DO', 'Pilotlinie mit neuen Parametern. 2 Wochen Testproduktion, 100% Prüfung der Lötverbindungen.'],
            ['CHECK', 'Auswertung: Lötfehler um 85% reduziert. Gesamtreklamationsquote sinkt auf 0,8%.'],
            ['ACT', 'Neue Parameter als Standard. Arbeitsanweisung aktualisiert. Nächster Zyklus: Verpackungsfehler analysieren.'],
          ]}
        />
      </Section>

      <Section number={5} title="PDCA in der ISO 9001">
        <Paragraph>
          Die gesamte ISO 9001 ist nach dem PDCA-Prinzip strukturiert. Die Norm-Kapitel 
          lassen sich direkt den vier Phasen zuordnen:
        </Paragraph>

        <Table 
          headers={['Phase', 'ISO 9001 Kapitel', 'Inhalt']}
          rows={[
            ['PLAN', 'Kap. 4-6', 'Kontext, Führung, Planung'],
            ['DO', 'Kap. 7-8', 'Unterstützung, Betrieb'],
            ['CHECK', 'Kap. 9', 'Bewertung der Leistung'],
            ['ACT', 'Kap. 10', 'Verbesserung'],
          ]}
        />

        <InfoBox>
          Auch die ISO 13485 (Medizinprodukte) und ISO 14001 (Umwelt) folgen der gleichen 
          PDCA-Struktur. Wer PDCA versteht, versteht das Grundprinzip aller Managementnormen.
        </InfoBox>
      </Section>

      <Section number={6} title="Häufige Fehler beim PDCA">
        <Table 
          headers={['Fehler', 'Auswirkung', 'Lösung']}
          rows={[
            ['Kein messbares Ziel', 'CHECK-Phase unmöglich', 'SMART-Ziele definieren'],
            ['CHECK überspringen', 'Kein Lerneffekt', 'Zeit für Analyse einplanen'],
            ['Zu große Schritte', 'Ursache-Wirkung unklar', 'Kleine Pilotprojekte'],
            ['Keine Standardisierung', 'Verbesserung verpufft', 'Dokumentation aktualisieren'],
          ]}
        />
      </Section>

      <Section number={7} title="Fazit">
        <Paragraph>
          Der PDCA-Zyklus ist simpel – aber mächtig. Er funktioniert für kleine Prozessverbesserungen 
          genauso wie für komplexe Transformationsprojekte.
        </Paragraph>

        <Paragraph>
          <strong>Die wichtigsten Punkte:</strong>
        </Paragraph>
        <ul className="text-gray-700 list-disc pl-6 space-y-1 mb-4">
          <li>PDCA ist ein <strong>kontinuierlicher</strong> Zyklus, kein einmaliges Projekt</li>
          <li>Ohne <strong>messbare Ziele</strong> keine echte Überprüfung</li>
          <li>Die <strong>CHECK-Phase</strong> ist der Schlüssel zum Lernen</li>
          <li>Erfolgreiche Änderungen müssen <strong>standardisiert</strong> werden</li>
        </ul>

        <TipBox>
          Starten Sie mit einem kleinen, überschaubaren Problem. Ein erfolgreicher PDCA-Zyklus 
          schafft Vertrauen in die Methode – und motiviert für den nächsten.
        </TipBox>
      </Section>

      {/* CTA */}
      <CTABox title="PDCA in Ihrem Unternehmen etablieren?">
        <p>Als erfahrener QM-Berater unterstütze ich Sie bei:</p>
        <ul className="mt-2 space-y-1">
          <li>• Implementierung systematischer Verbesserungsprozesse</li>
          <li>• Schulung Ihrer Mitarbeiter in PDCA-Methodik</li>
          <li>• Aufbau eines wirksamen KVP-Systems</li>
        </ul>
      </CTABox>
    </article>
  );
}
