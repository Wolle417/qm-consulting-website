# Computer System Validation (CSV) – Artikel für QCore Consulting

## Anweisungen für Claude Code

### WICHTIG: Integration in QM-Wissen

Nach Erstellung der Seite bitte folgende Schritte ausführen:

#### 1. Sidebar aktualisieren
**Datei:** `/components/QMWissenSidebar.js` (oder ähnlich)

Unter der Kategorie **"Validation"** neuen Eintrag hinzufügen:
```jsx
{ name: 'Computer System Validation', href: '/qm-wissen/csv' }
```

Die Reihenfolge unter "Validation" sollte sein:
1. IQ/OQ/PQ erklärt
2. Process Validation
3. Computer System Validation ← NEU

#### 2. Navigation in anderen Artikeln aktualisieren

**In `/pages/qm-wissen/process-validation.js`:**
- "Nächster Artikel" → Link auf `/qm-wissen/csv` setzen

#### 3. Hub-Seite prüfen
**Datei:** `/pages/qm-wissen/index.js`

Falls dort Artikel-Karten angezeigt werden, neue Karte hinzufügen:
```jsx
{
  title: 'Computer System Validation',
  description: 'CSV nach GAMP 5 und 21 CFR Part 11',
  href: '/qm-wissen/csv',
  category: 'Validation'
}
```

---

## Meta-Informationen

**Dateipfad:** `/pages/qm-wissen/csv.js`  
**Lesezeit:** 14 Minuten  
**Level:** Fortgeschritten  
**Breadcrumb:** QM-Wissen › Validation › Computer System Validation

### Navigation-Links
- **Vorheriger:** `/qm-wissen/process-validation` (Process Validation)
- **Nächster:** `/qm-wissen/iso-13485` (ISO 13485) *oder Platzhalter*

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
  <title>Computer System Validation (CSV): GAMP 5 und 21 CFR Part 11 | QCore Consulting</title>
  <meta name="description" content="Computer System Validation einfach erklärt: GAMP 5 Kategorien, 21 CFR Part 11, EU GMP Annex 11. Praktische Anleitung zur Validierung von Software und IT-Systemen in Pharma und MedTech." />
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

# Computer System Validation: Software validieren nach GAMP 5

## 1. Was ist Computer System Validation?

**Definition-Box:**
> **Computer System Validation (CSV)** ist der dokumentierte Nachweis, dass ein computergestütztes System konsistent und reproduzierbar gemäß seiner Spezifikation und den regulatorischen Anforderungen arbeitet. CSV stellt sicher, dass Software in regulierten Umgebungen zuverlässig und nachvollziehbar funktioniert.

### Warum CSV?

| Aspekt | Erklärung |
|--------|-----------|
| **Datenintegrität** | Elektronische Daten müssen verlässlich und unverfälscht sein |
| **Rückverfolgbarkeit** | Wer hat wann was geändert? |
| **Regulatorisch** | FDA, EU GMP, ISO 13485 fordern validierte Systeme |
| **Patientensicherheit** | Fehlerhafte Software kann Patienten gefährden |
| **Audit Trail** | Jede Änderung muss nachvollziehbar sein |

### Was ist ein "Computergestütztes System"?

**Definition-Box:**
> Ein **computergestütztes System** besteht aus Hardware, Software, Netzwerkkomponenten, Peripheriegeräten, Dokumentation, Personal und den zugehörigen Prozessen, die zusammen eine bestimmte Funktion erfüllen.

**Beispiele:**

| Kategorie | Beispiele |
|-----------|-----------|
| **Labor** | LIMS, HPLC-Software, Waagen-Software |
| **Produktion** | SCADA, MES, SPS-Steuerungen |
| **Qualität** | QMS-Software, CAPA-Systeme, Dokumentenmanagement |
| **Logistik** | ERP (SAP, etc.), Warehouse Management |
| **Klinisch** | EDC-Systeme, eCTD, eTMF |

