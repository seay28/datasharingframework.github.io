---
title: DSF 0.9.0 Configuration Parameters - BPE Server
icon: install
---
Please note: Additional parameters (not listed here) are used to configure process plugins.

### ORG_HIGHMED_DSF_BPE_CONSENT_WEBSERVICE_FACTORY_CLASS
- **Property:** org.highmed.dsf.bpe.consent.webservice.factory.class
- **Required:** No
- **Description:** Factory for client implementations used to connect to a consent server in order to check permissions to access patient medical data
- **Recommendation:** The default value is a factory for a stub implementation, change to a factory for client implementation that matches the API of your Consent server
- **Default:** `org.highmed.consent.client.stub.ConsentClientStubFactory`


### ORG_HIGHMED_DSF_BPE_DB_LIQUIBASE_PASSWORD or ORG_HIGHMED_DSF_BPE_DB_LIQUIBASE_PASSWORD_FILE
- **Property:** org.highmed.dsf.bpe.db.liquibase.password
- **Required:** Yes
- **Description:** The password to access the database from the DSF BPE server to execute database migrations
- **Recommendation:** Use docker secret file to configure by using *ORG_HIGHMED_DSF_BPE_DB_LIQUIBASE_PASSWORD_FILE*
- **Example:** `/run/secrets/db_liquibase.password`


### ORG_HIGHMED_DSF_BPE_DB_LIQUIBASE_USERNAME
- **Property:** org.highmed.dsf.bpe.db.liquibase.username
- **Required:** No
- **Description:** The user name to access the database from the DSF BPE server to execute database migrations
- **Default:** `liquibase_user`


### ORG_HIGHMED_DSF_BPE_DB_URL
- **Property:** org.highmed.dsf.bpe.db.url
- **Required:** Yes
- **Description:** The address of the database used for the DSF BPE server
- **Recommendation:** Change only if you don't use the provided docker-compose from the installation guide or made changes to the database settings/networking in the docker-compose
- **Example:** `jdbc:postgresql://db/bpe`


### ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_GROUP
- **Property:** org.highmed.dsf.bpe.db.user.camunda.group
- **Required:** No
- **Description:** The name of the user group to access the database from the DSF BPE server for camunda processes
- **Default:** `camunda_users`


### ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_PASSWORD or ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE
- **Property:** org.highmed.dsf.bpe.db.user.camunda.password
- **Required:** Yes
- **Description:** The password to access the database from the DSF BPE server for camunda processes
- **Recommendation:** Use docker secret file to configure using *ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_PASSWORD_FILE*
- **Example:** `/run/secrets/db_user_camunda.password`


### ORG_HIGHMED_DSF_BPE_DB_USER_CAMUNDA_USERNAME
- **Property:** org.highmed.dsf.bpe.db.user.camunda.username
- **Required:** No
- **Description:** The user name to access the database from the DSF BPE server for camunda processes
- **Recommendation:** Use a different user then in *ORG_HIGHMED_DSF_BPE_DB_USER_USERNAME*
- **Default:** `camunda_server_user`


### ORG_HIGHMED_DSF_BPE_DB_USER_GROUP
- **Property:** org.highmed.dsf.bpe.db.user.group
- **Required:** No
- **Description:** The name of the user group to access the database from the DSF BPE server
- **Default:** `bpe_users`


### ORG_HIGHMED_DSF_BPE_DB_USER_PASSWORD or ORG_HIGHMED_DSF_BPE_DB_USER_PASSWORD_FILE
- **Property:** org.highmed.dsf.bpe.db.user.password
- **Required:** Yes
- **Description:** The password to access the database from the DSF BPE server
- **Recommendation:** Use docker secret file to configure using *ORG_HIGHMED_DSF_BPE_DB_USER_PASSWORD_FILE*
- **Example:** `/run/secrets/db_user.password`


### ORG_HIGHMED_DSF_BPE_DB_USER_USERNAME
- **Property:** org.highmed.dsf.bpe.db.user.username
- **Required:** No
- **Description:** The user name to access the database from the DSF BPE server
- **Default:** `bpe_server_user`


