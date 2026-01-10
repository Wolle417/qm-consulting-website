import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function UeberMich() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen">
        {/* Hero Section with Photo and Name */}
        <section className="relative section-padding pt-24">
          <div className="relative z-10 max-w-[80%] mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center md:items-center gap-12 mb-8">
              {/* Name, Tagline and Profile Text - links */}
              <div className="text-center md:text-left flex-1">
                <h1 
                  className="text-5xl font-bold mb-4"
                  style={{
                    fontFamily: "'Cormorant', serif",
                    color: '#1e293b',
                  }}
                >
                  Stefan Schönwälder
                </h1>
                <p className="text-2xl mb-6" style={{ color: '#475569' }}>
                  Technisches Qualitätsmanagement für regulierte Industrien
                </p>
                <p className="text-lg" style={{ color: '#334155' }}>
                  18 Jahre Erfahrung in hochregulierten Branchen – von Nukleartechnik über LED-Entwicklung bis Medizintechnik.
                </p>
                <p className="text-lg mt-4" style={{ color: '#334155' }}>
                  Als Ingenieur mit QM-Expertise verstehe ich nicht nur die Norm, sondern auch die Technik dahinter.
                </p>
                <p className="text-lg mt-4" style={{ color: '#334155' }}>
                  Mein Ansatz: Schlanke Prozesse die funktionieren, keine Bürokratie-Monster.
                </p>
              </div>

              {/* Photo - freigestellt, rechts */}
              <img 
                src="/images/profile_free.png"
                alt="Stefan Schönwälder"
                className="w-96 h-96 object-cover flex-shrink-0"
              />
            </div>

            {/* Professional Timeline */}
            <div className="p-6 bg-qcore-navy bg-opacity-30 rounded-lg mt-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6" style={{ color: '#1e293b' }}>
                Berufliche Stationen
              </h2>
              
              <div className="space-y-6 border-l-2 border-qcore-blue pl-6 relative">
                {/* Station 1 */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-2 w-3 h-3 bg-qcore-blue rounded-full"></div>
                  <div className="font-semibold" style={{ color: '#1e293b' }}>
                    2021 – 2025 | Siemens Healthineers
                  </div>
                  <div className="mb-2" style={{ color: '#475569' }}>
                    Technischer Qualitätsmanager
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1" style={{ color: '#000000' }}>
                    <li>MRT InBore Patient Entertainment System</li>
                    <li>FMEA-Risikoanalysen</li>
                    <li>Koordination internationaler Teams</li>
                  </ul>
                </div>

                {/* Station 2 */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-2 w-3 h-3 bg-qcore-blue rounded-full"></div>
                  <div className="font-semibold" style={{ color: '#1e293b' }}>
                    2018 – 2021 | Framatome GmbH
                  </div>
                  <div className="mb-2" style={{ color: '#475569' }}>
                    Entwicklungsingenieur Kerninstrumentierung
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1" style={{ color: '#000000' }}>
                    <li>Positionssensoren für Reaktor-Regelstäbe</li>
                    <li>Safety-Critical Systems</li>
                    <li>Interface Management (Hinkley Point C)</li>
                  </ul>
                </div>

                {/* Station 3 */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-2 w-3 h-3 bg-qcore-blue rounded-full"></div>
                  <div className="font-semibold" style={{ color: '#1e293b' }}>
                    2014 – 2017 | Osram / Ledvance
                  </div>
                  <div className="mb-2" style={{ color: '#475569' }}>
                    Thermal Engineer
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1" style={{ color: '#000000' }}>
                    <li>LED-Retrofit Produktentwicklung</li>
                    <li>Design-FMEA</li>
                    <li>Thermische Simulation (FEM)</li>
                  </ul>
                </div>

                {/* Station 4 */}
                <div className="relative">
                  <div className="absolute -left-[29px] top-2 w-3 h-3 bg-qcore-blue rounded-full"></div>
                  <div className="font-semibold" style={{ color: '#1e293b' }}>
                    2007 – 2013 | TU Bergakademie Freiberg
                  </div>
                  <div className="mb-2" style={{ color: '#475569' }}>
                    Wissenschaftlicher Mitarbeiter
                  </div>
                  <ul className="list-disc list-inside text-sm space-y-1" style={{ color: '#000000' }}>
                    <li>Numerische Simulation</li>
                    <li>Kristallzuchtprozesse (Photovoltaik)</li>
                  </ul>
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
