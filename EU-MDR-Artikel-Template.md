# EU-MDR Grundlagen Artikel für QCore Consulting

## Anweisungen für Claude Code

### WICHTIG: Integration in QM-Wissen

Nach Erstellung der Seite bitte folgende Schritte ausführen:

#### 1. Sidebar aktualisieren
**Datei:** `/components/QMWissenSidebar.js` (oder ähnlich)

Falls Kategorie **"Branchenspezifisch"** noch nicht existiert, anlegen. Dann neuen Eintrag hinzufügen:
```jsx
{ name: 'EU-MDR Grundlagen', href: '/qm-wissen/eu-mdr' }
```

Die Struktur sollte sein:
```
Grundlagen
  - ISO 9001 erklärt
  - PDCA-Zyklus
  - Begriffe & Definitionen
Methoden
  - FMEA Grundlagen
  - Root Cause Analysis
  - CAPA richtig umsetzen
  - Audit-Vorbereitung
Branchenspezifisch ← Neue Kategorie falls nötig
  - EU-MDR Grundlagen ← NEU
  - ISO 13485 (falls vorhanden)
```

#### 2. Navigation in anderen Artikeln aktualisieren

**In `/pages/qm-wissen/audit-vorbereitung.js`:**
- "Nächster Artikel" → Link auf `/qm-wissen/eu-mdr` setzen

**In `/pages/qm-wissen/iso-13485.js` (falls vorhanden):**
- "Vorheriger Artikel" → Link auf `/qm-wissen/eu-mdr` setzen

#### 3. Hub-Seite prüfen
**Datei:** `/pages/qm-wissen/index.js`

Falls dort Artikel-Karten angezeigt werden, neue Karte hinzufügen:
```jsx
{
  title: 'EU-MDR Grundlagen',
  description: 'Die europäische Medizinprodukteverordnung verstehen',
  href: '/qm-wissen/eu-mdr',
  category: 'Branchenspezifisch'
}
```

---

## Meta-Informationen

**Dateipfad:** `/pages/qm-wissen/eu-mdr.js`  
**Lesezeit:** 14 Minuten  
**Level:** Fortgeschritten  
**Breadcrumb:** QM-Wissen › Branchenspezifisch › EU-MDR Grundlagen

### Navigation-Links
- **Vorheriger:** `/qm-wissen/audit-vorbereitung` (Audit-Vorbereitung)
- **Nächster:** `/qm-wissen/iso-13485` (ISO 13485 für Medizinprodukte) *oder Platzhalter*

---

## Imports und SEO

```jsx
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import QMWissenSidebar from '../../components/QMWissenSidebar';

// SEO Meta-Tags
<Head>
  <title>EU-MDR Grundlagen: Die Medizinprodukteverordnung verstehen | QCore Consulting</title>
  <meta name="description" content="EU-MDR einfach erklärt: Anforderungen, Klassifizierung, Technische Dokumentation und CE-Kennzeichnung für Medizinprodukte. Praktischer Leitfaden für Hersteller." />
</Head>
```

---

## Style-Komponenten (wie bei anderen Artikeln)

### Definition-Box (dunkelblau)
```jsx
<div className="bg-qcore-navy bg-opacity-60 border-l-4 border-qcore-cyan p-4 my-6 rounded-r">
  <p className="text-qcore-cyan font-semibold text-sm mb-2">Definition</p>
  <p className="text-gray-200 m-0">[Text]</p>
</div>
```

### Info-Box (blau)
```jsx
<div className="bg-qcore-navy bg-opacity-40 border-l-4 border-blue-400 p-4 my-4 rounded-r">
  <p className="text-gray-300 font-semibold mb-1">ℹ️ Info</p>
  <p className="text-gray-200 m-0">[Text]</p>
</div>
```

### Praxis-Tipp-Box (amber)
```jsx
<div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 my-6">
  <div className="flex items-center gap-2 text-amber-700 font-medium mb-2">
    <span>💡</span>
    <span>Praxis-Tipp</span>
  </div>
  <p className="text-gray-700 m-0">[Text]</p>
</div>
```

