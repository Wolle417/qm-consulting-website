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
              className="text-sm hover:text-qcore-blue transition-colors"
              style={{ color: '#000000' }}
            >
              kontakt@qcore-consulting.de
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
