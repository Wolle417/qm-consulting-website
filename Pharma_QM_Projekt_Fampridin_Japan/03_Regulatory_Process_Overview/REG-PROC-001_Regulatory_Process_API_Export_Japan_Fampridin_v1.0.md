# Regulatorischer Prozess: API-Export nach Japan
## Am Beispiel Fampridin (4-Aminopyridin)

**Produkt:** Fampridin (4-Aminopyridin)  
**CAS:** 504-24-5  
**Qualitätsstandard:** GMP, DAC  
**Zielmarkt:** Japan (PMDA-Zulassung)  
**Beispiel-Implementierung:** API-Herstellung in Deutschland, Export nach Japan

---

## ÜBERSICHT: DIE HAUPTPHASEN

```
Phase 1: Produktionsstätte aufbauen & qualifizieren (6-12 Monate)
Phase 2: Herstellungsprozess entwickeln & validieren (3-6 Monate)
Phase 3: EU-GMP-Zertifizierung erhalten (3-6 Monate)
Phase 4: Drug Master File bei PMDA einreichen (2-4 Monate)
Phase 5: PMDA-Inspektion & Genehmigung (6-12 Monate)

GESAMT: 20-40 Monate vom Start bis zur Export-Genehmigung
```

---

## PHASE 1: PRODUKTIONSSTÄTTE AUFBAUEN & QUALIFIZIEREN

### 1.1 PLANUNGSPHASE

**Aktivitäten:**
- Produktionsstätte in Luckenwalde planen
- Räumlichkeiten nach GMP-Anforderungen designen
- HVAC-System, Wassersystem, Produktionsausrüstung spezifizieren

**Dokumente erstellt:**
- [ ] **User Requirement Specification (URS) - HVAC-System**
  - Anforderungen: Überdruck, Luftwechselrate, Partikelkontrolle
  - Regulatorische Basis: EU GMP Annex 1, ICH Q7
  
- [ ] **User Requirement Specification (URS) - Wassersystem**
  - Anforderungen: Purified Water, WFI (Water for Injection)?
  - Regulatorische Basis: Ph. Eur., ICH Q7
  
- [ ] **User Requirement Specification (URS) - Produktionsreaktoren**
  - Anforderungen: Material, Temperaturkontrolle, Reinigbarkeit
  
- [ ] **Facility Design Drawings**
  - Grundrisse, Zonenkonzept (Grau/Schwarz/Weiß-Bereiche)
  
- [ ] **Risk Assessment - Facility Design**
  - FMEA oder HAZOP für Kreuzkontaminationsrisiken

**Anwendbare Regularien:**
- EU GMP Teil I (Grundlagen)
- EU GMP Annex 1 (Herstellung steriler Arzneimittel - falls zutreffend)
- ICH Q7 (Good Manufacturing Practice für Wirkstoffe)
- ICH Q9 (Quality Risk Management)

---

### 1.2 BAUPHASE

**Aktivitäten:**
- Produktionsstätte bauen
- HVAC-System installieren (durch Wiesag oder ähnlichen Anbieter)
- Wassersystem installieren
- Produktionsausrüstung installieren

**Dokumente erstellt:**
- [ ] **Installation Qualification (IQ) - HVAC-System**
  - Nachweis: System ist gemäß Spezifikation installiert
  - Checklisten, Fotos, Komponentenlisten, Kalibrierzertifikate
  
- [ ] **Installation Qualification (IQ) - Wassersystem**
  
- [ ] **Installation Qualification (IQ) - Produktionsreaktoren**
  
- [ ] **Installation Qualification (IQ) - Analytik (HPLC)**

**Anwendbare Regularien:**
- EU GMP Annex 15 (Qualifizierung und Validierung)
- ISPE Baseline Guide (Industry Standard für Commissioning & Qualification)

---

### 1.3 QUALIFIZIERUNGSPHASE

**Aktivitäten:**
- Systeme testen (funktionieren sie wie spezifiziert?)
- Performance über längeren Zeitraum nachweisen

**Dokumente erstellt:**

