# Claude Code Prompt: Navigation & Tool-Hub-Seite für QCore Website

## Kontext

QCore (qcore-consulting.de) ist eine Next.js Website für QM-Consulting im MedTech/Pharma-Bereich. Die Navigation muss umgebaut werden: "Tools" wird ein eigener Top-Level-Menüpunkt (getrennt von "Produkte"), und es wird eine `/tools` Hub-Seite als zentraler Einstiegspunkt angelegt. Die Tool-Hub-Seite dient gleichzeitig als Progress-Tracker: User sehen auf einen Blick, was live ist, was bald kommt und was geplant ist.

## Projektpfad

```
F:\QCore\40_Entwicklung\Website\
```

## Design System (VERBINDLICH)

**WICHTIG:** Lies vor Beginn folgende Dateien im Ordner `DESIGN/`:
- `DESIGN/DESIGN-SYSTEM.md` — Komplettes Design System (Farben, Typografie, Glassmorphism, Buttons, Layouts, Anti-Patterns)
- `DESIGN/PRODUCT-PAGE-TEMPLATE.md` — Seitenstruktur-Template (Imports, boxStyle-Konstante, Translation Object Pattern)
- `DESIGN/design-preview.html` — Visual Reference im Browser

### Kurzreferenz (Details in DESIGN-SYSTEM.md)

**Farbsystem:**
```
#0f172a — Darkest headlines
#1e293b — Headlines, nav links
#1e3a8a — Primary blue, badges, accents
#334155 — Body text
#475569 — Muted text
#64748b — Light text, subtitles, disabled
#94a3b8 — Lighter text

#22c55e / #166534 — Success/Live (bg/text)
#f59e0b / #b45309 — Warning/In Entwicklung (bg/text)
```

**Glassmorphism Box-Konstante (verwende dieses Pattern):**
```jsx
const boxStyle = {
  backgroundColor: 'rgba(30, 58, 138, 0.06)',
  border: '1px solid rgba(30, 58, 138, 0.1)',
  backdropFilter: 'blur(3px)',
};
```

**Glass CTA Button:**
```jsx
style={{
  backgroundColor: 'rgba(191, 219, 254, 0.35)',
  backdropFilter: 'blur(3px)',
  border: '1px solid rgba(191, 219, 254, 0.5)',
  color: '#1e3a8a'
}}
className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02]"
```

**Typografie:**
```jsx
// H1
style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
className="text-5xl lg:text-6xl font-semibold mb-4"

// H2
style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
className="text-4xl md:text-5xl font-bold mb-16"

// H3
style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
className="text-2xl font-semibold"
```

**Page Background (wie Produktseiten):**
```jsx
<div className="fixed inset-0 -z-10">
  <div
    className="absolute inset-0"
    style={{
      background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)',
    }}
  />
</div>
```

**Page Layout (wie Produktseiten):**
```jsx
<main className="pt-24 pb-16 px-6 lg:px-12">
  <div className="max-w-screen-2xl mx-auto">
    {/* Content */}
  </div>
</main>
```

**Translation Object Pattern (wie Produktseiten):**
```jsx
const t = {
  de: { hero: { title: '...', subtitle: '...' }, ... },
  en: { hero: { title: '...', subtitle: '...' }, ... },
};
const text = t[locale] || t.de;
```

**Anti-Patterns (NICHT TUN):**
- KEIN `backgroundColor: 'white'` oder `bg-white` → immer Glass-Style
- KEIN `backgroundColor: '#1e3a8a'` für Buttons → immer Glass-Button
- KEINE mixed border-radii → `rounded-xl` Cards, `rounded-lg` Buttons, `rounded-full` Pills
- IMMER `backdropFilter: 'blur(3px)'` oder `blur(4px)`, nie andere Werte

---

## Aktuelle Struktur (IST)

