import { createVar } from '@vanilla-extract/css'

// CSS custom properties for Bootstrap badge components (--bs-badge-*).
// These are the variables declared on .badge.
// Each createVar() produces a stable hashed CSS custom property name.
//
// Source: Bootstrap's .badge CSS block.

export const varBsBadgePaddingX = createVar()        // --bs-badge-padding-x
export const varBsBadgePaddingY = createVar()        // --bs-badge-padding-y
export const varBsBadgeFontSize = createVar()        // --bs-badge-font-size
export const varBsBadgeFontWeight = createVar()      // --bs-badge-font-weight
export const varBsBadgeColor = createVar()           // --bs-badge-color
export const varBsBadgeBorderRadius = createVar()    // --bs-badge-border-radius
