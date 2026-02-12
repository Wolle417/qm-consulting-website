# QCore Tool-Hub: Website-Erweiterungskonzept

**Stand:** 12. Februar 2026  
**Autor:** Stefan Schönwälder × Claude (Arbeitspaket A)  
**Grundlage:** TOOL_ROADMAP.md, aktuelle Sitemap, NC-Triage-Erfahrungen

---

## 1. Ausgangslage & Problem

### Was funktioniert
- NC-Triage Tool ist live unter `/nc-triage` — erstes kostenloses Tool
- Readiness Check ist live unter `/readiness-check` — Assessment-Tool
- 14 QM-Wissensartikel in `/qm-wissen`
- 3 Bundles auf Gumroad (CAPA €129, NC €99, Audit Prep €79)
- Data Integrity Kit (€299) als Pharma-Produkt
- QMB-Trainer Feature vorhanden
- Professionelles Design mit Cormorant/Serif-Typografie

### Was fehlt
- **Keine zentrale Tool-Übersicht** — Tools verstecken sich im Produkte-Dropdown
- **Keine Tool-zu-Tool-Verlinkung** — NC Triage verweist nicht auf Readiness Check und umgekehrt
- **Kein „Grund wiederzukommen"** — Einmaliger Besuch, kein Bookmark-Anreiz
- **SEO-Potenzial der Tools wird nicht genutzt** — Keine dedizierten Landing Pages mit Suchbegriffen
- **Workflow-Gedanke fehlt** — Tools existieren isoliert statt als zusammenhängende Kette
- **Keine klare Trennung "kostenlose Tools" vs. "Produkte"** — Navigation mischt beides

---

## 2. Strategische Zielsetzung

### Die Vision
**qcore-consulting.de wird die deutschsprachige Werkzeugkiste für QMBs in MedTech/Pharma-KMUs.**

Nicht ein Blog mit Ratgebern. Nicht ein Shop mit Templates. Sondern eine Sammlung von Tools, die QMBs im Alltag tatsächlich öffnen — und die dabei natürlich auf Bundles und Beratung verweisen.

### Erfolgskriterien
| Metrik | Ziel (6 Monate) | Messung |
|--------|-----------------|---------|
| Wiederkehrende Besucher | >30% der Toolnutzer | Vercel Analytics |
| Tool-zu-Bundle-Conversion | >2% der Tool-User klicken Bundle-CTA | Event Tracking |
| Organischer Traffic | +300% auf Tool-Seiten | Google Search Console |
| Bookmark-Rate | Qualitativ: Feedback "nutze ich regelmäßig" | LinkedIn-Umfragen |

---

## 3. Sitemap: Neue Informationsarchitektur

### Aktuelle Struktur (IST)
```
/                       Landing Page
├── /leistungen         (→ /qm-beratung, /risikomanagement, /audit-vorbereitung, /training)
├── /produkte           Produkt-Übersicht
│   ├── /capa-system
│   ├── /nc-system
│   ├── /audit-prep-kit
│   └── /data-integrity-kit
├── /nc-triage          ← Tool, aber unter keiner Kategorie
├── /readiness-check    ← Tool, aber unter keiner Kategorie
├── /qm-wissen          14 Fachartikel
├── /qmb-trainer        Interaktives Feature
└── /ueber-mich, /kontakt, /impressum, /datenschutz
```

### Neue Struktur (SOLL)
```
/                       Landing Page (mit Tool-Teaser-Section)
├── /leistungen         Services (unverändert)
├── /produkte           Bezahlte Bundles & Templates
│   ├── /capa-system
│   ├── /nc-system
│   ├── /audit-prep-kit
│   └── /data-integrity-kit
│
├── /tools              ★ NEU: Tool-Hub Landing Page
│   ├── /nc-triage              Phase 1 ✅ (live)
│   ├── /stichprobe             Phase 1b (Sample Size Calculator)
│   ├── /readiness-check        umgezogen aus /readiness-check
│   ├── /risikomatrix           Einzeltool (Risk Matrix Generator)
│   ├── /qm-cockpit             Phase 2
│   └── /change-control         Phase 3
│
├── /qm-wissen          Fachartikel + QMB-Trainer
└── /ueber-mich, /kontakt, /impressum, /datenschutz
```