**Navigation (components/Navigation.jsx):**
- Start | Leistungen ▼ | Produkte ▼ | Über mich ▼ | Kontakt | DE/EN
- "Produkte" enthält ALLES: Tools (NC Triage) + bezahlte Bundles gemischt
- Bestehende NavDropdown-Komponente unterstützt: `isHeader`, `divider`, `disabled`, `price`, `freeTag`, `subtitle`, `badge`, `highlight`

**Bestehende Tool-Seiten:**
- `/nc-triage` — Live (iframe auf `/nc-triage-tool/index.html`)
- `/readiness-check` — existiert, aber noch nicht präsentationsreif → NICHT in Tools-Menü aufnehmen

**Bestehende Produkt-Seiten:**
- `/produkte/capa-system` (€129)
- `/produkte/nc-system` (€99)
- `/produkte/audit-prep-kit` (€79)
- `/produkte/data-integrity-kit` (€299)

---

## Ziel-Struktur (SOLL)

### Navigation: Neuer "Tools" Dropdown

```
Start | Leistungen ▼ | Tools ▼ | Produkte ▼ | Über mich ▼ | Kontakt | DE/EN
```

**Tools-Dropdown Inhalt:**

```
── Kostenlose QM-Tools ──                    [Header]
NC-Triage + Justifier         ★ Live         [Link → /nc-triage]
  "CAPA oder Korrektur? In 3 Min."           [Subtitle, freeTag]
──────────────────────────                   [Divider]
── Geplante Tools ──                         [Header]
Stichprobenrechner             Bald          [disabled / Coming Soon]
  "AQL, Cpk, Validierung"
Risikomatrix-Generator         Bald          [disabled / Coming Soon]
  "ISO 14971 Risikobewertung"
QM-Cockpit                     Bald          [disabled / Coming Soon]
  "CAPAs, NCs, Fristen — alles im Blick"
Change-Control Copilot         Bald          [disabled / Coming Soon]
  "Training-Impact + Evidence-Pack"
──────────────────────────                   [Divider]
Alle Tools anzeigen →                        [Link → /tools, bold/highlight]
```

**Produkte-Dropdown (bereinigt — OHNE Tools):**

```
── MedTech ──                                [Header, Badge: "ISO 13485 · FDA"]
CAPA System Bundle             €129          [Link]
NC Management Bundle           €99           [Link]
Audit Prep Kit                 €79           [Link]
──────────────────────────                   [Divider]
── Pharma ──                                 [Header, Badge: "GMP · GDP"]
Data Integrity Kit             €299          [Link, highlight green]
CAPA System                    Coming Soon   [disabled]
Deviation Management           Coming Soon   [disabled]
```

### Neue Seite: `/tools` (Tool-Hub)

Erstelle `pages/tools/index.js` — folge dem Pattern aus `DESIGN/PRODUCT-PAGE-TEMPLATE.md`:

```jsx
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { tools, toolStatusConfig } from '../../data/tools';
```

**Seitenstruktur:**

1. **Background + Nav + Footer:** Exakt wie Produktseiten (siehe Template)

2. **Hero-Bereich:**
   - H1: DE "Kostenlose QM-Tools für Ihren Arbeitsalltag" / EN "Free QM Tools for Your Daily Work"
   - Subline: DE "Browser-basiert. Kein Login. Sofort nutzbar. Für MedTech & Pharma." / EN "Browser-based. No login. Instant results. For MedTech & Pharma."
   - Nutze den Translation Object Pattern (`const t = { de: {...}, en: {...} }`)

