'use client';

export default function LeistungenHero() {
  const services = [
    {
      title: 'QM-System Aufbau & Zertifizierung',
      items: [
        'Quality Manual & QM-Handbuch (ISO 9001)',
        'Prozessdokumentation (SOPs, Arbeitsanweisungen)',
        'Management Review, Interne Audits',
        'Vorbereitung auf Zertifizierungsaudit',
      ],
    },
    {
      title: 'Branchenspezifische Anpassung',
      items: [
        'Pharma: GMP-Anforderungen, Validation, CAPA',
        'Medical Devices: Technische Dokumentation, Risikoanalyse (ISO 14971)',
        'Nuklear: KTA-Standards, Safety Analysis',
        'Fertigung: Produktionssteuerung, Qualitätskontrolle',
      ],
    },
    {
      title: 'Risk Management & Prozessoptimierung',
      items: [
        'FMEA (Failure Mode and Effects Analysis)',
        'Root Cause Analysis (5-Why, Ishikawa)',
        'Continuous Improvement (KVP, Lean)',
        'Process Mapping und Optimization',
      ],
    },
    {
      title: 'Dokumentation & Validation',
      items: [
        'Equipment Qualification (IQ/OQ/PQ)',
        'Process Validation',
        'Computer System Validation',
        'Analytical Method Validation',
      ],
    },
  ];

  return (
    <section className="relative pb-12 z-10">
      <div className="max-w-[90%] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-lg transition-all duration-300 bg-qcore-navy bg-opacity-30 hover:bg-opacity-45 cursor-default"
            >
              <h3 className="text-2xl font-semibold mb-3" style={{ color: '#1e293b' }}>
                {service.title}
              </h3>
              
              <ul className="space-y-2">
                {service.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="w-2 h-2 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-base leading-relaxed" style={{ color: '#000000' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
