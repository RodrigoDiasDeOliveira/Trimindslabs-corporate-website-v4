# Operational Intelligence Architecture & Source Separation

## 1. Principles of Operational Separation

The TRIMINDSLABS platform strictly distinguishes between three independent systems:

1. **Technology Portfolio Management System**
   - Focus: Asset inventory, project history, and architectural governance.
   - Endpoint: `https://triminds-portfolio-v2-248152849653.europe-west1.run.app`
2. **Ecosystem Audit Engine**
   - Focus: Independent runtime telemetry, repository observations, and Cloud Run service validation.
   - Endpoint: `https://triminds-ecosystem-audit-72mbkllrqa-ew.a.run.app`
3. **Corporate Presentation Platform (This Application)**
   - Focus: Presentation of verified data, interactive state exploration, and corporate identity.

---

## 2. Integrity Directives (ADR-001)

- The corporate platform never manufactures telemetry, uptime, or compliance percentages.
- `NOT_MEASURED` remains explicitly visible until an automated prober provides verified data.
- Absence of evidence is never presented as success.
- Repository scope counts retain their explicit provenance (32 repositories in audit scope vs total GitHub account repositories).
