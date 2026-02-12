# Claude Code Prompt: Stichprobenrechner UX-Optimierung (V2)

## Kontext

Die Datei `pages/tools/stichprobe.js` existiert bereits und funktioniert. Ein UX-Review durch 3 Experten hat ergeben: **Der User muss zu viel scrollen, bevor er arbeiten kann.** Hero + Quick-Select-Karten + Tab-Leiste verbrauchen ~450px vertikalen Platz, bevor das erste Eingabefeld sichtbar wird. Auf 1080p ist das Ergebnis-Panel bereits abgeschnitten.

**Ziel:** Alles auf einen Screen. Eingabe + Ergebnis above-the-fold. Kein Scroll nötig um den Rechner zu bedienen.

## Projektpfad

```
F:\QCore\40_Entwicklung\Website\
```

## Schritt 0: Design System lesen (PFLICHT)

Lies vor Beginn:
- `DESIGN/DESIGN-SYSTEM.md`
- `DESIGN/PRODUCT-PAGE-TEMPLATE.md`

Halte dich strikt an das bestehende Design System (Glassmorphism, Cormorant+Inter, kein bg-white, etc).

## Datei die bearbeitet wird

```
pages/tools/stichprobe.js
```

Keine neuen Dateien nötig. Nur Umbau des Layouts in der bestehenden Datei.

---

## Änderungen (priorisiert)

### 1. KRITISCH: Hero radikal komprimieren

**Vorher:**
```
H1 "Stichprobenrechner" (text-5xl/6xl) + 2-zeiliger Subtitle = ~200px Höhe
```

**Nachher:**
```
H1 + Tabs in EINER Zeile, Subtitle einzeilig darunter
```

Konkretes Layout:

```jsx
{/* Kompakter Hero mit integrierten Tabs */}
<div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-6 gap-4">
  {/* Linke Seite: Titel + Subtitle */}
  <div>
    <h1
      className="text-3xl lg:text-4xl font-semibold"
      style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
    >
      {text.hero.title}
    </h1>
    <p className="text-sm mt-1" style={{ color: '#475569' }}>
      {text.hero.subtitle}
    </p>
  </div>
  
  {/* Rechte Seite: Modul-Tabs */}
  <div className="flex gap-2">
    {modules.filter(m => !m.disabled).map(mod => (
      <button
        key={mod.id}
        onClick={() => setActiveModule(mod.id)}
        className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
        style={{
          backgroundColor: activeModule === mod.id ? 'rgba(30, 58, 138, 0.15)' : 'rgba(30, 58, 138, 0.04)',
          border: activeModule === mod.id ? '2px solid rgba(30, 58, 138, 0.4)' : '1px solid rgba(30, 58, 138, 0.1)',
          color: activeModule === mod.id ? '#1e3a8a' : '#475569',
        }}
      >
        <span className="mr-1">{mod.icon}</span>
        {mod.title}
      </button>
    ))}
    {/* Cpk "bald" als disabled Tab */}
    <button
      disabled
      className="px-4 py-2 rounded-lg text-sm font-medium"
      style={{
        backgroundColor: 'transparent',
        border: '1px solid rgba(30, 58, 138, 0.06)',
        color: '#94a3b8',
        cursor: 'default',
      }}
    >
      📊 Cpk <span className="text-xs">({locale === 'de' ? 'bald' : 'soon'})</span>
    </button>
  </div>
</div>
```

**Ergebnis:** Hero + Navigation verbraucht jetzt ~80px statt ~400px.

### 2. KRITISCH: Quick-Select-Karten KOMPLETT ENTFERNEN

Die 3 großen Modul-Karten (📦 Wareneingangsprüfung, ✅ Validierungsstichprobe, 📊 Prozessfähigkeit) müssen **komplett weg**. Sie sind redundant zu den Tabs und fressen ~180px Höhe.

**Lösche:** Den gesamten `{/* ─── Quick-Select Module Cards ─── */}` Block (das `<div className="grid grid-cols-1 md:grid-cols-3 ...">` mit den 3 Karten).

**Lösche:** Den gesamten `{/* ─── Tab Navigation ─── */}` Block (die alte Tab-Leiste). Die Tabs sind jetzt im Hero integriert (siehe Punkt 1).

### 3. KRITISCH: Eingabefelder kompakter

Die Eingabefelder haben zu viel vertikalen Abstand (`mb-6` überall). Reduziere auf `mb-4`. Außerdem: Das Padding im Formular-Container von `p-6 lg:p-8` auf `p-5 lg:p-6` reduzieren.

**AQL-Modul Eingabe — Felder kompakter:**

