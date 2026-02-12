# Synthese-Report: ISO 13485 Readiness-Assessment-Tool
## Konsolidierte Erkenntnisse aus Claude, ChatGPT & Gemini

**Datum:** 09.02.2026  
**Methode:** Parallelrecherche mit 3 LLMs, anschließende Synthese der Konsens- und Differenzpunkte

---

## 1. Konsens-Map: Wo sind sich alle drei einig?

### Einstimmig (alle 3 LLMs, hohe Konfidenz)

| Thema | Konsens |
|---|---|
| **Normen-Referenzen pro Gap** | DAS Killer-Feature. Nicht "CAPA schwach", sondern "Kl. 8.5.2 c) — Wirksamkeitsprüfung fehlt". |
| **Kein Email-Gate** | Ergebnis sofort, ohne Login/Email. Jede Hürde = Abbruch + Vertrauensverlust. |
| **LocalStorage first** | "Zero-Knowledge Architecture". Account nur optional für Premium. |
| **Progressive Tiefe** | 27 Fragen = guter Quick-Scan, aber Deep-Dive auf Abruf pro Kategorie nötig. |
| **Assessment-Profile** | ISO 13485 / EU MDR / FDA QMSR als schaltbare "Lenses". |
| **Prioritätenmatrix** | Impact x Aufwand als 2x2-Matrix. Wandelt Diagnose in Handlungsplan. |
| **Desktop-First** | QMBs arbeiten am 16:9-Monitor. Mobile ist irrelevant. |
| **PDF-Export** | Pflicht-Format #1. Muss "auf den Beamer werfbar" sein. |
| **Keine Gamification** | Badges, Ninja-Level, Zertifikate — wirkt unseriös in reguliertem Umfeld. |
| **DE + EN Pflicht** | DACH ist international verflochten. |
| **QMSR-Timing perfekt** | Deadline 02.02.2026 gerade vorbei — Firmen in akuter Gap-Analyse-Phase. |
| **Kein QMS-Suite werden** | Bewusst "Prep-/Assessment-Tool" bleiben. Suite = Validierungspflicht = Tod. |

---

## 2. Konsolidierte Feature-Roadmap

### Phase 1: MVP Launch (Wochen 1-4)

| # | Feature | Effort |
|---|---|---|
| 1 | Normen-Referenz-Engine: Jede Frage -> ISO-Klausel + erwartete Evidenz | Hoch |
| 2 | Scope-Wizard: Design? Steril? Software? Outsource? -> Fragen-Filter | Mittel |
| 3 | Gap-Backlog als Hauptansicht: Top-Gaps sortiert nach Impact | Mittel |
| 4 | Privacy-Badge im Tool: "Ihre Daten verlassen niemals Ihren Browser" | Niedrig |
| 5 | Autoritaet: "Entwickelt von Dipl.-Ing. mit 17+ Jahren QM-Erfahrung" | Niedrig |
| 6 | Basis-PDF (1 Seite Management Summary) | Mittel |
| 7 | LocalStorage Speicherung | Niedrig |
| 8 | Notizfeld pro Frage ("Eigene Evidenz-Referenz") | Niedrig |

### Phase 2: QMSR & Viralitaet (Wochen 5-8)

| # | Feature | Effort |
|---|---|---|
| 9 | Assessment-Profil "FDA QMSR Readiness" | Hoch |
| 10 | QMSR-Delta-Markierungen pro Frage | Mittel |
| 11 | Shareable Score-Link | Niedrig |
| 12 | Evidence-Gap-Split: Doku / Records / Wirksamkeit als 3 Spalten | Mittel |
| 13 | Trendvergleich (lokal): Aktuell vs. letztes Assessment | Mittel |

### Phase 3: Premium & Reports (Wochen 9-12)

| # | Feature | Effort |
|---|---|---|
| 14 | Detaillierter PDF-Report (49 EUR): 20+ Seiten | Hoch |
| 15 | Audit-Pack Generator: Pro Audittyp kompaktes Paket | Hoch |
| 16 | Management-Review One-Pager | Mittel |
| 17 | Prioritaetenmatrix (Impact x Aufwand) | Mittel |
| 18 | Consultant-Modus: Multi-Profil-Switching + White-Label | Mittel |

---

## 3. Architektur-Entscheidungen

