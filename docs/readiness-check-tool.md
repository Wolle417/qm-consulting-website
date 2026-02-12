# ISO 13485 Readiness Check — Tool-Dokumentation

## Zusammenfassung

Der **ISO 13485 Readiness Check** ist ein kostenloses, browserbasiertes Self-Assessment-Tool für QM-Verantwortliche in der Medizintechnik. Es bewertet den Reifegrad eines Qualitätsmanagementsystems anhand von **27 Fragen in 9 Kategorien** — basierend auf den prüfungsrelevantesten Klauseln der ISO 13485:2016.

Das Tool läuft **100 % lokal im Browser** — kein Login, kein Upload, keine Datenspeicherung auf Servern.

---

## Funktionsumfang

### Assessment

| Feature | Beschreibung |
|---------|-------------|
| **27 Fragen, 9 Kategorien** | Abdeckung der wichtigsten ISO 13485 Klauseln |
| **4 Reifegrad-Stufen** | Pro Frage: „nicht vorhanden" bis „kontinuierlich verbessert" (1–4) |
| **3 Assessment-Profile** | ISO 13485 (Standard), FDA QMSR (21 CFR 820), EU MDR (2017/745) |
| **Auto-Advance** | Automatischer Sprung zur nächsten unbeantworteten Frage/Kategorie |
| **Notizen** | Eigene Evidenz-Referenzen pro Frage (z. B. „SOP-005") |
| **LocalStorage** | Fortschritt wird automatisch gespeichert und beim nächsten Besuch geladen |

### Ergebnisse & Analyse

| Feature | Beschreibung |
|---------|-------------|
| **Score-Ring** | Gesamtscore in % mit Maturity-Level (Kritisch / Handlungsbedarf / Solide / Exzellent) |
| **Radar-Chart** | Visuelle Übersicht aller 9 Kategorien |
| **Gap-Backlog** | Priorisierte Liste aller Schwachstellen, sortiert nach Audit-Risiko |
| **Maßnahmenplan** | Editierbare Tabelle mit Verantwortlichkeit und Deadline pro Gap |
| **Empfehlungen** | Evidenzbasierte Verbesserungsvorschläge für Kategorien unter 75 % |
| **Trend-Analyse** | Score-Verlauf über mehrere Assessments hinweg |
| **PDF-Export** | Kompletter Report als A4-PDF (Scores, Gaps, Evidenz, Empfehlungen) |

### Regulatorische Tiefe

| Feature | Beschreibung |
|---------|-------------|
| **ISO-Klausel-Referenz** | Jede Frage verweist auf die zugehörige ISO 13485 Klausel |
| **Erwartete Nachweise** | Pro Frage: Verfahren, Aufzeichnung, Wirksamkeitsnachweis |
| **Audit-Risiko-Level** | Klassifizierung: Critical / High / Medium / Low |
| **QMSR-Referenz** | FDA 21 CFR 820 Abschnittsnummern (im QMSR-Profil) |
| **QMSR-Delta** | Abweichungen zwischen ISO 13485 und FDA QMSR (im QMSR-Profil) |
| **Gewichtung** | Profilabhängige Gewichtungsfaktoren (1.0–2.0×) für relevante Fragen |

---

## Die 9 Kategorien

| # | Kategorie | ISO-Klausel | Fragen |
|---|-----------|-------------|--------|
| 1 | Dokumentenlenkung | 4.2.4 / 4.2.5 | 3 |
| 2 | CAPA-Prozess | 8.5.2 / 8.5.3 | 3 |
| 3 | Risikomanagement | 7.1 / ISO 14971 | 3 |
| 4 | Design & Entwicklung | 7.3 | 3 |
| 5 | Lieferantenmanagement | 7.4 | 3 |
| 6 | Audit & Management Review | 8.2.4 / 5.6 | 3 |
| 7 | Regulatorische Compliance | 4.2.3 / 4.1.1 | 3 |
| 8 | Schulung & Kompetenz | 6.2 | 3 |
| 9 | Post-Market Surveillance | 8.2.1 / Art. 83–86 | 3 |

---

## Scoring-Logik

### Pro Frage
- **Level 1** = 0 % — Nicht vorhanden / rein reaktiv
- **Level 2** = 33 % — Definiert, aber nicht systematisch
- **Level 3** = 67 % — Etabliert und dokumentiert
- **Level 4** = 100 % — Optimiert und kontinuierlich verbessert

### Pro Kategorie
- Durchschnitt aller beantworteten Fragen × Gewichtungsfaktor des Profils

### Gesamt-Score
- Durchschnitt über alle beantworteten Fragen (gewichtet nach Profil)

### Maturity-Level

| Level | Score | Farbe |
|-------|-------|-------|
| Kritisch | ≤ 33 % | Rot |
| Handlungsbedarf | 34–55 % | Orange |
| Solide | 56–77 % | Grün-Gelb |
| Exzellent | 78–100 % | Grün |

---

## Assessment-Profile

### ISO 13485 (Standard)
- Basis-Bewertung mit Standard-Gewichtungen
- Alle 27 Fragen, keine regulatorischen Deltas

### FDA QMSR (21 CFR 820)
- Höhere Gewichtung für CAPA, Design Controls, Regulatory Compliance
- Zeigt QMSR-Referenznummern (§ 820.x)
- Zeigt Abweichungen zwischen ISO 13485 und FDA QMSR

### EU MDR (2017/745)
- Höhere Gewichtung für Regulatory Compliance und Post-Market Surveillance
- Zeigt MDR-relevante Zusatzinformationen

---

## User Flow

```
IntroLanding → Assessment (3-Spalten-Layout)
                ├── Links: Kategorien-Sidebar
                ├── Mitte: Frage + Antwortoptionen
                └── Rechts: Dashboard (Score, Radar, Gaps, Trend)
```

1. **IntroLanding**: Erklärung des Tools, Features, Zielgruppe
2. **Assessment**: Fragen beantworten mit Live-Dashboard
3. **Ergebnisse**: Gap-Backlog, Maßnahmenplan, Empfehlungen, PDF-Export

---

## Technischer Stack

| Komponente | Technologie |
|-----------|-------------|
| Framework | Next.js 14 (Pages Router) |
| UI | React 18, Tailwind CSS, Inline Styles |
| Charts | Recharts (Radar, Bar, Line) |
| Animationen | Framer Motion |
| PDF | jsPDF + html2canvas (lazy-loaded) |
| Persistierung | Browser LocalStorage |
| Sprachen | Deutsch / Englisch (manuelles Bilingual-System) |
| Design | Glassmorphism, Cormorant Serif + Inter Sans |

---

## Dateien

| Datei | Beschreibung |
|-------|-------------|
| `pages/readiness-check.js` | UI-Seite (~1.400 Zeilen) — alle Komponenten und Logik |
| `data/readiness-check.js` | Datenmodell (~1.300 Zeilen) — Fragen, Scoring, UI-Strings |

---

## Zielgruppe

- **QMBs** die ein internes Pre-Audit vor der Zertifizierung durchführen
- **Geschäftsführer** die den Reifegrad ihres QMS einschätzen wollen
- **Berater** die den Ist-Zustand beim Kunden schnell erfassen müssen

---

## Datenschutz

- Keine Datenübertragung an Server
- Kein Login erforderlich
- Kein Account nötig
- Alle Daten bleiben im Browser (LocalStorage)
- Löschbar über den „Reset"-Button
