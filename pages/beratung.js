import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

// ============================================================
// TRANSLATIONS
// ============================================================

const translations = {
  de: {
    meta: {
      title: 'QM-Beratung mit Festpreisen | QCore Consulting',
      description: 'CAPA-System Setup €2.500, Audit-Vorbereitung €3.500, QM-System komplett ab €8.000. 17 Jahre Erfahrung bei Siemens Healthineers & Framatome. Für MedTech & Pharma KMU.',
    },
    hero: {
      title: 'QM-Beratung mit Festpreisen',
      subtitle: 'Kein Tagessatz-Roulette. Sie wissen vorher, was es kostet.',
      description: 'Ich implementiere QM-Systeme für MedTech- und Pharma-KMU. Nicht als Foliendeck, sondern als funktionierende Prozesse, die Ihr Team versteht und Audits bestehen.',
    },
    approach: {
      title: 'Wie ich arbeite',
      items: [
        {
          icon: '🔧',
          title: 'Praktiker, kein Theoretiker',
          text: '17 Jahre in der Industrie — nicht in der Beratung. Ich habe bei Siemens Healthineers, Framatome und OSRAM QM-Systeme nicht nur dokumentiert, sondern zum Laufen gebracht.',
        },
        {
          icon: '📋',
          title: '15 Seiten statt 200',
          text: 'Ihre Mitarbeiter sollen die SOP lesen und verstehen — nicht im Schrank verstecken. Ich schreibe schlanke Prozesse, die im Alltag funktionieren.',
        },
        {
          icon: '📊',
          title: 'Datengetrieben',
          text: '721+ FDA Warning Letters analysiert. Ich weiß, wo Inspektoren wirklich hinschauen — und baue Ihr System so, dass genau diese Stellen sitzen.',
        },
        {
          icon: '💰',
          title: 'Festpreise',
          text: 'Jedes Paket hat einen festen Preis. Keine versteckten Tagessätze, keine Überraschungen, keine Budgetüberschreitungen.',
        },
      ],
    },
    packages: {
      title: 'Pakete',
      subtitle: 'Wählen Sie, was Sie brauchen — oder wir schnüren ein individuelles Paket.',
      items: [
        {
          tag: 'Einstieg',
          name: 'QM Quick-Check',
          price: '€1.500',
          priceNote: 'Festpreis',
          description: 'GAP-Analyse Ihres bestehenden QM-Systems mit konkretem Maßnahmenplan.',
          duration: '3–5 Tage',
          includes: [
            'Ist-Analyse gegen ISO 13485 / GMP / FDA',
            'Identifikation kritischer Lücken',
            'Priorisierter Maßnahmenplan (Dokument)',
            '60-Minuten Abschlussgespräch',
          ],
          result: 'Sie wissen genau, wo Sie stehen und was als nächstes passieren muss.',
          ideal: 'Unternehmen, die wissen wollen, wo sie stehen — bevor sie investieren.',
        },
        {
          tag: 'Meistgebucht',
          name: 'CAPA-System Setup',
          price: '€2.500',
          priceNote: 'Festpreis',
          description: 'Ihr komplettes CAPA-System — implementiert, nicht nur dokumentiert.',
          duration: '2–3 Wochen',
          highlight: true,
          includes: [
            'SOP CAPA-Prozess (ISO 13485 + FDA-konform)',
            'CAPA-Formular mit Eskalationsmatrix',
            'Root Cause Analysis Toolkit (5-Why, Ishikawa, Pareto)',
            'Tracking-Log mit KPI-Dashboard (Excel)',
            'Effectiveness Verification Prozess',
            'Schulung Ihres Teams (2 Stunden)',
            '30 Tage Support nach Übergabe',
          ],
          result: 'Ein CAPA-System, das FDA-Inspektionen standhält — weil CAPA seit 5 Jahren Finding #1 ist.',
          ideal: 'Unternehmen mit FDA-Marktzugang oder bevorstehenden Audits.',
        },
        {
          tag: 'Intensiv',
          name: 'Audit-Vorbereitung',
          price: '€3.500',
          priceNote: 'Festpreis',
          description: 'Ich bereite Sie auf Ihr nächstes Audit vor — von Mock-Audit bis Audit-Day.',
          duration: '2–4 Wochen',
          includes: [
            'Mock-Audit (1 Tag vor Ort oder remote)',
            'Detaillierter Findings-Report',
            'Begleitung der Korrekturmaßnahmen',
            'Interview-Coaching für Mitarbeiter',
            'Audit-Day Support (remote)',
            'Nachbereitung & Lessons Learned',
          ],
          result: 'Ihr Team ist vorbereitet, die Dokumente sind auf Stand, der Auditor findet keine Überraschungen.',
          ideal: 'Unternehmen vor Zertifizierungs-, Überwachungs- oder FDA-Audit.',
        },
        {
          tag: 'Komplett',
          name: 'QM-System Aufbau',
          price: 'ab €8.000',
          priceNote: 'Individuelles Angebot',
          description: 'QM-System von Grund auf — für Startups, Scale-ups oder Unternehmen in regulatorischer Transition.',
          duration: '2–6 Monate',
          includes: [
            'Komplettes QM-Handbuch (schlank & praxisnah)',
            'Alle Core-SOPs (CAPA, NC, Complaints, Document Control, etc.)',
            'Formulare, Vorlagen, Tracking-Tools',
            'Risikomanagement nach ISO 14971',
            'Prozesslandkarte & Organigramm',
            'Interne Audit-Vorbereitung',
            'Team-Schulungen (mehrere Sessions)',
            'Begleitung bis zur Zertifizierung',
          ],
          result: 'Ein zertifizierungsfähiges QM-System, das Ihr Team versteht und lebt.',
          ideal: 'Startups vor Erstzertifizierung oder Unternehmen in MDR/QMSR-Transition.',
        },
      ],
    },
    fractional: {
      title: 'Oder: Fractional QA',
      subtitle: 'Für Unternehmen, die kontinuierliche QM-Unterstützung brauchen — ohne Vollzeit-Stelle.',
      price: 'ab €3.000/Monat',
      includes: [
        'Feste Stunden pro Woche (flexibel planbar)',
        'Laufende QM-Betreuung & Dokumentenpflege',
        'Audit-Begleitung & Behördenkommunikation',
        'CAPA/NC-Management & Trend-Analysen',
        'Monatliches QM-Review mit Management',
      ],
      ideal: 'Perfekt für: Startups ohne eigene QM-Abteilung, Scale-ups (10→100 Mitarbeiter), Unternehmen mit überlasteten QM-Beauftragten.',
    },
    process: {
      title: 'Ablauf',
      steps: [
        { number: '1', title: 'Erstgespräch', text: '20 Minuten, kostenlos. Wo stehen Sie, was brauchen Sie? Kein Sales-Pitch.', duration: '20 min' },
        { number: '2', title: 'Angebot', text: 'Innerhalb von 48h erhalten Sie ein konkretes Angebot mit Festpreis und Zeitplan.', duration: '48h' },
        { number: '3', title: 'Umsetzung', text: 'Ich arbeite mich in Ihr System ein und implementiere — remote oder vor Ort.', duration: 'je nach Paket' },
        { number: '4', title: 'Übergabe', text: 'Ihr Team ist geschult, alles dokumentiert. 30 Tage Support inklusive.', duration: '30 Tage Support' },
      ],
    },
    bafa: {
      title: 'Bis zu 50% Förderung durch BAFA',
      text: 'Als registrierter BAFA-Berater können Ihre Beratungskosten mit bis zu 50% bezuschusst werden (max. €1.750 in Bayern). Das bedeutet: Der QM Quick-Check kostet Sie effektiv nur €750.',
      note: 'BAFA-Registrierung in Vorbereitung',
    },
    cta: {
      title: 'Erstgespräch buchen',
      text: '20 Minuten. Kostenlos. Ich sage Ihnen ehrlich, ob und wie ich helfen kann.',
      button: 'Termin vereinbaren →',
      email: 'Oder per Email: kontakt@qcore-consulting.de',
    },
    credentials: {
      title: 'Erfahrung',
      stations: [
        { company: 'Siemens Healthineers', role: 'Technischer Qualitätsmanager', period: '2021–2025', industry: 'MedTech', detail: 'ISO 13485, FDA, Lieferantenqualifizierung' },
        { company: 'Framatome', role: 'Interface Manager HPC', period: '2019–2022', industry: 'Nukleartechnik', detail: 'KTA, Safety-kritische Systeme' },
        { company: 'OSRAM / LEDVANCE', role: 'Qualitätsingenieur', period: '2016–2019', industry: 'Elektronik', detail: 'ISO 9001, Prozessoptimierung' },
        { company: 'TU Bergakademie Freiberg', role: 'Wissenschaftlicher Mitarbeiter', period: '2009–2015', industry: 'Forschung', detail: 'Simulation, Halbleitertechnik' },
      ],
    },
  },
  en: {
    meta: {
      title: 'QM Consulting with Fixed Prices | QCore Consulting',
      description: 'CAPA System Setup €2,500, Audit Preparation €3,500, Complete QMS from €8,000. 17 years experience at Siemens Healthineers & Framatome. For MedTech & Pharma SMEs.',
    },
    hero: {
      title: 'QM Consulting with Fixed Prices',
      subtitle: 'No day-rate roulette. You know the cost upfront.',
      description: 'I implement QM systems for MedTech and Pharma SMEs. Not as slide decks, but as working processes your team understands and that pass audits.',
    },
    approach: {
      title: 'How I Work',
      items: [
        {
          icon: '🔧',
          title: 'Practitioner, Not Theorist',
          text: '17 years in industry — not in consulting. At Siemens Healthineers, Framatome, and OSRAM, I didn\'t just document QM systems — I made them work.',
        },
        {
          icon: '📋',
          title: '15 Pages Instead of 200',
          text: 'Your employees should read and understand the SOP — not hide it in a cabinet. I write lean processes that work in daily operations.',
        },
        {
          icon: '📊',
          title: 'Data-Driven',
          text: '721+ FDA Warning Letters analyzed. I know where inspectors actually look — and build your system to nail exactly those areas.',
        },
        {
          icon: '💰',
          title: 'Fixed Prices',
          text: 'Every package has a fixed price. No hidden day rates, no surprises, no budget overruns.',
        },
      ],
    },
    packages: {
      title: 'Packages',
      subtitle: 'Choose what you need — or we\'ll create a custom package.',
      items: [
        {
          tag: 'Entry',
          name: 'QM Quick Check',
          price: '€1,500',
          priceNote: 'Fixed Price',
          description: 'GAP analysis of your existing QM system with a concrete action plan.',
          duration: '3–5 Days',
          includes: [
            'As-is analysis against ISO 13485 / GMP / FDA',
            'Identification of critical gaps',
            'Prioritized action plan (document)',
            '60-minute wrap-up meeting',
          ],
          result: 'You\'ll know exactly where you stand and what needs to happen next.',
          ideal: 'Companies that want to understand their QM status — before investing.',
        },
        {
          tag: 'Most Popular',
          name: 'CAPA System Setup',
          price: '€2,500',
          priceNote: 'Fixed Price',
          description: 'Your complete CAPA system — implemented, not just documented.',
          duration: '2–3 Weeks',
          highlight: true,
          includes: [
            'SOP CAPA Process (ISO 13485 + FDA compliant)',
            'CAPA Form with Escalation Matrix',
            'Root Cause Analysis Toolkit (5-Why, Ishikawa, Pareto)',
            'Tracking Log with KPI Dashboard (Excel)',
            'Effectiveness Verification Process',
            'Team Training (2 hours)',
            '30 Days Post-Delivery Support',
          ],
          result: 'A CAPA system that withstands FDA inspections — because CAPA has been Finding #1 for 5 years.',
          ideal: 'Companies with FDA market access or upcoming audits.',
        },
        {
          tag: 'Intensive',
          name: 'Audit Preparation',
          price: '€3,500',
          priceNote: 'Fixed Price',
          description: 'I prepare you for your next audit — from mock audit to audit day.',
          duration: '2–4 Weeks',
          includes: [
            'Mock Audit (1 day on-site or remote)',
            'Detailed Findings Report',
            'Corrective Action Guidance',
            'Interview Coaching for Staff',
            'Audit Day Support (remote)',
            'Post-Audit Lessons Learned',
          ],
          result: 'Your team is prepared, documents are current, the auditor finds no surprises.',
          ideal: 'Companies facing certification, surveillance, or FDA audits.',
        },
        {
          tag: 'Complete',
          name: 'QM System Build',
          price: 'from €8,000',
          priceNote: 'Custom Quote',
          description: 'QM system from scratch — for startups, scale-ups, or companies in regulatory transition.',
          duration: '2–6 Months',
          includes: [
            'Complete QM Manual (lean & practical)',
            'All Core SOPs (CAPA, NC, Complaints, Document Control, etc.)',
            'Forms, Templates, Tracking Tools',
            'Risk Management per ISO 14971',
            'Process Map & Org Chart',
            'Internal Audit Preparation',
            'Team Training Sessions',
            'Support Through Certification',
          ],
          result: 'A certification-ready QM system that your team understands and lives.',
          ideal: 'Startups before initial certification or companies in MDR/QMSR transition.',
        },
      ],
    },
    fractional: {
      title: 'Or: Fractional QA',
      subtitle: 'For companies that need ongoing QM support — without a full-time position.',
      price: 'from €3,000/month',
      includes: [
        'Fixed hours per week (flexibly schedulable)',
        'Ongoing QM support & document maintenance',
        'Audit accompaniment & authority communication',
        'CAPA/NC management & trend analyses',
        'Monthly QM review with management',
      ],
      ideal: 'Perfect for: Startups without QM department, Scale-ups (10→100 employees), Companies with overloaded QM officers.',
    },
    process: {
      title: 'Process',
      steps: [
        { number: '1', title: 'Initial Call', text: '20 minutes, free. Where do you stand, what do you need? No sales pitch.', duration: '20 min' },
        { number: '2', title: 'Proposal', text: 'Within 48h you receive a concrete offer with fixed price and timeline.', duration: '48h' },
        { number: '3', title: 'Implementation', text: 'I dive into your system and implement — remote or on-site.', duration: 'per package' },
        { number: '4', title: 'Handover', text: 'Your team is trained, everything documented. 30 days support included.', duration: '30 days support' },
      ],
    },
    bafa: {
      title: 'Up to 50% Funding via BAFA',
      text: 'As a registered BAFA consultant, your consulting costs can be subsidized by up to 50% (max €1,750 in Bavaria). That means: The QM Quick Check effectively costs you only €750.',
      note: 'BAFA registration in preparation',
    },
    cta: {
      title: 'Book a Call',
      text: 'I\'ll honestly tell you if and how I can help. 20 minutes. Free.',
      button: 'Schedule a Call →',
      email: 'Or via email: kontakt@qcore-consulting.de',
    },
    credentials: {
      title: 'Experience',
      stations: [
        { company: 'Siemens Healthineers', role: 'Technical Quality Manager', period: '2021–2025', industry: 'MedTech', detail: 'ISO 13485, FDA, Supplier Qualification' },
        { company: 'Framatome', role: 'Interface Manager HPC', period: '2019–2022', industry: 'Nuclear', detail: 'KTA, Safety-critical systems' },
        { company: 'OSRAM / LEDVANCE', role: 'Quality Engineer', period: '2016–2019', industry: 'Electronics', detail: 'ISO 9001, Process Optimization' },
        { company: 'TU Bergakademie Freiberg', role: 'Research Associate', period: '2009–2015', industry: 'Research', detail: 'Simulation, Semiconductor Technology' },
      ],
    },
  },
};

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================

