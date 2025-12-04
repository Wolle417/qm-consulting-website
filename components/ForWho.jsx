'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ForWho() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const clients = [
    {
      title: 'KMUs & Scale-ups mit Wachstumsambitionen',
      description: 'Sie skalieren und brauchen ein professionelles QM-System für Zertifizierung, Kundenanforderungen oder Audits',
      icon: '📈',
    },
    {
      title: 'Entwicklungsunternehmen in regulierten Branchen',
      description: 'Produkt ist da, aber QM-System fehlt noch für Marktzugang',
      icon: '🔬',
    },
    {
      title: 'Unternehmen mit QM-Lücken',
      description: 'System existiert, aber nicht audit-ready oder veraltet',
      icon: '🔧',
    },
  ];

  const industries = [
    { name: 'Pharma & Biotech', detail: 'GMP, FDA, PMDA' },
    { name: 'Medical Devices', detail: 'MPG, ISO 13485, MDR' },
    { name: 'Nuklear', detail: 'KTA, Safety Standards' },
    { name: 'Automotive, Halbleiter, Fertigung', detail: 'ISO 9001, IATF 16949' },
  ];

  return (
    <section id="forwho" className="py-24 px-6" ref={ref}>
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
            <span className="gradient-text">Für wen ich arbeite</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-light-gray/80 text-center mb-16 max-w-3xl mx-auto"
          >
            Typische Situation: Sie brauchen ein funktionierendes QM-System für
            Zertifizierung, Audit oder Marktzugang.
          </motion.p>

          {/* Client Types */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {clients.map((client, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="glass-effect p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 
                           group cursor-pointer transform hover:-translate-y-2"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {client.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">
                  {client.title}
                </h3>
                <p className="text-light-gray/80 leading-relaxed">
                  {client.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Industries */}
          <motion.div variants={itemVariants} className="glass-effect p-10 rounded-2xl">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Branchen <span className="text-light-gray/60">(Beispiele)</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all"
                >
                  <div className="text-electric-blue text-2xl">•</div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-1">
                      {industry.name}
                    </h4>
                    <p className="text-light-gray/70 text-sm">{industry.detail}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-white/10 text-center">
              <p className="text-light-gray/80 text-lg">
                Kern: <span className="gradient-text font-semibold">ISO 9001 QM-Prinzipien</span>
                , angepasst auf Ihre Branche.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
