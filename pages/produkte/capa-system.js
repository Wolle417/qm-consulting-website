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

// Gumroad links
const GUMROAD_LINKS = {
  en: 'https://qcore33.gumroad.com/l/capa-system',
  de: 'https://qcore33.gumroad.com/l/zkrijn',
};

// Purchase Box Component - Gumroad
function PurchaseBox({ locale }) {
  const text = {
    de: {
      heroText: 'Komplettes CAPA-Bundle v2.0 — sofort einsatzbereit.',
      buyEn: '🇬🇧 English kaufen',
      buyDe: '🇩🇪 Deutsch kaufen',
      secure: 'Sichere Zahlung via Gumroad · Sofort-Download',
      version: 'v2.0',
      versionNote: 'Komplett überarbeitet — 13 kritische Audit-Lücken geschlossen',
      included: [
        '7 Dokumente (Word & Excel)',
        'SOP mit Eskalationsmatrix & Wiedereröffnung',
        'RCA-Toolkit (5-Why, Ishikawa, Pareto + Methodenauswahl)',
        'Tracking-Log mit KPI-Dashboard',
        'Ausgefülltes Beispiel (Katheter-Etikettierung)',
        'Quick Reference Card + ReadMe',
        'Firmenweite Lizenz'
      ]
    },
    en: {
      heroText: 'Complete CAPA Bundle v2.0 — ready to use immediately.',
      buyEn: '🇬🇧 Buy English',
      buyDe: '🇩🇪 Buy German',
      secure: 'Secure payment via Gumroad · Instant download',
      version: 'v2.0',
      versionNote: 'Completely revised — 13 critical audit gaps closed',
      included: [
        '7 Documents (Word & Excel)',
        'SOP with escalation matrix & reopening workflow',
        'RCA Toolkit (5-Why, Ishikawa, Pareto + method guide)',
        'Tracking log with KPI dashboard',
        'Filled example (catheter labeling)',
        'Quick Reference Card + ReadMe',
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
      {/* Price + Version */}
      <div className="text-center mb-1">
        <span className="text-4xl font-bold" style={{ color: '#1e3a8a' }}>€189</span>
      </div>
      <div className="text-center mb-1">
        <span className="inline-block px-2 py-0.5 rounded text-xs font-bold" style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a' }}>
          {t.version}
        </span>
      </div>

      {/* Hero Text */}
      <p className="text-center text-sm mb-2" style={{ color: '#475569' }}>
        {t.heroText}
      </p>
      <p className="text-center text-xs mb-5" style={{ color: '#16a34a' }}>
        {t.versionNote}
      </p>

      {/* Buy Buttons - EN + DE */}
      <div className="space-y-2 mb-2">
        <a
          href={GUMROAD_LINKS.en}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 rounded-lg font-semibold text-center transition-all hover:scale-[1.02]"
          style={{
            backgroundColor: '#1e3a8a',
            color: '#ffffff',
            border: '1px solid #1e3a8a',
          }}
        >
          {t.buyEn}
        </a>
        <a
          href={GUMROAD_LINKS.de}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-3 rounded-lg font-semibold text-center transition-all hover:scale-[1.02]"
          style={{
            backgroundColor: '#1e3a8a',
            color: '#ffffff',
            border: '1px solid #1e3a8a',
          }}
        >
          {t.buyDe}
        </a>
      </div>

      <p className="text-xs text-center mt-3 mb-4" style={{ color: '#64748b' }}>
        {t.secure}
      </p>

      <div className="border-t pt-4" style={{ borderColor: 'rgba(30, 58, 138, 0.15)' }}>
        <p className="font-semibold mb-3 text-sm" style={{ color: '#1e293b' }}>
          {locale === 'de' ? 'Enthalten:' : 'Included:'}
        </p>
        <ul className="text-sm space-y-2">
          {t.included.map((item, i) => (
            <li key={i} className="flex items-center" style={{ color: '#334155' }}>
              <span className="mr-2" style={{ color: '#1e3a8a' }}>✓</span>
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
        howItWorks: 'Scrollen Sie durch die 6 Schritte. Links sehen Sie das jeweilige Dokument als Vorschau, rechts die Erklärung zur Anwendung.'
      },
      step1: {
        title: 'Den Prozess definieren – CAPA SOP',
        whyFirst: 'Warum zuerst die SOP?',
        whyFirstText: 'Die SOP ist das Fundament Ihres CAPA-Systems. Version 2.0 deckt 11 Abschnitte ab – von NC→CAPA-Kriterien über Lieferanten-CAPA bis zum Wiedereröffnungs-Workflow.',
        whatRegulates: 'Neu in v2.0:',
        items: [
          { label: 'Eskalationsmatrix:', text: 'Priorität bestimmt automatisch Fristen und Genehmigungsstufen' },
          { label: 'NC→CAPA-Kriterien:', text: 'Klare Entscheidungstabelle – nicht jede NC braucht ein CAPA' },
          { label: 'Lieferanten-CAPA:', text: 'Dedizierter Prozess für externe Abweichungen' },
          { label: 'Wiedereröffnung:', text: 'Definierter Workflow mit Auto-Eskalation bei 2. Wiedereröffnung' },
          { label: 'KPI-Definitionen:', text: 'Wirksamkeitsrate, Wiederauftretensrate, Termintreue, Vorbeugungsverhältnis' }
        ],
        tip: '11 Abschnitte – vollständig konform mit ISO 13485 §8.5.2/8.5.3, FDA 21 CFR 820.100 und EU MDR.'
      },
      step2: {
        title: 'CAPAs dokumentieren – Das Formular',
        oneForm: 'Ein Formular pro CAPA',
        oneFormText: 'Version 2.0 mit 10 Sektionen – jetzt inkl. Risikomanagement-Akte-Prüfung, FSCA-Bewertung und verpflichtender horizontaler Ausweitung.',
        sections: 'Die 10 Sektionen:',
        items: [
          { label: 'Problembeschreibung:', text: 'Mit Auswirkungsbewertung und Kostenschätzung' },
          { label: 'Sofortmaßnahmen:', text: 'Eindämmung + FSCA-Bewertung (Sicherheitskorrektur)' },
          { label: 'Ursachenuntersuchung:', text: '5-Warum mit Validierungs-Checkliste' },
          { label: 'Korrektur- & Vorbeugungsmaßnahmen:', text: 'Inkl. verpflichtender horizontaler Ausweitung' },
          { label: 'RM-Akte-Prüfung:', text: 'Brücke zu ISO 14971 Risikomanagement' },
          { label: 'Wiedereröffnung & Abschluss:', text: 'Definierte Auslöser, Managementbewertung' }
        ],
        tip: 'Verpflichtende horizontale Ausweitung – ein Top-Finding in FDA Warning Letters, jetzt fest im Formular verankert.'
      },
      step3: {
        title: 'Ursachen finden – Root Cause Analysis Toolkit',
        images: [
          { tab: '5-Why', caption: 'Strukturiertes Nachfragen mit Validierungs-Checkliste' },
          { tab: 'Ishikawa', caption: 'Ursachen nach 6M-Kategorien – 4 Ursachenfelder pro Kategorie' },
          { tab: 'Pareto', caption: '80/20-Analyse mit Auto-Berechnung' }
        ],
        popupLabel: 'Methodenauswahl-Leitfaden anzeigen',
        commonMistake: 'Der häufigste CAPA-Fehler',
        commonMistakeText: '"Menschliches Versagen" ist keine Root Cause. Oberflächliche Analyse führt zu unwirksamen Maßnahmen und Wiederholungsfunden.',
        toolkitContains: 'Neu in v2.0:',
        items: [
          { label: '5-Why:', text: 'Mit Grundursachen-Validierungs-Checkliste (Ja/Nein-Dropdown)' },
          { label: 'Ishikawa:', text: '6M-Kategorien mit 4 Ursachenfeldern + Beschreibungen' },
          { label: 'Pareto:', text: '15 Zeilen, automatische Kumulativ-% Berechnung' },
          { label: 'Methodenauswahl:', text: 'NEU – Vergleichstabelle + Entscheidungshilfe' }
        ],
        tip: 'Für CAPA mit Priorität Kritisch/Hoch: mindestens zwei komplementäre RCA-Methoden verwenden.'
      },
      step4: {
        title: 'Überblick behalten – CAPA Tracking Log',
        images: [
          { caption: 'Dashboard v2.0 – KPIs, Wirksamkeit, Kosten' }
        ],
        popupLabel: 'Anleitung zur Nutzung anzeigen',
        bigPicture: 'Zentrale Datenbank mit KPI-Dashboard',
        bigPictureText: 'Version 2.0: 20 Spalten, 4 Blätter, bedingte Formatierung für Priorität, Status, Überfällig und Wirksamkeit.',
        features: 'Features:',
        featureItems: [
          { label: 'Farbcodierung:', text: 'Priorität, Status, Überfällig, Wirksamkeit – alles mit bedingter Formatierung' },
          { label: 'Dashboard:', text: 'Leistungskennzahlen, Wirksamkeitsmetriken, Quellen-, Prioritäts- und Ursachenverteilung' },
          { label: 'Kostenübersicht:', text: 'CAPA-Gesamtkosten, Ø pro CAPA, offene vs. abgeschlossene Kosten' }
        ],
        kpis: 'Dashboard-KPIs:',
        kpiItems: [
          'Wirksamkeitsrate (Ziel: ≥85%)',
          'Wiederauftretensrate (Ziel: ≤5%)',
          'Termingerechter Abschluss (Ziel: ≥90%)',
          'Vorbeugungsverhältnis (steigender Trend)'
        ]
      },
      step5: {
        title: 'So sieht\'s fertig aus – Beispiel-CAPA',
        learnByExample: 'Lernen am Beispiel',
        learnByExampleText: 'Alle 10 Sektionen komplett ausgefüllt – vom Katheter-Etikettierungsproblem bis zur erfolgreichen Wirksamkeitsprüfung.',
        scenario: 'Das Szenario (Katheter UC-200):',
        scenarioItems: [
          'Falsches Verfallsdatum auf 2.400 Einheiten gedruckt',
          '5-Warum-Analyse → SOP fehlt DHF/DMR-Verifizierungsschritt',
          'Sofortmaßnahmen: Lot gesperrt, 12 Kunden benachrichtigt',
          'Korrektur: SOP Rev 4, Checkliste erstellt, 6 Mitarbeiter geschult',
          'Horizontale Ausweitung: 32 SKUs auditiert, UC-150 Diskrepanz gefunden',
          'Vorbeugung: ERP-Automatisierung geplant, jährliches Etikettenaudit',
          'Wirksamkeit: 92 Tage Monitoring, 0 Wiederholungen → WIRKSAM'
        ],
        tip: 'Inkl. RM-Akte-Prüfung, FSCA-Bewertung und Managementbewertungs-Abschluss – perfekte Trainingsreferenz.'
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
        howItWorks: 'Scroll through the 6 steps. On the left you\'ll see a preview of each document, on the right the explanation for use.'
      },
      step1: {
        title: 'Define the Process – CAPA SOP',
        whyFirst: 'Why the SOP first?',
        whyFirstText: 'The SOP is the foundation of your CAPA system. Version 2.0 covers 11 sections – from NC→CAPA criteria to Supplier CAPA to reopening workflow.',
        whatRegulates: 'New in v2.0:',
        items: [
          { label: 'Escalation Matrix:', text: 'Priority auto-determines timelines and approval levels' },
          { label: 'NC→CAPA Criteria:', text: 'Clear decision table – not every NC needs a CAPA' },
          { label: 'Supplier CAPA:', text: 'Dedicated process for external deviations' },
          { label: 'Reopening:', text: 'Defined workflow with auto-escalation on 2nd reopen' },
          { label: 'KPI Definitions:', text: 'Effectiveness rate, recurrence rate, on-time closure, preventive ratio' }
        ],
        tip: '11 sections – fully compliant with ISO 13485 §8.5.2/8.5.3, FDA 21 CFR 820.100 and EU MDR.'
      },
      step2: {
        title: 'Document CAPAs – The Form',
        oneForm: 'One form per CAPA',
        oneFormText: 'Version 2.0 with 10 sections – now incl. Risk Management file review, FSCA assessment, and mandatory horizontal deployment.',
        sections: 'The 10 sections:',
        items: [
          { label: 'Problem Description:', text: 'With impact assessment and cost estimation' },
          { label: 'Containment:', text: 'Immediate actions + FSCA assessment (field safety corrective action)' },
          { label: 'Root Cause Investigation:', text: '5-Why with validation checklist' },
          { label: 'Corrective & Preventive Actions:', text: 'Incl. mandatory horizontal deployment' },
          { label: 'RM File Review:', text: 'Bridge to ISO 14971 risk management' },
          { label: 'Reopening & Closure:', text: 'Defined triggers, management review' }
        ],
        tip: 'Mandatory horizontal deployment – a top finding in FDA Warning Letters, now built into the form.'
      },
      step3: {
        title: 'Find Root Causes – Root Cause Analysis Toolkit',
        images: [
          { tab: '5-Why', caption: 'Structured questioning with validation checklist' },
          { tab: 'Ishikawa', caption: '6M categories – 4 cause slots per category' },
          { tab: 'Pareto', caption: '80/20 analysis with auto-calculation' }
        ],
        popupLabel: 'Show method selection guide',
        commonMistake: 'The most common CAPA mistake',
        commonMistakeText: '"Human error" is not a root cause. Superficial analysis leads to ineffective actions and repeat findings.',
        toolkitContains: 'New in v2.0:',
        items: [
          { label: '5-Why:', text: 'With root cause validation checklist (Yes/No dropdown)' },
          { label: 'Ishikawa:', text: '6M categories with 4 cause slots + descriptions' },
          { label: 'Pareto:', text: '15 rows, automatic cumulative % calculation' },
          { label: 'Method Guide:', text: 'NEW – comparison table + decision aid' }
        ],
        tip: 'For Critical/High priority CAPAs: use at least two complementary RCA methods.'
      },
      step4: {
        title: 'Keep the Overview – CAPA Tracking Log',
        images: [
          { caption: 'Dashboard v2.0 – KPIs, effectiveness, costs' }
        ],
        popupLabel: 'Show usage instructions',
        bigPicture: 'Central database with KPI dashboard',
        bigPictureText: 'Version 2.0: 20 columns, 4 sheets, conditional formatting for priority, status, overdue, and effectiveness.',
        features: 'Features:',
        featureItems: [
          { label: 'Color coding:', text: 'Priority, status, overdue, effectiveness – all with conditional formatting' },
          { label: 'Dashboard:', text: 'Performance KPIs, effectiveness metrics, source/priority/root cause breakdowns' },
          { label: 'Cost summary:', text: 'Total CAPA costs, avg per CAPA, open vs. closed costs' }
        ],
        kpis: 'Dashboard KPIs:',
        kpiItems: [
          'Effectiveness rate (target: ≥85%)',
          'Recurrence rate (target: ≤5%)',
          'On-time closure (target: ≥90%)',
          'Preventive ratio (rising trend)'
        ]
      },
      step5: {
        title: 'See the Finished Result – Example CAPA',
        learnByExample: 'Learn by example',
        learnByExampleText: 'All 10 sections completely filled – from catheter labeling issue to successful effectiveness verification.',
        scenario: 'The scenario (Catheter UC-200):',
        scenarioItems: [
          'Wrong expiry date printed on 2,400 units',
          '5-Why analysis → SOP missing DHF/DMR verification step',
          'Containment: lot quarantined, 12 customers notified',
          'Correction: SOP Rev 4, checklist created, 6 employees trained',
          'Horizontal deployment: 32 SKUs audited, UC-150 discrepancy found',
          'Prevention: ERP automation planned, annual labeling audit',
          'Effectiveness: 92 days monitoring, 0 recurrences → EFFECTIVE'
        ],
        tip: 'Incl. RM file review, FSCA assessment, and management review closure – perfect training reference.'
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
                  <PurchaseBox locale={locale} />
                </div>
              </div>
              
            </div>
          </div>
          
          {/* STEP 1: SOP (PDF) */}
          <StepPDF 
            number={1} 
            title={text.step1.title}
            pdfPath={isEn ? '/docs/capa/QCore_CAPA-SOP_v2.0.pdf' : '/docs/capa/QCore_CAPA-SOP_v2.0_DE.pdf'}
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
            pdfPath={isEn ? '/docs/capa/QCore_CAPA-Form_v2.0.pdf' : '/docs/capa/QCore_CAPA-Form_v2.0_DE.pdf'}
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
            pdfPath={isEn ? '/docs/capa/QCore_CAPA-Example_v2.0.pdf' : '/docs/capa/QCore_CAPA-Example_v2.0_DE.pdf'}
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
