import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

const servicesDE = [
  {
    id: 'capa-setup',
    title: 'CAPA-System Setup',
    text: 'Komplettes CAPA-System mit SOPs, Formularen, Workflow und Wirksamkeitsnachweisen. Inkl. Einführungs-Call und 30 Tage Support.',
    includes: ['CAPA-Prozess (SOP, Formulare, Workflow)', 'Root Cause Analysis Toolkit', 'Wirksamkeitsnachweis-Templates', 'Einführungs-Call + 30 Tage Support'],
    tags: ['FDA', 'ISO 13485', 'ISO 9001'],
  },
  {
    id: 'fmea-workshop',
    title: 'FMEA-Workshop + Dokumentation',
    text: 'Moderierter FMEA-Workshop für Ihr Produkt oder Ihren Prozess. Ergebnis: fertige FMEA, Risikobewertung und Maßnahmenplan. Remote oder vor Ort.',
    includes: ['Moderierter Workshop (1–2 Tage)', 'Fertige FMEA-Dokumentation', 'Risikobewertung nach ISO 14971', 'Maßnahmenplan mit Verantwortlichkeiten'],
    tags: ['MedTech', 'Pharma', 'Automotive', 'Alle Branchen'],
  },
  {
    id: 'tech-doku',
    title: 'Technische QM-Dokumentation',
    text: 'Erstellung oder Review technischer QM-Dokumente: Spezifikationen, Validierungsberichte, technische Files. Als Physiker verstehe ich die Prozesse, die ich dokumentiere.',
    includes: ['Technische Spezifikationen', 'Validierungsberichte', 'Requirements-Review', 'Revisionsverwaltung'],
    tags: ['Nuklear', 'MedTech', 'Halbleiter', 'Alle Branchen'],
  },
  {
    id: 'gmp-doku',
    title: 'GMP/Pharma-Dokumentation',
    text: 'GMP-konforme Dokumentation: Quality Manual, Validierungsprotokolle, CAPA Reports, DMF-Struktur. Für Pharma, Biotech und verwandte Branchen.',
    includes: ['Quality Manual', 'Validierungsprotokolle', 'CAPA Reports', 'DMF-Struktur'],
    tags: ['GMP', 'GDP', 'Pharma', 'Biotech'],
  },
  {
    id: 'externer-qmb',
    title: 'Externer QMB (Teilzeit)',
    text: 'Externer Qualitätsmanagementbeauftragter auf Teilzeitbasis. QMS-Pflege, Management Reviews, Dokumentenlenkung, CAPA-Nachverfolgung.',
    includes: ['QMS-Pflege & Dokumentenlenkung', 'Management Reviews', 'CAPA/NC Nachverfolgung', 'Flexibel nach Vereinbarung'],
    tags: ['ISO 9001', 'ISO 13485', 'Alle Branchen'],
  },
  {
    id: 'hybrid-bundle',
    title: 'Bundle + Review Call',
    text: 'QCore Template-Bundle (CAPA, NC oder Audit Prep) + persönlicher Review-Call. Gemeinsam Templates anpassen, Fragen klären, Quick Wins identifizieren.',
    includes: ['Template-Bundle Ihrer Wahl', 'Persönlicher Video-Call', 'Anpassung an Ihre Prozesse', 'Quick-Win Empfehlungen'],
    tags: ['Einstieg', 'KMU-Budget', 'Sofort verfügbar'],
  },
  {
    id: 'qmai',
    title: 'QMAI — QM × AI/LLM',
    text: 'Beratung zur Integration von AI/LLM in regulierte Produkte und Prozesse. Gap-Assessment, Validierungs-SOPs für nicht-deterministische Software, Compliance-Roadmaps.',
    includes: ['AI Gap-Assessment', 'SOP: Validierung nicht-deterministischer Software', 'AI Supplier Qualification Framework', 'EU AI Act Compliance-Roadmap'],
    tags: ['EU AI Act', 'FDA PCCP', 'MDR/IVDR'],
    deadline: 'EU AI Act High-Risk: August 2026',
  },
];

