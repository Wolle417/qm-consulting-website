import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

// ─── Design System Constants (matching stichprobe) ───
const boxStyle = {
  backgroundColor: 'rgba(30, 58, 138, 0.06)',
  border: '1px solid rgba(30, 58, 138, 0.1)',
  backdropFilter: 'blur(3px)',
};

const glassCta = {
  backgroundColor: 'rgba(191, 219, 254, 0.35)',
  backdropFilter: 'blur(3px)',
  border: '1px solid rgba(191, 219, 254, 0.5)',
  color: '#1e3a8a',
};

const getProducts = (t) => [
  {
    id: 'capa-system',
    title: t('products.capa.title'),
    oneLiner: t('products.capa.oneLiner'),
    price: '189',
    docs: 7, pages: '~45',
    standards: ['ISO 13485', 'FDA 820.100', 'EU MDR'],
    highlights: t('products.capa.highlights'),
    documents: t('products.capa.documents'),
    faq: t('products.capa.faq'),
    href: '/produkte/capa-system',
    gumroad: { en: 'https://qcore33.gumroad.com/l/capa-system', de: 'https://qcore33.gumroad.com/l/zkrijn' },
  },
  {
    id: 'nc-system',
    title: t('products.nc.title'),
    oneLiner: t('products.nc.oneLiner'),
    price: '139',
    docs: 11, pages: '~40',
    standards: ['ISO 13485', 'FDA 820.90', 'EU MDR'],
    highlights: t('products.nc.highlights'),
    documents: t('products.nc.documents'),
    faq: t('products.nc.faq'),
    href: '/produkte/nc-system',
    gumroad: { en: 'https://qcore33.gumroad.com/l/cgjwqa', de: 'https://qcore33.gumroad.com/l/rmcqsx' },
  },
  {
    id: 'audit-prep-kit',
    title: t('products.audit.title'),
    oneLiner: t('products.audit.oneLiner'),
    price: '279',
    docs: 14, pages: '~80',
    standards: ['ISO 13485', 'FDA 21 CFR 820 / QMSR', 'ISO 19011'],
    highlights: t('products.audit.highlights'),
    documents: t('products.audit.documents'),
    faq: t('products.audit.faq'),
    href: '/produkte/audit-prep-kit',
    gumroad: { en: 'https://qcore33.gumroad.com/l/wcevjy', de: 'https://qcore33.gumroad.com/l/yownbk' },
  },
];

const getUpcomingMedTech = (t) => [
  { name: t('products.upcoming.risk'), standard: 'ISO 14971' },
  { name: t('products.upcoming.docControl'), standard: 'ISO 13485' },
  { name: t('products.upcoming.supplier'), standard: 'FDA 820.50' },
  { name: t('products.upcoming.design'), standard: 'FDA 820.30' },
];

