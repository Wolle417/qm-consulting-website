/**
 * QCore ISO 13485 Readiness Check — Data & Logic v2
 * 
 * 27 questions across 9 categories (3 per category).
 * User answers as many as they want — partial results supported.
 * Crosby-adapted maturity scoring (1–4). Bilingual DE/EN.
 */

// ─── Categories & Questions ─────────────────────────────────────────────

export const categories = [
  {
    key: 'document-control',
    icon: '📋',
    clauseRef: 'ISO 13485 Kl. 4.2.4 / 4.2.5',
    label: { de: 'Dokumentenlenkung', en: 'Document Control' },
    description: {
      de: 'Erstellung, Prüfung, Freigabe und Lenkung von QMS-Dokumenten und Aufzeichnungen.',
      en: 'Creation, review, approval and control of QMS documents and records.',
    },
    questions: [
      {
        id: 'dc-1',
        question: {
          de: 'Wie steuern Sie die Erstellung, Prüfung und Freigabe von QMS-Dokumenten?',
          en: 'How do you manage the creation, review and approval of QMS documents?',
        },
        options: {
          de: [
            { level: 1, text: 'Dokumente liegen in verschiedenen Ordnern/Laufwerken; kein einheitliches Verfahren.' },
            { level: 2, text: 'Vorlagen und Freigabeverfahren existieren, werden aber nicht überall konsequent befolgt.' },
            { level: 3, text: 'Dokumentiertes Verfahren mit Prüf-/Freigabeprozess, Versionierung und zentraler Ablage — wird gelebt.' },
            { level: 4, text: 'Vollständig gelenktes System mit Review-Zyklen, KPIs und kontinuierlicher Verbesserung.' },
          ],
          en: [
            { level: 1, text: 'Documents stored across various folders/drives; no unified process.' },
            { level: 2, text: 'Templates and approval process exist, but not consistently followed everywhere.' },
            { level: 3, text: 'Documented procedure with review/approval, version control and central repository — consistently followed.' },
            { level: 4, text: 'Fully controlled system with review cycles, KPIs and continuous improvement.' },
          ],
        },
        isoClause: '4.2.4',
        clauseTitle: { de: 'Lenkung von Dokumenten', en: 'Control of Documents' },
        expectedEvidence: [
          { type: 'procedure', de: 'Dokumentierte VA zur Dokumentenlenkung (Erstellung, Prüfung, Freigabe, Verteilung)', en: 'Documented procedure for document control (creation, review, approval, distribution)' },
          { type: 'record', de: 'Freigegebene Dokumentenliste / Master Document List', en: 'Approved document list / Master Document List' },
          { type: 'effectiveness', de: 'Nachweis regelmäßiger Review-Zyklen; keine veralteten Dokumente im Umlauf', en: 'Evidence of regular review cycles; no obsolete documents in circulation' },
        ],
        auditRiskLevel: 'high',
        scope: ['all'],
        weight: 1.5,
        qmsrRef: '820.35',
        qmsrDelta: null,
      },
      {
        id: 'dc-2',
        question: {
          de: 'Wie gehen Sie mit Dokumentenänderungen und veralteten Dokumenten um?',
          en: 'How do you handle document changes and obsolete documents?',
        },
        options: {
          de: [
            { level: 1, text: 'Änderungen werden direkt im Dokument gemacht; alte Versionen sind nicht systematisch archiviert.' },
            { level: 2, text: 'Änderungshistorie existiert teilweise; veraltete Dokumente werden manuell entfernt.' },
            { level: 3, text: 'Formaler Änderungsprozess mit Änderungsgrund, Genehmigung und kontrollierter Archivierung obsoleter Dokumente.' },
            { level: 4, text: 'Automatisierter Änderungsworkflow mit Audit-Trail, Impact-Assessment und systematischer Obsoleszenz-Verwaltung.' },
          ],
          en: [
            { level: 1, text: 'Changes made directly in documents; old versions not systematically archived.' },
            { level: 2, text: 'Change history partially exists; obsolete documents manually removed.' },
            { level: 3, text: 'Formal change process with reason, approval and controlled archiving of obsolete documents.' },
            { level: 4, text: 'Automated change workflow with audit trail, impact assessment and systematic obsolescence management.' },
          ],
        },
        isoClause: '4.2.4',
        clauseTitle: { de: 'Lenkung von Dokumenten', en: 'Control of Documents' },
        expectedEvidence: [
          { type: 'procedure', de: 'Änderungsverfahren mit Änderungsgrund und Genehmigungsworkflow', en: 'Change procedure with change rationale and approval workflow' },
          { type: 'record', de: 'Änderungshistorie / Revisionsstände; Archivierungsnachweise obsoleter Dokumente', en: 'Change history / revision records; archiving evidence for obsolete documents' },
          { type: 'effectiveness', de: 'Stichprobenprüfung: keine veralteten Versionen an Arbeitsplätzen', en: 'Spot check: no obsolete versions at workstations' },
        ],
        auditRiskLevel: 'high',
        scope: ['all'],
        weight: 1.5,
        qmsrRef: '820.35',
        qmsrDelta: null,
      },
      {
        id: 'dc-3',
        question: {
          de: 'Wie stellen Sie sicher, dass externe Dokumente (Normen, Gesetze, Kundenspezifikationen) aktuell sind?',
          en: 'How do you ensure external documents (standards, regulations, customer specs) are current?',
        },
        options: {
          de: [
            { level: 1, text: 'Externe Dokumente werden nicht systematisch verfolgt; Aktualität ist unklar.' },
            { level: 2, text: 'Eine Liste externer Dokumente existiert, wird aber nicht regelmäßig aktualisiert.' },
            { level: 3, text: 'Verzeichnis externer Dokumente mit definierten Review-Zyklen und Verantwortlichkeiten.' },
            { level: 4, text: 'Automatisierte Benachrichtigungen bei Normen-Updates; Impact-Analyse bei jeder Änderung.' },
          ],
          en: [
            { level: 1, text: 'External documents not systematically tracked; currency unclear.' },
            { level: 2, text: 'List of external documents exists but not regularly updated.' },
            { level: 3, text: 'External document register with defined review cycles and responsibilities.' },
            { level: 4, text: 'Automated notifications for standard updates; impact analysis for every change.' },
          ],
        },
        isoClause: '4.2.4',
        clauseTitle: { de: 'Lenkung von Dokumenten', en: 'Control of Documents' },
        expectedEvidence: [
          { type: 'procedure', de: 'Verfahren zur Identifikation und Aktualisierung externer Dokumente', en: 'Procedure for identification and updating of external documents' },
          { type: 'record', de: 'Verzeichnis externer Dokumente mit Revisions-/Gültigkeitsstatus', en: 'External document register with revision/validity status' },
          { type: 'effectiveness', de: 'Nachweis zeitnaher Aktualisierung nach Normenänderungen', en: 'Evidence of timely updates after standard revisions' },
        ],
        auditRiskLevel: 'medium',
        scope: ['all'],
        weight: 1.0,
        qmsrRef: '820.35',
        qmsrDelta: null,
      },
    ],
  },
  {
    key: 'capa',
    icon: '🔄',
    clauseRef: 'ISO 13485 Kl. 8.5.2 / 8.5.3',
    label: { de: 'CAPA-Prozess', en: 'CAPA Process' },
    description: {
      de: 'Korrektur- und Vorbeugemaßnahmen zur systematischen Beseitigung von Qualitätsproblemen.',
      en: 'Corrective and preventive actions for systematic elimination of quality issues.',
    },
    questions: [
      {
        id: 'capa-1',
        question: {
          de: 'Wie identifizieren und untersuchen Sie systematische Qualitätsprobleme?',
          en: 'How do you identify and investigate systemic quality issues?',
        },
        options: {
          de: [
            { level: 1, text: 'Probleme werden einzeln behoben; ein formaler CAPA-Prozess existiert nicht.' },
            { level: 2, text: 'CAPA-Verfahren dokumentiert, aber Ursachenanalyse nicht systematisch.' },
            { level: 3, text: 'Strukturierter CAPA-Prozess mit Root-Cause-Analyse und dokumentierter Wirksamkeitsprüfung.' },
            { level: 4, text: 'CAPA mit Trendanalyse, präventiver Identifikation und regelmäßigem Management-Reporting.' },
          ],
          en: [
            { level: 1, text: 'Problems fixed individually; no formal CAPA process.' },
            { level: 2, text: 'CAPA procedure documented, but root cause analysis not systematic.' },
            { level: 3, text: 'Structured CAPA process with root cause analysis and documented effectiveness verification.' },
            { level: 4, text: 'CAPA with trend analysis, preventive identification and regular management reporting.' },
          ],
        },
        isoClause: '8.5.2',
        clauseTitle: { de: 'Korrekturmaßnahmen', en: 'Corrective Action' },
        expectedEvidence: [
          { type: 'procedure', de: 'Dokumentierte VA für Korrekturmaßnahmen inkl. Ursachenanalyse', en: 'Documented procedure for corrective action incl. root cause analysis' },
          { type: 'record', de: 'CAPA-Log mit Ursachenanalyse, Maßnahmen und Fristen', en: 'CAPA log with root cause analysis, actions and deadlines' },
          { type: 'effectiveness', de: 'Nachweis der Wirksamkeitsprüfung je CAPA; Trendauswertung', en: 'Evidence of effectiveness verification per CAPA; trend analysis' },
        ],
        auditRiskLevel: 'critical',
        scope: ['all'],
        weight: 2.0,
        qmsrRef: '820.198',
        qmsrDelta: { de: 'QMSR fordert explizit die Einbeziehung von Service- und Installationsberichten als CAPA-Input', en: 'QMSR explicitly requires inclusion of service and installation reports as CAPA input' },
      },
      {
        id: 'capa-2',
        question: {
          de: 'Welche Methoden nutzen Sie zur Ursachenanalyse (Root Cause Analysis)?',
          en: 'Which methods do you use for root cause analysis?',
        },
        options: {
          de: [
            { level: 1, text: 'Keine formalen Methoden; Ursache wird nach Gefühl bestimmt.' },
            { level: 2, text: 'Gelegentlich 5-Why oder Ishikawa, aber nicht standardisiert.' },
            { level: 3, text: 'Definierte RCA-Methoden (5-Why, Ishikawa, Fault Tree) je nach Problemkategorie; geschulte Mitarbeitende.' },
            { level: 4, text: 'Toolbox aus RCA-Methoden mit statistischer Auswertung; RCA-Ergebnisse fließen in Wissensdatenbank.' },
          ],
          en: [
            { level: 1, text: 'No formal methods; root cause determined by gut feeling.' },
            { level: 2, text: 'Occasional 5-Why or Ishikawa, but not standardized.' },
            { level: 3, text: 'Defined RCA methods (5-Why, Ishikawa, Fault Tree) by problem type; trained staff.' },
            { level: 4, text: 'RCA toolbox with statistical analysis; RCA results feed into knowledge base.' },
          ],
        },
        isoClause: '8.5.2',
        clauseTitle: { de: 'Korrekturmaßnahmen', en: 'Corrective Action' },
        expectedEvidence: [
          { type: 'procedure', de: 'Festgelegte RCA-Methoden je Problemkategorie in der CAPA-VA', en: 'Defined RCA methods per problem category in CAPA procedure' },
          { type: 'record', de: 'Ausgefüllte RCA-Formulare (Ishikawa, 5-Why) in CAPA-Akten', en: 'Completed RCA forms (Ishikawa, 5-Why) in CAPA files' },
          { type: 'effectiveness', de: 'Nachweis geschulter RCA-Anwender; Wiederholungsrate gleicher Ursachen sinkt', en: 'Evidence of trained RCA practitioners; recurrence rate of same root causes decreasing' },
        ],
        auditRiskLevel: 'high',
        scope: ['all'],
        weight: 1.5,
        qmsrRef: '820.198',
        qmsrDelta: null,
      },
      {
        id: 'capa-3',
        question: {
          de: 'Wie verifizieren Sie die Wirksamkeit Ihrer Korrektur- und Vorbeugemaßnahmen?',
          en: 'How do you verify the effectiveness of your corrective and preventive actions?',
        },
        options: {
          de: [
            { level: 1, text: 'Wirksamkeitsprüfung findet nicht statt oder nur informell.' },
            { level: 2, text: 'Wirksamkeit wird geprüft, aber Kriterien und Zeitrahmen sind nicht definiert.' },
            { level: 3, text: 'Definierte Wirksamkeitskriterien, Prüfzeitraum und dokumentierte Bewertung für jede CAPA.' },
            { level: 4, text: 'Mehrstufige Wirksamkeitsprüfung mit KPIs, Langzeit-Monitoring und Rückkopplung ins Risikomanagement.' },
          ],
          en: [
            { level: 1, text: 'Effectiveness verification not performed or only informally.' },
            { level: 2, text: 'Effectiveness checked but criteria and timeframes not defined.' },
            { level: 3, text: 'Defined effectiveness criteria, verification period and documented assessment for each CAPA.' },
            { level: 4, text: 'Multi-stage effectiveness verification with KPIs, long-term monitoring and feedback into risk management.' },
          ],
        },
        isoClause: '8.5.2',
        clauseTitle: { de: 'Korrekturmaßnahmen', en: 'Corrective Action' },
        expectedEvidence: [
          { type: 'procedure', de: 'Definierte Wirksamkeitskriterien und Prüfzeiträume in CAPA-VA', en: 'Defined effectiveness criteria and verification periods in CAPA procedure' },
          { type: 'record', de: 'Wirksamkeitsbewertungen je CAPA mit Ergebnis und Datum', en: 'Effectiveness assessments per CAPA with result and date' },
          { type: 'effectiveness', de: 'Nachweis, dass abgeschlossene CAPAs das Problem nachhaltig beseitigt haben', en: 'Evidence that closed CAPAs have sustainably eliminated the problem' },
        ],
        auditRiskLevel: 'critical',
        scope: ['all'],
        weight: 2.0,
        qmsrRef: '820.198',
        qmsrDelta: { de: 'QMSR verlangt Verifizierung der Wirksamkeit vor CAPA-Abschluss und Reporting an FDA bei Produktsicherheitsrisiko', en: 'QMSR requires effectiveness verification before CAPA closure and FDA reporting for product safety risk' },
      },
    ],
  },
  {
    key: 'risk-management',
    icon: '⚠️',
    clauseRef: 'ISO 13485 Kl. 7.1 / ISO 14971',
    label: { de: 'Risikomanagement', en: 'Risk Management' },
    description: {
      de: 'Systematische Identifikation, Bewertung und Beherrschung von Produkt- und Prozessrisiken.',
      en: 'Systematic identification, evaluation and control of product and process risks.',
    },
    questions: [
      {
        id: 'rm-1',
        question: {
          de: 'Wie ist das Risikomanagement in Ihre Produktentwicklung und QMS-Prozesse integriert?',
          en: 'How is risk management integrated into product development and QMS processes?',
        },
        options: {
          de: [
            { level: 1, text: 'Risikomanagement erfolgt hauptsächlich reaktiv oder nur bei expliziter Anforderung.' },
            { level: 2, text: 'Risikoanalysen werden für Produkte erstellt, aber nicht systematisch in alle Prozesse integriert.' },
            { level: 3, text: 'Risikomanagement nach ISO 14971 in Entwicklung, Produktion und Post-Market integriert.' },
            { level: 4, text: 'Durchgängiges Risikomanagement über den gesamten Produktlebenszyklus mit quantitativer Bewertung.' },
          ],
          en: [
            { level: 1, text: 'Risk management mainly reactive or only on explicit request.' },
            { level: 2, text: 'Risk analyses created for products but not integrated into all processes.' },
            { level: 3, text: 'Risk management per ISO 14971 integrated into development, production and post-market.' },
            { level: 4, text: 'End-to-end risk management across entire product lifecycle with quantitative assessment.' },
          ],
        },
        isoClause: '7.1',
        clauseTitle: { de: 'Planung der Produktrealisierung', en: 'Planning of Product Realization' },
        expectedEvidence: [
          { type: 'procedure', de: 'Risikomanagementverfahren nach ISO 14971 mit Anwendung auf QMS-Prozesse', en: 'Risk management procedure per ISO 14971 applied to QMS processes' },
          { type: 'record', de: 'Risikomanagementakte je Produkt; Risikobewertungen in Prozessbeschreibungen', en: 'Risk management file per product; risk assessments in process descriptions' },
          { type: 'effectiveness', de: 'Nachweis regelmäßiger Risiko-Reviews und Aktualisierung bei Änderungen', en: 'Evidence of regular risk reviews and updates upon changes' },
        ],
        auditRiskLevel: 'critical',
        scope: ['all'],
        weight: 2.0,
        qmsrRef: '820.30(g)',
        qmsrDelta: { de: 'QMSR referenziert ISO 14971 direkt; zusätzlich FDA-spezifische Anforderung an Risikomanagement in Produktionsplanung', en: 'QMSR directly references ISO 14971; additional FDA-specific requirement for risk management in production planning' },
      },
      {
        id: 'rm-2',
        question: {
          de: 'Wie identifizieren und bewerten Sie Gefährdungen und Risiken Ihrer Produkte?',
          en: 'How do you identify and evaluate hazards and risks of your products?',
        },
        options: {
          de: [
            { level: 1, text: 'Risiken werden ad-hoc identifiziert; keine strukturierte Methode.' },
            { level: 2, text: 'Risikoanalyse (z.B. FMEA) wird durchgeführt, aber Bewertungskriterien sind nicht standardisiert.' },
            { level: 3, text: 'Systematische Gefährdungsanalyse mit standardisierten Bewertungskriterien (Schwere, Wahrscheinlichkeit).' },
            { level: 4, text: 'Kombination mehrerer Methoden (FMEA, FTA, HAZOP) mit statistischen Daten und regelmäßiger Aktualisierung.' },
          ],
          en: [
            { level: 1, text: 'Risks identified ad-hoc; no structured method.' },
            { level: 2, text: 'Risk analysis (e.g. FMEA) performed but evaluation criteria not standardized.' },
            { level: 3, text: 'Systematic hazard analysis with standardized criteria (severity, probability).' },
            { level: 4, text: 'Combination of methods (FMEA, FTA, HAZOP) with statistical data and regular updates.' },
          ],
        },
        isoClause: '7.1',
        clauseTitle: { de: 'Planung der Produktrealisierung', en: 'Planning of Product Realization' },
        expectedEvidence: [
          { type: 'procedure', de: 'Risikobewertungsmethodik mit definierten Akzeptanzkriterien (Schwere × Wahrscheinlichkeit)', en: 'Risk assessment methodology with defined acceptance criteria (severity × probability)' },
          { type: 'record', de: 'Risikoanalysen (FMEA, FTA) je Produkt mit Bewertungsmatrix', en: 'Risk analyses (FMEA, FTA) per product with assessment matrix' },
          { type: 'effectiveness', de: 'Nachweis der Risikoreduktion durch implementierte Maßnahmen', en: 'Evidence of risk reduction through implemented controls' },
        ],
        auditRiskLevel: 'critical',
        scope: ['all'],
        weight: 2.0,
        qmsrRef: '820.30(g)',
        qmsrDelta: null,
      },
      {
        id: 'rm-3',
        question: {
          de: 'Wie managen Sie Restrisiken und die Nutzen-Risiko-Bewertung?',
          en: 'How do you manage residual risks and benefit-risk assessment?',
        },
        options: {
          de: [
            { level: 1, text: 'Restrisiken werden nicht explizit dokumentiert oder bewertet.' },
            { level: 2, text: 'Restrisiken sind dokumentiert, aber eine Nutzen-Risiko-Bewertung fehlt.' },
            { level: 3, text: 'Restrisiken dokumentiert mit Nutzen-Risiko-Bewertung und Akzeptanzkriterien; Begleitinformationen berücksichtigt.' },
            { level: 4, text: 'Kontinuierliche Restrisiko-Überwachung mit Post-Market-Daten und regelmäßiger Neubewertung des Gesamtrestrisikos.' },
          ],
          en: [
            { level: 1, text: 'Residual risks not explicitly documented or evaluated.' },
            { level: 2, text: 'Residual risks documented but benefit-risk assessment missing.' },
            { level: 3, text: 'Residual risks documented with benefit-risk assessment and acceptance criteria; disclosure in IFU.' },
            { level: 4, text: 'Continuous residual risk monitoring with post-market data and regular overall residual risk reassessment.' },
          ],
        },
        isoClause: '7.1',
        clauseTitle: { de: 'Planung der Produktrealisierung', en: 'Planning of Product Realization' },
        expectedEvidence: [
          { type: 'procedure', de: 'Verfahren zur Restrisikobewertung und Nutzen-Risiko-Abwägung', en: 'Procedure for residual risk evaluation and benefit-risk analysis' },
          { type: 'record', de: 'Risikomanagementbericht mit Gesamtrestrisiko-Bewertung je Produkt', en: 'Risk management report with overall residual risk evaluation per product' },
          { type: 'effectiveness', de: 'PMS-Daten bestätigen Restrisiko-Annahmen; Aktualisierung bei neuen Erkenntnissen', en: 'PMS data confirms residual risk assumptions; updates upon new findings' },
        ],
        auditRiskLevel: 'high',
        scope: ['all'],
        weight: 1.5,
        qmsrRef: '820.30(g)',
        qmsrDelta: null,
      },
    ],
  },
  {
    key: 'design-development',
    icon: '🔬',
    clauseRef: 'ISO 13485 Kl. 7.3',
    label: { de: 'Design & Entwicklung', en: 'Design & Development' },
    description: {
      de: 'Design Controls für Medizinprodukte von der Anforderungsdefinition bis zur Validierung.',
      en: 'Design controls for medical devices from requirements through validation.',
    },
    questions: [
      {
        id: 'dd-1',
        question: {
          de: 'Wie steuern Sie Ihren Design- und Entwicklungsprozess?',
          en: 'How do you manage your design and development process?',
        },
        options: {
          de: [
            { level: 1, text: 'Entwicklung erfolgt projekt- oder personenabhängig ohne standardisierten Prozess.' },
            { level: 2, text: 'Design-Phasen definiert, aber Traceability (Anforderungen - Verifizierung - Validierung) lückenhaft.' },
            { level: 3, text: 'Vollständiger Design-Control-Prozess mit Design History File, Traceability Matrix und Design Reviews.' },
            { level: 4, text: 'Design Controls implementiert mit Design-Transfer, Lessons-Learned und Usability Engineering (IEC 62366).' },
          ],
          en: [
            { level: 1, text: 'Development depends on project/person; no standardized process.' },
            { level: 2, text: 'Design phases defined but traceability (requirements - verification - validation) has gaps.' },
            { level: 3, text: 'Complete design control process with DHF, traceability matrix and design reviews.' },
            { level: 4, text: 'Design controls implemented with design transfer, lessons learned and usability engineering (IEC 62366).' },
          ],
        },
        isoClause: '7.3.1',
        clauseTitle: { de: 'Design- und Entwicklungsplanung', en: 'Design and Development Planning' },
        expectedEvidence: [
          { type: 'procedure', de: 'Design-Control-Verfahren mit Phasen, Reviews und Verantwortlichkeiten', en: 'Design control procedure with phases, reviews and responsibilities' },
          { type: 'record', de: 'Design History File (DHF) mit Traceability Matrix je Projekt', en: 'Design History File (DHF) with traceability matrix per project' },
          { type: 'effectiveness', de: 'Nachweis vollständiger Design Reviews an jedem Gate; Design-Transfer-Checklisten', en: 'Evidence of complete design reviews at each gate; design transfer checklists' },
        ],
        auditRiskLevel: 'critical',
        scope: ['design'],
        weight: 2.0,
        qmsrRef: '820.30',
        qmsrDelta: { de: 'QMSR fordert zusätzlich Design History File (DHF) und formalen Design Transfer', en: 'QMSR additionally requires Design History File (DHF) and formal design transfer' },
      },
      {
        id: 'dd-2',
        question: {
          de: 'Wie definieren und verwalten Sie Design-Inputs (Anforderungen)?',
          en: 'How do you define and manage design inputs (requirements)?',
        },
        options: {
          de: [
            { level: 1, text: 'Anforderungen werden informell gesammelt; kein strukturiertes Anforderungsmanagement.' },
            { level: 2, text: 'Anforderungsliste existiert, aber Vollständigkeit und Rückverfolgbarkeit nicht sichergestellt.' },
            { level: 3, text: 'Vollständige Design-Input-Spezifikation mit Rückverfolgbarkeit zu regulatorischen und Nutzeranforderungen.' },
            { level: 4, text: 'Requirements-Management-System mit Änderungsverfolgung, Impact-Analyse und automatischer Traceability.' },
          ],
          en: [
            { level: 1, text: 'Requirements gathered informally; no structured requirements management.' },
            { level: 2, text: 'Requirements list exists but completeness and traceability not ensured.' },
            { level: 3, text: 'Complete design input specification with traceability to regulatory and user requirements.' },
            { level: 4, text: 'Requirements management system with change tracking, impact analysis and automated traceability.' },
          ],
        },
        isoClause: '7.3.3',
        clauseTitle: { de: 'Design- und Entwicklungseingaben', en: 'Design and Development Inputs' },
        expectedEvidence: [
          { type: 'procedure', de: 'Verfahren zur Erfassung und Prüfung von Design Inputs auf Vollständigkeit', en: 'Procedure for capturing and reviewing design inputs for completeness' },
          { type: 'record', de: 'Design-Input-Spezifikation mit Rückverfolgbarkeit zu Normen und Nutzeranforderungen', en: 'Design input specification with traceability to standards and user requirements' },
          { type: 'effectiveness', de: 'Nachweis, dass alle Inputs vor Design Review auf Widerspruchsfreiheit geprüft wurden', en: 'Evidence that all inputs were reviewed for consistency before design review' },
        ],
        auditRiskLevel: 'high',
        scope: ['design'],
        weight: 1.5,
        qmsrRef: '820.30(c)',
        qmsrDelta: null,
      },
      {
        id: 'dd-3',
        question: {
          de: 'Wie führen Sie Design-Verifizierung und -Validierung durch?',
          en: 'How do you perform design verification and validation?',
        },
        options: {
          de: [
            { level: 1, text: 'Tests werden durchgeführt, aber nicht systematisch gegen Anforderungen verifiziert.' },
            { level: 2, text: 'Verifizierung gegen Design-Inputs; Validierung (Nutzungsumgebung) fehlt oder ist lückenhaft.' },
            { level: 3, text: 'Vollständige V&V mit Testprotokollen, Akzeptanzkriterien und statistisch begründeten Stichprobengrößen.' },
            { level: 4, text: 'V&V mit risikobasierter Teststrategie, simulierter Nutzung und Post-Market-Feedback-Integration.' },
          ],
          en: [
            { level: 1, text: 'Tests performed but not systematically verified against requirements.' },
            { level: 2, text: 'Verification against design inputs; validation (use environment) missing or incomplete.' },
            { level: 3, text: 'Complete V&V with test protocols, acceptance criteria and statistically justified sample sizes.' },
            { level: 4, text: 'V&V with risk-based test strategy, simulated use and post-market feedback integration.' },
          ],
        },
        isoClause: '7.3.6 / 7.3.7',
        clauseTitle: { de: 'Design-Verifizierung / Design-Validierung', en: 'Design Verification / Design Validation' },
        expectedEvidence: [
          { type: 'procedure', de: 'V&V-Verfahren mit Akzeptanzkriterien und Stichprobenplan', en: 'V&V procedure with acceptance criteria and sampling plan' },
          { type: 'record', de: 'Verifizierungs- und Validierungsprotokolle mit Ergebnissen und Abweichungsbehandlung', en: 'Verification and validation protocols with results and deviation handling' },
          { type: 'effectiveness', de: 'Nachweis, dass alle Design Outputs gegen Inputs verifiziert und unter Nutzungsbedingungen validiert sind', en: 'Evidence that all design outputs are verified against inputs and validated under use conditions' },
        ],
        auditRiskLevel: 'critical',
        scope: ['design'],
        weight: 2.0,
        qmsrRef: '820.30(f)/(g)',
        qmsrDelta: { de: 'QMSR verlangt Validierung unter tatsächlichen oder simulierten Nutzungsbedingungen inkl. Software-Validierung', en: 'QMSR requires validation under actual or simulated use conditions incl. software validation' },
      },
    ],
  },
  {
    key: 'supplier-management',
    icon: '🏭',
    clauseRef: 'ISO 13485 Kl. 7.4',
    label: { de: 'Lieferantenmanagement', en: 'Supplier Management' },
    description: {
      de: 'Bewertung, Auswahl und Überwachung qualitätsrelevanter Lieferanten.',
      en: 'Evaluation, selection and monitoring of quality-relevant suppliers.',
    },
    questions: [
      {
        id: 'sm-1',
        question: {
          de: 'Wie bewerten und überwachen Sie Ihre qualitätsrelevanten Lieferanten?',
          en: 'How do you evaluate and monitor your quality-relevant suppliers?',
        },
        options: {
          de: [
            { level: 1, text: 'Lieferanten nach Verfügbarkeit/Preis ausgewählt; keine formale Bewertung.' },
            { level: 2, text: 'Erstbewertung erfolgt, aber regelmäßige Neubewertung und Risikoeinstufung fehlen.' },
            { level: 3, text: 'Dokumentiertes Verfahren mit Erst-/Neubewertung und risikobasierter Klassifizierung.' },
            { level: 4, text: 'Proaktives Management mit Audits, Scorecards und Lieferketten-Risikobewertung.' },
          ],
          en: [
            { level: 1, text: 'Suppliers selected by availability/price; no formal evaluation.' },
            { level: 2, text: 'Initial evaluation done but regular re-evaluation and risk classification missing.' },
            { level: 3, text: 'Documented procedure with initial/re-evaluation and risk-based classification.' },
            { level: 4, text: 'Proactive management with audits, scorecards and supply chain risk assessment.' },
          ],
        },
        isoClause: '7.4.1',
        clauseTitle: { de: 'Beschaffungsprozess', en: 'Purchasing Process' },
        expectedEvidence: [
          { type: 'procedure', de: 'Verfahren zur Lieferantenbewertung und -überwachung mit Kriterien und Klassifizierung', en: 'Procedure for supplier evaluation and monitoring with criteria and classification' },
          { type: 'record', de: 'Freigegebene Lieferantenliste (AVL) mit Bewertungsergebnissen und Risikoeinstufung', en: 'Approved vendor list (AVL) with evaluation results and risk classification' },
          { type: 'effectiveness', de: 'Nachweis regelmäßiger Neubewertungen; sinkende Lieferanten-Beanstandungsrate', en: 'Evidence of regular re-evaluations; decreasing supplier non-conformity rate' },
        ],
        auditRiskLevel: 'high',
        scope: ['all'],
        weight: 1.5,
        qmsrRef: '820.50',
        qmsrDelta: null,
      },
      {
        id: 'sm-2',
        question: {
          de: 'Wie führen Sie Wareneingangsprüfungen durch?',
          en: 'How do you perform incoming goods inspection?',
        },
        options: {
          de: [
            { level: 1, text: 'Keine systematische Wareneingangsprüfung; Ware wird direkt verwendet.' },
            { level: 2, text: 'Prüfung erfolgt stichprobenartig, aber ohne definierte Prüfpläne oder AQL-Kriterien.' },
            { level: 3, text: 'Dokumentierte Prüfpläne mit definierten AQL-Werten, Prüfanweisungen und Freigabeprozess.' },
            { level: 4, text: 'Risikobasierte Skip-Lot-Verfahren, statistische Prozesskontrolle und automatisierte Qualitätsdatenerfassung.' },
          ],
          en: [
            { level: 1, text: 'No systematic incoming inspection; goods used directly.' },
            { level: 2, text: 'Inspection done by sampling but without defined plans or AQL criteria.' },
            { level: 3, text: 'Documented inspection plans with AQL values, instructions and release process.' },
            { level: 4, text: 'Risk-based skip-lot procedures, SPC and automated quality data capture.' },
          ],
        },
        isoClause: '7.4.3',
        clauseTitle: { de: 'Verifizierung von beschafften Produkten', en: 'Verification of Purchased Product' },
        expectedEvidence: [
          { type: 'procedure', de: 'Wareneingangsprüfverfahren mit Prüfplänen, AQL-Kriterien und Freigabeprozess', en: 'Incoming inspection procedure with inspection plans, AQL criteria and release process' },
          { type: 'record', de: 'Prüfprotokolle mit Ergebnissen, Freigabeentscheidung und Chargenzuordnung', en: 'Inspection records with results, release decision and batch assignment' },
          { type: 'effectiveness', de: 'Reklamationsrate aus dem Feld korreliert mit Wareneingangsdaten; Skip-Lot-Entscheidungen belegt', en: 'Field complaint rate correlates with incoming data; skip-lot decisions justified' },
        ],
        auditRiskLevel: 'high',
        scope: ['all'],
        weight: 1.5,
        qmsrRef: '820.80',
        qmsrDelta: { de: 'QMSR fordert dokumentierte Akzeptanzkriterien und Quarantäne-Verfahren für nicht-konforme Ware', en: 'QMSR requires documented acceptance criteria and quarantine procedures for non-conforming goods' },
      },
      {
        id: 'sm-3',
        question: {
          de: 'Wie gehen Sie mit Lieferanten-Abweichungen und -Reklamationen um?',
          en: 'How do you handle supplier non-conformities and complaints?',
        },
        options: {
          de: [
            { level: 1, text: 'Abweichungen werden mit dem Lieferanten bilateral geklärt; keine systematische Dokumentation.' },
            { level: 2, text: 'Reklamationen werden dokumentiert, aber ohne strukturierte Ursachenanalyse beim Lieferanten.' },
            { level: 3, text: 'Formaler Reklamationsprozess mit 8D-Reports, Maßnahmenverfolgung und Auswirkung auf Lieferantenbewertung.' },
            { level: 4, text: 'Integration in CAPA-System mit Trendauswertung, Eskalationsstufen und strategischer Lieferantenentwicklung.' },
          ],
          en: [
            { level: 1, text: 'Deviations resolved bilaterally; no systematic documentation.' },
            { level: 2, text: 'Complaints documented but without structured root cause analysis at supplier.' },
            { level: 3, text: 'Formal complaint process with 8D reports, action tracking and impact on supplier rating.' },
            { level: 4, text: 'Integration into CAPA system with trend analysis, escalation levels and strategic supplier development.' },
          ],
        },
        isoClause: '7.4.1',
        clauseTitle: { de: 'Beschaffungsprozess', en: 'Purchasing Process' },
        expectedEvidence: [
          { type: 'procedure', de: 'Lieferanten-Reklamationsverfahren mit Eskalationsstufen und Auswirkung auf Bewertung', en: 'Supplier complaint procedure with escalation levels and impact on evaluation' },
          { type: 'record', de: '8D-Reports, Maßnahmenverfolgung und aktualisierte Lieferantenbewertungen', en: '8D reports, action tracking and updated supplier evaluations' },
          { type: 'effectiveness', de: 'Trendauswertung zeigt sinkende Wiederholungsrate; Lieferantenentwicklung dokumentiert', en: 'Trend analysis shows decreasing recurrence rate; supplier development documented' },
        ],
        auditRiskLevel: 'medium',
        scope: ['all'],
        weight: 1.0,
        qmsrRef: '820.50',
        qmsrDelta: null,
      },
    ],
  },
  {
    key: 'audit-mgmt-review',
    icon: '🔍',
    clauseRef: 'ISO 13485 Kl. 8.2.4 / 5.6',
    label: { de: 'Audit & Management Review', en: 'Audit & Management Review' },
    description: {
      de: 'Interne Audits und Managementbewertung als Instrumente der QMS-Wirksamkeitsprüfung.',
      en: 'Internal audits and management review as instruments for QMS effectiveness evaluation.',
    },
    questions: [
      {
        id: 'amr-1',
        question: {
          de: 'Wie führen Sie interne Audits Ihres QMS durch?',
          en: 'How do you conduct internal audits of your QMS?',
        },
        options: {
          de: [
            { level: 1, text: 'Interne Audits finden unregelmäßig oder gar nicht statt.' },
            { level: 2, text: 'Audits werden durchgeführt, aber ohne formalen Plan und systematische Nachverfolgung.' },
            { level: 3, text: 'Geplantes Auditprogramm mit qualifizierten Auditoren, Checklisten und dokumentierter Nachverfolgung.' },
            { level: 4, text: 'Risikobasiertes Auditprogramm mit Trendanalyse und Verbesserung des Auditprozesses selbst.' },
          ],
          en: [
            { level: 1, text: 'Internal audits irregular or non-existent.' },
            { level: 2, text: 'Audits conducted but without formal plan or systematic follow-up.' },
            { level: 3, text: 'Planned audit program with qualified auditors, checklists and documented follow-up.' },
            { level: 4, text: 'Risk-based audit program with trend analysis and improvement of the audit process itself.' },
          ],
        },
        isoClause: '8.2.4',
        clauseTitle: { de: 'Internes Audit', en: 'Internal Audit' },
        expectedEvidence: [
          { type: 'procedure', de: 'Dokumentierte VA für internes Audit inkl. Auditorenqualifikation und Unabhängigkeit', en: 'Documented procedure for internal audit incl. auditor qualification and independence' },
          { type: 'record', de: 'Auditprogramm, Auditpläne, Auditberichte und Maßnahmenlisten', en: 'Audit program, audit plans, audit reports and action lists' },
          { type: 'effectiveness', de: 'Nachweis vollständiger Abdeckung aller QMS-Prozesse im Auditzyklus; Abschlussquote der Findings', en: 'Evidence of complete coverage of all QMS processes in audit cycle; finding closure rate' },
        ],
        auditRiskLevel: 'high',
        scope: ['all'],
        weight: 1.5,
        qmsrRef: '820.22',
        qmsrDelta: null,
      },
      {
        id: 'amr-2',
        question: {
          de: 'Wie bewertet Ihre Geschäftsleitung die Wirksamkeit des QMS?',
          en: 'How does your leadership evaluate QMS effectiveness?',
        },
        options: {
          de: [
            { level: 1, text: 'Die Geschäftsleitung befasst sich mit dem QMS nur bei akuten Problemen.' },
            { level: 2, text: 'Management Reviews finden statt, aber unregelmäßig und ohne vollständige Datengrundlage.' },
            { level: 3, text: 'Regelmäßige Reviews mit allen Inputs (Auditergebnisse, CAPA-Status, Kundenfeedback, Trends).' },
            { level: 4, text: 'Management Review als strategisches Tool mit KPI-Dashboard, Trendanalyse und nachverfolgten Maßnahmen.' },
          ],
          en: [
            { level: 1, text: 'Leadership addresses QMS only during acute problems.' },
            { level: 2, text: 'Management reviews occur but irregularly and without complete data basis.' },
            { level: 3, text: 'Regular reviews with all inputs (audit results, CAPA status, customer feedback, trends).' },
            { level: 4, text: 'Management review as strategic tool with KPI dashboard, trend analysis and tracked actions.' },
          ],
        },
        isoClause: '5.6',
        clauseTitle: { de: 'Managementbewertung', en: 'Management Review' },
        expectedEvidence: [
          { type: 'procedure', de: 'Verfahren zur Managementbewertung mit definierten Inputs (Kl. 5.6.2) und Outputs (Kl. 5.6.3)', en: 'Procedure for management review with defined inputs (Cl. 5.6.2) and outputs (Cl. 5.6.3)' },
          { type: 'record', de: 'Management-Review-Protokolle mit allen Pflicht-Inputs und beschlossenen Maßnahmen', en: 'Management review minutes with all required inputs and decided actions' },
          { type: 'effectiveness', de: 'Nachweis der Umsetzung beschlossener Maßnahmen; regelmäßiger Rhythmus eingehalten', en: 'Evidence of implementation of decided actions; regular cadence maintained' },
        ],
        auditRiskLevel: 'high',
        scope: ['all'],
        weight: 1.5,
        qmsrRef: '820.20',
        qmsrDelta: { de: 'QMSR fordert Management Review inkl. Analyse von Beschwerden, CAPA-Trends und regulatorischen Änderungen als Pflicht-Inputs', en: 'QMSR requires management review incl. analysis of complaints, CAPA trends and regulatory changes as mandatory inputs' },
      },
      {
        id: 'amr-3',
        question: {
          de: 'Wie verfolgen Sie Audit-Findings bis zum Abschluss?',
          en: 'How do you track audit findings to closure?',
        },
        options: {
          de: [
            { level: 1, text: 'Findings werden notiert, aber nicht systematisch nachverfolgt.' },
            { level: 2, text: 'Maßnahmenliste existiert, aber Fristen und Verantwortlichkeiten sind unklar.' },
            { level: 3, text: 'Strukturierte Nachverfolgung mit Verantwortlichen, Fristen und Wirksamkeitsprüfung.' },
            { level: 4, text: 'Automatisiertes Tracking mit Eskalation bei Fristüberschreitung und Trend-Reporting an die Geschäftsleitung.' },
          ],
          en: [
            { level: 1, text: 'Findings noted but not systematically tracked.' },
            { level: 2, text: 'Action list exists but deadlines and responsibilities unclear.' },
            { level: 3, text: 'Structured follow-up with owners, deadlines and effectiveness verification.' },
            { level: 4, text: 'Automated tracking with escalation on overdue items and trend reporting to leadership.' },
          ],
        },
        isoClause: '8.2.4',
        clauseTitle: { de: 'Internes Audit', en: 'Internal Audit' },
        expectedEvidence: [
          { type: 'procedure', de: 'Nachverfolgungsverfahren für Audit-Findings mit Fristen und Eskalation', en: 'Follow-up procedure for audit findings with deadlines and escalation' },
          { type: 'record', de: 'Maßnahmentracking mit Status, Verantwortlichen und Abschlussdatum', en: 'Action tracking with status, owners and closure date' },
          { type: 'effectiveness', de: 'Abschlussquote >90%; keine wiederkehrenden Findings zu gleichen Themen', en: 'Closure rate >90%; no recurring findings on same topics' },
        ],
        auditRiskLevel: 'medium',
        scope: ['all'],
        weight: 1.0,
        qmsrRef: '820.22',
        qmsrDelta: null,
      },
    ],
  },
  {
    key: 'regulatory-compliance',
    icon: '🏛️',
    clauseRef: 'EU MDR 2017/745 / FDA QMSR',
    label: { de: 'Regulatorische Compliance', en: 'Regulatory Compliance' },
    description: {
      de: 'Einhaltung und Umsetzung regulatorischer Anforderungen (EU MDR, FDA, MDSAP).',
      en: 'Compliance with and implementation of regulatory requirements (EU MDR, FDA, MDSAP).',
    },
    questions: [
      {
        id: 'rc-1',
        question: {
          de: 'Wie aktuell ist Ihr QMS bezüglich regulatorischer Anforderungen (EU MDR, FDA QMSR)?',
          en: 'How current is your QMS regarding regulatory requirements (EU MDR, FDA QMSR)?',
        },
        options: {
          de: [
            { level: 1, text: 'Kein systematischer Überblick über aktuelle regulatorische Änderungen.' },
            { level: 2, text: 'Änderungen werden verfolgt, aber Umsetzung im QMS hinkt hinterher.' },
            { level: 3, text: 'Regulatorische Anforderungen identifiziert und systematisch im QMS umgesetzt.' },
            { level: 4, text: 'Proaktives Monitoring mit Gap-Analysen bei jeder Änderung, inkl. MDSAP.' },
          ],
          en: [
            { level: 1, text: 'No systematic overview of current regulatory changes.' },
            { level: 2, text: 'Changes tracked but QMS implementation lags behind.' },
            { level: 3, text: 'Regulatory requirements identified and systematically implemented in QMS.' },
            { level: 4, text: 'Proactive monitoring with gap analyses for every change, incl. MDSAP.' },
          ],
        },
        isoClause: '4.1.1',
        clauseTitle: { de: 'Allgemeine Anforderungen — regulatorische Anforderungen', en: 'General Requirements — regulatory requirements' },
        expectedEvidence: [
          { type: 'procedure', de: 'Verfahren zur Identifikation und Umsetzung regulatorischer Anforderungen', en: 'Procedure for identification and implementation of regulatory requirements' },
          { type: 'record', de: 'Register anwendbarer Vorschriften mit Umsetzungsstatus je QMS-Prozess', en: 'Register of applicable regulations with implementation status per QMS process' },
          { type: 'effectiveness', de: 'Nachweis zeitnaher Gap-Analysen bei regulatorischen Änderungen (z.B. MDR, QMSR)', en: 'Evidence of timely gap analyses upon regulatory changes (e.g. MDR, QMSR)' },
        ],
        auditRiskLevel: 'critical',
        scope: ['mdr', 'fda'],
        weight: 2.0,
        qmsrRef: '820.1',
        qmsrDelta: { de: 'QMSR erfordert expliziten Nachweis der Compliance mit 21 CFR 820 zusätzlich zu ISO 13485; FDA-Registration und Listing Pflicht', en: 'QMSR requires explicit evidence of compliance with 21 CFR 820 in addition to ISO 13485; FDA registration and listing mandatory' },
      },
      {
        id: 'rc-2',
        question: {
          de: 'Wie verwalten Sie die Technische Dokumentation Ihrer Produkte?',
          en: 'How do you manage the technical documentation of your products?',
        },
        options: {
          de: [
            { level: 1, text: 'Technische Dokumentation ist unvollständig oder nicht strukturiert zusammengestellt.' },
            { level: 2, text: 'Dokumentation existiert, entspricht aber nicht vollständig den Annex-Anforderungen der EU MDR.' },
            { level: 3, text: 'Vollständige Technische Dokumentation nach EU MDR Annex II/III mit regelmäßiger Aktualisierung.' },
            { level: 4, text: 'Modulare, wiederverwendbare TD-Struktur mit automatisierter Vollständigkeitsprüfung und Lifecycle-Management.' },
          ],
          en: [
            { level: 1, text: 'Technical documentation incomplete or not structured.' },
            { level: 2, text: 'Documentation exists but does not fully meet EU MDR Annex requirements.' },
            { level: 3, text: 'Complete technical documentation per EU MDR Annex II/III with regular updates.' },
            { level: 4, text: 'Modular, reusable TD structure with automated completeness checks and lifecycle management.' },
          ],
        },
        isoClause: '4.2.3',
        clauseTitle: { de: 'Medizinprodukte-Akte', en: 'Medical Device File' },
        expectedEvidence: [
          { type: 'procedure', de: 'Verfahren zur Erstellung und Pflege der Technischen Dokumentation nach Annex II/III', en: 'Procedure for creation and maintenance of technical documentation per Annex II/III' },
          { type: 'record', de: 'Vollständige Technische Dokumentation je Produkt mit Inhaltsverzeichnis und Versionierung', en: 'Complete technical documentation per product with table of contents and versioning' },
          { type: 'effectiveness', de: 'Vollständigkeitsprüfung gegen Annex-Checkliste; TD wird bei Änderungen aktualisiert', en: 'Completeness check against Annex checklist; TD updated upon changes' },
        ],
        auditRiskLevel: 'critical',
        scope: ['mdr'],
        weight: 2.0,
        qmsrRef: '820.184',
        qmsrDelta: { de: 'QMSR fordert Device Master Record (DMR) und Device History Record (DHR) als spezifische Dokumentationsstruktur', en: 'QMSR requires Device Master Record (DMR) and Device History Record (DHR) as specific documentation structure' },
      },
      {
        id: 'rc-3',
        question: {
          de: 'Wie bewerten Sie den Impact regulatorischer Änderungen auf Ihr QMS und Ihre Produkte?',
          en: 'How do you assess the impact of regulatory changes on your QMS and products?',
        },
        options: {
          de: [
            { level: 1, text: 'Regulatorische Änderungen werden nicht systematisch auf Auswirkungen analysiert.' },
            { level: 2, text: 'Impact wird fallweise bewertet, aber ohne definierten Prozess.' },
            { level: 3, text: 'Strukturierter Impact-Assessment-Prozess mit Verantwortlichkeiten und Umsetzungsplan.' },
            { level: 4, text: 'Automatisiertes Regulatory-Change-Management mit Workflow, Impact-Matrix und Deadline-Tracking.' },
          ],
          en: [
            { level: 1, text: 'Regulatory changes not systematically analyzed for impact.' },
            { level: 2, text: 'Impact assessed case by case but without defined process.' },
            { level: 3, text: 'Structured impact assessment process with responsibilities and implementation plan.' },
            { level: 4, text: 'Automated regulatory change management with workflow, impact matrix and deadline tracking.' },
          ],
        },
        isoClause: '4.1.1',
        clauseTitle: { de: 'Allgemeine Anforderungen — regulatorische Anforderungen', en: 'General Requirements — regulatory requirements' },
        expectedEvidence: [
          { type: 'procedure', de: 'Verfahren zur Impact-Bewertung regulatorischer Änderungen auf QMS und Produkte', en: 'Procedure for impact assessment of regulatory changes on QMS and products' },
          { type: 'record', de: 'Impact-Assessments mit betroffenen Prozessen, Maßnahmen und Umsetzungsfristen', en: 'Impact assessments with affected processes, actions and implementation deadlines' },
          { type: 'effectiveness', de: 'Nachweis fristgerechter Umsetzung; keine Audit-Findings wegen veralteter Compliance', en: 'Evidence of timely implementation; no audit findings due to outdated compliance' },
        ],
        auditRiskLevel: 'high',
        scope: ['mdr', 'fda'],
        weight: 1.5,
        qmsrRef: '820.1',
        qmsrDelta: null,
      },
    ],
  },
  {
    key: 'training-competence',
    icon: '🎓',
    clauseRef: 'ISO 13485 Kl. 6.2',
    label: { de: 'Schulung & Kompetenz', en: 'Training & Competence' },
    description: {
      de: 'Sicherstellung der Qualifikation und Kompetenz aller QMS-relevanten Mitarbeitenden.',
      en: 'Ensuring qualification and competence of all QMS-relevant staff.',
    },
    questions: [
      {
        id: 'tc-1',
        question: {
          de: 'Wie stellen Sie sicher, dass Mitarbeitende für QMS-relevante Aufgaben qualifiziert sind?',
          en: 'How do you ensure staff are qualified for QMS-relevant tasks?',
        },
        options: {
          de: [
            { level: 1, text: 'Schulungen erfolgen informell oder bei Bedarf; keine systematische Nachverfolgung.' },
            { level: 2, text: 'Schulungsplan existiert, aber Wirksamkeitsnachweise fehlen.' },
            { level: 3, text: 'Dokumentierter Prozess mit rollenbasierten Anforderungen, Wirksamkeitsprüfung und Nachweisführung.' },
            { level: 4, text: 'Kompetenzmanagement mit Skill-Matrix, E-Learning und Messung der Trainingseffektivität.' },
          ],
          en: [
            { level: 1, text: 'Training informal or on demand; no systematic tracking.' },
            { level: 2, text: 'Training plan exists but effectiveness evidence missing.' },
            { level: 3, text: 'Documented process with role-based requirements, effectiveness verification and record keeping.' },
            { level: 4, text: 'Competency management with skill matrix, e-learning and training effectiveness measurement.' },
          ],
        },
        isoClause: '6.2',
        clauseTitle: { de: 'Personelle Ressourcen', en: 'Human Resources' },
        expectedEvidence: [
          { type: 'procedure', de: 'Verfahren zur Ermittlung des Schulungsbedarfs und Kompetenzanforderungen je Rolle', en: 'Procedure for determining training needs and competence requirements per role' },
          { type: 'record', de: 'Schulungsnachweise (Teilnahme, Prüfung) und Qualifikationsmatrix', en: 'Training records (attendance, assessment) and qualification matrix' },
          { type: 'effectiveness', de: 'Nachweis der Wirksamkeitsprüfung je Schulung (Test, Beobachtung, Audit)', en: 'Evidence of effectiveness verification per training (test, observation, audit)' },
        ],
        auditRiskLevel: 'high',
        scope: ['all'],
        weight: 1.5,
        qmsrRef: '820.25',
        qmsrDelta: null,
      },
      {
        id: 'tc-2',
        question: {
          de: 'Wie dokumentieren und verwalten Sie Schulungsnachweise?',
          en: 'How do you document and manage training records?',
        },
        options: {
          de: [
            { level: 1, text: 'Schulungsnachweise liegen verstreut oder fehlen ganz.' },
            { level: 2, text: 'Nachweise werden gesammelt, aber zentrale Übersicht fehlt.' },
            { level: 3, text: 'Zentrales Schulungsregister mit Nachweisen, Gültigkeiten und Auffrischungszyklen.' },
            { level: 4, text: 'Digitales Trainingssystem mit automatischen Erinnerungen, Zertifikatsverwaltung und Compliance-Reporting.' },
          ],
          en: [
            { level: 1, text: 'Training records scattered or missing entirely.' },
            { level: 2, text: 'Records collected but central overview missing.' },
            { level: 3, text: 'Central training register with records, validity periods and refresher cycles.' },
            { level: 4, text: 'Digital training system with automatic reminders, certificate management and compliance reporting.' },
          ],
        },
        isoClause: '6.2',
        clauseTitle: { de: 'Personelle Ressourcen', en: 'Human Resources' },
        expectedEvidence: [
          { type: 'procedure', de: 'Verfahren zur Verwaltung und Aufbewahrung von Schulungsnachweisen', en: 'Procedure for management and retention of training records' },
          { type: 'record', de: 'Zentrales Schulungsregister mit Gültigkeiten und Auffrischungszyklen je Mitarbeitende/r', en: 'Central training register with validity periods and refresher cycles per employee' },
          { type: 'effectiveness', de: 'Keine Lücken bei Pflichtschulungen; Auffrischungen fristgerecht durchgeführt', en: 'No gaps in mandatory training; refreshers completed on time' },
        ],
        auditRiskLevel: 'medium',
        scope: ['all'],
        weight: 1.0,
        qmsrRef: '820.25',
        qmsrDelta: null,
      },
      {
        id: 'tc-3',
        question: {
          de: 'Wie messen Sie die Wirksamkeit Ihrer Schulungsmaßnahmen?',
          en: 'How do you measure the effectiveness of your training measures?',
        },
        options: {
          de: [
            { level: 1, text: 'Wirksamkeit wird nicht gemessen; Teilnahme gilt als ausreichend.' },
            { level: 2, text: 'Gelegentliche Tests oder Feedback-Bögen, aber keine systematische Auswertung.' },
            { level: 3, text: 'Definierte Wirksamkeitskriterien je Schulungstyp (Test, Beobachtung, Audit) mit dokumentierter Bewertung.' },
            { level: 4, text: 'Multi-Level-Evaluation (Kirkpatrick) mit Messung des Transfers in die Praxis und ROI-Betrachtung.' },
          ],
          en: [
            { level: 1, text: 'Effectiveness not measured; attendance considered sufficient.' },
            { level: 2, text: 'Occasional tests or feedback forms but no systematic analysis.' },
            { level: 3, text: 'Defined effectiveness criteria per training type (test, observation, audit) with documented assessment.' },
            { level: 4, text: 'Multi-level evaluation (Kirkpatrick) measuring transfer to practice and ROI consideration.' },
          ],
        },
        isoClause: '6.2',
        clauseTitle: { de: 'Personelle Ressourcen', en: 'Human Resources' },
        expectedEvidence: [
          { type: 'procedure', de: 'Verfahren zur Wirksamkeitsmessung mit definierten Methoden je Schulungstyp', en: 'Procedure for effectiveness measurement with defined methods per training type' },
          { type: 'record', de: 'Wirksamkeitsbewertungen (Testergebnisse, Beobachtungsprotokolle, Audit-Findings)', en: 'Effectiveness assessments (test results, observation records, audit findings)' },
          { type: 'effectiveness', de: 'Verbesserung der Kompetenz messbar; Fehlerrate in geschulten Bereichen sinkt', en: 'Measurable competence improvement; error rate in trained areas decreasing' },
        ],
        auditRiskLevel: 'medium',
        scope: ['all'],
        weight: 1.0,
        qmsrRef: '820.25',
        qmsrDelta: null,
      },
    ],
  },
  {
    key: 'post-market',
    icon: '📡',
    clauseRef: 'ISO 13485 Kl. 8.2.1 / EU MDR Art. 83-86',
    label: { de: 'Post-Market Surveillance', en: 'Post-Market Surveillance' },
    description: {
      de: 'Systematische Überwachung von Produkten nach dem Inverkehrbringen.',
      en: 'Systematic monitoring of products after placing on the market.',
    },
    questions: [
      {
        id: 'pms-1',
        question: {
          de: 'Wie überwachen Sie Ihre Produkte nach dem Inverkehrbringen?',
          en: 'How do you monitor your products after placing them on the market?',
        },
        options: {
          de: [
            { level: 1, text: 'Reklamationen werden bearbeitet, aber systematischer PMS-Prozess fehlt.' },
            { level: 2, text: 'Reklamationsmanagement dokumentiert; PMS-Plan existiert teilweise.' },
            { level: 3, text: 'Vollständiger PMS-Prozess mit PMCF-Plan, Vigilanz-Reporting und regelmäßigen PMS-Reports.' },
            { level: 4, text: 'Integriertes PMS mit proaktiver Datenauswertung, Trendanalyse, PSUR/PMSR und Risikomanagement-Rückkopplung.' },
          ],
          en: [
            { level: 1, text: 'Complaints handled but systematic PMS process missing.' },
            { level: 2, text: 'Complaint management documented; PMS plan partially exists.' },
            { level: 3, text: 'Complete PMS process with PMCF plan, vigilance reporting and regular PMS reports.' },
            { level: 4, text: 'Integrated PMS with proactive data analysis, trend monitoring, PSUR/PMSR and risk management feedback.' },
          ],
        },
        isoClause: '8.2.1',
        clauseTitle: { de: 'Rückmeldungen', en: 'Feedback' },
        expectedEvidence: [
          { type: 'procedure', de: 'PMS-Verfahren mit PMS-Plan, Datenquellen und Berichtszyklen', en: 'PMS procedure with PMS plan, data sources and reporting cycles' },
          { type: 'record', de: 'PMS-Reports, PMCF-Berichte und Vigilanz-Meldungen', en: 'PMS reports, PMCF reports and vigilance notifications' },
          { type: 'effectiveness', de: 'PMS-Daten fließen nachweislich in Risikomanagement und Produktverbesserung ein', en: 'PMS data demonstrably feeds into risk management and product improvement' },
        ],
        auditRiskLevel: 'critical',
        scope: ['mdr'],
        weight: 2.0,
        qmsrRef: '820.198',
        qmsrDelta: { de: 'QMSR: MDR-Reports (21 CFR 803) als Pflicht; PMS-Daten müssen in 510(k)/PMA-Submissions einfließen', en: 'QMSR: MDR reports (21 CFR 803) mandatory; PMS data must feed into 510(k)/PMA submissions' },
      },
      {
        id: 'pms-2',
        question: {
          de: 'Wie gehen Sie mit sicherheitsrelevanten Korrekturmaßnahmen im Feld (FSCA) um?',
          en: 'How do you handle field safety corrective actions (FSCA)?',
        },
        options: {
          de: [
            { level: 1, text: 'Kein definierter Prozess für Rückrufe oder Sicherheitskorrekturmaßnahmen.' },
            { level: 2, text: 'Grundlegender Prozess vorhanden, aber Meldefristen und Behördenkommunikation nicht vollständig definiert.' },
            { level: 3, text: 'Dokumentiertes FSCA-Verfahren mit Meldepflichten, Kommunikationsvorlagen und definierten Rollen.' },
            { level: 4, text: 'FSCA-Readiness mit regelmäßigen Übungen, vorbereiteten Vorlagen und integriertem Krisenmanagement.' },
          ],
          en: [
            { level: 1, text: 'No defined process for recalls or field safety corrective actions.' },
            { level: 2, text: 'Basic process exists but reporting timelines and authority communication not fully defined.' },
            { level: 3, text: 'Documented FSCA procedure with reporting obligations, communication templates and defined roles.' },
            { level: 4, text: 'FSCA readiness with regular drills, prepared templates and integrated crisis management.' },
          ],
        },
        isoClause: '8.2.3',
        clauseTitle: { de: 'Meldung an Behörden', en: 'Reporting to Regulatory Authorities' },
        expectedEvidence: [
          { type: 'procedure', de: 'FSCA-/Rückrufverfahren mit Meldefristen, Behördenkommunikation und Rollen', en: 'FSCA/recall procedure with reporting timelines, authority communication and roles' },
          { type: 'record', de: 'FSCA-Berichte, Behördenmeldungen und Kommunikationsnachweise', en: 'FSCA reports, authority notifications and communication evidence' },
          { type: 'effectiveness', de: 'Regelmäßige FSCA-Simulationen durchgeführt; Meldefristen eingehalten', en: 'Regular FSCA simulations conducted; reporting deadlines met' },
        ],
        auditRiskLevel: 'critical',
        scope: ['all'],
        weight: 2.0,
        qmsrRef: '820.198',
        qmsrDelta: { de: 'QMSR: FDA-Rückrufprozess unterscheidet sich von EU FSCA; FDA-Meldepflichten nach 21 CFR 806', en: 'QMSR: FDA recall process differs from EU FSCA; FDA reporting obligations per 21 CFR 806' },
      },
      {
        id: 'pms-3',
        question: {
          de: 'Wie integrieren Sie PMS-Daten in Ihr QMS und Risikomanagement?',
          en: 'How do you integrate PMS data into your QMS and risk management?',
        },
        options: {
          de: [
            { level: 1, text: 'PMS-Daten werden nicht systematisch in andere QMS-Prozesse zurückgespielt.' },
            { level: 2, text: 'Einzelne Erkenntnisse fließen ad-hoc ein, aber kein strukturierter Feedback-Loop.' },
            { level: 3, text: 'Definierter Prozess: PMS-Daten fließen in Risikomanagement, CAPA und Design-Feedback.' },
            { level: 4, text: 'Automatisierte Signaldetektion mit Rückkopplung in alle relevanten Prozesse und proaktive Produktverbesserung.' },
          ],
          en: [
            { level: 1, text: 'PMS data not systematically fed back into other QMS processes.' },
            { level: 2, text: 'Individual insights feed in ad-hoc but no structured feedback loop.' },
            { level: 3, text: 'Defined process: PMS data feeds into risk management, CAPA and design feedback.' },
            { level: 4, text: 'Automated signal detection with feedback into all relevant processes and proactive product improvement.' },
          ],
        },
        isoClause: '8.2.1',
        clauseTitle: { de: 'Rückmeldungen', en: 'Feedback' },
        expectedEvidence: [
          { type: 'procedure', de: 'Verfahren zur Rückkopplung von PMS-Daten in RM, CAPA und Design', en: 'Procedure for feeding PMS data back into RM, CAPA and design' },
          { type: 'record', de: 'Nachweise der Datenintegration: aktualisierte Risikoakten, CAPA-Trigger, Design-Änderungen', en: 'Evidence of data integration: updated risk files, CAPA triggers, design changes' },
          { type: 'effectiveness', de: 'Produktverbesserungen nachweislich aus PMS-Erkenntnissen abgeleitet', en: 'Product improvements demonstrably derived from PMS findings' },
        ],
        auditRiskLevel: 'high',
        scope: ['mdr'],
        weight: 1.5,
        qmsrRef: '820.198',
        qmsrDelta: null,
      },
    ],
  },
];


