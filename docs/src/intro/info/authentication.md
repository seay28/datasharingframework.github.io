---
title: Authentication
icon: lock
---
Authentication of organizations within the DSF is handled by the use of X.509 client and server certificates. Currently the certificate authorities run by [DFN-PKI Global G2](https://www.pki.dfn.de/ueberblick-dfn-pki/), [D-Trust via TMF e.V.](https://www.tmf-ev.de) and [GÉANT TCS via DFN](https://doku.tid.dfn.de/de:dfnpki:start) are supported. All participating organizations are entered in a distributed and synchronized allow-list of valid organizations and certificates.

A webserver certificate is needed to run the FHIR endpoint and a 802.1X client certificate is used to authenticate against other organizations endpoints and as a server certificate for the business process engine. For available certificate profiles see [DFN-PKI-Zertifikatprofile_Global.pdf](https://www.pki.dfn.de/fileadmin/PKI/anleitungen/DFN-PKI-Zertifikatprofile_Global.pdf)

## Certificate Requests
### FHIR Endpoint
* Purpose: Server certificate to authenticate the FHIR endpoint on the local network and against other organizations
* Certificate profile:
  * DFN-PKI Global G2 via DFN e.V.: Web Server
  * D-Trust via TMF e.V.: Advanced SSL ID
  * GÉANT TCS via DFN e.V.: Web Server
* Common name: FQDN of the server used while accessing from other organizations (external FQDN)
* Subject alternative DNS entries: Use additional alternative FQDNs if a different name is used while accessing the Server from the local Network (local FQDN)

### Business Process Engine Server
* Purpose: Client certificate to authenticate against remote FHIR endpoints (when either the BPE Server or the FHIR Endpoint Server is acting as a client), server certificate to authenticate the business process engine server on the local network
* Certificate profile:
  * DFN-PKI Global G2 via DFN e.V.: 802.1X Client
  * D-Trust via TMF e.V.: Basic Team ID
  * GÉANT TCS via DFN e.V.: Web Server
* Common name: FQDN of the server used while accessing from the local network (local FQDN)
