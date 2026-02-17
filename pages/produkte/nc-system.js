import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

export default function NCSystem() {
  const router = useRouter();
  const locale = router.locale || 'de';
  const isEn = locale === 'en';

  const DASH = '\u2014';
  const ARROW = '\u2192';
  const EURO = '\u20ac';
  const PARA = '\u00a7';
  const DOT = '\u00b7';

  // Gumroad links
  const GUMROAD_LINKS = {
    en: 'https://qcore33.gumroad.com/l/cgjwqa',
    de: 'https://qcore33.gumroad.com/l/rmcqsx',
  };

  // Translation Object
  const t = {
    de: {
      meta: {
        title: 'NC Management Bundle v2.0 | QCore Consulting',
        description: 'Audit-ready NC Management System f\u00fcr MedTech & Pharma. ISO 13485, FDA 21 CFR 820.90, EU MDR. SOP, Formulare, Excel Workbook mit Dashboard & Classifier.'
      },
      hero: {
        title: 'NC Management System',
        badges: [
          { std: 'ISO 13485:2016', clause: PARA + '8.3' },
          { std: 'FDA 21 CFR 820.90', clause: 'Nonconforming Product' },
          { std: 'EU MDR 2017/745', clause: 'Art. 83-86' },
        ],
        problemTitle: 'FDA Warning Letters & Audit Findings',
        problemText: 'Nonconformance Management ist einer der Top-3 Gr\u00fcnde f\u00fcr FDA Warning Letters. Unklare Klassifizierung, fehlende CAPA-Verkn\u00fcpfung und l\u00fcckenhafte Trendanalysen ' + DASH + ' das kostet Zeit, Geld und Zulassungen.',
        solutionTitle: 'Die L\u00f6sung:',
        solutionText: 'Ein komplettes, sofort einsetzbares NC Management System mit klarer Klassifizierungslogik, automatischem Dashboard und nahtloser CAPA-Integration. Audit-ready ab Tag 1.',
        howItWorks: 'Scrollen Sie durch die Schritte und sehen Sie genau, was im Bundle enthalten ist.'
      },
      cta: {
        price: EURO + '139',
        version: 'v2.0',
        heroText: 'Komplettes NC-Bundle v2.0 ' + DASH + ' sofort einsatzbereit.',
        buyEn: '\ud83c\uddec\ud83c\udde7 English kaufen',
        buyDe: '\ud83c\udde9\ud83c\uddea Deutsch kaufen',
        secure: 'Sichere Zahlung via Gumroad ' + DOT + ' Sofort-Download',
        included: [
          '11 Dokumente (Word, Excel, PNG)',
          'NC Workbook mit Dashboard & Classifier',
          'Ausgef\u00fclltes Beispiel inklusive',
          'Cost Calculator f\u00fcr Qualit\u00e4tskosten',
          'Firmenweite Lizenz'
        ]
      },
      step1: {
        title: 'SOP ' + DASH + ' Ihr NC-Prozess in 8 Phasen',
        subtitle: 'Warum eine SOP?',
        subtitleText: 'Die SOP definiert Ihren kompletten NC-Prozess von der Erkennung bis zum Abschluss ' + DASH + ' in 8 klar definierten Phasen. Audit-ready formatiert, sofort einsetzbar.',
        items: [
          { label: '8-Phasen-Prozess:', text: 'Detection ' + ARROW + ' Containment ' + ARROW + ' Classification ' + ARROW + ' Investigation ' + ARROW + ' Disposition ' + ARROW + ' CAPA ' + ARROW + ' Trend ' + ARROW + ' Closure' },
          { label: 'Regulatory Mapping:', text: 'Jede Phase referenziert ISO 13485, FDA 21 CFR 820 und EU MDR' },
          { label: 'RACI Matrix:', text: 'Klare Verantwortlichkeiten f\u00fcr jede Rolle' },
          { label: 'Eskalationsregeln:', text: 'Automatische Trigger f\u00fcr CAPA und Management Review' },
        ],
        tip: 'Die SOP ist im Word-Format ' + DASH + ' passen Sie sie an Ihre Firmenvorlage an und erg\u00e4nzen Sie Ihr Logo.'
      },
      step2: {
        title: 'NC Formular ' + DASH + ' L\u00fcckenlose Dokumentation',
        subtitle: 'Lifecycle-Dokumentation',
        subtitleText: 'Das NC-Formular begleitet jede Nonconformance von der Entdeckung bis zum Abschluss. Alle regulatorisch geforderten Felder sind vorhanden.',
        items: [
          { label: 'Abschnitt 1:', text: 'Erkennung ' + DASH + ' Produkt, Lot/Charge, Beschreibung, Entdecker' },
          { label: 'Abschnitt 2:', text: 'Containment ' + DASH + ' Sofortma\u00dfnahmen, Quarant\u00e4ne, FSCA-Bewertung' },
          { label: 'Abschnitt 3:', text: 'Investigation ' + DASH + ' Root Cause, Risikobewertung, CAPA-Entscheidung' },
          { label: 'Abschnitt 4:', text: 'Disposition & Closure ' + DASH + ' Ma\u00dfnahmen, Verifikation, Unterschriften' },
        ],
        tip: 'Ein ausgef\u00fclltes Beispiel-NC ist im Bundle enthalten ' + DASH + ' perfekt als Referenz f\u00fcr Ihr Team.'
      },
      step3: {
        title: 'NC Workbook ' + DASH + ' Tracking, Klassifizierung & Dashboard',
        subtitle: 'Alles in einem Excel',
        subtitleText: 'Das Herzst\u00fcck des Bundles: Ein Excel-Workbook mit 8 Sheets, das NC-Log, automatischen Classifier und Live-Dashboard vereint.',
        items: [
          { label: 'NC Log:', text: '22 Spalten, Conditional Formatting, Auto-Filter, \u00dcberf\u00e4lligkeits-Tracking' },
          { label: 'Classifier:', text: '6 Ja/Nein-Fragen ' + ARROW + ' automatische Klassifizierung (Critical/Major/Minor)' },
          { label: 'Dashboard:', text: 'KPI-Cards, Pie-Chart, Bar-Chart ' + DASH + ' alles automatisch aus dem NC Log berechnet' },
          { label: 'Classification Matrix:', text: 'Entscheidungsbaum, Impact Assessment, \u00dcbersichtstabelle' },
          { label: 'Disposition Guide:', text: 'Entscheidungshilfe f\u00fcr Use-as-is, Rework, Repair, Scrap, Return' },
          { label: 'Trend Data:', text: 'Automatische Trigger f\u00fcr wiederkehrende Root Causes und Severity-Trends' },
        ],
        warn: 'Der Classifier ersetzt subjektive Bewertungen durch eine objektive, regelbasierte Logik ' + DASH + ' genau das, was Auditoren sehen wollen.'
      },
      step4: {
        title: 'Process Flowchart ' + DASH + ' Der komplette NC-Prozess auf einen Blick',
        subtitle: 'Visuelles Prozessverst\u00e4ndnis',
        subtitleText: 'Ein professionelles Flowchart mit allen 8 Phasen, Klassifizierungsstufen, CAPA-Triggern und Verantwortlichkeiten. Perfekt f\u00fcr Schulungen und Audits.',
        items: [
          { label: '8 Phasen:', text: 'Farbcodiert mit Flow-Nodes und Pfeilen' },
          { label: 'Klassifizierung:', text: 'Critical / Major / Minor mit Response Times' },
          { label: 'CAPA Trigger:', text: 'Trend-basierte Eskalationsregeln' },
          { label: 'Referenztabelle:', text: 'Key Documents und Verantwortliche pro Phase' },
        ],
        tip: 'H\u00e4ngen Sie das Flowchart im Qualit\u00e4tsbereich aus ' + DASH + ' es ist der beste visuelle Reminder f\u00fcr Ihr Team.'
      },
      step5: {
        title: 'Quick Reference Card ' + DASH + ' NC-Prozess kompakt',
        subtitle: 'Auf einen Blick',
        subtitleText: 'Die gesamte NC-Systematik auf einer Seite: 8-Step Process, Klassifizierung, Disposition, Eskalationsregeln. Ideal als Schulungsunterlage oder Schreibtisch-Referenz.',
        items: [
          { label: '8-Step Flow:', text: 'Kompakter Prozess\u00fcberblick mit nummerierten Schritten' },
          { label: 'Klassifizierungskarten:', text: 'Critical, Major, Minor ' + DASH + ' mit Response Times und CAPA-Pflichten' },
          { label: 'Disposition:', text: '5 Optionen mit Icons und Beschreibungen' },
          { label: 'Eskalationsregeln:', text: 'Wann wird aus einer NC ein CAPA?' },
        ],
        tip: 'Perfekt als LinkedIn-Post oder f\u00fcr die interne Schulungs-Pinnwand.'
      },
      step6: {
        title: 'Weitere Dokumente im Bundle',
        subtitle: 'Komplett-Paket',
        subtitleText: 'Zus\u00e4tzlich enthalten: Alles, was Sie f\u00fcr ein l\u00fcckenloses NC-System brauchen.',
        items: [
          { label: 'NC-to-CAPA Guide:', text: 'Klare Entscheidungslogik, wann eine NC zum CAPA wird ' + DASH + ' mit Trigger-Matrix und Dokumentationsvorlage' },
          { label: 'Rework Checklist:', text: 'Schritt-f\u00fcr-Schritt Nacharbeits-Protokoll mit Re-Inspektion' },
          { label: 'Supplier NC Template:', text: 'Professionelle Reklamationsvorlage f\u00fcr Lieferanten-NCs' },
          { label: 'Cost Calculator:', text: 'Excel-Tool zur Berechnung der Cost of Non-Quality' },
          { label: 'ReadMe:', text: 'Schnellstart-Anleitung mit Implementierungsreihenfolge' },
        ],
        tip: 'Der Cost Calculator zeigt dem Management den ROI Ihres NC-Systems ' + DASH + ' ein starkes Argument f\u00fcr Ressourcen.'
      },
      upsell: {
        title: 'Passt zu Ihrem NC System',
        text: 'NC, CAPA und Audit ' + DASH + ' drei Prozesse, die zusammengeh\u00f6ren. Unsere Templates sind aufeinander abgestimmt und teilen dieselbe Struktur.',
        products: [
          { name: 'CAPA System Bundle', price: EURO + '189', href: '/produkte/capa-system', desc: '8D-Report, Effectiveness Check, Trend Analysis' },
          { name: 'Audit Prep Kit', price: EURO + '79', href: '/produkte/audit-prep-kit', desc: 'Checklisten, Gap Analysis, Mock Audit Protokolle' },
        ]
      }
    },
    en: {
      meta: {
        title: 'NC Management Bundle v2.0 | QCore Consulting',
        description: 'Audit-ready NC Management System for MedTech & Pharma. ISO 13485, FDA 21 CFR 820.90, EU MDR. SOP, forms, Excel workbook with dashboard & classifier.'
      },
      hero: {
        title: 'NC Management System',
        badges: [
          { std: 'ISO 13485:2016', clause: PARA + '8.3' },
          { std: 'FDA 21 CFR 820.90', clause: 'Nonconforming Product' },
          { std: 'EU MDR 2017/745', clause: 'Art. 83-86' },
        ],
        problemTitle: 'FDA Warning Letters & Audit Findings',
        problemText: 'Nonconformance Management is one of the top 3 reasons for FDA Warning Letters. Unclear classification, missing CAPA linkage, and incomplete trend analysis ' + DASH + ' costing time, money, and approvals.',
        solutionTitle: 'The Solution:',
        solutionText: 'A complete, ready-to-use NC Management System with clear classification logic, automatic dashboard, and seamless CAPA integration. Audit-ready from day one.',
        howItWorks: 'Scroll through the steps to see exactly what is included in the bundle.'
      },
      cta: {
        price: EURO + '139',
        version: 'v2.0',
        heroText: 'Complete NC Bundle v2.0 ' + DASH + ' ready to use immediately.',
        buyEn: '\ud83c\uddec\ud83c\udde7 Buy English',
        buyDe: '\ud83c\udde9\ud83c\uddea Buy German',
        secure: 'Secure payment via Gumroad ' + DOT + ' Instant download',
        included: [
          '11 Documents (Word, Excel, PNG)',
          'NC Workbook with Dashboard & Classifier',
          'Completed example included',
          'Cost Calculator for Quality Costs',
          'Company-wide license'
        ]
      },
      step1: {
        title: 'SOP ' + DASH + ' Your NC Process in 8 Phases',
        subtitle: 'Why an SOP?',
        subtitleText: 'The SOP defines your complete NC process from detection to closure ' + DASH + ' in 8 clearly defined phases. Audit-ready formatted, ready to use immediately.',
        items: [
          { label: '8-Phase Process:', text: 'Detection ' + ARROW + ' Containment ' + ARROW + ' Classification ' + ARROW + ' Investigation ' + ARROW + ' Disposition ' + ARROW + ' CAPA ' + ARROW + ' Trend ' + ARROW + ' Closure' },
          { label: 'Regulatory Mapping:', text: 'Each phase references ISO 13485, FDA 21 CFR 820 and EU MDR' },
          { label: 'RACI Matrix:', text: 'Clear responsibilities for each role' },
          { label: 'Escalation Rules:', text: 'Automatic triggers for CAPA and Management Review' },
        ],
        tip: 'The SOP is in Word format ' + DASH + ' customize it with your company template and add your logo.'
      },
      step2: {
        title: 'NC Form ' + DASH + ' Complete Documentation',
        subtitle: 'Lifecycle Documentation',
        subtitleText: 'The NC form accompanies every nonconformance from discovery to closure. All regulatory required fields are present.',
        items: [
          { label: 'Section 1:', text: 'Detection ' + DASH + ' Product, Lot/Batch, Description, Discoverer' },
          { label: 'Section 2:', text: 'Containment ' + DASH + ' Immediate Actions, Quarantine, FSCA Assessment' },
          { label: 'Section 3:', text: 'Investigation ' + DASH + ' Root Cause, Risk Assessment, CAPA Decision' },
          { label: 'Section 4:', text: 'Disposition & Closure ' + DASH + ' Actions, Verification, Signatures' },
        ],
        tip: 'A completed example NC is included ' + DASH + ' perfect as a reference for your team.'
      },
      step3: {
        title: 'NC Workbook ' + DASH + ' Tracking, Classification & Dashboard',
        subtitle: 'All in One Excel',
        subtitleText: 'The heart of the bundle: An Excel workbook with 8 sheets combining NC Log, automatic Classifier, and live Dashboard.',
        items: [
          { label: 'NC Log:', text: '22 columns, conditional formatting, auto-filter, overdue tracking' },
          { label: 'Classifier:', text: '6 Yes/No questions ' + ARROW + ' automatic classification (Critical/Major/Minor)' },
          { label: 'Dashboard:', text: 'KPI cards, pie chart, bar chart ' + DASH + ' all auto-calculated from NC Log' },
          { label: 'Classification Matrix:', text: 'Decision tree, impact assessment, overview table' },
          { label: 'Disposition Guide:', text: 'Decision aid for Use-as-is, Rework, Repair, Scrap, Return' },
          { label: 'Trend Data:', text: 'Automatic triggers for recurring root causes and severity trends' },
        ],
        warn: 'The Classifier replaces subjective assessments with objective, rule-based logic ' + DASH + ' exactly what auditors want to see.'
      },
      step4: {
        title: 'Process Flowchart ' + DASH + ' Complete NC Process at a Glance',
        subtitle: 'Visual Process Understanding',
        subtitleText: 'A professional flowchart with all 8 phases, classification levels, CAPA triggers, and responsibilities. Perfect for training and audits.',
        items: [
          { label: '8 Phases:', text: 'Color-coded with flow nodes and arrows' },
          { label: 'Classification:', text: 'Critical / Major / Minor with response times' },
          { label: 'CAPA Triggers:', text: 'Trend-based escalation rules' },
          { label: 'Reference Table:', text: 'Key documents and responsibilities per phase' },
        ],
        tip: 'Post the flowchart in your quality area ' + DASH + ' it\'s the best visual reminder for your team.'
      },
      step5: {
        title: 'Quick Reference Card ' + DASH + ' NC Process Compact',
        subtitle: 'At a Glance',
        subtitleText: 'The entire NC methodology on one page: 8-step process, classification, disposition, escalation rules. Ideal as training material or desk reference.',
        items: [
          { label: '8-Step Flow:', text: 'Compact process overview with numbered steps' },
          { label: 'Classification Cards:', text: 'Critical, Major, Minor ' + DASH + ' with response times and CAPA requirements' },
          { label: 'Disposition:', text: '5 options with icons and descriptions' },
          { label: 'Escalation Rules:', text: 'When does an NC become a CAPA?' },
        ],
        tip: 'Perfect as a LinkedIn post or for the internal training board.'
      },
      step6: {
        title: 'Additional Documents in the Bundle',
        subtitle: 'Complete Package',
        subtitleText: 'Also included: Everything you need for a complete NC system.',
        items: [
          { label: 'NC-to-CAPA Guide:', text: 'Clear decision logic for when an NC becomes a CAPA ' + DASH + ' with trigger matrix and documentation template' },
          { label: 'Rework Checklist:', text: 'Step-by-step rework protocol with re-inspection' },
          { label: 'Supplier NC Template:', text: 'Professional complaint template for supplier NCs' },
          { label: 'Cost Calculator:', text: 'Excel tool for calculating Cost of Non-Quality' },
          { label: 'ReadMe:', text: 'Quick-start guide with implementation sequence' },
        ],
        tip: 'The Cost Calculator shows management the ROI of your NC system ' + DASH + ' a strong argument for resources.'
      },
      upsell: {
        title: 'Works With Your NC System',
        text: 'NC, CAPA and Audit ' + DASH + ' three processes that belong together. Our templates are aligned and share the same structure.',
        products: [
          { name: 'CAPA System Bundle', price: EURO + '189', href: '/en/produkte/capa-system', desc: '8D Report, Effectiveness Check, Trend Analysis' },
          { name: 'Audit Prep Kit', price: EURO + '79', href: '/en/produkte/audit-prep-kit', desc: 'Checklists, Gap Analysis, Mock Audit Protocols' },
        ]
      }
    }
  };

  const text = t[locale] || t.de;

  // Shared Styles
  const boxStyle = {
    backgroundColor: 'rgba(30, 58, 138, 0.06)',
    border: '1px solid rgba(30, 58, 138, 0.1)',
    backdropFilter: 'blur(3px)',
  };

  const glassButtonStyle = {
    backgroundColor: 'rgba(191, 219, 254, 0.35)',
    backdropFilter: 'blur(3px)',
    border: '1px solid rgba(191, 219, 254, 0.5)',
    color: '#1e3a8a'
  };

  // Components
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

  function ImagePopup({ src, alt, label }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:bg-opacity-80"
          style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a', border: '1px solid rgba(30, 58, 138, 0.2)' }}
        >
          <span>&#128269;</span>
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
                &#10005; {isEn ? 'Close' : 'Schlie\u00dfen'}
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

  function StepPDF({ number, title, children, pdfPath, pdfHeight = 600 }) {
    return (
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>{number}</div>
          <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>{title}</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3"><PDFViewer pdfPath={pdfPath} height={pdfHeight} /></div>
          <div className="lg:col-span-2"><div className="rounded-xl p-6 h-full backdrop-blur-sm" style={boxStyle}>{children}</div></div>
        </div>
      </div>
    );
  }

  function StepImage({ number, title, children, imageSrc, imageAlt, imageCaption, popupLabel }) {
    return (
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>{number}</div>
          <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>{title}</h3>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 space-y-4">
            <ImageViewer src={imageSrc} alt={imageAlt} caption={imageCaption} />
            {popupLabel && (<div className="flex flex-wrap gap-3 mt-4"><ImagePopup src={imageSrc} alt={imageAlt} label={popupLabel} /></div>)}
          </div>
          <div className="lg:col-span-2"><div className="rounded-xl p-6 backdrop-blur-sm lg:sticky lg:top-24" style={boxStyle}>{children}</div></div>
        </div>
      </div>
    );
  }

  function StepText({ number, title, children }) {
    return (
      <div className="mb-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>{number}</div>
          <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>{title}</h3>
        </div>
        <div className="max-w-4xl"><div className="rounded-xl p-6 backdrop-blur-sm" style={boxStyle}>{children}</div></div>
      </div>
    );
  }

  function StepContent({ step }) {
    return (
      <>
        <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{step.subtitle}</h4>
        <p className="mb-4" style={{ color: '#475569' }}>{step.subtitleText}</p>
        <ul className="space-y-2" style={{ color: '#475569' }}>
          {step.items.map((item, idx) => (
            <li key={idx}>&#8226; <strong>{item.label}</strong> {item.text}</li>
          ))}
        </ul>
        {step.tip && (
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
            <p className="text-sm font-medium" style={{ color: '#166534' }}>&#128161; {step.tip}</p>
          </div>
        )}
        {step.warn && (
          <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
            <p className="text-sm font-medium" style={{ color: '#92400e' }}>&#9888;&#65039; {step.warn}</p>
          </div>
        )}
      </>
    );
  }

  // Page
  return (
    <>
      <Head>
        <title>{text.meta.title}</title>
        <meta name="description" content={text.meta.description} />
      </Head>

      <Navigation />

      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)' }} />
      </div>

      <main className="pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto">

          {/* HERO */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              <div className="lg:col-span-3">
                <h1 className="text-5xl lg:text-6xl font-semibold mb-4" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>{text.hero.title}</h1>

                <div className="flex flex-wrap gap-3 mb-8">
                  {text.hero.badges.map((item) => (
                    <div key={item.std} className="px-4 py-2 rounded-lg backdrop-blur-sm" style={boxStyle}>
                      <span className="font-semibold" style={{ color: '#0f172a' }}>{item.std}</span>
                      <span className="ml-2 text-sm" style={{ color: '#64748b' }}>{item.clause}</span>
                    </div>
                  ))}
                </div>

                <div className="rounded-xl p-6 mb-8 backdrop-blur-sm" style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  <p className="font-bold text-xl mb-2" style={{ color: '#b91c1c' }}>{text.hero.problemTitle}</p>
                  <p className="text-lg" style={{ color: '#7f1d1d' }}>{text.hero.problemText}</p>
                </div>

                <div className="mb-8" style={{ color: '#334155' }}>
                  <p className="text-lg"><strong>{text.hero.solutionTitle}</strong> {text.hero.solutionText}</p>
                </div>

                <div className="rounded-xl p-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)', border: '1px solid rgba(30, 58, 138, 0.08)' }}>
                  <p className="text-lg" style={{ color: '#475569' }}>{text.hero.howItWorks}</p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="lg:sticky lg:top-24">
                  <div className="rounded-xl p-6" style={boxStyle}>
                    {/* Price + Version */}
                    <div className="text-center mb-1">
                      <span className="text-4xl font-bold" style={{ color: '#1e3a8a' }}>{text.cta.price}</span>
                    </div>
                    <div className="text-center mb-1">
                      <span className="inline-block px-2 py-0.5 rounded text-xs font-bold" style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a' }}>{text.cta.version}</span>
                    </div>
                    <p className="text-center text-sm mb-4" style={{ color: '#475569' }}>{text.cta.heroText}</p>

                    {/* Buy Buttons - EN + DE */}
                    <div className="space-y-2 mb-2">
                      <a href={GUMROAD_LINKS.en} target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-lg font-semibold text-center transition-all hover:scale-[1.02]" style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}>{text.cta.buyEn}</a>
                      <a href={GUMROAD_LINKS.de} target="_blank" rel="noopener noreferrer" className="block w-full py-3 rounded-lg font-semibold text-center transition-all hover:scale-[1.02]" style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}>{text.cta.buyDe}</a>
                    </div>
                    <p className="text-xs text-center mt-3 mb-4" style={{ color: '#64748b' }}>{text.cta.secure}</p>
                    <div className="border-t pt-4" style={{ borderColor: 'rgba(30, 58, 138, 0.15)' }}>
                      <p className="font-semibold mb-3 text-sm" style={{ color: '#1e293b' }}>{isEn ? 'Included:' : 'Enthalten:'}</p>
                      <ul className="text-sm space-y-2">
                        {text.cta.included.map((item, i) => (
                          <li key={i} className="flex items-center" style={{ color: '#334155' }}>
                            <span className="mr-2" style={{ color: '#22c55e' }}>&#10003;</span>{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* STEPS */}
          <StepPDF number={1} title={text.step1.title} pdfPath={isEn ? '/docs/nc/QCore_NC-SOP_v2.0_preview.pdf' : '/docs/nc/QCore_NC-SOP_v2.0_DE_preview.pdf'} pdfHeight={650}>
            <StepContent step={text.step1} />
          </StepPDF>

          <StepPDF number={2} title={text.step2.title} pdfPath={isEn ? '/docs/nc/QCore_NC-SOP_v2.0_preview.pdf' : '/docs/nc/QCore_NC-SOP_v2.0_DE_preview.pdf'} pdfHeight={550}>
            <StepContent step={text.step2} />
          </StepPDF>

          <StepImage number={3} title={text.step3.title} imageSrc={isEn ? '/docs/nc/images/NC_Workbook_Log.png' : '/docs/nc/images/NC_Workbook_Log_DE.png'} imageAlt="NC Workbook - NC Log with Dashboard" imageCaption={isEn ? 'NC Workbook ' + DASH + ' NC Log with 22 columns, conditional formatting and auto-filter' : 'NC Workbook ' + DASH + ' NC Log mit 22 Spalten, Conditional Formatting und Auto-Filter'} popupLabel={isEn ? 'View full size' : 'Vollbild anzeigen'}>
            <StepContent step={text.step3} />
          </StepImage>

          <StepImage number={4} title={text.step4.title} imageSrc={isEn ? '/docs/nc/images/NC_Flowchart_v2.0.png' : '/docs/nc/images/NC_Flowchart_v2.0_DE.png'} imageAlt={'NC Process Flowchart ' + DASH + ' 8-Phase Process'} imageCaption={isEn ? 'NC Process Flowchart ' + DASH + ' Complete 8-phase NC process with classification and CAPA triggers' : 'NC Process Flowchart ' + DASH + ' Kompletter 8-Phasen NC-Prozess mit Klassifizierung und CAPA-Triggern'} popupLabel={isEn ? 'View full size' : 'Vollbild anzeigen'}>
            <StepContent step={text.step4} />
          </StepImage>

          <StepImage number={5} title={text.step5.title} imageSrc={isEn ? '/docs/nc/images/NC_QuickRef_v2.0.png' : '/docs/nc/images/NC_QuickRef_v2.0_DE.png'} imageAlt="NC Quick Reference Card" imageCaption={isEn ? 'Quick Reference Card ' + DASH + ' Complete NC methodology on one page' : 'Quick Reference Card ' + DASH + ' Gesamte NC-Systematik auf einer Seite'} popupLabel={isEn ? 'View full size' : 'Vollbild anzeigen'}>
            <StepContent step={text.step5} />
          </StepImage>

          <StepText number={6} title={text.step6.title}>
            <StepContent step={text.step6} />
          </StepText>

          {/* FINAL CTA + CROSS-SELL combined */}
          <div className="max-w-5xl mx-auto">
            <div className="rounded-xl p-8 backdrop-blur-sm" style={boxStyle}>

              <h3 className="text-2xl font-semibold mb-2 text-center" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
                {isEn ? 'Build Your Quality System' : 'Bauen Sie Ihr Qualit\u00e4tssystem auf'}
              </h3>
              <p className="text-center text-sm mb-8" style={{ color: '#475569' }}>
                {text.upsell.text}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                {/* NC Bundle - primary */}
                <div
                  className="rounded-lg p-6 flex flex-col justify-between"
                  style={{ backgroundColor: 'rgba(30, 58, 138, 0.08)', border: '2px solid rgba(30, 58, 138, 0.2)' }}
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#1e3a8a' }}>
                      {isEn ? 'You are here' : 'Aktuelles Produkt'}
                    </p>
                    <p className="font-semibold text-lg mb-1" style={{ color: '#0f172a' }}>NC Management System</p>
                    <p className="text-sm mb-4" style={{ color: '#475569' }}>
                      {isEn ? 'SOP, Forms, Excel Workbook with Dashboard & Classifier' : 'SOP, Formulare, Excel Workbook mit Dashboard & Classifier'}
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold mb-3" style={{ color: '#1e3a8a' }}>{text.cta.price}</p>
                    <div className="space-y-2">
                      <a href={GUMROAD_LINKS.en} target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 rounded-lg font-semibold text-center text-sm transition-all hover:scale-[1.02]" style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}>{text.cta.buyEn}</a>
                      <a href={GUMROAD_LINKS.de} target="_blank" rel="noopener noreferrer" className="block w-full py-2.5 rounded-lg font-semibold text-center text-sm transition-all hover:scale-[1.02]" style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}>{text.cta.buyDe}</a>
                    </div>
                  </div>
                </div>

                {/* CAPA + Audit cards */}
                {text.upsell.products.map((product, i) => (
                  <a
                    key={i}
                    href={product.href}
                    className="rounded-lg p-6 flex flex-col justify-between transition-all hover:scale-[1.01]"
                    style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)', border: '1px solid rgba(30, 58, 138, 0.1)' }}
                  >
                    <div>
                      <p className="font-semibold text-lg mb-1" style={{ color: '#0f172a' }}>{product.name}</p>
                      <p className="text-sm mb-4" style={{ color: '#475569' }}>{product.desc}</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold mb-3" style={{ color: '#1e3a8a' }}>{product.price}</p>
                      <span
                        className="block w-full py-3 rounded-lg font-medium text-center text-sm"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.12)', color: '#1e3a8a' }}
                      >
                        {isEn ? 'View details' : 'Details ansehen'}
                      </span>
                    </div>
                  </a>
                ))}

              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
