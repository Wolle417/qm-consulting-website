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
    { label: 'Leistungen', href: '/#services' },
    { label: 'Branchen', href: '/#industries' },
    { label: 'Arbeitsweise', href: '/arbeitsweise' },
    { label: 'Über uns', href: '/ueber-uns' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'glass-effect shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-white hover:text-qcore-blue transition-colors"
          >
            QCORE CONSULTING
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-text-light hover:text-qcore-blue transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="/#contact"
              className="px-6 py-2 border-2 border-qcore-blue text-qcore-blue font-semibold rounded hover:bg-qcore-blue hover:text-dark-navy transition-all"
            >
              Kontakt
            </a>
          </div>

          <button className="md:hidden text-white">
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

      <motion.div
        className="h-1 bg-qcore-blue origin-left"
        style={{
          scaleX: scrolled ? 0.3 : 0,
          transition: 'scaleX 0.3s ease',
        }}
      />
    </motion.nav>
  );
}
