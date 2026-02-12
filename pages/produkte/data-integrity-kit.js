import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';

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

// Image Viewer Component
function ImageViewer({ src, alt, caption }) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg w-full" style={{ border: '1px solid rgba(30, 58, 138, 0.15)' }}>
      <img src={src} alt={alt} className="w-full h-auto" style={{ display: 'block' }} />
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
      <div className="flex flex-wrap gap-4 mb-8">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`px-8 py-4 rounded-xl text-lg font-bold transition-all ${
              activeTab === idx 
                ? 'text-white scale-105 shadow-2xl ring-4 ring-blue-300 ring-offset-2' 
                : 'hover:scale-105 hover:shadow-xl bg-white'
            }`}
            style={{
              backgroundColor: activeTab === idx ? '#1e3a8a' : 'white',
              color: activeTab === idx ? 'white' : '#1e3a8a',
              border: '3px solid #1e3a8a',
              minWidth: '140px',
              boxShadow: activeTab === idx 
                ? '0 10px 25px -5px rgba(30, 58, 138, 0.4)' 
                : '0 4px 15px -3px rgba(30, 58, 138, 0.2)'
            }}
          >
            {img.tab}
          </button>
        ))}
      </div>
      
      <div className="rounded-lg overflow-hidden shadow-lg w-full" style={{ border: '1px solid rgba(30, 58, 138, 0.15)' }}>
        <img src={images[activeTab].src} alt={images[activeTab].alt} className="w-full h-auto" style={{ display: 'block' }} />
        {images[activeTab].caption && (
          <div className="px-4 py-2 text-sm text-center" style={{ backgroundColor: 'rgba(30, 58, 138, 0.05)', color: '#475569' }}>
            {images[activeTab].caption}
          </div>
        )}
      </div>
    </div>
  );
}

// Image Popup Component
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
            <img src={src} alt={alt} className="max-w-full h-auto rounded-lg shadow-2xl" onClick={(e) => e.stopPropagation()} />
          </div>
        </div>
      )}
    </>
  );
}