---

## 2. Regulatorische Grundlagen

### 21 CFR Part 11 (FDA)

**Definition-Box:**
> **21 CFR Part 11** ist die FDA-Verordnung, die Anforderungen an elektronische Aufzeichnungen und elektronische Unterschriften definiert. Sie legt fest, wann elektronische Dokumente als gleichwertig zu Papierdokumenten gelten.

**Kernanforderungen:**

| Anforderung | Beschreibung |
|-------------|--------------|
| **Audit Trail** | Automatische Aufzeichnung aller Änderungen |
| **Elektronische Signaturen** | Eindeutig, nicht übertragbar, mit Zeitstempel |
| **Zugriffskontrolle** | Benutzer-IDs, Passwörter, Berechtigungen |
| **System Security** | Schutz vor unbefugtem Zugriff |
| **Datenintegrität** | ALCOA+ Prinzipien |

### ALCOA+ Prinzipien

**Tabelle: ALCOA+ für Datenintegrität**

| Buchstabe | Bedeutung | Erklärung |
|-----------|-----------|-----------|
| **A** | Attributable | Wer hat die Daten erzeugt? |
| **L** | Legible | Lesbar und dauerhaft |
| **C** | Contemporaneous | Zeitnah erfasst |
| **O** | Original | Originalaufzeichnung oder zertifizierte Kopie |
| **A** | Accurate | Fehlerfrei und korrekt |
| **+** | Complete | Vollständig |
| **+** | Consistent | Widerspruchsfrei |
| **+** | Enduring | Dauerhaft verfügbar |
| **+** | Available | Bei Bedarf zugänglich |

### EU GMP Annex 11

**Kernanforderungen:**

| Kapitel | Anforderung |
|---------|-------------|
| **Risikomanagement** | Risikobasierter Ansatz für Validierungsumfang |
| **Personal** | Schulung und Qualifikation |
| **Lieferanten** | Lieferantenbewertung für Software |
| **Validierung** | Dokumentierter Nachweis der Eignung |
| **Daten** | Integrität, Backup, Archivierung |
| **Security** | Zugriffskontrolle, Audit Trail |
| **Änderungen** | Change Control für alle Änderungen |
| **Periodische Bewertung** | Regelmäßige Überprüfung |

### ISO 13485:2016

| Kapitel | Anforderung |
|---------|-------------|
| **4.1.6** | Validierung von Software für QMS |
| **7.5.6** | Validierung von Produktionssoftware |
| **7.6** | Validierung von Software für Überwachung/Messung |

---

## 3. GAMP 5: Der Industriestandard

**Definition-Box:**
> **GAMP 5 (Good Automated Manufacturing Practice)** ist ein Leitfaden der ISPE, der einen risikobasierten Ansatz für die Validierung computergestützter Systeme in regulierten Industrien beschreibt.

### GAMP 5 Softwarekategorien

**Tabelle: Die 5 GAMP-Kategorien**

| Kategorie | Beschreibung | Beispiele | Validierungsaufwand |
|-----------|--------------|-----------|---------------------|
| **1** | Infrastruktur-Software | Betriebssysteme, Datenbanken, Netzwerk | Gering (Konfiguration dokumentieren) |
| **3** | Nicht-konfigurierbare Software | Firmware, einfache Tools | Mittel (Funktionstest) |
| **4** | Konfigurierbare Software | ERP, LIMS, MES (Standard) | Mittel-Hoch (Konfiguration validieren) |
| **5** | Maßgeschneiderte Software | Eigenentwicklung, Custom Code | Hoch (Vollständiger SDLC) |

**Info-Box:**
> Kategorie 2 (Firmware) wurde in GAMP 5 Second Edition in Kategorie 3 integriert. Die meisten aktuellen Referenzen sprechen von Kategorien 1, 3, 4 und 5.

### Validierungsaufwand nach Kategorie

