'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Leistungen', href: '/leistungen' },
    { label: 'Praxisbeispiel', href: '/referenz-projekt' },
    { label: 'Produkte', href: '/produkte' },
    { label: 'Über mich', href: '/ueber-mich' },
    { label: 'QM-Wissen', href: '/qm-wissen' },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 right-0 bg-slate-900/40 backdrop-blur-sm"
      style={{ zIndex: 100 }}
    >
      <div className="w-full px-6 lg:px-12 py-3">
        <div className="flex items-center justify-between">
          {/* Start - ganz links */}
          <div className="hidden md:flex">
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
              Start
            </Link>
          </div>

          {/* Mitte - Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '1.15rem',
                  fontWeight: 400,
                  color: '#1e293b',
                  transition: 'color 0.3s ease',
                }}
                className="hover:text-slate-600"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Kontakt - ganz rechts */}
          <div className="hidden md:flex">
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
              Kontakt
            </Link>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-slate-200">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
