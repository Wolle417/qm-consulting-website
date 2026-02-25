# Cline Prompt: Style-Vorlage aus ISO 13485 extrahieren

## Aufgabe
1. Analysiere die Seite `/pages/qm-wissen/iso-13485.js` (oder wo auch immer der ISO 13485 Artikel liegt)
2. Extrahiere alle Style-Definitionen und Komponenten
3. Erstelle eine zentrale Komponenten-Datei `/components/qm-wissen/ArticleComponents.js`
4. Dokumentiere die Styles in `/components/qm-wissen/STYLE-GUIDE.md`

## Ziel
Eine einheitliche, wiederverwendbare Style-Vorlage für alle QM-Wissen Artikel.

---

## Schritt 1: ISO 13485 Seite analysieren

Öffne die ISO 13485 Artikelseite und identifiziere:

1. **Info-Boxen** (Tipp, Info, Wichtig, Beispiel, Warnung)
   - Hintergrundfarbe
   - Border-Style
   - Text-Farben
   - Padding/Margin
   - Icons

2. **Tabellen**
   - Header-Style
   - Zeilen-Style (alternierend?)
   - Border
   - Text-Ausrichtung

3. **Überschriften**
   - H1, H2, H3 Styles
   - Farben
   - Abstände

4. **Definition-Boxen** (wie "ISO 13485 - Definition")
   - Hintergrund
   - Border
   - Typografie

5. **Container/Wrapper**
   - Hauptcontent-Bereich
   - Abstände
   - Max-Width

---

## Schritt 2: Komponenten-Datei erstellen

Erstelle `/components/qm-wissen/ArticleComponents.js`:

```jsx
// /components/qm-wissen/ArticleComponents.js
// Wiederverwendbare Komponenten für alle QM-Wissen Artikel
// Style-Vorlage basierend auf ISO 13485 Artikel

import Link from 'next/link';

// ============================================
// INFO-BOXEN
// ============================================

/**
 * Praxis-Tipp Box
 * Verwendung: Praktische Hinweise und Best Practices
 */
export const TipBox = ({ children }) => (
  <div className="[EXTRAHIERTE KLASSEN AUS ISO 13485]">
    <p className="[TITEL KLASSEN]">💡 Praxis-Tipp</p>
    <div className="[CONTENT KLASSEN]">{children}</div>
  </div>
);

/**
 * Info Box
 * Verwendung: Zusätzliche Informationen, Erklärungen
 */
export const InfoBox = ({ children }) => (
  <div className="[EXTRAHIERTE KLASSEN]">
    <p className="[TITEL KLASSEN]">ℹ️ Info</p>
    <div className="[CONTENT KLASSEN]">{children}</div>
  </div>
);

/**
 * Wichtig/Warning Box
 * Verwendung: Wichtige Hinweise, Warnungen
 */
export const WarningBox = ({ children }) => (
  <div className="[EXTRAHIERTE KLASSEN]">
    <p className="[TITEL KLASSEN]">⚠️ Wichtig</p>
    <div className="[CONTENT KLASSEN]">{children}</div>
  </div>
);

/**
 * Beispiel Box
 * Verwendung: Konkrete Beispiele
 */
export const ExampleBox = ({ children }) => (
  <div className="[EXTRAHIERTE KLASSEN]">
    <p className="[TITEL KLASSEN]">📌 Beispiel</p>
    <div className="[CONTENT KLASSEN]">{children}</div>
  </div>
);

// ============================================
// DEFINITION BOX
// ============================================

/**
 * Definition Box (wie "ISO 13485 - Definition")
 * Verwendung: Formale Definitionen, Normen-Zitate
 */
export const DefinitionBox = ({ title, children }) => (
  <div className="[EXTRAHIERTE KLASSEN]">
    <p className="[TITEL KLASSEN]">{title}</p>
    <p className="[CONTENT KLASSEN]">{children}</p>
  </div>
);

// ============================================
// TABELLEN
// ============================================

/**
 * Standard Tabelle
 * Verwendung: Vergleiche, Übersichten
 */
export const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto my-6">
    <table className="[EXTRAHIERTE KLASSEN]">
      <thead>
        <tr className="[HEADER KLASSEN]">
          {headers.map((header, i) => (
            <th key={i} className="[TH KLASSEN]">{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="[ROW KLASSEN]">
            {row.map((cell, j) => (
              <td key={j} className="[TD KLASSEN]">{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ============================================
// ARTIKEL META
// ============================================

/**
 * Artikel Header mit Meta-Informationen
 */
export const ArticleHeader = ({ title, subtitle, readTime, level }) => (
  <div className="mb-8">
    <h1 className="[H1 KLASSEN]">{title}</h1>
    {subtitle && <p className="[SUBTITLE KLASSEN]">{subtitle}</p>}
    <div className="[META KLASSEN]">
      <span>{level}</span>
      <span>• {readTime} Lesezeit</span>
    </div>
  </div>
);

/**
 * Abschnitts-Überschrift
 */
export const SectionTitle = ({ number, children }) => (
  <h2 className="[H2 KLASSEN]">
    {number}. {children}
  </h2>
);

// ============================================
// CTA BEREICH
// ============================================

/**
 * Call-to-Action Box am Artikelende
 */
export const CTABox = ({ title, description, buttonText, buttonLink }) => (
  <div className="[EXTRAHIERTE KLASSEN]">
    <h3 className="[TITEL KLASSEN]">{title}</h3>
    <p className="[DESC KLASSEN]">{description}</p>
    <Link href={buttonLink}>
      <span className="[BUTTON KLASSEN]">{buttonText}</span>
    </Link>
  </div>
);

// ============================================
// WEITERFUEHRENDE ARTIKEL
// ============================================

/**
 * Link-Karte zu anderem Artikel
 */
export const ArticleLink = ({ href, tag, title, description }) => (
  <Link href={href}>
    <div className="[EXTRAHIERTE KLASSEN]">
      {tag && <span className="[TAG KLASSEN]">{tag}</span>}
      <h4 className="[TITEL KLASSEN]">{title}</h4>
      <p className="[DESC KLASSEN]">{description}</p>
    </div>
  </Link>
);
```

