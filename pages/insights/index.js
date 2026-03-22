import { insights } from '../../data/insights';

// /insights → redirect to latest article
export async function getStaticProps() {
  const latest = insights[0];
  return {
    redirect: {
      destination: `/insights/${latest.slug}`,
      permanent: false,
    },
  };
}

export default function InsightsIndex() {
  return null;
}