```
Validierungsaufwand
        ▲
        │
Hoch    │                                    ┌─────┐
        │                                    │ Kat │
        │                            ┌─────┐ │  5  │
        │                            │ Kat │ │     │
Mittel  │                    ┌─────┐ │  4  │ │     │
        │            ┌─────┐ │ Kat │ │     │ │     │
        │            │ Kat │ │  4  │ │     │ │     │
Gering  │    ┌─────┐ │  3  │ │(low)│ │(high)│     │
        │    │ Kat │ │     │ │     │ │     │ │     │
        │    │  1  │ │     │ │     │ │     │ │     │
        └────┴─────┴─┴─────┴─┴─────┴─┴─────┴─┴─────┴──►
             Infra-  Nicht-  Konfig. Konfig. Custom
             struktur konf.  (simple) (complex)
```

---

## 4. Der CSV-Lifecycle

### V-Modell für CSV

```
Anforderungen                              Qualifizierung/Test
     │                                            │
     ▼                                            ▼
┌─────────────┐                          ┌─────────────┐
│    URS      │◄────────────────────────►│    PQ       │
│(User Req.)  │                          │(Performance)│
└─────────────┘                          └─────────────┘
     │                                            ▲
     ▼                                            │
┌─────────────┐                          ┌─────────────┐
│    FS       │◄────────────────────────►│    OQ       │
│(Functional) │                          │(Operational)│
└─────────────┘                          └─────────────┘
     │                                            ▲
     ▼                                            │
┌─────────────┐                          ┌─────────────┐
│    DS/CS    │◄────────────────────────►│    IQ       │
│(Design/Conf)│                          │(Installation)│
└─────────────┘                          └─────────────┘
                      │
                      ▼
               ┌─────────────┐
               │   Coding/   │
               │   Config    │
               └─────────────┘
```

### CSV-Phasen

| Phase | Aktivitäten |
|-------|-------------|
| **Planung** | Validierungsplan, Risikobewertung, Kategorisierung |
| **Spezifikation** | URS, FS, DS/CS |
| **Konfiguration/Entwicklung** | System einrichten, Code entwickeln |
| **Test** | IQ, OQ, PQ, UAT |
| **Freigabe** | Validierungsbericht, Go-Live-Freigabe |
| **Betrieb** | Change Control, periodische Reviews |
| **Außerbetriebnahme** | Datenmigration, Archivierung |

---

## 5. Validierungsdokumentation

### Validierungsplan (VP)

**Checklisten-Box:**
> ✅ **Inhalte Validierungsplan**
> 
> - [ ] Systembeschreibung
> - [ ] Geltungsbereich
> - [ ] GAMP-Kategorie
> - [ ] Risikobewertung
> - [ ] Validierungsstrategie
> - [ ] Rollen und Verantwortlichkeiten
> - [ ] Zu erstellende Dokumente
> - [ ] Testansatz
> - [ ] Akzeptanzkriterien
> - [ ] Zeitplan
> - [ ] Genehmigungen

### User Requirements Specification (URS)

**Definition-Box:**
> Die **User Requirements Specification (URS)** beschreibt, was das System aus Anwendersicht leisten muss. Sie ist die Basis für alle weiteren Spezifikationen und Tests.

**Tabelle: URS-Struktur**

| Abschnitt | Inhalt |
|-----------|--------|
| **Zweck** | Wofür wird das System verwendet? |
| **Funktionale Anforderungen** | Was muss das System tun? |
| **Datenanforderungen** | Welche Daten werden verarbeitet? |
| **Schnittstellen** | Mit welchen Systemen wird kommuniziert? |
| **Regulatorische Anforderungen** | 21 CFR Part 11, Annex 11, etc. |
| **Leistungsanforderungen** | Geschwindigkeit, Verfügbarkeit |
| **Sicherheitsanforderungen** | Zugriff, Audit Trail, Backup |

