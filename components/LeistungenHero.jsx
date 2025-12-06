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
    <section className="relative py-16 z-10" ref={ref}>
      <div className="max-w-6xl mx-auto px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-3xl font-bold mb-12 text-center"
            style={{
              fontFamily: "'Cormorant', serif",
              color: '#1e293b',
              textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
            }}
          >
            Leistungen
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 bg-white/70 backdrop-blur-sm border border-slate-300 rounded-lg hover:border-qcore-blue transition-all"
              >
                <h3 className="text-xl font-semibold mb-3" style={{ 
                  fontFamily: "'Cormorant', serif",
                  color: '#1e293b' 
                }}>
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                      <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>{item}</span>
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
