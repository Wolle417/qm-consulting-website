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
      "8 Kapitel",
      "10 Kapitel",
      "12 Kapitel",
      "7 Kapitel"
    ],
    correct: 1,
    explanation: "Die ISO 9001:2015 hat 10 Kapitel (0-10), wobei die Kapitel 4-10 die konkreten Anforderungen enthalten."
  },
  {
    id: 2,
    category: "ISO 9001 Grundlagen",
    question: "Welches ist das erste Kapitel der ISO 9001:2015 mit konkreten Anforderungen?",
    answers: [
      "Kapitel 1 – Anwendungsbereich",
      "Kapitel 3 – Begriffe",
      "Kapitel 4 – Kontext der Organisation",
      "Kapitel 5 – Führung"
    ],
    correct: 2,
    explanation: "Kapitel 4 'Kontext der Organisation' ist das erste Kapitel mit konkreten Anforderungen. Kapitel 1-3 sind einleitend."
  },
  {
    id: 3,
    category: "ISO 9001 Grundlagen",
    question: "Was bedeutet die 'High Level Structure' (HLS)?",
    answers: [
      "Eine besonders anspruchsvolle Zertifizierungsstufe",
      "Eine einheitliche Grundstruktur für alle ISO-Managementsystemnormen",
      "Die oberste Führungsebene im Unternehmen",
      "Ein spezielles Audit-Verfahren"
    ],
    correct: 1,
    explanation: "Die High Level Structure (HLS) ist eine einheitliche Grundstruktur, die seit 2015 für alle ISO-Managementsystemnormen gilt und deren Integration erleichtert."
  },
  {
    id: 4,
    category: "ISO 9001 Grundlagen",
    question: "Welche Norm definiert die Grundlagen und Begriffe für Qualitätsmanagementsysteme?",
    answers: [
      "ISO 9001",
      "ISO 9000",
      "ISO 19011",
      "ISO 9004"
    ],
    correct: 1,
    explanation: "Die ISO 9000 definiert die Grundlagen und Begriffe für QM-Systeme. ISO 9001 enthält die Anforderungen, ISO 19011 die Auditrichtlinien."
  },
  {
    id: 5,
    category: "ISO 9001 Grundlagen",
    question: "Was ist der Hauptzweck der ISO 9001?",
    answers: [
      "Steigerung des Unternehmensgewinns",
      "Nachweis der Fähigkeit, Produkte/Dienstleistungen bereitzustellen, die Kundenanforderungen erfüllen",
      "Reduzierung der Mitarbeiterzahl",
      "Erfüllung von Umweltanforderungen"
    ],
    correct: 1,
    explanation: "Die ISO 9001 dient dem Nachweis der Fähigkeit, Produkte und Dienstleistungen bereitzustellen, die Kunden- und behördliche Anforderungen erfüllen."
  },
  {
    id: 6,
    category: "ISO 9001 Grundlagen",
    question: "Der Begriff 'dokumentierte Information' ersetzt seit 2015 welche früheren Begriffe?",
    answers: [
      "Handbuch und Verfahren",
      "Dokumente und Aufzeichnungen",
      "Arbeitsanweisungen und Checklisten",
      "Formulare und Protokolle"
    ],
    correct: 1,
    explanation: "Der Begriff 'dokumentierte Information' ersetzt die früheren Begriffe 'Dokumente' und 'Aufzeichnungen' aus der ISO 9001:2008."
  },
  {
    id: 7,
    category: "ISO 9001 Grundlagen",
    question: "Ist ein QM-Handbuch nach ISO 9001:2015 verpflichtend?",
    answers: [
      "Ja, immer",
      "Nein, es ist nicht mehr explizit gefordert",
      "Nur für Unternehmen mit mehr als 50 Mitarbeitern",
      "Nur bei Erstzertifizierung"
    ],
    correct: 1,
    explanation: "Die ISO 9001:2015 fordert kein QM-Handbuch mehr explizit. Die Organisation entscheidet selbst über die Form der Dokumentation."
  },
  {
    id: 8,
    category: "ISO 9001 Grundlagen",
    question: "Was bedeutet der 'prozessorientierte Ansatz'?",
    answers: [
      "Jeder Mitarbeiter arbeitet nur in einem Prozess",
      "Arbeit wird als Zusammenwirken von Prozessen verstanden und gesteuert",
      "Prozesse werden nur bei Bedarf dokumentiert",
      "Es gibt keine Abteilungen mehr"
    ],
    correct: 1,
    explanation: "Der prozessorientierte Ansatz bedeutet, dass die Arbeit als Zusammenwirken von Prozessen verstanden und gesteuert wird, um Ergebnisse effektiver zu erreichen."
  },
  {
    id: 9,
    category: "ISO 9001 Grundlagen",
    question: "Was ist NEU in der ISO 9001:2015 im Vergleich zur 2008er Version?",
    answers: [
      "Interne Audits",
      "Risikobasiertes Denken",
      "Korrekturmaßnahmen",
      "Managementbewertung"
    ],
    correct: 1,
    explanation: "Das risikobasierte Denken ist eine wesentliche Neuerung der ISO 9001:2015. Es ersetzt die separaten 'Vorbeugemaßnahmen' der 2008er Version."
  },
  {
    id: 10,
    category: "ISO 9001 Grundlagen",
    question: "Welche Aussage zum Anwendungsbereich der ISO 9001 ist korrekt?",
    answers: [
      "Die Norm gilt nur für produzierende Unternehmen",
      "Die Norm ist branchenunabhängig anwendbar",
      "Die Norm gilt nur für Unternehmen mit mehr als 10 Mitarbeitern",
      "Die Norm gilt nur in Europa"
    ],
    correct: 1,
    explanation: "Die ISO 9001 ist branchenunabhängig und kann von jeder Organisation angewendet werden, unabhängig von Größe, Art oder Produkt."
  },
  {
    id: 11,
    category: "ISO 9001 Grundlagen",
    question: "Was regelt die ISO 19011?",
    answers: [
      "Anforderungen an QM-Systeme",
      "Leitfaden zur Auditierung von Managementsystemen",
      "Begriffe und Definitionen",
      "Umweltmanagement"
    ],
    correct: 1,
    explanation: "Die ISO 19011 ist der Leitfaden zur Auditierung von Managementsystemen und enthält Empfehlungen für die Planung und Durchführung von Audits."
  },
  {
    id: 12,
    category: "ISO 9001 Grundlagen",
    question: "Können einzelne Anforderungen der ISO 9001 ausgeschlossen werden?",
    answers: [
      "Nein, niemals",
      "Ja, wenn sie nicht anwendbar sind und die Konformität nicht beeinträchtigt wird",
      "Ja, beliebig nach Wunsch des Unternehmens",
      "Nur mit Genehmigung der Zertifizierungsstelle"
    ],
    correct: 1,
    explanation: "Anforderungen können ausgeschlossen werden, wenn sie nicht anwendbar sind, dies begründet wird und die Konformität von Produkten/Dienstleistungen nicht beeinträchtigt wird."
  },
  {
    id: 13,
    category: "ISO 9001 Grundlagen",
    question: "Wie lange ist ein ISO 9001 Zertifikat gültig?",
    answers: [
      "1 Jahr",
      "3 Jahre",
      "5 Jahre",
      "Unbegrenzt"
    ],
    correct: 1,
    explanation: "Ein ISO 9001 Zertifikat ist 3 Jahre gültig. Dazwischen finden jährliche Überwachungsaudits statt."
  },
  {
    id: 14,
    category: "ISO 9001 Grundlagen",
    question: "Was ist ein 'Überwachungsaudit'?",
    answers: [
      "Das erste Audit zur Zertifizierung",
      "Ein jährliches Audit zwischen den Rezertifizierungen",
      "Ein unangekündigtes Audit",
      "Ein internes Audit"
    ],
    correct: 1,
    explanation: "Überwachungsaudits sind die jährlichen Audits durch die Zertifizierungsstelle zwischen den Rezertifizierungsaudits (alle 3 Jahre)."
  },
  {
    id: 15,
    category: "ISO 9001 Grundlagen",
    question: "Was bedeutet 'Konformität' im QM-Kontext?",
    answers: [
      "Übereinstimmung mit den Wettbewerbern",
      "Erfüllung einer Anforderung",
      "Zustimmung des Kunden",
      "Einhaltung von Lieferzeiten"
    ],
    correct: 1,
    explanation: "Konformität bedeutet die Erfüllung einer Anforderung. Das Gegenteil ist 'Nichtkonformität'."
  },

  // ===== DIE 7 QM-GRUNDSÄTZE (16-25) =====
  {
    id: 16,
    category: "QM-Grundsätze",
    question: "Wie viele Qualitätsmanagement-Grundsätze gibt es nach ISO 9000:2015?",
    answers: [
      "5",
      "7",
      "8",
      "10"
    ],
    correct: 1,
    explanation: "Es gibt 7 QM-Grundsätze. In der Version 2008 waren es noch 8, der Grundsatz 'Systemorientierter Managementansatz' wurde integriert."
  },
  {
    id: 17,
    category: "QM-Grundsätze",
    question: "Welcher ist der ERSTE QM-Grundsatz?",
    answers: [
      "Führung",
      "Kundenorientierung",
      "Prozessorientierung",
      "Verbesserung"
    ],
    correct: 1,
    explanation: "Kundenorientierung ist der erste und wichtigste QM-Grundsatz. Der Hauptfokus liegt auf der Erfüllung von Kundenanforderungen."
  },
  {
    id: 18,
    category: "QM-Grundsätze",
    question: "Was bedeutet der Grundsatz 'Einbeziehung von Personen'?",
    answers: [
      "Alle Mitarbeiter müssen an Audits teilnehmen",
      "Kompetente, befugte und engagierte Personen sind wesentlich für den Erfolg",
      "Externe Berater müssen einbezogen werden",
      "Kunden müssen in Entscheidungen einbezogen werden"
    ],
    correct: 1,
    explanation: "Der Grundsatz besagt, dass kompetente, befugte und engagierte Personen auf allen Ebenen wesentlich sind, um die Fähigkeit zur Wertschöpfung zu steigern."
  },
  {
    id: 19,
    category: "QM-Grundsätze",
    question: "Was gehört NICHT zu den 7 QM-Grundsätzen?",
    answers: [
      "Kundenorientierung",
      "Gewinnmaximierung",
      "Beziehungsmanagement",
      "Faktengestützte Entscheidungsfindung"
    ],
    correct: 1,
    explanation: "Gewinnmaximierung ist kein QM-Grundsatz. Die 7 Grundsätze sind: Kundenorientierung, Führung, Einbeziehung von Personen, Prozessorientierung, Verbesserung, faktengestützte Entscheidungsfindung, Beziehungsmanagement."
  },
  {
    id: 20,
    category: "QM-Grundsätze",
    question: "Was bedeutet 'faktengestützte Entscheidungsfindung'?",
    answers: [
      "Nur der Geschäftsführer trifft Entscheidungen",
      "Entscheidungen basieren auf der Analyse von Daten und Informationen",
      "Entscheidungen werden demokratisch getroffen",
      "Fakten werden nur bei Audits vorgelegt"
    ],
    correct: 1,
    explanation: "Dieser Grundsatz bedeutet, dass Entscheidungen auf der Analyse und Auswertung von Daten und Informationen basieren sollten, nicht auf Vermutungen."
  },
  {
    id: 21,
    category: "QM-Grundsätze",
    question: "Der Grundsatz 'Beziehungsmanagement' bezieht sich auf:",
    answers: [
      "Nur Kundenbeziehungen",
      "Beziehungen zu allen relevanten interessierten Parteien",
      "Nur Lieferantenbeziehungen",
      "Mitarbeiterbeziehungen"
    ],
    correct: 1,
    explanation: "Beziehungsmanagement bezieht sich auf die Beziehungen zu allen relevanten interessierten Parteien wie Lieferanten, Partner und andere, die den Erfolg der Organisation beeinflussen."
  },
  {
    id: 22,
    category: "QM-Grundsätze",
    question: "Was bedeutet der Grundsatz 'Verbesserung'?",
    answers: [
      "Jährliche Gehaltserhöhungen",
      "Fortlaufende Verbesserung ist wesentlich für den Erfolg",
      "Verbesserung nur bei Kundenreklamationen",
      "Verbesserung nur nach Audits"
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
      "Prozessorientierung",
      "Verbesserung"
    ],
    correct: 1,
    explanation: "Der Grundsatz 'Führung' betont, dass die oberste Leitung auf allen Ebenen Einheit in Bezug auf Zielsetzung und Ausrichtung herstellen muss."
  },
  {
    id: 24,
    category: "QM-Grundsätze",
    question: "Was ist der Nutzen der 'Prozessorientierung'?",
    answers: [
      "Weniger Dokumentation erforderlich",
      "Beständige und vorhersehbare Ergebnisse werden wirksamer erzielt",
      "Weniger Mitarbeiter erforderlich",
      "Schnellere Zertifizierung"
    ],
    correct: 1,
    explanation: "Durch Prozessorientierung werden beständige und vorhersehbare Ergebnisse wirksamer und effizienter erzielt, da Aktivitäten als zusammenhängende Prozesse verstanden werden."
  },
  {
    id: 25,
    category: "QM-Grundsätze",
    question: "Wie kann die Kundenorientierung umgesetzt werden?",
    answers: [
      "Durch niedrige Preise",
      "Durch Verstehen und Erfüllen aktueller und zukünftiger Kundenbedürfnisse",
      "Durch aggressive Werbung",
      "Durch lange Garantiezeiten"
    ],
    correct: 1,
    explanation: "Kundenorientierung wird umgesetzt durch das Verstehen der aktuellen und zukünftigen Kundenbedürfnisse, das Erfüllen von Kundenanforderungen und das Streben, Kundenerwartungen zu übertreffen."
  },

  // ===== KONTEXT DER ORGANISATION - KAPITEL 4 (26-33) =====
  {
    id: 26,
    category: "Kontext (Kap. 4)",
    question: "Was muss die Organisation nach Kapitel 4.1 ermitteln?",
    answers: [
      "Nur die Kundenzufriedenheit",
      "Interne und externe Themen, die für ihren Zweck relevant sind",
      "Nur die Wettbewerbssituation",
      "Nur die gesetzlichen Anforderungen"
    ],
    correct: 1,
    explanation: "Nach 4.1 muss die Organisation interne und externe Themen ermitteln, die für ihren Zweck und ihre strategische Ausrichtung relevant sind."
  },
  {
    id: 27,
    category: "Kontext (Kap. 4)",
    question: "Was sind 'interessierte Parteien' nach ISO 9001?",
    answers: [
      "Nur die Anteilseigner",
      "Personen oder Organisationen, die eine Entscheidung oder Tätigkeit beeinflussen können",
      "Nur die Kunden",
      "Nur die Lieferanten"
    ],
    correct: 1,
    explanation: "Interessierte Parteien sind alle Personen oder Organisationen, die eine Entscheidung oder Tätigkeit beeinflussen können oder davon beeinflusst werden (z.B. Kunden, Lieferanten, Mitarbeiter, Behörden)."
  },
  {
    id: 28,
    category: "Kontext (Kap. 4)",
    question: "Was muss beim Anwendungsbereich des QM-Systems festgelegt werden?",
    answers: [
      "Nur die Produkte",
      "Grenzen und Anwendbarkeit sowie mögliche Ausschlüsse mit Begründung",
      "Nur die Standorte",
      "Nur die Mitarbeiterzahl"
    ],
    correct: 1,
    explanation: "Der Anwendungsbereich muss die Grenzen, die Anwendbarkeit und mögliche Ausschlüsse (mit Begründung) festlegen und als dokumentierte Information verfügbar sein."
  },
  {
    id: 29,
    category: "Kontext (Kap. 4)",
    question: "Was fordert die ISO 9001 bezüglich der Prozesse des QM-Systems?",
    answers: [
      "Mindestens 10 Prozesse müssen definiert sein",
      "Prozesse und deren Wechselwirkungen müssen festgelegt werden",
      "Nur Kernprozesse müssen definiert werden",
      "Prozesse müssen von externen Beratern definiert werden"
    ],
    correct: 1,
    explanation: "Die Organisation muss die für das QM-System erforderlichen Prozesse und deren Wechselwirkungen bestimmen, einschließlich Eingaben, Ergebnisse, Ressourcen und Verantwortlichkeiten."
  },
  {
    id: 30,
    category: "Kontext (Kap. 4)",
    question: "Welche der folgenden ist KEINE typische interessierte Partei?",
    answers: [
      "Kunden",
      "Wettbewerber (als Stakeholder)",
      "Mitarbeiter",
      "Behörden"
    ],
    correct: 1,
    explanation: "Wettbewerber sind normalerweise keine 'interessierten Parteien' im Sinne der Norm, da sie keine direkten Anforderungen an das QM-System stellen. Typische interessierte Parteien sind Kunden, Mitarbeiter, Lieferanten, Eigentümer und Behörden."
  },
  {
    id: 31,
    category: "Kontext (Kap. 4)",
    question: "Was ist ein 'Prozess' nach ISO 9000?",
    answers: [
      "Eine Abteilung im Unternehmen",
      "Ein Satz zusammenhängender Tätigkeiten, der Eingaben in Ergebnisse umwandelt",
      "Ein Computerprogramm",
      "Ein Dokument"
    ],
    correct: 1,
    explanation: "Ein Prozess ist ein Satz zusammenhängender oder sich gegenseitig beeinflussender Tätigkeiten, der Eingaben zum Erzielen eines vorgesehenen Ergebnisses verwendet."
  },
  {
    id: 32,
    category: "Kontext (Kap. 4)",
    question: "Müssen die Anforderungen interessierter Parteien dokumentiert werden?",
    answers: [
      "Nein, nie",
      "Ja, die relevanten Anforderungen müssen bestimmt werden",
      "Nur bei Großunternehmen",
      "Nur auf Anfrage des Auditors"
    ],
    correct: 1,
    explanation: "Die Organisation muss die für das QM-System relevanten interessierten Parteien und deren relevante Anforderungen bestimmen und diese überwachen."
  },
  {
    id: 33,
    category: "Kontext (Kap. 4)",
    question: "Welche Prozessarten gibt es typischerweise?",
    answers: [
      "Nur Kernprozesse",
      "Führungs-, Kern- und Unterstützungsprozesse",
      "Nur Produktionsprozesse",
      "Nur Verwaltungsprozesse"
    ],
    correct: 1,
    explanation: "Typischerweise unterscheidet man Führungsprozesse (Management), Kernprozesse (Wertschöpfung) und Unterstützungsprozesse (Support). Die Norm schreibt diese Einteilung nicht vor."
  },

  // ===== FÜHRUNG - KAPITEL 5 (34-43) =====
  {
    id: 34,
    category: "Führung (Kap. 5)",
    question: "Wer trägt nach ISO 9001:2015 die Gesamtverantwortung für das QM-System?",
    answers: [
      "Der Qualitätsmanagementbeauftragte",
      "Die oberste Leitung",
      "Der Auditor",
      "Alle Mitarbeiter gleichermaßen"
    ],
    correct: 1,
    explanation: "Die oberste Leitung trägt die Gesamtverantwortung für das QM-System und muss Führung und Verpflichtung zeigen."
  },
  {
    id: 35,
    category: "Führung (Kap. 5)",
    question: "Was muss die Qualitätspolitik enthalten?",
    answers: [
      "Umsatzziele",
      "Eine Verpflichtung zur Erfüllung von Anforderungen und zur fortlaufenden Verbesserung",
      "Konkrete Produktpreise",
      "Mitarbeiterzahlen"
    ],
    correct: 1,
    explanation: "Die Qualitätspolitik muss eine Verpflichtung zur Erfüllung zutreffender Anforderungen und zur fortlaufenden Verbesserung des QM-Systems enthalten."
  },
  {
    id: 36,
    category: "Führung (Kap. 5)",
    question: "Wie muss die Qualitätspolitik kommuniziert werden?",
    answers: [
      "Nur dem Management",
      "Sie muss innerhalb der Organisation verstanden und angewendet werden",
      "Nur bei Audits vorgelegt werden",
      "Nur an Kunden"
    ],
    correct: 1,
    explanation: "Die Qualitätspolitik muss innerhalb der Organisation kommuniziert, verstanden und angewendet werden sowie für interessierte Parteien verfügbar sein."
  },
  {
    id: 37,
    category: "Führung (Kap. 5)",
    question: "Gibt es in der ISO 9001:2015 noch einen 'Beauftragten der obersten Leitung'?",
    answers: [
      "Ja, er ist verpflichtend",
      "Nein, die Rolle ist nicht mehr explizit gefordert",
      "Ja, aber nur bei großen Unternehmen",
      "Ja, aber mit anderem Namen"
    ],
    correct: 1,
    explanation: "Die ISO 9001:2015 fordert keinen 'Beauftragten der obersten Leitung' mehr explizit. Die Verantwortung liegt bei der obersten Leitung, die Aufgaben jedoch delegieren kann."
  },
  {
    id: 38,
    category: "Führung (Kap. 5)",
    question: "Was bedeutet 'Kundenorientierung' in Kapitel 5?",
    answers: [
      "Kunden bekommen immer Rabatt",
      "Kundenanforderungen werden ermittelt und erfüllt, Risiken/Chancen werden behandelt",
      "Kunden werden zu Audits eingeladen",
      "Kunden dürfen Mitarbeiter einstellen"
    ],
    correct: 1,
    explanation: "Die oberste Leitung muss sicherstellen, dass Kundenanforderungen ermittelt und erfüllt werden und Risiken/Chancen, die die Konformität beeinflussen können, behandelt werden."
  },
  {
    id: 39,
    category: "Führung (Kap. 5)",
    question: "Was muss bei den Rollen, Verantwortlichkeiten und Befugnissen sichergestellt werden?",
    answers: [
      "Nur der Geschäftsführer hat Befugnisse",
      "Sie sind festgelegt, kommuniziert und verstanden",
      "Sie werden nur mündlich mitgeteilt",
      "Sie ändern sich täglich"
    ],
    correct: 1,
    explanation: "Die oberste Leitung muss sicherstellen, dass Verantwortlichkeiten und Befugnisse für relevante Rollen festgelegt, kommuniziert und innerhalb der Organisation verstanden werden."
  },
  {
    id: 40,
    category: "Führung (Kap. 5)",
    question: "Muss die Qualitätspolitik als dokumentierte Information vorliegen?",
    answers: [
      "Nein, mündlich reicht",
      "Ja, sie muss als dokumentierte Information verfügbar sein",
      "Nur bei Großunternehmen",
      "Nur auf Englisch"
    ],
    correct: 1,
    explanation: "Die Qualitätspolitik muss als dokumentierte Information verfügbar sein, kommuniziert und verstanden werden."
  },
  {
    id: 41,
    category: "Führung (Kap. 5)",
    question: "Was ist eine Aufgabe der obersten Leitung bezüglich Ressourcen?",
    answers: [
      "Ressourcen so gering wie möglich halten",
      "Sicherstellen, dass erforderliche Ressourcen verfügbar sind",
      "Ressourcen an Wettbewerber weitergeben",
      "Ressourcen nur bei Audits bereitstellen"
    ],
    correct: 1,
    explanation: "Die oberste Leitung muss sicherstellen, dass die für das QM-System erforderlichen Ressourcen zur Verfügung stehen."
  },
  {
    id: 42,
    category: "Führung (Kap. 5)",
    question: "Wie zeigt die oberste Leitung Führung und Verpflichtung?",
    answers: [
      "Durch Abwesenheit bei Audits",
      "Durch Rechenschaft für die Wirksamkeit des QM-Systems",
      "Durch Delegation aller Aufgaben",
      "Durch Unterschrift auf Dokumenten"
    ],
    correct: 1,
    explanation: "Die oberste Leitung zeigt Führung z.B. durch Rechenschaft für die Wirksamkeit, Festlegen der Politik und Ziele, Integration ins Geschäft, Förderung der Verbesserung."
  },
  {
    id: 43,
    category: "Führung (Kap. 5)",
    question: "Wofür muss die oberste Leitung Rechenschaft übernehmen?",
    answers: [
      "Für den Jahresabschluss",
      "Für die Wirksamkeit des Qualitätsmanagementsystems",
      "Für die Urlaubsplanung",
      "Für die IT-Sicherheit"
    ],
    correct: 1,
    explanation: "Die oberste Leitung muss die Rechenschaft für die Wirksamkeit des QM-Systems übernehmen - sie kann nicht vollständig delegiert werden."
  },

  // ===== PLANUNG - KAPITEL 6 (44-51) =====
  {
    id: 44,
    category: "Planung (Kap. 6)",
    question: "Was muss die Organisation bei der Planung berücksichtigen?",
    answers: [
      "Nur Chancen",
      "Risiken und Chancen",
      "Nur Risiken",
      "Weder Risiken noch Chancen"
    ],
    correct: 1,
    explanation: "Die Organisation muss sowohl Risiken als auch Chancen bestimmen, die behandelt werden müssen, um erwünschte Ergebnisse zu erzielen."
  },
  {
    id: 45,
    category: "Planung (Kap. 6)",
    question: "Wie wird 'Risiko' in der ISO 9001 definiert?",
    answers: [
      "Nur negative Ereignisse",
      "Auswirkung von Ungewissheit",
      "Nur finanzielle Verluste",
      "Nur Produktfehler"
    ],
    correct: 1,
    explanation: "Risiko ist definiert als 'Auswirkung von Ungewissheit'. Diese kann positiv (Chance) oder negativ sein."
  },
  {
    id: 46,
    category: "Planung (Kap. 6)",
    question: "Erfordert die ISO 9001 ein formales Risikomanagement nach ISO 31000?",
    answers: [
      "Ja, verpflichtend",
      "Nein, nur risikobasiertes Denken ist gefordert",
      "Ja, bei mehr als 100 Mitarbeitern",
      "Nur in der Automobilindustrie"
    ],
    correct: 1,
    explanation: "Die ISO 9001 fordert kein formales Risikomanagement nach ISO 31000, sondern 'risikobasiertes Denken', das in die Prozesse integriert wird."
  },
  {
    id: 47,
    category: "Planung (Kap. 6)",
    question: "Welche Anforderungen gelten für Qualitätsziele?",
    answers: [
      "Sie müssen geheim bleiben",
      "Sie müssen messbar sein und mit der Qualitätspolitik vereinbar",
      "Sie müssen jeden Tag geändert werden",
      "Sie dürfen nicht dokumentiert werden"
    ],
    correct: 1,
    explanation: "Qualitätsziele müssen mit der Politik vereinbar, messbar, überwacht, kommuniziert und aktualisiert werden. Sie müssen dokumentiert sein."
  },
  {
    id: 48,
    category: "Planung (Kap. 6)",
    question: "Was muss bei Qualitätszielen geplant werden?",
    answers: [
      "Nur das Ziel selbst",
      "Was getan wird, welche Ressourcen, wer verantwortlich ist, wann abgeschlossen, wie bewertet",
      "Nur der Verantwortliche",
      "Nur das Budget"
    ],
    correct: 1,
    explanation: "Bei der Planung zur Erreichung von Qualitätszielen muss festgelegt werden: Was getan wird, welche Ressourcen erforderlich sind, wer verantwortlich ist, wann es abgeschlossen wird und wie die Ergebnisse bewertet werden."
  },
  {
    id: 49,
    category: "Planung (Kap. 6)",
    question: "Was ersetzt das 'risikobasierte Denken' aus der ISO 9001:2008?",
    answers: [
      "Korrekturmaßnahmen",
      "Vorbeugemaßnahmen",
      "Interne Audits",
      "Managementbewertung"
    ],
    correct: 1,
    explanation: "Das risikobasierte Denken ersetzt die expliziten 'Vorbeugemaßnahmen' der ISO 9001:2008. Risiken proaktiv zu behandeln ist jetzt in alle Prozesse integriert."
  },
  {
    id: 50,
    category: "Planung (Kap. 6)",
    question: "Auf welchen Ebenen müssen Qualitätsziele festgelegt werden?",
    answers: [
      "Nur auf Unternehmensebene",
      "Auf relevanten Funktionen, Ebenen und Prozessen",
      "Nur auf Abteilungsebene",
      "Nur für die Produktion"
    ],
    correct: 1,
    explanation: "Qualitätsziele müssen für relevante Funktionen, Ebenen und Prozesse festgelegt werden, nicht nur auf einer Ebene."
  },
  {
    id: 51,
    category: "Planung (Kap. 6)",
    question: "Was muss bei der Planung von Änderungen berücksichtigt werden?",
    answers: [
      "Nur die Kosten",
      "Zweck, Konsequenzen, Integrität des QMS, Ressourcen, Verantwortlichkeiten",
      "Nur der Zeitplan",
      "Nur die Genehmigung des Chefs"
    ],
    correct: 1,
    explanation: "Bei Änderungen am QMS müssen der Zweck, mögliche Konsequenzen, die Integrität des QMS, Verfügbarkeit von Ressourcen und Zuweisung von Verantwortlichkeiten berücksichtigt werden."
  },

  // ===== UNTERSTÜTZUNG - KAPITEL 7 (52-63) =====
  {
    id: 52,
    category: "Unterstützung (Kap. 7)",
    question: "Welche Ressourcen müssen nach Kapitel 7 bestimmt werden?",
    answers: [
      "Nur finanzielle Ressourcen",
      "Personen, Infrastruktur, Prozessumgebung, Messmittel, Wissen",
      "Nur Maschinen",
      "Nur Gebäude"
    ],
    correct: 1,
    explanation: "Die Organisation muss Ressourcen bestimmen für: Personen, Infrastruktur, Umgebung für Prozesse, Ressourcen zur Überwachung/Messung und Wissen der Organisation."
  },
  {
    id: 53,
    category: "Unterstützung (Kap. 7)",
    question: "Was ist 'Wissen der Organisation'?",
    answers: [
      "Nur Patente",
      "Spezifisches Wissen, das für die Prozesse und Konformität erforderlich ist",
      "Nur Ausbildungszeugnisse",
      "Nur Normentexte"
    ],
    correct: 1,
    explanation: "Wissen der Organisation ist das spezifische Wissen, das für die Durchführung von Prozessen und zur Erreichung der Produktkonformität erforderlich ist (z.B. Erfahrung, Lessons Learned)."
  },
  {
    id: 54,
    category: "Unterstützung (Kap. 7)",
    question: "Was fordert die Norm bezüglich Kompetenz von Personen?",
    answers: [
      "Alle müssen studiert haben",
      "Kompetenz durch Ausbildung, Schulung oder Erfahrung muss sichergestellt werden",
      "Nur der QMB muss kompetent sein",
      "Kompetenz ist nicht relevant"
    ],
    correct: 1,
    explanation: "Die Organisation muss sicherstellen, dass Personen, die die Leistung beeinflussen, auf Basis von Ausbildung, Schulung oder Erfahrung kompetent sind."
  },
  {
    id: 55,
    category: "Unterstützung (Kap. 7)",
    question: "Was muss bezüglich der Kompetenz dokumentiert werden?",
    answers: [
      "Nichts",
      "Nachweise der Kompetenz müssen als dokumentierte Information aufbewahrt werden",
      "Nur bei Führungskräften",
      "Nur bei neuen Mitarbeitern"
    ],
    correct: 1,
    explanation: "Geeignete dokumentierte Informationen als Nachweis der Kompetenz müssen aufbewahrt werden (z.B. Schulungsnachweise, Zertifikate, Erfahrungsnachweise)."
  },
  {
    id: 56,
    category: "Unterstützung (Kap. 7)",
    question: "Was bedeutet 'Bewusstsein' nach ISO 9001?",
    answers: [
      "Mitarbeiter müssen über aktuelle Nachrichten informiert sein",
      "Mitarbeiter müssen Politik, Ziele, ihren Beitrag und Konsequenzen kennen",
      "Mitarbeiter müssen die Norm auswendig können",
      "Nur das Management muss Bewusstsein haben"
    ],
    correct: 1,
    explanation: "Personen müssen sich der Qualitätspolitik, der Qualitätsziele, ihres Beitrags zur Wirksamkeit und der Konsequenzen bei Nichterfüllung bewusst sein."
  },
  {
    id: 57,
    category: "Unterstützung (Kap. 7)",
    question: "Was muss bei der internen und externen Kommunikation festgelegt werden?",
    answers: [
      "Nur der Absender",
      "Worüber, wann, mit wem, wie und wer kommuniziert",
      "Nur die Sprache",
      "Nur das Medium"
    ],
    correct: 1,
    explanation: "Die Organisation muss die Kommunikation bestimmen: Worüber, wann, mit wem, wie kommuniziert wird und wer kommuniziert."
  },
  {
    id: 58,
    category: "Unterstützung (Kap. 7)",
    question: "Was bedeutet 'Lenkung dokumentierter Information'?",
    answers: [
      "Dokumente werden weggesperrt",
      "Sicherstellung von Verfügbarkeit, Eignung, Schutz, Verteilung und Aufbewahrung",
      "Dokumente werden vernichtet",
      "Nur der Chef darf Dokumente sehen"
    ],
    correct: 1,
    explanation: "Dokumentierte Information muss gelenkt werden hinsichtlich: Verteilung, Zugriff, Abruf, Verwendung, Speicherung, Erhaltung, Änderungen und Aufbewahrung/Beseitigung."
  },
  {
    id: 59,
    category: "Unterstützung (Kap. 7)",
    question: "Müssen Prüfmittel kalibriert werden?",
    answers: [
      "Nein, nie",
      "Ja, wenn sie für den Nachweis der Konformität verwendet werden",
      "Nur einmal bei Anschaffung",
      "Nur auf Kundenwunsch"
    ],
    correct: 1,
    explanation: "Wenn Überwachungs- oder Messressourcen für den Nachweis der Konformität verwendet werden, müssen sie kalibriert oder verifiziert werden."
  },
  {
    id: 60,
    category: "Unterstützung (Kap. 7)",
    question: "Was gehört zur 'Umgebung für die Durchführung von Prozessen'?",
    answers: [
      "Nur die Raumtemperatur",
      "Soziale, psychologische und physikalische Faktoren",
      "Nur die Beleuchtung",
      "Nur die Lärmbelastung"
    ],
    correct: 1,
    explanation: "Die Prozessumgebung umfasst soziale Faktoren (z.B. konfliktfrei), psychologische Faktoren (z.B. stressreduzierend) und physikalische Faktoren (z.B. Temperatur, Feuchtigkeit, Licht)."
  },
  {
    id: 61,
    category: "Unterstützung (Kap. 7)",
    question: "Was ist bei extern erstellten dokumentierten Informationen zu beachten?",
    answers: [
      "Sie sind automatisch gültig",
      "Sie müssen gekennzeichnet und gelenkt werden",
      "Sie dürfen nicht verwendet werden",
      "Sie müssen übersetzt werden"
    ],
    correct: 1,
    explanation: "Extern erstellte dokumentierte Informationen, die für das QMS erforderlich sind, müssen gekennzeichnet und gelenkt werden."
  },
  {
    id: 62,
    category: "Unterstützung (Kap. 7)",
    question: "Was ist der Unterschied zwischen 'erstellen' und 'aufrechterhalten' dokumentierter Information?",
    answers: [
      "Es gibt keinen Unterschied",
      "'Erstellen/Aktualisieren' gilt für Dokumente, 'Aufrechterhalten' für Aufzeichnungen",
      "'Erstellen' ist wichtiger",
      "'Aufrechterhalten' ist wichtiger"
    ],
    correct: 1,
    explanation: "'Dokumentierte Information erstellen und aktualisieren' bezieht sich auf Dokumente (Vorgaben), 'aufrechterhalten' auf Aufzeichnungen (Nachweise)."
  },
  {
    id: 63,
    category: "Unterstützung (Kap. 7)",
    question: "Was gehört zur Infrastruktur nach ISO 9001?",
    answers: [
      "Nur Gebäude",
      "Gebäude, Ausrüstung, Transport, IT und Kommunikation",
      "Nur Maschinen",
      "Nur Software"
    ],
    correct: 1,
    explanation: "Zur Infrastruktur gehören: Gebäude und zugehörige Versorgungseinrichtungen, Ausrüstung (Hardware, Software), Transportressourcen, Informations- und Kommunikationstechnologie."
  },

  // ===== BETRIEB - KAPITEL 8 (64-75) =====
  {
    id: 64,
    category: "Betrieb (Kap. 8)",
    question: "Was muss die Organisation für die Planung und Steuerung des Betriebs festlegen?",
    answers: [
      "Nur Arbeitszeiten",
      "Anforderungen an Produkte/Dienstleistungen, Kriterien für Prozesse und Akzeptanz",
      "Nur Preise",
      "Nur Liefertermine"
    ],
    correct: 1,
    explanation: "Die Organisation muss Anforderungen an Produkte/Dienstleistungen, Kriterien für Prozesse und Produktakzeptanz sowie erforderliche Ressourcen festlegen."
  },
  {
    id: 65,
    category: "Betrieb (Kap. 8)",
    question: "Was muss bei der Kommunikation mit Kunden geregelt werden?",
    answers: [
      "Nur Beschwerden",
      "Produktinformationen, Anfragen, Verträge, Rückmeldungen, Kundeneigentum, Notfallmaßnahmen",
      "Nur Bestellungen",
      "Nur Liefertermine"
    ],
    correct: 1,
    explanation: "Die Kundenkommunikation muss Produktinformationen, Anfragen/Verträge/Aufträge, Kundenrückmeldungen, Umgang mit Kundeneigentum und spezifische Notfallmaßnahmen umfassen."
  },
  {
    id: 66,
    category: "Betrieb (Kap. 8)",
    question: "Was ist eine 'Entwicklung' nach ISO 9001?",
    answers: [
      "Nur Software-Entwicklung",
      "Der Prozess zur Festlegung von Anforderungen für Produkte und Dienstleistungen",
      "Nur Forschung",
      "Nur Produktionsverbesserung"
    ],
    correct: 1,
    explanation: "Entwicklung ist der Prozess zur Festlegung von Anforderungen an Produkte/Dienstleistungen, um diese Anforderungen zu erfüllen."
  },
  {
    id: 67,
    category: "Betrieb (Kap. 8)",
    question: "Was muss bei extern bereitgestellten Prozessen, Produkten und Dienstleistungen sichergestellt werden?",
    answers: [
      "Nichts Besonderes",
      "Sie müssen den Anforderungen entsprechen",
      "Sie müssen billiger sein als intern",
      "Sie müssen aus dem Ausland kommen"
    ],
    correct: 1,
    explanation: "Die Organisation muss sicherstellen, dass extern bereitgestellte Prozesse, Produkte und Dienstleistungen den Anforderungen entsprechen."
  },
  {
    id: 68,
    category: "Betrieb (Kap. 8)",
    question: "Was ist bei der Produktion und Dienstleistungserbringung gefordert?",
    answers: [
      "Nur schnelle Lieferung",
      "Beherrschte Bedingungen mit dokumentierten Informationen, Ressourcen, Überwachung",
      "Nur niedrige Kosten",
      "Nur hohe Stückzahlen"
    ],
    correct: 1,
    explanation: "Produktion und Dienstleistungserbringung müssen unter beherrschten Bedingungen erfolgen, einschließlich dokumentierter Informationen, Überwachung und qualifiziertem Personal."
  },
  {
    id: 69,
    category: "Betrieb (Kap. 8)",
    question: "Wann muss eine Validierung von Prozessen erfolgen?",
    answers: [
      "Nie",
      "Wenn das Ergebnis nicht durch Überwachung oder Messung verifiziert werden kann",
      "Nur bei neuen Produkten",
      "Nur auf Kundenwunsch"
    ],
    correct: 1,
    explanation: "Eine Validierung ist erforderlich, wenn das Ergebnis eines Prozesses nicht durch nachfolgende Überwachung oder Messung verifiziert werden kann (z.B. Schweißen, Sterilisation)."
  },
  {
    id: 70,
    category: "Betrieb (Kap. 8)",
    question: "Was bedeutet 'Kennzeichnung und Rückverfolgbarkeit'?",
    answers: [
      "Nur Etiketten aufkleben",
      "Produkte identifizieren und ggf. deren Herkunft nachvollziehen können",
      "Nur Barcodes verwenden",
      "Nur bei Lebensmitteln relevant"
    ],
    correct: 1,
    explanation: "Kennzeichnung bedeutet, Produkte während der gesamten Produktion zu identifizieren. Rückverfolgbarkeit bedeutet, die Herkunft nachvollziehen zu können (wenn gefordert)."
  },
  {
    id: 71,
    category: "Betrieb (Kap. 8)",
    question: "Wie muss mit Eigentum von Kunden oder externen Anbietern umgegangen werden?",
    answers: [
      "Wie mit eigenem Eigentum",
      "Sorgfältig behandeln, kennzeichnen, schützen und bei Verlust/Beschädigung informieren",
      "Es muss versichert werden",
      "Es darf nicht verwendet werden"
    ],
    correct: 1,
    explanation: "Eigentum von Kunden oder externen Anbietern muss sorgfältig behandelt, gekennzeichnet, verifiziert und geschützt werden. Bei Verlust oder Beschädigung muss der Eigentümer informiert werden."
  },
  {
    id: 72,
    category: "Betrieb (Kap. 8)",
    question: "Was sind 'Tätigkeiten nach der Lieferung'?",
    answers: [
      "Nur Garantieleistungen",
      "Alle Tätigkeiten im Zusammenhang mit Produkten/Dienstleistungen nach Lieferung",
      "Nur Reparaturen",
      "Nur Entsorgung"
    ],
    correct: 1,
    explanation: "Tätigkeiten nach der Lieferung umfassen z.B. Garantie, Wartung, Service, Recycling/Entsorgung - alle relevanten Anforderungen müssen erfüllt werden."
  },
  {
    id: 73,
    category: "Betrieb (Kap. 8)",
    question: "Was muss bei Änderungen an Produkten oder Dienstleistungen beachtet werden?",
    answers: [
      "Änderungen sind verboten",
      "Änderungen müssen bewertet, genehmigt und dokumentiert werden",
      "Änderungen brauchen keine Dokumentation",
      "Nur Kunden dürfen Änderungen vornehmen"
    ],
    correct: 1,
    explanation: "Änderungen müssen bewertet werden, um die Konformität sicherzustellen. Sie müssen genehmigt und als dokumentierte Information aufbewahrt werden."
  },
  {
    id: 74,
    category: "Betrieb (Kap. 8)",
    question: "Was ist bei der Freigabe von Produkten und Dienstleistungen gefordert?",
    answers: [
      "Sofortige Auslieferung",
      "Nachweis der Erfüllung der Akzeptanzkriterien und Rückverfolgbarkeit zur freigebenden Person",
      "Nur Unterschrift des Chefs",
      "Nur bei Reklamationen"
    ],
    correct: 1,
    explanation: "Die Freigabe muss nachweisen, dass Akzeptanzkriterien erfüllt sind. Die dokumentierte Information muss die Rückverfolgbarkeit zur freigebenden Person ermöglichen."
  },
  {
    id: 75,
    category: "Betrieb (Kap. 8)",
    question: "Was muss bei nichtkonformen Ergebnissen geschehen?",
    answers: [
      "Wegwerfen ohne Dokumentation",
      "Kennzeichnen, trennen, dokumentieren und über weiteren Umgang entscheiden",
      "An Kunden liefern",
      "Ignorieren"
    ],
    correct: 1,
    explanation: "Nichtkonforme Ergebnisse müssen gekennzeichnet und gelenkt werden. Es muss entschieden werden über: Korrektur, Trennung, Sperrung, Rücknahme, Kundeninformation, Sonderfreigabe."
  },

  // ===== BEWERTUNG DER LEISTUNG - KAPITEL 9 (76-85) =====
  {
    id: 76,
    category: "Bewertung (Kap. 9)",
    question: "Was muss die Organisation überwachen und messen?",
    answers: [
      "Nur die Produktqualität",
      "Was, wann, wie und wann die Ergebnisse analysiert werden müssen",
      "Nur die Kundenzufriedenheit",
      "Nur die Lieferzeiten"
    ],
    correct: 1,
    explanation: "Die Organisation muss bestimmen: Was überwacht/gemessen werden muss, welche Methoden, wann durchgeführt wird und wann Ergebnisse analysiert werden."
  },
  {
    id: 77,
    category: "Bewertung (Kap. 9)",
    question: "Wie kann die Kundenzufriedenheit ermittelt werden?",
    answers: [
      "Nur durch Umsatzzahlen",
      "Durch Befragungen, Rückmeldungen, Meetings, Reklamationsanalysen, etc.",
      "Nur durch Beschwerden",
      "Nur durch Wiederkäufe"
    ],
    correct: 1,
    explanation: "Methoden zur Ermittlung der Kundenzufriedenheit können sein: Befragungen, Rückmeldungen, Treffen, Marktanalysen, Bewertungen, Reklamationen und mehr."
  },
  {
    id: 78,
    category: "Bewertung (Kap. 9)",
    question: "Was muss bei internen Audits geprüft werden?",
    answers: [
      "Nur die Dokumente",
      "Ob das QMS die eigenen Anforderungen und die der Norm erfüllt und wirksam ist",
      "Nur die Mitarbeiter",
      "Nur die Finanzen"
    ],
    correct: 1,
    explanation: "Interne Audits müssen prüfen, ob das QMS die eigenen geplanten Anforderungen und die Anforderungen der Norm erfüllt und wirksam aufrechterhalten wird."
  },
  {
    id: 79,
    category: "Bewertung (Kap. 9)",
    question: "Wie oft müssen interne Audits durchgeführt werden?",
    answers: [
      "Täglich",
      "In geplanten Abständen",
      "Nur bei Problemen",
      "Nur vor Zertifizierungsaudits"
    ],
    correct: 1,
    explanation: "Interne Audits müssen in geplanten Abständen durchgeführt werden. Die Häufigkeit richtet sich nach Bedeutung und Ergebnissen früherer Audits."
  },
  {
    id: 80,
    category: "Bewertung (Kap. 9)",
    question: "Darf ein Auditor seinen eigenen Arbeitsbereich auditieren?",
    answers: [
      "Ja, immer",
      "Nein, Auditoren müssen unabhängig vom auditierten Bereich sein",
      "Nur wenn er der einzige Auditor ist",
      "Nur bei kleinen Unternehmen"
    ],
    correct: 1,
    explanation: "Auditoren müssen so ausgewählt werden, dass Objektivität und Unparteilichkeit gewährleistet sind. Sie dürfen nicht ihren eigenen Bereich auditieren."
  },
  {
    id: 81,
    category: "Bewertung (Kap. 9)",
    question: "Was muss in der Managementbewertung als Input betrachtet werden?",
    answers: [
      "Nur die Finanzergebnisse",
      "Status von Maßnahmen, Änderungen, Leistung, Ressourcen, Risiken/Chancen, Verbesserungsmöglichkeiten",
      "Nur Kundenreklamationen",
      "Nur Auditergebnisse"
    ],
    correct: 1,
    explanation: "Inputs umfassen: Status früherer Maßnahmen, Änderungen, Leistungsinformationen (Kundenzufriedenheit, Ziele, Prozesse, Nichtkonformitäten, Audits, Lieferanten), Ressourcen, Risiken/Chancen, Verbesserungen."
  },
  {
    id: 82,
    category: "Bewertung (Kap. 9)",
    question: "Wer führt die Managementbewertung durch?",
    answers: [
      "Der QMB alleine",
      "Die oberste Leitung",
      "Externe Auditoren",
      "Die Personalabteilung"
    ],
    correct: 1,
    explanation: "Die oberste Leitung muss die Managementbewertung in geplanten Abständen durchführen, um Eignung, Angemessenheit und Wirksamkeit des QMS sicherzustellen."
  },
  {
    id: 83,
    category: "Bewertung (Kap. 9)",
    question: "Was muss das Ergebnis (Output) der Managementbewertung enthalten?",
    answers: [
      "Nur Lob für das Team",
      "Entscheidungen zu Verbesserungen, Änderungsbedarf und Ressourcenbedarf",
      "Nur den Finanzbericht",
      "Nur die Unterschriften"
    ],
    correct: 1,
    explanation: "Der Output muss Entscheidungen und Maßnahmen zu Verbesserungsmöglichkeiten, Änderungsbedarf am QMS und Ressourcenbedarf enthalten."
  },
  {
    id: 84,
    category: "Bewertung (Kap. 9)",
    question: "Muss die Managementbewertung dokumentiert werden?",
    answers: [
      "Nein",
      "Ja, als Nachweis der Ergebnisse",
      "Nur mündlich",
      "Nur bei Problemen"
    ],
    correct: 1,
    explanation: "Die Organisation muss dokumentierte Informationen als Nachweis der Ergebnisse der Managementbewertung aufbewahren."
  },
  {
    id: 85,
    category: "Bewertung (Kap. 9)",
    question: "Was ist der Zweck von Analyse und Bewertung?",
    answers: [
      "Nur Statistiken erstellen",
      "Die Wirksamkeit des QMS bewerten und Verbesserungsmöglichkeiten erkennen",
      "Nur Berichte für das Management",
      "Nur Auditoren zufriedenstellen"
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
      "Nur bei Beschwerden verbessern",
      "Chancen zur Verbesserung bestimmen und notwendige Maßnahmen umsetzen",
      "Nur Produkte verbessern",
      "Nur bei Audits verbessern"
    ],
    correct: 1,
    explanation: "Die Organisation muss Chancen zur Verbesserung bestimmen und umsetzen, um Kundenanforderungen zu erfüllen und die Kundenzufriedenheit zu erhöhen."
  },
  {
    id: 87,
    category: "Verbesserung (Kap. 10)",
    question: "Was ist der Unterschied zwischen Korrektur und Korrekturmaßnahme?",
    answers: [
      "Es gibt keinen Unterschied",
      "Korrektur behebt den Fehler, Korrekturmaßnahme beseitigt die Ursache",
      "Korrektur ist wichtiger",
      "Korrekturmaßnahme ist schneller"
    ],
    correct: 1,
    explanation: "Eine Korrektur behebt den unmittelbaren Fehler (Symptom), eine Korrekturmaßnahme beseitigt die Ursache, um ein Wiederauftreten zu verhindern."
  },
  {
    id: 88,
    category: "Verbesserung (Kap. 10)",
    question: "Was muss bei einer Nichtkonformität zuerst getan werden?",
    answers: [
      "Sofort die Ursache analysieren",
      "Reagieren: Maßnahmen zur Beherrschung/Korrektur ergreifen",
      "Den Kunden informieren",
      "Den Auditor informieren"
    ],
    correct: 1,
    explanation: "Bei einer Nichtkonformität muss zunächst reagiert werden: Maßnahmen zur Beherrschung und Korrektur ergreifen und mit den Konsequenzen umgehen."
  },
  {
    id: 89,
    category: "Verbesserung (Kap. 10)",
    question: "Müssen auch Nichtkonformitäten von Lieferanten behandelt werden?",
    answers: [
      "Nein, nur interne",
      "Ja, auch Nichtkonformitäten aus Reklamationen und von externen Anbietern",
      "Nur bei großen Lieferanten",
      "Nur bei teuren Produkten"
    ],
    correct: 1,
    explanation: "Korrekturmaßnahmen müssen für alle Nichtkonformitäten ergriffen werden, einschließlich solcher aus Reklamationen und von externen Anbietern."
  },
  {
    id: 90,
    category: "Verbesserung (Kap. 10)",
    question: "Wie wird die Wirksamkeit von Korrekturmaßnahmen geprüft?",
    answers: [
      "Gar nicht",
      "Durch Bewertung, ob das Wiederauftreten verhindert wurde",
      "Durch Unterschrift des Chefs",
      "Automatisch nach 30 Tagen"
    ],
    correct: 1,
    explanation: "Die Wirksamkeit wird bewertet, indem geprüft wird, ob die Korrekturmaßnahme das Wiederauftreten der Nichtkonformität verhindert hat."
  },
  {
    id: 91,
    category: "Verbesserung (Kap. 10)",
    question: "Was ist mit 'fortlaufender Verbesserung' gemeint?",
    answers: [
      "Einmalige Verbesserungsprojekte",
      "Wiederkehrende Tätigkeiten zur Verbesserung der Leistung",
      "Nur Kostenreduktion",
      "Nur Produktverbesserung"
    ],
    correct: 1,
    explanation: "Fortlaufende Verbesserung bedeutet wiederkehrende Tätigkeiten zur Verbesserung der Eignung, Angemessenheit und Wirksamkeit des QMS."
  },
  {
    id: 92,
    category: "Verbesserung (Kap. 10)",
    question: "Müssen Korrekturmaßnahmen dokumentiert werden?",
    answers: [
      "Nein",
      "Ja, Art der Nichtkonformität, Maßnahmen und Ergebnisse",
      "Nur bei schweren Fehlern",
      "Nur für Auditoren"
    ],
    correct: 1,
    explanation: "Als dokumentierte Information müssen aufbewahrt werden: Art der Nichtkonformität, ergriffene Maßnahmen und Ergebnisse der Korrekturmaßnahmen."
  },
  {
    id: 93,
    category: "Verbesserung (Kap. 10)",
    question: "Welche Elemente gehören zum Kapitel 10 'Verbesserung'?",
    answers: [
      "Nur Korrekturmaßnahmen",
      "Allgemeines, Nichtkonformität und Korrekturmaßnahmen, fortlaufende Verbesserung",
      "Nur interne Audits",
      "Nur Managementbewertung"
    ],
    correct: 1,
    explanation: "Kapitel 10 umfasst: 10.1 Allgemeines, 10.2 Nichtkonformität und Korrekturmaßnahmen, 10.3 Fortlaufende Verbesserung."
  },

  // ===== QM-WERKZEUGE & METHODEN (94-100) =====
  {
    id: 94,
    category: "QM-Werkzeuge",
    question: "Wofür steht PDCA?",
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
    question: "Wofür wird das Ishikawa-Diagramm verwendet?",
    answers: [
      "Zur Kostenplanung",
      "Zur Ursachenanalyse (Fischgrätendiagramm)",
      "Zur Terminplanung",
      "Zur Personalplanung"
    ],
    correct: 1,
    explanation: "Das Ishikawa-Diagramm (Fischgräten- oder Ursache-Wirkungs-Diagramm) wird zur strukturierten Analyse von Fehlerursachen verwendet."
  },
  {
    id: 96,
    category: "QM-Werkzeuge",
    question: "Was besagt das Pareto-Prinzip?",
    answers: [
      "Alle Fehler sind gleich wichtig",
      "Etwa 80% der Wirkungen stammen von 20% der Ursachen",
      "Jeder Fehler muss einzeln analysiert werden",
      "Statistik ist unwichtig"
    ],
    correct: 1,
    explanation: "Das Pareto-Prinzip (80/20-Regel) besagt, dass oft etwa 80% der Wirkungen von 20% der Ursachen verursacht werden. Es hilft bei der Priorisierung."
  },
  {
    id: 97,
    category: "QM-Werkzeuge",
    question: "Wofür steht FMEA?",
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
      "Ein Audit mit 8 Prüfpunkten",
      "Eine Norm mit 8 Kapiteln"
    ],
    correct: 1,
    explanation: "Der 8D-Report ist eine strukturierte Problemlösungsmethode in 8 Disziplinen (Schritten), die oft bei Kundenreklamationen verwendet wird."
  },
  {
    id: 99,
    category: "QM-Werkzeuge",
    question: "Was ist die 5-Why-Methode?",
    answers: [
      "Eine Planungsmethode",
      "Eine Methode zur Ursachenanalyse durch wiederholtes Fragen 'Warum?'",
      "Eine Prüfmethode",
      "Eine Dokumentationsmethode"
    ],
    correct: 1,
    explanation: "Die 5-Why-Methode ist eine einfache Technik zur Ursachenanalyse, bei der wiederholt 'Warum?' gefragt wird, um zur Grundursache vorzudringen."
  },
  {
    id: 100,
    category: "QM-Werkzeuge",
    question: "Was gehört NICHT zu den 'Q7' (7 Qualitätswerkzeuge)?",
    answers: [
      "Histogramm",
      "SWOT-Analyse",
      "Pareto-Diagramm",
      "Ishikawa-Diagramm"
    ],
    correct: 1,
    explanation: "Die Q7 sind: Fehlersammelliste, Histogramm, Qualitätsregelkarte, Pareto-Diagramm, Korrelationsdiagramm, Ishikawa-Diagramm, Stratifikation/Flussdiagramm. SWOT gehört nicht dazu."
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
