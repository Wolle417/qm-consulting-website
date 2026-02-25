# Process Validation – Artikel für QCore Consulting

## Anweisungen für Claude Code

### WICHTIG: Integration in QM-Wissen

Nach Erstellung der Seite bitte folgende Schritte ausführen:

#### 1. Sidebar aktualisieren
**Datei:** `/components/QMWissenSidebar.js` (oder ähnlich)

Unter der Kategorie **"Validation"** neuen Eintrag hinzufügen:
```jsx
{ name: 'Process Validation', href: '/qm-wissen/process-validation' }
```

Die Reihenfolge unter "Validation" sollte sein:
1. IQ/OQ/PQ erklärt
2. Process Validation ← NEU

#### 2. Navigation in anderen Artikeln aktualisieren

**In `/pages/qm-wissen/iq-oq-pq.js`:**
- "Nächster Artikel" → Link auf `/qm-wissen/process-validation` setzen

#### 3. Hub-Seite prüfen
**Datei:** `/pages/qm-wissen/index.js`

Falls dort Artikel-Karten angezeigt werden, neue Karte hinzufügen:
```jsx
{
  title: 'Process Validation',
  description: 'Prozessvalidierung nach FDA und EU GMP',
  href: '/qm-wissen/process-validation',
  category: 'Validation'
}
```

---

## Meta-Informationen

**Dateipfad:** `/pages/qm-wissen/process-validation.js`  
**Lesezeit:** 13 Minuten  
**Level:** Fortgeschritten  
**Breadcrumb:** QM-Wissen › Validation › Process Validation

### Navigation-Links
- **Vorheriger:** `/qm-wissen/iq-oq-pq` (IQ/OQ/PQ erklärt)
- **Nächster:** `/qm-wissen/csv` (Computer System Validation) *oder Platzhalter*

---

## Imports und SEO

```jsx
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import QMWissenSidebar from '../../components/QMWissenSidebar';

// SEO Meta-Tags
<Head>
  <title>Process Validation: Prozessvalidierung nach FDA und GMP | QCore Consulting</title>
  <meta name="description" content="Prozessvalidierung einfach erklärt: Die drei Phasen nach FDA Guidance, EU GMP Annex 15 und ISO 13485. Praktische Anleitung mit Beispielen für Pharma und MedTech." />
</Head>
```

---

## Style-Komponenten (wie bei anderen Artikeln)

### Definition-Box (dunkelblau)
```jsx
<div className="bg-qcore-navy bg-opacity-60 border-l-4 border-qcore-cyan p-4 my-6 rounded-r">
  <p className="text-qcore-cyan font-semibold text-sm mb-2">Definition</p>
  <p className="text-gray-200 m-0">[Text]</p>
</div>
```

### Info-Box (blau)
```jsx
<div className="bg-qcore-navy bg-opacity-40 border-l-4 border-blue-400 p-4 my-4 rounded-r">
  <p className="text-gray-300 font-semibold mb-1">ℹ️ Info</p>
  <p className="text-gray-200 m-0">[Text]</p>
</div>
```

### Praxis-Tipp-Box (amber)
```jsx
<div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 my-6">
  <div className="flex items-center gap-2 text-amber-700 font-medium mb-2">
    <span>💡</span>
    <span>Praxis-Tipp</span>
  </div>
  <p className="text-gray-700 m-0">[Text]</p>
</div>
```

### Warnung-Box (orange)
```jsx
<div className="bg-qcore-navy bg-opacity-40 border-l-4 border-orange-400 p-4 my-4 rounded-r">
  <p className="text-gray-300 font-semibold mb-1">⚠️ Wichtig</p>
  <p className="text-gray-200 m-0">[Text]</p>
</div>
```

### Checklisten-Box (grün)
```jsx
<div className="bg-qcore-navy bg-opacity-40 border-l-4 border-green-400 p-4 my-4 rounded-r">
  <p className="text-gray-300 font-semibold mb-1">✅ Checkliste</p>
  <div className="text-gray-200">[Inhalt]</div>
</div>
```

---

# Process Validation: Prozessvalidierung richtig umsetzen

## 1. Was ist Prozessvalidierung?

