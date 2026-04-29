import { createVar } from '@vanilla-extract/css'

// Bootstrap CSS custom properties for .nav and .nav-tabs component families.
// SOURCE CSS: screenshots/bootstrap/bootstrap.css — .nav { --bs-nav-link-* },
//             .nav-tabs { --bs-nav-tabs-* }

// ── .nav vars ─────────────────────────────────────────────────────────────────

export const varBsNavLinkPaddingX = createVar()           // --bs-nav-link-padding-x
export const varBsNavLinkPaddingY = createVar()           // --bs-nav-link-padding-y
export const varBsNavLinkFontSize = createVar()           // --bs-nav-link-font-size
export const varBsNavLinkFontWeight = createVar()         // --bs-nav-link-font-weight
export const varBsNavLinkColor = createVar()              // --bs-nav-link-color
export const varBsNavLinkHoverColor = createVar()         // --bs-nav-link-hover-color
export const varBsNavLinkDisabledColor = createVar()      // --bs-nav-link-disabled-color

// ── .nav-tabs vars ────────────────────────────────────────────────────────────

export const varBsNavTabsBorderWidth = createVar()              // --bs-nav-tabs-border-width
export const varBsNavTabsBorderColor = createVar()              // --bs-nav-tabs-border-color
export const varBsNavTabsBorderRadius = createVar()             // --bs-nav-tabs-border-radius
export const varBsNavTabsLinkHoverBorderColor = createVar()     // --bs-nav-tabs-link-hover-border-color
export const varBsNavTabsLinkActiveColor = createVar()          // --bs-nav-tabs-link-active-color
export const varBsNavTabsLinkActiveBg = createVar()             // --bs-nav-tabs-link-active-bg
export const varBsNavTabsLinkActiveBorderColor = createVar()    // --bs-nav-tabs-link-active-border-color
