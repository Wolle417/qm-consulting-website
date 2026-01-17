import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';

const cardStyle = {
  backgroundColor: 'rgba(255, 255, 255, 0.35)',
  borderColor: 'rgba(30, 58, 138, 0.2)'
};

export default function AuditPrepKit() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { t, locale } = useTranslation();

  const documents = [
    {
      name: locale === 'de' ? 'Audit Preparation SOP' : 'Audit Preparation SOP',
      description: locale === 'de' 
        ? 'Prozedur für systematische Audit-Vorbereitung: Timeline, Verantwortlichkeiten, Kommunikation.'
        : 'Procedure for systematic audit preparation: timeline, responsibilities, communication protocols.',
      format: 'Word (.docx)',
      pages: '6',
    },
    {
      name: locale === 'de' ? 'Audit Preparation Checklist' : 'Audit Preparation Checklist',
      description: locale === 'de'
        ? 'Umfassende Checkliste für alle Vorbereitungsschritte – von 8 Wochen vor bis Audit-Tag.'
        : 'Comprehensive checklist for all preparation steps – from 8 weeks before to audit day.',
      format: 'Word (.docx)',
      pages: '4',
    },
    {
      name: locale === 'de' ? 'Audit Schedule Template' : 'Audit Schedule Template',
      description: locale === 'de'
        ? 'Vorlage für den Audit-Zeitplan mit Bereichen, Auditoren, Ansprechpartnern und Räumen.'
        : 'Template for audit schedule with areas, auditors, contacts, and rooms.',
      format: 'Word (.docx)',
      pages: '2',
    },
    {
      name: locale === 'de' ? 'Document Readiness Tracker' : 'Document Readiness Tracker',
      description: locale === 'de'
        ? 'Excel-Tracker für den Dokumentenstatus aller QMS-Dokumente vor dem Audit.'
        : 'Excel tracker for document status of all QMS documents before the audit.',
      format: 'Excel (.xlsx)',
      pages: '2 Sheets',
    },
    {
      name: locale === 'de' ? 'Finding Response Template' : 'Finding Response Template',
      description: locale === 'de'
        ? 'Vorlage für die strukturierte Beantwortung von Audit-Findings nach dem Audit.'
        : 'Template for structured response to audit findings after the audit.',
      format: 'Word (.docx)',
      pages: '3',
    },
    {
      name: locale === 'de' ? 'Pre-Audit Self-Assessment' : 'Pre-Audit Self-Assessment',
      description: locale === 'de'
        ? 'Internes Self-Assessment nach ISO 13485 Hauptkapiteln – identifiziert Lücken vor dem Auditor.'
        : 'Internal self-assessment based on ISO 13485 main clauses – identifies gaps before the auditor does.',
      format: 'Excel (.xlsx)',
      pages: '3 Sheets',
    },
    {
      name: locale === 'de' ? 'Audit Day Briefing Template' : 'Audit Day Briefing Template',
      description: locale === 'de'
        ? "Vorlage für das Team-Briefing am Audit-Tag: Do's, Don'ts, Kommunikationsregeln."
        : "Template for team briefing on audit day: do's, don'ts, communication rules.",
      format: 'Word (.docx)',
      pages: '2',
    },
    {
      name: locale === 'de' ? 'Quick Reference Card' : 'Quick Reference Card',
      description: locale === 'de'
        ? 'Ein-Seiter für jeden Mitarbeiter: Verhaltensregeln im Audit, Eskalationswege.'
        : 'One-pager for every employee: behavior rules during audit, escalation paths.',
      format: 'PDF',
      pages: '1',
    },
  ];

  const faqs = [
    {
      q: locale === 'de' ? 'Deckt das Kit ISO 13485 und FDA ab?' : 'Does the kit cover ISO 13485 and FDA?',
      a: locale === 'de' 
        ? 'Ja. Die Checklisten und das Self-Assessment basieren auf ISO 13485:2016 und berücksichtigen FDA 21 CFR 820 Anforderungen. Sie sind für Zertifizierungs-, Überwachungs- und Kundenaudits geeignet.'
        : 'Yes. The checklists and self-assessment are based on ISO 13485:2016 and consider FDA 21 CFR 820 requirements. Suitable for certification, surveillance, and customer audits.'
    },
    {
      q: locale === 'de' ? 'Kann ich das Kit auch für interne Audits nutzen?' : 'Can I use the kit for internal audits?',
      a: locale === 'de'
        ? 'Die Vorbereitungs-Checklisten sind primär für externe Audits gedacht. Für interne Audits empfehlen wir das kommende Internal Audit Bundle – oder Sie nutzen das Self-Assessment als Gap-Analyse.'
        : 'The preparation checklists are primarily designed for external audits. For internal audits, we recommend the upcoming Internal Audit Bundle – or use the Self-Assessment as a gap analysis.'
    },
    {
      q: locale === 'de' ? 'Wie funktioniert die Finding-Klassifizierung?' : 'How does finding classification work?',
      a: locale === 'de'
        ? 'Das Finding Response Template enthält eine Bewertungsmatrix für Major/Minor Nonconformities und Observations. Sie hilft bei der Priorisierung und strukturierten Beantwortung.'
        : 'The Finding Response Template includes an assessment matrix for Major/Minor Nonconformities and Observations. It helps with prioritization and structured responses.'
    },
    {
      q: locale === 'de' ? 'Wann sollte ich mit der Vorbereitung beginnen?' : 'When should I start preparation?',
      a: locale === 'de'
        ? 'Die SOP empfiehlt 8 Wochen vor dem Audit. Das Self-Assessment sollten Sie zuerst durchführen – so haben Sie genug Zeit, identifizierte Lücken zu schließen.'
        : 'The SOP recommends 8 weeks before the audit. Run the Self-Assessment first – this gives you enough time to close identified gaps.'
    },
    {
      q: locale === 'de' ? 'In welcher Sprache sind die Dokumente?' : 'What language are the documents in?',
      a: locale === 'de'
        ? 'Englisch – passend für internationale Zertifizierungsaudits. Die Struktur ist aber leicht zu übersetzen, falls Sie deutsche Versionen benötigen.'
        : 'English – suitable for international certification audits. The structure is easy to translate if you need localized versions.'
    },
  ];

  const timeline = [
    { 
      time: locale === 'de' ? '8-4 Wochen' : '8-4 Weeks', 
      title: 'Planning', 
      desc: locale === 'de' ? 'Audit-Scope klären, Team informieren, Self-Assessment starten' : 'Clarify audit scope, inform team, start self-assessment'
    },
    { 
      time: locale === 'de' ? '4-2 Wochen' : '4-2 Weeks', 
      title: 'Documentation', 
      desc: locale === 'de' ? 'Dokumente prüfen, Lücken schließen, Tracker aktualisieren' : 'Review documents, close gaps, update tracker'
    },
    { 
      time: locale === 'de' ? '2-1 Woche' : '2-1 Week', 
      title: 'Team Prep', 
      desc: locale === 'de' ? 'Briefings durchführen, Rollen klären, Übungen' : 'Conduct briefings, clarify roles, run exercises'
    },
    { 
      time: locale === 'de' ? 'Audit-Tag' : 'Audit Day', 
      title: 'Execution', 
      desc: locale === 'de' ? 'Opening Meeting, Begleitung, Dokumentation, Closing' : 'Opening meeting, accompaniment, documentation, closing'
    },
  ];

  const whyItems = [
    { 
      icon: '📋', 
      title: locale === 'de' ? 'Strukturiert' : 'Structured', 
      desc: locale === 'de' 
        ? 'Klare Timeline von 8 Wochen vor dem Audit bis zum Closing. Keine Ad-hoc-Aktionen mehr.' 
        : 'Clear timeline from 8 weeks before the audit to closing. No more ad-hoc actions.'
    },
    { 
      icon: '🔍', 
      title: 'Self-Assessment', 
      desc: locale === 'de' 
        ? 'Finden Sie Lücken bevor der Auditor sie findet. Basierend auf ISO 13485 Hauptkapiteln.' 
        : 'Find gaps before the auditor does. Based on ISO 13485 main clauses.'
    },
    { 
      icon: '👥', 
      title: 'Team-ready', 
      desc: locale === 'de' 
        ? 'Briefing-Templates und Quick Reference Card für alle Mitarbeiter – jeder weiß, was zu tun ist.' 
        : 'Briefing templates and Quick Reference Card for all employees – everyone knows what to do.'
    },
  ];

  return (
    <>
      <Head>
        <title>{locale === 'de' ? 'Audit Preparation Kit | ISO 13485 Zertifizierungsaudit vorbereiten | QCore' : 'Audit Preparation Kit | ISO 13485 Certification Audit Prep | QCore'}</title>
        <meta name="description" content={locale === 'de' ? 'Audit Preparation Kit für MedTech: Checklisten, Self-Assessment, Finding Response Templates. Systematisch vorbereitet auf ISO 13485 Zertifizierungsaudits. €79.' : 'Audit Preparation Kit for MedTech: checklists, self-assessment, finding response templates. Systematically prepared for ISO 13485 certification audits. €79.'} />
      </Head>
      
      <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
      
      <Navigation />
      <main className="relative min-h-screen">
        {/* Breadcrumb */}
        <section className="relative pt-20 pb-2">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <nav className="text-sm" style={{ color: '#64748b' }}>
              <Link href="/produkte" className="hover:underline">{locale === 'de' ? 'Produkte' : 'Products'}</Link>
              <span className="mx-2">→</span>
              <span style={{ color: '#1e293b' }}>Audit Preparation Kit</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative pt-4 pb-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="grid lg:grid-cols-5 gap-8 items-start">
              {/* Left: Info (3 cols) */}
              <div className="lg:col-span-3">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded text-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}>ISO 13485</span>
                  <span className="px-3 py-1 rounded text-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}>FDA 21 CFR 820</span>
                  <span className="px-3 py-1 rounded text-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}>{locale === 'de' ? 'Zertifizierungsaudit' : 'Certification Audit'}</span>
                </div>
                
                <h1 
                  className="text-4xl md:text-5xl mb-4"
                  style={{
                    fontFamily: "'Cormorant', serif",
                    color: '#0f172a',
                    fontWeight: 600,
                    textShadow: '0 1px 2px rgba(255,255,255,0.5)'
                  }}
                >
                  Audit Preparation Kit
                </h1>
                
                <p className="text-xl mb-6" style={{ color: '#334155' }}>
                  {locale === 'de' 
                    ? '8 Dokumente für systematische Audit-Vorbereitung. Von 8 Wochen vorher bis zum Audit-Tag – nichts vergessen.'
                    : '8 documents for systematic audit preparation. From 8 weeks before to audit day – nothing forgotten.'}
                </p>

                {/* Key Benefits */}
                <div 
                  className="backdrop-blur-sm p-5 rounded-lg border mb-6"
                  style={cardStyle}
                >
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: '#1e3a8a' }}>8</div>
                      <div className="text-sm" style={{ color: '#475569' }}>{locale === 'de' ? 'Dokumente' : 'Documents'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: '#1e3a8a' }}>~55</div>
                      <div className="text-sm" style={{ color: '#475569' }}>{locale === 'de' ? 'Seiten' : 'Pages'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: '#1e3a8a' }}>Word & Excel</div>
                      <div className="text-sm" style={{ color: '#475569' }}>{locale === 'de' ? 'Editierbar' : 'Editable'}</div>
                    </div>
                  </div>
                </div>

                {/* Problem/Solution */}
                <div className="space-y-4">
                  <div 
                    className="backdrop-blur-sm border-l-4 p-4 rounded-r-lg"
                    style={{ backgroundColor: 'rgba(254, 202, 202, 0.3)', borderColor: '#f87171' }}
                  >
                    <p className="font-semibold mb-1" style={{ color: '#991b1b' }}>{locale === 'de' ? 'Das Problem:' : 'The problem:'}</p>
                    <p className="text-sm" style={{ color: '#7f1d1d' }}>
                      {locale === 'de'
                        ? 'Audit-Vorbereitung ist stressig. Teams arbeiten bis zur letzten Minute an Dokumenten, Mitarbeiter sind unsicher was sie sagen dürfen, und niemand weiß genau, wo die Lücken sind.'
                        : "Audit preparation is stressful. Teams work on documents until the last minute, employees are unsure what they can say, and nobody knows exactly where the gaps are."}
                    </p>
                  </div>

                  <div 
                    className="backdrop-blur-sm border-l-4 p-4 rounded-r-lg"
                    style={{ backgroundColor: 'rgba(187, 247, 208, 0.3)', borderColor: '#4ade80' }}
                  >
                    <p className="font-semibold mb-1" style={{ color: '#166534' }}>{locale === 'de' ? 'Die Lösung:' : 'The solution:'}</p>
                    <p className="text-sm" style={{ color: '#15803d' }}>
                      {locale === 'de'
                        ? 'Ein strukturierter Vorbereitungsprozess mit Timeline, Self-Assessment zur Lückenidentifikation, und klaren Briefing-Unterlagen für alle Beteiligten.'
                        : 'A structured preparation process with timeline, self-assessment for gap identification, and clear briefing materials for all involved.'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Buy Box (2 cols) */}
              <div className="lg:col-span-2 lg:sticky lg:top-24">
                <div 
                  className="backdrop-blur-sm border rounded-lg p-6 shadow-lg"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', borderColor: 'rgba(30, 58, 138, 0.2)' }}
                >
                  <div className="text-center mb-6">
                    <span className="text-4xl font-bold" style={{ color: '#1e3a8a' }}>€79</span>
                    <span className="text-sm ml-2" style={{ color: '#64748b' }}>{locale === 'de' ? 'einmalig' : 'one-time'}</span>
                  </div>

                  <a 
                    href="https://qcore33.gumroad.com/l/wcevjy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90 mb-3"
                    style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}
                  >
                    🇬🇧 {locale === 'de' ? 'Jetzt kaufen' : 'Buy now'}
                  </a>

                  <p className="text-xs text-center mb-4" style={{ color: '#64748b' }}>
                    {locale === 'de' ? 'Sichere Zahlung via Gumroad · Sofortiger Download' : 'Secure payment via Gumroad · Instant download'}
                  </p>

                  <div className="border-t pt-4" style={{ borderColor: 'rgba(30, 58, 138, 0.15)' }}>
                    <p className="font-semibold mb-3 text-sm" style={{ color: '#1e293b' }}>{locale === 'de' ? 'Im Kit enthalten:' : 'Included in the bundle:'}</p>
                    <ul className="text-sm space-y-2">
                      {(locale === 'de' 
                        ? ['8 Dokumente (Word, Excel, PDF)', 'Self-Assessment nach ISO 13485', 'Finding Response Templates', 'Firmenweite Lizenz']
                        : ['8 Documents (Word, Excel, PDF)', 'Self-Assessment based on ISO 13485', 'Finding Response Templates', 'Company-wide license']
                      ).map((item, i) => (
                        <li key={i} className="flex items-center" style={{ color: '#334155' }}>
                          <span className="mr-2" style={{ color: '#22c55e' }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bundle Hint */}
                  <div 
                    className="mt-4 p-3 rounded-lg text-sm"
                    style={{ backgroundColor: 'rgba(30, 58, 138, 0.08)' }}
                  >
                    <p style={{ color: '#475569' }}>
                      <strong style={{ color: '#1e3a8a' }}>💡 {locale === 'de' ? 'Komplettpaket:' : 'Complete package:'}</strong> {locale === 'de' ? 'Alle 3 Bundles zusammen für €307 statt €349.' : 'All 3 bundles together for €307 instead of €349.'}{' '}
                      <Link href="/kontakt" className="underline" style={{ color: '#1e3a8a' }}>
                        {locale === 'de' ? 'Anfragen →' : 'Inquire →'}
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Preview - Embedded PDF */}
        <section className="relative py-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h2 
              className="text-3xl mb-6"
              style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}
            >
              {locale === 'de' ? 'Vorschau: Audit Preparation SOP' : 'Preview: Audit Preparation SOP'}
            </h2>
            
            <div 
              className="backdrop-blur-sm border rounded-lg overflow-hidden"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: 'rgba(30, 58, 138, 0.2)' }}
            >
              {/* PDF Header */}
              <div 
                className="px-6 py-4 border-b flex items-center justify-between"
                style={{ backgroundColor: 'rgba(30, 58, 138, 0.08)', borderColor: 'rgba(30, 58, 138, 0.15)' }}
              >
                <div>
                  <p className="font-semibold" style={{ color: '#1e293b' }}>SOP-AUD-001 | Audit Preparation</p>
                  <p className="text-xs" style={{ color: '#64748b' }}>{locale === 'de' ? 'Sample Preview – Inhaltsverzeichnis & Struktur' : 'Sample Preview – Table of Contents & Structure'}</p>
                </div>
                <a 
                  href="/docs/samples/QCore_Audit-Prep_Sample.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded text-xs font-medium flex items-center gap-1 hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}
                >
                  {locale === 'de' ? 'PDF öffnen ↗' : 'Open PDF ↗'}
                </a>
              </div>

              {/* Embedded PDF */}
              <div className="relative" style={{ height: '600px' }}>
                <iframe 
                  src="/docs/samples/QCore_Audit-Prep_Sample.pdf#view=FitH"
                  className="w-full h-full"
                  title="Audit Preparation SOP Sample Preview"
                  style={{ border: 'none' }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Documents Detail */}
        <section className="relative py-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h2 
              className="text-3xl mb-6"
              style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}
            >
              {locale === 'de' ? 'Alle 8 Dokumente im Kit' : 'All 8 documents in the kit'}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-4">
              {documents.map((doc, index) => (
                <div 
                  key={index}
                  className="backdrop-blur-sm p-5 rounded-lg border"
                  style={cardStyle}
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-semibold" style={{ color: '#1e293b' }}>
                      {index + 1}. {doc.name}
                    </h3>
                    <div className="flex gap-2">
                      <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#64748b' }}>
                        {doc.format}
                      </span>
                      <span className="text-xs px-2 py-1 rounded" style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#64748b' }}>
                        {doc.pages} {doc.pages === '1' ? (locale === 'de' ? 'Seite' : 'Page') : doc.pages.includes('Sheet') ? '' : (locale === 'de' ? 'Seiten' : 'Pages')}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: '#475569' }}>
                    {doc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Visual */}
        <section className="relative py-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h2 
              className="text-3xl mb-6"
              style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}
            >
              {locale === 'de' ? 'Audit-Vorbereitung Timeline' : 'Audit Preparation Timeline'}
            </h2>
            
            <div 
              className="backdrop-blur-sm p-6 rounded-lg border"
              style={cardStyle}
            >
              <div className="grid md:grid-cols-4 gap-4">
                {timeline.map((phase, i) => (
                  <div key={i} className="text-center">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                      style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)' }}
                    >
                      <span className="font-bold" style={{ color: '#1e3a8a' }}>{i + 1}</span>
                    </div>
                    <p className="text-xs font-medium mb-1" style={{ color: '#1e3a8a' }}>{phase.time}</p>
                    <p className="font-semibold mb-1" style={{ color: '#1e293b' }}>{phase.title}</p>
                    <p className="text-xs" style={{ color: '#475569' }}>{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why this kit */}
        <section className="relative py-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h2 
              className="text-3xl mb-6"
              style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}
            >
              {locale === 'de' ? 'Warum dieses Kit?' : 'Why this kit?'}
            </h2>
            
            <div className="grid md:grid-cols-3 gap-4">
              {whyItems.map((item, i) => (
                <div 
                  key={i}
                  className="backdrop-blur-sm p-5 rounded-lg border"
                  style={cardStyle}
                >
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <h3 className="font-semibold mb-2" style={{ color: '#1e293b' }}>{item.title}</h3>
                  <p className="text-sm" style={{ color: '#475569' }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="relative py-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h2 
              className="text-3xl mb-6"
              style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}
            >
              {locale === 'de' ? 'Häufige Fragen' : 'Frequently Asked Questions'}
            </h2>
            
            <div className="space-y-3 max-w-3xl">
              {faqs.map((faq, i) => (
                <div 
                  key={i}
                  className="backdrop-blur-sm rounded-lg border overflow-hidden"
                  style={cardStyle}
                >
                  <button
                    onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
                    className="w-full text-left p-4 flex items-center justify-between"
                  >
                    <span className="font-semibold" style={{ color: '#1e293b' }}>{faq.q}</span>
                    <span 
                      className="text-sm transition-transform"
                      style={{ 
                        color: '#64748b',
                        transform: openFAQ === i ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    >
                      ▼
                    </span>
                  </button>
                  {openFAQ === i && (
                    <div className="px-4 pb-4">
                      <p className="text-sm" style={{ color: '#475569' }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative py-8 pb-16">
          <div className="relative z-10 max-w-[90%] mx-auto px-8 text-center">
            <div 
              className="backdrop-blur-sm rounded-lg border p-8 max-w-2xl mx-auto"
              style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', borderColor: 'rgba(30, 58, 138, 0.2)' }}
            >
              <h2 
                className="text-2xl mb-4"
                style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}
              >
                {locale === 'de' ? 'Bereit für Ihr nächstes Audit?' : 'Ready for your next audit?'}
              </h2>
              <p className="mb-6" style={{ color: '#475569' }}>
                {locale === 'de' 
                  ? '€79 für strukturierte Vorbereitung – damit das Audit keine Überraschungen bringt.'
                  : '€79 for structured preparation – so the audit brings no surprises.'}
              </p>
              <a 
                href="https://qcore33.gumroad.com/l/wcevjy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}
              >
                {locale === 'de' ? 'Jetzt kaufen – €79' : 'Buy now – €79'}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
