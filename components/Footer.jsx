'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Left: Brand */}
          <div>
            <h3 className="text-xl font-bold text-white mb-3">Stefan Schönwälder</h3>
            <p className="text-light-gray/70 text-sm">
              Quality Management Consultant
              <br />
              Spezialist für hochregulierte Industrien
            </p>
          </div>

          {/* Middle: Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-3">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#forwho"
                  className="text-light-gray/70 hover:text-electric-blue transition-colors"
                >
                  Für wen
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-light-gray/70 hover:text-electric-blue transition-colors"
                >
                  Leistungen
                </a>
              </li>
              <li>
                <a
                  href="#expertise"
                  className="text-light-gray/70 hover:text-electric-blue transition-colors"
                >
                  Expertise
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-light-gray/70 hover:text-electric-blue transition-colors"
                >
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h4 className="text-white font-semibold mb-3">Kontakt</h4>
            <ul className="space-y-2 text-sm text-light-gray/70">
              <li>Herzogenaurach / Remote</li>
              <li>
                <a
                  href="mailto:your.email@example.com"
                  className="hover:text-electric-blue transition-colors"
                >
                  your.email@example.com
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-electric-blue transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10 text-center text-sm text-light-gray/60">
          <p>© {currentYear} Stefan Schönwälder. Alle Rechte vorbehalten.</p>
          <p className="mt-2">
            Built with Next.js, Framer Motion & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