### Navigation (Neues Dropdown)
```
Start | Leistungen ▼ | Tools ▼ | Produkte ▼ | Über mich ▼

Tools ▼
  ── Kostenlose Tools ──           FREE
  NC-Triage + Justifier            ★ Live
  Sample Size Calculator           ★ Neu
  QMS Readiness Check              ★ Live
  Risk Matrix Generator            Bald
  ── Dashboards ──
  QM-Cockpit                       Bald
  ── Copiloten ──
  Change-Control Copilot           Bald
```

---

## 4. Tool-Hub Landing Page (`/tools`)

Die zentrale Seite, die alles zusammenhält. Design-Prinzip: **Keine Textwüste, sondern visuell ansprechende Tool-Karten.**

### Aufbau
1. **Hero-Section**: "Kostenlose QM-Tools für Ihren Arbeitsalltag. Browser-basiert. Kein Login. Sofort nutzbar."
2. **Tool-Grid**: Karten mit Icon, Name, Einzeiler, Status-Badge (Live / Coming Soon)
3. **Workflow-Visualisierung**: Die Kette NC → CAPA-Entscheidung → Tracking → Change Control als visueller Flow
4. **Warum kostenlos?**: Kurze Erklärung (Vertrauen aufbauen, Expertise zeigen, Bundle-Brücken)
5. **Newsletter-CTA**: "Neue Tools als Erstes erfahren"

### SEO-Strategie für /tools
- Title: "Kostenlose QM-Tools für MedTech & Pharma | QCore"
- H1: "QM-Tools: Entscheidungshilfen, Rechner & Dashboards"
- Interne Links von jedem Wissensartikel zur /tools-Seite
- Jedes Tool hat eigene URL → eigenes SEO-Potenzial

---

## 5. Tool-Priorisierung & Reihenfolge

### Bewertungsmatrix

| Tool | SEO-Pull | Wiederkehr | Bundle-Brücke | Aufwand | **Score** |
|------|----------|------------|---------------|---------|-----------|
| NC Triage ✅ | Mittel | Niedrig | CAPA, NC | Erledigt | — |
| Readiness Check ✅ | Mittel | Mittel | Alle | Erledigt | — |
| **Sample Size Calc** | **★★★★★** | **★★★☆☆** | Consulting | **2 Tage** | **#1** |
| **Risk Matrix Gen** | **★★★★☆** | **★★★☆☆** | CAPA, Consulting | **1-2 Wo** | **#2** |
| **QM-Cockpit** | **★★☆☆☆** | **★★★★★** | Alle | **2-3 Wo** | **#3** |
| Change-Control | ★★☆☆☆ | ★★★☆☆ | Audit Prep | 3-4 Wo | #4 |
| Vigilanz-Triage | ★★★☆☆ | ★☆☆☆☆ | Consulting | Gering | Optional |
| MDR Klassifizierung | ★★★★☆ | ★☆☆☆☆ | Consulting | Mittel | Optional |
| MgmtReview Builder | ★★☆☆☆ | ★★☆☆☆ | Audit Prep | Gering | Optional |

### Empfohlene Reihenfolge

**Sofort (diese Woche):**
→ `/tools` Hub-Seite erstellen + Navigation umbauen + Readiness Check umziehen

**Sprint 1 (1 Woche):**
→ Sample Size Calculator (`/tools/stichprobe`)
- Warum zuerst? Geringster Aufwand, höchstes SEO-Potenzial
- Keywords: "Stichprobengröße berechnen", "AQL Rechner", "Cpk Stichprobe"
- Monatliches Suchvolumen DE: geschätzt 500-1500 für verwandte Begriffe
- Direkte Consulting-Brücke: "Ihre Validierung braucht mehr als einen Rechner?"

**Sprint 2 (2-3 Wochen):**
→ Risk Matrix Generator (`/tools/risikomatrix`)
- Keywords: "Risikomatrix erstellen", "ISO 14971 Risikobewertung"
- Bundle-Brücke zu CAPA System
- Direkte Verbindung zum bestehenden /risikomanagement-Artikel

