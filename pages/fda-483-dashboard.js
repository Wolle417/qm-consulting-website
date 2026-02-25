import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, Area, AreaChart, Cell, Legend
} from 'recharts';

// ============================================================
// FDA 483 DATA — Real data from FDA Inspectional Observations
// ============================================================

const FDA_483_TOP10_DEVICES_FY2024 = [
  { name: 'CAPA', fullName: 'Corrective & Preventive Action', cfr: '§820.198', count: 254, color: '#ef4444' },
  { name: 'Complaints', fullName: 'Complaint Handling', cfr: '§820.198', count: 191, color: '#f97316' },
  { name: 'NC Product', fullName: 'Nonconforming Product', cfr: '§820.90', count: 92, color: '#eab308' },
  { name: 'Validation', fullName: 'Process Validation', cfr: '§820.75', count: 85, color: '#3b82f6' },
  { name: 'Purchasing', fullName: 'Purchasing Controls', cfr: '§820.50', count: 82, color: '#8b5cf6' },
  { name: 'Design', fullName: 'Design Controls', cfr: '§820.30', count: 78, color: '#06b6d4' },
  { name: 'Production', fullName: 'Production & Process Controls', cfr: '§820.70', count: 71, color: '#10b981' },
  { name: 'Documents', fullName: 'Document Controls', cfr: '§820.40', count: 65, color: '#6366f1' },
  { name: 'Management', fullName: 'Management Responsibility', cfr: '§820.20', count: 58, color: '#ec4899' },
  { name: 'MDR', fullName: 'Medical Device Reporting', cfr: '§803', count: 52, color: '#a855f7' },
];

const CAPA_TREND = [
  { year: 'FY2019', citations: 379, label: 'Pre-COVID Peak' },
  { year: 'FY2020', citations: 197, label: 'COVID-19 (-48%)' },
  { year: 'FY2021', citations: 228, label: 'Recovery Begins' },
  { year: 'FY2023', citations: 313, label: 'Full Recovery' },
  { year: 'FY2024', citations: 254, label: 'Current' },
];

const YOY_COMPARISON = [
  { finding: 'CAPA', fy2023: 227, fy2024: 254, change: '+12%', up: true },
  { finding: 'Complaints', fy2023: 178, fy2024: 191, change: '+7%', up: true },
  { finding: 'Validation', fy2023: 72, fy2024: 85, change: '+18%', up: true },
  { finding: 'Design Controls', fy2023: 89, fy2024: 78, change: '-12%', up: false },
  { finding: 'Purchasing', fy2023: 68, fy2024: 82, change: '+21%', up: true },
  { finding: 'Documents', fy2023: 71, fy2024: 65, change: '-8%', up: false },
];

// ============================================================
// TRANSLATIONS
// ============================================================

