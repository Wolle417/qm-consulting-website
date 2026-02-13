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
  ];

  const steps = [
    'Ihre aktuelle Situation und Ziele',
    'Möglicher Projektumfang',
    'Ob und wie QCore unterstützen kann',
  ];

  return (
    <section id="industries" className="section-padding relative z-10" ref={ref}>
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

        </motion.div>
      </div>
    </section>
  );
}
