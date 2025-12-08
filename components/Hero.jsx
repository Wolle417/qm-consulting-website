'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[50vh] flex items-start overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 px-40 w-full" style={{ paddingTop: '140px' }}>
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
                  fontSize: '9rem',
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
                  width: '100px',
                  height: '2px',
                  background: 'linear-gradient(to right, #64748b, transparent)',
                }}
              />
              
              {/* CONSULTING */}
              <div 
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '1.8rem',
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
    </section>
  );
}
