import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Head from 'next/head';
import { useState, useMemo } from 'react';
import { useRouter } from 'next/router';
import { getCodeLetter, resolveAqlPlan, aqlValues, severityLabels } from '../../data/aqlTables';

// ─── Design System Constants ───
const boxStyle = {
  backgroundColor: 'rgba(30, 58, 138, 0.06)',
  border: '1px solid rgba(30, 58, 138, 0.1)',
  backdropFilter: 'blur(3px)',
};

const inputStyle = {
  backgroundColor: 'rgba(30, 58, 138, 0.04)',
  border: '1px solid rgba(30, 58, 138, 0.15)',
  color: '#1e293b',
};

const glassCta = {
  backgroundColor: 'rgba(191, 219, 254, 0.35)',
  backdropFilter: 'blur(3px)',
  border: '1px solid rgba(191, 219, 254, 0.5)',
  color: '#1e3a8a',
};

// ─── Translations ───
const t = {
  de: {
    seo: {
      title: 'Stichprobenrechner — AQL, Validierung & Cpk kostenlos berechnen | QCore',
      description: 'Kostenloser Stichprobenrechner für QM-Professionals: AQL nach ISO 2859-1, Confidence/Reliability für Prozessvalidierung, audit-sichere Normreferenzen. MedTech & Pharma.',
    },
    hero: {
      title: 'Stichprobenrechner',
      subtitle: 'AQL, Validierung & Prozessfähigkeit — kostenlos berechnen mit audit-sicherer Normreferenz.',
    },
    modules: {
      aql: { title: 'Wareneingangsprüfung', subtitle: 'AQL nach ISO 2859-1', desc: 'Losgröße + Prüfniveau → Stichprobe + Ac/Re' },
      cr: { title: 'Validierungsstichprobe', subtitle: 'Confidence/Reliability (c=0, c=1...)', desc: 'Confidence + Reliability → benötigtes n' },
      cpk: { title: 'Prozessfähigkeit (Cpk)', subtitle: 'Variablenprüfung — kommt bald', desc: 'n + C/R → erforderlicher Ppk' },
    },
    aql: {
      lotSize: 'Losgröße',
      lotPlaceholder: 'z.B. 3200',
      level: 'Prüfniveau',
      aqlLabel: 'AQL (Acceptable Quality Limit)',
      severity: 'Prüfschärfe',
      normal: 'Normal', tightened: 'Verschärft', reduced: 'Reduziert',
      result: 'Ergebnis',
      codeLetter: 'Kennbuchstabe',
      sampleSize: 'Stichprobenumfang',
      accept: 'Annahmezahl',
      reject: 'Rückweisezahl',
      acceptRule: 'fehlerhaften Einheiten: Los ANNEHMEN',
      rejectRule: 'fehlerhaften Einheiten: Los ZURÜCKWEISEN',
      norm: 'Norm: ISO 2859-1:2014, Tabelle 2-A',
      copy: 'Text für Bericht kopieren',
      copied: '✓ Kopiert!',
      enterLot: 'Bitte Losgröße eingeben (2–500.000)',
      redirected: 'Hinweis: Der ursprüngliche Kennbuchstabe {original} hat für AQL {aql} keinen Plan. Es wird der nächste gültige Kennbuchstabe {letter} mit n={n} verwendet.',
      lotError: 'Losgröße muss zwischen 2 und 500.000 liegen.',
    },
    cr: {
      confidence: 'Konfidenzniveau (C)',
      reliability: 'Zuverlässigkeit (R)',
      acceptNumber: 'Zulässige Fehler (c)',
      result: 'Ergebnis',
      sampleSize: 'Erforderlicher Stichprobenumfang',
      interpretation: 'Interpretation',
      interpretText: 'Mit {c}% Sicherheit sind mindestens {r}% der Grundgesamtheit konform (bei {acc} Fehlern in der Stichprobe).',
      formula: 'Formel',
      norm: 'Norm: ISO 16269-6:2014',
      ref: 'Bezug: ISO 13485:2016, §7.5.6',
      copy: 'Text für Bericht kopieren',
      copied: '✓ Kopiert!',
      riskGuide: {
        title: 'Orientierungshilfe nach Risikoklasse',
        intro: 'Die Wahl von Confidence und Reliability hängt vom Risiko ab. Höheres Risiko → strengere Anforderungen.',
      },
    },
    tooltips: {
      lotSize: 'Die Gesamtanzahl der Einheiten im zu prüfenden Los (Charge, Lieferung).',
      inspectionLevel: 'Prüfniveau II ist der Standard. Niveau I = weniger Prüfung (bei vertrautem Lieferanten), Niveau III = mehr Prüfung (bei neuen Lieferanten oder kritischen Teilen).',
      aql: 'Acceptable Quality Limit — der maximal tolerierbare Anteil fehlerhafter Einheiten in Prozent. Niedrigere AQL = strengere Prüfung.',
      confidence: 'Statistische Sicherheit: Wie sicher wollen Sie sein, dass Ihre Aussage stimmt? 95% ist der Standard in der Medizintechnik.',
      reliability: 'Zuverlässigkeit: Welcher Mindestanteil der Grundgesamtheit soll konform sein? Bei 95% dürfen maximal 5% fehlerhaft sein.',
      acceptNumber: 'Wie viele fehlerhafte Einheiten dürfen in der Stichprobe gefunden werden? c=0 (Null-Fehler-Plan) ist am strengsten aber erfordert die kleinste Stichprobe.',
    },
    faq: {
      title: 'Häufige Fragen zur Stichprobenberechnung',
      items: [
        { q: 'Was ist die AQL (Acceptable Quality Limit)?', a: 'Die AQL ist der maximal tolerierbare Anteil fehlerhafter Einheiten in einem Los, angegeben in Prozent. Sie wird zwischen Lieferant und Kunde vereinbart. Ein AQL von 1.0 bedeutet: Bei 1% Fehleranteil wird das Los in etwa 95% der Fälle noch akzeptiert. Je niedriger der AQL-Wert, desto strenger die Prüfung.' },
        { q: 'Wie berechne ich die Stichprobengröße für eine Prozessvalidierung?', a: 'Für Prozessvalidierungen (OQ/PQ) wird der Confidence/Reliability-Ansatz verwendet. Sie legen fest, mit welcher Sicherheit (Confidence) welcher Mindestanteil konformer Teile (Reliability) nachgewiesen werden soll. Der Standard in der Medizintechnik ist 95/95 (95% Confidence, 95% Reliability), was bei c=0 einen Stichprobenumfang von n=59 ergibt.' },
        { q: 'Was bedeutet 95/95 Confidence/Reliability?', a: 'Die Notation 95/95 bedeutet: Mit 95% statistischer Sicherheit (Confidence) sind mindestens 95% der Grundgesamtheit konform (Reliability). Bei einem Null-Fehler-Plan (c=0) benötigen Sie dafür 59 Prüflinge. Findet sich in dieser Stichprobe kein Fehler, ist die Aussage statistisch belegt.' },
        { q: 'Welche Norm gilt für Stichprobenpläne in der Medizintechnik?', a: 'Für Wareneingangsprüfungen gilt ISO 2859-1 (Attributprüfung). Für Prozessvalidierungen verweist ISO 13485:2016 in §7.5.6 auf statistische Methoden, wobei ISO 16269-6 die mathematische Grundlage für Confidence/Reliability-Berechnungen liefert. Die Wahl des Plans sollte risikobasiert nach ISO 14971 erfolgen.' },
        { q: 'Was ist der Unterschied zwischen Attribut- und Variablenprüfung?', a: 'Bei der Attributprüfung wird jede Einheit als "gut" oder "schlecht" bewertet (z.B. Sichtprüfung, Go/NoGo). Bei der Variablenprüfung wird ein Messwert erfasst (z.B. Durchmesser in mm). Variablenprüfungen liefern mehr Information pro Prüfling und erlauben kleinere Stichproben, erfordern aber Messmittel und Normalverteilungsannahmen.' },
      ],
    },
    cta: {
      aql: {
        text: 'Lieferantenbewertung oder Wareneingangsprüfung aufbauen?',
      },
      cr: {
        text: 'Validierungsplan erstellen lassen?',
      },
      button: 'Kostenloses Erstgespräch buchen',
    },
  },
  en: {
    seo: {
      title: 'Sample Size Calculator — AQL, Validation & Cpk | QCore',
      description: 'Free sample size calculator for QM professionals: AQL per ISO 2859-1, confidence/reliability for process validation, audit-ready norm references. MedTech & Pharma.',
    },
    hero: {
      title: 'Sample Size Calculator',
      subtitle: 'AQL, validation & process capability — calculate for free with audit-ready norm references.',
    },
    modules: {
      aql: { title: 'Incoming Inspection', subtitle: 'AQL per ISO 2859-1', desc: 'Lot size + level → sample + Ac/Re' },
      cr: { title: 'Validation Sample Size', subtitle: 'Confidence/Reliability', desc: 'Confidence + Reliability → required n' },
      cpk: { title: 'Process Capability (Cpk)', subtitle: 'Variable inspection — coming soon', desc: 'n + C/R → required Ppk' },
    },
    aql: {
      lotSize: 'Lot Size',
      lotPlaceholder: 'e.g. 3200',
      level: 'Inspection Level',
      aqlLabel: 'AQL (Acceptable Quality Limit)',
      severity: 'Inspection Severity',
      normal: 'Normal', tightened: 'Tightened', reduced: 'Reduced',
      result: 'Result',
      codeLetter: 'Code Letter',
      sampleSize: 'Sample Size',
      accept: 'Accept Number',
      reject: 'Reject Number',
      acceptRule: 'defective units: ACCEPT lot',
      rejectRule: 'defective units: REJECT lot',
      norm: 'Standard: ISO 2859-1:2014, Table 2-A',
      copy: 'Copy text for report',
      copied: '✓ Copied!',
      enterLot: 'Please enter lot size (2–500,000)',
      redirected: 'Note: Original code letter {original} has no plan for AQL {aql}. Using next valid code letter {letter} with n={n}.',
      lotError: 'Lot size must be between 2 and 500,000.',
    },
    cr: {
      confidence: 'Confidence Level (C)',
      reliability: 'Reliability (R)',
      acceptNumber: 'Allowed Defects (c)',
      result: 'Result',
      sampleSize: 'Required Sample Size',
      interpretation: 'Interpretation',
      interpretText: 'With {c}% confidence, at least {r}% of the population is conforming (with {acc} defects in the sample).',
      formula: 'Formula',
      norm: 'Standard: ISO 16269-6:2014',
      ref: 'Reference: ISO 13485:2016, §7.5.6',
      copy: 'Copy text for report',
      copied: '✓ Copied!',
      riskGuide: {
        title: 'Risk Class Guidance',
        intro: 'The choice of confidence and reliability depends on risk. Higher risk → stricter requirements.',
      },
    },
    tooltips: {
      lotSize: 'Total number of units in the lot (batch, shipment) to be inspected.',
      inspectionLevel: 'Level II is standard. Level I = less inspection (trusted supplier), Level III = more inspection (new supplier or critical parts).',
      aql: 'Acceptable Quality Limit — maximum tolerable percentage of defective units. Lower AQL = stricter inspection.',
      confidence: 'How confident do you want to be that your statement is correct? 95% is standard in medical devices.',
      reliability: 'What minimum percentage of the population should be conforming? At 95%, max 5% may be defective.',
      acceptNumber: 'How many defective units are allowed in the sample? c=0 (zero-defect plan) is strictest but requires smallest sample.',
    },
    faq: {
      title: 'Frequently Asked Questions about Sample Size Calculation',
      items: [
        { q: 'What is the AQL (Acceptable Quality Limit)?', a: 'The AQL is the maximum tolerable percentage of defective units in a lot. It is agreed upon between supplier and customer. An AQL of 1.0 means: at a 1% defect rate, the lot will still be accepted in about 95% of cases. The lower the AQL value, the stricter the inspection.' },
        { q: 'How do I calculate the sample size for a process validation?', a: 'For process validations (OQ/PQ), the Confidence/Reliability approach is used. You specify with what confidence and what minimum conforming proportion (reliability) should be demonstrated. The standard in medical devices is 95/95 (95% confidence, 95% reliability), which yields n=59 at c=0.' },
        { q: 'What does 95/95 Confidence/Reliability mean?', a: 'The notation 95/95 means: with 95% statistical confidence, at least 95% of the population is conforming (reliability). With a zero-defect plan (c=0), you need 59 samples. If no defect is found in this sample, the statement is statistically proven.' },
        { q: 'Which standard applies to sampling plans in medical devices?', a: 'For incoming inspection, ISO 2859-1 applies (attribute inspection). For process validations, ISO 13485:2016 §7.5.6 references statistical methods, with ISO 16269-6 providing the mathematical basis for confidence/reliability calculations. Plan selection should be risk-based per ISO 14971.' },
        { q: 'What is the difference between attribute and variable inspection?', a: 'In attribute inspection, each unit is rated as "pass" or "fail" (e.g., visual inspection, go/no-go). In variable inspection, a measurement is recorded (e.g., diameter in mm). Variable inspections provide more information per unit and allow smaller samples, but require measuring instruments and normality assumptions.' },
      ],
    },
    cta: {
      aql: {
        text: 'Need help setting up supplier evaluation or incoming inspection?',
      },
      cr: {
        text: 'Need help creating a validation plan?',
      },
      button: 'Book a free consultation',
    },
  },
};

