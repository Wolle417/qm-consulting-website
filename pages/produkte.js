import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

const getProducts = (t) => [
  {
    id: 'capa-system',
    title: t('products.capa.title'),
    oneLiner: t('products.capa.oneLiner'),
    price: '129',
    isFree: true,
    freeHref: '/capa-system-free',
    docs: 7,
    pages: '~45',
    standards: ['ISO 13485', 'FDA 820.100', 'EU MDR'],
    highlights: t('products.capa.highlights'),
    documents: t('products.capa.documents'),
    faq: t('products.capa.faq'),
    href: '/produkte/capa-system',
    gumroad: { en: 'https://qcore33.gumroad.com/l/capa-system', de: null },
  },
  {
    id: 'nc-system',
    title: t('products.nc.title'),
    oneLiner: t('products.nc.oneLiner'),
    price: '99',
    docs: 7,
    pages: '~40',
    standards: ['ISO 13485', 'FDA 820.90', 'EU MDR'],
    highlights: t('products.nc.highlights'),
    documents: t('products.nc.documents'),
    faq: t('products.nc.faq'),
    href: '/produkte/nc-system',
    gumroad: { en: 'https://qcore33.gumroad.com/l/cgjwqa', de: null },
  },
  {
    id: 'audit-prep-kit',
    title: t('products.audit.title'),
    oneLiner: t('products.audit.oneLiner'),
    price: '79',
    docs: 8,
    pages: '~55',
    standards: ['ISO 13485', 'FDA 820.22', 'ISO 19011'],
    highlights: t('products.audit.highlights'),
    documents: t('products.audit.documents'),
    faq: t('products.audit.faq'),
    href: '/produkte/audit-prep-kit',
    gumroad: { en: 'https://qcore33.gumroad.com/l/wcevjy', de: null },
  },
];

const getUpcomingMedTech = (t) => [
  { name: t('products.upcoming.risk'), standard: 'ISO 14971' },
  { name: t('products.upcoming.docControl'), standard: 'ISO 13485' },
  { name: t('products.upcoming.supplier'), standard: 'FDA 820.50' },
  { name: t('products.upcoming.design'), standard: 'FDA 820.30' },
];

