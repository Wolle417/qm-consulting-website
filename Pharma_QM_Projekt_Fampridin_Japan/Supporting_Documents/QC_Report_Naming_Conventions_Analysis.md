# QUALITY CONTROL REPORT
## Dokumenten-Namenskonventionen Analyse

**QC Report Number:** QC-NAMING-2025-001  
**Date:** 03. Dezember 2025  
**Performed by:** Quality Control  
**Status:** Findings Identified – Action Required  

---

## 1. ZIELSETZUNG

Überprüfung der Konsistenz der Dokumenten-Namenskonventionen im gesamten Pharma-QM-Projekt (Fampridin Japan).

**Scope:**
- Alle Dokumente im Projekt-Root und Unterordnern
- Hauptdokumente und Review-Versionen
- Archivierte Dokumente

---

## 2. NAMENSKONVENTIONEN-STANDARD (SOLL)

### 2.1 ALLGEMEINES SCHEMA

**Format für Hauptdokumente:**
```
[DOC-ID]_[Descriptive_Name]_v[X.Y].md
```

**Format für Review-Dokumente:**
```
[DOC-ID]_[Descriptive_Name]_v[X.Y]_Review.md
```

**Erläuterung:**
- `[DOC-ID]`: Eindeutige Dokumentennummer (z.B. QM-001, PVP-FAM-001)
- `[Descriptive_Name]`: Beschreibender Name mit Unterstrichen (keine Leerzeichen)
- `v[X.Y]`: Versionsnummer (v1.0, v1.1, v2.0, etc.)
- `_Review`: Suffix für Review-Versionen (IMMER Großbuchstabe "R")
- `.md`: Dateiendung (Markdown)

### 2.2 NAMENSKONVENTIONS-REGELN

**Regel 1: Case Sensitivity (Groß-/Kleinschreibung)**
- **Dokumenten-IDs:** Immer GROSSBUCHSTABEN (z.B. QM-001, MVP-001, CAPA-2025-001)
- **Descriptive Names:** Title Case oder Snake_Case mit Großbuchstaben für wichtige Wörter
- **Review-Suffix:** Immer Großbuchstabe → `_Review` (NICHT `_review`)
- **Versionsprefix:** Immer Kleinbuchstabe → `v1.0` (NICHT `V1.0`)

**Regel 2: Trennzeichen**
- Unterstriche `_` zwischen Haupt-Elementen (DOC-ID, Name, Version, Review)
- Bindestriche `-` innerhalb von DOC-IDs (z.B. QM-001, PVP-FAM-001)
- Keine Leerzeichen in Dateinamen

**Regel 3: Versionierung**
- Format: `v[Major].[Minor]` (z.B. v1.0, v1.1, v2.0)
- Immer zwei Ziffern nach dem Punkt (v1.0, NICHT v1)
- Kleinbuchstabe "v" (NICHT "V")

**Regel 4: Review-Dokumente**
- Review-Dokumente enden mit `_Review.md`
- Großbuchstabe "R" in "Review"
- Review-Dateien gehören ins Archive-Verzeichnis (nach Finalisierung)

---

## 3. IST-ZUSTAND: IDENTIFIZIERTE INKONSISTENZEN

### 3.1 HAUPTINKONSISTENZ: Review-Suffix Case Inconsistency

**Problem:** Mischung aus `_Review` (korrekt) und `_review` (inkorrekt)

