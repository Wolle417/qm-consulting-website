'use client';

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
            <h4 className="text-white font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#forwho"
                  className="text-text-light hover:text-qcore-blue transition-colors"
                >
                  Für wen
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-text-light hover:text-qcore-blue transition-colors"
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="text-text-light hover:text-qcore-blue transition-colors"
                >
                  Kompetenzprofil
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-text-light hover:text-qcore-blue transition-colors"
                >
                  Arbeitsweise
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-text-light hover:text-qcore-blue transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Kontakt</h4>
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
