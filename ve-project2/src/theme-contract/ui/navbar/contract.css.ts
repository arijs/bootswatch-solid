import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Components always use these names — no runtime resolution needed.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

// ── .navbar base ──────────────────────────────────────────────────────────────

export const navbar = style({})
export const navbarBrand = style({})
export const navbarNav = style({})
export const navbarText = style({})
export const navbarCollapse = style({})
export const navbarToggler = style({})
export const navbarTogglerIcon = style({})
export const navbarNavScroll = style({})

// ── Responsive expand breakpoints ────────────────────────────────────────────

export const navbarExpandLg = style({})

// ── Color scheme variants ─────────────────────────────────────────────────────

// Absorbs `navbar-light bg-light` (light background, default emphasis-based colors)
export const navbarBgLight = style({})

// Absorbs `navbar-dark bg-primary` (primary background, inverted colors)
export const navbarDarkBgPrimary = style({})
