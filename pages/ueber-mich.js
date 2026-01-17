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
                  className="bg-qcore-navy bg-opacity-30 hover:bg-opacity-45 transition-all duration-300 backdrop-blur-[3px] p-5 rounded-lg cursor-default"
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
