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
          ? 'QCore Consulting | QM-Beratung, Templates & Tools für MedTech & Pharma'
          : 'QCore Consulting | QM Consulting, Templates & Tools for MedTech & Pharma'}</title>
        <meta name="description" content={isDE
          ? 'QM-Beratung, audit-fertige Templates und kostenlose Tools für MedTech & Pharma. ISO 13485, FDA 21 CFR 820, EU MDR, GMP.'
          : 'QM consulting, audit-ready templates and free tools for MedTech & Pharma. ISO 13485, FDA 21 CFR 820, EU MDR, GMP.'} />
      </Head>

      <Navigation />

      <main className="relative">

        {/* ─── HERO: Big Logo ─── */}
        <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24">
          <div className="relative z-10 max-w-[90%] mx-auto px-6 lg:px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-start"
            >
              <h1
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: 'clamp(4rem, 8vw, 7rem)',
                  fontWeight: 500,
                  color: '#1e293b',
                  lineHeight: 0.9,
                }}
              >
                QCore
              </h1>
              <div
                className="mt-2 mb-1"
                style={{
                  width: '80px',
                  height: '2px',
                  background: 'linear-gradient(to right, #64748b, transparent)',
                }}
              />
              <p
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: 'clamp(1rem, 1.8vw, 1.35rem)',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: '#64748b',
                }}
              >
                Consulting
              </p>
            </motion.div>
          </div>
        </section>

        {/* ─── THREE PILLARS: Consulting | Templates | Tools & Wissen ─── */}
        <section className="relative pb-16 lg:pb-24">
          <div className="relative z-10 max-w-[90%] mx-auto px-6 lg:px-16">
            <div className="grid md:grid-cols-3 gap-5">

              {/* ── 1. CONSULTING (links) ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-xl p-6 lg:p-8 flex flex-col transition-all duration-300 cursor-default"
                style={cardStyle}
                onMouseEnter={e => cardHover(e, true)}
                onMouseLeave={e => cardHover(e, false)}
              >
                <div className="mb-1">
                  <h2
                    className="text-2xl lg:text-3xl"
                    style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, color: '#0f172a' }}
                  >
                    Consulting
                  </h2>
                </div>
                <p className="text-sm mb-5" style={{ color: '#64748b' }}>
                  {isDE
                    ? 'QMS-Aufbau, Audit-Vorbereitung, Training.'
                    : 'QMS setup, audit preparation, training.'}
                </p>

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

              {/* ── 2. TEMPLATES (Mitte) ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl p-6 lg:p-8 flex flex-col transition-all duration-300 cursor-default"
                style={cardStyle}
                onMouseEnter={e => cardHover(e, true)}
                onMouseLeave={e => cardHover(e, false)}
              >
                <div className="mb-1">
                  <h2
                    className="text-2xl lg:text-3xl"
                    style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, color: '#0f172a' }}
                  >
                    Templates
                  </h2>
                </div>
                <p className="text-sm mb-5" style={{ color: '#64748b' }}>
                  {isDE
                    ? 'Audit-fertige QM-Dokumentation. Sofort einsetzbar.'
                    : 'Audit-ready QM documentation. Ready to use.'}
                </p>

                <div className="space-y-3 flex-grow">
                  {[
                    {
                      title: 'CAPA System',
                      price: '€129',
                      desc: isDE ? '7 Dokumente · SOP, RCA-Toolkit, Tracking' : '7 documents · SOP, RCA toolkit, tracking',
                      href: '/produkte/capa-system',
                    },
                    {
                      title: 'NC Management',
                      price: '€99',
                      desc: isDE ? '7 Dokumente · Bewertungsmatrix, Eskalation' : '7 documents · Assessment matrix, escalation',
                      href: '/produkte/nc-system',
                    },
                    {
                      title: 'Audit Prep Kit',
                      price: '€79',
                      desc: isDE ? '8 Dokumente · Checklisten, Interviewfragen' : '8 documents · Checklists, interview questions',
                      href: '/produkte/audit-prep-kit',
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

              {/* ── 3. TOOLS & WISSEN (rechts) ── */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="rounded-xl p-6 lg:p-8 flex flex-col transition-all duration-300 cursor-default"
                style={cardStyle}
                onMouseEnter={e => cardHover(e, true)}
                onMouseLeave={e => cardHover(e, false)}
              >
                <div className="flex items-center justify-between mb-1">
                  <h2
                    className="text-2xl lg:text-3xl"
                    style={{ fontFamily: "'Cormorant', serif", fontWeight: 600, color: '#0f172a' }}
                  >
                    {isDE ? 'Tools & Wissen' : 'Tools & Knowledge'}
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
                    ? 'Rechnen, lernen, testen — normgerecht.'
                    : 'Calculate, learn, test — standards-compliant.'}
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

                  {plannedCount > 0 && (
                    <p className="text-xs" style={{ color: '#94a3b8' }}>
                      + {plannedCount} {isDE ? 'weitere Tools in Planung' : 'more tools planned'}
                    </p>
                  )}

                  {/* Divider */}
                  <div className="pt-1" style={{ borderTop: '1px solid rgba(30, 58, 138, 0.08)' }} />

                  {/* QM-Wissen */}
                  <Link
                    href="/qm-wissen"
                    className="flex items-start gap-3 group/item"
                  >
                    <span className="text-xl flex-shrink-0 mt-0.5">📚</span>
                    <div>
                      <span
                        className="text-sm font-medium group-hover/item:underline"
                        style={{ color: '#1e293b' }}
                      >
                        {isDE ? 'QM-Wissen' : 'QM Knowledge'}
                      </span>
                      <p className="text-xs" style={{ color: '#64748b' }}>
                        {isDE ? 'Artikel zu ISO 13485, CAPA, FMEA & mehr' : 'Articles on ISO 13485, CAPA, FMEA & more'}
                      </p>
                    </div>
                  </Link>

                  {/* QMB-Trainer */}
                  <Link
                    href="/qmb-trainer"
                    className="flex items-start gap-3 group/item"
                  >
                    <span className="text-xl flex-shrink-0 mt-0.5">🎓</span>
                    <div>
                      <span
                        className="text-sm font-medium group-hover/item:underline"
                        style={{ color: '#1e293b' }}
                      >
                        {isDE ? 'QMB-Prüfungstrainer' : 'QMB Exam Trainer'}
                      </span>
                      <p className="text-xs" style={{ color: '#64748b' }}>
                        {isDE ? 'Multiple-Choice für die QMB-Zertifizierung' : 'Multiple choice for QMB certification'}
                      </p>
                    </div>
                  </Link>
                </div>

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

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
