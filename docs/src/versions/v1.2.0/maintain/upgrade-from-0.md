---
title: Upgrade from DSF 0.9.x
icon: update
---
 [Install DSF 1.2.0](install.md) | [Upgrade from DSF 1.1.0](upgrade-from-1.md) | Upgrade processes from 0.9.x | [Allow List Management](allowList-mgm.md) | [FHIR Reverse Proxy](fhir-reverse-proxy/README.md) | [FHIR Server](fhir/README.md) | [BPE Server](bpe/README.md) 

---


::: warning Do not upgrade unless prompted!
Please do not upgrade your DSF installation from DSF 0.9.x to DSF 1.x unless prompted to do so (e.g. from the German MII). 
:::

A direct upgrade from DSF 0.9.x to DSF 1.x is not supported. Instead, please perform the following steps:


1. shut down your DSF instances (DSF FHIR Server and DSF BPE).
2. backup your DSF instances (e.g. by moving the folders `/opt/bpe` and `/opt/fhir` to `/opt/bpe_0.9` and `/opt/fhir_0.9`)
3. install the new DSF according to the [instructions](install).

::: tip New process plugins
Please do not copy your old process plugins into the new DSF. There will be a new release for each process plugin at the time you will be prompted to update your DSF instance.
:::