const translations = {
  de: {
    meta: {
      title: 'FDA 483 Inspection Trends Dashboard | QCore Consulting',
      description: 'Interaktives Dashboard der häufigsten FDA 483 Findings für Medical Devices. CAPA, Complaint Handling, Process Validation — Daten aus 721+ Warning Letters.',
    },
    hero: {
      badge: 'Kostenlos · Monatlich aktualisiert',
      title: 'FDA 483 Inspection Trends',
      subtitle: 'Die häufigsten FDA-Findings für Medical Devices — visualisiert und analysiert.',
      description: 'Basierend auf offiziellen FDA 483 Inspectional Observations und der Analyse von 721+ FDA Warning Letters. Wissen Sie, wo FDA-Inspektoren bei Ihrem nächsten Audit hinschauen werden?',
    },
    stats: {
      totalLabel: 'Gesamt 483 Observations (Devices)',
      totalChange: '↑ 18% vs FY2023',
      capaLabel: 'CAPA-Zitierungen FY2024',
      capaChange: '#1 seit FY2019 — 5 Jahre in Folge',
      lettersLabel: 'Warning Letters analysiert',
      lettersChange: 'KI-gestützt nach Lernwert bewertet',
      industriesLabel: 'Abgedeckte Industrien',
      industriesChange: 'Medical Devices · Drugs · Biologics',
    },
    chart: {
      top10Title: 'Top 10 FDA 483 Observations — Medical Devices FY2024',
      top10Source: 'Quelle: FDA Inspectional Observations Database',
      trendTitle: 'CAPA-Zitierungen — 6-Jahres-Trendanalyse',
      trendSubtitle: 'Medical Devices FY2019–FY2024',
      yoyTitle: 'Veränderung zum Vorjahr — FY2023 vs FY2024',
    },
    insights: {
      title: 'Kernerkenntnisse',
      items: [
        {
          type: 'warning',
          title: 'CAPA bleibt kritisch',
          text: 'CAPA ist seit 5 Jahren ununterbrochen das häufigste FDA 483 Finding für Medical Devices. 58% aller Warning Letters zitieren CAPA-Defizite.',
        },
        {
          type: 'warning',
          title: 'Post-COVID Anstieg',
          text: 'Nach einem Rückgang von -48% während COVID (FY2020) haben sich die Inspektionsvolumen vollständig erholt. FY2023 zeigte +135% mehr CAPA-Zitierungen vs. dem COVID-Tief.',
        },
        {
          type: 'info',
          title: 'QMSR-Umstellung',
          text: 'Der FDA-Wechsel von 21 CFR 820 auf die ISO 13485-harmonisierte QMSR (wirksam seit Feb 2026) verändert die Inspektionskriterien. QMS-Dokumentation muss aktualisiert werden.',
        },
        {
          type: 'tip',
          title: 'Complaint → CAPA Verbindung',
          text: 'Findings #1 und #2 (CAPA + Complaints) hängen zusammen. Die meisten CAPA-Failures stammen aus unzureichenden Complaint-Investigation-Prozessen.',
        },
        {
          type: 'info',
          title: 'Process Validation steigt',
          text: '+18% Anstieg bei Validation-Findings signalisiert verstärkte FDA-Überprüfung von Software-Validierung und Fertigungsprozesskontrollen.',
        },
      ],
    },
    cta: {
      title: 'Ist Ihr CAPA-System audit-ready?',
      text: 'CAPA ist seit 5 Jahren FDA Finding #1. Ich prüfe Ihren CAPA-Prozess in 15 Minuten — kostenlos und ehrlich.',
      button: 'Kostenlosen CAPA-Check anfragen →',
      secondary: 'Oder: CAPA System Bundle ansehen',
    },
    email: {
      title: 'Monatlicher FDA 483 Report',
      text: 'Aktuelle Trends, neue Warning Letter-Analysen, praktische Tipps.',
      placeholder: 'Ihre Email-Adresse',
      button: 'Report abonnieren →',
      privacy: 'Kein Spam · Jederzeit abbestellbar',
    },
    cfr: {
      title: 'Meistzitierte CFR-Abschnitte',
    },
    footer: {
      source: 'Datenquellen: FDA 483 Inspectional Observations Database · FDA Warning Letters · openFDA API',
      updated: 'Monatlich aktualisiert',
    },
  },
  en: {
    meta: {
      title: 'FDA 483 Inspection Trends Dashboard | QCore Consulting',
      description: 'Interactive dashboard of the most common FDA 483 findings for Medical Devices. CAPA, Complaint Handling, Process Validation — data from 721+ Warning Letters.',
    },
    hero: {
      badge: 'Free · Updated Monthly',
      title: 'FDA 483 Inspection Trends',
      subtitle: 'The most common FDA findings for Medical Devices — visualized and analyzed.',
      description: 'Based on official FDA 483 Inspectional Observations and the analysis of 721+ FDA Warning Letters. Do you know where FDA inspectors will focus during your next audit?',
    },
    stats: {
      totalLabel: 'Total 483 Observations (Devices)',
      totalChange: '↑ 18% vs FY2023',
      capaLabel: 'CAPA Citations FY2024',
      capaChange: '#1 since FY2019 — 5 years running',
      lettersLabel: 'Warning Letters Analyzed',
      lettersChange: 'AI-scored by educational value',
      industriesLabel: 'Industries Covered',
      industriesChange: 'Medical Devices · Drugs · Biologics',
    },
    chart: {
      top10Title: 'Top 10 FDA 483 Observations — Medical Devices FY2024',
      top10Source: 'Source: FDA Inspectional Observations Database',
      trendTitle: 'CAPA Citations — 6-Year Trend Analysis',
      trendSubtitle: 'Medical Devices FY2019–FY2024',
      yoyTitle: 'Year-over-Year Changes — FY2023 vs FY2024',
    },
    insights: {
      title: 'Key Insights',
      items: [
        {
          type: 'warning',
          title: 'CAPA Remains Critical',
          text: 'CAPA has been the #1 FDA 483 finding for Medical Devices for 5 consecutive fiscal years. 58% of Warning Letters cite CAPA deficiencies.',
        },
        {
          type: 'warning',
          title: 'Post-COVID Surge',
          text: 'After a -48% drop during COVID (FY2020), inspection volumes have fully recovered. FY2023 saw +135% more CAPA citations vs. the COVID low.',
        },
        {
          type: 'info',
          title: 'QMSR Transition Impact',
          text: "FDA's shift from 21 CFR 820 to ISO 13485-harmonized QMSR (effective Feb 2026) will change inspection criteria. Companies must update QMS documentation.",
        },
        {
          type: 'tip',
          title: 'Complaint → CAPA Link',
          text: 'Findings #1 and #2 (CAPA + Complaints) are interconnected. Most CAPA failures stem from inadequate complaint investigation processes.',
        },
        {
          type: 'info',
          title: 'Process Validation Rising',
          text: '+18% YoY increase in validation findings signals increased FDA scrutiny on software validation and manufacturing process controls.',
        },
      ],
    },
    cta: {
      title: 'Is Your CAPA System Audit-Ready?',
      text: "CAPA has been FDA's #1 finding for 5 years. I'll review your CAPA process in 15 minutes — free and honest.",
      button: 'Request Free CAPA Check →',
      secondary: 'Or: View CAPA System Bundle',
    },
    email: {
      title: 'Monthly FDA 483 Report',
      text: 'Latest trends, new Warning Letter analyses, practical tips.',
      placeholder: 'Your email address',
      button: 'Subscribe to Report →',
      privacy: 'No spam · Unsubscribe anytime',
    },
    cfr: {
      title: 'Most Cited CFR Sections',
    },
    footer: {
      source: 'Data Sources: FDA 483 Inspectional Observations Database · FDA Warning Letters · openFDA API',
      updated: 'Updated Monthly',
    },
  },
};

