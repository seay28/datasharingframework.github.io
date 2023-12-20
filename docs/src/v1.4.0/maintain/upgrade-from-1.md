---
title: Upgrade from DSF 1.3.2
icon: update
---

Upgrading the DSF from 1.3.2 to 1.4.0 involves modifying the docker-compose.yml files and recreating the containers.


::: warning Update to DSF 1.2.0 first
When upgrading from 1.0.0 or 1.1.0 it is important to migrate to [DSF 1.2.0 first](/v1.2.0/maintain/upgrade-from-1).
:::


## Modify DSF FHIR Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/fhir` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/fhir /opt/fhir_backup_pre_1.4.0_upgrade`

2. Modify the DSF FHIR docker-compose.yml file, replace the version number with 1.4.0.
```diff
version: '3.8'
services:
  proxy:
-   image: ghcr.io/datasharingframework/fhir_proxy:1.3.2
+   image: ghcr.io/datasharingframework/fhir_proxy:1.4.0
    restart: on-failure
...
  app:
-   image: ghcr.io/datasharingframework/fhir:1.3.2
+   image: ghcr.io/datasharingframework/fhir:1.4.0
    restart: on-failure
...
```

3. Upgrade the DSF FHIR containers  
    From `/opt/fhir` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

## Modify DSF BPE Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/bpe` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/bpe /opt/bpe_backup_pre_1.4.0_upgrade`

2. Modify the DSF BPE docker-compose.yml file, replace the version number with 1.4.0.
```diff
version: '3.8'
services:
  app:
-   image: ghcr.io/datasharingframework/bpe:1.3.2
+   image: ghcr.io/datasharingframework/bpe:1.4.0
    restart: on-failure
...
```

3. Upgrade the DSF BPE containers  
    From `/opt/bpe` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

4. Verify your upgrade:
    * Verify the DSF FHIR server is running in version 1.4.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 1.4.0, [...]`
    * Verify the DSF FHIR server started without errors
    * Verify the DSF FHIR server is accessible via https, for example by browsing to https://your-dsf-endpoint.de/fhir/ (authentication with your client-certificate)
    * Verify the DSF BPE server is running in version 1.4.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 1.4.0, [...]`
    * Verify the DSF BPE server started without errors
    * Verify your install with a ping/pong test  


## Troubleshooting

DSF 1.4.0 and newer will refuse to start if the DSF FHIR instance of your site contains the same FHIR resources multiple times, which should only be there once. This no longer occurs with a new installation from DSF 1.4.0.

The following steps are necessary to resolve the issue during an update from 1.3.2 or less:

1. shut down the DSF FHIR server and the DSF BPE (docker compose down in /opt/fhir and /opt/bpe).
2. start the DSF FHIR server (docker compose up -d in /opt/fhir)
3. delete the ActivityDefinitions as described below:

Note: Only duplicate ActivityDefinitions need to be deleted, i.e. ActivityDefinitions with the same url and version. However, all ActivityDefinitions can also be deleted without any issues; they are created again at the start of the BPE.

In the folder /opt/fhir/secrets of the FHIR server:
```
curl --cert client_certificate.pem --key client_certificate_private_key.pem https://DSF_FHIR_SERVER/fhir/ActivityDefinition?_sort=url,version
```
Execute the following commands using the "fullUrl "s output there:

```
curl --cert client_certificate.pem --key client_certificate_private_key.pem -X DELETE fullUrl
```


4. start the DSF BPE