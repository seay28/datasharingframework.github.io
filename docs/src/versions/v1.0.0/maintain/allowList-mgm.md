---
title: Allow List Management
icon: share
---

:::danger
This is an outdated version of the Allow List Management documentation. Please use [the current version](/stable//maintain/allowList-mgm), even if you use an outdated DSF version.
:::

You can read all about the concept of Allow Lists [here](/introduction/info/allowList.md).

# Overview
To simplify the DSF Allow List Management we have built a portal for administration. The portal is managed by the Gecko Institute at Heilbronn University. You as an DSF administrator can create or update your Allow List information. The information you provide on this portal will be transferred to us and will be used to built Allow List bundles that get distributed to the communication partners of the distributed processes. 

The DSF Allow List management tool uses client certificates for authentication. You can either use your personal client certificate or the client certificate from your DSF BPE, which needs to be added to your webbrowser. For instructions on how to add a client certificate to your browser, please follow <a href="https://www.ssl.com/how-to/configuring-client-authentication-certificates-in-web-browsers/">here</a>.
Currently, the Allow List Management Tool is only for DSF <b>TEST</b> infrastructure. For production, please write us an <a href="mailto:dsf-gecko@hs-heilbronn.de">E-Mail</a> with your information.

# Prerequisites
1. Deployed DSF instance (test infrastructure)
    1.1  If none exists yet, read [here](install)
2. Certificate 
    2.1  If none exists yet, read [here](install#client-server-certificates)
3. Organization identifier (FQDN of your organization, e.g. *hs-heilbronn.de*)
4. FHIR Endpoint URL (e.g. *https://gth.gecko.hs-heilbronn.de/fhir* )
5. Contact details from a responsible person of your organization
6. Access to the E-Mail address from your organization for verification 
 

# Start here
When you have fulfilled all the prerequisites, you can start managing your Allow Lists on the <a href="https://allowlist-test.gecko.hs-heilbronn.de/">DSF Allow List Management Tool</a>.
At the beginning, a popup will appear where you have to select your certificate. Only then you will have access to the website.