// ─── Assessment Profiles ─────────────────────────────────────────────────
export const assessmentProfiles = {
  iso13485: {
    key: 'iso13485',
    label: { de: 'ISO 13485', en: 'ISO 13485' },
    description: { de: 'Standard QMS-Bewertung', en: 'Standard QMS assessment' },
    weightMultipliers: {},  // default weights
    showQmsr: false,
    showMdr: false,
  },
  fdaQmsr: {
    key: 'fdaQmsr',
    label: { de: 'FDA QMSR', en: 'FDA QMSR' },
    description: { de: '21 CFR 820 QMSR Readiness', en: '21 CFR 820 QMSR Readiness' },
    weightMultipliers: {
      'capa-1': 1.25, 'capa-3': 1.25, 'dd-1': 1.25, 'dd-3': 1.25,
      'sm-2': 1.25, 'rc-1': 1.5, 'rc-2': 1.5, 'pms-1': 1.25, 'pms-2': 1.25,
    },
    showQmsr: true,
    showMdr: false,
  },
  euMdr: {
    key: 'euMdr',
    label: { de: 'EU MDR', en: 'EU MDR' },
    description: { de: 'EU MDR 2017/745 Compliance', en: 'EU MDR 2017/745 Compliance' },
    weightMultipliers: {
      'rc-1': 1.5, 'rc-2': 1.5, 'pms-1': 1.5, 'pms-2': 1.25, 'pms-3': 1.25,
    },
    showQmsr: false,
    showMdr: true,
  },
};