**Definition-Box:**
> **Prozessvalidierung** ist der dokumentierte Nachweis, dass ein Prozess dauerhaft ein Produkt erzeugt, das seine vorgegebenen Spezifikationen und Qualitätsmerkmale erfüllt. Sie stellt sicher, dass der Prozess reproduzierbar und robust ist.

### Warum Prozessvalidierung?

| Grund | Erklärung |
|-------|-----------|
| **Regulatorisch** | Gesetzliche Anforderung (FDA, EU GMP, ISO 13485) |
| **Qualität** | Nachweis, dass Produkte konsistent spezifikationsgerecht sind |
| **Risiko** | Reduzierung von Ausschuss, Rückrufen, Patientengefährdung |
| **Wirtschaftlich** | Weniger Nacharbeit, weniger Prüfaufwand |

### Validierung vs. Verifizierung

| Begriff | Definition | Beispiel |
|---------|------------|----------|
| **Verifizierung** | Prüfung gegen Spezifikation (Stichprobe) | 100 Tabletten wiegen, Mittelwert prüfen |
| **Validierung** | Nachweis der Prozessfähigkeit (systematisch) | 3 Chargen produzieren, Cpk berechnen |

**Info-Box:**
> Verifizierung prüft das Produkt. Validierung prüft den Prozess. Beide sind notwendig, aber sie ersetzen sich nicht gegenseitig.

---

## 2. Regulatorische Grundlagen

### FDA Process Validation Guidance (2011)

Die FDA hat 2011 ihre Guidance grundlegend überarbeitet und den **Lifecycle-Ansatz** eingeführt:

| Phase | Name | Beschreibung |
|-------|------|--------------|
| **Stage 1** | Process Design | Prozesswissen aufbauen, Parameter festlegen |
| **Stage 2** | Process Qualification | Nachweis, dass der Prozess reproduzierbar funktioniert |
| **Stage 3** | Continued Process Verification | Laufende Überwachung im Routinebetrieb |

**Info-Box:**
> Der Lifecycle-Ansatz bedeutet: Validierung ist keine einmalige Aktivität, sondern ein kontinuierlicher Prozess über die gesamte Produktlebensdauer.

### EU GMP Annex 15 (2015)

| Anforderung | Beschreibung |
|-------------|--------------|
| **Prospektive Validierung** | Vor Routineproduktion (Standard) |
| **Concurrent Validation** | Während Produktion (Ausnahme, begründet) |
| **Retrospektive Validierung** | Basierend auf historischen Daten (nicht mehr empfohlen) |
| **Revalidierung** | Bei Änderungen oder periodisch |

### ISO 13485:2016

| Kapitel | Anforderung |
|---------|-------------|
| **7.5.6** | Validierung von Prozessen für Produktion und Dienstleistung |
| **7.5.7** | Besondere Anforderungen an die Validierung von Sterilisationsprozessen |

**Warnung-Box:**
> ISO 13485 fordert Validierung insbesondere für **spezielle Prozesse** – Prozesse, deren Ergebnis nicht vollständig durch nachfolgende Prüfung verifiziert werden kann (z.B. Sterilisation, Schweißen, Beschichten).

---

## 3. Stage 1: Process Design

### Ziel

Prozesswissen aufbauen und einen robusten Prozess entwickeln, der konsistent Qualitätsprodukte liefert.

### Aktivitäten

| Aktivität | Beschreibung |
|-----------|--------------|
| **Risikobewertung** | Welche Parameter beeinflussen die Qualität? |
| **DoE (Design of Experiments)** | Systematische Versuchsplanung |
| **CPP/CQA Identifikation** | Kritische Parameter und Attribute festlegen |
| **Design Space** | Bereich, in dem Qualität gewährleistet ist |
| **Kontrollstrategie** | Wie werden Parameter kontrolliert? |

### CPP und CQA

**Definition-Box:**
> **Critical Process Parameter (CPP):** Prozessparameter, dessen Variabilität einen Einfluss auf ein kritisches Qualitätsmerkmal hat und der deshalb überwacht oder kontrolliert werden muss.
>
> **Critical Quality Attribute (CQA):** Physikalische, chemische, biologische oder mikrobiologische Eigenschaft, die innerhalb eines definierten Bereichs liegen muss, um die gewünschte Produktqualität sicherzustellen.

