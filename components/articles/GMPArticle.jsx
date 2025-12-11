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
        4. Aufbau der Norm (die 8 Kapitel)
      </h2>
      
      <p style={{ color: '#000000' }}>
        Die ISO 13485 ist in 8 Kapitel gegliedert. Die ersten drei sind Einleitung, 
        die eigentlichen Anforderungen stehen in Kapitel 4-8:
      </p>
      
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Kap.</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Titel</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Inhalt</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-gray-500 bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">1-3</td>
              <td className="px-4 py-2 border-b border-gray-600 italic">Einleitung</td>
              <td className="px-4 py-2 border-b border-gray-600 italic">Anwendungsbereich, Verweise, Begriffe</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">4</td>
              <td className="px-4 py-2 border-b border-gray-600">QM-System</td>
              <td className="px-4 py-2 border-b border-gray-600">Dokumentation, QM-Handbuch</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">5</td>
              <td className="px-4 py-2 border-b border-gray-600">Verantwortung der Leitung</td>
              <td className="px-4 py-2 border-b border-gray-600">Politik, Ziele, Ressourcen</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">6</td>
              <td className="px-4 py-2 border-b border-gray-600">Management von Ressourcen</td>
              <td className="px-4 py-2 border-b border-gray-600">Personal, Infrastruktur, Arbeitsumgebung</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">7</td>
              <td className="px-4 py-2 border-b border-gray-600">Produktrealisierung</td>
              <td className="px-4 py-2 border-b border-gray-600">Entwicklung, Beschaffung, Produktion</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600 font-semibold">8</td>
              <td className="px-4 py-2 border-b border-gray-600">Messung, Analyse, Verbesserung</td>
              <td className="px-4 py-2 border-b border-gray-600">Audits, CAPA, Überwachung</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Kapitel 5 */}
      <h2 id="kapitel-5" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        5. Die wichtigsten Forderungen im Überblick
      </h2>
      
      <div className="space-y-4 my-6">
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">📘</span> QM-Handbuch (Kap. 4.2.2)
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Pflicht! Im Gegensatz zur ISO 9001. Beschreibt das QM-System, enthält oder 
            verweist auf alle Verfahren.
          </p>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">📄</span> Dokumentenlenkung (Kap. 4.2.4)
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Alle Dokumente müssen gelenkt sein: Freigabe, Änderungsverfolgung, 
            Versionierung. Keine unkontrollierten Kopien.
          </p>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">⚠️</span> Risikomanagement (Kap. 7.1)
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Risikobasierter Ansatz in allen Prozessen. Verweist auf ISO 14971. 
            FMEA als typische Methode.
          </p>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">🔍</span> Rückverfolgbarkeit (Kap. 7.5.9)
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Jedes Produkt muss rückverfolgbar sein. Chargen-/Seriennummern. 
            Wichtig für Rückrufe.
          </p>
        </div>
        
        <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-4 border border-gray-600">
          <h4 className="font-semibold flex items-center" style={{ color: '#1e293b' }}>
            <span className="mr-2">🔧</span> CAPA (Kap. 8.5.2 / 8.5.3)
          </h4>
          <p className="text-sm mt-2" style={{ color: '#000000' }}>
            Korrektur- und Vorbeugemaßnahmen. Systematische Fehlerbehandlung. 
            Dokumentierte Wirksamkeitsprüfung.
          </p>
        </div>
      </div>

      {/* Kapitel 6 */}
      <h2 id="kapitel-6" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        6. ISO 13485 vs. ISO 9001 - die Unterschiede
      </h2>
      
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Aspekt</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>ISO 9001</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>ISO 13485</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Branche</td>
              <td className="px-4 py-2 border-b border-gray-600">Alle</td>
              <td className="px-4 py-2 border-b border-gray-600">Nur Medizinprodukte</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Fokus</td>
              <td className="px-4 py-2 border-b border-gray-600">Kundenzufriedenheit</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Produktsicherheit</strong></td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">QM-Handbuch</td>
              <td className="px-4 py-2 border-b border-gray-600">Optional</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Pflicht</strong></td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Risikomanagement</td>
              <td className="px-4 py-2 border-b border-gray-600">Allgemein</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Zentral</strong>, verweist auf ISO 14971</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Rückverfolgbarkeit</td>
              <td className="px-4 py-2 border-b border-gray-600">Empfohlen</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Pflicht</strong></td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Validierung</td>
              <td className="px-4 py-2 border-b border-gray-600">Bei Bedarf</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Umfassend gefordert</strong></td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Dokumentation</td>
              <td className="px-4 py-2 border-b border-gray-600">Weniger streng</td>
              <td className="px-4 py-2 border-b border-gray-600"><strong>Sehr umfangreich</strong></td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <TipBox>
        Wer ISO 9001 kennt, findet sich in ISO 13485 schnell zurecht. Aber unterschätzen 
        Sie nicht den Mehraufwand bei Dokumentation und Validierung.
      </TipBox>

      {/* Kapitel 7 */}
      <h2 id="kapitel-7" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        7. Zertifizierung: Ablauf und Aufwand
      </h2>
      
      <p style={{ color: '#000000' }}>Der typische Ablauf zur ISO 13485-Zertifizierung:</p>
      
      <div className="flex flex-wrap items-center justify-center gap-2 my-8">
        <div className="bg-qcore-navy bg-opacity-30 rounded-lg px-4 py-2 text-center">
          <div className="text-sm" style={{ color: '#1e293b' }}>1</div>
          <div className="text-xs" style={{ color: '#000000' }}>System aufbauen</div>
          <div className="text-xs" style={{ color: '#475569' }}>3-12 Monate</div>
        </div>
        <div style={{ color: '#475569' }}>→</div>
        <div className="bg-qcore-navy bg-opacity-30 rounded-lg px-4 py-2 text-center">
          <div className="text-sm" style={{ color: '#1e293b' }}>2</div>
          <div className="text-xs" style={{ color: '#000000' }}>Interne Audits</div>
        </div>
        <div style={{ color: '#475569' }}>→</div>
        <div className="bg-qcore-navy bg-opacity-30 rounded-lg px-4 py-2 text-center">
          <div className="text-sm" style={{ color: '#1e293b' }}>3</div>
          <div className="text-xs" style={{ color: '#000000' }}>Stufe-1-Audit</div>
          <div className="text-xs" style={{ color: '#475569' }}>Doku-Prüfung</div>
        </div>
        <div style={{ color: '#475569' }}>→</div>
        <div className="bg-qcore-navy bg-opacity-30 rounded-lg px-4 py-2 text-center">
          <div className="text-sm" style={{ color: '#1e293b' }}>4</div>
          <div className="text-xs" style={{ color: '#000000' }}>Stufe-2-Audit</div>
          <div className="text-xs" style={{ color: '#475569' }}>Vor-Ort</div>
        </div>
        <div style={{ color: '#475569' }}>→</div>
        <div className="bg-green-900 bg-opacity-30 rounded-lg px-4 py-2 text-center border border-green-700">
          <div className="text-sm" style={{ color: '#1e293b' }}>✓</div>
          <div className="text-xs" style={{ color: '#000000' }}>Zertifikat</div>
          <div className="text-xs" style={{ color: '#475569' }}>3 Jahre</div>
        </div>
      </div>
      
      <p style={{ color: '#000000' }}><strong>Kosten (Richtwerte für KMU):</strong></p>
      <ul style={{ color: '#000000' }} className="list-disc pl-6 space-y-1">
        <li>Zertifizierungsaudit: 5.000 - 15.000 €</li>
        <li>Jährliche Überwachung: 3.000 - 8.000 €</li>
        <li>Interner Aufwand: Deutlich höher als die Audit-Kosten!</li>
      </ul>

      {/* Kapitel 8 */}
      <h2 id="kapitel-8" className="text-2xl font-semibold mt-12 mb-4" style={{ color: '#1e293b' }}>
        8. Typische Stolperfallen
      </h2>
      
      <div className="overflow-x-auto my-6">
        <table className="min-w-full border border-gray-600">
          <thead className="bg-qcore-navy bg-opacity-30">
            <tr>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Stolperfalle</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Problem</th>
              <th className="px-4 py-2 text-left border-b border-gray-600" style={{ color: '#1e293b' }}>Lösung</th>
            </tr>
          </thead>
          <tbody style={{ color: '#000000' }}>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Dokumentation unterschätzt</td>
              <td className="px-4 py-2 border-b border-gray-600">"Wir machen das schon so" reicht nicht</td>
              <td className="px-4 py-2 border-b border-gray-600">Prozesse früh dokumentieren</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Rückverfolgbarkeit lückenhaft</td>
              <td className="px-4 py-2 border-b border-gray-600">Bei Rückruf: Wer hat welches Teil?</td>
              <td className="px-4 py-2 border-b border-gray-600">System von Anfang an</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">Lieferanten nicht qualifiziert</td>
              <td className="px-4 py-2 border-b border-gray-600">Zulieferer ohne QM-Nachweis</td>
              <td className="px-4 py-2 border-b border-gray-600">Lieferantenbewertung einführen</td>
            </tr>
            <tr>
              <td className="px-4 py-2 border-b border-gray-600">Validierung vergessen</td>
              <td className="px-4 py-2 border-b border-gray-600">"Software läuft doch"</td>
              <td className="px-4 py-2 border-b border-gray-600">Validierungsplan erstellen</td>
            </tr>
            <tr className="bg-qcore-navy bg-opacity-10">
              <td className="px-4 py-2 border-b border-gray-600">CAPA nur auf Papier</td>
              <td className="px-4 py-2 border-b border-gray-600">Maßnahmen ohne Wirksamkeit</td>
              <td className="px-4 py-2 border-b border-gray-600">Follow-up konsequent</td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <WarningBox>
        Viele Unternehmen unterschätzen den Aufwand für die Dokumentation. Ein QM-System 
        ist nicht in 2 Wochen aufgebaut. Planen Sie realistisch 6-12 Monate.
      </WarningBox>
      
      <TipBox>
        Starten Sie mit den kritischen Prozessen: Entwicklung, Produktion, CAPA. Den 
        Rest können Sie nach und nach ergänzen - aber diese drei müssen von Anfang an stehen.
      </TipBox>

      {/* CTA */}
      <div className="bg-qcore-navy bg-opacity-30 rounded-lg p-8 mt-12 text-center border border-gray-600">
        <h3 className="text-xl font-semibold mb-4" style={{ color: '#1e293b' }}>
          Sie bauen ein QM-System nach ISO 13485 auf?
        </h3>
        <p className="mb-6" style={{ color: '#000000' }}>
          Mit Erfahrung aus der Medizintechnik (MRT-Systeme, Risikoklasse IIb) 
          unterstütze ich Sie beim Aufbau - pragmatisch, audit-sicher, ohne Overhead.
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
