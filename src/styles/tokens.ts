/**
 * TRIMINDSLABS Orange Engineering — Design System Tokens
 * Canonical token definitions for colors, typography, spacing, radius, and shadows.
 */

export const tokens = {
  colors: {
    // Primary Orange Brand Identity
    primary: '#FF6A00',        // Electric Orange: Main actions, identity
    primaryHover: '#FF8A24',   // Signal Orange: Hover, active accents
    accent: '#FFB15C',         // Warm Amber: Controlled highlights & gradients

    // Surfaces & Canvas (Dark-first Midnight Navy / Deep Graphite)
    background: '#07111F',     // Midnight Navy: Root background (~70% visual canvas)
    surface: '#111C2B',        // Deep Graphite: Cards, sidebars, containers
    surfaceElevated: '#172438',// Elevated Graphite: Modals, dropdowns, floating panels
    surfaceHighlight: '#1F304B',// Interactive hover surface
    border: '#263449',         // Steel Blue: Hairline borders and dividers
    borderLight: '#374B67',    // Focused / active border

    // Typography & Contrast (WCAG 2.2 AA Compliant)
    textPrimary: '#F4F7FA',    // Cloud White: High-contrast headings and body
    textSecondary: '#AAB7C7',  // Cool Silver: Auxiliary text, descriptions
    textMuted: '#8190A3',      // Muted Steel: Metadata, labels, subtle tags
    textInverse: '#07111F',    // Midnight Navy for high contrast text inside Electric Orange buttons

    // Semantic States (Never substituted by orange alone)
    success: '#22C55E',        // Verified / Optimal / Passed
    warning: '#FBBF24',        // Pending / In-Progress / Review
    error: '#EF4444',          // Failed / Offline / Disconnected
    information: '#38BDF8',    // Notice / Observation / Telemetry
  },
  typography: {
    fontSans: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
    fontMono: '"JetBrains Mono", monospace',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
  },
  radius: {
    sm: '4px',
    md: '8px',
    lg: '12px',
    xl: '16px',
    full: '9999px',
  },
} as const;

export type DesignTokens = typeof tokens;
