import { createVar } from '@vanilla-extract/css'

// CSS custom properties for Bootstrap breadcrumb components (--bs-breadcrumb-*).
// These are the variables declared on .breadcrumb.
// Each createVar() produces a stable hashed CSS custom property name.
//
// Source: Bootstrap's .breadcrumb CSS block.

// NB: o Bootstrap referencia `--bs-breadcrumb-font-size` em .breadcrumb mas o
// deixa vazio por padrão (font-size herdado). Declaramos mesmo assim para que
// a referência seja hasheada e nenhum literal `--bs-breadcrumb-font-size`
// sobre no artefato.
export const varBsBreadcrumbFontSize = createVar()         // --bs-breadcrumb-font-size
export const varBsBreadcrumbPaddingX = createVar()         // --bs-breadcrumb-padding-x
export const varBsBreadcrumbPaddingY = createVar()         // --bs-breadcrumb-padding-y
export const varBsBreadcrumbMarginBottom = createVar()     // --bs-breadcrumb-margin-bottom
export const varBsBreadcrumbBg = createVar()               // --bs-breadcrumb-bg
export const varBsBreadcrumbBorderRadius = createVar()     // --bs-breadcrumb-border-radius
export const varBsBreadcrumbDividerColor = createVar()     // --bs-breadcrumb-divider-color
export const varBsBreadcrumbItemPaddingX = createVar()     // --bs-breadcrumb-item-padding-x
export const varBsBreadcrumbItemActiveColor = createVar()  // --bs-breadcrumb-item-active-color
export const varBsBreadcrumbDivider = createVar()          // --bs-breadcrumb-divider
