import { style } from '@vanilla-extract/css'

// Root-level contract classes: zero-style identifiers shared across all themes.
// Apply these to the outermost wrapper element of any themed region so that
// theme implementations can wire real CSS via globalStyle(themeScope + contract, …).
//
// `vars`     — root CSS custom-property host (`--bs-*`)
// `body`     — outer wrapper (background-color, padding, display)
// `bodyText` — text-bearing root (font-family, font-size, line-height, color)

export const vars = style({})
export const body = style({})
export const bodyText = style({})

export const bodyFrame = style({})
