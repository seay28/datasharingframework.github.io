# Upgrading from 0.9.1
Upgrading the DSF from 0.9.1 to 0.9.2 involves modifying the docker-compose.yml files and recreating the containers.

**As the upgrade from 0.9.0 to 0.9.1 does not require any changes except the change of the version numbers, you can directly follow the following instructions.**

## Modify DSF FHIR Server Setup
1. Preparation / Backup
    * We recommend to create a backup of the `/opt/fhir` directory before proceeding with the upgrade.  
    For example using: `sudo cp -rp /opt/fhir /opt/fhir_backup_pre_0.9.2_upgrade`

1. Modify the DSF FHIR docker-compose.yml file, replace 0.9.1 (or 0.9.0) with 0.9.2
    ```diff
    @@ -1,7 +1,7 @@
     version: '3.8'
     services:
       proxy:
    -    image: ghcr.io/highmed/fhir_proxy:0.9.1
    +    image: ghcr.io/highmed/fhir_proxy:0.9.2
         restart: on-failure
         ports:
           - 127.0.0.1:80:80
    @@ -27,7 +27,7 @@ services:
           - app
     
       app:
    -    image: ghcr.io/highmed/fhir:0.9.1
    +    image: ghcr.io/highmed/fhir:0.9.2
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
    For example using: `sudo cp -rp /opt/bpe /opt/bpe_backup_pre_0.9.2_upgrade`

1. Modify the DSF BPE docker-compose.yml file, replace 0.9.1 (or 0.9.0) with 0.9.2
    ```diff
    @@ -1,7 +1,7 @@
     version: '3.8'
     services:
       app:
    -    image: ghcr.io/highmed/bpe:0.9.1
    +    image: ghcr.io/highmed/bpe:0.9.2
         restart: on-failure
         healthcheck:
           test: ["CMD", "java", "-cp", "dsf_bpe.jar", "org.highmed.dsf.bpe.StatusClient"]
    ```

1. Upgrade the DSF BPE containers  
    From `/opt/bpe` execute  
    ```
    docker-compose up -d && docker-compose logs -f
    ```

1. Verify your upgrade:
    * Verify the DSF FHIR server is running in version 0.9.2. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-fhir-server-jetty, version: 0.9.2, [...]`
    * Verify the DSF FHIR server started without errors
    * Verify the DSF FHIR server is accessible via https, for example by browsing to https://your-dsf-endpoint.de/fhir/ (authentication with your client-certificate)
    * Verify the DSF BPE server is running in version 0.9.2. The log should contain a message:  
        `INFO main - BuildInfoReaderImpl.logBuildInfo(137) | Artifact: dsf-bpe-server-jetty, version: 0.9.2, [...]`
    * Verify the DSF BPE server started without errors
    * Verify your install with a ping/pong test  
        For a Task resource compatible with the 0.7.0 release of the ping process, see the [Ping/Pong process wiki](https://github.com/highmed/highmed-processes/wiki/Process-Ping-Start-v0.7.0).  