**Praxis-Tipp-Box:**
> Schreiben Sie URS so, dass sie testbar ist! "Das System soll benutzerfreundlich sein" ist nicht testbar. "Der Benutzer kann einen Datensatz in maximal 3 Klicks anlegen" ist testbar.

### Functional Specification (FS)

**Definition-Box:**
> Die **Functional Specification (FS)** beschreibt, wie das System die Anforderungen der URS erfüllt. Sie ist die Brücke zwischen "Was" (URS) und "Wie" (Design).

### Configuration Specification (CS) / Design Specification (DS)

| Dokumenttyp | Anwendung |
|-------------|-----------|
| **CS** | Konfigurierbare Software (Kat. 4): Wie ist das System konfiguriert? |
| **DS** | Custom Software (Kat. 5): Wie ist das System aufgebaut? |

---

## 6. Testen

### Testebenen

| Testebene | Prüft gegen | Durchgeführt von |
|-----------|-------------|------------------|
| **Unit Test** | Code-Spezifikation | Entwickler |
| **Integration Test** | Schnittstellen | Entwickler/QA |
| **IQ** | DS/CS | Validierer |
| **OQ** | FS | Validierer |
| **PQ/UAT** | URS | Anwender |

### IQ – Installation Qualification

**Was wird geprüft?**

| Prüfpunkt | Beispiel |
|-----------|----------|
| **Hardware** | Server installiert, Speicher korrekt |
| **Software-Version** | Richtige Version installiert |
| **Konfiguration** | Einstellungen wie spezifiziert |
| **Schnittstellen** | Netzwerk, Drucker, andere Systeme |
| **Dokumentation** | Handbücher vorhanden |
| **Backup** | Backup-System funktioniert |

### OQ – Operational Qualification

**Was wird geprüft?**

| Prüfpunkt | Beispiel |
|-----------|----------|
| **Funktionen** | Alle Funktionen einzeln testen |
| **Berechnungen** | Formeln korrekt implementiert |
| **Grenzwerte** | Verhalten bei Min/Max-Eingaben |
| **Fehlerbehandlung** | Fehlermeldungen bei ungültigen Eingaben |
| **Zugriffskontrolle** | Berechtigungen funktionieren |
| **Audit Trail** | Änderungen werden protokolliert |
| **Elektronische Signaturen** | Signaturfunktion korrekt |

**Warnung-Box:**
> Testen Sie auch negative Szenarien! Was passiert bei falschen Eingaben? Bei Netzwerkausfall? Bei zu vielen gleichzeitigen Benutzern? Diese Tests sind oft wichtiger als die "Happy Path" Tests.

### PQ / UAT – Performance Qualification / User Acceptance Test

**Was wird geprüft?**

| Prüfpunkt | Beispiel |
|-----------|----------|
| **Geschäftsprozesse** | End-to-End Workflows |
| **Reale Daten** | Test mit Produktionsdaten (anonymisiert) |
| **Performance** | Antwortzeiten unter Last |
| **Anwenderakzeptanz** | Anwender bestätigen Eignung |

**Praxis-Tipp-Box:**
> Lassen Sie UAT von echten Anwendern durchführen – nicht von der IT oder dem Validierungsteam. Nur die Anwender wissen, ob das System in der Praxis funktioniert.

---

## 7. Audit Trail und elektronische Unterschriften

### Audit Trail Anforderungen

**Tabelle: Was muss im Audit Trail stehen?**

| Element | Beschreibung |
|---------|--------------|
| **Wer** | Benutzer-ID (eindeutig) |
| **Was** | Welche Daten wurden geändert |
| **Wann** | Zeitstempel (mit Zeitzone) |
| **Warum** | Grund für Änderung (wenn erforderlich) |
| **Alter Wert** | Vorheriger Zustand |
| **Neuer Wert** | Aktueller Zustand |

**Warnung-Box:**
> Der Audit Trail muss unveränderlich sein! Wenn Benutzer den Audit Trail deaktivieren oder Einträge löschen können, ist das System nicht Part 11 compliant.

