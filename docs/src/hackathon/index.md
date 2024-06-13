---
title: Hackathon
icon: guide
---

<!--<meta http-equiv="refresh" content="0;url=https://audimax.heiconf.uni-heidelberg.de/jxh4-jxx2-tm6c-d37q">-->

Wir laden Sie herzlich zu unserem kommenden Hackathon **am 18.06. von 10:00 Uhr bis 15:30 Uhr** ein. Diese Veranstaltung bietet die Gelegenheit, sich mit den neuesten Updates und Funktionen unserer Komponenten vertraut zu machen.


Agenda:

1. Einführung in Neuerungen:
   - Begrüßung und Einführung in die neuen Funktionen und Verbesserungen des DSFs
   - Präsentation der Änderungen der MII DSF-Prozessplugins, sowie von Blaze und Flare 
2. Updates MII-Komponenten:  
   - DSF
   - Feasibility
   - Data Sharing
   - Data Transfer
   - KDS Report
   - Blaze
   - Flare mit neuer KDS Ontologie
3. Testen des Prozessplugins "Data Sharing":
   - Praktische Anwendung des "Data Sharing"-Prozessplugins auf unserer Testinfrastruktur.

Ziel der Veranstaltung ist es die Test- und Produktivsysteme möglichst aller Standorte auf den neusten Stand zu patchen.


## Vorbereitung
In diesem Hackathon ist das Aktualisieren der Systeme ein aktiver Bestandteil und bedarf keiner speziellen Vorbereitung. Für das Testen der Data Sharing Prozesse sollten jedoch einige Voraussetzungen bereits vor dem Termin erfüllt sein.

### Netzwerkfreigaben

Für den Hackathon werden wir primär die Test-DMS aus Heilbronn verwenden, dafür muss neben der Freigabe zur FDPG auch die Freigabe zum und vom MII-Test-System der HHN vorhanden sein (mii-test.gecko.hs-heilbronn.de).

In diesem Kontext bietet es sich an, auch die Freigaben für weitere Test-DMSen zu beantragen. Weitere Details dazu befinden sich in der Liste der Firewallregeln im Test-Allowlist-Management-Tool (allowlist-test.gecko.hs-heilbronn.de) unter dem Punkt “Download Allowlist”. Wir planen während des Termins auch mit ausgewählten DIZen erste Funktionstests der Test-DMSen durchzuführen.

Wir empfehlen auch sicherzustellen, dass Sie Zugriff auf die Weboberfläche Ihres DSF-FHIR-Servers haben.

### FHIR-Store

Zur Datenausleitung im Kontext des Data Sharing Prozesses werden wir FHIR Bundles mit Testdaten zur Verfügung stellen, die in Form eines FHIR Bundles auf einem FHIR Store gespeichert werden müssen. Dabei kann ein beliebiger FHIR Server (z.B. HAPI FHIR oder Blaze) verwendet werden. Es kann auch der FHIR Server verwendet werden, der z.B. für Feasibility im Testsystem genutzt wird.

Weitere Details zum Data Sharing Prozess sind hier zu finden:

https://github.com/medizininformatik-initiative/mii-process-data-sharing/wiki

Eine Installation kann vor oder während des Hackathons durchgeführt werden.



Falls Sie Fragen zum Hackathon oder der Installation des DSF haben, melden Sie sich gerne über den DSF-Community Zulip-Channel oder dsf-gecko@hs-heilbronn.de. 

::: tip Gemeinsame technische Sprechstunde der DSF-Community und des FDPG+
- Montags, 16:00-17:00 Uhr
- Ort: https://dsf.dev/sprechstunde
:::