**Sprint 3 (3-4 Wochen):**
→ QM-Cockpit (`/tools/qm-cockpit`)
- Der "Anker" — das Tool, für das QMBs täglich/wöchentlich zurückkommen
- Höchster Entwicklungsaufwand, aber höchste Wiederkehr-Frequenz
- Brücke zu ALLEN Bundles
- localStorage mit expliziter "Nur dieses Gerät"-Kommunikation

---

## 6. Tool-zu-Tool-Verbindungen (Cross-Links)

Jedes Tool muss intelligent auf andere Tools und Produkte verweisen. Nicht generisch ("Schauen Sie auch..."), sondern kontextuell.

### Verbindungsmatrix

| Von → Nach | Trigger | CTA-Text |
|------------|---------|----------|
| NC Triage → Readiness Check | CAPA empfohlen | "Wie steht Ihr gesamtes CAPA-System da? → Readiness Check" |
| NC Triage → CAPA Bundle | CAPA empfohlen | "CAPA-System mit SOPs aufbauen → CAPA Bundle" |
| NC Triage → QM-Cockpit | Jede Bewertung | "Diese NC im Blick behalten → QM-Cockpit" |
| Readiness Check → NC Triage | CAPA-Gap erkannt | "NC-Bewertung im Alltag beschleunigen → NC-Triage" |
| Readiness Check → Bundles | Je nach Gap | Gap-spezifische Bundle-Empfehlung |
| Sample Size → Consulting | Ergebnis angezeigt | "Validierungsplan erstellen lassen → Beratung" |
| Sample Size → /process-validation | Ergebnis angezeigt | "Mehr zur Prozessvalidierung → Fachartikel" |
| Risk Matrix → CAPA Bundle | Hohes Risiko | "Risiko → CAPA: System dafür aufbauen → CAPA Bundle" |
| Risk Matrix → /risikomanagement | Immer | Link zum Fachartikel |
| QM-Cockpit → Alle Bundles | Je nach Vorgang | Kontextuell zum jeweiligen Prozess |
| QM-Cockpit → NC Triage | Neue NC anlegen | "NC schnell bewerten → NC-Triage" |

### Wissensartikel → Tools
Bestehende 14 Artikel bekommen kontextuelle Tool-CTAs:

| Artikel | Tool-CTA |
|---------|----------|
| CAPA (capa.js) | → NC Triage, → CAPA Bundle |
| FMEA (fmea.js) | → Risk Matrix Generator |
| Root Cause Analysis | → NC Triage |
| Audit-Vorbereitung | → Readiness Check, → Audit Prep Kit |
| Process Validation | → Sample Size Calculator |
| ISO 13485 | → Readiness Check |
| EU MDR | → Readiness Check |
| Risikomanagement | → Risk Matrix Generator |

---

## 7. User Journeys

### Journey A: "Google-Sucher"
```
Google: "Stichprobengröße berechnen Validierung"
    → /tools/stichprobe (SEO-Landing)
    → Tool nutzen, Ergebnis sehen
    → CTA: "Validierungsplan braucht mehr?" → /kontakt (Consulting)
    → Sidebar: "Weitere QM-Tools" → /tools
    → Bookmark: /tools
```

### Journey B: "NC passiert, was jetzt?"
```
Google/LinkedIn: "CAPA nötig ja oder nein"
    → /nc-triage (SEO + Social)
    → NC bewerten, Begründung erhalten
    → CTA: "CAPA-System komplett?" → /produkte/capa-system (€129)
    → Alternative: "NC im Blick behalten" → /tools/qm-cockpit
    → Bookmark: /tools oder /nc-triage
```

### Journey C: "Audit nächste Woche"
```
Google: "ISO 13485 Audit Vorbereitung Checkliste"
    → /audit-vorbereitung (Artikel)
    → CTA im Artikel: "Wie bereit sind Sie wirklich?" → /tools/readiness-check
    → Assessment durchführen, Gaps sehen
    → CTA: "Gaps schließen" → /produkte/audit-prep-kit (€79)
    → Follow-up: Readiness Check wiederholen
```