### Elektronische Unterschriften

| Anforderung | Beschreibung |
|-------------|--------------|
| **Eindeutig** | Nur einer Person zugeordnet |
| **Nicht übertragbar** | Kann nicht von anderen genutzt werden |
| **Zweifaktor** | Mindestens zwei Komponenten (z.B. ID + Passwort) |
| **Mit Bedeutung** | Signatur zeigt Bedeutung (z.B. "Genehmigt", "Geprüft") |
| **Zeitstempel** | Datum und Uhrzeit der Signatur |
| **Nicht abstreitbar** | Signierer kann nicht bestreiten, signiert zu haben |

---

## 8. Risikobasierter Ansatz

### GAMP 5 Risikobewertung

**Tabelle: Einfache Risikobewertung**

| Faktor | Niedrig (1) | Mittel (2) | Hoch (3) |
|--------|-------------|------------|----------|
| **GxP-Relevanz** | Keine Auswirkung | Indirekt | Direkt |
| **Patientensicherheit** | Keine | Möglich | Wahrscheinlich |
| **Datenintegrität** | Keine kritischen Daten | Wichtige Daten | GxP-Daten |
| **Komplexität** | Einfach | Mittel | Komplex |

**Risiko = GxP × Sicherheit × Daten × Komplexität**

### Risikobasierte Testabdeckung

| Risiko | Testabdeckung |
|--------|---------------|
| **Hoch** | 100% der Anforderungen testen |
| **Mittel** | Kritische Funktionen vollständig, Rest Stichprobe |
| **Niedrig** | Stichprobenprüfung, Fokus auf Kernfunktionen |

---

## 9. Change Control und Maintenance

### Change Control Prozess

```
┌─────────────────┐
│ Change Request  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   Bewertung     │
│ (Impact, Risiko)│
└────────┬────────┘
         │
         ▼
┌─────────────────┐     Nein
│  Genehmigung?   │─────────► Ablehnung
└────────┬────────┘
         │ Ja
         ▼
┌─────────────────┐
│  Implementierung│
│   (Test, Doku)  │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│    Freigabe     │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│ Validierungs-   │
│ dokumente       │
│ aktualisieren   │
└─────────────────┘
```

### Periodische Reviews

| Aktivität | Häufigkeit | Inhalt |
|-----------|------------|--------|
| **System Review** | Jährlich | Funktioniert das System noch wie validiert? |
| **Audit Trail Review** | Regelmäßig (z.B. monatlich) | Ungewöhnliche Aktivitäten? |
| **Zugriffsprüfung** | Halbjährlich | Sind Berechtigungen noch aktuell? |
| **Backup-Test** | Jährlich | Kann Backup wiederhergestellt werden? |

---

## 10. Typische Systeme und ihre Validierung

### ERP-System (z.B. SAP)

| Aspekt | Beschreibung |
|--------|--------------|
| **Kategorie** | GAMP 4 (konfigurierbar) |
| **Fokus** | Konfiguration, Schnittstellen, Berichte |
| **Kritisch** | Chargenverfolgung, Freigabeprozesse |
| **Aufwand** | Hoch (viele Module, viele Schnittstellen) |

### LIMS (Laboratory Information Management System)

| Aspekt | Beschreibung |
|--------|--------------|
| **Kategorie** | GAMP 4 |
| **Fokus** | Probenverwaltung, Ergebniseingabe, Berechnungen |
| **Kritisch** | OOS-Handling, Audit Trail, Signaturen |
| **Aufwand** | Mittel-Hoch |

### Excel-Spreadsheets

| Aspekt | Beschreibung |
|--------|--------------|
| **Kategorie** | GAMP 4/5 (je nach Komplexität) |
| **Fokus** | Formeln, Eingabevalidierung, Zellschutz |
| **Kritisch** | Formeln korrekt? Daten geschützt? |
| **Aufwand** | Gering-Mittel |