1. **Hauptansicht Ergebnis:** Gap-Backlog (sortierbar nach Impact), nicht Radar-Chart
2. **Radar-Chart:** Navigations-Widget (klickbar), nicht Zentrum
3. **Datenmodell erweitern:** Pro Frage: isoClause, expectedEvidence[], evidenceType, qmsrDelta, auditRiskLevel
4. **Scope-Wizard vor Assessment:** 4-5 Fragen zu Produkttyp/Maerkten -> filtert irrelevante Fragen
5. **Evidence-Gap-Split:** 3 Spalten pro Gap: fehlende Doku / fehlende Records / fehlende Wirksamkeit
6. **Notizfeld pro Frage:** Freitext fuer eigene Dokument-Referenzen (z.B. "SOP-005")

## 4. Datenmodell-Erweiterung (pro Frage)

Aktuelles Schema:
```js
{
  id: 'dc-1',
  question: { de: '...', en: '...' },
  options: { de: [...], en: [...] }
}
```

Ziel-Schema:
```js
{
  id: 'dc-1',
  question: { de: '...', en: '...' },
  options: { de: [...], en: [...] },
  // NEU:
  isoClause: '4.2.4',
  clauseTitle: { de: 'Lenkung von Dokumenten', en: 'Control of Documents' },
  expectedEvidence: [
    { type: 'procedure', de: 'Dokumentierte VA zur Dokumentenlenkung', en: 'Documented procedure for document control' },
    { type: 'record', de: 'Aenderungshistorie / Revisionstaende', en: 'Change history / revision records' },
    { type: 'effectiveness', de: 'Nachweis regelmaessiger Review-Zyklen', en: 'Evidence of regular review cycles' }
  ],
  qmsrRef: null, // FDA QMSR Referenz (null wenn identisch mit ISO)
  qmsrDelta: null, // { de: '...', en: '...' } wenn Abweichung
  auditRiskLevel: 'medium', // 'low' | 'medium' | 'high' | 'critical'
  scope: ['all'], // oder ['design', 'sterile', 'software', 'implant', 'fda', 'mdr']
  weight: 1.0 // Gewichtungsfaktor (1.0 = Standard, 1.5 = erhoeht, 2.0 = kritisch)
}
```

## 5. Scope-Wizard Fragen

```js
const scopeQuestions = [
  { id: 'scope-design', question: { de: 'Entwickeln Sie Medizinprodukte (Design Controls)?', en: 'Do you design medical devices?' }, tags: ['design'] },
  { id: 'scope-sterile', question: { de: 'Stellen Sie sterile Produkte her?', en: 'Do you manufacture sterile products?' }, tags: ['sterile'] },
  { id: 'scope-software', question: { de: 'Entwickeln Sie Software als Medizinprodukt?', en: 'Do you develop Software as Medical Device?' }, tags: ['software'] },
  { id: 'scope-implant', question: { de: 'Stellen Sie implantierbare Produkte her?', en: 'Do you manufacture implantable devices?' }, tags: ['implant'] },
  { id: 'scope-us', question: { de: 'Vertreiben Sie Produkte auf dem US-Markt (FDA)?', en: 'Do you market products in the US (FDA)?' }, tags: ['fda'] },
  { id: 'scope-eu', question: { de: 'Vertreiben Sie Produkte in der EU (MDR/IVDR)?', en: 'Do you market products in the EU (MDR/IVDR)?' }, tags: ['mdr'] },
]
```

## 6. Anti-Patterns (NICHT machen)

1. Email-Gate vor Ergebnis
2. Generische Ergebnisse ohne Normenreferenz
3. Gamification (Badges, Zertifikate)
4. Mobile-First Design
5. Cloud-Only Zwang
6. Tool wird zur QMS-Suite
7. Unbegründete Scores / Black-Box Gewichtung
8. Veraltete Normen
9. Radar-Chart als Dashboard-Zentrum
10. Benchmarking ohne Methodik

## 7. Positionierung

"Der Audit-Prep-Copilot fuer QMBs — in 10 Minuten vom Bauchgefuehl zum evidenzbasierten Gap-Backlog mit Normenreferenz, Prioritaetenmatrix und Management-Summary. Kostenlos. Lokal. Ohne Login."

## 8. Premium-Preismodell

- Free: Vollstaendiges Assessment + Browser-Ergebnis + Basis-PDF (1 Seite)
- Einmalkauf 49 EUR: Detaillierter PDF-Report (20+ Seiten)
- Jahrespass 149 EUR: Trendvergleich + Audit-Pack + Multi-Profil + alle Exporte
- Team 499 EUR/Jahr: Multi-User + Cloud-Sync + White-Labeling
