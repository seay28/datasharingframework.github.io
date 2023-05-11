---
title: Upgrading from 0.9.0 to 0.9.0
icon: install
---
Upgrading the DSF from 0.9.0 to 0.9.0 involves modifying the docker-compose.yml files, replacing the process plugins and recreating the containers.


**If you are upgrading from 0.8.0 please see the [Upgrade from 0.8.0 to 0.9.0 guide](upgradeFrom8.md).**


## Modify DSF FHIR Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/fhir` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/fhir /opt/fhir_backup_pre_0.9.1_upgrade`

1. Modify the DSF FHIR docker-compose.yml file, replace 0.9.0 with 0.9.1
    ```diff
    @@ -1,7 +1,7 @@
     version: '3.8'
     services:
       proxy:
    -    image: ghcr.io/highmed/fhir_proxy:0.9.0
    +    image: ghcr.io/highmed/fhir_proxy:0.9.1
         restart: on-failure
         ports:
           - 127.0.0.1:80:80
    @@ -27,7 +27,7 @@ services:
           - app
     
       app:
    -    image: ghcr.io/highmed/fhir:0.9.0
    +    image: ghcr.io/highmed/fhir:0.9.1
         restart: on-failure
         healthcheck:
           test: ["CMD", "java", "-cp", "dsf_fhir.jar", "org.highmed.dsf.fhir.StatusClient"]
    ```

1. Upgrade the DSF FHIR containers  
    From `/opt/fhir` execute  
    ```
    docker-compose up -d && docker-compose logs -f
    ```

## Modify DSF BPE Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/bpe` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/bpe /opt/bpe_backup_pre_0.9.1_upgrade`

1. Modify the DSF BPE docker-compose.yml file
    * **NUM-CODEX** (non HiGHmed) instance:  
        Change the bpe container version from 0.9.0 to 0.9.1

        ```diff
        @@ -1,7 +1,7 @@
         version: '3.8'
         services:
           app:
        -    image: ghcr.io/highmed/bpe:0.9.0
        +    image: ghcr.io/highmed/bpe:0.9.1
             restart: on-failure
             healthcheck:
               test: ["CMD", "java", "-cp", "dsf_bpe.jar", "org.highmed.dsf.bpe.StatusClient"]
        ```

    *  **HiGHmed** instance:  
        Change the bpe container version from 0.9.0 to 0.9.1

        ```diff
        @@ -1,7 +1,7 @@
         version: '3.8'
         services:
           app:
        -    image: ghcr.io/highmed/bpe:0.8.0
        +    image: ghcr.io/highmed/bpe:0.9.0
             restart: on-failure
             healthcheck:
               test: ["CMD", "java", "-cp", "dsf_bpe.jar", "org.highmed.dsf.bpe.StatusClient"]
        ```

1. Upgrade DSF Plugins and Process-Plugins
        * Plugins in '/opt/bpe/plugin':
            1. If you are using the provided PDQ MPI Client, replace `dsf-mpi-client-pdq-0.7.0.jar`, `hapi-base-2.3.jar` and `hapi-structures-v25-2.3.jar` with the new files from `dsf-mpi-client-pdq-0.9.1.zip`, see [DSF release notes](https://github.com/highmed/highmed-dsf/releases/tag/v0.9.1)  
            1. If you are using the provided openEHR Client, replace `dsf-openehr-client-impl-0.7.0.jar` with the new file from `dsf-openehr-client-impl-0.9.1.zip`, see [DSF release notes](https://github.com/highmed/highmed-dsf/releases/tag/v0.9.1)  

            Make sure the plugins in `/opt/bpe/plugin` are configured with `chmod 440` and `chown root:bpe`.  


1. Upgrade the DSF BPE containers  
    From `/opt/bpe` execute  
    ```
    docker-compose up -d && docker-compose logs -f
    ```

1. Verify your upgrade:
    * Verify the DSF FHIR server is running in version 0.9.1. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 0.9.1, [...]`
    * Verify the DSF FHIR server started without errors
    * Verify the DSF FHIR server is accessible via https, for example by browsing to https://your-dsf-endpoint.de/fhir/ (authentication with your client-certificate)
    * Verify the DSF BPE server is running in version 0.9.1. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 0.9.1, [...]`
    * Verify the DSF BPE server started without errors
    * Verify the DSF BPE server removed ActivityDefinition resources for the deleted process plugin from the DSF FHIR server and created new ActivityDefinition for the new process plugin.
    * Verify your install with a ping/pong test  
        For a Task resource compatible with the 0.7.0 release of the ping process, see the [Ping/Pong process wiki](https://github.com/highmed/highmed-processes/wiki/Process-Ping-Start-v0.7.0).  