import { useState } from 'react';

const QMWissenSidebar = ({ 
  categories, 
  selectedArticle, 
  onSelectArticle,
  expandedCategories,
  onToggleCategory 
}) => {
  return (
    <aside className="w-64 bg-qcore-navy bg-opacity-30 backdrop-blur-sm rounded-lg h-fit sticky top-24 overflow-y-auto hidden md:block">
      {/* Header */}
      <div 
        onClick={() => onSelectArticle(null)}
        className="p-4 border-b border-gray-400 cursor-pointer hover:bg-slate-400 hover:bg-opacity-30 transition-colors"
      >
        <h2 className="font-bold text-lg hover:text-qcore-cyan transition-colors" style={{ color: '#1e293b' }}>
          QM-Wissen
        </h2>
        <p className="text-sm" style={{ color: '#475569' }}>Tutorials & Guides</p>
      </div>

      {/* Categories */}
      <nav className="p-2">
        {categories.map((category) => {
          const isExpanded = expandedCategories.includes(category.id);
          
          return (
            <div key={category.id} className="mb-2">
              {/* Category Header */}
              <button
                onClick={() => onToggleCategory(category.id)}
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
                    const isSelected = selectedArticle === article.id;
                    
                    return (
                      <button
                        key={article.id}
                        onClick={() => onSelectArticle(article.id)}
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
