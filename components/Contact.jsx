'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const steps = [
    'Ihre aktuelle Situation und Ziele',
    'Möglicher Projektumfang und Timeline',
    'Ob und wie QCore unterstützen kann',
  ];

  return (
    <section id="contact" className="section-padding bg-dark-bg" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            Kontakt
          </h2>

          <p className="text-xl text-center text-text-light mb-12">
            Unverbindliches Gespräch vereinbaren
          </p>

          <div className="card-minimal mb-12">
            <h3 className="text-xl font-semibold text-center mb-6 text-white">
              Wir besprechen:
            </h3>
            <ul className="space-y-4 mb-6">
              {steps.map((step, index) => (
                <li key={index} className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-qcore-navy rounded-full flex items-center justify-center text-qcore-blue font-semibold mr-4">
                    {index + 1}
                  </span>
                  <span className="text-text-light text-lg pt-1">{step}</span>
                </li>
              ))}
            </ul>
            <p className="text-center text-text-muted italic text-sm">
              Kein Verkaufsgespräch. Klärung der Passung.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="mailto:kontakt@qcore-consulting.de"
              className="btn-outline text-center"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="https://calendly.com/yourlink"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost text-center"
            >
              Termin vereinbaren
            </a>
          </div>

          <div className="text-center space-y-2 text-text-muted">
            <p>
              <span className="font-medium">E-Mail:</span>{' '}
              <a href="mailto:kontakt@qcore-consulting.de" className="text-qcore-blue hover:underline">
                kontakt@qcore-consulting.de
              </a>
            </p>
            <p>
              <span className="font-medium">Standort:</span> Herzogenaurach / Remote
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
