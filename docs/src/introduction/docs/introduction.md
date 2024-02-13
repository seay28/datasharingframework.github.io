---
title: Introduction
icon: customize
---
 Introduction | [Basics and Standards](basics.md) | [Architecture](architecture.md) | [Security by Design](securityByDesign.md) | [Allow Lists](allowList.md) | [Process Plugins](process-plugins.md) | [Network Setup and General Architecture](networkSetup.md)

---

The [German Federal Ministry of Education and Research](https://www.bmbf.de/bmbf/en/home/home_node.html) is funding the [Medical Informatics Initiative](https://www.medizininformatik-initiative.de/en/start) with the aim of making routine data available digitally, reliably and quickly for medical research. University hospitals have founded consortia with partners such as research institutions and other companies to create the conditions for research and patient care to share their data across sites. Data Integration Centers (DIC) have been established at the university hospitals and partner institutions to create the technical and organizational conditions for data exchange between patient care and medical research.

![](/photos/learnmore/funding/mii.png =300x150)

The **Data Sharing Framework (DSF)** was developed within the HiGHmed consortium of the Medical Informatics Initiative and is now funded as an independent project by the German Federal Ministry of Education and Research within the Medical Informatics structure as *[DSF Community](https://www.gesundheitsforschung-bmbf.de/de/dsf-medizininformatik-struktur-data-sharing-framework-community-16133.php)*. 

The DSF is a concept for a secure middleware to distribute data sharing processes, aiming to extract, merge, pseudonymize and provide data stored in multiple distributed DICs. A researcher can use the DSF for example to submit feasibility queries to several DICs and thus has the opportunity to obtain sufficient data from different locations for his or her research. By using international standards such as FHIR and BPMN 2.0, the problem of heterogeneous data models, primary systems, architectures and federated legislation between DICs can be solved. The aim is to enable secure and syntactically-, semantically- and process-interoperable data exchange across organisational boundaries.

![DSF concept](/photos/info/introduction/dsf-concept.png)

The DSF is a secure communication infrastructure, that (1) scales with communication relationships, (2) orchestrates processes and instances, (3) separates execution logic from program code, (4) enables automated and user-centeric process steps ​(5) and can be used for heterogeny structures.

![Federated data exchange between distributed DICs (CRP=Central Research Portal, DMU=Data Management Unit)](/photos/info/introduction/dic-structure.png =500x320)