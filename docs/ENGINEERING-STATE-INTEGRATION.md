# Engineering State Explorer — API Integration & Contracts

## 1. Ecosystem Audit Endpoints

Base URL: `https://triminds-ecosystem-audit-72mbkllrqa-ew.a.run.app`

### 1. `/api/v1/audit/summary`
- Method: `GET`
- Query Params: `force_refresh=true` (optional)
- Returns:
  ```json
  {
    "system_status": "OPTIMAL",
    "last_audit_timestamp": "2026-11-11T09:50:59.248652+00:00",
    "summary_cards": {
      "total_repositories": 32,
      "pipeline_success_rate": "100%",
      "security_compliance": "NOT_MEASURED",
      "active_deployments": null
    },
    "audit_logs": [ ... ]
  }
  ```

### 2. `/api/v1/audit/ecosystem/observations`
- Method: `GET`
- Returns array of 32 repositories observed from GitHub with commit hashes, verification flags, and CI validation notes.

### 3. `/api/v1/deployments/:id`
- Supported IDs:
  - `geo-ai-v4`: Cloud Run in europe-west1, COG raster streaming.
  - `ai-cloud-administrator`: Cloud Run in europe-west1, FastMCP server.
  - `tlp-nextgen`: Cloud Run in europe-west1, React + Spring Boot 3.
  - `portfolio-v2`: Cloud Run in europe-west1, Portfolio management.

---

## 2. Resilient Error & Offline Handling

When the Ecosystem Audit endpoint is cold-starting or temporarily unreachable:
1. The client switches smoothly to the verified canonical snapshot.
2. A status badge displays `CANONICAL SNAPSHOT` with an explanatory notice.
3. The user can click "Retry Live Probe" at any time to re-establish the live connection.
4. Absence of live data is NEVER represented as a negative offline state.
