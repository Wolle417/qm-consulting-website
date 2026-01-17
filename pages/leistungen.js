import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useTranslation } from '../hooks/useTranslation';

const servicesDE = [
  {
    title: 'QM-System Aufbau & Zertifizierung',
    problem: 'Sie brauchen eine ISO-Zertifizierung – für Kunden, Ausschreibungen oder regulatorische Anforderungen. Aber intern fehlt die Zeit, das Know-how oder beides.',
    solution: 'Ich baue mit Ihnen ein QM-System, das zu Ihrem Unternehmen passt – schlank, praktikabel, zertifizierungsfähig. Keine Copy-Paste-Vorlagen, sondern Prozesse, die Ihre Mitarbeiter verstehen und leben können.',
    steps: [
      'Kostenlose Erstberatung (30 Min)',
      'Gap-Analyse: Wo stehen Sie?',
      'Konzept & Zeitplan',
      'Umsetzung: Prozesse, Dokumentation, Schulung',
      'Internes Audit & Feinschliff',
      'Begleitung beim Zertifizierungsaudit',
    ],
    result: 'Ein funktionierendes QM-System, das Zertifikat in der Hand, und ein Team, das die Prozesse versteht.',
    tags: ['ISO 9001', 'ISO 13485', 'GMP'],
  },
  {
    title: 'Audit-Vorbereitung & Begleitung',
    problem: 'Das Audit steht vor der Tür – in 4 Wochen, vielleicht 8. Die Dokumentation hat Lücken, die letzte Management-Bewertung ist überfällig, und niemand weiß genau, was der Auditor fragen wird.',
    solution: 'Systematische Vorbereitung statt Aktionismus. Ich identifiziere die kritischen Lücken, priorisiere nach Audit-Relevanz, und bereite Ihr Team auf typische Fragen vor. Optional: Mock-Audit.',
    steps: [
      'Kick-off: Audit-Termin, Scope, bisherige Findings',
      'Dokumenten-Review: Was fehlt, was ist veraltet?',
      'Priorisierte Maßnahmenliste',
      'Umsetzungsbegleitung',
      'Mock-Audit mit realistischen Fragen',
      'Audit-Begleitung vor Ort (optional)',
    ],
    result: 'Sie gehen vorbereitet ins Audit. Keine bösen Überraschungen, weniger Stress, bessere Ergebnisse.',
    tags: ['Überwachungsaudits', 'Re-Zertifizierungen', 'Kundenaudits', 'Behördeninspektionen'],
  },
  {
    title: 'Technische Dokumentation & Risikoanalyse',
    problem: 'Die Norm fordert eine FMEA, einen Validierungsbericht, eine technische Akte – aber wer soll das schreiben? Ihre Entwickler entwickeln lieber, als Dokumente zu wälzen.',
    solution: 'Ich erstelle oder überarbeite Ihre technische Dokumentation – als Ingenieur, der die Technik versteht. Keine Textbausteine, sondern Dokumente, die zum Produkt passen und vor Auditoren bestehen.',
    steps: [
      'FMEA (Design-FMEA, Prozess-FMEA)',
      'Risikoanalysen nach ISO 14971',
      'Technische Akten / Design History Files',
      'Validierungsprotokolle (IQ/OQ/PQ)',
      'Prozessbeschreibungen & Arbeitsanweisungen',
    ],
    result: 'Lückenlose, normkonforme Dokumentation – und Entwickler, die sich auf ihre eigentliche Arbeit konzentrieren können.',
    tags: ['Medizintechnik', 'Pharma', 'Regulierte Fertigung'],
    stepsLabel: 'Leistungen',
  },
  {
    title: 'Schulungen & Workshops',
    problem: 'QM-Systeme funktionieren nur, wenn die Mitarbeiter sie verstehen. Aber die letzte Schulung war vor drei Jahren, neue Kollegen wurden "nebenbei" eingewiesen.',
    solution: 'Praxisnahe Schulungen, die hängen bleiben. Keine PowerPoint-Marathons, sondern interaktive Workshops mit echten Beispielen aus Ihrer Branche.',
    steps: [
      'QM-Grundlagen für neue Mitarbeiter',
      'FMEA-Workshop (mit praktischer Übung)',
      'Audit-Training: Verhalten im Audit',
      'Dokumentenlenkung & Änderungsmanagement',
      'CAPA: Korrektur- und Vorbeugemaßnahmen',
    ],
    result: 'Mitarbeiter, die QM verstehen – nicht nur die Unterschrift auf dem Teilnahmezertifikat.',
    tags: ['Vor-Ort', 'Remote', 'Einzel-Coaching'],
    stepsLabel: 'Themen',
  },
];

