# Root Cause Analysis Artikel für QCore Consulting

## Anweisungen für Claude Code

### WICHTIG: Integration in QM-Wissen

Nach Erstellung der Seite bitte folgende Schritte ausführen:

#### 1. Sidebar aktualisieren
**Datei:** `/components/QMWissenSidebar.js` (oder ähnlich)

Unter der Kategorie **"Methoden"** neuen Eintrag hinzufügen:
```jsx
{ name: 'Root Cause Analysis', href: '/qm-wissen/root-cause-analysis' }
```

Die Reihenfolge unter "Methoden" sollte sein:
1. FMEA Grundlagen
2. Root Cause Analysis ← NEU
3. CAPA richtig umsetzen (falls vorhanden)

#### 2. Navigation in anderen Artikeln aktualisieren

**In `/pages/qm-wissen/fmea.js`:**
- "Nächster Artikel" → Link auf `/qm-wissen/root-cause-analysis` setzen

**In `/pages/qm-wissen/capa.js` (falls vorhanden):**
- "Vorheriger Artikel" → Link auf `/qm-wissen/root-cause-analysis` setzen

#### 3. Hub-Seite prüfen
**Datei:** `/pages/qm-wissen/index.js`

Falls dort Artikel-Karten angezeigt werden, neue Karte für Root Cause Analysis hinzufügen:
```jsx
{
  title: 'Root Cause Analysis',
  description: '5-Why, Ishikawa und systematische Ursachenanalyse',
  href: '/qm-wissen/root-cause-analysis',
  category: 'Methoden'
}
```

---

## Meta-Informationen

**Dateipfad:** `/pages/qm-wissen/root-cause-analysis.js`  
**Lesezeit:** 10 Minuten  
**Level:** Fortgeschritten  
**Breadcrumb:** QM-Wissen › Methoden › Root Cause Analysis

### Navigation-Links
- **Vorheriger:** `/qm-wissen/fmea` (FMEA Grundlagen)
- **Nächster:** `/qm-wissen/capa` (CAPA richtig umsetzen) *oder Platzhalter*

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
  <title>Root Cause Analysis: 5-Why und Ishikawa erklärt | QCore Consulting</title>
  <meta name="description" content="Root Cause Analysis einfach erklärt: 5-Why-Methode, Ishikawa-Diagramm und systematische Ursachenanalyse. Praktische Anleitung mit Beispielen aus der Industrie." />
</Head>
```

---

## Style-Komponenten (wie bei FMEA/ISO 13485)

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
  <p className="text-gray-300 font-semibold mb-1">⚠️ Häufiger Fehler</p>
  <p className="text-gray-200 m-0">[Text]</p>
</div>
```