#### HVAC-System:
- [ ] **Design Qualification (DQ) - HVAC**
  - Nachweis: Design erfüllt alle Requirements (URS)
  - Mapping: Requirement → Design-Element → Rationale
  
- [ ] **Operational Qualification (OQ) - HVAC**
  - Nachweis: System funktioniert wie spezifiziert
  - Tests: Luftwechselrate, Überdruck, HEPA-Integrität, Alarmfunktion
  
- [ ] **Performance Qualification (PQ) - HVAC**
  - Nachweis: System erfüllt langfristig Anforderungen
  - 30 Tage kontinuierlicher Betrieb, Worst-Case-Szenarien
  
- [ ] **Validation Report - HVAC**
  - Zusammenfassung DQ/IQ/OQ/PQ, Conclusion: System qualifiziert

#### Wassersystem:
- [ ] **Design Qualification (DQ) - Wassersystem**
- [ ] **Operational Qualification (OQ) - Wassersystem**
- [ ] **Performance Qualification (PQ) - Wassersystem**
- [ ] **Validation Report - Wassersystem**

#### Produktionsreaktoren:
- [ ] **Design Qualification (DQ) - Reaktoren**
- [ ] **Operational Qualification (OQ) - Reaktoren**
- [ ] **Performance Qualification (PQ) - Reaktoren**
- [ ] **Validation Report - Reaktoren**

#### Analytik (HPLC):
- [ ] **Installation/Operational/Performance Qualification - HPLC**
- [ ] **Analytical Method Validation - HPLC für Fampridin**
  - Spezifität, Linearität, Genauigkeit, Präzision, Robustheit
  - Gemäß ICH Q2(R1)

**Anwendbare Regularien:**
- EU GMP Annex 15 (Qualifizierung und Validierung)
- ICH Q2(R1) (Validation of Analytical Procedures)
- ISPE Baseline Guide Volume 5 (Commissioning and Qualification)

---

### 1.4 REINRAUMKLASSIFIZIERUNG

**Aktivitäten:**
- Reinräume klassifizieren (ISO 7, ISO 8, etc.)
- Partikelzählung, Luftströmungsvisualisierung

**Dokumente erstellt:**
- [ ] **Cleanroom Classification Report**
  - Nachweis: Räume erfüllen ISO 14644-1 Klassifizierung
  - Partikelzählung at-rest und in-operation
  
- [ ] **Environmental Monitoring Plan**
  - Wie wird Raumluftqualität kontinuierlich überwacht?
  - Partikel, Mikrobiologie, Druck, Temperatur, Feuchte

**Anwendbare Regularien:**
- ISO 14644-1 (Klassifizierung von Reinräumen)
- ISO 14644-2 (Überwachung von Reinräumen)
- EU GMP Annex 1 (falls sterile Produktion)

---

## PHASE 2: HERSTELLUNGSPROZESS ENTWICKELN & VALIDIEREN

### 2.1 PROZESSENTWICKLUNG

**Aktivitäten:**
- Synthese-Route für Fampridin entwickeln
- Critical Process Parameters (CPP) identifizieren
- In-Process Controls definieren

**Dokumente erstellt:**
- [ ] **Manufacturing Process Description**
  - Syntheseroute, Reaktionsbedingungen, Rohstoffe
  - Process Flow Diagram
  
- [ ] **Critical Process Parameters (CPP) Identification**
  - Temperatur, Druck, pH, Reaktionszeit, etc.
  
- [ ] **Risk Assessment - Manufacturing Process**
  - FMEA: Welche Prozessschritte sind kritisch?
  
- [ ] **Standard Operating Procedures (SOPs)**
  - SOP-001: Fampridin-Synthese
  - SOP-002: Reinigung von Produktionsausrüstung
  - SOP-003: Probenahme
  - SOP-004: Umgang mit Abweichungen
  - SOP-005: Change Control
  - ... (20-30 SOPs für kompletten Betrieb)

**Anwendbare Regularien:**
- ICH Q11 (Development and Manufacture of Drug Substances)
- ICH Q8 (Pharmaceutical Development)
- ICH Q9 (Quality Risk Management)

