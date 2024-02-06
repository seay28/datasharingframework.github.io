---
title: NUM-CODEX Install
icon: install
---
 [Configuration - FHIR Reverse Proxy](configFhirReverseProxy.md) | [Configuration - FHIR Server](configFhir.md) | [Configuration - BPE Server](configBpe.md) | [Upgrade from 0.9.2](upgradeFrom92.md) | [Upgrade from 0.9.1](upgradeFrom91.md) | [Upgrading from 0.9.0](upgradeFrom90.md) | [Upgrading from 0.8.0](upgradeFrom8.md) | [Upgrading from 0.7.0](upgradeFrom7.md) | NUM-CODEX Install | [HiGHmed Install](highmedInstall.md)

---

::: tip Please note:
This setup guide uses pre-build docker images for DSF Version 0.9.3. This guide is not suitable for HiGHmed organizations.  
If you are a member of HiGHmed, see [HiGHmed Install](highmedInstall).
:::

## Prerequisites
### Virtual Machines
* DSF FHIR VM: min. 4 GB RAM, 4 vCPU, 20 GB HDD
* DSF BPE VM: min. 4 GB RAM, 4 vCPU, 20 GB HDD
### Docker / Docker-Compose
Both VMs need latest docker and docker-compose. For the latest install guide see https://docs.docker.com/engine/install and https://docs.docker.com/compose/install

docker:
```
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates curl gnupg lsb-release
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

docker-compose (warning: [2.17.3](https://github.com/docker/compose/releases/tag/v2.17.3) might not be [latest](https://github.com/docker/compose/releases)):
```
sudo curl -L "https://github.com/docker/compose/releases/download/v2.17.3/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

### Client/Server Certificates
Two Certificates from the DFN-PKI Global G2 (via DFN e.V.), GÉANT TCS (via DFN e.V.) or D-Trust (via TMF e.V.) are needed, more infos see [Authentication](../generalinformation/authentication)
* Certificate A: Server Certificate (DFN PKI Profile: 'Web Server', Common-Name: Your external DSF FHIR Servers FQDN)
* Certificate B: Client Certificate (DFN PKI Profile: '802.1X Client', Common-Name: Your DSF BPE Servers FQDN)

### Network setup / Network access
For additional information on the network setup see [Network-and-Architecture](../generalinformation/networkSetup).
* The DSF FHIR server needs to be accessible via the internet and able to access the internet without TLS interception.
* The BPE FHIR server should only be accessible by the internal network and able to access your DSF FHIR server via its external FQDN and the internet without TLS interception.

Here is a quick overview of the expected network setup. Connections to the fTTP, the terminology server and simplifier.net for validating GECCO FHIR resources as well as the local GECCO FHIR server are not listed:

| Source                        | Target                        | Port | Protocol               |
| ----------------------------- | ----------------------------- | ---- | ---------------------- |
| DSF BPE (local)               | DSF FHIR (local)              | 443  | https, wss             |
| DSF BPE (local)               | DSF FHIR (GECCO Transfer Hub)	| 443  | https                  |
| DSF FHIR (local)              | DSF FHIR (GECCO Transfer Hub)	| 443  | https (HTTP HEAD only) |
| DSF BPE (GECCO Transfer Hub)  | DSF FHIR (local)              | 443  | https                  |
| DSF FHIR (GECCO Transfer Hub) | DSF FHIR (local)              | 443  | https (HTTP HEAD only) |

### On-Boarding Excel Spreadsheet
You are required to fill out the on-boarding Excel spreadsheet, provided with the NUM-CODEX hackathon invite, and send it to the GECCO Transfer Hub. If the GECCO Transfer Hub already received and validated your On-Boarding Excel spreadsheet and you do not have to change any information, you can skip this step.

## Setup
### Prepare Certificates
1. Server Certificate (certificate A)  
    _This certificate will be used as the DSF FHIR servers server certificate (ssl_certificate_file.pem, ssl_certificate_key_file.pem)_
    * Store PEM encoded certificate as `ssl_certificate_file.pem`
    * Store unencrypted, PEM encoded private-key as `ssl_certificate_key_file.pem`

