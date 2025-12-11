// Shared components for all QM-Wissen articles
// Style reference: ISO 13485 article

import Link from 'next/link';

// ============================================
// INFO BOXES
// ============================================

/**
 * Praxis-Tipp Box
 * Usage: Practical hints and best practices
 */
export const TipBox = ({ children }) => (
  <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
    <div className="flex items-start">
      <span className="text-xl mr-3">💡</span>
      <div>
        <h4 className="font-semibold" style={{ color: '#1e293b' }}>Praxis-Tipp</h4>
        <p className="text-sm" style={{ color: '#000000' }}>{children}</p>
      </div>
    </div>
  </div>
);

/**
 * Warning/Important Box
 * Usage: Important notes, warnings
 */
export const WarningBox = ({ children }) => (
  <div className="bg-amber-900 bg-opacity-20 border-l-4 border-amber-500 rounded-r-lg p-4 my-6">
    <div className="flex items-start">
      <span className="text-xl mr-3">⚠️</span>
      <div>
        <h4 className="font-semibold" style={{ color: '#1e293b' }}>Wichtig</h4>
        <p className="text-sm" style={{ color: '#000000' }}>{children}</p>
      </div>
    </div>
  </div>
);

/**
 * Info Box
 * Usage: Additional information, explanations
 */
export const InfoBox = ({ title, children }) => (
  <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-6 my-6 border border-gray-600">
    <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>{title}</h4>
    <p style={{ color: '#000000' }}>{children}</p>
  </div>
);

/**
 * Example Box
 * Usage: Concrete examples
 */
export const ExampleBox = ({ children }) => (
  <div className="bg-purple-900 bg-opacity-20 border-l-4 border-purple-400 rounded-r-lg p-4 my-6">
    <div className="flex items-start">
      <span className="text-xl mr-3">📌</span>
      <div>
        <h4 className="font-semibold" style={{ color: '#1e293b' }}>Beispiel</h4>
        <p className="text-sm" style={{ color: '#000000' }}>{children}</p>
      </div>
    </div>
  </div>
);

// ============================================
// TABLES
// ============================================

/**
 * Standard Table
 * Usage: Comparisons, overviews
 */
export const Table = ({ headers, rows, className = '' }) => (
  <div className="overflow-x-auto my-6">
    <table className={`min-w-full border border-gray-600 ${className}`}>
      <thead className="bg-qcore-navy bg-opacity-30">
        <tr>
          {headers.map((header, i) => (
            <th key={i} className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody style={{ color: '#000000' }}>
        {rows.map((row, i) => (
          <tr key={i} className={i % 2 === 0 ? 'bg-qcore-navy bg-opacity-10' : ''}>
            {row.map((cell, j) => (
              <td key={j} className="px-4 py-2 border-b border-gray-600">
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
// HEADINGS
// ============================================

/**
 * Section Title (H2)
 * Usage: Main section headings
 */
export const SectionTitle = ({ number, children, id }) => (
  <h2 id={id} className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
    {number && `${number}. `}{children}
  </h2>
);

/**
 * Subsection Title (H3)
 * Usage: Subsection headings
 */
export const SubsectionTitle = ({ children }) => (
  <h3 className="text-xl font-semibold mt-8 mb-3" style={{ color: '#1e293b' }}>
    {children}
  </h3>
);

// ============================================
// CTA SECTION
// ============================================

/**
 * Call-to-Action Box at article end
 */
export const CTABox = ({ title, description, buttonText, buttonLink }) => (
  <div className="bg-qcore-navy bg-opacity-30 rounded-lg p-8 mt-12 text-center border border-gray-600">
    <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
      {title}
    </h3>
    <p className="mb-6" style={{ color: '#000000' }}>
      {description}
    </p>
    <Link 
      href={buttonLink} 
      className="inline-block bg-qcore-blue text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
    >
      {buttonText}
    </Link>
  </div>
);

// ============================================
// CONTENT BOXES
// ============================================

/**
 * Content Box
 * Usage: Highlighted content sections
 */
export const ContentBox = ({ title, children, className = '' }) => (
  <div className={`bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600 ${className}`}>
    {title && <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>{title}</h4>}
    <div style={{ color: '#000000' }}>{children}</div>
  </div>
);

/**
 * Success Box
 * Usage: Positive outcomes, goals achieved
 */
export const SuccessBox = ({ children, className = '' }) => (
  <div className={`bg-green-900 bg-opacity-20 rounded-lg p-4 text-center border border-green-700 ${className}`}>
    <strong style={{ color: '#1e293b' }}>{children}</strong>
  </div>
);
