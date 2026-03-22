import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { insights } from '../../data/insights';

// /insights → client-side redirect to latest article
export default function InsightsIndex() {
  const router = useRouter();
  useEffect(() => {
    if (insights.length > 0) {
      router.replace(`/insights/${insights[0].slug}`);
    }
  }, []);
  return null;
}
