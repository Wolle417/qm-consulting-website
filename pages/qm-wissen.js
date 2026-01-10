import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QMWissenSidebar from '../components/QMWissenSidebar';
import QMWissenContent from '../components/QMWissenContent';
import { categories } from '../data/qm-articles';

export default function QMWissen() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState(['grundlagen', 'methoden', 'branchen', 'validation']);

  return (
    <div className="min-h-screen relative">
      <Navigation />
      
      {/* Main Layout with proper spacing */}
      <div className="flex min-h-screen pt-16 px-4 pb-8">
        {/* Sidebar */}
        <div className="mr-4">
          <QMWissenSidebar 
            categories={categories}
            selectedArticle={selectedArticle}
            onSelectArticle={setSelectedArticle}
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
            onSelectArticle={setSelectedArticle}
          />
        </main>
      </div>
      
      <Footer />
    </div>
  );
}
