---
title: Introduction
icon: info
---
 
The HiGHmed Data Sharing Framework (HiGHmed DSF) implements a distributed process engine based on the BPMN 2.0 and FHIR R4 standards. Within the HiGHmed medical informatics consortium, the DSF is used to support biomedical research with routine data. Every participating site runs a FHIR endpoint (dsf-fhir) accessible by other sites and a business process engine (dsf-bpe) in the local secured network. Authentication between sites is handled using X.509 client/server certificates. The process engines execute BPMN processes in order to coordinate local and remote steps necessary to enable cross-site data sharing and feasibility analyses. This includes access to local data repositories, use-and-access-committee decision support, consent filtering, and privacy preserving record-linkage and pseudonymization.



![DSF Architecture](/dsf_architecture.png)

## Authentication
Authentication of organizations withing the HiGHmed DSF is handled by the use of X.509 client and server certificates. Currently the certificate authorities run by DFN-PKI Global G2, D-Trust via TMF e.V. and GÉANT TCS via DFN are supported. All participating organizations are entered in a distributed and synchronized allow-list of valid organizations and certificates.

A webserver certificate is needed to run the FHIR endpoint and a 802.1X client certificate is used to authenticate against other organizations endpoints and as a server certificate for the business process engine. For available certificate profiles see DFN-PKI-Zertifikatprofile_Global.pdf

## Certificate Requests
### FHIR Endpoint

    Purpose: Server certificate to authenticate the FHIR endpoint on the local network and against other organizations
    Certificate profile:
        DFN-PKI Global G2 via DFN e.V.: Web Server
        D-Trust via TMF e.V.: Advanced SSL ID
        GÉANT TCS via DFN e.V.: Web Server
    Common name: FQDN of the server used while accessing from other organizations (external FQDN)
    Subject alternative DNS entries: Use additional alternative FQDNs if a different name is used while accessing the Server from the local Network (local FQDN)

### Business Process Engine Server

    Purpose: Client certificate to authenticate against remote FHIR endpoints (when either the BPE Server or the FHIR Endpoint Server is acting as a client), server certificate to authenticate the business process engine server on the local network
    Certificate profile:
        DFN-PKI Global G2 via DFN e.V.: 802.1X Client
        D-Trust via TMF e.V.: Basic Team ID
        GÉANT TCS via DFN e.V.: Web Server
    Common name: FQDN of the server used while accessing from the local network (local FQDN)

## Network Setup and General Architecture
The HiGHmed Data Sharing Framework consists of two components: A FHIR Endpoint Server used to except Task resources and provide resources for download by other organizations and a Business Process Engine Server run internal and not accessible by other organization to execute and coordinate processes.

![DSF Network Setup](/highmed_dsf_network_setup.svg)


- FHIR Reverse Proxy: The FHIR Reverse Proxy is used to terminate incoming https connections to the FHIR App Server. The Reverse Proxy needs to be accessible on port 443 from the internet. Incoming https connection will be delegate as http on a docker internal network to the FHIR App Server.
- FHIR App Server: The FHIR App Server is used as a FHIR Endpoint for incoming Task resources and providing resources for download by other organizations. In order to validate incoming FHIR resources the server will communicate with FHIR Servers at other organizations. Access to resources and authorization for creating or updating resources is granted based on the content of the resource and/or based on the client (identified by its client certificate) being part of an allow list. JDBC connections to the FHIR DB Server
- FHIR DB Server: PostgreSQL database for the FHIR App Server.
- BPE App Server: The BPE App Server is executing BPMN 2.0 business processes with the included business process engine. Automatic BPMN service tasks are used for example to check resource, access the PDP- and MPI-servers as well as the MDAT repository. The calculation of record linkage bit vectors (Record Bloom Filters) is also performed using an automatic service task. As of version 0.3.0 the BPE server does not provide any webservices for modifying an server resources.
- BPE DB Server: PostgreSQL database for the BPE App Server.
- PDP: IHE Policy Decision Point for deciding on patient consent.
- MDAT Repo: Repository (e.g. openEHR) for storing medical data (MDAT).
- MPI: IHE Master Patient Index for storing identifying patient date (IDAT) e.g. first name, last name, date of birth.
- Cohort Browser: Example for a system to trigger patient cohort size estimations across multiple organizations.

More information on Client- and Server-Certificates are available on the dedicated wiki page: Authentication: Client/Server Certificates

### Additional Reverse Proxy in external DMZ
In some organizations an additional reverse proxy in an external DMZ is needed. This can be accomplished by using for example nginx or haproxy as a TCP-Proxy. Example configurations routing traffic using SNI can be found below. Configuring an additional reverse proxy to terminate the incoming TLS connection early is not recommended.

![DSF Network Setup with extern DMZ](/highmed_dsf_network_setup_ext_dmz.svg)

nginx
```java
http {
	# ...
}

stream {
	map $ssl_preread_server_name $name {
		fhir.example.com fhir;
	}

	upstream fhir {
		server 192.168.0.1:443;
	}

	server {
		listen 443;
		proxy_pass $name;
		ssl_preread on;
	}
}
```

haproxy
```java
defaults
	timeout connect 5s
	timeout client 30s
	timeout server 30s

frontend ingress
	bind :443
	mode tcp

	tcp-request inspect-delay 5s
	tcp-request content accept if { req_ssl_hello_type 1 }
	use_backend fhir if { req.ssl_sni fhir.example.com }

backend fhir
	mode tcp

	server fhir 192.168.0.1:443
```