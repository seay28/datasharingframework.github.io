---
title: Upgrading from 0.7.0
icon: update
---
 [Configuration - FHIR Reverse Proxy](configFhirReverseProxy.md) | [Configuration - FHIR Server](configFhir.md) | [Configuration - BPE Server](configBpe.md) | [Upgrade from 0.9.2](upgradeFrom92.md) | [Upgrade from 0.9.1](upgradeFrom91.md) | [Upgrading from 0.9.0](upgradeFrom90.md) | [Upgrading from 0.8.0](upgradeFrom8.md) | Upgrading from 0.7.0 | [NUM-CODEX Install](num-codexInstall.md) | [HiGHmed Install](highmedInstall.md)

---

Upgrading the DSF from 0.7.0 to 0.9.0 involves replacing a config file, modifying the docker-compose.yml files, replacing the process plugins and recreating the containers.

**If you are upgrading from 0.6.0 please see the [Upgrade from 0.6.0 to 0.7.0 guide](https://github.com/highmed/highmed-dsf/wiki/DSF-Upgrade-From-0.6.0-to-0.7.0) first.**


## Modify DSF FHIR Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/fhir` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/fhir /opt/fhir_backup_pre_0.9.0_upgrade`

1. Modify the DSF FHIR docker-compose.yml file, replace 0.7.0 with 0.9.0
    ```diff
    @@ -1,7 +1,7 @@
     version: '3.8'
     services:
       proxy:
    -    image: ghcr.io/highmed/fhir_proxy:0.7.0
    +    image: ghcr.io/highmed/fhir_proxy:0.9.0
         restart: on-failure
         ports:
           - 127.0.0.1:80:80
    @@ -27,7 +27,7 @@ services:
           - app
     
       app:
    -    image: ghcr.io/highmed/fhir:0.7.0
    +    image: ghcr.io/highmed/fhir:0.9.0
         restart: on-failure
         healthcheck:
           test: ["CMD", "java", "-cp", "dsf_fhir.jar", "org.highmed.dsf.fhir.StatusClient"]
    ```

1. Download prepared DSF FHIR server config files and extract/replace the external FHIR bundle
    * **Test NUM-CODEX** (non HiGHmed) instance:
        https://github.com/highmed/highmed-dsf/wiki/resources/dsf_codex_test_fhir_0_9_0.tar.gz
        ```
        cd /opt
        wget https://github.com/highmed/highmed-dsf/wiki/resources/dsf_codex_test_fhir_0_9_0.tar.gz
        sudo tar --same-owner -zxvf dsf_codex_test_fhir_0_9_0.tar.gz fhir/conf/bundle.xml
        ```
    * **Test HiGHmed** instance:
        https://github.com/highmed/highmed-dsf/wiki/resources/dsf_highmed_test_fhir_0_9_0.tar.gz
        ```
        cd /opt
        wget https://github.com/highmed/highmed-dsf/wiki/resources/dsf_highmed_test_fhir_0_9_0.tar.gz
        sudo tar --same-owner -zxvf dsf_highmed_test_fhir_0_9_0.tar.gz fhir/conf/bundle.xml
        ```
    * **Production NUM-CODEX** (non HiGHmed) instance:
        https://github.com/highmed/highmed-dsf/wiki/resources/dsf_codex_prod_fhir_0_9_0.tar.gz
        ```
        cd /opt
        wget https://github.com/highmed/highmed-dsf/wiki/resources/dsf_codex_prod_fhir_0_9_0.tar.gz
        sudo tar --same-owner -zxvf dsf_codex_prod_fhir_0_9_0.tar.gz fhir/conf/bundle.xml
        ```
    * **Production HiGHmed** instance:
        https://github.com/highmed/highmed-dsf/wiki/resources/dsf_highmed_prod_fhir_0_9_0.tar.gz
        ```
        cd /opt
        wget https://github.com/highmed/highmed-dsf/wiki/resources/dsf_highmed_prod_fhir_0_9_0.tar.gz
        sudo tar --same-owner -zxvf dsf_highmed_prod_fhir_0_9_0.tar.gz fhir/conf/bundle.xml
        ```
    The command will update the external FHIR bundle at `/opt/fhir/conf/bundle.xml`  

    The output of the tar command should be
    ```
    fhir/conf/bundle.xml
    ```

1. Upgrade the DSF FHIR containers  
    From `/opt/fhir` execute  
    ```
    docker-compose up -d && docker-compose logs -f
    ```

## Modify DSF BPE Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/bpe` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/bpe /opt/bpe_backup_pre_0.9.0_upgrade`

1. Modify the DSF BPE docker-compose.yml file
    * **NUM-CODEX** (non HiGHmed) instance:  
        Change the bpe container version from 0.7.0 to 0.9.0, update the process exclude config and remove a bind mount

        ```diff
        @@ -1,7 +1,7 @@
         version: '3.8'
         services:
           app:
        -    image: ghcr.io/highmed/bpe:0.7.0
        +    image: ghcr.io/highmed/bpe:0.9.0
             restart: on-failure
             healthcheck:
               test: ["CMD", "java", "-cp", "dsf_bpe.jar", "org.highmed.dsf.bpe.StatusClient"]
        @@ -29,9 +29,6 @@ services:
               - type: bind
                 source: ./log
                 target: /opt/bpe/log
        -      - type: bind
        -        source: ./last_event
        -        target: /opt/bpe/last_event
               - type: bind
                 source: ./cache
                 target: /opt/bpe/cache
        @@ -48,8 +45,8 @@ services:
               ORG_HIGHMED_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE: TODO_ORGANIZATION_IDENTIFIER
               ORG_HIGHMED_DSF_BPE_FHIR_SERVER_BASE_URL: https://TODO_DSF_FRIR_SERVER_FQDN/fhir
               ORG_HIGHMED_DSF_BPE_PROCESS_EXCLUDED: |
        -        wwwnetzwerk-universitaetsmedizinde_dataTranslate/0.6.0
        -        wwwnetzwerk-universitaetsmedizinde_dataReceive/0.6.0
        +        wwwnetzwerk-universitaetsmedizinde_dataTranslate/0.7.0
        +        wwwnetzwerk-universitaetsmedizinde_dataReceive/0.7.0
        
               #TODO modify ORG_HIGHMED_DSF_BPE_PROCESS_EXCLUDED for later process versions
               #TODO add process specific environment variables, see process documentation
        ```

    *  **HiGHmed** instance:  
        Change the bpe container version from 0.7.0 to 0.9.0, update the process exclude config, and remove a bind mount

        ```diff
        @@ -1,7 +1,7 @@
         version: '3.8'
         services:
           app:
        -    image: ghcr.io/highmed/bpe:0.7.0
        +    image: ghcr.io/highmed/bpe:0.9.0
             restart: on-failure
             healthcheck:
               test: ["CMD", "java", "-cp", "dsf_bpe.jar", "org.highmed.dsf.bpe.StatusClient"]
        @@ -29,9 +29,6 @@ services:
               - type: bind
                 source: ./log
                 target: /opt/bpe/log
        -      - type: bind
        -        source: ./last_event
        -        target: /opt/bpe/last_event
               - type: bind
                 source: ./psn
                 target: /opt/bpe/psn
        @@ -51,11 +48,11 @@ services:
               ORG_HIGHMED_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE: TODO_ORGANIZATION_IDENTIFIER
               ORG_HIGHMED_DSF_BPE_FHIR_SERVER_BASE_URL: https://TODO_DSF_FRIR_SERVER_FQDN/fhir
               ORG_HIGHMED_DSF_BPE_PROCESS_EXCLUDED: |
        -        highmedorg_computeFeasibility/0.6.0
        -        highmedorg_computeDataSharing/0.6.0
        -        highmedorg_updateAllowList/0.6.0
        -        wwwnetzwerk-universitaetsmedizinde_dataTranslate/0.6.0
        -        wwwnetzwerk-universitaetsmedizinde_dataReceive/0.6.0
        +        highmedorg_computeFeasibility/0.7.0
        +        highmedorg_computeDataSharing/0.7.0
        +        highmedorg_updateAllowList/0.7.0
        +        wwwnetzwerk-universitaetsmedizinde_dataTranslate/0.7.0
        +        wwwnetzwerk-universitaetsmedizinde_dataReceive/0.7.0
        
               #TODO modify ORG_HIGHMED_DSF_BPE_PROCESS_EXCLUDED for later process versions
               #TODO add process specific environment variables, see process documentation
        ```

1. Upgrade DSF Plugins and Process-Plugins
    *  **NUM-CODEX** (non HiGHmed) instance:  
        * Process plugins in `/opt/bpe/process`:
            1. Replace `codex-process-data-transfer-0.6.0.jar` with `codex-process-data-transfer-0.7.0.jar` from the [latest NUM-CODEX processes release](https://github.com/num-codex/codex-processes-ap1/releases/tag/v0.7.0)  
            1. Replace `dsf-bpe-process-ping-0.6.0.jar` with `dsf-bpe-process-ping-0.7.0.jar` from the [latest HiGHmed processes release](https://github.com/highmed/highmed-processes/tree/v0.7.0)  

            Make sure the process plugins in `/opt/bpe/process` are configured with `chmod 440` and `chown root:bpe`.  
    *  **HiGHmed** instance:  
        * Process plugins in `/opt/bpe/process`:
            1. Replace `codex-process-data-transfer-0.6.0.jar` with `codex-process-data-transfer-0.7.0.jar` from the [latest NUM-CODEX processes release](https://github.com/num-codex/codex-processes-ap1/releases/tag/v0.7.0)  
            1. Replace `dsf-bpe-process-data-sharing-0.6.0.jar` with `dsf-bpe-process-data-sharing-0.7.0.jar` from the [latest HiGHmed processes release](https://github.com/highmed/highmed-processes/tree/v0.7.0)  
            1. Replace `dsf-bpe-process-feasibility-0.6.0.jar` with `dsf-bpe-process-feasibility-0.7.0.jar` from the [latest HiGHmed processes release](https://github.com/highmed/highmed-processes/tree/v0.7.0)  
            1. Replace `dsf-bpe-process-feasibility-mpc-0.6.0.jar` with `dsf-bpe-process-feasibility-mpc-0.7.0.jar` from the [latest HiGHmed processes release](https://github.com/highmed/highmed-processes/tree/v0.7.0)  
            1. Replace `dsf-bpe-process-local-services-0.6.0.jar` with `dsf-bpe-process-local-services-0.7.0.jar` from the [latest HiGHmed processes release](https://github.com/highmed/highmed-processes/tree/v0.7.0)  
            1. Replace `dsf-bpe-process-ping-0.6.0.jar` with `dsf-bpe-process-ping-0.7.0.jar` from the [latest HiGHmed processes release](https://github.com/highmed/highmed-processes/tree/v0.7.0)  
            1. Replace `dsf-bpe-process-update-allow-list-0.6.0.jar` with `dsf-bpe-process-update-allow-list-0.7.0.jar` from the [latest HiGHmed processes release](https://github.com/highmed/highmed-processes/tree/v0.7.0)  

            Make sure the process plugins in `/opt/bpe/process` are configured with `chmod 440` and `chown root:bpe`.  

        * Plugins in '/opt/bpe/plugin':
            1. If you are using the provided PDQ MPI Client, replace `dsf-mpi-client-pdq-0.7.0.jar`, `hapi-base-2.3.jar` and `hapi-structures-v25-2.3.jar` with the new files from `dsf-mpi-client-pdq-0.9.0.zip`, see [DSF release notes](https://github.com/highmed/highmed-dsf/releases/tag/v0.9.0)  
            1. If you are using the provided openEHR Client, replace `dsf-openehr-client-impl-0.7.0.jar` with the new file from `dsf-openehr-client-impl-0.9.0.zip`, see [DSF release notes](https://github.com/highmed/highmed-dsf/releases/tag/v0.9.0)  

            Make sure the plugins in `/opt/bpe/plugin` are configured with `chmod 440` and `chown root:bpe`.  


1. Upgrade the DSF BPE containers  
    From `/opt/bpe` execute  
    ```
    docker-compose up -d && docker-compose logs -f
    ```

1. Verify your upgrade:
    * Verify the DSF FHIR server is running in version 0.9.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 0.9.0, [...]`
    * Verify the DSF FHIR server started without errors
    * Verify the DSF FHIR server is accessible via https, for example by browsing to https://your-dsf-endpoint.de/fhir/ (authentication with your client-certificate)
    * Verify the DSF BPE server is running in version 0.9.0. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 0.9.0, [...]`
    * Verify the DSF BPE server started without errors
    * Verify the DSF BPE server removed ActivityDefinition resources for the deleted process plugin from the DSF FHIR server and created new ActivityDefinition for the new process plugin.
    * Verify your install with a ping/pong test  
        For a Task resource compatible with the 0.7.0 release of the ping process, see the [Ping/Pong process wiki](https://github.com/highmed/highmed-processes/wiki/Process-Ping-Start-v0.7.0).  