// ─── Flat list helper ───────────────────────────────────────────────────
export function getAllQuestions(locale) {
  const flat = [];
  categories.forEach((cat) => {
    cat.questions.forEach((q) => {
      flat.push({ ...q, category: cat.key, categoryLabel: cat.label[locale], categoryIcon: cat.icon, clauseRef: cat.clauseRef });
    });
  });
  return flat;
}

export function getTotalQuestionCount() {
  return categories.reduce((sum, cat) => sum + cat.questions.length, 0);
}


// ─── Scoring & Maturity Levels ──────────────────────────────────────────

export const maturityLevels = {
  critical:  { de: 'Kritisch',    en: 'Critical',    color: '#DC3545', bg: 'rgba(220,53,69,0.10)',  border: 'rgba(220,53,69,0.25)' },
  needsWork: { de: 'Ausbaufähig', en: 'Needs Work',  color: '#F59E0B', bg: 'rgba(245,158,11,0.10)', border: 'rgba(245,158,11,0.25)' },
  solid:     { de: 'Solide',      en: 'Solid',       color: '#84CC16', bg: 'rgba(132,204,22,0.10)', border: 'rgba(132,204,22,0.25)' },
  excellent: { de: 'Exzellent',   en: 'Excellent',   color: '#22C55E', bg: 'rgba(34,197,94,0.10)',  border: 'rgba(34,197,94,0.25)' },
};

