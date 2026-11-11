# ADR-004: Independent Architecture for Engineering State Explorer & Real API Integration

- **Status:** ACCEPTED
- **Date:** 2026-11-11
- **Scope:** Engineering State Explorer & Next-Generation Platform

## Context

The Next-Generation platform is built independently from the legacy V3 website.
The critical "Access Engineering State" capability must be preserved and connected to the real Ecosystem Audit REST API without breaking legacy dependencies or modifying the V3 repository.

## Decision

1. Build the Engineering State Explorer as a prominent first-class navigation module in the new platform.
2. Connect directly to the real Ecosystem Audit REST API at `https://triminds-ecosystem-audit-72mbkllrqa-ew.a.run.app`.
3. Fetch real observations for all 32 repositories and query Cloud Run deployment endpoints.
4. Provide a validated in-memory canonical snapshot as fallback with transparent UI disclosure when live probers wake up from scale-to-zero.
5. Provide a raw JSON payload inspector enabling external auditors to review unadulterated response data.

## Consequences

- Full functional preservation of V3's core capability in the modern design system.
- Zero coupling or operational interference with the legacy V3 repository or production domain.
- Real-time transparency for visitors and stakeholders.
