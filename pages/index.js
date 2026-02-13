import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';
import { tools, toolStatusConfig } from '../data/tools';
import { categories } from '../data/qm-articles';

export default function Home() {
  const { t, locale } = useTranslation();
  const isDE = locale !== 'en';

  const liveTools = tools.filter(t => t.status === 'live');
  const plannedCount = tools.filter(t => t.status === 'planned').length;

  // Pick 3 featured articles from different categories
  const featuredArticles = [
    categories.find(c => c.id === 'branchen')?.articles.find(a => a.id === 'iso-13485'),
    categories.find(c => c.id === 'methoden')?.articles.find(a => a.id === 'capa'),
    categories.find(c => c.id === 'validation')?.articles.find(a => a.id === 'process-validation'),
  ].filter(Boolean);

  const cardStyle = {
    backgroundColor: 'rgba(30, 58, 138, 0.06)',
    border: '1px solid rgba(30, 58, 138, 0.1)',
    backdropFilter: 'blur(3px)',
  };

  const cardHover = (e, enter) => {
    e.currentTarget.style.backgroundColor = enter
      ? 'rgba(30, 58, 138, 0.10)'
      : 'rgba(30, 58, 138, 0.06)';
    e.currentTarget.style.transform = enter ? 'translateY(-2px)' : 'translateY(0)';
  };

  return (
    <>
      <Head>
        <title>{isDE
          ? 'QCore Consulting | QM-Tools, Templates & Beratung für MedTech & Pharma'
          : 'QCore Consulting | QM Tools, Templates & Consulting for MedTech & Pharma'}</title>
        <meta name="description" content={isDE
          ? 'Kostenlose QM-Tools, audit-fertige Templates und Beratung für MedTech & Pharma. ISO 13485, FDA 21 CFR 820, EU MDR, GMP.'
          : 'Free QM tools, audit-ready templates and consulting for MedTech & Pharma. ISO 13485, FDA 21 CFR 820, EU MDR, GMP.'} />
      </Head>

      <Navigation />

      <main className="relative">

        {/* ─── THREE PILLARS ─── */}
        <section className="relative pt-20 pb-6 lg:pt-24 lg:pb-10">
          <div className="relative z-10 max-w-[90%] mx-auto px-6 lg:px-16">
            <div className="grid md:grid-cols-3 gap-5">

              {/* ── TOOLS ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-xl p-6 lg:p-8 flex flex-col transition-all duration-300 cursor-default"
                style={cardStyle}
                onMouseEnter={e => cardHover(e, true)}
                onMouseLeave={e => cardHover(e, false)}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-1">
                  <h2
                    className="text-2xl lg:text-3xl"
                    style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, color: '#0f172a' }}
                  >
                    Tools
                  </h2>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: 'rgba(34, 197, 94, 0.1)',
                      color: '#16a34a',
                      border: '1px solid rgba(34, 197, 94, 0.25)',
                    }}
                  >
                    {isDE ? 'Kostenlos' : 'Free'}
                  </span>
                </div>
                <p className="text-sm mb-5" style={{ color: '#64748b' }}>
                  {isDE
                    ? 'Normgerecht rechnen, bewerten, prüfen.'
                    : 'Calculate, assess, verify — standards-compliant.'}
                </p>

                {/* Live Tools */}
                <div className="space-y-3 flex-grow">
                  {liveTools.map(tool => (
                    <Link
                      key={tool.id}
                      href={tool.slug}
                      className="flex items-start gap-3 group/item"
                    >
                      <span className="text-xl flex-shrink-0 mt-0.5">{tool.icon}</span>
                      <div>
                        <span
                          className="text-sm font-medium group-hover/item:underline"
                          style={{ color: '#1e293b' }}
                        >
                          {isDE ? tool.name : (tool.nameEn || tool.name)}
                        </span>
                        <p className="text-xs" style={{ color: '#64748b' }}>
                          {isDE ? tool.description : tool.descriptionEn}
                        </p>
                      </div>
                    </Link>
                  ))}

                  {/* Planned indicator */}
                  {plannedCount > 0 && (
                    <p className="text-xs pt-1" style={{ color: '#94a3b8' }}>
                      + {plannedCount} {isDE ? 'weitere in Planung' : 'more planned'}
                    </p>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href="/tools"
                  className="mt-5 block text-center py-2.5 rounded-lg text-sm font-medium transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'rgba(34, 197, 94, 0.1)',
                    border: '1px solid rgba(34, 197, 94, 0.25)',
                    color: '#16a34a',
                  }}
                >
                  {isDE ? 'Alle Tools →' : 'All Tools →'}
                </Link>
              </motion.div>

              {/* ── TEMPLATES ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl p-6 lg:p-8 flex flex-col transition-all duration-300 cursor-default"
                style={cardStyle}
                onMouseEnter={e => cardHover(e, true)}
                onMouseLeave={e => cardHover(e, false)}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-1">
                  <h2
                    className="text-2xl lg:text-3xl"
                    style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, color: '#0f172a' }}
                  >
                    Templates
                  </h2>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: 'rgba(30, 58, 138, 0.08)',
                      color: '#1e3a8a',
                      border: '1px solid rgba(30, 58, 138, 0.15)',
                    }}
                  >
                    {isDE ? 'ab €79' : 'from €79'}
                  </span>
                </div>
                <p className="text-sm mb-5" style={{ color: '#64748b' }}>
                  {isDE
                    ? 'Audit-fertige QM-Dokumentation. Sofort einsetzbar.'
                    : 'Audit-ready QM documentation. Ready to use.'}
                </p>

                {/* Products */}
                <div className="space-y-3 flex-grow">
                  {[
                    {
                      title: 'CAPA System',
                      price: '€129',
                      desc: isDE ? '7 Dokumente · SOP, RCA-Toolkit, Tracking' : '7 documents · SOP, RCA toolkit, tracking',
                      href: '/produkte/capa-system',
                      standards: 'ISO 13485 · FDA 820.100',
                    },
                    {
                      title: 'NC Management',
                      price: '€99',
                      desc: isDE ? '7 Dokumente · Bewertungsmatrix, Eskalation' : '7 documents · Assessment matrix, escalation',
                      href: '/produkte/nc-system',
                      standards: 'ISO 13485 · FDA 820.90',
                    },
                    {
                      title: 'Audit Prep Kit',
                      price: '€79',
                      desc: isDE ? '8 Dokumente · Checklisten, Interviewfragen' : '8 documents · Checklists, interview questions',
                      href: '/produkte/audit-prep-kit',
                      standards: 'ISO 13485 · ISO 19011',
                    },
                  ].map(product => (
                    <Link
                      key={product.title}
                      href={product.href}
                      className="block group/item"
                    >
                      <div className="flex items-start justify-between">
                        <span
                          className="text-sm font-medium group-hover/item:underline"
                          style={{ color: '#1e293b' }}
                        >
                          {product.title}
                        </span>
                        <span className="text-sm font-semibold flex-shrink-0 ml-2" style={{ color: '#1e3a8a' }}>
                          {product.price}
                        </span>
                      </div>
                      <p className="text-xs" style={{ color: '#64748b' }}>
                        {product.desc}
                      </p>
                    </Link>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/produkte"
                  className="mt-5 block text-center py-2.5 rounded-lg text-sm font-medium transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'rgba(191, 219, 254, 0.35)',
                    border: '1px solid rgba(191, 219, 254, 0.5)',
                    color: '#1e3a8a',
                  }}
                >
                  {isDE ? 'Alle Templates →' : 'All Templates →'}
                </Link>
              </motion.div>

              {/* ── CONSULTING ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-xl p-6 lg:p-8 flex flex-col transition-all duration-300 cursor-default"
                style={cardStyle}
                onMouseEnter={e => cardHover(e, true)}
                onMouseLeave={e => cardHover(e, false)}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-1">
                  <h2
                    className="text-2xl lg:text-3xl"
                    style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, color: '#0f172a' }}
                  >
                    Consulting
                  </h2>
                  <span
                    className="text-xs px-2.5 py-1 rounded-full font-medium"
                    style={{
                      backgroundColor: 'rgba(30, 58, 138, 0.08)',
                      color: '#1e3a8a',
                      border: '1px solid rgba(30, 58, 138, 0.15)',
                    }}
                  >
                    {isDE ? 'Auf Anfrage' : 'On request'}
                  </span>
                </div>
                <p className="text-sm mb-5" style={{ color: '#64748b' }}>
                  {isDE
                    ? 'QMS-Aufbau, Audit-Vorbereitung, Training.'
                    : 'QMS setup, audit preparation, training.'}
                </p>

                {/* Services */}
                <div className="space-y-3 flex-grow">
                  {[
                    {
                      title: isDE ? 'QM-System Aufbau' : 'QMS Setup',
                      desc: isDE ? 'Von der Gap-Analyse bis zum Zertifizierungsaudit.' : 'From gap analysis to certification audit.',
                      tags: ['ISO 13485', 'GMP'],
                    },
                    {
                      title: isDE ? 'Audit-Vorbereitung' : 'Audit Preparation',
                      desc: isDE ? 'Systematisch vorbereiten statt Aktionismus.' : 'Systematic preparation, not firefighting.',
                      tags: ['Mock-Audit', 'Gap-Analyse'],
                    },
                    {
                      title: isDE ? 'Training & Workshops' : 'Training & Workshops',
                      desc: isDE ? 'CAPA, FMEA, Root Cause — praxisnah.' : 'CAPA, FMEA, Root Cause — hands-on.',
                      tags: ['Inhouse', 'Remote'],
                    },
                  ].map(service => (
                    <div key={service.title}>
                      <span className="text-sm font-medium" style={{ color: '#1e293b' }}>
                        {service.title}
                      </span>
                      <p className="text-xs mb-1" style={{ color: '#64748b' }}>
                        {service.desc}
                      </p>
                      <div className="flex gap-1">
                        {service.tags.map(tag => (
                          <span
                            key={tag}
                            className="text-[10px] px-1.5 py-0.5 rounded"
                            style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', color: '#64748b' }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="/kontakt"
                  className="mt-5 block text-center py-2.5 rounded-lg text-sm font-medium transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'rgba(191, 219, 254, 0.35)',
                    border: '1px solid rgba(191, 219, 254, 0.5)',
                    color: '#1e3a8a',
                  }}
                >
                  {isDE ? 'Erstgespräch vereinbaren →' : 'Schedule a call →'}
                </Link>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ─── QM-WISSEN TEASER ─── */}
        <section className="relative py-8 lg:py-12">
          <div className="relative z-10 max-w-[90%] mx-auto px-6 lg:px-16">

            <div className="flex items-center justify-between mb-5">
              <h2
                className="text-xl lg:text-2xl"
                style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, color: '#1e293b' }}
              >
                {isDE ? 'QM-Wissen' : 'QM Knowledge'}
              </h2>
              <Link
                href="/qm-wissen"
                className="text-sm hover:underline"
                style={{ color: '#1e3a8a' }}
              >
                {isDE ? 'Alle Artikel →' : 'All articles →'}
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {featuredArticles.map(article => (
                <Link
                  key={article.id}
                  href={article.url}
                  className="rounded-lg p-5 transition-all duration-300 hover:shadow-md group/article"
                  style={cardStyle}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(30, 58, 138, 0.10)'; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(30, 58, 138, 0.06)'; }}
                >
                  <p
                    className="text-base font-medium mb-1 group-hover/article:underline"
                    style={{ fontFamily: "'Cormorant', serif", color: '#1e293b' }}
                  >
                    {article.title}
                  </p>
                  <div className="flex items-center gap-3 text-xs" style={{ color: '#64748b' }}>
                    <span>{article.time}</span>
                    <span>
                      {'●'.repeat(article.level)}{'○'.repeat(3 - article.level)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
