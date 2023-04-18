---
title: Projects
icon: stack
---
## Medical Informatics Initiative
The [German Federal Ministry of Education and Research](https://www.bmbf.de/bmbf/en/home/home_node.html) is funding the [Medical Informatics Initiative](https://www.medizininformatik-initiative.de/en/start) with the aim of making routine data available digitally, reliably and quickly for medical research. University hospitals have founded consortia with partners such as research institutions and other companies to create the conditions for research and patient care  to create the conditions for research and patient care to share their data across sites. Data Integration Centers (DIC) have been established at the university hospitals and partner institutions to create the technical and organizational conditions for data exchange between patient care and medical research.

![](/photos/learnmore/funding/mii.png =370x190)

The Data Sharing Framework (DSF) was developed within the HiGHmed consortium of the Medical Informatics Initiative and is now funded as an independent project by the German Federal Ministry of Education and Research within the Medical Informatics structure as *[DSF Community](https://www.gesundheitsforschung-bmbf.de/de/dsf-medizininformatik-struktur-data-sharing-framework-community-16133.php)*. 

### Data Sharing
The data sharing process plugin can be used to collect openEHR patient data from multiple organization and combine the data set include record linkage to find duplicate patients at a central trusted third party. For additional information see our papers:
- R. Wettstein, H. Hund, C. Fegeler, O. Heinze, Data Sharing in Distributed Architectures – Concept and Implementation in HiGHmed, Stud Health Technol Inform, 283 (2021) 111-118, [doi:10.3233/SHTI210548](https://ebooks.iospress.nl/doi/10.3233/SHTI210548)
- C.M. Heidt, H. Hund, C. Fegeler, A Federated Record Linkage Algorithm for Secure Medical Data Sharing, Stud Health Technol Inform, 278 (2021) 142-149, [doi:10.3233/SHTI210062](https://ebooks.iospress.nl/doi/10.3233/SHTI210062)

### Feasibility

With the feasibility process plugin patient counts can be performed across organizations including record linkage at a central Trusted Third Party. For additional information see our papers:
- R. Wettstein, H. Hund, I. Kobylinski, C. Fegeler, O. Heinze, Feasibility Queries in Distributed Architectures – Concept and Implementation in HiGHmed, Stud Health Technol Inform, 278 (2021) 134-141, [doi:10.3233/SHTI210061](https://ebooks.iospress.nl/doi/10.3233/SHTI210061)
- C.M. Heidt, H. Hund, C. Fegeler, A Federated Record Linkage Algorithm for Secure Medical Data Sharing, Stud Health Technol Inform, 278 (2021) 142-149, [doi:10.3233/SHTI210062](https://ebooks.iospress.nl/doi/10.3233/SHTI210062)

### Feasibility MPC

Our feasibility MPC process plugin can be used to calculate patient counts across multiple organizations based on a multi party computation algorithm and without the need of a central coordinating or summarizing organization. For additional information see our paper:
- R. Wettstein, T. Kussel, H. Hund, C. Fegeler, M. Dugas, K. Hamacher, Secure Multi-Party Computation Based Distributed Feasibility Queries – A HiGHmed Use Case, Stud Health Technol Inform, 296 (2022) 41-49, [doi:10.3233/SHTI220802](https://ebooks.iospress.nl/doi/10.3233/SHTI220802)

The processes can be found on [GitHub](https://github.com/highmed/highmed-processes/wiki).
<br>

---

## Network University Medicine NUM
'The [Network University Medicine](https://www.netzwerk-universitaetsmedizin.de/) was established in April 2020 as part of the COVID-19 pandemic crisis management. The aim of the NUM is to better coordinate COVID-19 research at all 36 university hospitals in Germany.'
::: center
![](/photos/learnmore/projects/num.png =370x220) ![](/photos/learnmore/projects/codex.png =390x220)
:::

As part of the *[CODEX | COVID-19 Data Exchange Platform](https://www.netzwerk-universitaetsmedizin.de/projekte/codex#c599)* project, a nationwide, uniform, privacy-compliant infrastructure for storing and providing COVID-19 research datasets was established.
### The Data Transfer Process
The [Data Transfer Process](https://github.com/num-codex/codex-processes-ap1) is used in NUM CODEX to send data from a Data Integration Center (DIC), via the Gecco Transfer Hub (GTH), to the Central Research Repository (CRR). The infrastructure and communincation messages on which the process is based can be seen in the following figure. All organizations use the Data Sharing Framework (DSF) for deployment and execution of the process. 

![](/photos/learnmore/projects/ap1.png)

More technical information can be found on [GitHub](https://github.com/num-codex/codex-processes-ap1/wiki/Process-Description-v0.7.0).


