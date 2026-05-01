import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

// Toolbar wrapper that groups multiple btn-groups together
export const btnToolbar = style({})

// A group of buttons that appear fused together
export const btnGroup = style({})

// Button inside .btn-group (used for adjacency/stacking selectors)
export const btnGroupButton = style({})

// Interactive behavior hooks for grouped buttons (:hover/:focus/:active)
export const btnGroupInteractive = style({})

// Bootstrap spacing utility equivalent to .me-2
export const marginEnd2 = style({})
