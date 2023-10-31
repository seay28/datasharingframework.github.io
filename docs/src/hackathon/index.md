---
title: Hackathon
icon: guide
---

::: tip Nächster Hackathon
Der nächste Hackathon findet am 13.11. um 10:00 Uhr statt.
Hinweise zur Teilnahme finden Sie rechtzeitig auf dieser Seite.
:::


## Vorbereitende Hinweise
Zur aktiven Teilnahme an einem Hackathon mit DSF Bezug empfehlen wir die Installation der aktuellen DSF-Version auf Ihrer Infrastruktur. Weitere Details dazu finden Sie [auf der Installationsseite](/stable/maintain/install) beziehungsweise in der [Upgradeanleitung](/stable/maintain/upgrade-from-0).

## Hackathon Informationen
**Betreff: Einladung DSF-Community PROD Hackathon - 13.11.2023**
**Wann: Mo 13.11.2023 10:00-16:00**
Ort:  https://dsf.dev/hackathon/
			 
Wir laden Sie herzlich zu dem nächsten DSF Community Hackathon am Montag den 13.11.2023 von 10:00-16:00 Uhr ein. Ziel ist das Etablieren der nach unten inkompatiblen Upgrades (DSF und Feasibility) in ihrer produktiven Instanz (möglichst identisch zu Ihrer Testumgebung). Der Einwahllink ist: [https://dsf.dev/hackathon/](https://dsf.dev/hackathon/)

**Dieses Mal geht es um das Upgrade der PRODUKTIVEN DSF Infrastruktur und der damit verbundenen Anbindung an die produktive Instanz der FDPG. Alle Standorte sollten idealerweise am 13.11.2023 ihre produktiven DSF Instanzen von v0.9.x auf v.1.3.1. upgraden, da ab dem 13.11.2023 eine Anbindung an das FDPG und den NTH (NUM RDP) mit den veralteten Komponenten nicht mehr möglich ist.**

**Geplante Agenda - 13.11.2023 10-16 Uhr:**
- Aktuelle Informationen zu neuen Releases:
  - DSF v1.3.1.
  - PROD AllowList Management
  - Feasibility Triangle 
  - Feasibility DSF Prozessplugins v1.0.0.0
  - KDS-Report DSF Prozessplugins v1.0.0.0
- PROD AllowList Bundle Deployment
- Technische Anbindung an die PROD Infrastruktur durch Ping-Pong
- Durchführen und erproben des Feasibility Prozess Plugins 
- Durchführen und erproben des KDS Report Prozess Plugins
- Support bei Problemen

Die produktiven Systeme der FDPG auf zentraler Seite werden bereits am Freitag den 10.11.2023 upgedated, sodass von Freitag- bis Montagnachmittag mit Einschränkungen in der Funktionalität des FDPG zu rechnen ist. Im Nachgang an den Hackathon wird ein intensiver Support der DSF-Community und des FDPG+ Teams angeboten. Nutzen Sie das NUM-MII-DIZ Meeting für Fragen. Zusätzlich werden weitere Sprechstunden zeitnah bekannt gegeben.

**Vorbereitung an den Standorten:**
- Folgen Sie der Anleitung des DSF Allow List Managements und tragen Sie die Informationen entsprechend für die Produktivumgebung ein (bis **Donnerstag den 09.11.2023**):  [https://dsf.dev/stable/maintain/allowList-mgm.html](https://dsf.dev/stable/maintain/allowList-mgm.html)
  - Hinweis: Die bestehenden Informationen der aktuellen produktiv Umgebung (Zertifikate, Kontaktdaten, IP-Adressen etc…) können wiederverwendet werden müssen aber vollständig neu eingetragen werden. Bitte nutzen Sie den selben Organization-Identifier wie in der alten Produktiv- (und Test-)Umgebung.
- Installieren Sie die neueste DSF Version v1.3.1 (**bis 13.11.2023**)
  - Wenn Sie die DSF Version 0.9.x im Moment produktiv benutzen folgen Sie bitte dieser Anleitung:  [https://dsf.dev/stable/maintain/upgrade-from-0.html](https://dsf.dev/stable/maintain/upgrade-from-0.html)
  - Falls noch keine produktive DSF Instanz existiert:  [https://dsf.dev/stable/maintain/install.html](https://dsf.dev/stable/maintain/install.html)
  - Hinweis: Das DSF v1.3.1 release steht ab 01.11.2023 zur Verfügung. 
- Installieren Sie die angegebenen DSF-Prozessplugins (**bis 13.11.2023**) -  https://dsf.dev/stable/maintain/install-plugins.html
  - Falls Sie den Feasibility Prozess mittels AKTIN oder FHIR-Search (via FLARE) anstelle von CQL ausführen wollen, folgen Sie den entsprechenden Abschnitten in der Anleitung des Feasibility Triangle v3.0.0 (**bis 13.11.2023**) -  [https://github.com/medizininformatik-initiative/feasibility-deploy/tree/v3.0.0/feasibility-triangle](https://github.com/medizininformatik-initiative/feasibility-deploy/tree/v3.0.0/feasibility-triangle)
  - Hinweis: der Support für das Ausführen des Feasibility Prozesses und des KDS-Reports via AKTIN läuft zum Jahresende aus. Wir empfehlen schon jetzt die entsprechenden DSF-Prozessplugins zu nutzen.

**Die produktiven Systeme der FDPG auf zentraler Seite werden bereits am Freitag den 10.11.2023 upgedated, sodass von Freitag- bis Montagnachmittag mit Einschränkungen in der Funktionalität des FDPG zu rechnen ist.** Im Nachgang an den Hackathon wird ein intensiver Support der DSF-Community und des FDPG+ Teams angeboten. Nutzen Sie das NUM-MII-DIZ Meeting für Fragen. Zusätzlich werden weitere Sprechstunden zeitnah bekannt gegeben.
 
Falls Sie fragen zu den DSF Community Hackathons oder der Installation des DSF haben, melden Sie sich gerne über den [DSF-Community Zulip-Channel](https://mii.zulipchat.com/#narrow/stream/392426-Data-Sharing-Framework-.28DSF.29). Falls Sie Fragen zu der Installation des Feasibility Triangle haben, melden Sie sich bitte in dem [DIZ-Techchanel](https://mii.zulipchat.com/#narrow/stream/375397-DIZ-Tech-Channel) auf Zulip oder bei julian.gruendner@fau.de. Falls Sie Fragen zur FDPG im Allgemeinen haben: Philip.Kleinert@tmf-ev.de