// ─── C/R Calculation ───
function binomialCoeff(n, k) {
  if (k === 0 || k === n) return 1;
  let result = 0;
  for (let i = 0; i < k; i++) {
    result += Math.log(n - i) - Math.log(i + 1);
  }
  return Math.exp(result);
}

function binomialPMF(n, k, p) {
  return binomialCoeff(n, k) * Math.pow(p, k) * Math.pow(1 - p, n - k);
}

function calculateCR(confidence, reliability, acceptNumber) {
  const C = confidence / 100;
  const R = reliability / 100;

  if (acceptNumber === 0) {
    return Math.ceil(Math.log(1 - C) / Math.log(R));
  }

  const p = 1 - R;
  for (let n = acceptNumber + 1; n < 50000; n++) {
    let cumProb = 0;
    for (let k = 0; k <= acceptNumber; k++) {
      cumProb += binomialPMF(n, k, p);
    }
    if (cumProb <= (1 - C)) {
      return n;
    }
  }
  return null;
}

// ─── Tooltip Component ───
function InfoTip({ text }) {
  return (
    <span className="relative group inline-flex ml-1 cursor-help">
      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full text-xs" style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a', fontSize: '10px' }}>i</span>
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 rounded-lg text-xs leading-relaxed w-64 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50"
        style={{ backgroundColor: 'rgba(15, 23, 42, 0.95)', color: '#e2e8f0', backdropFilter: 'blur(8px)' }}>
        {text}
      </span>
    </span>
  );
}