### ORG_HIGHMED_DSF_BPE_DEBUG_LOG_MESSAGE_ONACTIVITYEND
- **Property:** org.highmed.dsf.bpe.debug.log.message.onActivityEnd
- **Required:** No
- **Description:** To enable debug log messages for every bpmn activity end, set to `true`.
- **Recommendation:** This debug function should only be activated during process plugin development.
- **Default:** `false`


### ORG_HIGHMED_DSF_BPE_DEBUG_LOG_MESSAGE_ONACTIVITYSTART
- **Property:** org.highmed.dsf.bpe.debug.log.message.onActivityStart
- **Required:** No
- **Description:** To enable debug log messages for every bpmn activity start, set to `true`.
- **Recommendation:** This debug function should only be activated during process plugin development.
- **Default:** `false`


### ORG_HIGHMED_DSF_BPE_DEBUG_LOG_MESSAGE_VARIABLES
- **Property:** org.highmed.dsf.bpe.debug.log.message.variables
- **Required:** No
- **Description:** To enable loging bpmn variables for every bpmn activity start or end, when logging of these events is enabled, set to `true`.
- **Recommendation:** This debug function should only be activated during process plugin development. WARNNING: Confidential information may be leaked via the debug log!
- **Default:** `false`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE
- **Property:** org.highmed.dsf.bpe.fhir.client.certificate
- **Required:** Yes
- **Description:** PEM encoded file with local client certificate for https connections to local and remote DSF FHIR servers
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_client_certificate.pem`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY
- **Property:** org.highmed.dsf.bpe.fhir.client.certificate.private.key
- **Required:** Yes
- **Description:** Private key corresponding to the local client certificate as PEM encoded file. Use ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD* or *ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE* if private key is encrypted
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_client_certificate_private_key.pem`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD or ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE
- **Property:** org.highmed.dsf.bpe.fhir.client.certificate.private.key.password
- **Required:** No
- **Description:** Password to decrypt the local client certificate encrypted private key
- **Recommendation:** Use docker secret file to configure using *ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE*
- **Example:** `/run/secrets/app_client_certificate_private_key.pem.password`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_PROXY_PASSWORD or ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_PROXY_PASSWORD_FILE
- **Property:** org.highmed.dsf.bpe.fhir.client.local.proxy.password
- **Required:** No
- **Description:** Proxy password, set if the DSF BPE server can reach internal servers, like the DSF FHIR server, only through a proxy which requests authentication
- **Recommendation:** Use docker secret file to configure using *ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_PROXY_PASSWORD_FILE*


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_PROXY_URL
- **Property:** org.highmed.dsf.bpe.fhir.client.local.proxy.url
- **Required:** No
- **Description:** Proxy location, set if the DSF BPE server can reach internal servers, like the DSF FHIR server, only through a proxy
- **Example:** `http://proxy.foo:8080`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_PROXY_USERNAME
- **Property:** org.highmed.dsf.bpe.fhir.client.local.proxy.username
- **Required:** No
- **Description:** Proxy username, set if the DSF BPE server can reach internal servers, like the DSF FHIR server, only through a proxy which requests authentication


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_TIMEOUT_CONNECT
- **Property:** org.highmed.dsf.bpe.fhir.client.local.timeout.connect
- **Required:** No
- **Description:** The timeout in milliseconds until a connection is established with the local DSF FHIR server
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `2000`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_TIMEOUT_READ
- **Property:** org.highmed.dsf.bpe.fhir.client.local.timeout.read
- **Required:** No
- **Description:** The timeout in milliseconds until a reading a resource from the local DSF FHIR server is aborted
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `60000`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_VERBOSE
- **Property:** org.highmed.dsf.bpe.fhir.client.local.verbose
- **Required:** No
- **Description:** To enable verbose logging of requests to and replies from the local DSF FHIR server, set to `true`
- **Default:** `false`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_WEBSOCKET_PROXY_PASSWORD or ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_WEBSOCKET_PROXY_PASSWORD_FILE
- **Property:** org.highmed.dsf.bpe.fhir.client.local.websocket.proxy.password
- **Required:** No
- **Description:** Proxy password, set if the DSF BPE server can reach internal servers via websocket, like the getSub server, only through a proxy which requests authentication
- **Recommendation:** Use docker secret file to configure using *ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_WEBSOCKET_PROXY_PASSWORD_FILE*


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_WEBSOCKET_PROXY_URL
- **Property:** org.highmed.dsf.bpe.fhir.client.local.websocket.proxy.url
- **Required:** No
- **Description:** Proxy location, set if the DSF BPE server can reach internal servers via websocket, like the DSF FHIR server, only through a proxy
- **Example:** `http://proxy.foo:8080`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_LOCAL_WEBSOCKET_PROXY_USERNAME
- **Property:** org.highmed.dsf.bpe.fhir.client.local.websocket.proxy.username
- **Required:** No
- **Description:** Proxy username, set if the DSF BPE server can reach internal servers via websocket, like the DSF FHIR server, only through a proxy which requests authentication


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_REMOTE_PROXY_PASSWORD or ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_REMOTE_PROXY_PASSWORD_FILE
- **Property:** org.highmed.dsf.bpe.fhir.client.remote.proxy.password
- **Required:** No
- **Description:** Proxy password, set if the the DSF FHIR server can reach the internet only through a proxy which requests authentication
- **Recommendation:** Use docker secret file to configure using *ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_REMOTE_PROXY_PASSWORD_FILE*


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_REMOTE_PROXY_URL
- **Property:** org.highmed.dsf.bpe.fhir.client.remote.proxy.url
- **Required:** No
- **Description:** Proxy location, set if the DSF BPE server can reach the internet only through a proxy
- **Example:** `http://proxy.foo:8080`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_REMOTE_PROXY_USERNAME
- **Property:** org.highmed.dsf.bpe.fhir.client.remote.proxy.username
- **Required:** No
- **Description:** Proxy username, set if the the DSF BPE server can reach the internet only through a proxy which requests authentication


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_REMOTE_TIMEOUT_CONNECT
- **Property:** org.highmed.dsf.bpe.fhir.client.remote.timeout.connect
- **Required:** No
- **Description:** The timeout in milliseconds until a connection is established with a remote DSF FHIR server
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `5000`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_REMOTE_TIMEOUT_READ
- **Property:** org.highmed.dsf.bpe.fhir.client.remote.timeout.read
- **Required:** No
- **Description:** The timeout in milliseconds until a reading a resource from a remote DSF FHIR server is aborted
- **Recommendation:** Change default value only if timeout exceptions occur
- **Default:** `60000`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_REMOTE_VERBOSE
- **Property:** org.highmed.dsf.bpe.fhir.client.remote.verbose
- **Required:** No
- **Description:** To enable verbose logging of requests to and replies from remote DSF FHIR servers, set to `true`
- **Default:** `false`


