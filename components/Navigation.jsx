'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

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
    { label: 'Für wen', href: '#forwho' },
    { label: 'Leistungen', href: '#services' },
    { label: 'Expertise', href: '#expertise' },
    { label: 'Beispiel', href: '#casestudy' },
    { label: 'Arbeitsweise', href: '#about' },
    { label: 'Kontakt', href: '#contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-bold text-white hover:text-electric-blue transition-colors"
          >
            Stefan Schönwälder
          </a>

          {/* Nav Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-light-gray hover:text-electric-blue transition-colors 
                           text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="px-6 py-2 bg-electric-blue/20 text-electric-blue font-semibold 
                         rounded-lg hover:bg-electric-blue/30 transition-all border 
                         border-electric-blue/30"
            >
              Kontakt
            </a>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Progress Bar */}
      <motion.div
        className="h-1 bg-electric-blue origin-left"
        style={{
          scaleX: scrolled ? 0.3 : 0,
          transition: 'scaleX 0.3s ease',
        }}
      />
    </motion.nav>
  );
}