### Warnung-Box (orange)
```jsx
<div className="bg-qcore-navy bg-opacity-40 border-l-4 border-orange-400 p-4 my-4 rounded-r">
  <p className="text-gray-300 font-semibold mb-1">⚠️ Wichtig</p>
  <p className="text-gray-200 m-0">[Text]</p>
</div>
```

### Checklisten-Box (grün)
```jsx
<div className="bg-qcore-navy bg-opacity-40 border-l-4 border-green-400 p-4 my-4 rounded-r">
  <p className="text-gray-300 font-semibold mb-1">✅ Checkliste</p>
  <div className="text-gray-200">[Inhalt]</div>
</div>
```

---

# EU-MDR Grundlagen: Die Medizinprodukteverordnung verstehen

## 1. Was ist die EU-MDR?

**Definition-Box:**
> Die **EU-MDR (Medical Device Regulation, Verordnung (EU) 2017/745)** ist die europäische Verordnung für Medizinprodukte. Sie regelt das Inverkehrbringen, die Bereitstellung und die Inbetriebnahme von Medizinprodukten in der Europäischen Union und ersetzt die bisherige Richtlinie 93/42/EWG (MDD).

### Warum eine neue Verordnung?

| Auslöser | Beschreibung |
|----------|--------------|
| **PIP-Skandal** | Fehlerhafte Brustimplantate (2010) zeigten Schwächen im System |
| **Metall-auf-Metall-Hüften** | Hohe Revisionsraten, späte Erkennung |
| **Harmonisierung** | Unterschiedliche Umsetzung der MDD in EU-Ländern |
| **Technologischer Fortschritt** | Neue Produktkategorien (Software, Nano, etc.) |

### Verordnung vs. Richtlinie

| Aspekt | Richtlinie (MDD) | Verordnung (MDR) |
|--------|------------------|------------------|
| **Rechtsnatur** | Muss in nationales Recht umgesetzt werden | Gilt unmittelbar in allen EU-Staaten |
| **Einheitlichkeit** | Unterschiede zwischen Ländern möglich | Identische Anforderungen überall |
| **Flexibilität** | Nationale Anpassungen möglich | Keine nationalen Abweichungen |

---

## 2. Zeitplan und Übergangsfristen

**Warnung-Box:**
> Die Übergangsfristen wurden mehrfach verlängert. Hier der aktuelle Stand (2024):

**Tabelle: Wichtige Daten**

| Datum | Ereignis |
|-------|----------|
| **Mai 2017** | EU-MDR veröffentlicht |
| **Mai 2021** | EU-MDR vollständig anwendbar (Geltungsbeginn) |
| **Mai 2024** | Ende Verkaufsfrist für MDD-Klasse I Produkte |
| **Dez 2027** | Ende Übergangsfrist für MDD-Klasse Is, Im, IIa |
| **Dez 2028** | Ende Übergangsfrist für MDD-Klasse IIb, III |

**Info-Box:**
> **Achtung:** Die verlängerten Fristen gelten nur für Produkte, die bereits ein gültiges MDD-Zertifikat hatten und für die ein MDR-Antrag bei einer Benannten Stelle eingereicht wurde. Neue Produkte müssen sofort nach MDR zertifiziert werden.

---

## 3. Geltungsbereich: Was ist ein Medizinprodukt?

**Definition-Box:**
> Ein **Medizinprodukt** ist jedes Instrument, Apparat, Gerät, Software, Implantat, Reagenz, Material oder sonstiger Gegenstand, das vom Hersteller zur Anwendung am Menschen für medizinische Zwecke bestimmt ist.

### Abgrenzung zu anderen Produktkategorien

