import { style } from '@vanilla-extract/css'

// Generic text/flow element contracts mirrored from source CSS element rules.
export const paragraph = style({})
export const link = style({})
export const horizontalRule = style({})

// Element utility used when source CSS targeted `.card > hr`.
export const horizontalRuleCard = style({})

// Contract class for Bootstrap `.small, small { font-size: 0.875em }`.
export const small = style({})

// Inline code element: `code { font-size: 0.875em; color: var(--bs-code-color); ... }`
export const inlineCode = style({})

// Blockquote.
export const blockquote = style({})
export const blockquoteFooter = style({})

// Lead paragraph.
export const lead = style({})

// Inline text elements.
export const markText = style({})
export const smallText = style({})