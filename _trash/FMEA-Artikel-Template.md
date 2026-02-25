# FMEA Artikel für QCore Consulting

## Meta-Informationen für Claude Code

**Dateipfad:** `/pages/qm-wissen/fmea.js`  
**Lesezeit:** 12 Minuten  
**Level:** Fortgeschritten  
**Breadcrumb:** QM-Wissen › Methoden › FMEA Grundlagen

### Navigation-Links
- **Vorheriger:** `/qm-wissen/begriffe` (Begriffe & Definitionen)
- **Nächster:** `/qm-wissen/capa` (CAPA richtig umsetzen) *oder Platzhalter*

### Sidebar-Kategorie
Unter "Methoden" einordnen

---

## Style-Komponenten (konsistent mit ISO 13485 Artikel)

### Definition-Box (dunkelblau)
```jsx
<div className="bg-qcore-navy bg-opacity-60 border-l-4 border-qcore-cyan p-4 my-6 rounded-r">
  <p className="text-qcore-cyan font-semibold text-sm mb-2">Definition</p>
  <p className="text-gray-200 m-0">[Definition-Text]</p>
</div>
```

### Info-Box (blau)
```jsx
<div className="bg-qcore-navy bg-opacity-40 border-l-4 border-blue-400 p-4 my-4 rounded-r">
  <p className="text-gray-300 font-semibold mb-1">ℹ️ Info</p>
  <p className="text-gray-200 m-0">[Info-Text]</p>
</div>
```

### Praxis-Tipp-Box (amber/gelb)
```jsx
<div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-4 my-6">
  <div className="flex items-center gap-2 text-amber-700 font-medium mb-2">
    <span>💡</span>
    <span>Praxis-Tipp</span>
  </div>
  <p className="text-gray-700 m-0">[Tipp-Text]</p>
</div>
```

### Warnung-Box (rot/orange)
```jsx
<div className="bg-qcore-navy bg-opacity-40 border-l-4 border-orange-400 p-4 my-4 rounded-r">
  <p className="text-gray-300 font-semibold mb-1">⚠️ Häufiger Fehler</p>
  <p className="text-gray-200 m-0">[Warnung-Text]</p>
</div>
```

### Tabellen
```jsx
<div className="overflow-x-auto mb-6">
  <table className="w-full border-collapse">
    <thead>
      <tr className="bg-slate-700/80">
        <th className="text-left p-3 text-gray-200 font-medium">Spalte 1</th>
        <th className="text-left p-3 text-gray-200 font-medium">Spalte 2</th>
      </tr>
    </thead>
    <tbody>
      <tr className="bg-slate-600/30 border-b border-slate-600/50">
        <td className="p-3 text-gray-800">Wert 1</td>
        <td className="p-3 text-gray-700">Wert 2</td>
      </tr>
      <tr className="bg-slate-600/20 border-b border-slate-600/50">
        <td className="p-3 text-gray-800">Wert 3</td>
        <td className="p-3 text-gray-700">Wert 4</td>
      </tr>
    </tbody>
  </table>
</div>
```

---

# FMEA: Fehlermöglichkeits- und Einflussanalyse

## 1. Was ist eine FMEA?

**Definition-Box:**
> **FMEA (Failure Mode and Effects Analysis)** ist eine systematische, präventive Analysemethode zur Identifikation potenzieller Fehler, deren Ursachen und Auswirkungen – bevor sie auftreten. Ziel ist die Risikominimierung durch frühzeitige Gegenmaßnahmen.

Die FMEA wurde in den 1960er Jahren von der NASA für das Apollo-Programm entwickelt. Heute ist sie Standard in nahezu allen Industrien – von Automotive über Medizintechnik bis zur Luft- und Raumfahrt.

**Kernidee:** Fehler zu finden ist teuer. Fehler zu verhindern ist günstiger. Je früher ein Fehler erkannt wird, desto geringer die Kosten.

**Tabelle: Fehlerkosten nach Entdeckungszeitpunkt**

| Entdeckungszeitpunkt | Relative Kosten | Beispiel |
|---------------------|-----------------|----------|
| Konzeptphase | 1x | Fehler im CAD erkannt |
| Entwicklung | 10x | Prototyp versagt im Test |
| Produktion | 100x | Ausschuss, Nacharbeit |
| Beim Kunden | 1.000x | Rückruf, Imageschaden |
| Feldversagen (kritisch) | 10.000x+ | Produkthaftung, Verletzungen |