| Kategorie | Beispiel | Regulierung |
|-----------|----------|-------------|
| **Medizinprodukt** | Blutdruckmessgerät | EU-MDR |
| **In-vitro-Diagnostikum** | COVID-Schnelltest | EU-IVDR |
| **Arzneimittel** | Aspirin-Tablette | Arzneimittelrecht |
| **Kosmetik** | Feuchtigkeitscreme | Kosmetik-VO |
| **Kombinationsprodukt** | Medikament + Applikator | Abhängig vom Hauptbestandteil |

**Praxis-Tipp-Box:**
> Die Zweckbestimmung entscheidet! Ein Fitnessarmband ist kein Medizinprodukt. Das gleiche Armband mit EKG-Funktion zur Erkennung von Herzrhythmusstörungen ist eines.

### Neu unter MDR

Die MDR erweitert den Geltungsbereich auf:

- Produkte ohne medizinischen Zweck (Anhang XVI): Kontaktlinsen, Fettabsaugungsgeräte, Laser zur Hauterneuerung
- Software als Medizinprodukt (SaMD)
- Produkte mit Nanomaterialien
- Produkte aus Stoffen/Kombinationen mit systemischer Absorption

---

## 4. Klassifizierung

Die Risikoklasse bestimmt den Aufwand für die Zertifizierung.

### Die vier Risikoklassen

| Klasse | Risiko | Beispiele | Benannte Stelle? |
|--------|--------|-----------|------------------|
| **I** | Niedrig | Pflaster, Rollstuhl, Gehhilfe | Nein* |
| **Is** | Niedrig (steril) | Sterile Handschuhe, sterile Verbände | Ja (nur Sterilität) |
| **Im** | Niedrig (Messfunktion) | Thermometer, Blutdruckmessgerät | Ja (nur Messfunktion) |
| **IIa** | Mittel | Hörgerät, Kontaktlinsen, Spritzen | Ja |
| **IIb** | Mittel-Hoch | Beatmungsgerät, Röntgengerät, Kondome | Ja |
| **III** | Hoch | Herzschrittmacher, Hüftimplantat, Stents | Ja |

*Klasse I ohne Zusatz: Konformitätsbewertung durch Hersteller selbst, aber TD muss MDR-konform sein.

### Klassifizierungsregeln

Die MDR enthält 22 Klassifizierungsregeln in Anhang VIII. Grundprinzipien:

| Faktor | Höhere Klasse bei... |
|--------|----------------------|
| **Invasivität** | Längerer/tieferer Kontakt mit Körper |
| **Dauer** | Langzeitanwendung > kurzfristig |
| **Aktiv** | Energiezufuhr erhöht Risiko |
| **Kritische Organe** | Herz, ZNS, Blut = höheres Risiko |
| **Resorbierbar** | Wird vom Körper aufgenommen |
| **Arzneimittel** | Kombination mit Wirkstoff |

**Warnung-Box:**
> **Hochstufung unter MDR:** Viele Produkte wurden von der MDD zur MDR höher klassifiziert. Beispiel: Software, die Diagnosen unterstützt, kann jetzt Klasse IIa oder höher sein (statt I). Prüfen Sie Ihre Klassifizierung neu!

**Praxis-Tipp-Box:**
> Dokumentieren Sie die Klassifizierung nachvollziehbar: Welche Regeln wurden geprüft? Warum greift welche Regel? Das wird bei Audits gefragt.

---

## 5. Akteure und Pflichten

### Wirtschaftsakteure unter MDR

| Akteur | Definition | Hauptpflichten |
|--------|------------|----------------|
| **Hersteller** | Wer das Produkt entwickelt und in Verkehr bringt | Gesamtverantwortung, TD, QMS, PMS |
| **Bevollmächtigter** | EU-Vertreter für Nicht-EU-Hersteller | Ansprechpartner für Behörden |
| **Importeur** | Bringt Nicht-EU-Produkt in EU | Prüfung der Konformität, Kennzeichnung |
| **Händler** | Vertreibt Produkt | Prüfung CE + UDI, Lagerbedingungen |

**Info-Box:**
> Neu unter MDR: Auch Importeure und Händler haben konkrete Prüfpflichten. Sie müssen sicherstellen, dass Produkte korrekt gekennzeichnet sind und Dokumentation verfügbar ist.

