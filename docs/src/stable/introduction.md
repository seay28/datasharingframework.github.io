# Introduction

The Data Sharing Framework implements a distributed process engine based on the BPMN 2.0 and FHIR R4 standards. The DSF is used to support biomedical research with routine data. Every participating site runs a FHIR endpoint (dsf-fhir) accessible by other sites and a business process engine (dsf-bpe) in the local secured network. Authentication between sites is handled using X.509 client/server certificates. The process engines execute BPMN processes in order to coordinate local and remote steps necessary to enable cross-site data sharing and feasibility analyses. This includes access to local data repositories, use-and-access-committee decision support, consent filtering, and privacy preserving record-linkage and pseudonymization.

![DSF Architecture](/photos/guideline/introduction/dsf_architecture.png)

::: tip Important note
This is a major DSF release not compatible with 0.9.x and older version developed at https://github.com/highmed/highmed-dsf.
:::

## New features
