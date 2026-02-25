import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useTranslation } from '../hooks/useTranslation';
import Head from 'next/head';

export default function UeberMich() {
  const { t } = useTranslation();
  const stations = t('about.stations');

  return (
    <>
      <Head>
        <title>{t('about.meta.title')}</title>
        <meta name="description" content={t('about.meta.description')} />
      </Head>
      <Navigation />
      <main className="relative min-h-screen">
        {/* Hero Section with Photo and Name */}
        <section className="relative pt-24 pb-0">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="flex flex-col md:flex-row items-center gap-8 mb-2">
              {/* Name, Tagline and Profile Text - links */}
              <div className="text-center md:text-left w-1/2">
                <h1 
                  className="text-5xl font-bold mb-2"
                  style={{
                    fontFamily: "'Cormorant', serif",
                    color: '#1e293b',
                  }}
                >
                  Stefan Schönwälder
                </h1>
                <p className="text-2xl mb-4" style={{ color: '#475569' }}>
                  {t('about.tagline')}
                </p>
                <p className="text-lg" style={{ color: '#334155' }}>
                  {t('about.intro1')}
                </p>
                <p className="text-lg mt-2" style={{ color: '#334155' }}>
                  {t('about.intro2')}
                </p>
                <p className="text-lg mt-2" style={{ color: '#334155' }}>
                  {t('about.intro3')}
                </p>
                <a
                  href="https://www.linkedin.com/in/stefan-sch%C3%B6nw%C3%A4lder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-md"
                  style={{
                    backgroundColor: 'rgba(30, 58, 138, 0.08)',
                    border: '1px solid rgba(30, 58, 138, 0.15)',
                    color: '#1e3a8a',
                  }}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                  LinkedIn
                </a>
              </div>

              {/* Photo - freigestellt, zentriert über rechte Spalte */}
              <div className="flex-shrink-0 w-1/2 flex justify-center">
                <img 
                  src="/images/profile_free.png"
                  alt="Stefan Schönwälder"
                  className="w-[22rem] h-[22rem] object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Berufliche Stationen */}
        <section className="relative py-2">
          <div className="relative z-10 max-w-[90%] mx-auto px-8">
            <div className="grid md:grid-cols-2 gap-3">
              {stations.map((station, index) => (
                <div 
                  key={index}
                  className="transition-all duration-300 p-5 rounded-lg cursor-default hover:shadow-lg"
                  style={{
                    backgroundColor: 'rgba(30, 58, 138, 0.06)',
                    border: '1px solid rgba(30, 58, 138, 0.1)',
                    backdropFilter: 'blur(3px)',
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span 
                      className="px-3 py-1 rounded text-sm font-mono flex-shrink-0"
                      style={{ backgroundColor: 'rgba(30, 58, 138, 0.2)', color: '#1e3a8a' }}
                    >
                      {station.period}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold" style={{ color: '#1e293b' }}>
                        {station.company}
                      </h3>
                      <p className="text-lg mb-2" style={{ color: '#475569' }}>
                        {station.role}
                      </p>
                      <ul className="space-y-1">
                        {station.items.map((item, i) => (
                          <li key={i} className="flex items-start text-base" style={{ color: '#334155' }}>
                            <span className="w-2 h-2 bg-qcore-blue rounded-full mr-3 mt-2 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
