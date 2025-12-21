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

export default function ISO9001Article() {
  return (
    <article>
      <Section number={1} title="Was ist ISO 9001?">
        <DefinitionBox title="ISO 9001 - Definition">
          Internationale Norm, die Anforderungen an ein Qualitätsmanagementsystem (QMS) festlegt. 
          Branchenunabhängig und weltweit anerkannt.
        </DefinitionBox>

        <Paragraph>
          Die ISO 9001 sagt nicht <strong>was</strong> Sie produzieren sollen, sondern <strong>wie</strong> Sie 
          Ihre Prozesse organisieren, um konstante Qualität zu liefern.
        </Paragraph>

        <Table 
          headers={['', '']}
          rows={[
            ['Herausgeber', 'ISO (International Organization for Standardization)'],
            ['Aktuelle Version', 'ISO 9001:2015'],
            ['Zertifizierungen weltweit', 'Über 1 Million'],
            ['Gültig für', 'Alle Branchen, alle Unternehmensgrößen'],
          ]}
        />
      </Section>

      <Section number={2} title="Warum ISO 9001?">
        <Table 
          headers={['Vorteil', 'Erklärung']}
          rows={[
            ['Kundenvertrauen', 'Zertifikat zeigt: "Wir nehmen Qualität ernst"'],
            ['Marktzugang', 'Viele Kunden fordern ISO 9001 von Lieferanten'],
            ['Effizienz', 'Klare Prozesse = weniger Fehler, weniger Kosten'],
            ['Kontinuierliche Verbesserung', 'Systematisch besser werden'],
            ['Mitarbeiterzufriedenheit', 'Klare Verantwortlichkeiten, weniger Chaos'],
          ]}
        />

        <WarningBox>
          ISO 9001 ist kein Selbstzweck. Ein Zertifikat an der Wand ohne gelebtes QMS bringt nichts – außer Kosten.
        </WarningBox>
      </Section>

      <Section number={3} title="Die 7 Grundsätze des Qualitätsmanagements">
        <Paragraph>
          Diese Grundsätze bilden das Fundament der ISO 9001:
        </Paragraph>

        <Table 
          headers={['Nr', 'Grundsatz', 'Bedeutung']}
          rows={[
            ['1', 'Kundenorientierung', 'Kundenbedürfnisse verstehen und erfüllen'],
            ['2', 'Führung', 'Management gibt Richtung vor'],
            ['3', 'Engagement von Personen', 'Mitarbeiter einbinden und befähigen'],
            ['4', 'Prozessorientierter Ansatz', 'Tätigkeiten als Prozesse verstehen'],
            ['5', 'Verbesserung', 'Ständige Verbesserung als Ziel'],
            ['6', 'Faktengestützte Entscheidungen', 'Entscheidungen auf Basis von Daten'],
            ['7', 'Beziehungsmanagement', 'Lieferanten und Partner pflegen'],
          ]}
        />

        <TipBox>
          Diese 7 Grundsätze sind nicht nur Theorie. Bei jedem Audit wird geprüft, ob Sie diese Prinzipien leben.
        </TipBox>
      </Section>

      <Section number={4} title="Aufbau der Norm: Die 10 Kapitel">
        <Paragraph>
          ISO 9001:2015 folgt der "High Level Structure" (HLS), die auch andere Managementnormen nutzen:
        </Paragraph>

        <Table 
          headers={['Kapitel', 'Titel', 'Inhalt']}
          rows={[
            ['1-3', 'Einleitung', 'Anwendungsbereich, Verweise, Begriffe'],
            ['4', 'Kontext der Organisation', 'Umfeld verstehen, interessierte Parteien'],
            ['5', 'Führung', 'Verantwortung der Leitung, Politik, Rollen'],
            ['6', 'Planung', 'Risiken, Chancen, Ziele'],
            ['7', 'Unterstützung', 'Ressourcen, Kompetenz, Dokumentation'],
            ['8', 'Betrieb', 'Operative Planung, Produktion, Dienstleistung'],
            ['9', 'Bewertung der Leistung', 'Überwachung, Audits, Management-Review'],
            ['10', 'Verbesserung', 'Korrekturmaßnahmen, KVP'],
          ]}
        />

        <InfoBox>
          Kapitel 1-3 sind einleitend. Die eigentlichen Anforderungen stehen in Kapitel 4-10.
        </InfoBox>
      </Section>

      <Section number={5} title="Der PDCA-Zyklus in der ISO 9001">
        <Paragraph>
          Die gesamte Norm ist nach dem PDCA-Prinzip aufgebaut:
        </Paragraph>

        <Table 
          headers={['Phase', 'Kapitel', 'Inhalt']}
          rows={[
            ['PLAN', '4-6', 'Kontext, Führung, Planung'],
            ['DO', '7-8', 'Unterstützung, Betrieb'],
            ['CHECK', '9', 'Bewertung der Leistung'],
            ['ACT', '10', 'Verbesserung'],
          ]}
        />
      </Section>

      <Section number={6} title="Dokumentation: Was muss dokumentiert sein?">
        <Paragraph>
          ISO 9001:2015 spricht von "dokumentierter Information". Pflichtdokumente:
        </Paragraph>

        <Table 
          headers={['Dokument', 'Kapitel', 'Zweck']}
          rows={[
            ['Anwendungsbereich', '4.3', 'Was ist im QMS enthalten?'],
            ['Qualitätspolitik', '5.2', 'Übergeordnete Qualitätsausrichtung'],
            ['Qualitätsziele', '6.2', 'Messbare Ziele'],
            ['Prozessbeschreibungen', '4.4', 'Wie laufen Prozesse ab?'],
            ['Aufzeichnungen', 'diverse', 'Nachweise der Umsetzung'],
          ]}
        />

        <TipBox>
          ISO 9001:2015 verlangt kein QM-Handbuch mehr. Aber viele Unternehmen behalten es als zentrale Übersicht bei.
        </TipBox>
      </Section>

      <Section number={7} title="Zertifizierung: Ablauf und Kosten">
        <Table 
          headers={['Phase', 'Dauer', 'Beschreibung']}
          rows={[
            ['1. Vorbereitung', '3-12 Monate', 'QMS aufbauen, Prozesse dokumentieren'],
            ['2. Stage 1 Audit', '1 Tag', 'Dokumentenprüfung, Bereitschaft prüfen'],
            ['3. Stage 2 Audit', '1-3 Tage', 'Vor-Ort-Prüfung der Umsetzung'],
            ['4. Zertifikat', '3 Jahre gültig', 'Jährliche Überwachungsaudits'],
          ]}
        />

        <Paragraph>
          <strong>Kosten (Richtwerte für KMU):</strong>
        </Paragraph>

        <Table 
          headers={['Posten', 'Kosten']}
          rows={[
            ['Zertifizierungsaudit', '3.000 – 10.000 €'],
            ['Jährliches Überwachungsaudit', '2.000 – 5.000 €'],
            ['Rezertifizierung (alle 3 Jahre)', 'wie Erstaudit'],
            ['Interner Aufwand', 'Deutlich höher als Auditkosten!'],
          ]}
        />

        <WarningBox>
          Die Zertifizierungskosten sind nur die Spitze des Eisbergs. Der eigentliche Aufwand liegt im Aufbau und der Pflege des QMS.
        </WarningBox>
      </Section>

      <Section number={8} title="ISO 9001 vs. andere Normen">
        <Table 
          headers={['Aspekt', 'ISO 9001', 'ISO 13485', 'IATF 16949']}
          rows={[
            ['Branche', 'Alle', 'Medizintechnik', 'Automotive'],
            ['Fokus', 'Kundenzufriedenheit', 'Produktsicherheit', 'Fehlervermeidung'],
            ['Risikobasiert', 'Ja', 'Ja, mit ISO 14971', 'Sehr ausgeprägt'],
            ['Dokumentation', 'Moderat', 'Umfangreich', 'Sehr umfangreich'],
          ]}
        />

        <InfoBox>
          ISO 9001 ist die Basis. Branchennormen ergänzen spezifische Anforderungen. Wenn Sie ISO 9001 verstehen, verstehen Sie die Grundlage aller anderen.
        </InfoBox>
      </Section>

      <Section number={9} title="Typische Stolperfallen">
        <Table 
          headers={['Fehler', 'Besser']}
          rows={[
            ['Dokumentation als Selbstzweck', 'Nur dokumentieren, was Mehrwert bringt'],
            ['QM als "Sache der QM-Abteilung"', 'QM ist Aufgabe aller'],
            ['Audits als Prüfung fürchten', 'Audits als Lernchance nutzen'],
            ['Ziele ohne Messung', 'Qualitätsziele SMART formulieren'],
            ['Einmal zertifiziert, fertig', 'QMS muss gelebt werden'],
          ]}
        />

        <TipBox>
          Der häufigste Fehler: Das Management unterschreibt die Qualitätspolitik, interessiert sich aber nicht wirklich dafür. Ein QMS ohne echte Führungsunterstützung ist zum Scheitern verurteilt.
        </TipBox>
      </Section>

      {/* CTA */}
      <CTABox title="ISO 9001 einführen oder verbessern?">
        Ich unterstütze Sie beim Aufbau eines pragmatischen Qualitätsmanagementsystems - von der Ersteinführung über die Zertifizierungsvorbereitung bis zur Optimierung bestehender Systeme.
      </CTABox>
    </article>
  );
}
