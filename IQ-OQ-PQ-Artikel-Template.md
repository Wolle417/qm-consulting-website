# IQ/OQ/PQ erklärt – Artikel für QCore Consulting

## Anweisungen für Claude Code

### WICHTIG: Integration in QM-Wissen

Nach Erstellung der Seite bitte folgende Schritte ausführen:

#### 1. Sidebar aktualisieren
**Datei:** `/components/QMWissenSidebar.js` (oder ähnlich)

Falls Kategorie **"Validation"** noch nicht existiert, anlegen. Dann neuen Eintrag hinzufügen:
```jsx
{ name: 'IQ/OQ/PQ erklärt', href: '/qm-wissen/iq-oq-pq' }
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
Branchenspezifisch
  - EU-MDR Grundlagen
  - ISO 13485 (falls vorhanden)
Validation ← Neue Kategorie
  - IQ/OQ/PQ erklärt ← NEU
```

#### 2. Navigation in anderen Artikeln aktualisieren

**In `/pages/qm-wissen/eu-mdr.js`:**
- "Nächster Artikel" → Link auf `/qm-wissen/iq-oq-pq` setzen

#### 3. Hub-Seite prüfen
**Datei:** `/pages/qm-wissen/index.js`

Falls dort Artikel-Karten angezeigt werden, neue Karte hinzufügen:
```jsx
{
  title: 'IQ/OQ/PQ erklärt',
  description: 'Qualifizierung von Anlagen und Prozessen verstehen',
  href: '/qm-wissen/iq-oq-pq',
  category: 'Validation'
}
```

---

## Meta-Informationen

**Dateipfad:** `/pages/qm-wissen/iq-oq-pq.js`  
**Lesezeit:** 11 Minuten  
**Level:** Fortgeschritten  
**Breadcrumb:** QM-Wissen › Validation › IQ/OQ/PQ erklärt

### Navigation-Links
- **Vorheriger:** `/qm-wissen/eu-mdr` (EU-MDR Grundlagen)
- **Nächster:** `/qm-wissen/csv` (Computer System Validation) *oder Platzhalter*

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
  <title>IQ/OQ/PQ erklärt: Qualifizierung von Anlagen und Prozessen | QCore Consulting</title>
  <meta name="description" content="IQ, OQ, PQ einfach erklärt: Installations-, Funktions- und Leistungsqualifizierung für Anlagen und Prozesse. Praktische Anleitung mit Beispielen für Pharma und MedTech." />
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

# IQ/OQ/PQ erklärt: Qualifizierung von Anlagen und Prozessen

## 1. Was ist Qualifizierung?

**Definition-Box:**
> **Qualifizierung** ist der dokumentierte Nachweis, dass Ausrüstungen, Räume oder Systeme ordnungsgemäß installiert sind, korrekt funktionieren und die erwarteten Ergebnisse liefern. Sie ist Voraussetzung für die Prozessvalidierung.

### Qualifizierung vs. Validierung

| Begriff | Bezieht sich auf | Fragestellung |
|---------|------------------|---------------|
| **Qualifizierung** | Anlagen, Geräte, Räume | "Funktioniert die Maschine wie spezifiziert?" |
| **Validierung** | Prozesse | "Liefert der Prozess reproduzierbar das gewünschte Ergebnis?" |

**Info-Box:**
> Einfach gesagt: Erst qualifizieren Sie die Anlage, dann validieren Sie den Prozess, der auf dieser Anlage läuft. Ohne qualifizierte Anlage keine valide Prozessvalidierung.

### Das V-Modell

