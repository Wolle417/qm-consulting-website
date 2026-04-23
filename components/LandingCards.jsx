'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

/**
 * LandingCards \u2014 drei Glass-Container f\u00fcr die Startseite:
 *   1) Consulting   2) Templates   3) (free) Tools
 *
 * Design: siehe DESIGN/DESIGN-SYSTEM.md (Glassmorphism Boxes).
 * Animation: staggered scroll-reveal via framer-motion + subtiles hover-scale.
 */
export default function LandingCards() {
  const { locale } = useTranslation();
  const isDE = locale !== 'en';

  const ARROW = '\u2192';     // right arrow
  const EURO  = '\u20ac';     // euro sign
  const DASH  = '\u2014';     // em dash

  const cards = [
    {
      key: 'consulting',
      href: '/qm-beratung',
      tag: isDE ? 'Beratung' : 'Consulting',
      title: 'Consulting',
      subtitle: isDE
        ? 'QM-Systeme f\u00fcr regulierte Industrien.'
        : 'QM systems for regulated industries.',
      items: isDE
        ? [
            'QM-System Aufbau & Zertifizierung (ISO 9001 / 13485)',
            'Risikomanagement (FMEA, ISO 14971)',
            'Audit-Vorbereitung & Training',
          ]
        : [
            'QMS setup & certification (ISO 9001 / 13485)',
            'Risk management (FMEA, ISO 14971)',
            'Audit preparation & training',
          ],
      cta: isDE ? 'Beratung ansehen' : 'Explore consulting',
    },
    {
      key: 'templates',
      href: '/produkte',
      tag: 'Templates',
      title: 'Templates',
      subtitle: isDE
        ? `Audit-fertige Bundles ${DASH} sofort einsetzbar.`
        : `Audit-ready bundles ${DASH} ready to use.`,
      items: [
        `CAPA System Bundle ${DASH} ${EURO}189`,
        `NC Management Bundle ${DASH} ${EURO}139`,
        `Audit Prep Kit ${DASH} ${EURO}279`,
      ],
      cta: isDE ? 'Templates ansehen' : 'Browse templates',
    },
    {
      key: 'tools',
      href: '/tools',
      tag: 'FREE',
      title: '(Free) Tools',
      subtitle: isDE
        ? 'Kein Login, keine E-Mail.'
        : 'No login, no email.',
      items: isDE
        ? [
            'NC-Triage + Justifier',
            'Stichprobenrechner (AQL / Cpk)',
            'Readiness-Check',
          ]
        : [
            'NC-Triage + Justifier',
            'Sample size calculator (AQL / Cpk)',
            'Readiness check',
          ],
      cta: isDE ? 'Alle Tools' : 'All tools',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' },
    },
  };

  return (
    <section className="relative z-10 pt-4 pb-16">
      <div className="max-w-[90%] mx-auto px-6">
        <motion.div
          className="grid md:grid-cols-3 gap-5"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {cards.map((c) => (
            <motion.div key={c.key} variants={item}>
              <Link href={c.href} className="group block h-full">
                <div
                  className="p-8 rounded-xl h-full flex flex-col transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
                  style={{
                    backgroundColor: 'rgba(30, 58, 138, 0.06)',
                    border: '1px solid rgba(30, 58, 138, 0.12)',
                    backdropFilter: 'blur(3px)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(30, 58, 138, 0.09)';
                    e.currentTarget.style.borderColor = 'rgba(30, 58, 138, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(30, 58, 138, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(30, 58, 138, 0.12)';
                  }}
                >
                  {/* Title */}
                  <h3
                    className="mb-3"
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 900,
                      fontSize: '1.35rem',
                      letterSpacing: '0',
                      wordSpacing: '0.6em',
                      textTransform: 'uppercase',
                      color: 'rgba(30, 58, 138, 0.85)',
                      lineHeight: 1.15,
                    }}
                  >
                    {c.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="text-base mb-5 leading-relaxed" style={{ color: '#334155' }}>
                    {c.subtitle}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {c.items.map((line, i) => (
                      <li key={i} className="flex items-start">
                        <span
                          className="w-1.5 h-1.5 rounded-full mr-3 mt-2.5 flex-shrink-0"
                          style={{ backgroundColor: '#1e3a8a' }}
                        />
                        <span className="text-sm leading-relaxed" style={{ color: '#1e293b' }}>
                          {line}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Subtle CTA link (no button) */}
                  <div
                    className="text-sm font-medium inline-flex items-center gap-1 transition-all"
                    style={{ color: '#1e3a8a' }}
                  >
                    <span>{c.cta}</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      {ARROW}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
