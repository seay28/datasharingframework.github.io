---
title: DSF Process Plugin Tutorial
icon: slides
---
## Implementing BPMN Processes as DSF Process-Plugins

This [repository](https://github.com/highmed/dsf-process-tutorial) contains exercises to learn how to implement process plugins for the [Data Sharing Framework (DSF)](https://github.com/highmed/highmed-dsf). The tutorial is divided into several exercises that build on each other. For each exercise, a sample solution is provided in a separate branch.
This tutorial was first executed at the [GMDS / TMF 2022](https://gmds-tmf-2022.de/) conference. A recording of the opening remarks by H. Hund and R. Wettstein can be found on [YouTube](https://gmds-tmf-2022.de/). The slides of the opening remarks are available as a [PDF download](https://raw.githubusercontent.com/highmed/dsf-process-tutorial/main/exercises/figures/2022-08-21_GMDS_2022_DSF_Process_Tutorial.pdf).

### Prerequisites
---
In order to be able to solve the exercises described in this tutorial a software development environment with git, Java 11, Maven 3.8, Docker, docker-compose, a Java IDE like Eclipse or IntelliJ, a BPMN Editor like the Camunda Modeler and a minimum 16GB of RAM is needed. For more details see the [detailed prerequisites document](/stable/guideline/tutorial/prerequisites.md).

### Exercise 1 - Simple Process
---
The first exercise focuses on setting up the testing environment used in this tutorial and shows how to implement and execute a simple BPMN process. For more details see the [exercise 1 description](/stable/guideline/tutorial/exercise1-simpleProcess.md).

#### Exercise 1.1 - Process Debugging
---
Exercise 1.1 looks at how to use the Java debugger of your IDE to remote debug the execution of a process plugin. For more details see the [exercise 1.1 description](/stable/guideline/tutorial/exercise11-processDebugging.md).

### Exercise 2 - Input Parameters
---
In order to configure processes that are packaged as process plugins, we will take a look at two possibilities on how to pass parameters to a process. For more details see the [exercise 2 description](/stable/guideline/tutorial/exercise2-inputParameters.md).

### Exercise 3 - Message Events
---
Communication between organizations is modeled using message flow in BPMN processes. The third exercise shows how a process at one organization can trigger a process at another organization. For more details see the [exercise 3 description](/stable/guideline/tutorial/exercise3-messageEvents.md).

### Exercise 4 - Exclusive Gateways
---
Different execution paths in a process based on the state of process variables can be achieved using Exclusive Gateways. In Exercise 4 we will examine how this can be implemented. For more details see the [exercise 4 description](/stable/guideline/tutorial/exercise4-exclusiveGateways.md).

### Exercise 5 - Event Based Gateways and Intermediate Events
---
In the final exercise we will look at message flow between three organizations as well as how to continue a waiting process if no return message arrives. For more details see the [exercise 5 description](/stable/guideline/tutorial/exercise5-eventBasedGateways.md).

---
 [Prerequisites](/stable/guideline/tutorial/prerequisites.md) | [Exercise 1](/stable/guideline/tutorial/exercise1-simpleProcess.md) | [Exercise 1.1](/stable/guideline/tutorial/exercise11-processDebugging.md) | [Exercise 2](/stable/guideline/tutorial/exercise2-inputParameters.md) | [Exercise 3](/stable/guideline/tutorial/exercise3-messageEvents.md) | [Exercise 4](/stable/guideline/tutorial/exercise4-exclusiveGateways.md) | [Exercise 5](/stable/guideline/tutorial/exercise5-eventBasedGateways.md)