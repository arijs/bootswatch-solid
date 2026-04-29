import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

export const breadcrumb = style({})

// Item modifier
export const breadcrumbItem = style({})

// Active-state modifier applied alongside breadcrumbItem
export const breadcrumbItemActive = style({})
