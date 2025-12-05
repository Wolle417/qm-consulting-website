# QCORE CONSULTING - V2 CLINE IMPLEMENTATION GUIDE

**Project:** Website V2 Update  
**Location:** E:\06_Dev\Projekts\Consulting  
**Current URL:** https://qm-consulting-website.vercel.app  
**New Brand:** QCore Consulting

---

## OVERVIEW

This guide walks Cline through implementing the V2 redesign:
- Complete content rewrite
- Design system overhaul (Scientific Minimalism)
- Component updates
- Deployment

---

## PRE-FLIGHT CHECK

```bash
cd E:\06_Dev\Projekts\Consulting
npm run dev
```

**Verify:**
- ✅ Dev server starts (http://localhost:3000)
- ✅ No build errors
- ✅ Current V1 loads correctly

---

## STEP 1: UPDATE TAILWIND CONFIG

**File:** `tailwind.config.js`

**Replace the `theme.extend.colors` section:**

```javascript
colors: {
  // QCore V2 Colors - Scientific Minimalism
  'qcore-navy': '#1E3A5F',
  'qcore-blue': '#2C5F8D',
  'qcore-slate': '#4A5F7F',
  
  'bg-light': '#F8F9FA',
  'bg-subtle': '#F0F2F5',
  
  'text-primary': '#1A1A1A',
  'text-secondary': '#4A4A4A',
  'text-muted': '#6B6B6B',
  'text-light': '#9E9E9E',
  
  'accent-blue': '#4A90E2',
  'border-light': '#E0E0E0',
  'border-subtle': '#F0F0F0',
  
  // REMOVE OLD COLORS:
  // 'dark-navy': '#0A0E27',
  // 'electric-blue': '#00D4FF',
  // 'cyan-bright': '#00FFF5',
},
```

---

## STEP 2: UPDATE GLOBAL STYLES

**File:** `styles/globals.css`

**Replace the entire file:**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-white text-text-secondary;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply text-text-primary;
    font-weight: 700;
  }
}

@layer utilities {
  .btn-outline {
    @apply px-8 py-4 border-2 border-qcore-navy text-qcore-navy font-semibold rounded;
    transition: all 0.3s ease;
  }
  
  .btn-outline:hover {
    @apply bg-qcore-navy text-white;
  }
  
  .btn-ghost {
    @apply px-8 py-4 border border-border-light text-text-secondary font-medium rounded;
    transition: all 0.3s ease;
  }
  
  .btn-ghost:hover {
    @apply border-qcore-navy text-qcore-navy bg-bg-subtle;
  }

  .card-minimal {
    @apply p-10 bg-white border border-border-light rounded-lg;
    transition: all 0.3s ease;
  }
  
  .card-minimal:hover {
    @apply border-qcore-blue shadow-lg;
    transform: translateY(-2px);
  }

  .section-padding {
    @apply py-24 px-6;
  }
}

/* Remove old V1 styles:
- .glow-button
- .glass-effect
- .gradient-text
- .animate-float
*/
```

---

## STEP 3: UPDATE HERO COMPONENT

**File:** `components/Hero.jsx`

**Replace entire component:**

```jsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-bg-light to-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-qcore-navy mb-8">
            QCORE CONSULTING
          </h1>
          
          <div className="mb-12">
            <p className="text-3xl font-semibold text-text-primary mb-4">
              Qualität ist universell.
            </p>
            <p className="text-xl text-text-secondary leading-relaxed mb-3">
              Klare Prozesse. Stabile Ergebnisse. Kontrollierte Risiken.
            </p>
            <p className="text-xl text-text-secondary leading-relaxed">
              Wir strukturieren Ihre Prozesse. Audit-fähig. Skalierbar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="#contact" className="btn-outline">
              Kontakt aufnehmen
            </a>
            <a href="#services" className="btn-ghost">
              Mehr erfahren
            </a>
          </div>

          <p className="text-sm text-text-muted">
            ISO 9001 • GMP • ISO 13485 • KTA • Branchenübergreifend
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## STEP 4: UPDATE FORWHO COMPONENT

