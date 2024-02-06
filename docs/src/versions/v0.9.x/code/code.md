---
title: Writing Code
icon: code
---
 Writing Code | [Using the GitHub Maven Package Registry](usingTheGitHubMaven.md) | [Adding FHIR Resources](addingANewFhirR.md) | [Changing BPMN Processes by Service Task Overwrites](changingBpmnProcesses.md) | [Adding MPI Clients](addingANewMpiClient.md) | [Adding openEHR Clients](addingANewOpenEhrClient.md) | [Eclipse code-style configurations](eclipseContent.md) | [IntelliJ code-style configurations](intelliJContent.md) | [Libraries](libraries.md)
 
---

## Code Style
HiGHmed DSF code-style configurations for Eclipse and IntelliJ IDEA can be found here:

- [Eclipse](eclipseContent.md)
- [IntelliJ IDEA](intelliJContent.md)

Pull Requests are only approved, if the code is formatted according to the code-style configurations above. To format the code with maven before pushing to GitHub, use ``mvn compile -Pformat-and-sort``.

## Git Workflow
Since Release 0.1.0, we follow ``git-flow`` as described [here](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).
New features should branch from ``develop`` and merged back if done. Hot-Fixes for the latest release will branch of ``master`` and will be merged into develop and later into master. A new release will branch of develop for a ramp down phase and will then be merged into master. The new master should merge back into develop to start a new development cycle.

### Branch Naming:
---
- Features: ``issue/<issue-number>_<issue-name>``
- Hot-Fix: ``hot-fix/<issue-number>_<issue-name>``
- Release: ``release/<version>``

