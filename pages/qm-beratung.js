import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function QMBeratung() {
  const router = useRouter();
  const locale = router.locale || 'de';
  
  const t = {
    de: {
      meta: {
        title: 'Individuelles QM für KMU | MedTech · Pharma · Nuklear | QCore Consulting',
        description: 'Maßgeschneiderte QM-Systeme für kleine und mittlere Unternehmen. ISO 13485, GMP, KTA – von einem Praktiker mit 17+ Jahren Erfahrung.'
      },
      hero: {
        title: 'Individuelles QM für KMU',
        subtitle: 'Ihr QM-System – maßgeschneidert, nicht von der Stange',
        text: 'Sie brauchen eine Zertifizierung, aber keine aufgeblähte Bürokratie. Ich baue QM-Systeme, die zu Ihrem Unternehmen passen – schlank, praktikabel, zertifizierungsfähig.'
      },
      cta: 'Kontakt aufnehmen',
      branches: [
        {
          key: 'medtech',
          title: 'MedTech',
          subtitle: 'ISO 13485 · FDA · MDR',
          text: 'Die Medizintechnik-Regulierung wird immer komplexer. Besonders für kleine Hersteller und Startups ist das eine Herausforderung.',
          points: [
            'QMS-Aufbau für ISO 13485',
            'FDA 21 CFR 820 Compliance',
            'EU MDR Dokumentation',
            'Design Controls & DHF',
            'Post-Market Surveillance'
          ]
        },
        {
          key: 'pharma',
          title: 'Pharma',
          subtitle: 'GMP · GDP',
          text: 'Good Manufacturing Practice ist kein Nice-to-have, sondern Pflicht. Ich kenne die Anforderungen aus der Praxis.',
          points: [
            'GMP-konforme Dokumentation',
            'Qualifizierung & Validierung',
            'Abweichungsmanagement',
            'GDP für Lagerung & Transport',
            'Supplier Qualification'
          ],
          caseStudy: 'Praxisbeispiel: GMP-Doku Fampridin →'
        },
        {
          key: 'nuclear',
          title: 'Nuklear',
          subtitle: 'KTA · Höchste Sicherheit',
          text: 'Die Nuklearindustrie hat die strengsten QM-Anforderungen überhaupt. Hier zählt jedes Detail.',
          points: [
            'KTA-konforme QS',
            'Nukleare Dokumentation',
            'Lieferantenqualifizierung',
            'Rückverfolgbarkeit',
            'Behörden-Audits'
          ]
        }
      ]
    },
    en: {
      meta: {
        title: 'Custom QM for SMEs | MedTech · Pharma · Nuclear | QCore Consulting',
        description: 'Tailored QM systems for small and medium enterprises. ISO 13485, GMP, KTA – from a practitioner with 17+ years of experience.'
      },
      hero: {
        title: 'Custom QM for SMEs',
        subtitle: 'Your QM system – tailored, not off-the-shelf',
        text: 'You need certification, but not bloated bureaucracy. I build QM systems that fit your company – lean, practical, ready for certification.'
      },
      cta: 'Get in touch',
      branches: [
        {
          key: 'medtech',
          title: 'MedTech',
          subtitle: 'ISO 13485 · FDA · MDR',
          text: 'Medical device regulation is getting more complex. Especially for small manufacturers and startups.',
          points: [
            'QMS setup for ISO 13485',
            'FDA 21 CFR 820 compliance',
            'EU MDR documentation',
            'Design Controls & DHF',
            'Post-Market Surveillance'
          ]
        },
        {
          key: 'pharma',
          title: 'Pharma',
          subtitle: 'GMP · GDP',
          text: 'Good Manufacturing Practice is mandatory, not nice-to-have. I know the requirements from practice.',
          points: [
            'GMP-compliant documentation',
            'Qualification & Validation',
            'Deviation management',
            'GDP for storage & transport',
            'Supplier Qualification'
          ],
          caseStudy: 'Case study: GMP docs Fampridine →'
        },
        {
          key: 'nuclear',
          title: 'Nuclear',
          subtitle: 'KTA · Highest Safety',
          text: 'The nuclear industry has the strictest QM requirements of all. Every detail counts.',
          points: [
            'KTA-compliant QA',
            'Nuclear documentation',
            'Supplier qualification',
            'Traceability',
            'Regulatory audits'
          ]
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
          
          {/* Three Branches - Full Width Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {text.branches.map((branch) => (
              <div 
                key={branch.key}
                className="p-6 rounded-xl h-full flex flex-col transition-all duration-300 hover:shadow-lg"
                style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)', backdropFilter: 'blur(3px)' }}
              >
                <h2 
                  className="text-2xl font-semibold mb-1"
                  style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                >
                  {branch.title}
                </h2>
                <p className="text-sm font-medium mb-4" style={{ color: '#1e3a8a' }}>
                  {branch.subtitle}
                </p>
                <p className="mb-4 text-sm" style={{ color: '#475569' }}>
                  {branch.text}
                </p>
                
                <ul className="space-y-2 flex-grow">
                  {branch.points.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#334155' }}>
                      <span style={{ color: '#22c55e' }}>✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
                
                {branch.caseStudy && (
                  <Link 
                    href="/referenz-projekt"
                    className="text-sm font-medium mt-4 inline-block hover:underline"
                    style={{ color: '#1e3a8a' }}
                  >
                    {branch.caseStudy}
                  </Link>
                )}
              </div>
            ))}
          </div>
          
        </div>
      </main>
      
      <Footer />
    </>
  );
}
