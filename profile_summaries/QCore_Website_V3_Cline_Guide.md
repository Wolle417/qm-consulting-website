# QCORE CONSULTING - V3 CLINE IMPLEMENTATION GUIDE

**Project:** Website V3 Update - LEAN & KUNDENZENTRIERT  
**Location:** E:\06_Dev\Projekts\Consulting  
**Current URL:** https://qm-consulting-website.vercel.app

---

# OVERVIEW

V3 ist ein STRUKTURELLES Update:
- Main Page: 8 Sections → 4 Sections
- Neue Subpages: /arbeitsweise, /ueber-uns
- Entfernung aller Redundanzen und unprofessionellen Phrasen

---

# PRE-FLIGHT CHECK

```bash
cd E:\06_Dev\Projekts\Consulting
npm run dev
```

Verify: Dev server läuft auf http://localhost:3000

---

# STEP 1: LÖSCHE UNNÖTIGE COMPONENTS

## Zu löschende Dateien:

```bash
# Diese Components werden nicht mehr auf Main Page verwendet:
# (Backup erstellen falls gewünscht, dann löschen oder auskommentieren)

components/Expertise.jsx        # → LÖSCHEN (zu akademisch)
components/TransferCompetence.jsx  # → LÖSCHEN (redundant mit Hero)
```

**Alternativ:** Dateien behalten, aber aus index.js entfernen.

---

# STEP 2: UPDATE pages/index.js

## Neue Struktur (NUR 4 SECTIONS + FOOTER):

```jsx
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import ForWho from '../components/ForWho';
import Services from '../components/Services';
import Industries from '../components/Industries';  // NEU (ersetzt altes Branchen + CTA)
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <ForWho />
      <Services />
      <Industries />
      <Footer />
    </main>
  );
}
```

**ENTFERNT:**
- ❌ Expertise
- ❌ TransferCompetence
- ❌ About (wird Subpage)
- ❌ Contact (wird Teil von Industries)

---

# STEP 3: UPDATE components/Hero.jsx

## Kleine Änderungen:

```jsx
'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="min-h-[85vh] flex items-center justify-center bg-gradient-to-br from-[#0A0E27] to-[#1E3A5F]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-8">
            QCORE CONSULTING
          </h1>
          
          <div className="mb-12">
            <p className="text-3xl font-semibold text-white mb-4">
              Qualität ist universell.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed mb-3">
              Klare Prozesse. Stabile Ergebnisse. Kontrollierte Risiken.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              Wir strukturieren Ihre Prozesse. Audit-fähig. Skalierbar.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a href="#contact" className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded hover:bg-blue-400 hover:text-[#0A0E27] transition-all">
              Kontakt aufnehmen
            </a>
            <a href="#services" className="px-8 py-4 border border-gray-500 text-gray-300 font-medium rounded hover:border-blue-400 hover:text-blue-400 transition-all">
              Mehr erfahren
            </a>
          </div>

          <p className="text-sm text-gray-400">
            ISO 9001 • GMP • ISO 13485 • KTA
          </p>
        </motion.div>
      </div>
    </section>
  );
}
```

---

# STEP 4: UPDATE components/ForWho.jsx

