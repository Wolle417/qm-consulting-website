'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border-dark relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Spalte 1: Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>
              QCORE CONSULTING
            </h3>
            <p className="text-sm" style={{ color: '#000000' }}>
              Spezialist für Quality Management
              <br />
              in hochregulierten Industrien
            </p>
          </div>

          {/* Spalte 2: Navigation (ohne Kontakt) */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: '#000000' }}>Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-qcore-blue transition-colors" style={{ color: '#000000' }}>
                  Start
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="hover:text-qcore-blue transition-colors" style={{ color: '#000000' }}>
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/kunden" className="hover:text-qcore-blue transition-colors" style={{ color: '#000000' }}>
                  Kunden
                </Link>
              </li>
              <li>
                <Link href="/ueber-mich" className="hover:text-qcore-blue transition-colors" style={{ color: '#000000' }}>
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="/qm-wissen" className="hover:text-qcore-blue transition-colors" style={{ color: '#000000' }}>
                  QM-Wissen
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 3: Rechtliches */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: '#000000' }}>Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="hover:text-qcore-blue transition-colors" style={{ color: '#000000' }}>
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-qcore-blue transition-colors" style={{ color: '#000000' }}>
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-qcore-blue transition-colors" style={{ color: '#000000' }}>
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Spalte 4: Kontakt */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: '#000000' }}>Kontakt</h4>
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
          <p>© {currentYear} QCore Consulting. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
