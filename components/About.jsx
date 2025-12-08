'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const principles = [
    {
      title: 'Klarheit',
      description: 'Komplexe Systeme brauchen einfache Strukturen. Keine unnötigen Prozesse. Fokus auf Wirksamkeit.',
    },
    {
      title: 'Reproduzierbarkeit',
      description: 'Prozesse müssen wiederholbar sein. Standardisierung ohne Überregulierung.',
    },
    {
      title: 'Nachvollziehbarkeit',
      description: 'Dokumentierte Entscheidungen. Audit-Trails. Transparenz für interne und externe Audits.',
    },
    {
      title: 'Moderne Methodik',
      description: 'Effiziente Werkzeuge, moderne Ansätze. LLM-gestützte Prozesse sind selbstverständlich. Hohe Geschwindigkeit ohne Qualitätsverlust.',
    },
  ];

  return (
    <section id="about" className="section-padding bg-dark-navy" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Arbeitsweise
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="card-minimal"
              >
                <h3 className="text-xl font-semibold text-qcore-blue mb-3">
                  {principle.title}
                </h3>
                <p style={{ color: '#1a1a1a', lineHeight: '1.2' }}>
                  {principle.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-text-muted">
              Remote-First. Projektbasiert. 3-6 Monate typisch.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
