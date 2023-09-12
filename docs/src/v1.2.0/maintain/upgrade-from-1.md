---
title: Upgrade from DSF 1.x
icon: update
---

Upgrading the DSF 1.x to the current version involves modifying the docker-compose.yml files and recreating the containers.


::: tip Upgrade from 0.9.x
If you want to migrate from DSF 0.9.x, please follow [these instructions](upgrade-from-0).
:::

## Changes
* We implemented a new health check based on curl, that requires much less resources. Therefore, you have to adapt the docker-compose.yml-files to reflect these changes (as shown below).
* The role configuration is now optional. If you don't use roles, you can remove the role config (default for new installations):
```diff
  app:
...
    environment:
...
      # TODO specify role configuration to allow access to the UI via web-browser or REST API for specific users, see documentation at dsf.dev
-     DEV_DSF_FHIR_SERVER_ROLECONFIG: |
```

## Modify DSF FHIR Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/fhir` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/fhir /opt/fhir_backup_pre_1.2.0_upgrade`

1. Modify the DSF FHIR docker-compose.yml file, replace the version number with 1.2.0
```diff
version: '3.8'
services:
  proxy:
-   image: ghcr.io/datasharingframework/fhir_proxy:1.1.0
+   image: ghcr.io/datasharingframework/fhir_proxy:1.2.0
    restart: on-failure
...
  app:
-   image: ghcr.io/datasharingframework/fhir:1.1.0
+   image: ghcr.io/datasharingframework/fhir:1.2.0
    restart: on-failure
-   healthcheck:
-     test: ["CMD", "java", "-cp", "dsf_fhir.jar", "dev.dsf.common.status.client.StatusClient"]
-     interval: 10s
-     timeout: 15s
-     retries: 5
...
```

1. Upgrade the DSF FHIR containers  
    From `/opt/fhir` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

## Modify DSF BPE Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/bpe` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/bpe /opt/bpe_backup_pre_1.2.0_upgrade`

1. Modify the DSF BPE docker-compose.yml file, replace the version number with 1.2.0
```diff
version: '3.8'
services:
  app:
-   image: ghcr.io/datasharingframework/bpe:1.1.0
+   image: ghcr.io/datasharingframework/bpe:1.2.0
    restart: on-failure
-   healthcheck:
-     test: ["CMD", "java", "-cp", "dsf_bpe.jar", "dev.dsf.common.status.client.StatusClient"]
-     interval: 10s
-     timeout: 15s
-     retries: 5
...
```

1. Upgrade the DSF BPE containers  
    From `/opt/bpe` execute  
    ```
    docker compose up -d && docker compose logs -f
    ```

1. Verify your upgrade:
    * Verify the DSF FHIR server is running in version 1.2.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 1.2.0, [...]`
    * Verify the DSF FHIR server started without errors
    * Verify the DSF FHIR server is accessible via https, for example by browsing to https://your-dsf-endpoint.de/fhir/ (authentication with your client-certificate)
    * Verify the DSF BPE server is running in version 1.2.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 1.2.0, [...]`
    * Verify the DSF BPE server started without errors
    * Verify your install with a ping/pong test  
