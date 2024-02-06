---
title: Configuration - FHIR Server
icon: config
---
 [Configuration - FHIR Reverse Proxy](configFhirReverseProxy.md) | Configuration - FHIR Server | [Configuration - BPE Server](configBpe.md) | [Upgrade from 0.9.2](upgradeFrom92.md) | [Upgrade from 0.9.1](upgradeFrom91.md) | [Upgrading from 0.9.0](upgradeFrom90.md) | [Upgrading from 0.8.0](upgradeFrom8.md) | [Upgrading from 0.7.0](upgradeFrom7.md) | [NUM-CODEX Install](num-codexInstall.md) | [HiGHmed Install](highmedInstall.md)

---

::: tip Important note:
Additional parameters (not listed here) are used to define elements of the external FHIR bundle.
:::

### ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE
- **Property:** org.highmed.dsf.fhir.client.certificate
- **Required:** Yes
- **Description:** PEM encoded file with local client certificate for https connections to remote DSF FHIR servers
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_client_certificate.pem`


### ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY
- **Property:** org.highmed.dsf.fhir.client.certificate.private.key
- **Required:** Yes
- **Description:** Private key corresponding to the local client certificate as PEM encoded file. Use *ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD* or *ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE* if private key is encrypted
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_client_certificate_private_key.pem`


### ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD or ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE
- **Property:** org.highmed.dsf.fhir.client.certificate.private.key.password
- **Required:** No
- **Description:** Password to decrypt the local client certificate encrypted private key
- **Recommendation:** Use docker secret file to configure using *ORG_HIGHMED_DSF_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE*
- **Example:** `/run/secrets/app_client_certificate_private_key.pem.password`


### ORG_HIGHMED_DSF_FHIR_CLIENT_PROXY_PASSWORD or ORG_HIGHMED_DSF_FHIR_CLIENT_PROXY_PASSWORD_FILE
- **Property:** org.highmed.dsf.fhir.client.proxy.password
- **Required:** No
- **Description:** Proxy password, set if the the DSF FHIR server can reach the internet only through a proxy which requests authentication
- **Recommendation:** Use docker secret file to configure using *ORG_HIGHMED_DSF_FHIR_CLIENT_PROXY_PASSWORD_FILE*


### ORG_HIGHMED_DSF_FHIR_CLIENT_PROXY_URL
- **Property:** org.highmed.dsf.fhir.client.proxy.url
- **Required:** No
- **Description:** Proxy location, set if the DSF FHIR server can reach the internet only through a proxy
- **Example:** `http://proxy.foo:8080`


### ORG_HIGHMED_DSF_FHIR_CLIENT_PROXY_USERNAME
- **Property:** org.highmed.dsf.fhir.client.proxy.username
- **Required:** No
- **Description:** Proxy username, set if the the DSF FHIR server can reach the internet only through a proxy which requests authentication


### ORG_HIGHMED_DSF_FHIR_CLIENT_TIMEOUT_CONNECT
- **Property:** org.highmed.dsf.fhir.client.timeout.connect
- **Required:** No
- **Description:** The timeout in milliseconds until a connection is established between this DSF FHIR server and a remote DSF FHIR server
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `2000`


### ORG_HIGHMED_DSF_FHIR_CLIENT_TIMEOUT_READ
- **Property:** org.highmed.dsf.fhir.client.timeout.read
- **Required:** No
- **Description:** The timeout in milliseconds until a reading a resource from a remote DSF FHIR server is aborted
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `10000`


### ORG_HIGHMED_DSF_FHIR_CLIENT_TRUST_CERTIFICATES
- **Property:** org.highmed.dsf.fhir.client.trust.certificates
- **Required:** Yes
- **Description:** PEM encoded file with one or more trusted root certificates to validate server certificates for https connections to remote DSF FHIR servers
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_client_trust_certificates.pem`


### ORG_HIGHMED_DSF_FHIR_CLIENT_VERBOSE
- **Property:** org.highmed.dsf.fhir.client.verbose
- **Required:** No
- **Description:** To enable verbose logging of requests to and replies from remote DSF FHIR servers, set to `true`
- **Default:** `false`


### ORG_HIGHMED_DSF_FHIR_DB_LIQUIBASE_PASSWORD or ORG_HIGHMED_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE
- **Property:** org.highmed.dsf.fhir.db.liquibase.password
- **Required:** Yes
- **Description:** The password to access the database from the DSF FHIR server to execute database migrations
- **Recommendation:** Use docker secret file to configure by using *ORG_HIGHMED_DSF_FHIR_DB_LIQUIBASE_PASSWORD_FILE*
- **Example:** `/run/secrets/db_liquibase.password`


### ORG_HIGHMED_DSF_FHIR_DB_LIQUIBASE_USERNAME
- **Property:** org.highmed.dsf.fhir.db.liquibase.username
- **Required:** No
- **Description:** The user name to access the database from the DSF FHIR server to execute database migrations
- **Default:** `liquibase_user`


### ORG_HIGHMED_DSF_FHIR_DB_URL
- **Property:** org.highmed.dsf.fhir.db.url
- **Required:** Yes
- **Description:** The address of the database used for the DSF FHIR server
- **Recommendation:** Change only if you don't use the provided docker-compose from the installation guide or made changes to the database settings/networking in the docker-compose
- **Example:** `jdbc:postgresql://db/fhir`


