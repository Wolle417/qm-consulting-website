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
      description: 'Nukleartechnik, Medizintechnik, Pharma, Biotech.\n\nIhre Prozesse unterliegen strengen regulatorischen Anforderungen. Sie brauchen formale Methoden, lückenlose Dokumentation und Risikobeherrschung – ohne Overhead.\n\nWir strukturieren Ihre QM-Systeme: reproduzierbar, nachvollziehbar, audit-fähig.',
    },
    {
      title: 'Technik-orientierte KMUs',
      description: 'Fertigung, Anlagenbau, Elektronik, Halbleiter.\n\nSie entwickeln technische Produkte oder betreiben komplexe Anlagen. Sie brauchen klare Prozesse, stabile Abläufe und saubere Dokumentation – für Kunden, Zertifizierung oder Skalierung.\n\nWir bauen Ihre Prozesslandschaft: strukturiert, fehlerresilient, skalierbar.',
    },
    {
      title: 'Scale-ups & Wachstum',
      description: 'Von 10 auf 100 Mitarbeiter. Von Prototyp zu Serie. Von Ad-hoc zu strukturiert.\n\nIhre Organisation wächst schneller als Ihre Prozesse. Sie brauchen Systeme, die mitwachsen – ohne Ihr Team auszubremsen.\n\nWir entwickeln skalierbare Strukturen: lean, effektiv, nicht bürokratisch.',
    },
  ];

  const industries = [
    'Nukleartechnik',
    'Medizintechnik & Healthcare',
    'Pharma & Biotech',
    'Elektronik & LED',
    'Halbleiter',
    'Anlagenbau & Fertigung',
  ];

  return (
    <section id="forwho" className="section-padding bg-dark-navy" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            Für wen wir arbeiten
          </h2>
          
          <p className="text-xl text-text-light text-center mb-16 max-w-3xl mx-auto leading-relaxed">
            Regulierte Umgebungen, technische Prozesse und wachsende Organisationen 
            brauchen Struktur, Nachvollziehbarkeit und Audit-Sicherheit.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-minimal"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {client.title}
                </h3>
                <p className="text-text-light leading-relaxed whitespace-pre-line">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="border-t border-border-dark pt-12">
            <h3 className="text-lg font-semibold text-center text-white mb-6">
              Branchen (Auswahl)
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <span
                  key={index}
                  className="text-text-light text-sm"
                >
                  {industry}
                  {index < industries.length - 1 && ' •'}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
