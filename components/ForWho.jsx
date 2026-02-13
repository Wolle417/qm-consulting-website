'use client';

import { useTranslation } from '../hooks/useTranslation';

export default function ForWho() {
  const { locale } = useTranslation();

  const clientsDE = [
    {
      title: 'Regulierte Umgebungen',
      industries: 'Pharma • MedTech • Biotech',
      need: 'Audit-fähige QM-Systeme, formale Methoden, lückenlose Dokumentation.',
      solution: 'Reproduzierbar, nachvollziehbar, compliance-ready. Ohne Overhead.',
    },
    {
      title: 'Technik-orientierte KMUs',
      industries: 'Halbleiter & Optoelektronik • Fertigung • Elektronik',
      need: 'Strukturierte Prozesse, saubere Dokumentation, Zertifizierungsfähigkeit.',
      solution: 'Stabile Prozesslandschaft. Fehlerresilient. Skalierbar.',
    },
    {
      title: 'Scale-ups & Wachstum',
      industries: 'Von 10 auf 100 Mitarbeiter. Von Ad-hoc zu strukturiert.',
      need: 'Systeme die mitwachsen – ohne Ihr Team auszubremsen.',
      solution: 'Lean, skalierbar, nicht bürokratisch.',
    },
  ];

  const clientsEN = [
    {
      title: 'Regulated Environments',
      industries: 'Pharma • MedTech • Biotech',
      need: 'Audit-ready QMS, formal methods, complete documentation.',
      solution: 'Reproducible, traceable, compliance-ready. Without overhead.',
    },
    {
      title: 'Tech-focused SMEs',
      industries: 'Semiconductor & Optoelectronics • Manufacturing • Electronics',
      need: 'Structured processes, clean documentation, certification-ready.',
      solution: 'Stable process landscape. Fault-resilient. Scalable.',
    },
    {
      title: 'Scale-ups & Growth',
      industries: 'From 10 to 100 employees. From ad-hoc to structured.',
      need: 'Systems that grow with you – without slowing down your team.',
      solution: 'Lean, scalable, not bureaucratic.',
    },
  ];

  const clients = locale === 'de' ? clientsDE : clientsEN;
  const title = locale === 'de' ? 'Für wen wir arbeiten' : 'Who We Work With';
  const youNeed = locale === 'de' ? 'Sie brauchen:' : 'You need:';
  const weDeliver = locale === 'de' ? 'Wir liefern:' : 'We deliver:';

  return (
    <section id="forwho" className="section-padding relative z-10">
      <div className="max-w-[90%] mx-auto px-6">
        <h2 
          className="text-4xl md:text-5xl font-bold mb-16"
          style={{
            color: '#1e293b',
            fontFamily: "'Cormorant', serif",
          }}
        >
          {title}
        </h2>

        <div className="grid md:grid-cols-3 gap-4">
          {clients.map((client, index) => (
            <div
              key={index}
              className="p-8 rounded-xl transition-all duration-300 cursor-default hover:shadow-lg"
              style={{
                backgroundColor: 'rgba(30, 58, 138, 0.06)',
                border: '1px solid rgba(30, 58, 138, 0.1)',
                backdropFilter: 'blur(3px)',
              }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#1e293b' }}>
                {client.title}
              </h3>
              
              <p className="text-sm mb-4" style={{ color: '#334155' }}>
                {client.industries}
              </p>
              
              <div className="space-y-3">
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1 font-semibold" style={{ color: '#1e3a8a' }}>
                    {youNeed}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#334155' }}>
                    {client.need}
                  </p>
                </div>
                
                <div>
                  <p className="text-xs uppercase tracking-wide mb-1 font-semibold" style={{ color: '#1e3a8a' }}>
                    {weDeliver}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: '#334155' }}>
                    {client.solution}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