### Tabellen
```jsx
<div className="overflow-x-auto mb-6">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-slate-700/80">
        <th className="text-left p-3 text-gray-200 font-medium">Spalte</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-slate-600/30 border-b border-slate-600/50">
        <td className="p-3 text-gray-800">Wert</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

# Root Cause Analysis: Ursachen systematisch finden

## 1. Was ist Root Cause Analysis?

**Definition-Box:**
> **Root Cause Analysis (RCA)** ist ein systematischer Problemlösungsprozess zur Identifikation der grundlegenden Ursache(n) eines Problems oder Fehlers. Ziel ist nicht die Behandlung von Symptomen, sondern die dauerhafte Beseitigung der Fehlerquelle.

**Der Unterschied:**

| Ansatz | Frage | Ergebnis |
|--------|-------|----------|
| Symptombehandlung | "Wie beheben wir das Problem schnell?" | Problem tritt wieder auf |
| Root Cause Analysis | "Warum ist das Problem entstanden?" | Problem wird dauerhaft gelöst |

**Info-Box:**
> Root Cause Analysis ist keine einzelne Methode, sondern ein Oberbegriff für verschiedene Techniken. Die bekanntesten sind **5-Why** und das **Ishikawa-Diagramm**.

---

## 2. Die 5-Why-Methode

### Grundprinzip

Die 5-Why-Methode wurde von Taiichi Ohno bei Toyota entwickelt. Das Prinzip ist simpel: Frage fünfmal "Warum?", um von der Oberfläche zur Wurzel des Problems vorzudringen.

**Definition-Box:**
> **5-Why:** Iterative Fragetechnik, bei der durch wiederholtes Fragen nach dem "Warum" die tieferliegende Ursache eines Problems aufgedeckt wird. Die Zahl 5 ist ein Richtwert – manchmal reichen 3 Fragen, manchmal braucht man 7.

### Beispiel: Maschine steht still

| Frage | Antwort |
|-------|---------|
| **1. Warum** steht die Maschine? | Die Sicherung ist durchgebrannt. |
| **2. Warum** ist die Sicherung durchgebrannt? | Der Motor war überlastet. |
| **3. Warum** war der Motor überlastet? | Das Lager war nicht ausreichend geschmiert. |
| **4. Warum** war das Lager nicht geschmiert? | Die Schmierpumpe fördert nicht genug. |
| **5. Warum** fördert die Pumpe nicht genug? | Der Pumpenfilter ist verstopft. |

**→ Root Cause:** Verstopfter Pumpenfilter  
**→ Maßnahme:** Filterreinigung in Wartungsplan aufnehmen

**Praxis-Tipp-Box:**
> Stoppen Sie nicht bei der ersten "bequemen" Antwort. Wenn die Antwort auf ein Why mit "menschliches Versagen" endet, fragen Sie weiter: Warum konnte der Mensch diesen Fehler machen? Was hat das System nicht verhindert?

### Regeln für effektive 5-Why

1. **Faktenbasiert arbeiten** – keine Vermutungen
2. **Am Ort des Geschehens** (Gemba) durchführen
3. **Team einbeziehen** – verschiedene Perspektiven
4. **Nicht bei Personen stoppen** – Systemfehler suchen
5. **Dokumentieren** – für spätere Nachvollziehbarkeit

**Warnung-Box:**
> **Typischer Fehler:** Die 5-Why-Analyse endet bei "Mitarbeiter hat nicht aufgepasst". Das ist keine Root Cause! Fragen Sie weiter: Warum konnte er nicht aufpassen? War die Arbeitsanweisung unklar? Fehlte eine Prüfung?

---

## 3. Das Ishikawa-Diagramm (Fischgräten-Diagramm)

### Grundprinzip

Das Ishikawa-Diagramm wurde von Kaoru Ishikawa in den 1960er Jahren entwickelt. Es visualisiert mögliche Ursachen eines Problems in kategorisierten Zweigen – ähnlich einer Fischgräte.

**Definition-Box:**
> **Ishikawa-Diagramm:** Grafische Methode zur strukturierten Sammlung und Kategorisierung potenzieller Fehlerursachen. Der "Kopf" des Fisches ist das Problem, die "Gräten" sind Ursachenkategorien.

### Die 6 M (klassische Kategorien)

| M | Kategorie | Beispielfragen |
|---|-----------|----------------|
| **M**ensch | Personal, Qualifikation | Ausbildung? Erfahrung? Motivation? |
| **M**aschine | Anlagen, Werkzeuge | Zustand? Wartung? Kalibrierung? |
| **M**aterial | Rohstoffe, Zukaufteile | Qualität? Spezifikation? Lieferant? |
| **M**ethode | Prozesse, Verfahren | Arbeitsanweisung? Reihenfolge? |
| **M**essung | Prüfmittel, Messverfahren | Genauigkeit? Häufigkeit? |
| **M**itwelt | Umgebung, Umwelt | Temperatur? Feuchtigkeit? Sauberkeit? |

**Info-Box:**
> Je nach Branche werden die Kategorien angepasst. In der Dienstleistung z.B.: Mensch, Methode, Material, Management, Umgebung.

### Beispiel: Hohe Ausschussrate bei Spritzguss

```
                    ┌─────────────────────────────────────┐
                    │                                     │
    Mensch ─────────┤     Maschine ─────────┤            │
    ├─ Unerfahren   │     ├─ Verschleiß     │            │
    ├─ Schichtende  │     ├─ Temperatur     │            │
    └─ Stress       │     └─ Düsenverstopft │            │
                    │                        │            │
                    │          ┌─────────────┘     ┌──────┤
                    │          │                   │      │
                    │    [HOHE AUSSCHUSSRATE] ─────┘      │
                    │          │                          │
                    │          └─────────────┐            │
    Material ───────┤     Methode ───────────┤            │
    ├─ Chargenschwankung│  ├─ Parameter falsch│           │
    ├─ Feuchtigkeit │     ├─ Kein Standard   │            │
    └─ Lieferant B  │     └─ Rüstzeit zu kurz│            │
                    │                        │            │
    Messung ────────┤     Mitwelt ───────────┤            │
    ├─ Prüfintervall│     ├─ Hallenwärme     │            │
    └─ Lehre defekt │     └─ Zugluft         │            │
                    │                                     │
                    └─────────────────────────────────────┘
