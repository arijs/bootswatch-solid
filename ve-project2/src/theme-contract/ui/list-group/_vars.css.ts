import { createVar } from '@vanilla-extract/css'

// CSS custom properties for Bootstrap list-group components (--bs-list-group-*).
// These are the variables declared on .list-group and overridden per variant.
// Each createVar() produces a stable hashed CSS custom property name.
//
// Source: Bootstrap's .list-group CSS block and per-variant overrides.

export const varBsListGroupColor = createVar()              // --bs-list-group-color
export const varBsListGroupBg = createVar()                 // --bs-list-group-bg
export const varBsListGroupBorderColor = createVar()        // --bs-list-group-border-color
export const varBsListGroupBorderWidth = createVar()        // --bs-list-group-border-width
export const varBsListGroupBorderRadius = createVar()       // --bs-list-group-border-radius
export const varBsListGroupItemPaddingX = createVar()       // --bs-list-group-item-padding-x
export const varBsListGroupItemPaddingY = createVar()       // --bs-list-group-item-padding-y
export const varBsListGroupActionColor = createVar()        // --bs-list-group-action-color
export const varBsListGroupActionHoverColor = createVar()   // --bs-list-group-action-hover-color
export const varBsListGroupActionHoverBg = createVar()      // --bs-list-group-action-hover-bg
export const varBsListGroupActionActiveColor = createVar()  // --bs-list-group-action-active-color
export const varBsListGroupActionActiveBg = createVar()     // --bs-list-group-action-active-bg
export const varBsListGroupDisabledColor = createVar()      // --bs-list-group-disabled-color
export const varBsListGroupDisabledBg = createVar()         // --bs-list-group-disabled-bg
export const varBsListGroupActiveColor = createVar()        // --bs-list-group-active-color
export const varBsListGroupActiveBg = createVar()           // --bs-list-group-active-bg
export const varBsListGroupActiveBorderColor = createVar()  // --bs-list-group-active-border-color
