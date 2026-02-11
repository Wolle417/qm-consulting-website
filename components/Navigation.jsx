'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

// Dropdown Component
function NavDropdown({ label, items, isOpen, onToggle, onClose, minWidth = 220 }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={onToggle}
        className="flex items-center gap-1 hover:text-slate-600 transition-colors"
        style={{
          fontFamily: "'Cormorant', serif",
          fontSize: '1.15rem',
          fontWeight: 400,
          color: '#1e293b',
        }}
      >
        {label}
        <svg 
          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
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
  const { t, locale, switchLocale } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  // Dropdown configurations
  const leistungenItems = [
    { label: t('nav.dropdown.qmKmu'), href: '/qm-beratung', subtitle: 'MedTech · Pharma · Nuklear' },
    { label: t('nav.dropdown.riskMgmt'), href: '/risikomanagement', subtitle: 'FMEA · ISO 14971' },
    { divider: true },
    { label: t('nav.dropdown.auditPrep'), href: '/audit-vorbereitung' },
    { label: t('nav.dropdown.training'), href: '/training' },
    { divider: true },
    { label: t('nav.dropdown.gmpDoc'), href: '/referenz-projekt' },
  ];

  const produkteItems = [
    { label: 'Tools', isHeader: true, badge: 'FREE' },
    { label: t('nav.dropdown.ncTriage'), href: '/nc-triage', subtitle: 'CAPA oder Korrektur? In 3 Min.', freeTag: true },
    { divider: true },
    { label: 'MedTech', isHeader: true, badge: 'ISO 13485 · FDA' },
    { label: t('nav.dropdown.capa'), href: '/produkte/capa-system', price: '€129' },
    { label: t('nav.dropdown.nc'), href: '/produkte/nc-system', price: '€99' },
    { label: t('nav.dropdown.audit'), href: '/produkte/audit-prep-kit', price: '€79' },
    { divider: true },
    { label: 'Pharma', isHeader: true, badge: 'GMP · GDP' },
    { label: 'Data Integrity Kit', href: '/produkte/data-integrity-kit', price: '€299', highlight: true },
    { label: 'CAPA System', href: '#', disabled: true },
    { label: 'Deviation Management', href: '#', disabled: true },
  ];

  const aboutItems = [
    { label: t('nav.dropdown.profile'), href: '/ueber-mich' },
    { label: t('nav.dropdown.qmKnowledge'), href: '/qm-wissen' },
    { label: t('nav.dropdown.qmTrainer'), href: '/qmb-trainer' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 bg-slate-900/40 backdrop-blur-sm"
      style={{ zIndex: 100 }}
    >
      <div className="w-full pl-12 pr-6 lg:pl-24 lg:pr-12 xl:pl-32 xl:pr-24 py-3">
        <div className="flex items-center justify-between">
          {/* Links: Start + Leistungen + Produkte + Über mich - gleichmäßig verteilt */}
          <div className="hidden md:flex items-center gap-12 lg:gap-16">
            <Link
              href="/"
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: '1.15rem',
                fontWeight: 500,
                color: '#1e293b',
                transition: 'color 0.3s ease',
              }}
              className="hover:text-slate-600"
            >
              {t('nav.start')}
            </Link>

            <NavDropdown
              label={t('nav.services')}
              items={leistungenItems}
              isOpen={openDropdown === 'leistungen'}
              onToggle={() => toggleDropdown('leistungen')}
              onClose={closeDropdown}
              minWidth={320}
            />
            
            <NavDropdown
              label={t('nav.products')}
              items={produkteItems}
              isOpen={openDropdown === 'produkte'}
              onToggle={() => toggleDropdown('produkte')}
              onClose={closeDropdown}
              minWidth={280}
            />
            
            <NavDropdown
              label={t('nav.about')}
              items={aboutItems}
              isOpen={openDropdown === 'about'}
              onToggle={() => toggleDropdown('about')}
              onClose={closeDropdown}
              minWidth={180}
            />
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

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-slate-700 p-2"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            className="md:hidden mt-4 py-4 border-t"
            style={{ borderColor: 'rgba(30, 58, 138, 0.15)' }}
          >
            {/* Mobile: Leistungen */}
            <div className="mb-4">
              <div className="font-semibold mb-2 px-2" style={{ color: '#1e3a8a', fontFamily: "'Cormorant', serif" }}>
                {t('nav.services')}
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

            {/* Mobile: Produkte */}
            <div className="mb-4">
              <div className="font-semibold mb-2 px-2" style={{ color: '#1e3a8a', fontFamily: "'Cormorant', serif" }}>
                {t('nav.products')}
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

            {/* Mobile: Über mich */}
            <div className="mb-4">
              <div className="font-semibold mb-2 px-2" style={{ color: '#1e3a8a', fontFamily: "'Cormorant', serif" }}>
                {t('nav.about')}
              </div>
              {aboutItems.map((item, idx) => (
                <Link 
                  key={idx} 
                  href={item.href} 
                  className="block px-4 py-2"
                  style={{ color: '#334155', fontFamily: "'Cormorant', serif" }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>

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
