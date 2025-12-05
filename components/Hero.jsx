'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid - Subtle */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(74, 144, 226, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(74, 144, 226, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-qcore-blue mb-8">
            QCORE CONSULTING
          </h1>
          
          <div className="mb-12">
            <p className="text-3xl md:text-4xl font-semibold text-white mb-6">
              Qualität ist universell.
            </p>
            <p className="text-xl md:text-2xl text-text-light leading-relaxed mb-3">
              Klare Prozesse. Stabile Ergebnisse. Kontrollierte Risiken.
            </p>
            <p className="text-xl md:text-2xl text-text-light leading-relaxed">
              Wir strukturieren Ihre Prozesse. Audit-fähig. Skalierbar.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <a
              href="#contact"
              className="btn-outline"
            >
              Kontakt aufnehmen
            </a>
            <a
              href="#services"
              className="btn-ghost"
            >
              Mehr erfahren
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-sm text-text-muted"
          >
            ISO 9001 • GMP • ISO 13485 • KTA • Branchenübergreifend
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-qcore-blue rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-qcore-blue rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Gradient Orbs - Navy Blue tones */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-qcore-blue/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-qcore-navy/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
