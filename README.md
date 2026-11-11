# TRIMINDSLABS Corporate Platform — Next Generation
> **TRIMINDSLABS — Engineering Intelligent Systems**
> Sprint 01 — Architectural Foundation, Domain Model, Design System & Corporate Experience

---

## 1. Executive Summary

TRIMINDSLABS Corporate Platform Next Generation is an enterprise-grade engineering intelligence platform built to represent TRIMINDSLABS' technology portfolio, systems architecture, and live operational reality.

The platform is designed around four core modules:
1. **Corporate Identity**: Positioning, engineering directives, core competencies, and official communication channels.
2. **Product Catalog**: Rigorous taxonomy across 5 product families with honest scope boundaries, coherence verification scores, and deep technical inspection.
3. **Technical Knowledge**: Architecture Decision Records (ADRs), 11 Production Release Gates, reference system topologies, and formal technical vocabulary.
4. **Operational Intelligence & Engineering State Explorer**: Live REST connection to the Ecosystem Audit engine and GitHub API, allowing real-time inspection of 32 repositories, commit SHAs, and European Cloud Run deployments.

---

## 2. Visual Identity — TRIMINDSLABS Orange Engineering

The platform implements the official **TRIMINDSLABS Orange Engineering — Balanced / Dark-first** visual identity:

- **Midnight Navy (`#07111F`)**: Deep, low-fatigue background field (~70% canvas)
- **Deep Graphite (`#111C2B`)**: Card and panel surfaces (~20% structural surfaces)
- **Steel Blue (`#263449`)**: Structural hairline borders and dividers
- **Electric Orange (`#FF6A00`)**: Intentional accent concentrated at primary CTAs and active states (~10% accent budget)
- **Signal Orange (`#FF8A24`)** & **Warm Amber (`#FFB15C`)**: Controlled hover, icons, and highlights
- **Cloud White (`#F4F7FA`)** & **Cool Silver (`#AAB7C7`)**: High-contrast, WCAG 2.2 AA compliant typography
- **Midnight Navy Text on Orange Buttons**: Guarantees > 8:1 contrast, well above the 4.5:1 AA threshold

---

## 3. Engineering State Explorer — Live Integration

Preserving the functionality previously accessed as *Access Engineering State* in V3:
- **Ecosystem Audit REST API**: `https://triminds-ecosystem-audit-72mbkllrqa-ew.a.run.app`
- **Real-Time Endpoints**:
  - `/api/v1/audit/summary`: System status (`OPTIMAL`), 32 repositories, 100% pipeline pass, `NOT_MEASURED` security compliance.
  - `/api/v1/audit/ecosystem/observations`: Live observations for all 32 repositories with commit hashes, authors, and validation status.
  - `/api/v1/deployments/*`: Real-time deployment telemetry for Cloud Run services (Geo-AI V4, AI Cloud Administrator, TLP Next-Gen, Portfolio V2).
- **ADR-001 Governance**: The website is strictly a presentation layer. It never manufactures status, and honestly displays `NOT_MEASURED` where telemetry has not yet been collected.

---

## 4. Repository Structure

```
├── docs/                         # Technical Architecture & Governance
│   ├── ARCHITECTURE.md           # Overall architecture & stack decisions
│   ├── DOMAIN-MODEL.md           # Strongly-typed domain model
│   ├── PRODUCT-CATALOG-MODEL.md  # Product catalog taxonomy & boundaries
│   ├── OPERATIONAL-INTELLIGENCE.md# Telemetry separation & audit source of truth
│   ├── ENGINEERING-STATE-EXPLORER.md # Explorer architecture & features
│   ├── ENGINEERING-STATE-INTEGRATION.md # API endpoints & payload contracts
│   ├── INTERNATIONALIZATION.md   # i18n architecture across EN, PT, and ES
│   ├── DESIGN-SYSTEM.md          # Tokens, palette distribution, and components
│   ├── ACCESSIBILITY.md          # WCAG 2.2 AA validation & contrast audit
│   ├── VISUAL-VALIDATION.md      # Responsive layout and visual proof
│   ├── QUALITY-STRATEGY.md       # Automated testing & linting strategy
│   ├── SECURITY.md               # Security posture & zero-secrets policy
│   ├── ROADMAP.md                # Sprint 02 proposals & long-term evolution
│   └── adr/                      # Formal Architecture Decision Records
│       ├── ADR-001-audit-source-of-truth.md
│       ├── ADR-002-deterministic-verification-layer.md
│       ├── ADR-003-orange-engineering-design-system.md
│       └── ADR-004-independent-state-explorer-architecture.md
├── src/
│   ├── components/               # Accessible, token-based UI components
│   │   ├── layout/               # Top Bar (3-zone contract) and Footer
│   │   ├── modules/              # Corporate, Catalog, Knowledge, Explorer
│   │   └── ui/                   # Reusable atomic buttons, modals, metrics
│   ├── domain/                   # Strongly typed interfaces & schemas
│   ├── i18n/                     # Typed multilingual dictionaries (EN, PT, ES)
│   ├── services/                 # Live Ecosystem Audit API client
│   ├── styles/                   # Centralized design tokens & CSS variables
│   └── tests/                    # Automated domain & integration tests
└── scripts/                      # Test runner and validation scripts
```

---

## 5. Development & Verification

```bash
# Run linting (TypeScript noEmit)
npm run lint

# Run automated domain & live API integration tests
npm test

# Build production bundle
npm run build

# Start development server
npm run dev
```
