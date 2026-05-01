import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Components always use these names — no runtime resolution needed.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

// ── Wrapper ───────────────────────────────────────────────────────────────────

export const listGroup = style({})        // .list-group
export const listGroupFlush = style({})   // .list-group-flush

// ── Items ─────────────────────────────────────────────────────────────────────

export const listGroupItem = style({})           // .list-group-item
export const listGroupItemAction = style({})     // .list-group-item-action
export const listGroupItemDisabled = style({})   // .disabled

// ── Colour variants ───────────────────────────────────────────────────────────

export const listGroupItemPrimary = style({})    // .list-group-item-primary
export const listGroupItemSecondary = style({})  // .list-group-item-secondary
export const listGroupItemSuccess = style({})    // .list-group-item-success
export const listGroupItemDanger = style({})     // .list-group-item-danger
export const listGroupItemWarning = style({})    // .list-group-item-warning
export const listGroupItemInfo = style({})       // .list-group-item-info
export const listGroupItemLight = style({})      // .list-group-item-light
export const listGroupItemDark = style({})       // .list-group-item-dark
