import LevelBadge from './LevelBadge';
import ISO13485Article from './articles/ISO13485Article';
import GMPArticle from './articles/GMPArticle';
import WasIstQMArticle from './articles/WasIstQMArticle';
import ISO9001Article from './articles/ISO9001Article';
import PDCAArticle from './articles/PDCAArticle';

const QMWissenContent = ({ selectedArticle, categories, onSelectArticle }) => {
  // If no article is selected, show welcome view
  if (!selectedArticle) {
    return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4" style={{ color: '#1e293b' }}>QM-Wissen</h1>
        <p className="text-lg mb-8" style={{ color: '#000000' }}>
          Praktisches Know-how für Qualitätsmanagement. 
          Wählen Sie links eine Kategorie oder einen Artikel.
        </p>
        
        {/* Featured Articles Section */}
        <section className="mb-12">
          <h2 className="text-xl font-semibold mb-4 flex items-center" style={{ color: '#1e293b' }}>
            <span className="text-qcore-cyan mr-2">★</span>
            Beliebte Artikel
          </h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {/* Featured Card 1 - ISO 13485 */}
            <div 
              onClick={() => onSelectArticle && onSelectArticle('iso-13485')}
              className="bg-qcore-navy bg-opacity-50 border border-qcore-cyan 
                        rounded-lg p-5 hover:border-white transition-all cursor-pointer"
            >
              <span className="bg-qcore-cyan text-qcore-navy px-2 py-0.5 rounded text-xs font-bold">
                MEDTECH
              </span>
              <h3 className="text-lg font-bold text-white mt-2 mb-2">
                ISO 13485: QM für Medizinprodukte
              </h3>
              <p className="text-gray-400 text-sm">
                Alles über das QM-System für Medizinproduktehersteller: Aufbau, Anforderungen und Zertifizierung
              </p>
            </div>
            
            {/* Featured Card 2 - GMP */}
            <div 
              onClick={() => onSelectArticle && onSelectArticle('gmp')}
              className="bg-qcore-navy bg-opacity-50 border border-qcore-cyan 
                        rounded-lg p-5 hover:border-white transition-all cursor-pointer"
            >
              <span className="bg-qcore-cyan text-qcore-navy px-2 py-0.5 rounded text-xs font-bold">
                PHARMA
              </span>
              <h3 className="text-lg font-bold text-white mt-2 mb-2">
                GMP: Gute Herstellungspraxis
              </h3>
              <p className="text-gray-400 text-sm">
                Die 10 GMP-Prinzipien und was Pharmaunternehmen wissen müssen - von der Herstellungserlaubnis bis zur Inspektion
              </p>
            </div>
          </div>
        </section>
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
        <div className="bg-red-100 bg-opacity-80 border border-red-300 rounded-lg p-6">
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
      <div className="px-8 py-3 text-sm border-b bg-slate-200 bg-opacity-50" style={{ color: '#475569' }}>
        QM-Wissen › {categoryTitle} › {article.title}
      </div>

      <div className="p-8">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2" style={{ color: '#1e293b' }}>{article.title}</h1>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">⏱ {article.time} Lesezeit</div>
            <LevelBadge level={article.level} />
          </div>
        </div>

        {/* Article Content */}
        {selectedArticle === 'was-ist-qm' && <WasIstQMArticle />}
        {selectedArticle === 'iso-9001' && <ISO9001Article />}
        {selectedArticle === 'pdca' && <PDCAArticle />}
        {selectedArticle === 'iso-13485' && <ISO13485Article />}
        {selectedArticle === 'gmp' && <GMPArticle />}
        {selectedArticle !== 'was-ist-qm' && selectedArticle !== 'iso-9001' && selectedArticle !== 'pdca' && selectedArticle !== 'iso-13485' && selectedArticle !== 'gmp' && (
          /* Placeholder for article without content */
          <div className="bg-amber-100 bg-opacity-80 border border-amber-300 rounded-lg p-6 text-center">
            <p className="text-amber-800 font-medium flex items-center justify-center">
              <span className="mr-2">🚧</span> Dieser Artikel ist in Arbeit
            </p>
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
        )}
      </div>
    </div>
  );
};

export default QMWissenContent;
