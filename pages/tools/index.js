import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

const toolsDE = [
  {
    id: 'nc-triage',
    title: 'NC-Triage + Justifier',
    href: '/nc-triage',
    text: 'CAPA oder Korrektur? Systematische Entscheidungshilfe mit audit-sicherer Begründung. In unter 3 Minuten zur dokumentierten, normkonformen Bewertung Ihrer Nichtkonformität.',
    includes: ['Strukturierter Entscheidungsbaum', 'Automatische Begründung (Copy & Paste)', 'Risiko- und Wiederholungsbewertung', 'Normreferenz: ISO 13485, FDA 820'],
    tags: ['MedTech', 'Pharma', 'ISO 13485', 'FDA'],
  },
  {
    id: 'stichprobe',
    title: 'Stichprobenrechner',
    href: '/tools/stichprobe',
    text: 'AQL nach ISO 2859-1, Confidence/Reliability für Prozessvalidierung, Cpk-Nachweis. Drei Module in einem Tool — mit Normreferenz, Formel und kopierbarem Prüfbericht.',
    includes: ['Wareneingangsprüfung (AQL)', 'Validierungsstichprobe (C/R)', 'Risikoklassen-Orientierung', 'Audit-fertiger Report-Export'],
    tags: ['ISO 2859-1', 'ISO 16269-6', 'Prozessvalidierung'],
  },
  {
    id: 'qm-wissen',
    title: 'QM-Wissen',
    href: '/qm-wissen',
    text: 'Praxisnahe Artikel zu den Kernthemen im regulierten Qualitätsmanagement. Klar strukturiert, normbasiert, verständlich erklärt — als Nachschlagewerk für den Arbeitsalltag.',
    includes: ['CAPA, FMEA, Root Cause Analysis', 'ISO 13485 Kernprozesse', 'Risikomanagement nach ISO 14971', 'Prozessvalidierung & Statistik'],
    tags: ['ISO 13485', 'CAPA', 'FMEA', 'Artikel'],
  },
];

const toolsEN = [
  {
    id: 'nc-triage',
    title: 'NC Triage + Justifier',
    href: '/nc-triage',
    text: 'CAPA or correction? Systematic decision support with audit-safe justification. Get a documented, standards-compliant assessment of your nonconformity in under 3 minutes.',
    includes: ['Structured decision tree', 'Automatic justification (copy & paste)', 'Risk and recurrence assessment', 'Norm reference: ISO 13485, FDA 820'],
    tags: ['MedTech', 'Pharma', 'ISO 13485', 'FDA'],
  },
  {
    id: 'stichprobe',
    title: 'Sample Size Calculator',
    href: '/tools/stichprobe',
    text: 'AQL per ISO 2859-1, confidence/reliability for process validation, Cpk demonstration. Three modules in one tool — with norm references, formulas, and copyable inspection reports.',
    includes: ['Incoming inspection (AQL)', 'Validation sample size (C/R)', 'Risk class orientation', 'Audit-ready report export'],
    tags: ['ISO 2859-1', 'ISO 16269-6', 'Process Validation'],
  },
  {
    id: 'qm-wissen',
    title: 'QM Knowledge',
    href: '/qm-wissen',
    text: 'Practical articles on core topics in regulated quality management. Clearly structured, standards-based, and easy to understand — as a reference for daily work.',
    includes: ['CAPA, FMEA, Root Cause Analysis', 'ISO 13485 core processes', 'Risk management per ISO 14971', 'Process validation & statistics'],
    tags: ['ISO 13485', 'CAPA', 'FMEA', 'Articles'],
  },
];

export default function ToolsHub() {
  const { locale } = useRouter();
  const isDE = locale !== 'en';
  const items = isDE ? toolsDE : toolsEN;

  const cardStyle = {
    backgroundColor: 'rgba(30, 58, 138, 0.06)',
    border: '1px solid rgba(30, 58, 138, 0.1)',
    backdropFilter: 'blur(3px)',
  };

  return (
    <>
      <Head>
        <title>{isDE ? 'Kostenlose QM-Tools & Wissen | QCore Consulting' : 'Free QM Tools & Knowledge | QCore Consulting'}</title>
        <meta
          name="description"
          content={isDE
            ? 'Kostenlose QM-Tools: Stichprobenrechner, NC-Triage, QM-Wissensartikel. Normgerecht, audit-sicher, ohne Registrierung.'
            : 'Free QM tools: sample size calculator, NC triage, QM knowledge articles. Standards-compliant, audit-ready, no registration.'}
        />
        <link rel="canonical" href={`https://qcore-consulting.de/${locale === 'en' ? 'en/' : ''}tools`} />
      </Head>

      <Navigation />

      <main className="pt-24 pb-16 px-6 lg:px-16 xl:px-24 relative" style={{ zIndex: 2 }}>
        <div className="max-w-[1600px] mx-auto">

          {/* Hero */}
          <section className="mb-10">
            <h1
              className="text-4xl lg:text-5xl mb-2"
              style={{ fontFamily: "'Cormorant', serif", color: '#0f172a', fontWeight: 400 }}
            >
              Tools
            </h1>
            <p
              className="text-2xl"
              style={{ fontFamily: "'Cormorant', serif", color: '#334155' }}
            >
              {isDE
                ? 'Kostenlose Werkzeuge für QM-Professionals'
                : 'Free tools for QM professionals'}
            </p>
          </section>

          {/* Tools Grid — matching Consulting page density */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {items.map((tool) => (
              <Link
                key={tool.id}
                href={tool.href}
                className="block p-6 rounded-xl transition-all duration-300 hover:shadow-lg flex flex-col"
                style={cardStyle}
              >
                <div className="mb-3">
                  <h2
                    className="text-xl leading-tight"
                    style={{ fontFamily: "'Cormorant', serif", color: '#0f172a', fontWeight: 600 }}
                  >
                    {tool.title}
                  </h2>
                </div>

                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#334155' }}>
                  {tool.text}
                </p>

                <div className="flex-1">
                  <div className="space-y-1.5">
                    {tool.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-xs mt-1 flex-shrink-0" style={{ color: '#1e3a8a' }}>▸</span>
                        <span className="text-sm" style={{ color: '#475569' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 flex flex-wrap gap-1.5" style={{ borderTop: '1px solid rgba(30, 58, 138, 0.1)' }}>
                  {tool.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs"
                      style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
