# Engineering State Explorer — Specification

## 1. Functional Scope

The Engineering State Explorer preserves and enhances the capability originally introduced in V3 under the link **Access Engineering State**.

### Key Capabilities:
- **Direct Navigation Access**: Dedicated top-level access in the top navigation bar and prominent hero CTA.
- **Live Ecosystem Audit REST Integration**: Connects to `https://triminds-ecosystem-audit-72mbkllrqa-ew.a.run.app`.
- **32-Repository Real Observation Engine**: Live table displaying repository name, default branch, latest commit SHA, commit author, timestamp, and audit state.
- **Search & Filtering**: Real-time filtering by repository name, branch, author, primary language, or deployment status.
- **Deployment Telemetry Strip**: Quick inspection cards for Cloud Run services (`Geo-AI V4`, `AI Cloud Administrator`, `TLP Next-Gen`, `Portfolio V2`).
- **Raw JSON Payload Inspector**: Modal drawer enabling technical visitors and auditors to inspect the untransformed JSON payload from the audit engine.
- **Force Refresh**: Invalidate cache and trigger on-demand live re-probe via `?force_refresh=true`.
