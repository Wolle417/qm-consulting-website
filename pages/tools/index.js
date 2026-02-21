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

  const cardStyle = {
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
            ? 'Kostenlose QM-Tools: FDA 483 Dashboard, Stichprobenrechner, NC-Triage. Normgerecht, audit-sicher, ohne Registrierung.'
            : 'Free QM tools: FDA 483 Dashboard, sample size calculator, NC triage. Standards-compliant, audit-ready, no registration.'}
        />
        <link rel="canonical" href={`https://qcore-consulting.de/${locale === 'en' ? 'en/' : ''}tools`} />
      </Head>

      <Navigation />

      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(135deg, #dbeafe 0%, #e0e7ff 25%, #f0fdfa 50%, #dbeafe 75%, #ede9fe 100%)',
        }} />
      </div>

      <main className="pt-24 pb-16 px-6 lg:px-16 xl:px-24">
        <div className="max-w-[1600px] mx-auto">

          {/* Hero */}
          <section className="mb-10">
            <h1
              className="text-4xl lg:text-5xl font-semibold mb-2"
              style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
            >
              {isDE ? 'Tools & Wissen' : 'Tools & Knowledge'}
            </h1>
            <p className="text-lg max-w-3xl" style={{ color: '#475569' }}>
              {isDE
                ? 'Kostenlose, normgerechte Werkzeuge für QM-Professionals. Kein Login, keine Registrierung.'
                : 'Free, standards-compliant tools for QM professionals. No login, no registration.'}
            </p>
          </section>

          {/* Live Tools Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5 mb-12">

            {/* FDA 483 Dashboard — Featured */}
            <Link
              href="/fda-483-dashboard"
              className="rounded-xl p-6 transition-all duration-300 hover:shadow-lg block md:col-span-2 xl:col-span-1"
              style={{
                ...cardStyle,
                borderColor: 'rgba(34, 197, 94, 0.25)',
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">📊</span>
                <div className="flex gap-2">
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: 'rgba(239, 68, 68, 0.1)', color: '#b91c1c', border: '1px solid rgba(239, 68, 68, 0.25)' }}
                  >
                    NEW
                  </span>
                  <span
                    className="text-xs px-2 py-0.5 rounded-full font-medium"
                    style={{ backgroundColor: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.25)' }}
                  >
                    Live
                  </span>
                </div>
              </div>
              <h2
                className="text-xl font-semibold mb-2"
                style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
              >
                FDA 483 Dashboard
              </h2>
              <p className="text-sm mb-3" style={{ color: '#475569' }}>
                {isDE
                  ? 'Top 10 FDA-Observations interaktiv analysieren. Branchenvergleich, Trends und Benchmarking für Ihre Audit-Vorbereitung.'
                  : 'Analyze top 10 FDA observations interactively. Industry comparison, trends, and benchmarking for your audit preparation.'}
              </p>
              <div className="flex flex-wrap gap-2">
                {['FDA', 'MedTech', 'Pharma', isDE ? 'Interaktiv' : 'Interactive'].map(tag => (
                  <span
                    key={tag}
                    className="text-xs px-2.5 py-0.5 rounded-full"
                    style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>

            {/* Tools from data/tools.js */}
            {liveTools.map(tool => {
              const status = toolStatusConfig[tool.status];
              return (
                <Link
                  key={tool.id}
                  href={tool.slug}
                  className="rounded-xl p-6 transition-all duration-300 hover:shadow-lg block"
                  style={{
                    ...cardStyle,
                    borderColor: 'rgba(34, 197, 94, 0.2)',
                  }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-3xl">{tool.icon}</span>
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
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
                    className="text-xl font-semibold mb-2"
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
                        className="text-xs px-2.5 py-0.5 rounded-full"
                        style={{ backgroundColor: 'rgba(30, 58, 138, 0.1)', color: '#1e3a8a' }}
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
            <section>
              <h2
                className="text-2xl font-semibold mb-5"
                style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
              >
                {isDE ? 'In Planung' : 'Planned'}
              </h2>
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
                {plannedTools.map(tool => {
                  const status = toolStatusConfig[tool.status];
                  return (
                    <div
                      key={tool.id}
                      className="rounded-xl p-6"
                      style={{ ...cardStyle, opacity: 0.65 }}
                    >
                      <div className="flex items-start justify-between mb-3">
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
                        className="text-lg font-semibold mb-1"
                        style={{ fontFamily: "'Cormorant', serif", color: '#0f172a' }}
                      >
                        {isDE ? tool.name : (tool.nameEn || tool.name)}
                      </h3>
                      <p className="text-sm" style={{ color: '#64748b' }}>
                        {isDE ? tool.description : tool.descriptionEn}
                      </p>
                    </div>
                  );
                })}
              </div>
            </section>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
}
