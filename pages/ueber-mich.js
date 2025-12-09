import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function UeberMich() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen">
        {/* Hero Section with Photo and Name */}
        <section className="relative section-padding pt-32">
          <div className="relative z-10 max-w-4xl mx-auto px-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              {/* Photo Placeholder */}
              <div className="w-48 h-48 rounded-lg bg-slate-400 border-2 border-gray-600 flex items-center justify-center flex-shrink-0">
                <span className="text-gray-700 font-semibold">Foto</span>
              </div>
              
              {/* Name and Tagline */}
              <div className="text-center md:text-left">
                <h1 
                  className="text-4xl font-bold mb-4"
                  style={{
                    fontFamily: "'Cormorant', serif",
                    color: '#1e293b',
                  }}
                >
                  Stefan Schönwälder
                </h1>
                <p className="text-xl" style={{ color: '#475569' }}>
                  Technisches Qualitätsmanagement für regulierte Industrien
                </p>
              </div>
            </div>

            {/* Short Profile */}
            <div className="p-6 bg-qcore-navy bg-opacity-30 rounded-lg mt-8">
              <p style={{ color: '#000000' }}>
                18 Jahre Erfahrung in hochregulierten Branchen – von Nukleartechnik über LED-Entwicklung bis Medizintechnik. Als Ingenieur mit QM-Expertise verstehe ich nicht nur die Norm, sondern auch die Technik dahinter.
              </p>
              <p className="mt-4" style={{ color: '#000000' }}>
                Mein Ansatz: Schlanke Prozesse die funktionieren, keine Bürokratie-Monster.
              </p>
            </div>

            {/* Professional Timeline */}
            <div className="p-6 bg-qcore-navy bg-opacity-30 rounded-lg mt-8">
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

            {/* Qualifications */}
            <div className="p-6 bg-qcore-navy bg-opacity-30 rounded-lg mt-8 mb-12">
              <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e293b' }}>
                Qualifikationen
              </h2>
              <ul className="list-disc list-inside space-y-2" style={{ color: '#000000' }}>
                <li>Diplom Angewandte Naturwissenschaft</li>
                <li>DEKRA Qualitätsmanagementbeauftragter (QMB)</li>
                <li>FMEA-Moderation</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
