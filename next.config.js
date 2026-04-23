/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  i18n: {
    locales: ['de', 'en'],
    defaultLocale: 'de',
    localeDetection: false,
  },
  async redirects() {
    return [
      // /ueber-mich ist in die /kontakt-Seite integriert (Hero + Stationen).
      // 308 = permanent redirect (SEO-freundlich: alte Backlinks + Google-Indexierung
      // werden auf die neue kanonische URL umgeleitet).
      {
        source: '/ueber-mich',
        destination: '/kontakt',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