## Kompaktere Cards:

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
      industries: 'Pharma • Medical • Nuklear • Biotech',
      need: 'Audit-fähige QM-Systeme, formale Methoden, lückenlose Dokumentation.',
      solution: 'Reproduzierbar, nachvollziehbar, compliance-ready. Ohne Overhead.',
    },
    {
      title: 'Technik-orientierte KMUs',
      industries: 'Halbleiter & Optoelektronik • Fertigung • Elektronik',
      need: 'Strukturierte Prozesse, saubere Dokumentation, Zertifizierungsfähigkeit.',
      solution: 'Stabile Prozesslandschaft. Fehlerresilient. Skalierbar.',
    },
    {
      title: 'Scale-ups & Wachstum',
      industries: 'Von 10 auf 100 Mitarbeiter. Von Ad-hoc zu strukturiert.',
      need: 'Systeme die mitwachsen – ohne Ihr Team auszubremsen.',
      solution: 'Lean, skalierbar, nicht bürokratisch.',
    },
  ];

  return (
    <section id="forwho" className="py-24 px-6 bg-[#0D1229]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-16">
            Für wen wir arbeiten
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div 
                key={index} 
                className="p-8 bg-[#1E3A5F]/20 border border-white/10 rounded-lg hover:border-blue-400/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-2">
                  {client.title}
                </h3>
                
                <p className="text-sm text-blue-400 mb-4">
                  {client.industries}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                      Sie brauchen:
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {client.need}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1">
                      Wir liefern:
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {client.solution}
                    </p>
                  </div>
                </div>
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

# STEP 5: UPDATE components/Services.jsx

## Leistungen KOMPAKT (ohne Footer-Zeile!):

```jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'QM-System Aufbau & Zertifizierung',
      items: [
        'Quality Manual & QM-Handbuch (ISO 9001)',
        'Prozessdokumentation (SOPs, Arbeitsanweisungen)',
        'Management Review, Interne Audits',
        'Vorbereitung auf Zertifizierungsaudit',
      ],
    },
    {
      title: 'Branchenspezifische Anpassung',
      items: [
        'Pharma: GMP-Anforderungen, Validation, CAPA',
        'Medical Devices: ISO 13485, Risikoanalyse (ISO 14971)',
        'Nuklear: KTA-Standards, Safety Analysis',
        'Fertigung: Produktionssteuerung, Qualitätskontrolle',
      ],
    },
    {
      title: 'Risk Management & Prozessoptimierung',
      items: [
        'FMEA (Failure Mode and Effects Analysis)',
        'Root Cause Analysis (5-Why, Ishikawa)',
        'Continuous Improvement (KVP, Lean)',
        'Process Mapping und Optimization',
      ],
    },
    {
      title: 'Dokumentation & Validation',
      items: [
        'Equipment Qualification (IQ/OQ/PQ)',
        'Process Validation',
        'Computer System Validation',
        'Analytical Method Validation',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 px-6 bg-[#0A0E27]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Unsere Leistungen
          </h2>
          
          <p className="text-xl text-gray-400 text-center mb-16">
            Von QM-System-Aufbau bis zur Zertifizierung
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-8 bg-[#1E3A5F]/20 border border-white/10 rounded-lg hover:border-blue-400/50 transition-all"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {service.title}
                </h3>
                
                <ul className="space-y-2">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Link zu Arbeitsweise Subpage */}
          <div className="text-center">
            <a 
              href="/arbeitsweise" 
              className="text-blue-400 hover:text-blue-300 transition-colors inline-flex items-center gap-2"
            >
              Mehr zu unserer Arbeitsweise 
              <span>→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

**WICHTIG: ENTFERNT:**
- ❌ "Projektbasiert. 3-6 Monate typisch. Remote-First mit Präsenztagen."

---

# STEP 6: CREATE NEW components/Industries.jsx

## Branchen-Grid + CTA (NEUE KOMPONENTE!):

```jsx
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Industries() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const industries = [
    'Medizintechnik & Healthcare',
    'Pharma & Biotech',
    'Halbleiter & Optoelektronik',
    'Anlagenbau & Fertigung',
    'Elektronik & Sensorik',
    'Nukleartechnik',
  ];

  const steps = [
    'Ihre aktuelle Situation und Ziele',
    'Möglicher Projektumfang',
    'Ob und wie QCore unterstützen kann',
  ];

  return (
    <section id="industries" className="py-24 px-6 bg-[#0D1229]" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Industries Section */}
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Erfahrung in hochregulierten Industrien
          </h2>
          
          <p className="text-gray-400 text-center mb-12">
            10+ Jahre Erfahrung
          </p>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="p-6 bg-[#1E3A5F]/20 border border-white/10 rounded-lg text-center hover:border-blue-400/50 transition-all"
              >
                <p className="text-gray-200 font-medium">
                  {industry}
                </p>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 mb-20"></div>

          {/* CTA Section */}
          <div id="contact" className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Unverbindliche Erstberatung
            </h2>
            
            <div className="mb-8">
              <p className="text-gray-400 mb-4">Wir besprechen:</p>
              <ul className="space-y-2">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-center justify-center gap-3">
                    <span className="w-6 h-6 bg-blue-400/20 text-blue-400 rounded-full flex items-center justify-center text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-gray-300">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="mailto:kontakt@qcore-consulting.de"
                className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded hover:bg-blue-400 hover:text-[#0A0E27] transition-all"
              >
                Kontakt aufnehmen
              </a>
              <a
                href="https://calendly.com/yourlink"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border border-gray-500 text-gray-300 font-medium rounded hover:border-blue-400 hover:text-blue-400 transition-all"
              >
                Termin vereinbaren
              </a>
            </div>

            <div className="text-gray-400 text-sm space-y-1">
              <p>
                <a href="mailto:kontakt@qcore-consulting.de" className="text-blue-400 hover:underline">
                  kontakt@qcore-consulting.de
                </a>
              </p>
              <p>Herzogenaurach / Remote</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

**WICHTIG: ENTFERNT:**
- ❌ "Kein Verkaufsgespräch. Klärung der Passung." - KOMPLETT WEG!

---

# STEP 7: UPDATE components/Navigation.jsx

## Neue Navigation mit Subpage Links:

```jsx
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

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
    { label: 'Leistungen', href: '/#services' },
    { label: 'Branchen', href: '/#industries' },
    { label: 'Arbeitsweise', href: '/arbeitsweise' },
    { label: 'Über uns', href: '/ueber-uns' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0E27]/95 backdrop-blur-sm border-b border-white/10' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-white"
          >
            QCORE CONSULTING
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-blue-400 transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/#contact"
              className="px-6 py-2 border border-blue-400 text-blue-400 rounded hover:bg-blue-400 hover:text-[#0A0E27] transition-all"
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

# STEP 8: CREATE SUBPAGE pages/arbeitsweise.js

## Neue Subpage:

```jsx
'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Arbeitsweise() {
  const principles = [
    {
      title: 'Klarheit',
      content: [
        'Komplexe Systeme brauchen einfache Strukturen.',
        'Keine unnötigen Prozesse. Kein Overhead. Fokus auf Wirksamkeit.',
        'Wir analysieren Ihre bestehenden Abläufe und identifizieren, was tatsächlich gebraucht wird – und was nicht.',
        'Das Ergebnis: Schlanke, verständliche Prozesse, die Ihr Team tatsächlich umsetzt.',
      ],
    },
    {
      title: 'Reproduzierbarkeit',
      content: [
        'Prozesse müssen wiederholbar sein.',
        'Standardisierung ohne Überregulierung. Dokumentation, die Menschen verstehen und anwenden können.',
        'Jeder Prozess wird so gestaltet, dass er von verschiedenen Personen mit gleichem Ergebnis ausgeführt werden kann.',
        'Das ist die Basis für Qualität, Skalierung und Zertifizierung.',
      ],
    },
    {
      title: 'Nachvollziehbarkeit',
      content: [
        'Dokumentierte Entscheidungen. Audit-Trails. Transparenz.',
        'Jede Änderung, jede Entscheidung, jeder Prozessschritt ist nachvollziehbar dokumentiert.',
        'Für interne Reviews, externe Audits und regulatorische Anforderungen.',
        'Das gibt Ihnen Sicherheit – und Auditoren Vertrauen.',
      ],
    },
    {
      title: 'Moderne Methodik',
      content: [
        'Effiziente Werkzeuge, moderne Ansätze.',
        'Der Einsatz moderner Werkzeuge – einschließlich LLM-gestützter Prozesse – ist selbstverständlich.',
        'Das bedeutet: Hohe Geschwindigkeit ohne Qualitätsverlust. Effiziente Erstellung von Dokumentation, Analyse von Prozessdaten, Strukturierung komplexer Anforderungen.',
        'Keine Spielerei, sondern professioneller Einsatz für messbare Effizienzgewinne.',
      ],
    },
  ];

  const phases = [
    { name: 'Analyse', desc: 'Bestandsaufnahme, Gap Analysis, Zieldefinition' },
    { name: 'Struktur', desc: 'Prozessdesign, Dokumentationsarchitektur, Verantwortlichkeiten' },
    { name: 'Umsetzung', desc: 'Erstellung der Dokumentation, Implementierung der Prozesse' },
    { name: 'Review & Übergabe', desc: 'Validierung, Schulung, Audit-Vorbereitung' },
  ];

  return (
    <main className="relative bg-[#0A0E27] min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Unsere Arbeitsweise
            </h1>
            <p className="text-xl text-gray-400">
              Strukturiert. Reproduzierbar. Audit-fähig.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#1E3A5F]/20 border border-white/10 rounded-lg p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">
                {principle.title}
              </h2>
              <div className="space-y-4">
                {principle.content.map((paragraph, i) => (
                  <p key={i} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-16 px-6 bg-[#0D1229]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Typischer Projektablauf
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-400/20 text-blue-400 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {phase.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Bereit für strukturierte Prozesse?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kontakt@qcore-consulting.de"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded hover:bg-blue-400 hover:text-[#0A0E27] transition-all"
            >
              Kontakt aufnehmen
            </a>
            <Link
              href="/"
              className="px-8 py-4 border border-gray-500 text-gray-300 font-medium rounded hover:border-blue-400 hover:text-blue-400 transition-all"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

---

# STEP 9: CREATE SUBPAGE pages/ueber-uns.js

## Über uns Subpage:

```jsx
'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function UeberUns() {
  const stations = [
    {
      company: 'Siemens Healthineers',
      period: '2021–2025',
      role: 'Technical Quality Management',
      details: 'MRT-Systeme, ISO 13485, Medizintechnik',
    },
    {
      company: 'Framatome GmbH',
      period: '2018–2020',
      role: 'Quality Assurance',
      details: 'Kerninstrumentierung, Safety-Critical Systems, KTA-Standards',
    },
    {
      company: 'Osram',
      period: '2014–2017',
      role: 'Development Engineering',
      details: 'LED-Entwicklung, Thermomanagement, Produktvalidation',
    },
  ];

  return (
    <main className="relative bg-[#0A0E27] min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Über QCore Consulting
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#1E3A5F]/20 border border-white/10 rounded-lg p-8 mb-12">
            {/* Portrait Placeholder */}
            <div className="w-32 h-32 bg-[#1E3A5F]/50 rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-gray-500 text-sm">Portrait</span>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Stefan Schönwälder
              </h2>
              <p className="text-blue-400 mb-4">
                Principal Consultant
              </p>
              <p className="text-gray-300 mb-4">
                10+ Jahre Erfahrung in Quality Management für hochregulierte Industrien.
              </p>
              <p className="text-gray-400 text-sm">
                Diplom-Naturwissenschaftler, TU Bergakademie Freiberg
              </p>
            </div>
          </div>

          {/* Career Stations */}
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Berufliche Stationen
          </h3>
          
          <div className="space-y-6">
            {stations.map((station, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-[#1E3A5F]/20 border border-white/10 rounded-lg p-6"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">
                    {station.company}
                  </h4>
                  <span className="text-blue-400 text-sm">
                    {station.period}
                  </span>
                </div>
                <p className="text-gray-300 mb-1">
                  {station.role}
                </p>
                <p className="text-gray-400 text-sm">
                  {station.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kontakt@qcore-consulting.de"
              className="px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded hover:bg-blue-400 hover:text-[#0A0E27] transition-all"
            >
              Kontakt aufnehmen
            </a>
            <Link
              href="/"
              className="px-8 py-4 border border-gray-500 text-gray-300 font-medium rounded hover:border-blue-400 hover:text-blue-400 transition-all"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
```

---

# STEP 10: UPDATE components/Footer.jsx

## Vereinfachter Footer:

```jsx
'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0E27] border-t border-white/10 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-3">
              QCORE CONSULTING
            </h3>
            <p className="text-gray-400 text-sm">
              Spezialist für Quality Management
              <br />
              in hochregulierten Industrien
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Branchen
                </Link>
              </li>
              <li>
                <Link href="/arbeitsweise" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Arbeitsweise
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-blue-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Herzogenaurach / Remote</li>
              <li>
                <a
                  href="mailto:kontakt@qcore-consulting.de"
                  className="hover:text-blue-400 transition-colors"
                >
                  kontakt@qcore-consulting.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-sm text-gray-500">
          <p>© {currentYear} QCore Consulting. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
```

---

# STEP 11: TEST LOCALLY

```bash
npm run dev
```

## Checklist:

- [ ] Main Page: Nur 4 Sections (Hero, Für wen, Leistungen, Branchen+CTA)
- [ ] Kein "Remote-First • Projektbasiert • 3-6 Monate"
- [ ] Kein "Kein Verkaufsgespräch. Klärung der Passung."
- [ ] Kein "Passung" irgendwo
- [ ] Branchen als Grid (6 Kacheln)
- [ ] Branchen-Reihenfolge: Medical zuerst, Nuklear letzter
- [ ] "Halbleiter & Optoelektronik" (nicht "LED")
- [ ] Link "Mehr zu unserer Arbeitsweise →" funktioniert
- [ ] /arbeitsweise Seite lädt
- [ ] /ueber-uns Seite lädt
- [ ] Navigation Links funktionieren
- [ ] Dark Theme intact

---

# STEP 12: BUILD & DEPLOY

```bash
npm run build
```

If successful:

```bash
git add .
git commit -m "V3: Lean main page (4 sections), new subpages (/arbeitsweise, /ueber-uns), removed redundancies"
git push
```

Vercel auto-deploys.

---

# SUMMARY OF CHANGES

## DELETED from Main Page:
- ❌ Section "Kompetenzprofil" (5 Themes)
- ❌ Section "Transferkompetenz"
- ❌ Section "Arbeitsweise" (moved to subpage)
- ❌ Section "Kontakt" (merged into Industries)
- ❌ "Remote-First • Projektbasiert • 3-6 Monate"
- ❌ "Kein Verkaufsgespräch. Klärung der Passung."
- ❌ Branchen als kleine Zeile

## ADDED:
- ✅ New Industries component (Grid + CTA merged)
- ✅ Subpage /arbeitsweise
- ✅ Subpage /ueber-uns
- ✅ Updated Navigation with subpage links

## UPDATED:
- ✅ ForWho: More compact cards
- ✅ Services: No footer line, link to /arbeitsweise
- ✅ Footer: Updated navigation links
- ✅ Branchen order: Medical first, Nuklear last
- ✅ "LED" → "Halbleiter & Optoelektronik"

---

# RESULT

**Main Page:** 4 Sections, ~30-40 seconds to scan
**Subpages:** Details for interested visitors
**Flow:** Wer → Was → Branchen → CTA

**LEAN. KUNDENZENTRIERT. PROFESSIONELL.**

---

# END OF V3 IMPLEMENTATION GUIDE
