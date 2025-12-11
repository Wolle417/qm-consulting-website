import React from 'react';

// Hilfsfunktionen für Boxen
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
        7. Herstellungserlaubnis und Inspektionen
      </h2>
      
      <p style={{ color: '#000000' }}>
        In Deutschland brauchen Sie eine <strong>Herstellungserlaubnis nach §13 AMG</strong> 
        von der zuständigen Landesbehörde (z.B. Regierung von Oberbayern).
      </p>
      
      <div className="space-y-3 my-6">
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>📋 Was wird geprüft?</h4>
          <ul className="text-sm space-y-1" style={{ color: '#000000' }}>
            <li>• Räumlichkeiten und Ausrüstung geeignet?</li>
            <li>• Personal qualifiziert?</li>
            <li>• QM-System vorhanden und gelebt?</li>
            <li>• Sachkundige Person (QP) vorhanden?</li>
          </ul>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>🔍 GMP-Inspektionen</h4>
          <ul className="text-sm space-y-1" style={{ color: '#000000' }}>
            <li>• Alle 2-3 Jahre durch Überwachungsbehörde</li>
            <li>• Unangemeldet oder angekündigt</li>
            <li>• Dauer: 1-5 Tage (je nach Betriebsgröße)</li>
            <li>• Checkliste basiert auf EU-GMP-Leitfaden</li>
          </ul>
        </div>
      </div>
      
      <WarningBox>
        Ein GMP-Inspektionsbericht mit "kritischen" Mängeln kann zur Aussetzung der 
        Herstellungserlaubnis führen. Das bedeutet: Produktionsstopp.
      </WarningBox>

      {/* Kapitel 8 */}
      <h2 id="kapitel-8" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        8. GMP vs. ISO 9001 - die Unterschiede
      </h2>
      
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Aspekt</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>ISO 9001</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>GMP</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Status</td>
              <td className="px-4 py-2 border-b border-gray-600">Freiwillig</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Gesetzlich vorgeschrieben</strong></td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Branche</td>
              <td className="px-4 py-2 border-b border-gray-600">Alle</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Nur Pharma</strong></td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Fokus</td>
              <td className="px-4 py-2 border-b border-gray-600">Kundenzufriedenheit</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Patientensicherheit</strong></td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Prüfung</td>
              <td className="px-4 py-2 border-b border-gray-600">Zertifizierungsgesellschaft</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Behördeninspektionen</strong></td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Dokumentation</td>
              <td className="px-4 py-2 border-b border-gray-600">Pragmatisch</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Sehr umfangreich</strong></td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Validierung</td>
              <td className="px-4 py-2 border-b border-gray-600">Optional</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Pflicht für kritische Prozesse</strong></td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Konsequenzen</td>
              <td className="px-4 py-2 border-b border-gray-600">Zertifikatsentzug</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Produktionsstopp, Bußgeld</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <TipBox>
        ISO 9001 ist eine gute Basis, reicht aber für Pharma nicht aus. GMP geht deutlich 
        weiter in Sachen Validierung, Rückverfolgbarkeit und Dokumentation.
      </TipBox>

      {/* Kapitel 9 */}
      <h2 id="kapitel-9" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        9. Typische Stolperfallen bei GMP-Einführung
      </h2>
      
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Stolperfalle</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Warum passiert das?</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Lösung</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Dokumentation zu spät</td>
              <td className="px-4 py-2 border-b border-gray-600">"Machen wir später"</td>
              <td className="px-4 py-2 border-b border-gray-600">Von Anfang an dokumentieren</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Validierung unterschätzt</td>
              <td className="px-4 py-2 border-b border-gray-600">"Läuft doch!"</td>
              <td className="px-4 py-2 border-b border-gray-600">Validierungsplan erstellen</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Abweichungen ignoriert</td>
              <td className="px-4 py-2 border-b border-gray-600">Zeitmangel, Bequemlichkeit</td>
              <td className="px-4 py-2 border-b border-gray-600">Jede Abweichung = Pflicht</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Change Control fehlt</td>
              <td className="px-4 py-2 border-b border-gray-600">Schnell mal geändert</td>
              <td className="px-4 py-2 border-b border-gray-600">Änderungen nur mit Genehmigung</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Schulungen vernachlässigt</td>
              <td className="px-4 py-2 border-b border-gray-600">"Wissen die schon"</td>
              <td className="px-4 py-2 border-b border-gray-600">Regelmäßige, dokumentierte Schulungen</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <WarningBox>
        Der größte Fehler: GMP als reines Papiersystem betrachten. GMP muss gelebt 
        werden - nicht nur bei Inspektionen.
      </WarningBox>

      {/* Kapitel 10 */}
      <h2 id="kapitel-10" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        10. GMP und Digitalisierung
      </h2>
      
      <p style={{ color: '#000000' }}>
        Moderne GMP-Systeme setzen zunehmend auf digitale Lösungen:
      </p>
      
      <div className="space-y-4 my-6">
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">💻</span> Elektronische Chargenprotokolle (eBatch Records)
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Papierlos, automatische Plausibilitätsprüfung, schnellere Freigabe. 
            Aber: Validierung nach 21 CFR Part 11 erforderlich.
          </p>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">📊</span> Manufacturing Execution Systems (MES)
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Integrierte Produktionssteuerung, Echtzeit-Überwachung, automatische 
            Dokumentation.
          </p>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">🔐</span> Elektronische Signaturen
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Ersetzen händische Unterschriften. Anforderungen: 21 CFR Part 11 (FDA), 
            Annex 11 (EU-GMP).
          </p>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">📱</span> Audit Trail
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Jede Änderung muss nachvollziehbar sein: Wer, Was, Wann, Warum. 
            Automatisch protokolliert.
          </p>
        </div>
      </div>
      
      <TipBox>
        Digitalisierung bringt Effizienz, aber auch neue Anforderungen: CSV 
        (Computer System Validation), Data Integrity, Cyber Security. Nicht unterschätzen!
      </TipBox>

      {/* CTA */}
      <div className="bg-qcore-navy bg-opacity-30 rounded-lg p-8 mt-12 text-center border border-gray-600">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
          Sie führen GMP ein oder bereiten sich auf eine Inspektion vor?
        </h3>
        <p className="mb-6" style={{ color: '#000000' }}>
          Mit Praxiserfahrung aus der Pharmaindustrie unterstütze ich Sie beim Aufbau 
          oder der Optimierung Ihres GMP-Systems - pragmatisch, audit-sicher, ohne unnötigen Overhead.
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