### ORG_HIGHMED_DSF_FHIR_DB_USER_GROUP
- **Property:** org.highmed.dsf.fhir.db.user.group
- **Required:** No
- **Description:** The name of the user group to access the database from the DSF FHIR server
- **Default:** `fhir_users`


### ORG_HIGHMED_DSF_FHIR_DB_USER_PASSWORD or ORG_HIGHMED_DSF_FHIR_DB_USER_PASSWORD_FILE
- **Property:** org.highmed.dsf.fhir.db.user.password
- **Required:** Yes
- **Description:** The password to access the database from the DSF FHIR server
- **Recommendation:** Use docker secret file to configure using *ORG_HIGHMED_DSF_FHIR_DB_USER_PASSWORD_FILE*
- **Example:** `/run/secrets/db_user.password`


### ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_GROUP
- **Property:** org.highmed.dsf.fhir.db.user.permanent.delete.group
- **Required:** No
- **Description:** The name of the user group to access the database from the DSF FHIR server for permanent deletes
- **Default:** `fhir_permanent_delete_users`


### ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD or ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE
- **Property:** org.highmed.dsf.fhir.db.user.permanent.delete.password
- **Required:** Yes
- **Description:** The password to access the database from the DSF FHIR server for permanent deletes
- **Recommendation:** Use docker secret file to configure using *ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_PASSWORD_FILE*
- **Example:** `/run/secrets/db_user_permanent_delete.password`


### ORG_HIGHMED_DSF_FHIR_DB_USER_PERMANENT_DELETE_USERNAME
- **Property:** org.highmed.dsf.fhir.db.user.permanent.delete.username
- **Required:** No
- **Description:** The user name to access the database from the DSF FHIR server for permanent deletes
- **Recommendation:** Use a different user then *ORG_HIGHMED_DSF_FHIR_DB_USER_USERNAME*
- **Default:** `fhir_server_permanent_delete_user`


### ORG_HIGHMED_DSF_FHIR_DB_USER_USERNAME
- **Property:** org.highmed.dsf.fhir.db.user.username
- **Required:** No
- **Description:** The user name to access the database from the DSF FHIR server
- **Default:** `fhir_server_user`


### ORG_HIGHMED_DSF_FHIR_SERVER_BASE_URL
- **Property:** org.highmed.dsf.fhir.server.base.url
- **Required:** Yes
- **Description:** The base address of this DSF FHIR server to read/store fhir resources
- **Example:** `https://foo.bar/fhir`


### ORG_HIGHMED_DSF_FHIR_SERVER_CORS_ORIGINS
- **Property:** org.highmed.dsf.fhir.server.cors.origins
- **Required:** No
- **Description:** List of allowed CORS origins, used to set the *Access-Control-Allow-Origin* HTTP response header, which indicates whether the response can be shared with requesting code from the given origin; comma or space separated list, YAML block scalars supported


### ORG_HIGHMED_DSF_FHIR_SERVER_INIT_BUNDLE
- **Property:** org.highmed.dsf.fhir.server.init.bundle
- **Required:** No
- **Description:** The fhir bundle containing the initial Allow-List, loaded on startup of the DSF FHIR server
- **Recommendation:** Change only if you don't use the provided files from the installation guide, have local changes in the Allow-List or received an Allow-List from another source
- **Default:** `conf/bundle.xml`


### ORG_HIGHMED_DSF_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE
- **Property:** org.highmed.dsf.fhir.server.organization.identifier.value
- **Required:** Yes
- **Description:** The local identifier value used in the Allow-List
- **Recommendation:** By convention: The shortest possible FQDN that resolve the homepage of the organization
- **Example:** `hospital.com`


### ORG_HIGHMED_DSF_FHIR_SERVER_PAGE_COUNT
- **Property:** org.highmed.dsf.fhir.server.page.count
- **Required:** No
- **Description:** The page size returned by the DSF FHIR server when reading/searching fhir resources
- **Default:** `20`


### ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS
- **Property:** org.highmed.dsf.fhir.server.user.thumbprints
- **Required:** Yes
- **Description:** List of SHA512 thumbprints as hex from local client certificates that can be used to access the DSF FHIR server; comma or space separated list, YAML block scalars supported
- **Recommendation:** Besides the DSF BPE client certificate thumbprint, add a second thumbprint of a personal client certificate for administration purposes


### ORG_HIGHMED_DSF_FHIR_SERVER_USER_THUMBPRINTS_PERMANENT_DELETE
- **Property:** org.highmed.dsf.fhir.server.user.thumbprints.permanent.delete
- **Required:** Yes
- **Description:** List of SHA512 thumbprints as hex from local client certificates that can be used to access the DSF FHIR server for permanent deletes; comma or space separated list, YAML block scalars supported
- **Recommendation:** Besides the DSF BPE client certificate thumbprint, add a second thumbprint of a personal client certificate for administration purposes
