export const categories = [
  {
    id: 'grundlagen',
    icon: '📚',
    title: 'Grundlagen',
    articles: [
      { id: 'was-ist-qm', title: 'Was ist Qualitätsmanagement?', time: '5 Min', level: 1, url: '/qm-wissen' },
      { id: 'iso-9001', title: 'ISO 9001 erklärt', time: '10 Min', level: 1, url: '/qm-wissen' },
      { id: 'pdca', title: 'Der PDCA-Zyklus', time: '5 Min', level: 1, url: '/pdca' },
      { id: 'begriffe', title: 'Begriffe & Definitionen', time: '6 Min', level: 1, url: '/begriffe' },
    ]
  },
  {
    id: 'methoden',
    icon: '🔧',
    title: 'Methoden',
    articles: [
      { id: 'fmea', title: 'FMEA Grundlagen', time: '12 Min', level: 2, url: '/fmea' },
      { id: 'root-cause', title: 'Root Cause Analysis', time: '9 Min', level: 2, url: '/root-cause-analysis' },
      { id: 'capa', title: 'CAPA umsetzen', time: '11 Min', level: 2, url: '/capa' },
      { id: 'audit-vorbereitung', title: 'Audit-Vorbereitung', time: '12 Min', level: 2, url: '/audit-vorbereitung' },
    ]
  },
  {
    id: 'branchen',
    icon: '🏭',
    title: 'Branchenspezifisch',
    articles: [
      { id: 'iso-13485', title: 'ISO 13485 (Medical)', time: '15 Min', level: 2, url: '/qm-wissen' },
      { id: 'gmp', title: 'GMP (Pharma)', time: '12 Min', level: 3, url: '/qm-wissen' },
      { id: 'eu-mdr', title: 'EU-MDR Grundlagen', time: '14 Min', level: 2, url: '/eu-mdr' },
    ]
  },
  {
    id: 'validation',
    icon: '✅',
    title: 'Validation',
    articles: [
      { id: 'iq-oq-pq', title: 'IQ/OQ/PQ erklärt', time: '11 Min', level: 2, url: '/iq-oq-pq' },
      { id: 'process-validation', title: 'Process Validation', time: '13 Min', level: 2, url: '/process-validation' },
      { id: 'csv', title: 'Computer System Validation', time: '14 Min', level: 3, url: '/csv' },
    ]
  },
];