**Warnung-Box:**
> Excel wird oft unterschätzt! Komplexe Spreadsheets mit Makros und Berechnungen sind vollwertige Software und müssen entsprechend validiert werden. "Es ist ja nur Excel" gilt nicht.

### SPS/SCADA

| Aspekt | Beschreibung |
|--------|--------------|
| **Kategorie** | GAMP 3/4 (je nach Konfiguration) |
| **Fokus** | Regelung, Alarme, Datenerfassung |
| **Kritisch** | Prozessparameter, Grenzwerte, Alarme |
| **Aufwand** | Mittel |

---

## 11. Cloud und SaaS Validierung

### Besonderheiten bei Cloud-Systemen

| Aspekt | Herausforderung | Lösung |
|--------|-----------------|--------|
| **Kontrolle** | System nicht im eigenen Rechenzentrum | Lieferantenbewertung, SLA |
| **Änderungen** | Anbieter aktualisiert ohne Abstimmung | Change Notification, Regressionstest |
| **Datenhoheit** | Wo liegen die Daten? | Vertragliche Regelung, EU-Server |
| **Audit** | Zugang zum Rechenzentrum schwierig | SOC 2 Report, Zertifikate |

### Shared Responsibility

**Tabelle: Verantwortlichkeiten Cloud**

| Aspekt | SaaS-Anbieter | Kunde |
|--------|---------------|-------|
| Infrastruktur | ✓ | |
| Plattform | ✓ | |
| Applikation | ✓ | |
| Konfiguration | | ✓ |
| Daten | | ✓ |
| Benutzerverwaltung | | ✓ |
| Validierung | Teilweise | ✓ |

**Praxis-Tipp-Box:**
> Fordern Sie vom Cloud-Anbieter ein "Validation Package" an. Seriöse Anbieter liefern IQ/OQ-Dokumentation, SOC 2 Reports und Change-Notifications.

---

## 12. Typische Fehler

**Warnung-Box:**
> Diese Fehler führen zu FDA Warning Letters und Audit-Findings:

### Fehler 1: Kein Audit Trail

"Wir können nicht nachvollziehen, wer Daten geändert hat."  
→ Audit Trail ist Pflicht für alle GxP-relevanten Systeme.

### Fehler 2: Shared Logins

"Wir verwenden alle den gleichen Account."  
→ Jeder Benutzer braucht eine individuelle, eindeutige ID.

### Fehler 3: Keine Change Control

"Das Update haben wir einfach eingespielt."  
→ Jede Änderung muss bewertet und dokumentiert werden.

### Fehler 4: Excel nicht validiert

"Es ist ja nur eine Tabelle."  
→ Spreadsheets mit GxP-relevanten Berechnungen müssen validiert sein.

### Fehler 5: Backup nie getestet

"Wir machen jeden Tag Backup."  
→ Ein Backup, das sich nicht wiederherstellen lässt, ist wertlos. Testen!

### Fehler 6: Veraltete Dokumentation

"Die Validierungsdokumentation ist von 2015, seitdem wurde viel geändert."  
→ Validierungsdokumentation muss aktuell sein.

---

## 13. Praxisbeispiel: LIMS-Validierung

### Ausgangssituation
Ein MedTech-Unternehmen führt ein neues LIMS für das Qualitätslabor ein.

### Schritt 1: Planung
- GAMP-Kategorie: 4 (konfigurierbare Standardsoftware)
- Risikobewertung: Hoch (GxP-Daten, Freigabeentscheidungen)
- Validierungsstrategie: Vollständige Validierung mit IQ/OQ/PQ

### Schritt 2: Spezifikation
- URS: 45 Anforderungen (funktional, regulatorisch, technisch)
- FS: Vom Lieferanten bereitgestellt, gegen URS geprüft
- CS: Konfiguration dokumentiert (Workflows, Berichte, Berechtigungen)

