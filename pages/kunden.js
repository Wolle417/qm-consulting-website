import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Kunden() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen">
        <section className="relative section-padding pt-32">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h1 
                className="text-4xl font-bold"
                style={{
                  fontFamily: "'Cormorant', serif",
                  color: '#1e293b',
                }}
              >
                Kunden & Referenzen
              </h1>
            </div>

            <div className="bg-qcore-navy bg-opacity-30 p-8 rounded-lg">
              <p style={{ color: '#000000' }}>
                Diese Seite befindet sich im Aufbau.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
