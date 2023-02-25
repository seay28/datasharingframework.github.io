---
title: Code
icon: info
---
## Writing Code

### Code Style
HiGHmed DSF code-style configurations for Eclipse and IntelliJ IDEA can be found here:

    - Eclipse
    - IntelliJ IDEA

Pull Requests are only approved, if the code is formatted according to the code-style configurations above. To format the code with maven before pushing to GitHub, use mvn compile -Pformat-and-sort.

### Git Workflow
Since Release 0.1.0, we follow git-flow as described here.
New features should branch from develop and merged back if done. Hot-Fixes for the latest release will branch of master and will be merged into develop and later into master. A new release will branch of develop for a ramp down phase and will then be merged into master. The new master should merge back into develop to start a new development cycle.

#### Branch Naming:

    - Features: issue/<issue-number>_<issue-name>
    - Hot-Fix: hot-fix/<issue-number>_<issue-name>
    - Release: release/<version>

## Using the Github Maven Package Registry
### Authenticating to GitHub Packages

For more information take a look at this GitHub documentation about authentication.

In order to install the HiGHmed DSF packages using Maven in your own projects you need a personal GitHub access token. This GitHub documentation shows you how to generate one.

After that, add the following configuration to your local .m2/settings.xml. Replace USERNAME with your GitHub username and TOKEN with the previously generated personal GitHub access token. The token needs at least the scope read:packages.

```xml
    <settings xmlns="http://maven.apache.org/SETTINGS/1.0.0"
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0
                      http://maven.apache.org/xsd/settings-1.0.0.xsd">

  <activeProfiles>
    <activeProfile>github</activeProfile>
  </activeProfiles>

  <profiles>
    <profile>
      <id>github</id>
      <repositories>
        <repository>
          <id>github</id>
          <name>GitHub HiGHmed Apache Maven Packages</name>
          <url>https://maven.pkg.github.com/highmed/highmed-dsf</url>
          <releases><enabled>true</enabled></releases>
          <snapshots><enabled>true</enabled></snapshots>
        </repository>
      </repositories>
    </profile>
  </profiles>

  <servers>
    <server>
      <id>github</id>
      <username>USERNAME</username>
      <password>TOKEN</password>
    </server>
  </servers>
</settings>
```
### Installing a Package

For more information take a look at this GitHub documentation about package installation.

To install an Apache Maven package from GitHub Packages edit the element dependencies in the pom.xml file by including the package. This could look as follows to include the dsf-bpe-process-base package (replace VERSION with the package version, e.g. 0.4.0-SNAPSHOT):
```xml
<dependencies>
  <dependency>
    <groupId>org.highmed.dsf</groupId>
    <artifactId>dsf-bpe-process-base</artifactId>
    <version>VERSION</version>
  </dependency>
<dependencies>
```

## Adding FHIR Resources
This wiki entry walks through the steps to add a new FHIR resource to the server
### Database

    dsf-fhir-server > resources > db copy/past one file and change content to new resource (don't forget to allow permanent deletes like in db.questionnaires.changelog-0.6.0.xml)
    dsf-fhir-server > resources > db > db.changelog.xml include new generated db changelog file (are in alphabetic order)
    dsf-fhir-server > resources > db > trigger_functions copy/paste existing functions for insert/update triggers and change content to new resource
    dsf-fhir-server > resources > db > db.read_access.changelog.xml include new generated functions for insert/update triggers (are in alphabetic order)

### JSON/XML Adapter

    dsf-fhir-rest-adapter > java copy/paste existing adapter for json/xml/html and change content to new resource
    dsf-fhir-webservice-client > java > FhirWebserviceClientJersey.java register generated json/xml (not html) adapters according to existing registrations (are in alphabetic order)

### DAO

    dsf-fhir-server > java > dao copy/paste dao interface and change content to new resource
    dsf-fhir-server > java > search > parameters copy/paste a search parameter class based on type of the parameter (extends abstract search parameter type) and change content to new resource (existing search parameters can be found on the resources specification website)
    dsf-fhir-server > java > search > parameters > rev > include copy/paste rev include class and adapt content to resource to be rev included
    dsf-fhir-server > java > search > parameters > user copy/paste a search user filter class and adapt content to new resource
    dsf-fhir-server > java > dao > jdbc copy/paste dao jdbc class and adapt content (add search user filter and parameter)
    dsf-fhir-server > java > spring > config > DaoConfig.java register bean by adding a method according to existing resource bean methods (are in alphabetic order) and add it in the `daoProvider()´ method
    dsf-fhir-server > java > spring > config > EventConfig.java add the new created bean from the DaoConfig to the MatcherFactory according to existing dao's (are in alphabetic order)
    dsf-fhir-server > java > dao > provider > DaoProvider.java add a method similar to the existing one
    dsf-fhir-server > java > dao > provider > DaoProviderImpl.java adapt the class according to the other resource and implement the method similar to the existing ones

### Resolve Resource References if needed

    dsf-fhir-rest-adapter > java > service > ReferenceExtractor.java add a method similar to the existing ones
    dsf-fhir-rest-adapter > java > service > ReferenceExtractorImpl.java implement the method similar to the existing ones

### Authorization

    dsf-fhir-server > java > authorization copy/paste class and change content to new resource
    dsf-fhir-server > java > spring > config > AuthorizationConfig.java register bean by adding a method according to existing resource bean methods (are in alphabetic order) and add it in the authorizationRuleProvider() and the binaryAuthorizationRule() method

### Webservice

    dsf-fhir-server > java > webservice > specification copy/paste interface and change content to new resource
    dsf-fhir-server > java > webservice > impl copy/paste class and change content to new resource
    dsf-fhir-server > java > webservice > jaxrs copy/paste class and change content to new resource
    dsf-fhir-server > java > webservice > secure copy/paste class and change content to new resource
    dsf-fhir-server > java > webservice > impl > ConformanceServiceImpl add new Resource to list and add Search Parameter created above
    dsf-fhir-server > java > spring > config > WebserviceConfig.java register bean by adding a method according to existing resource bean methods (are in alphabetic order)

### Test

    dsf-fhir-server > test-java > dao copy/paste class and change tests to new resource
    dsf-fhir-server > test-java > integration copy/paste class and change tests to new resource and above create search parameters

...