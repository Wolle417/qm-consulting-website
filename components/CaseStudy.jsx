'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function CaseStudy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const documents = [
    'Quality Manual (36 Seiten)',
    'Master Validation Plan (22 Seiten)',
    'Process Validation Protocol (25 Seiten)',
    'Analytical Method Validation (18 Seiten)',
    'CAPA Report (15 Seiten)',
    'Drug Master File (28 Seiten)',
    'Regulatory Process Flowchart',
  ];

  const process = [
    { step: 'Analyse', desc: 'Regulatorische Standards (ICH Q7, EU GMP, PMDA)' },
    { step: 'Strukturierung', desc: 'Dokumententypen definieren' },
    { step: 'Erstellung', desc: 'Systematische Dokumentation' },
    { step: 'Validierung', desc: 'Fachliche Prüfung' },
    { step: 'Review', desc: 'Unabhängiger Quality Review' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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

  return (
    <section id="casestudy" className="py-24 px-6 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-blue/20 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            <span className="gradient-text">Beispielprojekt</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-light-gray/80 text-center mb-4"
          >
            Strukturierte Einarbeitung in neue Domäne
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg text-light-gray/60 text-center mb-16 max-w-3xl mx-auto"
          >
            Um zu zeigen, wie schnell ich mich in neue Branchen einarbeite,
            habe ich mir pharmazeutisches QM systematisch erschlossen.
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left: Process */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-semibold text-white mb-6">Vorgehen</h3>
              <div className="space-y-4">
                {process.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass-effect p-5 rounded-xl hover:bg-white/5 transition-all"
                  >
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-electric-blue/20 rounded-full 
                                      flex items-center justify-center text-electric-blue font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {item.step}
                        </h4>
                        <p className="text-light-gray/80 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Results */}
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-semibold text-white mb-6">Ergebnis</h3>
              <div className="glass-effect p-8 rounded-2xl mb-6">
                <div className="text-center mb-6">
                  <div className="text-5xl font-bold gradient-text mb-2">7</div>
                  <div className="text-light-gray/80">vollständige GMP-Dokumente</div>
                </div>
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-electric-blue mb-2">104</div>
                  <div className="text-light-gray/80">Seiten audit-fähige Dokumentation</div>
                </div>
              </div>

              <div className="space-y-3">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass-effect p-4 rounded-lg flex items-center space-x-3 
                               hover:bg-white/5 transition-all"
                  >
                    <div className="text-cyan-bright">✓</div>
                    <span className="text-light-gray/90">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Key Insight */}
          <motion.div
            variants={itemVariants}
            className="mt-12 glass-effect p-8 rounded-2xl text-center 
                       border-2 border-cyan-bright/30"
          >
            <h3 className="text-2xl font-semibold text-white mb-4">
              <span className="gradient-text">Erkenntnis</span>
            </h3>
            <p className="text-lg text-light-gray/80 leading-relaxed max-w-3xl mx-auto mb-6">
              QM-Prinzipien sind universell. Die Kernprozesse (Validation, Risk Management,
              CAPA, Change Control) funktionieren in jeder hochregulierten Branche gleich.
            </p>
            <p className="text-lg text-electric-blue font-semibold">
              → Diese Transfer-Kompetenz ist meine Stärke.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="mt-12 text-center">
            <a
              href="#contact"
              className="inline-block px-8 py-4 glass-effect text-white font-semibold 
                         rounded-lg hover:bg-white/10 transition-all duration-300 
                         border border-electric-blue/30"
            >
              Dokumente einsehen (anonymisiert) →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
