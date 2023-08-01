---
title: Ping Pong Process 
icon: async
---
## Overview
The [ping process plugin](https://github.com/datasharingframework/dsf-process-ping-pong) can be used for (periodic) connection testing between organizations that are part of your DSF allow list. The following figure shows a representation of the process.

![Ping-Pong Process](/photos/info/use-cases/ping-pong.png)

The ping process in is composed of 3 different subprocesses:
## Autostart Ping Process
The autostart ping process is used to execute connection tests in a predefined interval. This subprocess performs the following steps:

- Start a timer with a predefined interval (default 24 h)
- Start the ping process once per interval
- Stop the timer after the current interval completes

## Ping Process
The ping process is used to check outgoing and incoming connections to organizations in your allow-list. This subprocess performs the following steps:

- Select organizations in your allow list that should receive a ping message
- Send ping message to selected organizations
- Receive pong message from selected organizations
- Log status of ping/pong messages
- Log errors if any occur

## Pong Process
The pong process is used to send a response during the connection test to the requesting organization. This subprocess performs the following steps:

- Receive ping message from requesting organizations
- Send pong message to requesting organizations
- Log status of ping/pong message
- Log errors if any occur