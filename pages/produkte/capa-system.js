import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import Script from 'next/script';
import Image from 'next/image';
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
      {/* Tab Buttons */}
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

// Konsistenter Box-Style (Variante 3)
const boxStyle = {
  backgroundColor: 'rgba(30, 58, 138, 0.06)',
  border: '1px solid rgba(30, 58, 138, 0.1)',
  backdropFilter: 'blur(3px)',
};

// Email Capture Component - Lead Magnet Box
function EmailCapture({ locale }) {
  const text = {
    de: {
      price: '€0',
      priceNote: 'Lead Magnet',
      secure: 'Download-Link per Email · Kein Spam',
      included: [
        '7 Dokumente (Word, Excel, PDF)',
        'Ausgefülltes Beispiel inklusive',
        'RCA Toolkit (5-Why, Ishikawa, Pareto)',
        'Firmenweite Lizenz'
      ]
    },
    en: {
      price: '€0',
      priceNote: 'Lead Magnet',
      secure: 'Download link via email · No spam',
      included: [
        '7 Documents (Word, Excel, PDF)',
        'Filled example included',
        'RCA Toolkit (5-Why, Ishikawa, Pareto)',
        'Company-wide license'
      ]
    }
  };
  
  const t = text[locale] || text.en;
  
  return (
    <div 
      className="rounded-xl p-6"
      style={boxStyle}
    >
      <div className="text-center mb-4">
        <span className="text-4xl font-bold" style={{ color: '#22c55e' }}>{t.price}</span>
        <span className="text-sm ml-2" style={{ color: '#64748b' }}>{t.priceNote}</span>
      </div>

      {/* MailerLite Form */}
      <MailerLiteForm locale={locale} />
      
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

// MailerLite Form Component - custom form with API route
function MailerLiteForm({ locale }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [errorMsg, setErrorMsg] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus('loading');
    
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      
      const data = await res.json();
      
      if (res.ok && data.success) {
        setStatus('success');
      } else {
        setStatus('error');
        setErrorMsg(data.error || 'Something went wrong');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg('Network error');
    }
  };
  
  if (status === 'success') {
    return (
      <div className="text-center py-4 mb-4">
        <div className="text-4xl mb-3">✓</div>
        <p className="text-lg font-semibold" style={{ color: '#166534' }}>
          {locale === 'de' ? 'Fast geschafft!' : 'Almost there!'}
        </p>
        <p className="text-sm mt-2" style={{ color: '#15803d' }}>
          {locale === 'de' 
            ? 'Bitte bestätigen Sie Ihre Email (Double Opt-In).'
            : 'Please confirm your email (Double Opt-In).'}
        </p>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        className="w-full px-4 py-3 rounded-lg border mb-3 text-base"
        style={{ borderColor: status === 'error' ? '#ef4444' : 'rgba(30, 58, 138, 0.2)' }}
        disabled={status === 'loading'}
      />
      {status === 'error' && (
        <p className="text-sm mb-2" style={{ color: '#ef4444' }}>{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full py-3 rounded-lg font-semibold transition-all hover:scale-[1.02]"
        style={{ 
          backgroundColor: status === 'loading' ? 'rgba(148, 163, 184, 0.4)' : 'rgba(191, 219, 254, 0.35)',
          backdropFilter: 'blur(3px)',
          border: '1px solid rgba(191, 219, 254, 0.5)',
          color: '#1e3a8a',
          cursor: status === 'loading' ? 'wait' : 'pointer'
        }}
      >
        {status === 'loading' 
          ? '...' 
          : (locale === 'de' ? 'Kostenlos herunterladen' : 'Download Free')}
      </button>
    </form>
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
        <div className="lg:col-span-3 space-y-6">
          {images.map((img, idx) => (
            <ImageViewer key={idx} src={img.src} alt={img.alt} caption={img.caption} />
          ))}
          
          {popupImages && popupImages.length > 0 && (
            <div className="flex flex-wrap gap-3 mt-4">
              {popupImages.map((img, idx) => (
                <ImagePopup key={idx} src={img.src} alt={img.alt} label={img.label} locale={locale} />
              ))}
            </div>
          )}
        </div>
        
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

// Step Component - Single Image Version
function StepImage({ number, title, children, imageSrc, imageAlt }) {
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
          <ImageViewer src={imageSrc} alt={imageAlt} />
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

export default function CAPASystem() {
  const router = useRouter();
  const locale = router.locale || 'de';
  const isEn = locale === 'en';
  
  // All translations
  const t = {
    de: {
      meta: {
        title: 'CAPA System | Implementierungsanleitung | QCore Consulting',
        description: 'CAPA-System für MedTech implementieren – Schritt für Schritt. 7 Dokumente inkl. ausgefülltem Beispiel. ISO 13485 & FDA 21 CFR 820.100 konform.'
      },
      hero: {
        title: 'CAPA System',
        badges: [
          { std: 'ISO 13485:2016', clause: '§8.5.2 / §8.5.3' },
          { std: 'FDA 21 CFR 820.100', clause: 'CAPA Requirements' },
          { std: 'EU MDR 2017/745', clause: 'Annex IX' }
        ],
        fdaTitle: '#1 FDA Finding – Jahr für Jahr',
        fdaText1: 'CAPA-Mängel führen die Liste der FDA 483 Observations seit über einem Jahrzehnt an.',
        fdaText2: '"Inadequate CAPA procedures" kostet Unternehmen Zertifizierungen, Kundenvertrauen und Marktzugang.',
        problem: 'Das Problem:',
        problemText: 'Die meisten CAPA-Systeme scheitern nicht an fehlenden Dokumenten – sondern an oberflächlicher Ursachenanalyse, unklaren Eskalationskriterien und fehlender Wirksamkeitsprüfung. Auditoren erkennen das sofort.',
        solution: 'Die Lösung:',
        solutionText: 'Ein durchdachtes System mit klarer Struktur. Diese Anleitung zeigt Ihnen Schritt für Schritt, wie Sie ein CAPA-System aufbauen, das Audits besteht – mit Templates, die Sie sofort einsetzen können.',
        howItWorks: 'Scrollen Sie durch die 6 Schritte. Links sehen Sie das jeweilige Dokument als Vorschau, rechts die Erklärung zur Anwendung. Am Ende können Sie alle Dateien herunterladen.'
      },
      step1: {
        title: 'Den Prozess definieren – CAPA SOP',
        whyFirst: 'Warum zuerst die SOP?',
        whyFirstText: 'Die SOP ist das Fundament Ihres CAPA-Systems. Ohne klare Prozessdefinition weiß niemand, wann ein CAPA gestartet wird und wer verantwortlich ist.',
        whatRegulates: 'Was diese SOP regelt:',
        items: [
          { label: 'Trigger:', text: 'Wann wird ein CAPA eröffnet?' },
          { label: 'Eskalation:', text: 'Minor vs. Major vs. Critical' },
          { label: 'Verantwortlichkeiten:', text: 'Wer macht was?' },
          { label: 'Fristen:', text: 'Wie lange darf ein CAPA offen sein?' },
          { label: 'Schnittstellen:', text: 'NC, Complaints, Management Review' }
        ],
        tip: 'Die Entscheidungstabelle in §5.1.1 verhindert CAPA-Inflation – nicht jede NC braucht ein CAPA.'
      },
      step2: {
        title: 'CAPAs dokumentieren – Das Formular',
        oneForm: 'Ein Formular pro CAPA',
        oneFormText: 'Das Formular führt strukturiert durch den gesamten CAPA-Lebenszyklus – von der Problembeschreibung bis zum Abschluss.',
        sections: 'Enthaltene Sektionen:',
        items: [
          { label: 'Header:', text: 'ID, Datum, Quelle, Priorität' },
          { label: 'Problem:', text: 'Was ist passiert? Impact?' },
          { label: 'Root Cause:', text: 'Methode + Ergebnis' },
          { label: 'Actions:', text: 'Corrective + Preventive' },
          { label: 'Verification:', text: 'Wirksamkeitsnachweis' },
          { label: 'Closure:', text: 'Freigaben + Unterschriften' }
        ],
        tip: 'Alle Pflichtfelder nach ISO 13485 §8.5.2/8.5.3 und FDA 820.100 enthalten.'
      },
      step3: {
        title: 'Ursachen finden – Root Cause Analysis Toolkit',
        images: [
          { tab: '5-Why', caption: 'Strukturiertes Nachfragen bis zur Ursache' },
          { tab: 'Ishikawa', caption: 'Ursachen nach 6M-Kategorien sortieren' },
          { tab: 'Pareto', caption: 'Die wichtigsten 20% identifizieren' }
        ],
        popupLabel: 'Anleitung – Wann welche Methode?',
        commonMistake: 'Der häufigste CAPA-Fehler',
        commonMistakeText: '"Menschliches Versagen" ist keine Root Cause. Oberflächliche Analyse führt zu unwirksamen Maßnahmen.',
        toolkitContains: 'Das Toolkit enthält:',
        items: [
          { label: '5-Why:', text: 'Strukturiertes Nachfragen' },
          { label: 'Ishikawa:', text: '6M-Kategorien (Mensch, Maschine, Material, Methode, Messung, Mitwelt)' },
          { label: 'Pareto:', text: '80/20-Regel anwenden' },
          { label: 'Anleitung:', text: 'Welche Methode wann?' }
        ],
        tip: 'Fragen Sie mindestens 5x "Warum?", bis Sie bei einem Prozess- oder Systemfehler landen.'
      },
      step4: {
        title: 'Überblick behalten – CAPA Tracking Log',
        images: [
          { caption: 'Dashboard – KPIs für Management Review' }
        ],
        popupLabel: 'Anleitung zur Nutzung anzeigen',
        bigPicture: 'Das große Bild',
        bigPictureText: 'Einzelne CAPAs sind wichtig – aber Sie brauchen die Gesamtübersicht. Der Log ist Ihre zentrale Datenbank.',
        features: 'Features:',
        featureItems: [
          { label: 'Status-Tracking:', text: 'Ampelfarben' },
          { label: 'Fristenüberwachung:', text: 'Überfällig = rot' },
          { label: 'Dashboard:', text: 'KPIs auf einen Blick' }
        ],
        kpis: 'KPIs für Management Review:',
        kpiItems: [
          'Durchschnittliche Schließzeit',
          'Anzahl überfälliger CAPAs',
          'Verteilung nach Quelle'
        ]
      },
      step5: {
        title: 'So sieht\'s fertig aus – Beispiel-CAPA',
        learnByExample: 'Lernen am Beispiel',
        learnByExampleText: 'Theorie ist gut, ein echtes Beispiel besser. Dieses komplett ausgefüllte CAPA zeigt, wie alles zusammenwirkt.',
        scenario: 'Das Szenario:',
        scenarioItems: [
          'OOS-Befund bei Incoming Inspection',
          '5-Why-Analyse durchgeführt',
          'Root Cause: Lieferant änderte Spec',
          'Action: Lieferantenaudit + neue Prüfung',
          'Prevention: Change-Notification-Agreement',
          'Verification: 3 Monate Monitoring',
          'Closure: Freigabe durch QM'
        ],
        tip: 'Eignet sich auch als Trainingsreferenz für neue Mitarbeiter.'
      },
      step6: {
        title: 'Für den Schreibtisch – Quick Reference Card',
        onePage: 'Der Prozess auf einer Seite',
        onePageText: 'Ausdrucken, aufhängen, fertig. Die Quick Reference fasst den gesamten CAPA-Prozess visuell zusammen.',
        idealFor: 'Ideal für:',
        idealItems: [
          'Neue Mitarbeiter im Onboarding',
          'Reminder im Büro',
          'Schnelle Referenz im Audit',
          'Schulungen und Workshops'
        ],
        tip: 'Format: A4, druckoptimiert'
      },
      upsell: {
        title: 'CAPA funktioniert am besten im System',
        text: 'Nonconformances triggern CAPAs. Audits prüfen beides. Ein integriertes QM-System spart Zeit und besteht Audits.',
        ncBundle: 'NC Management Bundle – €99',
        auditKit: 'Audit Prep Kit – €79'
      }
    },
    en: {
      meta: {
        title: 'CAPA System | Implementation Guide | QCore Consulting',
        description: 'Implement CAPA system for MedTech – step by step. 7 documents incl. filled example. ISO 13485 & FDA 21 CFR 820.100 compliant.'
      },
      hero: {
        title: 'CAPA System',
        badges: [
          { std: 'ISO 13485:2016', clause: '§8.5.2 / §8.5.3' },
          { std: 'FDA 21 CFR 820.100', clause: 'CAPA Requirements' },
          { std: 'EU MDR 2017/745', clause: 'Annex IX' }
        ],
        fdaTitle: '#1 FDA Finding – Year after Year',
        fdaText1: 'CAPA deficiencies have topped the FDA 483 Observations list for over a decade.',
        fdaText2: '"Inadequate CAPA procedures" costs companies certifications, customer trust, and market access.',
        problem: 'The problem:',
        problemText: 'Most CAPA systems don\'t fail because of missing documents – they fail because of superficial root cause analysis, unclear escalation criteria, and missing effectiveness verification. Auditors spot this immediately.',
        solution: 'The solution:',
        solutionText: 'A well-designed system with clear structure. This guide shows you step by step how to build a CAPA system that passes audits – with templates you can use immediately.',
        howItWorks: 'Scroll through the 6 steps. On the left you\'ll see a preview of each document, on the right the explanation for use. At the end you can download all files.'
      },
      step1: {
        title: 'Define the Process – CAPA SOP',
        whyFirst: 'Why the SOP first?',
        whyFirstText: 'The SOP is the foundation of your CAPA system. Without a clear process definition, no one knows when a CAPA should be initiated and who is responsible.',
        whatRegulates: 'What this SOP regulates:',
        items: [
          { label: 'Trigger:', text: 'When is a CAPA opened?' },
          { label: 'Escalation:', text: 'Minor vs. Major vs. Critical' },
          { label: 'Responsibilities:', text: 'Who does what?' },
          { label: 'Deadlines:', text: 'How long can a CAPA stay open?' },
          { label: 'Interfaces:', text: 'NC, Complaints, Management Review' }
        ],
        tip: 'The decision table in §5.1.1 prevents CAPA inflation – not every NC needs a CAPA.'
      },
      step2: {
        title: 'Document CAPAs – The Form',
        oneForm: 'One form per CAPA',
        oneFormText: 'The form guides you through the entire CAPA lifecycle in a structured way – from problem description to closure.',
        sections: 'Included sections:',
        items: [
          { label: 'Header:', text: 'ID, date, source, priority' },
          { label: 'Problem:', text: 'What happened? Impact?' },
          { label: 'Root Cause:', text: 'Method + result' },
          { label: 'Actions:', text: 'Corrective + Preventive' },
          { label: 'Verification:', text: 'Effectiveness evidence' },
          { label: 'Closure:', text: 'Approvals + signatures' }
        ],
        tip: 'All mandatory fields per ISO 13485 §8.5.2/8.5.3 and FDA 820.100 included.'
      },
      step3: {
        title: 'Find Root Causes – Root Cause Analysis Toolkit',
        images: [
          { tab: '5-Why', caption: 'Structured questioning to the root cause' },
          { tab: 'Ishikawa', caption: 'Sort causes by 6M categories' },
          { tab: 'Pareto', caption: 'Identify the vital 20%' }
        ],
        popupLabel: 'Instructions – When to use which method?',
        commonMistake: 'The most common CAPA mistake',
        commonMistakeText: '"Human error" is not a root cause. Superficial analysis leads to ineffective actions.',
        toolkitContains: 'The toolkit contains:',
        items: [
          { label: '5-Why:', text: 'Structured questioning' },
          { label: 'Ishikawa:', text: '6M categories (Man, Machine, Material, Method, Measurement, Environment)' },
          { label: 'Pareto:', text: 'Apply the 80/20 rule' },
          { label: 'Instructions:', text: 'Which method when?' }
        ],
        tip: 'Ask "Why?" at least 5 times until you reach a process or system failure.'
      },
      step4: {
        title: 'Keep the Overview – CAPA Tracking Log',
        images: [
          { caption: 'Dashboard – KPIs for Management Review' }
        ],
        popupLabel: 'Show usage instructions',
        bigPicture: 'The big picture',
        bigPictureText: 'Individual CAPAs are important – but you need the overall view. The log is your central database.',
        features: 'Features:',
        featureItems: [
          { label: 'Status tracking:', text: 'Traffic light colors' },
          { label: 'Deadline monitoring:', text: 'Overdue = red' },
          { label: 'Dashboard:', text: 'KPIs at a glance' }
        ],
        kpis: 'KPIs for Management Review:',
        kpiItems: [
          'Average closure time',
          'Number of overdue CAPAs',
          'Distribution by source'
        ]
      },
      step5: {
        title: 'See the Finished Result – Example CAPA',
        learnByExample: 'Learn by example',
        learnByExampleText: 'Theory is good, a real example is better. This completely filled out CAPA shows how everything works together.',
        scenario: 'The scenario:',
        scenarioItems: [
          'OOS finding at incoming inspection',
          '5-Why analysis performed',
          'Root Cause: Supplier changed spec',
          'Action: Supplier audit + new testing',
          'Prevention: Change notification agreement',
          'Verification: 3 months monitoring',
          'Closure: Approval by QM'
        ],
        tip: 'Also suitable as training reference for new employees.'
      },
      step6: {
        title: 'For Your Desk – Quick Reference Card',
        onePage: 'The process on one page',
        onePageText: 'Print, hang up, done. The Quick Reference visually summarizes the entire CAPA process.',
        idealFor: 'Ideal for:',
        idealItems: [
          'New employees in onboarding',
          'Office reminder',
          'Quick reference during audits',
          'Trainings and workshops'
        ],
        tip: 'Format: A4, print-optimized'
      },
      upsell: {
        title: 'CAPA works best as part of a system',
        text: 'Nonconformances trigger CAPAs. Audits check both. An integrated QM system saves time and passes audits.',
        ncBundle: 'NC Management Bundle – €99',
        auditKit: 'Audit Prep Kit – €79'
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
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)',
          }}
        />
      </div>
      
      <main className="pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto">
          
          {/* HERO - 2 Column Layout */}
          <div className="mb-20">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
              
              {/* Left Column - Content */}
              <div className="lg:col-span-3">
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
                
                {/* FDA Finding Box */}
                <div 
                  className="rounded-xl p-6 mb-8 backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.2)' }}
                >
                  <div>
                      <p className="font-bold text-xl mb-2" style={{ color: '#b91c1c' }}>{text.hero.fdaTitle}</p>
                      <p className="text-lg" style={{ color: '#7f1d1d' }}>
                        {text.hero.fdaText1}<br /><br />
                        {text.hero.fdaText2}
                      </p>
                  </div>
                </div>
                
                {/* Problem / Lösung */}
                <div className="mb-8" style={{ color: '#334155' }}>
                  <p className="text-lg mb-4">
                    <strong>{text.hero.problem}</strong> {text.hero.problemText}
                  </p>
                  <p className="text-lg">
                    <strong>{text.hero.solution}</strong> {text.hero.solutionText}
                  </p>
                </div>
                
                {/* So funktioniert */}
                <div 
                  className="rounded-xl p-6 backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)', border: '1px solid rgba(30, 58, 138, 0.08)' }}
                >
                  <p className="text-lg text-left" style={{ color: '#475569' }}>
                    {text.hero.howItWorks}
                  </p>
                </div>
              </div>
              
              {/* Right Column - Email Capture (sticky) */}
              <div className="lg:col-span-2">
                <div className="lg:sticky lg:top-24">
                  <EmailCapture locale={locale} />
                </div>
              </div>
              
            </div>
          </div>
          
          {/* STEP 1: SOP (PDF) */}
          <StepPDF 
            number={1} 
            title={text.step1.title}
            pdfPath="/docs/capa/QCore_CAPA-SOP_v1.0.pdf"
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
            pdfPath="/docs/capa/QCore_CAPA-Form_v1.0.pdf"
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
          
          {/* STEP 3: RCA (Tabbed Images) */}
          <StepTabbed 
            number={3} 
            title={text.step3.title}
            locale={locale}
            images={[
              { src: '/docs/capa/images/RCA_5W.png', alt: '5-Why Analysis Template', tab: text.step3.images[0].tab, caption: text.step3.images[0].caption },
              { src: '/docs/capa/images/RCA_Ishikawa.png', alt: 'Ishikawa Fishbone Diagram', tab: text.step3.images[1].tab, caption: text.step3.images[1].caption },
              { src: '/docs/capa/images/RCA_Pareto.png', alt: 'Pareto Analysis Template', tab: text.step3.images[2].tab, caption: text.step3.images[2].caption },
            ]}
            popupImages={[
              { src: '/docs/capa/images/RCA_Instructionspng.png', alt: 'RCA Instructions', label: text.step3.popupLabel },
            ]}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step3.commonMistake}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>
              {text.step3.commonMistakeText}
            </p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step3.toolkitContains}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step3.items.map((item, idx) => (
                <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#b45309' }}>
                ⚠️ {text.step3.tip}
              </p>
            </div>
          </StepTabbed>
          
          {/* STEP 4: LOG (Images) */}
          <StepImages 
            number={4} 
            title={text.step4.title}
            locale={locale}
            images={[
              { src: '/docs/capa/images/CAPA_dashboard.png', alt: 'CAPA Dashboard KPIs', caption: text.step4.images[0].caption },
            ]}
            popupImages={[
              { src: '/docs/capa/images/CAPA_instructions.png', alt: 'CAPA Log Instructions', label: text.step4.popupLabel },
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
          </StepImages>
          
          {/* STEP 5: EXAMPLE (PDF) */}
          <StepPDF 
            number={5} 
            title={text.step5.title}
            pdfPath="/docs/capa/QCore_CAPA-Example_v1.0.pdf"
            pdfHeight={700}
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step5.learnByExample}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>
              {text.step5.learnByExampleText}
            </p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step5.scenario}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step5.scenarioItems.map((item, idx) => (
                <li key={idx}>{idx + 1}. {item}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#166534' }}>
                ✓ {text.step5.tip}
              </p>
            </div>
          </StepPDF>
          
          {/* STEP 6: QUICKREF (Single Image) */}
          <StepImage 
            number={6} 
            title={text.step6.title}
            imageSrc="/docs/capa/images/Quick_Ref_Card.png"
            imageAlt="CAPA Quick Reference Card"
          >
            <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{text.step6.onePage}</h4>
            <p className="mb-4" style={{ color: '#475569' }}>
              {text.step6.onePageText}
            </p>
            
            <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{text.step6.idealFor}</h4>
            <ul className="space-y-2" style={{ color: '#475569' }}>
              {text.step6.idealItems.map((item, idx) => (
                <li key={idx}>• {item}</li>
              ))}
            </ul>
            
            <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
              <p className="text-sm font-medium" style={{ color: '#1e40af' }}>
                🖨️ {text.step6.tip}
              </p>
            </div>
          </StepImage>
          
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
                  href={isEn ? '/en/produkte/nc-system' : '/produkte/nc-system'}
                  className="px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: 'rgba(191, 219, 254, 0.35)',
                    backdropFilter: 'blur(3px)',
                    border: '1px solid rgba(191, 219, 254, 0.5)',
                    color: '#1e3a8a'
                  }}
                >
                  {text.upsell.ncBundle}
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