---

## 2. FMEA-Arten: Design vs. Prozess

Es gibt zwei Haupttypen der FMEA, die sich in ihrem Fokus unterscheiden:

**Tabelle: Design-FMEA vs. Prozess-FMEA**

| Aspekt | Design-FMEA (DFMEA) | Prozess-FMEA (PFMEA) |
|--------|---------------------|----------------------|
| **Fokus** | Produktdesign | Fertigungsprozess |
| **Fragestellung** | "Was kann am Produkt versagen?" | "Was kann bei der Herstellung schiefgehen?" |
| **Zeitpunkt** | Entwicklungsphase | Prozessplanung |
| **Verantwortung** | Entwicklung/Konstruktion | Produktion/Qualität |
| **Beispiel** | Schweißnaht reißt unter Last | Schweißtemperatur zu niedrig eingestellt |

**Info-Box:**
> In der Medizintechnik (ISO 13485) wird zusätzlich oft eine **Use-FMEA** (Anwendungs-FMEA) durchgeführt, die analysiert, wie Anwender das Produkt falsch benutzen könnten.

---

## 3. Die 7 Schritte der FMEA

### Schritt 1: FMEA-Team zusammenstellen

Eine FMEA ist Teamarbeit. Typische Teilnehmer:

- Konstruktion/Entwicklung
- Produktion/Fertigung
- Qualitätsmanagement
- Einkauf (bei kritischen Zukaufteilen)
- Service/Kundendienst (bei Felderfahrung)

**Praxis-Tipp-Box:**
> Laden Sie immer einen "Querdenker" ein – jemanden, der nicht täglich am Produkt arbeitet. Frische Perspektiven finden Fehler, die Insider übersehen.

---

### Schritt 2: Systemgrenzen und Umfang definieren

Bevor Sie loslegen: Was genau wird analysiert?

- Welche Baugruppe/welcher Prozess?
- Welche Schnittstellen?
- Welche Betriebszustände (normal, Grenzbereich, Fehlbedienung)?
- Welche Normanforderungen gelten?

**Info-Box:**
> Eine zu breite FMEA wird oberflächlich. Eine zu enge übersieht Systemfehler. Die richtige Granularität ist entscheidend.

---

### Schritt 3: Funktionen und Anforderungen analysieren

Für jedes Element definieren:

- **Funktion:** Was soll es tun?
- **Anforderung:** Welche Spezifikation muss erfüllt sein?

**Beispiel:**

| Element | Funktion | Anforderung |
|---------|----------|-------------|
| Dichtung | Flüssigkeit abdichten | Leckrate < 0,1 ml/min bei 3 bar |
| Sensor | Temperatur messen | Genauigkeit ±0,5°C im Bereich 0-100°C |
| Gehäuse | Elektronik schützen | IP67, Falltest 1m auf Beton |

---

### Schritt 4: Fehlerarten identifizieren (Failure Modes)

Für jede Funktion: Was kann schiefgehen?

**Systematische Fragestellungen:**

- Funktion wird nicht erfüllt
- Funktion wird nur teilweise erfüllt
- Funktion wird übermäßig erfüllt
- Funktion wird intermittierend erfüllt
- Funktion wird zum falschen Zeitpunkt erfüllt

**Beispiel Dichtung:**

| Fehlerart | Beschreibung |
|-----------|--------------|
| Totale Undichtigkeit | Dichtung versagt komplett |
| Schleichende Leckage | Langsamer Flüssigkeitsverlust |
| Vorzeitiger Verschleiß | Dichtung altert zu schnell |
| Montagebedingte Undichtigkeit | Falsch eingebaut |

---

### Schritt 5: Risikobewertung (S × O × D)

Das Herzstück der FMEA: Jede Fehlerart wird nach drei Kriterien bewertet:

**Tabelle: Die drei Bewertungskriterien**

| Kriterium | Abkürzung | Frage | Skala |
|-----------|-----------|-------|-------|
| **Severity (Bedeutung)** | S | Wie schwerwiegend ist die Auswirkung? | 1-10 |
| **Occurrence (Auftreten)** | O | Wie wahrscheinlich tritt der Fehler auf? | 1-10 |
| **Detection (Entdeckung)** | D | Wie wahrscheinlich wird der Fehler entdeckt? | 1-10 |

