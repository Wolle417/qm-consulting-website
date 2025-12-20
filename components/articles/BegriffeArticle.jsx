import React from 'react';
import Link from 'next/link';

export default function BegriffeArticle() {
  return (
    <article className="prose prose-lg max-w-none">
      <p className="text-gray-700 text-lg">
        Qualitätsmanagement hat seine eigene Sprache. Dieses Glossar erklärt die wichtigsten 
        Begriffe – von A wie Audit bis V wie Validierung.
      </p>

      <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
          <span>ℹ️</span>
          <span>Info</span>
        </div>
        <p className="text-gray-700 m-0">
          Die Definitionen orientieren sich an der ISO 9000:2015, der offiziellen Norm 
          für QM-Grundlagen und Begriffe.
        </p>
      </div>

      <div className="bg-slate-100 rounded-lg p-4 mb-8">
        <div className="text-sm font-medium text-gray-600 mb-2">Schnellnavigation</div>
        <div className="flex flex-wrap gap-2">
          {['A', 'C', 'D', 'F', 'K', 'N', 'P', 'Q', 'R', 'V', 'W'].map((letter) => (
            import React from 'react';
            import Link from 'next/link';

            export default function BegriffeArticle() {
              return (
                <article className="prose prose-lg max-w-none">
                  <p className="text-gray-700 text-lg">
                    Qualitätsmanagement hat seine eigene Sprache. Dieses Glossar erklärt die wichtigsten
                    Begriffe – von A wie Audit bis V wie Validierung.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 my-6">
                    <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
                      <span>ℹ️</span>
                      <span>Info</span>
                    </div>
                    <p className="text-gray-700 m-0">
                      Die Definitionen orientieren sich an der ISO 9000:2015, der offiziellen Norm
                      für QM-Grundlagen und Begriffe.
                    </p>
                  </div>

                  <div className="bg-slate-100 rounded-lg p-4 mb-8">
                    <div className="text-sm font-medium text-gray-600 mb-2">Schnellnavigation</div>
                    <div className="flex flex-wrap gap-2">
                      {['A', 'C', 'D', 'F', 'K', 'N', 'P', 'Q', 'R', 'V', 'W'].map((letter) => (
                        <a
                          key={letter}
                          href={`#${letter.toLowerCase()}`}
                          className="px-3 py-1 bg-white border border-gray-300 rounded hover:border-qcore-blue hover:text-qcore-blue transition-colors"
                        >
                          {letter}
                        </a>
                      ))}
                    </div>
                  </div>

                  <h2 id="a" className="text-2xl font-serif text-dark-navy mt-10 mb-4">A</h2>
                  <div className="space-y-4">
                    <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                      <div className="text-qcore-blue text-sm font-medium mb-2">Audit</div>
                      <p className="text-gray-200 m-0">
                        Systematischer, unabhängiger und dokumentierter Prozess zur Erlangung von
                        Nachweisen und deren objektiver Auswertung, um zu bestimmen, inwieweit
                        Kriterien erfüllt sind.
                      </p>
                    </div>
                  </div>

                  <h2 id="c" className="text-2xl font-serif text-dark-navy mt-10 mb-4">C</h2>
                  <div className="space-y-4">
                    <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                      <div className="text-qcore-blue text-sm font-medium mb-2">CAPA (Corrective and Preventive Action)</div>
                      <p className="text-gray-200 m-0">
                        Systematischer Prozess zur Beseitigung der Ursachen von Fehlern (Korrektur)
                        und zur Vermeidung potenzieller Fehler (Prävention).
                      </p>
                    </div>
                  </div>

                  <h2 id="d" className="text-2xl font-serif text-dark-navy mt-10 mb-4">D</h2>
                  <div className="space-y-4">
                    <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                      <div className="text-qcore-blue text-sm font-medium mb-2">Dokumentierte Information</div>
                      <p className="text-gray-200 m-0">
                        Information, die von einer Organisation gelenkt und aufrechterhalten werden muss.
                      </p>
                    </div>
                  </div>

                  <h2 id="v" className="text-2xl font-serif text-dark-navy mt-10 mb-4">V</h2>
                  <div className="space-y-4">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-slate-700/80">
                            <th className="text-left p-3 text-gray-200 font-medium">Begriff</th>
                            <th className="text-left p-3 text-gray-200 font-medium">Frage</th>
                            <th className="text-left p-3 text-gray-200 font-medium">Beispiel</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-slate-600/30 border-b border-slate-600/50">
                            <td className="p-3 text-gray-800 font-semibold">Verifizierung</td>
                            <td className="p-3 text-gray-700">"Bauen wir das Produkt richtig?"</td>
                            <td className="p-3 text-gray-700">Entspricht das Produkt den Spezifikationen?</td>
                          </tr>
                          <tr className="bg-slate-600/20">
                            <td className="p-3 text-gray-800 font-semibold">Validierung</td>
                            <td className="p-3 text-gray-700">"Bauen wir das richtige Produkt?"</td>
                            <td className="p-3 text-gray-700">Erfüllt das Produkt den Kundenbedarf?</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">Übersicht: Wichtige Begriffe</h2>
                  <p className="text-gray-700">Eine kompakte Zusammenfassung der wichtigsten QM-Begriffe.</p>

                  <div className="mt-12 pt-6 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <Link href="/qm-wissen/pdca" className="text-qcore-blue hover:underline flex items-center gap-2">
                        <span>←</span><span>Der PDCA-Zyklus</span>
                      </Link>
                      <Link href="/qm-wissen/fmea" className="text-qcore-blue hover:underline flex items-center gap-2">
                        <span>FMEA Grundlagen</span><span>→</span>
                      </Link>
                    </div>
                  </div>
                </article>
              );
            }
      <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 my-6">
        <div className="flex items-center gap-2 text-amber-700 font-medium mb-2">
          <span>💡</span>
          <span>Praxis-Tipp</span>
        </div>
        <p className="text-gray-700 m-0">
          Der Begriff "dokumentierte Information" ist bewusst technologie-neutral. 
          import React from 'react';
          import Link from 'next/link';

          export default function BegriffeArticle() {
            return (
              <article className="prose prose-lg max-w-none">
                <p className="text-gray-700 text-lg">
                  Qualitätsmanagement hat seine eigene Sprache. Dieses Glossar erklärt die wichtigsten
                  Begriffe – von A wie Audit bis V wie Validierung.
                </p>

                <div className="bg-blue-50 border-l-4 border-blue-400 rounded-lg p-4 my-6">
                  <div className="flex items-center gap-2 text-blue-700 font-medium mb-2">
                    <span>ℹ️</span>
                    <span>Info</span>
                  </div>
                  <p className="text-gray-700 m-0">
                    Die Definitionen orientieren sich an der ISO 9000:2015, der offiziellen Norm
                    für QM-Grundlagen und Begriffe.
                  </p>
                </div>

                <div className="bg-slate-100 rounded-lg p-4 mb-8">
                  <div className="text-sm font-medium text-gray-600 mb-2">Schnellnavigation</div>
                  <div className="flex flex-wrap gap-2">
                    {['A', 'C', 'D', 'F', 'K', 'N', 'P', 'Q', 'R', 'V', 'W'].map((letter) => (
                      <a
                        key={letter}
                        href={`#${letter.toLowerCase()}`}
                        className="px-3 py-1 bg-white border border-gray-300 rounded hover:border-qcore-blue hover:text-qcore-blue transition-colors"
                      >
                        {letter}
                      </a>
                    ))}
                  </div>
                </div>

                <h2 id="a" className="text-2xl font-serif text-dark-navy mt-10 mb-4">A</h2>
                <div className="space-y-4">
                  <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                    <div className="text-qcore-blue text-sm font-medium mb-2">Audit</div>
                    <p className="text-gray-200 m-0">
                      Systematischer, unabhängiger und dokumentierter Prozess zur Erlangung von
                      Nachweisen und deren objektiver Auswertung, um zu bestimmen, inwieweit
                      Kriterien erfüllt sind.
                    </p>
                  </div>
                </div>

                <h2 id="c" className="text-2xl font-serif text-dark-navy mt-10 mb-4">C</h2>
                <div className="space-y-4">
                  <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                    <div className="text-qcore-blue text-sm font-medium mb-2">CAPA (Corrective and Preventive Action)</div>
                    <p className="text-gray-200 m-0">
                      Systematischer Prozess zur Beseitigung der Ursachen von Fehlern (Korrektur)
                      und zur Vermeidung potenzieller Fehler (Prävention).
                    </p>
                  </div>
                </div>

                <h2 id="d" className="text-2xl font-serif text-dark-navy mt-10 mb-4">D</h2>
                <div className="space-y-4">
                  <div className="bg-slate-700/80 rounded-lg p-4 border-l-4 border-qcore-blue">
                    <div className="text-qcore-blue text-sm font-medium mb-2">Dokumentierte Information</div>
                    <p className="text-gray-200 m-0">
                      Information, die von einer Organisation gelenkt und aufrechterhalten werden muss.
                    </p>
                  </div>
                </div>

                <h2 id="v" className="text-2xl font-serif text-dark-navy mt-10 mb-4">V</h2>
                <div className="space-y-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="bg-slate-700/80">
                          <th className="text-left p-3 text-gray-200 font-medium">Begriff</th>
                          <th className="text-left p-3 text-gray-200 font-medium">Frage</th>
                          <th className="text-left p-3 text-gray-200 font-medium">Beispiel</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="bg-slate-600/30 border-b border-slate-600/50">
                          <td className="p-3 text-gray-800 font-semibold">Verifizierung</td>
                          <td className="p-3 text-gray-700">"Bauen wir das Produkt richtig?"</td>
                          <td className="p-3 text-gray-700">Entspricht das Produkt den Spezifikationen?</td>
                        </tr>
                        <tr className="bg-slate-600/20">
                          <td className="p-3 text-gray-800 font-semibold">Validierung</td>
                          <td className="p-3 text-gray-700">"Bauen wir das richtige Produkt?"</td>
                          <td className="p-3 text-gray-700">Erfüllt das Produkt den Kundenbedarf?</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <h2 className="text-2xl font-serif text-dark-navy mt-10 mb-4">Übersicht: Wichtige Begriffe</h2>
                <p className="text-gray-700">Eine kompakte Zusammenfassung der wichtigsten QM-Begriffe.</p>

                <div className="mt-12 pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center">
                    <Link href="/qm-wissen/pdca" className="text-qcore-blue hover:underline flex items-center gap-2">
                      <span>←</span><span>Der PDCA-Zyklus</span>
                    </Link>
                    <Link href="/qm-wissen/fmea" className="text-qcore-blue hover:underline flex items-center gap-2">
                      <span>FMEA Grundlagen</span><span>→</span>
                    </Link>
                  </div>
                </div>
              </article>
            );
          }
            Grad, in dem ein Satz inhärenter Merkmale eines Objekts Anforderungen erfüllt.
