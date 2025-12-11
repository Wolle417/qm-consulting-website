# QM-Wissen Style Guide

## Design-Prinzip

**Minimalistisch, dezent, professionell.**

- Keine grellen Farben
- Dunkle, transparente Hintergründe
- Subtile Borders als einziger Farbakzent
- Einheitliche Grautöne für Text

---

## Farbpalette

| Verwendung | Tailwind-Klasse | Beschreibung |
|------------|-----------------|--------------|
| Box-Hintergrund | `bg-qcore-navy bg-opacity-30` | Dunkler, transparenter Hintergrund |
| Definition-Box | `bg-qcore-navy bg-opacity-20` | Noch subtiler |
| Border Standard | `border-gray-600` | Dezente Umrandung |
| Border Akzent Tipp | `border-yellow-500` | Gelb für Tipps/Wichtig |
| Border Akzent Info | `border-blue-400` | Blau für Info |
| Text Inhalt | `text-gray-300` | Haupttext |
| Text Titel | `text-gray-100` | Überschriften |
| Text Subtil | `text-gray-400` | Beschreibungen, Meta |
| Akzent | `text-qcore-cyan` | Links, Tags |

---

## Komponenten-Übersicht

### DefinitionBox
Für formale Definitionen, Norm-Beschreibungen.
```jsx
<DefinitionBox title="ISO 13485 - Definition">
  Qualitätsmanagementsystem für Organisationen, die Medizinprodukte...
</DefinitionBox>
```

### TipBox
Für praktische Hinweise.
```jsx
<TipBox>
  Die ISO 13485 ist kein Selbstzweck. Sie ist das Fundament...
</TipBox>
```

### InfoBox
Für zusätzliche Erklärungen.
```jsx
<InfoBox>
  Die aktuelle Version ist ISO 13485:2016.
</InfoBox>
```

### WarningBox
Für wichtige Warnungen.
```jsx
<WarningBox>
  ISO 13485 Zertifizierung allein reicht NICHT für CE-Kennzeichnung!
</WarningBox>
```

### Table
Für Vergleiche und Übersichten.
```jsx
<Table 
  headers={['Rolle', 'Beispiel', 'ISO 13485?']}
  rows={[
    ['Hersteller', 'Entwickelt MRT-System', '✅ Ja, zwingend'],
    ['Zulieferer', 'Liefert Sensoren', '⚠️ Oft vom Kunden gefordert'],
  ]}
/>
```

### Section
Für Abschnitts-Überschriften.
```jsx
<Section number={1} title="Was ist ISO 13485?">
  <Paragraph>Die ISO 13485 ist...</Paragraph>
</Section>
```

### CTABox
Für Call-to-Action am Artikelende.
```jsx
<CTABox title="Sie bauen ein QM-System nach ISO 13485 auf?">
  Erfahrung aus MedTech. Pragmatische Unterstützung.
</CTABox>
```

---

## Import

```jsx
import { 
  DefinitionBox, 
  TipBox, 
  InfoBox, 
  WarningBox, 
  Table, 
  Section, 
  Paragraph,
  CTABox 
} from '@/components/qm-wissen/ArticleComponents';
```

---

## Was NICHT tun

❌ `bg-green-900`, `bg-red-900` - Keine grellen Hintergrundfarben
❌ `text-green-300`, `text-red-300` - Keine bunten Textfarben
❌ Mehrere verschiedene Border-Farben pro Box
❌ Eigene Styles erfinden - immer diese Komponenten nutzen
