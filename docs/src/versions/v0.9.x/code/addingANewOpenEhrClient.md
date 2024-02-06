---
title: Adding openEHR Clients
icon: code
---
 [Writing Code](code.md) | [Using the GitHub Maven Package Registry](usingTheGitHubMaven.md) | [Adding FHIR Resources](addingANewFhirR.md) | [Changing BPMN Processes by Service Task Overwrites](changingBpmnProcesses.md) | [Adding MPI Clients](addingANewMpiClient.md) | Adding openEHR Clients | [Eclipse code-style configurations](eclipseContent.md) | [IntelliJ code-style configurations](intelliJContent.md) | [Libraries](libraries.md)
 
---

The openEHR client that will be used by the Business Process Engine (BPE) is determined by the property `org.highmed.dsf.bpe.openehr.webservice.factory.class` and loaded using a service loader, which searches for a class of type [`OpenEhrClientFactory`](https://github.com/highmed/highmed-dsf/blob/master/dsf-openehr/dsf-openehr-client/src/main/java/org/highmed/openehr/client/OpenEhrClientFactory.java) on startup of the BPE.

The framework currently includes an openEHR Jersey REST client using basic authentication. To use it, add the jar of the `dsf-openehr-client-impl` module to the `plugin` configuration folder and set the property value to `org.highmed.openehr.client.impl.OpenEhrClientJerseyFactory`.  

To implement a new openEHR client, the following has to be taken into account:
* The plugin needs to supply an openEHR client factory implementing the interface [`OpenEhrClientFactory`](https://github.com/highmed/highmed-dsf/blob/master/dsf-openehr/dsf-openehr-client/src/main/java/org/highmed/openehr/client/OpenEhrClientFactory.java) from the [`dsf-openehr-client`](https://github.com/highmed/highmed-dsf/tree/master/dsf-openehr/dsf-openehr-client) module.
* The resources folder must contain a file with the name `META-INF/services/org.highmed.openehr.client.OpenEhrClientFactory` containing the name of the new openehr client factory including the full package name.
* The client needs to implement the interface [`OpenEhrClient`](https://github.com/highmed/highmed-dsf/blob/master/dsf-openehr/dsf-openehr-client/src/main/java/org/highmed/openehr/client/OpenEhrClient.java). The interface defines a method executing an openEHR query returning an instance of an openEHR [`ResultSet`](https://github.com/highmed/highmed-dsf/blob/master/dsf-openehr/dsf-openehr-model/src/main/java/org/highmed/openehr/model/structure/ResultSet.java).

An example of an openEHR client implementation can be found in the [`dsf-openehr-client-impl`](https://github.com/highmed/highmed-dsf/tree/master/dsf-openehr/dsf-openehr-client-impl) module.