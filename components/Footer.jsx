'use client';

import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t, locale } = useTranslation();

  const navLinks = locale === 'de' ? [
    { href: '/', label: 'Start' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/referenz-projekt', label: 'Praxisbeispiel' },
    { href: '/produkte', label: 'Produkte' },
    { href: '/ueber-mich', label: 'Über mich' },
  ] : [
    { href: '/', label: 'Home' },
    { href: '/leistungen', label: 'Services' },
    { href: '/referenz-projekt', label: 'Case Study' },
    { href: '/produkte', label: 'Products' },
    { href: '/ueber-mich', label: 'About' },
  ];

  const knowledgeLinks = locale === 'de' ? [
    { href: '/qm-wissen', label: 'QM-Wissen' },
    { href: '/qmb-trainer', label: 'QMB Trainer' },
    { href: '/impressum', label: 'Impressum' },
    { href: '/datenschutz', label: 'Datenschutz' },
  ] : [
    { href: '/qm-wissen', label: 'QM Knowledge' },
    { href: '/qmb-trainer', label: 'QMB Trainer' },
    { href: '/impressum', label: 'Imprint' },
    { href: '/datenschutz', label: 'Privacy Policy' },
  ];

  return (
    <footer className="py-12 px-6 border-t border-border-dark relative z-10">
      <div className="max-w-[90%] mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Spalte 1: Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>
              QCORE CONSULTING
            </h3>
            <p className="text-sm" style={{ color: '#000000' }}>
              {locale === 'de' 
                ? <>Spezialist für Quality Management<br />in hochregulierten Industrien</>
                : <>Specialist for Quality Management<br />in highly regulated industries</>
              }
            </p>
          </div>

          {/* Spalte 2: Navigation */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: '#000000' }}>Navigation</h4>
            <ul className="space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-qcore-blue transition-colors" style={{ color: '#000000' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 3: Wissen & Training */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: '#000000' }}>
              {locale === 'de' ? 'Wissen & Training' : 'Knowledge & Training'}
            </h4>
            <ul className="space-y-2 text-sm">
              {knowledgeLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-qcore-blue transition-colors" style={{ color: '#000000' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Spalte 4: Kontakt */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: '#000000' }}>
              {locale === 'de' ? 'Kontakt' : 'Contact'}
            </h4>
            <p className="text-sm mb-2" style={{ color: '#000000' }}>Herzogenaurach / Remote</p>
            <a
              href="mailto:kontakt@qcore-consulting.de"
              className="text-sm hover:text-qcore-blue transition-colors block"
              style={{ color: '#000000' }}
            >
              kontakt@qcore-consulting.de
            </a>
            <a
              href="https://www.linkedin.com/in/stefan-sch%C3%B6nw%C3%A4lder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm hover:text-qcore-blue transition-colors mt-2"
              style={{ color: '#000000' }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border-subtle text-center text-sm" style={{ color: '#000000' }}>
          <p>© {currentYear} QCore Consulting. {t('footer.rights')}</p>
        </div>
      </div>
    </footer>
  );
}
