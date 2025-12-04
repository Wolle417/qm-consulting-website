'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
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

  const contactSteps = [
    'Ihre aktuelle Situation und Ziele',
    'Ob und wie ich unterstützen kann',
    'Möglicher Projektumfang und Timeline',
  ];

  return (
    <section id="contact" className="py-24 px-6 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] 
                        bg-electric-blue rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            <span className="gradient-text">Nächster Schritt</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-light-gray/80 text-center mb-12"
          >
            Kostenloses 30-Minuten Erstgespräch
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="glass-effect p-10 rounded-2xl mb-12"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              Wir besprechen:
            </h3>
            <div className="space-y-4 mb-8">
              {contactSteps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white/5 transition-all"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-electric-blue/20 rounded-full 
                                  flex items-center justify-center text-electric-blue font-bold">
                    {index + 1}
                  </div>
                  <span className="text-light-gray/90 text-lg">{step}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-light-gray/70 italic">
              Kein Verkaufsgespräch – nur Klärung ob es passt.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <a
              href="mailto:your.email@example.com"
              className="px-8 py-4 bg-electric-blue text-dark-navy font-semibold rounded-lg 
                         glow-button transform hover:scale-105 transition-all duration-300 
                         w-full sm:w-auto text-center"
            >
              Email schreiben
            </a>
            <a
              href="https://calendly.com/yourlink"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 glass-effect text-white font-semibold rounded-lg
                         hover:bg-white/10 transition-all duration-300 w-full sm:w-auto text-center 
                         border border-electric-blue/30"
            >
              Termin vereinbaren
            </a>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="glass-effect p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-white mb-6 text-center">Kontakt</h3>
            <div className="space-y-4 text-center">
              <div>
                <span className="text-light-gray/60">E-Mail:</span>{' '}
                <a
                  href="mailto:your.email@example.com"
                  className="text-electric-blue hover:text-cyan-bright transition-colors"
                >
                  your.email@example.com
                </a>
              </div>
              <div>
                <span className="text-light-gray/60">LinkedIn:</span>{' '}
                <a
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-electric-blue hover:text-cyan-bright transition-colors"
                >
                  Stefan Schönwälder
                </a>
              </div>
              <div>
                <span className="text-light-gray/60">Standort:</span>{' '}
                <span className="text-white">Herzogenaurach / Remote</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
