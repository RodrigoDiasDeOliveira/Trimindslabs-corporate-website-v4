# ADR-001: Audit as the Source of Operational Truth

- **Status:** ACCEPTED
- **Date:** 2026-10-12
- **Scope:** TRIMINDSLABS Platform & Ecosystem Telemetry

## Context

The corporate platform presents engineering metadata and an Engineering State Explorer.
An earlier design risked conflating presentation marketing with runtime reality.
The Ecosystem Audit API was developed to independently observe repositories and Cloud Run services.
The dashboard previously risked displaying manufactured uptime or success numbers.

## Decision

1. The Ecosystem Audit API is the sole canonical source of operational observations and measured dashboard indicators.
2. The website is strictly a presentation layer; it must not manufacture maturity, pipeline success, security compliance, or current runtime status.
3. `NOT_MEASURED` must remain visible until sufficient evidence supports an independently measured value.
4. Repository counts retain their provenance and scope (32 repositories in audit scope vs total GitHub account repositories).
5. A successful frontend build is not proof that the published site or the service is currently serving expected content.

## Consequences

- Unmeasured indicators remain explicitly labeled as `NOT_MEASURED`.
- High corporate integrity: zero fake telemetries or hallucinated dashboards.
- Transparent reporting of API fallback snapshots when live probers wake up.
