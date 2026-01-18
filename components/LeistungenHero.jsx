'use client';

import { useTranslation } from '../hooks/useTranslation';

export default function LeistungenHero() {
  const { t } = useTranslation();
  
  const services = [
    {
      title: t('home.services.title1'),
      items: t('home.services.items1'),
    },
    {
      title: t('home.services.title2'),
      items: t('home.services.items2'),
    },
    {
      title: t('home.services.title3'),
      items: t('home.services.items3'),
    },
    {
      title: t('home.services.title4'),
      items: t('home.services.items4'),
    },
  ];

  return (
    <section className="relative pb-12 z-10">
      <div className="max-w-[90%] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-8 rounded-xl transition-all duration-300 cursor-default hover:shadow-lg"
              style={{
                backgroundColor: 'rgba(30, 58, 138, 0.06)',
                border: '1px solid rgba(30, 58, 138, 0.1)',
                backdropFilter: 'blur(3px)',
              }}
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
