'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Logo */}
          <div>
            {/* Logo Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <div className="flex flex-col items-start">
                {/* QCore */}
                <h1 
                  className="mb-3"
                  style={{
                    fontFamily: "'Cormorant', serif",
                    fontSize: '4.5rem',
                    fontWeight: 500,
                    color: '#1e293b',
                    lineHeight: 1,
                  }}
                >
                  QCore
                </h1>
                
                {/* Horizontal Accent Line */}
                <div 
                  className="mb-3"
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
                    fontSize: '1.3rem',
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

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <p 
                className="mb-6"
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '1.4rem',
                  fontWeight: 300,
                  color: '#475569',
                  lineHeight: 1.6,
                }}
              >
                Qualitätsmanagement für regulierte Industrien
              </p>
              
              {/* Standards */}
              <div 
                style={{
                  fontFamily: "'Cormorant', serif",
                  fontSize: '1rem',
                  fontWeight: 400,
                  letterSpacing: '0.15em',
                  color: '#64748b',
                }}
              >
                ISO 9001 • GMP • ISO 13485 • KTA
              </div>
            </motion.div>
          </div>

          {/* Right: Leistungen */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h2 
              className="text-3xl font-bold mb-8"
              style={{
                fontFamily: "'Cormorant', serif",
                color: '#1e293b',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              }}
            >
              Leistungen
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="p-8 bg-qcore-navy bg-opacity-20 border border-border-dark rounded-lg hover:border-qcore-blue transition-all">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>
                  QM-System Aufbau & Zertifizierung
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Quality Manual & QM-Handbuch (ISO 9001)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Prozessdokumentation (SOPs, Arbeitsanweisungen)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Management Review, Interne Audits</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Vorbereitung auf Zertifizierungsaudit</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-qcore-navy bg-opacity-20 border border-border-dark rounded-lg hover:border-qcore-blue transition-all">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>
                  Branchenspezifische Anpassung
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Pharma: GMP-Anforderungen, Validation, CAPA</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Medical Devices: Technische Dokumentation, Risikoanalyse (ISO 14971)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Nuklear: KTA-Standards, Safety Analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Fertigung: Produktionssteuerung, Qualitätskontrolle</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-qcore-navy bg-opacity-20 border border-border-dark rounded-lg hover:border-qcore-blue transition-all">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>
                  Risk Management & Prozessoptimierung
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>FMEA (Failure Mode and Effects Analysis)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Root Cause Analysis (5-Why, Ishikawa)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Continuous Improvement (KVP, Lean)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Process Mapping und Optimization</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-qcore-navy bg-opacity-20 border border-border-dark rounded-lg hover:border-qcore-blue transition-all">
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>
                  Dokumentation & Validation
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Equipment Qualification (IQ/OQ/PQ)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Process Validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Computer System Validation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm leading-relaxed" style={{ color: '#475569' }}>Analytical Method Validation</span>
                  </li>
                </ul>
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