### ORG_HIGHMED_DSF_BPE_FHIR_CLIENT_TRUST_CERTIFICATES
- **Property:** org.highmed.dsf.bpe.fhir.client.trust.certificates
- **Required:** Yes
- **Description:** PEM encoded file with one or more trusted root certificates to validate server certificates for https connections to local and remote DSF FHIR servers
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/app_client_trust_certificates.pem`


### ORG_HIGHMED_DSF_BPE_FHIR_QUESTIONNAIRE_RESPONSE_SUBSCRIPTION_SEARCH_PARAMETER
- **Property:** org.highmed.dsf.bpe.fhir.questionnaire.response.subscription.search.parameter
- **Required:** No
- **Description:** Subscription to receive notifications about questionnaire response resources from the DSF FHIR server
- **Default:** `?criteria=QuestionnaireResponse%3Fstatus%3Dcompleted&status=active&type=websocket&payload=application/fhir%2Bjson`


### ORG_HIGHMED_DSF_BPE_FHIR_SERVER_BASE_URL
- **Property:** org.highmed.dsf.bpe.fhir.server.base.url
- **Required:** Yes
- **Description:** The base address of the local DSF FHIR server to read/store fhir resources
- **Example:** `https://foo.bar/fhir`


### ORG_HIGHMED_DSF_BPE_FHIR_SERVER_ORGANIZATION_IDENTIFIER_VALUE
- **Property:** org.highmed.dsf.bpe.fhir.server.organization.identifier.value
- **Required:** Yes
- **Description:** The local identifier value used in the Allow-List
- **Recommendation:** By convention: The shortest possible FQDN that resolve the homepage of the organization
- **Example:** `hospital.com`


