---
title: Install Plugins
icon: plugin
---

::: tip Marketplace for process plugins
To install and learn more about each Process Plugin, you can visit the Marketplace [here](https://hub.dsf.dev/).
:::


## **Overview**
- You can find an overview of compatable process plugins below (last updated 25/07/2024).

| Process Plugin            | released for test             | released for production       |
| ------------------------- | ----------------------------- | ----------------------------- |
| Ping Pong                 | [1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) | [1.0.1.0](https://github.com/datasharingframework/dsf-process-ping-pong/releases/tag/v1.0.1.0) |
| Allow-List                | [1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1) | [1.0.0.1](https://github.com/datasharingframework/dsf-process-allow-list/releases/tag/v1.0.0.1) |
| MII Process Feasibility   | [v1.0.0.5](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.5) | [v1.0.0.5](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases/tag/v1.0.0.5) |
| MII Process Report        | [1.1.0.1](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.1.0.1) | [1.1.0.1](https://github.com/medizininformatik-initiative/mii-process-report/releases/tag/v1.1.0.1) |
| MII Process Data Transfer | [1.0.0.1](https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases/tag/v1.0.0.1) | [1.0.0.1](https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases/tag/v1.0.0.1) |
| MII Process Data Sharing  | [1.0.1.0](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.1.0) | [1.0.1.0](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases/tag/v1.0.1.0) |
| RDP Process               | [1.1.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.1.0.0) | [1.1.0.0](https://github.com/num-codex/codex-processes-ap1/releases/tag/v1.1.0.0) |


- Deploying the process plugin to the DSF involves copy the process jar-file and configuring environment variable for the business process engine (BPE).


### Prerequisites
- A DSF installation of version 1.0.0 or higher. An installation guide can be found [here](https://dsf.dev/stable/maintain/install.html).

### Deployment
- Add the process jar-file to the DSF BPE folder `/opt/bpe/process`
- Make sure the process is readable by the bpe user or group
- Modify the process exclude config in `/opt/bpe/docker-compose.yml`



## **Releases**:
### Common processes

- [Ping-Pong](https://github.com/datasharingframework/dsf-process-ping-pong/releases)
- [Allow-List](https://github.com/datasharingframework/dsf-process-allow-list/releases)

### MII processes

- [Feasibility](https://github.com/medizininformatik-initiative/mii-process-feasibility/releases)
- [KDS-Report](https://github.com/medizininformatik-initiative/mii-process-report/releases)
- [MII-Data-Sharing](https://github.com/medizininformatik-initiative/mii-process-data-sharing/releases)
- [MII-Data-Transfer](https://github.com/medizininformatik-initiative/mii-process-data-transfer/releases)

### NUM processes
- [NUM-RDP](https://github.com/num-codex/codex-processes-ap1/releases)
