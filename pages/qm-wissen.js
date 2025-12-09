import { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import QMWissenSidebar from '../components/QMWissenSidebar';
import QMWissenContent from '../components/QMWissenContent';
import { categories } from '../data/qm-articles';

export default function QMWissen() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [expandedCategories, setExpandedCategories] = useState(['grundlagen']);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Main Layout */}
      <div className="flex-1 flex">
        {/* Sidebar */}
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
        
        {/* Content */}
        <div className="flex-1 bg-white bg-opacity-95">
          <QMWissenContent 
            selectedArticle={selectedArticle}
            categories={categories}
          />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