**Tabelle: Beispiele CPP/CQA**

| Prozess | CPP (Prozessparameter) | CQA (Qualitätsmerkmal) |
|---------|------------------------|------------------------|
| Tablettierung | Presskraft, Geschwindigkeit | Härte, Zerfallszeit |
| Sterilisation | Temperatur, Zeit, Druck | Sterilität (SAL) |
| Spritzguss | Temperatur, Druck, Kühlzeit | Maßhaltigkeit, Oberfläche |
| Schweißen | Strom, Zeit, Anpressdruck | Festigkeit, Dichtheit |

### Design Space

```
                    Proven Acceptable Range (PAR)
    ┌─────────────────────────────────────────────────┐
    │                                                 │
    │       ┌─────────────────────────────┐          │
    │       │                             │          │
    │       │      Design Space           │          │
    │       │   (validierter Bereich)     │          │
    │       │                             │          │
    │       │    ┌───────────────┐        │          │
    │       │    │ Normal        │        │          │
    │       │    │ Operating     │        │          │
    │       │    │ Range (NOR)   │        │          │
    │       │    └───────────────┘        │          │
    │       │                             │          │
    │       └─────────────────────────────┘          │
    │                                                 │
    └─────────────────────────────────────────────────┘
```

**Praxis-Tipp-Box:**
> Investieren Sie Zeit in Stage 1! Ein gut verstandener Prozess macht Stage 2 einfacher und Stage 3 robuster. Viele Validierungsprobleme entstehen durch unzureichendes Prozessverständnis.

---

## 4. Stage 2: Process Qualification

### Ziel

Nachweis, dass der Prozess unter realen Produktionsbedingungen reproduzierbar das gewünschte Ergebnis liefert.

### Voraussetzungen

**Checklisten-Box:**
> ✅ **Vor Stage 2 erledigt?**
> 
> - [ ] Anlagen qualifiziert (IQ/OQ abgeschlossen)?
> - [ ] Personal geschult?
> - [ ] Arbeitsanweisungen freigegeben?
> - [ ] Prüfmethoden validiert?
> - [ ] Rohstoffe qualifiziert?
> - [ ] Validierungsprotokoll genehmigt?
> - [ ] Akzeptanzkriterien definiert?

### PPQ – Process Performance Qualification

**Definition-Box:**
> **Process Performance Qualification (PPQ)** ist der Nachweis, dass der Produktionsprozess unter Routinebedingungen konsistent Produkte liefert, die alle Qualitätsanforderungen erfüllen.

### Wie viele Chargen?

| Ansatz | Beschreibung | Anwendung |
|--------|--------------|-----------|
| **Traditionell: 3 Chargen** | Historische Konvention | Einfache, gut verstandene Prozesse |
| **Statistisch begründet** | Basierend auf Risiko und Variabilität | Komplexe Prozesse, höheres Risiko |
| **Continued Process Verification** | Weniger PPQ-Chargen, mehr Monitoring | Bei sehr gutem Prozessverständnis |

**Info-Box:**
> Die "3 Chargen-Regel" ist keine regulatorische Anforderung, sondern historische Praxis. Die FDA fordert eine statistisch begründete Anzahl. In der Praxis sind 3 Chargen oft der Mindeststandard, aber mehr können erforderlich sein.

### PPQ-Durchführung

| Schritt | Aktivität |
|---------|-----------|
| **1** | Validierungsprotokoll erstellen und genehmigen |
| **2** | Erhöhte Probenahme und In-Prozess-Kontrollen |
| **3** | Alle CPPs dokumentieren |
| **4** | Vollständige Produktprüfung |
| **5** | Statistische Auswertung (Cpk, Mittelwert, Streuung) |
| **6** | Abweichungen dokumentieren und bewerten |
| **7** | Validierungsbericht erstellen |

### Statistische Auswertung

**Tabelle: Wichtige Kennzahlen**

| Kennzahl | Bedeutung | Akzeptanzkriterium |
|----------|-----------|---------------------|
| **Cpk** | Prozessfähigkeit (zentriert) | ≥ 1,33 (oft ≥ 1,0 akzeptiert) |
| **Cp** | Prozessfähigkeit (nicht zentriert) | ≥ 1,33 |
| **Ppk** | Prozessleistung (Performance) | ≥ 1,33 |
| **Mittelwert** | Zentrallage | Innerhalb Spezifikation |
| **Standardabweichung** | Streuung | Möglichst gering |

