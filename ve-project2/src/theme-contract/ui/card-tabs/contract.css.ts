import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Components always use these names — no runtime resolution needed.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

// ── Nav base ──────────────────────────────────────────────────────────────────

export const nav = style({})
export const navItem = style({})
export const navLink = style({})
export const navLinkActive = style({})
export const navLinkDisabled = style({})

// ── Nav tabs variant ──────────────────────────────────────────────────────────

export const navTabs = style({})

// ── Card-specific nav modifier ────────────────────────────────────────────────

export const cardHeaderTabs = style({})
