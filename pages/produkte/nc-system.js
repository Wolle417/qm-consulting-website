import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Script from 'next/script';

// PDF Viewer Component (view only)
function PDFViewer({ pdfPath, height = 600 }) {
  return (
    <div className="w-full rounded-lg overflow-hidden shadow-lg" style={{ height: `${height}px`, border: '1px solid rgba(30, 58, 138, 0.15)' }}>
      <iframe
        src={`${pdfPath}#toolbar=0&navpanes=0&scrollbar=1&view=FitH`}
        className="w-full h-full"
        title="PDF Preview"
      />
    </div>
  );
}

// Image Viewer Component - full width like PDF viewers
function ImageViewer({ src, alt, caption }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg w-full" style={{ border: '1px solid rgba(30, 58, 138, 0.15)' }}>
      <img 
        src={src} 
        alt={alt}
        className="w-full h-auto"
        style={{ display: 'block' }}
      />
      {caption && (
        <div className="px-4 py-2 text-sm text-center" style={{ backgroundColor: 'rgba(30, 58, 138, 0.05)', color: '#475569' }}>
          {caption}
        </div>
      )}
    </div>
  );
}

// Tabbed Image Viewer Component
function TabbedImageViewer({ images }) {
  const [activeTab, setActiveTab] = useState(0);
  
  return (
    <div className="w-full">
      {/* Tab Buttons - VERY prominent with clear visual distinction */}
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
      <div className="rounded-lg overflow-hidden shadow-lg w-full" style={{ border: '1px solid rgba(30, 58, 138, 0.15)' }}>
        <img 
          src={images[activeTab].src} 
          alt={images[activeTab].alt}
          className="w-full h-auto"
          style={{ display: 'block' }}
        />
        {images[activeTab].caption && (
          <div className="px-4 py-2 text-sm text-center" style={{ backgroundColor: 'rgba(30, 58, 138, 0.05)', color: '#475569' }}>
            {images[activeTab].caption}
          </div>
        )}
      </div>
    </div>
  );
}

// Image Popup Component - click to enlarge
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