export default function Beratung() {
  const router = useRouter();
  const locale = router.locale || 'de';
  const t = translations[locale] || translations.en;
  const isDE = locale === 'de';

  const boxStyle = {
    backgroundColor: 'rgba(30, 58, 138, 0.06)',
    border: '1px solid rgba(30, 58, 138, 0.1)',
    backdropFilter: 'blur(3px)',
  };

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <link rel="canonical" href={`https://qcore-consulting.de${isDE ? '' : '/en'}/beratung`} />
      </Head>

      <Navigation />

      {/* Background */}
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

      <main className="pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto">

          {/* ==================== HERO ==================== */}
          <section className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1
                className="text-5xl lg:text-6xl font-semibold mb-4"
                style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
              >
                {t.hero.title}
              </h1>
              <p className="text-xl mb-3" style={{ color: '#1e293b' }}>
                {t.hero.subtitle}
              </p>
              <p className="text-base max-w-3xl" style={{ color: '#475569' }}>
                {t.hero.description}
              </p>
            </motion.div>
          </section>

          {/* ==================== APPROACH ==================== */}
          <section className="mb-20">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}
            >
              {t.approach.title}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {t.approach.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="p-8 rounded-xl transition-all duration-300 hover:shadow-lg"
                  style={boxStyle}
                >
                  <div className="text-2xl mb-3">{item.icon}</div>
                  <h3
                    className="text-2xl font-semibold mb-2"
                    style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                  >
                    {item.title}
                  </h3>
                  <p style={{ color: '#475569' }}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ==================== PACKAGES ==================== */}
          <section className="mb-20">
            <h2
              className="text-4xl md:text-5xl font-bold mb-3"
              style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}
            >
              {t.packages.title}
            </h2>
            <p className="text-base mb-10" style={{ color: '#475569' }}>
              {t.packages.subtitle}
            </p>

            <div className="grid lg:grid-cols-2 gap-6">
              {t.packages.items.map((pkg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="rounded-xl p-8 transition-all duration-300 hover:shadow-lg"
                  style={{
                    ...boxStyle,
                    ...(pkg.highlight ? {
                      backgroundColor: 'rgba(30, 58, 138, 0.1)',
                      border: '2px solid rgba(30, 58, 138, 0.25)',
                    } : {}),
                  }}
                >
                  {/* Tag */}
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                    style={{
                      backgroundColor: pkg.highlight ? 'rgba(30, 58, 138, 0.15)' : 'rgba(30, 58, 138, 0.08)',
                      color: '#1e3a8a',
                    }}
                  >
                    {pkg.tag}
                  </span>

                  {/* Price + Name */}
                  <div className="flex items-baseline gap-3 mb-3">
                    <span
                      className="text-3xl font-bold"
                      style={{ color: '#1e3a8a', fontFamily: "'Cormorant', serif" }}
                    >
                      {pkg.price}
                    </span>
                    <span className="text-xs font-medium" style={{ color: '#64748b' }}>
                      {pkg.priceNote}
                    </span>
                  </div>

                  <h3
                    className="text-2xl font-semibold mb-2"
                    style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                  >
                    {pkg.name}
                  </h3>

                  <p className="text-sm mb-4" style={{ color: '#475569' }}>
                    {pkg.description}
                  </p>

                  {/* Duration */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xs font-medium px-2 py-1 rounded" style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', color: '#1e3a8a' }}>
                      ⏱ {pkg.duration}
                    </span>
                  </div>

                  {/* Includes */}
                  <ul className="space-y-2 mb-4">
                    {pkg.includes.map((item, j) => (
                      <li key={j} className="flex items-start text-sm" style={{ color: '#334155' }}>
                        <span className="mr-2 flex-shrink-0" style={{ color: '#22c55e' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Result */}
                  <div
                    className="p-4 rounded-lg mb-4"
                    style={{ backgroundColor: 'rgba(34, 197, 94, 0.08)' }}
                  >
                    <p className="text-sm font-medium" style={{ color: '#166534' }}>
                      → {pkg.result}
                    </p>
                  </div>

                  {/* Ideal for */}
                  <p className="text-xs" style={{ color: '#64748b' }}>
                    <strong>{isDE ? 'Ideal für:' : 'Ideal for:'}</strong> {pkg.ideal}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ==================== FRACTIONAL QA ==================== */}
          <section className="mb-20">
            <div
              className="rounded-xl p-8"
              style={{
                backgroundColor: 'rgba(30, 58, 138, 0.08)',
                border: '1px solid rgba(30, 58, 138, 0.15)',
                backdropFilter: 'blur(3px)',
              }}
            >
              <div className="grid lg:grid-cols-5 gap-8">
                <div className="lg:col-span-3">
                  <h2
                    className="text-3xl font-bold mb-2"
                    style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                  >
                    {t.fractional.title}
                  </h2>
                  <p className="text-base mb-4" style={{ color: '#475569' }}>
                    {t.fractional.subtitle}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {t.fractional.includes.map((item, i) => (
                      <li key={i} className="flex items-start text-sm" style={{ color: '#334155' }}>
                        <span className="mr-2 flex-shrink-0" style={{ color: '#22c55e' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="text-sm" style={{ color: '#475569' }}>
                    <strong>{isDE ? 'Ideal für:' : 'Perfect for:'}</strong> {t.fractional.ideal}
                  </p>
                </div>

                <div className="lg:col-span-2 flex items-center justify-center">
                  <div className="text-center">
                    <span
                      className="text-4xl font-bold block mb-2"
                      style={{ color: '#1e3a8a', fontFamily: "'Cormorant', serif" }}
                    >
                      {t.fractional.price}
                    </span>
                    <a
                      href={isDE ? '/kontakt' : '/en/kontakt'}
                      className="inline-block px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02]"
                      style={{
                        backgroundColor: 'rgba(191, 219, 254, 0.35)',
                        backdropFilter: 'blur(3px)',
                        border: '1px solid rgba(191, 219, 254, 0.5)',
                        color: '#1e3a8a',
                      }}
                    >
                      {t.cta.button}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== PROCESS ==================== */}
          <section className="mb-20">
            <h2
              className="text-4xl md:text-5xl font-bold mb-10"
              style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}
            >
              {t.process.title}
            </h2>

            <div className="grid md:grid-cols-4 gap-4">
              {t.process.steps.map((step, i) => (
                <div key={i} className="rounded-xl p-6" style={boxStyle}>
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 mb-4"
                    style={{
                      backgroundColor: 'rgba(30, 58, 138, 0.15)',
                      backdropFilter: 'blur(4px)',
                      border: '1px solid rgba(30, 58, 138, 0.25)',
                      color: '#1e3a8a',
                      boxShadow: '0 2px 8px rgba(30, 58, 138, 0.15)',
                    }}
                  >
                    {step.number}
                  </div>
                  <h3
                    className="text-xl font-semibold mb-2"
                    style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: '#475569' }}>{step.text}</p>
                  <span className="text-xs font-medium" style={{ color: '#1e3a8a' }}>{step.duration}</span>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== BAFA ==================== */}
          <section className="mb-20">
            <div
              className="rounded-xl p-6"
              style={{ backgroundColor: 'rgba(34, 197, 94, 0.08)', border: '1px solid rgba(34, 197, 94, 0.15)' }}
            >
              <h3
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: "'Cormorant', serif", color: '#166534' }}
              >
                {t.bafa.title}
              </h3>
              <p className="text-sm mb-2" style={{ color: '#14532d' }}>{t.bafa.text}</p>
              <p className="text-xs font-medium" style={{ color: '#166534' }}>{t.bafa.note}</p>
            </div>
          </section>

          {/* ==================== CREDENTIALS ==================== */}
          <section className="mb-20">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8"
              style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}
            >
              {t.credentials.title}
            </h2>

            <div className="space-y-4">
              {t.credentials.stations.map((station, i) => (
                <div key={i} className="rounded-xl p-6 flex items-start gap-6" style={boxStyle}>
                  <div className="flex-shrink-0 text-center" style={{ minWidth: '100px' }}>
                    <p className="text-xs font-medium" style={{ color: '#64748b' }}>{station.period}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg" style={{ color: '#0f172a' }}>{station.company}</h3>
                    <p className="text-sm" style={{ color: '#1e3a8a' }}>{station.role}</p>
                    <p className="text-sm mt-1" style={{ color: '#475569' }}>
                      <span
                        className="inline-block px-2 py-0.5 rounded text-xs font-medium mr-2"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.08)', color: '#1e3a8a' }}
                      >
                        {station.industry}
                      </span>
                      {station.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ==================== FINAL CTA ==================== */}
          <section>
            <div
              className="rounded-xl p-10 text-center"
              style={{
                backgroundColor: 'rgba(30, 58, 138, 0.1)',
                border: '1px solid rgba(30, 58, 138, 0.2)',
                backdropFilter: 'blur(3px)',
              }}
            >
              <h2
                className="text-4xl font-bold mb-3"
                style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
              >
                {t.cta.title}
              </h2>
              <p className="text-base mb-6 max-w-xl mx-auto" style={{ color: '#475569' }}>
                {t.cta.text}
              </p>
              <a
                href={isDE ? '/kontakt' : '/en/kontakt'}
                className="inline-block px-8 py-4 rounded-lg font-semibold text-lg transition-all hover:scale-[1.02]"
                style={{
                  backgroundColor: 'rgba(191, 219, 254, 0.35)',
                  backdropFilter: 'blur(3px)',
                  border: '1px solid rgba(191, 219, 254, 0.5)',
                  color: '#1e3a8a',
                }}
              >
                {t.cta.button}
              </a>
              <p className="text-sm mt-4" style={{ color: '#64748b' }}>{t.cta.email}</p>
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </>
  );
}