```
Anforderungen                                        Qualifizierung
     │                                                      │
     ▼                                                      ▼
┌─────────────┐                                    ┌─────────────┐
│   URS       │◄──────────────────────────────────►│    PQ       │
│ (User Req.) │                                    │ (Leistung)  │
└─────────────┘                                    └─────────────┘
     │                                                      ▲
     ▼                                                      │
┌─────────────┐                                    ┌─────────────┐
│   FS        │◄──────────────────────────────────►│    OQ       │
│ (Funktional)│                                    │ (Funktion)  │
└─────────────┘                                    └─────────────┘
     │                                                      ▲
     ▼                                                      │
┌─────────────┐                                    ┌─────────────┐
│   DS        │◄──────────────────────────────────►│    IQ       │
│ (Design)    │                                    │(Installation)│
└─────────────┘                                    └─────────────┘
                         │
                         ▼
                  ┌─────────────┐
                  │   Bau/      │
                  │ Beschaffung │
                  └─────────────┘
```

**Das V-Modell zeigt:** Jede Spezifikationsebene links hat eine korrespondierende Qualifizierungsebene rechts.

---

## 2. Die Qualifizierungsphasen im Überblick

**Tabelle: IQ, OQ, PQ – Kurzübersicht**

| Phase | Vollständiger Name | Kernfrage | Wann? |
|-------|-------------------|-----------|-------|
| **DQ** | Design Qualification | Ist das Design geeignet? | Vor Beschaffung |
| **IQ** | Installation Qualification | Ist alles richtig installiert? | Nach Installation |
| **OQ** | Operational Qualification | Funktioniert alles wie spezifiziert? | Nach IQ |
| **PQ** | Performance Qualification | Liefert es reproduzierbar Ergebnisse? | Nach OQ |

**Info-Box:**
> In der Praxis wird DQ oft in den Beschaffungsprozess integriert (Lieferantenauswahl, Lastenprüfung). IQ, OQ und PQ sind die "klassischen" Qualifizierungsphasen.

---

## 3. DQ – Design Qualification

**Definition-Box:**
> Die **Design Qualification (DQ)** ist der dokumentierte Nachweis, dass das Design einer Anlage oder eines Systems die Benutzeranforderungen (URS) erfüllt und für den vorgesehenen Zweck geeignet ist.

### Wann wird DQ durchgeführt?

- Vor der Beschaffung
- Bei Eigenentwicklung: Während der Designphase
- Bei Standardanlagen: Prüfung der Spezifikationen gegen URS

### DQ-Inhalte

| Element | Beschreibung |
|---------|--------------|
| **URS-Abgleich** | Erfüllt das Design alle Benutzeranforderungen? |
| **Normenkonformität** | Entspricht es relevanten Standards (CE, GMP, etc.)? |
| **Lieferantenbewertung** | Ist der Lieferant qualifiziert? |
| **Risikoanalyse** | Welche Risiken bestehen? |

**Praxis-Tipp-Box:**
> Führen Sie DQ als formale Prüfung gegen eine Checkliste durch. Dokumentieren Sie Abweichungen und deren Akzeptanz. Das spart später Diskussionen.

---

## 4. IQ – Installation Qualification

**Definition-Box:**
> Die **Installation Qualification (IQ)** ist der dokumentierte Nachweis, dass Anlagen, Systeme und Ausrüstungen korrekt gemäß Spezifikationen und Herstellerangaben installiert wurden.

### Was wird bei IQ geprüft?

**Tabelle: Typische IQ-Prüfpunkte**

| Kategorie | Prüfpunkte |
|-----------|------------|
| **Lieferumfang** | Alle Komponenten geliefert? Transportschäden? |
| **Dokumentation** | Bedienungsanleitung, Zertifikate, Schaltpläne vorhanden? |
| **Installation** | Mechanisch korrekt aufgestellt? Ausgerichtet? |
| **Versorgung** | Strom, Wasser, Druckluft angeschlossen? Spezifikationsgerecht? |
| **Umgebung** | Temperatur, Feuchtigkeit, Sauberkeit im Toleranzbereich? |
| **Software** | Richtige Version installiert? Konfiguration dokumentiert? |
| **Sicherheit** | Not-Aus funktioniert? Schutzvorrichtungen montiert? |

