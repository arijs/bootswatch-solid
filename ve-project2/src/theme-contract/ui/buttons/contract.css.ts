import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Components always use these names — no runtime resolution needed for element classes.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

export const btn = style({})
export const btnPrimary = style({})
export const btnSecondary = style({})
export const btnSuccess = style({})
export const btnDanger = style({})
export const btnWarning = style({})
export const btnInfo = style({})
export const btnLight = style({})
export const btnDark = style({})