const servicesEN = [
  {
    title: 'QMS Setup & Certification',
    problem: 'You need ISO certification – for customers, tenders, or regulatory requirements. But internally, there\'s no time, no know-how, or both.',
    solution: 'I\'ll build a QMS with you that fits your company – lean, practical, ready for certification. No copy-paste templates, but processes your employees understand and can actually follow.',
    steps: [
      'Free initial consultation (30 min)',
      'Gap analysis: Where do you stand?',
      'Concept & timeline',
      'Implementation: Processes, documentation, training',
      'Internal audit & fine-tuning',
      'Certification audit support',
    ],
    result: 'A working QMS, certificate in hand, and a team that understands the processes.',
    tags: ['ISO 9001', 'ISO 13485', 'GMP'],
  },
  {
    title: 'Audit Preparation & Support',
    problem: 'The audit is coming – in 4 weeks, maybe 8. Documentation has gaps, the last management review is overdue, and nobody knows exactly what the auditor will ask.',
    solution: 'Systematic preparation instead of panic. I identify critical gaps, prioritize by audit relevance, and prepare your team for typical questions. Optional: Mock audit.',
    steps: [
      'Kick-off: Audit date, scope, previous findings',
      'Document review: What\'s missing, what\'s outdated?',
      'Prioritized action list',
      'Implementation support',
      'Mock audit with realistic questions',
      'On-site audit support (optional)',
    ],
    result: 'You go into the audit prepared. No surprises, less stress, better results.',
    tags: ['Surveillance audits', 'Re-certifications', 'Customer audits', 'Regulatory inspections'],
  },
  {
    title: 'Technical Documentation & Risk Analysis',
    problem: 'The standard requires an FMEA, validation report, technical file – but who\'s going to write it? Your engineers prefer developing to wrestling with documents.',
    solution: 'I create or revise your technical documentation – as an engineer who understands the technology. No boilerplate, but documents that fit your product and pass auditor scrutiny.',
    steps: [
      'FMEA (Design FMEA, Process FMEA)',
      'Risk analyses per ISO 14971',
      'Technical files / Design History Files',
      'Validation protocols (IQ/OQ/PQ)',
      'Process descriptions & work instructions',
    ],
    result: 'Complete, compliant documentation – and engineers who can focus on their actual work.',
    tags: ['Medical Devices', 'Pharma', 'Regulated Manufacturing'],
    stepsLabel: 'Services',
  },
  {
    title: 'Training & Workshops',
    problem: 'QMS only work when employees understand them. But the last training was three years ago, new colleagues were trained "on the side".',
    solution: 'Practical training that sticks. No PowerPoint marathons, but interactive workshops with real examples from your industry.',
    steps: [
      'QM basics for new employees',
      'FMEA workshop (with hands-on exercise)',
      'Audit training: Behavior during audits',
      'Document control & change management',
      'CAPA: Corrective and Preventive Actions',
    ],
    result: 'Employees who understand QM – not just a signature on a training certificate.',
    tags: ['On-site', 'Remote', 'Individual coaching'],
    stepsLabel: 'Topics',
  },
];

