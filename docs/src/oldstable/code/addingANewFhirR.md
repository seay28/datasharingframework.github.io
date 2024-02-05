---
title: Adding FHIR Resources
icon: code
---
This wiki entry walks through the steps to add a new FHIR resource to the server
# Database

- ``dsf-fhir-server > resources > db`` copy/past one file and change content to new resource (don't forget to allow permanent deletes like in ``db.questionnaires.changelog-0.6.0.xml``)
- ``dsf-fhir-server > resources > db > db.changelog.xml`` include new generated db changelog file (are in alphabetic order)
- ``dsf-fhir-server > resources > db > trigger_functions`` copy/paste existing functions for insert/update triggers and change content to new resource
- ``dsf-fhir-server > resources > db > db.read_access.changelog.xml`` include new generated functions for insert/update triggers (are in alphabetic order)

# JSON/XML Adapter
- ``dsf-fhir-rest-adapter > java`` copy/paste existing adapter for json/xml/html and change content to new resource
- ``dsf-fhir-webservice-client > java > FhirWebserviceClientJersey.java``register generated json/xml (not html) adapters according to existing registrations (are in alphabetic order)

# DAO
- ``dsf-fhir-server > java > dao`` copy/paste dao interface and change content to new resource
- ``dsf-fhir-server > java > search > parameters`` copy/paste a search parameter class based on type of the parameter (extends abstract search parameter type) and change content to new resource (existing search parameters can be found on the resources specification website)
- ``dsf-fhir-server > java > search > parameters > rev > include`` copy/paste rev include class and adapt content to resource to be rev included
- ``dsf-fhir-server > java > search > parameters > user`` copy/paste a search user filter class and adapt content to new resource
- ``dsf-fhir-server > java > dao > jdbc copy/paste dao jdbc`` class and adapt content (add search user filter and parameter)
- ``dsf-fhir-server > java > spring > config > DaoConfig.java`` register bean by adding a method according to existing resource bean methods (are in alphabetic order) and add it in the `daoProvider()´ method
- ``dsf-fhir-server > java > spring > config > EventConfig.java`` add the new created bean from the ``DaoConfig`` to the ``MatcherFactory`` according to existing dao's (are in alphabetic order)
- ``dsf-fhir-server > java > dao > provider > DaoProvider.java`` add a method similar to the existing one
- ``dsf-fhir-server > java > dao > provider > DaoProviderImpl.java`` adapt the class according to the other resource and implement the method similar to the existing one

# Resolve Resource References if needed
- ``dsf-fhir-rest-adapter > java > service > ReferenceExtractor.java`` add a method similar to the existing ones
- ``dsf-fhir-rest-adapter > java > service > ReferenceExtractorImpl.java`` implement the method similar to the existing ones

# Authorization
- ``dsf-fhir-server > java > authorization`` copy/paste class and change content to new resource
- ``dsf-fhir-server > java > spring > config > AuthorizationConfig.java`` register bean by adding a method according to existing resource bean methods (are in alphabetic order) and add it in the ``authorizationRuleProvider()`` and the ``binaryAuthorizationRule()`` method

# Webservice

* `dsf-fhir-server > java > webservice > specification` copy/paste interface and change content to new resource
* `dsf-fhir-server > java > webservice > impl` copy/paste class and change content to new resource
* `dsf-fhir-server > java > webservice > jaxrs` copy/paste class and change content to new resource
* `dsf-fhir-server > java > webservice > secure` copy/paste class and change content to new resource
* `dsf-fhir-server > java > webservice > impl > ConformanceServiceImpl` add new Resource to list and add Search Parameter created above 
* `dsf-fhir-server > java > spring > config > WebserviceConfig.java` register bean by adding a method according to existing resource bean methods (are in alphabetic order)

# Test
* `dsf-fhir-server > test-java > dao` copy/paste class and change tests to new resource
* `dsf-fhir-server > test-java > integration` copy/paste class and change tests to new resource and above create search parameters

