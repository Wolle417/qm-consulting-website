import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';

/**
 * Farbtest-Seite fuer die Montserrat-Black-Tagline und -Card-Titel.
 * Jede Variante rendert die gleichen zwei Textzeilen in der gewaehlten
 * Farbe + Transparenz auf unserem echten Seiten-Hintergrund.
 *
 * Aufrufbar unter /farbtest im Dev-Server.
 */

const options = [
  // ===== Deine Favoriten =====
  { name: 'Deep Sapphire',             hex: '#0F52BA', opacity: 0.5,  note: 'FAVORIT', group: 'fav' },
  { name: 'Royal Blue (blue-600)',     hex: '#2563EB', opacity: 0.5,  note: 'FAVORIT', group: 'fav' },
  { name: 'Aktuell bei 0.65',          hex: '#1D4E9C', opacity: 0.65, note: 'FAVORIT', group: 'fav' },

  // ===== Umgebung Deep Sapphire (#0F52BA) =====
  { name: 'Deep Sapphire @ 0.55',      hex: '#0F52BA', opacity: 0.55, note: 'wie Favorit, etwas satter' },
  { name: 'Deep Sapphire @ 0.65',      hex: '#0F52BA', opacity: 0.65, note: 'wie Favorit, deutlich satter' },
  { name: 'Sapphire etwas dunkler',    hex: '#0A4396', opacity: 0.55, note: 'tiefer, weniger lebendig' },
  { name: 'Sapphire etwas heller',     hex: '#1E5EC8', opacity: 0.5,  note: 'lebendiger' },

  // ===== Umgebung Royal Blue (#2563EB) =====
  { name: 'Royal Blue @ 0.45',         hex: '#2563EB', opacity: 0.45, note: 'Favorit, etwas transparenter' },
  { name: 'Royal Blue @ 0.55',         hex: '#2563EB', opacity: 0.55, note: 'Favorit, etwas satter' },
  { name: 'Royal Blue dunkler',        hex: '#1D4ED8', opacity: 0.5,  note: 'Tailwind blue-700' },
  { name: 'Royal Blue heller',         hex: '#3B82F6', opacity: 0.5,  note: 'Tailwind blue-500' },

  // ===== Umgebung Aktuell (#1D4E9C) =====
  { name: 'Aktuell @ 0.5',             hex: '#1D4E9C', opacity: 0.5,  note: 'wie vorher auf Startseite' },
  { name: 'Aktuell @ 0.55',            hex: '#1D4E9C', opacity: 0.55, note: 'Mittelweg' },
  { name: 'Aktuell @ 0.7',             hex: '#1D4E9C', opacity: 0.7,  note: 'fast voll deckend' },

  // ===== Zwischentoene =====
  { name: 'Mix Sapphire/Royal',        hex: '#1856D3', opacity: 0.55, note: 'zwischen den beiden' },
  { name: 'Mix Sapphire/Aktuell',      hex: '#1750AD', opacity: 0.55, note: 'zwischen den beiden' },
  { name: 'Mix Royal/Aktuell',         hex: '#2059C4', opacity: 0.55, note: 'zwischen den beiden' },

  // ===== Weitere Benchmarks =====
  { name: 'Tailwind blue-800',         hex: '#1E40AF', opacity: 0.5,  note: 'Hue 224 - etwas tiefer' },
  { name: 'Mayo Clinic Navy',          hex: '#003DA5', opacity: 0.5,  note: 'klassisches Medizinblau' },
  { name: 'Navy tief',                 hex: '#0E215B', opacity: 0.5,  note: 'fast schwarz-blau' },
];

function toRgba(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

export default function Farbtest() {
  return (
    <>
      <Head>
        <title>Farbtest | QCore Consulting</title>
      </Head>
      <Navigation />

      <main className="pt-28 pb-20 px-6 lg:px-12">
        <div className="max-w-screen-xl mx-auto">
          <h1
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: '3rem',
              fontWeight: 600,
              color: '#0f172a',
              marginBottom: '0.5rem',
            }}
          >
            Farbtest
          </h1>
          <p style={{ color: '#475569', marginBottom: '2.5rem', fontSize: '1rem' }}>
            Alle Varianten zeigen denselben Text in Montserrat Black 900, uppercase,
            letter-spacing &minus;0.01em / 0, word-spacing 0.5em / 0.6em &mdash; auf dem echten
            Seiten-Hintergrund.
          </p>

          <div className="space-y-5">
            {options.map((opt, idx) => {
              const colorValue = toRgba(opt.hex, opt.opacity);
              return (
                <div
                  key={idx}
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: 'rgba(30, 58, 138, 0.04)',
                    border: '1px solid rgba(30, 58, 138, 0.1)',
                    backdropFilter: 'blur(3px)',
                  }}
                >
                  <div className="mb-4 flex items-baseline gap-3 flex-wrap">
                    <span
                      style={{
                        fontFamily: "'Cormorant', serif",
                        fontSize: '1.35rem',
                        fontWeight: 600,
                        color: '#0f172a',
                      }}
                    >
                      {opt.group === 'fav' ? '\u2605 ' : ''}{idx + 1}. {opt.name}
                    </span>
                    <code
                      style={{
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
                        fontSize: '0.8rem',
                        color: '#475569',
                        backgroundColor: 'rgba(30, 58, 138, 0.06)',
                        padding: '0.15rem 0.5rem',
                        borderRadius: '0.25rem',
                      }}
                    >
                      {opt.hex} @ {opt.opacity}
                    </code>
                    <span style={{ color: '#64748b', fontSize: '0.85rem' }}>{opt.note}</span>
                    {/* Solid swatch for hue reference */}
                    <span
                      title={opt.hex}
                      style={{
                        display: 'inline-block',
                        width: '1rem',
                        height: '1rem',
                        borderRadius: '0.25rem',
                        backgroundColor: opt.hex,
                        border: '1px solid rgba(0,0,0,0.1)',
                      }}
                    />
                  </div>

                  {/* Tagline sample */}
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 900,
                      fontSize: 'clamp(0.95rem, 1.9vw, 1.5rem)',
                      letterSpacing: '-0.01em',
                      wordSpacing: '0.5em',
                      textTransform: 'uppercase',
                      color: colorValue,
                      lineHeight: 1.25,
                      marginBottom: '1rem',
                    }}
                  >
                    {'Qualit\u00e4tsmanagement f\u00fcr hochregulierte Industrien'}
                  </div>

                  {/* Card-title sample */}
                  <div
                    style={{
                      fontFamily: "'Montserrat', sans-serif",
                      fontWeight: 900,
                      fontSize: '1.35rem',
                      letterSpacing: '0',
                      wordSpacing: '0.6em',
                      textTransform: 'uppercase',
                      color: colorValue,
                      lineHeight: 1.15,
                    }}
                  >
                    Consulting &middot; Templates &middot; (Free) Tools
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