### Die Person für Regulierungsfragen (PRRC)

**Definition-Box:**
> Die **Person für die Einhaltung der Regulierungsvorschriften (PRRC)** ist eine natürliche Person im Unternehmen, die für die Einhaltung der MDR-Anforderungen verantwortlich ist.

**Anforderungen an die PRRC:**

- Hochschulabschluss + 1 Jahr Erfahrung ODER
- 4 Jahre Berufserfahrung im Bereich QM/Regulierung
- Kann auch extern sein (bei KMU mit <50 Mitarbeitern)
- Muss im Unternehmen verfügbar sein

---

## 6. Technische Dokumentation

Die Technische Dokumentation (TD) ist das Herzstück der MDR-Konformität.

### Struktur nach Anhang II und III

**Tabelle: Anhang II – Technische Dokumentation**

| Abschnitt | Inhalt |
|-----------|--------|
| **1. Produktbeschreibung** | Zweckbestimmung, Indikationen, Kontraindikationen, Zielgruppe |
| **2. Konstruktion & Fertigung** | Materialien, Komponenten, Prozesse |
| **3. Allgemeine Sicherheits- und Leistungsanforderungen** | Nachweis der Erfüllung (Anhang I) |
| **4. Nutzen-Risiko-Analyse** | Risikomanagement nach ISO 14971 |
| **5. Produktprüfung** | Prüfberichte, Validierung |
| **6. Klinische Bewertung** | Klinische Daten, Literaturauswertung |
| **7. Post-Market Surveillance** | PMS-Plan, PMCF wenn erforderlich |

**Tabelle: Anhang III – TD für Überwachung nach Inverkehrbringen**

| Element | Beschreibung |
|---------|--------------|
| **PMS-Plan** | Wie werden Marktdaten gesammelt? |
| **PSUR** | Regelmäßiger Sicherheitsbericht (Klasse IIa+) |
| **PMCF** | Klinische Nachbeobachtung (wenn erforderlich) |
| **Vigilanz** | Meldung schwerwiegender Vorkommnisse |

**Warnung-Box:**
> Die TD-Anforderungen unter MDR sind deutlich umfangreicher als unter MDD. Planen Sie erheblich mehr Aufwand für die Dokumentation ein.

---

## 7. Klinische Bewertung

**Definition-Box:**
> Die **Klinische Bewertung** ist ein systematischer und geplanter Prozess zur kontinuierlichen Generierung, Sammlung, Analyse und Bewertung klinischer Daten zu einem Medizinprodukt.

### Quellen klinischer Daten

| Quelle | Beschreibung | Eignung |
|--------|--------------|---------|
| **Klinische Prüfungen** | Prospektive Studien mit dem Produkt | Goldstandard für Klasse III |
| **Literatur** | Publizierte Daten zum Produkt/Äquivalent | Häufigste Quelle für Klasse I-IIa |
| **Klinische Erfahrung** | PMS-Daten, Reklamationen, Vigilanz | Ergänzend |
| **Äquivalenzvergleich** | Daten eines vergleichbaren Produkts | Eingeschränkt nutzbar unter MDR |

### Äquivalenz unter MDR

**Warnung-Box:**
> Die Anforderungen an die Äquivalenz wurden verschärft. Ein Vertrag mit dem Hersteller des Vergleichsprodukts ist erforderlich, wenn Sie dessen TD nutzen wollen. Das macht Äquivalenz zu Konkurrenzprodukten faktisch unmöglich.

**Äquivalenz erfordert Nachweis in drei Dimensionen:**

| Dimension | Kriterien |
|-----------|-----------|
| **Technisch** | Gleiche Materialien, Spezifikationen, Eigenschaften |
| **Biologisch** | Gleicher Körperkontakt, gleiche Gewebe |
| **Klinisch** | Gleiche Zweckbestimmung, gleiche Anwender |

---

## 8. Risikomanagement