### Journey D: "QMB im Alltag" (Retention-Journey)
```
Wiederkehrender Besucher
    → /tools/qm-cockpit (täglicher/wöchentlicher Check)
    → Offene CAPAs anzeigen, Fristen prüfen
    → Neue NC? → NC Triage direkt aus Cockpit
    → Quarterly: → Readiness Check wiederholen
    → Bundle-Bedarf erkannt → /produkte
```

---

## 8. Monetarisierungspfade

### Pfad 1: Tool → Bundle (Direkt)
- NC Triage empfiehlt CAPA → CAPA Bundle (€129)
- Readiness Check zeigt Gaps → passendes Bundle
- Conversion-Ziel: 2-5% der Tool-User

### Pfad 2: Tool → Consulting (High Value)
- Sample Size Calculator → Validierungsberatung
- Risk Matrix → Risikomanagement-Consulting
- QM-Cockpit → "Sie haben 12 offene CAPAs — wir helfen" → Beratung
- Conversion-Ziel: 0.5-1%, aber hoher Stundensatz

### Pfad 3: Tool → Newsletter → Nurturing (Long Game)
- Tools-Seite hat Newsletter-CTA
- Neue Tools als Launch-Events
- Newsletter: Tool-Tipps + Bundle-Angebote
- Conversion-Ziel: 5-10% Newsletter-Signup auf /tools

### Pfad 4: SEO → Autorität → Inbound (Langfristig)
- Tools ranken für transaktionale Keywords ("Rechner", "Generator", "Check")
- Wissensartikel ranken für informationelle Keywords
- Zusammen: QCore = die QM-Resource im DACH-Raum
- Effekt: Inbound-Anfragen ohne Akquise

---

## 9. Technische Umsetzung

### Architektur-Entscheidungen

| Aspekt | Entscheidung | Begründung |
|--------|-------------|------------|
| Routing | `/tools/[slug]` | Saubere URL-Struktur, erweiterbar |
| Datenhaltung | localStorage | Kein Backend nötig, Privacy-freundlich |
| Framework | Bestehend (Next.js) | Kein Umbau, nur Erweiterung |
| Tool-Integration | iframe vs. native | NC Triage = iframe, neue Tools = native React |
| Analytics | Vercel Analytics + Events | Tool-Nutzung + CTA-Klicks tracken |

### Neue Dateien/Ordner
```
pages/
  tools/
    index.js           ← Tool-Hub Landing Page
    stichprobe.js       ← Sample Size Calculator
    risikomatrix.js     ← Risk Matrix Generator
    qm-cockpit.js       ← QM-Cockpit
    change-control.js   ← Change-Control Copilot (Phase 3)

components/
  tools/
    ToolHub.jsx         ← Grid-Layout für Tool-Übersicht
    ToolCard.jsx        ← Einzelne Tool-Karte
    ToolCTA.jsx         ← Wiederverwendbarer CTA-Block
    ToolSidebar.jsx     ← "Weitere Tools" Sidebar für jedes Tool
    WorkflowDiagram.jsx ← Visuelle Workflow-Kette

data/
  tools.js              ← Tool-Metadaten (Name, Status, Icon, Beschreibung)
```

### Migration Readiness Check
- `/readiness-check` → Redirect 301 auf `/tools/readiness-check`
- Oder: `/readiness-check` bleibt (SEO), aber Navigation zeigt unter /tools

### NC Triage Migration
- `/nc-triage` → Redirect 301 auf `/tools/nc-triage`
- iframe-Integration bleibt

---

## 10. Design-Prinzipien

### Konsistenz
- Alle Tools teilen ein gemeinsames Layout: Header (Toolname + Einzeiler), Tool-Bereich, Sidebar (verwandte Tools + passende Bundles), Footer-CTA
- Farbcode: Blaues QCore-Palette (bestehend), Status-Badges in Grün (Live) / Grau (Coming Soon)
- Typografie: Cormorant für Überschriften, System-Font für Tool-UI (bestehende Konvention)

### Mobile First
- Tools müssen auf Mobilgeräten funktionieren — QMBs nutzen oft Tablets in der Produktion
- Sidebar wird auf Mobile zum Bottom-Sheet
- Touch-friendly: Große Buttons, keine Hover-abhängigen Features

