'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ForWho() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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
    <section id="forwho" className="section-padding relative z-10" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16"
            style={{
              color: '#1e293b',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Für wen wir arbeiten
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-8 bg-qcore-navy bg-opacity-20 border border-border-dark rounded-lg hover:border-qcore-blue transition-all"
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>
                  {client.title}
                </h3>
                
                <p className="text-sm mb-4" style={{ color: '#3b82f6' }}>
                  {client.industries}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#64748b' }}>
                      Sie brauchen:
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                      {client.need}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs uppercase tracking-wide mb-1" style={{ color: '#64748b' }}>
                      Wir liefern:
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                      {client.solution}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
