import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Components always use these names — no runtime resolution needed for element classes.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

// This inputFontFamily contract was created because of Sketchy theme
// It applies global styles to button, input, optgroup, select, textarea elements
// Please see globalStyle(`${sketchyScope}${inputFontFamily}`)
// in \ve-project2\src\themes\sketchy\ui\buttons\styles.css.ts
export const inputFontFamily = style({})
export const btn = style({})
export const btnPrimary = style({})
export const btnSecondary = style({})
export const btnSuccess = style({})
export const btnDanger = style({})
export const btnWarning = style({})
export const btnInfo = style({})
export const btnLight = style({})
export const btnDark = style({})
export const btnLink = style({})

// Size modifiers
export const btnLg = style({})
export const btnSm = style({})

// State hooks
export const btnActiveHook = style({})

// Hidden checkbox for toggle-button pattern
export const btnCheck = style({})

// Outline variants
export const btnOutlinePrimary = style({})
export const btnOutlineSecondary = style({})
export const btnOutlineSuccess = style({})
export const btnOutlineDanger = style({})
export const btnOutlineWarning = style({})
export const btnOutlineInfo = style({})
export const btnOutlineLight = style({})
export const btnOutlineDark = style({})