3. **Tool-Grid (Karten-Layout):**
   - Grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
   - Jede Karte: Glassmorphism Box (`boxStyle` Konstante)
   - Karten-Inhalt: Icon (`text-3xl`), Name (H3 Cormorant), One-Liner (`color: '#475569'`), Status-Badge
   - **Status-Badges** als `rounded-lg` Pill:
     - `Live`: `backgroundColor: 'rgba(34,197,94,0.1)', border: '1px solid rgba(34,197,94,0.3)', color: '#166534'`
     - `Geplant`: `backgroundColor: 'rgba(148,163,184,0.1)', border: '1px solid rgba(148,163,184,0.3)', color: '#64748b'`
   - Live-Tools: als `<Link>` klickbar, `hover:shadow-lg`, cursor-pointer
   - Geplante Tools: als `<div>`, `opacity-75`, cursor-default

   **Tools für das Grid (in dieser Reihenfolge):**

   | Tool | Status | Icon | One-Liner DE | One-Liner EN | Link |
   |------|--------|------|-------------|-------------|------|
   | NC-Triage + Justifier | `live` | ⚡ | CAPA oder Korrektur? In unter 3 Minuten zur audit-sicheren Begründung. | CAPA or correction? Get an audit-safe justification in under 3 minutes. | /nc-triage |
   | Stichprobenrechner | `planned` | 📊 | AQL, Cpk, Prozessvalidierung — Stichprobengrößen normgerecht berechnen. | AQL, Cpk, process validation — calculate sample sizes per standards. | — |
   | Risikomatrix-Generator | `planned` | 🎯 | ISO 14971 Risikobewertung erstellen — mit vorgefüllten Skalen. | Create ISO 14971 risk assessments — with pre-filled scales. | — |
   | QM-Cockpit | `planned` | 📋 | Offene CAPAs, NCs und Fristen — alles in einem Dashboard. | Open CAPAs, NCs and deadlines — all in one dashboard. | — |
   | Change-Control Copilot | `planned` | 🔄 | SOP-Änderung → Training-Impact + Evidence-Pack automatisch. | SOP change → training impact + evidence pack automatically. | — |

4. **Workflow-Visualisierung:**
   - Container: Subtle Box (`rgba(30, 58, 138, 0.04)`)
   - Horizontale Kette (mobil vertikal): NC entsteht → NC-Triage → QM-Cockpit → Change-Control
   - Verbindungen: Pfeile (→) zwischen Schritten
   - Live-Schritte: Glass-Box mit normaler Opacity
   - Geplante Schritte: Glass-Box mit `opacity: 0.5`

5. **"Warum kostenlos?" Abschnitt:**
   - H2 (Cormorant): DE "Warum kostenlos?" / EN "Why free?"
   - Body-Text: DE "Gute QM-Werkzeuge sollten nicht hinter Paywalls versteckt sein. Unsere Tools sind kostenlos, weil wir überzeugt sind: Wer im Alltag sieht, dass QCore funktioniert, erkennt den Wert unserer Templates und Beratung von selbst."
   - Zwei Glass CTA Buttons nebeneinander:
     - "Templates & Bundles ansehen →" → /produkte
     - "Beratungsgespräch buchen →" → /kontakt

6. **SEO:**
   - `<title>` DE: "Kostenlose QM-Tools für MedTech & Pharma | QCore"
   - `<title>` EN: "Free QM Tools for MedTech & Pharma | QCore"
   - Meta-Description DE: "Browser-basierte QM-Tools für Ihren Arbeitsalltag. NC-Triage, Stichprobenrechner, Risikomatrix und mehr. Kein Login. Sofort nutzbar."

### Daten-Datei: `data/tools.js`

