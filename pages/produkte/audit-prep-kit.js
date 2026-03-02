import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';
import { useRouter } from 'next/router';

// ============================================================
// VIEWER COMPONENTS
// ============================================================

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

function TabbedImageViewer({ images }) {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-3 mb-6">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className="px-6 py-3 rounded-lg text-base font-semibold transition-all"
            style={{
              backgroundColor: activeTab === idx ? '#1e3a8a' : 'white',
              color: activeTab === idx ? 'white' : '#1e3a8a',
              border: '2px solid #1e3a8a',
              minWidth: '120px',
            }}
          >
            {img.tab}
          </button>
        ))}
      </div>
      <ImageViewer src={images[activeTab].src} alt={images[activeTab].alt} caption={images[activeTab].caption} />
    </div>
  );
}

function ImagePopup({ src, alt, label }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:opacity-80"
        style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a' }}
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
              className="absolute top-2 right-2 w-10 h-10 rounded-full flex items-center justify-center text-white text-2xl"
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
            >
              ×
            </button>
            <img src={src} alt={alt} className="max-w-full h-auto" />
          </div>
        </div>
      )}
    </>
  );
}

// ============================================================
// STEP COMPONENTS
// ============================================================

function StepPDF({ number, title, pdfPath, pdfHeight = 650, children }) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
          style={{ backgroundColor: '#1e3a8a', color: 'white' }}
        >
          {number}
        </div>
        <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
          {title}
        </h3>
      </div>
      
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <PDFViewer pdfPath={pdfPath} height={pdfHeight} />
        </div>
        <div className="lg:col-span-2">
          <div 
            className="lg:sticky lg:top-24 p-6 rounded-lg backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)', backdropFilter: 'blur(3px)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepImage({ number, title, imageSrc, imageAlt, imageCaption, children }) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
          style={{ backgroundColor: '#1e3a8a', color: 'white' }}
        >
          {number}
        </div>
        <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
          {title}
        </h3>
      </div>
      
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <ImageViewer src={imageSrc} alt={imageAlt} caption={imageCaption} />
        </div>
        <div className="lg:col-span-2">
          <div 
            className="lg:sticky lg:top-24 p-6 rounded-lg"
            style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

function StepTabbed({ number, title, images, popupImages, children }) {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-4 mb-6">
        <div 
          className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg"
          style={{ backgroundColor: '#1e3a8a', color: 'white' }}
        >
          {number}
        </div>
        <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
          {title}
        </h3>
      </div>
      
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <TabbedImageViewer images={images} />
          {popupImages && popupImages.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-3">
              {popupImages.map((img, idx) => (
                <ImagePopup key={idx} src={img.src} alt={img.alt} label={img.label} />
              ))}
            </div>
          )}
        </div>
        <div className="lg:col-span-2">
          <div 
            className="lg:sticky lg:top-24 p-6 rounded-lg"
            style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// TRANSLATIONS
// ============================================================

