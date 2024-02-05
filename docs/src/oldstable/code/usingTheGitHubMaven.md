---
title: Using the Github Maven Package Registry
icon: code
---
# Authenticating to GitHub Packages

For more information take a look at this GitHub documentation about [authentication](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry#authenticating-to-github-packages).

In order to install the HiGHmed DSF packages using Maven in your own projects you need a personal GitHub access token. This [GitHub documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) shows you how to generate one.

After that, add the following configuration to your local .m2/settings.xml. Replace ``USERNAME`` with your GitHub username and ``TOKEN`` with the previously generated personal GitHub access token. The token needs at least the scope ``read:packages``.

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
# Installing a Package
For more information take a look at this GitHub documentation about [package installation](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-apache-maven-registry#installing-a-package).

To install an Apache Maven package from GitHub Packages edit the element ``dependencies`` in the *pom.xml* file by including the package. This could look as follows to include the ``dsf-bpe-process-base`` package (replace ``VERSION`` with the package version, e.g. ``0.4.0-SNAPSHOT``):
```xml
<dependencies>
  <dependency>
    <groupId>org.highmed.dsf</groupId>
    <artifactId>dsf-bpe-process-base</artifactId>
    <version>VERSION</version>
  </dependency>
<dependencies>
```