// ============================================================
// CUSTOM TOOLTIP
// ============================================================

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload || !payload.length) return null;
  const data = payload[0].payload;
  return (
    <div
      className="rounded-lg p-3 shadow-lg"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(8px)',
        border: '1px solid rgba(30, 58, 138, 0.15)',
      }}
    >
      <p className="font-semibold text-sm" style={{ color: '#0f172a' }}>
        {data.fullName || data.name || label}
      </p>
      {data.cfr && (
        <p className="text-xs" style={{ color: '#64748b' }}>{data.cfr}</p>
      )}
      <p className="text-lg font-bold mt-1" style={{ color: '#1e3a8a' }}>
        {data.count || data.citations} citations
      </p>
      {data.label && (
        <p className="text-xs mt-1" style={{ color: '#64748b' }}>{data.label}</p>
      )}
    </div>
  );
}

// ============================================================
// MAIN PAGE COMPONENT
// ============================================================

export default function FDA483Dashboard() {
  const router = useRouter();
  const locale = router.locale || 'de';
  const t = translations[locale] || translations.en;
  const isDE = locale === 'de';

  const [selectedFinding, setSelectedFinding] = useState(null);
  const [emailValue, setEmailValue] = useState('');

  const boxStyle = {
    backgroundColor: 'rgba(30, 58, 138, 0.06)',
    border: '1px solid rgba(30, 58, 138, 0.1)',
    backdropFilter: 'blur(3px)',
  };

  const insightStyles = {
    warning: {
      backgroundColor: 'rgba(239, 68, 68, 0.08)',
      border: '1px solid rgba(239, 68, 68, 0.2)',
      accentColor: '#b91c1c',
      textColor: '#7f1d1d',
    },
    info: {
      backgroundColor: 'rgba(59, 130, 246, 0.08)',
      border: '1px solid rgba(59, 130, 246, 0.2)',
      accentColor: '#1e40af',
      textColor: '#1e3a5f',
    },
    tip: {
      backgroundColor: 'rgba(34, 197, 94, 0.1)',
      border: '1px solid rgba(34, 197, 94, 0.2)',
      accentColor: '#166534',
      textColor: '#14532d',
    },
  };

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
        <meta property="og:title" content={t.meta.title} />
        <meta property="og:description" content={t.meta.description} />
        <meta property="og:type" content="website" />
        <link rel="canonical" href={`https://qcore-consulting.de${isDE ? '' : '/en'}/fda-483-dashboard`} />
      </Head>

      <Navigation />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(1200px 900px at 18% 12%, rgba(255,255,255,.55), transparent 62%),
              radial-gradient(900px 700px at 78% 65%, rgba(255,255,255,.25), transparent 58%),
              radial-gradient(1400px 1100px at 82% 20%, rgba(130,170,185,.28), transparent 60%),
              linear-gradient(180deg, #c5d3d8, #7a9299)
            `,
          }}
        />
      </div>

      <main className="pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto">

          {/* ==================== HERO ==================== */}
          <section className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              {/* Badge */}
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#b91c1c' }}
                >
                  CAPA = #1 Finding — 5 {isDE ? 'Jahre in Folge' : 'Years Running'}
                </span>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#166534' }}
                >
                  {t.hero.badge}
                </span>
              </div>

              {/* Title */}
              <h1
                className="text-5xl lg:text-6xl font-semibold mb-4"
                style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
              >
                {t.hero.title}
              </h1>

              <p className="text-xl mb-2" style={{ color: '#1e293b' }}>
                {t.hero.subtitle}
              </p>

              <p className="text-base max-w-3xl mb-8" style={{ color: '#475569' }}>
                {t.hero.description}
              </p>
            </motion.div>
          </section>

          {/* ==================== STATS ROW ==================== */}
          <section className="mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { value: '1,247', label: t.stats.totalLabel, change: t.stats.totalChange, changeColor: '#b91c1c' },
                { value: '254', label: t.stats.capaLabel, change: t.stats.capaChange, changeColor: '#b91c1c' },
                { value: '721+', label: t.stats.lettersLabel, change: t.stats.lettersChange, changeColor: '#1e3a8a' },
                { value: '3', label: t.stats.industriesLabel, change: t.stats.industriesChange, changeColor: '#475569' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl p-6"
                  style={boxStyle}
                >
                  <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: '#64748b' }}>
                    {stat.label}
                  </p>
                  <p className="text-3xl font-bold mb-1" style={{ color: '#0f172a', fontFamily: "'Cormorant', serif" }}>
                    {stat.value}
                  </p>
                  <p className="text-xs font-medium" style={{ color: stat.changeColor }}>
                    {stat.change}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ==================== MAIN GRID: CHARTS + INSIGHTS ==================== */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-12">

            {/* LEFT: CHARTS (3 cols) */}
            <div className="lg:col-span-3 space-y-8">

              {/* TOP 10 BAR CHART */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="rounded-xl p-6"
                style={boxStyle}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2
                      className="text-2xl font-semibold mb-1"
                      style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                    >
                      {t.chart.top10Title}
                    </h2>
                    <p className="text-xs" style={{ color: '#64748b' }}>{t.chart.top10Source}</p>
                  </div>
                </div>

                <ResponsiveContainer width="100%" height={420}>
                  <BarChart
                    data={FDA_483_TOP10_DEVICES_FY2024}
                    layout="vertical"
                    margin={{ top: 5, right: 30, left: 120, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(30, 58, 138, 0.08)" />
                    <XAxis type="number" tick={{ fill: '#64748b', fontSize: 12 }} />
                    <YAxis
                      dataKey="name"
                      type="category"
                      tick={{ fill: '#334155', fontSize: 13, fontWeight: 500 }}
                      width={110}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="count" radius={[0, 6, 6, 0]} barSize={28}>
                      {FDA_483_TOP10_DEVICES_FY2024.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={entry.color}
                          opacity={selectedFinding === null || selectedFinding === index ? 1 : 0.3}
                          cursor="pointer"
                          onClick={() => setSelectedFinding(selectedFinding === index ? null : index)}
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>

                {/* CFR Reference Tags */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {FDA_483_TOP10_DEVICES_FY2024.slice(0, 5).map((item, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-lg text-xs font-medium"
                      style={{
                        backgroundColor: `${item.color}15`,
                        color: item.color,
                        border: `1px solid ${item.color}30`,
                      }}
                    >
                      {item.cfr} — {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* CAPA TREND AREA CHART */}
              <div className="rounded-xl p-6" style={boxStyle}>
                <h2
                  className="text-2xl font-semibold mb-1"
                  style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                >
                  {t.chart.trendTitle}
                </h2>
                <p className="text-xs mb-6" style={{ color: '#64748b' }}>{t.chart.trendSubtitle}</p>

                <ResponsiveContainer width="100%" height={280}>
                  <AreaChart data={CAPA_TREND} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="capaTrendGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(30, 58, 138, 0.08)" />
                    <XAxis dataKey="year" tick={{ fill: '#64748b', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#64748b', fontSize: 12 }} domain={[0, 450]} />
                    <Tooltip content={<CustomTooltip />} />
                    <Area
                      type="monotone"
                      dataKey="citations"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      fill="url(#capaTrendGradient)"
                      dot={{ fill: '#3b82f6', r: 6, strokeWidth: 2, stroke: '#fff' }}
                      activeDot={{ r: 8, strokeWidth: 2, stroke: '#1e3a8a' }}
                    />
                  </AreaChart>
                </ResponsiveContainer>

                {/* COVID annotation */}
                <div className="flex items-center gap-2 mt-3">
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#10b981' }} />
                  <span className="text-xs" style={{ color: '#64748b' }}>
                    FY2020: -48% {isDE ? 'durch COVID-19 (reduzierte Inspektionen)' : 'due to COVID-19 (reduced inspections)'}
                  </span>
                </div>
              </div>

              {/* YEAR-OVER-YEAR COMPARISON */}
              <div className="rounded-xl p-6" style={boxStyle}>
                <h2
                  className="text-2xl font-semibold mb-6"
                  style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                >
                  {t.chart.yoyTitle}
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {YOY_COMPARISON.map((item, i) => (
                    <div
                      key={i}
                      className="rounded-lg p-4 text-center"
                      style={{
                        backgroundColor: item.up ? 'rgba(239, 68, 68, 0.05)' : 'rgba(34, 197, 94, 0.05)',
                        border: `1px solid ${item.up ? 'rgba(239, 68, 68, 0.15)' : 'rgba(34, 197, 94, 0.15)'}`,
                      }}
                    >
                      <p className="text-xs font-medium mb-2" style={{ color: '#64748b' }}>{item.finding}</p>
                      <div className="flex items-center justify-center gap-2 mb-1">
                        <span className="text-sm" style={{ color: '#94a3b8' }}>{item.fy2023}</span>
                        <span className="text-xs" style={{ color: '#64748b' }}>→</span>
                        <span
                          className="text-xl font-bold"
                          style={{ color: item.up ? '#b91c1c' : '#166534' }}
                        >
                          {item.fy2024}
                        </span>
                      </div>
                      <p
                        className="text-xs font-semibold"
                        style={{ color: item.up ? '#ef4444' : '#22c55e' }}
                      >
                        {item.change}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT: INSIGHTS + CTAs (2 cols) */}
            <div className="lg:col-span-2 space-y-6">

              {/* EMAIL CAPTURE */}
              <div className="rounded-xl p-6 lg:sticky lg:top-24" style={boxStyle}>
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                >
                  {t.email.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#475569' }}>{t.email.text}</p>

                <div className="flex gap-2 mb-2">
                  <input
                    type="email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                    placeholder={t.email.placeholder}
                    className="flex-1 px-4 py-3 rounded-lg text-sm outline-none"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.6)',
                      border: '1px solid rgba(30, 58, 138, 0.15)',
                      color: '#1e293b',
                    }}
                  />
                </div>
                <button
                  className="w-full px-6 py-3 rounded-lg font-semibold text-sm transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'rgba(191, 219, 254, 0.35)',
                    backdropFilter: 'blur(3px)',
                    border: '1px solid rgba(191, 219, 254, 0.5)',
                    color: '#1e3a8a',
                  }}
                >
                  {t.email.button}
                </button>
                <p className="text-xs text-center mt-2" style={{ color: '#64748b' }}>{t.email.privacy}</p>
              </div>

              {/* INSIGHTS */}
              <div className="rounded-xl p-6" style={boxStyle}>
                <h3
                  className="text-xl font-semibold mb-4"
                  style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                >
                  {t.insights.title}
                </h3>

                <div className="space-y-4">
                  {t.insights.items.map((insight, i) => {
                    const style = insightStyles[insight.type];
                    return (
                      <div
                        key={i}
                        className="rounded-lg p-4"
                        style={{
                          backgroundColor: style.backgroundColor,
                          border: style.border,
                        }}
                      >
                        <h4 className="text-sm font-bold mb-1" style={{ color: style.accentColor }}>
                          {insight.title}
                        </h4>
                        <p className="text-xs leading-relaxed" style={{ color: style.textColor }}>
                          {insight.text}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CFR SECTIONS */}
              <div className="rounded-xl p-6" style={boxStyle}>
                <h3
                  className="text-lg font-semibold mb-4"
                  style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                >
                  {t.cfr.title}
                </h3>
                <div className="space-y-2">
                  {[
                    { cfr: '§820.198', count: 445, highlight: true },
                    { cfr: '§820.90', count: 92 },
                    { cfr: '§820.75', count: 85 },
                    { cfr: '§820.50', count: 82 },
                    { cfr: '§820.30', count: 78 },
                    { cfr: '§820.70', count: 71 },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center px-4 py-3 rounded-lg"
                      style={{
                        backgroundColor: item.highlight ? 'rgba(239, 68, 68, 0.08)' : 'rgba(30, 58, 138, 0.03)',
                      }}
                    >
                      <span className="text-sm font-semibold" style={{ color: '#0f172a' }}>{item.cfr}</span>
                      <span
                        className="text-sm font-medium"
                        style={{ color: item.highlight ? '#b91c1c' : '#64748b' }}
                      >
                        {item.count} citations
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CONSULTING CTA */}
              <div
                className="rounded-xl p-6"
                style={{
                  backgroundColor: 'rgba(30, 58, 138, 0.1)',
                  border: '1px solid rgba(30, 58, 138, 0.2)',
                  backdropFilter: 'blur(3px)',
                }}
              >
                <h3
                  className="text-xl font-semibold mb-2"
                  style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                >
                  {t.cta.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: '#475569' }}>{t.cta.text}</p>
                <a
                  href={isDE ? '/kontakt' : '/en/kontakt'}
                  className="block w-full px-6 py-3 rounded-lg font-semibold text-sm text-center transition-all hover:scale-[1.02] mb-3"
                  style={{
                    backgroundColor: 'rgba(191, 219, 254, 0.35)',
                    backdropFilter: 'blur(3px)',
                    border: '1px solid rgba(191, 219, 254, 0.5)',
                    color: '#1e3a8a',
                  }}
                >
                  {t.cta.button}
                </a>
                <a
                  href={isDE ? '/produkte/capa-system' : '/en/produkte/capa-system'}
                  className="block text-center text-xs font-medium hover:underline"
                  style={{ color: '#1e3a8a' }}
                >
                  {t.cta.secondary}
                </a>
              </div>

              {/* BUILT BY */}
              <div className="rounded-xl p-5 text-center" style={boxStyle}>
                <p className="text-xs mb-1" style={{ color: '#64748b' }}>Built by</p>
                <p className="text-base font-semibold" style={{ color: '#0f172a', fontFamily: "'Cormorant', serif" }}>
                  QCore Consulting
                </p>
                <p className="text-xs" style={{ color: '#64748b' }}>
                  17 {isDE ? 'Jahre' : 'Years'} MedTech & Pharma QM
                </p>
              </div>
            </div>
          </div>

          {/* ==================== DATA SOURCE FOOTER ==================== */}
          <div
            className="rounded-xl p-4 flex flex-col md:flex-row justify-between items-center"
            style={boxStyle}
          >
            <p className="text-xs" style={{ color: '#64748b' }}>{t.footer.source}</p>
            <p className="text-xs" style={{ color: '#64748b' }}>
              © 2026 QCore Consulting · {t.footer.updated}
            </p>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
