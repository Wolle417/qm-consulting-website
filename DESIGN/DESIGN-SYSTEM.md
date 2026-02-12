# QCore Consulting – Design System

**Version:** 1.1  
**Stand:** Januar 2026  
**Erstellt für:** Konsistente Seitenerstellung

---

## Inhaltsverzeichnis

1. [Farbsystem](#1-farbsystem)
2. [Typografie](#2-typografie)
3. [Glassmorphism Boxes](#3-glassmorphism-boxes)
4. [Buttons & CTAs](#4-buttons--ctas)
5. [Layout & Grid](#5-layout--grid)
6. [Navigation](#6-navigation)
7. [Komponenten-Bibliothek](#7-komponenten-bibliothek)
8. [Page Templates](#8-page-templates)
9. [Anti-Patterns](#9-anti-patterns)

---

## 1. Farbsystem

### Primary Colors

| Name | Hex | Verwendung |
|------|-----|------------|
| `primary-900` | `#0f172a` | Darkest headlines |
| `primary-800` | `#1e293b` | Headlines, nav links |
| `primary-700` | `#1e3a8a` | Primary blue, badges, accents |
| `primary-600` | `#334155` | Body text |
| `primary-500` | `#475569` | Muted text |
| `primary-400` | `#64748b` | Light text, subtitles |
| `primary-300` | `#94a3b8` | Lighter text, strikethrough |

### Semantic Colors

| Name | Hex | Verwendung |
|------|-----|------------|
| `success` | `#22c55e` | Checkmarks, FREE tags, positive |
| `success-dark` | `#166534` | Success text on light bg |
| `error` | `#ef4444` | Warnings, FDA findings |
| `error-dark` | `#b91c1c` | Error headlines |
| `warning` | `#f59e0b` | Caution, amber |
| `warning-dark` | `#b45309` | Warning text |
| `info` | `#3b82f6` | Info boxes |
| `info-dark` | `#1e40af` | Info text |

### Glassmorphism Colors (RGBA)

```css
/* Box Backgrounds */
--box-default: rgba(30, 58, 138, 0.06);
--box-subtle: rgba(30, 58, 138, 0.04);
--box-hover: rgba(30, 58, 138, 0.08);

/* Box Borders */
--border-default: rgba(30, 58, 138, 0.1);
--border-subtle: rgba(30, 58, 138, 0.08);
--border-hover: rgba(30, 58, 138, 0.15);

/* Button Glass */
--btn-glass-bg: rgba(191, 219, 254, 0.35);
--btn-glass-bg-hover: rgba(191, 219, 254, 0.45);
--btn-glass-border: rgba(191, 219, 254, 0.5);

/* Semantic Boxes */
--box-error: rgba(239, 68, 68, 0.08);
--border-error: rgba(239, 68, 68, 0.2);
--box-success: rgba(34, 197, 94, 0.1);
--box-warning: rgba(245, 158, 11, 0.1);
--box-info: rgba(59, 130, 246, 0.1);
```

---

## 2. Typografie

### Font Families

```css
/* Headlines - Elegant Serif */
font-family: 'Cormorant', serif;

/* Body - Clean Sans */
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

### Heading Scale

| Element | Font | Size | Weight | Color |
|---------|------|------|--------|-------|
| Hero H1 | Cormorant | 9rem | 500 | `#1e293b` |
| Page H1 | Cormorant | 5xl-6xl | 600 | `#0f172a` |
| Section H2 | Cormorant | 4xl-5xl | 700 | `#1e293b` |
| Card H3 | Cormorant | 2xl | 600 | `#0f172a` |
| Subhead H4 | Cormorant | lg (1.125rem) | 600 | `#0f172a` |

### Body Text

| Type | Size | Weight | Color |
|------|------|--------|-------|
| Body | 18px (base) | 400 | `#334155` |
| Body Muted | 16px | 400 | `#475569` |
| Small | 14px | 400 | `#64748b` |
| XS | 12px | 400-600 | `#64748b` |

### Code Snippets

```jsx
// Hero Title
<h1 style={{
  fontFamily: "'Cormorant', serif",
  fontSize: '9rem',
  fontWeight: 500,
  color: '#1e293b',
  lineHeight: 1,
}}>
  QCore
</h1>

// Page Title
<h1 
  className="text-5xl lg:text-6xl font-semibold"
  style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
>
  CAPA System
</h1>

// Section Title
<h2 
  className="text-4xl md:text-5xl font-bold mb-16"
  style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
>
  Für wen wir arbeiten
</h2>

// Card Title
<h3 
  className="text-2xl font-semibold" 
  style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
>
  Den Prozess definieren
</h3>
```

---

## 3. Glassmorphism Boxes

### Default Box (Content Cards)

```jsx
<div
  className="p-8 rounded-xl transition-all duration-300 hover:shadow-lg"
  style={{
    backgroundColor: 'rgba(30, 58, 138, 0.06)',
    border: '1px solid rgba(30, 58, 138, 0.1)',
    backdropFilter: 'blur(3px)',
  }}
>
  {/* Content */}
</div>
```

### Subtle Box (Info Panels)

```jsx
<div 
  className="rounded-xl p-6 backdrop-blur-sm"
  style={{ 
    backgroundColor: 'rgba(30, 58, 138, 0.04)', 
    border: '1px solid rgba(30, 58, 138, 0.08)' 
  }}
>
  {/* Content */}
</div>
```

### Error/Warning Box (FDA, Critical)

```jsx
<div 
  className="rounded-xl p-6 backdrop-blur-sm"
  style={{ 
    backgroundColor: 'rgba(239, 68, 68, 0.08)', 
    border: '1px solid rgba(239, 68, 68, 0.2)' 
  }}
>
  <p className="font-bold text-xl mb-2" style={{ color: '#b91c1c' }}>
    #1 FDA Finding
  </p>
  <p style={{ color: '#7f1d1d' }}>
    CAPA-Mängel führen die Liste...
  </p>
</div>
```

### Success/Tip Box

```jsx
<div 
  className="p-4 rounded-lg" 
  style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}
>
  <p className="text-sm font-medium" style={{ color: '#166534' }}>
    💡 Tip text here
  </p>
</div>
```

### Info Box

```jsx
<div 
  className="p-4 rounded-lg" 
  style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
>
  <p className="text-sm font-medium" style={{ color: '#1e40af' }}>
    📋 Info text here
  </p>
</div>
```

### Warning/Caution Box

```jsx
<div 
  className="p-4 rounded-lg" 
  style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}
>
  <p className="text-sm font-medium" style={{ color: '#b45309' }}>
    ⚠️ Warning text here
  </p>
</div>
```

### Compliance Badge

```jsx
<div 
  className="px-4 py-2 rounded-lg backdrop-blur-sm"
  style={{ 
    backgroundColor: 'rgba(30, 58, 138, 0.06)', 
    border: '1px solid rgba(30, 58, 138, 0.1)' 
  }}
>
  <span className="font-semibold" style={{ color: '#0f172a' }}>ISO 13485:2016</span>
  <span className="ml-2 text-sm" style={{ color: '#64748b' }}>§8.5.2 / §8.5.3</span>
</div>
```

---

## 4. Buttons & CTAs

### Glass CTA Button (Primary)

```jsx
<button
  className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02]"
  style={{ 
    backgroundColor: 'rgba(191, 219, 254, 0.35)',
    backdropFilter: 'blur(3px)',
    border: '1px solid rgba(191, 219, 254, 0.5)',
    color: '#1e3a8a'
  }}
>
  Kostenlos herunterladen
</button>
```

### Glass CTA Button (Hover State)

```jsx
// Add to style for hover:
onMouseEnter={(e) => {
  e.target.style.backgroundColor = 'rgba(191, 219, 254, 0.45)';
}}
onMouseLeave={(e) => {
  e.target.style.backgroundColor = 'rgba(191, 219, 254, 0.35)';
}}
```

### Popup/Enlarge Button

```jsx
<button
  className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-opacity-80"
  style={{ 
    backgroundColor: 'rgba(30, 58, 138, 0.1)', 
    color: '#1e3a8a', 
    border: '1px solid rgba(30, 58, 138, 0.2)' 
  }}
>
  <span>🔍</span>
  <span>Anleitung anzeigen</span>
</button>
```

### Tab Buttons (Glass Style)

```jsx
// Active Tab - Glass
<button
  className="px-8 py-4 rounded-xl text-lg font-bold transition-all"
  style={{
    backgroundColor: 'rgba(30, 58, 138, 0.2)',
    backdropFilter: 'blur(4px)',
    color: '#1e3a8a',
    border: '2px solid rgba(30, 58, 138, 0.4)',
    boxShadow: '0 4px 12px rgba(30, 58, 138, 0.2)',
    transform: 'scale(1.02)',
  }}
>
  5-Why
</button>

// Inactive Tab - Glass
<button
  className="px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-[1.02]"
  style={{
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    backdropFilter: 'blur(3px)',
    color: '#1e3a8a',
    border: '1px solid rgba(30, 58, 138, 0.15)',
  }}
  onMouseEnter={(e) => {
    e.target.style.backgroundColor = 'rgba(191, 219, 254, 0.3)';
    e.target.style.borderColor = 'rgba(30, 58, 138, 0.25)';
  }}
  onMouseLeave={(e) => {
    e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.4)';
    e.target.style.borderColor = 'rgba(30, 58, 138, 0.15)';
  }}
>
  Ishikawa
</button>
```

### Link Styling

```jsx
<a 
  href="/produkte/nc-system"
  className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
  style={{ 
    backgroundColor: 'rgba(191, 219, 254, 0.35)',
    backdropFilter: 'blur(3px)',
    border: '1px solid rgba(191, 219, 254, 0.5)',
    color: '#1e3a8a'
  }}
>
  NC Management Bundle – €99
</a>
```

---

## 5. Layout & Grid

### Page Container

```jsx
<main className="pt-24 pb-16 px-6 lg:px-12">
  <div className="max-w-screen-2xl mx-auto">
    {/* Content */}
  </div>
</main>
```

### Section Container (Landing Page)

```jsx
<section className="relative pb-12 z-10">
  <div className="max-w-[90%] mx-auto px-6">
    {/* Content */}
  </div>
</section>
```

### 5-Column Product Grid (3 + 2)

```jsx
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
  {/* Left: Preview (3 cols) */}
  <div className="lg:col-span-3">
    <PDFViewer />
  </div>
  
  {/* Right: Description (2 cols) */}
  <div className="lg:col-span-2">
    <div className="lg:sticky lg:top-24">
      {/* Sidebar content */}
    </div>
  </div>
</div>
```

### 2-Column Grid (Landing Cards)

```jsx
<div className="grid md:grid-cols-2 gap-4">
  {/* Cards */}
</div>
```

### 3-Column Grid (Clients)

```jsx
<div className="grid md:grid-cols-3 gap-4">
  {/* Cards */}
</div>
```

### 4-Column Grid (Footer)

```jsx
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  {/* Columns */}
</div>
```

### Spacing Scale

| Name | Value | Usage |
|------|-------|-------|
| `gap-4` | 1rem | Between cards |
| `gap-8` | 2rem | Between major sections |
| `mb-4` | 1rem | Small margin |
| `mb-6` | 1.5rem | Medium margin |
| `mb-8` | 2rem | Section margin |
| `mb-16` | 4rem | Large section margin |
| `mb-20` | 5rem | Hero bottom margin |
| `mb-24` | 6rem | Step bottom margin |
| `p-6` | 1.5rem | Card padding standard |
| `p-8` | 2rem | Card padding large |
| `pt-24` | 6rem | Page top (nav clearance) |

---

## 6. Navigation

### Nav Container

```jsx
<motion.nav
  className="fixed top-0 left-0 right-0 bg-slate-900/40 backdrop-blur-sm"
  style={{ zIndex: 100 }}
>
  <div className="w-full pl-12 pr-6 lg:pl-24 lg:pr-12 xl:pl-32 xl:pr-24 py-3">
    {/* Content */}
  </div>
</motion.nav>
```

### Nav Link Style

```jsx
<Link
  href="/"
  style={{
    fontFamily: "'Cormorant', serif",
    fontSize: '1.15rem',
    fontWeight: 500,
    color: '#1e293b',
  }}
  className="hover:text-slate-600 transition-colors"
>
  Start
</Link>
```

### Dropdown Container

```jsx
<div 
  className="absolute top-full left-0 mt-2 py-2 rounded-lg shadow-xl border"
  style={{ 
    backgroundColor: 'rgba(255, 255, 255, 0.95)', 
    backdropFilter: 'blur(8px)',
    borderColor: 'rgba(30, 58, 138, 0.15)',
    zIndex: 200,
    minWidth: '280px'
  }}
>
  {/* Dropdown items */}
</div>
```

### Dropdown Header

```jsx
<div
  className="px-4 py-2 flex items-center justify-between"
  style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)' }}
>
  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#1e3a8a' }}>
    MedTech
  </span>
  <span className="text-xs" style={{ color: '#64748b' }}>ISO 13485 · FDA</span>
</div>
```

### Language Switch Pills

```jsx
<div 
  className="flex items-center rounded-full p-1"
  style={{ 
    backgroundColor: 'rgba(241, 245, 249, 0.45)', 
    backdropFilter: 'blur(3px)',
    border: '1px solid rgba(148, 163, 184, 0.3)' 
  }}
>
  {/* Active */}
  <button
    style={{ 
      backgroundColor: 'rgba(191, 219, 254, 0.5)',
      backdropFilter: 'blur(3px)',
      border: '1px solid rgba(191, 219, 254, 0.6)',
      color: '#1e3a8a',
    }}
    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
  >
    <span>🇩🇪</span><span>DE</span>
  </button>
  
  {/* Inactive */}
  <button
    style={{ 
      backgroundColor: 'transparent',
      border: '1px solid transparent',
      color: '#64748b',
    }}
    className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium"
  >
    <span>🇬🇧</span><span>EN</span>
  </button>
</div>
```

---

## 7. Komponenten-Bibliothek

### Step Number Badge (Glass Version)

```jsx
<div 
  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0"
  style={{ 
    backgroundColor: 'rgba(30, 58, 138, 0.15)',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(30, 58, 138, 0.25)',
    color: '#1e3a8a',
    boxShadow: '0 2px 8px rgba(30, 58, 138, 0.15)'
  }}
>
  1
</div>
```

### Step Number Badge (Solid Alternative)

```jsx
<div 
  className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0"
  style={{ backgroundColor: '#1e3a8a', color: 'white' }}
>
  1
</div>
```

### Step Header

```jsx
<div className="flex items-center gap-4 mb-6">
  <div 
    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0"
    style={{ 
      backgroundColor: 'rgba(30, 58, 138, 0.15)',
      backdropFilter: 'blur(4px)',
      border: '1px solid rgba(30, 58, 138, 0.25)',
      color: '#1e3a8a',
      boxShadow: '0 2px 8px rgba(30, 58, 138, 0.15)'
    }}
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

### Image Viewer with Caption

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

### Price Display (Strikethrough + FREE)

```jsx
<div className="text-center mb-2">
  <span className="text-2xl line-through" style={{ color: '#94a3b8' }}>€129</span>
  <span className="text-4xl font-bold ml-3" style={{ color: '#22c55e' }}>FREE</span>
</div>
```

### Checklist Items

```jsx
<ul className="text-sm space-y-2">
  {items.map((item, i) => (
    <li key={i} className="flex items-center" style={{ color: '#334155' }}>
      <span className="mr-2" style={{ color: '#22c55e' }}>✓</span>
      {item}
    </li>
  ))}
</ul>
```

### Bullet List (Landing Cards)

```jsx
<ul className="space-y-2">
  {items.map((item, i) => (
    <li key={i} className="flex items-start">
      <span className="w-2 h-2 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
      <span className="text-base leading-relaxed" style={{ color: '#000000' }}>{item}</span>
    </li>
  ))}
</ul>
```

### Labeled List

```jsx
<ul className="space-y-2" style={{ color: '#475569' }}>
  <li>• <strong>Trigger:</strong> Wann wird ein CAPA eröffnet?</li>
  <li>• <strong>Eskalation:</strong> Minor vs. Major vs. Critical</li>
</ul>
```

### Numbered List

```jsx
<ul className="space-y-2" style={{ color: '#475569' }}>
  {items.map((item, idx) => (
    <li key={idx}>{idx + 1}. {item}</li>
  ))}
</ul>
```

---

## 8. Page Templates

### Template A: Landing Page

```
┌─────────────────────────────────────────┐
│ Navigation (fixed)                       │
├─────────────────────────────────────────┤
│ Hero (40vh)                              │
│   - Logo Stack (QCore + CONSULTING)      │
│   - Accent Line                          │
├─────────────────────────────────────────┤
│ Leistungen Grid (2x2)                    │
│   ┌───────┐ ┌───────┐                    │
│   │ Card  │ │ Card  │                    │
│   └───────┘ └───────┘                    │
│   ┌───────┐ ┌───────┐                    │
│   │ Card  │ │ Card  │                    │
│   └───────┘ └───────┘                    │
├─────────────────────────────────────────┤
│ For Who Section (3 cols)                 │
│   ┌─────┐ ┌─────┐ ┌─────┐               │
│   │     │ │     │ │     │               │
│   └─────┘ └─────┘ └─────┘               │
├─────────────────────────────────────────┤
│ Footer (4 cols)                          │
└─────────────────────────────────────────┘
```

### Template B: Product Detail Page (CAPA System)

```
┌─────────────────────────────────────────┐
│ Navigation (fixed)                       │
├─────────────────────────────────────────┤
│ Hero Section (5 cols: 3 + 2)             │
│ ┌─────────────────┐ ┌─────────┐         │
│ │ Title           │ │ Email   │         │
│ │ Badges          │ │ Capture │         │
│ │ FDA Box (red)   │ │ (sticky)│         │
│ │ Problem/Solution│ │         │         │
│ │ How It Works    │ │         │         │
│ └─────────────────┘ └─────────┘         │
├─────────────────────────────────────────┤
│ Step 1 (5 cols: 3 + 2)                   │
│ ┌─────────────────┐ ┌─────────┐         │
│ │ PDF Viewer      │ │ Explain │         │
│ │                 │ │ Box     │         │
│ └─────────────────┘ └─────────┘         │
├─────────────────────────────────────────┤
│ Step 2...                                │
├─────────────────────────────────────────┤
│ Step 3 (Tabbed Images)                   │
│ [Tab1] [Tab2] [Tab3]                     │
│ ┌─────────────────┐ ┌─────────┐         │
│ │ Image           │ │ Explain │         │
│ └─────────────────┘ └─────────┘         │
├─────────────────────────────────────────┤
│ ... more steps ...                       │
├─────────────────────────────────────────┤
│ Upsell Section (centered)                │
│ ┌─────────────────────────────┐         │
│ │ Title + Text                │         │
│ │ [CTA 1] [CTA 2]             │         │
│ └─────────────────────────────┘         │
├─────────────────────────────────────────┤
│ Footer                                   │
└─────────────────────────────────────────┘
```

### Template C: Service Page

```
┌─────────────────────────────────────────┐
│ Navigation                               │
├─────────────────────────────────────────┤
│ Page Header                              │
│   - H1 Title                             │
│   - Subtitle/Description                 │
├─────────────────────────────────────────┤
│ Service Cards Grid                       │
│   ┌───────┐ ┌───────┐ ┌───────┐         │
│   │       │ │       │ │       │         │
│   └───────┘ └───────┘ └───────┘         │
├─────────────────────────────────────────┤
│ CTA Section                              │
├─────────────────────────────────────────┤
│ Footer                                   │
└─────────────────────────────────────────┘
```

---

## 9. Anti-Patterns

### ❌ NICHT TUN

```jsx
// Keine grellen Hintergrundfarben
backgroundColor: 'red'
backgroundColor: '#ff0000'
bg-red-500

// Keine bunten Textfarben
color: 'green'
text-green-500

// Keine harten Schatten
boxShadow: '0 0 10px black'

// Keine pure white backgrounds
backgroundColor: 'white'  // → rgba stattdessen

// Keine solid buttons (use glass instead)
backgroundColor: '#1e3a8a'  // → use glass style

// Keine inconsistenten Radii
rounded-sm, rounded-md gemischt  // → immer rounded-lg oder rounded-xl

// Keine inline color definitions in Tailwind wenn Style-Object verwendet wird
className="text-blue-500" + style={{ color: '#1e3a8a' }}  // pick one

// Keine unterschiedlichen blur-Werte
backdrop-blur-md, backdrop-blur-lg gemischt  // → immer blur(3px) oder blur(4px)
```

### ✅ STATTDESSEN

```jsx
// Konsistente Box-Hintergründe
backgroundColor: 'rgba(30, 58, 138, 0.06)'

// Konsistente Text-Hierarchie
color: '#0f172a'  // Headlines
color: '#334155'  // Body
color: '#475569'  // Muted

// Subtile Schatten
className="shadow-lg hover:shadow-xl"

// Konsistente Glass-Effekte
backdropFilter: 'blur(3px)'  // Standard
backdropFilter: 'blur(4px)'  // Leicht stärker für Badges

// Konsistente Radii
className="rounded-xl"  // Cards
className="rounded-lg"  // Buttons, Badges
className="rounded-full"  // Pills, Avatars, Step Badges
```

---

## Quick Reference: Copy-Paste Styles

### Standard Content Box

```jsx
style={{
  backgroundColor: 'rgba(30, 58, 138, 0.06)',
  border: '1px solid rgba(30, 58, 138, 0.1)',
  backdropFilter: 'blur(3px)',
}}
className="p-8 rounded-xl transition-all duration-300 hover:shadow-lg"
```

### Glass CTA Button

```jsx
style={{ 
  backgroundColor: 'rgba(191, 219, 254, 0.35)',
  backdropFilter: 'blur(3px)',
  border: '1px solid rgba(191, 219, 254, 0.5)',
  color: '#1e3a8a'
}}
className="px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02]"
```

### Glass Tab Active

```jsx
style={{
  backgroundColor: 'rgba(30, 58, 138, 0.2)',
  backdropFilter: 'blur(4px)',
  border: '2px solid rgba(30, 58, 138, 0.4)',
  color: '#1e3a8a',
  boxShadow: '0 4px 12px rgba(30, 58, 138, 0.2)',
}}
className="px-8 py-4 rounded-xl text-lg font-bold"
```

### Glass Tab Inactive

```jsx
style={{
  backgroundColor: 'rgba(255, 255, 255, 0.4)',
  backdropFilter: 'blur(3px)',
  border: '1px solid rgba(30, 58, 138, 0.15)',
  color: '#1e3a8a',
}}
className="px-8 py-4 rounded-xl text-lg font-semibold"
```

### Glass Step Badge

```jsx
style={{ 
  backgroundColor: 'rgba(30, 58, 138, 0.15)',
  backdropFilter: 'blur(4px)',
  border: '1px solid rgba(30, 58, 138, 0.25)',
  color: '#1e3a8a',
  boxShadow: '0 2px 8px rgba(30, 58, 138, 0.15)'
}}
className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl"
```

### Page Background

```jsx
<div className="fixed inset-0 -z-10">
  <div
    className="absolute inset-0"
    style={{
      background: `
        radial-gradient(1200px 900px at 18% 12%, rgba(255,255,255,.55), transparent 62%),
        radial-gradient(900px 700px at 78% 65%, rgba(255,255,255,.25), transparent 58%),
        radial-gradient(1400px 1100px at 82% 20%, rgba(130,170,185,.28), transparent 60%),
        linear-gradient(180deg, #c5d3d8, #7a9299)
      `,
    }}
  />
</div>
```

### Headline (Page Title)

```jsx
style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
className="text-5xl lg:text-6xl font-semibold mb-4"
```

### Body Text

```jsx
style={{ color: '#334155' }}
className="text-lg mb-4"
```

### Muted Text

```jsx
style={{ color: '#475569' }}
className="text-sm"
```

---

*Erstellt: Januar 2026 | Version 1.1 – Glass Style für Tabs & Step Badges*
