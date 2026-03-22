'use client';

import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const { locale } = useTranslation();
  const isDE = locale !== 'en';

  return (
    <footer
      className="fixed bottom-0 left-0 right-0 px-6 lg:px-12 xl:px-24 py-2 backdrop-blur-sm flex items-center justify-end text-xs gap-5"
      style={{
        backgroundColor: 'rgba(30, 58, 138, 0.06)',
        borderTop: '1px solid rgba(30, 58, 138, 0.1)',
        zIndex: 100,
        color: '#000000',
      }}
    >
      <a
        href="https://www.linkedin.com/in/stefan-sch%C3%B6nw%C3%A4lder"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:opacity-60 transition-opacity flex items-center"
        style={{ color: '#000000' }}
        title="LinkedIn"
      >
        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      </a>
      <Link href="/impressum" className="hover:opacity-60 transition-opacity" style={{ color: '#000000' }}>
        {isDE ? 'Impressum' : 'Imprint'}
      </Link>
      <Link href="/datenschutz" className="hover:opacity-60 transition-opacity" style={{ color: '#000000' }}>
        {isDE ? 'Datenschutz' : 'Privacy'}
      </Link>
      <Link href="/agb" className="hover:opacity-60 transition-opacity" style={{ color: '#000000' }}>
        {isDE ? 'AGB' : 'Terms'}
      </Link>
    </footer>
  );
}
