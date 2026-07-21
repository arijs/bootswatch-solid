import { style } from '@vanilla-extract/css'

// Root-level contract classes: zero-style identifiers shared across all themes.
// Apply these to the outermost wrapper element of any themed region so that
// theme implementations can wire real CSS via globalStyle(themeScope + contract, …).
//
// `vars`      — root CSS custom-property host (`--bs-*`)
// `bodyFrame` — page canvas on Ve2Shell (background-color; no padding — see playbook)
// `bodyText`  — text-bearing root (font-family, font-size, line-height, color)
// `body`      — reserved for explicit overlay/subtree use; not stamped on Ve2Shell

export const vars = style({})
export const body = style({})
export const bodyText = style({})
export const bodyFrame = style({})
