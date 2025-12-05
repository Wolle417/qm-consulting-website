'use client';

import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border-dark bg-dark-navy">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Left: Brand */}
          <div>
            <h3 className="text-xl font-bold text-qcore-blue mb-3">
              QCORE CONSULTING
            </h3>
            <p className="text-text-light text-sm">
              Spezialist für Quality Management
              <br />
              in hochregulierten Industrien
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-text-light hover:text-qcore-blue transition-colors">
                  Leistungen
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="text-text-light hover:text-qcore-blue transition-colors">
                  Branchen
                </Link>
              </li>
              <li>
                <Link href="/arbeitsweise" className="text-text-light hover:text-qcore-blue transition-colors">
                  Arbeitsweise
                </Link>
              </li>
              <li>
                <Link href="/ueber-uns" className="text-text-light hover:text-qcore-blue transition-colors">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-text-light hover:text-qcore-blue transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h4 className="font-semibold text-white mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm text-text-light">
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
        <div className="pt-8 border-t border-border-subtle text-center text-sm text-text-muted">
          <p>© {currentYear} QCore Consulting. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
