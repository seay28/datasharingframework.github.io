---
title: Adding MPI Clients
icon: code
---
 [Writing Code](code.md) | [Using the GitHub Maven Package Registry](usingTheGitHubMaven.md) | [Adding FHIR Resources](addingANewFhirR.md) | [Changing BPMN Processes by Service Task Overwrites](changingBpmnProcesses.md) | Adding MPI Clients | [Adding openEHR Clients](addingANewOpenEhrClient.md) | [Eclipse code-style configurations](eclipseContent.md) | [IntelliJ code-style configurations](intelliJContent.md) | [Libraries](libraries.md)
 
---

The Master Patient Index (MPI) client that will be used by the Business Process Engine (BPE) is determined by the property `org.highmed.dsf.bpe.mpi.webservice.factory.class` and loaded using a service loader, which searches for a class of type [`MasterPatientIndexClientFactory`](https://github.com/highmed/highmed-dsf/blob/master/dsf-mpi/dsf-mpi-client/src/main/java/org/highmed/mpi/client/MasterPatientIndexClientFactory.java) on startup of the BPE.

The framework currently includes an MPI client using the IHE PDQ interface, also supporting client certificate authentication. To use it, add the jar of the `dsf-mpi-client-pdq` module to the `plugin` configuration folder and set the property value to `org.highmed.mpi.client.pdq.MasterPatientIndexClientPdqFactory`.  

To implement a new MPI client, the following has to be taken into account:
* The plugin needs to supply an MPI client factory implementing the interface [`MasterPatientIndexClientFactory`](https://github.com/highmed/highmed-dsf/blob/master/dsf-mpi/dsf-mpi-client/src/main/java/org/highmed/mpi/client/MasterPatientIndexClientFactory.java) from the [`dsf-mpi-client`](https://github.com/highmed/highmed-dsf/tree/master/dsf-mpi/dsf-mpi-client) module.
* The resources folder must contain a file with the name `META-INF/services/org.highmed.mpi.client.MasterPatientIndexClientFactory` containing the name of the new MPI client factory including the full package name.
* The client needs to implement the interface [`MasterPatientIndexClient`](https://github.com/highmed/highmed-dsf/blob/master/dsf-mpi/dsf-mpi-client/src/main/java/org/highmed/mpi/client/MasterPatientIndexClient.java). The interface defines a method returning instances of the interface [`Idat`](https://github.com/highmed/highmed-dsf/blob/master/dsf-mpi/dsf-mpi-client/src/main/java/org/highmed/mpi/client/Idat.java) based on patient-ids used within the openEHR repository.

An example of an MPI client implementation can be found in the [`dsf-mpi-client-pdq`](https://github.com/highmed/highmed-dsf/tree/master/dsf-mpi/dsf-mpi-client-pdq) module.