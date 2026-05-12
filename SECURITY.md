# Security Policy

## Supported versions

| Version        | Supported |
| -------------- | --------- |
| Latest (main)  | Yes       |
| Older branches | No        |

## Reporting a vulnerability

If you discover a security vulnerability in Groot Studio, please do **not** open a public GitHub issue.

Instead, report it privately by emailing:

**[codesubhadip95@gmail.com](mailto:[codesubhadip95@gmail.com])**

Please include:
- A description of the vulnerability
- Steps to reproduce
- Potential impact
- Any suggested fix if you have one

You will receive a response within 48 hours. We take all security reports seriously and will work to resolve confirmed issues promptly.

## Scope

Groot Studio is a client-side component library. Security concerns most relevant to this project include:

- XSS vulnerabilities in component output
- Unsafe use of `dangerouslySetInnerHTML`
- Dependencies with known CVEs