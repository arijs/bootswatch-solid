import { style } from '@vanilla-extract/css'

// Contract classes for contents typography headings.
// These are zero-style identifiers; theme files attach concrete styles.

export const h1 = style({})
export const h2 = style({})
export const h3 = style({})
export const h4 = style({})
export const h5 = style({})
export const h6 = style({})

// Generic text/flow element contracts mirrored from source CSS element rules.
export const paragraph = style({})
export const link = style({})
export const horizontalRule = style({})

// Element utility used when source CSS targeted `.card > hr`.
export const horizontalRuleCard = style({})
