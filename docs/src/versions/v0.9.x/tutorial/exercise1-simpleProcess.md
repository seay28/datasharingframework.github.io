---
title: Exercise 1 - Simple Process
icon: slides
---
 [Prerequisites](prerequisites.md) | Exercise 1 | [Exercise 1.1](exercise11-processDebugging.md) | [Exercise 2](exercise2-inputParameters.md) | [Exercise 3](exercise3-messageEvents.md) | [Exercise 4](exercise4-exclusiveGateways.md) | [Exercise 5](exercise5-eventBasedGateways.md)

---

## Exercise 1 - Simple Process

The first exercise focuses on setting up the testing environment used in this tutorial and shows how to implement and execute a simple BPMN process.

With this exercise we will take a look at the general setup of the tutorial code base, modify a service class and execute the service within a simple demo process.

## Introduction
### Tutorial Code Base Structure and Docker Test Setup

The tutorial project consists of three parts: A `test-data-generator` project used to generate X.509 certificates and FHIR resources during the maven build of the project. The certificates and FHIR resources are needed to start DSF instances simulating installations at three different organizations used for this tutorial. The DSF instances are configured using a `docker-compose.yml` file in the `test-setup` folder. The docker-compose test setup uses a single PostgreSQL database server, a single nginx reverse proxy as well as three separate DSF FHIR server- and 3 separate DSF BPE server instances. The `tutorial-process` project contains all resource (FHIR resources, BPMN process models and Java code) for the actual DSF process plugin.

Java code for the `tutorial-process` project is located at `src/main/java`, FHIR resources and BPMN process models at `src/main/resources` as well as prepared JUnit tests to verify your solution at `src/test/java`.

### Process Plugin Main Components