```js
export const tools = [
  {
    id: 'nc-triage',
    name: { de: 'NC-Triage + Justifier', en: 'NC-Triage + Justifier' },
    slug: '/nc-triage',
    description: {
      de: 'CAPA oder Korrektur? In unter 3 Minuten zur audit-sicheren Begründung.',
      en: 'CAPA or correction? Get an audit-safe justification in under 3 minutes.',
    },
    shortDescription: {
      de: 'CAPA oder Korrektur? In 3 Min.',
      en: 'CAPA or correction? In 3 min.',
    },
    icon: '⚡',
    status: 'live',
    category: 'assessment',
    industries: ['medtech', 'pharma'],
    bundleBridge: ['capa-system', 'nc-system'],
    seoKeywords: ['CAPA Begründung', 'NC Bewertung'],
  },
  {
    id: 'stichprobe',
    name: { de: 'Stichprobenrechner', en: 'Sample Size Calculator' },
    slug: null,
    description: {
      de: 'AQL, Cpk, Prozessvalidierung — Stichprobengrößen normgerecht berechnen.',
      en: 'AQL, Cpk, process validation — calculate sample sizes per standards.',
    },
    shortDescription: {
      de: 'AQL, Cpk, Validierung',
      en: 'AQL, Cpk, Validation',
    },
    icon: '📊',
    status: 'planned',
    category: 'calculator',
    industries: ['medtech', 'pharma'],
    bundleBridge: [],
    seoKeywords: ['Stichprobengröße berechnen', 'AQL Tabelle', 'Cpk Stichprobe'],
  },
  {
    id: 'risikomatrix',
    name: { de: 'Risikomatrix-Generator', en: 'Risk Matrix Generator' },
    slug: null,
    description: {
      de: 'ISO 14971 Risikobewertung erstellen — mit vorgefüllten Skalen.',
      en: 'Create ISO 14971 risk assessments — with pre-filled scales.',
    },
    shortDescription: {
      de: 'ISO 14971 Risikobewertung',
      en: 'ISO 14971 Risk Assessment',
    },
    icon: '🎯',
    status: 'planned',
    category: 'assessment',
    industries: ['medtech'],
    bundleBridge: ['capa-system'],
    seoKeywords: ['Risikomatrix erstellen', 'ISO 14971 Risikobewertung'],
  },
  {
    id: 'qm-cockpit',
    name: { de: 'QM-Cockpit', en: 'QM Cockpit' },
    slug: null,
    description: {
      de: 'Offene CAPAs, NCs und Fristen — alles in einem Dashboard.',
      en: 'Open CAPAs, NCs and deadlines — all in one dashboard.',
    },
    shortDescription: {
      de: 'CAPAs, NCs, Fristen — alles im Blick',
      en: 'CAPAs, NCs, deadlines — at a glance',
    },
    icon: '📋',
    status: 'planned',
    category: 'dashboard',
    industries: ['medtech', 'pharma'],
    bundleBridge: ['capa-system', 'nc-system', 'audit-prep-kit'],
    seoKeywords: ['QM Dashboard', 'CAPA Tracking'],
  },
  {
    id: 'change-control',
    name: { de: 'Change-Control Copilot', en: 'Change-Control Copilot' },
    slug: null,
    description: {
      de: 'SOP-Änderung → Training-Impact + Evidence-Pack automatisch.',
      en: 'SOP change → training impact + evidence pack automatically.',
    },
    shortDescription: {
      de: 'Training-Impact + Evidence-Pack',
      en: 'Training impact + evidence pack',
    },
    icon: '🔄',
    status: 'planned',
    category: 'copilot',
    industries: ['medtech', 'pharma'],
    bundleBridge: ['audit-prep-kit'],
    seoKeywords: ['Change Control Pharma', 'Training Impact Assessment'],
  },
];

export const toolStatusConfig = {
  live:        { label: { de: 'Live', en: 'Live' },            color: '#166534', bgColor: 'rgba(34,197,94,0.1)',  borderColor: 'rgba(34,197,94,0.3)' },
  development: { label: { de: 'In Entwicklung', en: 'In Development' },  color: '#b45309', bgColor: 'rgba(245,158,11,0.1)', borderColor: 'rgba(245,158,11,0.3)' },
  planned:     { label: { de: 'Geplant', en: 'Planned' },         color: '#64748b', bgColor: 'rgba(148,163,184,0.1)', borderColor: 'rgba(148,163,184,0.3)' },
};
```

---

## Aufgaben (in dieser Reihenfolge)

