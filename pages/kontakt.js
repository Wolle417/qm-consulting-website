import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Kontakt() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-24 pb-12 flex items-center justify-center">
          <div className="relative z-10 max-w-[80%] mx-auto px-8 text-center">
            <h1 
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{
                fontFamily: "'Cormorant', serif",
                color: '#1e293b',
              }}
            >
              Kontakt
            </h1>
            <p className="text-xl" style={{ color: '#475569' }}>
              Sprechen wir über Ihr Projekt
            </p>
          </div>
        </section>
        
        {/* Contact Content */}
        <section className="relative z-10 section-padding">
          <div className="max-w-[80%] mx-auto px-8">
            <div className="p-8 bg-qcore-navy bg-opacity-30 rounded-lg">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Left Column - Contact Info */}
                <div className="space-y-6">
                  {/* Email */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e293b' }}>E-Mail</h3>
                    <a 
                      href="mailto:kontakt@qcore-consulting.de"
                      className="text-lg hover:underline"
                      style={{ color: '#3b82f6' }}
                    >
                      kontakt@qcore-consulting.de
                    </a>
                  </div>

                  {/* Phone */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e293b' }}>Telefon</h3>
                    <a 
                      href="tel:+491771940539"
                      className="text-lg hover:underline"
                      style={{ color: '#3b82f6' }}
                    >
                      0177 / 194 05 39
                    </a>
                  </div>

                  {/* Location */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e293b' }}>Standort</h3>
                    <p className="text-lg" style={{ color: '#334155' }}>
                      Herzogenaurach (Metropolregion Nürnberg)<br />
                      Vor-Ort & Remote deutschlandweit
                    </p>
                  </div>
                </div>

                {/* Right Column - CTA */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}>
                    Kostenloses Erstgespräch
                  </h3>
                  <p className="text-lg mb-6" style={{ color: '#334155' }}>
                    30 Minuten, unverbindlich.<br />
                    Schreiben Sie mir eine kurze Nachricht mit Ihrem Anliegen – ich melde mich zeitnah.
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:kontakt@qcore-consulting.de"
                      className="px-8 py-4 rounded-lg text-center text-lg font-semibold transition-all hover:opacity-90"
                      style={{ backgroundColor: '#1e3a8a', color: '#ffffff' }}
                    >
                      E-Mail schreiben
                    </a>
                    <a
                      href="tel:+491771940539"
                      className="px-8 py-4 rounded-lg text-center text-lg font-semibold transition-all hover:opacity-90"
                      style={{ backgroundColor: 'transparent', color: '#1e3a8a', border: '2px solid #1e3a8a' }}
                    >
                      Anrufen
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
