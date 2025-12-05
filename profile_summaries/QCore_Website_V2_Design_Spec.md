# QCORE CONSULTING - V2 DESIGN SPECIFICATION

**Style:** Scientific Minimalism + Boutique Consulting  
**Target:** Desktop-First (Zielgruppe = Entscheider am Desktop)  
**Tone:** Seriös, Corporate, Zurückhaltend

---

## COLOR PALETTE

### Primary Colors
```css
--qcore-navy: #1E3A5F;        /* Primary - Navy Blue (seriös, corporate) */
--qcore-blue: #2C5F8D;        /* Secondary - Lighter Blue (Akzente) */
--qcore-slate: #4A5F7F;       /* Tertiary - Slate (subtil) */
```

### Background Colors
```css
--bg-white: #FFFFFF;          /* Main background */
--bg-light: #F8F9FA;          /* Section alternating */
--bg-subtle: #F0F2F5;         /* Cards, hover states */
```

### Text Colors
```css
--text-primary: #1A1A1A;      /* Headlines, primary text */
--text-secondary: #4A4A4A;    /* Body text */
--text-muted: #6B6B6B;        /* Subtle text, captions */
--text-light: #9E9E9E;        /* Footer, disclaimers */
```

### Accent & Interactive
```css
--accent-blue: #4A90E2;       /* Links, hover states (dezent!) */
--border-light: #E0E0E0;      /* Borders, dividers */
--border-subtle: #F0F0F0;     /* Very subtle borders */
```

### CTA Colors (Outline-Style)
```css
--cta-border: #1E3A5F;        /* Border color */
--cta-text: #1E3A5F;          /* Text color */
--cta-hover-bg: #1E3A5F;      /* Hover background */
--cta-hover-text: #FFFFFF;    /* Hover text */
```

---

## TYPOGRAPHY

### Font Families
```css
/* Primary: Inter (clean, modern, professional) */
--font-primary: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

/* Alternative: IBM Plex Sans (scientific, technical) */
--font-alternative: 'IBM Plex Sans', sans-serif;

/* Monospace (for technical specs, code) */
--font-mono: 'JetBrains Mono', 'Courier New', monospace;
```

### Font Sizes
```css
/* Headlines */
--text-h1: 48px;              /* Hero headline */
--text-h2: 36px;              /* Section headlines */
--text-h3: 24px;              /* Card headlines */
--text-h4: 20px;              /* Sub-headlines */

/* Body */
--text-body-large: 18px;      /* Intro paragraphs */
--text-body: 16px;            /* Standard body */
--text-body-small: 14px;      /* Captions, metadata */

/* Line Heights */
--line-height-tight: 1.2;     /* Headlines */
--line-height-normal: 1.6;    /* Body text */
--line-height-loose: 1.8;     /* Long-form content */
```

### Font Weights
```css
--weight-light: 300;          /* Subtle text */
--weight-regular: 400;        /* Body text */
--weight-medium: 500;         /* Sub-headlines */
--weight-semibold: 600;       /* Card headlines */
--weight-bold: 700;           /* Section headlines */
```

---

## SPACING SYSTEM

### Base Unit: 8px

```css
--space-xs: 8px;
--space-sm: 16px;
--space-md: 24px;
--space-lg: 32px;
--space-xl: 48px;
--space-2xl: 64px;
--space-3xl: 96px;
```

### Section Spacing
```css
--section-padding-y: 96px;    /* Vertical section spacing */
--section-padding-x: 48px;    /* Horizontal container padding */
--max-width: 1200px;          /* Content max-width */
```

---

## COMPONENT STYLES

### 1. BUTTONS

#### Primary CTA (Outline Style)
```css
.btn-primary {
  padding: 16px 32px;
  border: 2px solid var(--qcore-navy);
  background: transparent;
  color: var(--qcore-navy);
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: var(--qcore-navy);
  color: white;
}
```

#### Secondary CTA (Ghost Style)
```css
.btn-secondary {
  padding: 16px 32px;
  border: 1px solid var(--border-light);
  background: transparent;
  color: var(--text-secondary);
  font-size: 16px;
  font-weight: 500;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  border-color: var(--qcore-navy);
  color: var(--qcore-navy);
  background: var(--bg-subtle);
}
```

