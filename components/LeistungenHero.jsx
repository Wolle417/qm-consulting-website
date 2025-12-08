'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function LeistungenHero() {
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
    <section className="relative pb-12 z-10" ref={ref} style={{ marginTop: '5vh' }}>
      {/* GEÄNDERT: max-w-full und px-4 statt max-w-6xl und px-12 */}
      <div className="max-w-full mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* GEÄNDERT: gap-4 statt gap-8 */}
          <div className="grid md:grid-cols-2 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="p-6 bg-qcore-navy bg-opacity-20 border border-border-dark rounded-lg hover:border-qcore-blue transition-all"
              >
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>
                  {service.title}
                </h3>
                
                {/* GEÄNDERT: space-y-1 statt space-y-3 */}
                <ul className="space-y-1">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      {/* GEÄNDERT: color #000000 statt #475569 */}
                      <span className="text-sm leading-tight" style={{ color: '#000000' }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
