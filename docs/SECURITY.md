# Security & Privacy Specification

## 1. Zero-Secrets Policy

- No API keys, credentials, or administrative secrets are bundled in client code or static public directories.
- Third-party endpoints are called via standard public REST interfaces with appropriate timeout safeguards.
- Corporate contact forms submit through verified corporate channels without collecting sensitive telemetry.

---

## 2. Institutional Communication Aliases

- Personal email addresses are strictly forbidden from public metadata.
- Communication endpoints use official aliases:
  - `contact@trimindslabs.com`
  - `engineering@trimindslabs.com`
  - `security@trimindslabs.com`

---

## 3. Sandboxing & Safe External Links

- External links to GitHub repositories or Cloud Run endpoints specify `rel="noreferrer"` and `target="_blank"`.
- Modals sanitize raw JSON payloads before rendering inside `<pre>` containers.
