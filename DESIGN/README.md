# QCore Design Dokumentation

**Ordner:** `F:\QCore\40_Entwicklung\Website\DESIGN\`

---

## Dateien

| Datei | Zweck | Format |
|-------|-------|--------|
| **DESIGN-SYSTEM.md** | Komplettes Design System mit Farben, Typografie, Komponenten, Layouts | Markdown |
| **PRODUCT-PAGE-TEMPLATE.md** | Copy-Paste Template für neue Produktseiten wie `/produkte/capa-system` | Markdown |
| **design-preview.html** | Live-Preview aller Styles im Browser | HTML |

---

## Quick Start

### Neue Produktseite erstellen

1. Öffne `PRODUCT-PAGE-TEMPLATE.md`
2. Kopiere die Grundstruktur
3. Erstelle `/pages/produkte/[name].js`
4. Passe Translations und Steps an
5. Assets in `/public/docs/[product]/` ablegen

### Design-Elemente nachschlagen

1. Öffne `DESIGN-SYSTEM.md`
2. Suche nach Komponente (z.B. "Glass Button")
3. Kopiere den Code-Snippet

### Visual Reference

1. Öffne `design-preview.html` im Browser
2. Sieh dir alle Styles live an

---

## Wichtigste Patterns

### Box Style (überall gleich)
```jsx
style={{
  backgroundColor: 'rgba(30, 58, 138, 0.06)',
  border: '1px solid rgba(30, 58, 138, 0.1)',
  backdropFilter: 'blur(3px)',
}}
```

### Glass CTA Button
```jsx
style={{ 
  backgroundColor: 'rgba(191, 219, 254, 0.35)',
  backdropFilter: 'blur(3px)',
  border: '1px solid rgba(191, 219, 254, 0.5)',
  color: '#1e3a8a'
}}
```

### Headlines
```jsx
style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
```

### Body Text
```jsx
style={{ color: '#334155' }}  // Dark
style={{ color: '#475569' }}  // Muted
```

---

*Erstellt: Januar 2026*
