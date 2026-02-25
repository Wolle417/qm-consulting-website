'use client';

import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { locale } = useTranslation();
  const isDE = locale !== 'en';

  const legalLinks = [
    { href: '/impressum', label: isDE ? 'Impressum' : 'Imprint' },
    { href: '/datenschutz', label: isDE ? 'Datenschutz' : 'Privacy' },
    { href: '/agb', label: isDE ? 'AGB' : 'Terms' },
  ];

  return (
    <footer className="py-10 px-5 border-t relative z-10" style={{ borderColor: 'rgba(30, 58, 138, 0.1)' }}>

      {/* Main row: Brand left, Contact right */}
      <div className="flex flex-col sm:flex-row justify-between items-start gap-6 mb-8">
        <div>
          <h3 className="text-lg font-bold" style={{ color: '#0f172a' }}>
            QCORE CONSULTING
          </h3>
          <p className="text-sm mt-1" style={{ color: '#475569' }}>
            {isDE
              ? 'Quality Management für hochregulierte Industrien'
              : 'Quality Management for highly regulated industries'}
          </p>
        </div>

        <div className="sm:text-right">
          <p className="text-sm" style={{ color: '#475569' }}>Herzogenaurach / Remote</p>
          <a
            href="mailto:kontakt@qcore-consulting.de"
            className="text-sm hover:text-qcore-blue transition-colors"
            style={{ color: '#0f172a' }}
          >
            kontakt@qcore-consulting.de
          </a>
          <div className="mt-1.5">
            <a
              href="https://www.linkedin.com/in/stefan-sch%C3%B6nw%C3%A4lder"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm hover:text-qcore-blue transition-colors"
              style={{ color: '#0f172a' }}
            >
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      {/* Bottom: © left, Legal right */}
      <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ borderColor: 'rgba(30, 58, 138, 0.08)', color: '#475569' }}>
        <p>© {currentYear} QCore Consulting</p>
        <div className="flex items-center gap-4">
          {legalLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-qcore-blue transition-colors"
              style={{ color: '#475569' }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