---

### 2.2 PROZESS-VALIDIERUNG

**Aktivitäten:**
- 3 Chargen im kommerziellen Maßstab herstellen
- Nachweis: Prozess ist reproduzierbar und kontrolliert

**Dokumente erstellt:**
- [ ] **Process Validation Protocol - Fampridin**
  - Welche Parameter werden überwacht?
  - Akzeptanzkriterien für jede Charge
  
- [ ] **Batch Records - Charge 001, 002, 003**
  - Dokumentation aller Prozessschritte
  - Alle In-Process-Controls, Abweichungen
  
- [ ] **Process Validation Report - Fampridin**
  - Zusammenfassung 3 Chargen
  - Statistische Auswertung
  - Conclusion: Prozess ist validiert

**Anwendbare Regularien:**
- EU GMP Annex 15 (Qualification and Validation)
- ICH Q7 Section 12 (Validation)
- FDA Guidance "Process Validation" (2011)

---

### 2.3 QUALITÄTSKONTROLLE

**Aktivitäten:**
- Spezifikation für Fampridin definieren
- Analytik-Methoden validieren
- Batch-Analysen durchführen

**Dokumente erstellt:**
- [ ] **Specification - Fampridin Drug Substance**
  - Identität (IR, NMR, MS)
  - Reinheit (HPLC: ≥99.5%)
  - Verunreinigungen (Einzelverunreinigung ≤0.1%, gesamt ≤0.5%)
  - Wassergehalt (Karl-Fischer)
  - Restlösungsmittel (GC)
  - Partikelgröße
  - Mikrobiologie (Keimzahl)
  
- [ ] **Analytical Method Validation - HPLC**
  - Spezifität, Linearität, Präzision, Genauigkeit, Robustheit
  - Gemäß ICH Q2(R1)
  
- [ ] **Analytical Method Validation - IR, NMR, MS**
  
- [ ] **Certificate of Analysis (CoA) - Charge 001, 002, 003**
  - Testergebnisse für alle Spezifikationsparameter

**Anwendbare Regularien:**
- ICH Q6A (Specifications: Test Procedures and Acceptance Criteria)
- ICH Q2(R1) (Validation of Analytical Procedures)
- Ph. Eur. (Europäisches Arzneibuch - falls Monographie existiert)
- DAC (Deutscher Arzneimittel-Codex)

---

### 2.4 STABILITÄTSUNTERSUCHUNGEN

**Aktivitäten:**
- Fampridin unter verschiedenen Bedingungen lagern
- Regelmäßig testen (0, 3, 6, 12, 24 Monate)
- Haltbarkeit/Re-Test-Date bestimmen

**Dokumente erstellt:**
- [ ] **Stability Study Protocol - Fampridin**
  - Long-term: 25°C / 60% RH (24 Monate)
  - Accelerated: 40°C / 75% RH (6 Monate)
  - Testfrequenz, Parameter
  
- [ ] **Stability Study Report - Fampridin**
  - Ergebnisse über 24 Monate
  - Statistische Auswertung (Degradation Kinetics)
  - Vorgeschlagene Haltbarkeit: z.B. 36 Monate

**Anwendbare Regularien:**
- ICH Q1A (Stability Testing of New Drug Substances)
- ICH Q1E (Evaluation of Stability Data)

---

## PHASE 3: EU-GMP-ZERTIFIZIERUNG ERHALTEN

### 3.1 QUALITÄTSMANAGEMENTSYSTEM AUFBAUEN

**Aktivitäten:**
- QM-System nach ISO 9001 / GMP aufbauen
- Dokumentenmanagement, Deviation Management, CAPA, Change Control

**Dokumente erstellt:**
- [ ] **Quality Manual**
  - Überblick über QM-System, Verantwortlichkeiten
  
- [ ] **SOPs für QM-Prozesse:**
  - Dokumentenkontrolle
  - Change Control
  - Deviation Management
  - CAPA (Corrective and Preventive Action)
  - Complaint Management
  - Supplier Qualification
  - Internal Audits
  - Management Review
  
