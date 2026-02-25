import Head from 'next/head';

export default function DesignDemo() {
  // Container: Grau wie im Bild (die große Box)
  const containerStyle = {
    backgroundColor: 'rgba(241, 245, 249, 0.45)',
    backdropFilter: 'blur(3px)',
    border: '1px solid rgba(226, 232, 240, 0.6)'
  };
  
  // Button/CTA: Hellblau wie Info-Box
  const buttonStyle = {
    backgroundColor: 'rgba(191, 219, 254, 0.35)',
    backdropFilter: 'blur(3px)',
    border: '1px solid rgba(191, 219, 254, 0.5)',
    color: '#1e3a8a'
  };
  
  return (
    <>
      <Head>
        <title>Design Demo | QCore</title>
      </Head>
      
      {/* Background mit Netz-Pattern */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)',
          }}
        />
        <svg className="absolute inset-0 w-full h-full opacity-40">
          <circle cx="15%" cy="20%" r="4" fill="#94a3b8"/>
          <circle cx="85%" cy="15%" r="3" fill="#94a3b8"/>
          <circle cx="90%" cy="45%" r="4" fill="#94a3b8"/>
          <circle cx="10%" cy="60%" r="3" fill="#94a3b8"/>
          <circle cx="50%" cy="30%" r="3" fill="#94a3b8"/>
          <circle cx="70%" cy="70%" r="4" fill="#94a3b8"/>
          <circle cx="25%" cy="80%" r="3" fill="#94a3b8"/>
          <circle cx="5%" cy="40%" r="3" fill="#94a3b8"/>
          <circle cx="95%" cy="75%" r="3" fill="#94a3b8"/>
          <line x1="15%" y1="20%" x2="50%" y2="30%" stroke="#94a3b8" strokeWidth="1" opacity="0.5"/>
          <line x1="50%" y1="30%" x2="85%" y2="15%" stroke="#94a3b8" strokeWidth="1" opacity="0.5"/>
          <line x1="50%" y1="30%" x2="90%" y2="45%" stroke="#94a3b8" strokeWidth="1" opacity="0.5"/>
          <line x1="10%" y1="60%" x2="25%" y2="80%" stroke="#94a3b8" strokeWidth="1" opacity="0.5"/>
          <line x1="70%" y1="70%" x2="90%" y2="45%" stroke="#94a3b8" strokeWidth="1" opacity="0.5"/>
          <line x1="5%" y1="40%" x2="15%" y2="20%" stroke="#94a3b8" strokeWidth="1" opacity="0.5"/>
          <line x1="70%" y1="70%" x2="95%" y2="75%" stroke="#94a3b8" strokeWidth="1" opacity="0.5"/>
        </svg>
      </div>
      
      <main className="min-h-screen pt-24 pb-16 px-8">
        <div className="max-w-5xl mx-auto">
          
          <h1 className="text-4xl font-semibold mb-4" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
            Glass Design System
          </h1>
          <p className="text-gray-600 mb-12">Container: Grau | Buttons: Hellblau | Blur: 3px</p>
          
          {/* Referenz-Boxen */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-6" style={{ color: '#1e3a8a' }}>Referenz</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-500 mb-2">Container (Grau)</p>
                <div className="rounded-xl p-6" style={containerStyle}>
                  <p style={{ color: '#334155' }}>Content Box mit grauem Glass-Effekt</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">Info-Box (Blau)</p>
                <div className="rounded-xl p-4 flex items-center gap-3" style={buttonStyle}>
                  <span>📋</span>
                  <span style={{ color: '#1e3a8a' }}>Info/CTA Element mit blauem Glass-Effekt</span>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 1: Primary Button */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-6" style={{ color: '#1e3a8a' }}>Primary Button (CTA)</h2>
            
            <div className="rounded-xl p-8" style={containerStyle}>
              <div className="flex flex-wrap gap-6 items-center">
                <button 
                  className="py-3 px-8 rounded-lg font-semibold transition-all hover:scale-105"
                  style={buttonStyle}
                >
                  Download Free
                </button>
                <button 
                  className="py-3 px-8 rounded-lg font-semibold transition-all hover:scale-105"
                  style={buttonStyle}
                >
                  Get in touch
                </button>
                <button 
                  className="py-2.5 px-6 rounded-lg font-medium transition-all hover:scale-105"
                  style={buttonStyle}
                >
                  View Details →
                </button>
              </div>
            </div>
          </section>
          
          {/* SECTION 2: Language Switcher */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-6" style={{ color: '#1e3a8a' }}>Language Switcher (Glass Pills + Flags)</h2>
            
            <div className="rounded-xl p-8" style={containerStyle}>
              <div className="flex flex-wrap gap-8 items-center">
                
                {/* DE aktiv */}
                <div>
                  <p className="text-sm text-gray-500 mb-3">DE aktiv</p>
                  <div 
                    className="inline-flex rounded-full p-1"
                    style={{ 
                      backgroundColor: 'rgba(241, 245, 249, 0.5)',
                      backdropFilter: 'blur(3px)',
                      border: '1px solid rgba(226, 232, 240, 0.5)'
                    }}
                  >
                    <button 
                      className="px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5"
                      style={{ 
                        backgroundColor: 'rgba(191, 219, 254, 0.45)',
                        backdropFilter: 'blur(3px)',
                        color: '#1e3a8a'
                      }}
                    >
                      🇩🇪 DE
                    </button>
                    <button className="px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5" style={{ color: '#64748b' }}>
                      🇬🇧 EN
                    </button>
                  </div>
                </div>
                
                {/* EN aktiv */}
                <div>
                  <p className="text-sm text-gray-500 mb-3">EN aktiv</p>
                  <div 
                    className="inline-flex rounded-full p-1"
                    style={{ 
                      backgroundColor: 'rgba(241, 245, 249, 0.5)',
                      backdropFilter: 'blur(3px)',
                      border: '1px solid rgba(226, 232, 240, 0.5)'
                    }}
                  >
                    <button className="px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5" style={{ color: '#64748b' }}>
                      🇩🇪 DE
                    </button>
                    <button 
                      className="px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5"
                      style={{ 
                        backgroundColor: 'rgba(191, 219, 254, 0.45)',
                        backdropFilter: 'blur(3px)',
                        color: '#1e3a8a'
                      }}
                    >
                      🇬🇧 EN
                    </button>
                  </div>
                </div>
                
              </div>
            </div>
          </section>
          
          {/* SECTION 3: Lead Magnet Box */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-6" style={{ color: '#1e3a8a' }}>Lead Magnet Box</h2>
            
            <div className="max-w-md">
              <div className="rounded-xl p-6" style={containerStyle}>
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold" style={{ color: '#22c55e' }}>€0</span>
                  <span className="text-sm ml-2 text-gray-500">Lead Magnet</span>
                </div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full px-4 py-3 rounded-lg mb-3"
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.6)',
                    backdropFilter: 'blur(3px)',
                    border: '1px solid rgba(226, 232, 240, 0.6)'
                  }}
                />
                <button 
                  className="w-full py-3 rounded-lg font-semibold transition-all hover:scale-[1.02]"
                  style={buttonStyle}
                >
                  Download Free
                </button>
                <p className="text-xs text-center mt-3 text-gray-500">Download link via email · No spam</p>
              </div>
            </div>
          </section>
          
          {/* SECTION 4: Navigation */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-6" style={{ color: '#1e3a8a' }}>Navigation</h2>
            
            <div 
              className="rounded-xl p-4 flex items-center justify-between"
              style={containerStyle}
            >
              <div className="flex items-center gap-8">
                <span className="font-bold text-xl" style={{ color: '#1e3a8a' }}>QCore</span>
                <nav className="flex gap-6">
                  <span style={{ color: '#334155' }}>Services</span>
                  <span style={{ color: '#334155' }}>Products</span>
                  <span style={{ color: '#334155' }}>About</span>
                </nav>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  className="py-2 px-5 rounded-lg font-medium transition-all hover:scale-105"
                  style={buttonStyle}
                >
                  Contact
                </button>
                {/* Language Pills */}
                <div 
                  className="inline-flex rounded-full p-1"
                  style={{ 
                    backgroundColor: 'rgba(241, 245, 249, 0.5)',
                    backdropFilter: 'blur(3px)',
                    border: '1px solid rgba(226, 232, 240, 0.5)'
                  }}
                >
                  <button 
                    className="px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1"
                    style={{ 
                      backgroundColor: 'rgba(191, 219, 254, 0.45)',
                      color: '#1e3a8a'
                    }}
                  >
                    🇩🇪 DE
                  </button>
                  <button className="px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1" style={{ color: '#64748b' }}>
                    🇬🇧 EN
                  </button>
                </div>
              </div>
            </div>
          </section>
          
          {/* Design Specs */}
          <section className="mb-16">
            <h2 className="text-xl font-semibold mb-6" style={{ color: '#1e3a8a' }}>Design Specs</h2>
            <div className="rounded-xl p-6" style={containerStyle}>
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-300">
                    <th className="py-2 text-left font-semibold">Element</th>
                    <th className="py-2 text-left font-semibold">Background</th>
                    <th className="py-2 text-left font-semibold">Border</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Container (Grau)</td>
                    <td className="py-2 font-mono text-xs">rgba(241, 245, 249, 0.45)</td>
                    <td className="py-2 font-mono text-xs">rgba(226, 232, 240, 0.6)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Button/CTA (Blau)</td>
                    <td className="py-2 font-mono text-xs">rgba(191, 219, 254, 0.35)</td>
                    <td className="py-2 font-mono text-xs">rgba(191, 219, 254, 0.5)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Language Pill Container</td>
                    <td className="py-2 font-mono text-xs">rgba(241, 245, 249, 0.5)</td>
                    <td className="py-2 font-mono text-xs">rgba(226, 232, 240, 0.5)</td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <td className="py-2 font-medium">Language Pill Aktiv</td>
                    <td className="py-2 font-mono text-xs">rgba(191, 219, 254, 0.45)</td>
                    <td className="py-2 font-mono text-xs">-</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Blur (alle)</td>
                    <td className="py-2 font-mono text-xs" colSpan="2">blur(3px)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          
        </div>
      </main>
    </>
  );
}
