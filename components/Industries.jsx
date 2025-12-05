'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Industries() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const industries = [
    'Medizintechnik & Healthcare',
    'Pharma & Biotech',
    'Halbleiter & Optoelektronik',
    'Anlagenbau & Fertigung',
    'Elektronik & Sensorik',
    'Nukleartechnik',
  ];

  const steps = [
    'Ihre aktuelle Situation und Ziele',
    'Möglicher Projektumfang',
    'Ob und wie QCore unterstützen kann',
  ];

  return (
    <section id="industries" className="section-padding bg-dark-navy" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Industries Section */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
            Erfahrung in hochregulierten Industrien
          </h2>
          
          <p className="text-text-muted text-center mb-12">
            10+ Jahre Erfahrung
          </p>

          {/* Industries Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-20">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-qcore-navy bg-opacity-20 border border-border-dark rounded-lg text-center hover:border-qcore-blue transition-all"
              >
                <p className="text-text-light font-medium">
                  {industry}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-border-dark mb-20"></div>

          {/* CTA Section */}
          <div id="contact" className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Unverbindliche Erstberatung
            </h2>
            
            <div className="mb-8">
              <p className="text-text-muted mb-4">Wir besprechen:</p>
              <ul className="space-y-2">
                {steps.map((step, index) => (
                  <li key={index} className="flex items-center justify-center gap-3">
                    <span className="w-6 h-6 bg-qcore-navy rounded-full flex items-center justify-center text-qcore-blue text-sm font-medium">
                      {index + 1}
                    </span>
                    <span className="text-text-light">{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
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

            <div className="text-text-muted text-sm space-y-1">
              <p>
                <a href="mailto:kontakt@qcore-consulting.de" className="text-qcore-blue hover:underline">
                  kontakt@qcore-consulting.de
                </a>
              </p>
              <p>Herzogenaurach / Remote</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
