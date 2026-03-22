// Insights — aktuelle Analysen, chronologisch (neueste zuerst)

export const insights = [
  {
    slug: 'stryker-cyberangriff-2026',
    category: 'Cybersecurity',
    categoryColor: '#1e3a8a',
    date: '2026-03-21',
    title: 'Stryker: 80.000 Geräte gelöscht',
    titleEn: 'Stryker: 80,000 Devices Wiped',
    teaser: 'Keine Malware. Keine Ransomware. Strykers eigene Tools als Waffe. Was der größte Cyberangriff auf einen MedTech-Hersteller für Ihr QMS bedeutet.',
    teaserEn: 'No malware. No ransomware. Stryker\'s own tools weaponized. What the largest cyberattack on a MedTech manufacturer means for your QMS.',
    readTime: '12 Min',
    images: [
      { src: '/images/insights/stryker-cisa-advisory.png', caption: 'CISA Advisory — Intune Hardening, 18.03.2026' },
      { src: '/images/insights/stryker-fbi-seizure.png', caption: 'FBI Seizure Notice — handala-hack.to, 19.03.2026' },
    ],
  },
  {
    slug: 'insulet-omnipod-recall-2026',
    category: 'FDA',
    categoryColor: '#b91c1c',
    date: '2026-03-20',
    title: 'FDA Early Alert: Insulet Omnipod 5',
    titleEn: 'FDA Early Alert: Insulet Omnipod 5',
    teaser: '1,5% der Produktion, $40 Mio. Recall. Was der Fall für Ihr Risikomanagement bedeutet.',
    teaserEn: '1.5% of production, $40M recall. What this case means for your risk management.',
    readTime: '8 Min',
    images: [
      { src: '/images/insights/omnipod_linkedin.jpg', caption: 'Omnipod 5 — FDA Early Alert, 18.03.2026' },
    ],
  },
];

export function getInsightBySlug(slug) {
  return insights.find(i => i.slug === slug) || null;
}

export function getLatestInsight() {
  return insights[0] || null;
}
