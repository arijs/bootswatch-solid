import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.

// ── Progress container ────────────────────────────────────────────────────────

export const progress = style({})

// ── Progress bar ──────────────────────────────────────────────────────────────

export const progressBar = style({})

// ── Progress bar color variants (absorbing Bootstrap bg-* utility classes) ───

export const progressBarSuccess = style({})
export const progressBarInfo = style({})
export const progressBarWarning = style({})
export const progressBarDanger = style({})

// ── Progress bar striped / animated ──────────────────────────────────────────

export const progressBarStriped = style({})
export const progressBarAnimated = style({})