### IQ-Dokumentation

| Dokument | Inhalt |
|----------|--------|
| **IQ-Protokoll** | Alle Prüfpunkte, Ergebnisse, Abweichungen |
| **Anlagenstammblatt** | Seriennummer, Standort, Verantwortlicher |
| **Kalibrierzertifikate** | Für Messgeräte und Sensoren |
| **Zeichnungen** | As-Built-Zeichnungen (wie tatsächlich installiert) |

**Warnung-Box:**
> IQ ist nicht einfach "Abhaken, dass alles da ist". Prüfen Sie tatsächlich: Stimmt die Spannung? Ist der Druckluftanschluss korrekt dimensioniert? Fehler hier rächen sich später.

**Praxis-Tipp-Box:**
> Fotografieren Sie die Installation! Bilder von Anschlüssen, Typenschildern und der Gesamtaufstellung sind wertvolle Dokumentation und erleichtern spätere Fehlersuche.

---

## 5. OQ – Operational Qualification

**Definition-Box:**
> Die **Operational Qualification (OQ)** ist der dokumentierte Nachweis, dass installierte Anlagen innerhalb der spezifizierten Betriebsgrenzen wie vorgesehen funktionieren.

### Was wird bei OQ geprüft?

**Kernprinzip:** Testen an den Grenzen des Betriebsbereichs (Worst Case)

**Tabelle: Typische OQ-Prüfpunkte**

| Kategorie | Prüfpunkte |
|-----------|------------|
| **Funktionen** | Alle Funktionen einzeln testen |
| **Alarme** | Lösen Alarme korrekt aus? |
| **Grenzwerte** | Verhalten bei Min/Max-Werten |
| **Wiederholbarkeit** | Mehrfache Durchläufe identisch? |
| **Verriegelungen** | Sicherheitslogik funktioniert? |
| **Kalibrierung** | Messgeräte kalibriert und rückführbar? |
| **Bedieneroberfläche** | Alle Eingaben/Ausgaben korrekt? |

### OQ ohne Produkt

**Info-Box:**
> OQ wird idealerweise ohne Produkt durchgeführt (z.B. mit Wasser statt Wirkstoff, mit Dummy-Material). So können Sie die Anlage testen, ohne Produkt zu riskieren.

### Beispiel: OQ eines Autoklaven

| Prüfung | Beschreibung | Akzeptanzkriterium |
|---------|--------------|---------------------|
| **Temperatur** | Erreicht Solltemperatur von 121°C | ±1°C |
| **Haltezeit** | Hält 15 min bei 121°C | ≥15 min |
| **Temperaturverteilung** | Mapping mit 12 Sensoren | Max. Differenz <2°C |
| **Druckaufbau** | Erreicht 2,1 bar | ±0,1 bar |
| **Alarm Übertemperatur** | Löst bei 125°C aus | 125°C ±1°C |
| **Not-Aus** | Unterbricht Heizung sofort | <2 Sekunden |

**Praxis-Tipp-Box:**
> Testen Sie auch Fehlerzustände! Was passiert bei Stromausfall? Bei Druckverlust? Bei Sensordefekt? Diese Worst-Case-Szenarien zeigen, ob die Anlage sicher ist.

---

## 6. PQ – Performance Qualification

**Definition-Box:**
> Die **Performance Qualification (PQ)** ist der dokumentierte Nachweis, dass eine Anlage unter realen Produktionsbedingungen mit Produkt zuverlässig und reproduzierbar die spezifizierten Ergebnisse liefert.

### Unterschied OQ vs. PQ

| Aspekt | OQ | PQ |
|--------|----|----|
| **Fokus** | Anlage | Prozess auf der Anlage |
| **Material** | Ohne Produkt (Dummies) | Mit realem Produkt |
| **Bedingungen** | Spezifikationsgrenzen | Produktionsbedingungen |
| **Ziel** | "Funktioniert die Maschine?" | "Liefert sie gute Produkte?" |

