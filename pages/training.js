import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Training() {
  const router = useRouter();
  const locale = router.locale || 'de';
  
  const t = {
    de: {
      meta: {
        title: 'QM Schulungen & Workshops | FMEA, CAPA, Audit | QCore',
        description: 'Praxisnahe QM-Schulungen für MedTech und Pharma. FMEA-Workshop, Audit-Training, CAPA-Schulung. Vor Ort oder Remote.'
      },
      hero: {
        title: 'Training & Workshops',
        subtitle: 'QM-Schulungen, die hängen bleiben',
        text: 'Keine PowerPoint-Marathons. Interaktive Workshops mit echten Beispielen aus Ihrer Branche – damit Ihre Mitarbeiter QM verstehen, nicht nur unterschreiben.'
      },
      cta: 'Termin vereinbaren',
      workshops: [
        {
          title: 'FMEA-Workshop',
          duration: '1-2 Tage',
          text: 'Hands-on Risikoanalyse an einem echten Beispiel aus Ihrem Unternehmen. Theorie + Praxis.',
          tags: ['Design-FMEA', 'Prozess-FMEA', 'Bewertung']
        },
        {
          title: 'Audit-Training',
          duration: '0.5-1 Tag',
          text: 'Wie verhält man sich im Audit? Was sind typische Fragen? Wie antwortet man richtig?',
          tags: ['Interview-Übung', 'Dos & Don\'ts', 'Rollenspiele']
        },
        {
          title: 'CAPA-Schulung',
          duration: '0.5 Tag',
          text: 'Korrektur- und Vorbeugemaßnahmen richtig umsetzen. Root Cause Analysis, Wirksamkeit.',
          tags: ['5-Why', 'Ishikawa', 'Dokumentation']
        },
        {
          title: 'QM-Grundlagen',
          duration: '1 Tag',
          text: 'Für neue Mitarbeiter oder als Refresher. Was ist ein QM-System, wie funktioniert es?',
          tags: ['ISO 9001', 'ISO 13485', 'Prozesse']
        }
      ],
      formats: {
        title: 'Formate',
        items: [
          { label: 'Vor Ort' },
          { label: 'Remote' },
          { label: 'Einzel-Coaching' }
        ]
      }
    },
    en: {
      meta: {
        title: 'QM Training & Workshops | FMEA, CAPA, Audit Training | QCore Consulting',
        description: 'Practical QM training for MedTech and Pharma. FMEA workshop, audit training, CAPA training. On-site or remote.'
      },
      hero: {
        title: 'Training & Workshops',
        subtitle: 'QM training that sticks',
        text: 'No PowerPoint marathons. Interactive workshops with real examples from your industry – so your employees understand QM, not just sign off.'
      },
      cta: 'Schedule appointment',
      workshops: [
        {
          title: 'FMEA Workshop',
          duration: '1-2 days',
          text: 'Hands-on risk analysis on a real example from your company. Theory + practice.',
          tags: ['Design FMEA', 'Process FMEA', 'Evaluation']
        },
        {
          title: 'Audit Training',
          duration: '0.5-1 day',
          text: 'How to behave in an audit? What are typical questions? How to answer correctly?',
          tags: ['Interview Practice', 'Dos & Don\'ts', 'Role Plays']
        },
        {
          title: 'CAPA Training',
          duration: '0.5 day',
          text: 'Implementing corrective and preventive actions correctly. Root cause analysis, effectiveness.',
          tags: ['5-Why', 'Ishikawa', 'Documentation']
        },
        {
          title: 'QM Basics',
          duration: '1 day',
          text: 'For new employees or as refresher. What is a QM system, how does it work?',
          tags: ['ISO 9001', 'ISO 13485', 'Processes']
        }
      ],
      formats: {
        title: 'Formats',
        items: [
          { label: 'On-site' },
          { label: 'Remote' },
          { label: 'Individual Coaching' }
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
              <a 
                href="https://outlook.office365.com/book/QCoreConsulting@qcore-consulting.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 rounded-lg font-medium transition-all hover:scale-105"
                style={{ 
                  backgroundColor: 'rgba(191, 219, 254, 0.35)',
                  backdropFilter: 'blur(3px)',
                  border: '1px solid rgba(191, 219, 254, 0.5)',
                  color: '#1e3a8a'
                }}
              >
                {text.cta}
              </a>
            </div>
          </div>
          
          {/* Workshops Grid - 2x2 */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {text.workshops.map((workshop, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)', backdropFilter: 'blur(3px)' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h2 
                    className="text-2xl font-semibold"
                    style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                  >
                    {workshop.title}
                  </h2>
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a' }}
                  >
                    {workshop.duration}
                  </span>
                </div>
                <p className="mb-4" style={{ color: '#475569' }}>
                  {workshop.text}
                </p>
                <div className="flex flex-wrap gap-2">
                  {workshop.tags.map((tag, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{ backgroundColor: 'rgba(30, 58, 138, 0.08)', color: '#64748b' }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Formats - Inline */}
          <div className="flex items-center gap-6 flex-wrap">
            <span className="text-sm font-medium" style={{ color: '#64748b' }}>{text.formats.title}:</span>
            {text.formats.items.map((item, idx) => (
              <span key={idx} className="text-sm" style={{ color: '#475569' }}>
                {item.label}{idx < text.formats.items.length - 1 ? ' · ' : ''}
              </span>
            ))}
          </div>
          
        </div>
      </main>
      
      <Footer />
    </>
  );
}