1. Client Certificate (certificate B)  
    _This certificate will be used as the DSF BPE servers client certificate (client_certificate.pem, client_certificate_private_key.pem) as well as the DSF FHIR servers client certificate (client_certificate.pem, client_certificate_private_key.pem)_
    * Store PEM encoded certificate as `client_certificate.pem`
    * Store encrypted or not encrypted, PEM encoded private-key as `client_certificate_private_key.pem`

### DSF FHIR Server
1. Add Group/User  
    Add group and user used by the DSF FHIR java application. Ubuntu compatible commands below:
    ```
    sudo addgroup --gid 2101 fhir
    sudo adduser --system --no-create-home --uid 2101 --gid 2101 fhir
    ```

1. Download and Extract Config Files  
    Download prepared DSF FHIR server config files and folder structure from  
    * **Test NUM-CODEX** instance:
        https://github.com/highmed/highmed-dsf/wiki/resources/dsf_codex_test_fhir_0_9_3.tar.gz
        ```
        cd /opt
        wget https://github.com/highmed/highmed-dsf/wiki/resources/dsf_codex_test_fhir_0_9_3.tar.gz
        sudo tar --same-owner -zxvf dsf_codex_test_fhir_0_9_3.tar.gz
        ```
    * **Production NUM-CODEX** instance:
        https://github.com/highmed/highmed-dsf/wiki/resources/dsf_codex_prod_fhir_0_9_3.tar.gz
        ```
        cd /opt
        wget https://github.com/highmed/highmed-dsf/wiki/resources/dsf_codex_prod_fhir_0_9_3.tar.gz
        sudo tar --same-owner -zxvf dsf_codex_prod_fhir_0_9_3.tar.gz
        ```
    _The `tar` command will unpack the config files at `/opt/fhir` assuming you changed into the `/opt` directory._

1. Verify that the `fhir` system user or group can write into the following folder
   * `/opt/fhir/log`

1. Add certificates and keys
    * Add the server certificate (certificate A) and the corresponding private-key to **/opt/fhir/secrets/**
        * ssl_certificate_file.pem (chmod: 440, chown: fhir:docker)
        * ssl_certificate_key_file.pem (chmod: 440, chown: fhir:docker)
    * Add the client certificate (certificate B) and the corresponding private-key to **/opt/fhir/secrets/**
        * client_certificate.pem (chmod: 440, chown: fhir:docker)
        * client_certificate_private_key.pem (chmod: 440, chown: fhir:docker)
    * If the private key is encrypted, add a password file with the password as the only content to **/opt/fhir/secrets/**
        * client_certificate_private_key.pem.password
    * If the private key is not encrypted, remove the corresponding docker secret lines from the `docker-compose.yml` file
        ```
        L39:      - app_client_certificate_private_key.pem.password
        ...
        L56:      ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE: /run/secrets/app_client_certificate_private_key.pem.password
        ...
        L137:  app_client_certificate_private_key.pem.password:
        L138:    file: ./secrets/client_certificate_private_key.pem.password
        ```

1. Uncomment one of the certificate chain entries in the docker-compose file base on the certificate authority that signed your DSF FHIR server certificate (certificate A). For example use the following two lines if the server certificate is signed by `DFN-Verein Global Issuing CA`
    ```
    L102:  ssl_certificate_chain_file.pem:
    L103:    file: ./secrets/ssl_certificate_chain_file_DFN-Verein.pem
    ```

1. Modify database passwords
    * **/opt/fhir/secrets/db_liquibase.password**
        * Generate a random password (min. 32 characters recommended) and replace the content of the file.
    * **/opt/fhir/secrets/db_user.password**
        * Generate a random password (min. 16 characters recommended) and replace the content of the file.
    * **/opt/fhir/secrets/db_user_permanent_delete.password**
        * Generate a random password (min. 16 characters recommended) and replace the content of the file.

