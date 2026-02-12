import Head from 'next/head';
import { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer,
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip, Legend, LineChart, Line,
} from 'recharts';
import {
  categories, calculateResults, maturityLevels, radarLabels, ui, getTotalQuestionCount,
  assessmentProfiles,
} from '../data/readiness-check';


// ─── Constants ───────────────────────────────────────────────────────────
const LEVEL_COLORS = ['', '#DC3545', '#F59E0B', '#84CC16', '#22C55E'];
const RISK_COLORS = { critical: '#DC3545', high: '#F59E0B', medium: '#84CC16', low: '#94a3b8' };
const LS_KEY = 'qcore-readiness-v2';

// ─── Product Mapping (Category → QCore Product) ─────────────────────────
const PRODUCT_MAP = {
  'capa': {
    de: { label: 'CAPA System Bundle', desc: 'Fertiges CAPA-System mit SOPs, Formularen und Wirksamkeitsnachweisen.', price: '€129' },
    en: { label: 'CAPA System Bundle', desc: 'Complete CAPA system with SOPs, forms and effectiveness records.', price: '€129' },
    href: 'https://qcoreconsulting.gumroad.com/l/capa-system',
  },
  'document-control': {
    de: { label: 'NC Management Kit', desc: 'Vorlagen für Dokumentenlenkung, Änderungsmanagement und Aufzeichnungen.', price: '€99' },
    en: { label: 'NC Management Kit', desc: 'Templates for document control, change management and records.', price: '€99' },
    href: 'https://qcoreconsulting.gumroad.com/l/nc-management',
  },
  'audit-mgmt-review': {
    de: { label: 'Audit Prep Kit', desc: 'Checklisten, Auditprogramm-Vorlagen und Management-Review-Templates.', price: '€79' },
    en: { label: 'Audit Prep Kit', desc: 'Checklists, audit program templates and management review templates.', price: '€79' },
    href: 'https://qcoreconsulting.gumroad.com/l/audit-prep',
  },
};

// ─── Feedback Endpoint ──────────────────────────────────────────────────
const FEEDBACK_ENDPOINT = 'https://formspree.io/f/DEINE_FORM_ID'; // TODO: Formspree-ID eintragen

function interpolate(str, vars) {
  return Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, v), str);
}


// ─── LocalStorage Helpers ────────────────────────────────────────────────
function loadState() {
  if (typeof window === 'undefined') return null;
  try { return JSON.parse(localStorage.getItem(LS_KEY)); } catch { return null; }
}

function saveState(state) {
  if (typeof window === 'undefined') return;
  try { localStorage.setItem(LS_KEY, JSON.stringify(state)); } catch {}
}


// ─── Score Ring ──────────────────────────────────────────────────────────
function ScoreRing({ percent, maturityKey, locale, size = 130 }) {
  const r = (size / 2) - 8;
  const circ = 2 * Math.PI * r;

  if (percent === null) return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(30,58,138,0.08)" strokeWidth="6" />
      </svg>
      <span className="absolute text-base" style={{ color: '#94a3b8' }}>—</span>
    </div>
  );

  const ml = maturityLevels[maturityKey];
  const offset = circ - (percent / 100) * circ;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg className="w-full h-full -rotate-90" viewBox={`0 0 ${size} ${size}`}>
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(30,58,138,0.08)" strokeWidth="6" />
        <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={ml.color} strokeWidth="6"
          strokeLinecap="round" strokeDasharray={circ} strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.6s ease-out, stroke 0.3s' }} />
      </svg>
      <div className="absolute flex flex-col items-center">
        <span className="text-3xl font-bold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>{percent}%</span>
        <span className="text-xs font-semibold" style={{ color: ml.color }}>{ml[locale]}</span>
      </div>
    </div>
  );
}


// ─── Answer Card ─────────────────────────────────────────────────────────
function AnswerCard({ option, isSelected, onSelect, levelLabel }) {
  return (
    <button
      onClick={() => onSelect(option.level)}
      className="w-full text-left px-4 py-3 rounded-[12px] transition-all duration-150 flex items-start gap-3"
      style={{
        backgroundColor: isSelected ? 'rgba(30,58,138,0.10)' : 'transparent',
        border: isSelected ? '2px solid rgba(30,58,138,0.28)' : '1px solid rgba(30,58,138,0.06)',
        boxShadow: isSelected ? '0 2px 8px rgba(30,58,138,0.08)' : 'none',
      }}
      onMouseEnter={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = 'rgba(30,58,138,0.04)'; }}
      onMouseLeave={(e) => { if (!isSelected) e.currentTarget.style.backgroundColor = isSelected ? 'rgba(30,58,138,0.10)' : 'transparent'; }}
    >
      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
        style={{
          backgroundColor: isSelected ? LEVEL_COLORS[option.level] : 'rgba(30,58,138,0.07)',
          color: isSelected ? '#fff' : '#64748b',
          transition: 'all 0.15s',
        }}>
        {option.level}
      </div>
      <div className="flex-1 min-w-0">
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: LEVEL_COLORS[option.level] }}>
          {levelLabel}
        </span>
        <p className="text-sm leading-relaxed mt-0.5" style={{ color: isSelected ? '#0f172a' : '#475569' }}>
          {option.text}
        </p>
      </div>
      {isSelected && (
        <span className="text-xs mt-1 flex-shrink-0" style={{ color: '#1e3a8a' }}>✓</span>
      )}
    </button>
  );
}


// ─── (PremiumLock removed – features now unlocked) ──────────────────


// ─── QMSR Badge ──────────────────────────────────────────────────────────
function QmsrBadge({ question, locale }) {
  const [open, setOpen] = useState(false);
  if (!question.qmsrDelta) return null;
  return (
    <div className="relative inline-block">
      <button onClick={() => setOpen(!open)}
        className="inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded"
        style={{ backgroundColor: 'rgba(245,158,11,0.12)', color: '#D97706', border: '1px solid rgba(245,158,11,0.25)' }}>
        ⚠️ QMSR
      </button>
      {open && (
        <div className="absolute z-50 left-0 top-full mt-1 p-3 rounded-lg shadow-lg text-xs leading-relaxed"
          style={{ width: 320, backgroundColor: '#fffbeb', border: '1px solid rgba(245,158,11,0.3)', color: '#92400e' }}>
          <div className="font-bold mb-1">{question.qmsrRef}</div>
          <div>{question.qmsrDelta[locale]}</div>
          <button onClick={() => setOpen(false)} className="mt-2 text-xs underline" style={{ color: '#D97706' }}>
            {locale === 'de' ? 'Schließen' : 'Close'}
          </button>
        </div>
      )}
    </div>
  );
}


// ─── Risk Badge ──────────────────────────────────────────────────────────
function RiskBadge({ level, locale }) {
  const t = ui[locale];
  const labels = { critical: t.riskCritical, high: t.riskHigh, medium: t.riskMedium, low: t.riskLow };
  return (
    <span className="text-xs font-semibold px-1.5 py-0.5 rounded"
      style={{ backgroundColor: RISK_COLORS[level] + '18', color: RISK_COLORS[level] }}>
      {labels[level]}
    </span>
  );
}


