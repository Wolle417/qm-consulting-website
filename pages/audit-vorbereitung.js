import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';

export default function AuditVorbereitung() {
  const router = useRouter();
  const locale = router.locale || 'de';
  
  const t = {
    de: {
      meta: {
        title: 'Audit Vorbereitung | Gap Analysis & Mock Audit | QCore Consulting',
        description: 'Systematische Audit-Vorbereitung für ISO, FDA und Kundenaudits. Gap-Analyse, Mock-Audit, Begleitung vor Ort.'
      },
      hero: {
        title: 'Audit Vorbereitung',
        subtitle: 'Audit in 4 Wochen? Kein Problem.',
        text: 'Das Audit steht vor der Tür, die Dokumentation hat Lücken, und niemand weiß genau, was der Auditor fragen wird. Kenne ich. Lässt sich lösen.'
      },
      cta: 'Kontakt aufnehmen',
      services: [
        {
          title: 'Gap-Analyse',
          
          text: 'Systematischer Abgleich Ihres QMS gegen die Norm-Anforderungen. Was fehlt, was ist veraltet, was hält keinem Audit stand?',
          tags: ['ISO 13485', 'ISO 9001', 'FDA']
        },
        {
          title: 'Mock-Audit',
          
          text: 'Generalprobe mit realistischen Fragen. Ich spiele Auditor, Sie üben – Stress vor dem Stress.',
          tags: ['Interview-Training', 'Dokumentenprüfung']
        },
        {
          title: 'Maßnahmen-Tracking',
          
          text: 'Priorisierte Liste der kritischen Lücken. Nicht alles auf einmal – sondern was wirklich zählt.',
          tags: ['Findings schließen', 'CAPA']
        },
        {
          title: 'Audit-Begleitung',
          
          text: 'Optional: Ich bin vor Ort dabei. Als Ansprechpartner, Moderator, oder einfach als Backup.',
          tags: ['Vor Ort', 'Remote']
        }
      ],
      diy: {
        title: 'Lieber selbst machen?',
        text: 'Nicht jedes Unternehmen braucht einen Berater. Manchmal reicht die richtige Checkliste.',
        kit: 'Audit Prep Kit',
        price: '€79',
        features: ['150+ Auditor-Fragen', 'Checklisten', 'Templates'],
        link: 'Zum Audit Prep Kit →'
      }
    },
    en: {
      meta: {
        title: 'Audit Preparation | Gap Analysis & Mock Audit | QCore Consulting',
        description: 'Systematic audit preparation for ISO, FDA and customer audits. Gap analysis, mock audit, on-site support.'
      },
      hero: {
        title: 'Audit Preparation',
        subtitle: 'Audit in 4 weeks? No problem.',
        text: 'The audit is coming, documentation has gaps, and nobody knows exactly what the auditor will ask. I know this. It can be solved.'
      },
      cta: 'Get in touch',
      services: [
        {
          title: 'Gap Analysis',
          text: 'Systematic comparison of your QMS against standard requirements. What\'s missing, what\'s outdated, what won\'t survive an audit?',
          tags: ['ISO 13485', 'ISO 9001', 'FDA']
        },
        {
          title: 'Mock Audit',
          text: 'Dress rehearsal with realistic questions. I play auditor, you practice – stress before the stress.',
          tags: ['Interview Training', 'Document Review']
        },
        {
          title: 'Action Tracking',
          text: 'Prioritized list of critical gaps. Not everything at once – but what really counts.',
          tags: ['Close Findings', 'CAPA']
        },
        {
          title: 'Audit Support',
          text: 'Optional: I\'m there on-site. As contact person, moderator, or simply as backup.',
          tags: ['On-site', 'Remote']
        }
      ],
      diy: {
        title: 'Prefer to do it yourself?',
        text: 'Not every company needs a consultant. Sometimes the right checklist is enough.',
        kit: 'Audit Prep Kit',
        price: '€79',
        features: ['150+ Auditor Questions', 'Checklists', 'Templates'],
        link: 'Get Audit Prep Kit →'
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
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {text.services.map((service, idx) => (
              <div 
                key={idx}
                className="p-6 rounded-xl transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)', backdropFilter: 'blur(3px)' }}
              >
                <h2 
                  className="text-2xl font-semibold mb-4"
                  style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                >
                  {service.title}
                </h2>
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
          
          {/* DIY Option - Compact */}
          <div 
            className="p-6 rounded-xl backdrop-blur-sm flex flex-col md:flex-row md:items-center md:justify-between gap-6"
            style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.15)' }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#0f172a' }}>
                {text.diy.title}
              </h3>
              <p className="text-sm mb-2" style={{ color: '#475569' }}>
                {text.diy.text}
              </p>
              <div className="flex flex-wrap gap-2">
                {text.diy.features.map((f, i) => (
                  <span key={i} className="text-xs" style={{ color: '#64748b' }}>
                    {f}{i < text.diy.features.length - 1 ? ' ·' : ''}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-2xl font-bold" style={{ color: '#1e3a8a' }}>{text.diy.price}</span>
              <a
                href="https://qcore33.gumroad.com/l/wcevjy"
                className="gumroad-button px-5 py-2 rounded-lg text-sm font-medium transition-all hover:scale-105"
                style={{ 
                  backgroundColor: 'rgba(191, 219, 254, 0.35)',
                  backdropFilter: 'blur(3px)',
                  border: '1px solid rgba(191, 219, 254, 0.5)',
                  color: '#1e3a8a'
                }}
              >
                {text.diy.link}
              </a>
            </div>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </>
  );
}