// FAQ Component
function ProductFAQ({ faq, t }) {
  const [openIndex, setOpenIndex] = useState(null);
  
  return (
    <div className="mt-3 pt-3 border-t" style={{ borderColor: 'rgba(30, 58, 138, 0.12)' }}>
      <p className="text-xs font-semibold mb-2" style={{ color: '#475569' }}>{t('products.bundle.faqTitle')}</p>
      <div className="space-y-1">
        {faq.map((item, i) => (
          <div key={i}>
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left flex items-start justify-between gap-2 py-1.5 text-sm transition-colors hover:text-qcore-blue"
              style={{ color: '#1e293b' }}
            >
              <span>{item.q}</span>
              <span 
                className="flex-shrink-0 text-xs mt-0.5 transition-transform"
                style={{ 
                  color: '#64748b',
                  transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              >
                ▼
              </span>
            </button>
            {openIndex === i && (
              <p 
                className="text-xs pb-2 pl-0 pr-6"
                style={{ color: '#475569' }}
              >
                {item.a}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// Document List Component
function DocumentList({ documents, isOpen, onToggle, t }) {
  return (
    <div className="mt-2">
      <button
        onClick={onToggle}
        className="text-xs flex items-center gap-1 transition-colors hover:opacity-80 font-medium"
        style={{ color: '#1e3a8a' }}
      >
        <span>{isOpen ? '▼' : '▶'}</span>
        <span>{isOpen ? t('products.bundle.hideDocs') : t('products.bundle.showDocs')}</span>
      </button>
      {isOpen && (
        <ul className="mt-2 space-y-1 pl-3 border-l-2" style={{ borderColor: 'rgba(30, 58, 138, 0.25)' }}>
          {documents.map((doc, i) => (
            <li key={i} className="text-xs" style={{ color: '#475569' }}>
              {doc}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Produkte() {
  const [openDocs, setOpenDocs] = useState({});
  const { t, locale } = useTranslation();
  
  const products = getProducts(t);
  const upcomingMedTech = getUpcomingMedTech(t);
  
  const toggleDocs = (productId) => {
    setOpenDocs(prev => ({ ...prev, [productId]: !prev[productId] }));
  };

  return (
    <>
      <Head>
        <title>{t('products.meta.title')}</title>
        <meta name="description" content={t('products.meta.description')} />
      </Head>
      <Navigation />
      
      <main className="relative min-h-screen">
        
        {/* Hero - Mit Expertise-Signal */}
        <section className="relative pt-24 pb-4">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <h1 
              className="text-4xl md:text-5xl mb-2"
              style={{ fontFamily: "'Cormorant', serif", color: '#1e293b', fontWeight: 400 }}
            >
              {t('products.hero.title')}
            </h1>
            <p className="text-lg mb-3" style={{ color: '#475569' }}>
              {t('products.hero.subtitle')}
            </p>
            {/* Expertise Signal */}
            <p className="text-sm" style={{ color: '#64748b' }}>
              {t('products.hero.expertise')}{' '}
              <Link href="/ueber-mich" className="hover:underline" style={{ color: '#3b82f6' }}>
                {t('products.hero.learnMore')}
              </Link>
            </p>
          </div>
        </section>

        {/* Trust Signals Bar */}
        <section className="relative py-3">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs" style={{ color: '#64748b' }}>
              <span className="flex items-center gap-1.5">
                <span style={{ color: '#22c55e' }}>✓</span>
                {t('products.trust.auditBased')}
              </span>
              <span className="flex items-center gap-1.5">
                <span style={{ color: '#22c55e' }}>✓</span>
                {t('products.trust.noGeneric')}
              </span>
              <span className="flex items-center gap-1.5">
                <span style={{ color: '#22c55e' }}>✓</span>
                {t('products.trust.readyToUse')}
              </span>
              <span className="flex items-center gap-1.5">
                <span style={{ color: '#22c55e' }}>✓</span>
                {t('products.trust.transparent')}
              </span>
            </div>
          </div>
        </section>

        {/* Industrie-Tabs */}
        <section className="relative py-4">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="flex gap-3">
              {/* MedTech - Active */}
              <div 
                className="backdrop-blur-sm px-6 py-4 rounded-lg flex-1 md:flex-none md:min-w-[280px] border"
                style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', borderColor: 'rgba(30, 58, 138, 0.1)' }}
              >
                <p className="text-xl font-semibold mb-1" style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}>
                  {t('products.tabs.medtech')}
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(30, 58, 138, 0.2)', color: '#1e3a8a' }}>ISO 13485</span>
                  <span className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(30, 58, 138, 0.2)', color: '#1e3a8a' }}>FDA 21 CFR 820</span>
                  <span className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(30, 58, 138, 0.2)', color: '#1e3a8a' }}>EU MDR</span>
                </div>
              </div>
              
              {/* Pharma - Coming Soon */}
              <div 
                className="backdrop-blur-sm px-6 py-4 rounded-lg flex-1 md:flex-none md:min-w-[280px] opacity-60 border"
                style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)', borderColor: 'rgba(30, 58, 138, 0.08)' }}
              >
                <p className="text-xl font-semibold mb-1" style={{ color: '#64748b', fontFamily: "'Cormorant', serif" }}>
                  {t('products.tabs.pharma')}
                </p>
                <div className="flex flex-wrap gap-1">
                  <span className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(100, 116, 139, 0.2)', color: '#64748b' }}>GMP</span>
                  <span className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(100, 116, 139, 0.2)', color: '#64748b' }}>ICH Q7</span>
                  <span className="text-xs ml-1" style={{ color: '#94a3b8' }}>{t('products.tabs.planned')}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Produkte Grid */}
        <section className="relative py-6">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-4">
              {products.map((product) => (
                <div 
                  key={product.id}
                  className="backdrop-blur-sm transition-all duration-300 p-5 rounded-lg flex flex-col shadow-sm border hover:shadow-md group"
                  style={{
                    backgroundColor: 'rgba(30, 58, 138, 0.06)',
                    borderColor: 'rgba(30, 58, 138, 0.1)'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(30, 58, 138, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(30, 58, 138, 0.06)'}
                >
                  {/* Header: Title + Price */}
                  <div className="flex items-start justify-between mb-2">
                    <h2 
                      className="text-2xl"
                      style={{ 
                        fontFamily: "'Cormorant', serif", 
                        color: '#0f172a', 
                        fontWeight: 600,
                        textShadow: '0 1px 2px rgba(255,255,255,0.5)'
                      }}
                    >
                      {product.title}
                    </h2>
                    {product.isFree ? (
                      <span className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-lg line-through" style={{ color: '#94a3b8' }}>€{product.price}</span>
                        <span className="text-2xl font-bold" style={{ color: '#16a34a', textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}>FREE</span>
                      </span>
                    ) : (
                      <span 
                        className="text-2xl font-bold flex-shrink-0"
                        style={{ color: '#1e3a8a', textShadow: '0 1px 2px rgba(255,255,255,0.5)' }}
                      >
                        €{product.price}
                      </span>
                    )}
                  </div>
                  
                  {/* One-liner */}
                  <p className="text-sm mb-3 font-medium" style={{ color: '#334155' }}>
                    {product.oneLiner}
                  </p>

                  {/* Standards Badges */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.standards.map((std) => (
                      <span 
                        key={std}
                        className="px-2 py-0.5 rounded text-xs"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}
                      >
                        {std}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-3 flex-grow">
                    {product.highlights.map((item, i) => (
                      <li key={i} className="flex items-start text-sm" style={{ color: '#1e293b' }}>
                        <span className="w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0" style={{ backgroundColor: '#1e3a8a' }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Meta */}
                  <p className="text-xs mb-2 font-medium" style={{ color: '#475569' }}>
                    {product.docs} {t('products.bundle.docsCount')} · {product.pages} {t('products.bundle.pages')} · Word & Excel
                  </p>

                  {/* Document List Toggle */}
                  <DocumentList 
                    documents={product.documents}
                    isOpen={openDocs[product.id]}
                    onToggle={() => toggleDocs(product.id)}
                    t={t}
                  />

                  {/* FAQ Section */}
                  <ProductFAQ faq={product.faq} t={t} />

                  {/* Actions */}
                  <div className="pt-3 mt-3 border-t" style={{ borderColor: 'rgba(30, 58, 138, 0.15)' }}>
                    {product.isFree ? (
                      /* Free Product - Same layout as paid, but GB links to free page */
                      <>
                        <div className="flex gap-2 mb-2">
                          <Link
                            href={product.freeHref}
                            className="flex-1 text-center px-3 py-2 rounded text-sm font-medium transition-all hover:scale-105"
                            style={{ 
                              backgroundColor: 'rgba(187, 247, 208, 0.4)',
                              backdropFilter: 'blur(3px)',
                              border: '1px solid rgba(134, 239, 172, 0.5)',
                              color: '#166534'
                            }}
                          >
                            🇬🇧 {t('products.bundle.buy')}
                          </Link>
                          <span 
                            className="flex-1 text-center px-3 py-2 rounded text-sm"
                            style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#94a3b8' }}
                          >
                            🇩🇪 {t('products.bundle.soon')}
                          </span>
                        </div>
                        <Link
                          href={product.freeHref}
                          className="block text-center px-3 py-2.5 rounded text-sm font-semibold transition-all hover:scale-[1.02]"
                          style={{ 
                            backgroundColor: 'rgba(191, 219, 254, 0.35)',
                            backdropFilter: 'blur(3px)',
                            border: '1px solid rgba(191, 219, 254, 0.5)',
                            color: '#1e3a8a'
                          }}
                        >
                          {t('products.bundle.detailsPreview')}
                        </Link>
                      </>
                    ) : (
                      /* Paid Product - Buy Buttons + Details */
                      <>
                        <div className="flex gap-2 mb-2">
                          <a
                            href={product.gumroad.en}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 text-center px-3 py-2 rounded text-sm font-medium transition-all hover:scale-105"
                            style={{ 
                              backgroundColor: 'rgba(191, 219, 254, 0.35)',
                              backdropFilter: 'blur(3px)',
                              border: '1px solid rgba(191, 219, 254, 0.5)',
                              color: '#1e3a8a'
                            }}
                          >
                            🇬🇧 {t('products.bundle.buy')}
                          </a>
                          {product.gumroad.de ? (
                            <a
                              href={product.gumroad.de}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex-1 text-center px-3 py-2 rounded text-sm font-medium transition-all hover:scale-105"
                              style={{ 
                                backgroundColor: 'rgba(191, 219, 254, 0.35)',
                                backdropFilter: 'blur(3px)',
                                border: '1px solid rgba(191, 219, 254, 0.5)',
                                color: '#1e3a8a'
                              }}
                            >
                              🇩🇪 {t('products.bundle.buy')}
                            </a>
                          ) : (
                            <span 
                              className="flex-1 text-center px-3 py-2 rounded text-sm"
                              style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#94a3b8' }}
                            >
                              🇩🇪 {t('products.bundle.soon')}
                            </span>
                          )}
                        </div>
                        <Link
                          href={product.href}
                          className="block text-center px-3 py-2.5 rounded text-sm font-semibold transition-all hover:scale-[1.02]"
                          style={{ 
                            backgroundColor: 'rgba(191, 219, 254, 0.35)',
                            backdropFilter: 'blur(3px)',
                            border: '1px solid rgba(191, 219, 254, 0.5)',
                            color: '#1e3a8a'
                          }}
                        >
                          {t('products.bundle.detailsPreview')}
                        </Link>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Was ist enthalten */}
        <section className="relative py-4">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div 
              className="backdrop-blur-sm p-5 rounded-lg border"
              style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', borderColor: 'rgba(30, 58, 138, 0.1)' }}
            >
              <p className="font-semibold mb-3" style={{ color: '#1e293b' }}>
                {t('products.included.title')}
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="flex items-center gap-2 text-sm" style={{ color: '#1e293b' }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#1e3a8a' }}></span>
                  {t('products.included.editable')}
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#1e293b' }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#1e3a8a' }}></span>
                  {t('products.included.example')}
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#1e293b' }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#1e3a8a' }}></span>
                  {t('products.included.license')}
                </div>
                <div className="flex items-center gap-2 text-sm" style={{ color: '#1e293b' }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#1e3a8a' }}></span>
                  {t('products.included.updates')}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="relative py-4">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <p className="text-sm mb-2" style={{ color: '#64748b' }}>{t('products.upcoming.title')}</p>
            <div className="flex flex-wrap gap-2">
              {upcomingMedTech.map((item) => (
                <span 
                  key={item.name}
                  className="px-3 py-1.5 rounded text-sm"
                  style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#64748b' }}
                >
                  {item.name} <span style={{ color: '#94a3b8' }}>({item.standard})</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="relative py-6 pb-16">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <p className="text-sm" style={{ color: '#64748b' }}>
              {t('products.cta.custom')}{' '}
              <Link href="/kontakt" className="hover:underline" style={{ color: '#3b82f6' }}>
                {t('products.cta.contact')}
              </Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