**Warnung-Box:**
> Ein Cpk von 1,0 bedeutet: Der Prozess nutzt die gesamte Spezifikationsbreite aus. Bei 1,33 bleibt Sicherheitsmarge. Bei <1,0 produzieren Sie statistisch Ausschuss!

---

## 5. Stage 3: Continued Process Verification

### Ziel

Sicherstellen, dass der Prozess während der Routineproduktion im validierten Zustand bleibt.

### Aktivitäten

| Aktivität | Beschreibung | Häufigkeit |
|-----------|--------------|------------|
| **Prozessmonitoring** | CPPs und CQAs überwachen | Laufend |
| **Trendanalyse** | Statistische Auswertung über Zeit | Periodisch (z.B. monatlich) |
| **SPC (Statistical Process Control)** | Regelkarten führen | Laufend |
| **Annual Product Review** | Jährliche Produktbewertung | Jährlich |
| **Revalidierung** | Bei Abweichungen oder Änderungen | Bei Bedarf |

### Regelkarten (Control Charts)

```
UCL ─────────────────────────────────────────────── Obere Warngrenze
      
        ·    ·         ·              ·
    ·        ·    ·         ·    ·
CL  ─────·───────·─────────────·───────────────────── Mittelwert
              ·         ·              ·    ·
        ·              ·         ·
      
LCL ─────────────────────────────────────────────── Untere Warngrenze

    └───┴───┴───┴───┴───┴───┴───┴───┴───┴───┴───┘
     1   2   3   4   5   6   7   8   9  10  11  (Chargen)
```

**Praxis-Tipp-Box:**
> Führen Sie Regelkarten für alle CPPs! Sie erkennen Trends, bevor Spezifikationsgrenzen überschritten werden. Das ist proaktives Qualitätsmanagement.

### Wann ist Revalidierung erforderlich?

**Tabelle: Auslöser für Revalidierung**

| Auslöser | Beispiel | Umfang |
|----------|----------|--------|
| **Prozessänderung** | Neuer Lieferant, neue Parameter | Abhängig von Änderung |
| **Anlagenänderung** | Neues Equipment, Standortwechsel | Oft vollständige Revalidierung |
| **Negative Trends** | Cpk sinkt, Ausschuss steigt | Ursachenanalyse + ggf. Revalidierung |
| **Out-of-Spec** | Chargen außerhalb Spezifikation | Ursachenanalyse + ggf. Revalidierung |
| **Regulatorische Änderung** | Neue Anforderungen | Bewertung erforderlich |
| **Zeitbasiert** | Periodische Revalidierung | Risikobasiert festlegen |

---

## 6. Spezielle Prozesse

**Definition-Box:**
> **Spezielle Prozesse** sind Prozesse, deren Ergebnis nicht vollständig durch nachfolgende Überwachung oder Messung am Produkt verifiziert werden kann. Bei diesen ist Validierung besonders kritisch.

### Beispiele spezieller Prozesse

| Prozess | Warum speziell? | Validierungsanforderung |
|---------|-----------------|-------------------------|
| **Sterilisation** | Sterilität nicht zerstörungsfrei prüfbar | ISO 11135, ISO 17665, ISO 11137 |
| **Schweißen** | Festigkeit nur durch Zerstörung prüfbar | Schweißverfahrensprüfung |
| **Beschichten** | Haftung nur durch Zerstörung prüfbar | Beschichtungsvalidierung |
| **Reinigung** | Rückstände nicht immer messbar | Reinigungsvalidierung |
| **Kleben** | Festigkeit nur durch Zerstörung prüfbar | Klebprozessvalidierung |
| **Versiegeln** | Dichtheit nur durch Zerstörung prüfbar | Siegelvalidierung |

### Sterilisationsvalidierung (Beispiel)

**Tabelle: Validierung Dampfsterilisation (ISO 17665)**

