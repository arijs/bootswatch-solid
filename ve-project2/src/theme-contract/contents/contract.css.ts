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

// Contract class for Bootstrap `.small, small { font-size: 0.875em }`.
export const small = style({})

// Inline code element: `code { font-size: 0.875em; color: var(--bs-code-color); ... }`
export const inlineCode = style({})

// Display headings
export const display1 = style({})
export const display2 = style({})
export const display3 = style({})
export const display4 = style({})
export const display5 = style({})
export const display6 = style({})

// Blockquote
export const blockquote = style({})
export const blockquoteFooter = style({})

// Lead paragraph
export const lead = style({})

// Unstyled / inline lists
export const listUnstyled = style({})
export const listBase = style({})
export const listNested = style({})
export const listIndented = style({})
export const listInline = style({})
export const listInlineItem = style({})

// Inline text elements
export const markText = style({})
export const smallText = style({})

// Tables
export const table = style({})
export const tableElement = style({})
export const tableDark = style({})
export const tableBordered = style({})
export const tableBorderless = style({})
export const tableHover = style({})
export const tableSm = style({})
export const tableStriped = style({})
export const tablePrimary = style({})
export const tableSecondary = style({})
export const tableDanger = style({})
export const tableSuccess = style({})
export const tableWarning = style({})
export const tableInfo = style({})
export const tableLight = style({})
export const tableSection = style({})
export const tableRow = style({})
export const tableHeaderCell = style({})
export const tableCell = style({})

// Images
export const imgFluid = style({})
export const imgThumbnail = style({})

// Figures
export const figure = style({})
export const figureImg = style({})
export const figureCaption = style({})

// Placeholder image helpers
export const bdPlaceholderImg = style({})
export const bdPlaceholderImgLg = style({})
export const mediaMiddle = style({})
export const rounded = style({})