// ─── Button Group Component ───
function ButtonGroup({ options, value, onChange }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map(opt => {
        const isActive = value === opt.value;
        return (
          <button
            key={opt.value}
            onClick={() => onChange(opt.value)}
            className={`px-4 py-2 rounded-lg font-medium transition-all ${!isActive ? 'hover:scale-[1.02]' : ''}`}
            style={{
              backgroundColor: isActive ? 'rgba(30, 58, 138, 0.15)' : 'rgba(30, 58, 138, 0.04)',
              border: isActive ? '2px solid rgba(30, 58, 138, 0.4)' : '1px solid rgba(30, 58, 138, 0.1)',
              color: isActive ? '#1e3a8a' : '#475569',
              fontFamily: "'Cormorant', serif",
            }}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}

// ─── Copy Button ───
function CopyButton({ getText, label, copiedLabel }) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(getText());
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = getText();
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };
  return (
    <button
      onClick={handleCopy}
      className="w-full px-4 py-2.5 rounded-lg font-semibold transition-all hover:scale-[1.01] text-sm"
      style={copied ? { ...glassCta, backgroundColor: 'rgba(34, 197, 94, 0.15)', borderColor: 'rgba(34, 197, 94, 0.3)', color: '#166534' } : glassCta}
    >
      {copied ? copiedLabel : `\uD83D\uDCCB ${label}`}
    </button>
  );
}

// ─── Share Button ───
function ShareButton({ locale }) {
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      await navigator.share({
        title: locale === 'de' ? 'QCore Stichprobenrechner' : 'QCore Sample Size Calculator',
        url,
      });
    } else {
      await navigator.clipboard.writeText(url);
    }
  };
  return (
    <button
      onClick={handleShare}
      className="w-full px-4 py-2 rounded-lg text-xs transition-all hover:scale-[1.01]"
      style={{
        backgroundColor: 'rgba(30, 58, 138, 0.04)',
        border: '1px solid rgba(30, 58, 138, 0.1)',
        color: '#475569',
      }}
    >
      {'\uD83D\uDD17'} {locale === 'de' ? 'Tool-Link teilen' : 'Share tool link'}
    </button>
  );
}