**Info-Box:**
> Risikomanagement nach ISO 14971 bleibt die zentrale Methode. Die MDR verlangt jedoch einen stärkeren Fokus auf den Nutzen-Risiko-Abgleich und die Integration von PMS-Daten.

### MDR-spezifische Anforderungen

| Anforderung | MDR-Artikel |
|-------------|-------------|
| Nutzen-Risiko-Analyse | Art. 10(2), Anhang I Kap. I |
| Risikominimierung nach Stand der Technik | Anhang I, 4 |
| Rückverfolgbarkeit zu Risiken | Anhang II, 4 |
| PMS-Daten in Risikomanagement einfließen | Art. 83, 84 |

**Praxis-Tipp-Box:**
> Verknüpfen Sie Ihre FMEA mit den GSPAs (Anhang I). Jede Anforderung sollte auf eine Risikobewertung zurückführbar sein. Das erleichtert die Prüfung durch die Benannte Stelle erheblich.

---

## 9. Konformitätsbewertung und CE-Kennzeichnung

### Wege zur CE-Kennzeichnung

| Klasse | Konformitätsbewertungsverfahren |
|--------|--------------------------------|
| **I** | Eigenerklärung (Anhang IV) |
| **Is, Im** | Eigenerklärung + BS für Sterilität/Messung |
| **IIa** | QMS-Audit + Stichprobenprüfung (Anhang IX) |
| **IIb** | QMS-Audit + TD-Prüfung pro Produktgruppe |
| **III** | QMS-Audit + TD-Prüfung pro Produkt |
| **III Implantate** | Zusätzlich: Expertenpanel (Scrutiny) |

**Info-Box:**
> Die Benannte Stelle (BS) prüft nicht nur das QMS, sondern auch die Technische Dokumentation. Je höher die Klasse, desto intensiver die TD-Prüfung.

### Die Rolle der Benannten Stelle

| Aufgabe | Beschreibung |
|---------|--------------|
| **QMS-Audit** | Prüfung des Qualitätsmanagementsystems |
| **TD-Prüfung** | Prüfung der Technischen Dokumentation |
| **Zertifikatausstellung** | EU-Konformitätszertifikat (max. 5 Jahre) |
| **Überwachungsaudits** | Jährliche Audits, unangekündigte Audits möglich |
| **Stichprobenprüfungen** | Prüfung von Produktmustern |

**Warnung-Box:**
> Es gibt deutlich weniger Benannte Stellen unter MDR als unter MDD. Wartezeiten von 12-24 Monaten für Erstzertifizierungen sind keine Seltenheit. Planen Sie frühzeitig!

---

## 10. UDI – Einheitliche Produktidentifizierung

**Definition-Box:**
> Die **Unique Device Identification (UDI)** ist ein System zur eindeutigen Identifikation von Medizinprodukten entlang der gesamten Lieferkette.

### UDI-Struktur

| Element | Beschreibung | Beispiel |
|---------|--------------|----------|
| **UDI-DI** | Device Identifier (statisch) | Produktcode |
| **UDI-PI** | Production Identifier (variabel) | Charge, Seriennummer, Verfall |

### Umsetzungsfristen UDI

| Klasse | Auf Produkt/Verpackung | In EUDAMED |
|--------|------------------------|------------|
| **III, Implantate** | Seit Mai 2021 | Seit Mai 2021 |
| **IIa, IIb** | Seit Mai 2023 | Seit Mai 2023 |
| **I** | Mai 2025 | Mai 2025 |

**Praxis-Tipp-Box:**
> Beginnen Sie jetzt mit der UDI-Implementierung, falls noch nicht geschehen. Das betrifft nicht nur Etiketten, sondern auch ERP-Systeme, Produktionsprozesse und Dokumentation.

---

## 11. Post-Market Surveillance (PMS)

**Definition-Box:**
> **Post-Market Surveillance** ist ein aktiver und systematischer Prozess zur Sammlung und Auswertung von Daten über die Leistung und Sicherheit eines Produkts nach dem Inverkehrbringen.