- [ ] **Master Validation Plan**
  - Überblick: Was wird validiert? Wann? Von wem?

**Anwendbare Regularien:**
- EU GMP Teil I & II
- ICH Q10 (Pharmaceutical Quality System)

---

### 3.2 GMP-AUDIT (LANDESAMT BRANDENBURG)

**Aktivitäten:**
- GMP-Inspektion durch Landesamt Brandenburg beantragen
- Inspektoren kommen nach Luckenwalde
- Sie prüfen: Räume, Dokumente, Prozesse

**Was Inspektoren prüfen:**
- Sind Räume GMP-konform?
- Sind alle Anlagen qualifiziert?
- Werden SOPs befolgt?
- Ist Dokumentation vollständig?
- Gibt es Abweichungen? Wie wurden sie behandelt?
- Schulungen der Mitarbeiter dokumentiert?

**Dokumente die vorgelegt werden müssen:**
- Alle Validation Reports (HVAC, Wasser, Reaktoren, HPLC)
- Process Validation Report
- Analytical Method Validations
- Batch Records
- SOPs
- Deviation Reports & CAPAs
- Training Records
- Supplier Qualifications

**Ergebnis:**
- [ ] **GMP-Zertifikat (EU)**
  - Gültig für 3 Jahre
  - Erlaubt API-Herstellung in EU

**Anwendbare Regularien:**
- EU GMP (gesamter Leitfaden)
- ICH Q7 (GMP für APIs)

---

## PHASE 4: DRUG MASTER FILE BEI PMDA EINREICHEN

### 4.1 DMF ERSTELLEN (TYPE II - API)

**Aktivitäten:**
- Drug Master File nach CTD-Format erstellen
- Alle technischen Details zu Fampridin-Herstellung

**Dokumente erstellt:**
- [ ] **Drug Master File (DMF) - Fampridin**

**Struktur des DMF (entspricht CTD Module 3.2.S):**

#### 3.2.S.1 General Information
- Name: Fampridin (INN), 4-Aminopyridin
- Struktur, Molekularformel, Molekulargewicht
- CAS-Nummer: 504-24-5

#### 3.2.S.2 Manufacture
- **3.2.S.2.1 Manufacturer:**
  - StefanCon GmbH, Luckenwalde, Deutschland
  - GMP-Zertifikat (Referenz)
  
- **3.2.S.2.2 Description of Manufacturing Process:**
  - Syntheseroute (Reaktionsschema)
  - Process Flow Diagram
  - Kritische Prozessschritte
  - In-Process Controls
  - Prozess-Validierung (Referenz auf Validation Report)
  
- **3.2.S.2.3 Control of Materials:**
  - Rohstoffe (Spezifikationen, Lieferanten)
  - Lösungsmittel
  - Hilfsstoffe
  
- **3.2.S.2.4 Controls of Critical Steps:**
  - Welche Parameter werden überwacht?
  - Akzeptanzkriterien
  
- **3.2.S.2.5 Process Validation:**
  - Referenz auf Process Validation Report
  - 3 Chargen, konsistente Qualität nachgewiesen
  
- **3.2.S.2.6 Manufacturing Process Development:**
  - Wie wurde Prozess entwickelt?
  - Design Space, Control Strategy

#### 3.2.S.3 Characterization
- **3.2.S.3.1 Elucidation of Structure:**
  - NMR, MS, IR, UV-Spektren
  
- **3.2.S.3.2 Impurities:**
  - Identifizierung von Verunreinigungen
  - Strukturen, Bildungsmechanismen
  - Qualifizierung / Safety Assessment

#### 3.2.S.4 Control of Drug Substance
- **3.2.S.4.1 Specification:**
  - Tabelle: Parameter, Methode, Akzeptanzkriterium
  
- **3.2.S.4.2 Analytical Procedures:**
  - HPLC-Methode detailliert beschrieben
  
- **3.2.S.4.3 Validation of Analytical Procedures:**
  - Referenz auf Analytical Method Validation
  
