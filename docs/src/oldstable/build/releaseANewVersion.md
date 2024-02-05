---
title: Release a new version
icon: back-stage
---
# Release a new final version

1. Write release notes
2. Create new release/x.y.z branch from develop
3. Remove `-SNAPSHOT` from version in pom.xml files
4. Change status from `draft` to `active` and update dates, verify versions in FHIR resources
5. Update `version` and `date-released` in CITATION.cff 
6. Push branch release/x.y.z
7. Create pull request (release/x.y.z -> main)
8. Build maven
9. Build docker images and run manual tests in 3MeDIC/TTP test setup
10. Execute [trivy](https://aquasecurity.github.io/trivy/) and check CVEs for the docker images
11. Merge release/x.y.z into main
12. Git tag main branch
13. Push main branch (including Git tag)
14. Build maven
15. Run multi-arch docker build (including push)
16. Update release notes with docker links, check Git tag
17. Publish release notes
18. Create 'start next development cycle' issue and branch
19. Merge main into issue branch
20. Increase version
21. Merge next development cycle issue branch into develop via PR

# Release a new candidate version

1. Write release notes
2. Create new release/x.y.z-RC# branch from develop
3. Replace `-SNAPSHOT` in versions with `-RC#` in pom.xml files
4. Change status from `draft` to `active` and update dates, verify versions in FHIR resources
5. Update `version` and `date-released` in CITATION.cff 
6. Git tag release/x.y.z-RC# branch
7. Build maven
8. Build docker images and run manual tests in 3MeDIC/TTP test setup
9. Execute [trivy](https://aquasecurity.github.io/trivy/) and check CVEs for the docker images
10. Push release/x.y.z-RC# branch (including Git tag)
11. Run multi-arch docker build (including push)
12. Update release notes with docker links, check Git tag
13. Publish release notes