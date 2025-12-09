'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border-dark relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Left: Brand */}
          <div>
            <h3 className="text-xl font-bold mb-3" style={{ color: '#1e293b' }}>
              QCORE CONSULTING
            </h3>
            <p className="text-sm" style={{ color: '#475569' }}>
              Spezialist für Quality Management
              <br />
              in hochregulierten Industrien
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: '#1e293b' }}>Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-qcore-blue transition-colors" style={{ color: '#475569' }}>
                  Start
                </Link>
              </li>
              <li>
                <Link href="/leistungen" className="hover:text-qcore-blue transition-colors" style={{ color: '#475569' }}>
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/kunden" className="hover:text-qcore-blue transition-colors" style={{ color: '#475569' }}>
                  Kunden
                </Link>
              </li>
              <li>
                <Link href="/ueber-mich" className="hover:text-qcore-blue transition-colors" style={{ color: '#475569' }}>
                  Über mich
                </Link>
              </li>
              <li>
                <Link href="/qm-wissen" className="hover:text-qcore-blue transition-colors" style={{ color: '#475569' }}>
                  QM-Wissen
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="hover:text-qcore-blue transition-colors" style={{ color: '#475569' }}>
                  Kontakt
                </Link>
              </li>
            </ul>
            <h4 className="font-semibold mb-3 mt-6" style={{ color: '#1e293b' }}>Rechtliches</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/impressum" className="hover:text-qcore-blue transition-colors" style={{ color: '#475569' }}>
                  Impressum
                </Link>
              </li>
              <li>
                <Link href="/datenschutz" className="hover:text-qcore-blue transition-colors" style={{ color: '#475569' }}>
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="hover:text-qcore-blue transition-colors" style={{ color: '#475569' }}>
                  AGB
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h4 className="font-semibold mb-3" style={{ color: '#1e293b' }}>Kontakt</h4>
            <ul className="space-y-2 text-sm" style={{ color: '#475569' }}>
              <li>Herzogenaurach / Remote</li>
              <li>
                <a
                  href="mailto:kontakt@qcore-consulting.de"
                  className="hover:text-qcore-blue transition-colors"
                >
                  kontakt@qcore-consulting.de
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border-subtle text-center text-sm" style={{ color: '#64748b' }}>
          <p>© {currentYear} QCore Consulting. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
