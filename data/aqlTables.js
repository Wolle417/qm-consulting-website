// ISO 2859-1 / ANSI Z1.4 — Complete AQL Lookup Tables
// Table 1: Code Letters + Table 2-A: Normal Single Sampling Plans

// ─── Table 1: Lot Size → Code Letter ───
export const codeLetter = [
  // [minLot, maxLot, levelI, levelII, levelIII]
  [2, 8, 'A', 'A', 'B'],
  [9, 15, 'A', 'B', 'C'],
  [16, 25, 'B', 'C', 'D'],
  [26, 50, 'C', 'D', 'E'],
  [51, 90, 'C', 'E', 'F'],
  [91, 150, 'D', 'F', 'G'],
  [151, 280, 'E', 'G', 'H'],
  [281, 500, 'F', 'H', 'J'],
  [501, 1200, 'G', 'J', 'K'],
  [1201, 3200, 'H', 'K', 'L'],
  [3201, 10000, 'J', 'L', 'M'],
  [10001, 35000, 'K', 'M', 'N'],
  [35001, 150000, 'L', 'N', 'P'],
  [150001, 500000, 'M', 'P', 'Q'],
  [500001, Infinity, 'N', 'Q', 'R'],
];

export function getCodeLetter(lotSize, level) {
  const levelIndex = { 'I': 2, 'II': 3, 'III': 4 };
  const row = codeLetter.find(r => lotSize >= r[0] && lotSize <= r[1]);
  return row ? row[levelIndex[level]] : null;
}

// ─── Code letter order (for arrow navigation) ───
const codeLetterOrder = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R'];

// ─── AQL values used in Table 2-A ───
export const aqlValues = ['0.010', '0.015', '0.025', '0.040', '0.065', '0.10', '0.15', '0.25', '0.40', '0.65', '1.0', '1.5', '2.5', '4.0', '6.5', '10.0'];

// ─── Table 2-A: Normal Inspection, Single Sampling ───
// Format: { [codeLetter]: { n: sampleSize, plans: { [aql]: {ac, re} | 'down' | 'up' } } }
// 'down' = ↓ use first plan below; 'up' = ↑ use first plan above

