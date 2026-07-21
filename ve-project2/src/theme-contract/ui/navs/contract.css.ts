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

// ── Nav pills variant ─────────────────────────────────────────────────────────

export const navPills = style({})

// ── Tab panels (Bootstrap tab JS / static demos) ─────────────────────────────

export const fade = style({})
export const show = style({})
export const tabContent = style({})
export const tabPane = style({})
export const tabPaneActive = style({})

/** Button reset for tab triggers styled as `.nav-link`. */
export const navButtonReset = style({})

/** `.nav-item.show` hook for pill/tab dropdown bridges. */
export const navItemShow = style({})
