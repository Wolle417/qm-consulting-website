import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { tools, toolStatusConfig } from '../../data/tools';

export default function ToolsHub() {
  const { locale } = useRouter();
  const isDE = locale !== 'en';

  const liveTools = tools.filter(t => t.status === 'live');
  const plannedTools = tools.filter(t => t.status === 'planned');

  const boxStyle = {
    backgroundColor: 'rgba(30, 58, 138, 0.06)',
    border: '1px solid rgba(30, 58, 138, 0.1)',
    backdropFilter: 'blur(3px)',
  };

  return (
    <>
      <Head>
        <title>{isDE ? 'Kostenlose QM-Tools | QCore Consulting' : 'Free QM Tools | QCore Consulting'}</title>
        <meta
          name="description"
          content={isDE
            ? 'Kostenlose QM-Tools für MedTech & Pharma: Stichprobenrechner (AQL/C/R), NC-Triage und mehr. Normgerecht, audit-sicher, ohne Registrierung.'
            : 'Free QM tools for MedTech & Pharma: Sample size calculator (AQL/C/R), NC triage and more. Standards-compliant, audit-ready, no registration.'}
        />
        <link rel="canonical" href={`https://qcore-consulting.de/${locale === 'en' ? 'en/' : ''}tools`} />
      </Head>

      <Navigation />

      <main className="relative min-h-screen">
        <section className="relative pt-28 pb-16">
          <div className="relative z-10 max-w-5xl mx-auto px-6">
            {/* Hero */}
            <div className="mb-12">
              <h1
                className="text-4xl lg:text-5xl font-semibold mb-3"
                style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
              >
                {isDE ? 'QM-Tools' : 'QM Tools'}
              </h1>
              <p className="text-lg max-w-2xl" style={{ color: '#475569' }}>
                {isDE
                  ? 'Kostenlose, normgerechte Werkzeuge für QM-Professionals in MedTech & Pharma. Kein Login, keine Registrierung.'
                  : 'Free, standards-compliant tools for QM professionals in MedTech & Pharma. No login, no registration.'}
              </p>
            </div>

            {/* Live Tools */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
              {liveTools.map(tool => {
                const status = toolStatusConfig[tool.status];
                return (
                  <Link
                    key={tool.id}
                    href={tool.slug}
                    className="rounded-xl p-6 transition-all hover:scale-[1.02] block"
                    style={{
                      ...boxStyle,
                      borderColor: 'rgba(34, 197, 94, 0.2)',
                    }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-3xl">{tool.icon}</span>
                      <span
                        className="text-xs px-2 py-1 rounded-full font-medium"
                        style={{
                          backgroundColor: status.bgColor,
                          color: status.color,
                          border: `1px solid ${status.borderColor}`,
                        }}
                      >
                        {isDE ? status.label : status.labelEn}
                      </span>
                    </div>
                    <h2
                      className="text-xl font-semibold mb-1"
                      style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                    >
                      {isDE ? tool.name : (tool.nameEn || tool.name)}
                    </h2>
                    <p className="text-sm mb-3" style={{ color: '#475569' }}>
                      {isDE ? tool.description : tool.descriptionEn}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {tool.industries.map(ind => (
                        <span
                          key={ind}
                          className="text-xs px-2 py-0.5 rounded"
                          style={{ backgroundColor: 'rgba(30, 58, 138, 0.08)', color: '#1e3a8a' }}
                        >
                          {ind === 'medtech' ? 'MedTech' : 'Pharma'}
                        </span>
                      ))}
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Planned Tools */}
            {plannedTools.length > 0 && (
              <div>
                <h2
                  className="text-2xl font-semibold mb-6"
                  style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                >
                  {isDE ? 'In Planung' : 'Planned'}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {plannedTools.map(tool => {
                    const status = toolStatusConfig[tool.status];
                    return (
                      <div
                        key={tool.id}
                        className="rounded-xl p-5"
                        style={{ ...boxStyle, opacity: 0.7 }}
                      >
                        <div className="flex items-start justify-between mb-2">
                          <span className="text-2xl">{tool.icon}</span>
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: status.bgColor,
                              color: status.color,
                              border: `1px solid ${status.borderColor}`,
                            }}
                          >
                            {isDE ? status.label : status.labelEn}
                          </span>
                        </div>
                        <h3
                          className="text-base font-semibold mb-1"
                          style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                        >
                          {isDE ? tool.name : (tool.nameEn || tool.name)}
                        </h3>
                        <p className="text-xs" style={{ color: '#64748b' }}>
                          {isDE ? tool.description : tool.descriptionEn}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* CTA */}
            <div className="mt-16 rounded-xl p-8 text-center" style={boxStyle}>
              <p className="text-lg mb-2" style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}>
                {isDE ? 'Fehlt ein Tool?' : 'Missing a tool?'}
              </p>
              <p className="text-sm mb-4" style={{ color: '#475569' }}>
                {isDE
                  ? 'Schreiben Sie mir, welches QM-Werkzeug Sie sich wünschen.'
                  : 'Let me know which QM tool you need.'}
              </p>
              <Link
                href="/kontakt"
                className="inline-block px-6 py-3 rounded-lg font-semibold transition-all hover:scale-[1.02] text-sm"
                style={{
                  backgroundColor: 'rgba(191, 219, 254, 0.35)',
                  backdropFilter: 'blur(3px)',
                  border: '1px solid rgba(191, 219, 254, 0.5)',
                  color: '#1e3a8a',
                }}
              >
                {isDE ? 'Tool vorschlagen' : 'Suggest a tool'}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