function ProductFAQ({ faq, t }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="mt-3 pt-3 border-t" style={{ borderColor: 'rgba(30, 58, 138, 0.12)' }}>
      <p className="text-xs font-semibold mb-2" style={{ color: '#475569' }}>{t('products.bundle.faqTitle')}</p>
      <div className="space-y-1">
        {faq.map((item, i) => (
          <div key={i}>
            <button onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full text-left flex items-start justify-between gap-2 py-1.5 text-sm transition-colors hover:opacity-70"
              style={{ color: '#1e293b' }}>
              <span>{item.q}</span>
              <span className="flex-shrink-0 text-xs mt-0.5 transition-transform"
                style={{ color: '#64748b', transform: openIndex === i ? 'rotate(180deg)' : 'rotate(0deg)' }}>▼</span>
            </button>
            {openIndex === i && <p className="text-xs pb-2 pl-0 pr-6" style={{ color: '#475569' }}>{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

function DocumentList({ documents, isOpen, onToggle, t }) {
  return (
    <div className="mt-2">
      <button onClick={onToggle} className="text-xs flex items-center gap-1 transition-colors hover:opacity-80 font-medium" style={{ color: '#1e3a8a' }}>
        <span>{isOpen ? '▼' : '▶'}</span>
        <span>{isOpen ? t('products.bundle.hideDocs') : t('products.bundle.showDocs')}</span>
      </button>
      {isOpen && (
        <ul className="mt-2 space-y-1 pl-3 border-l-2" style={{ borderColor: 'rgba(30, 58, 138, 0.25)' }}>
          {documents.map((doc, i) => <li key={i} className="text-xs" style={{ color: '#475569' }}>{doc}</li>)}
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
  const toggleDocs = (id) => setOpenDocs(prev => ({ ...prev, [id]: !prev[id] }));

  return (
    <>
      <Head>
        <title>{t('products.meta.title')}</title>
        <meta name="description" content={t('products.meta.description')} />
      </Head>
      <Navigation />

      <main className="relative min-h-screen" style={{ zIndex: 2 }}>

        {/* Hero */}
        <section className="pt-24 pb-2">
          <div className="max-w-[90%] mx-auto px-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1 min-w-0">
                <h1 className="text-4xl md:text-5xl mb-1" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a', fontWeight: 400 }}>
                  {t('products.hero.title')}
                </h1>
                <p className="text-base mb-2" style={{ color: '#475569' }}>{t('products.hero.subtitle')}</p>
                <p className="text-sm" style={{ color: '#64748b' }}>
                  {t('products.hero.expertise')}{' '}
                  <Link href="/ueber-mich" className="hover:underline" style={{ color: '#1e3a8a' }}>{t('products.hero.learnMore')}</Link>
                </p>
              </div>
              <div className="flex gap-2 flex-shrink-0">
                <div className="px-4 py-3 rounded-lg" style={boxStyle}>
                  <p className="text-base mb-1" style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}>{t('products.tabs.medtech')}</p>
                  <div className="flex flex-wrap gap-1">
                    {['ISO 13485', 'FDA 820', 'EU MDR'].map(s => (
                      <span key={s} className="px-1.5 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className="px-4 py-3 rounded-lg opacity-60" style={boxStyle}>
                  <p className="text-base mb-1" style={{ color: '#64748b', fontFamily: "'Cormorant', serif" }}>{t('products.tabs.pharma')}</p>
                  <div className="flex flex-wrap gap-1">
                    {['GMP', 'ICH Q7'].map(s => (
                      <span key={s} className="px-1.5 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(100, 116, 139, 0.2)', color: '#64748b' }}>{s}</span>
                    ))}
                    <span className="text-xs ml-1" style={{ color: '#94a3b8' }}>{t('products.tabs.planned')}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs mt-3" style={{ color: '#64748b' }}>
              {[t('products.trust.auditBased'), t('products.trust.noGeneric'), t('products.trust.readyToUse'), t('products.trust.transparent')].map(s => (
                <span key={s} className="flex items-center gap-1"><span style={{ color: '#22c55e' }}>✓</span> {s}</span>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-6">
          <div className="max-w-[90%] mx-auto px-8">
            <div className="grid md:grid-cols-3 gap-4">
              {products.map((product) => (
                <div key={product.id} className="transition-all duration-300 p-5 rounded-lg flex flex-col hover:shadow-md"
                  style={boxStyle}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = 'rgba(30, 58, 138, 0.1)'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(30, 58, 138, 0.06)'}>

                  <div className="flex items-start justify-between mb-2">
                    <h2 className="text-2xl" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a', fontWeight: 600 }}>{product.title}</h2>
                    <span className="text-2xl font-bold flex-shrink-0" style={{ color: '#1e3a8a' }}>€{product.price}</span>
                  </div>

                  <p className="text-sm mb-3 font-medium" style={{ color: '#334155' }}>{product.oneLiner}</p>

                  <div className="flex flex-wrap gap-1 mb-3">
                    {product.standards.map((std) => (
                      <span key={std} className="px-2 py-0.5 rounded text-xs" style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)', color: '#1e3a8a' }}>{std}</span>
                    ))}
                  </div>

                  <ul className="space-y-1 mb-3 flex-grow">
                    {product.highlights.map((item, i) => (
                      <li key={i} className="flex items-start text-sm" style={{ color: '#1e293b' }}>
                        <span className="w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0" style={{ backgroundColor: '#1e3a8a' }} />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="text-xs mb-2 font-medium" style={{ color: '#475569' }}>
                    {product.docs} {t('products.bundle.docsCount')} · {product.pages} {t('products.bundle.pages')} · Word & Excel
                  </p>

                  <DocumentList documents={product.documents} isOpen={openDocs[product.id]} onToggle={() => toggleDocs(product.id)} t={t} />
                  <ProductFAQ faq={product.faq} t={t} />

                  <div className="pt-3 mt-3 border-t" style={{ borderColor: 'rgba(30, 58, 138, 0.15)' }}>
                    <div className="flex gap-2 mb-2">
                      <a href={product.gumroad.en} target="_blank" rel="noopener noreferrer"
                        className="flex-1 text-center px-3 py-2 rounded text-sm font-medium transition-all hover:scale-105" style={glassCta}>
                        🇬🇧 {t('products.bundle.buy')}
                      </a>
                      {product.gumroad.de ? (
                        <a href={product.gumroad.de} target="_blank" rel="noopener noreferrer"
                          className="flex-1 text-center px-3 py-2 rounded text-sm font-medium transition-all hover:scale-105" style={glassCta}>
                          🇩🇪 {t('products.bundle.buy')}
                        </a>
                      ) : (
                        <span className="flex-1 text-center px-3 py-2 rounded text-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#94a3b8' }}>
                          🇩🇪 {t('products.bundle.soon')}
                        </span>
                      )}
                    </div>
                    <Link href={product.href} className="block text-center px-3 py-2.5 rounded text-sm font-semibold transition-all hover:scale-[1.02]" style={glassCta}>
                      {t('products.bundle.detailsPreview')}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Included */}
        <section className="py-4">
          <div className="max-w-[90%] mx-auto px-8">
            <div className="p-5 rounded-lg" style={boxStyle}>
              <p className="font-semibold mb-3" style={{ color: '#1e293b' }}>{t('products.included.title')}</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[t('products.included.editable'), t('products.included.example'), t('products.included.license'), t('products.included.updates')].map(item => (
                  <div key={item} className="flex items-center gap-2 text-sm" style={{ color: '#1e293b' }}>
                    <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#1e3a8a' }} /> {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Coming Soon */}
        <section className="py-4">
          <div className="max-w-[90%] mx-auto px-8">
            <p className="text-sm mb-2" style={{ color: '#64748b' }}>{t('products.upcoming.title')}</p>
            <div className="flex flex-wrap gap-2">
              {upcomingMedTech.map((item) => (
                <span key={item.name} className="px-3 py-1.5 rounded text-sm" style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#64748b' }}>
                  {item.name} <span style={{ color: '#94a3b8' }}>({item.standard})</span>
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-6 pb-16">
          <div className="max-w-[90%] mx-auto px-8">
            <p className="text-sm" style={{ color: '#64748b' }}>
              {t('products.cta.custom')}{' '}
              <Link href="/kontakt" className="hover:underline" style={{ color: '#1e3a8a' }}>{t('products.cta.contact')}</Link>
            </p>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
