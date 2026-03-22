import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useTranslation } from '../hooks/useTranslation';

export default function Home() {
  const { t, locale } = useTranslation();
  const isDE = locale !== 'en';

  return (
    <>
      <Head>
        <title>{isDE
          ? 'QCore Consulting | QM-Beratung, Templates & Tools für MedTech & Pharma'
          : 'QCore Consulting | QM Consulting, Templates & Tools for MedTech & Pharma'}</title>
        <meta name="description" content={isDE
          ? 'QM-Beratung, audit-fertige Templates und kostenlose Tools für MedTech & Pharma. ISO 13485, FDA 21 CFR 820, EU MDR, GMP.'
          : 'QM consulting, audit-ready templates and free tools for MedTech & Pharma. ISO 13485, FDA 21 CFR 820, EU MDR, GMP.'} />
      </Head>

      <Navigation />

      {/* ─── QCORE WATERMARK + TAGLINE — same left anchor ─── */}
      <div
        className="fixed pointer-events-none select-none"
        style={{ top: '18%', left: '8%', zIndex: 1 }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.1 }}
        >
          <span
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: 'clamp(5.5rem, 13vw, 11rem)',
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
              fontSize: 'clamp(0.6rem, 1.2vw, 0.9rem)',
              fontWeight: 400,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#000000',
              opacity: 0.55,
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

      {/* ─── TAGLINE — same left as QCore, middle of lower half ─── */}
      <div
        className="fixed pointer-events-none select-none"
        style={{ top: '65%', left: '8%', zIndex: 2 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0, delay: 0.6 }}
        >
          <p
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              fontWeight: 400,
              color: '#000000',
              opacity: 0.45,
              letterSpacing: '0.04em',
              lineHeight: 1.4,
            }}
          >
            {isDE
              ? 'Qualitätsmanagement für hochregulierte Industrien'
              : 'Quality Management for highly regulated industries'}
          </p>
        </motion.div>
      </div>

      <Footer />
    </>
  );
}