// ─── Collapsible Panel ───
function CollapsiblePanel({ title, icon, children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl overflow-hidden" style={boxStyle}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-3 text-left flex justify-between items-center"
      >
        <h3 className="text-base font-semibold" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
          {icon} {title}
        </h3>
        <svg
          className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          fill="none" stroke="#64748b" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && <div className="px-5 pb-4">{children}</div>}
    </div>
  );
}

// ─── FAQ Accordion ───
function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-xl overflow-hidden" style={boxStyle}>
      <button onClick={() => setOpen(!open)} className="w-full px-6 py-4 text-left flex justify-between items-center">
        <h3 className="text-lg font-semibold pr-4" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>{q}</h3>
        <svg className={`w-5 h-5 flex-shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} fill="none" stroke="#64748b" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-4">
          <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>{a}</p>
        </div>
      )}
    </div>
  );
}

// ═══════════════════════════════════════════════════
// MAIN PAGE COMPONENT
// ═══════════════════════════════════════════════════
export default function Stichprobe() {
  const { locale } = useRouter();
  const text = t[locale] || t.de;

  // Module state
  const [activeModule, setActiveModule] = useState('aql');

  // AQL state
  const [lotSize, setLotSize] = useState('');
  const [level, setLevel] = useState('II');
  const [aql, setAql] = useState('1.0');
  const [severity, setSeverity] = useState('normal');

  // C/R state
  const [confidence, setConfidence] = useState(95);
  const [reliability, setReliability] = useState(95);
  const [acceptNumber, setAcceptNumber] = useState(0);

  // Lot size validation helper
  const lotSizeInvalid = lotSize && (parseInt(lotSize, 10) < 2 || parseInt(lotSize, 10) > 500000);

  // ─── AQL Result (live) ───
  const aqlResult = useMemo(() => {
    const lot = parseInt(lotSize, 10);
    if (!lot || lot < 2 || lot > 500000) return null;
    const letter = getCodeLetter(lot, level);
    if (!letter) return null;
    const plan = resolveAqlPlan(letter, aql);
    if (!plan) return null;
    return { ...plan, originalInputLetter: letter };
  }, [lotSize, level, aql]);

  // ─── C/R Result (live) ───
  const crResult = useMemo(() => {
    const n = calculateCR(confidence, reliability, acceptNumber);
    return n;
  }, [confidence, reliability, acceptNumber]);

  // ─── Copy text generators ───
  const getAqlCopyText = () => {
    if (!aqlResult) return '';
    const date = new Date().toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US');
    const sevLabel = severityLabels[locale === 'de' ? 'de' : 'en'][severity];
    return locale === 'de'
      ? `STICHPROBENPLAN — Attributive Annahmestichprobenprüfung
================================================================
Norm:              ISO 2859-1:2014, Tabelle 2-A (Einfach-Stichprobenplan)
Losgröße:          ${lotSize} Einheiten
Prüfniveau:        Allgemeines Prüfniveau ${level} (${sevLabel})
AQL:               ${aql} %

Kennbuchstabe:     ${aqlResult.letter}
Stichprobenumfang: n = ${aqlResult.n}
Annahmezahl (Ac):  ${aqlResult.ac}
Rückweisezahl (Re): ${aqlResult.re}

Entscheidungsregel:
Bei ≤${aqlResult.ac} fehlerhaften Einheiten in der Stichprobe wird das Los angenommen.
Bei ≥${aqlResult.re} fehlerhaften Einheiten wird das Los zurückgewiesen.

Referenz: ISO 2859-1:2014, Abschnitt 10, Tabelle 2-A
Berechnet am ${date} via QCore Stichprobenrechner
(qcore-consulting.de/tools/stichprobe)`
      : `SAMPLING PLAN — Attribute acceptance sampling
================================================================
Standard:          ISO 2859-1:2014, Table 2-A (Single sampling plan)
Lot size:          ${lotSize} units
Inspection level:  General inspection level ${level} (${sevLabel})
AQL:               ${aql} %

Code letter:       ${aqlResult.letter}
Sample size:       n = ${aqlResult.n}
Accept number (Ac): ${aqlResult.ac}
Reject number (Re): ${aqlResult.re}

Decision rule:
At ≤${aqlResult.ac} defective units in the sample, ACCEPT the lot.
At ≥${aqlResult.re} defective units, REJECT the lot.

Reference: ISO 2859-1:2014, Section 10, Table 2-A
Calculated on ${date} via QCore Sample Size Calculator
(qcore-consulting.de/tools/stichprobe)`;
  };

  const getCrCopyText = () => {
    if (!crResult) return '';
    const date = new Date().toLocaleDateString(locale === 'de' ? 'de-DE' : 'en-US');
    const C = confidence / 100;
    const R = reliability / 100;
    if (locale === 'de') {
      return `STICHPROBENPLAN — Erfolgsbasierte Attributprüfung (Confidence/Reliability)
================================================================
Prüfziel:              Prozessvalidierung (OQ/PQ)
Konfidenzniveau (C):   ${confidence} %
Zuverlässigkeit (R):   ${reliability} %
Annahmezahl (c):       ${acceptNumber}${acceptNumber === 0 ? ' (Null-Fehler-Plan)' : ''}

Erforderlicher Stichprobenumfang: n = ${crResult}

Statistische Begründung:
Bei einem Stichprobenumfang von n = ${crResult} und ${acceptNumber === 0 ? '0 gefundenen Fehlern' : `≤${acceptNumber} gefundenen Fehlern`} kann
mit einer statistischen Sicherheit von ${confidence} % davon ausgegangen werden,
dass mindestens ${reliability} % der Grundgesamtheit konform sind.
${acceptNumber === 0
  ? `Formel: n = ⌈ln(1 − C) / ln(R)⌉ = ⌈ln(${(1 - C).toFixed(2)}) / ln(${R.toFixed(4)})⌉ = ${crResult}`
  : `Berechnung: Kumulative Binomialverteilung P(X ≤ ${acceptNumber} | n=${crResult}, p=${(1 - R).toFixed(4)}) ≤ ${(1 - C).toFixed(2)}`
}

Referenz: ISO 16269-6:2014; risikobasierter Ansatz gem. ISO 13485:2016, §7.5.6
Berechnet am ${date} via QCore Stichprobenrechner
(qcore-consulting.de/tools/stichprobe)`;
    }
    return `SAMPLING PLAN — Success-based attribute testing (Confidence/Reliability)
================================================================
Test objective:        Process validation (OQ/PQ)
Confidence level (C):  ${confidence} %
Reliability (R):       ${reliability} %
Accept number (c):     ${acceptNumber}${acceptNumber === 0 ? ' (zero-defect plan)' : ''}

Required sample size: n = ${crResult}

Statistical justification:
With a sample size of n = ${crResult} and ${acceptNumber === 0 ? '0 defects found' : `≤${acceptNumber} defects found`},
there is ${confidence}% statistical confidence that at least ${reliability}% of the population is conforming.
${acceptNumber === 0
  ? `Formula: n = ⌈ln(1 − C) / ln(R)⌉ = ⌈ln(${(1 - C).toFixed(2)}) / ln(${R.toFixed(4)})⌉ = ${crResult}`
  : `Calculation: Cumulative binomial P(X ≤ ${acceptNumber} | n=${crResult}, p=${(1 - R).toFixed(4)}) ≤ ${(1 - C).toFixed(2)}`
}

Reference: ISO 16269-6:2014; risk-based approach per ISO 13485:2016, §7.5.6
Calculated on ${date} via QCore Sample Size Calculator
(qcore-consulting.de/tools/stichprobe)`;
  };

  const modules = [
    { id: 'aql', icon: '\uD83D\uDCE6', ...text.modules.aql },
    { id: 'cr', icon: '\u2705', ...text.modules.cr },
    { id: 'cpk', icon: '\uD83D\uDCCA', ...text.modules.cpk, disabled: true },
  ];

  return (
    <>
      <Head>
        <title>{text.seo.title}</title>
        <meta name="description" content={text.seo.description} />
        <link rel="canonical" href={`https://qcore-consulting.de/${locale === 'en' ? 'en/' : ''}tools/stichprobe`} />
        <meta property="og:title" content={text.seo.title} />
        <meta property="og:description" content={text.seo.description} />
        <meta property="og:type" content="website" />
      </Head>

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)' }} />
      </div>

      <Navigation />

      <main className="pt-24 pb-16 px-6 lg:px-12">
        <div className="max-w-screen-2xl mx-auto">

          {/* ─── Compact Hero with Integrated Tabs ─── */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-6 gap-4">
            {/* Left: Title + Subtitle + Norm Badge */}
            <div>
              <h1
                className="text-3xl lg:text-4xl font-semibold"
                style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
              >
                {text.hero.title}
              </h1>
              <p className="text-sm mt-1" style={{ color: '#475569' }}>
                {text.hero.subtitle}
              </p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs px-2 py-1 rounded-full" style={{
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                  color: '#166534',
                  border: '1px solid rgba(34, 197, 94, 0.2)',
                }}>
                  {'\u2713'} ISO 2859-1 {'\u00B7'} ISO 16269-6
                </span>
                <span className="text-xs" style={{ color: '#94a3b8' }}>
                  {locale === 'de' ? 'Kostenlos \u00B7 Keine Registrierung' : 'Free \u00B7 No registration'}
                </span>
              </div>
            </div>

            {/* Right: Module Tabs */}
            <div className="flex gap-2">
              {modules.filter(m => !m.disabled).map(mod => (
                <button
                  key={mod.id}
                  onClick={() => setActiveModule(mod.id)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{
                    backgroundColor: activeModule === mod.id ? 'rgba(30, 58, 138, 0.15)' : 'rgba(30, 58, 138, 0.04)',
                    border: activeModule === mod.id ? '2px solid rgba(30, 58, 138, 0.4)' : '1px solid rgba(30, 58, 138, 0.1)',
                    color: activeModule === mod.id ? '#1e3a8a' : '#475569',
                  }}
                >
                  <span className="mr-1">{mod.icon}</span>
                  {mod.title}
                </button>
              ))}
              {/* Cpk "bald" as disabled tab */}
              <button
                disabled
                className="px-4 py-2 rounded-lg text-sm font-medium"
                style={{
                  backgroundColor: 'transparent',
                  border: '1px solid rgba(30, 58, 138, 0.06)',
                  color: '#94a3b8',
                  cursor: 'default',
                }}
              >
                {'\uD83D\uDCCA'} Cpk <span className="text-xs">({locale === 'de' ? 'bald' : 'soon'})</span>
              </button>
            </div>
          </div>

          {/* ═══════════════════════════════════════════ */}
          {/* MODULE A: AQL Calculator                    */}
          {/* ═══════════════════════════════════════════ */}
          {activeModule === 'aql' && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
              {/* Input: 3 columns */}
              <div className="lg:col-span-3 space-y-4">
                <div className="rounded-xl p-5 lg:p-6" style={boxStyle}>
                  {/* Lot Size */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>
                      {text.aql.lotSize} <InfoTip text={text.tooltips.lotSize} />
                    </label>
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={lotSize}
                      onChange={e => {
                        const val = e.target.value.replace(/[^0-9]/g, '');
                        setLotSize(val);
                      }}
                      placeholder={text.aql.lotPlaceholder}
                      className="w-full px-4 py-2.5 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                      style={{
                        ...inputStyle,
                        borderColor: lotSizeInvalid
                          ? 'rgba(220, 38, 38, 0.5)'
                          : inputStyle.border,
                      }}
                    />
                    {lotSizeInvalid && (
                      <p className="text-xs mt-1" style={{ color: '#dc2626' }}>
                        {text.aql.lotError}
                      </p>
                    )}
                  </div>

                  {/* Inspection Level */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>
                      {text.aql.level} <InfoTip text={text.tooltips.inspectionLevel} />
                    </label>
                    <ButtonGroup
                      options={[{ value: 'I', label: 'I' }, { value: 'II', label: 'II' }, { value: 'III', label: 'III' }]}
                      value={level}
                      onChange={setLevel}
                    />
                  </div>

                  {/* AQL Value */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>
                      {text.aql.aqlLabel} <InfoTip text={text.tooltips.aql} />
                    </label>
                    <select
                      value={aql}
                      onChange={e => setAql(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-300"
                      style={inputStyle}
                    >
                      {aqlValues.map(v => (
                        <option key={v} value={v}>{v} %</option>
                      ))}
                    </select>
                  </div>

                  {/* Severity */}
                  <div>
                    <label className="block text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>
                      {text.aql.severity}
                    </label>
                    <ButtonGroup
                      options={[
                        { value: 'normal', label: text.aql.normal },
                        { value: 'tightened', label: text.aql.tightened },
                        { value: 'reduced', label: text.aql.reduced },
                      ]}
                      value={severity}
                      onChange={setSeverity}
                    />
                    {severity !== 'normal' && (
                      <p className="mt-2 text-xs" style={{ color: '#f59e0b' }}>
                        {locale === 'de'
                          ? 'Hinweis: Aktuell wird nur die Tabelle für normale Prüfschärfe verwendet (Tabelle 2-A).'
                          : 'Note: Currently only the normal inspection table is used (Table 2-A).'}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              {/* Result: 2 columns — sticky on Desktop */}
              <div className="lg:col-span-2">
                <div className="lg:sticky lg:top-20 space-y-4">
                  <div
                    className="rounded-xl p-5 lg:p-6 transition-all duration-300"
                    style={{
                      ...boxStyle,
                      borderColor: aqlResult ? 'rgba(34, 197, 94, 0.3)' : boxStyle.border,
                      opacity: aqlResult ? 1 : 0.7,
                    }}
                  >
                    <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
                      {text.aql.result}
                    </h2>

                    {!aqlResult ? (
                      <p className="text-sm" style={{ color: '#94a3b8' }}>{text.aql.enterLot}</p>
                    ) : (
                      <>
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between">
                            <span className="text-sm" style={{ color: '#64748b' }}>{text.aql.codeLetter}</span>
                            <span className="font-semibold" style={{ color: '#1e293b' }}>{aqlResult.letter}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm" style={{ color: '#64748b' }}>{text.aql.sampleSize}</span>
                            <span className="font-semibold text-lg" style={{ color: '#1e3a8a' }}>n = {aqlResult.n}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm" style={{ color: '#64748b' }}>{text.aql.accept} (Ac)</span>
                            <span className="font-semibold" style={{ color: '#166534' }}>{aqlResult.ac}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm" style={{ color: '#64748b' }}>{text.aql.reject} (Re)</span>
                            <span className="font-semibold" style={{ color: '#dc2626' }}>{aqlResult.re}</span>
                          </div>
                        </div>

                        <div className="border-t pt-4 mb-4" style={{ borderColor: 'rgba(30, 58, 138, 0.1)' }}>
                          <p className="text-sm mb-1" style={{ color: '#166534' }}>
                            {locale === 'de' ? '\u2192 Bei' : '\u2192 At'} {'\u2264'}{aqlResult.ac} {text.aql.acceptRule}
                          </p>
                          <p className="text-sm" style={{ color: '#dc2626' }}>
                            {locale === 'de' ? '\u2192 Bei' : '\u2192 At'} {'\u2265'}{aqlResult.re} {text.aql.rejectRule}
                          </p>
                        </div>

                        {aqlResult.redirected && (
                          <p className="text-xs mb-4 p-3 rounded-lg" style={{ backgroundColor: 'rgba(245, 158, 11, 0.1)', color: '#b45309' }}>
                            {text.aql.redirected
                              .replace('{original}', aqlResult.originalLetter || aqlResult.originalInputLetter)
                              .replace('{aql}', aql)
                              .replace('{letter}', aqlResult.letter)
                              .replace('{n}', aqlResult.n)}
                          </p>
                        )}

                        <p className="text-xs mb-4" style={{ color: '#94a3b8' }}>{text.aql.norm}</p>

                        <CopyButton getText={getAqlCopyText} label={text.aql.copy} copiedLabel={text.aql.copied} />
                        <div className="mt-2">
                          <ShareButton locale={locale} />
                        </div>
                      </>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="rounded-xl p-4 text-center" style={boxStyle}>
                    <p className="text-sm mb-3" style={{ color: '#334155' }}>
                      {text.cta.aql.text}
                    </p>
                    <a
                      href="/kontakt"
                      className="inline-block px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02] text-sm"
                      style={glassCta}
                    >
                      {text.cta.button}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════ */}
          {/* MODULE B: C/R Calculator                    */}
          {/* ═══════════════════════════════════════════ */}
          {activeModule === 'cr' && (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 lg:gap-6">
              {/* Input: 3 columns */}
              <div className="lg:col-span-3 space-y-4">
                <div className="rounded-xl p-5 lg:p-6" style={boxStyle}>
                  {/* Confidence */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>
                      {text.cr.confidence} <InfoTip text={text.tooltips.confidence} />
                    </label>
                    <ButtonGroup
                      options={[
                        { value: 90, label: '90%' },
                        { value: 95, label: '95%' },
                        { value: 99, label: '99%' },
                      ]}
                      value={confidence}
                      onChange={setConfidence}
                    />
                  </div>

                  {/* Reliability */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>
                      {text.cr.reliability} <InfoTip text={text.tooltips.reliability} />
                    </label>
                    <ButtonGroup
                      options={[
                        { value: 90, label: '90%' },
                        { value: 95, label: '95%' },
                        { value: 99, label: '99%' },
                        { value: 99.9, label: '99.9%' },
                      ]}
                      value={reliability}
                      onChange={setReliability}
                    />
                  </div>

                  {/* Accept Number */}
                  <div>
                    <label className="block text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>
                      {text.cr.acceptNumber} <InfoTip text={text.tooltips.acceptNumber} />
                    </label>
                    <ButtonGroup
                      options={[
                        { value: 0, label: 'c = 0' },
                        { value: 1, label: 'c = 1' },
                        { value: 2, label: 'c = 2' },
                      ]}
                      value={acceptNumber}
                      onChange={setAcceptNumber}
                    />
                  </div>
                </div>

                {/* Risk Guide Panel — Collapsible */}
                <CollapsiblePanel
                  title={text.cr.riskGuide.title}
                  icon={locale === 'de' ? '\u26A0\uFE0F' : '\u26A0\uFE0F'}
                  defaultOpen={false}
                >
                  <p className="text-sm mb-4" style={{ color: '#475569' }}>
                    {text.cr.riskGuide.intro}
                  </p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr style={{ borderBottom: '1px solid rgba(30, 58, 138, 0.1)' }}>
                          <th className="text-left py-2 pr-4 font-semibold" style={{ color: '#1e293b' }}>
                            {locale === 'de' ? 'Risikoklasse' : 'Risk Class'}
                          </th>
                          <th className="text-left py-2 pr-4 font-semibold" style={{ color: '#1e293b' }}>C/R</th>
                          <th className="text-right py-2 font-semibold" style={{ color: '#1e293b' }}>n (c=0)</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { cls: locale === 'de' ? 'Klasse I (gering)' : 'Class I (low)', cr: '90/90', n: 22 },
                          { cls: locale === 'de' ? 'Klasse IIa (mittel)' : 'Class IIa (medium)', cr: '95/95', n: 59 },
                          { cls: locale === 'de' ? 'Klasse IIb (erhöht)' : 'Class IIb (elevated)', cr: '95/99', n: 299 },
                          { cls: locale === 'de' ? 'Klasse III (hoch)' : 'Class III (high)', cr: '99/99', n: 459 },
                        ].map((row, i) => (
                          <tr key={i} style={{ borderBottom: '1px solid rgba(30, 58, 138, 0.05)' }}>
                            <td className="py-2 pr-4" style={{ color: '#475569' }}>{row.cls}</td>
                            <td className="py-2 pr-4 font-medium" style={{ color: '#1e3a8a' }}>{row.cr}</td>
                            <td className="py-2 text-right font-medium" style={{ color: '#1e293b' }}>{row.n}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="text-xs mt-3" style={{ color: '#94a3b8' }}>
                    {locale === 'de'
                      ? 'Basierend auf ISO 14971 Risikobewertung. Die endgültige Festlegung obliegt dem QMB im Rahmen der dokumentierten Risikoanalyse.'
                      : 'Based on ISO 14971 risk assessment. Final determination rests with the QMR within the documented risk analysis.'}
                  </p>
                </CollapsiblePanel>
              </div>

              {/* Result: 2 columns — sticky on Desktop */}
              <div className="lg:col-span-2">
                <div className="lg:sticky lg:top-20 space-y-4">
                  <div
                    className="rounded-xl p-5 lg:p-6 transition-all duration-300"
                    style={{
                      ...boxStyle,
                      borderColor: crResult ? 'rgba(34, 197, 94, 0.3)' : boxStyle.border,
                      opacity: crResult ? 1 : 0.7,
                    }}
                  >
                    <h2 className="text-xl font-semibold mb-4" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
                      {text.cr.result}
                    </h2>

                    {crResult && (
                      <>
                        <div className="mb-4">
                          <p className="text-sm mb-1" style={{ color: '#64748b' }}>{text.cr.sampleSize}</p>
                          <p className="text-4xl font-bold" style={{ color: '#1e3a8a', fontFamily: "'Cormorant', serif" }}>
                            n = {crResult}
                          </p>
                        </div>

                        <div className="border-t pt-4 mb-4" style={{ borderColor: 'rgba(30, 58, 138, 0.1)' }}>
                          <p className="text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>{text.cr.interpretation}</p>
                          <p className="text-sm leading-relaxed" style={{ color: '#475569' }}>
                            {text.cr.interpretText
                              .replace('{c}', confidence)
                              .replace('{r}', reliability)
                              .replace('{acc}', acceptNumber === 0 ? '0' : `\u2264${acceptNumber}`)}
                          </p>
                        </div>

                        <div className="border-t pt-4 mb-4" style={{ borderColor: 'rgba(30, 58, 138, 0.1)' }}>
                          <p className="text-sm font-semibold mb-1" style={{ color: '#1e293b' }}>{text.cr.formula}</p>
                          <p className="text-xs font-mono p-2 rounded" style={{ backgroundColor: 'rgba(30, 58, 138, 0.04)', color: '#475569' }}>
                            {acceptNumber === 0
                              ? `n = \u2308ln(${(1 - confidence / 100).toFixed(2)}) / ln(${(reliability / 100).toFixed(4)})\u2309 = ${crResult}`
                              : `P(X \u2264 ${acceptNumber} | n=${crResult}, p=${(1 - reliability / 100).toFixed(4)}) \u2264 ${(1 - confidence / 100).toFixed(2)}`}
                          </p>
                        </div>

                        <p className="text-xs mb-1" style={{ color: '#94a3b8' }}>{text.cr.norm}</p>
                        <p className="text-xs mb-4" style={{ color: '#94a3b8' }}>{text.cr.ref}</p>

                        <CopyButton getText={getCrCopyText} label={text.cr.copy} copiedLabel={text.cr.copied} />
                        <div className="mt-2">
                          <ShareButton locale={locale} />
                        </div>
                      </>
                    )}
                  </div>

                  {/* CTA */}
                  <div className="rounded-xl p-4 text-center" style={boxStyle}>
                    <p className="text-sm mb-3" style={{ color: '#334155' }}>
                      {text.cta.cr.text}
                    </p>
                    <a
                      href="/kontakt"
                      className="inline-block px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02] text-sm"
                      style={glassCta}
                    >
                      {text.cta.button}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ═══════════════════════════════════════════ */}
          {/* MODULE C: Cpk Placeholder                   */}
          {/* ═══════════════════════════════════════════ */}
          {activeModule === 'cpk' && (
            <div className="rounded-xl p-12 text-center" style={boxStyle}>
              <div className="text-5xl mb-4">{'\uD83D\uDCCA'}</div>
              <h2 className="text-2xl font-semibold mb-2" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
                {locale === 'de' ? 'Prozessfähigkeit (Cpk) — kommt bald' : 'Process Capability (Cpk) — coming soon'}
              </h2>
              <p className="text-sm" style={{ color: '#64748b' }}>
                {locale === 'de'
                  ? 'Stichprobenumfang für Variablenprüfung mit Cpk/Ppk-Nachweis. Wird in Version 1.1 ergänzt.'
                  : 'Sample size for variable inspection with Cpk/Ppk demonstration. Coming in version 1.1.'}
              </p>
            </div>
          )}

          {/* ─── FAQ Section ─── */}
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center" style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}>
              {text.faq.title}
            </h2>
            <div className="space-y-4">
              {text.faq.items.map((item, i) => (
                <FAQItem key={i} q={item.q} a={item.a} />
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}
