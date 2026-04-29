import { style } from '@vanilla-extract/css'

// Contract classes: zero-style identifiers shared across all themes.
// Components always use these names — no runtime resolution needed.
// Theme implementations wire real CSS via globalStyle(themeScope + contractClass, cssProps).

// ── Wrapper variants ──────────────────────────────────────────────────────────

export const dropdown = style({})         // .dropdown
export const dropup = style({})           // .dropup
export const dropend = style({})          // .dropend
export const dropstart = style({})        // .dropstart
export const dropdownCenter = style({})   // .dropdown-center
export const dropupCenter = style({})     // .dropup-center

// ── Toggle button ─────────────────────────────────────────────────────────────

export const dropdownToggle = style({})         // .dropdown-toggle
export const dropdownToggleSplit = style({})    // .dropdown-toggle-split

// ── Menu ──────────────────────────────────────────────────────────────────────

export const dropdownMenu = style({})           // .dropdown-menu
export const dropdownMenuStart = style({})      // .dropdown-menu-start
export const dropdownMenuEnd = style({})        // .dropdown-menu-end
export const dropdownMenuShow = style({})       // .dropdown-menu.show

// ── Dark variant ──────────────────────────────────────────────────────────────

export const dropdownMenuDark = style({})       // .dropdown-menu-dark

// ── Items ─────────────────────────────────────────────────────────────────────

export const dropdownItem = style({})           // .dropdown-item
export const dropdownItemActive = style({})     // .dropdown-item.active
export const dropdownItemDisabled = style({})   // .dropdown-item.disabled

// ── Divider, header, plain text ───────────────────────────────────────────────

export const dropdownDivider = style({})        // .dropdown-divider
export const dropdownHeader = style({})         // .dropdown-header
export const dropdownItemText = style({})       // .dropdown-item-text