| Datei | Aktueller Name | Konsistenz | Empfohlener Name |
|-------|----------------|------------|------------------|
| **01_Quality_Manual/Archive/** | | | |
| ✅ Korrekt | `QM-001_Quality_Manual_v1.0_Review.md` | KORREKT | - |
| ✅ Korrekt | `QM-001_Quality_Manual_v1.1_Review.md` | KORREKT | - |
| **02_Master_Validation_Plan/** | | | |
| ❌ Inkonsistent | `MVP-001_Master_Validation_Plan_v1.0_review.md` | **FALSCH** | `MVP-001_Master_Validation_Plan_v1.0_Review.md` |
| **04_Process_Validation/** | | | |
| ❌ Inkonsistent | `PVP-FAM-001_Process_Validation_Protocol_Fampridin_v1.0_review.md` | **FALSCH** | `PVP-FAM-001_Process_Validation_Protocol_Fampridin_v1.0_Review.md` |
| **05_Analytical_Method_Validation/** | | | |
| ❌ Inkonsistent | `AMV-HPLC-001_Analytical_Method_Validation_HPLC_Fampridin_v1.0_review.md` | **FALSCH** | `AMV-HPLC-001_Analytical_Method_Validation_HPLC_Fampridin_v1.0_Review.md` |
| **06_CAPA_Report/** | | | |
| ❌ Inkonsistent | `CAPA-2025-001_HVAC_Overpressure_Deviation_v1.0_review.md` | **FALSCH** | `CAPA-2025-001_HVAC_Overpressure_Deviation_v1.0_Review.md` |

**Zusammenfassung:**
- ✅ **Korrekt:** 2 Dateien (Quality Manual Archive)
- ❌ **Inkonsistent:** 4 Dateien (MVP, PVP, AMV, CAPA)

---

### 3.2 WEITERE BEOBACHTUNGEN

#### 3.2.1 Archive-Struktur

**Beobachtung:** Nicht alle Review-Dateien befinden sich im Archive-Verzeichnis.

| Dokument | Review-Datei im Hauptverzeichnis? | Sollte im Archive sein? |
|----------|-----------------------------------|-------------------------|
| MVP-001 | ✅ Ja | ⚠️ **Sollte nach Archive verschoben werden** |
| PVP-FAM-001 | ✅ Ja | ⚠️ **Sollte nach Archive verschoben werden** |
| AMV-HPLC-001 | ✅ Ja | ⚠️ **Sollte nach Archive verschoben werden** |
| CAPA-2025-001 | ✅ Ja | ⚠️ **Sollte nach Archive verschoben werden** |

**Empfehlung:** Review-Dateien sollten ins Archive-Verzeichnis verschoben werden, sobald das Hauptdokument finalisiert ist.

---

#### 3.2.2 Versionsnummern

**Beobachtung:** Alle Dokumente verwenden konsistent das Format `v1.0` (Kleinbuchstabe "v" + zwei Ziffern).

✅ **Konsistent** – Keine Änderung erforderlich

---

#### 3.2.3 Dokumenten-IDs

**Beobachtung:** Alle Dokumenten-IDs verwenden konsistent Großbuchstaben und Bindestriche.

Beispiele:
- `QM-001` ✅
- `MVP-001` ✅
- `PVP-FAM-001` ✅
- `CAPA-2025-001` ✅

✅ **Konsistent** – Keine Änderung erforderlich

---

#### 3.2.4 Descriptive Names

**Beobachtung:** Descriptive Names verwenden konsistent Snake_Case mit Großbuchstaben für wichtige Wörter.

Beispiele:
- `Quality_Manual` ✅
- `Process_Validation_Protocol_Fampridin` ✅
- `HVAC_Overpressure_Deviation` ✅

✅ **Konsistent** – Keine Änderung erforderlich

---

## 4. ZUSAMMENFASSUNG DER FINDINGS

### 4.1 KRITISCHE FINDINGS

**Finding 1: Inkonsistente Review-Suffix Großschreibung**
- **Severity:** Major
- **Impact:** Dokumentenmanagement, Automatisierung, Suche
- **Affected Files:** 4 Dateien
- **Root Cause:** Manuelle Dateibenennung ohne standardisierte Prüfung
- **Corrective Action Required:** Umbenennung aller `_review` → `_Review`

---

### 4.2 OBSERVATIONS (NON-CRITICAL)

**Observation 1: Review-Dateien im Hauptverzeichnis**
- **Severity:** Minor
- **Impact:** Verzeichnisstruktur weniger übersichtlich
- **Recommendation:** Review-Dateien nach Archive verschieben

---

## 5. CORRECTIVE ACTIONS (EMPFEHLUNGEN)

### 5.1 SOFORTIGE KORREKTURMASSNAHMEN

**CA-01: Umbenennung inkonsistenter Review-Dateien**

| Aktueller Name | Neuer Name |
|----------------|------------|
| `MVP-001_Master_Validation_Plan_v1.0_review.md` | `MVP-001_Master_Validation_Plan_v1.0_Review.md` |
| `PVP-FAM-001_Process_Validation_Protocol_Fampridin_v1.0_review.md` | `PVP-FAM-001_Process_Validation_Protocol_Fampridin_v1.0_Review.md` |
| `AMV-HPLC-001_Analytical_Method_Validation_HPLC_Fampridin_v1.0_review.md` | `AMV-HPLC-001_Analytical_Method_Validation_HPLC_Fampridin_v1.0_Review.md` |
| `CAPA-2025-001_HVAC_Overpressure_Deviation_v1.0_review.md` | `CAPA-2025-001_HVAC_Overpressure_Deviation_v1.0_Review.md` |

**Ausführung:** Automatisch per Skript oder manuell

---

**CA-02: Verschiebung von Review-Dateien ins Archive**

Nach Umbenennung (CA-01):

| Datei | Von | Nach |
|-------|-----|------|
| `MVP-001_Master_Validation_Plan_v1.0_Review.md` | `02_Master_Validation_Plan/` | `02_Master_Validation_Plan/Archive/` |
| `PVP-FAM-001_Process_Validation_Protocol_Fampridin_v1.0_Review.md` | `04_Process_Validation/` | `04_Process_Validation/Archive/` |
| `AMV-HPLC-001_Analytical_Method_Validation_HPLC_Fampridin_v1.0_Review.md` | `05_Analytical_Method_Validation/` | `05_Analytical_Method_Validation/Archive/` |
| `CAPA-2025-001_HVAC_Overpressure_Deviation_v1.0_Review.md` | `06_CAPA_Report/` | `06_CAPA_Report/Archive/` |

---

### 5.2 PREVENTIVE ACTIONS

**PA-01: SOP für Dokumentenbenennung erstellen**
- Erstelle SOP-DOC-001: "Document Naming Conventions"
- Definiere alle Namenskonventions-Regeln
- Beispiele für alle Dokumenttypen
- Checkliste für Autoren

**PA-02: Automatisierte Prüfung implementieren**
- Python-Skript zur automatischen Prüfung der Namenskonventionen
- Integration in Document Control Workflow
- Warnung bei inkonsistenten Namen

**PA-03: Training für Dokumenten-Autoren**
- Training zu Namenskonventionen
- Bewusstsein für Konsistenz schaffen
- Dokumentation in Quality Manual aufnehmen

---

## 6. NAMENSKONVENTIONS-REFERENZ (QUICK GUIDE)

### 6.1 DOKUMENTTYPEN UND NAMENSSCHEMA

| Dokumenttyp | Schema | Beispiel |
|-------------|--------|----------|
| **Quality Manual** | `QM-[NNN]_[Name]_v[X.Y].md` | `QM-001_Quality_Manual_v1.1.md` |
| **Master Plan** | `MVP-[NNN]_[Name]_v[X.Y].md` | `MVP-001_Master_Validation_Plan_v1.0.md` |
| **Protocol** | `[TYPE]-[PROD]-[NNN]_[Name]_v[X.Y].md` | `PVP-FAM-001_Process_Validation_Protocol_Fampridin_v1.0.md` |
| **Method Validation** | `AMV-[METHOD]-[NNN]_[Name]_v[X.Y].md` | `AMV-HPLC-001_Analytical_Method_Validation_HPLC_Fampridin_v1.0.md` |
| **CAPA Report** | `CAPA-[YYYY]-[NNN]_[Description]_v[X.Y].md` | `CAPA-2025-001_HVAC_Overpressure_Deviation_v1.0.md` |
| **Deviation** | `DEV-[YYYY]-[NNN]_[Description]_v[X.Y].md` | `DEV-2025-042_HVAC_Pressure_Drop_v1.0.md` |
| **SOP** | `SOP-[CATEGORY]-[NNN]_[Name]_v[X.Y].md` | `SOP-DOC-001_Document_Naming_Conventions_v1.0.md` |
| **DMF** | `DMF-[PROD]-[NNN]_[Module]_[Name]_v[X.Y].md` | `DMF-FAM-001_Module_3.2.S_Fampridin_v1.0.md` |

### 6.2 SUFFIX FÜR DOKUMENTSTATUS

| Status | Suffix | Beispiel |
|--------|--------|----------|
| **Draft** | `_Draft` | `QM-001_Quality_Manual_v1.0_Draft.md` |
| **Review** | `_Review` | `QM-001_Quality_Manual_v1.0_Review.md` |
| **Final/Approved** | (kein Suffix) | `QM-001_Quality_Manual_v1.0.md` |
| **Obsolete** | (im Archive) | `Archive/QM-001_Quality_Manual_v1.0.md` |

**WICHTIG:** Suffix immer mit Großbuchstabe beginnen (`_Review`, `_Draft`, NICHT `_review`, `_draft`)

---

## 7. GENEHMIGUNG DER CORRECTIVE ACTIONS

**Empfohlene Maßnahmen:**

☐ **CA-01:** Umbenennung der 4 inkonsistenten Review-Dateien (`_review` → `_Review`)  
☐ **CA-02:** Verschiebung der Review-Dateien ins Archive  
☐ **PA-01:** Erstellung SOP-DOC-001 (Document Naming Conventions)  
☐ **PA-02:** Implementierung automatisierte Prüfung  
☐ **PA-03:** Training für Dokumenten-Autoren  

---

**QC Review:**  
Name: [Quality Control]  
Signature: ________________  
Date: 03.12.2025

**QA Approval:**  
Name: [QA Manager]  
Signature: ________________  
Date: __________

---

## 8. ANHANG: BASH-SKRIPT FÜR UMBENENNUNG

```bash
#!/bin/bash
# Script: rename_review_files.sh
# Purpose: Rename inconsistent review files to standard naming convention

# Set base directory
BASE_DIR="E:/06_Dev/Projekts/API_Pharma/Pharma_QM_Projekt_Fampridin_Japan"

# Rename files
echo "Starting file renaming..."

# MVP
if [ -f "$BASE_DIR/02_Master_Validation_Plan/MVP-001_Master_Validation_Plan_v1.0_review.md" ]; then
    mv "$BASE_DIR/02_Master_Validation_Plan/MVP-001_Master_Validation_Plan_v1.0_review.md" \
       "$BASE_DIR/02_Master_Validation_Plan/MVP-001_Master_Validation_Plan_v1.0_Review.md"
    echo "✓ Renamed: MVP-001 review file"
fi

# PVP
if [ -f "$BASE_DIR/04_Process_Validation/PVP-FAM-001_Process_Validation_Protocol_Fampridin_v1.0_review.md" ]; then
    mv "$BASE_DIR/04_Process_Validation/PVP-FAM-001_Process_Validation_Protocol_Fampridin_v1.0_review.md" \
       "$BASE_DIR/04_Process_Validation/PVP-FAM-001_Process_Validation_Protocol_Fampridin_v1.0_Review.md"
    echo "✓ Renamed: PVP-FAM-001 review file"
fi

# AMV
if [ -f "$BASE_DIR/05_Analytical_Method_Validation/AMV-HPLC-001_Analytical_Method_Validation_HPLC_Fampridin_v1.0_review.md" ]; then
    mv "$BASE_DIR/05_Analytical_Method_Validation/AMV-HPLC-001_Analytical_Method_Validation_HPLC_Fampridin_v1.0_review.md" \
       "$BASE_DIR/05_Analytical_Method_Validation/AMV-HPLC-001_Analytical_Method_Validation_HPLC_Fampridin_v1.0_Review.md"
    echo "✓ Renamed: AMV-HPLC-001 review file"
fi

# CAPA
if [ -f "$BASE_DIR/06_CAPA_Report/CAPA-2025-001_HVAC_Overpressure_Deviation_v1.0_review.md" ]; then
    mv "$BASE_DIR/06_CAPA_Report/CAPA-2025-001_HVAC_Overpressure_Deviation_v1.0_review.md" \
       "$BASE_DIR/06_CAPA_Report/CAPA-2025-001_HVAC_Overpressure_Deviation_v1.0_Review.md"
    echo "✓ Renamed: CAPA-2025-001 review file"
fi

echo "Renaming complete!"
```

---

**END OF QC REPORT**