**File:** `components/ForWho.jsx`

**Replace entire component:**

```jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ForWho() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const clients = [
    {
      title: 'Regulierte Umgebungen',
      description: 'Nukleartechnik, Medizintechnik, Pharma, Biotech.\n\nIhre Prozesse unterliegen strengen regulatorischen Anforderungen. Sie brauchen formale Methoden, lückenlose Dokumentation und Risikobeherrschung – ohne Overhead.\n\nWir strukturieren Ihre QM-Systeme: reproduzierbar, nachvollziehbar, audit-fähig.',
    },
    {
      title: 'Technik-orientierte KMUs',
      description: 'Fertigung, Anlagenbau, Elektronik, Halbleiter.\n\nSie entwickeln technische Produkte oder betreiben komplexe Anlagen. Sie brauchen klare Prozesse, stabile Abläufe und saubere Dokumentation – für Kunden, Zertifizierung oder Skalierung.\n\nWir bauen Ihre Prozesslandschaft: strukturiert, fehlerresilient, skalierbar.',
    },
    {
      title: 'Scale-ups & Wachstum',
      description: 'Von 10 auf 100 Mitarbeiter. Von Prototyp zu Serie. Von Ad-hoc zu strukturiert.\n\nIhre Organisation wächst schneller als Ihre Prozesse. Sie brauchen Systeme, die mitwachsen – ohne Ihr Team auszubremsen.\n\nWir entwickeln skalierbare Strukturen: lean, effektiv, nicht bürokratisch.',
    },
  ];

  const industries = [
    'Nukleartechnik',
    'Medizintechnik & Healthcare',
    'Pharma & Biotech',
    'Elektronik & LED',
    'Halbleiter',
    'Anlagenbau & Fertigung',
  ];

  return (
    <section id="forwho" className="section-padding bg-white" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6">
            Für wen wir arbeiten
          </h2>
          
          <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Regulierte Umgebungen, technische Prozesse und wachsende Organisationen 
            brauchen Struktur, Nachvollziehbarkeit und Audit-Sicherheit.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {clients.map((client, index) => (
              <div key={index} className="card-minimal">
                <h3 className="text-xl font-semibold text-text-primary mb-4">
                  {client.title}
                </h3>
                <p className="text-text-secondary leading-relaxed whitespace-pre-line">
                  {client.description}
                </p>
              </div>
            ))}
          </div>

          <div className="border-t border-border-light pt-12">
            <h3 className="text-lg font-semibold text-center text-text-primary mb-6">
              Branchen (Auswahl)
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="text-text-secondary text-sm"
                >
                  {industry}
                  {index < industries.length - 1 && ' •'}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## STEP 5: UPDATE SERVICES COMPONENT

**File:** `components/Services.jsx`

**Replace hover effects and colors, keep content structure:**

```jsx
// Key changes:
// 1. Replace 'glass-effect' with 'card-minimal'
// 2. Remove gradient backgrounds
// 3. Update colors to qcore-navy
// 4. Simplify hover effects

// Example card structure:
<div className="card-minimal">
  <h3 className="text-2xl font-semibold text-text-primary mb-6">
    {service.title}
  </h3>
  <ul className="space-y-3">
    {service.items.map((item, i) => (
      <li key={i} className="flex items-start">
        <span className="w-1.5 h-1.5 bg-qcore-navy rounded-full mr-3 mt-2"></span>
        <span className="text-text-secondary">{item}</span>
      </li>
    ))}
  </ul>
