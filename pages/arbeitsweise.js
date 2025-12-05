'use client';

import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Arbeitsweise() {
  const principles = [
    {
      title: 'Klarheit',
      content: [
        'Komplexe Systeme brauchen einfache Strukturen.',
        'Keine unnötigen Prozesse. Kein Overhead. Fokus auf Wirksamkeit.',
        'Wir analysieren Ihre bestehenden Abläufe und identifizieren, was tatsächlich gebraucht wird – und was nicht.',
        'Das Ergebnis: Schlanke, verständliche Prozesse, die Ihr Team tatsächlich umsetzt.',
      ],
    },
    {
      title: 'Reproduzierbarkeit',
      content: [
        'Prozesse müssen wiederholbar sein.',
        'Standardisierung ohne Überregulierung. Dokumentation, die Menschen verstehen und anwenden können.',
        'Jeder Prozess wird so gestaltet, dass er von verschiedenen Personen mit gleichem Ergebnis ausgeführt werden kann.',
        'Das ist die Basis für Qualität, Skalierung und Zertifizierung.',
      ],
    },
    {
      title: 'Nachvollziehbarkeit',
      content: [
        'Dokumentierte Entscheidungen. Audit-Trails. Transparenz.',
        'Jede Änderung, jede Entscheidung, jeder Prozessschritt ist nachvollziehbar dokumentiert.',
        'Für interne Reviews, externe Audits und regulatorische Anforderungen.',
        'Das gibt Ihnen Sicherheit – und Auditoren Vertrauen.',
      ],
    },
    {
      title: 'Moderne Methodik',
      content: [
        'Effiziente Werkzeuge, moderne Ansätze.',
        'Der Einsatz moderner Werkzeuge – einschließlich LLM-gestützter Prozesse – ist selbstverständlich.',
        'Das bedeutet: Hohe Geschwindigkeit ohne Qualitätsverlust. Effiziente Erstellung von Dokumentation, Analyse von Prozessdaten, Strukturierung komplexer Anforderungen.',
        'Keine Spielerei, sondern professioneller Einsatz für messbare Effizienzgewinne.',
      ],
    },
  ];

  const phases = [
    { name: 'Analyse', desc: 'Bestandsaufnahme, Gap Analysis, Zieldefinition' },
    { name: 'Struktur', desc: 'Prozessdesign, Dokumentationsarchitektur, Verantwortlichkeiten' },
    { name: 'Umsetzung', desc: 'Erstellung der Dokumentation, Implementierung der Prozesse' },
    { name: 'Review & Übergabe', desc: 'Validierung, Schulung, Audit-Vorbereitung' },
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
              Unsere Arbeitsweise
            </h1>
            <p className="text-xl text-text-light">
              Strukturiert. Reproduzierbar. Audit-fähig.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Principles */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="card-minimal"
            >
              <h2 className="text-2xl font-bold text-qcore-blue mb-6">
                {principle.title}
              </h2>
              <div className="space-y-4">
                {principle.content.map((paragraph, i) => (
                  <p key={i} className="text-text-light leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-16 px-6 bg-dark-bg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Typischer Projektablauf
          </h2>
          
          <div className="grid md:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-qcore-navy rounded-full flex items-center justify-center text-xl text-qcore-blue font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {phase.name}
                </h3>
                <p className="text-text-muted text-sm">
                  {phase.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-6">
            Bereit für strukturierte Prozesse?
          </h2>
          
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
