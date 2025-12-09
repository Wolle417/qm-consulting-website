import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function QMWissen() {
  return (
    <>
      <Navigation />
      <main className="relative min-h-screen">
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <h1 
              className="text-5xl md:text-6xl font-bold"
              style={{
                fontFamily: "'Cormorant', serif",
                color: '#1e293b',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              }}
            >
              QM-Wissen
            </h1>
          </div>
        </section>
        
        <section className="relative z-10 section-padding">
          <div className="max-w-4xl mx-auto px-6">
            <p className="text-xl text-center" style={{ color: '#1e293b' }}>
              Inhalt folgt...
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