```

### Durchführung Schritt für Schritt

1. **Problem definieren** (rechts am "Fischkopf")
2. **Hauptkategorien festlegen** (6 M oder angepasst)
3. **Brainstorming** – alle möglichen Ursachen sammeln
4. **Zuordnen** – Ursachen den Kategorien zuweisen
5. **Vertiefen** – für jede Ursache: Warum? (Sub-Gräten)
6. **Priorisieren** – wahrscheinlichste Ursachen markieren
7. **Verifizieren** – Hypothesen mit Daten prüfen

**Praxis-Tipp-Box:**
> Führen Sie das Ishikawa-Diagramm am Whiteboard oder Flipchart durch – nicht am PC. Die visuelle, gemeinsame Arbeit fördert die Kreativität und Beteiligung des Teams.

---

## 4. Weitere RCA-Methoden

**Tabelle: Übersicht RCA-Methoden**

| Methode | Beschreibung | Einsatz |
|---------|--------------|---------|
| **5-Why** | Iteratives Warum-Fragen | Schnelle Analyse, einfache Probleme |
| **Ishikawa** | Kategorisierte Ursachensammlung | Komplexe Probleme, Teamarbeit |
| **Fault Tree Analysis (FTA)** | Top-Down, logische Verknüpfungen | Sicherheitskritische Systeme |
| **Pareto-Analyse** | 80/20-Regel, häufigste Ursachen | Priorisierung bei vielen Fehlern |
| **Kepner-Tregoe** | Strukturierte Problemanalyse | Komplexe, unklare Situationen |
| **Apollo Root Cause** | Realitätsbasierte Ursachenketten | Investigative Analysen |

**Info-Box:**
> In der Praxis werden oft mehrere Methoden kombiniert: Ishikawa für die Ursachensammlung, 5-Why für die Vertiefung, Pareto für die Priorisierung.

---

## 5. RCA in der Praxis: Ein Beispiel

### Ausgangssituation

Ein MedTech-Unternehmen erhält Kundenreklamationen: "Batterie des tragbaren Monitors entlädt sich zu schnell."

### Schritt 1: Ishikawa-Brainstorming

**Gesammelte Ursachen:**

| Kategorie | Mögliche Ursachen |
|-----------|-------------------|
| **Mensch** | Falsche Handhabung, Lagerung beim Kunden |
| **Maschine** | Produktionsfehler, Lötqualität |
| **Material** | Batteriequalität, neuer Lieferant |
| **Methode** | Firmware-Bug, Energiemanagement |
| **Messung** | Endprüfung erfasst Problem nicht |
| **Mitwelt** | Transport, Temperatur im Lager |

### Schritt 2: Priorisierung mit Daten

- Reklamationen erst seit Monat X → Korrelation mit neuem Batterielieferant
- Seriennummern-Analyse → betrifft nur bestimmte Chargen
- Labor-Test → neue Batterien haben 15% weniger Kapazität als spezifiziert

### Schritt 3: 5-Why auf priorisierte Ursache

| Frage | Antwort |
|-------|---------|
| **1. Warum** entlädt sich die Batterie zu schnell? | Die Kapazität ist geringer als spezifiziert. |
| **2. Warum** ist die Kapazität geringer? | Der neue Lieferant verwendet andere Zellen. |
| **3. Warum** wurden andere Zellen akzeptiert? | Die Wareneingangsprüfung prüft nur Spannung, nicht Kapazität. |
| **4. Warum** wird Kapazität nicht geprüft? | Es gab keine Spezifikation dafür. |
| **5. Warum** keine Spezifikation? | Bei Lieferantenwechsel wurde kein Design Review durchgeführt. |

**→ Root Cause:** Fehlender Design Review bei Lieferantenwechsel  
**→ Maßnahme:** Prozess "Lieferantenwechsel kritischer Komponenten" mit verpflichtendem Review einführen

---

## 6. RCA im Qualitätsmanagement

**Tabelle: RCA-Anforderungen nach Normen**

| Norm | Anforderung | Kapitel |
|------|-------------|---------|
| ISO 9001 | Ursachenanalyse bei Nichtkonformitäten | 10.2.1 |
| ISO 13485 | Korrekturmaßnahmen inkl. Ursachenanalyse | 8.5.2 |
| IATF 16949 | Systematische Problemlösung (8D) | 10.2.3 |
| FDA 21 CFR 820 | CAPA mit Root Cause | §820.100 |

**Info-Box:**
> RCA ist keine eigenständige Norm-Anforderung, sondern integraler Bestandteil von CAPA (Corrective and Preventive Action). Ohne echte Ursachenanalyse keine wirksame Korrekturmaßnahme.

---

## 7. Häufige Fehler bei der Root Cause Analysis

**Warnung-Box:**
> Diese Fehler führen dazu, dass Probleme wiederkehren:

### Fehler 1: Zu früh aufhören

Nach dem ersten "Warum" ist meist nur ein Symptom gefunden. Graben Sie tiefer!

### Fehler 2: Schuld statt System

"Mitarbeiter X hat Fehler gemacht" ist keine Root Cause. Fragen Sie: Warum konnte der Fehler passieren? Was hat das System nicht verhindert?

### Fehler 3: Keine Daten

Vermutungen statt Fakten führen zu falschen Maßnahmen. Verifizieren Sie Ihre Hypothesen!

### Fehler 4: Alleine arbeiten

RCA ist Teamarbeit. Unterschiedliche Perspektiven finden unterschiedliche Ursachen.

### Fehler 5: Keine Dokumentation

Ohne Dokumentation gehen Erkenntnisse verloren. Ähnliche Probleme werden erneut analysiert.

---

## 8. Zusammenfassung

**Definition-Box:**
> **Root Cause Analysis auf einen Blick:**
> 
> ✓ Ziel: Grundursache finden, nicht Symptome behandeln  
> ✓ **5-Why:** Einfach, schnell, iterativ  
> ✓ **Ishikawa:** Strukturiert, visuell, für komplexe Probleme  
> ✓ Immer im Team durchführen  
> ✓ Faktenbasiert arbeiten, Hypothesen verifizieren  
> ✓ System hinterfragen, nicht Menschen beschuldigen  
> ✓ Ergebnisse dokumentieren

---

## CTA-Bereich

**Box mit dunkelblauem Hintergrund:**

> **Probleme tauchen immer wieder auf?**
> 
> Ich unterstütze Sie bei:
> - RCA-Workshops moderieren
> - Systematische Problemlösungsprozesse etablieren
> - CAPA-Systeme aufbauen und verbessern
> 
> → [Kostenloses Erstgespräch vereinbaren](/kontakt)

---

## Navigation

- ← Vorheriger: [FMEA Grundlagen](/qm-wissen/fmea)
- → Nächster: [CAPA richtig umsetzen](/qm-wissen/capa)

---

# Checkliste für Claude Code

## Dateien erstellen/ändern:

- [ ] `/pages/qm-wissen/root-cause-analysis.js` erstellen
- [ ] `/components/QMWissenSidebar.js` aktualisieren (neuer Eintrag unter "Methoden")
- [ ] `/pages/qm-wissen/fmea.js` → "Nächster Artikel"-Link auf root-cause-analysis setzen
- [ ] `/pages/qm-wissen/index.js` → Falls Artikel-Grid vorhanden, neue Karte hinzufügen

## Nach Erstellung testen:

- [ ] Seite lädt ohne Fehler
- [ ] Sidebar zeigt neuen Artikel
- [ ] Navigation (←/→) funktioniert
- [ ] Breadcrumb korrekt
- [ ] Responsive Layout funktioniert

## Git:

```bash
git add .
git commit -m "Add Root Cause Analysis article to QM-Wissen"
git push
```