---

### 2. CARDS

#### Service Card / Feature Card
```css
.card {
  padding: 40px;
  background: white;
  border: 1px solid var(--border-light);
  border-radius: 8px;
  transition: all 0.3s ease;
}

.card:hover {
  border-color: var(--qcore-blue);
  box-shadow: 0 4px 16px rgba(30, 58, 95, 0.1);
  transform: translateY(-2px);
}

.card-headline {
  font-size: 24px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.card-body {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

---

### 3. SECTION LAYOUT

#### Standard Section
```css
.section {
  padding: 96px 48px;
  max-width: 1200px;
  margin: 0 auto;
}

.section-headline {
  font-size: 36px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 24px;
  text-align: center;
}

.section-intro {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 64px;
}
```

#### Alternating Background
```css
.section:nth-child(even) {
  background: var(--bg-light);
}

.section:nth-child(odd) {
  background: white;
}
```

---

### 4. NAVIGATION

#### Sticky Header
```css
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--border-light);
  padding: 20px 48px;
  z-index: 100;
}

.nav-logo {
  font-size: 20px;
  font-weight: 700;
  color: var(--qcore-navy);
}

.nav-link {
  font-size: 14px;
  font-weight: 500;
  color: var(--text-secondary);
  margin-left: 32px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--qcore-navy);
}
```

---

### 5. HERO SECTION

```css
.hero {
  min-height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #F8F9FA 0%, #FFFFFF 100%);
  text-align: center;
  padding: 96px 48px;
}

.hero-headline {
  font-size: 48px;
  font-weight: 700;
  color: var(--qcore-navy);
  margin-bottom: 24px;
  letter-spacing: -0.5px;
}

.hero-tagline-main {
  font-size: 28px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 16px;
}

.hero-tagline-sub {
  font-size: 18px;
  color: var(--text-secondary);
  line-height: 1.6;
  max-width: 800px;
  margin: 0 auto 48px;
}
```

---

### 6. ICONS

#### Minimal Outline Icons (NO Emojis!)
```
Use: Lucide Icons, Feather Icons, or Heroicons
Style: 2px stroke, 24px size
Color: var(--qcore-navy) or var(--text-muted)
```

**Examples:**
- CheckCircle (for lists)
- Layers (for structure/systems)
- Shield (for compliance)
- TrendingUp (for growth)
- Settings (for processes)

---

### 7. LISTS

#### Bulleted Lists (in Cards)
```css
.list-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 12px;
}

.list-bullet {
  width: 6px;
  height: 6px;
  background: var(--qcore-navy);
  border-radius: 50%;
  margin-right: 12px;
  margin-top: 8px;
  flex-shrink: 0;
}

