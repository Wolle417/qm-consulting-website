# Cline Prompt: QM-Wissen Navigation Fix

## Aufgabe
Zwei kleine Änderungen an der QM-Wissen Sektion:

### 1. Sidebar: "QM-Wissen" anklickbar machen

In der linken Sidebar soll der Titel "QM-Wissen" (ganz oben, mit "Tutorials & Guides" darunter) ein Link zur Übersichtsseite `/qm-wissen` sein.

**Aktuell:** "QM-Wissen" ist nur Text, kein Link
**Gewünscht:** Klick auf "QM-Wissen" führt zu `/qm-wissen` (Startseite mit Featured Artikeln)

**Umsetzung:**

```jsx
// In der Sidebar-Komponente (vermutlich in /components/ oder direkt in der Seite)
// Vorher:
<div className="...">
  <h2>QM-Wissen</h2>
  <p>Tutorials & Guides</p>
</div>

// Nachher:
<Link href="/qm-wissen">
  <div className="... cursor-pointer hover:text-qcore-cyan transition-colors">
    <h2>QM-Wissen</h2>
    <p>Tutorials & Guides</p>
  </div>
</Link>
```

### 2. Gelben Hinweis entfernen

Der gelbe Hinweis-Kasten mit "In Kürze erscheinen hier die ersten Artikel" (oder ähnlich) soll entfernt werden, da es jetzt echte Artikel gibt.

**Suche nach:** 
- Gelbe/Warning Box im QM-Wissen Bereich
- Text wie "in Kürze", "erste Artikel", "coming soon"
- Vermutlich in `/pages/qm-wissen/index.js` oder einer der Unterseiten

**Aktion:** Komplett entfernen (nicht auskommentieren)

---

## Betroffene Dateien

Wahrscheinlich:
- `/pages/qm-wissen/index.js` - Gelber Hinweis entfernen
- `/components/QMWissenSidebar.js` oder ähnlich - Link hinzufügen
- Oder die Sidebar ist direkt in den Seiten definiert

## Überprüfung

Nach der Änderung testen:
1. Auf beliebiger QM-Wissen Unterseite sein (z.B. /qm-wissen/grundlagen)
2. In der Sidebar auf "QM-Wissen" klicken
3. → Sollte zur Übersichtsseite /qm-wissen navigieren
4. → Kein gelber Hinweis mehr sichtbar