### PMS-Elemente nach MDR

| Element | Beschreibung | Für wen? |
|---------|--------------|----------|
| **PMS-Plan** | Beschreibt Methoden, Quellen, Häufigkeit | Alle Klassen |
| **PMS-Bericht** | Zusammenfassung der PMS-Aktivitäten | Klasse I |
| **PSUR** | Periodischer Sicherheitsbericht | Klasse IIa, IIb, III |
| **PMCF** | Klinische Nachbeobachtung | Wenn klinische Lücken bestehen |
| **Vigilanz** | Meldung schwerwiegender Vorkommnisse | Alle Klassen |

**Tabelle: PSUR-Häufigkeit**

| Klasse | PSUR-Intervall |
|--------|----------------|
| IIa | Alle 2 Jahre (bei Bedarf häufiger) |
| IIb | Jährlich |
| III | Jährlich |

---

## 12. Vigilanz und Meldepflichten

### Was muss gemeldet werden?

| Ereignis | Meldefrist |
|----------|------------|
| **Schwerwiegendes Vorkommnis** | 15 Tage (bei Tod: 10 Tage, bei Gefahr: 2 Tage) |
| **Sicherheitskorrekturmaßnahme** | Unverzüglich |
| **Trendberichte** | Unverzüglich bei erkanntem Trend |

**Definition-Box:**
> Ein **schwerwiegendes Vorkommnis** liegt vor, wenn das Produkt direkt oder indirekt zum Tod, einer schwerwiegenden Verschlechterung des Gesundheitszustands oder einer ernsthaften Gefahr für die öffentliche Gesundheit geführt hat oder hätte führen können.

**Warnung-Box:**
> Die Meldeschwelle ist niedrig! "Hätte führen können" bedeutet: Auch Beinahe-Vorfälle können meldepflichtig sein. Im Zweifel melden.

---

## 13. EUDAMED

**Definition-Box:**
> **EUDAMED** ist die europäische Datenbank für Medizinprodukte. Sie macht Informationen über Produkte, Wirtschaftsakteure, Zertifikate und Vigilanzdaten transparent.

### EUDAMED-Module

| Modul | Inhalt | Status |
|-------|--------|--------|
| **Akteure** | Registrierung von Herstellern, Importeuren, etc. | Live |
| **UDI/Produkte** | Produktregistrierung | Live |
| **Benannte Stellen & Zertifikate** | Zertifikatsdatenbank | Live |
| **Klinische Prüfungen** | Register für Studien | Live |
| **Vigilanz** | Vorkommnismeldungen | Teilweise live |
| **Marktüberwachung** | Behördendaten | In Entwicklung |

**Info-Box:**
> EUDAMED ist noch nicht vollständig funktionsfähig. Bis zur vollen Funktionsfähigkeit gelten Übergangsregelungen. Die Registrierung von Akteuren und UDI ist jedoch bereits verpflichtend.

---

## 14. Typische Herausforderungen für Hersteller

**Warnung-Box:**
> Diese Punkte bereiten in der Praxis die größten Schwierigkeiten:

### Herausforderung 1: Klinische Daten

- Äquivalenz schwerer nachweisbar
- Klinische Prüfungen teuer und zeitaufwendig
- Literatur oft unzureichend

### Herausforderung 2: Kapazitäten Benannte Stellen

- Wenige BSen für viele Hersteller
- Lange Wartezeiten
- Hohe Kosten

### Herausforderung 3: Dokumentationsaufwand

- TD deutlich umfangreicher
- GSPA-Nachweise aufwendig
- PMS-System aufbauen

### Herausforderung 4: Legacy-Produkte

- Alte Produkte müssen MDR-konform werden
- Oft keine vollständige TD vorhanden
- Retrofit aufwendig

**Praxis-Tipp-Box:**
> Priorisieren Sie Ihre Produkte: Welche sind strategisch wichtig? Welche bringen den meisten Umsatz? Für unwirtschaftliche Produkte kann ein Marktrückzug die bessere Option sein.

