# Produktseite Template – QCore Consulting

> **Zweck:** Vorlage für alle Produktdetailseiten (NC System, Audit Prep Kit, etc.)
> **Referenz:** `/pages/capa-system-free.js`
> **Stand:** Januar 2026

---

## 1. SEITENSTRUKTUR

```
┌────────────────────────────────────────────────────────────┐
│  HERO                                                       │
│  - Titel (H1)                                              │
│  - Compliance Badges (ISO, FDA, MDR)                       │
│  - Warning Box (Pain Point)                                │
│  - Problem/Solution Text                                    │
│  - How It Works Box                                        │
├────────────────────────────────────────────────────────────┤
│  STEP 1                                                     │
│  ┌─────────────────────┐ ┌──────────────────┐             │
│  │  Media (3/5)        │ │  Explanation     │             │
│  │  PDF / Images       │ │  (2/5, sticky)   │             │
│  └─────────────────────┘ └──────────────────┘             │
├────────────────────────────────────────────────────────────┤
│  STEP 2, 3, 4, 5, 6...  (gleiche Struktur)                │
├────────────────────────────────────────────────────────────┤
│  EMAIL CAPTURE / CTA                                        │
├────────────────────────────────────────────────────────────┤
│  UPSELL (andere Bundles)                                   │
└────────────────────────────────────────────────────────────┘
```

---

## 2. KOMPONENTEN

### 2.1 PDFViewer

Eingebetteter PDF-Viewer ohne Toolbar.

```jsx
function PDFViewer({ pdfPath, height = 600 }) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg" 
         style={{ height: `${height}px`, border: '1px solid rgba(30, 58, 138, 0.15)' }}>
      <iframe
        src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
        className="w-full h-full"
        title="PDF Preview"
      />
    </div>
  );
}
```

**Verwendung:**
- SOPs, Formulare, ausgefüllte Beispiele
- Höhe typisch: 600-700px

---

### 2.2 ImageViewer

Einzelbild mit optionaler Caption.

```jsx
function ImageViewer({ src, alt, caption }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg w-full" 
         style={{ border: '1px solid rgba(30, 58, 138, 0.15)' }}>
      <img src={src} alt={alt} className="w-full h-auto" style={{ display: 'block' }} />
      {caption && (
        <div className="px-4 py-2 text-sm text-center" 
             style={{ backgroundColor: 'rgba(30, 58, 138, 0.05)', color: '#475569' }}>
          {caption}
        </div>
      )}
    </div>
  );
}
```

**Verwendung:**
- Screenshots von Excel-Sheets
- Quick Reference Cards
- Dashboard-Ansichten

---

### 2.3 TabbedImageViewer

Tab-Buttons zum Wechseln zwischen mehreren Bildern.

```jsx
function TabbedImageViewer({ images }) {
  const [activeTab, setActiveTab] = useState(0);
  // images = [{ src, alt, tab, caption }, ...]
  
  return (
    <div className="w-full">
      {/* Tab Buttons - prominent, große Klickfläche */}
      <div className="flex flex-wrap gap-4 mb-8">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-10 py-5 rounded-xl text-xl font-bold transition-all ${...}`}
            style={{
              backgroundColor: activeTab === idx ? '#1e3a8a' : 'white',
              color: activeTab === idx ? 'white' : '#1e3a8a',
              border: '3px solid #1e3a8a',
              minWidth: '160px',
            }}
          >
            {img.tab}
          </button>
        ))}
      </div>
      
      {/* Active Image */}
      <ImageViewer src={images[activeTab].src} ... />
    </div>
  );
}
```

**Verwendung:**
- Excel-Files mit mehreren Sheets (Log, Dashboard, Instructions)
- RCA Toolkit (5-Why, Ishikawa, Pareto)

---

### 2.4 ImagePopup

Klickbarer Button, der Bild in Overlay öffnet.

```jsx
function ImagePopup({ src, alt, label, locale }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button onClick={() => setIsOpen(true)} className="...">
        <span>🔍</span>
        <span>{label}</span>
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 ..." onClick={() => setIsOpen(false)}>
          <img src={src} ... />
        </div>
      )}
    </>
  );
}
```

**Verwendung:**
- Anleitungs-Bilder (Instructions-Sheet)
- Detailansichten die nicht immer sichtbar sein müssen

---

## 3. STEP-KOMPONENTEN

### 3.1 StepPDF

Für Word/PDF-Dokumente.

```jsx
<StepPDF 
  number={1} 
  title="Step Title"
  pdfPath="/docs/bundle/filename.pdf"
  pdfHeight={700}
>
  {/* Explanation content */}
