import { useState } from 'react';

const QMWissenSidebar = ({ 
  categories, 
  selectedArticle, 
  onSelectArticle,
  expandedCategories,
  onToggleCategory 
}) => {
  return (
    <aside className="w-64 bg-slate-50 bg-opacity-95 border-r border-gray-200 h-screen sticky top-0 overflow-y-auto hidden md:block">
      {/* Header */}
      <div className="p-4 border-b border-gray-200">
        <h2 className="font-bold text-lg" style={{ color: '#1e293b' }}>
          QM-Wissen
        </h2>
        <p className="text-sm text-gray-500">Tutorials & Guides</p>
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
                className="w-full flex items-center justify-between p-2 rounded hover:bg-slate-100 cursor-pointer transition-colors"
              >
                <div className="flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  <span className="font-medium text-slate-700">{category.title}</span>
                </div>
                <span className="text-gray-400 text-sm">
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
                        className={`w-full text-left p-2 pl-4 text-sm transition-colors ${
                          isSelected
                            ? 'bg-blue-100 border-l-4 border-blue-500 text-blue-700 font-medium'
                            : 'hover:bg-blue-50 hover:text-blue-600 text-gray-700'
                        }`}
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