---

## 15. Checkliste: MDR-Readiness

**Checklisten-Box:**
> ✅ **Sind Sie MDR-ready?**
> 
> **Grundlagen:**
> - [ ] PRRC benannt und qualifiziert?
> - [ ] QMS nach ISO 13485 zertifiziert?
> - [ ] Benannte Stelle beauftragt (falls erforderlich)?
> 
> **Produkte:**
> - [ ] Klassifizierung neu bewertet?
> - [ ] Zweckbestimmung präzise formuliert?
> - [ ] UDI implementiert?
> 
> **Dokumentation:**
> - [ ] TD nach Anhang II/III aufgebaut?
> - [ ] Klinische Bewertung aktuell?
> - [ ] Risikomanagement vollständig?
> - [ ] GSPAs nachgewiesen?
> 
> **Post-Market:**
> - [ ] PMS-Plan vorhanden?
> - [ ] Vigilanz-Prozess etabliert?
> - [ ] PSUR-Prozess (falls Klasse IIa+)?
> 
> **Registrierung:**
> - [ ] In EUDAMED registriert?
> - [ ] Produkte in EUDAMED eingetragen?

---

## 16. Zusammenfassung

**Definition-Box:**
> **EU-MDR auf einen Blick:**
> 
> ✓ **Verordnung:** Gilt direkt in allen EU-Staaten  
> ✓ **Klassifizierung:** 4 Klassen (I, IIa, IIb, III), oft Hochstufung  
> ✓ **Technische Dokumentation:** Deutlich umfangreicher als MDD  
> ✓ **Klinische Bewertung:** Höhere Anforderungen, Äquivalenz erschwert  
> ✓ **PMS:** Aktive Marktüberwachung verpflichtend  
> ✓ **UDI:** Eindeutige Produktidentifikation  
> ✓ **EUDAMED:** Europäische Transparenz-Datenbank  
> ✓ **PRRC:** Verantwortliche Person im Unternehmen

---

## CTA-Bereich

**Box mit dunkelblauem Hintergrund:**

> **MDR-Umstellung überfordert Sie?**
> 
> Ich unterstütze Sie bei:
> - Gap-Analyse: Wo stehen Sie, was fehlt?
> - Klassifizierung und Zweckbestimmung
> - Technische Dokumentation aufbauen
> - Klinische Bewertung erstellen
> - PMS-System implementieren
> - Vorbereitung auf das Audit der Benannten Stelle
> 
> → [Kostenloses Erstgespräch vereinbaren](/kontakt)

---

## Navigation

- ← Vorheriger: [Audit-Vorbereitung](/qm-wissen/audit-vorbereitung)
- → Nächster: [ISO 13485 für Medizinprodukte](/qm-wissen/iso-13485)

---

# Checkliste für Claude Code

## Dateien erstellen/ändern:

- [ ] `/pages/qm-wissen/eu-mdr.js` erstellen
- [ ] `/components/QMWissenSidebar.js` aktualisieren:
  - Falls "Branchenspezifisch" Kategorie nicht existiert: anlegen
  - Neuer Eintrag: `{ name: 'EU-MDR Grundlagen', href: '/qm-wissen/eu-mdr' }`
- [ ] `/pages/qm-wissen/audit-vorbereitung.js` → "Nächster Artikel"-Link auf `/qm-wissen/eu-mdr` setzen
- [ ] `/pages/qm-wissen/index.js` → Falls Artikel-Grid vorhanden, neue Karte hinzufügen

## Nach Erstellung testen:

- [ ] Seite lädt ohne Fehler
- [ ] Sidebar zeigt neuen Artikel unter "Branchenspezifisch"
- [ ] Navigation (←/→) funktioniert
- [ ] Breadcrumb korrekt: QM-Wissen › Branchenspezifisch › EU-MDR Grundlagen
- [ ] Responsive Layout funktioniert

## Git:

```bash
git add .
git commit -m "Add EU-MDR Grundlagen article to QM-Wissen"
git push
```
