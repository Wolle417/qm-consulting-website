import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function ThankYouCAPA() {
  const router = useRouter();
  const locale = router.locale || 'de';
  const isEn = locale === 'en';
  
  // Download filename - English only for now
  const downloadFile = '/downloads/QCore_CAPA_Bundle_en_1.0.rar';
  
  const t = {
    de: {
      title: 'Download bereit! | QCore Consulting',
      heading: 'Vielen Dank!',
      subheading: 'Ihr CAPA System Bundle ist bereit zum Download.',
      downloadBtn: 'CAPA Bundle herunterladen',
      downloadSize: 'RAR-Datei · ~270 KB · 7 Dokumente (English)',
      whatsIncluded: 'Was Sie bekommen:',
      items: [
        'CAPA SOP – Der komplette Prozess',
        'CAPA Formular – Dokumentation pro Fall',
        'RCA Toolkit – 5-Why, Ishikawa & Pareto',
        'CAPA Tracking Log – Übersicht + KPIs',
        'Ausgefülltes Beispiel – Best Practice',
        'Quick Reference Card – Prozess auf 1 Seite',
        'ReadMe mit Implementierungs-Tipps'
      ],
      nextSteps: 'Nächste Schritte',
      nextStepsText: 'Das CAPA-System ist am effektivsten im Zusammenspiel mit NC-Management und regelmäßigen Audits.',
      upsellTitle: 'Vervollständigen Sie Ihr QM-System:',
      ncBundle: 'NC Management Bundle',
      ncBundleDesc: 'Nonconformances strukturiert erfassen und zu CAPAs eskalieren.',
      ncPrice: '€99',
      auditKit: 'Audit Prep Kit',
      auditKitDesc: '50+ typische Auditfragen + Checklisten für interne Audits.',
      auditPrice: '€79',
      questions: 'Fragen?',
      questionsText: 'Schreiben Sie mir:',
      email: 'kontakt@qcore-consulting.de'
    },
    en: {
      title: 'Download Ready! | QCore Consulting',
      heading: 'Thank You!',
      subheading: 'Your CAPA System Bundle is ready to download.',
      downloadBtn: 'Download CAPA Bundle',
      downloadSize: 'RAR file · ~270 KB · 7 documents',
      whatsIncluded: 'What you get:',
      items: [
        'CAPA SOP – The complete process',
        'CAPA Form – Documentation per case',
        'RCA Toolkit – 5-Why, Ishikawa & Pareto',
        'CAPA Tracking Log – Overview + KPIs',
        'Filled Example – Best practice',
        'Quick Reference Card – Process on 1 page',
        'ReadMe with implementation tips'
      ],
      nextSteps: 'Next Steps',
      nextStepsText: 'The CAPA system works best together with NC management and regular audits.',
      upsellTitle: 'Complete your QM system:',
      ncBundle: 'NC Management Bundle',
      ncBundleDesc: 'Capture nonconformances systematically and escalate to CAPAs.',
      ncPrice: '€99',
      auditKit: 'Audit Prep Kit',
      auditKitDesc: '50+ typical audit questions + checklists for internal audits.',
      auditPrice: '€79',
      questions: 'Questions?',
      questionsText: 'Write to me:',
      email: 'kontakt@qcore-consulting.de'
    }
  };
  
  const text = t[locale] || t.en;
  
  return (
    <>
      <Head>
        <title>{text.title}</title>
        <meta name="robots" content="noindex" />
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
      
      <main className="pt-24 pb-16 px-6 lg:px-12 min-h-screen">
        <div className="max-w-3xl mx-auto">
          
          {/* Success Header */}
          <div className="text-center mb-12">
            <div 
              className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
              style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)' }}
            >
              <span className="text-5xl">✓</span>
            </div>
            
            <h1 
              className="text-4xl lg:text-5xl font-semibold mb-4"
              style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
            >
              {text.heading}
            </h1>
            
            <p className="text-xl" style={{ color: '#475569' }}>
              {text.subheading}
            </p>
          </div>
          
          {/* Download Box */}
          <div 
            className="rounded-xl p-8 mb-12 backdrop-blur-sm text-center"
            style={{ backgroundColor: 'rgba(34, 197, 94, 0.08)', border: '2px solid rgba(34, 197, 94, 0.3)' }}
          >
            <a
              href={downloadFile}
              download
              className="inline-block px-10 py-5 rounded-lg text-xl font-semibold transition-all hover:scale-105 hover:shadow-lg mb-4"
              style={{ backgroundColor: '#22c55e', color: 'white' }}
            >
              ⬇️ {text.downloadBtn}
            </a>
            
            <p className="text-sm" style={{ color: '#64748b' }}>
              {text.downloadSize}
            </p>
          </div>
          
          {/* What's Included */}
          <div 
            className="rounded-xl p-8 mb-12 backdrop-blur-sm"
            style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', border: '1px solid rgba(30, 58, 138, 0.1)' }}
          >
            <h2 
              className="text-2xl font-semibold mb-6"
              style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
            >
              {text.whatsIncluded}
            </h2>
            
            <ul className="space-y-3">
              {text.items.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3" style={{ color: '#334155' }}>
                  <span style={{ color: '#22c55e' }}>✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Upsell Section */}
          <div className="mb-12">
            <h2 
              className="text-2xl font-semibold mb-2"
              style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
            >
              {text.nextSteps}
            </h2>
            <p className="mb-6" style={{ color: '#475569' }}>
              {text.nextStepsText}
            </p>
            
            <p className="font-semibold mb-4" style={{ color: '#1e3a8a' }}>
              {text.upsellTitle}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* NC Bundle */}
              <a 
                href={isEn ? '/en/produkte/nc-system' : '/produkte/nc-system'}
                className="block rounded-xl p-6 transition-all hover:shadow-lg hover:scale-[1.02] backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(30, 58, 138, 0.15)' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg" style={{ color: '#0f172a' }}>
                    {text.ncBundle}
                  </h3>
                  <span className="font-bold text-lg" style={{ color: '#1e3a8a' }}>
                    {text.ncPrice}
                  </span>
                </div>
                <p className="text-sm" style={{ color: '#64748b' }}>
                  {text.ncBundleDesc}
                </p>
              </a>
              
              {/* Audit Kit */}
              <a 
                href={isEn ? '/en/produkte/audit-prep-kit' : '/produkte/audit-prep-kit'}
                className="block rounded-xl p-6 transition-all hover:shadow-lg hover:scale-[1.02] backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)', border: '1px solid rgba(30, 58, 138, 0.15)' }}
              >
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg" style={{ color: '#0f172a' }}>
                    {text.auditKit}
                  </h3>
                  <span className="font-bold text-lg" style={{ color: '#1e3a8a' }}>
                    {text.auditPrice}
                  </span>
                </div>
                <p className="text-sm" style={{ color: '#64748b' }}>
                  {text.auditKitDesc}
                </p>
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div className="text-center" style={{ color: '#64748b' }}>
            <p className="font-semibold" style={{ color: '#334155' }}>{text.questions}</p>
            <p>
              {text.questionsText}{' '}
              <a 
                href={`mailto:${text.email}`}
                className="underline hover:no-underline"
                style={{ color: '#1e3a8a' }}
              >
                {text.email}
              </a>
            </p>
          </div>
          
        </div>
      </main>
      
      <Footer />
    </>
  );
}
