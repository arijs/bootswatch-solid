import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

export const badge = style({})

// Colour variants (background + text colour encoded per variant)
export const badgePrimary = style({})
export const badgeSecondary = style({})
export const badgeSuccess = style({})
export const badgeDanger = style({})
export const badgeWarning = style({})
export const badgeInfo = style({})
export const badgeLight = style({})
export const badgeDark = style({})

// Shape modifier
export const badgeRoundedPill = style({})
