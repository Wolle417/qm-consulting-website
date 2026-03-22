import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { insights, getInsightBySlug } from '../../data/insights';
import { useTranslation } from '../../hooks/useTranslation';

import { InsuletOmnipodRecall } from '../../data/articles/insights/insulet-omnipod-recall';
import { StrykerCyberattack } from '../../data/articles/insights/stryker-cyberattack';

const articleComponents = {
  'insulet-omnipod-recall-2026': InsuletOmnipodRecall,
  'stryker-cyberangriff-2026': StrykerCyberattack,
};

const boxStyle = {
  backgroundColor: 'rgba(30, 58, 138, 0.06)',
  border: '1px solid rgba(30, 58, 138, 0.1)',
  backdropFilter: 'blur(3px)',
};

function ImageCarousel({ images }) {
  const [idx, setIdx] = useState(0);
  if (!images || images.length === 0) return null;
  const prev = () => setIdx((idx - 1 + images.length) % images.length);
  const next = () => setIdx((idx + 1) % images.length);

  return (
    <div>
      <div className="relative rounded-lg overflow-hidden" style={{ ...boxStyle, padding: 0 }}>
        <img src={images[idx].src} alt={images[idx].caption || ''} style={{ display: 'block', width: '100%', height: 'auto' }} />
        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: 'rgba(255,255,255,0.85)', color: '#1e293b', fontSize: '14px', border: '1px solid rgba(30,58,138,0.15)' }}>‹</button>
            <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full flex items-center justify-center transition-all hover:scale-110"
              style={{ backgroundColor: 'rgba(255,255,255,0.85)', color: '#1e293b', fontSize: '14px', border: '1px solid rgba(30,58,138,0.15)' }}>›</button>
          </>
        )}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} className="w-1.5 h-1.5 rounded-full transition-all"
                style={{ backgroundColor: i === idx ? '#1e3a8a' : 'rgba(30,58,138,0.25)' }} />
            ))}
          </div>
        )}
      </div>
      {images[idx].caption && <p className="text-xs mt-1.5 text-center" style={{ color: '#64748b' }}>{images[idx].caption}</p>}
    </div>
  );
}

function InsightsSidebar({ insights, activeSlug, isDE }) {
  return (
    <nav className="space-y-1">
      {insights.map((insight) => {
        const isActive = insight.slug === activeSlug;
        return (
          <Link key={insight.slug} href={`/insights/${insight.slug}`}
            className="block rounded-md px-3 py-2 transition-all duration-200"
            style={{
              backgroundColor: isActive ? 'rgba(30, 58, 138, 0.12)' : 'transparent',
              border: isActive ? '1px solid rgba(30, 58, 138, 0.18)' : '1px solid transparent',
            }}>
            <p className="text-xs leading-snug" style={{
              fontFamily: "'Cormorant', serif",
              fontWeight: isActive ? 700 : 500,
              color: isActive ? '#0f172a' : '#475569',
            }}>
              <span className="text-[10px]" style={{ color: '#64748b', fontFamily: 'Inter, sans-serif', fontWeight: 400 }}>
                {new Date(insight.date).toLocaleDateString(isDE ? 'de-DE' : 'en-US', { day: '2-digit', month: '2-digit', year: '2-digit' })}
              </span>
              {' '}
              {isDE ? insight.title : insight.titleEn}
            </p>
            <div className="flex items-center gap-1.5 mt-1">
              <span
                className="text-[8px] font-semibold uppercase tracking-wider px-1 py-px rounded"
                style={{
                  backgroundColor: `${insight.categoryColor}10`,
                  color: insight.categoryColor,
                  border: `1px solid ${insight.categoryColor}20`,
                }}
              >
                {insight.category}
              </span>
              <span className="text-[9px]" style={{ color: '#94a3b8' }}>{insight.readTime}</span>
            </div>
          </Link>
        );
      })}
    </nav>
  );
}

