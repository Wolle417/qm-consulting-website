// /components/qm-wissen/ArticleComponents.js
// Wiederverwendbare Komponenten für alle QM-Wissen Artikel
// Design-Referenz: ISO 13485 Artikel

import Link from 'next/link';

// ============================================
// DEFINITION BOX
// ============================================
// Verwendung: Formale Definitionen, Norm-Beschreibungen
// Beispiel: "ISO 13485 - Definition"

export const DefinitionBox = ({ title, children }) => (
  <div className="border border-gray-600 rounded-lg p-4 my-6 bg-qcore-navy bg-opacity-20">
    <p className="text-gray-400 text-sm font-medium mb-2">{title}</p>
    <p className="text-gray-200">{children}</p>
  </div>
);

// ============================================
// INFO-BOXEN (alle mit gleichem Grundstil)
// ============================================

// Praxis-Tipp - für praktische Hinweise
export const TipBox = ({ children }) => (
  <div className="bg-qcore-navy bg-opacity-30 border-l-4 border-yellow-500 p-4 my-6 rounded-r">
    <p className="text-gray-300 text-sm font-medium mb-1">💡 Praxis-Tipp</p>
    <div className="text-gray-300 text-sm">{children}</div>
  </div>
);

// Info - für zusätzliche Erklärungen
export const InfoBox = ({ children }) => (
  <div className="bg-qcore-navy bg-opacity-30 border-l-4 border-blue-400 p-4 my-6 rounded-r">
    <p className="text-gray-300 text-sm font-medium mb-1">ℹ️ Info</p>
    <div className="text-gray-300 text-sm">{children}</div>
  </div>
);

// Wichtig/Warnung - für wichtige Hinweise
export const WarningBox = ({ children }) => (
  <div className="bg-qcore-navy bg-opacity-30 border-l-4 border-yellow-500 p-4 my-6 rounded-r">
    <p className="text-gray-300 text-sm font-medium mb-1">⚠️ Wichtig</p>
    <div className="text-gray-300 text-sm">{children}</div>
  </div>
);

// Beispiel - für konkrete Beispiele
export const ExampleBox = ({ children }) => (
  <div className="bg-qcore-navy bg-opacity-30 border-l-4 border-gray-500 p-4 my-6 rounded-r">
    <p className="text-gray-300 text-sm font-medium mb-1">📌 Beispiel</p>
    <div className="text-gray-300 text-sm">{children}</div>
  </div>
);

// ============================================
// TABELLE
// ============================================
// Verwendung: Vergleiche, Übersichten, Listen

export const Table = ({ headers, rows }) => (
  <div className="overflow-x-auto my-6">
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-700 bg-opacity-50">
          {headers.map((header, i) => (
            <th key={i} className="text-left p-3 text-gray-300 font-medium">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} className="border-b border-gray-700">
            {row.map((cell, j) => (
              <td key={j} className="p-3 text-gray-300">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

// ============================================
// ARTIKEL-STRUKTUR
// ============================================

// Abschnitts-Überschrift (h2)
export const Section = ({ number, title, children }) => (
  <section className="mt-10 mb-6">
    <h2 className="text-xl font-semibold text-gray-100 mb-4">
      {number}. {title}
    </h2>
    {children}
  </section>
);

// Standard Absatz
export const Paragraph = ({ children }) => (
  <p className="text-gray-300 mb-4 leading-relaxed">{children}</p>
);

// Hervorgehobener Text (fett)
export const Bold = ({ children }) => (
  <strong className="text-gray-100 font-semibold">{children}</strong>
);

// ============================================
// CTA BEREICH
// ============================================

export const CTABox = ({ title, children, buttonText = "Kostenlose Erstberatung vereinbaren", buttonLink = "/kontakt" }) => (
  <div className="bg-qcore-navy bg-opacity-40 border border-gray-600 rounded-lg p-6 my-8">
    <h3 className="text-lg font-semibold text-gray-100 mb-3">{title}</h3>
    <div className="text-gray-300 text-sm mb-4">{children}</div>
    <Link href={buttonLink}>
      <span className="inline-block bg-qcore-cyan text-qcore-navy px-4 py-2 rounded font-medium hover:bg-opacity-80 transition-colors cursor-pointer">
        {buttonText}
      </span>
    </Link>
  </div>
);

// ============================================
// ARTIKEL-LINKS
// ============================================

export const ArticleCard = ({ href, tag, title, description }) => (
  <Link href={href}>
    <div className="bg-qcore-navy bg-opacity-30 border border-gray-600 rounded-lg p-4 hover:border-gray-500 transition-colors cursor-pointer">
      {tag && (
        <span className="text-xs font-bold text-qcore-cyan uppercase tracking-wide">
          {tag}
        </span>
      )}
      <h4 className="text-gray-100 font-semibold mt-1 mb-2">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </Link>
);

// ============================================
// VERGLEICHS-BOXEN (Ohne/Mit)
// ============================================

export const ComparisonBox = ({ leftTitle, leftItems, rightTitle, rightItems }) => (
  <div className="grid md:grid-cols-2 gap-4 my-6">
    <div className="bg-qcore-navy bg-opacity-30 p-4 rounded border border-gray-600">
      <p className="text-gray-300 font-medium mb-3">{leftTitle}</p>
      <ul className="text-gray-400 text-sm space-y-2">
        {leftItems.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
    <div className="bg-qcore-navy bg-opacity-30 p-4 rounded border border-gray-600">
      <p className="text-gray-300 font-medium mb-3">{rightTitle}</p>
      <ul className="text-gray-400 text-sm space-y-2">
        {rightItems.map((item, i) => (
          <li key={i}>• {item}</li>
        ))}
      </ul>
    </div>
  </div>
);