1. Modify the docker-compose.yml file and set environment variables to the appropriate values
    * **services -> proxy -> environment:**
        * **HTTPS_SERVER_NAME_PORT**: __TODO_DSF_FRIR_SERVER_EXTERNAL_FQDN:443__
            Set your FHIR servers external FQDN, e.g. `foo.bar.de` -> `foo.bar.de:443`
        * For additional environment variables, see [DSF 0.9.3 FHIR Reverse Proxy configuration parameters](configFhirReverseProxy)
    * **services -> app -> environment:**
        * **ORG_HIGHMED_DSF_FHIR_SERVER_FQDN**: _TODO_DSF_FRIR_SERVER_EXTERNAL_FQDN_  
            Set your FHIR servers external FQDN, e.g. `foo.bar.de`
        * **ORG_HIGHMED_DSF_FHIR_SERVER_BASE_URL**: https://_TODO_DSF_FRIR_SERVER_EXTERNAL_FQDN_/fhir  
            Set your FHIR servers external FQDN, e.g. `foo.bar.de` -> `https://foo.bar.de/fhir`
        * **ORG_HIGHMED_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE**: _TODO_ORGANIZATION_IDENTIFIER_  
            Set your Organizations DSF identifier, aka the shortest FQDN that resolves to the main homepage of the organization, e.g. hs-heilbronn.de
        * **ORG_HIGHMED_DSF_FHIR_SERVER_ORGANIZATION_NAME**: _TODO_ORGANIZATION_NAME_  
            Set your Organizations official name, e.g. Hochschule Heilbronn
        * **ORG_HIGHMED_DSF_FHIR_SERVER_ORGANIZATION_THUMBPRINT**: _TODO_CLIENT_CERTIFICATE_THUMBPRINT_  
            Set the SHA-512 Hash (lowercase hex) of your client certificate (certificate B)  
            Use `certtool --fingerprint --hash=sha512 --infile=client_certificate.pem` to generate the hash.
        * **ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS**: _TODO_CLIENT_CERTIFICATE_THUMBPRINTS_  
            Set the SHA-512 Hash (lowercase hex) of your client certificate (certificate B)  
            This parameter is a comma separated list e.g. `ab12...37ff,f3a2...bb22`. You can add additional client certificate thumbprints for example the thumbprint of your (the admins) personal DFN PKI S/MIME certificate, to access the DSF FHIR servers REST interface.
        * **ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS_PERMANENT_DELETE**: _TODO_CLIENT_CERTIFICATE_THUMBPRINTS_  
            Set the SHA-512 Hash (lowercase hex) of your client certificate (certificate B)  
            This parameter is a comma separated list e.g. `ab12...37ff,f3a2...bb22`. Usually it is not necessary to add additional thumbprints other than your client certificate (certificate B) here. When a client uses a certificate with a thumbprint listed here, the client is allowed to permanently delete FHIR resources.
        * For additional environment variables, see [DSF 0.9.3 FHIR Server configuration parameters](configFhir)

1. Start the DSF FHIR Server  
    Start using: `docker-compose up -d && docker-compose logs -f` (Ctrl-C will close log, but not stop container)

### DSF BPE Server
1. Add Group/User  
    Add group and user used by the DSF BPE java application. Ubuntu compatible commands below:
    ```
    sudo addgroup --gid 2202 bpe
    sudo adduser --system --no-create-home --uid 2202 --gid 2202 bpe
    ```
1. Download and Extract Config Files  
    Download prepared DSF BPE server config files and folder structure from  
    * **Test NUM-CODEX** instance:
        https://github.com/highmed/highmed-dsf/wiki/resources/dsf_codex_test_bpe_0_9_3.tar.gz
        ```
        cd /opt
        wget https://github.com/highmed/highmed-dsf/wiki/resources/dsf_codex_test_bpe_0_9_3.tar.gz
        sudo tar --same-owner -zxvf dsf_codex_test_bpe_0_9_3.tar.gz
        ```
    * **Production NUM-CODEX** instance:
        https://github.com/highmed/highmed-dsf/wiki/resources/dsf_codex_prod_bpe_0_9_3.tar.gz
        ```
        cd /opt
        wget https://github.com/highmed/highmed-dsf/wiki/resources/dsf_codex_prod_bpe_0_9_3.tar.gz
        sudo tar --same-owner -zxvf dsf_codex_prod_bpe_0_9_3.tar.gz
        ```
    _The `tar` command will unpack the config files at `/opt/bpe` assuming you changed into the `/opt` directory._

1. Verify that the `bpe` system user or group can write into the following folders
   * `/opt/bpe/log`

