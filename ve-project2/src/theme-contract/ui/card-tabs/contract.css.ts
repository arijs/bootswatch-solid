import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Components always use these names — no runtime resolution needed.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).
//
// NOTE: nav/navLink/navTabs and related classes have moved to ui/navs/contract.css.ts.
// Import them from there for use in card-tabs components and styles.

// ── Card-specific nav modifier ────────────────────────────────────────────────

export const cardHeaderTabs = style({})
