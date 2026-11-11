# TRIMINDSLABS Orange Engineering — Design System Specification

## 1. Palette Tokens & Roles

| Token | HEX | Name | Responsibility |
|---|---|---|---|
| `--color-primary` | `#FF6A00` | Electric Orange | Primary actions, brand focus, active indicators |
| `--color-primary-hover` | `#FF8A24` | Signal Orange | Interactive hover states, icon highlights |
| `--color-accent` | `#FFB15C` | Warm Amber | Controlled highlights & subtle gradients |
| `--color-background` | `#07111F` | Midnight Navy | Root background (~70% canvas) |
| `--color-surface` | `#111C2B` | Deep Graphite | Cards, panels, structural containers (~20% surfaces) |
| `--color-surface-elevated`| `#172438`| Elevated Graphite| Modals, toolbars, elevated dropdowns |
| `--color-border` | `#263449` | Steel Blue | 1px hairline structural borders & dividers |
| `--color-text-primary` | `#F4F7FA` | Cloud White | Primary typography |
| `--color-text-secondary` | `#AAB7C7` | Cool Silver | Descriptive auxiliary prose |
| `--color-text-muted` | `#8190A3` | Muted Steel | Metadata, timestamps, and captions |

---

## 2. 70/20/10 Visual Distribution Discipline

- **~70% Midnight Navy**: Low visual fatigue, industrial authority.
- **~20% Deep Graphite & Steel Blue**: Subtle surface definition and clean structure.
- **~10% Electric Orange**: High-intent accent exclusively reserved for primary CTAs and active states.

---

## 3. Typography & Numerals

- **Display & Headings**: `Plus Jakarta Sans` (400, 500, 600, 700) with `tracking-tight`.
- **Telemetry & Numbers**: `JetBrains Mono` with `font-variant-numeric: tabular-nums` for alignment in data tables.
