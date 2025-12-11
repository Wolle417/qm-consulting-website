# Cline Prompt: Featured Article Bereich für QM-Wissen

## Aufgabe
Ergänze die Seite `/pages/qm-wissen/index.js` um einen "Featured Article" / "Highlight" Bereich am Anfang.

## Konzept
Über den Kategorie-Karten soll ein hervorgehobener Bereich erscheinen, der den aktuell wichtigsten/neuesten Artikel präsentiert.

## Design

### Featured Section (vor den Kategorien)

```jsx
{/* Featured Article Section */}
<section className="mb-12">
  <div className="flex items-center mb-4">
    <span className="bg-qcore-cyan text-qcore-navy px-3 py-1 rounded-full text-sm font-bold mr-3">
      NEU
    </span>
    <h2 className="text-xl font-semibold text-white">Empfohlener Artikel</h2>
  </div>
  
  <Link href="/qm-wissen/grundlagen">
    <div className="bg-gradient-to-r from-qcore-navy to-qcore-cyan bg-opacity-40 
                    border border-qcore-cyan rounded-lg p-6 
                    hover:border-white transition-all cursor-pointer
                    flex flex-col md:flex-row gap-6">
      
      {/* Text Content */}
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-qcore-cyan text-sm">●○○ Einsteiger</span>
          <span className="text-gray-400 text-sm">• 15 Min Lesezeit</span>
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-3">
          QM Grundlagen: Qualitätsmanagement verstehen
        </h3>
        
        <p className="text-gray-300 mb-4">
          PDCA, die 7 Grundsätze, Prozessorientierung und Dokumentation - 
          alles was Sie für den Einstieg ins Qualitätsmanagement brauchen.
        </p>
        
        <span className="text-qcore-cyan font-semibold hover:text-white">
          Artikel lesen →
        </span>
      </div>
      
      {/* Optional: Icon/Illustration */}
      <div className="hidden md:flex items-center justify-center w-32">
        <div className="text-6xl">📊</div>
      </div>
    </div>
  </Link>
</section>
```

## Alternative: Mehrere Featured Articles

Falls du mehrere Artikel hervorheben willst:

```jsx
{/* Featured Articles Section */}
<section className="mb-12">
  <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
    <span className="text-qcore-cyan mr-2">★</span>
    Beliebte Artikel
  </h2>
  
  <div className="grid md:grid-cols-2 gap-4">
    {/* Featured Card 1 */}
    <Link href="/qm-wissen/iso-13485">
      <div className="bg-qcore-navy bg-opacity-50 border border-qcore-cyan 
                      rounded-lg p-5 hover:border-white transition-all cursor-pointer">
        <span className="bg-qcore-cyan text-qcore-navy px-2 py-0.5 rounded text-xs font-bold">
          MEDTECH
        </span>
        <h3 className="text-lg font-bold text-white mt-2 mb-2">
          ISO 13485: QM für Medizinprodukte
        </h3>
        <p className="text-gray-400 text-sm">
          Alles über das QM-System für Medizinproduktehersteller
        </p>
      </div>
    </Link>
    
    {/* Featured Card 2 */}
    <Link href="/qm-wissen/gmp">
      <div className="bg-qcore-navy bg-opacity-50 border border-qcore-cyan 
                      rounded-lg p-5 hover:border-white transition-all cursor-pointer">
        <span className="bg-qcore-cyan text-qcore-navy px-2 py-0.5 rounded text-xs font-bold">
          PHARMA
        </span>
        <h3 className="text-lg font-bold text-white mt-2 mb-2">
          GMP Grundlagen: Gute Herstellungspraxis
        </h3>
        <p className="text-gray-400 text-sm">
          Die 10 GMP-Prinzipien und was Pharmaunternehmen wissen müssen
        </p>
      </div>
    </Link>
  </div>
</section>
```

## Einfache Variante: Badge an bestehende Karten

Oder noch einfacher - einfach ein "NEU" oder "★ Empfohlen" Badge an die existierenden Artikel-Karten:

```jsx
// In der Artikel-Karte
<div className="relative">
  {artikel.featured && (
    <span className="absolute -top-2 -right-2 bg-qcore-cyan text-qcore-navy 
                     px-2 py-0.5 rounded-full text-xs font-bold">
      ★ TOP
    </span>
  )}
  {/* Rest der Karte */}
</div>
```

## Empfehlung

**Option 1 (Featured Section oben)** ist am wirkungsvollsten:
- Sofort sichtbar
- Lenkt Aufmerksamkeit
- Kann je nach Bedarf gewechselt werden

## Umsetzung

1. Öffne `/pages/qm-wissen/index.js`
2. Füge die Featured Section nach dem Hero/Header ein
3. Vor den Kategorie-Karten platzieren

## Später: Dynamisch machen

Wenn mehr Artikel da sind, könnte man das Featured-Article dynamisch aus einem Array ziehen:

```jsx
const featuredArticle = {
  slug: 'grundlagen',
  title: 'QM Grundlagen: Qualitätsmanagement verstehen',
  description: 'PDCA, die 7 Grundsätze, Prozessorientierung...',
  level: 'Einsteiger',
  readTime: '15 Min',
  tag: 'NEU'
};
```

Dann kann man einfach das Objekt ändern, um einen anderen Artikel zu featuren.