</div>
```

---

## STEP 6: CREATE NEW EXPERTISE COMPONENT

**File:** `components/Expertise.jsx`

**Complete rewrite based on V2 Content document:**

```jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Expertise() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const themes = [
    {
      title: 'Qualität & Compliance',
      intro: 'Qualität ist universell: klare Prozesse, stabile Ergebnisse, kontrollierte Risiken.',
      points: [
        'Aufbau & Modernisierung von QM-Systemen (ISO 9001, branchenspezifische Standards)',
        'Auditfähigkeit, Dokumentationsketten, Risiko- & Abweichungsmanagement',
        'Corrective Actions, Traceability, Nachvollziehbarkeit',
        'Change Control, Management Review, kontinuierliche Verbesserung',
      ],
    },
    {
      title: 'Technische Systeme & Engineering-Logik',
      points: [
        'Analyse technischer Prozesse & Fehlerbilder',
        'Stabilisierung komplexer Prozessketten',
        'Verifikation, Nachweisführung, Strukturierung von Workflows',
        'Integration von Quality Management in technische Entwicklung',
      ],
    },
    {
      title: 'Regulierte Industrien',
      intro: '10+ Jahre Erfahrung in hochregulierten Branchen:',
      industries: [
        'Nukleartechnik (KTA-konform, Safety-Critical Systems)',
        'Medizintechnik & Healthcare (ISO 13485, MDR)',
        'Pharma & Biotech (GMP, ICH Guidelines)',
        'Elektronik & LED (Produktentwicklung, Validation)',
        'Halbleiter (Cleanroom, Process Control)',
        'Anlagenbau & Energie (Großanlagen, komplexe Systeme)',
      ],
      points: [
        'Formale Methoden, Risikobeherrschung, Dokumentationsarchitektur',
      ],
    },
    {
      title: 'Prozesse, Struktur & Skalierbarkeit',
      intro: 'Ihr Problem erfordert Struktur, nicht mehr Meetings.',
      points: [
        'Prozessdesign, Rollen & Verantwortlichkeiten',
        'Fehlerresiliente Abläufe',
        'Strukturen für Wachstum & technische Skalierung',
        'Lean Management, keine Überregulierung',
      ],
    },
    {
      title: 'Arbeitsweise & Methodik',
      points: [
        'Grundprinzipien: Analyse → Struktur → Umsetzung → Dokumentation',
        'Moderne Tools als Methodik: Der Einsatz moderner Werkzeuge (inkl. LLM-gestützter Prozesse) ist selbstverständlich. Effizienzgewinn ohne Qualitätskompromisse.',
        'Reproduzierbare Ergebnisse: Nachvollziehbarkeit, Präzision, Audit-Sicherheit',
        'Hohe Wirksamkeit: In heterogenen, technischen Teams. Senior-Level Kommunikation.',
      ],
    },
  ];

  return (
    <section id="expertise" className="section-padding bg-bg-light" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6">
            Kompetenzprofil
          </h2>
          
          <p className="text-xl text-text-secondary text-center mb-16 max-w-3xl mx-auto">
            Branchenübergreifende Expertise in Quality Management, 
            technischen Systemen und regulierten Industrien.
          </p>

          <div className="space-y-8">
            {themes.map((theme, index) => (
              <div key={index} className="card-minimal">
                <h3 className="text-2xl font-semibold text-qcore-navy mb-4">
                  {theme.title}
                </h3>
                
                {theme.intro && (
                  <p className="text-text-secondary mb-4 italic">
                    {theme.intro}
                  </p>
                )}
                
                {theme.industries && (
                  <ul className="mb-4 space-y-2">
                    {theme.industries.map((industry, i) => (
                      <li key={i} className="text-text-secondary ml-4">
                        • {industry}
                      </li>
                    ))}
                  </ul>
                )}
                
                <ul className="space-y-3">
                  {theme.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-qcore-navy rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-text-secondary leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## STEP 7: CREATE TRANSFER COMPETENCE SECTION

**File:** `components/TransferCompetence.jsx` (NEW)

```jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TransferCompetence() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl font-bold text-qcore-navy mb-12">
            Qualität ist universell.
          </h2>
          
          <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
            <p>
              Unabhängig von Branche oder Produkt gelten dieselben fundamentalen 
              Prinzipien für funktionierende Systeme.
            </p>
            
            <p>
              Reproduzierbarkeit, Nachvollziehbarkeit und Risikokontrolle bilden 
              die Grundlage technischer Qualität.
            </p>
            
            <p>
              Die Kernprozesse – Validation, Risk Management, CAPA, Change Control – 
              funktionieren in jeder hochregulierten Branche gleich.
            </p>
            
            <p className="font-semibold text-qcore-navy">
              QCore überträgt Expertise aus den strengsten Industrien (Nuklear, Medical) 
              auf neue Domänen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## STEP 8: UPDATE ABOUT/ARBEITSWEISE COMPONENT

**File:** `components/About.jsx`

**Replace with principle-based approach:**

```jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const principles = [
    {
      title: 'Klarheit',
      description: 'Komplexe Systeme brauchen einfache Strukturen. Keine unnötigen Prozesse. Fokus auf Wirksamkeit.',
    },
    {
      title: 'Reproduzierbarkeit',
      description: 'Prozesse müssen wiederholbar sein. Standardisierung ohne Überregulierung.',
    },
    {
      title: 'Nachvollziehbarkeit',
      description: 'Dokumentierte Entscheidungen. Audit-Trails. Transparenz für interne und externe Audits.',
    },
    {
      title: 'Moderne Methodik',
      description: 'Effiziente Werkzeuge, moderne Ansätze. LLM-gestützte Prozesse sind selbstverständlich. Hohe Geschwindigkeit ohne Qualitätsverlust.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-bg-light" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16">
            Arbeitsweise
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {principles.map((principle, index) => (
              <div key={index} className="card-minimal">
                <h3 className="text-xl font-semibold text-qcore-navy mb-3">
                  {principle.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-center text-text-muted">
            Remote-First. Projektbasiert. 3-6 Monate typisch.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## STEP 9: UPDATE CONTACT COMPONENT

**File:** `components/Contact.jsx`

**Simplify CTAs, make more professional:**

```jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    'Ihre aktuelle Situation und Ziele',
    'Möglicher Projektumfang und Timeline',
    'Ob und wie QCore unterstützen kann',
  ];

  return (
    <section id="contact" className="section-padding bg-white" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-6">
            Kontakt
          </h2>

          <p className="text-xl text-center text-text-secondary mb-12">
            Unverbindliches Gespräch vereinbaren
          </p>

          <div className="card-minimal mb-12">
            <h3 className="text-xl font-semibold text-center mb-6">
              Wir besprechen:
            </h3>
            <ul className="space-y-4 mb-6">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-qcore-navy/10 rounded-full flex items-center justify-center text-qcore-navy font-semibold mr-4">
                    {index + 1}
                  </span>
                  <span className="text-text-secondary text-lg pt-1">{step}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-text-muted italic text-sm">
              Kein Verkaufsgespräch. Klärung der Passung.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:kontakt@qcore-consulting.de"
              className="btn-outline text-center"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="https://calendly.com/yourlink"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-center"
            >
              Termin vereinbaren
            </a>
          </div>

          <div className="text-center space-y-2 text-text-muted">
            <p>
              <span className="font-medium">E-Mail:</span>{' '}
              <a href="mailto:kontakt@qcore-consulting.de" className="text-accent-blue hover:underline">
                kontakt@qcore-consulting.de
              </a>
            </p>
            <p>
              <span className="font-medium">Standort:</span> Herzogenaurach / Remote
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

---

## STEP 10: UPDATE NAVIGATION

**File:** `components/Navigation.jsx`

**Simplify, make more corporate:**

```jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Leistungen', href: '#services' },
    { label: 'Kompetenzprofil', href: '#expertise' },
    { label: 'Arbeitsweise', href: '#about' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm border-b border-border-light' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="text-xl font-bold text-qcore-navy"
          >
            QCORE CONSULTING
          </a>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-secondary hover:text-qcore-navy transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 border border-qcore-navy text-qcore-navy rounded hover:bg-qcore-navy hover:text-white transition-all"
            >
              Kontakt
            </a>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
```

---

## STEP 11: UPDATE FOOTER

**File:** `components/Footer.jsx`

**Simplify, make minimal:**

```jsx
'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-light border-t border-border-light py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold text-qcore-navy mb-3">
              QCORE CONSULTING
            </h3>
            <p className="text-text-secondary text-sm">
              Spezialist für Quality Management
              <br />
              in hochregulierten Industrien
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-text-secondary hover:text-qcore-navy transition-colors">
                  Leistungen
                </a>
              </li>
              <li>
                <a href="#expertise" className="text-text-secondary hover:text-qcore-navy transition-colors">
                  Kompetenzprofil
                </a>
              </li>
              <li>
                <a href="#about" className="text-text-secondary hover:text-qcore-navy transition-colors">
                  Arbeitsweise
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-secondary hover:text-qcore-navy transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-text-primary mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Herzogenaurach / Remote</li>
              <li>
                <a
                  href="mailto:kontakt@qcore-consulting.de"
                  className="hover:text-qcore-navy transition-colors"
                >
                  kontakt@qcore-consulting.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border-subtle text-center text-sm text-text-light">
          <p>© {currentYear} QCore Consulting. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
```

---

## STEP 12: UPDATE MAIN PAGE

**File:** `pages/index.js`

**Update component imports:**

```javascript
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ForWho from '../components/ForWho';
import Services from '../components/Services';
import Expertise from '../components/Expertise';
import TransferCompetence from '../components/TransferCompetence'; // NEW
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ForWho />
      <Services />
      <Expertise />
      <TransferCompetence />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
```

---

## STEP 13: REMOVE OLD COMPONENTS

**Delete or comment out:**
- `components/CaseStudy.jsx` (move to separate page later)

---

## STEP 14: TEST LOCALLY

```bash
npm run dev
```

**Check:**
- ✅ All components render
- ✅ No console errors
- ✅ Colors updated (Navy Blue, not Electric Blue)
- ✅ Content updated (QCore Consulting, not Stefan Schönwälder)
- ✅ Buttons are outline style (not glowing)
- ✅ Background is white/light (not dark)
- ✅ Hover effects are subtle

---

## STEP 15: BUILD & DEPLOY

```bash
# Build locally first
npm run build

# If build successful:
git add .
git commit -m "V2: QCore Consulting rebrand - Scientific Minimalism design"
git push

# Vercel auto-deploys from GitHub
# Wait 2-3 minutes
# Check: https://qm-consulting-website.vercel.app
```

---

## STEP 16: DOMAIN UPDATE (LATER)

**When qcore-consulting.de is registered:**

1. Go to Vercel Dashboard
2. Settings → Domains
3. Add domain: `qcore-consulting.de`
4. Follow DNS configuration instructions
5. Wait for propagation (24-48h max)

---

## TROUBLESHOOTING

### Build Errors

**Issue:** "Module not found: TransferCompetence"
```bash
# Make sure file exists:
ls components/TransferCompetence.jsx

# If not, create it (Step 7)
```

**Issue:** Tailwind colors not working
```bash
# Restart dev server:
npm run dev
```

**Issue:** Framer Motion errors
```bash
# Reinstall:
npm install framer-motion@latest
```

---

## POST-DEPLOYMENT CHECKLIST

- [ ] Website loads correctly
- [ ] All sections visible
- [ ] Content is QCore (not Stefan Schönwälder)
- [ ] Colors are Navy/White (not Electric Blue/Dark)
- [ ] Buttons are outline style
- [ ] Hover effects work
- [ ] Mobile responsive
- [ ] No console errors
- [ ] Contact links work (update email addresses!)

---

## NEXT STEPS (FUTURE)

**Phase 2:**
1. Create "Über mich" separate page
2. Create Case Studies pages (Nuklear, Medical, Pharma)
3. Add logo (when designed)
4. Add professional photo (when available)
5. Domain migration (qcore-consulting.de)

---

# END OF IMPLEMENTATION GUIDE

**Estimated time: 30-60 minutes**  
**Result: Complete V2 rebrand live on Vercel**

Good luck, Cline! 🚀
