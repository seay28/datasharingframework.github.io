---
title: Changing BPMN Processes by Service Task Overwrites
icon: code
---
> `DEPRECATED SINCE VERSION 0.4.0`

A service task of a process integrated in the framework can be overwritten using the plugin interface. This means that entire processes do not have to be replaced when only individual steps need adaption. An example can be found in the module `dsf-bpe > dsf-bpe-process-plugin-example > dsf-bpe-process-service-overwrite`.

A plugin has as its only dependency the process module which contains the service task to be overwritten.

For a plugin replacing one service task, two new files must be generated:
- A new service task extending the task it overwrites. The method to be overwritten is `doExecute(DelegateExecution execution)`.
- A new configuration file containing a method that has as return type the service task you want to overwrite. This method then returns a Bean of your own implementation of this specific service task. The method has to be annotated with `@Primary`.