### Schritt 3: Konfiguration
- System aufgesetzt
- Benutzer angelegt
- Workflows konfiguriert
- Schnittstellen eingerichtet (Geräte, ERP)

### Schritt 4: Test

**IQ-Ergebnis:**

| Prüfpunkt | Status |
|-----------|--------|
| Server installiert | ✓ |
| Software Version 5.2.1 | ✓ |
| Datenbank konfiguriert | ✓ |
| Backup eingerichtet | ✓ |
| Schnittstelle zu ERP | ✓ |

**OQ-Ergebnis:**

| Funktion | Testfälle | Bestanden |
|----------|-----------|-----------|
| Probenregistrierung | 12 | 12/12 ✓ |
| Ergebniseingabe | 8 | 8/8 ✓ |
| OOS-Workflow | 6 | 6/6 ✓ |
| Freigabe mit Signatur | 5 | 5/5 ✓ |
| Audit Trail | 10 | 10/10 ✓ |
| Berichte | 7 | 7/7 ✓ |

### Schritt 5: Freigabe
- Validierungsbericht erstellt
- Alle Abweichungen behandelt
- Go-Live-Freigabe durch QA

---

## 14. Zusammenfassung

**Definition-Box:**
> **Computer System Validation auf einen Blick:**
> 
> ✓ **Regulatorisch:** 21 CFR Part 11, EU GMP Annex 11, ISO 13485  
> ✓ **GAMP 5:** Kategorien 1, 3, 4, 5 mit unterschiedlichem Aufwand  
> ✓ **Datenintegrität:** ALCOA+ Prinzipien  
> ✓ **Audit Trail:** Wer, Was, Wann, Warum – unveränderlich  
> ✓ **Risikobasiert:** Aufwand nach GxP-Relevanz  
> ✓ **Dokumentation:** URS → FS → CS/DS → IQ → OQ → PQ  
> ✓ **Change Control:** Jede Änderung bewerten und dokumentieren  
> ✓ **Periodische Reviews:** System bleibt validiert

---

## CTA-Bereich

**Box mit dunkelblauem Hintergrund:**

> **CSV-Projekt geplant oder Audit steht bevor?**
> 
> Ich unterstütze Sie bei:
> - Validierungsplanung und GAMP-Kategorisierung
> - URS und Spezifikationen erstellen
> - IQ/OQ/PQ-Protokolle schreiben und durchführen
> - 21 CFR Part 11 Gap-Analyse
> - Audit Trail Reviews
> - Vorbereitung auf FDA-/GMP-Inspektionen
> 
> → [Kostenloses Erstgespräch vereinbaren](/kontakt)

---

## Navigation

- ← Vorheriger: [Process Validation](/qm-wissen/process-validation)
- → Nächster: [ISO 13485 für Medizinprodukte](/qm-wissen/iso-13485)

---

# Checkliste für Claude Code

## Dateien erstellen/ändern:

- [ ] `/pages/qm-wissen/csv.js` erstellen
- [ ] `/components/QMWissenSidebar.js` aktualisieren:
  - Unter "Validation" neuen Eintrag hinzufügen: `{ name: 'Computer System Validation', href: '/qm-wissen/csv' }`
- [ ] `/pages/qm-wissen/process-validation.js` → "Nächster Artikel"-Link auf `/qm-wissen/csv` setzen
- [ ] `/pages/qm-wissen/index.js` → Falls Artikel-Grid vorhanden, neue Karte hinzufügen

## Nach Erstellung testen:

- [ ] Seite lädt ohne Fehler
- [ ] Sidebar zeigt neuen Artikel unter "Validation"
- [ ] Navigation (←/→) funktioniert
- [ ] Breadcrumb korrekt: QM-Wissen › Validation › Computer System Validation
- [ ] ASCII-Diagramme korrekt dargestellt
- [ ] Responsive Layout funktioniert

## Git:

```bash
git add .
git commit -m "Add Computer System Validation article to QM-Wissen"
git push
```
