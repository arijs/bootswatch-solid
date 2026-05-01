import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Components always use these names — no runtime resolution needed.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

// ── Card base ─────────────────────────────────────────────────────────────────

export const card = style({})

// ── Card sections ─────────────────────────────────────────────────────────────

export const cardBody = style({})
export const cardTitle = style({})
export const cardSubtitle = style({})
export const cardText = style({})
export const cardLink = style({})
export const cardHeader = style({})
export const cardFooter = style({})

// ── Card images ───────────────────────────────────────────────────────────────

export const cardImg = style({})
export const cardImgTop = style({})
export const cardImgBottom = style({})

// ── Horizontal card layout ────────────────────────────────────────────────────
// Used to create a two-column card (image | body) without Bootstrap's grid.

export const cardHorizontalRow = style({})
export const cardHorizontalColImg = style({})
export const cardHorizontalColBody = style({})

// ── List group (used inside cards) ───────────────────────────────────────────

export const listGroup = style({})
export const listGroupFlush = style({})
export const listGroupItem = style({})
