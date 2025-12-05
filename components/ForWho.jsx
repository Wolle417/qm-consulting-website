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
    <section id="forwho" className="section-padding bg-dark-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
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
                <h3 className="text-xl font-semibold text-white mb-2">
                  {client.title}
                </h3>
                
                <p className="text-sm text-qcore-blue mb-4">
                  {client.industries}
                </p>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wide mb-1">
                      Sie brauchen:
                    </p>
                    <p className="text-text-light text-sm leading-relaxed">
                      {client.need}
                    </p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-text-muted uppercase tracking-wide mb-1">
                      Wir liefern:
                    </p>
                    <p className="text-text-light text-sm leading-relaxed">
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