export function getMaturityKey(pct) {
  if (pct <= 33) return 'critical';
  if (pct <= 55) return 'needsWork';
  if (pct <= 77) return 'solid';
  return 'excellent';
}


// ─── Live Results Calculation ───────────────────────────────────────────
// answers = { 'dc-1': 3, 'capa-2': 2, ... } — sparse object, only answered questions

export function calculateResults(answers) {
  const catResults = [];
  let totalScore = 0;
  let totalAnswered = 0;

  categories.forEach((cat) => {
    const answered = [];
    cat.questions.forEach((q) => {
      if (answers[q.id] !== undefined) {
        answered.push(answers[q.id]);
        totalScore += answers[q.id];
        totalAnswered++;
      }
    });

    const avg = answered.length > 0 ? answered.reduce((a, b) => a + b, 0) / answered.length : null;
    const pct = avg !== null ? Math.round(((avg - 1) / 3) * 100) : null;

    catResults.push({
      key: cat.key,
      icon: cat.icon,
      answeredCount: answered.length,
      totalCount: cat.questions.length,
      avgScore: avg,
      percentScore: pct,
      maturityKey: pct !== null ? getMaturityKey(pct) : null,
    });
  });

  // Overall
  const overallAvg = totalAnswered > 0 ? totalScore / totalAnswered : null;
  const overallPct = overallAvg !== null ? Math.round(((overallAvg - 1) / 3) * 100) : null;

  // Top gaps (lowest scoring categories that have been answered)
  const assessed = catResults.filter((c) => c.percentScore !== null);
  const sorted = [...assessed].sort((a, b) => a.percentScore - b.percentScore);
  const topGaps = sorted.slice(0, 3);

  return {
    totalAnswered,
    totalQuestions: getTotalQuestionCount(),
    overallScore: overallPct,
    overallMaturity: overallPct !== null ? getMaturityKey(overallPct) : null,
    categories: catResults,
    topGaps,
  };
}


