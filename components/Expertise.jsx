'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Expertise() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      company: 'Siemens Healthineers',
      period: '2021-2025',
      role: 'Technical Quality Management',
      focus: 'MRT-Systeme, ISO 13485, MDR, FMEA',
      icon: '🏥',
    },
    {
      company: 'Framatome',
      period: '2018-2020',
      role: 'Kerninstrumentierung',
      focus: 'Safety-Critical Systems, KTA-Standards, Hinkley Point C',
      icon: '⚛️',
    },
    {
      company: 'Osram',
      period: '2014-2017',
      role: 'LED-Entwicklung',
      focus: 'Produktentwicklung, Thermomanagement, Validation',
      icon: '💡',
    },
    {
      company: 'Pharma/Biotech',
      period: '2025',
      role: 'Systematische Einarbeitung',
      focus: 'GMP, ICH Guidelines, Regulatory Processes',
      icon: '💊',
    },
  ];

  const coreCompetencies = [
    'ISO 9001 Quality Management',
    'Prozessdokumentation & -optimierung',
    'Audit-Vorbereitung & Zertifizierung',
    'Risk-Based Thinking',
    'Validation Lifecycle (IQ/OQ/PQ)',
    'FMEA & Root Cause Analysis',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="expertise" className="py-24 px-6" ref={ref}>
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
            <span className="gradient-text">Kompetenzprofil</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-light-gray/80 text-center mb-16 max-w-3xl mx-auto"
          >
            10+ Jahre Erfahrung in hochregulierten Industrien –
            branchenübergreifende QM-Expertise.
          </motion.p>

          {/* Core Competencies */}
          <motion.div variants={itemVariants} className="glass-effect p-10 rounded-2xl mb-12">
            <h3 className="text-2xl font-semibold text-white mb-8 flex items-center">
              <span className="text-3xl mr-3">🎯</span>
              Kern: ISO 9001 Quality Management
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {coreCompetencies.map((competency, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 rounded-lg hover:bg-white/5 transition-all"
                >
                  <div className="w-2 h-2 bg-electric-blue rounded-full mr-4"></div>
                  <span className="text-light-gray/90">{competency}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Branchenerfahrung <span className="text-light-gray/60">(10+ Jahre)</span>
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                  className="glass-effect p-6 rounded-xl border-l-4 border-electric-blue 
                             hover:bg-white/5 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start justify-between flex-wrap gap-4">
                    <div className="flex items-start space-x-4 flex-1">
                      <div className="text-4xl mt-1">{exp.icon}</div>
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-1">
                          {exp.company}
                        </h4>
                        <p className="text-electric-blue font-medium mb-2">{exp.role}</p>
                        <p className="text-light-gray/80 text-sm leading-relaxed">
                          {exp.focus}
                        </p>
                      </div>
                    </div>
                    <div className="text-light-gray/60 font-mono text-sm">{exp.period}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Transfer Competence */}
          <motion.div
            variants={itemVariants}
            className="mt-12 glass-effect p-8 rounded-2xl text-center 
                       border-2 border-electric-blue/30"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              <span className="gradient-text">Transfer-Kompetenz</span>
            </h3>
            <p className="text-lg text-light-gray/80 leading-relaxed max-w-3xl mx-auto">
              QM-Prinzipien sind branchenübergreifend. Ich kenne sie aus den strengsten
              Industrien (Nuklear, Medical Devices) und übertrage sie auf Ihre Branche.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
