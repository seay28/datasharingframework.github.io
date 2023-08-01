---
title: Allow Lists
icon: share
---

## Goal
The main objective is to allow only authorised organisations to do what "we" allow them to do (e.g. query data).
First, we need a list of organisations that we trust. Secondly, we need a way to ensure that the other party is a member of the parent organisation (certificates). Thirdly, a list of actions we want to allow the organisation to perform is needed. An organisation can have different roles in different use cases. 

A Allow List consists of the organisation-, endpoint- andorganisationAffiliation- resources. Additionally the allow list defines the participation, the communication partners and the roles of each organisation as well as the superordinate organisation. Each organisation / DSF FHIR server has their own allow list. To make sure that processes work, both parties must allow each other in their allow list.

![Architecture](/photos/info/allowList/allowList-architecture.png#light)
> TODO: image in dark mode

## Organisation Resource
![Example of a organisation resource](/photos/info/allowList/org-resource.png)

> TODO: Evtl. rauslassen?

## Handling
The parent organisation will provide their participants „their allow list“:
- On change (e.g. new client certificate / new organisation)
- Organization will tell the change the parent organisation
- Parent organization will review the change request & update the allow list
- All affected organisations have to update their allow list
