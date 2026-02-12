# Claude Code Prompt: Stichprobenrechner (Sample Size Calculator)

## Kontext

QCore (qcore-consulting.de) ist eine Next.js Website für QM-Consulting im MedTech/Pharma-Bereich. Wir bauen einen kostenlosen, browserbasierten Stichprobenrechner als Tool-Seite unter `/tools/stichprobe`. Das Tool wird der erste "echte" Rechner in der QCore Tool-Suite (der NC-Triage ist ein iframe-basierter Entscheidungsbaum).

**Ziel:** Der beste deutschsprachige Stichprobenrechner für QM-Professionals. SEO-Magnet, Bookmark-Tool, Consulting-Brücke.

## Projektpfad

```
F:\QCore\40_Entwicklung\Website\
```

## Schritt 0: Design System lesen (PFLICHT)

**Lies vor Beginn:**
- `DESIGN/DESIGN-SYSTEM.md` — Komplettes Design System
- `DESIGN/PRODUCT-PAGE-TEMPLATE.md` — Seitenstruktur-Template
- `DESIGN/design-preview.html` — Visual Reference

Alle Styles, Farben, Glassmorphism-Patterns, Typografie und Anti-Patterns sind dort definiert. Halte dich strikt daran.

---

## Design System Kurzreferenz

### Farben
```
#0f172a — Darkest headlines
#1e293b — Headlines, nav links
#1e3a8a — Primary blue, accents
#334155 — Body text
#475569 — Muted text
#64748b — Light/disabled text
#94a3b8 — Lighter text
#22c55e / #166534 — Success/Live
#f59e0b / #b45309 — Warning
```

### Glassmorphism Box (IMMER verwenden, NIE `bg-white`)
```jsx
const boxStyle = {
  backgroundColor: 'rgba(30, 58, 138, 0.06)',
  border: '1px solid rgba(30, 58, 138, 0.1)',
  backdropFilter: 'blur(3px)',
};
```

### Glass CTA Button
```jsx
style={{
  backgroundColor: 'rgba(191, 219, 254, 0.35)',
  backdropFilter: 'blur(3px)',
  border: '1px solid rgba(191, 219, 254, 0.5)',
  color: '#1e3a8a'
}}
className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02]"
```

### Typografie
```jsx
// H1 — Cormorant serif
style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
className="text-5xl lg:text-6xl font-semibold mb-4"

// H2 — Cormorant serif
style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
className="text-4xl md:text-5xl font-bold mb-16"

// H3 — Cormorant serif
style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
className="text-2xl font-semibold"
```

### Page Background + Layout
```jsx
// Background (wie Produktseiten)
<div className="fixed inset-0 -z-10">
  <div className="absolute inset-0"
    style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)' }}
  />
</div>

// Layout
<main className="pt-24 pb-16 px-6 lg:px-12">
  <div className="max-w-screen-2xl mx-auto">
```

### Translation Object Pattern
```jsx
const t = {
  de: { hero: { title: '...', subtitle: '...' }, ... },
  en: { hero: { title: '...', subtitle: '...' }, ... },
};
const text = t[locale] || t.de;
```

### Anti-Patterns (NICHT TUN)
- KEIN `bg-white` → immer Glass-Style
- KEIN solid-color Button → immer Glass-Button  
- KEINE mixed border-radii → `rounded-xl` Cards, `rounded-lg` Buttons
- IMMER `backdropFilter: 'blur(3px)'`
- KEIN Footer vergessen → `import Footer from '../components/Footer'`

---

## Datei-Struktur (zu erstellen)

```
pages/
  tools/
    stichprobe.js          ← Hauptseite (Tool)

data/
  aqlTables.js             ← AQL Lookup-Tabellen (ISO 2859-1)
  crTables.js              ← C/R-Referenztabellen
```

**Keine separaten Komponenten-Dateien** — der gesamte Rechner lebt in `stichprobe.js` mit internen Funktionskomponenten. Halte es einfach. (Wenn die Datei >800 Zeilen wird, können wir später refactoren.)

---

## Seiten-Architektur

### Imports
```jsx
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
```

### Seitenstruktur