function ArticleView({ insight, isDE }) {
  const ArticleContent = articleComponents[insight.slug];
  if (!ArticleContent) return null;

  return (
    <motion.article key={insight.slug} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
      {insight.images && insight.images.length > 0 && (
        <div style={{ float: 'right', width: 'clamp(320px, 42%, 520px)', marginLeft: '1.5rem', marginBottom: '1rem', marginTop: '0.25rem' }}>
          <ImageCarousel images={insight.images} />
        </div>
      )}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-xs font-semibold uppercase tracking-wider px-2 py-0.5 rounded"
          style={{ backgroundColor: `${insight.categoryColor}10`, color: insight.categoryColor, border: `1px solid ${insight.categoryColor}25` }}>
          {insight.category}
        </span>
        <span className="text-sm" style={{ color: '#64748b' }}>
          {new Date(insight.date).toLocaleDateString(isDE ? 'de-DE' : 'en-US', { day: '2-digit', month: 'long', year: 'numeric' })}
        </span>
        <span className="text-sm" style={{ color: '#94a3b8' }}>{insight.readTime}</span>
      </div>
      <h1 className="text-3xl lg:text-4xl mb-3" style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, color: '#0f172a', lineHeight: 1.15 }}>
        {isDE ? insight.title : insight.titleEn}
      </h1>
      <p className="text-lg mb-8" style={{ color: '#475569', lineHeight: 1.5 }}>
        {isDE ? insight.teaser : insight.teaserEn}
      </p>
      <div className="mb-8" style={{ height: '1px', background: 'linear-gradient(to right, rgba(30, 58, 138, 0.15), transparent)' }} />
      <div className="insight-body"><ArticleContent isDE={isDE} /></div>
      <div style={{ clear: 'both' }} />
      <div className="mt-12 pt-6" style={{ borderTop: '1px solid rgba(30, 58, 138, 0.1)' }}>
        <p className="text-sm" style={{ color: '#64748b' }}>Stefan Schönwälder · QCore Consulting · kontakt@qcore-consulting.de</p>
      </div>
    </motion.article>
  );
}

export async function getStaticPaths() {
  const locales = ['de', 'en'];
  const paths = [];
  for (const locale of locales) {
    for (const insight of insights) {
      paths.push({ params: { slug: insight.slug }, locale });
    }
  }
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return { props: { slug: params.slug } };
}

export default function InsightPage({ slug }) {
  const { locale } = useTranslation();
  const isDE = locale !== 'en';
  const insight = getInsightBySlug(slug);
  if (!insight) return null;

  return (
    <>
      <Head>
        <title>{`${isDE ? insight.title : insight.titleEn} | QCore Insights`}</title>
        <meta name="description" content={isDE ? insight.teaser : insight.teaserEn} />
      </Head>
      <Navigation />
      <main className="relative pt-16 pb-16" style={{ zIndex: 2 }}>
        <div className="w-full px-3 lg:px-6">
          <div className="flex gap-5">
            <aside className="hidden lg:block flex-shrink-0 rounded-lg p-3 self-start sticky top-16 overflow-y-auto"
              style={{ ...boxStyle, width: '300px', maxHeight: 'calc(100vh - 80px)' }}>
              <h2 className="text-xs mb-2 px-2 uppercase tracking-wider font-semibold" style={{ color: '#64748b' }}>Insights</h2>
              <InsightsSidebar insights={insights} activeSlug={slug} isDE={isDE} />
            </aside>
            <div className="flex-1 min-w-0">
              <ArticleView insight={insight} isDE={isDE} />
            </div>
          </div>
        </div>
      </main>
      <style jsx global>{`
        .insight-body h2 { font-family: 'Cormorant', serif; font-weight: 600; color: #0f172a; font-size: 1.75rem; margin-top: 2.5rem; margin-bottom: 1rem; line-height: 1.25; }
        .insight-body h3 { font-family: 'Cormorant', serif; font-weight: 600; color: #1e293b; font-size: 1.35rem; margin-top: 2rem; margin-bottom: 0.75rem; }
        .insight-body p { color: #334155; font-size: 1.0625rem; line-height: 1.75; margin-bottom: 1.25rem; }
        .insight-body strong { color: #0f172a; font-weight: 600; }
        .insight-body a { color: #1e3a8a; text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }
        .insight-body a:hover { color: #334155; }
        .insight-body img { border-radius: 0.75rem; border: 1px solid rgba(30, 58, 138, 0.1); margin: 1.5rem 0; width: 100%; }
        .insight-body .image-caption { text-align: center; font-size: 0.875rem; color: #64748b; margin-top: -0.75rem; margin-bottom: 1.5rem; }
        .insight-body blockquote { border-left: 3px solid rgba(30, 58, 138, 0.2); padding-left: 1.25rem; margin: 1.5rem 0; color: #475569; font-style: italic; }
        .insight-body .source-box { background-color: rgba(30, 58, 138, 0.04); border: 1px solid rgba(30, 58, 138, 0.08); border-radius: 0.75rem; padding: 1.25rem; margin-top: 2.5rem; }
        .insight-body .source-box p { font-size: 0.875rem; color: #475569; margin-bottom: 0.5rem; }
        .insight-body .source-box p:last-child { margin-bottom: 0; }
      `}</style>
      <Footer />
    </>
  );
}
