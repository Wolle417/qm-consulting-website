'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function TransferCompetence() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-dark-bg" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-qcore-blue mb-12">
            Qualität ist universell.
          </h2>
          
          <div className="space-y-6 text-lg text-text-light leading-relaxed">
            <p>
              Unabhängig von Branche oder Produkt gelten dieselben fundamentalen 
              Prinzipien für funktionierende Systeme.
            </p>
            
            <p>
              Reproduzierbarkeit, Nachvollziehbarkeit und Risikokontrolle bilden 
              die Grundlage technischer Qualität.
            </p>
            
            <p>
              Die Kernprozesse – Validation, Risk Management, CAPA, Change Control – 
              funktionieren in jeder hochregulierten Branche gleich.
            </p>
            
            <p className="font-semibold text-qcore-blue text-xl mt-8">
              QCore überträgt Expertise aus den strengsten Industrien (Nuklear, Medical) 
              auf neue Domänen.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