```
1. <Head> — SEO (Title, Description, Canonical, OG)
2. Background Gradient
3. <Navigation />
4. <main> → max-w-screen-2xl
   a) Hero-Bereich (H1 + Subtitle)
   b) Quick-Select (3 Modul-Karten)
   c) Tab-Navigation (für schnellen Wechsel)
   d) Aktives Modul (Eingabe + Ausgabe)
   e) Risiko-Info-Panel (bei C/R-Modul)
   f) SEO-Content (FAQ / Erklärtext)
   g) Consulting-CTA
5. <Footer />
```

---

## SEO

### Head Tags
```jsx
<Head>
  <title>{text.seo.title}</title>
  <meta name="description" content={text.seo.description} />
  <link rel="canonical" href={`https://qcore-consulting.de/${locale === 'en' ? 'en/' : ''}tools/stichprobe`} />
  <meta property="og:title" content={text.seo.title} />
  <meta property="og:description" content={text.seo.description} />
  <meta property="og:type" content="website" />
</Head>
```

### SEO Translation Strings
```
DE title: "Stichprobenrechner — AQL, Validierung & Cpk kostenlos berechnen | QCore"
DE desc: "Kostenloser Stichprobenrechner für QM-Professionals: AQL nach ISO 2859-1, 
         Confidence/Reliability für Prozessvalidierung, audit-sichere Normreferenzen. 
         MedTech & Pharma."

EN title: "Sample Size Calculator — AQL, Validation & Cpk | QCore"
EN desc: "Free sample size calculator for QM professionals: AQL per ISO 2859-1, 
         confidence/reliability for process validation, audit-ready norm references. 
         MedTech & Pharma."
```

### SEO-Content-Bereich (unter dem Rechner)

Ein aufklappbarer FAQ-Bereich (`<details>/<summary>` oder Accordion) mit H2/H3 für SEO:

```
H2: "Häufige Fragen zur Stichprobenberechnung"
  H3: "Was ist die AQL (Acceptable Quality Limit)?"
  H3: "Wie berechne ich die Stichprobengröße für eine Prozessvalidierung?"
  H3: "Was bedeutet 95/95 Confidence/Reliability?"
  H3: "Welche Norm gilt für Stichprobenpläne in der Medizintechnik?"
  H3: "Was ist der Unterschied zwischen Attribut- und Variablenprüfung?"
```

Jeder FAQ-Eintrag: 3-5 Sätze, enthält Keywords natürlich, verlinkt ggf. auf andere QCore-Seiten.

---

## Modul A: AQL-Rechner

### Eingabefelder

| Feld | Typ | Optionen | Default |
|------|-----|----------|---------|
| Losgröße | Number Input | 2–500.000 | leer (Pflichtfeld) |
| Prüfniveau | Select/Dropdown | I, II, III | II |
| AQL | Select/Dropdown | 0.065, 0.10, 0.15, 0.25, 0.40, 0.65, 1.0, 1.5, 2.5, 4.0, 6.5, 10.0 | 1.0 |
| Prüfschärfe | Radio/Tabs | Normal, Verschärft, Reduziert | Normal |

### Lookup-Logik

**Schritt 1: Losgröße + Prüfniveau → Code Letter**

ISO 2859-1, Table 1:

```javascript
// data/aqlTables.js

export const codeLetter = [
  // [minLot, maxLot, levelI, levelII, levelIII]
  [2, 8, 'A', 'A', 'B'],
  [9, 15, 'A', 'B', 'C'],
  [16, 25, 'B', 'C', 'D'],
  [26, 50, 'C', 'D', 'E'],
  [51, 90, 'C', 'E', 'F'],
  [91, 150, 'D', 'F', 'G'],
  [151, 280, 'E', 'G', 'H'],
  [281, 500, 'F', 'H', 'J'],
  [501, 1200, 'G', 'J', 'K'],
  [1201, 3200, 'H', 'K', 'L'],
  [3201, 10000, 'J', 'L', 'M'],
  [10001, 35000, 'K', 'M', 'N'],
  [35001, 150000, 'L', 'N', 'P'],
  [150001, 500000, 'M', 'P', 'Q'],
  [500001, Infinity, 'N', 'Q', 'R'],
];

export function getCodeLetter(lotSize, level) {
  const levelIndex = { 'I': 2, 'II': 3, 'III': 4 };
  const row = codeLetter.find(r => lotSize >= r[0] && lotSize <= r[1]);
  return row ? row[levelIndex[level]] : null;
}
```

**Schritt 2: Code Letter + AQL → n, Ac, Re**

ISO 2859-1, Table 2-A (Normal Single Sampling):

```javascript
// Struktur: { [codeLetter]: { sampleSize: n, plans: { [aql]: { ac, re } | '↓' | '↑' } } }
// '↓' = use first plan below with arrow; '↑' = use first plan above with arrow
// Bei Pfeilen: navigiere zum nächsten/vorherigen Code Letter der einen Plan hat

