'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [text, setText] = useState('');
  const fullText = 'Quality Management Consultant';
  
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Stefan Schönwälder</span>
          </h1>
          
          <div className="text-3xl md:text-4xl mb-8 h-12">
            <span className="gradient-text font-semibold">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-light-gray mb-8 max-w-4xl mx-auto leading-relaxed"
          >
            Ich helfe KMUs und Scale-ups, professionelle QM-Systeme aufzubauen
            – strukturiert, audit-fähig und ohne Overhead.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-light-gray/80 mb-12 max-w-3xl mx-auto"
          >
            10+ Jahre Erfahrung in hochregulierten Branchen (Nuklear, Medizintechnik, LED-Industrie).
            <br />
            <span className="gradient-text font-semibold">
              Branchenübergreifende QM-Expertise trifft moderne Methoden.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#contact"
              className="px-8 py-4 bg-electric-blue text-dark-navy font-semibold rounded-lg 
                         glow-button transform hover:scale-105 transition-all duration-300"
            >
              Erstgespräch vereinbaren
            </a>
            <a
              href="#services"
              className="px-8 py-4 glass-effect text-white font-semibold rounded-lg
                         hover:bg-white/10 transition-all duration-300"
            >
              Mehr erfahren
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 text-sm text-light-gray/60"
          >
            ISO 9001 • Branchenspezifische Standards • KMU-fokussiert
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-electric-blue rounded-full flex justify-center"
          >
            <div className="w-1 h-3 bg-electric-blue rounded-full mt-2"></div>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-electric-blue/20 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-bright/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
}
