'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Expertise() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const themes = [
    {
      title: 'Qualität & Compliance',
      intro: 'Qualität ist universell: klare Prozesse, stabile Ergebnisse, kontrollierte Risiken.',
      points: [
        'Aufbau & Modernisierung von QM-Systemen (ISO 9001, branchenspezifische Standards)',
        'Auditfähigkeit, Dokumentationsketten, Risiko- & Abweichungsmanagement',
        'Corrective Actions, Traceability, Nachvollziehbarkeit',
        'Change Control, Management Review, kontinuierliche Verbesserung',
      ],
    },
    {
      title: 'Technische Systeme & Engineering-Logik',
      points: [
        'Analyse technischer Prozesse & Fehlerbilder',
        'Stabilisierung komplexer Prozessketten',
        'Verifikation, Nachweisführung, Strukturierung von Workflows',
        'Integration von Quality Management in technische Entwicklung',
      ],
    },
    {
      title: 'Regulierte Industrien',
      intro: '10+ Jahre Erfahrung in hochregulierten Branchen:',
      industries: [
        'Nukleartechnik (KTA-konform, Safety-Critical Systems)',
        'Medizintechnik & Healthcare (ISO 13485, MDR)',
        'Pharma & Biotech (GMP, ICH Guidelines)',
        'Elektronik & LED (Produktentwicklung, Validation)',
        'Halbleiter (Cleanroom, Process Control)',
        'Anlagenbau & Energie (Großanlagen, komplexe Systeme)',
      ],
      points: [
        'Formale Methoden, Risikobeherrschung, Dokumentationsarchitektur',
      ],
    },
    {
      title: 'Prozesse, Struktur & Skalierbarkeit',
      intro: 'Ihr Problem erfordert Struktur, nicht mehr Meetings.',
      points: [
        'Prozessdesign, Rollen & Verantwortlichkeiten',
        'Fehlerresiliente Abläufe',
        'Strukturen für Wachstum & technische Skalierung',
        'Lean Management, keine Überregulierung',
      ],
    },
    {
      title: 'Arbeitsweise & Methodik',
      points: [
        'Grundprinzipien: Analyse → Struktur → Umsetzung → Dokumentation',
        'Moderne Tools als Methodik: Der Einsatz moderner Werkzeuge (inkl. LLM-gestützter Prozesse) ist selbstverständlich. Effizienzgewinn ohne Qualitätskompromisse.',
        'Reproduzierbare Ergebnisse: Nachvollziehbarkeit, Präzision, Audit-Sicherheit',
        'Hohe Wirksamkeit: In heterogenen, technischen Teams. Senior-Level Kommunikation.',
      ],
    },
  ];

  return (
    <section id="expertise" className="section-padding bg-dark-navy" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-white">
            Kompetenzprofil
          </h2>
          
          <p className="text-xl text-text-light text-center mb-16 max-w-3xl mx-auto">
            Branchenübergreifende Expertise in Quality Management, 
            technischen Systemen und regulierten Industrien.
          </p>

          <div className="space-y-8">
            {themes.map((theme, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-minimal"
              >
                <h3 className="text-2xl font-semibold text-qcore-blue mb-4">
                  {theme.title}
                </h3>
                
                {theme.intro && (
                  <p className="mb-4 italic" style={{ color: '#1a1a1a', lineHeight: '1.2' }}>
                    {theme.intro}
                  </p>
                )}
                
                {theme.industries && (
                  <ul className="mb-4 space-y-1">
                    {theme.industries.map((industry, i) => (
                      <li key={i} className="ml-4" style={{ color: '#1a1a1a', lineHeight: '1.2' }}>
                        • {industry}
                      </li>
                    ))}
                  </ul>
                )}
                
                <ul className="space-y-1">
                  {theme.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-3 mt-1.5 flex-shrink-0"></span>
                      <span style={{ color: '#1a1a1a', lineHeight: '1.2' }}>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
