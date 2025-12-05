'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      title: 'QM-System Aufbau & Zertifizierung',
      items: [
        'Quality Manual & QM-Handbuch (ISO 9001)',
        'Prozessdokumentation (SOPs, Arbeitsanweisungen)',
        'Management Review, Interne Audits',
        'Vorbereitung auf Zertifizierungsaudit',
      ],
    },
    {
      title: 'Branchenspezifische Anpassung',
      items: [
        'Pharma: GMP-Anforderungen, Validation, CAPA',
        'Medical Devices: Technische Dokumentation, Risikoanalyse (ISO 14971)',
        'Nuklear: KTA-Standards, Safety Analysis',
        'Fertigung: Produktionssteuerung, Qualitätskontrolle',
      ],
    },
    {
      title: 'Risk Management & Prozessoptimierung',
      items: [
        'FMEA (Failure Mode and Effects Analysis)',
        'Root Cause Analysis (5-Why, Ishikawa)',
        'Continuous Improvement (KVP, Lean)',
        'Process Mapping und Optimization',
      ],
    },
    {
      title: 'Dokumentation & Validation',
      items: [
        'Equipment Qualification (IQ/OQ/PQ)',
        'Process Validation',
        'Computer System Validation',
        'Analytical Method Validation',
      ],
    },
  ];

  return (
    <section id="services" className="section-padding bg-dark-bg" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            Leistungen
          </h2>

          <p className="text-xl text-text-light text-center mb-16 max-w-3xl mx-auto">
            Von QM-System-Aufbau bis zur Zertifizierung – strukturiert, 
            effizient und audit-fähig.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="card-minimal"
              >
                <h3 className="text-2xl font-semibold text-white mb-6">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-text-light leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center"
          >
            <p className="text-lg text-text-muted">
              Projektbasiert. 3-6 Monate typisch. Remote-First mit Präsenztagen.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
