import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Risikomanagement() {
  const router = useRouter();
  const locale = router.locale || 'de';
  
  const t = {
    de: {
      meta: {
        title: 'Risikomanagement & FMEA | ISO 14971 | QCore Consulting',
        description: 'Professionelle Risikoanalysen für MedTech und Pharma. Design-FMEA, Prozess-FMEA, ISO 14971 – von einem Ingenieur, der die Technik versteht.'
      },
      hero: {
        title: 'Risikomanagement',
        subtitle: 'Risikoanalysen, die Auditoren überzeugen',
        text: '"Human Error" ist keine Root Cause. Oberflächliche Analysen erkennt jeder Auditor sofort. Ich erstelle Risikoanalysen, die technisch fundiert sind – nicht nur Checkboxen auf einem Formular.'
      },
      cta: 'Kontakt aufnehmen',
      services: [
        {
          title: 'Design-FMEA',
          
          text: 'Systematische Analyse von Designrisiken in der Entwicklungsphase. Welche Fehler können auftreten, was sind die Auswirkungen, wie verhindern wir sie?',
          tags: ['Produktentwicklung', 'Neue Designs', 'Design Changes']
        },
        {
          title: 'Prozess-FMEA',
          
          text: 'Analyse von Fertigungs- und Prozessrisiken. Wo kann der Prozess versagen, wie erkennen wir es, wie stellen wir Qualität sicher?',
          tags: ['Fertigung', 'Montage', 'Prüfprozesse']
        },
        {
          title: 'ISO 14971 Risikoakte',
          
          text: 'Komplette Risikomanagement-Dokumentation für Medizinprodukte nach ISO 14971. Risikomanagementplan, Hazard Analysis, Risiko-Nutzen-Bewertung.',
          tags: ['Medical Devices', 'MDR', 'FDA']
        },
        {
          title: 'Hazard Analysis',
          
          text: 'Gefährdungsanalysen für sicherheitskritische Systeme. Identifikation von Gefährdungen, Ursachenanalyse, Risikobewertung.',
          tags: ['Nuklear', 'Pharma', 'Sicherheitskritisch']
        }
      ]
    },
    en: {
      meta: {
        title: 'Risk Management & FMEA | ISO 14971 | QCore Consulting',
        description: 'Professional risk analyses for MedTech and Pharma. Design FMEA, Process FMEA, ISO 14971 – from an engineer who understands the technology.'
      },
      hero: {
        title: 'Risk Management',
        subtitle: 'Risk analyses that convince auditors',
        text: '"Human Error" is not a root cause. Every auditor spots superficial analyses immediately. I create risk analyses that are technically sound – not just checkboxes on a form.'
      },
      cta: 'Get in touch',
      services: [
        {
          title: 'Design FMEA',
          text: 'Systematic analysis of design risks during development. What failures can occur, what are the effects, how do we prevent them?',
          tags: ['Product Development', 'New Designs', 'Design Changes']
        },
        {
          title: 'Process FMEA',
          text: 'Analysis of manufacturing and process risks. Where can the process fail, how do we detect it, how do we ensure quality?',
          tags: ['Manufacturing', 'Assembly', 'Inspection Processes']
        },
        {
          title: 'ISO 14971 Risk File',
          text: 'Complete risk management documentation for medical devices per ISO 14971. Risk management plan, hazard analysis, risk-benefit evaluation.',
          tags: ['Medical Devices', 'MDR', 'FDA']
        },
        {
          title: 'Hazard Analysis',
          text: 'Hazard analyses for safety-critical systems. Identification of hazards, cause analysis, risk assessment.',
          tags: ['Nuclear', 'Pharma', 'Safety-Critical']
        }
      ]
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
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)',
        }} />
      </div>
      
      <main className="pt-24 pb-16 px-6 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto">
          
          {/* Hero - Left aligned with CTA on right */}
          <div className="mb-12 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            <div className="flex-1">
              <h1 
                className="text-4xl lg:text-5xl font-semibold mb-4"
                style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
              >
                {text.hero.title}
              </h1>
              <p className="text-2xl mb-4" style={{ fontFamily: "'Cormorant', serif", color: '#334155' }}>
                {text.hero.subtitle}
              </p>
              <p className="text-lg max-w-2xl" style={{ color: '#475569' }}>
                {text.hero.text}
              </p>
            </div>
            <div className="lg:pt-2">
              <Link 
                href="/kontakt"
                className="inline-block px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ 
                  backgroundColor: 'rgba(191, 219, 254, 0.35)',
                  backdropFilter: 'blur(3px)',
                  border: '1px solid rgba(191, 219, 254, 0.5)',
                  color: '#1e3a8a'
                }}
              >
                {text.cta}
              </Link>
            </div>
          </div>
          
          {/* Services Grid - 2x2 */}
          <div className="grid md:grid-cols-2 gap-8">
            {text.services.map((service, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)', backdropFilter: 'blur(3px)' }}
              >
                <div className="mb-4">
                  <h2 
                    className="text-2xl font-semibold"
                    style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                  >
                    {service.title}
                  </h2>
                </div>
                <p className="mb-4" style={{ color: '#475569' }}>
                  {service.text}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full text-xs"
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
