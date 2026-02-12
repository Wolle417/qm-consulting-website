# UX-Optimierung: ISO 13485 Readiness Check
## Forschungsergebnisse + Implementierungsplan für Claude Code

**Datum:** 09.02.2026  
**Basis:** Screenshot-Analyse + UX-Recherche (B2B Dashboard Design, Progressive Disclosure, Compliance Assessment UIs, Glassmorphism, Data Table Patterns)

---

## 1. Analyse des aktuellen Zustands (Screenshot)

### Was gut funktioniert
- 3-Spalten-Layout (Sidebar / Content / Results) = richtige Grundstruktur
- Score Ring mit Prozent + Maturity-Label = sofort verständlich
- Answer Cards mit Level-Nummern und Farbcodes = klar
- ISO-Klausel + Erwartete Nachweise unter jeder Frage = DAS Differenzierungsmerkmal
- Privacy Badge im Header = Vertrauen
- Profile Switcher (ISO / QMSR / MDR) = professionell

### Probleme identifiziert

| Problem | Schwere | Beschreibung |
|---------|---------|-------------|
| Rechte Spalte überladen | Hoch | Score Ring + Mini-Radar + Gap-Backlog Tabelle + CTAs konkurrieren auf ca. 350px Breite |
| Gap-Backlog abgeschnitten | Hoch | "Fehlende Evidenz" Spalte ist nicht vollständig sichtbar, Tabelle zu breit für den Platz |
| Radar-Chart überlagert Gap-Backlog | Mittel | Transparenter Radar scheint hinter dem Tab-Content durchzuscheinen |
| Sidebar-Text abgeschnitten | Mittel | "Design & Entwickl...", "Lieferantenmanage..." — wichtige Kategorie-Namen unlesbar |
| Kein Auto-Advance | Mittel | Wenn alle Fragen eines Kapitels beantwortet, kein automatischer Sprung |
| Container ohne Tiefe | Niedrig | Fehlende Glassmorphism-Effekte = flaches Erscheinungsbild |
| CTAs am Rand gequetscht | Mittel | PDF/Maßnahmenplan/Empfehlungen am unteren Rand der rechten Spalte |
| Keine klare visuelle Hierarchie | Hoch | Alle 3 Spalten konkurrieren gleichwertig um Aufmerksamkeit |

---

## 2. Forschungsergebnisse: Best Practices

### 2.1 Dashboard Layout (Z-Pattern + Inverted Pyramid)
Quellen: DataCamp, Pencil and Paper, Lazarev.agency

- Z-Pattern-Leserichtung: Nutzer scannen Top-Links nach Top-Rechts nach Unten-Links nach Unten-Rechts
- Inverted Pyramid: Oben = Status ("Sind wir gut?"), Mitte = Trends/Vergleiche, Unten = Details/Actions
- Left-Rail Layout: Ideal wenn Nutzer häufig zwischen Views wechseln (= unser Sidebar-Pattern)
- Regel: "Wenn ein Dashboard mehr als 30 Sekunden zum Interpretieren braucht, Hierarchie überdenken"

Konsequenz: Score-Übersicht muss OBEN RECHTS prominent sein (Z-Pattern Hot Zone). Gap-Details darunter. CTAs ganz unten.

### 2.2 Progressive Disclosure (Nielsen Norman Group)
Quellen: NN/g, IxDF, Shopify, UXPin

- Staged Disclosure (= Wizard-Pattern): Ideal wenn Aufgabe in unabhängige Schritte teilbar — genau unser Assessment
- Regel: "Zeige nur das, was der Nutzer JETZT braucht"
- Auto-Advance: Standard bei Quiz/Assessment-Tools — nach Antwort automatisch zur nächsten Frage
- Expandable Details: Zusatzinfo (Evidenz, QMSR-Delta) on-demand aufklappen statt permanent zeigen

Konsequenz: Erwartete Nachweise als Accordion/Expandable statt permanent sichtbar. Auto-Advance nach Kapitel-Abschluss.

### 2.3 B2B Enterprise UX
Quellen: Netguru, Toptal, IxDF, Passionate Agency

- Task-Oriented Focus: QMBs wollen Aufgabe erledigen, nicht UI bewundern
- Information Density vs. Absorption: "Mehr Daten auf dem Bildschirm ungleich mehr verstandene Daten"
- Customizable Views: Power-User wollen Kontrolle über Informationsdichte
- Consistent Visual Elements: Gleiche Farbcodes, Font-Größen, Spacing überall

Konsequenz: Weniger gleichzeitig zeigen, dafür tiefere Drill-Down-Möglichkeiten. Rechte Spalte entladen.

### 2.4 Compliance Assessment Tool Patterns
Quellen: Hyperproof, ComplianceQuest, Kovrr, HITRUST