```jsx
{/* Lot Size */}
<div className="mb-4">
  <label className="block text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>
    {text.aql.lotSize} <InfoTip text={text.tooltips.lotSize} />
  </label>
  <input
    type="text"
    inputMode="numeric"
    pattern="[0-9]*"
    value={lotSize}
    onChange={e => {
      const val = e.target.value.replace(/[^0-9]/g, '');
      setLotSize(val);
    }}
    placeholder={text.aql.lotPlaceholder}
    className="w-full px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
    style={inputStyle}
  />
</div>
```

**Wichtig:** `type="text"` mit `inputMode="numeric"` statt `type="number"`. Das entfernt die Spinner-Pfeile (↑↓) die bei einem Range von 2–500.000 unsinnig sind. Die `onChange`-Funktion filtert nicht-numerische Zeichen raus.

Wende denselben kompakteren Abstand (`mb-4`, `mb-1` für Labels, `py-2.5` für Inputs) auf ALLE Eingabefelder in beiden Modulen an (AQL und C/R).

### 4. KRITISCH: Ergebnis-Panel sticky machen (Desktop)

Auf Desktop (lg+) soll das Ergebnis-Panel sticky sein, damit es beim Scrollen sichtbar bleibt:

```jsx
{/* Ergebnis + CTA: 2 Spalten — sticky auf Desktop */}
<div className="lg:col-span-2">
  <div className="lg:sticky lg:top-20 space-y-4">
    {/* Ergebnis-Box */}
    {/* CTA */}
  </div>
</div>
```

Ändere `space-y-6` zu `space-y-4` in der rechten Spalte.

### 5. MITTEL: Ergebnis-Box kompakter

**Ergebnis-Box Padding** von `p-6 lg:p-8` auf `p-5 lg:p-6` reduzieren.

**Ergebnis-Heading** von `text-2xl ... mb-6` auf `text-xl ... mb-4` reduzieren.

**CTA-Box** unter dem Ergebnis: Padding von `p-6` auf `p-4` reduzieren, Text von `text-base` auf `text-sm`.

### 6. MITTEL: Input-Validierung mit Error-State

Wenn die Losgröße außerhalb des gültigen Bereichs liegt (< 2 oder > 500.000), zeige einen Fehler:

```jsx
// Nach dem lotSize Input-Feld einfügen:
{lotSize && (parseInt(lotSize, 10) < 2 || parseInt(lotSize, 10) > 500000) && (
  <p className="text-xs mt-1" style={{ color: '#dc2626' }}>
    {locale === 'de'
      ? 'Losgröße muss zwischen 2 und 500.000 liegen.'
      : 'Lot size must be between 2 and 500,000.'}
  </p>
)}
```

Zusätzlich: Wenn die Losgröße ungültig ist, ändere die Input-Border-Farbe:

```jsx
style={{
  ...inputStyle,
  borderColor: lotSize && (parseInt(lotSize, 10) < 2 || parseInt(lotSize, 10) > 500000)
    ? 'rgba(220, 38, 38, 0.5)'
    : inputStyle.border,
}}
```

### 7. MITTEL: Ergebnis-Box visueller Zustandswechsel

**Empty State** (kein Ergebnis): Box leicht transparenter.
**Active State** (mit Ergebnis): Normale Opacity + grüne Border (bereits vorhanden).

```jsx
<div
  className="rounded-xl p-5 lg:p-6 transition-all duration-300"
  style={{
    ...boxStyle,
    borderColor: aqlResult ? 'rgba(34, 197, 94, 0.3)' : boxStyle.border,
    opacity: aqlResult ? 1 : 0.7,
  }}
>
```

### 8. MITTEL: Kontextueller CTA pro Modul

Der CTA-Text soll sich an das aktive Modul anpassen:

```javascript
// In den Translation-Objekten ersetzen:
cta: {
  aql: {
    text: 'Lieferantenbewertung oder Wareneingangsprüfung aufbauen?',
    // EN: 'Need help setting up supplier evaluation or incoming inspection?'
  },
  cr: {
    text: 'Validierungsplan erstellen lassen?',
    // EN: 'Need help creating a validation plan?'
  },
  button: 'Kostenloses Erstgespräch buchen',
  // EN: 'Book a free consultation'
},
```

Im JSX:
```jsx
<p className="text-sm mb-3" style={{ color: '#334155' }}>
  {activeModule === 'aql' ? text.cta.aql.text : text.cta.cr.text}
</p>
```

### 9. QUICK WIN: Normbadge unter dem Subtitle

Ein kleines Trust-Badge direkt im Hero-Bereich:

```jsx
<div className="flex items-center gap-3 mt-2">
  <span className="text-xs px-2 py-1 rounded-full" style={{
    backgroundColor: 'rgba(34, 197, 94, 0.1)',
    color: '#166534',
    border: '1px solid rgba(34, 197, 94, 0.2)',
  }}>
    ✓ ISO 2859-1 · ISO 16269-6
  </span>
  <span className="text-xs" style={{ color: '#94a3b8' }}>
    {locale === 'de' ? 'Kostenlos · Keine Registrierung' : 'Free · No registration'}
  </span>
</div>
```

