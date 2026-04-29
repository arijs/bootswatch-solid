import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

// Toolbar wrapper that groups multiple btn-groups together
export const btnToolbar = style({})

// A group of buttons that appear fused together
export const btnGroup = style({})
