'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const workingStyle = [
    {
      title: 'Modern & Strukturiert',
      description:
        'Ich nutze moderne Tools (z.B. LLM-unterstützte Dokumentenerstellung) kombiniert mit fachlicher Validierung und 4-Augen-Prinzip. Ergebnis: Audit-fähige Dokumente in kürzerer Zeit – ohne Qualitätskompromisse.',
      icon: '🚀',
    },
    {
      title: 'Remote-First',
      description:
        'Ich arbeite primär remote, mit definierten Präsenztagen vor Ort (z.B. für Audits, Begehungen, Workshops). Flexibel nach Projektbedarf.',
      icon: '💻',
    },
    {
      title: 'Projektbasiert',
      description:
        'Typische Projekte: 3-6 Monate. Klare Ziele, messbare Deliverables, transparente Kommunikation.',
      icon: '📊',
    },
    {
      title: 'Agil & Pragmatisch',
      description:
        'Kein Bürokratie-Overhead. Fokus auf das, was wirklich für Compliance und Audit-Readiness nötig ist.',
      icon: '⚡',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            <span className="gradient-text">Arbeitsweise</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-light-gray/80 text-center mb-16 max-w-3xl mx-auto"
          >
            Effizient, modern und ohne unnötigen Overhead – fokussiert auf echte
            Audit-Readiness.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {workingStyle.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="glass-effect p-8 rounded-2xl hover:bg-white/5 transition-all 
                           duration-300 cursor-pointer"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                <p className="text-light-gray/80 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Education */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass-effect p-10 rounded-2xl text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Hintergrund</h3>
            <div className="max-w-3xl mx-auto space-y-4 text-light-gray/80">
              <p className="text-lg">
                <span className="font-semibold text-white">Ausbildung:</span> Diplom-Naturwissenschaftler
                (TU Bergakademie Freiberg)
              </p>
              <p className="text-lg">
                <span className="font-semibold text-white">Erfahrung:</span> 10+ Jahre in
                hochregulierten Industrien (Nuklear, Medizintechnik, LED)
              </p>
              <p className="text-lg">
                <span className="font-semibold text-white">Standort:</span> Herzogenaurach /
                Remote
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