### 10. NICE-TO-HAVE: Share-Button neben Copy-Button

Nach dem Copy-Button einen Share-Button einfügen:

```jsx
function ShareButton({ locale }) {
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({
        title: locale === 'de' ? 'QCore Stichprobenrechner' : 'QCore Sample Size Calculator',
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
      // Optional: kurzes Feedback
    }
  };
  return (
    <button
      onClick={handleShare}
      className="w-full px-4 py-2 rounded-lg text-xs transition-all hover:scale-[1.01]"
      style={{
        backgroundColor: 'rgba(30, 58, 138, 0.04)',
        border: '1px solid rgba(30, 58, 138, 0.1)',
        color: '#475569',
      }}
    >
      🔗 {locale === 'de' ? 'Tool-Link teilen' : 'Share tool link'}
    </button>
  );
}
```

Platziere den ShareButton direkt unter dem CopyButton (mit `mt-2`).

### 11. C/R-Modul: Risiko-Panel als Collapsible

Das Risiko-Info-Panel (MDR-Klasse → C/R) ist nützlich aber verbraucht viel Platz. Mache es collapsible:

```jsx
function CollapsiblePanel({ title, icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl overflow-hidden" style={boxStyle}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-3 text-left flex justify-between items-center"
      >
        <h3 className="text-base font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
          {icon} {title}
        </h3>
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="#64748b" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-5 pb-4">{children}</div>}
    </div>
  );
}
```

Wickle das Risiko-Panel in `<CollapsiblePanel>` mit `defaultOpen={false}`. So ist es zugänglich aber verbraucht nur 1 Zeile wenn geschlossen.

### 12. Responsive: Mobile kompakter

Auf Mobile (`< lg`) soll das Ergebnis-Panel direkt nach dem Formular kommen, ohne Abstand-Übertreibung:

```jsx
<div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
```

Ändere `gap-8` zu `gap-4 lg:gap-6`.

---

## Zusammenfassung: Was sich ändert

| Element | Vorher | Nachher |
|---------|--------|---------|
| Hero H1 | text-5xl/6xl, zentriert, 2 Zeilen Subtitle | text-3xl/4xl, linksbündig, 1 Zeile |
| Quick-Select-Karten | 3 große Glassmorphism-Karten (~180px) | **ENTFERNT** |
| Tab-Navigation | Separate Zeile unter den Karten | **Integriert in Hero-Zeile** |
| Cpk-Placeholder | Eigene Karte + Tab | Disabled-Tab mit "(bald)" |
| Formular-Abstände | mb-6, p-6/p-8 | mb-4, p-5/p-6 |
| Losgröße Input | type="number" mit Spinner | type="text" + inputMode="numeric" |
| Input-Validierung | Keine | Rote Border + Fehlermeldung |
| Ergebnis-Panel | Scrollt mit | **Sticky** auf Desktop |
| Ergebnis Empty State | Gleiche Opacity | 0.7 Opacity |
| CTA-Text | Generisch | Kontextuell pro Modul |
| Risiko-Panel (C/R) | Immer offen, volle Höhe | Collapsible, default geschlossen |
| Normbadge | Nicht vorhanden | ✓ ISO 2859-1 · ISO 16269-6 |
| Share-Button | Nicht vorhanden | 🔗 Tool-Link teilen |
| Grid Gap | gap-8 | gap-4 lg:gap-6 |

## Was sich NICHT ändert

- Berechnungslogik (AQL + C/R) — bleibt identisch
- Copy-Paste-Output-Templates — bleiben identisch
- FAQ-Section — bleibt identisch (SEO-Content)
- Translations — nur CTA-Texte werden ergänzt
- Design System — alle Styles bleiben Glassmorphism
- Footer — bleibt
- data/aqlTables.js — wird nicht angefasst

## Validierung nach Umbau

1. Auf 1080p (1920×1080): Sind Eingabe UND Ergebnis above-the-fold sichtbar?
2. AQL-Rechner: Losgröße 3200, Level II, AQL 1.0 → n=125, Ac=3, Re=4 (unverändert)
3. C/R-Rechner: 95/95, c=0 → n=59 (unverändert)
4. Copy-Button: Kopiert korrekt
5. Losgröße "0" eingeben → Rote Border + Fehlermeldung
6. Losgröße "999999" eingeben → Rote Border + Fehlermeldung
7. Desktop: Ergebnis-Panel bleibt sticky beim Scrollen
8. Mobile: Alles stacked, kein horizontaler Overflow
9. Tab-Wechsel AQL ↔ C/R: CTA-Text ändert sich
10. Risiko-Panel (C/R): Default geschlossen, öffnet bei Klick
