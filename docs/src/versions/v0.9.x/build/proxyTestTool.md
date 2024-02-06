---
title: Proxy Test Tool
icon: back-stage
---
 [Build and Test](build.md) | Proxy Test Tool | [Release a new version](releaseANewVersion.md)

---
If the BPE will be deployed behind a proxy, you can test the internet access of the BPE using the tool in `dsf-tools/dsf-tools-proxy-test`.

The proxy test jar takes three input variables:
* args[0]: the base url to test against (e.g. https://www.google.de)
* args[1]: the proxy url to connect to (e.g. http://proxy.klinikum.de:8080) 
* args[1]: the proxy username

The proxy password will be asked as command line input. The name of the main class is `ProxyTest`.