export const normalSingle = {
  'A': { n: 2, plans: { /* ... */ } },
  'B': { n: 3, plans: { /* ... */ } },
  'C': { n: 5, plans: { /* ... */ } },
  'D': { n: 8, plans: { /* ... */ } },
  'E': { n: 13, plans: { /* ... */ } },
  'F': { n: 20, plans: { /* ... */ } },
  'G': { n: 32, plans: { /* ... */ } },
  'H': { n: 50, plans: { /* ... */ } },
  'J': { n: 80, plans: { /* ... */ } },
  'K': { n: 125, plans: { /* ... */ } },
  'L': { n: 200, plans: { /* ... */ } },
  'M': { n: 315, plans: { /* ... */ } },
  'N': { n: 500, plans: { /* ... */ } },
  'P': { n: 800, plans: { /* ... */ } },
  'Q': { n: 1250, plans: { /* ... */ } },
  'R': { n: 2000, plans: { /* ... */ } },
};
```

**WICHTIG:** Die komplette AQL-Tabelle 2-A muss vollständig implementiert werden. Sie enthält für jeden Code Letter und jeden AQL-Wert die Ac/Re-Zahlen. Bei einigen Kombinationen gibt es Pfeile (↓/↑), die bedeuten: "Verwende den nächsten Code Letter mit einer gültigen Kombination und dessen Stichprobengröße."

Implementiere die vollständige Tabelle 2-A als JSON-Objekt in `data/aqlTables.js`. Die Daten sind öffentlich in ISO 2859-1 / ANSI Z1.4. Stelle sicher, dass die Pfeil-Logik korrekt funktioniert.

**Tipp:** Die vollständige Tabelle findest du z.B. auf https://www.qcadvisor.com/wp-content/uploads/2023/05/AQL-QCADVISOR.pdf oder in der ANSI Z1.4 Zusammenfassung.

### Ausgabe

Zeige prominent:
```
┌─────────────────────────────────────────┐
│ ERGEBNIS                                │
│                                         │
│ Kennbuchstabe:     K                    │
│ Stichprobenumfang: n = 125              │
│ Annahmezahl:       Ac = 3               │
│ Rückweisezahl:     Re = 4               │
│                                         │
│ → Bei ≤3 fehlerhaften Einheiten:        │
│   Los ANNEHMEN                          │
│ → Bei ≥4 fehlerhaften Einheiten:        │
│   Los ZURÜCKWEISEN                      │
│                                         │
│ Norm: ISO 2859-1:2014, Tabelle 2-A     │
│                                         │
│ [📋 Text für Bericht kopieren]          │
└─────────────────────────────────────────┘
```

### Copy-Paste-Output (AQL)

Beim Klick auf "Text für Bericht kopieren" wird folgender Plain-Text in die Zwischenablage kopiert:

```
STICHPROBENPLAN — Attributive Annahmestichprobenprüfung
================================================================
Norm:              ISO 2859-1:2014, Tabelle 2-A (Einfach-Stichprobenplan)
Losgröße:          {lotSize} Einheiten
Prüfniveau:        Allgemeines Prüfniveau {level} ({severity})
AQL:               {aql} %

Kennbuchstabe:     {codeLetter}
Stichprobenumfang: n = {n}
Annahmezahl (Ac):  {ac}
Rückweisezahl (Re): {re}

Entscheidungsregel:
Bei ≤{ac} fehlerhaften Einheiten in der Stichprobe wird das Los angenommen.
Bei ≥{re} fehlerhaften Einheiten wird das Los zurückgewiesen.