1. Add certificates and keys
    * Add the client certificate (certificate B) and the corresponding private-key to **/opt/bpe/secrets/**
        * client_certificate.pem (chmod: 440 chown: bpe:docker)
        * client_certificate_private_key.pem (chmod: 440 chown: bpe:docker)
    * If the private key is encrypted, add a password file with the password as the only content to **/opt/bpe/secrets/**
        * client_certificate_private_key.pem.password
    * If the private key is not encrypted, remove the corresponding docker secret lines from the `docker-compose.yml` file
        ```
        L13:      - app_client_certificate_private_key.pem.password
        ...
        L38:      ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE: /run/secrets/app_client_certificate_private_key.pem.password
        ...
        L92:  app_client_certificate_private_key.pem.password:
        L93:    file: ./secrets/client_certificate_private_key.pem.password
        ```
    * Add the CRR public-key used for asymmetrically encrypting the GECCO FHIR Bundles to **/opt/bpe/secrets/**
        * crr_public_key.pem (chmod: 440 chown: bpe:docker)
        * You can download the 4096 Bit RSA PEM encoded public-key for
            * a **Test** instance from:  
                https://keys.num-codex.de/crr_public-key-pre-prod.pem  
            * a **Production** instance from:  
                https://keys.num-codex.de/crr_public-key-prod.pem  

1. Modify database passwords
    * **/opt/bpe/secrets/db_liquibase.password**
        * Generate a random password (min. 32 characters recommended) and replace the content of the file.
    * **/opt/bpe/secrets/db_user.password**
        * Generate a random password (min. 16 characters recommended) and replace the content of the file.
    * **/opt/bpe/secrets/db_user_camunda.password**
        * Generate a random password (min. 16 characters recommended) and replace the content of the file.

1. Modify the docker-compose.yml file and set environment variables to the appropriate values
    * **services -> app -> environment:**
        * **ORG_HIGHMED_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE**: _TODO_ORGANIZATION_IDENTIFIER_  
            Set your Organizations DSF identifier, aka the shortest FQDN that resolves the main homepage of the organization, e.g. hs-heilbronn.de
        * **ORG_HIGHMED_DSF_BPE_FHIR_SERVER_BASE_URL**: https://__TODO_DSF_FRIR_SERVER_FQDN__/fhir  
            Set your FHIR servers external FQDN, e.g. `foo.bar.de` -> `https://foo.bar.de/fhir`
        * For additional environment variables, see [DSF 0.9.3 BPE Server configuration parameters](configBpe)

1. Start the DSF BPE Server (without process plugins)  
    Start using: `docker-compose up -d && docker-compose logs -f` (Ctrl-C will close log, but not stop container)

1. Verify DSF BPE Startup  
    * Check that the BPE was able to download new Task resources from the DSF FHIR server during startup.
    * Check that the BPE was able to download a Subscription resource from the DSF FHIR server during startup.
    * Check that the BPE was able to connect to the websocket endpoint of the DSF FHIR server during startup.

    If you need to debug the TLS connection to your DSF FHIR server use for example:  
    `docker run -it --rm alpine/openssl s_client your-fhir-server.fqdn:443`  
    The command above should print the server certificate of your DSF FHIR server (certificate A) and end with a message like `[...]tlsv13 alert certificate required[...]`

1. Stop the DSF BPE Server  
    * Hit Ctrl-C to close log
    * Stop using: `docker-compose stop`

1. Add the following DSF BPE process plugins, for instructions on how to configure the plugin, see release notes.
    * **num-codex / codex-processes-ap1** version 0.7.0 or later:  
        https://github.com/num-codex/codex-processes-ap1/releases/tag/v0.7.0  
        See [NUM-CODEX: Process Deployment and Configuration](https://github.com/num-codex/codex-processes-ap1/wiki/Process-Deployment-and-Configuration-v0.7.0) on how to deploy and configure the process plugin.
    * **highmed / highmed-processes / ping** version 0.7.0 or later:  
        https://github.com/highmed/highmed-processes/releases/tag/v0.7.0  
        See [HiGHmed: Process Ping Deployment](https://github.com/highmed/highmed-processes/wiki/Process-Ping-Deployment-v0.7.0) on how to deploy and configure the process plugin.

    _Notice: Jar-files within the folders `/opt/bpe/process` and `/opt/bpe/plugin` need to be readable by the linxux `bpe` user -> `chown root:bpe`, `chmod 440`_  

1. Start the DSF BPE Server (with process plugins)  
    Start using: `docker-compose up -d && docker-compose logs -f` (Ctrl-C will close log, but not stop container)