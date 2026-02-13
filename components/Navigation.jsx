'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';
import { tools, toolStatusConfig } from '../data/tools';

// Dropdown Component
function NavDropdown({ label, href, items, isOpen, onOpen, onClose, minWidth = 220 }) {
  return (
    <div className="relative" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link
        href={href || '#'}
        className="hover:text-slate-600 transition-colors"
        style={{
          fontFamily: "'Cormorant', serif",
          fontSize: '1.15rem',
          fontWeight: 400,
          color: '#1e293b',
        }}
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
            minWidth: `${minWidth}px`
          }}
        >
          {items.map((item, idx) => (
            item.divider ? (
              <div key={idx} className="my-2 border-t" style={{ borderColor: 'rgba(30, 58, 138, 0.1)' }} />
            ) : item.isHeader ? (
              <div
                key={idx}
                className="px-4 py-2 flex items-center justify-between"
                style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)' }}
              >
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#1e3a8a' }}>
                  {item.label}
                </span>
                {item.badge && (
                  <span className="text-xs" style={{ color: '#64748b' }}>{item.badge}</span>
                )}
              </div>
            ) : item.disabled ? (
              <div
                key={idx}
                className="px-4 py-2 text-sm"
                style={{ color: '#94a3b8', fontFamily: "'Cormorant', serif" }}
              >
                {item.label} <span className="text-xs">(Coming Soon)</span>
              </div>
            ) : (
              <Link
                key={idx}
                href={item.href}
                onClick={onClose}
                className="block px-4 py-2 hover:bg-blue-50 transition-colors"
                style={{ 
                  fontFamily: "'Cormorant', serif",
                  fontSize: '1rem',
                  color: item.highlight ? '#16a34a' : '#1e293b',
                  fontWeight: item.highlight ? 500 : 400,
                }}
              >
                <span className="flex items-center justify-between">
                  <span className="flex flex-col">
                    <span>{item.label}</span>
                    {item.subtitle && (
                      <span className="text-xs" style={{ color: '#64748b' }}>{item.subtitle}</span>
                    )}
                  </span>
                  <span className="flex items-center gap-2">
                    {item.oldPrice && (
                      <span className="text-sm line-through" style={{ color: '#94a3b8' }}>{item.oldPrice}</span>
                    )}
                    {item.freeTag && (
                      <span className="text-sm font-bold" style={{ color: '#22c55e' }}>FREE</span>
                    )}
                    {item.price && (
                      <span className="text-sm font-medium" style={{ color: '#1e3a8a' }}>{item.price}</span>
                    )}
                  </span>
                </span>
              </Link>
            )
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const { t, locale, switchLocale } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const openDropdownFn = (name) => {
    if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    setOpenDropdown(name);
  };

  const closeDropdown = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  // Dropdown configurations
  const leistungenItems = [
    { label: t('nav.dropdown.qmKmu'), href: '/qm-beratung', subtitle: 'MedTech · Pharma' },
    { label: t('nav.dropdown.riskMgmt'), href: '/risikomanagement', subtitle: 'FMEA · ISO 14971' },
    { divider: true },
    { label: t('nav.dropdown.auditPrep'), href: '/audit-vorbereitung' },
    { label: t('nav.dropdown.training'), href: '/training' },
    { divider: true },
    { label: t('nav.dropdown.gmpDoc'), href: '/referenz-projekt' },
  ];

  // Tools dropdown items - generated from data/tools.js
  const isDE = locale === 'de';
  const toolsItems = [
    { label: isDE ? 'QM-Tools' : 'QM Tools', isHeader: true },
    ...tools.filter(tool => tool.status === 'live').map(tool => ({
      label: tool.name,
      href: tool.slug,
      subtitle: isDE ? tool.description : tool.descriptionEn,
    })),
    { divider: true },
    { label: isDE ? 'Wissen' : 'Knowledge', isHeader: true },
    { label: isDE ? 'QM-Wissen' : 'QM Knowledge', href: '/qm-wissen', subtitle: isDE ? 'Artikel zu ISO 13485, CAPA, FMEA & mehr' : 'Articles on ISO 13485, CAPA, FMEA & more' },
    { label: isDE ? 'QMB-Prüfungstrainer' : 'QMB Exam Trainer', href: '/qmb-trainer', subtitle: isDE ? 'Multiple-Choice Prüfungsvorbereitung' : 'Multiple choice exam prep' },
    { divider: true },
    { label: isDE ? 'Alle Tools anzeigen →' : 'View all tools →', href: '/tools', highlight: true },
  ];

  const produkteItems = [
    { label: 'MedTech', isHeader: true, badge: 'ISO 13485 · FDA' },
    { label: t('nav.dropdown.capa'), href: '/produkte/capa-system', price: '€129' },
    { label: t('nav.dropdown.nc'), href: '/produkte/nc-system', price: '€99' },
    { label: t('nav.dropdown.audit'), href: '/produkte/audit-prep-kit', price: '€79' },
    { divider: true },
    { label: 'Pharma', isHeader: true, badge: 'GMP · GDP' },
    { label: 'Data Integrity Kit', href: '/produkte/data-integrity-kit', price: '€299', highlight: true },
    { label: 'CAPA System', disabled: true },
    { label: 'Deviation Management', disabled: true },
  ];

  const aboutItems = [
    { label: t('nav.dropdown.profile'), href: '/ueber-mich' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 bg-slate-900/40 backdrop-blur-sm"
      style={{ zIndex: 100 }}
    >
      <div className="w-full pl-4 pr-6 lg:pl-8 lg:pr-12 xl:pl-12 xl:pr-24 py-3">
        <div className="flex items-center justify-between">
          {/* Links: Logo + Nav Items */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {/* QCore Logo + Tagline - always visible */}
            <Link
              href="/"
              className="flex flex-col hover:opacity-80 transition-opacity flex-shrink-0"
            >
              <span
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '1.75rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  lineHeight: 1,
                }}
              >
                QCore
              </span>
              <span
                className="hidden lg:block"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: '#0f172a',
                  lineHeight: 1.2,
                  marginTop: '2px',
                  letterSpacing: '0.02em',
                }}
              >
                {isDE
                  ? 'QM-Consulting, Templates & Tools'
                  : 'QM Consulting, Templates & Tools'}
              </span>
            </Link>

            <NavDropdown
              label="Consulting"
              href="/qm-beratung"
              items={leistungenItems}
              isOpen={openDropdown === 'leistungen'}
              onOpen={() => openDropdownFn('leistungen')}
              onClose={closeDropdown}
              minWidth={320}
            />

            <NavDropdown
              label="Templates"
              href="/produkte"
              items={produkteItems}
              isOpen={openDropdown === 'produkte'}
              onOpen={() => openDropdownFn('produkte')}
              onClose={closeDropdown}
              minWidth={280}
            />

            <NavDropdown
              label={isDE ? 'Tools & Wissen' : 'Tools & Knowledge'}
              href="/tools"
              items={toolsItems}
              isOpen={openDropdown === 'tools'}
              onOpen={() => openDropdownFn('tools')}
              onClose={closeDropdown}
              minWidth={320}
            />
            
            <Link
              href="/ueber-mich"
              className="hover:text-slate-600 transition-colors"
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: '1.15rem',
                fontWeight: 400,
                color: '#1e293b',
              }}
            >
              {t('nav.about')}
            </Link>
          </div>

          {/* Rechts: Kontakt + Language Switch */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/kontakt"
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: '1.15rem',
                fontWeight: 400,
                color: '#1e293b',
                transition: 'color 0.3s ease',
              }}
              className="hover:text-slate-600"
            >
              {t('nav.contact')}
            </Link>
            
            {/* Language Switch - Glass Pills */}
            <div 
              className="flex items-center rounded-full p-1"
              style={{ 
                backgroundColor: 'rgba(241, 245, 249, 0.45)', 
                backdropFilter: 'blur(3px)',
                border: '1px solid rgba(148, 163, 184, 0.3)' 
              }}
            >
              <button
                onClick={() => switchLocale('de')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{ 
                  backgroundColor: locale === 'de' ? 'rgba(191, 219, 254, 0.5)' : 'transparent',
                  backdropFilter: locale === 'de' ? 'blur(3px)' : 'none',
                  border: locale === 'de' ? '1px solid rgba(191, 219, 254, 0.6)' : '1px solid transparent',
                  color: locale === 'de' ? '#1e3a8a' : '#64748b',
                }}
              >
                <span>🇩🇪</span>
                <span>DE</span>
              </button>
              <button
                onClick={() => switchLocale('en')}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium transition-all"
                style={{ 
                  backgroundColor: locale === 'en' ? 'rgba(191, 219, 254, 0.5)' : 'transparent',
                  backdropFilter: locale === 'en' ? 'blur(3px)' : 'none',
                  border: locale === 'en' ? '1px solid rgba(191, 219, 254, 0.6)' : '1px solid transparent',
                  color: locale === 'en' ? '#1e3a8a' : '#64748b',
                }}
              >
                <span>🇬🇧</span>
                <span>EN</span>
              </button>
            </div>
          </div>

          {/* Mobile: Logo + Hamburger */}
          <div className="md:hidden flex items-center justify-between w-full">
            <Link
              href="/"
              className="hover:opacity-80 transition-opacity"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '1.5rem',
                  fontWeight: 600,
                  color: '#0f172a',
                  lineHeight: 1,
                }}
              >
                QCore
              </span>
            </Link>
            <button 
              className="text-slate-700 p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden mt-4 py-4 border-t"
            style={{ borderColor: 'rgba(30, 58, 138, 0.15)' }}
          >
            {/* Mobile: Consulting */}
            <div className="mb-4">
              <div className="font-semibold mb-2 px-2" style={{ color: '#1e3a8a', fontFamily: "'Cormorant', serif" }}>
                Consulting
              </div>
              {leistungenItems.filter(i => !i.divider).map((item, idx) => (
                item.disabled ? (
                  <div key={idx} className="px-4 py-2 text-sm" style={{ color: '#94a3b8' }}>
                    {item.label} (Soon)
                  </div>
                ) : (
                  <Link 
                    key={idx} 
                    href={item.href} 
                    className="block px-4 py-2"
                    style={{ color: '#334155', fontFamily: "'Cormorant', serif" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile: Templates */}
            <div className="mb-4">
              <div className="font-semibold mb-2 px-2" style={{ color: '#1e3a8a', fontFamily: "'Cormorant', serif" }}>
                Templates
              </div>
              {produkteItems.filter(i => !i.divider).map((item, idx) => (
                item.isHeader ? (
                  <div 
                    key={idx} 
                    className="px-4 py-2 mt-2 flex items-center justify-between"
                    style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)' }}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#1e3a8a' }}>
                      {item.label}
                    </span>
                    {item.badge && (
                      <span className="text-xs" style={{ color: '#64748b' }}>{item.badge}</span>
                    )}
                  </div>
                ) : item.disabled ? (
                  <div key={idx} className="px-4 py-2 text-sm" style={{ color: '#94a3b8' }}>
                    {item.label} (Soon)
                  </div>
                ) : (
                  <Link 
                    key={idx} 
                    href={item.href} 
                    className="block px-4 py-2 flex justify-between"
                    style={{ color: item.highlight ? '#16a34a' : '#334155', fontFamily: "'Cormorant', serif" }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    <span className="flex items-center gap-2">
                      {item.oldPrice && <span className="text-sm line-through" style={{ color: '#94a3b8' }}>{item.oldPrice}</span>}
                      {item.freeTag && <span className="text-sm font-bold" style={{ color: '#22c55e' }}>FREE</span>}
                      {item.price && <span style={{ color: '#1e3a8a' }}>{item.price}</span>}
                    </span>
                  </Link>
                )
              ))}
            </div>

            {/* Mobile: Tools & Wissen */}
            <div className="mb-4">
              <div className="font-semibold mb-2 px-2" style={{ color: '#1e3a8a', fontFamily: "'Cormorant', serif" }}>
                {isDE ? 'Tools & Wissen' : 'Tools & Knowledge'}
              </div>
              {toolsItems.filter(i => !i.divider).map((item, idx) => (
                item.isHeader ? (
                  <div
                    key={idx}
                    className="px-4 py-2 mt-2 flex items-center justify-between"
                    style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)' }}
                  >
                    <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#1e3a8a' }}>
                      {item.label}
                    </span>
                  </div>
                ) : item.disabled ? (
                  <div key={idx} className="px-4 py-2 text-sm" style={{ color: '#94a3b8' }}>
                    {item.label} (Soon)
                  </div>
                ) : (
                  <Link
                    key={idx}
                    href={item.href}
                    className="block px-4 py-2 flex justify-between"
                    style={{ color: item.highlight ? '#16a34a' : '#334155', fontFamily: "'Cormorant', serif", fontWeight: item.highlight ? 500 : 400 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                  </Link>
                )
              ))}
            </div>

            {/* Mobile: Über mich */}
            <Link 
              href="/ueber-mich" 
              className="block px-4 py-2 font-semibold mb-2"
              style={{ color: '#1e3a8a', fontFamily: "'Cormorant', serif" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.about')}
            </Link>

            {/* Mobile: Kontakt */}
            <Link 
              href="/kontakt" 
              className="block px-4 py-2 font-semibold"
              style={{ color: '#1e3a8a', fontFamily: "'Cormorant', serif" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('nav.contact')}
            </Link>

            {/* Mobile: Language Switch - Glass Pills */}
            <div className="flex gap-2 px-4 mt-4">
              <button
                onClick={() => { switchLocale('de'); setMobileMenuOpen(false); }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{ 
                  backgroundColor: locale === 'de' ? 'rgba(191, 219, 254, 0.5)' : 'rgba(241, 245, 249, 0.45)',
                  backdropFilter: 'blur(3px)',
                  border: locale === 'de' ? '1px solid rgba(191, 219, 254, 0.6)' : '1px solid rgba(148, 163, 184, 0.3)',
                  color: locale === 'de' ? '#1e3a8a' : '#64748b',
                }}
              >
                🇩🇪 DE
              </button>
              <button
                onClick={() => { switchLocale('en'); setMobileMenuOpen(false); }}
                className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{ 
                  backgroundColor: locale === 'en' ? 'rgba(191, 219, 254, 0.5)' : 'rgba(241, 245, 249, 0.45)',
                  backdropFilter: 'blur(3px)',
                  border: locale === 'en' ? '1px solid rgba(191, 219, 254, 0.6)' : '1px solid rgba(148, 163, 184, 0.3)',
                  color: locale === 'en' ? '#1e3a8a' : '#64748b',
                }}
              >
                🇬🇧 EN
              </button>
            </div>
          </div>
        )}
      </div>
    </motion.nav>
  );
}