- **3.2.S.4.4 Batch Analyses:**
  - CoA von 3 Chargen
  
- **3.2.S.4.5 Justification of Specification:**
  - Warum diese Grenzwerte?

#### 3.2.S.5 Reference Standards
- Welche Standards werden für Analytik verwendet?

#### 3.2.S.6 Container Closure System
- Wie wird Fampridin verpackt?
- HDPE-Fässer? Aluminium-Beutel?

#### 3.2.S.7 Stability
- **3.2.S.7.1 Stability Summary:**
  - Ergebnisse Stabilitätsstudien
  
- **3.2.S.7.2 Post-approval Stability Protocol:**
  - Wie wird Stabilität nach Zulassung überwacht?
  
- **3.2.S.7.3 Stability Data:**
  - Detaillierte Tabellen, Graphen

**Appendices:**
- Alle Validation Reports
- Analytical Method Validations
- GMP-Zertifikat
- Facility Drawings
- Process Flow Diagrams
- Spectral Data (NMR, IR, MS)

**Anwendbare Regularien:**
- ICH M4Q (Common Technical Document - Quality)
- PMDA Guidance Documents für DMF

---

### 4.2 DMF BEI PMDA EINREICHEN

**Aktivitäten:**
- DMF elektronisch bei PMDA einreichen (eCTD-Format)
- Administrative Fee bezahlen

**Dokumente eingereicht:**
- [ ] **Complete DMF Package (eCTD)**
- [ ] **Letter of Authorization**
  - Falls ein Pharma-Unternehmen das DMF referenziert

**Bearbeitungszeit:**
- PMDA-Review: 6-12 Monate
- Möglicherweise Rückfragen (Deficiency Letters)

---

## PHASE 5: PMDA-INSPEKTION & GENEHMIGUNG

### 5.1 PMDA-REVIEW

**Aktivitäten:**
- PMDA prüft DMF
- Möglicherweise Rückfragen zu:
  - Verunreinigungen (Qualifizierung?)
  - Prozess-Validierung (nur 3 Chargen ausreichend?)
  - Stabilitätsdaten (mehr Langzeit-Daten nötig?)

**Dokumente möglicherweise nachzureichen:**
- [ ] **Responses to Deficiency Letters**
- [ ] **Additional Data** (z.B. mehr Stability Data)

---

### 5.2 PMDA-INSPEKTION

**Aktivitäten:**
- PMDA schickt Inspektoren nach Luckenwalde
- GMP-Inspektion (ähnlich wie EU, aber Japan-spezifische Schwerpunkte)

**Was Inspektoren prüfen:**
- Räume, Anlagen (entspricht alles der Dokumentation?)
- Batch Records (werden SOPs befolgt?)
- Deviation Management (wie werden Abweichungen behandelt?)
- Change Control (sind Änderungen dokumentiert/genehmigt?)
- Training Records (sind Mitarbeiter geschult?)
- Analytik (funktioniert HPLC wie beschrieben?)

**Mögliches Ergebnis:**
- **Best Case:** Keine Findings → Inspektion bestanden
- **Typisch:** Minor Findings (z.B. "SOP-xyz muss präziser formuliert werden")
- **Worst Case:** Major Findings → Inspektion nicht bestanden, Nachbesserung nötig

**Dokumente nach Inspektion:**
- [ ] **PMDA Inspection Report**
- [ ] **Response to Findings** (falls Findings vorhanden)
- [ ] **CAPA Plan** (Corrective Actions für Findings)

---

### 5.3 PMDA-GENEHMIGUNG

**Ergebnis:**
- [ ] **DMF Approval Letter von PMDA**
  - StefanCon darf Fampridin nach Japan exportieren
  - Gültig unbefristet (aber Re-Inspektionen alle 3-5 Jahre)

**Jetzt kann:**
- Japanisches Pharma-Unternehmen Fampridin von StefanCon kaufen
- Für ihre Arzneimittel-Herstellung verwenden
- In Japan verkaufen

---

## ZUSAMMENFASSUNG: ALLE DOKUMENTE

