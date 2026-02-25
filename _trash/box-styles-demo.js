import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';

export default function BoxStylesDemo() {
  const demoContent = {
    title: 'Warum zuerst die SOP?',
    text: 'Die SOP ist das Fundament Ihres CAPA-Systems. Ohne klare Prozessdefinition weiß niemand, wann ein CAPA gestartet wird und wer verantwortlich ist.',
    listTitle: 'Was diese SOP regelt:',
    items: [
      { label: 'Trigger:', text: 'Wann wird ein CAPA eröffnet?' },
      { label: 'Eskalation:', text: 'Minor vs. Major vs. Critical' },
      { label: 'Verantwortlichkeiten:', text: 'Wer macht was?' },
      { label: 'Fristen:', text: 'Wie lange darf ein CAPA offen sein?' },
      { label: 'Schnittstellen:', text: 'NC, Complaints, Management Review' }
    ],
    tip: 'Die Entscheidungstabelle in §5.1.1 verhindert CAPA-Inflation – nicht jede NC braucht ein CAPA.'
  };

  // Gemeinsamer Blur-Wert
  const blurStyle = { backdropFilter: 'blur(3px)' };

  return (
    <>
      <Head>
        <title>Box Styles Demo | QCore</title>
      </Head>
      
      <Navigation />
      
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)',
          }}
        />
      </div>
      
      <main className="pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-5xl mx-auto">
          
          <h1 className="text-4xl font-bold mb-12" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
            Box Styles Vergleich
          </h1>

          {/* ============================================ */}
          {/* VARIANTE 1: AKTUELL Landing Page (card-minimal) */}
          {/* ============================================ */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e3a8a' }}>
              Variante 1: Landing Page (card-minimal) – DUNKEL
            </h2>
            <p className="text-sm mb-4 text-gray-500">
              bg-qcore-navy bg-opacity-30 | border-border-dark | blur 3px
            </p>
            
            <div 
              className="p-6 rounded-lg max-w-2xl"
              style={{ 
                backgroundColor: 'rgba(30, 58, 95, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                ...blurStyle
              }}
            >
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{demoContent.title}</h4>
              <p className="mb-4" style={{ color: '#475569' }}>{demoContent.text}</p>
              
              <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{demoContent.listTitle}</h4>
              <ul className="space-y-2" style={{ color: '#475569' }}>
                {demoContent.items.map((item, idx) => (
                  <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)' }}>
                <p className="text-sm font-medium" style={{ color: '#166534' }}>
                  💡 {demoContent.tip}
                </p>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* VARIANTE 2: Industries (etwas heller) */}
          {/* ============================================ */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e3a8a' }}>
              Variante 2: Industries Section – MITTEL
            </h2>
            <p className="text-sm mb-4 text-gray-500">
              bg-qcore-navy bg-opacity-20 | border-border-dark | blur 3px
            </p>
            
            <div 
              className="p-6 rounded-lg max-w-2xl"
              style={{ 
                backgroundColor: 'rgba(30, 58, 95, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                ...blurStyle
              }}
            >
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{demoContent.title}</h4>
              <p className="mb-4" style={{ color: '#475569' }}>{demoContent.text}</p>
              
              <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{demoContent.listTitle}</h4>
              <ul className="space-y-2" style={{ color: '#475569' }}>
                {demoContent.items.map((item, idx) => (
                  <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)' }}>
                <p className="text-sm font-medium" style={{ color: '#166534' }}>
                  💡 {demoContent.tip}
                </p>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* VARIANTE 3: Produktseiten – HELL */}
          {/* ============================================ */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e3a8a' }}>
              Variante 3: Produktseiten – HELL
            </h2>
            <p className="text-sm mb-4 text-gray-500">
              rgba(30, 58, 138, 0.06) | border rgba(30, 58, 138, 0.1) | blur 3px
            </p>
            
            <div 
              className="rounded-xl p-6 max-w-2xl"
              style={{ 
                backgroundColor: 'rgba(30, 58, 138, 0.06)', 
                border: '1px solid rgba(30, 58, 138, 0.1)',
                ...blurStyle
              }}
            >
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{demoContent.title}</h4>
              <p className="mb-4" style={{ color: '#475569' }}>{demoContent.text}</p>
              
              <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{demoContent.listTitle}</h4>
              <ul className="space-y-2" style={{ color: '#475569' }}>
                {demoContent.items.map((item, idx) => (
                  <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                <p className="text-sm font-medium" style={{ color: '#166534' }}>
                  💡 {demoContent.tip}
                </p>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* VARIANTE 4: Subtle blue tint */}
          {/* ============================================ */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-4" style={{ color: '#1e3a8a' }}>
              Variante 4: Subtle Blue Tint
            </h2>
            <p className="text-sm mb-4 text-gray-500">
              rgba(219, 234, 254, 0.6) | border rgba(30, 58, 138, 0.12) | blur 3px
            </p>
            
            <div 
              className="rounded-xl p-6 max-w-2xl"
              style={{ 
                backgroundColor: 'rgba(219, 234, 254, 0.6)', 
                border: '1px solid rgba(30, 58, 138, 0.12)',
                ...blurStyle
              }}
            >
              <h4 className="font-semibold text-lg mb-3" style={{ color: '#0f172a' }}>{demoContent.title}</h4>
              <p className="mb-4" style={{ color: '#475569' }}>{demoContent.text}</p>
              
              <h4 className="font-semibold text-lg mb-3 mt-6" style={{ color: '#0f172a' }}>{demoContent.listTitle}</h4>
              <ul className="space-y-2" style={{ color: '#475569' }}>
                {demoContent.items.map((item, idx) => (
                  <li key={idx}>• <strong>{item.label}</strong> {item.text}</li>
                ))}
              </ul>
              
              <div className="mt-6 p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                <p className="text-sm font-medium" style={{ color: '#166534' }}>
                  💡 {demoContent.tip}
                </p>
              </div>
            </div>
          </section>

          {/* ============================================ */}
          {/* TIP BOX VARIANTEN */}
          {/* ============================================ */}
          <section className="mb-16">
            <h2 className="text-2xl font-semibold mb-8" style={{ color: '#1e3a8a' }}>
              TipBox Varianten
            </h2>
            
            <div className="space-y-6 max-w-2xl">
              {/* Grün (aktuell) */}
              <div>
                <p className="text-sm mb-2 text-gray-500">Grün (Praxis-Tipp)</p>
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)' }}>
                  <p className="text-sm font-medium" style={{ color: '#166534' }}>
                    💡 {demoContent.tip}
                  </p>
                </div>
              </div>
              
              {/* Blau (Info) */}
              <div>
                <p className="text-sm mb-2 text-gray-500">Blau (Info)</p>
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}>
                  <p className="text-sm font-medium" style={{ color: '#1e40af' }}>
                    📋 {demoContent.tip}
                  </p>
                </div>
              </div>
              
              {/* Orange (Warnung) */}
              <div>
                <p className="text-sm mb-2 text-gray-500">Orange (Warnung)</p>
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)' }}>
                  <p className="text-sm font-medium" style={{ color: '#b45309' }}>
                    ⚠️ {demoContent.tip}
                  </p>
                </div>
              </div>
              
              {/* Türkis/Teal */}
              <div>
                <p className="text-sm mb-2 text-gray-500">Türkis/Teal</p>
                <div className="p-4 rounded-lg" style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)' }}>
                  <p className="text-sm font-medium" style={{ color: '#0f766e' }}>
                    💡 {demoContent.tip}
                  </p>
                </div>
              </div>
            </div>
          </section>

        </div>
      </main>
      
      <Footer />
    </>
  );
}