### PQ-Durchführung

**Tabelle: Typische PQ-Anforderungen**

| Element | Beschreibung |
|---------|--------------|
| **Chargenanzahl** | Mindestens 3 aufeinanderfolgende Chargen |
| **Personal** | Geschultes Produktionspersonal (nicht Qualifizierungsteam) |
| **Parameter** | Produktionsparameter (nicht Extremwerte) |
| **Prüfung** | Vollständige Produktprüfung nach Spezifikation |
| **Dokumentation** | Chargendokumentation wie in Routine |

### Beispiel: PQ einer Abfüllanlage

| Prüfung | Beschreibung | Akzeptanzkriterium |
|---------|--------------|---------------------|
| **Füllmenge** | 100 Flaschen pro Charge, 3 Chargen | 100 ml ±2% |
| **Dichtheit** | Vakuumtest | Keine Undichtigkeit |
| **Optische Prüfung** | Partikel, Verfärbung | Keine sichtbaren Defekte |
| **Prozessfähigkeit** | Cpk-Berechnung | Cpk ≥1,33 |

**Warnung-Box:**
> PQ ist keine einmalige Sache! Bei signifikanten Änderungen (neues Produkt, Umbau, neue Parameter) muss requalifiziert werden.

---

## 7. Dokumentation

### Qualifizierungsdokumente

| Dokument | Inhalt | Wann erstellt? |
|----------|--------|----------------|
| **Validierungsmasterplan (VMP)** | Gesamtstrategie, Verantwortlichkeiten, Zeitplan | Zu Projektbeginn |
| **URS** | Benutzeranforderungen | Vor DQ |
| **Qualifizierungsplan** | Prüfpunkte, Akzeptanzkriterien, Methoden | Vor jeder Phase |
| **Qualifizierungsprotokoll** | Durchführung, Ergebnisse, Abweichungen | Während/Nach Durchführung |
| **Qualifizierungsbericht** | Zusammenfassung, Bewertung, Freigabe | Nach Abschluss |
| **Änderungshistorie** | Alle Änderungen nach Erstqualifizierung | Laufend |

### Struktur eines Qualifizierungsprotokolls

**Checklisten-Box:**
> ✅ **Inhalte Qualifizierungsprotokoll**
> 
> - [ ] Zweck und Geltungsbereich
> - [ ] Verantwortlichkeiten
> - [ ] Beschreibung des Prüfobjekts
> - [ ] Voraussetzungen (z.B. IQ abgeschlossen)
> - [ ] Prüfpunkte mit Akzeptanzkriterien
> - [ ] Durchführungsanweisungen
> - [ ] Ergebnisdokumentation (Tabellen)
> - [ ] Abweichungsbehandlung
> - [ ] Unterschriften (Durchführung, Prüfung, Freigabe)
> - [ ] Anhänge (Rohdaten, Zertifikate, Fotos)

---

## 8. Risikobasierter Ansatz

**Info-Box:**
> Moderne Qualifizierung ist risikobasiert. Nicht alles muss mit gleicher Intensität geprüft werden. Der Aufwand richtet sich nach dem Risiko.

### Risikobasierte Priorisierung

| Risiko | Prüftiefe | Beispiel |
|--------|-----------|----------|
| **Hoch** | Umfangreich, mehrfach | Sterilisator für Implantate |
| **Mittel** | Standard | Verpackungsmaschine |
| **Niedrig** | Reduziert | Büromöbel im Reinraum |

### Critical Process Parameters (CPP) und Critical Quality Attributes (CQA)

| Begriff | Definition | Beispiel |
|---------|------------|----------|
| **CPP** | Prozessparameter mit direktem Einfluss auf Produktqualität | Temperatur beim Sterilisieren |
| **CQA** | Qualitätsmerkmal des Produkts | Sterilität |