const servicesEN = [
  {
    id: 'capa-setup',
    title: 'CAPA System Setup',
    text: 'Complete CAPA system with SOPs, forms, workflow, and effectiveness verification. Includes onboarding call and 30-day support.',
    includes: ['CAPA process (SOP, forms, workflow)', 'Root Cause Analysis toolkit', 'Effectiveness verification templates', 'Onboarding call + 30-day support'],
    tags: ['FDA', 'ISO 13485', 'ISO 9001'],
  },
  {
    id: 'fmea-workshop',
    title: 'FMEA Workshop + Documentation',
    text: 'Facilitated FMEA workshop for your product or process. Deliverable: complete FMEA, risk assessment, and action plan. Remote or on-site.',
    includes: ['Facilitated workshop (1–2 days)', 'Complete FMEA documentation', 'Risk assessment per ISO 14971', 'Action plan with responsibilities'],
    tags: ['MedTech', 'Pharma', 'Automotive', 'All industries'],
  },
  {
    id: 'tech-doku',
    title: 'Technical QM Documentation',
    text: 'Creation or review of technical QM documentation: specifications, validation reports, technical files. As a physicist, I understand the processes I document.',
    includes: ['Technical specifications', 'Validation reports', 'Requirements review', 'Revision management'],
    tags: ['Nuclear', 'MedTech', 'Semiconductor', 'All industries'],
  },
  {
    id: 'gmp-doku',
    title: 'GMP/Pharma Documentation',
    text: 'GMP-compliant documentation: Quality Manual, validation protocols, CAPA reports, DMF structure. For pharma, biotech and related industries.',
    includes: ['Quality Manual', 'Validation protocols', 'CAPA Reports', 'DMF structure'],
    tags: ['GMP', 'GDP', 'Pharma', 'Biotech'],
  },
  {
    id: 'externer-qmb',
    title: 'External QMR (Part-time)',
    text: 'External Quality Management Representative on a part-time basis. QMS maintenance, management reviews, document control, CAPA follow-up.',
    includes: ['QMS maintenance & document control', 'Management reviews', 'CAPA/NC follow-up', 'Flexible as agreed'],
    tags: ['ISO 9001', 'ISO 13485', 'All industries'],
  },
  {
    id: 'hybrid-bundle',
    title: 'Bundle + Review Call',
    text: 'QCore template bundle (CAPA, NC, or Audit Prep) + personal review call. Adapt templates together, answer questions, identify quick wins.',
    includes: ['Template bundle of your choice', 'Personal video call', 'Adaptation to your processes', 'Quick-win recommendations'],
    tags: ['Entry level', 'SME budget', 'Available now'],
  },
  {
    id: 'qmai',
    title: 'QMAI — QM × AI/LLM',
    text: 'Consulting for integrating AI/LLM into regulated products and processes. Gap assessment, validation SOPs for non-deterministic software, compliance roadmaps.',
    includes: ['AI Gap Assessment', 'SOP: Validation of non-deterministic software', 'AI Supplier Qualification Framework', 'EU AI Act compliance roadmap'],
    tags: ['EU AI Act', 'FDA PCCP', 'MDR/IVDR'],
    deadline: 'EU AI Act High-Risk: August 2026',
  },
];

export default function QMBeratung() {
  const router = useRouter();
  const locale = router.locale || 'de';
  const isDE = locale !== 'en';

  const services = isDE ? servicesDE : servicesEN;

  const meta = isDE
    ? {
        title: 'Services | Technisches QM für regulierte Branchen | QCore Consulting',
        description: 'CAPA Setup, FMEA Workshops, Technische Dokumentation, Externer QMB, AI/QM-Beratung. Von einem Physiker und Ingenieur mit 15+ Jahren in Nuklear, MedTech und Halbleiter.',
      }
    : {
        title: 'Services | Technical QM for Regulated Industries | QCore Consulting',
        description: 'CAPA setup, FMEA workshops, technical documentation, external QMR, AI/QM consulting. From a physicist and engineer with 15+ years in nuclear, MedTech and semiconductor.',
      };

  const labels = isDE
    ? {
        heroTitle: 'Services',
        heroSubtitle: 'Technisches QM für regulierte Branchen',
        heroText: 'Physiker und Ingenieur mit 15+ Jahren in Nuklear, MedTech und Halbleiter. Ich verstehe die Prozesse, die ich dokumentiere — und baue QM-Systeme mit LLM-Unterstützung.',
        deadlineLabel: 'Regulatorische Deadline',
      }
    : {
        heroTitle: 'Services',
        heroSubtitle: 'Technical QM for Regulated Industries',
        heroText: 'Physicist and engineer with 15+ years in nuclear, MedTech, and semiconductor. I understand the processes I document — and build QM systems with LLM support.',
        deadlineLabel: 'Regulatory deadline',
      };

  const cardStyle = {
    backgroundColor: 'rgba(30, 58, 138, 0.06)',
    border: '1px solid rgba(30, 58, 138, 0.1)',
    backdropFilter: 'blur(3px)',
  };

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>

      <Navigation />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)',
        }} />
      </div>

      <main className="pt-24 pb-16 px-6 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto">

          {/* Hero */}
          <section className="mb-10">
            <h1
              className="text-4xl lg:text-5xl font-semibold mb-2"
              style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
            >
              {labels.heroTitle}
            </h1>
            <p
              className="text-2xl mb-3"
              style={{ fontFamily: "'Cormorant', serif", color: '#334155' }}
            >
              {labels.heroSubtitle}
            </p>
            <p className="text-lg max-w-3xl" style={{ color: '#475569' }}>
              {labels.heroText}
            </p>
          </section>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {services.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg flex flex-col"
                style={cardStyle}
              >
                {/* Header */}
                <div className="mb-3">
                  <h2
                    className="text-xl font-semibold leading-tight"
                    style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                  >
                    {service.title}
                  </h2>
                </div>

                {/* Description */}
                <p className="text-sm mb-4 leading-relaxed" style={{ color: '#334155' }}>
                  {service.text}
                </p>

                {/* Includes */}
                <div className="flex-1">
                  <div className="space-y-1.5">
                    {service.includes.map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <span className="text-xs mt-1 flex-shrink-0" style={{ color: '#1e3a8a' }}>▸</span>
                        <span className="text-sm" style={{ color: '#475569' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deadline */}
                {service.deadline && (
                  <div
                    className="mt-4 px-3 py-2 rounded-lg text-xs"
                    style={{ backgroundColor: 'rgba(220, 38, 38, 0.06)', border: '1px solid rgba(220, 38, 38, 0.15)', color: '#991b1b' }}
                  >
                    {labels.deadlineLabel}: {service.deadline}
                  </div>
                )}

                {/* Tags */}
                <div className="mt-4 pt-3 flex flex-wrap gap-1.5" style={{ borderTop: '1px solid rgba(30, 58, 138, 0.1)' }}>
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-0.5 rounded-full text-xs"
                      style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>



        </div>
      </main>

      <Footer />
    </>
  );
}
