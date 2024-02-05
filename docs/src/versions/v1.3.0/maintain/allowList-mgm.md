---
title: Allow List Management
icon: share
---
---

You can read all about the concept of Allow Lists [in our introduction](/introduction/info/allowList.md).

# Overview
To simplify the DSF Allow List Management we have built a portal for administration. The portal is managed by the Gecko Institute at Heilbronn University. You as an DSF administrator can create or update your Allow List information. The information you provide on this portal will be transferred to us and will be used to built Allow List bundles that get distributed to the communication partners of the distributed processes. 

The DSF Allow List management tool uses client certificates for authentication. You can either use your personal client certificate or the client certificate from your DSF BPE, which needs to be added to your webbrowser. For instructions on how to add a client certificate to your browser, please follow <a href="https://www.ssl.com/how-to/configuring-client-authentication-certificates-in-web-browsers/">here</a>.


# Prerequisites
1. Deployed DSF instance (test or production infrastructure)
    1.1  If none exists yet, read [the installation guide](install)
2. Certificate 
    2.1  If none exists yet, read [the certificate requirements](install#client-server-certificates)
3. Organization identifier (FQDN of your organization website, e.g. *hs-heilbronn.de*)
4. FHIR Endpoint URL (e.g. *https://gth.gecko.hs-heilbronn.de/fhir* )
5. Contact details from a responsible person of your organization
6. Access to the E-Mail address from your organization for verification 
 

# Start here
When you have fulfilled all the prerequisites, you can start managing your Allow Lists respective Allow List Management Tool.

<a href="https://allowlist-test.gecko.hs-heilbronn.de/">Click here to open the DSF Allow List Management Tool for the **Test** infrastructure</a>.

<a href="https://allowlist.gecko.hs-heilbronn.de/">Click here to open the DSF Allow List Management Tool for the **Production** infrastructure</a>.

We use different colors for the DSF Allow List Management Tools in the **Test** (green) and **Production** (blue) infastructure. 


At the beginning, a popup will appear where you have to select your certificate. Only then you will have access to the website.