Referenz: ISO 2859-1:2014, Abschnitt 10, Tabelle 2-A
Berechnet am {date} via QCore Stichprobenrechner
(qcore-consulting.de/tools/stichprobe)
```

**Implementierung:** `navigator.clipboard.writeText(...)` mit Fallback. Nach dem Kopieren: Button-Text ändert sich kurz zu "✓ Kopiert!" (2 Sekunden).

---

## Modul B: C/R-Rechner (Attributiv / Confidence-Reliability)

### Eingabefelder

| Feld | Typ | Optionen | Default |
|------|-----|----------|---------|
| Konfidenzniveau (C) | Select oder Button-Group | 90%, 95%, 99% | 95% |
| Zuverlässigkeit (R) | Select oder Button-Group | 90%, 95%, 99%, 99.9% | 95% |
| Zulässige Fehler (c) | Select oder Button-Group | 0, 1, 2 | 0 |

### Berechnung

```javascript
function calculateCR(confidence, reliability, acceptNumber) {
  const C = confidence / 100; // z.B. 0.95
  const R = reliability / 100; // z.B. 0.95
  const p = 1 - R; // Anteil Fehler = 1 - Zuverlässigkeit
  
  if (acceptNumber === 0) {
    // c=0: n = ceil(ln(1-C) / ln(R))
    return Math.ceil(Math.log(1 - C) / Math.log(R));
  }
  
  // c>0: Finde kleinstes n, bei dem die kumulative Binomialverteilung
  // P(X ≤ c | n, p) ≤ 1-C
  // Äquivalent: P(X ≤ c | n, p) ≤ alpha (= 1-C)
  // Iterativ lösen
  for (let n = acceptNumber + 1; n < 50000; n++) {
    let cumProb = 0;
    for (let k = 0; k <= acceptNumber; k++) {
      cumProb += binomialPMF(n, k, p);
    }
    if (cumProb <= (1 - C)) {
      return n;
    }
  }
  return null; // Sollte nicht vorkommen
}

