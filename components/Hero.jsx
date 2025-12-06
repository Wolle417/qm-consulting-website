'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[50vh] flex items-start overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-12 w-full" style={{ paddingTop: '120px' }}>
        <div className="max-w-xl">
          {/* Logo Stack */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <div className="flex flex-col items-start">
              {/* QCore */}
              <h1 
                className="mb-2"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '4rem',
                  fontWeight: 500,
                  color: '#1e293b',
                  lineHeight: 1,
                }}
              >
                QCore
              </h1>
              
              {/* Horizontal Accent Line */}
              <div 
                className="mb-2"
                style={{
                  width: '60px',
                  height: '2px',
                  background: 'linear-gradient(to right, #64748b, transparent)',
                }}
              />
              
              {/* CONSULTING */}
              <div 
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '1.2rem',
                  fontWeight: 400,
                  letterSpacing: '0.4em',
                  textTransform: 'uppercase',
                  color: '#64748b',
                }}
              >
                CONSULTING
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator - Bottom Left */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-12"
      >
        <div className="flex flex-col items-center">
          {/* Vertical Line */}
          <motion.div
            animate={{ scaleY: [1, 0.6, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-px h-16 mb-3 origin-top"
            style={{ backgroundColor: '#64748b' }}
          />
          {/* Text */}
          <div 
            className="rotate-180"
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: '0.85rem',
              fontWeight: 400,
              letterSpacing: '0.2em',
              color: '#64748b',
              writingMode: 'vertical-rl',
              textOrientation: 'mixed',
            }}
          >
            ENTDECKEN
          </div>
        </div>
      </motion.div>
    </section>
  );
}