### 0. Design System lesen
- Lies `DESIGN/DESIGN-SYSTEM.md` und `DESIGN/PRODUCT-PAGE-TEMPLATE.md` komplett durch
- Nutze `DESIGN/design-preview.html` als Visual Reference falls nötig

### 1. `data/tools.js` anlegen
- Exakt wie oben spezifiziert (mit `{ de, en }` Lokalisierung)

### 2. `components/Navigation.jsx` umbauen
- **Neuen "Tools" Dropdown** einfügen zwischen "Leistungen" und "Produkte"
  - Importiere `tools` und `toolStatusConfig` aus `data/tools.js`
  - Generiere die Tool-Items dynamisch aus der tools-Array
  - Nutze `tool.name[locale]` für lokalisierte Namen
  - Nutze `tool.shortDescription[locale]` als `subtitle` im Dropdown
  - Live-Tools → normaler Link mit `freeTag: true`
  - Geplante Tools → `disabled: true`
  - Am Ende: "Alle Tools anzeigen →" / "View all tools →" Link zu `/tools`
- **"Produkte" Dropdown bereinigen**: NC-Triage-Eintrag und den "Tools" Header entfernen (ist jetzt unter Tools)
- **Mobile-Menü** ebenfalls anpassen (neuer "Tools" Bereich)
- Bestehende NavDropdown-Komponente WIEDERVERWENDEN, nicht neu bauen

### 3. `pages/tools/index.js` anlegen (Tool-Hub-Seite)
- Folge dem Pattern aus `DESIGN/PRODUCT-PAGE-TEMPLATE.md`:
  - Imports: Navigation, Footer, Head, useRouter, Link
  - Translation Object (`const t = { de: {...}, en: {...} }`)
  - `boxStyle` Konstante
  - Background Gradient (wie Produktseiten)
  - `<main className="pt-24 pb-16 px-6 lg:px-12">` Layout
  - Footer am Ende
- Tool-Karten rendern aus `tools` Array mit Status-Badges
- ALLE Styles aus dem Design System (Glassmorphism, Cormorant, Farben, Anti-Patterns beachten)

### 4. `locales/de.json` und `locales/en.json` erweitern
- Neue Keys unter `nav`:
  ```json
  "tools": "Tools",
  "dropdown": {
    "allTools": "Alle Tools anzeigen"
  }
  ```
  (EN: `"allTools": "View all tools"`)

---

## Wichtige Hinweise

- **Lies `DESIGN/DESIGN-SYSTEM.md`** — es ist die Single Source of Truth für alle Styles
- **NICHT anfassen:** Bestehende Tool-Seiten (nc-triage.js, readiness-check.js), Produktseiten, Artikel, globals.css, Footer.jsx
- **NICHT** den readiness-check ins Tools-Menü aufnehmen (noch nicht präsentationsreif)
- Die NavDropdown-Komponente ist bereits flexibel genug — wiederverwenden, nicht duplizieren
- Testen: `npm run dev` im Projektordner, dann localhost prüfen
- Nach Fertigstellung: `npx vercel --prod` für Deployment

## Erwartetes Ergebnis

1. Navigation zeigt 4 Dropdowns: Leistungen | **Tools** | Produkte | Über mich
2. Tools-Dropdown zeigt NC-Triage als Live + 4 geplante Tools + "Alle Tools anzeigen"
3. Produkte-Dropdown enthält NUR bezahlte Bundles (kein NC-Triage mehr)
4. `/tools` Seite: QCore-Gradient-Background, Glassmorphism-Karten, Status-Badges, Workflow-Kette, Footer
5. Mobile-Menü spiegelt die neue Struktur
6. DE/EN Lokalisierung durchgängig (Translation Object + locale-aware tool names)
7. Alles pixelgenau konsistent mit bestehendem QCore-Design (Glass-Effekte, Cormorant, Farbpalette)