export default function Leistungen() {
  const { t, locale } = useTranslation();
  const services = locale === 'de' ? servicesDE : servicesEN;
  
  const labels = locale === 'de' 
    ? { title: 'Leistungen', subtitle: 'Qualitätsmanagement, das funktioniert – nicht nur auf dem Papier.', problem: 'Das Problem', solution: 'Meine Lösung', result: 'Das Ergebnis', typicalProcess: 'Typischer Ablauf', ctaTitle: 'Welche Unterstützung brauchen Sie?', ctaText: 'In einem kostenlosen Erstgespräch klären wir, wo Sie stehen und wie ich helfen kann.', ctaButton: 'Kostenloses Erstgespräch' }
    : { title: 'Services', subtitle: 'Quality management that works – not just on paper.', problem: 'The Problem', solution: 'My Solution', result: 'The Result', typicalProcess: 'Typical Process', ctaTitle: 'What support do you need?', ctaText: 'In a free initial consultation, we\'ll clarify where you stand and how I can help.', ctaButton: 'Free Consultation' };

  return (
    <>
      <Head>
        <title>{t('services.meta.title')}</title>
        <meta name="description" content={t('services.meta.description')} />
      </Head>
      <Navigation />
      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h1 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{
                fontFamily: "'Cormorant', serif",
                color: '#1e293b',
              }}
            >
              {labels.title}
            </h1>
            <p className="text-xl max-w-3xl" style={{ color: '#475569' }}>
              {labels.subtitle}
            </p>
          </div>
        </section>

        {/* Services */}
        {services.map((service, index) => (
          <section key={index} className="relative py-6">
            <div className="relative z-10 max-w-[90%] mx-auto px-8">
              <h2 
                className="text-3xl md:text-4xl font-bold mb-6"
                style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
              >
                {service.title}
              </h2>
              
              <div className="bg-qcore-navy bg-opacity-30 hover:bg-opacity-45 transition-all duration-300 backdrop-blur-[3px] p-8 rounded-lg cursor-default">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Links: Problem & Lösung */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center" style={{ color: '#1e293b' }}>
                      <span className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.2)', color: '#1e3a8a' }}>?</span>
                      {labels.problem}
                    </h3>
                    <p className="mb-6 ml-11" style={{ color: '#334155' }}>{service.problem}</p>
                    
                    <h3 className="text-lg font-semibold mb-2 flex items-center" style={{ color: '#1e293b' }}>
                      <span className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.2)', color: '#1e3a8a' }}>→</span>
                      {labels.solution}
                    </h3>
                    <p className="mb-6 ml-11" style={{ color: '#334155' }}>{service.solution}</p>
                    
                    <h3 className="text-lg font-semibold mb-2 flex items-center" style={{ color: '#1e293b' }}>
                      <span className="w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm" style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#15803d' }}>✓</span>
                      {labels.result}
                    </h3>
                    <p className="ml-11" style={{ color: '#334155' }}>{service.result}</p>
                  </div>
                  
                  {/* Rechts: Ablauf/Leistungen */}
                  <div className="bg-white bg-opacity-20 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4" style={{ color: '#1e293b' }}>
                      {service.stepsLabel || labels.typicalProcess}
                    </h3>
                    <div className="space-y-2">
                      {service.steps.map((step, i) => (
                        <div key={i} className="flex items-start">
                          <span 
                            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold mr-3 mt-0.5 flex-shrink-0"
                            style={{ backgroundColor: '#1e3a8a', color: '#fff' }}
                          >
                            {i + 1}
                          </span>
                          <span style={{ color: '#334155' }}>{step}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-gray-300 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 rounded-full text-xs"
                          style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="relative py-12">
          <div className="relative z-10 max-w-[90%] mx-auto px-8 text-center">
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
            >
              {labels.ctaTitle}
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: '#475569' }}>
              {labels.ctaText}
            </p>
            <Link
              href="/kontakt"
              className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
              style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}
            >
              {labels.ctaButton}
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