The most imported Java class used to specify the process plugin for the DSF BPE server is a class that implements the `org.highmed.dsf.bpe.ProcessPluginDefinition` interface from the DSF [dsf-bpe-process-base](https://github.com/highmed/highmed-dsf/packages/503054) module. The DSF BPE server searches for classes implementing this interface using the Java [ServiceLoader](https://docs.oracle.com/en/java/javase/11/docs/api/java.base/java/util/ServiceLoader.html) mechanism. For this tutorial the `TutorialProcessPluginDefinition` class implements this interface. It is appropriately specified in the `src/main/resources/META-INF/services/org.highmed.dsf.bpe`.ProcessPluginDefinition file. The `TutorialProcessPluginDefinition` class is used to specify name and version of the process plugin, what BPMN processes are to be deployed and what FHIR resources and required by the BPMN processes. For the implementation of service task and message events of the processes a special Spring context is used for every process plugin. The `TutorialProcessPluginDefinition` class specifies what via [Spring-Framework configuration class](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-java-basic-concepts) with Spring Beans are used for the process plugin specific Spring Context. For this plugin the `TutorialConfig` cass is used to define Spring Beans.

The business process engine used by the DSF BPE server is based on the OpenSource Camunda Process Engine 7. In order to specify what Java code should be executed for a BPMN [ServiceTask](https://docs.camunda.org/manual/7.17/reference/bpmn20/tasks/service-task/) you need to specify the fully-qualified Java class name in the ServiceTask inside the BPMN model. To be executable the Java class needs to extend the `org.highmed.dsf.bpe.delegate.AbstractServiceDelegate` from the DSF [dsf-bpe-process-base](https://github.com/highmed/highmed-dsf/packages/503054) module and the class needs to be defined as as Spring Bean.

### Process Execution and FHIR Task Resources

Business process instances are started or the execution continued via FHIR [Task](http://hl7.org/fhir/R4/task.html) resources. The [Task](http://hl7.org/fhir/R4/task.html) resource specifies what process to instantiate or continue, what organization is requesting this action and what organization is the target for the request. When a [Task](http://hl7.org/fhir/R4/task.html) resource starts a process we call it "leading", when it continues a process it's called "current". This differentiation is important for multi-instance use cases not covered by this tutorial. Each Java class extending the abstract class `org.highmed.dsf.bpe.delegate.AbstractServiceDelegate` has methods to access both types of [Task](http://hl7.org/fhir/R4/task.html) resources.

### Process Access Control

FHIR [ActivityDefinition](http://hl7.org/fhir/R4/activitydefinition.html) resources are used to announce what processes can be instantiated at a given DSF instance. These resources are used by the DSF to specify what profile the [Task](http://hl7.org/fhir/R4/task.html) resource needs to conform to and what BPMN message name is used to correlate the appropriate start or intermediate event within the BPMN model. The [ActivityDefinition](http://hl7.org/fhir/R4/activitydefinition.html) also defines what kind of organization can request the instantiation or continuation of a process instance and what kind of organization are allowed to fulfill the request.

We will take a closer look as [ActivityDefinition](http://hl7.org/fhir/R4/activitydefinition.html) resources in [Exercise 3](/versions/v0.9.x/tutorial/exercise3-messageEvents.md) and [Exercise 5](/versions/v0.9.x/tutorial/exercise5-eventBasedGateways.md).

## Exercise Tasks
1. Add a log message to the ``HelloDic#doExecute`` method that logs the recipient organization identifier from the "leading" Task.
2. Register the ``HelloDic`` class as a singleton bean in the TutorialConfig class.
3. Set the HelloDic class as the service implementation of the appropriate service task within the ``hello-dic.bpmn`` process model.
4. Modify the ActivityDefinition for the ``highmedorg_helloDic`` process to only allow local clients to instantiate the process via a ``helloDic`` message.

## Solution Verification
### Maven Build and Automated Tests

Execute a maven build of the dsf-process-tutorial parent module via:
```
mvn clean install -Pexercise-1
```
Verify that the build was successful and no test failures occurred.

### Process Execution and Manual Tests

To verify the ``highmedorg_helloDic`` process can be executed successfully, we need to deploy it into a DSF instance and execute the process. The maven ``install`` build is configured to create a process jar file with all necessary resources and to copy the jar to the appropriate locations of the docker test setup.

1. Start the DSF FHIR server for the ``Test_DIC`` organization in a console at location ``.../dsf-process-tutorial/test-setup``:
```
docker-compose up dic-fhir
```
Verify the DSF FHIR server started successfully. You can access the webservice of the DSF FHIR server at https://dic/fhir.
The DSF FHIR server uses a server certificate that was generated during the first maven install build. To authenticate yourself to the server you can use the client certificate located at ``.../dsf-process-tutorial/test-data-generator/cert/Webbrowser_Test_User/Webbrowser_Test_User_certificate.p12`` (Password: password). Add the certificate and the generated Root CA to your browser certificate store.

Caution: If you add the generated Root CA to your browsers certificate store as a trusted Root CA, make sure you are the only one with access to the private key at ``.../dsf-process-tutorial/test-data-generator/cert/ca/testca_private-key.pem``.

2. Start the DSF BPE server for the ``Test_DIC`` organization in a second console at location ``.../dsf-process-tutorial/test-setup``:
```
docker-compose up dic-bpe
```
Verify the DSF BPE server started successfully and deployed the highmedorg_helloDic process. The DSF BPE server should print a message that the process was deployed. The DSF FHIR server should now have a new ActivityDefinition resource. Go to https://dic/fhir/ActivityDefinition to check if the expected resource was created by the BPE while deploying the process. The returned FHIR Bundle should contain a single ActivityDefinition. Also, go to https://dic/fhir/StructureDefinition?url=http://highmed.org/fhir/StructureDefinition/task-hello-dic to check if the expected Task profile was created.


3. Start the ``highmedorg_helloDic`` process by posting an appropriate FHIR [Task](http://hl7.org/fhir/R4/task.html) resource to the DSF FHIR server:

The [Task](http://hl7.org/fhir/R4/task.html) resource is used to tell the DSF BPE server via the DSF FHIR server that a specific organization wants to start (or continue) one process instance at a specified organization. The needed [Task](http://hl7.org/fhir/R4/task.html) resource can be generated and posted to the DSF FHIR server by executing the ``main`` method of the ``org.highmed.dsf.process.tutorial.TutorialExampleStarter`` class. For the TutorialExampleStarter to work the location of the client certificate and its password need to be specified:

- Either specify the location and password via program arguments: 1. location of the client certificate (``.../dsf-process-tutorial/test-data-generator/cert/Webbrowser_Test_User/Webbrowser_Test_User_certificate.p12``), 2. password for the client certificate (``password``)
- Or set the environment variables ``DSF_CLIENT_CERTIFICATE_PATH`` and ``DSF_CLIENT_CERTIFICATE_PASSWORD`` with the appropriate values.

Verify that the FHIR [Task](http://hl7.org/fhir/R4/task.html) resource could be created at the DSF FHIR server. The TutorialExampleStarter class should print a message ``HTTP 201: Created`` showing that the [Task](http://hl7.org/fhir/R4/task.html) resource was created.

Verify that the ``highmedorg_helloDic`` process was executed by the DSF BPE server. The BPE server should print a message showing that the process was started, print the log message you added to the ``HelloDic`` class and end with a message showing that the process finished.


Continue with [Exercise 1.1](exercise11-processDebugging.md).