### ORG_HIGHMED_DSF_BPE_FHIR_TASK_SUBSCRIPTION_RETRY_MAX
- **Property:** org.highmed.dsf.bpe.fhir.task.subscription.retry.max
- **Required:** No
- **Description:** Number of retries until a websocket connection can be established with the DSF FHIR server, `-1` means infinite number of retries
- **Default:** `-1`


### ORG_HIGHMED_DSF_BPE_FHIR_TASK_SUBSCRIPTION_RETRY_SLEEP
- **Property:** org.highmed.dsf.bpe.fhir.task.subscription.retry.sleep
- **Required:** No
- **Description:** Milliseconds between two retries to establish a websocket connection with the DSF FHIR server
- **Default:** `5000`


### ORG_HIGHMED_DSF_BPE_FHIR_TASK_SUBSCRIPTION_SEARCH_PARAMETER
- **Property:** org.highmed.dsf.bpe.fhir.task.subscription.search.parameter
- **Required:** No
- **Description:** Subscription to receive notifications about task resources from the DSF FHIR server
- **Default:** `?criteria=Task%3Fstatus%3Drequested&status=active&type=websocket&payload=application/fhir%2Bjson`


### ORG_HIGHMED_DSF_BPE_MAIL_CLIENT_CERTIFICATE
- **Property:** org.highmed.dsf.bpe.mail.client.certificate
- **Required:** No
- **Description:** PEM encoded file with client certificate used to authenticate against the SMTP server. Requires SMTP over TLS to be enabled via *ORG_HIGHMED_DSF_BPE_MAIL_USESMTPS*
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/smtp_server_client_certificate.pem`


### ORG_HIGHMED_DSF_BPE_MAIL_CLIENT_CERTIFICATE_PRIVATE_KEY
- **Property:** org.highmed.dsf.bpe.mail.client.certificate.private.key
- **Required:** No
- **Description:** Private key corresponging to the SMTP server client certificate as PEM encoded file. Use ORG_HIGHMED_DSF_BPE_MAIL_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD* or *ORG_HIGHMED_DSF_BPE_MAIL_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE* if private key is encrypted. Requires SMTP over TLS to be enabled via *ORG_HIGHMED_DSF_BPE_MAIL_USESMTPS*
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/smtp_server_client_certificate_private_key.pem`


### ORG_HIGHMED_DSF_BPE_MAIL_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD or ORG_HIGHMED_DSF_BPE_MAIL_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE
- **Property:** org.highmed.dsf.bpe.mail.client.certificate.private.key.password
- **Required:** No
- **Description:** Password to decrypt the local client certificate encrypted private key
- **Recommendation:** Use docker secret file to configure using *ORG_HIGHMED_DSF_BPE_MAIL_CLIENT_CERTIFICATE_PRIVATE_KEY_PASSWORD_FILE*
- **Example:** `/run/secrets/smtp_server_client_certificate_private_key.pem.password`


### ORG_HIGHMED_DSF_BPE_MAIL_FROMADDRESS
- **Property:** org.highmed.dsf.bpe.mail.fromAddress
- **Required:** No
- **Description:** Mail service sender address
- **Example:** `sender@localhost`


### ORG_HIGHMED_DSF_BPE_MAIL_HOST
- **Property:** org.highmed.dsf.bpe.mail.host
- **Required:** No
- **Description:** SMTP server hostname
- **Example:** `smtp.server.de`


### ORG_HIGHMED_DSF_BPE_MAIL_MAILONERRORLOGEVENTBUFFERSIZE
- **Property:** org.highmed.dsf.bpe.mail.mailOnErrorLogEventBufferSize
- **Required:** No
- **Description:** Number of previous INFO, WARN log messages to include in ERROR log event mails (>=0). Requires send mail on ERROR log event option to be enabled to have an effect.
- **Default:** `4`


### ORG_HIGHMED_DSF_BPE_MAIL_MAILONERRORLOGEVENTDEBUGLOGLOCATION
- **Property:** org.highmed.dsf.bpe.mail.mailOnErrorLogEventDebugLogLocation
- **Required:** No
- **Description:** Location of the BPE debug log as displayed in the footer of ERROR log event mails, does not modify the actual location of the debug log file. Requires send mail on ERROR log event option to be enabled to have an effect.
- **Default:** `/opt/bpe/log/bpe.log`


