import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import LandingCards from '../components/LandingCards';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

export default function Home() {
  const { locale } = useTranslation();
  const isDE = locale !== 'en';

  return (
    <>
      <Head>
        <title>{isDE
          ? 'QCore Consulting | QM-Beratung, Templates & Tools f\u00fcr MedTech & Pharma'
          : 'QCore Consulting | QM Consulting, Templates & Tools for MedTech & Pharma'}</title>
        <meta name="description" content={isDE
          ? 'QM-Beratung, audit-fertige Templates und kostenlose Tools f\u00fcr MedTech & Pharma. ISO 13485, FDA 21 CFR 820, EU MDR, GMP.'
          : 'QM consulting, audit-ready templates and free tools for MedTech & Pharma. ISO 13485, FDA 21 CFR 820, EU MDR, GMP.'} />
      </Head>

      <Navigation />

      {/* ================================================================
          HERO SECTION
          Big Cormorant "QCore" mark on the left, tagline with blue
          accent colour on "Consulting" + "hochregulierte Industrien"
          (Zeineb's feedback: mehr Kontrast, klarere Hierarchie).
          ================================================================ */}
      <section
        className="relative"
        style={{ minHeight: '62vh' }}
      >
        {/* QCore mark */}
        <div
          className="absolute pointer-events-none select-none"
          style={{ top: '20%', left: '8%', zIndex: 1 }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.1 }}
          >
            <span
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: 'clamp(4.5rem, 10vw, 8.5rem)',
                fontWeight: 500,
                color: '#000000',
                opacity: 0.82,
                lineHeight: 1.1,
                userSelect: 'none',
                display: 'block',
              }}
            >
              QCore
            </span>
            <span
              style={{
                fontFamily: "'Cormorant', serif",
                fontSize: 'clamp(0.7rem, 1.3vw, 1rem)',
                fontWeight: 500,
                letterSpacing: '0.22em',
                textTransform: 'uppercase',
                color: '#1e3a8a',
                opacity: 0.9,
                userSelect: 'none',
                display: 'block',
                marginTop: '0.5em',
                paddingLeft: '0.15em',
              }}
            >
              Consulting
            </span>
          </motion.div>
        </div>

        {/* Tagline — probeweise ausgeblendet, s. Chatverlauf.
            Falls wieder rein: einfach diesen Block unkommentieren und top-Wert anpassen. */}
        {false && (
          <div
            className="absolute pointer-events-none select-none"
            style={{ top: '78%', left: '8%', right: '8%', zIndex: 2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.6 }}
            >
              <p
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontWeight: 900,
                  fontSize: 'clamp(0.95rem, 1.9vw, 1.5rem)',
                  letterSpacing: '-0.01em',
                  wordSpacing: '0.5em',
                  textTransform: 'uppercase',
                  color: 'rgba(29, 78, 156, 0.5)',
                  lineHeight: 1.25,
                }}
              >
                {isDE
                  ? 'Qualit\u00e4tsmanagement f\u00fcr hochregulierte Industrien'
                  : 'Quality Management for highly regulated industries'}
              </p>
            </motion.div>
          </div>
        )}

      </section>

      {/* ================================================================
          LANDING CARDS
          Drei Glass-Container: Consulting | Templates | (free) Tools
          ================================================================ */}
      <LandingCards />

      <Footer />
    </>
  );
}
