# Cline Prompt: Design-Anpassung "Was ist QM" Artikel

## Problem
Die Seite `/pages/qm-wissen/was-ist-qualitaetsmanagement.js` hat zu bunte/grelle Info-Boxen, die nicht zum dezenten Design der anderen Artikel (z.B. ISO 13485) passen.

## Ziel
Design angleichen an den ISO 13485 Artikel - dezent, professionell, konsistent.

---

## Aktuelle Probleme (zu bunt)

Die aktuellen Boxen verwenden zu grelle Farben:
- **Grüne Tipp-Box** → zu knallig
- **Rote "Ohne QM" Box** → zu aggressiv  
- **Grüne "Mit QM" Box** → zu knallig
- **Gelbe "Wichtig" Box** → ok, aber evtl. anpassen

---

## Gewünschtes Design (wie ISO 13485)

### Info-Boxen einheitlich gestalten

**Alle Boxen sollen dieses Schema verwenden:**

```jsx
// Dezente Box mit dunklem Hintergrund und subtiler linker Border
const InfoBox = ({ title, icon, children, borderColor = 'border-qcore-cyan' }) => (
  <div className={`bg-qcore-navy bg-opacity-40 border-l-4 ${borderColor} p-4 my-4 rounded-r`}>
    <p className="text-gray-300 font-semibold mb-1">{icon} {title}</p>
    <div className="text-gray-200">{children}</div>
  </div>
);
```

### Farbschema für verschiedene Box-Typen

| Box-Typ | Border-Farbe | Icon | Titel |
|---------|--------------|------|-------|
| **Tipp** | `border-qcore-cyan` (türkis) | 💡 | Praxis-Tipp |
| **Info** | `border-blue-400` | ℹ️ | Info |
| **Wichtig** | `border-yellow-500` | ⚠️ | Wichtig |
| **Beispiel** | `border-purple-400` | 📌 | Beispiel |

**ALLE Boxen haben:**
- `bg-qcore-navy bg-opacity-40` (dunkler, transparenter Hintergrund)
- Keine grellen Hintergrundfarben wie `bg-green-900`, `bg-red-900`
- Subtile linke Border als einziger Farbakzent

---

## Konkrete Änderungen

### 1. Tipp-Box anpassen

**Vorher (zu bunt):**
```jsx
<div className="bg-green-900 bg-opacity-30 border-l-4 border-green-500 p-4 my-4 rounded-r">
  <p className="text-green-300 font-semibold mb-1">💡 Tipp</p>
```

**Nachher (dezent):**
```jsx
<div className="bg-qcore-navy bg-opacity-40 border-l-4 border-qcore-cyan p-4 my-4 rounded-r">
  <p className="text-gray-300 font-semibold mb-1">💡 Praxis-Tipp</p>
```

### 2. Beispiel-Box anpassen

**Vorher (zu bunt):**
```jsx
<div className="bg-purple-900 bg-opacity-30 border-l-4 border-purple-500 ...">
```

**Nachher (dezent):**
```jsx
<div className="bg-qcore-navy bg-opacity-40 border-l-4 border-purple-400 ...">
```

### 3. "Ohne QM / Mit QM" Vergleich anpassen

**Vorher (rot/grün, zu aggressiv):**
```jsx
// Rote Box für "Ohne QM"
<div className="bg-red-900 ...">

// Grüne Box für "Mit QM"  
<div className="bg-green-900 ...">
```

**Nachher (dezent, wie Tabelle):**
```jsx
// Zwei nebeneinander liegende Boxen mit gleichem dunklen Hintergrund
<div className="grid md:grid-cols-2 gap-4 my-6">
  {/* Ohne QM */}
  <div className="bg-qcore-navy bg-opacity-40 p-4 rounded border border-red-500/30">
    <p className="text-red-400 font-semibold mb-2">✗ Ohne QM:</p>
    <ul className="text-gray-300 space-y-1 text-sm">
      <li>• Jeder arbeitet nach eigenem Verständnis</li>
      <li>• Fehler wiederholen sich</li>
      <li>• Wissen geht verloren</li>
      <li>• Kunden bekommen unterschiedliche Qualität</li>
      <li>• Probleme werden erst beim Kunden entdeckt</li>
    </ul>
  </div>
  
  {/* Mit QM */}
  <div className="bg-qcore-navy bg-opacity-40 p-4 rounded border border-green-500/30">
    <p className="text-green-400 font-semibold mb-2">✓ Mit QM:</p>
    <ul className="text-gray-300 space-y-1 text-sm">
      <li>• Einheitliche Standards für alle</li>
      <li>• Aus Fehlern wird gelernt (CAPA)</li>
      <li>• Prozesse sind dokumentiert</li>
      <li>• Konsistente Qualität</li>
      <li>• Probleme werden früh erkannt</li>
    </ul>
  </div>
</div>
```

### 4. Wichtig-Box (gelb) kann bleiben

Die gelbe "Wichtig" Box ist ok, aber auch hier dezenter Hintergrund:

```jsx
<div className="bg-qcore-navy bg-opacity-40 border-l-4 border-yellow-500 p-4 my-4 rounded-r">
  <p className="text-yellow-400 font-semibold mb-1">⚠️ Wichtig</p>
  <div className="text-gray-200">{children}</div>
</div>
```

---

## QM/QS/QK Diagramm

Das blaue Diagramm ist ok und kann bleiben - es passt zum Farbschema.

---

## Zusammenfassung der Änderungen

| Element | Vorher | Nachher |
|---------|--------|---------|
| Box-Hintergrund | `bg-green-900`, `bg-red-900`, etc. | `bg-qcore-navy bg-opacity-40` |
| Farbakzent | Greller Hintergrund | Nur subtile Border-Farbe |
| Text | Farbiger Text (`text-green-300`) | Neutraler Text (`text-gray-200/300`) |
| Titel | Farbig | Dezent grau mit Icon |

---

## Betroffene Datei
`/pages/qm-wissen/was-ist-qualitaetsmanagement.js`

## Ergebnis
Nach der Anpassung sollte der Artikel genauso dezent und professionell aussehen wie der ISO 13485 Artikel.
