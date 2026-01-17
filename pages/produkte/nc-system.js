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

export default function NCSystem() {
  const [openFAQ, setOpenFAQ] = useState(null);
  const { t } = useTranslation();

  const pd = t('productDetail');
  const nc = pd?.nc || {};
  const documents = nc?.documents || [];
  const whyItems = nc?.why || [];
  const faqItems = nc?.faq || [];

  return (
    <>
      <Head>
        <title>{nc?.meta?.title || 'NC Management Bundle | QCore'}</title>
        <meta name="description" content={nc?.meta?.description || ''} />
        <meta name="keywords" content="Nonconformance Template, NC Management, ISO 13485 Nonconformity, FDA 21 CFR 820.90, Control of Nonconforming Product" />
        <meta property="og:title" content={nc?.meta?.title || 'NC Management Bundle | QCore Consulting'} />
        <meta property="og:description" content={nc?.meta?.description || ''} />
        <meta property="og:type" content="product" />
        <meta property="product:price:amount" content="99" />
        <meta property="product:price:currency" content="EUR" />
      </Head>
      
      <Script src="https://gumroad.com/js/gumroad.js" strategy="lazyOnload" />
      
      <Navigation />
      <main className="relative min-h-screen">
        {/* Breadcrumb */}
        <section className="relative pt-20 pb-2">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <nav className="text-sm" style={{ color: '#64748b' }}>
              <Link href="/produkte" className="hover:underline">{pd?.breadcrumb || 'Products'}</Link>
              <span className="mx-2">→</span>
              <span style={{ color: '#1e293b' }}>NC Management Bundle</span>
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
                  <span className="px-3 py-1 rounded text-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}>FDA 21 CFR 820.90</span>
                  <span className="px-3 py-1 rounded text-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}>EU MDR</span>
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
                  {nc?.title || 'NC Management Bundle'}
                </h1>
                
                <p className="text-xl mb-6" style={{ color: '#334155' }}>
                  {nc?.subtitle || '7 documents for systematic nonconformance handling.'}
                </p>

                {/* Key Benefits */}
                <div 
                  className="backdrop-blur-sm p-5 rounded-lg border mb-6"
                  style={cardStyle}
                >
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: '#1e3a8a' }}>7</div>
                      <div className="text-sm" style={{ color: '#475569' }}>{nc?.stats?.docs || 'Documents'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: '#1e3a8a' }}>~40</div>
                      <div className="text-sm" style={{ color: '#475569' }}>{nc?.stats?.pagesLabel || 'Pages'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold" style={{ color: '#1e3a8a' }}>Word & Excel</div>
                      <div className="text-sm" style={{ color: '#475569' }}>{nc?.stats?.format || 'Editable'}</div>
                    </div>
                  </div>
                </div>

                {/* Problem/Solution */}
                <div className="space-y-4">
                  <div 
                    className="backdrop-blur-sm border-l-4 p-4 rounded-r-lg"
                    style={{ backgroundColor: 'rgba(254, 202, 202, 0.3)', borderColor: '#f87171' }}
                  >
                    <p className="font-semibold mb-1" style={{ color: '#991b1b' }}>{nc?.problem?.title || 'The problem:'}</p>
                    <p className="text-sm" style={{ color: '#7f1d1d' }}>
                      {nc?.problem?.text || 'Many companies document NCs but lack systematic processing.'}
                    </p>
                  </div>

                  <div 
                    className="backdrop-blur-sm border-l-4 p-4 rounded-r-lg"
                    style={{ backgroundColor: 'rgba(187, 247, 208, 0.3)', borderColor: '#4ade80' }}
                  >
                    <p className="font-semibold mb-1" style={{ color: '#166534' }}>{nc?.solution?.title || 'The solution:'}</p>
                    <p className="text-sm" style={{ color: '#15803d' }}>
                      {nc?.solution?.text || 'An NC system with clear decision logic.'}
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
                    <span className="text-4xl font-bold" style={{ color: '#1e3a8a' }}>€99</span>
                    <span className="text-sm ml-2" style={{ color: '#64748b' }}>{pd?.oneTime || 'one-time'}</span>
                  </div>

                  <a 
                    href="https://qcore33.gumroad.com/l/cgjwqa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center px-6 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90 mb-3"
                    style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}
                  >
                    🇬🇧 {pd?.buyNow || 'Buy now'}
                  </a>

                  <p className="text-xs text-center mb-4" style={{ color: '#64748b' }}>
                    {pd?.securePayment || 'Secure payment via Gumroad · Instant download'}
                  </p>

                  <div className="border-t pt-4" style={{ borderColor: 'rgba(30, 58, 138, 0.15)' }}>
                    <p className="font-semibold mb-3 text-sm" style={{ color: '#1e293b' }}>{pd?.includedTitle || 'Included in the bundle:'}</p>
                    <ul className="text-sm space-y-2">
                      {(pd?.includedItems || ['7 Documents (Word, Excel, PDF)', 'Completed example', 'Free updates', 'Company-wide license']).map((item, i) => (
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
                      <strong style={{ color: '#1e3a8a' }}>💡 Tip:</strong> NC + CAPA Bundle together for a complete system.{' '}
                      <Link href="/produkte/capa-system" className="underline" style={{ color: '#1e3a8a' }}>
                        View CAPA Bundle →
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
              {pd?.previewTitle || 'Preview'}: NC Management SOP
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
                  <p className="font-semibold" style={{ color: '#1e293b' }}>{nc?.previewDoc || 'SOP-NC-001 | NC Procedure'}</p>
                  <p className="text-xs" style={{ color: '#64748b' }}>{pd?.samplePreview || 'Sample Preview – Table of contents & structure'}</p>
                </div>
                <a 
                  href="/docs/samples/QCore_NC-SOP_Sample.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1 rounded text-xs font-medium flex items-center gap-1 hover:opacity-80 transition-opacity"
                  style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}
                >
                  {pd?.openPdf || 'Open PDF ↗'}
                </a>
              </div>

              {/* Embedded PDF */}
              <div className="relative" style={{ height: '600px' }}>
                <iframe 
                  src="/docs/samples/QCore_NC-SOP_Sample.pdf#view=FitH"
                  className="w-full h-full"
                  title="NC SOP Sample Preview"
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
              {pd?.allDocsTitle?.replace('documents', '7 documents') || 'All 7 documents in the bundle'}
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
                        {doc.pages} {doc.pages === '1' ? (pd?.page || 'Page') : doc.pages.includes('Sheet') ? '' : (pd?.pages || 'Pages')}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm" style={{ color: '#475569' }}>
                    {doc.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why this bundle */}
        <section className="relative py-8">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h2 
              className="text-3xl mb-6"
              style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}
            >
              {pd?.whyTitle || 'Why this bundle?'}
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
              {pd?.faqTitle || 'Frequently Asked Questions'}
            </h2>
            
            <div className="space-y-3 max-w-3xl">
              {faqItems.map((faq, i) => (
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
                {pd?.ctaTitle || 'Ready for a system that works?'}
              </h2>
              <p className="mb-6" style={{ color: '#475569' }}>
                {nc?.ctaText || '€99 for a systematic NC process.'}
              </p>
              <a 
                href="https://qcore33.gumroad.com/l/cgjwqa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:opacity-90"
                style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}
              >
                {pd?.ctaButton || 'Buy now'} – €99
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
