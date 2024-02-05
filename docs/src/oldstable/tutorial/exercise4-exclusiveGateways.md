---
title: Exercise 4 - Exclusive Gateways
icon: slides
---
 [Prerequisites](/oldstable/tutorial/prerequisites.md) | [Exercise 1](/oldstable/tutorial/exercise1-simpleProcess.md) | [Exercise 1.1](/oldstable/tutorial/exercise11-processDebugging.md) | [Exercise 2](/oldstable/tutorial/exercise2-inputParameters.md) | [Exercise 3](/oldstable/tutorial/exercise3-messageEvents.md) | Exercise 4 | [Exercise 5](/oldstable/tutorial/exercise5-eventBasedGateways.md)
 
#  Exercise 4 - Exclusive Gateways
Different execution paths in a process based on the state of process variables can be achieved using Exclusive Gateways. In Exercise 4 we will examine how this can be implemented by modifying the ``highmedorg_helloDic`` process.

#### Introduction
---
#### Exclusive Gateways

Different sequence flows during the execution of a process instance can be modeled using BPMN [Exclusive Gateways](https://docs.camunda.org/manual/7.4/reference/bpmn20/gateways/exclusive-gateway/). For each outgoing sequence flow of the gateway, a BPMN [Condition Expression](https://docs.camunda.org/manual/7.17/user-guide/process-engine/expression-language/#conditions) can be added to the process model, deciding whether a sequence flow should be followed. Thereby, all condition decisions must be in an XOR relationship to each other.

#### Condition Expressions

A BPMN [Condition Expression](https://docs.camunda.org/manual/7.17/user-guide/process-engine/expression-language/#conditions) uses the ``${..}`` notation. Within the curly braces all execution variables of a process instance can be accessed, e.g. the ones that were stored in a previous Java implementation of a BPMN [ServiceTask](https://docs.camunda.org/manual/7.17/reference/bpmn20/tasks/service-task/). For example, the BPMN [Condition Expression](https://docs.camunda.org/manual/7.17/user-guide/process-engine/expression-language/#conditions) ``${cohortSize > 100}`` checks whether the value in the execution variable *cohortSize* is greater than 100.

#### Storing / Modifying Process Variables

Via the ``DelegateExecution execution`` parameter of the ``doExecute`` method of a class extending ``AbstractServiceDelegate``, we can write and read process variables of the current process instance. The following code listing show how to write and read a ``boolean`` variable:
```
{
	execution.setVariable("variable-name", Variables.booleanValue(false));
	boolean variable = (boolean) execution.getVariable("variable-name");
}
```
For more details on process variables see the [Camunda documentation](https://docs.camunda.org/manual/7.17/user-guide/process-engine/variables/).

#### Exercise Tasks
---

1. In the ``HelloDic`` class, write an algorithm deciding based on the "leading" Task's input parameter ``tutorial-input``, whether the ``highmedorg_helloCos`` process should be started.
2. Add a boolean variable to the process instance execution variables storing the decision.
3. Add an exclusive gateway to the ``highmedorg_helloDic`` process model and two outgoing sequence flows - the first starting process ``highmedorg_helloDic``, the second stopping process ``highmedorg_helloDic`` without starting process ``highmedorg_helloCos``.
4. Add a condition expressions to each outgoing sequence flow based on the previously stored execution variable.

#### Solution Verification
--- 
#### Maven Build and Automated Tests

Execute a maven build of the dsf-process-tutorial parent module via:
```
mvn clean install -Pexercise-4
```
Verify that the build was successful and no test failures occurred.

#### Process Execution and Manual Tests

To verify the ``highmedorg_helloDic`` and ``highmedorg_helloCos`` processes can be executed successfully, we need to deploy them into DSF instances and execute the ``highmedorg_helloDic`` process. The maven ``install`` build is configured to create a process jar file with all necessary resources and copy the jar to the appropriate locations of the docker test setup.

1. Start the DSF FHIR server for the ``Test_DIC`` organization in a console at location ``.../dsf-process-tutorial/test-setup``:
```
docker-compose up dic-fhir
```
Verify the DSF FHIR server started successfully.

2. Start the DSF BPE server for the ``Test_DIC`` organization in a second console at location ``.../dsf-process-tutorial/test-setup``:
```
docker-compose up cos-fhir
```
Verify the DSF FHIR server started successfully.

3. Start the DSF BPE server for the ``Test_COS`` organization in a fourth console at location ``.../dsf-process-tutorial/test-setup``:
```
docker-compose up cos-bpe
```
Verify the DSF BPE server started successfully and deployed the ``highmedorg_helloCos`` process.

4. Start the ``highmedorg_helloDic`` process by posting a specific FHIR [Task](http://hl7.org/fhir/R4/task.html) resource to the DSF FHIR server of the ``Test_DIC`` organization: Execute therefore the ``main`` method of the ``org.highmed.dsf.process.tutorial.TutorialExampleStarter`` class to create the [Task](http://hl7.org/fhir/R4/task.html) resource needed to start the ``highmedorg_helloDic`` process.

Verify that the ``highmedorg_helloDic`` process was executed successfully by the ``Test_DIC`` DSF BPE server and possibly the ``highmedorg_helloCos`` process by the ``Test_COS`` DSF BPE server, depending on whether decision of your algorithm based on the input parameter allowed to start the ``highmedorg_helloDic`` process.


Continue with [exercise 5](/oldstable/tutorial/exercise5-eventBasedGateways.md)




---
 [Prerequisites](/oldstable/tutorial/prerequisites.md) | [Exercise 1](/oldstable/tutorial/exercise1-simpleProcess.md) | [Exercise 1.1](/oldstable/tutorial/exercise11-processDebugging.md) | [Exercise 2](/oldstable/tutorial/exercise2-inputParameters.md) | [Exercise 3](/oldstable/tutorial/exercise3-messageEvents.md) | Exercise 4 | [Exercise 5](/oldstable/tutorial/exercise5-eventBasedGateways.md)