// ─── Evidence Collapsible ────────────────────────────────────────────
function EvidenceCollapsible({ question, locale, t }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-3 flex-shrink-0 rounded-[12px]" style={{ backgroundColor: 'rgba(30,58,138,0.03)' }}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-2 px-3 py-2 text-left transition-colors"
        style={{ color: '#64748b' }}
        onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(30,58,138,0.05)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
        <span className="text-xs transition-transform" style={{
          display: 'inline-block', transform: open ? 'rotate(90deg)' : 'rotate(0deg)',
          transition: 'transform 0.15s ease',
        }}>▶</span>
        <span className="text-[10px] font-bold uppercase tracking-wider">
          {locale === 'de' ? 'Erwartete Nachweise' : 'Expected Evidence'} ({question.expectedEvidence.length})
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.15 }}
            style={{ overflow: 'hidden' }}>
            <div className="px-3 pb-2.5 space-y-1">
              {question.expectedEvidence.map((ev, i) => (
                <div key={i} className="flex items-start gap-2 text-xs">
                  <span className="font-semibold flex-shrink-0 px-1 rounded" style={{
                    backgroundColor: ev.type === 'procedure' ? 'rgba(59,130,246,0.1)' : ev.type === 'record' ? 'rgba(139,92,246,0.1)' : 'rgba(245,158,11,0.1)',
                    color: ev.type === 'procedure' ? '#3B82F6' : ev.type === 'record' ? '#8B5CF6' : '#F59E0B',
                  }}>
                    {ev.type === 'procedure' ? t.evidenceProcedure : ev.type === 'record' ? t.evidenceRecord : t.evidenceEffectiveness}
                  </span>
                  <span style={{ color: '#475569' }}>{ev[locale]}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}




// ─── FAQ Accordion Item ─────────────────────────────────────────────
function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: '1px solid rgba(30,58,138,0.06)' }}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 text-left"
        style={{ cursor: 'pointer' }}>
        <span className="text-sm font-medium" style={{ color: '#0f172a' }}>{question}</span>
        <span className="flex-shrink-0 ml-3 text-base" style={{ color: '#1e3a8a', transform: open ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>+</span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} style={{ overflow: 'hidden' }}>
            <p className="text-sm leading-relaxed pb-3" style={{ color: '#64748b' }}>{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Profile Tooltip ────────────────────────────────────────────────
function ProfileTooltip({ text, children }) {
  const [show, setShow] = useState(false);
  const timerRef = useRef(null);
  return (
    <div className="relative"
      onMouseEnter={() => { timerRef.current = setTimeout(() => setShow(true), 200); }}
      onMouseLeave={() => { clearTimeout(timerRef.current); setShow(false); }}>
      {children}
      {show && (
        <div className="absolute left-1/2 top-full mt-2 z-50"
          style={{ transform: 'translateX(-50%)', whiteSpace: 'nowrap', pointerEvents: 'none' }}>
          <div className="px-3 py-2 rounded-lg text-[11px] leading-snug"
            style={{ backgroundColor: '#1a2332', color: '#fff', boxShadow: '0 4px 16px rgba(0,0,0,0.2)', maxWidth: 260, whiteSpace: 'normal' }}>
            {text}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Intro Landing — Two-Column Hero Redesign ───────────────────────
function IntroLanding({ locale, onStart, onStartWithProfile }) {
  const t = ui[locale];
  const [selectedProfile, setSelectedProfile] = useState('iso13485');

  const profileTooltips = locale === 'de'
    ? { iso13485: 'Standard-Assessment für alle Medizintechnik-Hersteller', fdaQmsr: 'Für Hersteller mit US-Export — prüft die neuen QMSR-Anforderungen (seit 02/2026)', euMdr: 'Schwerpunkt auf MDR-Übergangsfristen, PMS und klinische Bewertung' }
    : { iso13485: 'Standard assessment for all medical device manufacturers', fdaQmsr: 'For US-exporting manufacturers — checks new QMSR requirements (since 02/2026)', euMdr: 'Focus on MDR transition deadlines, PMS and clinical evaluation' };

  const profiles = [
    { key: 'iso13485', label: 'ISO 13485', isNew: false },
    { key: 'fdaQmsr', label: 'FDA QMSR', isNew: true },
    { key: 'euMdr', label: 'EU MDR', isNew: false },
  ];

  const handleStart = () => {
    if (onStartWithProfile) onStartWithProfile(selectedProfile);
    else onStart();
  };

  // Radar chart data for preview (static, decorative)
  const radarPoints = [
    { angle: 0, r: 0.78 },     // Dokumente
    { angle: 40, r: 0.42 },    // CAPA
    { angle: 80, r: 0.85 },    // Risiko
    { angle: 120, r: 0.55 },   // Design
    { angle: 160, r: 0.68 },   // Lieferanten
    { angle: 200, r: 0.38 },   // Audit
    { angle: 240, r: 0.72 },   // Regulatorik
    { angle: 280, r: 0.60 },   // Schulung
    { angle: 320, r: 0.45 },   // PMS
  ];

  const radarLabelsArr = locale === 'de'
    ? ['Dokumente', 'CAPA', 'Risiko', 'Design', 'Lieferanten', 'Audit', 'Regulatorik', 'Schulung', 'PMS']
    : ['Documents', 'CAPA', 'Risk', 'Design', 'Suppliers', 'Audit', 'Regulatory', 'Training', 'PMS'];

  // Convert polar to SVG coordinates (center at 80,80, max radius 60)
  const cx = 80, cy = 80, maxR = 60;
  const toXY = (angleDeg, rNorm) => {
    const a = (angleDeg - 90) * Math.PI / 180;
    return { x: cx + maxR * rNorm * Math.cos(a), y: cy + maxR * rNorm * Math.sin(a) };
  };
  const radarPath = radarPoints.map((p, i) => {
    const { x, y } = toXY(p.angle, p.r);
    return `${i === 0 ? 'M' : 'L'}${x.toFixed(1)},${y.toFixed(1)}`;
  }).join(' ') + ' Z';

  const riskLabel = { critical: 'Critical', high: 'High', medium: 'Medium' };

  return (
    <div className="overflow-y-auto" style={{ height: '100%' }}>

      {/* ═══ HERO — Two Column ═══ */}
      <div className="flex items-center gap-10" style={{ padding: '36px 48px 28px', minHeight: 0 }}>

        {/* LEFT COLUMN (55%) — H1 + Subtext + Profile + CTA + Trust */}
        <div style={{ flex: '0 0 55%', maxWidth: '55%' }}>
          <h1 className="font-semibold leading-tight mb-3"
            style={{ fontFamily: "'Cormorant', serif", color: '#0f172a', fontSize: 38, lineHeight: 1.12 }}>
            {t.introHeadline}
          </h1>
          <p className="leading-relaxed mb-5" style={{ color: '#475569', fontSize: 14, lineHeight: 1.6 }}>
            {t.heroSubline}
          </p>

          {/* Profile Selector with Tooltips */}
          <div className="mb-5">
            <div className="text-xs font-semibold mb-2" style={{ color: '#64748b' }}>{t.heroProfileLabel}</div>
            <div className="flex gap-2">
              {profiles.map(p => (
                <ProfileTooltip key={p.key} text={profileTooltips[p.key]}>
                  <button onClick={() => setSelectedProfile(p.key)}
                    className="flex items-center gap-1.5 px-4 py-2 rounded-[10px] text-xs font-semibold transition-all duration-150"
                    style={{
                      backgroundColor: selectedProfile === p.key ? '#1e3a8a' : 'rgba(255,255,255,0.7)',
                      color: selectedProfile === p.key ? '#fff' : '#475569',
                      border: selectedProfile === p.key ? '1px solid #1e3a8a' : '1px solid rgba(30,58,138,0.12)',
                      cursor: 'pointer',
                    }}>
                    {p.label}
                    {p.isNew && (
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-bold"
                        style={{ backgroundColor: selectedProfile === p.key ? 'rgba(255,255,255,0.25)' : '#F59E0B', color: '#fff' }}>
                        {t.heroProfileNew}
                      </span>
                    )}
                  </button>
                </ProfileTooltip>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button onClick={handleStart}
            className="text-sm font-bold transition-all duration-200 hover:scale-[1.03] hover:shadow-xl"
            style={{
              backgroundColor: '#1e3a8a', color: '#fff',
              padding: '14px 36px', borderRadius: 50,
              boxShadow: '0 4px 24px rgba(30,58,138,0.3)',
              cursor: 'pointer', border: 'none',
            }}>
            {t.introCta} →
          </button>

          {/* Trust Signals — SINGLE place for privacy/cost/duration info */}
          <div className="flex items-center gap-3 mt-4 flex-wrap">
            {t.heroTrust.map((item, i) => (
              <span key={i} className="flex items-center gap-1 text-xs" style={{ color: '#64748b' }}>
                <span style={{ color: '#22C55E' }}>✓</span> {item}
              </span>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN (45%) — Ergebnis-Preview (STRAIGHT, no rotation) */}
        <div style={{ flex: '0 0 42%', maxWidth: '42%' }}>
          <div className="rounded-2xl overflow-hidden"
            style={{
              background: 'rgba(255,255,255,0.7)',
              border: '1px solid rgba(30,58,138,0.08)',
              boxShadow: '0 12px 40px rgba(30,58,138,0.08)',
              position: 'relative',
            }}>

            {/* Header bar */}
            <div className="flex items-center gap-2 px-4 py-2" style={{ borderBottom: '1px solid rgba(30,58,138,0.06)', background: 'rgba(248,250,252,0.9)' }}>
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#f87171' }} />
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#fbbf24' }} />
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: '#34d399' }} />
              </div>
              <span className="text-[10px] font-medium ml-2" style={{ color: '#94a3b8' }}>
                {locale === 'de' ? 'Readiness Assessment — Ergebnis' : 'Readiness Assessment — Results'}
              </span>
            </div>

            {/* Score Ring + Radar side by side */}
            <div className="flex items-center gap-4 px-5 pt-4 pb-2">
              {/* Score Ring */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="relative flex items-center justify-center" style={{ width: 90, height: 90 }}>
                  <svg className="w-full h-full" viewBox="0 0 100 100" style={{ transform: 'rotate(-90deg)' }}>
                    <circle cx="50" cy="50" r="40" fill="none" stroke="rgba(30,58,138,0.06)" strokeWidth="6" />
                    <circle cx="50" cy="50" r="40" fill="none" stroke="#F59E0B" strokeWidth="6" strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 40} strokeDashoffset={2 * Math.PI * 40 * (1 - 0.62)} />
                  </svg>
                  <div className="absolute flex flex-col items-center">
                    <span className="text-xl font-bold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>62%</span>
                    <span className="text-[8px] font-semibold" style={{ color: '#F59E0B' }}>{t.previewScore}</span>
                  </div>
                </div>
              </div>

              {/* Mini Radar Chart (pure SVG) */}
              <div className="flex-1" style={{ minWidth: 0 }}>
                <svg viewBox="0 0 160 160" style={{ width: '100%', height: 'auto', maxHeight: 130 }}>
                  {[0.33, 0.66, 1].map((r, i) => (
                    <circle key={i} cx={cx} cy={cy} r={maxR * r} fill="none" stroke="rgba(30,58,138,0.06)" strokeWidth="0.5" />
                  ))}
                  {radarPoints.map((p, i) => {
                    const { x, y } = toXY(p.angle, 1);
                    return <line key={i} x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(30,58,138,0.06)" strokeWidth="0.5" />;
                  })}
                  <path d={radarPath} fill="rgba(30,58,138,0.08)" stroke="#1e3a8a" strokeWidth="1.5" />
                  {radarPoints.map((p, i) => {
                    const { x, y } = toXY(p.angle, p.r);
                    return <circle key={i} cx={x} cy={y} r="2" fill="#1e3a8a" />;
                  })}
                  {radarPoints.map((p, i) => {
                    const { x, y } = toXY(p.angle, 1.22);
                    return <text key={i} x={x} y={y} textAnchor="middle" dominantBaseline="middle"
                      style={{ fontSize: 6.5, fill: '#64748b', fontFamily: 'Inter, sans-serif' }}>{radarLabelsArr[i]}</text>;
                  })}
                </svg>
              </div>
            </div>

            {/* Gap Items */}
            <div className="px-5 pb-2">
              <div className="text-[9px] font-bold uppercase tracking-wider mb-1.5" style={{ color: '#64748b' }}>{t.previewGapLabel}</div>
              {t.previewGaps.map((g, i) => (
                <div key={i} className="flex items-center gap-2 py-1" style={{ borderBottom: i < 2 ? '1px solid rgba(30,58,138,0.04)' : 'none' }}>
                  <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: RISK_COLORS[g.risk] }} />
                  <span className="text-xs flex-1" style={{ color: '#334155' }}>{g.cat}</span>
                  <span className="text-[10px] font-bold" style={{ color: '#1e3a8a' }}>{g.clause}</span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded font-semibold"
                    style={{ backgroundColor: RISK_COLORS[g.risk] + '18', color: RISK_COLORS[g.risk] }}>
                    {riskLabel[g.risk]}
                  </span>
                </div>
              ))}
            </div>

            {/* Bottom fade gradient */}
            <div style={{ height: 32, background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.95))' }} />
          </div>
        </div>
      </div>


      {/* ═══ BELOW THE FOLD — Compact info sections ═══ */}

      {/* What You Get — 3 Cards, one row */}
      <div style={{ padding: '24px 48px 20px' }}>
        <h2 className="text-[10px] font-bold uppercase tracking-widest mb-4" style={{ color: '#1e3a8a', letterSpacing: 2 }}>
          {t.whatYouGetTitle}
        </h2>
        <div className="flex gap-3">
          {[
            { icon: '🎯', title: t.whatYouGet1Title, desc: t.whatYouGet1Desc },
            { icon: '✅', title: t.whatYouGet2Title, desc: t.whatYouGet2Desc },
            { icon: '📄', title: t.whatYouGet3Title, desc: t.whatYouGet3Desc },
          ].map((item, i) => (
            <div key={i} className="flex-1 rounded-xl px-4 py-3"
              style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid rgba(30,58,138,0.06)' }}>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">{item.icon}</span>
                <span className="text-xs font-bold" style={{ color: '#0f172a' }}>{item.title}</span>
              </div>
              <p className="text-[11px] leading-relaxed" style={{ color: '#64748b' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Category Pills */}
      <div style={{ padding: '12px 48px 20px' }}>
        <div className="flex items-center gap-3 mb-3">
          <h2 className="text-[10px] font-bold uppercase tracking-widest" style={{ color: '#1e3a8a', letterSpacing: 2 }}>
            {t.categoriesTitle}
          </h2>
          <span className="text-[10px]" style={{ color: '#94a3b8' }}>· {t.categoriesSubtitle}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <span key={cat.key} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs"
              style={{ backgroundColor: 'rgba(255,255,255,0.6)', border: '1px solid rgba(30,58,138,0.08)', color: '#334155' }}>
              <span>{cat.icon}</span>
              <span className="font-medium">{cat.label[locale]}</span>
              <span className="font-bold" style={{ color: '#1e3a8a', fontSize: 10 }}>{cat.clauseRef.replace('ISO 13485 ', '')}</span>
            </span>
          ))}
        </div>
      </div>

      {/* FAQ — 2 items, side by side */}
      <div style={{ padding: '16px 48px 16px' }}>
        <h2 className="text-[10px] font-bold uppercase tracking-widest mb-3" style={{ color: '#1e3a8a', letterSpacing: 2 }}>
          {t.faqTitle}
        </h2>
        <div className="grid grid-cols-2 gap-x-6 rounded-xl px-5"
          style={{ backgroundColor: 'rgba(255,255,255,0.5)', border: '1px solid rgba(30,58,138,0.06)' }}>
          {t.faqItems.map((item, i) => (
            <FaqItem key={i} question={item.q} answer={item.a} />
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-center gap-3 text-[10px]" style={{ padding: '12px 48px 20px', color: '#94a3b8' }}>
        <span>&copy; QCore Consulting</span>
        <span>·</span>
        <a href="/impressum" style={{ color: '#94a3b8', textDecoration: 'none' }}>Impressum</a>
        <span>·</span>
        <a href="/datenschutz" style={{ color: '#94a3b8', textDecoration: 'none' }}>Datenschutz</a>
      </div>

    </div>
  );
}


// ─── Gap Backlog – Product Hint (dezent, kontextuell) ────────────────
function ProductHint({ catKey, locale }) {
  const product = PRODUCT_MAP[catKey];
  if (!product) return null;
  const p = product[locale];
  return (
    <div className="flex items-start gap-2.5 mx-2 mb-1.5"
      style={{ padding: '10px 14px', backgroundColor: '#f7f9fc', borderLeft: '2px solid #1e3a8a', borderRadius: '0 8px 8px 0' }}>
      <span className="flex-shrink-0 text-sm mt-0.5">📋</span>
      <div className="min-w-0">
        <span style={{ fontSize: 13, color: '#555', lineHeight: 1.5 }}>
          {p.desc}
        </span>
        <br />
        <a href={product.href} target="_blank" rel="noopener noreferrer"
          style={{ fontSize: 13, color: '#1e3a8a', textDecoration: 'none', fontWeight: 600 }}
          onMouseEnter={(e) => { e.currentTarget.style.textDecoration = 'underline'; }}
          onMouseLeave={(e) => { e.currentTarget.style.textDecoration = 'none'; }}>
          {p.label} → {p.price}
        </a>
      </div>
    </div>
  );
}


// ─── Feedback Block (after PDF export) ──────────────────────────────────
function FeedbackBlock({ locale, onClose }) {
  const t = ui[locale];
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim() && !email.trim()) { onClose?.(); return; }
    setSending(true);
    try {
      await fetch(FEEDBACK_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({ email: email || '(not provided)', message, _subject: 'Readiness Check Feedback' }),
      });
    } catch { /* silent fail */ }
    setSending(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mx-4 mb-3 px-4 py-3 rounded-[10px] text-center"
        style={{ backgroundColor: 'rgba(34,197,94,0.06)', border: '1px solid rgba(34,197,94,0.15)' }}>
        <span className="text-sm" style={{ color: '#16a34a' }}>{t.feedbackThanks}</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mx-4 mb-3 px-4 py-3 rounded-[10px]"
      style={{ backgroundColor: 'rgba(30,58,138,0.03)', border: '1px solid rgba(30,58,138,0.08)' }}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs font-semibold" style={{ color: '#1e3a8a' }}>{t.feedbackTitle}</span>
        <button onClick={onClose} className="text-xs" style={{ color: '#94a3b8', lineHeight: 1 }}
          aria-label="Close">✕</button>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={t.feedbackEmailPlaceholder}
          className="w-full px-3 py-1.5 rounded-lg text-xs"
          style={{ border: '1px solid rgba(30,58,138,0.1)', backgroundColor: '#fff', color: '#0f172a', outline: 'none' }}
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.feedbackMessagePlaceholder}
          rows={2}
          className="w-full px-3 py-1.5 rounded-lg text-xs resize-none"
          style={{ border: '1px solid rgba(30,58,138,0.1)', backgroundColor: '#fff', color: '#0f172a', outline: 'none' }}
        />
        <button
          type="submit"
          disabled={sending}
          className="self-end px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-150"
          style={{
            backgroundColor: 'rgba(30,58,138,0.08)',
            color: '#1e3a8a',
            border: '1px solid rgba(30,58,138,0.12)',
          }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(30,58,138,0.14)'; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(30,58,138,0.08)'; }}>
          {sending ? '...' : t.feedbackSend}
        </button>
      </form>
    </motion.div>
  );
}


function GapBacklog({ answers, notes, categories, locale, profile, onJumpToQuestion }) {
  const t = ui[locale];
  const activeProfile = assessmentProfiles[profile] || assessmentProfiles.iso13485;
  const [expandedId, setExpandedId] = useState(null);

  // Compute category scores for CTA threshold
  const catScores = useMemo(() => {
    const scores = {};
    categories.forEach(cat => {
      const answered = cat.questions.filter(q => answers[q.id] !== undefined);
      if (answered.length > 0) {
        const avg = answered.reduce((s, q) => s + answers[q.id], 0) / answered.length;
        scores[cat.key] = Math.round(((avg - 1) / 3) * 100);
      }
    });
    return scores;
  }, [answers, categories]);

  const gaps = useMemo(() => {
    const list = [];
    categories.forEach(cat => {
      cat.questions.forEach(q => {
        const score = answers[q.id];
        if (score !== undefined && score <= 2) {
          const wm = activeProfile.weightMultipliers[q.id] || 1;
          list.push({
            catKey: cat.key,
            catIcon: cat.icon,
            catLabel: cat.label[locale],
            questionId: q.id,
            questionFull: q.question[locale],
            isoClause: q.isoClause,
            clauseTitle: q.clauseTitle[locale],
            expectedEvidence: q.expectedEvidence,
            auditRiskLevel: q.auditRiskLevel,
            score,
            weight: q.weight * wm,
            note: notes[q.id] || '',
            qmsrRef: q.qmsrRef,
            qmsrDelta: activeProfile.showQmsr ? q.qmsrDelta : null,
          });
        }
      });
    });
    const riskOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    list.sort((a, b) => {
      const rd = riskOrder[a.auditRiskLevel] - riskOrder[b.auditRiskLevel];
      if (rd !== 0) return rd;
      return b.weight - a.weight;
    });
    return list;
  }, [answers, notes, categories, locale, activeProfile]);

  const answeredCount = Object.keys(answers).length;

  if (answeredCount === 0) {
    return <div className="flex items-center justify-center h-full text-sm" style={{ color: '#94a3b8' }}>{t.gapNoData}</div>;
  }
  if (gaps.length === 0) {
    return <div className="flex items-center justify-center h-full text-sm" style={{ color: '#84CC16' }}>✓ {t.gapEmpty}</div>;
  }

  return (
    <div className="overflow-y-auto" style={{ maxHeight: '100%' }}>
      {/* Sticky header */}
      <div className="flex items-center gap-2 py-1.5 px-2 text-[10px] font-bold uppercase tracking-wider sticky top-0 z-10"
        style={{ color: '#64748b', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)', borderBottom: '1px solid rgba(30,58,138,0.06)' }}>
        <span style={{ width: 8 }} />
        <span className="flex-1">{t.gapCategory}</span>
        <span style={{ width: 70 }}>{t.gapClause}</span>
        <span style={{ width: 32, textAlign: 'center' }}>{t.gapScore}</span>
      </div>

      {/* Rows — track which categories have shown product hints (max 3) */}
      {(() => {
        const shownHints = new Set();
        return gaps.map((gap) => {
          const isExpanded = expandedId === gap.questionId;
          // Show product hint below this row if: category has product, score ≤67%, first occurrence, max 3 total
          const showHint = PRODUCT_MAP[gap.catKey] && catScores[gap.catKey] !== undefined && catScores[gap.catKey] <= 67 && !shownHints.has(gap.catKey) && shownHints.size < 3;
          if (showHint) shownHints.add(gap.catKey);

          return (
            <div key={gap.questionId}>
              {/* Compact row */}
              <button
                onClick={() => setExpandedId(isExpanded ? null : gap.questionId)}
                className="w-full flex items-center gap-2 py-2 px-2 text-left transition-colors"
                style={{ borderBottom: '1px solid rgba(30,58,138,0.04)' }}
                onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(30,58,138,0.03)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}>
                {/* Risk dot */}
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: RISK_COLORS[gap.auditRiskLevel] }} />
                {/* Category + icon */}
                <span className="flex-1 min-w-0 flex items-center gap-1.5">
                  <span className="text-xs">{gap.catIcon}</span>
                  <span className="text-xs font-medium truncate" style={{ color: '#334155' }}>{gap.catLabel}</span>
                </span>
                {/* ISO clause */}
                <span className="text-xs font-bold flex-shrink-0" style={{ width: 70, color: '#1e3a8a' }}>
                  Kl. {gap.isoClause}
                </span>
                {/* Score pill */}
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[10px] font-bold flex-shrink-0"
                  style={{ backgroundColor: LEVEL_COLORS[gap.score] + '20', color: LEVEL_COLORS[gap.score] }}>
                  {gap.score}
                </span>
              </button>

              {/* Product hint — below gap row, only for mapped categories ≤67% */}
              {showHint && <ProductHint catKey={gap.catKey} locale={locale} />}

              {/* Expanded detail */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    style={{ overflow: 'hidden' }}>
                    <div className="px-4 py-3 space-y-2" style={{ backgroundColor: 'rgba(30,58,138,0.02)', borderBottom: '1px solid rgba(30,58,138,0.06)' }}>
                      {/* Full question text */}
                      <p className="text-xs leading-relaxed" style={{ color: '#334155' }}>{gap.questionFull}</p>

                      {/* Clause title */}
                      <div className="text-[10px]" style={{ color: '#64748b' }}>
                        {gap.isoClause} — {gap.clauseTitle}
                      </div>

                      {/* Evidence details */}
                      <div className="space-y-1">
                        {gap.expectedEvidence.map((ev, i) => (
                          <div key={i} className="flex items-start gap-2 text-xs">
                            <span className="font-semibold flex-shrink-0 px-1 rounded" style={{
                              backgroundColor: ev.type === 'procedure' ? 'rgba(59,130,246,0.1)' : ev.type === 'record' ? 'rgba(139,92,246,0.1)' : 'rgba(245,158,11,0.1)',
                              color: ev.type === 'procedure' ? '#3B82F6' : ev.type === 'record' ? '#8B5CF6' : '#F59E0B',
                            }}>
                              {ev.type === 'procedure' ? t.evidenceProcedure : ev.type === 'record' ? t.evidenceRecord : t.evidenceEffectiveness}
                            </span>
                            <span style={{ color: '#475569' }}>{ev[locale]}</span>
                          </div>
                        ))}
                      </div>

                      {/* Note */}
                      {gap.note && (
                        <div className="text-xs italic" style={{ color: '#64748b' }}>📝 {gap.note}</div>
                      )}

                      {/* QMSR Delta */}
                      {gap.qmsrDelta && (
                        <div className="text-xs px-2 py-1.5 rounded" style={{ backgroundColor: 'rgba(245,158,11,0.08)', color: '#92400e' }}>
                          <span className="font-bold">QMSR: </span>{gap.qmsrRef} — {gap.qmsrDelta[locale]}
                        </div>
                      )}

                      {/* Jump link */}
                      <button onClick={() => onJumpToQuestion(gap.catKey, gap.questionId)}
                        className="text-xs font-semibold transition-colors hover:underline"
                        style={{ color: '#1e3a8a' }}>
                        → {locale === 'de' ? 'Zur Frage' : 'Go to question'}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        });
      })()}
    </div>
  );
}


// ─── Trend Chart ─────────────────────────────────────────────────────────
function TrendView({ history, locale }) {
  const t = ui[locale];

  if (!history || history.length === 0) {
    return <div className="flex items-center justify-center h-full text-sm" style={{ color: '#94a3b8' }}>{t.trendEmpty}</div>;
  }

  const data = history.map((entry) => {
    const row = { date: new Date(entry.timestamp).toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', { month: 'short', day: 'numeric' }) };
    row[t.trendOverall] = entry.overallScore;
    return row;
  });

  const catColors = ['#1e3a8a', '#DC3545', '#F59E0B', '#84CC16', '#22C55E', '#8B5CF6', '#3B82F6', '#EC4899', '#14B8A6'];

  // Category-level trend data
  const catData = history.map((entry) => {
    const row = { date: new Date(entry.timestamp).toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US', { month: 'short', day: 'numeric' }) };
    if (entry.categoryScores) {
      Object.entries(entry.categoryScores).forEach(([key, val]) => {
        const label = radarLabels[locale][key] || key;
        row[label] = val;
      });
    }
    return row;
  });

  return (
    <div className="h-full flex flex-col">
      <div className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: '#64748b' }}>
        {t.trendTitle}
      </div>
      <div className="flex-1" style={{ minHeight: 200 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={catData.length > 0 && Object.keys(catData[0]).length > 1 ? catData : data}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(30,58,138,0.08)" />
            <XAxis dataKey="date" tick={{ fill: '#64748b', fontSize: 10 }} />
            <YAxis domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} />
            <ReTooltip />
            {catData.length > 0 && Object.keys(catData[0]).length > 1
              ? Object.keys(catData[0]).filter(k => k !== 'date').map((key, i) => (
                  <Line key={key} type="monotone" dataKey={key} stroke={catColors[i % catColors.length]}
                    strokeWidth={1.5} dot={{ r: 3 }} />
                ))
              : <Line type="monotone" dataKey={t.trendOverall} stroke="#1e3a8a" strokeWidth={2} dot={{ r: 4 }} />
            }
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}


// ─── Action Plan ─────────────────────────────────────────────────────────
function ActionPlan({ answers, notes, categories, locale, profile, actionPlanData, onUpdatePlanData, onBack, onJumpToQuestion }) {
  const t = ui[locale];
  const activeProfile = assessmentProfiles[profile] || assessmentProfiles.iso13485;

  const gaps = useMemo(() => {
    const list = [];
    categories.forEach(cat => {
      cat.questions.forEach(q => {
        const score = answers[q.id];
        if (score !== undefined && score <= 2) {
          const wm = activeProfile.weightMultipliers[q.id] || 1;
          list.push({
            catKey: cat.key, catIcon: cat.icon, catLabel: cat.label[locale],
            questionId: q.id, questionFull: q.question[locale],
            isoClause: q.isoClause, clauseTitle: q.clauseTitle[locale],
            expectedEvidence: q.expectedEvidence,
            auditRiskLevel: q.auditRiskLevel,
            score, weight: q.weight * wm,
            note: notes[q.id] || '',
          });
        }
      });
    });
    const riskOrder = { critical: 0, high: 1, medium: 2, low: 3 };
    list.sort((a, b) => (riskOrder[a.auditRiskLevel] - riskOrder[b.auditRiskLevel]) || (b.weight - a.weight));
    return list;
  }, [answers, notes, categories, locale, activeProfile]);

  if (Object.keys(answers).length === 0) {
    return <div className="flex items-center justify-center h-full text-sm" style={{ color: '#94a3b8' }}>{t.actionPlanNoData}</div>;
  }
  if (gaps.length === 0) {
    return (
      <div className="space-y-3">
        <button onClick={onBack} className="text-xs font-semibold transition-colors duration-150 hover:underline" style={{ color: '#1e3a8a' }}>{t.backToResults}</button>
        <div className="flex items-center justify-center py-8 text-sm" style={{ color: '#84CC16' }}>✓ {t.actionPlanEmpty}</div>
      </div>
    );
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between sticky top-0 z-10 py-1.5" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)' }}>
        <button onClick={onBack} className="text-xs font-semibold transition-colors duration-150 hover:underline" style={{ color: '#1e3a8a' }}>{t.backToResults}</button>
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#64748b' }}>{t.actionPlanTitle} ({gaps.length})</span>
      </div>
      {gaps.map((gap, idx) => {
        const planEntry = actionPlanData[gap.questionId] || {};
        return (
          <div key={gap.questionId} className="rounded-[12px] p-3 space-y-2" style={{ backgroundColor: 'rgba(30,58,138,0.02)', border: '1px solid rgba(30,58,138,0.06)' }}>
            {/* Header */}
            <div className="flex items-center gap-2">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold flex-shrink-0" style={{ backgroundColor: 'rgba(30,58,138,0.08)', color: '#1e3a8a' }}>{idx + 1}</span>
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: RISK_COLORS[gap.auditRiskLevel] }} />
              <span className="text-xs font-medium flex-1 truncate" style={{ color: '#334155' }}>{gap.catIcon} {gap.catLabel}</span>
              <span className="text-[10px] font-bold" style={{ color: '#1e3a8a' }}>Kl. {gap.isoClause}</span>
            </div>
            {/* Question */}
            <p className="text-xs leading-relaxed" style={{ color: '#475569' }}>{gap.questionFull}</p>
            {/* Measure: derived from evidence */}
            <div className="text-[10px] font-bold uppercase tracking-wider" style={{ color: '#64748b' }}>{t.actionPlanMeasure}:</div>
            <div className="space-y-0.5">
              {gap.expectedEvidence.map((ev, i) => (
                <div key={i} className="flex items-start gap-1.5 text-xs">
                  <span className="flex-shrink-0" style={{
                    color: ev.type === 'procedure' ? '#3B82F6' : ev.type === 'record' ? '#8B5CF6' : '#F59E0B',
                  }}>
                    {ev.type === 'procedure' ? '📄' : ev.type === 'record' ? '📋' : '✅'}
                  </span>
                  <span style={{ color: '#334155' }}>{ev[locale]}</span>
                </div>
              ))}
            </div>
            {/* Note */}
            {gap.note && <div className="text-xs italic" style={{ color: '#64748b' }}>📝 {gap.note}</div>}
            {/* Editable fields: Responsible + Deadline */}
            <div className="flex gap-2">
              <input
                type="text"
                value={planEntry.responsible || ''}
                onChange={(e) => onUpdatePlanData(gap.questionId, 'responsible', e.target.value)}
                placeholder={t.actionPlanResponsible}
                className="flex-1 px-2 py-1.5 rounded-[8px] text-xs transition-all duration-150 focus:outline-none"
                style={{ backgroundColor: 'rgba(30,58,138,0.04)', border: '1px solid rgba(30,58,138,0.08)', color: '#334155' }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(30,58,138,0.25)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(30,58,138,0.08)'; }}
              />
              <input
                type="date"
                value={planEntry.deadline || ''}
                onChange={(e) => onUpdatePlanData(gap.questionId, 'deadline', e.target.value)}
                className="px-2 py-1.5 rounded-[8px] text-xs transition-all duration-150 focus:outline-none"
                style={{ backgroundColor: 'rgba(30,58,138,0.04)', border: '1px solid rgba(30,58,138,0.08)', color: '#334155', width: 130 }}
                onFocus={(e) => { e.target.style.borderColor = 'rgba(30,58,138,0.25)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(30,58,138,0.08)'; }}
              />
            </div>
            {/* Jump link */}
            <button onClick={() => onJumpToQuestion(gap.catKey, gap.questionId)}
              className="text-[10px] font-semibold transition-colors duration-150 hover:underline" style={{ color: '#1e3a8a' }}>
              → {locale === 'de' ? 'Zur Frage' : 'Go to question'}
            </button>
          </div>
        );
      })}
    </div>
  );
}


// ─── Recommendations ────────────────────────────────────────────────────
function Recommendations({ results, categories, answers, locale, profile, onBack, onJumpToCategory }) {
  const t = ui[locale];
  const activeProfile = assessmentProfiles[profile] || assessmentProfiles.iso13485;

  const recs = useMemo(() => {
    return results.categories
      .filter(cat => {
        const fc = categories.find(c => c.key === cat.key);
        return fc && cat.percentScore !== null && cat.percentScore < 75;
      })
      .sort((a, b) => (a.percentScore || 0) - (b.percentScore || 0))
      .map(cat => {
        const fc = categories.find(c => c.key === cat.key);
        // Collect all evidence items from questions in this category
        const evidenceItems = [];
        fc.questions.forEach(q => {
          const score = answers[q.id];
          if (score !== undefined && score <= 2) {
            q.expectedEvidence.forEach(ev => {
              evidenceItems.push({ ...ev, isoClause: q.isoClause, clauseTitle: q.clauseTitle[locale], auditRiskLevel: q.auditRiskLevel });
            });
          }
        });
        return {
          key: cat.key, icon: cat.icon, label: fc.label[locale],
          percentScore: cat.percentScore, maturityKey: cat.maturityKey,
          clauseRef: fc.clauseRef,
          evidenceItems,
        };
      });
  }, [results, categories, answers, locale, activeProfile]);

  if (Object.keys(answers).length === 0) {
    return <div className="flex items-center justify-center h-full text-sm" style={{ color: '#94a3b8' }}>{t.recsNoData}</div>;
  }
  if (recs.length === 0) {
    return (
      <div className="space-y-3">
        <button onClick={onBack} className="text-xs font-semibold transition-colors duration-150 hover:underline" style={{ color: '#1e3a8a' }}>{t.backToResults}</button>
        <div className="flex items-center justify-center py-8 text-sm" style={{ color: '#84CC16' }}>✓ {t.recsEmpty}</div>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between sticky top-0 z-10 py-1.5" style={{ background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(4px)' }}>
        <button onClick={onBack} className="text-xs font-semibold transition-colors duration-150 hover:underline" style={{ color: '#1e3a8a' }}>{t.backToResults}</button>
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: '#64748b' }}>{t.recsTitle}</span>
      </div>
      {recs.map((rec) => {
        const ml = rec.maturityKey ? maturityLevels[rec.maturityKey] : null;
        return (
          <div key={rec.key} className="rounded-[12px] p-3 space-y-2" style={{ backgroundColor: 'rgba(30,58,138,0.02)', border: '1px solid rgba(30,58,138,0.06)' }}>
            {/* Category header */}
            <div className="flex items-center gap-2">
              <span className="text-base">{rec.icon}</span>
              <span className="text-xs font-semibold flex-1" style={{ color: '#0f172a' }}>{rec.label}</span>
              {ml && (
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded" style={{ backgroundColor: ml.bg, color: ml.color }}>
                  {rec.percentScore}% — {ml[locale]}
                </span>
              )}
            </div>
            {/* ISO reference */}
            <div className="text-[10px]" style={{ color: '#64748b' }}>
              {t.recsIsoRef}: {rec.clauseRef}
            </div>
            {/* Evidence-based recommendations */}
            {rec.evidenceItems.length > 0 && (
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider mb-1" style={{ color: '#64748b' }}>{t.recsRecommended}:</div>
                <div className="space-y-1">
                  {rec.evidenceItems.map((ev, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <span className="font-semibold flex-shrink-0 px-1 rounded" style={{
                        backgroundColor: ev.type === 'procedure' ? 'rgba(59,130,246,0.1)' : ev.type === 'record' ? 'rgba(139,92,246,0.1)' : 'rgba(245,158,11,0.1)',
                        color: ev.type === 'procedure' ? '#3B82F6' : ev.type === 'record' ? '#8B5CF6' : '#F59E0B',
                      }}>
                        {ev.type === 'procedure' ? t.evidenceProcedure : ev.type === 'record' ? t.evidenceRecord : t.evidenceEffectiveness}
                      </span>
                      <span style={{ color: '#334155' }}>{ev[locale]}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {/* Product tip — if matching product exists */}
            {(() => {
              const product = PRODUCT_MAP[rec.key];
              if (product) {
                const p = product[locale];
                return (
                  <a href={product.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-start gap-2 px-3 py-2 rounded-[10px] transition-all duration-150 hover:scale-[1.005] no-underline"
                    style={{ backgroundColor: 'rgba(30,58,138,0.04)', border: '1px solid rgba(30,58,138,0.08)', textDecoration: 'none' }}>
                    <span className="flex-shrink-0 text-sm">📦</span>
                    <div className="min-w-0">
                      <span className="text-[10px] font-bold" style={{ color: '#1e3a8a' }}>
                        {locale === 'de' ? 'Tipp:' : 'Tip:'}
                      </span>
                      <span className="text-[10px] ml-1" style={{ color: '#475569' }}>
                        {locale === 'de'
                          ? `Mit unserem ${p.label} können Sie diese Lücke sofort schließen — fertige Vorlagen, sofort einsetzbar.`
                          : `Close this gap immediately with our ${p.label} — ready-to-use templates, deploy today.`
                        }
                      </span>
                      <span className="text-[10px] font-bold ml-1" style={{ color: '#1e3a8a' }}>
                        → {locale === 'de' ? 'Zum Bundle' : 'View Bundle'} ({p.price})
                      </span>
                    </div>
                  </a>
                );
              }
              return null;
            })()}

            {/* Jump to category */}
            <button onClick={() => onJumpToCategory(rec.key)}
              className="text-[10px] font-semibold transition-colors duration-150 hover:underline" style={{ color: '#1e3a8a' }}>
              → {locale === 'de' ? 'Zur Kategorie' : 'Go to category'}
            </button>
          </div>
        );
      })}
    </div>
  );
}


// ═══════════════════════════════════════════════════════════════════════════
// MAIN PAGE
// ═══════════════════════════════════════════════════════════════════════════
export default function ReadinessCheck() {
  const router = useRouter();
  const locale = router.locale || 'de';
  const t = ui[locale];

  // ── State ────────────────────────────────────────────────────────────
  const [answers, setAnswers] = useState({});
  const [notes, setNotes] = useState({});
  const [profile, setProfile] = useState('iso13485');
  const [showIntro, setShowIntro] = useState(true);
  const [activeCat, setActiveCat] = useState(null);
  const [activeQIdx, setActiveQIdx] = useState(0);
  const [dashTab, setDashTab] = useState('gaps');
  const [history, setHistory] = useState([]);
  const [savedFlash, setSavedFlash] = useState(false);
  const [pdfLoading, setPdfLoading] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [actionPlanData, setActionPlanData] = useState({});  // { 'dc-1': { responsible: '', deadline: '' }, ... }
  const initialLoadDone = useRef(false);

  // ── Load from LocalStorage on mount ──────────────────────────────────
  useEffect(() => {
    const saved = loadState();
    if (saved) {
      if (saved.answers) setAnswers(saved.answers);
      if (saved.notes) setNotes(saved.notes);
      if (saved.profile) setProfile(saved.profile);
      if (saved.history) setHistory(saved.history);
      if (saved.actionPlanData) setActionPlanData(saved.actionPlanData);
      if (saved.answers && Object.keys(saved.answers).length > 0) {
        setShowIntro(false);
      }
    }
    initialLoadDone.current = true;
  }, []);

  // ── Save to LocalStorage on change ───────────────────────────────────
  useEffect(() => {
    if (!initialLoadDone.current) return;
    saveState({ answers, notes, profile, history, actionPlanData });
  }, [answers, notes, profile, history, actionPlanData]);

  const totalQuestionCount = getTotalQuestionCount();

  // Set initial active category
  useEffect(() => {
    if (!showIntro && !activeCat && categories.length > 0) {
      setActiveCat(categories[0].key);
    }
  }, [showIntro, activeCat]);

  // Jump to first unanswered when switching category
  useEffect(() => {
    if (!activeCat) return;
    const cat = categories.find(c => c.key === activeCat);
    if (!cat) return;
    const first = cat.questions.findIndex(q => answers[q.id] === undefined);
    setActiveQIdx(first >= 0 ? first : 0);
  }, [activeCat]);

  // ── Chapter-complete animation state ────────────────────────────────
  const [completedCatFlash, setCompletedCatFlash] = useState(null);

  // ── Answer + auto-advance ────────────────────────────────────────────
  const selectAnswerAndAdvance = useCallback((qId, level) => {
    setAnswers((prev) => {
      const next = { ...prev, [qId]: level };
      const cat = categories.find(c => c.key === activeCat);
      if (!cat) return next;

      // Check for unanswered questions in CURRENT chapter
      const curIdx = cat.questions.findIndex(q => q.id === qId);
      for (let off = 1; off < cat.questions.length; off++) {
        const check = (curIdx + off) % cat.questions.length;
        if (next[cat.questions[check].id] === undefined) {
          // Jump to next unanswered in same chapter
          setTimeout(() => setActiveQIdx(check), 250);
          return next;
        }
      }

      // ALL questions in this chapter answered → auto-advance to next open chapter
      setCompletedCatFlash(activeCat);
      setTimeout(() => {
        setCompletedCatFlash(null);
        // Find next chapter with unanswered questions
        const catIdx = categories.findIndex(c => c.key === activeCat);
        for (let i = 1; i < categories.length; i++) {
          const nextCat = categories[(catIdx + i) % categories.length];
          const hasUnanswered = nextCat.questions.some(q => next[q.id] === undefined);
          if (hasUnanswered) {
            setActiveCat(nextCat.key);
            return;
          }
        }
        // All chapters complete — stay on current
      }, 600);

      return next;
    });
  }, [activeCat]);

  // ── Notes handler ────────────────────────────────────────────────────
  const updateNote = useCallback((qId, text) => {
    setNotes(prev => ({ ...prev, [qId]: text }));
  }, []);

  // ── Reset ────────────────────────────────────────────────────────────
  const resetAll = useCallback(() => {
    setAnswers({});
    setNotes({});
    setShowIntro(true);
    setActiveCat(null);
  }, []);

  // ── Trend: save snapshot ─────────────────────────────────────────────
  const saveSnapshot = useCallback(() => {
    const res = calculateResults(answers);
    if (res.totalAnswered === 0) return;
    const catScores = {};
    res.categories.forEach(c => {
      if (c.percentScore !== null) catScores[c.key] = c.percentScore;
    });
    const snapshot = {
      timestamp: Date.now(),
      overallScore: res.overallScore,
      categoryScores: catScores,
      totalAnswered: res.totalAnswered,
    };
    setHistory(prev => [...prev, snapshot]);
    setSavedFlash(true);
    setTimeout(() => setSavedFlash(false), 2000);
  }, [answers]);

  const clearHistory = useCallback(() => {
    setHistory([]);
  }, []);

  // ── Jump to specific question from Gap Backlog ───────────────────────
  const jumpToQuestion = useCallback((catKey, questionId) => {
    setActiveCat(catKey);
    const cat = categories.find(c => c.key === catKey);
    if (cat) {
      const idx = cat.questions.findIndex(q => q.id === questionId);
      if (idx >= 0) setActiveQIdx(idx);
    }
  }, [categories]);

  // ── Results ──────────────────────────────────────────────────────────
  const results = useMemo(() => calculateResults(answers), [answers]);

  const radarData = useMemo(() => {
    return categories.map((cat) => {
      const cr = results.categories.find(c => c.key === cat.key);
      return { subject: radarLabels[locale][cat.key], score: cr?.percentScore ?? 0, fullMark: 100 };
    });
  }, [results, locale, categories]);

  const activeCatData = categories.find(c => c.key === activeCat);
  const activeCatResult = activeCatData ? results.categories.find(c => c.key === activeCat) : null;
  const activeProfile = assessmentProfiles[profile] || assessmentProfiles.iso13485;

  // ── PDF Export ─────────────────────────────────────────────────────────
  const generatePDF = useCallback(async () => {
    if (results.totalAnswered === 0 || pdfLoading) return;
    setPdfLoading(true);
    try {
      const { default: jsPDF } = await import('jspdf');
      const { default: html2canvas } = await import('html2canvas');

      const loc = locale;
      const tt = ui[loc];
      const prof = assessmentProfiles[profile] || assessmentProfiles.iso13485;
      const dateStr = new Date().toLocaleDateString(loc === 'de' ? 'de-DE' : 'en-US', { year: 'numeric', month: 'long', day: 'numeric' });

      const container = document.createElement('div');
      container.style.cssText = 'position:fixed;left:-9999px;top:0;width:800px;padding:40px;font-family:Inter,system-ui,sans-serif;background:#fff;color:#0f172a;font-size:13px;line-height:1.5;';

      let html = '';
      html += `<div style="margin-bottom:24px;border-bottom:2px solid #1e3a8a;padding-bottom:16px;">
        <h1 style="font-size:22px;font-weight:700;color:#1e3a8a;margin:0 0 4px 0;">${tt.pdfTitle}</h1>
        <div style="font-size:11px;color:#64748b;">${dateStr} &middot; ${loc === 'de' ? 'Profil' : 'Profile'}: ${prof.label[loc]}</div>
      </div>`;

      const ml = results.overallMaturity ? maturityLevels[results.overallMaturity] : null;
      html += `<div style="display:flex;align-items:center;gap:16px;margin-bottom:24px;padding:16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">
        <div style="font-size:36px;font-weight:800;color:${ml ? ml.color : '#94a3b8'};">${results.overallScore !== null ? results.overallScore + '%' : '—'}</div>
        <div>
          <div style="font-size:15px;font-weight:600;">${tt.overallScore}</div>
          <div style="font-size:12px;color:${ml ? ml.color : '#94a3b8'};font-weight:600;">${ml ? ml[loc] : '—'}</div>
          <div style="font-size:11px;color:#94a3b8;">${results.totalAnswered} / ${results.totalQuestions} ${loc === 'de' ? 'beantwortet' : 'answered'}</div>
        </div>
      </div>`;

      html += `<h2 style="font-size:14px;font-weight:700;margin:20px 0 8px;color:#1e3a8a;">${tt.categoryScores}</h2>`;
      let tableRows = '';
      results.categories.forEach(cat => {
        const fc = categories.find(c => c.key === cat.key);
        if (!fc) return;
        const catMl = cat.maturityKey ? maturityLevels[cat.maturityKey] : null;
        tableRows += `<tr>
          <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;">${cat.icon} ${fc.label[loc]}</td>
          <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;font-weight:600;color:#1e3a8a;">${fc.clauseRef}</td>
          <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;text-align:center;font-weight:700;color:${catMl ? catMl.color : '#94a3b8'};">${cat.percentScore !== null ? cat.percentScore + '%' : '—'}</td>
          <td style="padding:6px 8px;border-bottom:1px solid #f1f5f9;color:${catMl ? catMl.color : '#94a3b8'};">${catMl ? catMl[loc] : '—'}</td>
        </tr>`;
      });
      html += `<table style="width:100%;border-collapse:collapse;font-size:12px;margin-bottom:24px;">
        <thead><tr style="background:#f8fafc;">
          <th style="padding:6px 8px;text-align:left;font-size:10px;text-transform:uppercase;color:#64748b;">${tt.gapCategory}</th>
          <th style="padding:6px 8px;text-align:left;font-size:10px;text-transform:uppercase;color:#64748b;">ISO</th>
          <th style="padding:6px 8px;text-align:center;font-size:10px;text-transform:uppercase;color:#64748b;">${tt.gapScore}</th>
          <th style="padding:6px 8px;text-align:left;font-size:10px;text-transform:uppercase;color:#64748b;">Maturity</th>
        </tr></thead><tbody>${tableRows}</tbody></table>`;

      const gapList = [];
      categories.forEach(cat => {
        cat.questions.forEach(q => {
          const score = answers[q.id];
          if (score !== undefined && score <= 2) gapList.push({ cat, q, score });
        });
      });
      if (gapList.length > 0) {
        html += `<h2 style="font-size:14px;font-weight:700;margin:20px 0 8px;color:#DC3545;">${loc === 'de' ? 'Identifizierte Gaps' : 'Identified Gaps'} (${gapList.length})</h2>`;
        gapList.forEach(({ cat, q, score }) => {
          const evHtml = q.expectedEvidence.map(ev =>
            `<div style="margin-left:12px;font-size:11px;color:#475569;">&bull; <strong style="color:${ev.type === 'procedure' ? '#3B82F6' : ev.type === 'record' ? '#8B5CF6' : '#F59E0B'}">${ev.type === 'procedure' ? tt.evidenceProcedure : ev.type === 'record' ? tt.evidenceRecord : tt.evidenceEffectiveness}</strong>: ${ev[loc]}</div>`
          ).join('');
          const noteHtml = notes[q.id] ? `<div style="font-size:11px;color:#64748b;font-style:italic;margin-top:4px;">${notes[q.id]}</div>` : '';
          html += `<div style="padding:10px 12px;margin-bottom:6px;background:#fef2f2;border-radius:6px;border-left:3px solid ${RISK_COLORS[q.auditRiskLevel]};">
            <div style="font-size:12px;font-weight:600;color:#0f172a;">${cat.icon} ${cat.label[loc]} — Kl. ${q.isoClause}</div>
            <div style="font-size:11px;color:#475569;margin:4px 0;">${q.question[loc]}</div>
            <div style="font-size:11px;color:${LEVEL_COLORS[score]};font-weight:700;">Score: ${score}/4</div>
            ${evHtml}${noteHtml}
          </div>`;
        });
      }

      html += `<div style="margin-top:32px;padding-top:12px;border-top:1px solid #e2e8f0;font-size:10px;color:#94a3b8;text-align:center;">${tt.pdfGenerated}</div>`;

      // ── Last page: QCore offer based on results ──
      const nextStepsTitle = loc === 'de' ? 'Nächste Schritte — So schließen Sie Ihre Gaps' : 'Next Steps — How to Close Your Gaps';
      const yourResultsShow = loc === 'de' ? 'Ihre Ergebnisse zeigen Handlungsbedarf bei:' : 'Your results indicate action needed in:';

      // Find categories below 60%
      const weakCats = results.categories.filter(c => c.percentScore !== null && c.percentScore < 60);
      let lastPageHtml = `<div style="page-break-before:always;padding-top:40px;">`;
      lastPageHtml += `<h2 style="font-size:18px;font-weight:700;color:#1e3a8a;margin:0 0 16px 0;">${nextStepsTitle}</h2>`;

      if (weakCats.length > 0) {
        lastPageHtml += `<div style="margin-bottom:24px;padding:16px;background:#f8fafc;border-radius:8px;border:1px solid #e2e8f0;">`;
        lastPageHtml += `<div style="font-size:12px;font-weight:600;color:#0f172a;margin-bottom:12px;">${yourResultsShow}</div>`;
        weakCats.forEach(wc => {
          const fc = categories.find(c => c.key === wc.key);
          if (!fc) return;
          const product = PRODUCT_MAP[wc.key];
          lastPageHtml += `<div style="padding:8px 0;border-bottom:1px solid #f1f5f9;">`;
          lastPageHtml += `<div style="font-size:12px;font-weight:600;color:#0f172a;">${fc.icon} ${fc.label[loc]} (${loc === 'de' ? 'Ihr Score' : 'Your Score'}: ${wc.percentScore}%)</div>`;
          if (product) {
            const p = product[loc];
            lastPageHtml += `<div style="font-size:11px;color:#1e3a8a;margin-top:4px;">→ ${p.label} — ${p.desc} (${p.price})</div>`;
            lastPageHtml += `<div style="font-size:10px;color:#64748b;margin-top:2px;">${product.href}</div>`;
          }
          lastPageHtml += `</div>`;
        });
        lastPageHtml += `</div>`;
      }

      // Consultation CTA
      const consultTitle = loc === 'de' ? 'Persönliche Unterstützung gewünscht?' : 'Want personal support?';
      const consultDesc = loc === 'de'
        ? 'Buchen Sie ein kostenloses 15-Minuten Ergebnis-Review.'
        : 'Book a free 15-minute results review.';
      lastPageHtml += `<div style="padding:16px;background:#f0f4ff;border-radius:8px;border:1px solid rgba(30,58,138,0.15);margin-bottom:24px;">`;
      lastPageHtml += `<div style="font-size:13px;font-weight:700;color:#1e3a8a;">${consultTitle}</div>`;
      lastPageHtml += `<div style="font-size:12px;color:#475569;margin-top:4px;">${consultDesc}</div>`;
      lastPageHtml += `<div style="font-size:11px;color:#1e3a8a;margin-top:6px;font-weight:600;">→ https://qcore-consulting.de/kontakt</div>`;
      lastPageHtml += `</div>`;

      // Footer
      lastPageHtml += `<div style="padding-top:16px;border-top:1px solid #e2e8f0;font-size:10px;color:#94a3b8;text-align:center;">`;
      lastPageHtml += `QCore Consulting | qcore-consulting.de | ${loc === 'de' ? 'Qualitätsmanagement für Medizintechnik-KMUs' : 'Quality Management for Medical Device SMEs'}`;
      lastPageHtml += `</div></div>`;

      html += lastPageHtml;

      container.innerHTML = html;
      document.body.appendChild(container);
      const canvas = await html2canvas(container, { scale: 2, useCORS: true, backgroundColor: '#ffffff' });
      document.body.removeChild(container);

      const imgWidth = 210;
      const pageHeight = 297;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pdf = new jsPDF('p', 'mm', 'a4');

      let heightLeft = imgHeight;
      let position = 0;
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      pdf.save(`QCore-Readiness-Report-${new Date().toISOString().slice(0, 10)}.pdf`);
      // Show feedback block after successful PDF download
      setTimeout(() => setShowFeedback(true), 600);
    } catch (err) {
      console.error('PDF generation failed:', err);
    } finally {
      setPdfLoading(false);
    }
  }, [results, answers, notes, categories, locale, profile, pdfLoading]);


  // ═══ RENDER ═══════════════════════════════════════════════════════════
  return (
    <>
      <Head>
        <title>{t.seoTitle}</title>
        <meta name="description" content={t.seoDescription} />
        <meta property="og:title" content={t.seoTitle} />
        <meta property="og:description" content={t.seoDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://qcore-consulting.de/readiness-check" />
        <link rel="canonical" href="https://qcore-consulting.de/readiness-check" />
        <style>{`
          html, body { overflow: hidden; height: 100%; }
          #__next { height: 100%; }
          .glass-container { border-radius: 16px; box-shadow: 0 4px 24px rgba(30,58,138,0.06), 0 1px 4px rgba(30,58,138,0.04); }
          .glass-header { border-radius: 0; box-shadow: 0 1px 8px rgba(30,58,138,0.05); }
        `}</style>
      </Head>

      <div className="flex flex-col" style={{
        height: '100vh', fontFamily: "'Inter', sans-serif",
        background: 'linear-gradient(135deg, #f0f4ff 0%, #e8edf5 50%, #f5f3ff 100%)',
      }}>

        {/* ═══ TOOLBAR ═══ */}
        <div className="flex items-center justify-between px-5 flex-shrink-0 glass-header"
          style={{
            height: 48,
            background: 'rgba(255,255,255,0.78)',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(255,255,255,0.45)',
          }}>
          <div className="flex items-center gap-4">
            <a href="/" className="text-sm font-bold tracking-wide" style={{ color: '#1e3a8a' }}>QCORE</a>
            <span style={{ color: 'rgba(30,58,138,0.2)' }}>|</span>
            <span className="text-base font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
              {t.pageTitle}
            </span>

            {/* Profile Switcher */}
            {!showIntro && (
              <div className="flex items-center gap-1 ml-4">
                {Object.values(assessmentProfiles).map(p => (
                  <button key={p.key} onClick={() => setProfile(p.key)}
                    className="px-2.5 py-1 rounded-[10px] text-xs font-semibold transition-all duration-150"
                    style={{
                      backgroundColor: profile === p.key ? '#1e3a8a' : 'transparent',
                      color: profile === p.key ? '#fff' : '#64748b',
                      border: profile === p.key ? '1px solid #1e3a8a' : '1px solid rgba(30,58,138,0.1)',
                    }}>
                    {p.label[locale]}
                  </button>
                ))}
              </div>
            )}
          </div>
          <div className="flex items-center gap-4">
            {/* Lock icon only — trust details are in Hero trust line */}
            {showIntro && <span className="text-xs" style={{ color: '#94a3b8' }}>🔒</span>}
            {!showIntro && (
              <>
                <span className="text-sm" style={{ color: '#64748b' }}>
                  {interpolate(t.questionsAnswered, { n: String(results.totalAnswered), total: String(totalQuestionCount) })}
                </span>
                <div className="w-24 h-2 rounded-full" style={{ backgroundColor: 'rgba(30,58,138,0.08)' }}>
                  <div className="h-2 rounded-full" style={{
                    width: `${(results.totalAnswered / totalQuestionCount) * 100}%`,
                    backgroundColor: '#1e3a8a', transition: 'width 0.4s ease-out',
                  }} />
                </div>
                {Object.keys(answers).length > 0 && (
                  <button onClick={resetAll} className="text-xs font-medium px-2.5 py-1 rounded-[10px] transition-colors duration-150 hover:bg-red-50"
                    style={{ color: '#DC3545' }}>
                    ↺ {t.resetAll}
                  </button>
                )}
              </>
            )}
          </div>
        </div>

        {/* ═══ INTRO → ASSESSMENT ═══ */}
        {showIntro ? (
          <div className="flex-1 min-h-0" style={{
            background: 'rgba(255,255,255,0.78)',
            backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
          }}>
            <IntroLanding
              locale={locale}
              onStart={() => setShowIntro(false)}
              onStartWithProfile={(p) => { setProfile(p); setShowIntro(false); }}
            />
          </div>
        ) : (
          <div className="flex flex-1 min-h-0 gap-1 p-1">

            {/* ─── LEFT: Categories ─── */}
            <div className="flex-shrink-0 flex flex-col overflow-y-auto glass-container"
              style={{
                width: 240,
                background: 'rgba(255,255,255,0.78)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.45)',
              }}>
              <div className="py-3 px-2.5 space-y-0.5">
                {categories.map((cat) => {
                  const cr = results.categories.find(c => c.key === cat.key);
                  const ml = cr?.maturityKey ? maturityLevels[cr.maturityKey] : null;
                  const isActive = activeCat === cat.key;
                  const answeredInCat = cat.questions.filter(q => answers[q.id] !== undefined).length;
                  const totalInCat = cat.questions.length;
                  const isComplete = answeredInCat === totalInCat;
                  const isFlashing = completedCatFlash === cat.key;

                  return (
                    <button key={cat.key} onClick={() => setActiveCat(cat.key)}
                      className="w-full text-left px-2.5 py-2.5 rounded-[10px] transition-all duration-150 flex items-center gap-2.5"
                      style={{
                        backgroundColor: isActive ? 'rgba(30,58,138,0.10)' : 'transparent',
                        borderLeft: isActive ? '3px solid #1e3a8a' : '3px solid transparent',
                        borderTop: '1px solid transparent',
                        borderRight: '1px solid transparent',
                        borderBottom: '1px solid transparent',
                      }}
                      onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = 'rgba(30,58,138,0.05)'; }}
                      onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.backgroundColor = isActive ? 'rgba(30,58,138,0.10)' : 'transparent'; }}
                    >
                      <span className="text-base flex-shrink-0">{cat.icon}</span>
                      <div className="flex-1 min-w-0" title={cat.label[locale]}>
                        <div className="text-xs font-semibold truncate" style={{ color: isActive ? '#0f172a' : '#334155' }}>
                          {cat.label[locale]}
                        </div>
                        <div className="text-[10px] mt-0.5 truncate" style={{ color: '#94a3b8' }}>
                          {cat.clauseRef}
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-1 flex-shrink-0">
                        {/* Progress count or checkmark */}
                        {isFlashing ? (
                          <motion.span
                            initial={{ scale: 0 }}
                            animate={{ scale: [0, 1.4, 1] }}
                            transition={{ duration: 0.4 }}
                            className="text-base">
                            ✅
                          </motion.span>
                        ) : isComplete ? (
                          <span className="text-xs" style={{ color: '#22C55E' }}>✓</span>
                        ) : (
                          <span className="text-[10px] font-semibold tabular-nums" style={{ color: '#94a3b8' }}>
                            {answeredInCat}/{totalInCat}
                          </span>
                        )}
                        {ml && (
                          <span className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                            style={{ backgroundColor: ml.bg, color: ml.color }}>
                            {cr.percentScore}%
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
              <div className="mt-auto px-3 py-2 border-t" style={{ borderColor: 'rgba(30,58,138,0.07)' }}>
                <a href="/" className="text-xs flex items-center gap-1.5 transition-colors hover:underline"
                  style={{ color: '#94a3b8' }}>
                  ← qcore-consulting.de
                </a>
              </div>
            </div>


            {/* ─── MIDDLE: One question at a time ─── */}
            <div className="flex-1 flex flex-col px-8 py-5 glass-container"
              style={{
                background: 'rgba(255,255,255,0.78)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.45)',
              }}>

              {activeCatData && (
                <>
                  {/* Category header + question nav */}
                  <div className="flex items-center gap-3 mb-6 flex-shrink-0">
                    <span className="text-2xl flex-shrink-0">{activeCatData.icon}</span>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
                        {activeCatData.label[locale]}
                      </h2>
                      <p className="text-xs mt-0.5" style={{ color: '#64748b' }}>
                        {activeCatData.description[locale]}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button
                        onClick={() => setActiveQIdx(Math.max(0, activeQIdx - 1))}
                        disabled={activeQIdx === 0}
                        className="w-7 h-7 rounded-[10px] flex items-center justify-center text-sm font-medium transition-all duration-150 disabled:opacity-20"
                        style={{ backgroundColor: 'rgba(30,58,138,0.06)', border: '1px solid rgba(30,58,138,0.1)', color: '#1e3a8a' }}>
                        ‹
                      </button>
                      <div className="flex items-center gap-1.5">
                        {activeCatData.questions.map((q, i) => (
                          <button key={q.id} onClick={() => setActiveQIdx(i)}
                            className="rounded-full transition-all"
                            style={{
                              width: i === activeQIdx ? 20 : 8,
                              height: 8,
                              backgroundColor: i === activeQIdx ? '#1e3a8a'
                                : answers[q.id] !== undefined ? LEVEL_COLORS[answers[q.id]]
                                : 'rgba(30,58,138,0.12)',
                              transition: 'all 0.2s',
                            }} />
                        ))}
                      </div>
                      <button
                        onClick={() => setActiveQIdx(Math.min(activeCatData.questions.length - 1, activeQIdx + 1))}
                        disabled={activeQIdx === activeCatData.questions.length - 1}
                        className="w-7 h-7 rounded-[10px] flex items-center justify-center text-sm font-medium transition-all duration-150 disabled:opacity-20"
                        style={{ backgroundColor: 'rgba(30,58,138,0.06)', border: '1px solid rgba(30,58,138,0.1)', color: '#1e3a8a' }}>
                        ›
                      </button>
                      <span className="text-xs font-medium ml-1" style={{ color: '#94a3b8' }}>
                        {activeQIdx + 1}/{activeCatData.questions.length}
                      </span>
                    </div>
                  </div>

                  {/* Question + answers */}
                  <div className="flex-1 flex flex-col overflow-y-auto">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${activeCat}-${activeQIdx}`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.12 }}
                        className="flex-1 flex flex-col"
                      >
                        {(() => {
                          const q = activeCatData.questions[activeQIdx];
                          if (!q) return null;
                          return (
                            <>
                              {/* Question text + clause + QMSR badge */}
                              <div className="mb-4">
                                <div className="flex items-start gap-2 mb-1">
                                  <h3 className="text-base font-semibold leading-snug flex-1" style={{ color: '#0f172a' }}>
                                    {q.question[locale]}
                                  </h3>
                                  {activeProfile.showQmsr && q.qmsrDelta && (
                                    <QmsrBadge question={q} locale={locale} />
                                  )}
                                </div>
                                <div className="flex items-center gap-3 text-xs" style={{ color: '#94a3b8' }}>
                                  <span className="font-medium" style={{ color: '#1e3a8a' }}>
                                    Kl. {q.isoClause} — {q.clauseTitle[locale]}
                                  </span>
                                  <RiskBadge level={q.auditRiskLevel} locale={locale} />
                                  {q.qmsrRef && activeProfile.showQmsr && (
                                    <span style={{ color: '#94a3b8' }}>§ {q.qmsrRef}</span>
                                  )}
                                </div>
                              </div>

                              {/* Answer options */}
                              <div className="space-y-2 flex-1">
                                {q.options[locale].map((opt) => (
                                  <AnswerCard
                                    key={opt.level}
                                    option={opt}
                                    isSelected={answers[q.id] === opt.level}
                                    onSelect={(lvl) => selectAnswerAndAdvance(q.id, lvl)}
                                    levelLabel={t.levelLabels[opt.level]}
                                  />
                                ))}
                              </div>

                              {/* Note field */}
                              <div className="mt-3 flex-shrink-0">
                                <input
                                  type="text"
                                  value={notes[q.id] || ''}
                                  onChange={(e) => updateNote(q.id, e.target.value)}
                                  placeholder={`📝 ${t.notePlaceholder}`}
                                  className="w-full px-3 py-2 rounded-[10px] text-xs transition-all duration-150 focus:outline-none"
                                  style={{
                                    backgroundColor: 'rgba(30,58,138,0.03)',
                                    border: '1px solid rgba(30,58,138,0.08)',
                                    color: '#334155',
                                  }}
                                  onFocus={(e) => { e.target.style.borderColor = 'rgba(30,58,138,0.25)'; }}
                                  onBlur={(e) => { e.target.style.borderColor = 'rgba(30,58,138,0.08)'; }}
                                />
                              </div>

                              {/* Expected Evidence — Collapsible */}
                              <EvidenceCollapsible question={q} locale={locale} t={t} />
                            </>
                          );
                        })()}
                      </motion.div>
                    </AnimatePresence>

                    {/* Next category link */}
                    {activeCatResult?.answeredCount === activeCatData.questions.length && (() => {
                      const idx = categories.findIndex(c => c.key === activeCat);
                      const next = categories[idx + 1];
                      if (!next) return null;
                      return (
                        <button onClick={() => setActiveCat(next.key)}
                          className="mt-3 flex items-center gap-2 text-sm font-semibold transition-colors hover:underline flex-shrink-0"
                          style={{ color: '#1e3a8a' }}>
                          {locale === 'de' ? 'Weiter' : 'Next'}: {next.icon} {next.label[locale]} →
                        </button>
                      );
                    })()}
                  </div>
                </>
              )}
            </div>


            {/* ─── RIGHT: Dashboard ─── */}
            <div className="flex-shrink-0 flex flex-col glass-container"
              style={{
                width: '36%', maxWidth: 480,
                background: 'rgba(255,255,255,0.78)',
                backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.45)',
              }}>

              {/* ── FIXED TOP: Score Ring + Mini Radar (max 200px) ── */}
              <div className="px-4 pt-3 pb-2 flex items-start gap-3 flex-shrink-0" style={{ maxHeight: 200 }}>
                <div className="flex-shrink-0">
                  <div className="text-[10px] font-bold uppercase tracking-wider mb-1 text-center" style={{ color: '#64748b' }}>
                    {t.overallScore}
                  </div>
                  <ScoreRing percent={results.overallScore} maturityKey={results.overallMaturity} locale={locale} size={100} />
                </div>
                {results.totalAnswered > 0 ? (
                  <div className="flex-1 min-w-0" style={{ height: 130 }}>
                    <ResponsiveContainer>
                      <RadarChart data={radarData} cx="50%" cy="50%" outerRadius="62%">
                        <PolarGrid stroke="rgba(30,58,138,0.08)" />
                        <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 8 }} />
                        <PolarRadiusAxis angle={90} domain={[0, 100]} tick={false} axisLine={false} />
                        <Radar dataKey="score" stroke="#1e3a8a" fill="rgba(30,58,138,0.15)" strokeWidth={1.5} dot={{ r: 2, fill: '#1e3a8a' }} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                ) : (
                  <div className="flex-1 flex items-center justify-center" style={{ height: 130 }}>
                    <span className="text-xs text-center" style={{ color: '#94a3b8' }}>
                      {locale === 'de' ? 'Radar nach erster Bewertung' : 'Radar after first answer'}
                    </span>
                  </div>
                )}
              </div>

              {/* ── FIXED: Tab Bar ── */}
              <div className="px-4 flex gap-1 flex-shrink-0" style={{ borderBottom: '1px solid rgba(30,58,138,0.06)' }}>
                {['gaps', 'radar', 'trend'].map(tab => (
                  <button key={tab} onClick={() => setDashTab(tab)}
                    className="px-3 py-2 text-xs font-semibold transition-all"
                    style={{
                      color: dashTab === tab ? '#1e3a8a' : '#94a3b8',
                      borderBottom: dashTab === tab ? '2px solid #1e3a8a' : '2px solid transparent',
                    }}>
                    {tab === 'gaps' ? t.tabGaps : tab === 'radar' ? t.tabRadar : t.tabTrend}
                  </button>
                ))}
              </div>

              {/* ── SCROLLABLE: Tab Content ── */}
              <div className="flex-1 min-h-0 overflow-y-auto px-4 py-3">
                {dashTab === 'gaps' && (
                  <GapBacklog
                    answers={answers}
                    notes={notes}
                    categories={categories}
                    locale={locale}
                    profile={profile}
                    onJumpToQuestion={jumpToQuestion}
                  />
                )}

                {dashTab === 'radar' && (
                  <div className="space-y-2">
                    <div className="text-xs font-bold uppercase tracking-wider" style={{ color: '#64748b' }}>
                      {t.categoryScores}
                    </div>
                    {results.categories
                      .filter(cat => categories.some(fc => fc.key === cat.key))
                      .map((cat) => {
                        const ml = cat.maturityKey ? maturityLevels[cat.maturityKey] : null;
                        const catData = categories.find(c => c.key === cat.key);
                        return (
                          <button key={cat.key} onClick={() => setActiveCat(cat.key)}
                            className="w-full flex items-center gap-2 py-1 px-1 rounded transition-all hover:bg-white/40 text-left">
                            <span className="text-sm w-4 flex-shrink-0">{cat.icon}</span>
                            <div className="flex-1 min-w-0">
                              <div className="flex justify-between items-center">
                                <span className="text-xs font-semibold truncate" style={{ color: activeCat === cat.key ? '#0f172a' : '#475569' }}>
                                  {catData?.label[locale]}
                                </span>
                                <span className="text-xs font-bold ml-1" style={{ color: ml ? ml.color : '#cbd5e1' }}>
                                  {cat.percentScore !== null ? `${cat.percentScore}%` : '—'}
                                </span>
                              </div>
                              <div className="w-full h-1.5 rounded-full mt-1" style={{ backgroundColor: 'rgba(30,58,138,0.06)' }}>
                                <div className="h-1.5 rounded-full" style={{
                                  width: cat.percentScore !== null ? `${cat.percentScore}%` : '0%',
                                  backgroundColor: ml ? ml.color : 'transparent',
                                  transition: 'width 0.4s ease-out',
                                }} />
                              </div>
                            </div>
                          </button>
                        );
                    })}

                    {/* Top Gaps */}
                    {results.topGaps.length > 0 && (
                      <div className="pt-2 mt-2 border-t" style={{ borderColor: 'rgba(30,58,138,0.06)' }}>
                        <div className="text-xs font-bold uppercase tracking-wider mb-1.5" style={{ color: '#DC3545' }}>
                          ⚠ {t.topGaps}
                        </div>
                        {results.topGaps.map((gap) => {
                          const ml = maturityLevels[gap.maturityKey];
                          const catData = categories.find(c => c.key === gap.key);
                          return (
                            <div key={gap.key} className="flex items-center gap-2 py-1">
                              <span className="text-sm">{gap.icon}</span>
                              <span className="text-xs font-semibold flex-1 truncate" style={{ color: '#334155' }}>
                                {catData?.label[locale]}
                              </span>
                              <span className="text-xs font-bold px-1.5 py-0.5 rounded"
                                style={{ backgroundColor: ml.bg, color: ml.color }}>
                                {gap.percentScore}%
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}

                {dashTab === 'trend' && (
                  <div className="h-full flex flex-col">
                    <TrendView history={history} locale={locale} />
                    <div className="flex items-center gap-3 mt-3 pt-3 border-t flex-shrink-0" style={{ borderColor: 'rgba(30,58,138,0.06)' }}>
                      <button onClick={saveSnapshot}
                        className="px-3 py-1.5 rounded-[10px] text-xs font-semibold transition-all duration-150"
                        style={{
                          backgroundColor: savedFlash ? 'rgba(34,197,94,0.15)' : 'rgba(30,58,138,0.08)',
                          color: savedFlash ? '#22C55E' : '#1e3a8a',
                          border: `1px solid ${savedFlash ? 'rgba(34,197,94,0.3)' : 'rgba(30,58,138,0.15)'}`,
                        }}>
                        {savedFlash ? `✓ ${t.trendSaved}` : t.trendSave}
                      </button>
                      {history.length > 0 && (
                        <button onClick={clearHistory}
                          className="text-xs transition-colors hover:underline"
                          style={{ color: '#94a3b8' }}>
                          {t.trendClear}
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {dashTab === 'actionPlan' && (
                  <ActionPlan
                    answers={answers}
                    notes={notes}
                    categories={categories}
                    locale={locale}
                    profile={profile}
                    actionPlanData={actionPlanData}
                    onUpdatePlanData={(qId, field, value) => {
                      setActionPlanData(prev => ({
                        ...prev,
                        [qId]: { ...(prev[qId] || {}), [field]: value },
                      }));
                    }}
                    onBack={() => setDashTab('gaps')}
                    onJumpToQuestion={jumpToQuestion}
                  />
                )}

                {dashTab === 'recommendations' && (
                  <Recommendations
                    results={results}
                    categories={categories}
                    answers={answers}
                    locale={locale}
                    profile={profile}
                    onBack={() => setDashTab('gaps')}
                    onJumpToCategory={(catKey) => { setActiveCat(catKey); setDashTab('gaps'); }}
                  />
                )}
              </div>

              {/* ── FIXED BOTTOM: Actions + CTA ── */}
              <div className="flex-shrink-0 border-t" style={{ borderColor: 'rgba(30,58,138,0.06)' }}>
                {/* Action Buttons */}
                <div className="px-4 py-2 flex gap-1.5">
                  <button onClick={generatePDF} disabled={results.totalAnswered === 0 || pdfLoading}
                    className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-[10px] text-xs font-semibold transition-all duration-150"
                    style={{ backgroundColor: 'rgba(30,58,138,0.06)', color: '#1e3a8a', border: '1px solid rgba(30,58,138,0.1)' }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(30,58,138,0.10)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'rgba(30,58,138,0.06)'; }}>
                    {pdfLoading ? '⏳' : '📄'} {pdfLoading ? t.pdfGenerating : t.pdfExport}
                  </button>
                  <button onClick={() => setDashTab('actionPlan')} disabled={results.totalAnswered === 0}
                    className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-[10px] text-xs font-semibold transition-all duration-150"
                    style={{
                      backgroundColor: dashTab === 'actionPlan' ? 'rgba(30,58,138,0.12)' : 'rgba(30,58,138,0.06)',
                      color: '#1e3a8a', border: '1px solid rgba(30,58,138,0.1)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(30,58,138,0.10)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = dashTab === 'actionPlan' ? 'rgba(30,58,138,0.12)' : 'rgba(30,58,138,0.06)'; }}>
                    ✅ {t.premiumTodos}
                  </button>
                  <button onClick={() => setDashTab('recommendations')} disabled={results.totalAnswered === 0}
                    className="flex-1 flex items-center justify-center gap-1.5 px-2 py-2 rounded-[10px] text-xs font-semibold transition-all duration-150"
                    style={{
                      backgroundColor: dashTab === 'recommendations' ? 'rgba(30,58,138,0.12)' : 'rgba(30,58,138,0.06)',
                      color: '#1e3a8a', border: '1px solid rgba(30,58,138,0.1)',
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = 'rgba(30,58,138,0.10)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = dashTab === 'recommendations' ? 'rgba(30,58,138,0.12)' : 'rgba(30,58,138,0.06)'; }}>
                    💡 {t.premiumDetailRecs}
                  </button>
                </div>

                {/* Feedback after PDF export */}
                <AnimatePresence>
                  {showFeedback && (
                    <FeedbackBlock locale={locale} onClose={() => setShowFeedback(false)} />
                  )}
                </AnimatePresence>

                {/* CTA */}
                {results.totalAnswered >= 5 && (
                  <div className="px-4 py-2 border-t" style={{ borderColor: 'rgba(30,58,138,0.06)' }}>
                    <a href="/kontakt"
                      className="w-full flex items-center justify-center gap-2 py-2.5 rounded-[10px] text-sm font-bold transition-all duration-150 hover:scale-[1.01]"
                      style={{
                        backgroundColor: 'rgba(191,219,254,0.35)',
                        backdropFilter: 'blur(3px)',
                        border: '1.5px solid rgba(191,219,254,0.5)',
                        color: '#1e3a8a',
                        boxShadow: '0 2px 8px rgba(30,58,138,0.08)',
                      }}>
                      📅 {t.ctaConsulting}
                    </a>
                  </div>
                )}

              </div>
            </div>

          </div>
        )}
      </div>
    </>
  );
}
