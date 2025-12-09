import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Kontakt() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
            <h1 
              className="text-5xl md:text-6xl font-bold mb-4"
              style={{
                fontFamily: "'Cormorant', serif",
                color: '#1e293b',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              Kontakt
            </h1>
            <p className="text-xl" style={{ color: '#1e293b' }}>
              Sprechen wir über Ihr Projekt
            </p>
          </div>
        </section>
        
        {/* Contact Content */}
        <section className="relative z-10 section-padding">
          <div className="max-w-3xl mx-auto px-6">
            <div className="p-8 bg-qcore-navy bg-opacity-30 rounded-lg">
              <div className="space-y-6">
                {/* Email */}
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e293b' }}>E-Mail</h3>
                  <a 
                    href="mailto:kontakt@qcore-consulting.de"
                    className="hover:underline"
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
                    className="hover:underline"
                    style={{ color: '#3b82f6' }}
                  >
                    0177 / 194 05 39
                  </a>
                </div>

                {/* Location */}
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e293b' }}>Standort</h3>
                  <p style={{ color: '#000000' }}>
                    Herzogenaurach (Metropolregion Nürnberg)<br />
                    Vor-Ort & Remote deutschlandweit
                  </p>
                </div>

                {/* Divider */}
                <hr className="border-t border-gray-400 my-6" />

                {/* Initial Consultation */}
                <div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#1e293b' }}>Erstgespräch</h3>
                  <p className="mb-4" style={{ color: '#000000' }}>
                    Kostenlos, 30 Minuten, unverbindlich.<br />
                    Schreiben Sie mir eine kurze Nachricht mit Ihrem Anliegen – ich melde mich zeitnah.
                  </p>
                  
                  {/* Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="mailto:kontakt@qcore-consulting.de"
                      className="bg-qcore-blue text-white px-6 py-3 rounded text-center hover:opacity-90 transition-opacity"
                    >
                      E-Mail schreiben
                    </a>
                    <a
                      href="tel:+491771940539"
                      className="bg-qcore-blue text-white px-6 py-3 rounded text-center hover:opacity-90 transition-opacity"
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
