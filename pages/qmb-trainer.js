import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';


const questions = [
  // ===== ISO 9001 GRUNDLAGEN & STRUKTUR (1-15) =====
  {
    id: 1,
    category: "ISO 9001 Grundlagen",
    question: "Wie viele Kapitel hat die ISO 9001:2015?",
    answers: [
      "7 Hauptkapitel mit Anforderungen",
      "8 Kapitel plus Einleitung",
      "10 Kapitel (0-10)",
      "12 Kapitel inklusive Anhänge"
    ],
    correct: 2,
    explanation: "Die ISO 9001:2015 hat 10 Kapitel (0-10). Die Kapitel 0-3 sind einleitend, die Kapitel 4-10 enthalten die Anforderungen."
  },
  {
    id: 2,
    category: "ISO 9001 Grundlagen",
    question: "Ab welchem Kapitel beginnen die eigentlichen Anforderungen der ISO 9001:2015?",
    answers: [
      "Kapitel 1 – Anwendungsbereich",
      "Kapitel 3 – Begriffe und Definitionen",
      "Kapitel 4 – Kontext der Organisation",
      "Kapitel 5 – Führung und Verpflichtung"
    ],
    correct: 2,
    explanation: "Kapitel 4 'Kontext der Organisation' ist das erste Kapitel mit Anforderungen. Kapitel 1-3 sind einleitend und normativ verweisend."
  },
  {
    id: 3,
    category: "ISO 9001 Grundlagen",
    question: "Was bezeichnet die 'High Level Structure' (HLS)?",
    answers: [
      "Die Hierarchie der Verantwortlichkeiten im QMS",
      "Eine einheitliche Grundstruktur für ISO-Managementnormen",
      "Die Anforderungen an die oberste Leitung",
      "Das Eskalationsmodell bei Nichtkonformitäten"
    ],
    correct: 1,
    explanation: "Die High Level Structure (HLS) ist die einheitliche Grundstruktur für alle ISO-Managementsystemnormen seit 2015, die deren Integration erleichtert."
  },
  {
    id: 4,
    category: "ISO 9001 Grundlagen",
    question: "Welche Norm enthält die Grundlagen und Begriffe für Qualitätsmanagementsysteme?",
    answers: [
      "ISO 9001:2015",
      "ISO 9000:2015",
      "ISO 19011:2018",
      "ISO 9004:2018"
    ],
    correct: 1,
    explanation: "Die ISO 9000 definiert Grundlagen und Begriffe. ISO 9001 enthält Anforderungen, ISO 19011 Auditrichtlinien, ISO 9004 Leitlinien zur Leistungsverbesserung."
  },
  {
    id: 5,
    category: "ISO 9001 Grundlagen",
    question: "Was ist der Hauptzweck der ISO 9001?",
    answers: [
      "Nachweis der Fähigkeit zur Erfüllung von Kundenanforderungen",
      "Sicherstellung maximaler Produktionseffizienz",
      "Gewährleistung der Umweltverträglichkeit von Produkten",
      "Standardisierung von Produktspezifikationen weltweit"
    ],
    correct: 0,
    explanation: "Der Hauptzweck ist der Nachweis der Fähigkeit, Produkte und Dienstleistungen bereitzustellen, die Kunden- und behördliche Anforderungen erfüllen."
  },
  {
    id: 6,
    category: "ISO 9001 Grundlagen",
    question: "Der Begriff 'dokumentierte Information' ersetzt welche Begriffe aus ISO 9001:2008?",
    answers: [
      "Handbuch und Verfahrensanweisungen",
      "Dokumente und Aufzeichnungen",
      "Arbeitsanweisungen und Formulare",
      "Prozessbeschreibungen und Checklisten"
    ],
    correct: 1,
    explanation: "Der Begriff 'dokumentierte Information' ersetzt die früheren Begriffe 'Dokumente' (Vorgaben) und 'Aufzeichnungen' (Nachweise) aus der 2008er Version."
  },
  {
    id: 7,
    category: "ISO 9001 Grundlagen",
    question: "Was fordert die ISO 9001:2015 bezüglich eines QM-Handbuchs?",
    answers: [
      "Es ist für alle Organisationen verpflichtend",
      "Es ist nicht mehr explizit gefordert",
      "Es ist nur für Unternehmen ab 50 Mitarbeitern Pflicht",
      "Es muss jährlich aktualisiert werden"
    ],
    correct: 1,
    explanation: "Die ISO 9001:2015 fordert kein QM-Handbuch mehr explizit. Die Organisation entscheidet selbst über die Form der dokumentierten Information."
  },
  {
    id: 8,
    category: "ISO 9001 Grundlagen",
    question: "Was charakterisiert den 'prozessorientierten Ansatz' der ISO 9001?",
    answers: [
      "Jeder Prozess wird von einem Prozessverantwortlichen gesteuert",
      "Tätigkeiten werden als zusammenhängende Prozesse gemanagt",
      "Prozesse werden ausschließlich grafisch dokumentiert",
      "Alle Prozesse müssen zertifiziert werden"
    ],
    correct: 1,
    explanation: "Der prozessorientierte Ansatz bedeutet, dass Tätigkeiten als zusammenhängende, zusammenwirkende Prozesse verstanden und gesteuert werden."
  },
  {
    id: 9,
    category: "ISO 9001 Grundlagen",
    question: "Welches Konzept wurde mit der ISO 9001:2015 neu eingeführt?",
    answers: [
      "Managementbewertung durch die oberste Leitung",
      "Risikobasiertes Denken als integraler Bestandteil",
      "Durchführung von internen Audits",
      "Lenkung nichtkonformer Ergebnisse"
    ],
    correct: 1,
    explanation: "Das risikobasierte Denken ist eine wesentliche Neuerung der 2015er Version und ersetzt die separaten 'Vorbeugemaßnahmen' der 2008er Version."
  },
  {
    id: 10,
    category: "ISO 9001 Grundlagen",
    question: "Für welche Organisationen ist die ISO 9001 anwendbar?",
    answers: [
      "Ausschließlich für produzierende Unternehmen",
      "Nur für Organisationen mit mehr als 10 Mitarbeitern",
      "Für jede Organisation unabhängig von Größe und Branche",
      "Nur für Unternehmen mit physischen Produkten"
    ],
    correct: 2,
    explanation: "Die ISO 9001 ist branchenunabhängig und kann von jeder Organisation angewendet werden, unabhängig von Größe, Art oder Produkt/Dienstleistung."
  },
  {
    id: 11,
    category: "ISO 9001 Grundlagen",
    question: "Was ist der Inhalt der ISO 19011?",
    answers: [
      "Anforderungen an Qualitätsmanagementsysteme",
      "Leitfaden zur Auditierung von Managementsystemen",
      "Grundlagen und Begriffe des Qualitätsmanagements",
      "Leitfaden zur nachhaltigen Leistungsverbesserung"
    ],
    correct: 1,
    explanation: "Die ISO 19011 ist der Leitfaden zur Auditierung von Managementsystemen. Sie enthält Empfehlungen für Planung, Durchführung und Kompetenz von Auditoren."
  },
  {
    id: 12,
    category: "ISO 9001 Grundlagen",
    question: "Unter welchen Bedingungen können Anforderungen der ISO 9001 ausgeschlossen werden?",
    answers: [
      "Wenn die Geschäftsleitung dies genehmigt",
      "Wenn sie nicht anwendbar sind und die Konformität nicht beeinträchtigt wird",
      "Wenn sie für die Branche nicht üblich sind",
      "Wenn der Zertifizierer dem Ausschluss zustimmt"
    ],
    correct: 1,
    explanation: "Anforderungen können ausgeschlossen werden, wenn sie nicht anwendbar sind, dies begründet wird und die Konformität von Produkten/Dienstleistungen nicht beeinträchtigt wird."
  },
  {
    id: 13,
    category: "ISO 9001 Grundlagen",
    question: "Wie lange ist ein ISO 9001 Zertifikat gültig?",
    answers: [
      "Unbefristet bei jährlicher Überwachung",
      "3 Jahre mit jährlichen Überwachungsaudits",
      "5 Jahre mit halbjährlichen Überwachungsaudits",
      "2 Jahre mit anschließender Rezertifizierung"
    ],
    correct: 1,
    explanation: "Ein ISO 9001 Zertifikat ist 3 Jahre gültig. Dazwischen finden jährliche Überwachungsaudits statt, danach eine Rezertifizierung."
  },
  {
    id: 14,
    category: "ISO 9001 Grundlagen",
    question: "Was ist ein 'Überwachungsaudit'?",
    answers: [
      "Ein unangekündigtes Sonderaudit bei Beschwerden",
      "Das erste Audit zur Erlangung des Zertifikats",
      "Ein jährliches Audit zwischen den Rezertifizierungen",
      "Ein internes Audit durch den Qualitätsbeauftragten"
    ],
    correct: 2,
    explanation: "Überwachungsaudits sind die jährlichen externen Audits durch die Zertifizierungsstelle zwischen den Rezertifizierungsaudits."
  },
  {
    id: 15,
    category: "ISO 9001 Grundlagen",
    question: "Was bedeutet 'Konformität' im Qualitätsmanagement?",
    answers: [
      "Zustimmung aller interessierten Parteien",
      "Erfüllung einer festgelegten Anforderung",
      "Übereinstimmung mit dem Branchenstandard",
      "Einhaltung der vereinbarten Liefertermine"
    ],
    correct: 1,
    explanation: "Konformität bedeutet die Erfüllung einer Anforderung. Das Gegenteil ist 'Nichtkonformität' – die Nichterfüllung einer Anforderung."
  },

  // ===== DIE 7 QM-GRUNDSÄTZE (16-25) =====
  {
    id: 16,
    category: "QM-Grundsätze",
    question: "Wie viele Qualitätsmanagement-Grundsätze definiert die ISO 9000:2015?",
    answers: [
      "5 Grundsätze",
      "7 Grundsätze",
      "8 Grundsätze",
      "10 Grundsätze"
    ],
    correct: 1,
    explanation: "Es gibt 7 QM-Grundsätze. In der Version 2008 waren es noch 8 – der Grundsatz 'Systemorientierter Managementansatz' wurde in die anderen integriert."
  },
  {
    id: 17,
    category: "QM-Grundsätze",
    question: "Welcher QM-Grundsatz steht an erster Stelle?",
    answers: [
      "Führung",
      "Kundenorientierung",
      "Prozessorientierung",
      "Fortlaufende Verbesserung"
    ],
    correct: 1,
    explanation: "Kundenorientierung ist der erste und wichtigste QM-Grundsatz. Der Hauptfokus des Qualitätsmanagements liegt auf der Erfüllung von Kundenanforderungen."
  },
  {
    id: 18,
    category: "QM-Grundsätze",
    question: "Was beinhaltet der Grundsatz 'Einbeziehung von Personen'?",
    answers: [
      "Externe Stakeholder in Entscheidungen einbeziehen",
      "Kompetente und befugte Personen sind wesentlich für den Erfolg",
      "Alle Mitarbeiter müssen an Audits teilnehmen",
      "Kunden werden in die Produktentwicklung einbezogen"
    ],
    correct: 1,
    explanation: "Der Grundsatz besagt, dass kompetente, befugte und engagierte Personen auf allen Ebenen wesentlich sind, um Wert zu schaffen."
  },
  {
    id: 19,
    category: "QM-Grundsätze",
    question: "Welcher Begriff ist KEIN QM-Grundsatz nach ISO 9000:2015?",
    answers: [
      "Beziehungsmanagement",
      "Prozessorientierung",
      "Gewinnorientierung",
      "Faktengestützte Entscheidungsfindung"
    ],
    correct: 2,
    explanation: "Gewinnorientierung ist kein QM-Grundsatz. Die 7 Grundsätze sind: Kundenorientierung, Führung, Einbeziehung von Personen, Prozessorientierung, Verbesserung, faktengestützte Entscheidungsfindung, Beziehungsmanagement."
  },
  {
    id: 20,
    category: "QM-Grundsätze",
    question: "Was bedeutet 'faktengestützte Entscheidungsfindung'?",
    answers: [
      "Entscheidungen werden ausschließlich vom Management getroffen",
      "Entscheidungen basieren auf Analyse von Daten und Informationen",
      "Alle Fakten werden vor der Entscheidung dokumentiert",
      "Entscheidungen werden erst nach Audit getroffen"
    ],
    correct: 1,
    explanation: "Dieser Grundsatz bedeutet, dass Entscheidungen auf der Analyse und Auswertung von Daten und Informationen basieren sollten."
  },
  {
    id: 21,
    category: "QM-Grundsätze",
    question: "Auf wen bezieht sich der Grundsatz 'Beziehungsmanagement'?",
    answers: [
      "Ausschließlich auf Kundenbeziehungen",
      "Nur auf Beziehungen zu Lieferanten",
      "Auf alle relevanten interessierten Parteien",
      "Ausschließlich auf interne Mitarbeiterbeziehungen"
    ],
    correct: 2,
    explanation: "Beziehungsmanagement bezieht sich auf die Steuerung von Beziehungen zu allen relevanten interessierten Parteien wie Lieferanten, Partnern und anderen."
  },
  {
    id: 22,
    category: "QM-Grundsätze",
    question: "Was beinhaltet der Grundsatz 'Verbesserung'?",
    answers: [
      "Jährliche Verbesserungsprojekte sind durchzuführen",
      "Fortlaufende Verbesserung ist wesentlich für nachhaltigen Erfolg",
      "Verbesserungen werden nur nach Kundenreklamationen umgesetzt",
      "Verbesserungsvorschläge müssen vom Auditor genehmigt werden"
    ],
    correct: 1,
    explanation: "Der Grundsatz besagt, dass erfolgreiche Organisationen einen fortlaufenden Fokus auf Verbesserung haben, um Leistungsniveaus zu halten und auf Veränderungen zu reagieren."
  },
  {
    id: 23,
    category: "QM-Grundsätze",
    question: "Welcher Grundsatz betont die Verantwortung der obersten Leitung?",
    answers: [
      "Kundenorientierung",
      "Führung",
      "Einbeziehung von Personen",
      "Prozessorientierung"
    ],
    correct: 1,
    explanation: "Der Grundsatz 'Führung' betont, dass Führungskräfte auf allen Ebenen Einheit in Bezug auf Zielsetzung und Ausrichtung herstellen müssen."
  },
  {
    id: 24,
    category: "QM-Grundsätze",
    question: "Was ist ein wesentlicher Nutzen der 'Prozessorientierung'?",
    answers: [
      "Reduzierung der erforderlichen Dokumentation",
      "Beständige und vorhersehbare Ergebnisse",
      "Verringerung des Personalbedarfs",
      "Beschleunigung der Zertifizierung"
    ],
    correct: 1,
    explanation: "Durch Prozessorientierung werden beständige und vorhersehbare Ergebnisse wirksamer und effizienter erzielt."
  },
  {
    id: 25,
    category: "QM-Grundsätze",
    question: "Wie wird Kundenorientierung in der Praxis umgesetzt?",
    answers: [
      "Durch Anbieten der niedrigsten Preise am Markt",
      "Durch Verstehen und Erfüllen der Kundenbedürfnisse",
      "Durch Zusenden von regelmäßigen Werbebriefen",
      "Durch Einstellung eines Kundenbeauftragten"
    ],
    correct: 1,
    explanation: "Kundenorientierung wird umgesetzt durch Verstehen der aktuellen und zukünftigen Kundenbedürfnisse, Erfüllen von Kundenanforderungen und Streben, Erwartungen zu übertreffen."
  },

  // ===== KONTEXT DER ORGANISATION - KAPITEL 4 (26-33) =====
  {
    id: 26,
    category: "Kontext (Kap. 4)",
    question: "Was muss die Organisation nach Kapitel 4.1 ermitteln?",
    answers: [
      "Die Anzahl der benötigten Mitarbeiter",
      "Interne und externe Themen, die für Zweck und Strategie relevant sind",
      "Die Anzahl der erforderlichen Prozesse",
      "Die jährlichen Umsatzziele"
    ],
    correct: 1,
    explanation: "Nach 4.1 muss die Organisation interne und externe Themen ermitteln, die für ihren Zweck und ihre strategische Ausrichtung relevant sind."
  },
  {
    id: 27,
    category: "Kontext (Kap. 4)",
    question: "Was sind 'interessierte Parteien' im Sinne der ISO 9001?",
    answers: [
      "Nur die Gesellschafter und Anteilseigner",
      "Personen oder Organisationen, die Einfluss haben oder beeinflusst werden",
      "Nur die direkten Kunden des Unternehmens",
      "Die Mitglieder des Managementteams"
    ],
    correct: 1,
    explanation: "Interessierte Parteien sind alle Personen oder Organisationen, die eine Entscheidung beeinflussen können oder davon beeinflusst werden (z.B. Kunden, Lieferanten, Mitarbeiter, Behörden)."
  },
  {
    id: 28,
    category: "Kontext (Kap. 4)",
    question: "Was muss der Anwendungsbereich des QM-Systems enthalten?",
    answers: [
      "Nur die Liste der zertifizierten Produkte",
      "Grenzen, Anwendbarkeit und begründete Ausschlüsse",
      "Nur die Standorte des Unternehmens",
      "Die Anzahl der Mitarbeiter im QM"
    ],
    correct: 1,
    explanation: "Der Anwendungsbereich muss die Grenzen, die Anwendbarkeit und mögliche Ausschlüsse (mit Begründung) festlegen und dokumentiert sein."
  },
  {
    id: 29,
    category: "Kontext (Kap. 4)",
    question: "Was fordert die ISO 9001 bezüglich der Prozesse?",
    answers: [
      "Mindestens 10 Prozesse müssen definiert werden",
      "Prozesse und deren Wechselwirkungen müssen festgelegt werden",
      "Nur wertschöpfende Prozesse müssen dokumentiert werden",
      "Prozesse müssen extern validiert werden"
    ],
    correct: 1,
    explanation: "Die Organisation muss die erforderlichen Prozesse und deren Wechselwirkungen bestimmen, einschließlich Eingaben, Ergebnisse, Ressourcen und Verantwortlichkeiten."
  },
  {
    id: 30,
    category: "Kontext (Kap. 4)",
    question: "Welche Gruppe zählt typischerweise NICHT zu den interessierten Parteien?",
    answers: [
      "Mitarbeiter und deren Vertreter",
      "Direkte Wettbewerber am Markt",
      "Lieferanten und Partner",
      "Aufsichtsbehörden"
    ],
    correct: 1,
    explanation: "Wettbewerber sind normalerweise keine 'interessierten Parteien', da sie keine direkten Anforderungen an das QM-System stellen. Typische interessierte Parteien sind Kunden, Mitarbeiter, Lieferanten, Eigentümer und Behörden."
  },
  {
    id: 31,
    category: "Kontext (Kap. 4)",
    question: "Wie definiert die ISO 9000 einen 'Prozess'?",
    answers: [
      "Eine Organisationseinheit mit eigener Verantwortung",
      "Ein Satz zusammenhängender Tätigkeiten, der Eingaben in Ergebnisse umwandelt",
      "Eine genehmigte Verfahrensanweisung",
      "Ein zeitlich begrenztes Projekt"
    ],
    correct: 1,
    explanation: "Ein Prozess ist ein Satz zusammenhängender oder sich gegenseitig beeinflussender Tätigkeiten, der Eingaben zum Erzielen eines vorgesehenen Ergebnisses verwendet."
  },
  {
    id: 32,
    category: "Kontext (Kap. 4)",
    question: "Was muss bezüglich interessierter Parteien bestimmt werden?",
    answers: [
      "Nur deren Kontaktdaten",
      "Die für das QMS relevanten interessierten Parteien und deren Anforderungen",
      "Nur deren finanzielle Bedeutung",
      "Die Dauer der Geschäftsbeziehung"
    ],
    correct: 1,
    explanation: "Die Organisation muss die für das QMS relevanten interessierten Parteien und deren für das QMS relevante Anforderungen bestimmen und überwachen."
  },
  {
    id: 33,
    category: "Kontext (Kap. 4)",
    question: "Welche Prozessarten werden typischerweise unterschieden?",
    answers: [
      "Primär-, Sekundär- und Tertiärprozesse",
      "Führungs-, Kern- und Unterstützungsprozesse",
      "Eingangs-, Durchgangs- und Ausgangsprozesse",
      "Haupt-, Neben- und Hilfsprozesse"
    ],
    correct: 1,
    explanation: "Typischerweise unterscheidet man Führungsprozesse (Management), Kernprozesse (Wertschöpfung) und Unterstützungsprozesse (Support). Diese Einteilung ist aber nicht normativ gefordert."
  },

  // ===== FÜHRUNG - KAPITEL 5 (34-43) =====
  {
    id: 34,
    category: "Führung (Kap. 5)",
    question: "Wer trägt die Gesamtverantwortung für das QM-System nach ISO 9001:2015?",
    answers: [
      "Der Qualitätsmanagementbeauftragte (QMB)",
      "Die oberste Leitung",
      "Der externe Auditor",
      "Der Qualitätsmanager"
    ],
    correct: 1,
    explanation: "Die oberste Leitung trägt die Gesamtverantwortung für das QM-System. Diese Verantwortung kann nicht vollständig delegiert werden."
  },
  {
    id: 35,
    category: "Führung (Kap. 5)",
    question: "Was muss die Qualitätspolitik beinhalten?",
    answers: [
      "Konkrete Umsatz- und Gewinnziele",
      "Eine Verpflichtung zur Erfüllung von Anforderungen und Verbesserung",
      "Die Namen der Verantwortlichen",
      "Den Zeitplan für die nächste Zertifizierung"
    ],
    correct: 1,
    explanation: "Die Qualitätspolitik muss eine Verpflichtung zur Erfüllung zutreffender Anforderungen und zur fortlaufenden Verbesserung des QMS enthalten."
  },
  {
    id: 36,
    category: "Führung (Kap. 5)",
    question: "Was wird bezüglich der Qualitätspolitik gefordert?",
    answers: [
      "Sie muss jährlich überarbeitet werden",
      "Sie muss verstanden und angewendet werden",
      "Sie muss in allen Sprachen der Kunden vorliegen",
      "Sie muss vom Zertifizierer genehmigt werden"
    ],
    correct: 1,
    explanation: "Die Qualitätspolitik muss innerhalb der Organisation kommuniziert, verstanden und angewendet werden sowie für interessierte Parteien verfügbar sein."
  },
  {
    id: 37,
    category: "Führung (Kap. 5)",
    question: "Wird in der ISO 9001:2015 ein 'Beauftragter der obersten Leitung' gefordert?",
    answers: [
      "Ja, diese Rolle ist weiterhin verpflichtend",
      "Nein, diese Rolle ist nicht mehr explizit gefordert",
      "Ja, aber nur bei mehr als 50 Mitarbeitern",
      "Ja, aber mit der neuen Bezeichnung 'Qualitätsbeauftragter'"
    ],
    correct: 1,
    explanation: "Die ISO 9001:2015 fordert keinen 'Beauftragten der obersten Leitung' mehr explizit. Die Verantwortung liegt bei der obersten Leitung, kann aber delegiert werden."
  },
  {
    id: 38,
    category: "Führung (Kap. 5)",
    question: "Was bedeutet 'Kundenorientierung' im Kapitel 5?",
    answers: [
      "Kunden erhalten bevorzugte Zahlungsbedingungen",
      "Kundenanforderungen werden ermittelt und Risiken behandelt",
      "Kunden werden zu allen Besprechungen eingeladen",
      "Kundenwünsche werden stets erfüllt"
    ],
    correct: 1,
    explanation: "Die oberste Leitung muss sicherstellen, dass Kundenanforderungen ermittelt und erfüllt werden und Risiken/Chancen behandelt werden, die die Konformität beeinflussen können."
  },
  {
    id: 39,
    category: "Führung (Kap. 5)",
    question: "Was gilt für Rollen, Verantwortlichkeiten und Befugnisse?",
    answers: [
      "Sie müssen nur dem QMB bekannt sein",
      "Sie müssen festgelegt, kommuniziert und verstanden sein",
      "Sie werden nur bei externen Audits benötigt",
      "Sie müssen jährlich neu vergeben werden"
    ],
    correct: 1,
    explanation: "Die oberste Leitung muss sicherstellen, dass Verantwortlichkeiten und Befugnisse für relevante Rollen festgelegt, kommuniziert und verstanden werden."
  },
  {
    id: 40,
    category: "Führung (Kap. 5)",
    question: "In welcher Form muss die Qualitätspolitik vorliegen?",
    answers: [
      "Ausschließlich als Aushang im Eingangsbereich",
      "Als dokumentierte Information",
      "Nur mündlich überliefert",
      "Als notarielle Urkunde"
    ],
    correct: 1,
    explanation: "Die Qualitätspolitik muss als dokumentierte Information verfügbar, kommuniziert und verstanden werden."
  },
  {
    id: 41,
    category: "Führung (Kap. 5)",
    question: "Welche Aussage zu Ressourcen trifft zu?",
    answers: [
      "Ressourcen werden nur bei Bedarf bereitgestellt",
      "Die oberste Leitung muss erforderliche Ressourcen sicherstellen",
      "Ressourcenplanung ist Aufgabe des Controllings",
      "Ressourcen werden vom Auditor festgelegt"
    ],
    correct: 1,
    explanation: "Die oberste Leitung muss sicherstellen, dass die für das QM-System erforderlichen Ressourcen zur Verfügung stehen."
  },
  {
    id: 42,
    category: "Führung (Kap. 5)",
    question: "Wie zeigt die oberste Leitung Führung und Verpflichtung?",
    answers: [
      "Durch Unterzeichnung des QM-Handbuchs",
      "Durch Rechenschaft für die Wirksamkeit des QMS",
      "Durch Delegation aller QM-Aufgaben",
      "Durch monatliche Besuche in der Produktion"
    ],
    correct: 1,
    explanation: "Die oberste Leitung zeigt Führung z.B. durch Rechenschaft für die Wirksamkeit, Festlegen der Politik und Ziele, Integration ins Geschäft, Förderung der Verbesserung."
  },
  {
    id: 43,
    category: "Führung (Kap. 5)",
    question: "Wofür muss die oberste Leitung Rechenschaft übernehmen?",
    answers: [
      "Für alle Kundenreklamationen persönlich",
      "Für die Wirksamkeit des Qualitätsmanagementsystems",
      "Für die jährliche Managementbewertung",
      "Für die Durchführung interner Audits"
    ],
    correct: 1,
    explanation: "Die oberste Leitung muss die Rechenschaft für die Wirksamkeit des QMS übernehmen – diese Verantwortung kann nicht vollständig delegiert werden."
  },

  // ===== PLANUNG - KAPITEL 6 (44-51) =====
  {
    id: 44,
    category: "Planung (Kap. 6)",
    question: "Was muss bei der QMS-Planung berücksichtigt werden?",
    answers: [
      "Nur erkannte Risiken",
      "Risiken und Chancen",
      "Nur identifizierte Chancen",
      "Ausschließlich finanzielle Faktoren"
    ],
    correct: 1,
    explanation: "Die Organisation muss sowohl Risiken als auch Chancen bestimmen, die behandelt werden müssen, um erwünschte Ergebnisse zu erzielen und unerwünschte zu verhindern."
  },
  {
    id: 45,
    category: "Planung (Kap. 6)",
    question: "Wie ist 'Risiko' in der ISO 9001 definiert?",
    answers: [
      "Möglichkeit eines finanziellen Verlusts",
      "Auswirkung von Ungewissheit",
      "Wahrscheinlichkeit eines Schadensereignisses",
      "Gefährdung der Produktqualität"
    ],
    correct: 1,
    explanation: "Risiko ist definiert als 'Auswirkung von Ungewissheit'. Diese Auswirkung kann positiv (Chance) oder negativ sein."
  },
  {
    id: 46,
    category: "Planung (Kap. 6)",
    question: "Fordert die ISO 9001 ein formales Risikomanagement nach ISO 31000?",
    answers: [
      "Ja, für alle Organisationen verpflichtend",
      "Nein, nur risikobasiertes Denken ist gefordert",
      "Ja, ab einer bestimmten Unternehmensgröße",
      "Nur in Hochrisikobranchen"
    ],
    correct: 1,
    explanation: "Die ISO 9001 fordert kein formales Risikomanagement nach ISO 31000, sondern 'risikobasiertes Denken', das in die Prozesse integriert wird."
  },
  {
    id: 47,
    category: "Planung (Kap. 6)",
    question: "Welche Anforderung gilt für Qualitätsziele?",
    answers: [
      "Sie müssen streng vertraulich behandelt werden",
      "Sie müssen messbar und mit der Politik vereinbar sein",
      "Sie müssen jährlich komplett erneuert werden",
      "Sie müssen vom Zertifizierer genehmigt werden"
    ],
    correct: 1,
    explanation: "Qualitätsziele müssen mit der Politik vereinbar, messbar, überwacht, kommuniziert und aktualisiert werden. Sie müssen als dokumentierte Information vorliegen."
  },
  {
    id: 48,
    category: "Planung (Kap. 6)",
    question: "Was muss zur Erreichung von Qualitätszielen geplant werden?",
    answers: [
      "Nur das Ziel und der Verantwortliche",
      "Was getan wird, Ressourcen, Verantwortlicher, Termin, Bewertung",
      "Nur der Zeitplan und das Budget",
      "Das Ziel und die Genehmigung"
    ],
    correct: 1,
    explanation: "Es muss geplant werden: Was getan wird, welche Ressourcen erforderlich sind, wer verantwortlich ist, wann es abgeschlossen wird und wie die Ergebnisse bewertet werden."
  },
  {
    id: 49,
    category: "Planung (Kap. 6)",
    question: "Was ersetzt das 'risikobasierte Denken' der ISO 9001:2015?",
    answers: [
      "Die Korrekturmaßnahmen der 2008er Version",
      "Die Vorbeugemaßnahmen der 2008er Version",
      "Die internen Audits der 2008er Version",
      "Die Managementbewertung der 2008er Version"
    ],
    correct: 1,
    explanation: "Das risikobasierte Denken ersetzt die expliziten 'Vorbeugemaßnahmen' der ISO 9001:2008. Risiken proaktiv zu behandeln ist jetzt in alle Prozesse integriert."
  },
  {
    id: 50,
    category: "Planung (Kap. 6)",
    question: "Wo müssen Qualitätsziele festgelegt werden?",
    answers: [
      "Nur auf der obersten Managementebene",
      "Für relevante Funktionen, Ebenen und Prozesse",
      "Nur für die Produktionsprozesse",
      "Ausschließlich auf Abteilungsebene"
    ],
    correct: 1,
    explanation: "Qualitätsziele müssen für relevante Funktionen, Ebenen und Prozesse festgelegt werden, nicht nur auf einer Ebene."
  },
  {
    id: 51,
    category: "Planung (Kap. 6)",
    question: "Was muss bei Änderungen am QMS berücksichtigt werden?",
    answers: [
      "Nur die anfallenden Kosten",
      "Zweck, Konsequenzen, Integrität, Ressourcen, Verantwortlichkeiten",
      "Nur der erforderliche Zeitrahmen",
      "Die Genehmigung durch den Zertifizierer"
    ],
    correct: 1,
    explanation: "Bei Änderungen müssen der Zweck, mögliche Konsequenzen, die Integrität des QMS, Verfügbarkeit von Ressourcen und Zuweisung von Verantwortlichkeiten berücksichtigt werden."
  },

  // ===== UNTERSTÜTZUNG - KAPITEL 7 (52-63) =====
  {
    id: 52,
    category: "Unterstützung (Kap. 7)",
    question: "Welche Ressourcen müssen nach Kapitel 7 bestimmt werden?",
    answers: [
      "Nur finanzielle Mittel und Personalkosten",
      "Personen, Infrastruktur, Umgebung, Messmittel, Wissen",
      "Nur Maschinen und Anlagen",
      "Ausschließlich IT-Ressourcen"
    ],
    correct: 1,
    explanation: "Die Organisation muss Ressourcen für Personen, Infrastruktur, Umgebung für Prozesse, Ressourcen zur Überwachung/Messung und organisationales Wissen bestimmen."
  },
  {
    id: 53,
    category: "Unterstützung (Kap. 7)",
    question: "Was ist 'Wissen der Organisation' nach ISO 9001?",
    answers: [
      "Ausschließlich patentiertes Know-how",
      "Wissen, das für Prozesse und Produktkonformität erforderlich ist",
      "Nur dokumentierte Verfahrensanweisungen",
      "Das Fachwissen des Qualitätsmanagers"
    ],
    correct: 1,
    explanation: "Wissen der Organisation ist das spezifische Wissen, das für die Durchführung von Prozessen und zur Erreichung der Produktkonformität erforderlich ist."
  },
  {
    id: 54,
    category: "Unterstützung (Kap. 7)",
    question: "Was fordert die Norm bezüglich der Kompetenz?",
    answers: [
      "Alle Mitarbeiter müssen zertifiziert sein",
      "Kompetenz durch Ausbildung, Schulung oder Erfahrung sicherstellen",
      "Nur Führungskräfte müssen nachweislich kompetent sein",
      "Kompetenz wird durch den Zertifizierer bestätigt"
    ],
    correct: 1,
    explanation: "Die Organisation muss sicherstellen, dass Personen, die die Leistung beeinflussen, auf Basis von Ausbildung, Schulung oder Erfahrung kompetent sind."
  },
  {
    id: 55,
    category: "Unterstützung (Kap. 7)",
    question: "Was muss bezüglich Kompetenz aufbewahrt werden?",
    answers: [
      "Nur die Zeugnisse von Führungskräften",
      "Nachweise der Kompetenz als dokumentierte Information",
      "Ausschließlich externe Zertifikate",
      "Nur die Ergebnisse von Eignungstests"
    ],
    correct: 1,
    explanation: "Geeignete dokumentierte Informationen als Nachweis der Kompetenz müssen aufbewahrt werden (z.B. Schulungsnachweise, Zertifikate, Erfahrungsnachweise)."
  },
  {
    id: 56,
    category: "Unterstützung (Kap. 7)",
    question: "Was umfasst das geforderte 'Bewusstsein' der Mitarbeiter?",
    answers: [
      "Kenntnis der aktuellen Unternehmensnachrichten",
      "Kenntnis von Politik, Zielen, eigenem Beitrag und Konsequenzen",
      "Auswendiglernen des Normentextes",
      "Bewusstsein für Marktentwicklungen"
    ],
    correct: 1,
    explanation: "Personen müssen sich der Qualitätspolitik, der Qualitätsziele, ihres Beitrags zur Wirksamkeit und der Konsequenzen bei Nichterfüllung bewusst sein."
  },
  {
    id: 57,
    category: "Unterstützung (Kap. 7)",
    question: "Was muss für die interne und externe Kommunikation festgelegt werden?",
    answers: [
      "Nur die zu verwendende Sprache",
      "Worüber, wann, mit wem, wie und wer kommuniziert",
      "Ausschließlich die Kommunikationsmedien",
      "Nur der Kommunikationsverantwortliche"
    ],
    correct: 1,
    explanation: "Die Organisation muss bestimmen: Worüber kommuniziert wird, wann, mit wem, wie und wer kommuniziert."
  },
  {
    id: 58,
    category: "Unterstützung (Kap. 7)",
    question: "Was beinhaltet die 'Lenkung dokumentierter Information'?",
    answers: [
      "Ausschließlich die sichere Aufbewahrung",
      "Verfügbarkeit, Eignung, Schutz, Verteilung und Aufbewahrung",
      "Nur die Genehmigung durch den QMB",
      "Die Übersetzung in alle Landessprachen"
    ],
    correct: 1,
    explanation: "Dokumentierte Information muss gelenkt werden hinsichtlich: Verteilung, Zugriff, Abruf, Verwendung, Speicherung, Erhaltung, Änderungen und Aufbewahrung/Beseitigung."
  },
  {
    id: 59,
    category: "Unterstützung (Kap. 7)",
    question: "Wann müssen Prüfmittel kalibriert oder verifiziert werden?",
    answers: [
      "Nur bei der Erstanschaffung",
      "Wenn sie für den Nachweis der Konformität verwendet werden",
      "Ausschließlich bei externen Audits",
      "Nur auf Kundenanforderung"
    ],
    correct: 1,
    explanation: "Wenn Überwachungs- oder Messressourcen für den Nachweis der Konformität verwendet werden, müssen sie in festgelegten Abständen kalibriert oder verifiziert werden."
  },
  {
    id: 60,
    category: "Unterstützung (Kap. 7)",
    question: "Was gehört zur 'Umgebung für die Durchführung von Prozessen'?",
    answers: [
      "Ausschließlich die Raumtemperatur",
      "Soziale, psychologische und physikalische Faktoren",
      "Nur die technische Ausstattung",
      "Die geografische Lage des Standorts"
    ],
    correct: 1,
    explanation: "Die Prozessumgebung umfasst soziale Faktoren (z.B. konfliktfrei), psychologische Faktoren (z.B. stressreduzierend) und physikalische Faktoren (z.B. Temperatur, Feuchtigkeit, Licht)."
  },
  {
    id: 61,
    category: "Unterstützung (Kap. 7)",
    question: "Was gilt für extern erstellte dokumentierte Informationen?",
    answers: [
      "Sie sind automatisch gültig und anwendbar",
      "Sie müssen gekennzeichnet und gelenkt werden",
      "Sie dürfen im QMS nicht verwendet werden",
      "Sie müssen intern neu erstellt werden"
    ],
    correct: 1,
    explanation: "Extern erstellte dokumentierte Informationen, die für das QMS erforderlich sind, müssen angemessen gekennzeichnet und gelenkt werden."
  },
  {
    id: 62,
    category: "Unterstützung (Kap. 7)",
    question: "Wofür steht 'dokumentierte Information aufrechterhalten'?",
    answers: [
      "Für die Erstellung von Vorgabedokumenten",
      "Für die Aufbewahrung von Nachweisen (Aufzeichnungen)",
      "Für die jährliche Dokumentenprüfung",
      "Für die Archivierung alter Versionen"
    ],
    correct: 1,
    explanation: "'Dokumentierte Information aufrechterhalten' bezieht sich auf Aufzeichnungen (Nachweise). 'Dokumentierte Information beibehalten' gilt für Vorgabedokumente."
  },
  {
    id: 63,
    category: "Unterstützung (Kap. 7)",
    question: "Was zählt zur Infrastruktur nach ISO 9001?",
    answers: [
      "Ausschließlich Gebäude und Grundstücke",
      "Gebäude, Ausrüstung, Transport und Kommunikationstechnik",
      "Nur die Produktionsanlagen",
      "Ausschließlich IT-Systeme"
    ],
    correct: 1,
    explanation: "Zur Infrastruktur gehören: Gebäude und Versorgungseinrichtungen, Ausrüstung (Hardware, Software), Transportressourcen, Informations- und Kommunikationstechnologie."
  },

  // ===== BETRIEB - KAPITEL 8 (64-75) =====
  {
    id: 64,
    category: "Betrieb (Kap. 8)",
    question: "Was muss für die Planung und Steuerung des Betriebs festgelegt werden?",
    answers: [
      "Nur die täglichen Arbeitszeiten",
      "Anforderungen an Produkte, Prozesskriterien und Akzeptanzkriterien",
      "Ausschließlich die Liefertermine",
      "Nur die Produktionskapazitäten"
    ],
    correct: 1,
    explanation: "Die Organisation muss Anforderungen an Produkte/Dienstleistungen, Kriterien für Prozesse und Produktakzeptanz sowie erforderliche Ressourcen festlegen."
  },
  {
    id: 65,
    category: "Betrieb (Kap. 8)",
    question: "Was muss bei der Kundenkommunikation geregelt werden?",
    answers: [
      "Ausschließlich die Bearbeitung von Beschwerden",
      "Produktinformationen, Anfragen, Verträge, Rückmeldungen, Eigentum",
      "Nur die Sprache der Kommunikation",
      "Ausschließlich die Lieferavis"
    ],
    correct: 1,
    explanation: "Die Kundenkommunikation muss Produktinformationen, Anfragen/Verträge, Kundenrückmeldungen, Umgang mit Kundeneigentum und spezifische Notfallmaßnahmen umfassen."
  },
  {
    id: 66,
    category: "Betrieb (Kap. 8)",
    question: "Was ist 'Entwicklung' im Sinne der ISO 9001?",
    answers: [
      "Ausschließlich die Softwareentwicklung",
      "Der Prozess zur Festlegung von Anforderungen für Produkte/Dienstleistungen",
      "Nur die Forschung an neuen Technologien",
      "Die Weiterentwicklung des QM-Systems"
    ],
    correct: 1,
    explanation: "Entwicklung im Sinne der Norm ist der Prozess zur Festlegung von Anforderungen an Produkte/Dienstleistungen, um diese Anforderungen zu erfüllen."
  },
  {
    id: 67,
    category: "Betrieb (Kap. 8)",
    question: "Was gilt für extern bereitgestellte Prozesse, Produkte und Dienstleistungen?",
    answers: [
      "Sie unterliegen nicht dem QMS",
      "Sie müssen den festgelegten Anforderungen entsprechen",
      "Sie müssen billiger sein als interne Leistungen",
      "Sie müssen vom Zertifizierer genehmigt werden"
    ],
    correct: 1,
    explanation: "Die Organisation muss sicherstellen, dass extern bereitgestellte Prozesse, Produkte und Dienstleistungen den festgelegten Anforderungen entsprechen."
  },
  {
    id: 68,
    category: "Betrieb (Kap. 8)",
    question: "Was ist bei der Produktion und Dienstleistungserbringung gefordert?",
    answers: [
      "Maximale Auslastung der Kapazitäten",
      "Beherrschte Bedingungen mit Dokumentation und Überwachung",
      "Ausschließlich niedrige Herstellkosten",
      "Nur die Einhaltung der Liefertermine"
    ],
    correct: 1,
    explanation: "Produktion und Dienstleistungserbringung müssen unter beherrschten Bedingungen erfolgen, einschließlich dokumentierter Informationen, Überwachung und qualifiziertem Personal."
  },
  {
    id: 69,
    category: "Betrieb (Kap. 8)",
    question: "Wann muss eine Prozessvalidierung durchgeführt werden?",
    answers: [
      "Bei allen Produktionsprozessen",
      "Wenn das Ergebnis nicht durch Messung verifiziert werden kann",
      "Nur bei neuen Produkteinführungen",
      "Ausschließlich auf Kundenanforderung"
    ],
    correct: 1,
    explanation: "Eine Validierung ist erforderlich, wenn das Ergebnis eines Prozesses nicht durch nachfolgende Überwachung oder Messung verifiziert werden kann (z.B. Schweißen, Sterilisation)."
  },
  {
    id: 70,
    category: "Betrieb (Kap. 8)",
    question: "Was umfasst 'Kennzeichnung und Rückverfolgbarkeit'?",
    answers: [
      "Nur das Anbringen von Etiketten",
      "Identifizierung der Produkte und Nachvollziehbarkeit der Herkunft",
      "Ausschließlich die Barcode-Erfassung",
      "Nur die Chargennummernvergabe"
    ],
    correct: 1,
    explanation: "Kennzeichnung bedeutet, Produkte während der Produktion zu identifizieren. Rückverfolgbarkeit bedeutet, die Herkunft nachvollziehen zu können (wenn gefordert)."
  },
  {
    id: 71,
    category: "Betrieb (Kap. 8)",
    question: "Was gilt für Eigentum von Kunden oder externen Anbietern?",
    answers: [
      "Es wird wie eigenes Eigentum behandelt",
      "Es muss sorgfältig behandelt und bei Verlust informiert werden",
      "Es muss versichert werden",
      "Es ist vom QMS ausgenommen"
    ],
    correct: 1,
    explanation: "Eigentum von Kunden/externen Anbietern muss sorgfältig behandelt, gekennzeichnet, verifiziert und geschützt werden. Bei Verlust/Beschädigung muss informiert werden."
  },
  {
    id: 72,
    category: "Betrieb (Kap. 8)",
    question: "Was sind 'Tätigkeiten nach der Lieferung'?",
    answers: [
      "Ausschließlich Garantieleistungen",
      "Alle Tätigkeiten im Zusammenhang mit Produkten nach Lieferung",
      "Nur Reparatur- und Wartungsarbeiten",
      "Ausschließlich die Entsorgung"
    ],
    correct: 1,
    explanation: "Tätigkeiten nach der Lieferung umfassen z.B. Garantie, Wartung, Service, Recycling/Entsorgung – alle relevanten Anforderungen müssen berücksichtigt werden."
  },
  {
    id: 73,
    category: "Betrieb (Kap. 8)",
    question: "Was gilt bei Änderungen an Produkten oder Dienstleistungen?",
    answers: [
      "Änderungen sind generell zu vermeiden",
      "Änderungen müssen bewertet, genehmigt und dokumentiert werden",
      "Änderungen benötigen keine besondere Dokumentation",
      "Nur grundlegende Änderungen werden erfasst"
    ],
    correct: 1,
    explanation: "Änderungen müssen bewertet werden, um die Konformität sicherzustellen. Sie müssen genehmigt und als dokumentierte Information aufbewahrt werden."
  },
  {
    id: 74,
    category: "Betrieb (Kap. 8)",
    question: "Was ist bei der Freigabe von Produkten und Dienstleistungen gefordert?",
    answers: [
      "Nur die Unterschrift des Produktionsleiters",
      "Nachweis der Erfüllung der Akzeptanzkriterien mit Rückverfolgbarkeit",
      "Ausschließlich eine stichprobenartige Prüfung",
      "Nur bei Kundenprodukten erforderlich"
    ],
    correct: 1,
    explanation: "Die Freigabe muss nachweisen, dass Akzeptanzkriterien erfüllt sind. Die Dokumentation muss die Rückverfolgbarkeit zur freigebenden Person ermöglichen."
  },
  {
    id: 75,
    category: "Betrieb (Kap. 8)",
    question: "Was muss bei nichtkonformen Ergebnissen geschehen?",
    answers: [
      "Sofortige Entsorgung ohne Dokumentation",
      "Kennzeichnen, trennen, dokumentieren und über Umgang entscheiden",
      "Direkte Lieferung an den Kunden mit Vermerk",
      "Abwarten bis zum nächsten Audit"
    ],
    correct: 1,
    explanation: "Nichtkonforme Ergebnisse müssen gekennzeichnet und gelenkt werden. Es muss entschieden werden über: Korrektur, Trennung, Sperrung, Rücknahme, Kundeninformation oder Sonderfreigabe."
  },

  // ===== BEWERTUNG DER LEISTUNG - KAPITEL 9 (76-85) =====
  {
    id: 76,
    category: "Bewertung (Kap. 9)",
    question: "Was muss bezüglich Überwachung und Messung festgelegt werden?",
    answers: [
      "Nur die zu verwendenden Messgeräte",
      "Was, wann, mit welchen Methoden und wann analysiert wird",
      "Ausschließlich die Messintervalle",
      "Nur die Verantwortlichkeiten"
    ],
    correct: 1,
    explanation: "Die Organisation muss bestimmen: Was überwacht/gemessen werden muss, welche Methoden angewendet werden, wann durchgeführt wird und wann Ergebnisse analysiert werden."
  },
  {
    id: 77,
    category: "Bewertung (Kap. 9)",
    question: "Wie kann die Kundenzufriedenheit ermittelt werden?",
    answers: [
      "Ausschließlich durch Auswertung der Umsatzzahlen",
      "Durch Befragungen, Rückmeldungen, Treffen, Reklamationsanalysen",
      "Nur durch Auswertung von Beschwerden",
      "Ausschließlich durch Wiederkaufsraten"
    ],
    correct: 1,
    explanation: "Methoden zur Ermittlung der Kundenzufriedenheit können sein: Befragungen, Rückmeldungen, Treffen, Marktanalysen, Bewertungen, Reklamationen und mehr."
  },
  {
    id: 78,
    category: "Bewertung (Kap. 9)",
    question: "Was muss bei internen Audits geprüft werden?",
    answers: [
      "Ausschließlich die Dokumentation",
      "Ob das QMS die eigenen und die Normanforderungen erfüllt",
      "Nur die Einhaltung gesetzlicher Vorschriften",
      "Ausschließlich die Prozesseffizienz"
    ],
    correct: 1,
    explanation: "Interne Audits müssen prüfen, ob das QMS die eigenen geplanten Anforderungen und die Anforderungen der Norm erfüllt und wirksam aufrechterhalten wird."
  },
  {
    id: 79,
    category: "Bewertung (Kap. 9)",
    question: "In welchen Abständen müssen interne Audits durchgeführt werden?",
    answers: [
      "Täglich in allen Bereichen",
      "In geplanten Abständen",
      "Nur bei festgestellten Problemen",
      "Ausschließlich vor externen Audits"
    ],
    correct: 1,
    explanation: "Interne Audits müssen in geplanten Abständen durchgeführt werden. Die Häufigkeit richtet sich nach der Bedeutung der Prozesse und den Ergebnissen früherer Audits."
  },
  {
    id: 80,
    category: "Bewertung (Kap. 9)",
    question: "Was gilt für die Unabhängigkeit von Auditoren?",
    answers: [
      "Auditoren dürfen jeden Bereich auditieren",
      "Auditoren dürfen nicht ihren eigenen Bereich auditieren",
      "Unabhängigkeit ist nur für externe Auditoren relevant",
      "Unabhängigkeit ist optional"
    ],
    correct: 1,
    explanation: "Auditoren müssen so ausgewählt werden, dass Objektivität und Unparteilichkeit gewährleistet sind. Sie dürfen nicht ihren eigenen Arbeitsbereich auditieren."
  },
  {
    id: 81,
    category: "Bewertung (Kap. 9)",
    question: "Was muss als Input in die Managementbewertung einfließen?",
    answers: [
      "Ausschließlich die Finanzergebnisse",
      "Status von Maßnahmen, Änderungen, Leistung, Ressourcen, Risiken",
      "Nur die Ergebnisse externer Audits",
      "Ausschließlich Kundenreklamationen"
    ],
    correct: 1,
    explanation: "Inputs umfassen: Status früherer Maßnahmen, Änderungen, Leistungsinformationen (Kundenzufriedenheit, Ziele, Prozesse, Nichtkonformitäten, Audits), Ressourcen, Risiken/Chancen."
  },
  {
    id: 82,
    category: "Bewertung (Kap. 9)",
    question: "Wer ist für die Durchführung der Managementbewertung verantwortlich?",
    answers: [
      "Der Qualitätsmanagementbeauftragte",
      "Die oberste Leitung",
      "Der externe Auditor",
      "Der Controllingbereich"
    ],
    correct: 1,
    explanation: "Die oberste Leitung muss die Managementbewertung in geplanten Abständen durchführen, um Eignung, Angemessenheit und Wirksamkeit des QMS sicherzustellen."
  },
  {
    id: 83,
    category: "Bewertung (Kap. 9)",
    question: "Was muss der Output der Managementbewertung enthalten?",
    answers: [
      "Nur die Unterschriften der Teilnehmer",
      "Entscheidungen zu Verbesserungen, Änderungsbedarf und Ressourcenbedarf",
      "Ausschließlich das Protokoll der Besprechung",
      "Nur den Finanzbericht"
    ],
    correct: 1,
    explanation: "Der Output muss Entscheidungen und Maßnahmen zu Verbesserungsmöglichkeiten, Änderungsbedarf am QMS und Ressourcenbedarf enthalten."
  },
  {
    id: 84,
    category: "Bewertung (Kap. 9)",
    question: "Ist eine Dokumentation der Managementbewertung erforderlich?",
    answers: [
      "Nein, eine mündliche Durchführung reicht",
      "Ja, als Nachweis der Ergebnisse",
      "Nur bei negativen Ergebnissen",
      "Nur für externe Auditoren"
    ],
    correct: 1,
    explanation: "Die Organisation muss dokumentierte Informationen als Nachweis der Ergebnisse der Managementbewertung aufbewahren."
  },
  {
    id: 85,
    category: "Bewertung (Kap. 9)",
    question: "Was ist der Zweck von Analyse und Bewertung der Daten?",
    answers: [
      "Nur die Erstellung von Statistiken",
      "Bewertung der QMS-Wirksamkeit und Erkennung von Verbesserungen",
      "Ausschließlich die Befriedigung von Auditoren",
      "Nur die Dokumentation von Kennzahlen"
    ],
    correct: 1,
    explanation: "Analyse und Bewertung dienen dazu, die Eignung, Angemessenheit und Wirksamkeit des QMS zu bewerten und Verbesserungsmöglichkeiten zu identifizieren."
  },

  // ===== VERBESSERUNG - KAPITEL 10 (86-93) =====
  {
    id: 86,
    category: "Verbesserung (Kap. 10)",
    question: "Was muss die Organisation bezüglich Verbesserung tun?",
    answers: [
      "Nur bei Kundenreklamationen verbessern",
      "Chancen zur Verbesserung bestimmen und Maßnahmen umsetzen",
      "Ausschließlich nach externen Audits verbessern",
      "Nur dokumentierte Prozesse verbessern"
    ],
    correct: 1,
    explanation: "Die Organisation muss Chancen zur Verbesserung bestimmen und umsetzen, um Kundenanforderungen zu erfüllen und die Kundenzufriedenheit zu erhöhen."
  },
  {
    id: 87,
    category: "Verbesserung (Kap. 10)",
    question: "Was ist der Unterschied zwischen Korrektur und Korrekturmaßnahme?",
    answers: [
      "Es gibt keinen wesentlichen Unterschied",
      "Korrektur behebt den Fehler, Korrekturmaßnahme beseitigt die Ursache",
      "Korrektur ist schneller als Korrekturmaßnahme",
      "Korrekturmaßnahme erfolgt vor der Korrektur"
    ],
    correct: 1,
    explanation: "Eine Korrektur behebt den unmittelbaren Fehler (Symptom), eine Korrekturmaßnahme beseitigt die Ursache, um ein Wiederauftreten zu verhindern."
  },
  {
    id: 88,
    category: "Verbesserung (Kap. 10)",
    question: "Was ist der erste Schritt bei einer Nichtkonformität?",
    answers: [
      "Ursachenanalyse durchführen",
      "Auf die Nichtkonformität reagieren und Maßnahmen ergreifen",
      "Den Kunden informieren",
      "Den Auditor benachrichtigen"
    ],
    correct: 1,
    explanation: "Bei einer Nichtkonformität muss zunächst reagiert werden: Maßnahmen zur Beherrschung und Korrektur ergreifen und mit den Konsequenzen umgehen."
  },
  {
    id: 89,
    category: "Verbesserung (Kap. 10)",
    question: "Welche Nichtkonformitäten müssen behandelt werden?",
    answers: [
      "Nur interne Nichtkonformitäten",
      "Auch Nichtkonformitäten aus Reklamationen und von Lieferanten",
      "Nur Nichtkonformitäten aus Audits",
      "Nur schwerwiegende Nichtkonformitäten"
    ],
    correct: 1,
    explanation: "Korrekturmaßnahmen müssen für alle Nichtkonformitäten ergriffen werden, einschließlich solcher aus Reklamationen und von externen Anbietern."
  },
  {
    id: 90,
    category: "Verbesserung (Kap. 10)",
    question: "Wie wird die Wirksamkeit von Korrekturmaßnahmen geprüft?",
    answers: [
      "Durch Genehmigung des QMB",
      "Durch Bewertung, ob das Wiederauftreten verhindert wurde",
      "Durch Unterschrift der Geschäftsleitung",
      "Automatisch nach einer festgelegten Frist"
    ],
    correct: 1,
    explanation: "Die Wirksamkeit wird bewertet, indem geprüft wird, ob die Korrekturmaßnahme das Wiederauftreten der Nichtkonformität tatsächlich verhindert hat."
  },
  {
    id: 91,
    category: "Verbesserung (Kap. 10)",
    question: "Was bedeutet 'fortlaufende Verbesserung'?",
    answers: [
      "Einmalige Verbesserungsprojekte",
      "Wiederkehrende Tätigkeiten zur Verbesserung der Leistung",
      "Nur Kostensenkungsmaßnahmen",
      "Ausschließlich Produktverbesserungen"
    ],
    correct: 1,
    explanation: "Fortlaufende Verbesserung bedeutet wiederkehrende Tätigkeiten zur Verbesserung der Eignung, Angemessenheit und Wirksamkeit des QMS."
  },
  {
    id: 92,
    category: "Verbesserung (Kap. 10)",
    question: "Was muss zu Korrekturmaßnahmen dokumentiert werden?",
    answers: [
      "Nur die ergriffenen Maßnahmen",
      "Art der Nichtkonformität, ergriffene Maßnahmen und Ergebnisse",
      "Ausschließlich die Ursachenanalyse",
      "Nur der Name des Verantwortlichen"
    ],
    correct: 1,
    explanation: "Als dokumentierte Information müssen aufbewahrt werden: Art der Nichtkonformität, ergriffene Maßnahmen und Ergebnisse der Korrekturmaßnahmen."
  },
  {
    id: 93,
    category: "Verbesserung (Kap. 10)",
    question: "Welche Elemente enthält Kapitel 10 'Verbesserung'?",
    answers: [
      "Nur Korrekturmaßnahmen",
      "Allgemeines, Nichtkonformität/Korrekturmaßnahmen, fortlaufende Verbesserung",
      "Nur interne Audits und Managementbewertung",
      "Nur Dokumentationsanforderungen"
    ],
    correct: 1,
    explanation: "Kapitel 10 umfasst: 10.1 Allgemeines, 10.2 Nichtkonformität und Korrekturmaßnahmen, 10.3 Fortlaufende Verbesserung."
  },

  // ===== QM-WERKZEUGE & METHODEN (94-100) =====
  {
    id: 94,
    category: "QM-Werkzeuge",
    question: "Wofür steht die Abkürzung PDCA?",
    answers: [
      "Plan-Design-Check-Act",
      "Plan-Do-Check-Act",
      "Prepare-Do-Control-Analyze",
      "Plan-Document-Control-Archive"
    ],
    correct: 1,
    explanation: "PDCA steht für Plan-Do-Check-Act (Planen-Durchführen-Prüfen-Handeln), den Deming-Zyklus für kontinuierliche Verbesserung."
  },
  {
    id: 95,
    category: "QM-Werkzeuge",
    question: "Wofür wird das Ishikawa-Diagramm hauptsächlich verwendet?",
    answers: [
      "Für die Kostenplanung",
      "Für die systematische Ursachenanalyse",
      "Für die Terminplanung",
      "Für die Personalplanung"
    ],
    correct: 1,
    explanation: "Das Ishikawa-Diagramm (Fischgräten- oder Ursache-Wirkungs-Diagramm) wird zur systematischen Analyse von Fehlerursachen verwendet."
  },
  {
    id: 96,
    category: "QM-Werkzeuge",
    question: "Was beschreibt das Pareto-Prinzip?",
    answers: [
      "Alle Ursachen sind gleich bedeutsam",
      "Ca. 80% der Wirkungen stammen von 20% der Ursachen",
      "Jede Ursache muss einzeln analysiert werden",
      "Statistische Methoden sind unwichtig"
    ],
    correct: 1,
    explanation: "Das Pareto-Prinzip (80/20-Regel) besagt, dass oft etwa 80% der Wirkungen von 20% der Ursachen verursacht werden. Es hilft bei der Priorisierung."
  },
  {
    id: 97,
    category: "QM-Werkzeuge",
    question: "Wofür steht die Abkürzung FMEA?",
    answers: [
      "First Method of Error Analysis",
      "Fehlermöglichkeits- und Einflussanalyse",
      "Final Manufacturing Evaluation Assessment",
      "Formal Management Effectiveness Audit"
    ],
    correct: 1,
    explanation: "FMEA steht für Fehlermöglichkeits- und Einflussanalyse (Failure Mode and Effects Analysis), eine präventive Methode zur Risikoanalyse."
  },
  {
    id: 98,
    category: "QM-Werkzeuge",
    question: "Was ist der 8D-Report?",
    answers: [
      "Ein Finanzbericht mit 8 Abschnitten",
      "Eine strukturierte Problemlösungsmethode in 8 Disziplinen",
      "Ein Auditbericht mit 8 Prüfpunkten",
      "Eine Norm mit 8 Kapiteln"
    ],
    correct: 1,
    explanation: "Der 8D-Report ist eine strukturierte Problemlösungsmethode in 8 Disziplinen (Schritten), die häufig bei Kundenreklamationen verwendet wird."
  },
  {
    id: 99,
    category: "QM-Werkzeuge",
    question: "Was ist das Prinzip der 5-Why-Methode?",
    answers: [
      "Eine Planungsmethode für 5 Tage",
      "Eine Ursachenanalyse durch wiederholtes Fragen 'Warum?'",
      "Eine Prüfmethode mit 5 Kriterien",
      "Eine Dokumentationsmethode mit 5 Ebenen"
    ],
    correct: 1,
    explanation: "Die 5-Why-Methode ist eine einfache Technik zur Ursachenanalyse, bei der wiederholt 'Warum?' gefragt wird, um zur Grundursache vorzudringen."
  },
  {
    id: 100,
    category: "QM-Werkzeuge",
    question: "Welches Werkzeug gehört NICHT zu den 'Q7' (7 Qualitätswerkzeuge)?",
    answers: [
      "Histogramm",
      "SWOT-Analyse",
      "Pareto-Diagramm",
      "Qualitätsregelkarte"
    ],
    correct: 1,
    explanation: "Die Q7 sind: Fehlersammelliste, Histogramm, Qualitätsregelkarte, Pareto-Diagramm, Korrelationsdiagramm, Ishikawa-Diagramm, Flussdiagramm. SWOT gehört zu den M7."
  }
];
export default function QMBTrainer() {
  const [mode, setMode] = useState(null); // null, 'practice', 'exam'
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [timeRemaining, setTimeRemaining] = useState(3600); // 60 minutes in seconds
  const [examFinished, setExamFinished] = useState(false);

  // Shuffle function
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  // Start practice mode
  const startPractice = () => {
    setMode('practice');
    setCurrentQuestions(shuffleArray(questions));
    setCurrentIndex(0);
    setScore(0);
    setAnsweredQuestions([]);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  // Start exam mode
  const startExam = () => {
    setMode('exam');
    const shuffled = shuffleArray(questions);
    setCurrentQuestions(shuffled.slice(0, 40));
    setCurrentIndex(0);
    setScore(0);
    setAnsweredQuestions([]);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setTimeRemaining(3600);
    setExamFinished(false);
  };

  // Timer for exam mode
  useEffect(() => {
    if (mode === 'exam' && !examFinished && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining(prev => {
          if (prev <= 1) {
            setExamFinished(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [mode, examFinished, timeRemaining]);

  // Handle answer selection
  const handleAnswerClick = (answerIndex) => {
    if (mode === 'practice') {
      setSelectedAnswer(answerIndex);
      setShowExplanation(true);
      if (answerIndex === currentQuestions[currentIndex].correct) {
        setScore(score + 1);
      }
      setAnsweredQuestions([...answeredQuestions, {
        question: currentQuestions[currentIndex],
        userAnswer: answerIndex,
        correct: answerIndex === currentQuestions[currentIndex].correct
      }]);
    } else if (mode === 'exam' && !showExplanation) {
      setSelectedAnswer(answerIndex);
    }
  };

  // Next question
  const handleNext = () => {
    if (mode === 'exam' && selectedAnswer !== null) {
      if (selectedAnswer === currentQuestions[currentIndex].correct) {
        setScore(score + 1);
      }
      setAnsweredQuestions([...answeredQuestions, {
        question: currentQuestions[currentIndex],
        userAnswer: selectedAnswer,
        correct: selectedAnswer === currentQuestions[currentIndex].correct
      }]);
    }

    if (currentIndex < currentQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      if (mode === 'exam') {
        setExamFinished(true);
      }
    }
  };

  // Restart
  const handleRestart = () => {
    setMode(null);
  };

  // Format time
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQuestion = currentQuestions[currentIndex];
  const progress = currentQuestions.length > 0 ? ((currentIndex + 1) / currentQuestions.length) * 100 : 0;

  return (
    <>
      <Head>
        <title>DEKRA QMB Prüfungstrainer | QCore Consulting</title>
        <meta name="description" content="Interaktiver Prüfungstrainer für die DEKRA QMB-Zertifizierung. 100 Multiple-Choice Fragen zu ISO 9001:2015, QM-Grundsätzen und Qualitätswerkzeugen." />
      </Head>

      <Navigation />

      <main className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto px-8 py-12">
          {/* Mode Selection */}
          {!mode && (
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-dark-navy mb-6">
                DEKRA QMB Prüfungstrainer
              </h1>
              <p className="text-lg mb-8" style={{ color: '#000000' }}>
                Bereiten Sie sich optimal auf die DEKRA Qualitätsmanagement-Beauftragten Prüfung vor. Wählen Sie einen Modus:
              </p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-8 border border-gray-600">
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1e293b' }}>Übungsmodus</h3>
                  <ul className="mb-6 space-y-2" style={{ color: '#000000' }}>
                    <li>• Alle 100 Fragen</li>
                    <li>• Sofortige Erklärung nach jeder Frage</li>
                    <li>• Keine Zeitbegrenzung</li>
                    <li>• Ideal zum Lernen</li>
                  </ul>
                  <button
                    onClick={startPractice}
                    className="w-full bg-qcore-blue text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
                  >
                    Übungsmodus starten
                  </button>
                </div>

                <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-8 border border-gray-600">
                  <h3 className="text-2xl font-semibold mb-4" style={{ color: '#1e293b' }}>Prüfungsmodus</h3>
                  <ul className="mb-6 space-y-2" style={{ color: '#000000' }}>
                    <li>• 40 zufällige Fragen</li>
                    <li>• 60 Minuten Zeit</li>
                    <li>• Ergebnis am Ende</li>
                    <li>• Prüfungssimulation</li>
                  </ul>
                  <button
                    onClick={startExam}
                    className="w-full bg-qcore-cyan text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
                  >
                    Prüfungsmodus starten
                  </button>
                </div>
              </div>

              <div className="bg-qcore-navy bg-opacity-10 rounded-lg p-6 border border-gray-600">
                <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Themengebiete:</h4>
                <div className="grid md:grid-cols-2 gap-2" style={{ color: '#000000' }}>
                  <div>• ISO 9001 Grundlagen (15 Fragen)</div>
                  <div>• QM-Grundsätze (10 Fragen)</div>
                  <div>• Kontext (8 Fragen)</div>
                  <div>• Führung (10 Fragen)</div>
                  <div>• Planung (8 Fragen)</div>
                  <div>• Unterstützung (12 Fragen)</div>
                  <div>• Betrieb (12 Fragen)</div>
                  <div>• Bewertung (10 Fragen)</div>
                  <div>• Verbesserung (8 Fragen)</div>
                  <div>• QM-Werkzeuge (7 Fragen)</div>
                </div>
              </div>
            </div>
          )}

          {/* Quiz Interface */}
          {mode && currentQuestion && !examFinished && (
            <div>
              {/* Header */}
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={handleRestart}
                  className="text-qcore-blue hover:underline"
                >
                  ← Zurück zur Auswahl
                </button>
                {mode === 'exam' && (
                  <div className="text-xl font-semibold" style={{ color: timeRemaining < 300 ? '#dc2626' : '#1e293b' }}>
                    {formatTime(timeRemaining)}
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-2" style={{ color: '#000000' }}>
                  <span>Frage {currentIndex + 1} von {currentQuestions.length}</span>
                  <span>{currentQuestion.category}</span>
                </div>
                <div className="w-full bg-gray-300 rounded-full h-2">
                  <div
                    className="bg-qcore-blue h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="bg-qcore-navy bg-opacity-10 rounded-lg p-6 mb-6 border border-gray-600">
                <h2 className="text-2xl font-semibold mb-6" style={{ color: '#1e293b' }}>
                  {currentQuestion.question}
                </h2>

                {/* Answers */}
                <div className="space-y-3">
                  {currentQuestion.answers.map((answer, index) => {
                    let buttonClass = "w-full text-left p-4 rounded border-2 transition-all ";

                    if (showExplanation) {
                      if (index === currentQuestion.correct) {
                        buttonClass += "bg-green-100 border-green-500 ";
                      } else if (index === selectedAnswer) {
                        buttonClass += "bg-red-100 border-red-500 ";
                      } else {
                        buttonClass += "bg-white border-gray-300 ";
                      }
                    } else {
                      if (selectedAnswer === index) {
                        buttonClass += "bg-qcore-blue bg-opacity-20 border-qcore-blue ";
                      } else {
                        buttonClass += "bg-white border-gray-300 hover:border-qcore-blue hover:bg-qcore-blue hover:bg-opacity-10 ";
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerClick(index)}
                        disabled={showExplanation}
                        className={buttonClass}
                        style={{ color: '#000000' }}
                      >
                        {answer}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Explanation (Practice Mode) */}
              {mode === 'practice' && showExplanation && (
                <div className="bg-blue-50 rounded-lg p-6 mb-6 border border-blue-200">
                  <h4 className="font-semibold mb-2" style={{ color: '#1e293b' }}>Erklärung:</h4>
                  <p style={{ color: '#000000' }}>{currentQuestion.explanation}</p>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <div style={{ color: '#000000' }}>
                  Richtig: {score} / {answeredQuestions.length}
                </div>
                <button
                  onClick={handleNext}
                  disabled={selectedAnswer === null}
                  className={`px-8 py-3 rounded transition-opacity ${
                    selectedAnswer === null
                      ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
                      : 'bg-qcore-blue text-white hover:opacity-90'
                  }`}
                >
                  {currentIndex < currentQuestions.length - 1 ? 'Weiter' : 'Beenden'}
                </button>
              </div>
            </div>
          )}

          {/* Results */}
          {(examFinished || (mode === 'practice' && currentIndex === currentQuestions.length - 1 && showExplanation)) && (
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-dark-navy mb-6">
                Ergebnis
              </h1>

              <div className="bg-qcore-navy bg-opacity-20 rounded-lg p-8 mb-8 border border-gray-600 text-center">
                <div className="text-6xl font-bold mb-4" style={{ color: '#1e293b' }}>
                  {score} / {currentQuestions.length}
                </div>
                <div className="text-2xl mb-2" style={{ color: '#000000' }}>
                  {Math.round((score / currentQuestions.length) * 100)}% richtig
                </div>
                <div className="text-lg" style={{ color: score >= currentQuestions.length * 0.7 ? '#16a34a' : '#dc2626' }}>
                  {score >= currentQuestions.length * 0.7 ? '✓ Bestanden (≥70%)' : '✗ Nicht bestanden (<70%)'}
                </div>
              </div>

              <div className="flex gap-4">
                <button
                  onClick={handleRestart}
                  className="flex-1 bg-qcore-blue text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
                >
                  Neue Prüfung starten
                </button>
                <Link href="/qm-wissen">
                  <span className="flex-1 inline-block text-center bg-gray-600 text-white px-6 py-3 rounded hover:opacity-90 transition-opacity cursor-pointer">
                    Zurück zu QM-Wissen
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