---

## Schritt 3: Style-Guide Dokumentation

Erstelle `/components/qm-wissen/STYLE-GUIDE.md`:

```markdown
# QM-Wissen Style Guide

## Farbpalette

| Verwendung | Klasse | Hex |
|------------|--------|-----|
| Hintergrund Boxen | `bg-qcore-navy bg-opacity-??` | #??? |
| Border Tipp | `border-???` | #??? |
| Border Info | `border-???` | #??? |
| Border Warnung | `border-???` | #??? |
| Text Hauptinhalt | `text-gray-???` | #??? |
| Text Titel | `text-gray-???` | #??? |
| Akzentfarbe | `text-qcore-cyan` | #??? |

## Box-Typen

### Tipp-Box
- Zweck: Praktische Hinweise
- Icon: 💡
- Titel: "Praxis-Tipp"
- Klassen: [aus ISO 13485 extrahiert]

### Info-Box
- Zweck: Zusätzliche Erklärungen
- Icon: ℹ️
- Titel: "Info"
- Klassen: [aus ISO 13485 extrahiert]

[... weitere Boxen ...]

## Tabellen

- Header: [Klassen]
- Zeilen: [Klassen]
- Zellen: [Klassen]

## Verwendung

```jsx
import { TipBox, InfoBox, WarningBox, Table } from '@/components/qm-wissen/ArticleComponents';

// In einem Artikel:
<TipBox>
  Die ISO 13485 ist kein Selbstzweck...
</TipBox>

<Table 
  headers={['Rolle', 'Beispiel', 'ISO 13485?']}
  rows={[
    ['Hersteller', 'Entwickelt MRT-System', '✅ Ja, zwingend'],
    ['Zulieferer', 'Liefert Sensoren', '⚠️ Oft vom Kunden gefordert'],
  ]}
/>
```
```

---

## Schritt 4: Bestehende Artikel migrieren

Nach Erstellung der Komponenten-Datei:

1. **ISO 13485** - Refactoren um die neuen Komponenten zu nutzen
2. **GMP** - Refactoren
3. **Was ist QM** - Refactoren (behebt das Design-Problem)

---

## Ergebnis

Nach Abschluss haben wir:

1. `/components/qm-wissen/ArticleComponents.js` - Alle wiederverwendbaren Komponenten
2. `/components/qm-wissen/STYLE-GUIDE.md` - Dokumentation für konsistentes Design
3. Alle Artikel nutzen dieselben Komponenten = garantiert konsistentes Design

---

## Wichtig

Beim Extrahieren der Styles aus ISO 13485:
- Kopiere die EXAKTEN Tailwind-Klassen
- Ändere nichts am funktionierenden Design
- Dokumentiere jede Klasse

Die ISO 13485 Seite ist die **Referenz** - ihr Design ist das Ziel für alle anderen Artikel.
