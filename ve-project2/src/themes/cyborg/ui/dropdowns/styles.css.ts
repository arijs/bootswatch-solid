import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyColor,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsDropdownItemBorderRadius,
	varBsTertiaryColor,
} from '../../../../theme-contract/_vars.css'
import {
	varBsDropdownBg,
	varBsDropdownBorderColor,
	varBsDropdownBorderRadius,
	varBsDropdownBorderWidth,
	varBsDropdownBoxShadow,
	varBsDropdownColor,
	varBsDropdownDividerBg,
	varBsDropdownDividerMarginY,
	varBsDropdownFontSize,
	varBsDropdownHeaderColor,
	varBsDropdownHeaderPaddingX,
	varBsDropdownHeaderPaddingY,
	varBsDropdownInnerBorderRadius,
	varBsDropdownItemPaddingX,
	varBsDropdownItemPaddingY,
	varBsDropdownLinkActiveBg,
	varBsDropdownLinkActiveColor,
	varBsDropdownLinkColor,
	varBsDropdownLinkDisabledColor,
	varBsDropdownLinkHoverBg,
	varBsDropdownLinkHoverColor,
	varBsDropdownMinWidth,
	varBsDropdownPaddingX,
	varBsDropdownPaddingY,
	varBsDropdownSpacer,
	varBsDropdownZindex,
} from '../../../../theme-contract/ui/dropdowns/_vars.css'
import {
	btn,
} from '../../../../theme-contract/ui/buttons/contract.css'
import {
	dropdown,
	dropdownCenter,
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownItemActive,
	dropdownItemDisabled,
	dropdownItemText,
	dropdownMenu,
	dropdownMenuDark,
	dropdownMenuEnd,
	dropdownMenuShow,
	dropdownMenuStart,
	dropdownToggle,
	dropdownToggleSplit,
	dropend,
	dropstart,
	dropup,
	dropupCenter,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	visuallyHidden,
} from '../../../../theme-contract/utilities/contract.css'
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/dropdowns
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1rem; }
// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// SOURCE CSS:
// .dropup { position: relative; }
globalStyle(`${cyborgScope}${dropup}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropend { position: relative; }
globalStyle(`${cyborgScope}${dropend}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropdown { position: relative; }
globalStyle(`${cyborgScope}${dropdown}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropstart { position: relative; }
globalStyle(`${cyborgScope}${dropstart}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropup-center { position: relative; }
globalStyle(`${cyborgScope}${dropupCenter}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropdown-center { position: relative; }
globalStyle(`${cyborgScope}${dropdownCenter}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropdown-toggle { white-space: nowrap; }
globalStyle(`${cyborgScope}${dropdownToggle}`, {
	whiteSpace: "nowrap",
})

// SOURCE CSS:
// .dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0.255em; content: ""; border-top: 0.3em solid; border-right: 0.3em solid transparent; border-bottom: 0; border-left: 0.3em solid transparent; }
globalStyle(`${cyborgScope}${dropdownToggle}::after`, {
	display: "inline-block",
	marginLeft: "0.255em",
	verticalAlign: "0.255em",
	content: "\"\"",
	borderTop: "0.3em solid",
	borderRight: "0.3em solid transparent",
	borderBottom: 0,
	borderLeft: "0.3em solid transparent",
})

// SOURCE CSS:
// .dropdown-toggle:empty::after { margin-left: 0; }
globalStyle(`${cyborgScope}${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropdown-menu { --bs-dropdown-zindex: 1000; --bs-dropdown-min-width: 10rem; --bs-dropdown-padding-x: 0; --bs-dropdown-padding-y: 0.5rem; --bs-dropdown-spacer: 0.125rem; --bs-dropdown-font-size: 1rem; --bs-dropdown-color: var(--bs-body-color); --bs-dropdown-bg: var(--bs-body-bg); --bs-dropdown-border-color: var(--bs-border-color-translucent); --bs-dropdown-border-radius: var(--bs-border-radius); --bs-dropdown-border-width: var(--bs-border-width); --bs-dropdown-inner-border-radius: calc(var(--bs-border-radius) - var(--bs-border-width)); --bs-dropdown-divider-bg: var(--bs-border-color-translucent); --bs-dropdown-divider-margin-y: 0.5rem; --bs-dropdown-box-shadow: var(--bs-box-shadow); --bs-dropdown-link-color: var(--bs-body-color); --bs-dropdown-link-hover-color: var(--bs-body-color); --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg); --bs-dropdown-link-active-color: #fff; --bs-dropdown-link-active-bg: #0d6efd; --bs-dropdown-link-disabled-color: var(--bs-tertiary-color); --bs-dropdown-item-padding-x: 1rem; --bs-dropdown-item-padding-y: 0.25rem; --bs-dropdown-header-color: #6c757d; --bs-dropdown-header-padding-x: 1rem; --bs-dropdown-header-padding-y: 0.5rem; position: absolute; z-index: var(--bs-dropdown-zindex); display: none; min-width: var(--bs-dropdown-min-width); padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x); margin: 0; font-size: var(--bs-dropdown-font-size); color: var(--bs-dropdown-color); text-align: left; list-style: none; background-color: var(--bs-dropdown-bg); background-clip: padding-box; border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color); border-radius: var(--bs-dropdown-border-radius); }
globalStyle(`${cyborgScope}${dropdownMenu}`, {
	vars: {
		[varBsDropdownZindex]: 1000,
		[varBsDropdownMinWidth]: "10rem",
		[varBsDropdownPaddingX]: 0,
		[varBsDropdownPaddingY]: "0.5rem",
		[varBsDropdownSpacer]: "0.125rem",
		[varBsDropdownFontSize]: "1rem",
		[varBsDropdownColor]: varBsBodyColor,
		[varBsDropdownBg]: "#282828",
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBorderRadius]: varBsBorderRadius,
		[varBsDropdownBorderWidth]: varBsBorderWidth,
		[varBsDropdownInnerBorderRadius]: `calc(${varBsBorderRadius} - ${varBsBorderWidth})`,
		[varBsDropdownDividerBg]: "#222",
		[varBsDropdownDividerMarginY]: "0.5rem",
		[varBsDropdownBoxShadow]: varBsBoxShadow,
		[varBsDropdownLinkColor]: "#fff",
		[varBsDropdownLinkHoverColor]: "#fff",
		[varBsDropdownLinkHoverBg]: "#2a9fd6",
		[varBsDropdownLinkActiveColor]: "#fff",
		[varBsDropdownLinkActiveBg]: "#2a9fd6",
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: "1rem",
		[varBsDropdownItemPaddingY]: "0.25rem",
		[varBsDropdownHeaderColor]: "#555",
		[varBsDropdownHeaderPaddingX]: "1rem",
		[varBsDropdownHeaderPaddingY]: "0.5rem",
	},
	position: "absolute",
	zIndex: varBsDropdownZindex,
	display: "none",
	minWidth: varBsDropdownMinWidth,
	padding: `${varBsDropdownPaddingY} ${varBsDropdownPaddingX}`,
	margin: 0,
	fontSize: varBsDropdownFontSize,
	color: varBsDropdownColor,
	textAlign: "left",
	listStyle: "none",
	backgroundColor: varBsDropdownBg,
	backgroundClip: "padding-box",
	border: `${varBsDropdownBorderWidth} solid ${varBsDropdownBorderColor}`,
	borderRadius: varBsDropdownBorderRadius,
})

// SOURCE CSS:
// .dropdown-divider { height: 0; margin: var(--bs-dropdown-divider-margin-y) 0; overflow: hidden; border-top: 1px solid var(--bs-dropdown-divider-bg); opacity: 1; }
globalStyle(`${cyborgScope}${dropdownDivider}`, {
	height: 0,
	margin: `${varBsDropdownDividerMarginY} 0`,
	overflow: "hidden",
	borderTop: `1px solid ${varBsDropdownDividerBg}`,
	opacity: 1,
})

// SOURCE CSS:
// .dropdown-item { display: block; width: 100%; padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x); clear: both; font-weight: 400; color: var(--bs-dropdown-link-color); text-align: inherit; text-decoration: none; white-space: nowrap; background-color: transparent; border: 0; border-radius: var(--bs-dropdown-item-border-radius, 0); }
globalStyle(`${cyborgScope}${dropdownItem}`, {
	display: "block",
	width: "100%",
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	clear: "both",
	fontWeight: 400,
	color: varBsDropdownLinkColor,
	textAlign: "inherit",
	textDecoration: "none",
	whiteSpace: "nowrap",
	backgroundColor: "transparent",
	border: 0,
	borderRadius: varBsDropdownItemBorderRadius,
})

// SOURCE CSS:
// .dropdown-item:hover { color: var(--bs-dropdown-link-hover-color); background-color: var(--bs-dropdown-link-hover-bg); }
globalStyle(`${cyborgScope}${dropdownItem}:hover`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

// SOURCE CSS:
// .dropdown-item:focus { color: var(--bs-dropdown-link-hover-color); background-color: var(--bs-dropdown-link-hover-bg); }
globalStyle(`${cyborgScope}${dropdownItem}:focus`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

// SOURCE CSS:
// .dropdown-item.active { color: var(--bs-dropdown-link-active-color); text-decoration: none; background-color: var(--bs-dropdown-link-active-bg); }
globalStyle(`${cyborgScope}${dropdownItem}${dropdownItemActive}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: "none",
	backgroundColor: varBsDropdownLinkActiveBg,
})

// SOURCE CSS:
// .dropdown-item:active { color: var(--bs-dropdown-link-active-color); text-decoration: none; background-color: var(--bs-dropdown-link-active-bg); }
globalStyle(`${cyborgScope}${dropdownItem}:active`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: "none",
	backgroundColor: varBsDropdownLinkActiveBg,
})

// SOURCE CSS:
// .dropdown-item.disabled { color: var(--bs-dropdown-link-disabled-color); pointer-events: none; background-color: transparent; }
globalStyle(`${cyborgScope}${dropdownItem}${dropdownItemDisabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: "none",
	backgroundColor: "transparent",
})

// SOURCE CSS:
// .dropdown-item:disabled { color: var(--bs-dropdown-link-disabled-color); pointer-events: none; background-color: transparent; }
globalStyle(`${cyborgScope}${dropdownItem}:disabled`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: "none",
	backgroundColor: "transparent",
})

// SOURCE CSS:
// .dropdown-header { display: block; padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x); margin-bottom: 0; font-size: 0.875rem; color: var(--bs-dropdown-header-color); white-space: nowrap; }
globalStyle(`${cyborgScope}${dropdownHeader}`, {
	display: "block",
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: "0.875rem",
	color: varBsDropdownHeaderColor,
	whiteSpace: "nowrap",
})

// SOURCE CSS:
// .dropdown-menu.show { display: block; }
globalStyle(`${cyborgScope}${dropdownMenu}${dropdownMenuShow}`, {
	display: "block",
})

// SOURCE CSS:
// .dropend .dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0; content: ""; border-top: 0.3em solid transparent; border-right: 0; border-bottom: 0.3em solid transparent; border-left: 0.3em solid; }
globalStyle(`${cyborgScope}${dropend} ${cyborgScope}${dropdownToggle}::after`, {
	display: "inline-block",
	marginLeft: "0.255em",
	verticalAlign: 0,
	content: "\"\"",
	borderTop: "0.3em solid transparent",
	borderRight: 0,
	borderBottom: "0.3em solid transparent",
	borderLeft: "0.3em solid",
})

// SOURCE CSS:
// .dropend .dropdown-toggle:empty::after { margin-left: 0; }
globalStyle(`${cyborgScope}${dropend} ${cyborgScope}${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropdown-toggle-split { padding-right: 0.5625rem; padding-left: 0.5625rem; }
globalStyle(`${cyborgScope}${btn}${dropdownToggleSplit}`, {
	paddingRight: "0.75rem",
	paddingLeft: "0.75rem",
})

// SOURCE CSS:
// .dropdown-toggle-split::after { margin-left: 0; }
globalStyle(`${cyborgScope}${dropdownToggleSplit}::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropup .dropdown-toggle-split::after { margin-left: 0; }
globalStyle(`${cyborgScope}${dropup} ${cyborgScope}${dropdownToggleSplit}::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropend .dropdown-toggle-split::after { margin-left: 0; }
globalStyle(`${cyborgScope}${dropend} ${cyborgScope}${dropdownToggleSplit}::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .visually-hidden { width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0, 0, 0, 0) !important; white-space: nowrap !important; border: 0 !important; }
globalStyle(`${cyborgScope}${visuallyHidden}`, {
	width: "1px !important",
	height: "1px !important",
	padding: "0 !important",
	margin: "-1px !important",
	overflow: "hidden !important",
	clip: "rect(0, 0, 0, 0) !important",
	whiteSpace: "nowrap !important",
	border: "0 !important",
})

// SOURCE CSS:
// .visually-hidden:not(caption) { position: absolute !important; }
// [UNMAPPED_SELECTOR] element selector "caption" — map to a contract class
globalStyle(`${cyborgScope}${visuallyHidden}:not(caption)`, {
	position: "absolute !important",
})

// SOURCE CSS:
// .dropstart .dropdown-toggle::after { display: none; margin-left: 0.255em; vertical-align: 0.255em; content: ""; }
globalStyle(`${cyborgScope}${dropstart} ${cyborgScope}${dropdownToggle}::after`, {
	display: "none",
	marginLeft: "0.255em",
	verticalAlign: "0.255em",
	content: "\"\"",
})

// SOURCE CSS:
// .dropstart .dropdown-toggle::before { display: inline-block; margin-right: 0.255em; vertical-align: 0; content: ""; border-top: 0.3em solid transparent; border-right: 0.3em solid; border-bottom: 0.3em solid transparent; }
globalStyle(`${cyborgScope}${dropstart} ${cyborgScope}${dropdownToggle}::before`, {
	display: "inline-block",
	marginRight: "0.255em",
	verticalAlign: 0,
	content: "\"\"",
	borderTop: "0.3em solid transparent",
	borderRight: "0.3em solid",
	borderBottom: "0.3em solid transparent",
})

// SOURCE CSS:
// .dropstart .dropdown-toggle:empty::after { margin-left: 0; }
globalStyle(`${cyborgScope}${dropstart} ${cyborgScope}${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropup .dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0.255em; content: ""; border-top: 0; border-right: 0.3em solid transparent; border-bottom: 0.3em solid; border-left: 0.3em solid transparent; }
globalStyle(`${cyborgScope}${dropup} ${cyborgScope}${dropdownToggle}::after`, {
	display: "inline-block",
	marginLeft: "0.255em",
	verticalAlign: "0.255em",
	content: "\"\"",
	borderTop: 0,
	borderRight: "0.3em solid transparent",
	borderBottom: "0.3em solid",
	borderLeft: "0.3em solid transparent",
})

// SOURCE CSS:
// .dropup .dropdown-toggle:empty::after { margin-left: 0; }
globalStyle(`${cyborgScope}${dropup} ${cyborgScope}${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .dropdown-menu[data-bs-popper] { top: 100%; left: 0; margin-top: var(--bs-dropdown-spacer); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${dropdownMenu}[data-bs-popper]`, {
	top: "100%",
	left: 0,
	marginTop: varBsDropdownSpacer,
})
// SOURCE CSS:
// .dropdown-menu-start[data-bs-popper] { right: auto; left: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${dropdownMenuStart}[data-bs-popper]`, {
	right: "auto",
	left: 0,
})
// SOURCE CSS:
// .dropdown-menu-end[data-bs-popper] { right: 0; left: auto; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${dropdownMenuEnd}[data-bs-popper]`, {
	right: 0,
	left: "auto",
})
// SOURCE CSS:
// .dropdown-item-text { display: block; padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x); color: var(--bs-dropdown-link-color); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${dropdownItemText}`, {
	display: "block",
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})
// SOURCE CSS:
// .dropdown-menu-dark { --bs-dropdown-color: #dee2e6; --bs-dropdown-bg: #222; --bs-dropdown-border-color: var(--bs-border-color-translucent); --bs-dropdown-box-shadow: ; --bs-dropdown-link-color: #dee2e6; --bs-dropdown-link-hover-color: #fff; --bs-dropdown-divider-bg: #222; --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15); --bs-dropdown-link-active-color: #fff; --bs-dropdown-link-active-bg: #2a9fd6; --bs-dropdown-link-disabled-color: #888; --bs-dropdown-header-color: #888; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${dropdownMenuDark}`, {
	vars: {
		[varBsDropdownColor]: "#dee2e6",
		[varBsDropdownBg]: "#222",
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBoxShadow]: "",
		[varBsDropdownLinkColor]: "#dee2e6",
		[varBsDropdownLinkHoverColor]: "#fff",
		[varBsDropdownDividerBg]: "#222",
		[varBsDropdownLinkHoverBg]: "rgba(255, 255, 255, 0.15)",
		[varBsDropdownLinkActiveColor]: "#fff",
		[varBsDropdownLinkActiveBg]: "#2a9fd6",
		[varBsDropdownLinkDisabledColor]: "#888",
		[varBsDropdownHeaderColor]: "#888",
	},
})