export const normalSingle = {
  'A': {
    n: 2,
    plans: {
      '0.010': 'down', '0.015': 'down', '0.025': 'down', '0.040': 'down',
      '0.065': 'down', '0.10': 'down', '0.15': 'down', '0.25': 'down',
      '0.40': 'down', '0.65': 'down', '1.0': 'down', '1.5': 'down',
      '2.5': 'down', '4.0': 'down', '6.5': { ac: 0, re: 1 },
      '10.0': { ac: 1, re: 2 },
    }
  },
  'B': {
    n: 3,
    plans: {
      '0.010': 'down', '0.015': 'down', '0.025': 'down', '0.040': 'down',
      '0.065': 'down', '0.10': 'down', '0.15': 'down', '0.25': 'down',
      '0.40': 'down', '0.65': 'down', '1.0': 'down', '1.5': 'down',
      '2.5': 'down', '4.0': { ac: 0, re: 1 },
      '6.5': { ac: 1, re: 2 }, '10.0': { ac: 2, re: 3 },
    }
  },
  'C': {
    n: 5,
    plans: {
      '0.010': 'down', '0.015': 'down', '0.025': 'down', '0.040': 'down',
      '0.065': 'down', '0.10': 'down', '0.15': 'down', '0.25': 'down',
      '0.40': 'down', '0.65': 'down', '1.0': 'down',
      '1.5': 'down', '2.5': { ac: 0, re: 1 },
      '4.0': { ac: 1, re: 2 }, '6.5': { ac: 2, re: 3 },
      '10.0': { ac: 3, re: 4 },
    }
  },
  'D': {
    n: 8,
    plans: {
      '0.010': 'down', '0.015': 'down', '0.025': 'down', '0.040': 'down',
      '0.065': 'down', '0.10': 'down', '0.15': 'down', '0.25': 'down',
      '0.40': 'down', '0.65': 'down',
      '1.0': { ac: 0, re: 1 }, '1.5': { ac: 1, re: 2 },
      '2.5': { ac: 1, re: 2 }, '4.0': { ac: 2, re: 3 },
      '6.5': { ac: 3, re: 4 }, '10.0': { ac: 5, re: 6 },
    }
  },
  'E': {
    n: 13,
    plans: {
      '0.010': 'down', '0.015': 'down', '0.025': 'down', '0.040': 'down',
      '0.065': 'down', '0.10': 'down', '0.15': 'down', '0.25': 'down',
      '0.40': { ac: 0, re: 1 }, '0.65': { ac: 0, re: 1 },
      '1.0': { ac: 1, re: 2 }, '1.5': { ac: 2, re: 3 },
      '2.5': { ac: 2, re: 3 }, '4.0': { ac: 3, re: 4 },
      '6.5': { ac: 5, re: 6 }, '10.0': { ac: 7, re: 8 },
    }
  },
  'F': {
    n: 20,
    plans: {
      '0.010': 'down', '0.015': 'down', '0.025': 'down', '0.040': 'down',
      '0.065': 'down', '0.10': 'down', '0.15': { ac: 0, re: 1 },
      '0.25': { ac: 0, re: 1 }, '0.40': { ac: 1, re: 2 },
      '0.65': { ac: 1, re: 2 }, '1.0': { ac: 2, re: 3 },
      '1.5': { ac: 3, re: 4 }, '2.5': { ac: 3, re: 4 },
      '4.0': { ac: 5, re: 6 }, '6.5': { ac: 7, re: 8 },
      '10.0': { ac: 10, re: 11 },
    }
  },
  'G': {
    n: 32,
    plans: {
      '0.010': 'down', '0.015': 'down', '0.025': 'down', '0.040': 'down',
      '0.065': { ac: 0, re: 1 }, '0.10': { ac: 0, re: 1 },
      '0.15': { ac: 1, re: 2 }, '0.25': { ac: 1, re: 2 },
      '0.40': { ac: 2, re: 3 }, '0.65': { ac: 2, re: 3 },
      '1.0': { ac: 3, re: 4 }, '1.5': { ac: 5, re: 6 },
      '2.5': { ac: 5, re: 6 }, '4.0': { ac: 7, re: 8 },
      '6.5': { ac: 10, re: 11 }, '10.0': { ac: 14, re: 15 },
    }
  },
  'H': {
    n: 50,
    plans: {
      '0.010': 'down', '0.015': 'down', '0.025': 'down',
      '0.040': { ac: 0, re: 1 }, '0.065': { ac: 0, re: 1 },
      '0.10': { ac: 1, re: 2 }, '0.15': { ac: 1, re: 2 },
      '0.25': { ac: 2, re: 3 }, '0.40': { ac: 3, re: 4 },
      '0.65': { ac: 3, re: 4 }, '1.0': { ac: 5, re: 6 },
      '1.5': { ac: 7, re: 8 }, '2.5': { ac: 7, re: 8 },
      '4.0': { ac: 10, re: 11 }, '6.5': { ac: 14, re: 15 },
      '10.0': { ac: 21, re: 22 },
    }
  },
  'J': {
    n: 80,
    plans: {
      '0.010': 'down', '0.015': 'down',
      '0.025': { ac: 0, re: 1 }, '0.040': { ac: 0, re: 1 },
      '0.065': { ac: 1, re: 2 }, '0.10': { ac: 1, re: 2 },
      '0.15': { ac: 2, re: 3 }, '0.25': { ac: 3, re: 4 },
      '0.40': { ac: 5, re: 6 }, '0.65': { ac: 5, re: 6 },
      '1.0': { ac: 7, re: 8 }, '1.5': { ac: 10, re: 11 },
      '2.5': { ac: 10, re: 11 }, '4.0': { ac: 14, re: 15 },
      '6.5': { ac: 21, re: 22 }, '10.0': 'up',
    }
  },
  'K': {
    n: 125,
    plans: {
      '0.010': 'down',
      '0.015': { ac: 0, re: 1 }, '0.025': { ac: 0, re: 1 },
      '0.040': { ac: 1, re: 2 }, '0.065': { ac: 1, re: 2 },
      '0.10': { ac: 2, re: 3 }, '0.15': { ac: 3, re: 4 },
      '0.25': { ac: 5, re: 6 }, '0.40': { ac: 7, re: 8 },
      '0.65': { ac: 7, re: 8 }, '1.0': { ac: 10, re: 11 },
      '1.5': { ac: 14, re: 15 }, '2.5': { ac: 14, re: 15 },
      '4.0': { ac: 21, re: 22 }, '6.5': 'up',
      '10.0': 'up',
    }
  },
  'L': {
    n: 200,
    plans: {
      '0.010': { ac: 0, re: 1 }, '0.015': { ac: 0, re: 1 },
      '0.025': { ac: 1, re: 2 }, '0.040': { ac: 1, re: 2 },
      '0.065': { ac: 2, re: 3 }, '0.10': { ac: 3, re: 4 },
      '0.15': { ac: 5, re: 6 }, '0.25': { ac: 7, re: 8 },
      '0.40': { ac: 10, re: 11 }, '0.65': { ac: 10, re: 11 },
      '1.0': { ac: 14, re: 15 }, '1.5': { ac: 21, re: 22 },
      '2.5': { ac: 21, re: 22 }, '4.0': 'up',
      '6.5': 'up', '10.0': 'up',
    }
  },
  'M': {
    n: 315,
    plans: {
      '0.010': { ac: 0, re: 1 }, '0.015': { ac: 1, re: 2 },
      '0.025': { ac: 1, re: 2 }, '0.040': { ac: 2, re: 3 },
      '0.065': { ac: 3, re: 4 }, '0.10': { ac: 5, re: 6 },
      '0.15': { ac: 7, re: 8 }, '0.25': { ac: 10, re: 11 },
      '0.40': { ac: 14, re: 15 }, '0.65': { ac: 14, re: 15 },
      '1.0': { ac: 21, re: 22 }, '1.5': 'up',
      '2.5': 'up', '4.0': 'up',
      '6.5': 'up', '10.0': 'up',
    }
  },
  'N': {
    n: 500,
    plans: {
      '0.010': { ac: 1, re: 2 }, '0.015': { ac: 1, re: 2 },
      '0.025': { ac: 2, re: 3 }, '0.040': { ac: 3, re: 4 },
      '0.065': { ac: 5, re: 6 }, '0.10': { ac: 7, re: 8 },
      '0.15': { ac: 10, re: 11 }, '0.25': { ac: 14, re: 15 },
      '0.40': { ac: 21, re: 22 }, '0.65': { ac: 21, re: 22 },
      '1.0': 'up', '1.5': 'up',
      '2.5': 'up', '4.0': 'up',
      '6.5': 'up', '10.0': 'up',
    }
  },
  'P': {
    n: 800,
    plans: {
      '0.010': { ac: 1, re: 2 }, '0.015': { ac: 2, re: 3 },
      '0.025': { ac: 3, re: 4 }, '0.040': { ac: 5, re: 6 },
      '0.065': { ac: 7, re: 8 }, '0.10': { ac: 10, re: 11 },
      '0.15': { ac: 14, re: 15 }, '0.25': { ac: 21, re: 22 },
      '0.40': 'up', '0.65': 'up',
      '1.0': 'up', '1.5': 'up',
      '2.5': 'up', '4.0': 'up',
      '6.5': 'up', '10.0': 'up',
    }
  },
  'Q': {
    n: 1250,
    plans: {
      '0.010': { ac: 2, re: 3 }, '0.015': { ac: 3, re: 4 },
      '0.025': { ac: 5, re: 6 }, '0.040': { ac: 7, re: 8 },
      '0.065': { ac: 10, re: 11 }, '0.10': { ac: 14, re: 15 },
      '0.15': { ac: 21, re: 22 }, '0.25': 'up',
      '0.40': 'up', '0.65': 'up',
      '1.0': 'up', '1.5': 'up',
      '2.5': 'up', '4.0': 'up',
      '6.5': 'up', '10.0': 'up',
    }
  },
  'R': {
    n: 2000,
    plans: {
      '0.010': { ac: 3, re: 4 }, '0.015': { ac: 5, re: 6 },
      '0.025': { ac: 7, re: 8 }, '0.040': { ac: 10, re: 11 },
      '0.065': { ac: 14, re: 15 }, '0.10': { ac: 21, re: 22 },
      '0.15': 'up', '0.25': 'up',
      '0.40': 'up', '0.65': 'up',
      '1.0': 'up', '1.5': 'up',
      '2.5': 'up', '4.0': 'up',
      '6.5': 'up', '10.0': 'up',
    }
  },
};

// ─── Arrow Resolution: follow ↓/↑ to find valid plan ───
export function resolveAqlPlan(startLetter, aql) {
  const plan = normalSingle[startLetter]?.plans[aql];
  if (!plan) return null;
  if (typeof plan === 'object') {
    return { ...plan, n: normalSingle[startLetter].n, letter: startLetter, redirected: false };
  }

  const idx = codeLetterOrder.indexOf(startLetter);
  const direction = plan === 'down' ? 1 : -1;

  for (let i = idx + direction; i >= 0 && i < codeLetterOrder.length; i += direction) {
    const letter = codeLetterOrder[i];
    const candidate = normalSingle[letter]?.plans[aql];
    if (candidate && typeof candidate === 'object') {
      return { ...candidate, n: normalSingle[letter].n, letter, redirected: true, originalLetter: startLetter };
    }
  }
  return null;
}

// ─── Severity labels ───
export const severityLabels = {
  de: { normal: 'Normal', tightened: 'Verschärft', reduced: 'Reduziert' },
  en: { normal: 'Normal', tightened: 'Tightened', reduced: 'Reduced' },
};