</StepPDF>
```

**Layout:**
```
[1] Step Title
┌─────────────────────────────┐ ┌──────────────────────┐
│                             │ │                      │
│  PDF Viewer (3/5)           │ │  Explanation Box     │
│  lg:col-span-3              │ │  lg:col-span-2       │
│                             │ │  (sticky on scroll)  │
│                             │ │                      │
└─────────────────────────────┘ └──────────────────────┘
```

---

### 3.2 StepImage

Für einzelnes Bild (Quick Reference, etc.)

```jsx
<StepImage 
  number={6} 
  title="Step Title"
  imageSrc="/docs/bundle/images/image.png"
  imageAlt="Description"
>
  {/* Explanation content */}
</StepImage>
```

---

### 3.3 StepImages

Für mehrere Bilder untereinander + optionale Popup-Bilder.

```jsx
<StepImages 
  number={4} 
  title="Step Title"
  locale={locale}
  images={[
    { src: '/docs/.../img1.png', alt: 'Alt 1', caption: 'Caption 1' },
    { src: '/docs/.../img2.png', alt: 'Alt 2', caption: 'Caption 2' },
  ]}
  popupImages={[
    { src: '/docs/.../instructions.png', alt: 'Instructions', label: 'Show Instructions' },
  ]}
>
  {/* Explanation content */}
</StepImages>
```

---

### 3.4 StepTabbed

Für Excel mit mehreren Sheets als Tabs.

```jsx
<StepTabbed 
  number={3} 
  title="Step Title"
  locale={locale}
  images={[
    { src: '/docs/.../sheet1.png', alt: 'Sheet 1', tab: 'Tab Label 1', caption: 'Caption 1' },
    { src: '/docs/.../sheet2.png', alt: 'Sheet 2', tab: 'Tab Label 2', caption: 'Caption 2' },
  ]}
  popupImages={[
    { src: '/docs/.../instructions.png', alt: 'Instructions', label: 'Show Instructions' },
  ]}
>
  {/* Explanation content */}
</StepTabbed>
```

---

## 4. DESIGN TOKENS

### Farben

| Verwendung | Wert | CSS |
|------------|------|-----|
| Primary Blue | `#1e3a8a` | Buttons, Badges, Accents |
| Text Headline | `#0f172a` | H1, H2, H3 |
| Text Body | `#334155` / `#475569` | Paragraphs |
| Text Light | `#64748b` | Captions, Hints |
| Background Light | `rgba(30, 58, 138, 0.06)` | Explanation Boxes |
| Border | `rgba(30, 58, 138, 0.1-0.15)` | Cards, Dividers |

### Tip-Box Farben

| Typ | Background | Text Color | Icon |
|-----|------------|------------|------|
| Success/Tip | `rgba(34, 197, 94, 0.1)` | `#166534` | 💡 / ✓ |
| Info | `rgba(59, 130, 246, 0.1)` | `#1e40af` | 📋 / 🖨️ |
| Warning | `rgba(245, 158, 11, 0.1)` | `#b45309` | ⚠️ |
| Error/Danger | `rgba(239, 68, 68, 0.08)` | `#b91c1c` | ⚠️ |

### Typografie

| Element | Font | Weight | Size |
|---------|------|--------|------|
| H1 | Cormorant | 600 | text-5xl lg:text-6xl |
| H3 (Step Title) | Cormorant | 600 | text-2xl |
| H4 (Section) | System | 600 | text-lg |
| Body | System | 400 | base |
| Caption | System | 400 | text-sm |

---

## 5. HERO SECTION

### Struktur

```jsx
{/* HERO */}
<div className="mb-20">
  {/* 1. Titel */}
  <h1 className="text-5xl lg:text-6xl font-semibold mb-4" 
      style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
    {text.hero.title}
  </h1>
  
  {/* 2. Compliance Badges */}
  <div className="flex flex-wrap gap-3 mb-8">
    {badges.map((item) => (
      <div className="px-4 py-2 rounded-lg backdrop-blur-sm" 
           style={{ backgroundColor: 'rgba(30, 58, 138, 0.08)', border: '...' }}>
        <span className="font-semibold" style={{ color: '#1e3a8a' }}>{item.std}</span>
        <span className="ml-2 text-sm" style={{ color: '#64748b' }}>{item.clause}</span>
      </div>
    ))}
  </div>
  
  {/* 3. Warning/Pain Point Box (rot) */}
  <div className="rounded-xl p-6 mb-8" 
       style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
    <div className="flex items-start gap-4">
      <div className="text-3xl">⚠️</div>
      <div>
        <p className="font-bold text-xl mb-2" style={{ color: '#b91c1c' }}>Pain Point Title</p>
        <p className="text-lg" style={{ color: '#7f1d1d' }}>Pain point description...</p>
      </div>
    </div>
  </div>
  
  {/* 4. Problem / Solution */}
  <div className="mb-8" style={{ color: '#334155' }}>
    <p className="text-lg mb-4"><strong>Das Problem:</strong> ...</p>
    <p className="text-lg"><strong>Die Lösung:</strong> ...</p>
  </div>
  
  {/* 5. How It Works Box */}
  <div className="rounded-xl p-6" 
       style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)', border: '...' }}>
    <p className="text-lg" style={{ color: '#475569' }}>How it works text...</p>
  </div>
</div>
```