const t = {
  de: {
    meta: {
      title: 'Audit Prep Kit | ISO 13485 Zertifizierungsaudit | QCore',
      description: 'Audit Preparation Kit v2.0 für MedTech: SOP, Interview-Guide, Checklisten, Supplier-Toolkit, Dashboard. QMSR-konform. ISO 13485, FDA & EU MDR.'
    },
    breadcrumb: 'Produkte',
    hero: {
      title: 'Audit Preparation Kit',
      badges: [
        { std: 'ISO 13485', clause: '§8.2.4' },
        { std: 'FDA 21 CFR 820 / QMSR', clause: '§820.22' },
        { std: 'ISO 19011', clause: 'Audit Guidelines' }
      ],
      warning: {
        title: 'Audits sind stressig',
        text: 'Teams arbeiten bis zur letzten Minute an Dokumenten, Mitarbeiter wissen nicht was sie sagen dürfen, und niemand weiß genau wo die Lücken sind.'
      },
      problem: 'Unstrukturierte Audit-Vorbereitung führt zu Findings, die vermeidbar gewesen wären.',
      solution: 'Ein systematischer Audit-Prozess mit Interview-Guide, Checklisten und Pre-Check – damit Sie vor dem Auditor wissen, wo Sie stehen.',
      howItWorks: 'Das Kit führt Sie durch den kompletten Audit-Zyklus: Von der Planung über die Durchführung bis zum Reporting. Jedes Dokument ist audit-erprobt und direkt einsetzbar.'
    },
    v2features: {
      title: 'Neu in v2.0',
      items: [
        { icon: '🏥', text: 'QMSR-konform – FDA hat 21 CFR 820 durch ISO 13485 ersetzt (seit Feb. 2026)' },
        { icon: '📊', text: 'Audit-Dashboard mit automatischen KPIs (Closure Rate, Overdue-Tracking, Risikobewertung)' },
        { icon: '🛩️', text: 'Supplier-Audit-Toolkit mit 35+ Prüfpunkten' },
        { icon: '🎓', text: 'Auditor-Kompetenzmatrix mit Qualifikationstracking' },
        { icon: '⚠️', text: 'Risk-basierte Auditplanung mit automatischer Frequenzberechnung' },
        { icon: '📄', text: '14 statt 8 Dokumente – umfassend erweitert' },
        { icon: '🌐', text: 'Erhältlich in Englisch und Deutsch' }
      ]
    },
    step1: {
      title: 'Internal Audit SOP',
      intro: 'Die Basis: Eine vollständige Verfahrensanweisung für Ihr internes Audit-Programm.',
      sections: {
        included: 'Was enthalten ist:',
        items: [
          'Audit-Programm Management',
          'Auditor-Qualifikation & Unabhängigkeit',
          'Major/Minor NC Klassifizierung',
          'CAPA-Verknüpfung & Follow-up',
          'Management Review Input',
          'Risk-basierte Auditauswahl (neu in v2.0)',
          'Supplier-Audit-Integration'
        ]
      },
      tip: '💡 Jetzt QMSR-konform: Die SOP berücksichtigt die neue FDA QMSR (seit Feb. 2026) und definiert klare Eskalationskriterien.'
    },
    step2: {
      title: 'Audit Plan Template',
      intro: 'Strukturierte Planung für jedes Audit – mit Risk-Trigger und Prozess-Scope.',
      sections: {
        included: 'Enthält:',
        items: [
          'Audit-Scope & Objectives',
          'Risk-basierte Begründung',
          'Zeitplan & Ressourcen',
          'Auditor-Zuweisung',
          'Dokumenten-Anforderungen'
        ]
      },
      tip: '💡 "Why is this audit performed now?" – diese Frage beantwortet der Plan direkt.'
    },
    step3: {
      title: 'Audit Report Template',
      intro: 'Professionelle Audit-Berichte mit Finding-Klassifizierung und Regulatory Impact.',
      sections: {
        included: 'Report-Struktur:',
        items: [
          'Executive Summary',
          'Finding-Details mit Evidenz',
          'Regulatory Impact Assessment',
          'CAPA-Referenzen',
          'Follow-up Requirements'
        ]
      },
      tip: '📋 Das "Regulatory Impact (Yes/No)" Feld hilft bei der Priorisierung.'
    },
    step4: {
      title: 'Interview Guide',
      intro: 'Der USP dieses Kits: Praxiserprobte Fragen für jeden QMS-Bereich – plus Red Flags.',
      sections: {
        included: 'Abgedeckte Bereiche:',
        items: [
          'Document Control & CAPA',
          'Production & Quality Control',
          'Design & Risk Management',
          'Supplier Management',
          'Cross-Functional Integration'
        ]
      },
      tip: '⚠️ "Red Flag Answers" zeigen Ihnen, wann eine Antwort problematisch ist.'
    },
    step5: {
      title: 'Audit Checklists',
      intro: 'Umfassende Checklisten für ISO 13485 und FDA 21 CFR 820 / QMSR – mit Legacy-Mapping-Tabelle für die Übergangsphase.',
      tabs: {
        iso: 'ISO 13485',
        fda: 'FDA 820'
      },
      sections: {
        included: 'Checklist-Features:',
        items: [
          'Alle relevanten Clauses',
          'Objective Evidence Spalte',
          'Status-Tracking (Compliant/NC/NA)',
          'Kommentarfeld für Details'
        ]
      },
      tip: '🔍 Zwei separate Checklisten – für ISO-fokussierte und FDA-fokussierte Audits.'
    },
    step6: {
      title: 'Audit Schedule',
      intro: 'Visueller Zeitplan für die Audit-Durchführung mit Bereichen und Verantwortlichen.',
      sections: {
        included: 'Schedule enthält:',
        items: [
          'Prozess/Bereich-Zuordnung',
          'Auditor-Zuweisung',
          'Zeitslots',
          'Ansprechpartner pro Bereich'
        ]
      },
      tip: '📅 Verhindert Ad-hoc-Planung und sorgt für strukturierte Durchführung.'
    },
    step7: {
      title: 'Quick Reference Card',
      intro: 'Ein-Seiter für alle Mitarbeiter: Verhaltensregeln im Audit auf einen Blick.',
      sections: {
        included: 'Auf der Karte:',
        items: [
          'Do\'s und Don\'ts im Audit',
          'Eskalationswege',
          'Kommunikationsregeln',
          'Was Auditoren erwarten'
        ]
      },
      tip: '🖨️ Drucken Sie diese Karte aus und verteilen Sie sie vor dem Audit an alle Bereiche.'
    },
    cta: {
      title: 'Bereit für Ihr nächstes Audit?',
      text: '€279 für strukturierte Vorbereitung – damit das Audit keine Überraschungen bringt.',
      button: 'Jetzt kaufen'
    },
    upsell: {
      title: 'Komplettpaket für Ihr QMS',
      text: 'Das Audit Prep Kit ist Teil unserer QMS-Bundle-Serie:',
      bundles: [
        { name: 'CAPA System Bundle', price: '€189', link: '/produkte/capa-system' },
        { name: 'NC Management Bundle', price: '€139', link: '/produkte/nc-system' }
      ],
      bundleHint: 'Alle 3 Bundles zusammen: Fragen Sie nach einem Paketpreis'
    },
    buyBox: {
      price: '€279',
      oneTime: 'einmalig',
      button: 'Jetzt kaufen',
      secure: 'Sichere Zahlung via Gumroad · Sofortiger Download',
      included: [
        '14 Dokumente (Word, Excel)',
        'Interview Guide mit Warnsignalen',
        'ISO + FDA/QMSR Checklisten',
        'Audit-Dashboard mit KPIs',
        'Supplier-Audit-Toolkit',
        'Firmenweite Lizenz'
      ]
    }
  },
  en: {
    meta: {
      title: 'Audit Prep Kit | ISO 13485 Certification Audit | QCore',
      description: 'Audit Preparation Kit v2.0 for MedTech: SOP, Interview Guide, Checklists, Supplier Toolkit, Dashboard. QMSR-compliant. ISO 13485, FDA & EU MDR.'
    },
    breadcrumb: 'Products',
    hero: {
      title: 'Audit Preparation Kit',
      badges: [
        { std: 'ISO 13485', clause: '§8.2.4' },
        { std: 'FDA 21 CFR 820 / QMSR', clause: '§820.22' },
        { std: 'ISO 19011', clause: 'Audit Guidelines' }
      ],
      warning: {
        title: 'Audits are stressful',
        text: 'Teams work on documents until the last minute, employees don\'t know what they can say, and nobody knows exactly where the gaps are.'
      },
      problem: 'Unstructured audit preparation leads to findings that could have been avoided.',
      solution: 'A systematic audit process with interview guide, checklists, and pre-check – so you know where you stand before the auditor does.',
      howItWorks: 'The kit guides you through the complete audit cycle: from planning to execution to reporting. Every document is audit-proven and ready to use.'
    },
    v2features: {
      title: 'New in v2.0',
      items: [
        { icon: '🏥', text: 'QMSR-compliant – FDA replaced 21 CFR 820 with ISO 13485 (effective Feb. 2026)' },
        { icon: '📊', text: 'Audit Dashboard with automatic KPIs (Closure Rate, Overdue Tracking, Risk Assessment)' },
        { icon: '🛩️', text: 'Supplier Audit Toolkit with 35+ checkpoints' },
        { icon: '🎓', text: 'Auditor Competency Matrix with qualification tracking' },
        { icon: '⚠️', text: 'Risk-based audit planning with automatic frequency calculation' },
        { icon: '📄', text: '14 instead of 8 documents – comprehensively expanded' },
        { icon: '🌐', text: 'Available in English and German' }
      ]
    },
    step1: {
      title: 'Internal Audit SOP',
      intro: 'The foundation: A complete procedure for your internal audit program.',
      sections: {
        included: 'What\'s included:',
        items: [
          'Audit Program Management',
          'Auditor Qualification & Independence',
          'Major/Minor NC Classification',
          'CAPA Linkage & Follow-up',
          'Management Review Input',
          'Risk-based audit selection (new in v2.0)',
          'Supplier audit integration'
        ]
      },
      tip: '💡 Now QMSR-compliant: The SOP accounts for the new FDA QMSR (effective Feb. 2026) and defines clear escalation criteria.'
    },
    step2: {
      title: 'Audit Plan Template',
      intro: 'Structured planning for every audit – with risk trigger and process scope.',
      sections: {
        included: 'Includes:',
        items: [
          'Audit Scope & Objectives',
          'Risk-based Rationale',
          'Schedule & Resources',
          'Auditor Assignment',
          'Documentation Requirements'
        ]
      },
      tip: '💡 "Why is this audit performed now?" – the plan answers this question directly.'
    },
    step3: {
      title: 'Audit Report Template',
      intro: 'Professional audit reports with finding classification and regulatory impact.',
      sections: {
        included: 'Report Structure:',
        items: [
          'Executive Summary',
          'Finding Details with Evidence',
          'Regulatory Impact Assessment',
          'CAPA References',
          'Follow-up Requirements'
        ]
      },
      tip: '📋 The "Regulatory Impact (Yes/No)" field helps with prioritization.'
    },
    step4: {
      title: 'Interview Guide',
      intro: 'The USP of this kit: Battle-tested questions for every QMS area – plus red flags.',
      sections: {
        included: 'Covered Areas:',
        items: [
          'Document Control & CAPA',
          'Production & Quality Control',
          'Design & Risk Management',
          'Supplier Management',
          'Cross-Functional Integration'
        ]
      },
      tip: '⚠️ "Red Flag Answers" show you when a response is problematic.'
    },
    step5: {
      title: 'Audit Checklists',
      intro: 'Comprehensive checklists for ISO 13485 and FDA 21 CFR 820 / QMSR – with legacy mapping table for the transition period.',
      tabs: {
        iso: 'ISO 13485',
        fda: 'FDA 820'
      },
      sections: {
        included: 'Checklist Features:',
        items: [
          'All relevant clauses',
          'Objective Evidence column',
          'Status tracking (Compliant/NC/NA)',
          'Comment field for details'
        ]
      },
      tip: '🔍 Two separate checklists – for ISO-focused and FDA-focused audits.'
    },
    step6: {
      title: 'Audit Schedule',
      intro: 'Visual timeline for audit execution with areas and responsibilities.',
      sections: {
        included: 'Schedule includes:',
        items: [
          'Process/Area assignment',
          'Auditor assignment',
          'Time slots',
          'Contact person per area'
        ]
      },
      tip: '📅 Prevents ad-hoc planning and ensures structured execution.'
    },
    step7: {
      title: 'Quick Reference Card',
      intro: 'One-pager for all employees: Audit behavior rules at a glance.',
      sections: {
        included: 'On the card:',
        items: [
          'Do\'s and Don\'ts in audit',
          'Escalation paths',
          'Communication rules',
          'What auditors expect'
        ]
      },
      tip: '🖨️ Print this card and distribute it to all areas before the audit.'
    },
    cta: {
      title: 'Ready for your next audit?',
      text: '€279 for structured preparation – so the audit brings no surprises.',
      button: 'Buy now'
    },
    upsell: {
      title: 'Complete package for your QMS',
      text: 'The Audit Prep Kit is part of our QMS bundle series:',
      bundles: [
        { name: 'CAPA System Bundle', price: '€189', link: '/produkte/capa-system' },
        { name: 'NC Management Bundle', price: '€139', link: '/produkte/nc-system' }
      ],
      bundleHint: 'All 3 bundles together: Ask for a package price'
    },
    buyBox: {
      price: '€279',
      oneTime: 'one-time',
      button: 'Buy now',
      secure: 'Secure payment via Gumroad · Instant download',
      included: [
        '14 Documents (Word, Excel)',
        'Interview Guide with Warning Signals',
        'ISO + FDA/QMSR Checklists',
        'Audit Dashboard with KPIs',
        'Supplier Audit Toolkit',
        'Company-wide License'
      ]
    }
  }
};

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function AuditPrepKit() {
  const router = useRouter();
  const locale = router.locale || 'de';
  const text = t[locale] || t.en;

  return (
    <>
      <Head>
        <title>{text.meta.title}</title>
        <meta name="description" content={text.meta.description} />
        <meta name="keywords" content="Audit Preparation, ISO 13485 Audit, FDA Inspection, Internal Audit, Audit Checklist, MedTech Audit" />
        <meta property="og:title" content={text.meta.title} />
        <meta property="og:description" content={text.meta.description} />
        <meta property="og:type" content="product" />
        <meta property="product:price:amount" content="279" />
        <meta property="product:price:currency" content="EUR" />
      </Head>
      
      <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
      
      <Navigation />
      
      <main className="relative min-h-screen">
        {/* Breadcrumb */}
        <section className="relative pt-20 pb-2">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <nav className="text-sm" style={{ color: '#64748b' }}>
              <Link href="/produkte" className="hover:underline">{text.breadcrumb}</Link>
              <span className="mx-2">→</span>
              <span style={{ color: '#1e293b' }}>Audit Preparation Kit</span>
            </nav>
          </div>
        </section>

        {/* HERO */}
        <section className="relative pt-4 pb-12">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Left Content */}
              <div className="lg:col-span-3">
                {/* Title */}
                <h1 className="text-5xl lg:text-6xl font-semibold mb-4" 
                    style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
                  {text.hero.title}
                </h1>
                
                {/* Badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {text.hero.badges.map((item, i) => (
                    <div key={i} className="px-4 py-2 rounded-lg backdrop-blur-sm" 
                         style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)' }}>
                      <span className="font-semibold" style={{ color: '#0f172a' }}>{item.std}</span>
                      <span className="ml-2 text-sm" style={{ color: '#64748b' }}>{item.clause}</span>
                    </div>
                  ))}
                </div>
                
                {/* Warning Box */}
                <div className="rounded-xl p-6 mb-8 backdrop-blur-sm" 
                     style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', backdropFilter: 'blur(3px)' }}>
                  <p className="font-bold text-xl mb-2" style={{ color: '#b91c1c' }}>{text.hero.warning.title}</p>
                  <p className="text-lg" style={{ color: '#7f1d1d' }}>{text.hero.warning.text}</p>
                </div>
                
                {/* Problem / Solution */}
                <div className="mb-8" style={{ color: '#334155' }}>
                  <p className="text-lg mb-4"><strong>{locale === 'de' ? 'Das Problem:' : 'The problem:'}</strong> {text.hero.problem}</p>
                  <p className="text-lg"><strong>{locale === 'de' ? 'Die Lösung:' : 'The solution:'}</strong> {text.hero.solution}</p>
                </div>
                
                {/* How It Works */}
                <div className="rounded-xl p-6 backdrop-blur-sm" 
                     style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)', border: '1px solid rgba(30, 58, 138, 0.1)', backdropFilter: 'blur(3px)' }}>
                  <p className="text-lg" style={{ color: '#475569' }}>{text.hero.howItWorks}</p>
                </div>
              </div>

              {/* Right: Buy Box */}
              <div className="lg:col-span-2 lg:sticky lg:top-24">
                <div 
                  className="rounded-xl p-6"
                  style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)', backdropFilter: 'blur(3px)' }}
                >
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold" style={{ color: '#1e3a8a' }}>{text.buyBox.price}</span>
                    <span className="text-sm ml-2" style={{ color: '#64748b' }}>{text.buyBox.oneTime}</span>
                  </div>

                  <a 
                    href="https://qcore33.gumroad.com/l/wcevjy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 mb-2"
                    style={{ 
                      backgroundColor: 'rgba(191, 219, 254, 0.35)',
                      backdropFilter: 'blur(3px)',
                      border: '1px solid rgba(191, 219, 254, 0.5)',
                      color: '#1e3a8a'
                    }}
                  >
                    🇬🇧 {locale === 'de' ? 'English Version kaufen' : 'Buy English Version'}
                  </a>
                  <a 
                    href="https://qcore33.gumroad.com/l/yownbk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105 mb-3"
                    style={{ 
                      backgroundColor: 'rgba(191, 219, 254, 0.35)',
                      backdropFilter: 'blur(3px)',
                      border: '1px solid rgba(191, 219, 254, 0.5)',
                      color: '#1e3a8a'
                    }}
                  >
                    🇩🇪 {locale === 'de' ? 'Deutsche Version kaufen' : 'Buy German Version'}
                  </a>

                  <p className="text-xs text-center mb-4" style={{ color: '#64748b' }}>
                    {text.buyBox.secure}
                  </p>

                  <div className="border-t pt-4" style={{ borderColor: 'rgba(30, 58, 138, 0.15)' }}>
                    <p className="font-semibold mb-3 text-sm" style={{ color: '#1e293b' }}>
                      {locale === 'de' ? 'Im Kit enthalten:' : 'Included:'}
                    </p>
                    <ul className="text-sm space-y-2">
                      {text.buyBox.included.map((item, i) => (
                        <li key={i} className="flex items-center" style={{ color: '#334155' }}>
                          <span className="mr-2" style={{ color: '#22c55e' }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* V2.0 FEATURES */}
        <section className="relative py-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div 
              className="rounded-xl p-8"
              style={{ backgroundColor: 'rgba(34, 197, 94, 0.06)', border: '1px solid rgba(34, 197, 94, 0.2)' }}
            >
              <h2 
                className="text-3xl mb-6 text-center"
                style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}
              >
                {text.v2features.title}
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {text.v2features.items.map((item, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-3 p-4 rounded-lg"
                    style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <span className="text-sm" style={{ color: '#334155' }}>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* STEPS */}
        <section className="relative py-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            
            {/* Step 1: Audit SOP */}
            <StepPDF 
              number={1} 
              title={text.step1.title}
              pdfPath={locale === 'de' ? '/docs/audit-de/QCore_Audit-SOP_v2.0_DE.pdf' : '/docs/audit/QCore_Audit-SOP_v2.0.pdf'}
              pdfHeight={700}
            >
              <p className="mb-4" style={{ color: '#475569' }}>{text.step1.intro}</p>
              
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>
                {text.step1.sections.included}
              </h4>
              <ul className="space-y-2 mb-6" style={{ color: '#475569' }}>
                {text.step1.sections.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                <p className="text-sm font-medium" style={{ color: '#166534' }}>
                  {text.step1.tip}
                </p>
              </div>
            </StepPDF>

            {/* Step 2: Audit Plan */}
            <StepPDF 
              number={2} 
              title={text.step2.title}
              pdfPath={locale === 'de' ? '/docs/audit-de/QCore_Audit-Plan_v2.0_DE.pdf' : '/docs/audit/QCore_Audit-Plan_v2.0.pdf'}
              pdfHeight={650}
            >
              <p className="mb-4" style={{ color: '#475569' }}>{text.step2.intro}</p>
              
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>
                {text.step2.sections.included}
              </h4>
              <ul className="space-y-2 mb-6" style={{ color: '#475569' }}>
                {text.step2.sections.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                <p className="text-sm font-medium" style={{ color: '#166534' }}>
                  {text.step2.tip}
                </p>
              </div>
            </StepPDF>

            {/* Step 3: Audit Report */}
            <StepPDF 
              number={3} 
              title={text.step3.title}
              pdfPath={locale === 'de' ? '/docs/audit-de/QCore_Audit-Report_v2.0_DE.pdf' : '/docs/audit/QCore_Audit-Report_v2.0.pdf'}
              pdfHeight={650}
            >
              <p className="mb-4" style={{ color: '#475569' }}>{text.step3.intro}</p>
              
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>
                {text.step3.sections.included}
              </h4>
              <ul className="space-y-2 mb-6" style={{ color: '#475569' }}>
                {text.step3.sections.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                <p className="text-sm font-medium" style={{ color: '#1e40af' }}>
                  {text.step3.tip}
                </p>
              </div>
            </StepPDF>

            {/* Step 4: Interview Guide */}
            <StepPDF 
              number={4} 
              title={text.step4.title}
              pdfPath={locale === 'de' ? '/docs/audit-de/QCore_Audit-Interview-Guide_v2.0_DE.pdf' : '/docs/audit/QCore_Audit-Interview-Guide_v2.0.pdf'}
              pdfHeight={700}
            >
              <p className="mb-4" style={{ color: '#475569' }}>{text.step4.intro}</p>
              
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>
                {text.step4.sections.included}
              </h4>
              <ul className="space-y-2 mb-6" style={{ color: '#475569' }}>
                {text.step4.sections.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
                <p className="text-sm font-medium" style={{ color: '#b45309' }}>
                  {text.step4.tip}
                </p>
              </div>
            </StepPDF>

            {/* Step 5: Checklists (Tabbed) */}
            <StepTabbed 
              number={5} 
              title={text.step5.title}
              images={[
                { src: locale === 'de' ? '/docs/audit-de/images/Audit_checklist.png' : '/docs/audit/images/Audit_checklist.png', alt: 'ISO 13485 Checklist', tab: text.step5.tabs.iso, caption: 'ISO 13485:2016 Audit Checklist' },
                { src: locale === 'de' ? '/docs/audit-de/images/Audit_checklist_FDA.png' : '/docs/audit/images/Audit_checklist_FDA.png', alt: 'FDA 820 / QMSR Checklist', tab: text.step5.tabs.fda, caption: 'FDA 21 CFR 820 / QMSR Audit Checklist' }
              ]}
            >
              <p className="mb-4" style={{ color: '#475569' }}>{text.step5.intro}</p>
              
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>
                {text.step5.sections.included}
              </h4>
              <ul className="space-y-2 mb-6" style={{ color: '#475569' }}>
                {text.step5.sections.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                <p className="text-sm font-medium" style={{ color: '#1e40af' }}>
                  {text.step5.tip}
                </p>
              </div>
            </StepTabbed>

            {/* Step 6: Schedule */}
            <StepImage 
              number={6} 
              title={text.step6.title}
              imageSrc={locale === 'de' ? '/docs/audit-de/images/Audit_planning.png' : '/docs/audit/images/Audit_planning.png'}
              imageAlt="Audit Schedule"
              imageCaption="Audit Schedule Template"
            >
              <p className="mb-4" style={{ color: '#475569' }}>{text.step6.intro}</p>
              
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>
                {text.step6.sections.included}
              </h4>
              <ul className="space-y-2 mb-6" style={{ color: '#475569' }}>
                {text.step6.sections.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                <p className="text-sm font-medium" style={{ color: '#1e40af' }}>
                  {text.step6.tip}
                </p>
              </div>
            </StepImage>

            {/* Step 7: Quick Reference */}
            <StepImage 
              number={7} 
              title={text.step7.title}
              imageSrc={locale === 'de' ? '/docs/audit-de/images/Audit_quickref.png' : '/docs/audit/images/Audit_quickref.png'}
              imageAlt="Quick Reference Card"
              imageCaption="Audit Quick Reference Card (1 Page)"
            >
              <p className="mb-4" style={{ color: '#475569' }}>{text.step7.intro}</p>
              
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>
                {text.step7.sections.included}
              </h4>
              <ul className="space-y-2 mb-6" style={{ color: '#475569' }}>
                {text.step7.sections.items.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>
              
              <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                <p className="text-sm font-medium" style={{ color: '#166534' }}>
                  {text.step7.tip}
                </p>
              </div>
            </StepImage>

          </div>
        </section>

        {/* CTA */}
        <section className="relative py-12">
          <div className="relative z-10 max-w-[90%] mx-auto px-8 text-center">
            <div 
              className="rounded-xl p-8 max-w-2xl mx-auto"
              style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)', backdropFilter: 'blur(3px)' }}
            >
              <h2 
                className="text-3xl mb-4"
                style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}
              >
                {text.cta.title}
              </h2>
              <p className="mb-6 text-lg" style={{ color: '#475569' }}>
                {text.cta.text}
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a 
                  href="https://qcore33.gumroad.com/l/wcevjy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: 'rgba(191, 219, 254, 0.35)',
                    backdropFilter: 'blur(3px)',
                    border: '1px solid rgba(191, 219, 254, 0.5)',
                    color: '#1e3a8a'
                  }}
                >
                  🇬🇧 {text.cta.button} – €279
                </a>
                <a 
                  href="https://qcore33.gumroad.com/l/yownbk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: 'rgba(191, 219, 254, 0.35)',
                    backdropFilter: 'blur(3px)',
                    border: '1px solid rgba(191, 219, 254, 0.5)',
                    color: '#1e3a8a'
                  }}
                >
                  🇩🇪 {text.cta.button} – €279
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* UPSELL */}
        <section className="relative py-8 pb-16">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h2 
              className="text-2xl mb-6"
              style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}
            >
              {text.upsell.title}
            </h2>
            <p className="mb-6" style={{ color: '#475569' }}>{text.upsell.text}</p>
            
            <div className="grid md:grid-cols-2 gap-4 max-w-2xl">
              {text.upsell.bundles.map((bundle, i) => (
                <Link 
                  key={i}
                  href={bundle.link}
                  className="p-5 rounded-xl flex justify-between items-center hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)', backdropFilter: 'blur(3px)' }}
                >
                  <span className="font-semibold" style={{ color: '#1e293b' }}>{bundle.name}</span>
                  <span className="font-bold" style={{ color: '#1e3a8a' }}>{bundle.price}</span>
                </Link>
              ))}
            </div>
            
            <p className="mt-4 text-sm" style={{ color: '#64748b' }}>
              💡 {text.upsell.bundleHint} – <Link href="/kontakt" className="underline" style={{ color: '#1e3a8a' }}>{locale === 'de' ? 'Anfragen' : 'Inquire'}</Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
