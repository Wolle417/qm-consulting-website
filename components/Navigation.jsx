'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';
import { tools } from '../data/tools';

function NavDropdown({ label, href, items, isOpen, onOpen, onClose, minWidth = 220 }) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link
        href={href || '#'}
        className="hover:opacity-60 transition-opacity"
        style={{ fontFamily: "'Cormorant', serif", fontSize: '1.1rem', fontWeight: 400, color: '#000000' }}
      >
        {label}
      </Link>
      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 py-2 rounded-lg shadow-xl border"
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            backdropFilter: 'blur(8px)',
            borderColor: 'rgba(30, 58, 138, 0.15)',
            zIndex: 200,
            minWidth: `${minWidth}px`,
          }}
        >
          {items.map((item, idx) =>
            item.divider ? (
              <div key={idx} className="my-2 border-t" style={{ borderColor: 'rgba(30, 58, 138, 0.1)' }} />
            ) : item.isHeader ? (
              <div key={idx} className="px-4 py-2 flex items-center justify-between" style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)' }}>
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#000000' }}>{item.label}</span>
                {item.badge && <span className="text-xs" style={{ color: '#475569' }}>{item.badge}</span>}
              </div>
            ) : item.disabled ? (
              <div key={idx} className="px-4 py-2 text-sm" style={{ color: '#94a3b8', fontFamily: "'Cormorant', serif" }}>
                {item.label} <span className="text-xs">(Coming Soon)</span>
              </div>
            ) : (
              <Link key={idx} href={item.href} onClick={onClose} className="block px-4 py-2 hover:bg-blue-50 transition-colors"
                style={{ fontFamily: "'Cormorant', serif", fontSize: '1rem', color: item.highlight ? '#16a34a' : '#000000', fontWeight: item.highlight ? 500 : 400 }}>
                <span className="flex items-center justify-between">
                  <span className="flex flex-col">
                    <span>{item.label}</span>
                    {item.subtitle && <span className="text-xs" style={{ color: '#475569' }}>{item.subtitle}</span>}
                  </span>
                  <span className="flex items-center gap-2">
                    {item.price && <span className="text-sm font-medium" style={{ color: '#000000' }}>{item.price}</span>}
                  </span>
                </span>
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}

const navLinkStyle = {
  fontFamily: "'Cormorant', serif",
  fontSize: '1.1rem',
  fontWeight: 400,
  color: '#000000',
};

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const { t, locale, switchLocale } = useTranslation();
  const isDE = locale === 'de';

  useEffect(() => {
    return () => { if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current); };
  }, []);

  const openDropdownFn = (name) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(name);
  };
  const closeDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const leistungenItems = [
    { label: t('nav.dropdown.qmKmu'), href: '/qm-beratung', subtitle: 'MedTech · Pharma' },
    { label: t('nav.dropdown.riskMgmt'), href: '/risikomanagement', subtitle: 'FMEA · ISO 14971' },
    { divider: true },
    { label: t('nav.dropdown.auditPrep'), href: '/audit-vorbereitung' },
    { label: t('nav.dropdown.training'), href: '/training' },
    { divider: true },
    { label: t('nav.dropdown.gmpDoc'), href: '/referenz-projekt' },
  ];

  const toolsItems = [
    ...tools.filter(tool => tool.status === 'live').map(tool => ({
      label: isDE ? tool.name : (tool.nameEn || tool.name),
      href: tool.slug,
      subtitle: isDE ? tool.description : tool.descriptionEn,
    })),
    { divider: true },
    { label: isDE ? 'Alle Tools →' : 'All tools →', href: '/tools', highlight: true },
  ];

  const produkteItems = [
    { label: 'MedTech', isHeader: true, badge: 'ISO 13485 · FDA' },
    { label: t('nav.dropdown.capa'), href: '/produkte/capa-system', price: '€189' },
    { label: t('nav.dropdown.nc'), href: '/produkte/nc-system', price: '€139' },
    { label: t('nav.dropdown.audit'), href: '/produkte/audit-prep-kit', price: '€279' },
    { divider: true },
    { label: 'Pharma', isHeader: true, badge: 'GMP · GDP' },
    { label: 'Data Integrity Kit', href: '/produkte/data-integrity-kit', price: '€299', highlight: true },
    { label: 'CAPA System', disabled: true },
    { label: 'Deviation Management', disabled: true },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 backdrop-blur-sm"
      style={{ backgroundColor: 'rgba(30, 58, 138, 0.06)', borderBottom: '1px solid rgba(30, 58, 138, 0.1)', zIndex: 100 }}
    >
      <div className="w-full px-6 lg:px-12 xl:px-24 py-2.5">
        <div className="flex items-center justify-between">
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link href="/" className="hover:opacity-60 transition-opacity flex items-center" style={{ color: '#000000' }} title="Home">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
            <NavDropdown label="Consulting" href="/qm-beratung" items={leistungenItems}
              isOpen={openDropdown === 'leistungen'} onOpen={() => openDropdownFn('leistungen')} onClose={closeDropdown} minWidth={320} />
            <NavDropdown label="Templates" href="/produkte" items={produkteItems}
              isOpen={openDropdown === 'produkte'} onOpen={() => openDropdownFn('produkte')} onClose={closeDropdown} minWidth={280} />
            <NavDropdown label="Tools" href="/tools" items={toolsItems}
              isOpen={openDropdown === 'tools'} onOpen={() => openDropdownFn('tools')} onClose={closeDropdown} minWidth={300} />
            <Link href="/insights" className="hover:opacity-60 transition-opacity" style={navLinkStyle}>Insights</Link>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <Link href="/kontakt" className="hover:opacity-60 transition-opacity" style={navLinkStyle}>{t('nav.contact')}</Link>
            <div className="flex items-center rounded-full p-0.5"
              style={{ backgroundColor: 'rgba(241, 245, 249, 0.45)', border: '1px solid rgba(148, 163, 184, 0.3)' }}>
              {['de', 'en'].map(lang => (
                <button key={lang} onClick={() => switchLocale(lang)}
                  className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium transition-all"
                  style={{
                    backgroundColor: locale === lang ? 'rgba(191, 219, 254, 0.5)' : 'transparent',
                    border: locale === lang ? '1px solid rgba(191, 219, 254, 0.6)' : '1px solid transparent',
                    color: locale === lang ? '#000000' : '#64748b',
                  }}>
                  {lang === 'de' ? '🇩🇪 DE' : '🇬🇧 EN'}
                </button>
              ))}
            </div>
          </div>
          {/* Mobile */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} style={{ color: '#000000' }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </Link>
            <button className="p-2" style={{ color: '#000000' }} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen
                  ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
              </svg>
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 py-3 border-t" style={{ borderColor: 'rgba(30, 58, 138, 0.15)' }}>
            {[
              { label: 'Consulting', href: '/qm-beratung' },
              { label: 'Templates', href: '/produkte' },
              { label: 'Tools', href: '/tools' },
              { label: 'Insights', href: '/insights' },
              { label: t('nav.contact'), href: '/kontakt' },
            ].map(item => (
              <Link key={item.href} href={item.href} className="block px-4 py-2"
                style={{ color: '#000000', fontFamily: "'Cormorant', serif", fontSize: '1.1rem' }}
                onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </motion.nav>
  );
}