// Step Component - PDF Version
function StepPDF({ number, title, children, pdfPath, pdfHeight = 600 }) {
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
          <PDFViewer pdfPath={pdfPath} height={pdfHeight} />
        </div>
        
        <div className="lg:col-span-2">
          <div 
            className="rounded-xl p-6 h-full backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)', backdropFilter: 'blur(3px)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Step Component - Single Image Version
function StepImage({ number, title, children, imageSrc, imageAlt, imageCaption }) {
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
          <ImageViewer src={imageSrc} alt={imageAlt} caption={imageCaption} />
        </div>
        
        <div className="lg:col-span-2">
          <div 
            className="rounded-xl p-6 h-full backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Step Component - Multiple Images Version with optional popup images
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
        {/* Images - 3/5 width */}
        <div className="lg:col-span-3 space-y-6">
          {images.map((img, idx) => (
            <ImageViewer key={idx} src={img.src} alt={img.alt} caption={img.caption} />
          ))}
          
          {/* Popup buttons for instruction images */}
          {popupImages && popupImages.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {popupImages.map((img, idx) => (
                <ImagePopup key={idx} src={img.src} alt={img.alt} label={img.label} locale={locale} />
              ))}
            </div>
          )}
        </div>
        
        {/* Explanation - 2/5 width */}
        <div className="lg:col-span-2">
          <div 
            className="rounded-xl p-6 backdrop-blur-sm lg:sticky lg:top-24"
            style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)', backdropFilter: 'blur(3px)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Step Component - Tabbed Images Version
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
        {/* Tabbed Images - 3/5 width */}
        <div className="lg:col-span-3">
          <TabbedImageViewer images={images} />
          
          {/* Popup buttons for instruction images */}
          {popupImages && popupImages.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {popupImages.map((img, idx) => (
                <ImagePopup key={idx} src={img.src} alt={img.alt} label={img.label} locale={locale} />
              ))}
            </div>
          )}
        </div>
        
        {/* Explanation - 2/5 width */}
        <div className="lg:col-span-2">
          <div 
            className="rounded-xl p-6 backdrop-blur-sm lg:sticky lg:top-24"
            style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)' }}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function NCSystem() {
  const router = useRouter();
  const locale = router.locale || 'de';
  const isEn = locale === 'en';
  
  // All translations
  const t = {
    de: {
      meta: {
        title: 'NC Management Bundle | Implementierungsanleitung | QCore Consulting',
        description: 'NC-System für MedTech implementieren – Schritt für Schritt. 7 Dokumente. ISO 13485 & FDA 21 CFR 820.90 konform.'
      },
      hero: {
        title: 'NC Management System',
        badges: [
          { std: 'ISO 13485:2016', clause: '§8.3' },
          { std: 'FDA 21 CFR 820.90', clause: 'Nonconforming Product' },
          { std: 'EU MDR 2017/745', clause: 'Annex IX' }
        ],
        price: '€99',
        priceNote: 'einmalig',
        painTitle: 'Auditoren fragen immer:',
        painText: '"Wie entscheiden Sie, ob eine NC ein CAPA auslöst?" Ohne klare Kriterien dokumentiert – Major Finding.',
        problem: 'Das Problem:',
        problemText: 'Viele Unternehmen dokumentieren NCs, aber ohne klare Entscheidungslogik. Wann ist etwas Critical? Wann braucht es ein CAPA? Diese Fragen führen zu Audit-Findings.',
        solution: 'Die Lösung:',
        solutionText: 'Ein NC-System mit klarer Klassifizierung, dokumentierter Eskalationslogik und nahtloser CAPA-Schnittstelle. Diese Anleitung zeigt Ihnen Schritt für Schritt, wie Sie es aufbauen.',
        howItWorks: 'Scrollen Sie durch die 7 Schritte. Links sehen Sie das jeweilige Dokument als Vorschau, rechts die Erklärung zur Anwendung.',
        buyNow: 'Jetzt kaufen'
      },
      step1: {
        title: 'Den Prozess definieren – NC SOP',
        whyFirst: 'Das Fundament',
        whyFirstText: 'Die SOP definiert, wie Nonconformances identifiziert, klassifiziert und bearbeitet werden. Ohne sie fehlt die Grundlage für konsistente Entscheidungen.',
        whatRegulates: 'Was diese SOP regelt:',
        items: [
          { label: 'Identifikation:', text: 'Wie werden NCs erkannt und gemeldet?' },
          { label: 'Klassifizierung:', text: 'Minor vs. Major vs. Critical' },
          { label: 'Disposition:', text: 'Scrap, Rework, Use-as-is, Return' },
          { label: 'Eskalation:', text: 'Wann wird ein CAPA eröffnet?' },
          { label: 'Dokumentation:', text: 'Was muss aufgezeichnet werden?' }
        ],
        tip: 'Die Entscheidungstabelle in §5.2 ist Ihr wichtigstes Tool für Audit-Fragen.'
      },
      step2: {
        title: 'NCs dokumentieren – Das Formular',
        oneForm: 'Ein Formular pro NC',
        oneFormText: 'Das Formular führt strukturiert durch den gesamten NC-Lebenszyklus – von der Erkennung bis zur Disposition und Freigabe.',
        sections: 'Enthaltene Sektionen:',
        items: [
          { label: 'Header:', text: 'NC-ID, Datum, Melder, Bereich' },
          { label: 'Beschreibung:', text: 'Was ist abweichend? Expected vs. Actual' },
          { label: 'Klassifizierung:', text: 'Severity + Impact Assessment' },
          { label: 'Disposition:', text: 'Entscheidung + Begründung' },
          { label: 'Verifikation:', text: 'Nachweis der Umsetzung' },
          { label: 'Freigabe:', text: 'Approval + Unterschriften' }
        ],
        tip: 'Das Feld "Released Product Affected" ist kritisch für FDA-Audits.'
      },
      step3: {
        title: 'So sieht\'s fertig aus – Beispiel-NC',
        learnByExample: 'Lernen am Beispiel',
        learnByExampleText: 'Ein komplett ausgefülltes NC-Formular zeigt, wie alle Felder korrekt dokumentiert werden.',
        scenario: 'Das Szenario:',
        scenarioItems: [
          'Incoming Inspection: Komponente außerhalb Toleranz',
          'Klassifizierung: Major (funktionale Abweichung)',
          'Disposition: Return to Supplier',
          'CAPA-Entscheidung: Ja – wiederholtes Problem',
          'Verifikation: Supplier Corrective Action erhalten',
          'Freigabe durch QA Manager'
        ],
        tip: 'Eignet sich auch als Trainingsreferenz für neue Mitarbeiter.'
      },
      step4: {
        title: 'Überblick behalten – NC Tracking Log',
        images: [
          { tab: 'Einträge', caption: 'NC-Register mit allen offenen und geschlossenen Fällen' },
          { tab: 'Dashboard', caption: 'KPIs für Management Review' }
        ],
        popupLabel: 'Anleitung zur Nutzung anzeigen',
        bigPicture: 'Das große Bild',
        bigPictureText: 'Einzelne NC-Reports sind wichtig – aber Sie brauchen die Gesamtübersicht. Der Log ist Ihre zentrale Datenbank.',
        features: 'Features:',
        featureItems: [
          { label: 'Status-Tracking:', text: 'Open, In Progress, Closed' },
          { label: 'CAPA-Verknüpfung:', text: 'Direkter Link zum CAPA' },
          { label: 'Dashboard:', text: 'KPIs auf einen Blick' }
        ],
        kpis: 'KPIs für Management Review:',
        kpiItems: [
          'NCs nach Bereich/Kategorie',
          'Durchschnittliche Bearbeitungszeit',
          'CAPA-Conversion-Rate'
        ]
      },
      step5: {
        title: 'Richtig klassifizieren – Assessment Matrix',
        purpose: 'Konsistente Entscheidungen',
        purposeText: 'Die Matrix liefert klare Kriterien für die NC-Klassifizierung. Keine Diskussionen mehr über Minor vs. Major.',
        matrix: 'Die Matrix definiert:',
        items: [
          { label: 'Severity Levels:', text: 'Critical, Major, Minor' },
          { label: 'Impact Categories:', text: 'Safety, Function, Documentation' },
          { label: 'CAPA-Trigger:', text: 'Wann ist ein CAPA erforderlich?' },
          { label: 'Eskalation:', text: 'Wer muss informiert werden?' }
        ],
        tip: 'Auditoren lieben nachvollziehbare Entscheidungslogik.'
      },
      step6: {
        title: 'NC → CAPA Schnittstelle – Der Guide',
        interface: 'Die kritische Schnittstelle',
        interfaceText: 'Nicht jede NC braucht ein CAPA – aber die Entscheidung muss dokumentiert sein. Der Guide erklärt genau, wann und wie.',
        guideContains: 'Der Guide enthält:',
        items: [
          { label: 'Entscheidungsbaum:', text: 'NC → CAPA Ja/Nein' },
          { label: 'Kriterien:', text: 'Wann ist ein CAPA erforderlich?' },
          { label: 'Dokumentation:', text: 'Wie wird die Entscheidung festgehalten?' },
          { label: 'DOs & DON\'Ts:', text: 'Typische Fehler vermeiden' }
        ],
        tip: 'Dieser Guide beantwortet die häufigste Auditor-Frage.'
      },
      step7: {
        title: 'Für den Schreibtisch – Quick Reference Card',
        onePage: 'Der Prozess auf einer Seite',
        onePageText: 'Ausdrucken, aufhängen, fertig. Die Quick Reference fasst den gesamten NC-Prozess visuell zusammen.',
        idealFor: 'Ideal für:',
        idealItems: [
          'Neue Mitarbeiter im Onboarding',
          'Reminder in der Produktion',
          'Schnelle Referenz im Audit',
          'Schulungen und Workshops'
        ],
        tip: 'Format: A4, druckoptimiert'
      },
      cta: {
        title: 'Bereit für ein NC-System, das Audits besteht?',
        text: '7 Dokumente, sofort einsetzbar, €99 einmalig.',
        buyNow: 'Jetzt kaufen'
      },
      upsell: {
        title: 'NC und CAPA gehören zusammen',
        text: 'NCs triggern CAPAs. Ein integriertes System spart Zeit und besteht Audits.',
        capaBundle: 'CAPA System Bundle – €129',
        auditKit: 'Audit Prep Kit – €79'
      },
      buyBox: {
        price: '€99',
        oneTime: 'einmalig',
        button: 'Jetzt kaufen',
        secure: 'Sichere Zahlung via Gumroad · Sofortiger Download',
        included: [
          '7 Dokumente (SOP, Form, Example, Log, Matrix, Guide, QuickRef)',
          'Ausgefülltes Beispiel inklusive',
          'Assessment Matrix für NC-Klassifizierung',
          'Unternehmensweite Lizenz'
        ]
      }
    },
    en: {
      meta: {
        title: 'NC Management Bundle | Implementation Guide | QCore Consulting',
        description: 'Implement NC system for MedTech – step by step. 7 documents. ISO 13485 & FDA 21 CFR 820.90 compliant.'
      },
      hero: {
        title: 'NC Management System',
        badges: [
          { std: 'ISO 13485:2016', clause: '§8.3' },
          { std: 'FDA 21 CFR 820.90', clause: 'Nonconforming Product' },
          { std: 'EU MDR 2017/745', clause: 'Annex IX' }
        ],
        price: '€99',
        priceNote: 'one-time',
        painTitle: 'Auditors always ask:',
        painText: '"How do you decide if an NC triggers a CAPA?" Without documented criteria – Major Finding.',
        problem: 'The problem:',
        problemText: 'Many companies document NCs but lack clear decision logic. When is something Critical? When does it need a CAPA? These questions lead to audit findings.',
        solution: 'The solution:',
        solutionText: 'An NC system with clear classification, documented escalation logic, and seamless CAPA interface. This guide shows you step by step how to build it.',
        howItWorks: 'Scroll through the 7 steps. On the left you\'ll see a preview of each document, on the right the explanation for use.',
        buyNow: 'Buy now'
      },
      step1: {
        title: 'Define the Process – NC SOP',
        whyFirst: 'The Foundation',
        whyFirstText: 'The SOP defines how nonconformances are identified, classified, and processed. Without it, there\'s no basis for consistent decisions.',
        whatRegulates: 'What this SOP regulates:',
        items: [
          { label: 'Identification:', text: 'How are NCs detected and reported?' },
          { label: 'Classification:', text: 'Minor vs. Major vs. Critical' },
          { label: 'Disposition:', text: 'Scrap, Rework, Use-as-is, Return' },
          { label: 'Escalation:', text: 'When is a CAPA opened?' },
          { label: 'Documentation:', text: 'What must be recorded?' }
        ],
        tip: 'The decision table in §5.2 is your most important tool for audit questions.'
      },
      step2: {
        title: 'Document NCs – The Form',
        oneForm: 'One form per NC',
        oneFormText: 'The form guides you through the entire NC lifecycle in a structured way – from detection to disposition and approval.',
        sections: 'Included sections:',
        items: [
          { label: 'Header:', text: 'NC-ID, date, reporter, area' },
          { label: 'Description:', text: 'What is nonconforming? Expected vs. Actual' },
          { label: 'Classification:', text: 'Severity + Impact Assessment' },
          { label: 'Disposition:', text: 'Decision + Justification' },
          { label: 'Verification:', text: 'Evidence of implementation' },
          { label: 'Approval:', text: 'Approval + signatures' }
        ],
        tip: 'The "Released Product Affected" field is critical for FDA audits.'
      },
      step3: {
        title: 'See the Finished Result – Example NC',
        learnByExample: 'Learn by example',
        learnByExampleText: 'A completely filled out NC form shows how all fields are correctly documented.',
        scenario: 'The scenario:',
        scenarioItems: [
          'Incoming Inspection: Component out of tolerance',
          'Classification: Major (functional deviation)',
          'Disposition: Return to Supplier',
          'CAPA Decision: Yes – recurring issue',
          'Verification: Supplier Corrective Action received',
          'Approval by QA Manager'
        ],
        tip: 'Also suitable as training reference for new employees.'
      },
      step4: {
        title: 'Keep the Overview – NC Tracking Log',
        images: [
          { tab: 'Entries', caption: 'NC register with all open and closed cases' },
          { tab: 'Dashboard', caption: 'KPIs for Management Review' }
        ],
        popupLabel: 'Show usage instructions',
        bigPicture: 'The big picture',
        bigPictureText: 'Individual NC reports are important – but you need the overall view. The log is your central database.',
        features: 'Features:',
        featureItems: [
          { label: 'Status tracking:', text: 'Open, In Progress, Closed' },
          { label: 'CAPA linkage:', text: 'Direct link to CAPA' },
          { label: 'Dashboard:', text: 'KPIs at a glance' }
        ],
        kpis: 'KPIs for Management Review:',
        kpiItems: [
          'NCs by area/category',
          'Average processing time',
          'CAPA conversion rate'
        ]
      },
      step5: {
        title: 'Classify Correctly – Assessment Matrix',
        purpose: 'Consistent decisions',
        purposeText: 'The matrix provides clear criteria for NC classification. No more discussions about Minor vs. Major.',
        matrix: 'The matrix defines:',
        items: [
          { label: 'Severity Levels:', text: 'Critical, Major, Minor' },
          { label: 'Impact Categories:', text: 'Safety, Function, Documentation' },
          { label: 'CAPA Trigger:', text: 'When is a CAPA required?' },
          { label: 'Escalation:', text: 'Who must be informed?' }
        ],
        tip: 'Auditors love traceable decision logic.'
      },
      step6: {
        title: 'NC → CAPA Interface – The Guide',
        interface: 'The critical interface',
        interfaceText: 'Not every NC needs a CAPA – but the decision must be documented. The guide explains exactly when and how.',
        guideContains: 'The guide contains:',
        items: [
          { label: 'Decision tree:', text: 'NC → CAPA Yes/No' },
          { label: 'Criteria:', text: 'When is a CAPA required?' },
          { label: 'Documentation:', text: 'How is the decision recorded?' },
          { label: 'DOs & DON\'Ts:', text: 'Avoid typical mistakes' }
        ],
        tip: 'This guide answers the most common auditor question.'
      },
      step7: {
        title: 'For Your Desk – Quick Reference Card',
        onePage: 'The process on one page',
        onePageText: 'Print, hang up, done. The Quick Reference visually summarizes the entire NC process.',
        idealFor: 'Ideal for:',
        idealItems: [
          'New employees in onboarding',
          'Reminder on the production floor',
          'Quick reference during audits',
          'Trainings and workshops'
        ],
        tip: 'Format: A4, print-optimized'
      },
      cta: {
        title: 'Ready for an NC system that passes audits?',
        text: '7 documents, ready to use, €99 one-time.',
        buyNow: 'Buy now'
      },
      upsell: {
        title: 'NC and CAPA belong together',
        text: 'NCs trigger CAPAs. An integrated system saves time and passes audits.',
        capaBundle: 'CAPA System Bundle – €129',
        auditKit: 'Audit Prep Kit – €79'
      },
      buyBox: {
        price: '€99',
        oneTime: 'one-time',
        button: 'Buy now',
        secure: 'Secure payment via Gumroad · Instant download',
        included: [
          '7 Documents (SOP, Form, Example, Log, Matrix, Guide, QuickRef)',
          'Filled example included',
          'Assessment Matrix for NC classification',
          'Company-wide license'
        ]
      }
    }
  };
  
  const text = t[locale] || t.en;
  
  return (
    <>
      <Head>
        <title>{text.meta.title}</title>
        <meta name="description" content={text.meta.description} />
      </Head>
      
      <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
      
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
          
          {/* Breadcrumb */}
          <nav className="text-sm mb-6" style={{ color: '#64748b' }}>
            <Link href={isEn ? '/en/produkte' : '/produkte'} className="hover:underline">
              {isEn ? 'Products' : 'Produkte'}
            </Link>
            <span className="mx-2">→</span>
            <span style={{ color: '#1e293b' }}>NC Management Bundle</span>
          </nav>

          {/* HERO with Grid Layout */}
          <div className="grid lg:grid-cols-5 gap-8 items-start mb-20">
            {/* Left Content */}
            <div className="lg:col-span-3">
              {/* Title */}
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
                    style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)' }}
                  >
                    <span className="font-semibold" style={{ color: '#0f172a' }}>{item.std}</span>
                    <span className="ml-2 text-sm" style={{ color: '#64748b' }}>{item.clause}</span>
                  </div>
                ))}
              </div>
              
              {/* Pain Point Box */}
              <div 
                className="rounded-xl p-6 mb-8 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)', backdropFilter: 'blur(3px)' }}
              >
                <p className="font-bold text-xl mb-2" style={{ color: '#b91c1c' }}>{text.hero.painTitle}</p>
                <p className="text-lg" style={{ color: '#7f1d1d' }}>
                  {text.hero.painText}
                </p>
              </div>
              
              {/* Problem / Solution */}
              <div className="mb-8" style={{ color: '#334155' }}>
                <p className="text-lg mb-4">
                  <strong>{text.hero.problem}</strong> {text.hero.problemText}
                </p>
                <p className="text-lg">
                  <strong>{text.hero.solution}</strong> {text.hero.solutionText}
                </p>
              </div>
              
              {/* How it works */}
              <div 
                className="rounded-xl p-6 backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)', border: '1px solid rgba(30, 58, 138, 0.08)', backdropFilter: 'blur(3px)' }}
              >
                <p className="text-lg" style={{ color: '#475569' }}>
                  {text.hero.howItWorks}
                </p>
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
                  href="https://qcore33.gumroad.com/l/cgjwqa"
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
                  🇬🇧 {text.buyBox.button}
                </a>

                <p className="text-xs text-center mb-4" style={{ color: '#64748b' }}>
                  {text.buyBox.secure}
                </p>

                <div className="border-t pt-4" style={{ borderColor: 'rgba(30, 58, 138, 0.15)' }}>
                  <p className="font-semibold mb-3 text-sm" style={{ color: '#1e293b' }}>
                    {isEn ? 'Included:' : 'Enthalten:'}
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
          
          {/* STEP 1: SOP (PDF) */}
          <StepPDF 
            number={1} 
            title={text.step1.title}
            pdfPath="/docs/samples/QCore_NC-SOP_Sample.pdf"
            pdfHeight={700}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step1.whyFirst}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>
              {text.step1.whyFirstText}
            </p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step1.whatRegulates}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step1.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#166534' }}>
                💡 {text.step1.tip}
              </p>
            </div>
          </StepPDF>
          
          {/* STEP 2: FORM (PDF) */}
          <StepPDF 
            number={2} 
            title={text.step2.title}
            pdfPath="/docs/nc/QCore_NC-Form_v1.0.pdf"
            pdfHeight={650}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step2.oneForm}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>
              {text.step2.oneFormText}
            </p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step2.sections}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step2.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#1e40af' }}>
                📋 {text.step2.tip}
              </p>
            </div>
          </StepPDF>
          
          {/* STEP 3: EXAMPLE (PDF) */}
          <StepPDF 
            number={3} 
            title={text.step3.title}
            pdfPath="/docs/nc/QCore_NC-Example_v1.0.pdf"
            pdfHeight={700}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step3.learnByExample}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>
              {text.step3.learnByExampleText}
            </p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step3.scenario}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step3.scenarioItems.map((item, idx) => (
                <li key={idx}>{idx + 1}. {item}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#166534' }}>
                ✓ {text.step3.tip}
              </p>
            </div>
          </StepPDF>
          
          {/* STEP 4: LOG (Tabbed Images) */}
          <StepTabbed 
            number={4} 
            title={text.step4.title}
            locale={locale}
            images={[
              { src: '/docs/nc/images/NC_disposition.png', alt: 'NC Log Entries', tab: text.step4.images[0].tab, caption: text.step4.images[0].caption },
              { src: '/docs/nc/images/NC_dashboard.png', alt: 'NC Dashboard KPIs', tab: text.step4.images[1].tab, caption: text.step4.images[1].caption },
            ]}
            popupImages={[
              
            ]}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step4.bigPicture}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>
              {text.step4.bigPictureText}
            </p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step4.features}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step4.featureItems.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step4.kpis}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step4.kpiItems.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
          </StepTabbed>
          
          {/* STEP 5: Assessment Matrix (Image) */}
          <StepImage 
            number={5} 
            title={text.step5.title}
            imageSrc="/docs/nc/images/NC_assessment_matrix.png"
            imageAlt="NC Assessment Matrix"
            imageCaption={isEn ? 'Classification criteria for consistent decisions' : 'Klassifizierungskriterien für konsistente Entscheidungen'}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step5.purpose}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>
              {text.step5.purposeText}
            </p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step5.matrix}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step5.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#166534' }}>
                💡 {text.step5.tip}
              </p>
            </div>
          </StepImage>
          
          {/* STEP 6: NC-to-CAPA Guide (PDF) */}
          <StepPDF 
            number={6} 
            title={text.step6.title}
            pdfPath="/docs/nc/QCore_NC-to-CAPA-Guide_v1.0.pdf"
            pdfHeight={600}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step6.interface}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>
              {text.step6.interfaceText}
            </p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step6.guideContains}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step6.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#b45309' }}>
                ⚠️ {text.step6.tip}
              </p>
            </div>
          </StepPDF>
          
          {/* STEP 7: QuickRef (Image) */}
          <StepImage 
            number={7} 
            title={text.step7.title}
            imageSrc="/docs/nc/images/NC_QuickRef.png"
            imageAlt="NC Quick Reference Card"
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step7.onePage}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>
              {text.step7.onePageText}
            </p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step7.idealFor}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step7.idealItems.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#1e40af' }}>
                🖨️ {text.step7.tip}
              </p>
            </div>
          </StepImage>
          
          {/* CTA */}
          <div className="max-w-4xl mx-auto mb-20">
            <div 
              className="rounded-xl p-8 text-center backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(30, 58, 138, 0.08)', border: '1px solid rgba(30, 58, 138, 0.15)' }}
            >
              <h2 
                className="text-3xl font-semibold mb-4"
                style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
              >
                {text.cta.title}
              </h2>
              <p className="text-lg mb-6" style={{ color: '#475569' }}>
                {text.cta.text}
              </p>
              <a 
                href="https://qcore33.gumroad.com/l/cgjwqa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-lg text-xl font-semibold transition-all hover:scale-105"
                style={{ 
                  backgroundColor: 'rgba(191, 219, 254, 0.35)',
                  backdropFilter: 'blur(3px)',
                  border: '1px solid rgba(191, 219, 254, 0.5)',
                  color: '#1e3a8a'
                }}
              >
                {text.cta.buyNow} – €99
              </a>
            </div>
          </div>
          
          {/* SOFT UPSELL */}
          <div className="max-w-4xl mx-auto">
            <div 
              className="rounded-xl p-8 text-center backdrop-blur-sm"
              style={{ backgroundColor: 'rgba(30, 58, 138, 0.05)', border: '1px solid rgba(30, 58, 138, 0.1)' }}
            >
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
                {text.upsell.title}
              </h3>
              <p className="mb-6" style={{ color: '#475569' }}>
                {text.upsell.text}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={isEn ? '/en/capa-system-free' : '/capa-system-free'}
                  className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: 'rgba(191, 219, 254, 0.35)',
                    backdropFilter: 'blur(3px)',
                    border: '1px solid rgba(191, 219, 254, 0.5)',
                    color: '#1e3a8a'
                  }}
                >
                  {text.upsell.capaBundle}
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
                  {text.upsell.auditKit}
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </>
  );
}
