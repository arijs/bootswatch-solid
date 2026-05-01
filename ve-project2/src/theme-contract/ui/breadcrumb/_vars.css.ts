import { createVar } from '@vanilla-extract/css'

// CSS custom properties for Bootstrap breadcrumb components (--bs-breadcrumb-*).
// These are the variables declared on .breadcrumb.
// Each createVar() produces a stable hashed CSS custom property name.
//
// Source: Bootstrap's .breadcrumb CSS block.

export const varBsBreadcrumbPaddingX = createVar()         // --bs-breadcrumb-padding-x
export const varBsBreadcrumbPaddingY = createVar()         // --bs-breadcrumb-padding-y
export const varBsBreadcrumbMarginBottom = createVar()     // --bs-breadcrumb-margin-bottom
export const varBsBreadcrumbBg = createVar()               // --bs-breadcrumb-bg
export const varBsBreadcrumbBorderRadius = createVar()     // --bs-breadcrumb-border-radius
export const varBsBreadcrumbDividerColor = createVar()     // --bs-breadcrumb-divider-color
export const varBsBreadcrumbItemPaddingX = createVar()     // --bs-breadcrumb-item-padding-x
export const varBsBreadcrumbItemActiveColor = createVar()  // --bs-breadcrumb-item-active-color
export const varBsBreadcrumbDivider = createVar()          // --bs-breadcrumb-divider
