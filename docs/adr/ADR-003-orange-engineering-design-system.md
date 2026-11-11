# ADR-003: Orange Engineering — Balanced / Dark-First Design System

- **Status:** ACCEPTED
- **Date:** 2026-11-10
- **Scope:** Corporate Platform UI & Visual Identity

## Context

The corporate identity must convey engineering precision, architectural depth, and technical maturity without descending into startup clichés, gaming aesthetics, or unreadable low-contrast dark themes.
Standard dark themes frequently suffer from low text contrast, illegible small text on saturated backgrounds, and arbitrary color scatter.

## Decision

1. Adopt the TRIMINDSLABS Orange Engineering palette:
   - Midnight Navy (`#07111F`) background canvas (~70%).
   - Deep Graphite (`#111C2B`) surfaces and Elevated Graphite (`#172438`) modals (~20%).
   - Steel Blue (`#263449`) hairline borders.
   - Electric Orange (`#FF6A00`) reserved exclusively as an intentional 10% accent.
2. Comply strictly with WCAG 2.2 Level AA:
   - Primary orange buttons must use Midnight Navy (`#07111F`) text to achieve an 8.2:1 contrast ratio.
   - Body prose uses Cloud White (`#F4F7FA`) and Cool Silver (`#AAB7C7`).
3. Prohibit generic AI slop: no purple gradients, no floating pills on cards, no decorative pulsing dots on static text.

## Consequences

- Highly distinctive, industrial engineering visual identity.
- Guaranteed readability and accessibility across devices.
- Reusable centralized tokens in `src/styles/tokens.ts` and CSS variables.