### ANLAGEN-QUALIFIZIERUNG (9 Systeme × 4-6 Dokumente)
- HVAC: URS, DQ, IQ, OQ, PQ, Validation Report
- Wassersystem: URS, DQ, IQ, OQ, PQ, Validation Report
- Produktionsreaktoren: URS, DQ, IQ, OQ, PQ, Validation Report
- HPLC: IQ, OQ, PQ

### PROZESS-ENTWICKLUNG & VALIDIERUNG
- Manufacturing Process Description
- Process Flow Diagram
- CPP Identification
- Risk Assessment - Manufacturing
- Process Validation Protocol
- Process Validation Report
- 3 × Batch Records

### ANALYTIK
- Specification - Fampridin
- Analytical Method Validation - HPLC
- Analytical Method Validation - IR, NMR, MS
- 3 × Certificate of Analysis

### STABILITÄT
- Stability Study Protocol
- Stability Study Report (24 Monate Daten)

### QUALITÄTSMANAGEMENT
- Quality Manual
- 20-30 SOPs (Produktion, QC, QA)
- Master Validation Plan
- Environmental Monitoring Plan
- Cleanroom Classification Report

### REGULATORISCH
- Drug Master File (DMF) - ca. 500-1000 Seiten
- GMP-Zertifikat (EU)
- PMDA Approval Letter

### RISK ASSESSMENTS
- Facility Design Risk Assessment
- Manufacturing Process Risk Assessment

---

## ANWENDBARE REGULARIEN - ÜBERSICHT

### INTERNATIONAL (ICH Guidelines)
- ICH Q2(R1): Analytical Validation
- ICH Q6A: Specifications
- ICH Q7: GMP für APIs
- ICH Q8: Pharmaceutical Development
- ICH Q9: Quality Risk Management
- ICH Q10: Pharmaceutical Quality System
- ICH Q11: Development and Manufacture of Drug Substances
- ICH Q1A: Stability Testing
- ICH M4Q: Common Technical Document

### EUROPA
- EU GMP (alle Teile)
- EU GMP Annex 1: Sterile Products (falls zutreffend)
- EU GMP Annex 15: Qualification and Validation
- Ph. Eur. (Europäisches Arzneibuch)
- DAC (Deutscher Arzneimittel-Codex)

### JAPAN
- PMDA Guidance Documents
- Japanese Pharmacopoeia (JP)

### STANDARDS
- ISO 14644-1/2: Cleanroom Classification
- ISPE Baseline Guides: Commissioning & Qualification

---

## TIMELINE (realistisch)

| Phase | Dauer | Abhängigkeiten |
|-------|-------|----------------|
| Facility Design | 3-6 Monate | - |
| Bau & Installation | 6-12 Monate | Design fertig |
| Qualifizierung | 3-6 Monate | Installation fertig |
| Prozessentwicklung | 3-6 Monate | Parallel zu Bau möglich |
| Prozess-Validierung | 2-3 Monate | Qualifizierung fertig |
| Stabilitätsstudien | 24 Monate | Parallel, aber 6+ Monate Daten für DMF |
| EU-GMP-Audit | 3-6 Monate | Prozess validiert |
| DMF Erstellung | 2-3 Monate | Alle Daten vorhanden |
| PMDA Review | 6-12 Monate | DMF eingereicht |
| PMDA Inspektion | 1-2 Monate | Review abgeschlossen |

**GESAMT: 24-40 Monate**

---

## NÄCHSTER SCHRITT FÜR STEFANCON-PROJEKT

**Option 1: Ein Dokument komplett ausarbeiten**
- Z.B. Design Qualification (DQ) - HVAC System
- Mit echten GMP-Referenzen
- Als Template für LLM-Generation

**Option 2: DMF-Struktur detailliert ausarbeiten**
- Module 3.2.S komplett (als Outline)
- Mit Platzhaltern für alle Inhalte

**Option 3: Flowchart visualisieren**
- Als Grafik (Mermaid, Draw.io, oder ähnlich)

**Was möchtest du als nächstes vertiefen?**
