# QCore – Produktseiten Template

**Für:** Neue Produktseiten wie NC-System, Audit-Kit, Pharma-Bundles  
**Vorlage:** `/produkte/capa-system.js`

---

## Seitenstruktur

```
/pages/produkte/[product-name].js
```

---

## 1. Imports & Head

```jsx
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function ProductName() {
  const router = useRouter();
  const locale = router.locale || 'de';
  const isEn = locale === 'en';
```

---

## 2. Translation Object

```jsx
const t = {
  de: {
    meta: {
      title: 'Produktname | QCore Consulting',
      description: 'SEO Description auf Deutsch...'
    },
    hero: {
      title: 'Produktname',
      badges: [
        { std: 'ISO 13485:2016', clause: '§X.X' },
        { std: 'FDA 21 CFR 820.XX', clause: 'Requirements' },
      ],
      problemTitle: 'Das Problem',
      problemText: 'Beschreibung des Schmerzpunkts...',
      solutionTitle: 'Die Lösung',
      solutionText: 'Wie das Produkt hilft...',
      howItWorks: 'Scrollen Sie durch die X Schritte...'
    },
    step1: {
      title: 'Schritt 1 Titel',
      subtitle: 'Warum wichtig?',
      subtitleText: 'Erklärung...',
      items: [
        { label: 'Label:', text: 'Beschreibung' },
      ],
      tip: 'Tipp-Text hier'
    },
    // ... weitere steps
    upsell: {
      title: 'Titel für Cross-Sell',
      text: 'Beschreibung warum andere Produkte sinnvoll sind',
      product1: 'Produkt 1 – €XX',
      product2: 'Produkt 2 – €XX'
    }
  },
  en: {
    // Englische Übersetzungen...
  }
};

const text = t[locale] || t.en;
```

---

## 3. Shared Components (in Seite definieren oder importieren)

### Box Style Konstante

```jsx
const boxStyle = {
  backgroundColor: 'rgba(30, 58, 138, 0.06)',
  border: '1px solid rgba(30, 58, 138, 0.1)',
  backdropFilter: 'blur(3px)',
};
```

### PDF Viewer

```jsx
function PDFViewer({ pdfPath, height = 600 }) {
  return (
    <div 
      className="w-full rounded-lg overflow-hidden shadow-lg" 
      style={{ height: `${height}px`, border: '1px solid rgba(30, 58, 138, 0.15)' }}
    >
      <iframe
        src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
        className="w-full h-full"
        title="PDF Preview"
      />
    </div>
  );
}
```

### Image Viewer

```jsx
function ImageViewer({ src, alt, caption }) {
  return (
    <div 
      className="rounded-lg overflow-hidden shadow-lg w-full" 
      style={{ border: '1px solid rgba(30, 58, 138, 0.15)' }}
    >
      <img src={src} alt={alt} className="w-full h-auto" style={{ display: 'block' }} />
      {caption && (
        <div 
          className="px-4 py-2 text-sm text-center" 
          style={{ backgroundColor: 'rgba(30, 58, 138, 0.05)', color: '#475569' }}
        >
          {caption}
        </div>
      )}
    </div>
  );
}
```

### Tabbed Image Viewer