**Praxis-Tipp-Box:**
> Konzentrieren Sie den Qualifizierungsaufwand auf die CPPs! Ein Temperaturregler, der die Sterilisation steuert, braucht mehr Aufmerksamkeit als der Lüfter im Schaltschrank.

---

## 9. Requalifizierung

### Wann ist Requalifizierung erforderlich?

**Tabelle: Auslöser für Requalifizierung**

| Auslöser | Umfang |
|----------|--------|
| **Umzug der Anlage** | Komplett (IQ/OQ/PQ) |
| **Hardware-Änderung** | Abhängig vom Umfang |
| **Software-Update** | Mindestens OQ der betroffenen Funktionen |
| **Neues Produkt** | PQ |
| **Abweichungen im Betrieb** | Gezielt für betroffenen Bereich |
| **Periodisch** | Risikobasiert festlegen (z.B. jährlich kritische Parameter) |

### Periodische Requalifizierung

**Info-Box:**
> Periodische Requalifizierung ist nicht immer vorgeschrieben, aber gute Praxis. Typisch: Jährliche Überprüfung kritischer Parameter oder nach einer definierten Anzahl Chargen.

---

## 10. Branchen-Spezifika

### Pharma (GMP)

| Anforderung | Quelle |
|-------------|--------|
| Qualifizierung aller kritischen Anlagen | EU GMP Annex 15 |
| Dokumentierte Änderungskontrolle | EU GMP Annex 15 |
| Periodische Requalifizierung | EU GMP Annex 15 |
| Prozessvalidierung nach PQ | EU GMP Annex 15 |

### Medizintechnik (ISO 13485)

| Anforderung | Quelle |
|-------------|--------|
| Validierung von Produktions- und Dienstleistungsprozessen | ISO 13485:2016, 7.5.6 |
| Spezielle Prozesse validieren | ISO 13485:2016, 7.5.6 |
| Software-Validierung | ISO 13485:2016, 7.5.6, 7.6 |

### Automotive (IATF 16949)

| Anforderung | Quelle |
|-------------|--------|
| Produktionsprozess-Qualifizierung | IATF 16949, 8.3.4.4 |
| Run@Rate | IATF 16949, 8.3.4.4 |
| PPAP (Production Part Approval Process) | AIAG |

---

## 11. Typische Fehler

**Warnung-Box:**
> Diese Fehler führen zu Beanstandungen bei Audits:

### Fehler 1: IQ ohne echte Prüfung

"Wir haben alles abgehakt, aber nicht wirklich geprüft."  
→ IQ ist kein Papiertiger. Prüfen Sie physisch!

### Fehler 2: OQ nur im Normalbereich

"Wir haben nur im Arbeitsbereich getestet, nicht an den Grenzen."  
→ OQ muss Extremwerte testen (Worst Case).

### Fehler 3: PQ mit "perfekten" Bedingungen

"Bei PQ war das erfahrenste Team dabei."  
→ PQ muss reale Produktionsbedingungen abbilden.

### Fehler 4: Keine Rückverfolgbarkeit

"Wir wissen nicht mehr, welche Messgeräte wir verwendet haben."  
→ Alle Prüfmittel dokumentieren, Kalibrierung nachweisen.

### Fehler 5: Änderungen ohne Requalifizierung

"Das war nur eine kleine Änderung."  
→ Jede Änderung bewerten. Im Zweifel: Requalifizieren.

---

## 12. Praxisbeispiel: Qualifizierung eines Reinraums

### Schritt 1: DQ
- Planung entspricht ISO 14644 Klasse 7?
- HVAC-Auslegung für Partikellast ausreichend?
- Materialien reinraumtauglich?

### Schritt 2: IQ