### ORG_HIGHMED_DSF_BPE_MAIL_PASSWORD or ORG_HIGHMED_DSF_BPE_MAIL_PASSWORD_FILE
- **Property:** org.highmed.dsf.bpe.mail.password
- **Required:** No
- **Description:** SMTP server authentication password
- **Recommendation:** Configure if the SMTP server reqiures username/password authentication; use docker secret file to configure using *ORG_HIGHMED_DSF_BPE_MAIL_PASSWORD_FILE*; enable SMTP over TLS via *ORG_HIGHMED_DSF_BPE_MAIL_USESMTPS*


### ORG_HIGHMED_DSF_BPE_MAIL_PORT
- **Property:** org.highmed.dsf.bpe.mail.port
- **Required:** No
- **Description:** SMTP server port
- **Example:** `465`
- **Default:** `0`


### ORG_HIGHMED_DSF_BPE_MAIL_REPLYTOADDRESSES
- **Property:** org.highmed.dsf.bpe.mail.replyToAddresses
- **Required:** No
- **Description:** Mail service reply to addresses; comma or space separated list, YAML block scalars supported
- **Example:** `reply.to@localhost`


### ORG_HIGHMED_DSF_BPE_MAIL_SENDMAILONERRORLOGEVENT
- **Property:** org.highmed.dsf.bpe.mail.sendMailOnErrorLogEvent
- **Required:** No
- **Description:** To enable mails being send for every ERROR logged, set to `true`. Requires SMTP server to be configured.
- **Default:** `false`


### ORG_HIGHMED_DSF_BPE_MAIL_SENDTESTMAILONSTARTUP
- **Property:** org.highmed.dsf.bpe.mail.sendTestMailOnStartup
- **Required:** No
- **Description:** To enable a test mail being send on startup of the BPE, set to `true`. Requires SMTP server to be configured.
- **Default:** `false`


