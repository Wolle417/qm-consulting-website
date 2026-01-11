import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { categories as defaultCategories } from '../data/qm-articles';

const QMWissenSidebar = ({ 
  categories = null, 
  selectedArticle = null, 
  onSelectArticle = null,
  expandedCategories: externalExpanded = null,
  onToggleCategory = null,
  currentArticle = null 
}) => {
  const router = useRouter();
  
  // Use provided categories or default
  const cats = categories || defaultCategories;
  
  // Determine which article is selected (from prop or currentArticle)
  const activeArticle = selectedArticle || currentArticle;
  
  // Internal state for standalone usage
  const [internalExpanded, setInternalExpanded] = useState(['grundlagen', 'methoden', 'branchen', 'validation']);
  
  // Use external or internal expanded state
  const expanded = externalExpanded || internalExpanded;
  
  const handleToggleCategory = (catId) => {
    if (onToggleCategory) {
      onToggleCategory(catId);
    } else {
      setInternalExpanded(prev => 
        prev.includes(catId) 
          ? prev.filter(c => c !== catId)
          : [...prev, catId]
      );
    }
  };
  
  const handleSelectArticle = (articleId) => {
    if (onSelectArticle) {
      onSelectArticle(articleId);
    } else if (articleId) {
      // Find the article and navigate to its URL
      for (const cat of cats) {
        const article = cat.articles.find(a => a.id === articleId);
        if (article && article.url) {
          router.push(article.url);
          return;
        }
      }
    } else {
      router.push('/qm-wissen');
    }
  };

  return (
    <aside className="w-64 bg-qcore-navy bg-opacity-30 backdrop-blur-sm rounded-lg h-fit sticky top-24 overflow-y-auto hidden md:block">
      {/* Header */}
      <div 
        onClick={() => handleSelectArticle(null)}
        className="p-4 border-b border-gray-400 cursor-pointer hover:bg-slate-400 hover:bg-opacity-30 transition-colors"
      >
        <h2 className="font-bold text-lg hover:text-qcore-cyan transition-colors" style={{ color: '#1e293b' }}>
          QM-Wissen
        </h2>
        <p className="text-sm" style={{ color: '#475569' }}>Tutorials & Guides</p>
      </div>

      {/* Categories */}
      <nav className="p-2">
        {cats.map((category) => {
          const isExpanded = expanded.includes(category.id);
          
          return (
            <div key={category.id} className="mb-2">
              {/* Category Header */}
              <button
                onClick={() => handleToggleCategory(category.id)}
                className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-400 hover:bg-opacity-50 cursor-pointer transition-colors"
              >
                <div className="flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  <span className="font-medium" style={{ color: '#000000' }}>{category.title}</span>
                </div>
                <span className="text-gray-500 text-sm">
                  {isExpanded ? '▼' : '▶'}
                </span>
              </button>

              {/* Articles List */}
              {isExpanded && (
                <div className="ml-6 border-l border-gray-300">
                  {category.articles.map((article) => {
                    const isSelected = activeArticle === article.id;
                    
                    return (
                      <button
                        key={article.id}
                        onClick={() => handleSelectArticle(article.id)}
                        className={`w-full text-left p-2 pl-4 text-sm rounded transition-colors ${
                          isSelected
                            ? 'bg-blue-200 bg-opacity-50 border-l-4 border-blue-500 font-medium'
                            : 'hover:bg-slate-400 hover:bg-opacity-50'
                        }`}
                        style={{ color: isSelected ? '#1e40af' : '#000000' }}
                      >
                        {article.title}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
};

export default QMWissenSidebar;
