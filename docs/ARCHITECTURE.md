# TRIMINDSLABS Corporate Platform — Architecture Specification

## 1. Context & Architectural Mandate

The Next-Generation TRIMINDSLABS Corporate Platform is engineered as an independent corporate intelligence system, completely decoupled from the legacy V3 website.

**Official Identity:**
TRIMINDSLABS — Engineering Intelligent Systems.

The platform provides a unified window across four critical dimensions:
1. **Corporate Identity**: Positioning, core engineering directives, and verified competence domains.
2. **Product Catalog**: Canonical registry of systems with negative scope boundaries and architecture verification scores.
3. **Technical Knowledge**: Architecture Decision Records (ADRs), 11 Production Release Gates, and reference system topologies.
4. **Operational Intelligence**: Independent runtime telemetry powered by Ecosystem Audit and GitHub observation endpoints.

---

## 2. Technology Stack & Architectural Justification

| Layer | Chosen Technology | Architectural Justification |
|---|---|---|
| **Runtime Framework** | React 19 (SPA on Vite) | Reactive component hierarchy, low-latency UI updates, zero build friction. |
| **Language** | TypeScript 5+ (Strict Mode) | Strong type contracts, compile-time schema safety, complete domain typing. |
| **Styling & Design System** | Tailwind CSS v4 + Design Tokens | Zero-runtime CSS variables, strict 70/20/10 dark-first color distribution. |
| **Icons** | Lucide React | Clean, domain-appropriate SVG iconography with zero-pill visual discipline. |
| **State & i18n** | React Context + LocalStorage | Persistent language switching (EN, PT, ES) without heavyweight third-party bundles. |
| **Operational Telemetry** | Ecosystem Audit REST API | Programmatic source of truth on European Google Cloud Run (`europe-west1`). |

---

## 3. Modular Separation of Concerns

```
                  +----------------------------------------------+
                  |         TRIMINDSLABS Next-Gen Platform       |
                  +----------------------------------------------+
                                         |
     +-------------------+---------------+---------------+--------------------+
     |                   |                               |                    |
     v                   v                               v                    v
+--------------+   +---------------+             +---------------+   +-------------------+
|  MODULE A    |   |   MODULE B    |             |   MODULE C    |   |     MODULE D      |
|  Corporate   |   |    Product    |             |   Technical   |   |    Operational    |
|   Identity   |   |    Catalog    |             |   Knowledge   |   |   Intelligence    |
+--------------+   +---------------+             +---------------+   +-------------------+
     |                   |                               |                    |
     | Principles        | Taxonomies                    | ADR Register       | Ecosystem Audit
     | Directives        | Honest Scopes                 | 11 Prod Gates      | GitHub Observations
     | Competencies      | Coherence Scores              | Reference Diagrams | Cloud Run Probers
     | Corporate Aliases | Tech Matrices                 | Vocabulary Specs   | State Explorer
```

### Core Architecture Directives:
1. **Zero Fake Telemetry**: Unmeasured metrics are explicitly surfaced as `NOT_MEASURED`.
2. **Presentation Decoupling**: The website is purely a presentation layer; it never acts as its own source of operational truth.
3. **Independent Lifecycle**: Zero dependencies on the legacy V3 repository, pipeline, or domains.
