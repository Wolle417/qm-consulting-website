import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';
import Head from 'next/head';

// ─── Design System Constants ───
const boxStyle = {
  backgroundColor: 'rgba(30, 58, 138, 0.06)',
  border: '1px solid rgba(30, 58, 138, 0.1)',
  backdropFilter: 'blur(3px)',
};

const glassCta = {
  backgroundColor: 'rgba(191, 219, 254, 0.35)',
  backdropFilter: 'blur(3px)',
  border: '1px solid rgba(191, 219, 254, 0.5)',
  color: '#1e3a8a',
};

export default function Kontakt() {
  const { t, locale } = useTranslation();
  const isDE = locale !== 'en';

  const meetingTopics = isDE
    ? ['Ihre aktuelle QM-Situation', 'Konkrete Herausforderungen & Ziele', 'Mögliche Lösungsansätze', 'Nächste Schritte & Aufwand']
    : ['Your current QM situation', 'Specific challenges & goals', 'Possible solutions', 'Next steps & effort'];

  const l = isDE
    ? {
        subtitle: 'Sprechen wir über Ihr Projekt',
        directContact: 'Direkter Kontakt',
        phone: 'Telefon',
        freeConsultation: 'Kostenloses Erstgespräch',
        consultationInfo: '30 Minuten, unverbindlich via Teams',
        whatWeDiscuss: 'Was wir besprechen',
        bookAppointment: 'Termin buchen',
        writeEmail: 'E-Mail schreiben',
        callNow: 'Anrufen',
        locationText: 'Vor-Ort & Remote deutschlandweit',
        aboutMe: 'Mehr über mich',
      }
    : {
        subtitle: "Let's talk about your project",
        directContact: 'Direct Contact',
        phone: 'Phone',
        freeConsultation: 'Free Consultation',
        consultationInfo: '30 minutes, no obligation via Teams',
        whatWeDiscuss: 'What we discuss',
        bookAppointment: 'Book Appointment',
        writeEmail: 'Write Email',
        callNow: 'Call',
        locationText: 'On-site & Remote across Germany',
        aboutMe: 'More about me',
      };

  return (
    <>
      <Head>
        <title>{t('contact.meta.title')}</title>
        <meta name="description" content={t('contact.meta.description')} />
      </Head>
      <Navigation />

      <main className="relative min-h-screen" style={{ zIndex: 2 }}>

        {/* Hero */}
        <section className="pt-24 pb-4">
          <div className="max-w-[90%] mx-auto px-8">
            <h1 className="text-4xl md:text-5xl mb-2" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a', fontWeight: 400 }}>
              {t('contact.title')}
            </h1>
            <p className="text-xl mb-4" style={{ color: '#475569' }}>{l.subtitle}</p>
          </div>
        </section>

        {/* Two Columns */}
        <section className="py-6">
          <div className="max-w-[90%] mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-6">

              {/* Left — Kontaktdaten */}
              <div className="p-8 rounded-xl flex flex-col transition-all duration-300 hover:shadow-lg" style={boxStyle}>
                <h2 className="text-2xl mb-6" style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}>
                  {l.directContact}
                </h2>

                <div className="space-y-5 flex-1">
                  {[
                    { label: t('contact.email'), value: 'kontakt@qcore-consulting.de', href: 'mailto:kontakt@qcore-consulting.de',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /> },
                    { label: l.phone, value: '+49 177 194 05 39', href: 'tel:+491771940539',
                      icon: <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /> },
                    { label: t('contact.location'), value: 'Herzogenaurach', sub: l.locationText,
                      icon: <><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></> },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.15)' }}>
                        <svg className="w-5 h-5" fill="none" stroke="#1e3a8a" strokeWidth="2" viewBox="0 0 24 24">{item.icon}</svg>
                      </div>
                      <div>
                        <h3 className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#64748b' }}>{item.label}</h3>
                        {item.href ? (
                          <a href={item.href} className="text-lg hover:underline" style={{ color: '#1e3a8a' }}>{item.value}</a>
                        ) : (
                          <p className="text-lg" style={{ color: '#334155' }}>
                            {item.value}{item.sub && <><br /><span className="text-base" style={{ color: '#64748b' }}>{item.sub}</span></>}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Link to Über mich */}
                <div className="mt-6 pt-4" style={{ borderTop: '1px solid rgba(30, 58, 138, 0.1)' }}>
                  <Link href="/ueber-mich" className="text-sm hover:underline" style={{ color: '#1e3a8a' }}>
                    {l.aboutMe} →
                  </Link>
                </div>
              </div>

              {/* Right — Erstgespräch */}
              <div className="p-8 rounded-xl flex flex-col transition-all duration-300 hover:shadow-lg" style={boxStyle}>
                <div className="flex gap-6 mb-6">
                  <img src="/images/profile_free.png" alt="Stefan Schönwälder"
                    className="w-24 h-24 rounded-full object-cover flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl mb-2" style={{ color: '#0f172a', fontFamily: "'Cormorant', serif", fontWeight: 600 }}>
                      {l.freeConsultation}
                    </h2>
                    <p style={{ color: '#475569' }}>{l.consultationInfo}</p>
                  </div>
                </div>

                <div className="mb-6 flex-1">
                  <h3 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: '#64748b' }}>{l.whatWeDiscuss}</h3>
                  <ul className="space-y-2">
                    {meetingTopics.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm" style={{ color: '#334155' }}>
                        <span className="w-5 h-5 rounded-full flex items-center justify-center text-xs"
                          style={{ backgroundColor: 'rgba(34, 197, 94, 0.15)', color: '#15803d' }}>✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 flex-wrap">
                  {[
                    { label: l.bookAppointment, href: 'https://outlook.office.com/bookwithme/user/8e639e840dd2445e8c515141ac028711@qcore-consulting.de/meetingtype/CtfqMrZkjUOXCKuGK2JP9w2?anonymous&ismsaljsauthenabled', external: true },
                    { label: l.writeEmail, href: 'mailto:kontakt@qcore-consulting.de?subject=Erstgespr%C3%A4ch%20QCore%20Consulting' },
                    { label: l.callNow, href: 'tel:+491771940539' },
                  ].map((btn, i) => (
                    <a key={i} href={btn.href} {...(btn.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="px-6 py-3 rounded-lg text-center font-semibold transition-all hover:scale-105" style={glassCta}>
                      {btn.label}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
