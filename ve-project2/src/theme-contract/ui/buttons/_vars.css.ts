import { createVar } from '@vanilla-extract/css'

// CSS custom properties for Bootstrap button components (--bs-btn-*).
// These are the variables declared on .btn and overridden per variant (.btn-primary, etc.).
// Each createVar() produces a stable hashed CSS custom property name.
//
// Source: Bootstrap's .btn CSS block and per-variant overrides.

export const varBsBtnPaddingX = createVar()             // --bs-btn-padding-x
export const varBsBtnPaddingY = createVar()             // --bs-btn-padding-y
export const varBsBtnFontFamily = createVar()           // --bs-btn-font-family
export const varBsBtnFontSize = createVar()             // --bs-btn-font-size
export const varBsBtnFontWeight = createVar()           // --bs-btn-font-weight
export const varBsBtnLineHeight = createVar()           // --bs-btn-line-height
export const varBsBtnColor = createVar()                // --bs-btn-color
export const varBsBtnBg = createVar()                   // --bs-btn-bg
export const varBsBtnBorderWidth = createVar()          // --bs-btn-border-width
export const varBsBtnBorderColor = createVar()          // --bs-btn-border-color
export const varBsBtnBorderRadius = createVar()         // --bs-btn-border-radius
export const varBsBtnHoverBorderColor = createVar()     // --bs-btn-hover-border-color
export const varBsBtnBoxShadow = createVar()            // --bs-btn-box-shadow
export const varBsBtnDisabledOpacity = createVar()      // --bs-btn-disabled-opacity
export const varBsBtnFocusBoxShadow = createVar()       // --bs-btn-focus-box-shadow
export const varBsBtnFocusBoxShadowRgb = createVar()    // --bs-btn-focus-shadow-rgb
export const varBsBtnHoverColor = createVar()           // --bs-btn-hover-color
export const varBsBtnHoverBg = createVar()              // --bs-btn-hover-bg
export const varBsBtnActiveColor = createVar()          // --bs-btn-active-color
export const varBsBtnActiveBg = createVar()             // --bs-btn-active-bg
export const varBsBtnActiveBorderColor = createVar()    // --bs-btn-active-border-color
export const varBsBtnActiveBoxShadow = createVar()      // --bs-btn-active-shadow
export const varBsBtnDisabledColor = createVar()        // --bs-btn-disabled-color
export const varBsBtnDisabledBg = createVar()           // --bs-btn-disabled-bg
export const varBsBtnDisabledBorderColor = createVar()  // --bs-btn-disabled-border-color
