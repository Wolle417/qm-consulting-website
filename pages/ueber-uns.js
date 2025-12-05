'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function UeberUns() {
  const stations = [
    {
      company: 'Siemens Healthineers',
      period: '2021–2025',
      role: 'Technical Quality Management',
      details: 'MRT-Systeme, ISO 13485, Medizintechnik',
    },
    {
      company: 'Framatome GmbH',
      period: '2018–2020',
      role: 'Quality Assurance',
      details: 'Kerninstrumentierung, Safety-Critical Systems, KTA-Standards',
    },
    {
      company: 'Osram',
      period: '2014–2017',
      role: 'Development Engineering',
      details: 'LED-Entwicklung, Thermomanagement, Produktvalidation',
    },
  ];

  return (
    <main className="relative bg-dark-navy min-h-screen">
      <Navigation />
      
      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold text-white mb-4">
              Über QCore Consulting
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Profile */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card-minimal mb-12">
            {/* Portrait Placeholder */}
            <div className="w-32 h-32 bg-qcore-navy rounded-lg mx-auto mb-6 flex items-center justify-center">
              <span className="text-text-muted text-sm">Portrait</span>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-white mb-2">
                Stefan Schönwälder
              </h2>
              <p className="text-qcore-blue mb-4">
                Principal Consultant
              </p>
              <p className="text-text-light mb-4">
                10+ Jahre Erfahrung in Quality Management für hochregulierte Industrien.
              </p>
              <p className="text-text-muted text-sm">
                Diplom-Naturwissenschaftler, TU Bergakademie Freiberg
              </p>
            </div>
          </div>

          {/* Career Stations */}
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Berufliche Stationen
          </h3>
          
          <div className="space-y-6">
            {stations.map((station, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card-minimal"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h4 className="text-lg font-semibold text-white">
                    {station.company}
                  </h4>
                  <span className="text-qcore-blue text-sm">
                    {station.period}
                  </span>
                </div>
                <p className="text-text-light mb-1">
                  {station.role}
                </p>
                <p className="text-text-muted text-sm">
                  {station.details}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:kontakt@qcore-consulting.de"
              className="btn-outline text-center"
            >
              Kontakt aufnehmen
            </a>
            <Link
              href="/"
              className="btn-ghost text-center"
            >
              ← Zurück zur Startseite
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