**Risikoprioritätszahl (RPZ) = S × O × D**

Wertebereich: 1 (minimales Risiko) bis 1.000 (maximales Risiko)

**Tabelle: Beispiel-Bewertungsskala für Severity (S)**

| S | Bedeutung | Beschreibung |
|---|-----------|--------------|
| 1 | Keine | Fehler hat keine Auswirkung |
| 2-3 | Gering | Kunde bemerkt Fehler kaum |
| 4-6 | Mäßig | Kunde unzufrieden, Funktion eingeschränkt |
| 7-8 | Hoch | Funktion versagt, Reklamation wahrscheinlich |
| 9 | Sehr hoch | Sicherheitsrelevant, Gesetzesverstoß möglich |
| 10 | Gefährlich | Personenschaden möglich ohne Vorwarnung |

**Warnung-Box:**
> **RPZ-Werte allein sagen wenig aus!** Ein Fehler mit S=10, O=1, D=8 (RPZ=80) ist kritischer als einer mit S=4, O=5, D=5 (RPZ=100). Die Severity muss immer priorisiert betrachtet werden.

---

### Schritt 6: Maßnahmen definieren

Für jeden Fehler mit hohem Risiko: Was tun wir dagegen?

**Maßnahmenarten:**

| Typ | Ziel | Beispiel |
|-----|------|----------|
| **Vermeidungsmaßnahme** | O reduzieren | Materialänderung, Toleranzanpassung |
| **Entdeckungsmaßnahme** | D reduzieren | Zusätzliche Prüfung, Sensor |
| **Design-Änderung** | S reduzieren | Fail-Safe-Konstruktion |

**Praxis-Tipp-Box:**
> Priorisieren Sie Maßnahmen, die die **Severity** oder **Occurrence** reduzieren. Eine bessere Entdeckung (D) verhindert nicht den Fehler – sie findet ihn nur früher.

---

### Schritt 7: Wirksamkeit prüfen und Neubewertung

Nach Umsetzung der Maßnahmen:

1. RPZ neu berechnen
2. Dokumentieren, wer was wann umgesetzt hat
3. Restrisiko akzeptabel?

**Tabelle: Beispiel Vorher/Nachher**

| Fehlerart | S | O | D | RPZ (alt) | Maßnahme | S | O | D | RPZ (neu) |
|-----------|---|---|---|-----------|----------|---|---|---|-----------|
| Dichtung undicht | 7 | 5 | 6 | 210 | Materialwechsel + 100%-Prüfung | 7 | 2 | 3 | 42 |
| Sensor ungenau | 6 | 4 | 7 | 168 | Kalibrierprüfung | 6 | 4 | 2 | 48 |

---

## 4. FMEA in der Medizintechnik

**Info-Box:**
> In der Medizintechnik ist FMEA Teil des Risikomanagements nach **ISO 14971**. Sie ist oft verpflichtend für die Zulassung (CE-Kennzeichnung, FDA).

**Besonderheiten in MedTech:**

- Strenge Dokumentationsanforderungen
- Verknüpfung mit Risikomanagementakte
- Rückverfolgbarkeit zu Design Inputs
- Berücksichtigung von Anwendungsfehlern (Use-FMEA)
- Regelmäßige Aktualisierung im Produktlebenszyklus

**Tabelle: FMEA-Anforderungen nach Normen**

| Norm | FMEA-Anforderung | Besonderheit |
|------|------------------|--------------|
| ISO 9001 | Risikobasiertes Denken (Kap. 6.1) | FMEA empfohlen, nicht explizit gefordert |
| ISO 13485 | Risikomanagement (Kap. 7.1) | FMEA als typische Methode |
| ISO 14971 | Risikobewertung (Kap. 5) | FMEA explizit als Beispielmethode genannt |
| IATF 16949 | PFMEA/DFMEA (Kap. 8.3.5) | Verpflichtend, detaillierte Vorgaben |

---

## 5. Typische Fehler bei der FMEA

**Warnung-Box:**
> Diese Fehler sehen wir immer wieder – vermeiden Sie sie!

### Fehler 1: Einmal erstellt, nie aktualisiert

