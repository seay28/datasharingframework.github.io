---
title: Security
icon: safe
---
 [Documentation](docs/README.md) | [Use-Cases](use-cases/README.md) | [Publications and Talks](publications.md) | Security | [Tutorials](tutorials/README.md)

---

We take security of the DSF, its process plugins, services and tools we operate very seriously.

We describe the security mechanisms used by the DSF to implement secure communication on the pages [Architecture](/introduction/docs/architecture), [Security](/introduction/docs/securityDesign) and [Allow List](/introduction/docs/allowList).

To ensure a high level of security, you should always install the latest DSF version and use the latest versions of the process plugins. Use the [instructions to install](https://dsf.dev/stable/maintain/install.html) the latest version of the DSF or [to upgrade](https://dsf.dev/stable/maintain/upgrade-from-1.html) on the latest version. The instructions described there implement the security configuration recommended by us.

It is also important that you ensure a secure operating environment in which you verify firewall configurations, keep the operating systems on which the DSF is running up to date and harden it according to the latest state of the art.

## <b>Security vulnerability disclosure policy</b>
### Our commitment to security

We as the DSF development team take security of our software, services and data very seriously. We understand that despite our best efforts, vulnerabilities can exist. To address this, we encourage responsible reporting of any security vulnerabilities discovered in our software and systems.

### Responsible disclosure

We kindly ask security researchers and the general public to follow the principles of *Coordinated Vulnerability Disclosure (CVD)* or *Responsible Disclosure* when reporting vulnerabilities to us. This approach helps us to mitigate potential risks and protect our users' data effectively.

### How to Report a Vulnerability

If you believe you have found a security vulnerability in our system, please email us at **[dsf-security@hs-heilbronn.de](mailto:dsf-security@hs-heilbronn.de)**. If you want to use end-to-end-encryption, you can send us mails using s-mime with the certificate chain provided [here](https://github.com/datasharingframework/dsf/blob/main/SECURITY_CERTIFICATE.pem). We kindly request the following:

* Provide a detailed description of the vulnerability, including if possible the potential impact and how it can be exploited.
* Include steps to reproduce the vulnerability or proof-of-concept code, if possible.
* Avoid accessing or modifying user data without permission, and do not exploit a security issue for any reason other than testing.
* Maintain confidentiality and do not publicly disclose the vulnerability, until we have had the opportunity to investigate and address it.

Please do not file an issue on a security-related topic and use the e-mail address provided. You can verify the address both in the [application repository](https://github.com/datasharingframework/dsf/blob/main/SECURITY.md) and at the homepage (this page).

### Our promise

* **Acknowledgement**: We usually will acknowledge receipt of your vulnerability report within 48 hours.
* **Investigation**: Our security team will investigate the issue and work diligently to verify and reproduce the vulnerability.
* **Communication**: We will keep you informed of our progress as we work to resolve the issue.
* **Resolution**: We will strive to resolve security issues in a timely manner and release updates, patches, or remediations as needed.
* **Recognition**: We value your effort in making our systems more secure and will recognize your contribution, if desired, once the vulnerability is resolved.

### Legal Protection

We promise not to initiate legal action against individuals who report vulnerabilities responsibly in accordance with this policy. This includes not suing for accidental access to data or reporting in good faith.

### Questions?

If you have any questions about this policy or security of the Data Sharing Framework, the services and tools we provide, please contact us at **[dsf-security@hs-heilbronn.de](mailto:dsf-security@hs-heilbronn.de)**. You can send us encrypted e-mails using s-mime. You can find the certificate chain [here](https://github.com/datasharingframework/dsf/blob/main/SECURITY_CERTIFICATE.pem).