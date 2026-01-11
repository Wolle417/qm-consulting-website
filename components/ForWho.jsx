'use client';

export default function ForWho() {
  const clients = [
    {
      title: 'Regulierte Umgebungen',
      industries: 'Pharma • Medical • Nuklear • Biotech',
      need: 'Audit-fähige QM-Systeme, formale Methoden, lückenlose Dokumentation.',
      solution: 'Reproduzierbar, nachvollziehbar, compliance-ready. Ohne Overhead.',
    },
    {
      title: 'Technik-orientierte KMUs',
      industries: 'Halbleiter & Optoelektronik • Fertigung • Elektronik',
      need: 'Strukturierte Prozesse, saubere Dokumentation, Zertifizierungsfähigkeit.',
      solution: 'Stabile Prozesslandschaft. Fehlerresilient. Skalierbar.',
    },
    {
      title: 'Scale-ups & Wachstum',
      industries: 'Von 10 auf 100 Mitarbeiter. Von Ad-hoc zu strukturiert.',
      need: 'Systeme die mitwachsen – ohne Ihr Team auszubremsen.',
      solution: 'Lean, skalierbar, nicht bürokratisch.',
    },
  ];

  return (
    <section id="forwho" className="section-padding relative z-10">
      <div className="max-w-[90%] mx-auto px-6">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{
            color: '#1e293b',
            fontFamily: "'Cormorant', serif",
          }}
        >
          Für wen wir arbeiten
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-8 rounded-lg transition-all duration-300 bg-qcore-navy bg-opacity-30 hover:bg-opacity-45 cursor-default"
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>
                {client.title}
              </h3>
              
              <p className="text-sm mb-4" style={{ color: '#334155' }}>
                {client.industries}
              </p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1 font-semibold" style={{ color: '#1e3a8a' }}>
                    Sie brauchen:
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#334155' }}>
                    {client.need}
                  </p>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1 font-semibold" style={{ color: '#1e3a8a' }}>
                    Wir liefern:
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#334155' }}>
                    {client.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