### ORG_HIGHMED_DSF_BPE_MAIL_SMIME_P12KEYSTORE
- **Property:** org.highmed.dsf.bpe.mail.smime.p12Keystore
- **Required:** No
- **Description:** PKCS12 encoded file with S/MIME certificate, private key and certificate chain to enable send mails to be S/MIME signed
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/smime_certificate.p12`


### ORG_HIGHMED_DSF_BPE_MAIL_SMIME_P12KEYSTORE_PASSWORD or ORG_HIGHMED_DSF_BPE_MAIL_SMIME_P12KEYSTORE_PASSWORD_FILE
- **Property:** org.highmed.dsf.bpe.mail.smime.p12Keystore.password
- **Required:** No
- **Description:** Password to decrypt the PKCS12 encoded S/MIMIE certificate file
- **Recommendation:** Use docker secret file to configure using *ORG_HIGHMED_DSF_BPE_MAIL_SMIME_P12KEYSTORE_PASSWORD_FILE*
- **Example:** `/run/secrets/smime_certificate.p12.password`


### ORG_HIGHMED_DSF_BPE_MAIL_TOADDRESSES
- **Property:** org.highmed.dsf.bpe.mail.toAddresses
- **Required:** No
- **Description:** Mail service recipient addresses, configure at least one; comma or space separated list, YAML block scalars supported
- **Example:** `recipient@localhost`


### ORG_HIGHMED_DSF_BPE_MAIL_TOADDRESSESCC
- **Property:** org.highmed.dsf.bpe.mail.toAddressesCc
- **Required:** No
- **Description:** Mail service CC recipient addresses; comma or space separated list, YAML block scalars supported
- **Example:** `cc.recipient@localhost`


### ORG_HIGHMED_DSF_BPE_MAIL_TRUST_CERTIFICATES
- **Property:** org.highmed.dsf.bpe.mail.trust.certificates
- **Required:** No
- **Description:** PEM encoded file with one or more trusted root certificates to validate the server certificate of the SMTP server. Requires SMTP over TLS to be enabled via *ORG_HIGHMED_DSF_BPE_MAIL_USESMTPS*
- **Recommendation:** Use docker secret file to configure
- **Example:** `/run/secrets/smtp_server_trust_certificates.pem`


### ORG_HIGHMED_DSF_BPE_MAIL_USERNAME
- **Property:** org.highmed.dsf.bpe.mail.username
- **Required:** No
- **Description:** SMTP server authentication username
- **Recommendation:** Configure if the SMTP server reqiures username/password authentication; enable SMTP over TLS via *ORG_HIGHMED_DSF_BPE_MAIL_USESMTPS*


### ORG_HIGHMED_DSF_BPE_MAIL_USESMTPS
- **Property:** org.highmed.dsf.bpe.mail.useSmtps
- **Required:** No
- **Description:** To enable SMTP over TLS (smtps), set to `true`
- **Default:** `false`


### ORG_HIGHMED_DSF_BPE_MPI_WEBSERVICE_FACTORY_CLASS
- **Property:** org.highmed.dsf.bpe.mpi.webservice.factory.class
- **Required:** No
- **Description:** Factory for client implementations used to connect to a Master Patient Index (MPI) server in order to read patient demographic data
- **Recommendation:** The default value is a factory for a stub implementation, change to a factory for client implementation that matches the API of your MPI
- **Default:** `org.highmed.mpi.client.stub.MasterPatientIndexClientStubFactory`


### ORG_HIGHMED_DSF_BPE_OPENEHR_WEBSERVICE_FACTORY_CLASS
- **Property:** org.highmed.dsf.bpe.openehr.webservice.factory.class
- **Required:** No
- **Description:** Factory for client implementations used to connect to an openEHR repository in order to read patient medical data
- **Recommendation:** The default value is a factory for a stub implementation, change to a factory for client implementation that matches the API of your openEHR repository
- **Default:** `org.highmed.openehr.client.stub.OpenEhrClientStubFactory`


### ORG_HIGHMED_DSF_BPE_PROCESS_EXCLUDED
- **Property:** org.highmed.dsf.bpe.process.excluded
- **Required:** No
- **Description:** List of process names that should be excluded from deployment during startup of the DSF BPE server; comma or space separated list, YAML block scalars supported
- **Recommendation:** Only deploy processes that can be started depending on your organization's roles in the Allow-List


### ORG_HIGHMED_DSF_BPE_PROCESS_FHIR_SERVER_RETRY_MAX
- **Property:** org.highmed.dsf.bpe.process.fhir.server.retry.max
- **Required:** No
- **Description:** Number of retries until a connection can be established with the local DSF FHIR server during process deployment, `-1` means infinite number of retries
- **Default:** `-1`


### ORG_HIGHMED_DSF_BPE_PROCESS_FHIR_SERVER_RETRY_SLEEP
- **Property:** org.highmed.dsf.bpe.process.fhir.server.retry.sleep
- **Required:** No
- **Description:** Milliseconds between two retries to establish a connection with the local DSF FHIR server during process deployment
- **Default:** `5000`


### ORG_HIGHMED_DSF_BPE_PROCESS_PLUGIN_DIRECTROY
- **Property:** org.highmed.dsf.bpe.process.plugin.directroy
- **Required:** No
- **Description:** Directory containing the DSF BPE process plugins for deployment on startup of the DSF BPE server
- **Recommendation:** Change only if you don't use the provided directory structure from the installation guide or made changes to tit
- **Default:** `process`


### ORG_HIGHMED_DSF_BPE_PROCESS_RETIRED
- **Property:** org.highmed.dsf.bpe.process.retired
- **Required:** No
- **Description:** List of already deployed process names that should be retired during startup of the DSF BPE server; comma or space separated list, YAML block scalars supported
- **Recommendation:** Retire processes that where deployed previously but are not anymore available


### ORG_HIGHMED_DSF_BPE_PSEUDONYMIZATION_WEBSERVICE_FACTORY_CLASS
- **Property:** org.highmed.dsf.bpe.pseudonymization.webservice.factory.class
- **Required:** No
- **Description:** Factory for client implementations used to connect to a pseudonymization service in order to pseudonymize patient demographic and medical data
- **Recommendation:** The default value is a factory for a stub implementation, change to a factory for client implementation that matches the API of your pseudonymization service
- **Default:** `org.highmed.pseudonymization.client.stub.PseudonymizationClientStubFactory`