| Phase | Aktivität |
|-------|-----------|
| **IQ** | Installation des Autoklaven prüfen |
| **OQ** | Temperaturverteilung, Leer-Kammer |
| **PQ** | Mit Beladung, Biologische Indikatoren |
| **Routine** | Physikalische Parameter + BI pro Charge |

---

## 7. Validierungsdokumentation

### Validierungsmasterplan (VMP)

| Inhalt | Beschreibung |
|--------|--------------|
| **Geltungsbereich** | Welche Prozesse, Anlagen, Produkte? |
| **Verantwortlichkeiten** | Wer macht was? |
| **Strategie** | Risikobasierter Ansatz |
| **Dokumentation** | Welche Dokumente werden erstellt? |
| **Zeitplan** | Wann wird was validiert? |
| **Akzeptanzkriterien** | Allgemeine Vorgaben |
| **Revalidierung** | Wann und wie? |

### Validierungsprotokoll

**Checklisten-Box:**
> ✅ **Inhalte Validierungsprotokoll**
> 
> - [ ] Zweck und Geltungsbereich
> - [ ] Verantwortlichkeiten
> - [ ] Prozessbeschreibung
> - [ ] CPPs und CQAs
> - [ ] Akzeptanzkriterien (quantitativ!)
> - [ ] Versuchsplan (Chargenanzahl, Probenahme)
> - [ ] Prüfmethoden und -anweisungen
> - [ ] Dokumentationsformulare
> - [ ] Abweichungsbehandlung
> - [ ] Genehmigungen

### Validierungsbericht

| Inhalt | Beschreibung |
|--------|--------------|
| **Zusammenfassung** | Ergebnis: Bestanden/Nicht bestanden |
| **Durchführung** | Abweichungen vom Protokoll? |
| **Ergebnisse** | Rohdaten, statistische Auswertung |
| **Abweichungen** | Liste mit Bewertung und Maßnahmen |
| **Schlussfolgerung** | Prozess validiert? Einschränkungen? |
| **Empfehlungen** | Für Routinebetrieb, Monitoring |
| **Freigabe** | Unterschriften |

---

## 8. Praxisbeispiel: Validierung eines Tablettierungsprozesses

### Stage 1: Process Design

**Identifizierte CPPs:**
- Presskraft
- Tablettiergeschwindigkeit
- Granulatfeuchte

**Identifizierte CQAs:**
- Tablettenhärte
- Zerfallszeit
- Wirkstoffgehalt
- Gewichtsvariation

**DoE-Ergebnis:**
- Presskraft hat größten Einfluss auf Härte
- Design Space: 10-15 kN Presskraft, 60-80 Tabl./min

### Stage 2: PPQ

**Tabelle: Ergebnisse PPQ (3 Chargen)**

| Parameter | Charge 1 | Charge 2 | Charge 3 | Spezifikation | Cpk |
|-----------|----------|----------|----------|---------------|-----|
| Härte (N) | 85 ± 5 | 87 ± 4 | 84 ± 5 | 70-100 N | 1,67 |
| Zerfall (min) | 4,2 | 4,5 | 4,1 | ≤ 15 min | >2,0 |
| Gehalt (%) | 99,2 | 100,1 | 99,8 | 95-105% | 1,89 |
| Gewicht (mg) | 500 ± 3 | 501 ± 4 | 499 ± 3 | 490-510 mg | 1,42 |

**Ergebnis:** Alle Cpk > 1,33 → Prozess validiert

### Stage 3: Continued Verification

**Monitoring-Plan:**
- Härte: Jede Stunde 10 Tabletten
- Gewicht: Alle 30 min Stichprobe
- Regelkarten für Härte und Gewicht
- Monatliche Trendauswertung
- Jährlicher APR (Annual Product Review)

---

## 9. Typische Fehler

**Warnung-Box:**
> Diese Fehler führen zu Beanstandungen bei Inspektionen:

### Fehler 1: Validierung als einmaliges Projekt

"Wir haben vor 10 Jahren validiert, seitdem läuft es."  
→ Stage 3 fehlt! Continued Verification ist Pflicht.

### Fehler 2: Keine statistische Begründung

"Wir machen immer 3 Chargen."  
→ Warum 3? Bei hohem Risiko oder hoher Variabilität brauchen Sie mehr.

### Fehler 3: CPPs nicht überwacht