- Heat-Map Farbcodierung: Rot/Gelb/Grün für Maturity-Levels = Standard in der Branche
- Maturity-Level-Progression: 4-5 Stufen mit klaren Beschreibungen
- Evidence Tracking pro Control: Checkbox-artige Übersicht
- Trend über Zeit: Vorher/Nachher-Vergleich als Kern-Feature für Audit-Vorbereitung

Konsequenz: Evidence-Checklist als kompakte Inline-Anzeige statt langer Tabellenspalte.

### 2.5 Data Table UX (Gap-Backlog)
Quellen: Pencil and Paper, Eleken, Stephanie Walter

- Horizontaler Scroll ODER Spalten reduzieren — nie abschneiden
- Expandable Rows: Kompakte Zeile + Klick für Details = besser als alles in einer Zeile
- Sticky Header: Tabellenkopf bleibt sichtbar beim Scrollen
- Sortierung visuell anzeigen: Pfeil-Icon an aktiver Sortier-Spalte

Konsequenz: Gap-Backlog braucht Expandable Rows mit weniger Spalten.

### 2.6 Glassmorphism
Quellen: Apple macOS, Microsoft Fluent, CSS-Guides

- Standard-Blur: 8-15px für deutlichen Effekt. 3px = sehr subtil
- CSS: backdrop-filter: blur(Xpx); background: rgba(255,255,255,0.6-0.85); border: 1px solid rgba(255,255,255,0.3)
- Performance: GPU-intensiv, nicht auf zu vielen Elementen gleichzeitig
- Best Practice: 2-3 Glasmorphism-Ebenen maximal

Konsequenz: backdrop-filter: blur(3px) auf Hauptcontainer. Hintergrund braucht subtilen Gradient damit Blur sichtbar.

---

## 3. Architektur-Empfehlung: Optimiertes Layout

### 3.1 Neue Layout-Hierarchie

HEADER: QCORE | Profile Switch | Privacy Badge | Progress | Reset

Links: SIDEBAR (Kategorie-Navigation mit Fortschritt)
Mitte: MAIN CONTENT (Frage + Antworten + Collapsible Nachweise + Notizen)
Rechts oben (fixiert): SCORE RING + MINI-RADAR
Rechts mitte: TABS (Gap-Backlog | Radar-Detail | Trend) - scrollbar
Rechts unten (fixiert): CTAs

FOOTER: Autorität + Copyright

### 3.2 Kritische Layout-Änderungen

A) Rechte Spalte: Score OBEN, Tabs MITTE, CTAs UNTEN
- Score Ring + Mini-Radar als feste Kopfzeile (nicht scrollbar)
- Tabs (Gap-Backlog / Radar-Detail / Trend) nehmen den Rest
- CTAs fixiert am unteren Rand

B) Erwartete Nachweise: Collapsible
- Default: eingeklappt (nur Trigger-Zeile mit Anzahl)
- Klick expandiert mit Verfahren/Aufzeichnung/Wirksamkeit
- Spart ca. 120px Höhe pro Frage im Normalzustand

C) Gap-Backlog: Expandable Rows statt breiter Tabelle
- Kompakte Zeile: Risk-Dot | Kategorie | ISO-Klausel | Score
- Expand: Zeigt Frage-Text, Evidenz-Details, Notiz, QMSR-Delta
- Sortierung per Klick auf Spaltenheader

D) Sidebar: Tooltips statt Truncation
- Fortschrittsanzeige: "3/3 check" statt Farbpunkte (deutlicher)
- Aktives Kapitel: stärkere Hervorhebung mit linkem Rand-Akzent

E) Auto-Advance nach Kapitel-Abschluss
- 600ms Pause mit visuellem Feedback
- Automatisch zum nächsten offenen Kapitel
- Sanfte Slide-Animation

F) Glassmorphism auf Container
- 3 Hauptcontainer + Header mit Blur-Effekt
- Hintergrund: Subtiler Gradient damit Blur sichtbar
- Answer Cards: KEIN Blur (Performance)

---

## 4. Prioritäten-Reihenfolge

| Prio | Änderung | Impact | Aufwand |
|------|----------|--------|---------|
| 1 | Auto-Advance nach Kapitel | Hoch (UX-Flow) | Niedrig |
| 2 | Glassmorphism auf Container | Mittel (Visual) | Niedrig |
| 3 | Erwartete Nachweise collapsible | Hoch (Platz) | Niedrig |
| 4 | Gap-Backlog Expandable Rows | Hoch (Lesbarkeit) | Mittel |
| 5 | Rechte Spalte Hierarchie | Hoch (Übersicht) | Mittel |
| 6 | Sidebar-Verbesserung | Mittel (Klarheit) | Niedrig |
| 7 | Visuelles Polishing | Mittel (Professionalität) | Niedrig |

---

## 5. Was NICHT ändern

- 3-Spalten-Layout Grundstruktur
- Answer Cards Design
- Profile Switcher
- Privacy Badge
- Scope Wizard
- Farbschema (Navy/Slate)
- Score Ring Design