---

## 6. EXPLANATION BOX CONTENT

### Typische Struktur

```jsx
<StepPDF ...>
  {/* Section Header */}
  <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>
    Section Title
  </h4>
  
  {/* Paragraph */}
  <p className="mb-4" style={{ color: '#475569' }}>
    Explanation text...
  </p>
  
  {/* Second Section */}
  <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>
    What's Included:
  </h4>
  
  {/* Bullet List */}
  <ul className="space-y-2" style={{ color: '#475569' }}>
    <li>• <strong>Label:</strong> Description</li>
    <li>• <strong>Label:</strong> Description</li>
  </ul>
  
  {/* Tip Box */}
  <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
    <p className="text-sm font-medium" style={{ color: '#166534' }}>
      💡 Tip text here...
    </p>
  </div>
</StepPDF>
```

---

## 7. ASSET-ORGANISATION

### Ordnerstruktur

```
/public/docs/
├── capa/
│   ├── QCore_CAPA-SOP_v1.0.pdf
│   ├── QCore_CAPA-Form_v1.0.pdf
│   ├── QCore_CAPA-Example_v1.0.pdf
│   └── images/
│       ├── RCA_5W.png
│       ├── RCA_Ishikawa.png
│       ├── RCA_Pareto.png
│       ├── RCA_Instructionspng.png
│       ├── CAPA_dashboard.png
│       ├── CAPA_instructions.png
│       └── Quick_Ref_Card.png
├── nc/
│   ├── QCore_NC-SOP_Sample.pdf
│   ├── QCore_NC-Form_v1.0.pdf
│   ├── QCore_NC-Example_v1.0.pdf
│   └── images/
│       ├── NC_Log_entries.png
│       ├── NC_Log_dashboard.png
│       ├── NC_Log_instructions.png
│       ├── NC_Assessment_Matrix.png
│       └── Quick_Ref_Card.png
└── audit/
    └── ...
```

### Bildgrößen (empfohlen)

| Typ | Breite | Verwendung |
|-----|--------|------------|
| Excel Screenshot | 1400-1800px | Tabs, Dashboard |
| Quick Reference | 800-1200px | A4-artig |
| Instructions | 1200-1600px | Popup |

---

## 8. I18N STRUKTUR

### Translation Object

```jsx
const t = {
  de: {
    meta: { title: '...', description: '...' },
    hero: { title: '...', badges: [...], ... },
    step1: { title: '...', items: [...], tip: '...' },
    step2: { ... },
    // ...
    upsell: { title: '...', text: '...', ... }
  },
  en: {
    // Same structure
  }
};

const text = t[locale] || t.en;
```

### Locale-Handling

```jsx
const router = useRouter();
const locale = router.locale || 'de';
const isEn = locale === 'en';
```

---

## 9. CHECKLISTE FÜR NEUE PRODUKTSEITE

### Assets vorbereiten
- [ ] PDFs für Word-Dokumente erstellen/kopieren
- [ ] Excel-Sheets als PNG screenshotten (1400px+ breit)
- [ ] Dashboard-Ansicht separat screenshotten
- [ ] Instructions-Sheet separat (für Popup)
- [ ] Quick Reference Card als PNG

### Seite erstellen
- [ ] Komponenten kopieren (PDFViewer, ImageViewer, etc.)
- [ ] Translation Object anlegen (DE + EN)
- [ ] Hero Section mit Pain Point
- [ ] Steps 1-N definieren (welcher Step-Typ?)
- [ ] Tip-Boxen einfügen (grün/blau/orange)
- [ ] CTA Section (Email Capture oder Gumroad)
- [ ] Upsell Section (andere Bundles)

### QA
- [ ] Alle Bilder laden?
- [ ] PDFs embedded ohne Toolbar?
- [ ] Tabs funktionieren?
- [ ] Popup öffnet/schließt?
- [ ] Mobile responsive?
- [ ] DE + EN Texte vollständig?

---

*Template erstellt: 17. Januar 2026*
