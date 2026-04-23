import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useTranslation } from '../hooks/useTranslation';
import Head from 'next/head';

// ----- Design System -----
const boxStyle = {
  backgroundColor: 'rgba(30, 58, 138, 0.06)',
  border: '1px solid rgba(30, 58, 138, 0.1)',
  backdropFilter: 'blur(3px)',
};

const primaryCtaStyle = {
  backgroundColor: 'rgba(30, 58, 138, 0.15)',
  backdropFilter: 'blur(3px)',
  border: '1px solid rgba(30, 58, 138, 0.3)',
  color: '#1e3a8a',
};

// Icons
const IconCalendar = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);
const IconMail = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconPhone = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const IconLinkedIn = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);
const IconPin = () => (
  <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export default function Kontakt() {
  const { t, locale } = useTranslation();
  const isDE = locale !== 'en';
  const stations = t('about.stations');

  const l = isDE
    ? {
        pitch: '18 Jahre QM-Erfahrung in MedTech, Pharma & Halbleitertechnik. Schlanke Prozesse, die funktionieren — ohne Bürokratie-Monster.',
        consultationTitle: 'Kostenloses 30-Minuten-Erstgespräch',
        consultationSubtitle: 'Unverbindlich, via Teams',
        topics: ['QM-Situation', 'Herausforderungen & Ziele', 'Lösungsansätze', 'Nächste Schritte'],
        bookBtn: 'Termin buchen',
        location: 'Herzogenaurach · Remote deutschlandweit',
        linkedinLabel: 'LinkedIn-Profil',
        stationsTitle: 'Werdegang',
      }
    : {
        pitch: '18 years of QM experience in MedTech, pharma & semiconductor. Lean processes that work — no bureaucratic monsters.',
        consultationTitle: 'Free 30-Minute Consultation',
        consultationSubtitle: 'No obligation, via Teams',
        topics: ['Your QM situation', 'Challenges & goals', 'Possible solutions', 'Next steps'],
        bookBtn: 'Book Appointment',
        location: 'Herzogenaurach · Remote across Germany',
        linkedinLabel: 'LinkedIn profile',
        stationsTitle: 'Career',
      };

  return (
    <>
      <Head>
        <title>{t('contact.meta.title')}</title>
        <meta name="description" content={t('contact.meta.description')} />
      </Head>
      <Navigation />

      <main className="relative min-h-screen" style={{ zIndex: 2 }}>

        {/* ============================================================
            HERO — 2 Spalten:
              Links: Text (Name, Tagline, Pitch) + größeres Foto rechts daneben
              Rechts: Kontakt-Card mit sichtbarer E-Mail/Tel/LinkedIn,
                      Termin-Button verankert am Container-Boden.
            ============================================================ */}
        <section className="pt-24 pb-8">
          <div className="max-w-[90%] mx-auto px-8">

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-stretch">

              {/* LINKS 2/3 — Name > Hero > CTA-Card, alles gestapelt */}
              <div className="md:col-span-8">

                {/* Name + Hero */}
                <div className="mb-8">
                  <h1
                    className="text-4xl md:text-5xl lg:text-6xl mb-2 leading-tight"
                    style={{ fontFamily: "'Cormorant', serif", color: '#1e293b', fontWeight: 600 }}
                  >
                    Stefan Schönwälder
                  </h1>
                  <p
                    className="text-xl md:text-2xl mb-4"
                    style={{ color: '#475569', fontFamily: "'Cormorant', serif" }}
                  >
                    {t('about.tagline')}
                  </p>
                  <p className="text-base md:text-lg leading-relaxed" style={{ color: '#334155' }}>
                    {l.pitch}
                  </p>
                </div>

                {/* CTA-Card: interner 2-Spalten-Sub-Grid + Button am Ende */}
                <div className="p-6 md:p-7 rounded-xl" style={boxStyle}>

                  {/* Sub-Grid: links Themen, rechts Kontakt + Button */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                    {/* Sub-Spalte links: Kostenloses … Erstgespräch + Themen */}
                    <div>
                      <h2
                        className="text-2xl mb-1"
                        style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}
                      >
                        {l.consultationTitle}
                      </h2>
                      <p className="text-sm mb-4" style={{ color: '#64748b' }}>
                        {l.consultationSubtitle}
                      </p>
                      <ul className="space-y-2">
                        {l.topics.map((topic, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-3 text-sm"
                            style={{ color: '#334155' }}
                          >
                            <span
                              className="w-5 h-5 rounded-full flex items-center justify-center text-xs flex-shrink-0"
                              style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#15803d' }}
                            >
                              {'\u2713'}
                            </span>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Sub-Spalte rechts: Kontaktdaten + Termin-Button darunter */}
                    <div>
                      <div className="space-y-2.5 mb-4">
                        <a
                          href="mailto:kontakt@qcore-consulting.de?subject=Erstgespr%C3%A4ch%20QCore%20Consulting"
                          className="flex items-center gap-3 text-sm hover:underline"
                          style={{ color: '#1e3a8a' }}
                        >
                          <IconMail />
                          <span>kontakt@qcore-consulting.de</span>
                        </a>
                        <a
                          href="tel:+491771940539"
                          className="flex items-center gap-3 text-sm hover:underline"
                          style={{ color: '#1e3a8a' }}
                        >
                          <IconPhone />
                          <span>+49 177 194 05 39</span>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/stefan-sch%C3%B6nw%C3%A4lder"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-3 text-sm hover:underline"
                          style={{ color: '#1e3a8a' }}
                        >
                          <IconLinkedIn />
                          <span>{l.linkedinLabel}</span>
                        </a>
                        <div
                          className="flex items-center gap-3 text-sm"
                          style={{ color: '#64748b' }}
                        >
                          <IconPin />
                          <span>{l.location}</span>
                        </div>
                      </div>

                      {/* Termin-Button — nur in der rechten Sub-Spalte, kompakter */}
                      <a
                        href="https://outlook.office.com/bookwithme/user/8e639e840dd2445e8c515141ac028711@qcore-consulting.de/meetingtype/CtfqMrZkjUOXCKuGK2JP9w2?anonymous&ismsaljsauthenabled"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-[1.02]"
                        style={primaryCtaStyle}
                      >
                        <IconCalendar />
                        <span>{l.bookBtn}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* RECHTS 1/3 — Profilbild, Unterkante bündig mit CTA-Box */}
              <div className="md:col-span-4 flex justify-center md:justify-start">
                <img
                  src="/images/profile_free.png"
                  alt="Stefan Schönwälder"
                  className="w-full h-full max-w-[32rem] object-cover"
                  style={{ objectPosition: 'center 20%' }}
                />
              </div>

            </div>
          </div>
        </section>

        {/* ============================================================
            WERDEGANG — 4-spaltiger Strip, unten mit stilvollem Abstand
            (pb-16 wie auf der Startseite)
            ============================================================ */}
        <section className="pt-4 pb-16">
          <div className="max-w-[90%] mx-auto px-8">
            <h2
              className="text-2xl md:text-3xl mb-4"
              style={{ fontFamily: "'Cormorant', serif", color: '#0f172a', fontWeight: 600 }}
            >
              {l.stationsTitle}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {stations.map((station, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg transition-all duration-300 hover:shadow-md"
                  style={boxStyle}
                >
                  <span
                    className="inline-block px-2 py-0.5 rounded text-xs font-mono mb-2"
                    style={{ backgroundColor: 'rgba(30, 58, 138, 0.2)', color: '#1e3a8a' }}
                  >
                    {station.period}
                  </span>
                  <h3
                    className="text-lg font-semibold leading-tight mb-1"
                    style={{ color: '#1e293b', fontFamily: "'Cormorant', serif" }}
                  >
                    {station.company}
                  </h3>
                  <p className="text-sm mb-2" style={{ color: '#475569' }}>
                    {station.role}
                  </p>
                  <ul className="space-y-1">
                    {station.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start text-xs leading-snug"
                        style={{ color: '#334155' }}
                      >
                        <span className="w-1.5 h-1.5 bg-qcore-blue rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