| Prüfpunkt | Ergebnis |
|-----------|----------|
| HEPA-Filter installiert | ✓ Typ H14, Zertifikat vorhanden |
| Luftwechselrate | ✓ 25-fach/Stunde gemessen |
| Druckkaskade | ✓ +15 Pa zum Flur |
| Oberflächen | ✓ Glatt, abwischbar, keine Risse |

### Schritt 3: OQ

| Prüfpunkt | Methode | Ergebnis |
|-----------|---------|----------|
| Partikelzählung (at rest) | ISO 14644-3 | Klasse 7 erreicht |
| Luftgeschwindigkeit | Anemometer | 0,3-0,5 m/s ✓ |
| Filterintegrität | DOP-Test | Alle Filter dicht |
| Temperatur | Mapping 24h | 20-22°C ±1°C ✓ |
| Feuchte | Mapping 24h | 45-55% rF ✓ |

### Schritt 4: PQ

| Prüfpunkt | Methode | Ergebnis |
|-----------|---------|----------|
| Partikelzählung (in operation) | ISO 14644-3 | Klasse 7 erreicht |
| Mikrobiologie | Sedimentationsplatten | <1 KBE/Platte ✓ |
| Recovery-Test | Partikelabklingzeit | <20 min ✓ |

---

## 13. Zusammenfassung

**Definition-Box:**
> **IQ/OQ/PQ auf einen Blick:**
> 
> ✓ **DQ:** Ist das Design geeignet? (Vor Beschaffung)  
> ✓ **IQ:** Ist alles richtig installiert? (Physische Prüfung!)  
> ✓ **OQ:** Funktioniert es an den Grenzen? (Worst Case)  
> ✓ **PQ:** Liefert es reproduzierbar gute Produkte? (Mit Produkt)  
> ✓ **Risikobasiert:** Aufwand nach Kritikalität  
> ✓ **Dokumentation:** Plan → Protokoll → Bericht  
> ✓ **Requalifizierung:** Bei Änderungen und periodisch

---

## CTA-Bereich

**Box mit dunkelblauem Hintergrund:**

> **Qualifizierung steht an und Sie brauchen Unterstützung?**
> 
> Ich helfe Ihnen bei:
> - Qualifizierungsplanung (VMP, Protokolle)
> - IQ/OQ/PQ Durchführung und Dokumentation
> - Risikobasierte Qualifizierungsstrategie
> - Requalifizierung nach Änderungen
> - Auditvorbereitung für GMP/ISO-Inspektionen
> 
> → [Kostenloses Erstgespräch vereinbaren](/kontakt)

---

## Navigation

- ← Vorheriger: [EU-MDR Grundlagen](/qm-wissen/eu-mdr)
- → Nächster: [Computer System Validation](/qm-wissen/csv)

---

# Checkliste für Claude Code

## Dateien erstellen/ändern:

- [ ] `/pages/qm-wissen/iq-oq-pq.js` erstellen
- [ ] `/components/QMWissenSidebar.js` aktualisieren:
  - Falls "Validation" Kategorie nicht existiert: anlegen
  - Neuer Eintrag: `{ name: 'IQ/OQ/PQ erklärt', href: '/qm-wissen/iq-oq-pq' }`
- [ ] `/pages/qm-wissen/eu-mdr.js` → "Nächster Artikel"-Link auf `/qm-wissen/iq-oq-pq` setzen
- [ ] `/pages/qm-wissen/index.js` → Falls Artikel-Grid vorhanden, neue Karte hinzufügen

## Nach Erstellung testen:

- [ ] Seite lädt ohne Fehler
- [ ] Sidebar zeigt neuen Artikel unter "Validation"
- [ ] Navigation (←/→) funktioniert
- [ ] Breadcrumb korrekt: QM-Wissen › Validation › IQ/OQ/PQ erklärt
- [ ] Responsive Layout funktioniert
- [ ] ASCII-Diagramm (V-Modell) korrekt dargestellt

## Git:

```bash
git add .
git commit -m "Add IQ/OQ/PQ article to QM-Wissen"
git push
```
