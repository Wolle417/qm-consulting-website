import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QMWissenSidebar from '../components/QMWissenSidebar';
import QMWissenContent from '../components/QMWissenContent';
import { categories } from '../data/qm-articles';

export default function QMWissen() {
  const router = useRouter();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState(['grundlagen', 'methoden', 'branchen', 'validation']);

  // Read article from query parameter on initial load
  useEffect(() => {
    if (router.isReady && router.query.article) {
      setSelectedArticle(router.query.article);
    }
  }, [router.isReady, router.query.article]);

  // Update URL when article changes (optional, for shareable links)
  const handleSelectArticle = (articleId) => {
    setSelectedArticle(articleId);
    if (articleId) {
      router.push(`/qm-wissen?article=${articleId}`, undefined, { shallow: true });
    } else {
      router.push('/qm-wissen', undefined, { shallow: true });
    }
  };

  return (
    <div className="min-h-screen relative">
      <Head>
        <title>QM-Wissen | Fachartikel zu ISO 13485, CAPA, FMEA & mehr | QCore</title>
        <meta name="description" content="Praxisnahe QM-Fachartikel für MedTech & Pharma: ISO 13485, CAPA-Prozesse, FMEA, Audit-Vorbereitung, Validierung. Kostenlos von QCore Consulting." />
      </Head>
      <Navigation />
      
      {/* Main Layout with proper spacing */}
      <div className="flex min-h-screen pt-16 px-4 pb-8">
        {/* Sidebar */}
        <div className="mr-4">
          <QMWissenSidebar 
            categories={categories}
            selectedArticle={selectedArticle}
            onSelectArticle={handleSelectArticle}
            expandedCategories={expandedCategories}
            onToggleCategory={(catId) => {
              setExpandedCategories(prev => 
                prev.includes(catId) 
                  ? prev.filter(c => c !== catId)
                  : [...prev, catId]
              );
            }}
          />
        </div>
        
        {/* Content */}
        <main className="flex-1 bg-qcore-navy bg-opacity-30 backdrop-blur-sm rounded-lg">
          <QMWissenContent
            selectedArticle={selectedArticle}
            categories={categories}
            onSelectArticle={handleSelectArticle}
          />
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