// Gumroad Button Component
function GumroadButton({ locale, price = '€299' }) {
  const text = {
    de: {
      heroText: 'Komplettes Data Integrity Kit – sofort einsatzbereit.',
      secure: 'Sichere Zahlung via Gumroad · Sofort-Download',
      included: [
        '8 Dokumente (Word, Excel, PDF)',
        'Gap Assessment mit 93+ Formeln',
        'Ausgefülltes Beispiel (PharmaPro GmbH)',
        '44 Inspector Questions',
        '12 Red Flags Checklist',
        'Firmenweite Lizenz'
      ],
      cta: 'Jetzt kaufen'
    },
    en: {
      heroText: 'Complete Data Integrity Kit – ready to use immediately.',
      secure: 'Secure payment via Gumroad · Instant download',
      included: [
        '8 Documents (Word, Excel, PDF)',
        'Gap Assessment with 93+ formulas',
        'Filled example (PharmaPro GmbH)',
        '44 Inspector Questions',
        '12 Red Flags Checklist',
        'Company-wide license'
      ],
      cta: 'Buy Now'
    }
  };
  
  const t = text[locale] || text.en;
  
  return (
    <div 
      className="rounded-xl p-6"
      style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)', backdropFilter: 'blur(3px)' }}
    >
      <div className="text-center mb-2">
        <span className="text-4xl font-bold" style={{ color: '#1e3a8a' }}>{price}</span>
      </div>
      
      <p className="text-center text-sm mb-5" style={{ color: '#475569' }}>
        {t.heroText}
      </p>

      {/* Gumroad Button */}
      <a
        href="https://qcore33.gumroad.com/l/ygyav"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full py-3 rounded-lg font-semibold text-center transition-all hover:scale-[1.02] mb-3"
        style={{ 
          backgroundColor: '#1e3a8a',
          color: 'white',
          boxShadow: '0 4px 15px -3px rgba(30, 58, 138, 0.4)'
        }}
      >
        {t.cta} →
      </a>
      
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

// Step Component - PDF Version
function StepPDF({ number, title, children, pdfPath, pdfHeight = 600 }) {
  return (
    <div className="mb-24">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
          {number}
        </div>
        <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
          {title}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <PDFViewer pdfPath={pdfPath} height={pdfHeight} />
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-xl p-6 h-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Step Component - Tabbed Images
function StepTabbed({ number, title, children, images, popupImages, locale }) {
  return (
    <div className="mb-24">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
          {number}
        </div>
        <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
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
          <div className="rounded-xl p-6 backdrop-blur-sm lg:sticky lg:top-24" style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

// Step Component - Single Image
function StepImage({ number, title, children, imageSrc, imageAlt }) {
  return (
    <div className="mb-24">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0" style={{ backgroundColor: '#1e3a8a', color: 'white' }}>
          {number}
        </div>
        <h3 className="text-2xl font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
          {title}
        </h3>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <ImageViewer src={imageSrc} alt={imageAlt} />
        </div>
        <div className="lg:col-span-2">
          <div className="rounded-xl p-6 h-full backdrop-blur-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)' }}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function DataIntegrityKit() {
  const router = useRouter();
  const locale = router.locale || 'de';
  const isEn = locale === 'en';
  
  const t = {
    de: {
      meta: {
        title: 'Data Integrity Kit | Pharma GMP Compliance | QCore Consulting',
        description: 'Data Integrity Compliance für Pharma – ALCOA+ Gap Assessment, Audit Trail Review SOP, Risk Matrix. EU GMP Annex 11 & FDA 21 CFR Part 11 konform. €299.'
      },
      hero: {
        title: 'Data Integrity Kit',
        subtitle: 'Pharma GMP Compliance',
        badges: [
          { std: 'FDA 21 CFR Part 11', clause: 'Electronic Records' },
          { std: 'EU GMP Annex 11', clause: 'Computerised Systems' },
          { std: 'PIC/S PI 041-1', clause: 'Data Integrity' },
          { std: 'WHO TRS 1033', clause: 'Annex 4' }
        ],
        painTitle: '52% aller FDA-Findings betreffen Data Integrity',
        painText1: 'Data Integrity Mängel dominieren FDA Warning Letters und 483 Observations seit Jahren.',
        painText2: 'Generic Logins, deaktivierte Audit Trails, unvalidierte Excel-Sheets – Inspektoren kennen die Schwachstellen.',
        problem: 'Das Problem:',
        problemText: 'Die meisten Pharma-KMUs wissen, dass sie DI-Lücken haben. Was fehlt: ein strukturierter Ansatz zur Gap-Analyse und Remediation – ohne teure Berater.',
        solution: 'Die Lösung:',
        solutionText: 'Ein komplettes Toolkit zur Selbstbewertung und Behebung. Gap Assessment, Risk Matrix, SOPs, und 44 echte Inspektionsfragen – alles was Sie brauchen, um vor der nächsten Inspektion compliant zu sein.',
        howItWorks: 'Scrollen Sie durch die 8 Dokumente. Links sehen Sie Vorschauen, rechts die Erklärung zur Anwendung. Am Ende können Sie das Bundle kaufen und sofort einsetzen.'
      },
      step1: {
        title: 'Lücken finden – Gap Assessment Tool',
        tabs: [
          { tab: 'ALCOA+', caption: 'Alle 9 ALCOA+ Attribute pro System bewerten' },
          { tab: 'Dashboard', caption: 'KPIs auf einen Blick – Compliance Score, Critical Gaps' }
        ],
        popupLabel: 'Anleitung anzeigen',
        why: 'Warum zuerst das Assessment?',
        whyText: 'Sie können nur fixen, was Sie kennen. Das Gap Assessment Tool ist Ihre zentrale Datenbank für alle GxP-relevanten Systeme.',
        features: 'Was das Tool erfasst:',
        items: [
          { label: 'System Inventory:', text: 'Alle GxP-Systeme mit GAMP-Kategorie' },
          { label: 'ALCOA+ Bewertung:', text: 'Alle 9 Attribute (nicht nur 5!)' },
          { label: 'Generic Logins:', text: 'Eigene Spalte – der #1 FDA-Finding' },
          { label: 'Audit Trail Status:', text: 'Enabled/Disabled/N.A.' },
          { label: 'Compliance Score:', text: 'Automatisch berechnet (93 Formeln)' }
        ],
        tip: 'Das Dashboard zeigt sofort die kritischsten Lücken – perfekt für Management Review.'
      },
      step2: {
        title: 'Anforderungen definieren – Data Integrity Policy',
        why: 'Die Basis für alles Weitere',
        whyText: 'Ohne Policy keine Compliance. Diese SOP definiert Ihre ALCOA+ Anforderungen, Rollen und Verantwortlichkeiten.',
        sections: 'Enthaltene Kapitel:',
        items: [
          { label: 'ALCOA+ Definitionen:', text: 'Alle 9 Attribute erklärt' },
          { label: 'Rollen:', text: 'DI Officer, System Owner, Process Owner' },
          { label: 'Audit Trail Requirements:', text: 'Wann, wie, wer?' },
          { label: 'Access Control:', text: 'Keine Generic Logins!' },
          { label: 'Periodic Review:', text: 'Risikobasierte Frequenz' },
          { label: 'Escalation:', text: 'Critical → Major → Minor' }
        ],
        tip: 'Review-Frequenz ist risikobasiert per ICH Q10 – nicht starr alle 2 Jahre.'
      },
      step3: {
        title: 'Risiken bewerten – GAMP 5 Risk Matrix',
        tabs: [
          { tab: 'Assessment', caption: 'Risikobewertung pro System nach ICH Q9' },
          { tab: 'GAMP Kat.', caption: 'GAMP 5 Kategorien erklärt' },
          { tab: 'Scoring', caption: 'Bewertungskriterien + Risk Acceptance' },
          { tab: 'Summary', caption: '21 CFR 11 Scope automatisch berechnet' }
        ],
        why: 'Nicht alles validieren – das Richtige validieren',
        whyText: 'Die Matrix hilft Ihnen, Validierungsaufwand risikobasiert zu priorisieren – genau wie GAMP 5 es fordert.',
        features: 'Features:',
        items: [
          { label: 'GAMP 5 Kategorien:', text: '1, 3, 4, 5 + Spreadsheet' },
          { label: 'Risk Scoring:', text: 'Impact × Detectability' },
          { label: '21 CFR 11 Scope:', text: 'Automatisch berechnet' },
          { label: 'Risk Acceptance:', text: 'HIGH/MEDIUM/LOW Kriterien' },
          { label: 'Validation Priority:', text: 'Direkte Handlungsempfehlung' }
        ],
        tip: 'Die Risk Acceptance Criteria sind neu in v1.1 – ein häufiges Audit-Finding.'
      },
      step4: {
        title: 'Audit Trails prüfen – Review SOP',
        why: 'Der unterschätzte Prozess',
        whyText: 'Die meisten haben Audit Trails aktiviert – aber niemand schaut sie an. Diese SOP macht Audit Trail Review zum Routineprozess.',
        sections: 'Enthaltene Sektionen:',
        items: [
          { label: 'Review-Typen:', text: 'Batch Release, Periodic, For-Cause' },
          { label: '12 Red Flags:', text: 'Was Inspektoren suchen' },
          { label: 'Eskalationspfad:', text: '4h / 24h / 5 Tage' },
          { label: 'Appendix:', text: 'Fertiges Review-Formular' }
        ],
        redflags: '12 Red Flags – Was Inspektoren suchen:',
        redflagItems: [
          'Änderungen außerhalb der Arbeitszeit',
          'Änderungen kurz vor Batch Release',
          'Fehlende Reason for Change',
          'Test-Wiederholungen ohne OOS',
          'Gelöschte Daten',
          'Sequenz-Lücken'
        ],
        tip: 'Neu in v1.1: Expliziter Verweis auf Batch Release SOP – ein früheres Review-Finding.'
      },
      step5: {
        title: 'Maßnahmen planen – Remediation Plan Template',
        why: 'Strukturiert zur Compliance',
        whyText: 'Gap gefunden – und jetzt? Der Remediation Plan gibt Ihnen eine 4-Phasen-Struktur mit realistischen Zeitvorgaben.',
        phases: 'Die 4 Phasen:',
        items: [
          { label: 'Phase 1 (0-4 Wochen):', text: 'Quick Wins – Audit Trail aktivieren, Generic Logins eliminieren' },
          { label: 'Phase 2 (1-3 Monate):', text: 'Prozesse – SOPs, Access Review, Periodic Review' },
          { label: 'Phase 3 (3-6 Monate):', text: 'Systeme – CSV, LIMS-Upgrade, E-Signatures' },
          { label: 'Phase 4 (6-12 Monate):', text: 'Kultur – KPIs, Management Review, Annual Assessment' }
        ],
        tip: 'Enthält Budget-Felder – wichtig für Management Buy-In.'
      },
      step6: {
        title: 'Auf die Inspektion vorbereiten – 44 Inspector Questions',
        why: 'Wissen, was kommt',
        whyText: 'Diese 44 Fragen sind keine Theorie – sie basieren auf echten FDA-, EMA- und PIC/S-Inspektionen 2020-2024.',
        categories: 'Kategorien:',
        items: [
          { label: 'Governance (10):', text: 'Policy, Training, DI Officer' },
          { label: 'Electronic Systems (12):', text: 'Audit Trails, Generic Logins, Access' },
          { label: 'Specific Systems (8):', text: 'Excel, Standalone, LIMS' },
          { label: 'Data Handling (6):', text: 'OOS, Complete Data, Re-Analysis' },
          { label: 'Backup (4):', text: 'Backup, Restoration Test, Retention' },
          { label: 'Paper (4):', text: 'GDP, Corrections, Blank Forms' }
        ],
        examples: 'Beispiel-Fragen:',
        exampleItems: [
          '"Can the audit trail be disabled? By whom?"',
          '"Show me a list of all GxP computerized systems."',
          '"Do you use any generic or shared login accounts?"'
        ],
        tip: 'Üben Sie die Antworten mit Ihrem Team – vor dem Audit, nicht währenddessen.'
      },
      step7: {
        title: 'Für den Schreibtisch – Quick Reference Card',
        why: 'ALCOA+ auf einen Blick',
        whyText: 'Ausdrucken, laminieren, aufhängen. Die Quick Reference fasst ALCOA+ und die 12 Red Flags visuell zusammen.',
        content: 'Inhalt:',
        items: [
          'ALCOA+ Prinzipien erklärt',
          '12 Red Flags Checklist',
          'Escalation Path (Critical/Major/Minor)',
          'Golden Rules of Data Integrity'
        ],
        tip: 'Ideal fürs Labor oder QC-Büro – erhöht die Awareness am Shopfloor.'
      },
      step8: {
        title: 'So sieht\'s fertig aus – PharmaPro GmbH Example',
        why: 'Lernen am echten Beispiel',
        whyText: 'Keine geschönten Zahlen – dieses Beispiel zeigt ein realistisches Assessment mit 62% Compliance Score und echten Findings.',
        scenario: 'Das Szenario:',
        items: [
          { label: 'Unternehmen:', text: 'PharmaPro GmbH, Munich (45 MA)' },
          { label: 'Systeme:', text: '7 GxP-Systeme bewertet' },
          { label: 'Score:', text: '62% – CRITICAL' },
          { label: 'Hauptprobleme:', text: 'LIMS Audit Trail aus, Generic Login "Lab", Excel unvalidiert' },
          { label: 'Budget:', text: '€15.700 Remediation-Kosten geschätzt' }
        ],
        findings: 'Kritische Findings im Beispiel:',
        findingItems: [
          'ChemStation LIMS: Audit Trail DISABLED',
          'Generic Login "Lab" von 8 Analysten genutzt',
          'Excel Batch Records: Keine Access Controls'
        ],
        tip: 'Nutzen Sie das Beispiel als Trainingsreferenz – zeigt, dass es okay ist, Lücken zu finden.'
      },
      upsell: {
        title: 'Data Integrity ist nur der Anfang',
        text: 'Ein vollständiges Pharma QMS braucht mehr. Kombinieren Sie das DI-Kit mit unseren anderen Bundles.',
        capaBundle: 'Pharma CAPA System – €149',
        deviationBundle: 'Deviation Management – €129 (coming soon)'
      }
    },
    en: {
      meta: {
        title: 'Data Integrity Kit | Pharma GMP Compliance | QCore Consulting',
        description: 'Data Integrity Compliance for Pharma – ALCOA+ Gap Assessment, Audit Trail Review SOP, Risk Matrix. EU GMP Annex 11 & FDA 21 CFR Part 11 compliant. €299.'
      },
      hero: {
        title: 'Data Integrity Kit',
        subtitle: 'Pharma GMP Compliance',
        badges: [
          { std: 'FDA 21 CFR Part 11', clause: 'Electronic Records' },
          { std: 'EU GMP Annex 11', clause: 'Computerised Systems' },
          { std: 'PIC/S PI 041-1', clause: 'Data Integrity' },
          { std: 'WHO TRS 1033', clause: 'Annex 4' }
        ],
        painTitle: '52% of all FDA findings relate to Data Integrity',
        painText1: 'Data Integrity deficiencies have dominated FDA Warning Letters and 483 Observations for years.',
        painText2: 'Generic logins, disabled audit trails, unvalidated Excel sheets – inspectors know the weaknesses.',
        problem: 'The problem:',
        problemText: 'Most pharma SMEs know they have DI gaps. What\'s missing: a structured approach to gap analysis and remediation – without expensive consultants.',
        solution: 'The solution:',
        solutionText: 'A complete toolkit for self-assessment and remediation. Gap Assessment, Risk Matrix, SOPs, and 44 real inspector questions – everything you need to be compliant before your next inspection.',
        howItWorks: 'Scroll through the 8 documents. On the left you\'ll see previews, on the right the explanation for use. At the end you can purchase the bundle and use it immediately.'
      },
      step1: {
        title: 'Find the Gaps – Gap Assessment Tool',
        tabs: [
          { tab: 'Inventory', caption: 'System Inventory with 17 columns – incl. Generic Logins Check' },
          { tab: 'ALCOA+', caption: 'Rate all 9 ALCOA+ attributes per system' },
          { tab: 'Dashboard', caption: 'KPIs at a glance – Compliance Score, Critical Gaps' },
          { tab: 'Remediation', caption: 'Action tracker with Owner, Due Date, Status' }
        ],
        popupLabel: 'Show instructions',
        why: 'Why start with the assessment?',
        whyText: 'You can only fix what you know. The Gap Assessment Tool is your central database for all GxP-relevant systems.',
        features: 'What the tool captures:',
        items: [
          { label: 'System Inventory:', text: 'All GxP systems with GAMP category' },
          { label: 'ALCOA+ Assessment:', text: 'All 9 attributes (not just 5!)' },
          { label: 'Generic Logins:', text: 'Dedicated column – the #1 FDA finding' },
          { label: 'Audit Trail Status:', text: 'Enabled/Disabled/N.A.' },
          { label: 'Compliance Score:', text: 'Automatically calculated (93 formulas)' }
        ],
        tip: 'The dashboard immediately shows the most critical gaps – perfect for Management Review.'
      },
      step2: {
        title: 'Define Requirements – Data Integrity Policy',
        why: 'The foundation for everything else',
        whyText: 'No policy, no compliance. This SOP defines your ALCOA+ requirements, roles and responsibilities.',
        sections: 'Included chapters:',
        items: [
          { label: 'ALCOA+ Definitions:', text: 'All 9 attributes explained' },
          { label: 'Roles:', text: 'DI Officer, System Owner, Process Owner' },
          { label: 'Audit Trail Requirements:', text: 'When, how, who?' },
          { label: 'Access Control:', text: 'No generic logins!' },
          { label: 'Periodic Review:', text: 'Risk-based frequency' },
          { label: 'Escalation:', text: 'Critical → Major → Minor' }
        ],
        tip: 'Review frequency is risk-based per ICH Q10 – not rigidly every 2 years.'
      },
      step3: {
        title: 'Assess Risks – GAMP 5 Risk Matrix',
        tabs: [
          { tab: 'Assessment', caption: 'Risk assessment per system according to ICH Q9' },
          { tab: 'GAMP Cat.', caption: 'GAMP 5 categories explained' },
          { tab: 'Scoring', caption: 'Scoring criteria + Risk Acceptance' },
          { tab: 'Summary', caption: '21 CFR 11 Scope automatically calculated' }
        ],
        why: 'Don\'t validate everything – validate the right things',
        whyText: 'The matrix helps you prioritize validation effort on a risk basis – exactly as GAMP 5 requires.',
        features: 'Features:',
        items: [
          { label: 'GAMP 5 Categories:', text: '1, 3, 4, 5 + Spreadsheet' },
          { label: 'Risk Scoring:', text: 'Impact × Detectability' },
          { label: '21 CFR 11 Scope:', text: 'Automatically calculated' },
          { label: 'Risk Acceptance:', text: 'HIGH/MEDIUM/LOW criteria' },
          { label: 'Validation Priority:', text: 'Direct action recommendation' }
        ],
        tip: 'Risk Acceptance Criteria are new in v1.1 – a common audit finding.'
      },
      step4: {
        title: 'Review Audit Trails – Review SOP',
        why: 'The underestimated process',
        whyText: 'Most have audit trails enabled – but nobody looks at them. This SOP makes audit trail review a routine process.',
        sections: 'Included sections:',
        items: [
          { label: 'Review Types:', text: 'Batch Release, Periodic, For-Cause' },
          { label: '12 Red Flags:', text: 'What inspectors look for' },
          { label: 'Escalation Path:', text: '4h / 24h / 5 days' },
          { label: 'Appendix:', text: 'Ready-to-use review form' }
        ],
        redflags: '12 Red Flags – What inspectors look for:',
        redflagItems: [
          'Changes outside working hours',
          'Changes shortly before batch release',
          'Missing reason for change',
          'Test repetitions without OOS',
          'Deleted data',
          'Sequence gaps'
        ],
        tip: 'New in v1.1: Explicit reference to Batch Release SOP – a previous review finding.'
      },
      step5: {
        title: 'Plan Actions – Remediation Plan Template',
        why: 'Structured path to compliance',
        whyText: 'Gap found – now what? The Remediation Plan gives you a 4-phase structure with realistic timelines.',
        phases: 'The 4 phases:',
        items: [
          { label: 'Phase 1 (0-4 weeks):', text: 'Quick Wins – Enable audit trail, eliminate generic logins' },
          { label: 'Phase 2 (1-3 months):', text: 'Processes – SOPs, Access Review, Periodic Review' },
          { label: 'Phase 3 (3-6 months):', text: 'Systems – CSV, LIMS upgrade, E-Signatures' },
          { label: 'Phase 4 (6-12 months):', text: 'Culture – KPIs, Management Review, Annual Assessment' }
        ],
        tip: 'Includes budget fields – important for management buy-in.'
      },
      step6: {
        title: 'Prepare for Inspection – 44 Inspector Questions',
        why: 'Know what\'s coming',
        whyText: 'These 44 questions are not theory – they are based on real FDA, EMA, and PIC/S inspections 2020-2024.',
        categories: 'Categories:',
        items: [
          { label: 'Governance (10):', text: 'Policy, Training, DI Officer' },
          { label: 'Electronic Systems (12):', text: 'Audit Trails, Generic Logins, Access' },
          { label: 'Specific Systems (8):', text: 'Excel, Standalone, LIMS' },
          { label: 'Data Handling (6):', text: 'OOS, Complete Data, Re-Analysis' },
          { label: 'Backup (4):', text: 'Backup, Restoration Test, Retention' },
          { label: 'Paper (4):', text: 'GDP, Corrections, Blank Forms' }
        ],
        examples: 'Example questions:',
        exampleItems: [
          '"Can the audit trail be disabled? By whom?"',
          '"Show me a list of all GxP computerized systems."',
          '"Do you use any generic or shared login accounts?"'
        ],
        tip: 'Practice the answers with your team – before the audit, not during.'
      },
      step7: {
        title: 'For Your Desk – Quick Reference Card',
        why: 'ALCOA+ at a glance',
        whyText: 'Print, laminate, hang up. The Quick Reference visually summarizes ALCOA+ and the 12 Red Flags.',
        content: 'Content:',
        items: [
          'ALCOA+ principles explained',
          '12 Red Flags checklist',
          'Escalation Path (Critical/Major/Minor)',
          'Golden Rules of Data Integrity'
        ],
        tip: 'Ideal for the lab or QC office – increases awareness on the shop floor.'
      },
      step8: {
        title: 'See the Finished Result – PharmaPro GmbH Example',
        why: 'Learn from a real example',
        whyText: 'No beautified numbers – this example shows a realistic assessment with 62% compliance score and real findings.',
        scenario: 'The scenario:',
        items: [
          { label: 'Company:', text: 'PharmaPro GmbH, Munich (45 employees)' },
          { label: 'Systems:', text: '7 GxP systems assessed' },
          { label: 'Score:', text: '62% – CRITICAL' },
          { label: 'Main issues:', text: 'LIMS Audit Trail off, Generic Login "Lab", Excel unvalidated' },
          { label: 'Budget:', text: '€15,700 remediation costs estimated' }
        ],
        findings: 'Critical findings in the example:',
        findingItems: [
          'ChemStation LIMS: Audit Trail DISABLED',
          'Generic Login "Lab" used by 8 analysts',
          'Excel Batch Records: No access controls'
        ],
        tip: 'Use the example as a training reference – shows it\'s okay to find gaps.'
      },
      upsell: {
        title: 'Data Integrity is just the beginning',
        text: 'A complete Pharma QMS needs more. Combine the DI Kit with our other bundles.',
        capaBundle: 'Pharma CAPA System – €149',
        deviationBundle: 'Deviation Management – €129 (coming soon)'
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
      
      <Navigation />
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)' }} />
      </div>
      
      <main className="pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto">
          
          {/* HERO */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              
              {/* Left Column - Content */}
              <div className="lg:col-span-3">
                <p className="text-lg font-medium mb-2" style={{ color: '#1e3a8a' }}>{text.hero.subtitle}</p>
                <h1 className="text-5xl lg:text-6xl font-semibold mb-4" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
                  {text.hero.title}
                </h1>
                
                {/* Compliance Badges */}
                <div className="flex flex-wrap gap-3 mb-8">
                  {text.hero.badges.map((item) => (
                    <div key={item.std} className="px-4 py-2 rounded-lg backdrop-blur-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)' }}>
                      <span className="font-semibold" style={{ color: '#0f172a' }}>{item.std}</span>
                      <span className="ml-2 text-sm" style={{ color: '#64748b' }}>{item.clause}</span>
                    </div>
                  ))}
                </div>
                
                {/* Pain Point Box */}
                <div className="rounded-xl p-6 mb-8 backdrop-blur-sm" style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
                  <p className="font-bold text-xl mb-2" style={{ color: '#b91c1c' }}>{text.hero.painTitle}</p>
                  <p className="text-lg" style={{ color: '#7f1d1d' }}>
                    {text.hero.painText1}<br /><br />
                    {text.hero.painText2}
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
                
                {/* How It Works */}
                <div className="rounded-xl p-6 backdrop-blur-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)', border: '1px solid rgba(30, 58, 138, 0.08)' }}>
                  <p className="text-lg text-left" style={{ color: '#475569' }}>
                    {text.hero.howItWorks}
                  </p>
                </div>
              </div>
              
              {/* Right Column - Buy Box */}
              <div className="lg:col-span-2">
                <div className="lg:sticky lg:top-24">
                  <GumroadButton locale={locale} price="€299" />
                </div>
              </div>
              
            </div>
          </div>
          
          {/* STEP 1: Gap Assessment (Tabbed) */}
          <StepTabbed 
            number={1} 
            title={text.step1.title}
            locale={locale}
            images={[
              { src: '/docs/di-kit/images/ALCOA_assessment1.png', alt: 'ALCOA+ Assessment', tab: text.step1.tabs[0].tab, caption: text.step1.tabs[0].caption },
              { src: '/docs/di-kit/images/ALCOA_dashboard.png', alt: 'Dashboard', tab: text.step1.tabs[1].tab, caption: text.step1.tabs[1].caption },
            ]}
            popupImages={[]}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step1.why}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>{text.step1.whyText}</p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step1.features}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step1.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#166534' }}>💡 {text.step1.tip}</p>
            </div>
          </StepTabbed>
          
          {/* STEP 2: Policy SOP (PDF) */}
          <StepPDF 
            number={2} 
            title={text.step2.title}
            pdfPath="/docs/di-kit/QCore_Pharma-DI-Policy_v1.0.pdf"
            pdfHeight={700}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step2.why}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>{text.step2.whyText}</p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step2.sections}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step2.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#1e40af' }}>📋 {text.step2.tip}</p>
            </div>
          </StepPDF>
          
          {/* STEP 3: Risk Matrix (Tabbed) */}
          <StepTabbed 
            number={3} 
            title={text.step3.title}
            locale={locale}
            images={[
              { src: '/docs/di-kit/images/Risk_Assessment.png', alt: 'Risk Assessment', tab: text.step3.tabs[0].tab, caption: text.step3.tabs[0].caption },
              { src: '/docs/di-kit/images/Risk_scoring_guide.png', alt: 'Scoring Guide', tab: text.step3.tabs[1].tab, caption: text.step3.tabs[1].caption },
            ]}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step3.why}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>{text.step3.whyText}</p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step3.features}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step3.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#166534' }}>✓ {text.step3.tip}</p>
            </div>
          </StepTabbed>
          
          {/* STEP 4: Audit Trail Review SOP (PDF) */}
          <StepPDF 
            number={4} 
            title={text.step4.title}
            pdfPath="/docs/di-kit/QCore_Pharma-DI-AuditTrailReview_v1.0.pdf"
            pdfHeight={700}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step4.why}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>{text.step4.whyText}</p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step4.sections}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step4.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step4.redflags}</h4>
            <ul className="space-y-1 text-sm" style={{ color: '#7f1d1d' }}>
              {text.step4.redflagItems.map((item, idx) => (
                <li key={idx}>⚠️ {item}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#b45309' }}>⚠️ {text.step4.tip}</p>
            </div>
          </StepPDF>
          
          {/* STEP 5: Remediation Plan (PDF) */}
          <StepPDF 
            number={5} 
            title={text.step5.title}
            pdfPath="/docs/di-kit/QCore_Pharma-DI-RemediationPlan_v1.0.pdf"
            pdfHeight={650}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step5.why}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>{text.step5.whyText}</p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step5.phases}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step5.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#1e40af' }}>💼 {text.step5.tip}</p>
            </div>
          </StepPDF>
          
          {/* STEP 6: Inspector Questions (PDF) */}
          <StepPDF 
            number={6} 
            title={text.step6.title}
            pdfPath="/docs/di-kit/QCore_Pharma-DI-InspectorQuestions_v1.0.pdf"
            pdfHeight={700}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step6.why}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>{text.step6.whyText}</p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step6.categories}</h4>
            <ul className="space-y-2 text-sm" style={{ color: '#475569' }}>
              {text.step6.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step6.examples}</h4>
            <ul className="space-y-1 text-sm italic" style={{ color: '#64748b' }}>
              {text.step6.exampleItems.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#166534' }}>🎯 {text.step6.tip}</p>
            </div>
          </StepPDF>
          
          {/* STEP 7: Quick Reference (Tabbed Images) */}
          <StepTabbed 
            number={7} 
            title={text.step7.title}
            locale={locale}
            images={[
              { src: '/docs/di-kit/images/QRC_ALCOA.png', alt: 'ALCOA+ Quick Reference', tab: 'ALCOA+', caption: locale === 'de' ? 'ALCOA+ Prinzipien auf einen Blick' : 'ALCOA+ principles at a glance' },
              { src: '/docs/di-kit/images/QRC_RedFlags.png', alt: '12 Red Flags', tab: 'Red Flags', caption: locale === 'de' ? '12 Warnsignale für Data Integrity Probleme' : '12 warning signs for Data Integrity issues' },
            ]}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step7.why}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>{text.step7.whyText}</p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step7.content}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step7.items.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#1e40af' }}>🖨️ {text.step7.tip}</p>
            </div>
          </StepTabbed>
          
          {/* STEP 8: Example (PDF) */}
          <StepPDF 
            number={8} 
            title={text.step8.title}
            pdfPath="/docs/di-kit/QCore_Pharma-DI-Example_v1.0.pdf"
            pdfHeight={700}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step8.why}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>{text.step8.whyText}</p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step8.scenario}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step8.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step8.findings}</h4>
            <ul className="space-y-1 text-sm" style={{ color: '#b91c1c' }}>
              {text.step8.findingItems.map((item, idx) => (
                <li key={idx}>✗ {item}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#166534' }}>✓ {text.step8.tip}</p>
            </div>
          </StepPDF>
          
          {/* UPSELL */}
          <div className="max-w-4xl mx-auto">
            <div className="rounded-xl p-8 text-center backdrop-blur-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.05)', border: '1px solid rgba(30, 58, 138, 0.1)' }}>
              <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
                {text.upsell.title}
              </h3>
              <p className="mb-6" style={{ color: '#475569' }}>
                {text.upsell.text}
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={isEn ? '/en/produkte/pharma-capa-system' : '/produkte/pharma-capa-system'}
                  className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                  style={{ backgroundColor: 'rgba(191, 219, 254, 0.35)', backdropFilter: 'blur(3px)', border: '1px solid rgba(191, 219, 254, 0.5)', color: '#1e3a8a' }}
                >
                  {text.upsell.capaBundle}
                </a>
                <span 
                  className="px-6 py-3 rounded-lg font-medium"
                  style={{ backgroundColor: 'rgba(148, 163, 184, 0.2)', border: '1px solid rgba(148, 163, 184, 0.3)', color: '#64748b' }}
                >
                  {text.upsell.deviationBundle}
                </span>
              </div>
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </>
  );
}