// ─── UI Strings ─────────────────────────────────────────────────────────

export const ui = {
  de: {
    pageTitle: 'ISO 13485 Readiness Check',
    pageSubtitle: 'Bewerten Sie Ihr QMS — so detailliert wie Sie möchten.',
    questionsAnswered: '{n} von {total} beantwortet',
    overallScore: 'Gesamt-Score',
    categoryScores: 'Kategorien',
    topGaps: 'Schwächste Bereiche',
    notAssessed: 'Nicht bewertet',
    premiumExport: 'PDF-Report exportieren',
    premiumTodos: 'Maßnahmenplan generieren',
    premiumSave: 'Ergebnisse speichern & vergleichen',
    premiumHint: 'Premium — verfügbar als Teil unserer Beratungsleistung',
    premiumDetailRecs: 'Detaillierte Empfehlungen',
    ctaConsulting: 'Kostenlose 20-Min. Gap-Analyse',
    ctaContact: '/kontakt',
    selectAnswer: 'Wählen Sie eine Antwort',
    levelLabels: ['', 'Reaktiv', 'Definiert', 'Etabliert', 'Optimierend'],
    resetAll: 'Alle Antworten zurücksetzen',
    seoTitle: 'Wo Ihr nächstes Audit weh tut \u2014 ISO 13485 Readiness Check | QCore',
    seoDescription: 'Kostenloser ISO 13485 Readiness Check: Identifizieren Sie Ihre QMS-Schwachstellen in 10 Minuten. 27 Fragen, 9 Kategorien, sofortige Gap-Analyse mit Maßnahmenplan. 100% anonym, kein Login.',
    startHint: 'Klicken Sie auf eine Kategorie, um mit der Bewertung zu beginnen.',
    expandAll: 'Alle aufklappen',
    collapseAll: 'Alle zuklappen',
    // Intro / Landing
    introHeadline: 'Wo Ihr nächstes Audit weh tut \u2014 in 10 Minuten herausfinden',
    introSubline: 'Kostenloses Self-Assessment für QM-Verantwortliche in der Medizintechnik. 27 Fragen. 9 Kategorien. Sofortige Gap-Analyse.',
    introFeatures: [
      { icon: '\uD83C\uDFAF', title: '27 Fragen, 9 Kategorien', desc: 'Basierend auf den pr\u00fcfungsrelevantesten Klauseln der ISO 13485:2016.' },
      { icon: '\uD83D\uDCCA', title: 'Sofort-Ergebnis mit Gap-Analyse', desc: 'Score pro Kategorie, Maturity-Level, priorisierter Ma\u00dfnahmenplan \u2014 keine Wartezeit.' },
      { icon: '\uD83D\uDD12', title: '100% lokal in Ihrem Browser', desc: 'Kein Login, kein Upload, keine Datenspeicherung auf Servern. Ihre Daten geh\u00f6ren Ihnen.' },
      { icon: '\uD83C\uDFE5', title: 'Optional: FDA QMSR & EU MDR', desc: 'Erweitern Sie das Assessment um FDA 21 CFR 820 (QMSR) oder EU MDR 2017/745 Anforderungen.' },
    ],
    introForWhom: 'F\u00fcr wen ist das?',
    introForWhomList: [
      'QMBs die ein internes Pre-Audit vor der Zertifizierung durchf\u00fchren',
      'Gesch\u00e4ftsf\u00fchrer die den Reifegrad ihres QMS einsch\u00e4tzen wollen',
      'Berater die den Ist-Zustand beim Kunden schnell erfassen m\u00fcssen',
    ],
    introHowTitle: 'So funktioniert es',
    introHowSteps: [
      { step: '1', title: 'Profil wählen', desc: 'ISO 13485, FDA QMSR oder EU MDR — wählen Sie Ihren Regulierungskontext im Header.' },
      { step: '2', title: 'Fragen beantworten', desc: '27 Fragen, 4 Reifegrad-Stufen — von „nicht vorhanden" bis „kontinuierlich verbessert".' },
      { step: '3', title: 'Ergebnisse nutzen', desc: 'Gap-Backlog, Maßnahmenplan und PDF-Report — alles sofort verfügbar.' },
    ],
    introCta: 'Jetzt starten',
    transparencyNote: '100% anonym & kostenlos. Keine Daten verlassen Ihren Browser. Kein Login. Kein Account. Wir finanzieren dieses Tool durch den Verkauf unserer Premium-Dokumentenvorlagen für QM-Profis.',
    // Hero
    heroSubline: 'Finden Sie in 10 Minuten heraus, welche Bereiche Ihres QMS die nächste Auditierung nicht überstehen — und was Sie zuerst angehen sollten.',
    heroTrust: ['Alle Daten bleiben in Ihrem Browser', 'Keine Anmeldung', 'Kostenlos', '~10 Minuten'],
    heroProfileLabel: 'Profil wählen:',
    heroProfileNew: 'NEU',
    // QMSR Banner
    qmsrBanner: 'Seit 02/2026: FDA QMSR in Kraft — ISO 13485 wird Pflicht für US-Exporte.',
    qmsrBannerLink: 'Jetzt QMSR-Readiness prüfen',
    // Preview (right column)
    previewScore: 'Handlungsbedarf',
    previewGapLabel: 'Prioritäre Gaps',
    previewGaps: [
      { risk: 'critical', cat: 'CAPA-Prozess', clause: 'Kl. 8.5.2' },
      { risk: 'high', cat: 'Design & Entwicklung', clause: 'Kl. 7.3' },
      { risk: 'medium', cat: 'Audit & Review', clause: 'Kl. 8.2.4' },
    ],
    // What You Get
    whatYouGetTitle: 'Was Sie erhalten',
    whatYouGet1Title: 'Gap-Analyse',
    whatYouGet1Desc: 'Priorisierte Schwachstellen, sortiert nach Audit-Risiko (Critical → Low).',
    whatYouGet2Title: 'Maßnahmenplan',
    whatYouGet2Desc: 'Konkrete nächste Schritte für jede Lücke — editierbar.',
    whatYouGet3Title: 'PDF-Report',
    whatYouGet3Desc: 'Kompletter Report zum Teilen mit Ihrem Team — lokal generiert.',
    // 9 Categories
    categoriesTitle: 'Geprüfte Kategorien',
    categoriesSubtitle: 'ISO 13485:2016',
    // FAQ (2 items — data/profile questions handled by tooltips & trust line)
    faqTitle: 'Häufige Fragen',
    faqItems: [
      { q: 'Wie lange dauert das Assessment?', a: 'Ca. 10 Minuten. Sie können jederzeit unterbrechen — Ihr Fortschritt wird automatisch im Browser gespeichert.' },
      { q: 'Ist das wirklich kostenlos?', a: 'Ja. Das Assessment, die Auswertung und der PDF-Export sind vollständig kostenlos. Wir bieten ergänzend professionelle QM-Dokumentenvorlagen an — damit finanzieren wir dieses Tool.' },
    ],
    // Notes
    notePlaceholder: 'Eigene Evidenz-Referenz, z.B. SOP-005',
    // Gap Backlog
    gapBacklog: 'Gap-Backlog',
    gapCategory: 'Kategorie',
    gapQuestion: 'Frage',
    gapClause: 'ISO-Klausel',
    gapEvidence: 'Fehlende Evidenz',
    gapRisk: 'Audit-Risiko',
    gapScore: 'Score',
    gapNote: 'Notiz',
    gapEmpty: 'Keine Gaps gefunden. Alle bewerteten Fragen haben Score > 2.',
    gapNoData: 'Noch keine Bewertungen vorhanden.',
    evidenceProcedure: 'Verfahren',
    evidenceRecord: 'Aufzeichnung',
    evidenceEffectiveness: 'Wirksamkeit',
    // Tabs
    tabRadar: 'Radar',
    tabGaps: 'Gap-Backlog',
    tabTrend: 'Trend',
    // Profile Switcher
    profileLabel: 'Profil',
    // QMSR
    qmsrDelta: 'QMSR-Abweichung',
    // Privacy
    privacyBadge: 'Ihre Daten bleiben in Ihrem Browser. Kein Upload. Kein Account.',
    // Trend
    trendTitle: 'Score-Trend',
    trendEmpty: 'Noch keine gespeicherten Assessments. Ergebnisse werden automatisch gespeichert.',
    trendDate: 'Datum',
    trendOverall: 'Gesamt',
    trendSave: 'Aktuellen Stand speichern',
    trendSaved: 'Gespeichert!',
    trendClear: 'Verlauf l\u00f6schen',
    // Risk labels
    riskCritical: 'Kritisch',
    riskHigh: 'Hoch',
    riskMedium: 'Mittel',
    riskLow: 'Niedrig',
    // Action Plan
    actionPlanTitle: 'Maßnahmenplan',
    actionPlanEmpty: 'Keine Maßnahmen erforderlich — alle bewerteten Bereiche liegen über Level 2.',
    actionPlanMeasure: 'Maßnahme',
    actionPlanResponsible: 'Verantwortlich',
    actionPlanDeadline: 'Termin',
    actionPlanPriority: 'Priorität',
    actionPlanNoData: 'Bitte mindestens eine Frage beantworten.',
    // Recommendations
    recsTitle: 'Detaillierte Empfehlungen',
    recsEmpty: 'Keine Empfehlungen — alle bewerteten Kategorien liegen über 75%.',
    recsNoData: 'Bitte mindestens eine Frage beantworten.',
    recsRecommended: 'Empfohlene Maßnahmen',
    recsIsoRef: 'ISO-Referenz',
    // PDF
    pdfExport: 'PDF-Report exportieren',
    pdfGenerating: 'PDF wird erstellt...',
    pdfTitle: 'ISO 13485 Readiness Assessment — Report',
    pdfGenerated: 'Dieses PDF wurde lokal in Ihrem Browser generiert. Keine Daten wurden übertragen.',
    // Navigation
    backToResults: '← Zurück',
  },
  en: {
    pageTitle: 'ISO 13485 Readiness Check',
    pageSubtitle: 'Assess your QMS \u2014 as detailed as you like.',
    questionsAnswered: '{n} of {total} answered',
    overallScore: 'Overall Score',
    categoryScores: 'Categories',
    topGaps: 'Weakest Areas',
    notAssessed: 'Not assessed',
    premiumExport: 'Export PDF report',
    premiumTodos: 'Generate action plan',
    premiumSave: 'Save & compare results',
    premiumHint: 'Premium \u2014 available as part of our consulting services',
    premiumDetailRecs: 'Detailed recommendations',
    ctaConsulting: 'Free 20-min gap analysis',
    ctaContact: '/kontakt',
    selectAnswer: 'Select an answer',
    levelLabels: ['', 'Reactive', 'Defined', 'Established', 'Optimizing'],
    resetAll: 'Reset all answers',
    seoTitle: 'Where Your Next Audit Will Hurt \u2014 ISO 13485 Readiness Check | QCore',
    seoDescription: 'Free ISO 13485 Readiness Check: Identify your QMS weaknesses in 10 minutes. 27 questions, 9 categories, instant gap analysis with action plan. 100% anonymous, no login.',
    startHint: 'Click a category to start the assessment.',
    expandAll: 'Expand all',
    collapseAll: 'Collapse all',
    // Intro / Landing
    introHeadline: 'Where Your Next Audit Will Hurt \u2014 Find Out in 10 Minutes',
    introSubline: 'Free self-assessment for quality managers in medical devices. 27 questions. 9 categories. Instant gap analysis.',
    introFeatures: [
      { icon: '\uD83C\uDFAF', title: '27 Questions, 9 Categories', desc: 'Based on the most audit-relevant clauses of ISO 13485:2016.' },
      { icon: '\uD83D\uDCCA', title: 'Instant Results with Gap Analysis', desc: 'Score per category, maturity level, prioritized action plan \u2014 no waiting.' },
      { icon: '\uD83D\uDD12', title: '100% Local in Your Browser', desc: 'No login, no upload, no server-side data storage. Your data stays yours.' },
      { icon: '\uD83C\uDFE5', title: 'Optional: FDA QMSR & EU MDR', desc: 'Extend the assessment with FDA 21 CFR 820 (QMSR) or EU MDR 2017/745 requirements.' },
    ],
    introForWhom: 'Who is this for?',
    introForWhomList: [
      'QM managers preparing for an internal pre-audit before certification',
      'Executives who want to assess their QMS maturity level',
      'Consultants who need to quickly capture a client\u2019s current state',
    ],
    introHowTitle: 'How it works',
    introHowSteps: [
      { step: '1', title: 'Choose profile', desc: 'ISO 13485, FDA QMSR or EU MDR — select your regulatory context in the header.' },
      { step: '2', title: 'Answer questions', desc: '27 questions, 4 maturity levels — from "not established" to "continuously improved".' },
      { step: '3', title: 'Use the results', desc: 'Gap backlog, action plan and PDF report — all instantly available.' },
    ],
    introCta: 'Get started',
    transparencyNote: '100% anonymous & free. No data leaves your browser. No login. No account required. We fund this tool through sales of our premium document templates for QM professionals.',
    // Hero
    heroSubline: 'Find out in 10 minutes which areas of your QMS won\'t survive the next audit — and what to tackle first.',
    heroTrust: ['All data stays in your browser', 'No login required', 'Free', '~10 minutes'],
    heroProfileLabel: 'Choose profile:',
    heroProfileNew: 'NEW',
    // QMSR Banner
    qmsrBanner: 'Since 02/2026: FDA QMSR in effect — ISO 13485 now mandatory for US exports.',
    qmsrBannerLink: 'Check your QMSR readiness now',
    // Preview (right column)
    previewScore: 'Needs Action',
    previewGapLabel: 'Priority Gaps',
    previewGaps: [
      { risk: 'critical', cat: 'CAPA Process', clause: 'Cl. 8.5.2' },
      { risk: 'high', cat: 'Design & Development', clause: 'Cl. 7.3' },
      { risk: 'medium', cat: 'Audit & Review', clause: 'Cl. 8.2.4' },
    ],
    // What You Get
    whatYouGetTitle: 'What you get',
    whatYouGet1Title: 'Gap Analysis',
    whatYouGet1Desc: 'Prioritized weaknesses, sorted by audit risk (Critical → Low).',
    whatYouGet2Title: 'Action Plan',
    whatYouGet2Desc: 'Concrete next steps for each gap — editable.',
    whatYouGet3Title: 'PDF Report',
    whatYouGet3Desc: 'Complete report to share with your team — generated locally.',
    // 9 Categories
    categoriesTitle: 'Assessed Categories',
    categoriesSubtitle: 'ISO 13485:2016',
    // FAQ (2 items)
    faqTitle: 'Frequently Asked Questions',
    faqItems: [
      { q: 'How long does the assessment take?', a: 'About 10 minutes. You can pause anytime — your progress is automatically saved in the browser.' },
      { q: 'Is it really free?', a: 'Yes. The assessment, evaluation and PDF export are completely free. We also offer professional QM document templates — that\'s how we fund this tool.' },
    ],
    // Notes
    notePlaceholder: 'Your evidence reference, e.g. SOP-005',
    // Gap Backlog
    gapBacklog: 'Gap Backlog',
    gapCategory: 'Category',
    gapQuestion: 'Question',
    gapClause: 'ISO Clause',
    gapEvidence: 'Missing Evidence',
    gapRisk: 'Audit Risk',
    gapScore: 'Score',
    gapNote: 'Note',
    gapEmpty: 'No gaps found. All assessed questions scored > 2.',
    gapNoData: 'No assessments yet.',
    evidenceProcedure: 'Procedure',
    evidenceRecord: 'Record',
    evidenceEffectiveness: 'Effectiveness',
    // Tabs
    tabRadar: 'Radar',
    tabGaps: 'Gap Backlog',
    tabTrend: 'Trend',
    // Profile Switcher
    profileLabel: 'Profile',
    // QMSR
    qmsrDelta: 'QMSR Deviation',
    // Privacy
    privacyBadge: 'Your data stays in your browser. No upload. No account required.',
    // Trend
    trendTitle: 'Score Trend',
    trendEmpty: 'No saved assessments yet. Results are saved automatically.',
    trendDate: 'Date',
    trendOverall: 'Overall',
    trendSave: 'Save current state',
    trendSaved: 'Saved!',
    trendClear: 'Clear history',
    // Risk labels
    riskCritical: 'Critical',
    riskHigh: 'High',
    riskMedium: 'Medium',
    riskLow: 'Low',
    // Action Plan
    actionPlanTitle: 'Action Plan',
    actionPlanEmpty: 'No actions required — all assessed areas are above Level 2.',
    actionPlanMeasure: 'Action',
    actionPlanResponsible: 'Responsible',
    actionPlanDeadline: 'Deadline',
    actionPlanPriority: 'Priority',
    actionPlanNoData: 'Please answer at least one question.',
    // Recommendations
    recsTitle: 'Detailed Recommendations',
    recsEmpty: 'No recommendations — all assessed categories are above 75%.',
    recsNoData: 'Please answer at least one question.',
    recsRecommended: 'Recommended Actions',
    recsIsoRef: 'ISO Reference',
    // PDF
    pdfExport: 'Export PDF report',
    pdfGenerating: 'Generating PDF...',
    pdfTitle: 'ISO 13485 Readiness Assessment — Report',
    pdfGenerated: 'This PDF was generated locally in your browser. No data was transmitted.',
    // Navigation
    backToResults: '← Back',
  },
};


// ─── Radar-Chart short labels ───────────────────────────────────────────
export const radarLabels = {
  de: {
    'document-control': 'Dokumente',
    'capa': 'CAPA',
    'risk-management': 'Risiko',
    'design-development': 'Design',
    'supplier-management': 'Lieferanten',
    'audit-mgmt-review': 'Audit & Review',
    'regulatory-compliance': 'Regulatorik',
    'training-competence': 'Schulung',
    'post-market': 'PMS',
  },
  en: {
    'document-control': 'Documents',
    'capa': 'CAPA',
    'risk-management': 'Risk',
    'design-development': 'Design',
    'supplier-management': 'Suppliers',
    'audit-mgmt-review': 'Audit & Review',
    'regulatory-compliance': 'Regulatory',
    'training-competence': 'Training',
    'post-market': 'PMS',
  },
};
