---
title: Exercise 2 - Input Parameters
icon: slides
---
 [Prerequisites](/oldstable/tutorial/prerequisites.md) | [Exercise 1](/oldstable/tutorial/exercise1-simpleProcess.md) | [Exercise 1.1](/oldstable/tutorial/exercise11-processDebugging.md) | Exercise 2 | [Exercise 3](/oldstable/tutorial/exercise3-messageEvents.md) | [Exercise 4](/oldstable/tutorial/exercise4-exclusiveGateways.md) | [Exercise 5](/oldstable/tutorial/exercise5-eventBasedGateways.md)


# Exercise 2 - Input Parameters
In order to configure processes that are packaged as process plugins, we will take a look at two possibilities on how to pass parameters to a process. The goal of this exercise is to enhance the ``highmedorg_helloDic`` process by trying them both.

#### Introduction
---
DSF process plugins can be configured with input parameters using two different approaches:

- Static configuration using environment variables during the deployment of a process plugin.
- Dynamic configuration by sending values as part of the [Task](http://hl7.org/fhir/R4/task.html) resource to start or continue a process instance.

#### Environment Variables
Environment variables are the same for all running process instances and allow static configuration of processes. They can be defined by adding a member variable having the [Spring-Framework @Value](https://docs.spring.io/spring-framework/docs/current/reference/html/core.html#beans-value-annotations) annotation to the configuration class ``TutorialConfig``. The value of the annotation uses the ``${..}`` notation and follows the form ``${some.property:defaultValue}``, where each dot in the property name corresponds to an underscore in the environment variable and environment variables are always written upper-case. The property ``some.property`` therefore corresponds to the environment variable ``SOME_PROPERTY``.

To create an automated documentation of environment variables during the Maven build process, the DSF provided [@ProcessDocumentation](https://github.com/highmed/highmed-dsf/blob/main/dsf-tools/dsf-tools-documentation-generator/src/main/java/org/highmed/dsf/tools/generator/ProcessDocumentation.java) annotation from the package ``org.highmed.dsf.tools.generator`` can be used. The ``pom.xml`` of the ``tutorial-process`` submodule calls the DSF provided [DocumentGenerator](https://github.com/highmed/highmed-dsf/blob/main/dsf-tools/dsf-tools-documentation-generator/src/main/java/org/highmed/dsf/tools/generator/DocumentationGenerator.java) class from the same package during the prepare-package phase of the build process. The generator searches for all  [@ProcessDocumentation](https://github.com/highmed/highmed-dsf/blob/main/dsf-tools/dsf-tools-documentation-generator/src/main/java/org/highmed/dsf/tools/generator/ProcessDocumentation.java) annotations and generates a Markdown documentation based on the annotation's values in the target folder.

#### Task Input Parameters
Providing input parameters to a specific process instance allows for dynamic configuration of process instances. It can be done by sending additional values as part of the [Task](http://hl7.org/fhir/R4/task.html) resource that starts or continues a process instance. It should be noted that a FHIR profile must be created for each [Task](http://hl7.org/fhir/R4/task.html) resource, i.e. for each message event in a process model, which inherits from the [DSF Task Base Profile](https://github.com/highmed/highmed-dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/highmed-task-base-0.5.0.xml). This base profile defines three default input parameters:

- ``message-name`` (mandatory 1..1): the name of the BPMN message event, same as in the BPMN model
- ``business-key`` (optional 0..1): used to identify process instances
- ``correlation-key``(optional 0..1): used to identify multi-instance process instances used for messaging multiple targets

A later exercise will examine these input parameters and their meaning in more detail.

Since input parameters of [Task](http://hl7.org/fhir/R4/task.html) resources are identified by predefined codes, they are defined via FHIR [CodeSystem](http://hl7.org/fhir/R4/codesystem.html) and [ValueSet](hl7.org/fhir/R4/valueset.html) resources. The [BPMN-Message CodeSystem](https://github.com/highmed/highmed-dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/CodeSystem/highmed-bpmn-message-0.5.0.xml) and the [BPMN-Message ValueSet](https://github.com/highmed/highmed-dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/ValueSet/highmed-bpmn-message-0.5.0.xml) are used in the [DSF Task Base Profile](https://github.com/highmed/highmed-dsf/blob/main/dsf-fhir/dsf-fhir-validation/src/main/resources/fhir/StructureDefinition/highmed-task-base-0.5.0.xml) to define the three default input parameters of [Task](http://hl7.org/fhir/R4/task.html) resources.

#### Version and Release-Date Placeholders
To avoid the need to specify the version and release date for each [CodeSystem](http://hl7.org/fhir/R4/codesystem.html), [StructureDefinition (Task profile)](http://hl7.org/fhir/R4/structuredefinition.html) and [ValueSet](http://hl7.org/fhir/R4/valueset.html) resource, the placeholders ``#{version}`` and ``#{date}`` can be used. They are replaced with the values returned by the methods ``ProcessPluginDefinition#getVersion()`` and ``ProcessPluginDefinition#getReleaseDate()`` respectively during deployment of a process plugin by the DSF BPE server.

Read Access Tag
While writing FHIR resources on the DSF FHIR server is only allowed by the own organization (except [Task](http://hl7.org/fhir/R4/task.html)), rules have to be defined for reading FHIR resources by external organizations (again except [Task](http://hl7.org/fhir/R4/task.html)). The ``Resource.meta.tag`` field is used for this purpose. To allow read access for all organizations (the standard for metadata resources), the following ``read-access-tag`` value can be written into this field:
```xml
<meta>
   <tag>
      <system value="http://highmed.org/fhir/CodeSystem/read-access-tag" />
      <code value="ALL" />
   </tag>
</meta>
```
The read access rules for [Task](http://hl7.org/fhir/R4/task.html) resources are defined through the fields ``Task.requester`` and ``Task.restriction.recipient``. Therefore, no ``read-access-tag`` is needed.

It is also possible to restrict read access of FHIR resources to organizations with a specific role in a consortium or a specific identifier, but this is not covered in the tutorial.

The write access rules for [Task](http://hl7.org/fhir/R4/task.html) resources are defined through the [ActivityDefinition](http://hl7.org/fhir/R4/activitydefinition.html) resources belonging to the process. We will take a look at this in [exercise 3](/oldstable/tutorial/exercise3-messageEvents.md) and [exercise 5](/oldstable/tutorial/exercise5-eventBasedGateways.md).


#### Exercise Tasks
---
1. Add an environment variable to enable/disable logging to the ``TutorialConfig`` class specify the default value as ``false``.
2. Inject the value of the environment variable in to ``HelloDic`` class, by modifying its constructor and using the new field of the ``TutorialConfig`` class.
3. Use the value of the environment variable in the ``HelloDic`` class to decide whether the log message from exercise 1 should be printed.
4. Adapt ``test-setup/docker-compose.yml`` by adding the new environment variable to the service dic-bpe and set the value to ``"true"``.
5. Create a new [CodeSystem](http://hl7.org/fhir/R4/codesystem.html) with url ``http://highmed.org/fhir/CodeSystem/tutorial`` having a concept with code ``tutorial-input``.
6. Create a new [ValueSet](http://hl7.org/fhir/R4/valueset.html) with url ``http://highmed.org/fhir/ValueSet/tutorial`` that includes all concepts from the [CodeSystem](http://hl7.org/fhir/R4/codesystem.html).
7. Add the new [CodeSystem](http://hl7.org/fhir/R4/codesystem.html) and ValueSet resources to the highmedorg_helloDic process in the TutorialProcessPluginDefinition class.
8. Add a new input parameter of type ``string`` to the ``task-hello-dic.xml`` [Task](http://hl7.org/fhir/R4/task.html) profile using the concept of the new [CodeSystem](http://hl7.org/fhir/R4/codesystem.html) as a fixed coding.
9. Read the new input parameter in the ``HelloDic`` class from the "leading" [Task](http://hl7.org/fhir/R4/task.html) and add the value to the log message from exercise 1.
10. Adapt the starter class ``TutorialExampleStarter`` by adding the new input parameter with an arbitrary string.


#### Solution Verification
---
#### Maven Build and Automated Tests

Execute a maven build of the ``dsf-process-tutorial`` parent module via:
```
mvn clean install -Pexercise-2
```
Verify that the build was successful and no test failures occurred.

#### Process Execution and Manual Tests

To verify the ``highmedorg_helloDic`` process can be executed successfully, we need to deploy it into a DSF instance and execute the process. The maven ``install`` build is configured to create a process jar file with all necessary resources and copy the jar to the appropriate locations of the docker test setup.

1. Start the DSF FHIR server for the ``Test_DIC`` organization in a console at location ``.../dsf-process-tutorial/test-setup``:
```
docker-compose up dic-fhir
```
Verify the DSF FHIR server started successfully.

2. Start the DSF BPE server for the ``Test_DIC`` organization in second console at location ``.../dsf-process-tutorial/test-setup``:
```
docker-compose up dic-bpe
```
Verify the DSF BPE server started successfully and deployed the highmedorg_helloDic process.

3. Start the ``highmedorg_helloDic`` process by posting an appropriate FHIR [Task](http://hl7.org/fhir/R4/task.html) resource to the DSF FHIR server of the ``Test_DIC`` organization: Execute the ``main`` method of the ``org.highmed.dsf.process.tutorial.TutorialExampleStarter`` class as in [exercise 1](/oldstable/tutorial/exercise1-simpleProcess.md) to create the [Task](http://hl7.org/fhir/R4/task.html) resource needed to start the ``highmedorg_helloDic`` process.

Verify that the ``highmedorg_helloDic`` process was executed by the DSF BPE server. The BPE server should:
- Print a message showing that the process was started.
- If logging is enabled - print the log message and the value of the input parameter you added to the ``HelloDic`` implementation.
- Print a message showing that the process finished.

Check that you can disable logging of you message by modifying the ``docker-compose.yml`` file and configuring your environment variable with the value ``"false"`` or removing the environment variable.
Note: Changes to environment variable require recreating the docker container.

Also check that modification to the [Task](http://hl7.org/fhir/R4/task.html) input parameter specified in the ``TutorialExampleStarter`` class, have the appropriate effect on your log message.

Continue with [Exercise 3](/oldstable/tutorial/exercise3-messageEvents.md).

---
 [Prerequisites](/oldstable/tutorial/prerequisites.md) | [Exercise 1](/oldstable/tutorial/exercise1-simpleProcess.md) | [Exercise 1.1](/oldstable/tutorial/exercise11-processDebugging.md) | Exercise 2 | [Exercise 3](/oldstable/tutorial/exercise3-messageEvents.md) | [Exercise 4](/oldstable/tutorial/exercise4-exclusiveGateways.md) | [Exercise 5](/oldstable/tutorial/exercise5-eventBasedGateways.md)