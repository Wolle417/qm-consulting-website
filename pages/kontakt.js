import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

export default function Kontakt() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen">
        {/* Hero Section with Logo */}
        <section className="relative pt-24 pb-4">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-8">
              {/* Left: Title + Quote */}
              <div className="flex-1">
                <h1 
                  className="text-4xl md:text-5xl font-bold mb-2"
                  style={{
                    fontFamily: "'Cormorant', serif",
                    color: '#1e293b',
                  }}
                >
                  Kontakt
                </h1>
                <p className="text-xl mb-6" style={{ color: '#475569' }}>
                  Sprechen wir über Ihr Projekt
                </p>
                <p className="text-lg italic max-w-xl" style={{ color: '#64748b' }}>
                  „Ich freue mich darauf, Ihre QM-Herausforderungen kennenzulernen – 
                  und gemeinsam pragmatische Lösungen zu finden."
                </p>
                <p className="mt-2 font-semibold" style={{ color: '#1e293b' }}>
                  Stefan Schönwälder
                </p>
              </div>

              {/* Right: QCore Logo - größer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-end"
              >
                <h2 
                  style={{
                    fontFamily: "'Cormorant', serif",
                    fontSize: '6rem',
                    fontWeight: 500,
                    color: '#1e293b',
                    lineHeight: 1,
                  }}
                >
                  QCore
                </h2>
                <div 
                  className="mb-1"
                  style={{
                    width: '80px',
                    height: '2px',
                    background: 'linear-gradient(to left, #64748b, transparent)',
                    marginLeft: 'auto',
                  }}
                />
                <div 
                  style={{
                    fontFamily: "'Cormorant', serif",
                    fontSize: '1.2rem',
                    fontWeight: 400,
                    letterSpacing: '0.4em',
                    textTransform: 'uppercase',
                    color: '#64748b',
                  }}
                >
                  CONSULTING
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Contact Content - Two Columns */}
        <section className="relative z-10 py-6">
          <div className="max-w-[90%] mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* Left Container - Kontaktdaten */}
              <div className="p-8 bg-qcore-navy bg-opacity-30 hover:bg-opacity-45 transition-all duration-300 rounded-lg cursor-default flex flex-col">
                <h2 
                  className="text-2xl font-semibold mb-6"
                  style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
                >
                  Direkter Kontakt
                </h2>
                
                <div className="space-y-5 flex-1">
                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)' }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="#1e3a8a" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#64748b' }}>E-Mail</h3>
                      <a 
                        href="mailto:kontakt@qcore-consulting.de"
                        className="text-lg hover:underline"
                        style={{ color: '#1e3a8a' }}
                      >
                        kontakt@qcore-consulting.de
                      </a>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)' }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="#1e3a8a" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#64748b' }}>Telefon</h3>
                      <a 
                        href="tel:+491771940539"
                        className="text-lg hover:underline"
                        style={{ color: '#1e3a8a' }}
                      >
                        0177 / 194 05 39
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start gap-4">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)' }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="#1e3a8a" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-wide mb-1" style={{ color: '#64748b' }}>Standort</h3>
                      <p className="text-lg" style={{ color: '#334155' }}>
                        Herzogenaurach<br />
                        <span className="text-base" style={{ color: '#64748b' }}>Vor-Ort & Remote deutschlandweit</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Container - Erstgespräch + Foto */}
              <div className="p-8 bg-qcore-navy bg-opacity-30 hover:bg-opacity-45 transition-all duration-300 rounded-lg cursor-default flex flex-col">
                <div className="flex gap-6 mb-6">
                  <img 
                    src="/images/profile_free.png"
                    alt="Stefan Schönwälder"
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                  />
                  <div>
                    <h2 
                      className="text-2xl font-semibold mb-2"
                      style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
                    >
                      Kostenloses Erstgespräch
                    </h2>
                    <p style={{ color: '#475569' }}>
                      30 Minuten, unverbindlich via Teams
                    </p>
                  </div>
                </div>
                
                <div className="mb-6 flex-1">
                  <h3 className="text-sm font-semibold uppercase tracking-wide mb-3" style={{ color: '#64748b' }}>
                    Was wir besprechen
                  </h3>
                  <ul className="space-y-2">
                    {[
                      'Ihre aktuelle QM-Situation',
                      'Konkrete Herausforderungen & Ziele',
                      'Mögliche Lösungsansätze',
                      'Nächste Schritte & Aufwand',
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3" style={{ color: '#334155' }}>
                        <span 
                          className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                          style={{ backgroundColor: 'rgba(34, 197, 94, 0.2)', color: '#15803d' }}
                        >
                          ✓
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                  <a
                    href="https://outlook.office.com/bookwithme/user/8e639e840dd2445e8c515141ac028711@qcore-consulting.de/meetingtype/CtfqMrZkjUOXCKuGK2JP9w2?anonymous&ismsaljsauthenabled"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-lg text-center font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}
                  >
                    Termin buchen
                  </a>
                  <a
                    href="mailto:kontakt@qcore-consulting.de?subject=Erstgespr%C3%A4ch%20QCore%20Consulting"
                    className="px-6 py-3 rounded-lg text-center font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: 'transparent', color: '#1e3a8a', border: '2px solid #1e3a8a' }}
                  >
                    E-Mail schreiben
                  </a>
                  <a
                    href="tel:+491771940539"
                    className="px-6 py-3 rounded-lg text-center font-semibold transition-all hover:opacity-90"
                    style={{ backgroundColor: 'transparent', color: '#1e3a8a', border: '2px solid #1e3a8a' }}
                  >
                    Anrufen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Trust Bar */}
        <section className="relative z-10 py-8">
          <div className="max-w-[90%] mx-auto px-8">
            <div className="flex flex-wrap items-center justify-center gap-4 py-4">
              <span 
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a' }}
              >
                17+ Jahre Erfahrung
              </span>
              {['Pharma', 'MedTech', 'Nuklear', 'Fertigung'].map((tag) => (
                <span 
                  key={tag}
                  className="px-4 py-2 rounded-full text-sm"
                  style={{ backgroundColor: 'rgba(30, 58, 138, 0.05)', color: '#475569' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