function binomialPMF(n, k, p) {
  return binomialCoeff(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

function binomialCoeff(n, k) {
  // Verwende logarithmische Berechnung für große n
  if (k === 0 || k === n) return 1;
  let result = 0;
  for (let i = 0; i < k; i++) {
    result += Math.log(n - i) - Math.log(i + 1);
  }
  return Math.round(Math.exp(result));
}
```

**Validierung:** Prüfe die Ergebnisse gegen bekannte Werte:

| C | R | c | n (erwartet) |
|---|---|---|-------------|
| 95% | 90% | 0 | 29 |
| 95% | 95% | 0 | 59 |
| 95% | 99% | 0 | 299 |
| 95% | 99.9% | 0 | 2995 |
| 90% | 90% | 0 | 22 |
| 99% | 99% | 0 | 459 |
| 95% | 95% | 1 | 93 |
| 95% | 99% | 1 | 473 |

### Risiko-Info-Panel

Neben dem C/R-Eingabebereich (auf Desktop rechts, auf Mobile darunter) wird ein Info-Panel angezeigt:

```jsx
// Immer sichtbar wenn Modul B aktiv
<div style={boxStyle} className="rounded-xl p-6">
  <h3>💡 {text.cr.riskGuide.title}</h3>
  <p className="text-sm mb-4" style={{ color: '#475569' }}>
    {text.cr.riskGuide.intro}
  </p>
  <table>
    <thead>
      <tr><th>Risikoklasse</th><th>C/R-Empfehlung</th><th>n (c=0)</th></tr>
    </thead>
    <tbody>
      <tr><td>Klasse I (gering)</td><td>90/90</td><td>22</td></tr>
      <tr><td>Klasse IIa (mittel)</td><td>95/95</td><td>59</td></tr>
      <tr><td>Klasse IIb (erhöht)</td><td>95/99</td><td>299</td></tr>
      <tr><td>Klasse III (hoch)</td><td>99/99</td><td>459</td></tr>
    </tbody>
  </table>
  <p className="text-xs mt-3" style={{ color: '#94a3b8' }}>
    Basierend auf ISO 14971 Risikobewertung. Die endgültige Festlegung
    obliegt dem QMB im Rahmen der dokumentierten Risikoanalyse.
  </p>
</div>
```

### Ausgabe

```
┌──────────────────────────────────────────────┐
│ ERGEBNIS                                     │
│                                              │
│ Erforderlicher Stichprobenumfang: n = 59     │
│                                              │
│ Interpretation:                              │
│ Mit 95% Sicherheit sind mindestens 95% der   │
│ Grundgesamtheit konform (bei 0 Fehlern in    │
│ der Stichprobe).                             │
│                                              │
│ Formel: n = ⌈ln(0,05) / ln(0,95)⌉ = 59     │
│                                              │
│ Norm: ISO 16269-6:2014                       │
│ Bezug: ISO 13485:2016, §7.5.6               │
│                                              │
│ [📋 Text für Bericht kopieren]               │
└──────────────────────────────────────────────┘
```

### Copy-Paste-Output (C/R)

```
STICHPROBENPLAN — Erfolgsbasierte Attributprüfung (Confidence/Reliability)
================================================================
Prüfziel:              Prozessvalidierung (OQ/PQ)
Konfidenzniveau (C):   {confidence} %
Zuverlässigkeit (R):   {reliability} %
Annahmezahl (c):       {acceptNumber} {acceptNumber === 0 ? '(Null-Fehler-Plan)' : ''}

Erforderlicher Stichprobenumfang: n = {n}

Statistische Begründung:
Bei einem Stichprobenumfang von n = {n} und {acceptNumber === 0 ? '0 gefundenen Fehlern' : `≤${acceptNumber} gefundenen Fehlern`} kann
mit einer statistischen Sicherheit von {confidence} % davon ausgegangen werden,
dass mindestens {reliability} % der Grundgesamtheit konform sind.
{acceptNumber === 0 
  ? `Formel: n = ⌈ln(1 − C) / ln(R)⌉ = ⌈ln(${(1-confidence/100).toFixed(2)}) / ln(${(reliability/100).toFixed(4)})⌉ = ${n}`
  : `Berechnung: Kumulative Binomialverteilung P(X ≤ ${acceptNumber} | n=${n}, p=${(1-reliability/100).toFixed(4)}) ≤ ${(1-confidence/100).toFixed(2)}`
}

Referenz: ISO 16269-6:2014; risikobasierter Ansatz gem. ISO 13485:2016, §7.5.6
Berechnet am {date} via QCore Stichprobenrechner
(qcore-consulting.de/tools/stichprobe)
```

---

## Quick-Select (Einstieg)

Am Anfang der Seite, nach dem Hero, 3 klickbare Karten (Glass-Style):

```jsx
const modules = [
  {
    id: 'aql',
    icon: '📦', // oder Lucide-Icon
    title: { de: 'Wareneingangsprüfung', en: 'Incoming Inspection' },
    subtitle: { de: 'AQL nach ISO 2859-1', en: 'AQL per ISO 2859-1' },
    description: { de: 'Losgröße + Prüfniveau → Stichprobe + Ac/Re', en: 'Lot size + level → sample + Ac/Re' },
  },
  {
    id: 'cr',
    icon: '✅',
    title: { de: 'Validierungsstichprobe', en: 'Validation Sample Size' },
    subtitle: { de: 'Confidence/Reliability (c=0, c=1...)', en: 'Confidence/Reliability' },
    description: { de: 'Confidence + Reliability → benötigtes n', en: 'Confidence + Reliability → required n' },
  },
  {
    id: 'cpk',
    icon: '📊',
    title: { de: 'Prozessfähigkeit (Cpk)', en: 'Process Capability (Cpk)' },
    subtitle: { de: 'Variablenprüfung — kommt bald', en: 'Variable inspection — coming soon' },
    description: { de: 'n + C/R → erforderlicher Ppk', en: 'n + C/R → required Ppk' },
    disabled: true, // V1.1
  },
];
```

Karten-Style:
```jsx
<div
  onClick={() => !mod.disabled && setActiveModule(mod.id)}
  style={{
    ...boxStyle,
    cursor: mod.disabled ? 'default' : 'pointer',
    opacity: mod.disabled ? 0.5 : 1,
    borderColor: activeModule === mod.id ? 'rgba(30, 58, 138, 0.4)' : boxStyle.border,
    backgroundColor: activeModule === mod.id ? 'rgba(30, 58, 138, 0.12)' : boxStyle.backgroundColor,
  }}
  className="rounded-xl p-6 transition-all hover:scale-[1.02]"
>
```

**Darunter:** Schmale Tab-Leiste für schnellen Wechsel (für erfahrene User die nicht scrollen wollen).

---

## Consulting-CTA (unter Ergebnis)

```jsx
<div style={boxStyle} className="rounded-xl p-6 mt-8 text-center">
  <p style={{ color: '#334155' }} className="text-lg mb-4">
    {text.cta.text}
    {/* DE: "Ihr Validierungsplan braucht mehr als einen Rechner?" */}
    {/* EN: "Your validation plan needs more than a calculator?" */}
  </p>
  <a
    href="/kontakt"
    style={{
      backgroundColor: 'rgba(191, 219, 254, 0.35)',
      backdropFilter: 'blur(3px)',
      border: '1px solid rgba(191, 219, 254, 0.5)',
      color: '#1e3a8a'
    }}
    className="inline-block px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02]"
  >
    {text.cta.button}
    {/* DE: "Kostenloses Erstgespräch buchen" */}
    {/* EN: "Book a free consultation" */}
  </a>
</div>
```

---

## Tooltips

Alle Fachbegriffe bekommen ein kleines Info-Icon (ⓘ) das bei Hover/Click einen Tooltip zeigt. Verwende ein einfaches `<span>` mit `title`-Attribut oder baue eine minimale Tooltip-Komponente (CSS-only mit `::after` pseudo-element, kein npm-Package nötig).

Tooltip-Texte (in Translation Object):

```javascript
tooltips: {
  lotSize: {
    de: 'Die Gesamtanzahl der Einheiten im zu prüfenden Los (Charge, Lieferung).',
    en: 'Total number of units in the lot (batch, shipment) to be inspected.',
  },
  inspectionLevel: {
    de: 'Prüfniveau II ist der Standard. Niveau I = weniger Prüfung (bei vertrautem Lieferanten), Niveau III = mehr Prüfung (bei neuen Lieferanten oder kritischen Teilen).',
    en: 'Level II is standard. Level I = less inspection (trusted supplier), Level III = more inspection (new supplier or critical parts).',
  },
  aql: {
    de: 'Acceptable Quality Limit — der maximal tolerierbare Anteil fehlerhafter Einheiten in Prozent. Niedrigere AQL = strengere Prüfung.',
    en: 'Acceptable Quality Limit — maximum tolerable percentage of defective units. Lower AQL = stricter inspection.',
  },
  confidence: {
    de: 'Statistische Sicherheit: Wie sicher wollen Sie sein, dass Ihre Aussage stimmt? 95% ist der Standard in der Medizintechnik.',
    en: 'How confident do you want to be that your statement is correct? 95% is standard in medical devices.',
  },
  reliability: {
    de: 'Zuverlässigkeit: Welcher Mindestanteil der Grundgesamtheit soll konform sein? Bei 95% dürfen maximal 5% fehlerhaft sein.',
    en: 'What minimum percentage of the population should be conforming? At 95%, max 5% may be defective.',
  },
  acceptNumber: {
    de: 'Wie viele fehlerhafte Einheiten dürfen in der Stichprobe gefunden werden? c=0 (Null-Fehler-Plan) ist am strengsten aber erfordert die kleinste Stichprobe.',
    en: 'How many defective units are allowed in the sample? c=0 (zero-defect plan) is strictest but requires smallest sample.',
  },
  codeLetter: {
    de: 'Der Kennbuchstabe bestimmt zusammen mit dem AQL-Wert den Stichprobenplan. Er ergibt sich aus Losgröße und Prüfniveau.',
    en: 'The code letter, together with the AQL value, determines the sampling plan. Derived from lot size and inspection level.',
  },
},
```

---

## Hero-Bereich

```jsx
{/* Hero */}
<div className="text-center mb-16">
  <h1
    style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
    className="text-5xl lg:text-6xl font-semibold mb-4"
  >
    {text.hero.title}
    {/* DE: "Stichprobenrechner" */}
    {/* EN: "Sample Size Calculator" */}
  </h1>
  <p className="text-xl max-w-3xl mx-auto" style={{ color: '#475569' }}>
    {text.hero.subtitle}
    {/* DE: "AQL, Validierung & Prozessfähigkeit — kostenlos berechnen mit audit-sicherer Normreferenz. Für MedTech & Pharma." */}
    {/* EN: "AQL, validation & process capability — calculate for free with audit-ready norm references. For MedTech & Pharma." */}
  </p>
</div>
```

---

## Formular-Styling

Alle Eingabefelder bekommen Glass-Style:

```jsx
// Select / Dropdown
<select
  className="w-full px-4 py-3 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300"
  style={{
    backgroundColor: 'rgba(30, 58, 138, 0.04)',
    border: '1px solid rgba(30, 58, 138, 0.15)',
    color: '#1e293b',
  }}
>

// Number Input
<input
  type="number"
  className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
  style={{
    backgroundColor: 'rgba(30, 58, 138, 0.04)',
    border: '1px solid rgba(30, 58, 138, 0.15)',
    color: '#1e293b',
  }}
/>

// Button Group (für C/R Werte)
<button
  className={`px-4 py-2 rounded-lg font-medium transition-all ${isActive ? '' : 'hover:scale-[1.02]'}`}
  style={{
    backgroundColor: isActive ? 'rgba(30, 58, 138, 0.15)' : 'rgba(30, 58, 138, 0.04)',
    border: isActive ? '2px solid rgba(30, 58, 138, 0.4)' : '1px solid rgba(30, 58, 138, 0.1)',
    color: isActive ? '#1e3a8a' : '#475569',
  }}
>
```

---

## State Management

```jsx
const [activeModule, setActiveModule] = useState('aql');
const [copied, setCopied] = useState(false);

// AQL State
const [lotSize, setLotSize] = useState('');
const [level, setLevel] = useState('II');
const [aql, setAql] = useState('1.0');
const [severity, setSeverity] = useState('normal');
const [aqlResult, setAqlResult] = useState(null);

// C/R State
const [confidence, setConfidence] = useState(95);
const [reliability, setReliability] = useState(95);
const [acceptNumber, setAcceptNumber] = useState(0);
const [crResult, setCrResult] = useState(null);
```

### Berechnung triggern

Berechne automatisch bei jeder Eingabeänderung (kein "Berechnen"-Button nötig — der Rechner aktualisiert sich live). Falls Losgröße leer → zeige Placeholder-Text "Bitte Losgröße eingeben".

---

## Responsive Verhalten

- Desktop (lg+): Eingabe links (60%), Ergebnis + Risiko-Panel rechts (40%)
- Tablet (md): Eingabe oben, Ergebnis darunter, volle Breite
- Mobile: Alles gestackt, Quick-Select-Karten vertikal

```jsx
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
  {/* Eingabe: 3 Spalten */}
  <div className="lg:col-span-3">
    {/* Formular */}
  </div>
  {/* Ergebnis + Panel: 2 Spalten */}
  <div className="lg:col-span-2 space-y-6">
    {/* Ergebnis-Box */}
    {/* Risiko-Panel (nur bei C/R) */}
    {/* Consulting-CTA */}
  </div>
</div>
```

---

## Zusammenfassung: Was gebaut wird

1. **`data/aqlTables.js`** — Vollständige ISO 2859-1 Tabelle 1 + 2-A als JavaScript-Objekte + Lookup-Funktionen
2. **`pages/tools/stichprobe.js`** — Komplette Tool-Seite mit:
   - SEO Head Tags (DE/EN)
   - Background + Navigation + Footer
   - Hero
   - Quick-Select (3 Modul-Karten)
   - Modul A: AQL-Rechner (live-Berechnung)
   - Modul B: C/R-Rechner (live-Berechnung + Risiko-Panel)
   - Modul C: Placeholder (disabled, "kommt bald")
   - Copy-Paste-Output mit vollständiger Normreferenz
   - Tooltips für alle Fachbegriffe
   - SEO-FAQ-Bereich (Accordion mit H2/H3)
   - Consulting-CTA
   - Vollständige DE/EN Translation
   - Responsive (Mobile-first)
   - QCore Design System (Glass, Cormorant, kein bg-white)

**NICHT bauen (V1.1 — kommt später):**
- Modul C Variabel-Rechner (nur Placeholder)
- MedTech/Pharma-Toggle
- Kosten-Rechner
- Vergleichs-Schieberegler
- PDF-Export
- Verschärfte/Reduzierte AQL-Tabellen (nur Normal)

---

## Validierung nach Implementierung

Teste folgende Szenarien:

1. **AQL:** Losgröße 3200, Level II, AQL 1.0, Normal → Code K, n=125, Ac=3, Re=4
2. **AQL:** Losgröße 500, Level II, AQL 2.5, Normal → Code H, n=50, Ac=3, Re=4
3. **AQL:** Losgröße 50, Level II, AQL 0.65, Normal → Code D, n=8 (prüfe Pfeil-Logik)
4. **C/R:** 95/95, c=0 → n=59
5. **C/R:** 95/99, c=0 → n=299
6. **C/R:** 90/90, c=0 → n=22
7. **C/R:** 95/95, c=1 → n=93
8. **Copy-Paste:** Button kopiert korrekten Text in Zwischenablage
9. **Responsive:** Mobile, Tablet, Desktop korrekt
10. **SEO:** H1, H2, H3, Meta-Tags, FAQ-Bereich vorhanden