Die FMEA ist ein lebendes Dokument. Sie muss aktualisiert werden bei:
- Designänderungen
- Prozessänderungen
- Feldfehlern
- Neuen Erkenntnissen

### Fehler 2: Zu breite oder zu enge Systemgrenzen

- Zu breit → oberflächliche Analyse
- Zu eng → Schnittstellen-Fehler übersehen

### Fehler 3: RPZ als einziges Entscheidungskriterium

Ein niedriger RPZ-Wert bedeutet nicht automatisch "sicher". Severity muss immer gesondert betrachtet werden.

### Fehler 4: FMEA als Einzelaktion statt Teamprozess

FMEA lebt vom interdisziplinären Austausch. Eine FMEA am Schreibtisch allein erstellt verfehlt den Zweck.

### Fehler 5: Maßnahmen ohne Verantwortlichen und Termin

"Irgendwann prüfen wir das" ist keine Maßnahme. Jede Maßnahme braucht:
- Verantwortliche Person
- Termin
- Nachweis der Umsetzung

---

## 6. FMEA-Tools und Software

**Tabelle: Gängige FMEA-Software**

| Tool | Eignung | Kosten |
|------|---------|--------|
| Excel | Einstieg, kleine Projekte | Gering |
| APIS IQ-RM | Automotive-Standard | Hoch |
| Plato SCIO | Medizintechnik | Mittel-Hoch |
| Siemens Teamcenter | Großunternehmen | Sehr hoch |
| Open-Source (z.B. OpenFMEA) | Einfache Anwendungen | Kostenlos |

**Praxis-Tipp-Box:**
> Für KMU und Einstieg: Starten Sie mit Excel. Eine gut strukturierte Tabelle reicht für die meisten Anwendungen. Die Software kann später kommen.

---

## 7. Zusammenfassung

**Definition-Box:**
> **FMEA auf einen Blick:**
> 
> ✓ Präventive Fehlererkennung vor Produktion/Einsatz  
> ✓ Teambasierte, systematische Analyse  
> ✓ Risikobewertung mit S × O × D = RPZ  
> ✓ Maßnahmen priorisiert nach Severity  
> ✓ Lebendes Dokument – regelmäßig aktualisieren  
> ✓ In MedTech: Verknüpfung mit ISO 14971

---

## CTA-Bereich

**Box mit dunkelblauem Hintergrund:**

> **Sie brauchen Unterstützung bei Ihrer FMEA?**
> 
> Ich helfe Ihnen bei:
> - FMEA-Workshops moderieren
> - Bestehende FMEAs reviewen
> - FMEA in Ihr Risikomanagement integrieren
> 
> → [Kostenloses Erstgespräch vereinbaren](/kontakt)

---

## Verwandte Artikel

- ← Vorheriger: [Begriffe & Definitionen](/qm-wissen/begriffe)
- → Nächster: [CAPA richtig umsetzen](/qm-wissen/capa) *(falls vorhanden, sonst Platzhalter)*
- Siehe auch: [ISO 14971 Risikomanagement](/qm-wissen/iso-14971) *(geplant)*

---

# Hinweise für Claude Code Implementierung

## Dateistruktur
```
pages/qm-wissen/fmea.js
```

## Imports (wie bei anderen Artikeln)
```jsx
import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import QMWissenSidebar from '../../components/QMWissenSidebar';
```

## SEO Meta-Tags
```jsx
<Head>
  <title>FMEA Grundlagen: Fehlermöglichkeits- und Einflussanalyse | QCore Consulting</title>
  <meta name="description" content="FMEA einfach erklärt: Schritt-für-Schritt Anleitung zur Fehlermöglichkeits- und Einflussanalyse. Design-FMEA vs. Prozess-FMEA, RPZ-Berechnung und praktische Beispiele." />
</Head>
```

## Sidebar-Eintrag aktualisieren
In `QMWissenSidebar.js` unter "Methoden" hinzufügen:
```jsx
{ name: 'FMEA Grundlagen', href: '/qm-wissen/fmea' }
```

## Wichtig: Style-Konsistenz
- Alle Boxen verwenden `bg-qcore-navy bg-opacity-40` Hintergrund
- Linke Border als Farbakzent (türkis, blau, amber, orange)
- Keine grellen Hintergrundfarben
- Tabellen: `bg-slate-700/80` Header, alternierend `bg-slate-600/30` und `bg-slate-600/20`
