---
title: Network Setup and General Architecture
icon: customize
---
 [Introduction](introduction.md) | [Basics and Standards](basics.md) | [Architecture](architecture.md) | [Security by Design](securityDesign.md) | [Allow Lists](allowList.md) | [Process Plugins](process-plugins.md) | Network Setup and General Architecture

---

The Data Sharing Framework consists of two components: A FHIR Endpoint Server used to except Task resources and provide resources for download by other organizations and a Business Process Engine Server run internal and not accessible by other organization to execute and coordinate processes.

![Network Setup Diagramm](/photos/guideline/generalInformation/highmed_dsf_network_setup.svg)

- FHIR Reverse Proxy: The FHIR Reverse Proxy is used to terminate incoming https connections to the FHIR App Server. The Reverse Proxy needs to be accessible on port 443 from the internet. Incoming https connection will be delegate as http on a docker internal network to the FHIR App Server.
- FHIR App Server: The FHIR App Server is used as a FHIR Endpoint for incoming Task resources and providing resources for download by other organizations. In order to validate incoming FHIR resources the server will communicate with FHIR Servers at other organizations. Access to resources and authorization for creating or updating resources is granted based on the content of the resource and/or based on the client (identified by its client certificate) being part of an allow list. JDBC connections to the FHIR DB Server
- FHIR DB Server: PostgreSQL database for the FHIR App Server.
- BPE App Server: The BPE App Server is executing BPMN 2.0 business processes with the included business process engine. Automatic BPMN service tasks are used for example to check resource, access the PDP- and MPI-servers as well as the MDAT repository. The calculation of record linkage bit vectors (Record Bloom Filters) is also performed using an automatic service task. As of version 0.3.0 the BPE server does not provide any webservices for modifying an server resources.
- BPE DB Server: PostgreSQL database for the BPE App Server.
- PDP: IHE Policy Decision Point for deciding on patient consent.
- MDAT Repo: Repository (e.g. openEHR) for storing medical data (MDAT).
- MPI: IHE Master Patient Index for storing identifying patient date (IDAT) e.g. first name, last name, date of birth.
- Cohort Browser: Example for a system to trigger patient cohort size estimations across multiple organizations.

More information on Client- and Server-Certificates are available on the dedicated wiki page: [Authentication: Client/Server Certificates](Authentication)

## Additional Reverse Proxy in external DMZ
In some organizations an additional reverse proxy in an external DMZ is needed. This can be accomplished by using for example nginx or haproxy as a TCP-Proxy. Example configurations routing traffic using SNI can be found below. Configuring an additional reverse proxy to terminate the incoming TLS connection early is not recommended.

![Network Setup Diagramm](/photos/guideline/generalInformation/highmed_dsf_network_setup_ext_dmz.svg)

<!--
**nginx**
```
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

**haproxy**
```
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
-->