### "Sofort-Wow"-Prinzip
- Minimale Eingabe → maximales Ergebnis
- Kein Registrierung, kein Account, kein Cookie-Banner-Marathon
- Ergebnis ist teilbar (Copy/PDF) und audit-tauglich
- Jedes Tool zeigt sofort: "Das hat Ihnen gerade 30 Minuten gespart"

---

## 11. Content-Strategie: Tools als Content-Pieces

### Jedes Tool IST Content
Statt Blogposts über "Was ist ein guter CAPA-Prozess?" → Ein Tool, das den CAPA-Prozess ausführbar macht. Das Roadmap-Prinzip "Toolified Content" konsequent umgesetzt.

### LinkedIn-Strategie
Jeder Tool-Launch = mindestens 3 LinkedIn-Posts:
1. **Teaser**: "Wussten Sie, dass 67% der QMBs ihre Stichproben noch mit Excel berechnen?"
2. **Launch**: "Ab heute kostenlos: Sample Size Calculator für MedTech-Validierung"
3. **Anwendungsfall**: "So hat [Persona] mit dem Tool ihre Validierung beschleunigt"

### SEO-Cluster
Jedes Tool bildet ein Themencluster:
- Tool-Seite = transaktionale Seite ("berechnen", "erstellen", "prüfen")
- Wissensartikel = informationelle Seite ("was ist", "wie funktioniert", "Best Practices")
- Bundle-Seite = kommerzielle Seite ("kaufen", "System", "Vorlage")

Beispiel Cluster "Stichprobe":
```
/tools/stichprobe          → "Stichprobengröße berechnen"
/process-validation        → "Prozessvalidierung ISO 13485"
/iq-oq-pq                 → "IQ OQ PQ Qualifizierung"
(Bundle)                   → Consulting-Trigger
```

---

## 12. Nächste Schritte

### Sofort (Tag 1)
- [ ] `/tools`-Seite erstellen (Hero + Grid mit bestehenden Tools)
- [ ] Navigation anpassen (neues "Tools" Dropdown)
- [ ] Bestehende Tools (/nc-triage, /readiness-check) in Grid einbinden
- [ ] Tool-Metadaten in `data/tools.js` anlegen

### Sprint 1 (Woche 1-2)
- [ ] Sample Size Calculator entwickeln und unter `/tools/stichprobe` deployen
- [ ] Cross-Links von Wissensartikeln zu Tools einbauen
- [ ] ToolSidebar-Komponente für alle Tool-Seiten

### Sprint 2 (Woche 3-4)
- [ ] Risk Matrix Generator entwickeln
- [ ] Tool-Hub-Seite mit Workflow-Visualisierung erweitern
- [ ] LinkedIn-Launch-Kampagne für neue Tools

### Sprint 3 (Woche 5-8)
- [ ] QM-Cockpit MVP entwickeln
- [ ] localStorage-Persistenz mit klarer Kommunikation
- [ ] Cockpit → NC Triage Integration

### Laufend
- [ ] Vercel Analytics auswerten
- [ ] Tool-Feedback sammeln (Formular oder LinkedIn)
- [ ] Multi-LLM Persona-Validierung für jedes neue Tool (Arbeitspaket B)

---

## 13. Risiken & Gegenmaßnahmen

| Risiko | Wahrscheinlichkeit | Gegenmaßnahme |
|--------|-------------------|---------------|
| Feature Creep bei Tools | Hoch | Strikter MVP: Max. 5 Eingabefelder, 1 Output |
| Zu wenig Traffic auf /tools | Mittel | SEO-Cluster + LinkedIn-Strategie + Artikel-CTAs |
| localStorage-Verlust beim User | Hoch (bei Cockpit) | Transparente Kommunikation + PDF-Export als Backup |
| Konkurrenz kopiert Tools | Mittel | Vorsprung durch Qualität + persönliche Marke |
| Kein Conversion trotz Traffic | Mittel | A/B-Test CTAs, Persona-Validierung der Bridge-Texte |

---

*Nächstes Dokument: Arbeitspaket B — Multi-LLM Persona-Validierung dieses Konzepts*
