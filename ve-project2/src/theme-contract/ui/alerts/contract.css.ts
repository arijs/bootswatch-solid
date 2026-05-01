import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Components always use these names — no runtime resolution needed for element classes.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

export const alert = style({})

// Colour variants
export const alertPrimary = style({})
export const alertSecondary = style({})
export const alertSuccess = style({})
export const alertDanger = style({})
export const alertWarning = style({})
export const alertInfo = style({})
export const alertLight = style({})
export const alertDark = style({})

// Layout modifiers
export const alertDismissible = style({})

// Inner element hooks
export const alertLink = style({})
export const alertHeading = style({})
export const alertBtnClose = style({})