```jsx
function TabbedImageViewer({ images }) {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="w-full">
      {/* Tab Buttons */}
      <div className="flex flex-wrap gap-4 mb-8">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-10 py-5 rounded-xl text-xl font-bold transition-all ${
              activeTab === idx 
                ? 'text-white scale-105 shadow-2xl ring-4 ring-blue-300 ring-offset-2' 
                : 'hover:scale-105 hover:shadow-xl bg-white'
            }`}
            style={{
              backgroundColor: activeTab === idx ? '#1e3a8a' : 'white',
              color: activeTab === idx ? 'white' : '#1e3a8a',
              border: '3px solid #1e3a8a',
              minWidth: '160px',
              boxShadow: activeTab === idx 
                ? '0 10px 25px -5px rgba(30, 58, 138, 0.4)' 
                : '0 4px 15px -3px rgba(30, 58, 138, 0.2)'
            }}
          >
            {img.tab}
          </button>
        ))}
      </div>
      
      {/* Active Image */}
      <ImageViewer src={images[activeTab].src} alt={images[activeTab].alt} caption={images[activeTab].caption} />
    </div>
  );
}
```

### Image Popup (Click to Enlarge)

```jsx
function ImagePopup({ src, alt, label, locale }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-opacity-80"
        style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a', border: '1px solid rgba(30, 58, 138, 0.2)' }}
      >
        <span>🔍</span>
        <span>{label}</span>
      </button>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
          onClick={() => setIsOpen(false)}
        >
          <div className="relative max-w-5xl max-h-[90vh] overflow-auto">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-10 right-0 text-white text-xl font-bold px-3 py-1 hover:bg-white hover:bg-opacity-20 rounded"
            >
              ✕ {locale === 'de' ? 'Schließen' : 'Close'}
            </button>
            <img 
              src={src} 
              alt={alt}
              className="max-w-full h-auto rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </>
  );
}
```

---

## 4. Step Components

### StepPDF (für SOP, Forms, Examples)

```jsx
function StepPDF({ number, title, children, pdfPath, pdfHeight = 600 }) {
  return (
    <div className="mb-24">
      {/* Header */}
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0"
          style={{ backgroundColor: '#1e3a8a', color: 'white' }}
        >
          {number}
        </div>
        <h3 
          className="text-2xl font-semibold" 
          style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
        >
          {title}
        </h3>
      </div>
      
      {/* 5-Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <PDFViewer pdfPath={pdfPath} height={pdfHeight} />
        </div>
        
        <div className="lg:col-span-2">
          <div 
            className="rounded-xl p-6 h-full backdrop-blur-sm"
            style={boxStyle}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### StepImages (für Screenshots)

```jsx
function StepImages({ number, title, children, images, popupImages, locale }) {
  return (
    <div className="mb-24">
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0"
          style={{ backgroundColor: '#1e3a8a', color: 'white' }}
        >
          {number}
        </div>
        <h3 
          className="text-2xl font-semibold" 
          style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
        >
          {title}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-6">
          {images.map((img, idx) => (
            <ImageViewer key={idx} src={img.src} alt={img.alt} caption={img.caption} />
          ))}
          
          {popupImages && popupImages.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {popupImages.map((img, idx) => (
                <ImagePopup key={idx} src={img.src} alt={img.alt} label={img.label} locale={locale} />
              ))}
            </div>
          )}
        </div>
        
        <div className="lg:col-span-2">
          <div 
            className="rounded-xl p-6 backdrop-blur-sm lg:sticky lg:top-24"
            style={boxStyle}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### StepTabbed (für RCA Toolkit etc.)

```jsx
function StepTabbed({ number, title, children, images, popupImages, locale }) {
  return (
    <div className="mb-24">
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0"
          style={{ backgroundColor: '#1e3a8a', color: 'white' }}
        >
          {number}
        </div>
        <h3 
          className="text-2xl font-semibold" 
          style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
        >
          {title}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <TabbedImageViewer images={images} />
          
          {popupImages && popupImages.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {popupImages.map((img, idx) => (
                <ImagePopup key={idx} src={img.src} alt={img.alt} label={img.label} locale={locale} />
              ))}
            </div>
          )}
        </div>
        
        <div className="lg:col-span-2">
          <div 
            className="rounded-xl p-6 backdrop-blur-sm lg:sticky lg:top-24"
            style={boxStyle}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
```

### StepImage (Single Image)

```jsx
function StepImage({ number, title, children, imageSrc, imageAlt }) {
  return (
    <div className="mb-24">
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0"
          style={{ backgroundColor: '#1e3a8a', color: 'white' }}
        >
          {number}
        </div>
        <h3 
          className="text-2xl font-semibold" 
          style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
        >
          {title}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <ImageViewer src={imageSrc} alt={imageAlt} />
        </div>
        
        <div className="lg:col-span-2">
          <div 
            className="rounded-xl p-6 h-full backdrop-blur-sm"
            style={boxStyle}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
```

---

## 5. Email Capture Component (Lead Magnet)

```jsx
function EmailCapture({ locale }) {
  const text = {
    de: {
      heroText: 'Komplettes Bundle – kostenlos gegen Email-Registrierung.',
      secure: 'Download-Link per Email · Kein Spam',
      included: [
        'X Dokumente (Word, Excel, PDF)',
        'Ausgefülltes Beispiel inklusive',
        'Feature 3',
        'Firmenweite Lizenz'
      ]
    },
    en: {
      heroText: 'Complete bundle – free with email registration.',
      secure: 'Download link via email · No spam',
      included: [
        'X Documents (Word, Excel, PDF)',
        'Filled example included',
        'Feature 3',
        'Company-wide license'
      ]
    }
  };
  
  const t = text[locale] || text.en;
  
  return (
    <div className="rounded-xl p-6" style={boxStyle}>
      {/* Price */}
      <div className="text-center mb-2">
        <span className="text-2xl line-through" style={{ color: '#94a3b8' }}>€99</span>
        <span className="text-4xl font-bold ml-3" style={{ color: '#22c55e' }}>FREE</span>
      </div>
      
      <p className="text-center text-sm mb-5" style={{ color: '#475569' }}>
        {t.heroText}
      </p>

      {/* Form - MailerLite oder eigene Implementierung */}
      <MailerLiteForm locale={locale} />
      
      <p className="text-xs text-center mb-4" style={{ color: '#64748b' }}>
        {t.secure}
      </p>

      <div className="border-t pt-4" style={{ borderColor: 'rgba(30, 58, 138, 0.15)' }}>
        <p className="font-semibold mb-3 text-sm" style={{ color: '#1e293b' }}>
          {locale === 'de' ? 'Enthalten:' : 'Included:'}
        </p>
        <ul className="text-sm space-y-2">
          {t.included.map((item, i) => (
            <li key={i} className="flex items-center" style={{ color: '#334155' }}>
              <span className="mr-2" style={{ color: '#22c55e' }}>✓</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
```

---

## 6. Page Return Structure

```jsx
return (
  <>
    <Head>
      <title>{text.meta.title}</title>
      <meta name="description" content={text.meta.description} />
    </Head>
    
    <Navigation />
    
    {/* Background */}
    <div className="fixed inset-0 -z-10">
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)',
        }}
      />
    </div>
    
    <main className="pt-24 pb-16 px-6 lg:px-12">
      <div className="max-w-screen-2xl mx-auto">
        
        {/* HERO - 5 Column Layout */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            
            {/* Left: Content (3 cols) */}
            <div className="lg:col-span-3">
              <h1 
                className="text-5xl lg:text-6xl font-semibold mb-4"
                style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
              >
                {text.hero.title}
              </h1>
              
              {/* Compliance Badges */}
              <div className="flex flex-wrap gap-3 mb-8">
                {text.hero.badges.map((item) => (
                  <div 
                    key={item.std}
                    className="px-4 py-2 rounded-lg backdrop-blur-sm"
                    style={boxStyle}
                  >
                    <span className="font-semibold" style={{ color: '#0f172a' }}>{item.std}</span>
                    <span className="ml-2 text-sm" style={{ color: '#64748b' }}>{item.clause}</span>
                  </div>
                ))}
              </div>
              
              {/* Problem Box (optional - bei FDA-relevanten Themen) */}
              <div 
                className="rounded-xl p-6 mb-8 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}
              >
                <p className="font-bold text-xl mb-2" style={{ color: '#b91c1c' }}>
                  {text.hero.problemTitle}
                </p>
                <p className="text-lg" style={{ color: '#7f1d1d' }}>
                  {text.hero.problemText}
                </p>
              </div>
              
              {/* Solution Text */}
              <div className="mb-8" style={{ color: '#334155' }}>
                <p className="text-lg">
                  <strong>{text.hero.solutionTitle}</strong> {text.hero.solutionText}
                </p>
              </div>
              
              {/* How It Works */}
              <div 
                className="rounded-xl p-6 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)', border: '1px solid rgba(30, 58, 138, 0.08)' }}
              >
                <p className="text-lg" style={{ color: '#475569' }}>
                  {text.hero.howItWorks}
                </p>
              </div>
            </div>
            
            {/* Right: Email Capture (2 cols, sticky) */}
            <div className="lg:col-span-2">
              <div className="lg:sticky lg:top-24">
                <EmailCapture locale={locale} />
              </div>
            </div>
            
          </div>
        </div>
        
        {/* STEPS */}
        <StepPDF number={1} title={text.step1.title} pdfPath="/docs/product/file.pdf">
          <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>
            {text.step1.subtitle}
          </h4>
          <p className="mb-4" style={{ color: '#475569' }}>
            {text.step1.subtitleText}
          </p>
          
          <ul className="space-y-2" style={{ color: '#475569' }}>
            {text.step1.items.map((item, idx) => (
              <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
            ))}
          </ul>
          
          {/* Tip Box */}
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
            <p className="text-sm font-medium" style={{ color: '#166534' }}>
              💡 {text.step1.tip}
            </p>
          </div>
        </StepPDF>
        
        {/* ... weitere Steps ... */}
        
        {/* UPSELL */}
        <div className="max-w-4xl mx-auto">
          <div 
            className="rounded-xl p-8 text-center backdrop-blur-sm"
            style={boxStyle}
          >
            <h3 
              className="text-xl font-semibold mb-3" 
              style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
            >
              {text.upsell.title}
            </h3>
            <p className="mb-6" style={{ color: '#475569' }}>
              {text.upsell.text}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href={isEn ? '/en/produkte/nc-system' : '/produkte/nc-system'}
                className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ 
                  backgroundColor: 'rgba(191, 219, 254, 0.35)',
                  backdropFilter: 'blur(3px)',
                  border: '1px solid rgba(191, 219, 254, 0.5)',
                  color: '#1e3a8a'
                }}
              >
                {text.upsell.product1}
              </a>
              <a 
                href={isEn ? '/en/produkte/audit-prep-kit' : '/produkte/audit-prep-kit'}
                className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ 
                  backgroundColor: 'rgba(191, 219, 254, 0.35)',
                  backdropFilter: 'blur(3px)',
                  border: '1px solid rgba(191, 219, 254, 0.5)',
                  color: '#1e3a8a'
                }}
              >
                {text.upsell.product2}
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </main>
    
    <Footer />
  </>
);
```

---

## 7. Asset Paths

```
/public/docs/[product]/
├── images/
│   ├── screenshot_1.png
│   ├── screenshot_2.png
│   └── dashboard.png
├── QCore_Product-SOP_v1.0.pdf
├── QCore_Product-Form_v1.0.pdf
└── QCore_Product-Example_v1.0.pdf
```

---

## 8. Checkliste für neue Produktseiten

- [ ] Datei erstellen: `/pages/produkte/[name].js`
- [ ] Translation Object (DE + EN)
- [ ] Meta Tags (Title, Description)
- [ ] Compliance Badges definieren
- [ ] Problem/Solution Text schreiben
- [ ] Steps planen (welcher Typ: PDF, Images, Tabbed?)
- [ ] PDFs in `/public/docs/[product]/` ablegen
- [ ] Screenshots in `/public/docs/[product]/images/` ablegen
- [ ] Upsell zu verwandten Produkten
- [ ] EmailCapture anpassen (included items)
- [ ] Testen: DE + EN, Mobile + Desktop

---

## 9. Varianten

### Wenn KEIN Lead Magnet (kostenpflichtiges Produkt)

Statt EmailCapture → Gumroad Button:

```jsx
function BuyBox({ locale, price, gumroadUrl }) {
  return (
    <div className="rounded-xl p-6" style={boxStyle}>
      <div className="text-center mb-4">
        <span className="text-4xl font-bold" style={{ color: '#1e3a8a' }}>{price}</span>
      </div>
      
      <a 
        href={gumroadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-3 rounded-lg font-semibold text-center transition-all hover:scale-[1.02]"
        style={{ 
          backgroundColor: 'rgba(191, 219, 254, 0.35)',
          backdropFilter: 'blur(3px)',
          border: '1px solid rgba(191, 219, 254, 0.5)',
          color: '#1e3a8a'
        }}
      >
        {locale === 'de' ? 'Jetzt kaufen' : 'Buy Now'}
      </a>
      
      {/* Included items... */}
    </div>
  );
}
```

### Wenn weniger Steps (z.B. nur 3)

Einfach weniger Step-Komponenten verwenden. Die Struktur bleibt gleich.

### Wenn keine Tabs nötig

Nur StepPDF und StepImages verwenden.

---

*Template erstellt: Januar 2026*
