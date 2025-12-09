import LevelBadge from './LevelBadge';

const QMWissenContent = ({ selectedArticle, categories }) => {
  // If no article is selected, show welcome view
  if (!selectedArticle) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">QM-Wissen</h1>
        <p className="text-lg text-slate-600 mb-8">
          Praktisches Know-how für Qualitätsmanagement. 
          Wählen Sie links eine Kategorie oder einen Artikel.
        </p>
        
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
          <h3 className="font-semibold text-amber-800 mb-2">🚧 In Entwicklung</h3>
          <p className="text-amber-700">
            Diese Wissensdatenbank wird kontinuierlich erweitert. 
            Die ersten Artikel erscheinen in Kürze.
          </p>
          <p className="text-amber-600 text-sm mt-4">
            Interesse an einem bestimmten Thema? Schreiben Sie mir:
            <a href="mailto:kontakt@qcore-consulting.de" className="text-blue-600 hover:underline ml-1">
              kontakt@qcore-consulting.de
            </a>
          </p>
        </div>
      </div>
    );
  }

  // Find the selected article
  let article = null;
  let categoryTitle = '';
  
  for (const category of categories) {
    const foundArticle = category.articles.find(a => a.id === selectedArticle);
    if (foundArticle) {
      article = foundArticle;
      categoryTitle = category.title;
      break;
    }
  }

  // If article not found, show error
  if (!article) {
    return (
      <div className="p-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="font-semibold text-red-800 mb-2">Artikel nicht gefunden</h3>
          <p className="text-red-700">
            Der gewählte Artikel konnte nicht geladen werden.
          </p>
        </div>
      </div>
    );
  }

  // Show article view
  return (
    <div className="flex-1 overflow-y-auto">
      {/* Breadcrumb */}
      <div className="px-8 py-3 text-sm text-gray-500 border-b bg-slate-50">
        QM-Wissen › {categoryTitle} › {article.title}
      </div>

      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold text-slate-800 mb-2">{article.title}</h1>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">⏱ {article.time} Lesezeit</div>
            <LevelBadge level={article.level} />
          </div>
        </div>

        {/* Placeholder for article without content */}
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-6 text-center">
          <p className="text-amber-800 font-medium">🚧 Dieser Artikel ist in Arbeit</p>
          <p className="text-amber-700 text-sm mt-2">
            Der Inhalt wird in Kürze veröffentlicht.
          </p>
          <p className="text-amber-600 text-sm mt-4">
            Interesse an diesem Thema? 
            <a href="mailto:kontakt@qcore-consulting.de" className="text-blue-600 hover:underline ml-1">
              kontakt@qcore-consulting.de
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default QMWissenContent;
