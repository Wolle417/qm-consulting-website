# Cline-Prompt: GMP Artikel in QM-Wissen einbauen

## AUFGABE

Füge den Artikel "GMP Grundlagen" in die QM-Wissen Seite ein. Wenn der Nutzer in der Sidebar auf "GMP (Pharma)" klickt, soll der vollständige Artikel angezeigt werden.

## DATEIEN

1. NEU: `components/articles/GMPArticle.jsx` - Der Artikel
2. ÄNDERN: `components/QMWissenContent.jsx` - Artikel einbinden

---

## ARTIKEL-KOMPONENTE

Erstelle `components/articles/GMPArticle.jsx`:

```jsx
import React from 'react';

const TipBox = ({ children }) => (
  <div className="bg-blue-900 bg-opacity-30 border-l-4 border-blue-400 rounded-r-lg p-4 my-6">
    <div className="flex items-start">
      <span className="text-xl mr-3">💡</span>
      <div>
        <h4 className="font-semibold" style={{ color: '#1e293b' }}>Praxis-Tipp</h4>
        <p className="text-sm" style={{ color: '#000000' }}>{children}</p>
      </div>
    </div>
  </div>
);

const WarningBox = ({ children }) => (
  <div className="bg-amber-900 bg-opacity-20 border-l-4 border-amber-500 rounded-r-lg p-4 my-6">
    <div className="flex items-start">
      <span className="text-xl mr-3">⚠️</span>
      <div>
        <h4 className="font-semibold" style={{ color: '#1e293b' }}>Wichtig</h4>
        <p className="text-sm" style={{ color: '#000000' }}>{children}</p>
      </div>
    </div>
  </div>
);

const InfoBox = ({ title, children }) => (
  <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-6 my-6 border border-gray-600">
    <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>{title}</h4>
    <p style={{ color: '#000000' }}>{children}</p>
  </div>
);

export default function GMPArticle() {
  return (
    <article className="prose max-w-none">
      
      {/* Kapitel 1 */}
      <h2 id="kapitel-1" className="text-2xl font-semibold mt-8 mb-4" style={{ color: '#1e293b' }}>
        1. Was ist GMP?
      </h2>
      
      <p style={{ color: '#000000' }}>
        GMP steht für <strong>Good Manufacturing Practice</strong> (Gute Herstellungspraxis) und 
        bezeichnet Richtlinien zur Qualitätssicherung bei der Herstellung von Arzneimitteln, 
        Wirkstoffen und anderen regulierten Produkten.
      </p>
      
      <InfoBox title="GMP - Definition">
        Good Manufacturing Practice ist ein System von Richtlinien, das sicherstellt, dass 
        Produkte konstant nach Qualitätsstandards hergestellt und kontrolliert werden. 
        Ziel: Sichere, wirksame und unbedenkliche Arzneimittel.
      </InfoBox>
      
      <p style={{ color: '#000000' }}>
        Im Gegensatz zu ISO-Normen ist GMP <strong>gesetzlich verankert</strong>. In Deutschland 
        gilt die Arzneimittel- und Wirkstoffherstellungsverordnung (AMWHV), die sich auf den 
        EU-GMP-Leitfaden bezieht. Wer Arzneimittel herstellt, MUSS GMP einhalten - es gibt 
        keine freiwillige Zertifizierung.
      </p>
      
      <TipBox>
        GMP ist keine Empfehlung, sondern Pflicht. Ohne GMP-Konformität keine 
        Herstellungserlaubnis - so einfach ist das.
      </TipBox>

      {/* Kapitel 2 */}
      <h2 id="kapitel-2" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        2. Geschichte: Warum gibt es GMP?
      </h2>
      
      <p style={{ color: '#000000' }}>
        GMP entstand als Reaktion auf Arzneimittelskandale:
      </p>
      
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Jahr</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Ereignis</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">1937</td>
              <td className="px-4 py-2 border-b border-gray-600">Sulfanilamid-Katastrophe (USA) - 107 Tote durch giftiges Lösungsmittel</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">1961</td>
              <td className="px-4 py-2 border-b border-gray-600">Contergan-Skandal (DE) - Tausende Missbildungen bei Neugeborenen</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">1962</td>
              <td className="px-4 py-2 border-b border-gray-600">WHO veröffentlicht erste GMP-Guidelines</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">1978</td>
              <td className="px-4 py-2 border-b border-gray-600">FDA publiziert cGMP Guide - erste gesetzlich verankerte GMP-Regeln</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">1978</td>
              <td className="px-4 py-2 border-b border-gray-600">Deutsches Arzneimittelgesetz (AMG) als Folge von Contergan</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">1989</td>
              <td className="px-4 py-2 border-b border-gray-600">EU-GMP-Leitfaden erscheint</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <WarningBox>
        GMP ist das direkte Ergebnis von Tragödien. Jede Abkürzung, jede "Vereinfachung" 
        kann Menschenleben kosten.
      </WarningBox>

      {/* Kapitel 3 */}
      <h2 id="kapitel-3" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        3. Für wen gilt GMP?
      </h2>
      
      <p style={{ color: '#000000' }}>
        GMP gilt für alle, die an der Herstellung von Arzneimitteln beteiligt sind:
      </p>
      
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Bereich</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Beispiele</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Regelwerk</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Pharma (Human)</td>
              <td className="px-4 py-2 border-b border-gray-600">Tabletten, Injektionen, Salben</td>
              <td className="px-4 py-2 border-b border-gray-600">EU-GMP Teil I</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Pharma (Tierarzneimittel)</td>
              <td className="px-4 py-2 border-b border-gray-600">Veterinärpräparate</td>
              <td className="px-4 py-2 border-b border-gray-600">EU-GMP Teil I</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Wirkstoffe (API)</td>
              <td className="px-4 py-2 border-b border-gray-600">Pharmazeutische Wirkstoffe</td>
              <td className="px-4 py-2 border-b border-gray-600">EU-GMP Teil II</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Prüfpräparate</td>
              <td className="px-4 py-2 border-b border-gray-600">Klinische Studien</td>
              <td className="px-4 py-2 border-b border-gray-600">Anhang 13</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Sterilprodukte</td>
              <td className="px-4 py-2 border-b border-gray-600">Infusionen, Augentropfen</td>
              <td className="px-4 py-2 border-b border-gray-600">Anhang 1</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p style={{ color: '#000000' }}>
        Auch <strong>Lohnhersteller</strong>, <strong>Verpackungsbetriebe</strong> und 
        <strong> Labore</strong> müssen GMP einhalten, wenn sie für Pharmaunternehmen arbeiten.
      </p>

      {/* Kapitel 4 */}
      <h2 id="kapitel-4" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        4. EU-GMP vs. FDA cGMP - die wichtigsten Regelwerke
      </h2>
      
      <div className="grid md:grid-cols-2 gap-4 my-6">
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>🇪🇺 EU-GMP-Leitfaden</h4>
          <ul className="text-sm space-y-1" style={{ color: '#000000' }}>
            <li>• Teil I: Arzneimittel</li>
            <li>• Teil II: Wirkstoffe</li>
            <li>• Teil III: GMP-Dokumente</li>
            <li>• Teil IV: ATMPs</li>
            <li>• 20+ Anhänge (Annexe)</li>
            <li>• Basis: Richtlinie 2003/94/EG</li>
          </ul>
        </div>
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>🇺🇸 FDA cGMP</h4>
          <ul className="text-sm space-y-1" style={{ color: '#000000' }}>
            <li>• 21 CFR Part 210 (Allgemein)</li>
            <li>• 21 CFR Part 211 (Fertige Arzneimittel)</li>
            <li>• 21 CFR Part 11 (Elektronische Aufzeichnungen)</li>
            <li>• Guidance Documents</li>
            <li>• Das "c" steht für "current"</li>
            <li>• Jährliche Überprüfung</li>
          </ul>
        </div>
      </div>
      
      <TipBox>
        Das kleine "c" in cGMP ist wichtig: Es bedeutet "current" - die FDA erwartet, 
        dass Sie immer den aktuellen Stand der Technik einsetzen, nicht nur die 
        Mindestanforderungen von vor 20 Jahren.
      </TipBox>

      {/* Kapitel 5 */}
      <h2 id="kapitel-5" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        5. Die 10 GMP-Grundprinzipien
      </h2>
      
      <p style={{ color: '#000000' }}>
        GMP lässt sich auf 10 fundamentale Prinzipien reduzieren:
      </p>
      
      <div className="space-y-3 my-6">
        {[
          { num: 1, title: 'Schriftliche Verfahren', desc: 'Alle Prozesse dokumentiert und aktuell' },
          { num: 2, title: 'Verfahren befolgen', desc: 'Keine Abweichungen ohne Genehmigung' },
          { num: 3, title: 'Dokumentation', desc: 'Was nicht dokumentiert ist, ist nicht passiert' },
          { num: 4, title: 'Validierung', desc: 'Nachweisen, dass Prozesse funktionieren' },
          { num: 5, title: 'Richtige Gebäude', desc: 'Geeignete Räume und Ausrüstung' },
          { num: 6, title: 'Geschultes Personal', desc: 'Qualifizierte Mitarbeiter für jede Aufgabe' },
          { num: 7, title: 'Hygiene', desc: 'Sauberkeit zur Vermeidung von Kontamination' },
          { num: 8, title: 'Qualitätskontrolle', desc: 'Unabhängige Prüfung aller Produkte' },
          { num: 9, title: 'Audits', desc: 'Regelmäßige Selbstinspektionen' },
          { num: 10, title: 'Rückverfolgbarkeit', desc: 'Jede Charge nachvollziehbar' },
        ].map((item) => (
          <div key={item.num} className="bg-qcore-navy bg-opacity-20 rounded-lg p-3 border border-gray-600 flex items-start">
            <span className="bg-qcore-navy bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold mr-3 flex-shrink-0">
              {item.num}
            </span>
            <div>
              <span className="font-semibold" style={{ color: '#1e293b' }}>{item.title}</span>
              <span style={{ color: '#000000' }}> - {item.desc}</span>
            </div>
          </div>
        ))}
      </div>
      
      <WarningBox>
        "Was nicht dokumentiert ist, ist nicht passiert" - dieser Grundsatz wird bei 
        jeder Inspektion geprüft. Fehlende Dokumentation = Abweichung.
      </WarningBox>

      {/* Kapitel 6 */}
      <h2 id="kapitel-6" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        6. Kernelemente eines GMP-Systems
      </h2>
      
      <div className="space-y-4 my-6">
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">📋</span> Pharmazeutisches Qualitätssystem (PQS)
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Übergeordnetes System nach ICH Q10. Umfasst GMP, aber auch Entwicklung 
            und Produktlebenszyklus.
          </p>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">📄</span> Dokumentation
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            SOPs, Herstellanweisungen, Prüfvorschriften, Chargenprotokolle. 
            Alles versioniert und freigegeben.
          </p>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">⚠️</span> Abweichungsmanagement
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Jede Abweichung dokumentieren, bewerten, Ursache finden, Maßnahmen 
            ergreifen. Keine Abweichung ignorieren.
          </p>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">🔄</span> Änderungsmanagement (Change Control)
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Jede Änderung planen, genehmigen, umsetzen, dokumentieren. 
            Keine ungeplanten Änderungen.
          </p>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">🔧</span> CAPA
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Corrective and Preventive Actions. Systematische Fehlerbehandlung 
            mit Wirksamkeitsprüfung.
          </p>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">✅</span> Qualifizierung & Validierung
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            DQ → IQ → OQ → PQ für Anlagen. Prozessvalidierung für Herstellprozesse. 
            Reinigungsvalidierung. CSV für Computersysteme.
          </p>
        </div>
      </div>

      {/* Kapitel 7 */}
      <h2 id="kapitel-7" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        7. Qualifizierung: IQ, OQ, PQ erklärt
      </h2>
      
      <p style={{ color: '#000000' }}>
        Bevor eine Anlage in Betrieb genommen wird, muss sie qualifiziert werden:
      </p>
      
      <div className="flex flex-wrap items-center justify-center gap-2 my-8">
        <div className="bg-qcore-navy bg-opacity-30 rounded-lg px-4 py-3 text-center">
          <div className="font-semibold" style={{ color: '#1e293b' }}>DQ</div>
          <div className="text-xs" style={{ color: '#000000' }}>Design</div>
          <div className="text-xs" style={{ color: '#475569' }}>Richtig geplant?</div>
        </div>
        <div style={{ color: '#475569' }}>→</div>
        <div className="bg-qcore-navy bg-opacity-30 rounded-lg px-4 py-3 text-center">
          <div className="font-semibold" style={{ color: '#1e293b' }}>IQ</div>
          <div className="text-xs" style={{ color: '#000000' }}>Installation</div>
          <div className="text-xs" style={{ color: '#475569' }}>Richtig installiert?</div>
        </div>
        <div style={{ color: '#475569' }}>→</div>
        <div className="bg-qcore-navy bg-opacity-30 rounded-lg px-4 py-3 text-center">
          <div className="font-semibold" style={{ color: '#1e293b' }}>OQ</div>
          <div className="text-xs" style={{ color: '#000000' }}>Operational</div>
          <div className="text-xs" style={{ color: '#475569' }}>Funktioniert?</div>
        </div>
        <div style={{ color: '#475569' }}>→</div>
        <div className="bg-green-900 bg-opacity-30 rounded-lg px-4 py-3 text-center border border-green-700">
          <div className="font-semibold" style={{ color: '#1e293b' }}>PQ</div>
          <div className="text-xs" style={{ color: '#000000' }}>Performance</div>
          <div className="text-xs" style={{ color: '#475569' }}>Reproduzierbar?</div>
        </div>
      </div>
      
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Phase</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Fragt</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Prüft z.B.</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">DQ</td>
              <td className="px-4 py-2 border-b border-gray-600">Ist das Design geeignet?</td>
              <td className="px-4 py-2 border-b border-gray-600">Spezifikationen, Normen, URS</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">IQ</td>
              <td className="px-4 py-2 border-b border-gray-600">Ist alles korrekt installiert?</td>
              <td className="px-4 py-2 border-b border-gray-600">Kalibrierung, Anschlüsse, Doku</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">OQ</td>
              <td className="px-4 py-2 border-b border-gray-600">Funktioniert es wie spezifiziert?</td>
              <td className="px-4 py-2 border-b border-gray-600">Grenzwerte, Alarme, Funktionen</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">PQ</td>
              <td className="px-4 py-2 border-b border-gray-600">Funktioniert es reproduzierbar?</td>
              <td className="px-4 py-2 border-b border-gray-600">3 Chargen unter Produktion</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <TipBox>
        Die Qualifizierung ist kein einmaliger Akt. Bei Änderungen an der Anlage 
        muss eine Requalifizierung erfolgen - zumindest für die betroffenen Teile.
      </TipBox>

      {/* Kapitel 8 */}
      <h2 id="kapitel-8" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        8. GMP-Inspektionen
      </h2>
      
      <p style={{ color: '#000000' }}>
        Anders als bei ISO gibt es bei GMP keine "Zertifizierung" durch private Stellen. 
        Die Überwachung erfolgt durch <strong>staatliche Behörden</strong>:
      </p>
      
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Region</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Behörde</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Ergebnis</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Deutschland</td>
              <td className="px-4 py-2 border-b border-gray-600">Landesbehörden (z.B. Regierungspräsidium)</td>
              <td className="px-4 py-2 border-b border-gray-600">GMP-Zertifikat</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">EU</td>
              <td className="px-4 py-2 border-b border-gray-600">Nationale Behörden + EMA</td>
              <td className="px-4 py-2 border-b border-gray-600">GMP-Zertifikat</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">USA</td>
              <td className="px-4 py-2 border-b border-gray-600">FDA</td>
              <td className="px-4 py-2 border-b border-gray-600">Form 483 / Warning Letter</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <p style={{ color: '#000000' }}><strong>Inspektionsergebnisse:</strong></p>
      <ul style={{ color: '#000000' }} className="list-disc pl-6 space-y-1">
        <li><strong>Keine Mängel:</strong> Selten, aber möglich</li>
        <li><strong>Kleinere Mängel:</strong> Müssen behoben werden, keine sofortigen Konsequenzen</li>
        <li><strong>Größere Mängel:</strong> Sofortige Maßnahmen erforderlich</li>
        <li><strong>Kritische Mängel:</strong> Können zur Schließung führen</li>
      </ul>
      
      <WarningBox>
        Eine FDA Warning Letter ist öffentlich und kann den Ruf eines Unternehmens 
        nachhaltig schädigen. Prävention ist alles.
      </WarningBox>

      {/* Kapitel 9 */}
      <h2 id="kapitel-9" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        9. Häufige GMP-Mängel
      </h2>
      
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Bereich</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Typischer Mangel</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Lösung</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Dokumentation</td>
              <td className="px-4 py-2 border-b border-gray-600">Unleserliche Einträge, fehlende Unterschriften</td>
              <td className="px-4 py-2 border-b border-gray-600">ALCOA-Prinzip schulen</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">CAPA</td>
              <td className="px-4 py-2 border-b border-gray-600">Oberflächliche Root Cause, keine Wirksamkeit</td>
              <td className="px-4 py-2 border-b border-gray-600">5-Why konsequent anwenden</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Validierung</td>
              <td className="px-4 py-2 border-b border-gray-600">Veraltete Validierungsdaten</td>
              <td className="px-4 py-2 border-b border-gray-600">Revalidierungsplan erstellen</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Schulung</td>
              <td className="px-4 py-2 border-b border-gray-600">Personal kennt aktuelle SOPs nicht</td>
              <td className="px-4 py-2 border-b border-gray-600">Schulungssystem überarbeiten</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Reinigung</td>
              <td className="px-4 py-2 border-b border-gray-600">Keine Reinigungsvalidierung</td>
              <td className="px-4 py-2 border-b border-gray-600">Validierungsplan aufsetzen</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Lieferanten</td>
              <td className="px-4 py-2 border-b border-gray-600">Keine Qualifizierung kritischer Lieferanten</td>
              <td className="px-4 py-2 border-b border-gray-600">Lieferanten-Audit-Programm</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <TipBox>
        ALCOA steht für: Attributable (zuordenbar), Legible (lesbar), Contemporaneous 
        (zeitnah), Original, Accurate (genau). Die goldene Regel für GMP-Dokumentation.
      </TipBox>

      {/* Kapitel 10 */}
      <h2 id="kapitel-10" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        10. GMP vs. ISO 9001 vs. ISO 13485
      </h2>
      
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Aspekt</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>GMP</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>ISO 13485</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>ISO 9001</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Branche</td>
              <td className="px-4 py-2 border-b border-gray-600">Pharma</td>
              <td className="px-4 py-2 border-b border-gray-600">Medizinprodukte</td>
              <td className="px-4 py-2 border-b border-gray-600">Alle</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Rechtliche Basis</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Gesetz</strong></td>
              <td className="px-4 py-2 border-b border-gray-600">Norm (harmonisiert)</td>
              <td className="px-4 py-2 border-b border-gray-600">Norm (freiwillig)</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Überwachung</td>
              <td className="px-4 py-2 border-b border-gray-600">Staatliche Behörde</td>
              <td className="px-4 py-2 border-b border-gray-600">Benannte Stelle</td>
              <td className="px-4 py-2 border-b border-gray-600">Zertifizierungsstelle</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Dokumentation</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Sehr umfangreich</strong></td>
              <td className="px-4 py-2 border-b border-gray-600">Umfangreich</td>
              <td className="px-4 py-2 border-b border-gray-600">Moderat</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Validierung</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Umfassend gefordert</strong></td>
              <td className="px-4 py-2 border-b border-gray-600">Gefordert</td>
              <td className="px-4 py-2 border-b border-gray-600">Bei Bedarf</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Konsequenz bei Verstoß</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Herstellungsverbot</strong></td>
              <td className="px-4 py-2 border-b border-gray-600">Zertifikatsentzug</td>
              <td className="px-4 py-2 border-b border-gray-600">Zertifikatsentzug</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* CTA */}
      <div className="bg-qcore-navy bg-opacity-30 rounded-lg p-8 mt-12 text-center border border-gray-600">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
          Sie brauchen Unterstützung im GMP-Umfeld?
        </h3>
        <p className="mb-6" style={{ color: '#000000' }}>
          Mit Erfahrung aus regulierten Industrien unterstütze ich Sie bei 
          Qualifizierung, Validierung und Audit-Vorbereitung - pragmatisch 
          und inspektionssicher.
        </p>
        <a 
          href="/kontakt" 
          className="inline-block bg-qcore-blue text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
        >
          Kostenlose Erstberatung vereinbaren
        </a>
      </div>
      
    </article>
  );
}
```

---

## INTEGRATION IN QM-WISSEN

In `components/QMWissenContent.jsx`:

```jsx
import ISO13485Article from './articles/ISO13485Article';
import GMPArticle from './articles/GMPArticle';

// Im Content-Bereich:
{selectedArticle === 'iso-13485' && <ISO13485Article />}
{selectedArticle === 'gmp' && <GMPArticle />}
```

---

## SIDEBAR-EINTRAG

Stelle sicher, dass in der Sidebar unter "Branchenspezifisch" der Eintrag für GMP existiert:

```jsx
{
  id: 'gmp',
  title: 'GMP (Pharma)',
  time: '12 Min',
  level: 2,
}
```

---

## COMMIT

```bash
git add . && git commit -m "Add GMP article to QM-Wissen" && git push
```