.list-text {
  font-size: 16px;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

---

## MICROINTERACTIONS

### Subtle Animations (NO flashy effects!)

#### Hover Transitions
```css
/* Standard transition for all interactive elements */
transition: all 0.3s ease;
```

#### Fade In on Scroll
```css
/* Use Intersection Observer */
opacity: 0;
transform: translateY(20px);
transition: opacity 0.6s ease, transform 0.6s ease;

/* When in view */
opacity: 1;
transform: translateY(0);
```

#### Card Hover
```css
transform: translateY(-2px);
box-shadow: 0 4px 16px rgba(30, 58, 95, 0.1);
```

**NO:**
- ❌ Rotating elements
- ❌ Sliding animations
- ❌ Parallax effects
- ❌ Gradient animations
- ❌ Typing effects (außer Hero, wenn dezent)

---

## LAYOUT PRINCIPLES

### Grid System
```css
/* 3-column grid for cards */
display: grid;
grid-template-columns: repeat(3, 1fr);
gap: 32px;

/* 2-column grid for detailed content */
grid-template-columns: repeat(2, 1fr);
gap: 48px;
```

### Content Width
```css
max-width: 1200px;    /* Content container */
max-width: 800px;     /* Long-form text, intros */
max-width: 600px;     /* Narrow text blocks */
```

### Whitespace
```
Generous whitespace = Professional look
Section padding: 96px vertical
Card padding: 40px
Element spacing: 24-48px between major elements
```

---

## RESPONSIVE BREAKPOINTS

```css
/* Desktop-First approach */
--breakpoint-xl: 1440px;   /* Large desktop */
--breakpoint-lg: 1200px;   /* Standard desktop */
--breakpoint-md: 1024px;   /* Small desktop / large tablet */
--breakpoint-sm: 768px;    /* Tablet */
--breakpoint-xs: 480px;    /* Mobile */
```

**Priority:** Desktop (1200px+)  
**Secondary:** Tablet (768-1024px)  
**Tertiary:** Mobile (adaptive, but not primary focus)

---

## IMAGES & MEDIA

### Portrait Photo (Platzhalter)
```css
.portrait-placeholder {
  width: 200px;
  height: 200px;
  background: var(--bg-subtle);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  font-size: 14px;
}
```

### Background Patterns (OPTIONAL, subtle)
```
Subtle grid pattern (10% opacity)
Dot matrix (very faint, 5% opacity)
NO: Gradients, geometric shapes, decorative elements
```

---

## FOOTER DESIGN

```css
.footer {
  background: var(--bg-light);
  border-top: 1px solid var(--border-light);
  padding: 64px 48px 32px;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 64px;
  max-width: 1200px;
  margin: 0 auto 48px;
}

.footer-brand {
  font-size: 20px;
  font-weight: 700;
  color: var(--qcore-navy);
  margin-bottom: 16px;
}

.footer-link {
  font-size: 14px;
  color: var(--text-secondary);
  margin-bottom: 8px;
  transition: color 0.3s ease;
}

.footer-link:hover {
  color: var(--qcore-navy);
}

.footer-bottom {
  text-align: center;
  font-size: 14px;
  color: var(--text-light);
  padding-top: 32px;
  border-top: 1px solid var(--border-subtle);
}
```

---

## BRAND ELEMENTS

### Logo (Text-Based, for now)
```
QCORE CONSULTING
or
QCC (minimalist variant)

Font: Inter Bold, 20-24px
Color: var(--qcore-navy)
Letter-spacing: -0.5px
```

### Tagline Styling
```css
.tagline-main {
  font-size: 28px;
  font-weight: 600;
  color: var(--text-primary);
  line-height: 1.3;
}

.tagline-sub {
  font-size: 18px;
  font-weight: 400;
  color: var(--text-secondary);
  line-height: 1.6;
}
```

---

## COMPARISON: V1 vs V2

### REMOVE from V1:
- ❌ Electric Blue (#00D4FF) - zu laut
- ❌ Cyan (#00FFF5) - zu tech-hipster
- ❌ Dark background (#0A0E27) - zu dunkel
- ❌ Gradient text - zu flashy
- ❌ Glow effects - zu verspielt
- ❌ Animated gradient orbs - zu ablenkend
- ❌ Emojis in sections - unprofessionell
- ❌ "Typing animation" - zu gimicky (außer Hero, dezent)

### ADD in V2:
- ✅ Navy Blue (#1E3A5F) - seriös, corporate
- ✅ White/Light Gray background - clean, professional
- ✅ Outline buttons - zurückhaltend
- ✅ Minimal hover effects - subtil
- ✅ Generous whitespace - Boutique Consulting
- ✅ Outline icons - professional
- ✅ Scientific typography - präzise
- ✅ Structured grid layout - ordentlich

---

## IMPLEMENTATION PRIORITY

### Phase 1 (Critical):
1. Color scheme update (Navy Blue system)
2. Typography overhaul (Inter font)
3. Button redesign (Outline style)
4. Remove dark background, replace with white/light
5. Content update (all text)

### Phase 2 (Important):
6. Card redesign (minimal, border-based)
7. Navigation update (blur backdrop, subtle)
8. Footer simplification
9. Icon replacement (Outline icons)

### Phase 3 (Polish):
10. Microinteractions tuning
11. Responsive optimization
12. Performance optimization

---

# END OF DESIGN SPECIFICATION

**Next: Cline Implementation Guide**
