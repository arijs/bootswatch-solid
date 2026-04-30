import { createVar } from '@vanilla-extract/css'

// CSS custom properties for Bootstrap alert components (--bs-alert-*).
// These are the variables declared on .alert and overridden per variant.
// Each createVar() produces a stable hashed CSS custom property name.
//
// Source: Bootstrap's .alert CSS block and per-variant overrides.

export const varBsAlertBg = createVar()             // --bs-alert-bg
export const varBsAlertPaddingX = createVar()        // --bs-alert-padding-x
export const varBsAlertPaddingY = createVar()        // --bs-alert-padding-y
export const varBsAlertMarginBottom = createVar()    // --bs-alert-margin-bottom
export const varBsAlertColor = createVar()           // --bs-alert-color
export const varBsAlertBorderColor = createVar()     // --bs-alert-border-color
export const varBsAlertBorder = createVar()          // --bs-alert-border (shorthand)
export const varBsAlertBorderRadius = createVar()    // --bs-alert-border-radius
export const varBsAlertLinkColor = createVar()       // --bs-alert-link-color