"Wir prüfen nur das Endprodukt."  
→ Prozessüberwachung ist essenziell. Endprüfung allein reicht nicht.

### Fehler 4: Änderungen ohne Bewertung

"Das war nur eine kleine Änderung am Prozess."  
→ Jede Änderung muss auf Validierungsimpact bewertet werden.

### Fehler 5: Unzureichende Dokumentation

"Die Daten sind irgendwo im System."  
→ Validierungsdokumentation muss vollständig und auffindbar sein.

---

## 10. Branchenspezifische Anforderungen

### Pharma (FDA/EU GMP)

| Anforderung | Quelle |
|-------------|--------|
| Lifecycle-Ansatz (3 Stages) | FDA Guidance 2011 |
| Prospektive Validierung | EU GMP Annex 15 |
| Annual Product Review | 21 CFR 211.180 |
| Ongoing Process Verification | EU GMP Annex 15 |

### Medizintechnik (ISO 13485)

| Anforderung | Quelle |
|-------------|--------|
| Validierung spezieller Prozesse | ISO 13485:2016, 7.5.6 |
| Sterilisationsvalidierung | ISO 11135, 11137, 17665 |
| Verpackungsvalidierung | ISO 11607 |

### Automotive (IATF 16949)

| Anforderung | Quelle |
|-------------|--------|
| PPAP (Production Part Approval) | AIAG |
| Run@Rate | IATF 16949 |
| SPC als Standard | AIAG SPC Manual |
| MSA (Measurement System Analysis) | AIAG MSA Manual |

---

## 11. Zusammenfassung

**Definition-Box:**
> **Prozessvalidierung auf einen Blick:**
> 
> ✓ **Stage 1 – Process Design:** Prozess verstehen, CPP/CQA identifizieren  
> ✓ **Stage 2 – Process Qualification:** PPQ mit statistischer Auswertung  
> ✓ **Stage 3 – Continued Verification:** Laufende Überwachung, Regelkarten  
> ✓ **Lifecycle-Ansatz:** Validierung ist nie "fertig"  
> ✓ **Statistik:** Cpk ≥ 1,33 als Ziel  
> ✓ **Dokumentation:** VMP → Protokoll → Bericht  
> ✓ **Spezielle Prozesse:** Besondere Aufmerksamkeit

---

## CTA-Bereich

**Box mit dunkelblauem Hintergrund:**

> **Prozessvalidierung geplant?**
> 
> Ich unterstütze Sie bei:
> - Validierungsmasterplan erstellen
> - CPP/CQA-Analyse und Risikobewertung
> - Validierungsprotokolle schreiben
> - Statistische Auswertung (Cpk, SPC)
> - Vorbereitung auf FDA-/GMP-Inspektionen
> - Continued Process Verification aufbauen
> 
> → [Kostenloses Erstgespräch vereinbaren](/kontakt)

---

## Navigation

- ← Vorheriger: [IQ/OQ/PQ erklärt](/qm-wissen/iq-oq-pq)
- → Nächster: [Computer System Validation](/qm-wissen/csv)

---

# Checkliste für Claude Code

## Dateien erstellen/ändern:

- [ ] `/pages/qm-wissen/process-validation.js` erstellen
- [ ] `/components/QMWissenSidebar.js` aktualisieren:
  - Unter "Validation" neuen Eintrag hinzufügen: `{ name: 'Process Validation', href: '/qm-wissen/process-validation' }`
- [ ] `/pages/qm-wissen/iq-oq-pq.js` → "Nächster Artikel"-Link auf `/qm-wissen/process-validation` setzen
- [ ] `/pages/qm-wissen/index.js` → Falls Artikel-Grid vorhanden, neue Karte hinzufügen

## Nach Erstellung testen:

- [ ] Seite lädt ohne Fehler
- [ ] Sidebar zeigt neuen Artikel unter "Validation"
- [ ] Navigation (←/→) funktioniert
- [ ] Breadcrumb korrekt: QM-Wissen › Validation › Process Validation
- [ ] ASCII-Diagramme korrekt dargestellt
- [ ] Responsive Layout funktioniert

## Git:

```bash
git add .
git commit -m "Add Process Validation article to QM-Wissen"
git push
```
