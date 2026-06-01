import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColorTranslucent,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBoxShadow,
	varBsDropdownItemBorderRadius,
	varBsHeadingColor,
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
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'
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
import { ceruleanScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/dropdowns
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1rem; }
globalStyle(`${ceruleanScope}${h6}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1rem",
})

// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${ceruleanScope}${h5}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${ceruleanScope}${h4}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${ceruleanScope}${h3}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${ceruleanScope}${h2}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${ceruleanScope}${h1}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .dropup { position: relative; }
globalStyle(`${ceruleanScope}${dropup}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropend { position: relative; }
globalStyle(`${ceruleanScope}${dropend}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropdown { position: relative; }
globalStyle(`${ceruleanScope}${dropdown}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropstart { position: relative; }
globalStyle(`${ceruleanScope}${dropstart}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropup-center { position: relative; }
globalStyle(`${ceruleanScope}${dropupCenter}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropdown-center { position: relative; }
globalStyle(`${ceruleanScope}${dropdownCenter}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropdown-toggle { white-space: nowrap; }
globalStyle(`${ceruleanScope}${dropdownToggle}`, {
	whiteSpace: "nowrap",
})

// SOURCE CSS:
// .dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0.255em; content: ""; border-top: 0.3em solid; border-right: 0.3em solid transparent; border-bottom: 0; border-left: 0.3em solid transparent; }
globalStyle(`${ceruleanScope}${dropdownToggle}::after`, {
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
globalStyle(`${ceruleanScope}${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropdown-menu { --bs-dropdown-zindex: 1000; --bs-dropdown-min-width: 10rem; --bs-dropdown-padding-x: 0; --bs-dropdown-padding-y: 0.5rem; --bs-dropdown-spacer: 0.125rem; --bs-dropdown-font-size: 1rem; --bs-dropdown-color: var(--bs-body-color); --bs-dropdown-bg: var(--bs-body-bg); --bs-dropdown-border-color: var(--bs-border-color-translucent); --bs-dropdown-border-radius: var(--bs-border-radius); --bs-dropdown-border-width: var(--bs-border-width); --bs-dropdown-inner-border-radius: calc(var(--bs-border-radius) - var(--bs-border-width)); --bs-dropdown-divider-bg: var(--bs-border-color-translucent); --bs-dropdown-divider-margin-y: 0.5rem; --bs-dropdown-box-shadow: var(--bs-box-shadow); --bs-dropdown-link-color: var(--bs-body-color); --bs-dropdown-link-hover-color: var(--bs-body-color); --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg); --bs-dropdown-link-active-color: #fff; --bs-dropdown-link-active-bg: #0d6efd; --bs-dropdown-link-disabled-color: var(--bs-tertiary-color); --bs-dropdown-item-padding-x: 1rem; --bs-dropdown-item-padding-y: 0.25rem; --bs-dropdown-header-color: #6c757d; --bs-dropdown-header-padding-x: 1rem; --bs-dropdown-header-padding-y: 0.5rem; position: absolute; z-index: var(--bs-dropdown-zindex); display: none; min-width: var(--bs-dropdown-min-width); padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x); margin: 0; font-size: var(--bs-dropdown-font-size); color: var(--bs-dropdown-color); text-align: left; list-style: none; background-color: var(--bs-dropdown-bg); background-clip: padding-box; border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color); border-radius: var(--bs-dropdown-border-radius); }
globalStyle(`${ceruleanScope}${dropdownMenu}`, {
	vars: {
		[varBsDropdownZindex]: 1000,
		[varBsDropdownMinWidth]: "10rem",
		[varBsDropdownPaddingX]: 0,
		[varBsDropdownPaddingY]: "0.5rem",
		[varBsDropdownSpacer]: "0.125rem",
		[varBsDropdownFontSize]: "1rem",
		[varBsDropdownColor]: varBsBodyColor,
		[varBsDropdownBg]: varBsBodyBg,
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBorderRadius]: varBsBorderRadius,
		[varBsDropdownBorderWidth]: varBsBorderWidth,
		[varBsDropdownInnerBorderRadius]: `calc(${varBsBorderRadius} - ${varBsBorderWidth})`,
		[varBsDropdownDividerBg]: varBsBorderColorTranslucent,
		[varBsDropdownDividerMarginY]: "0.5rem",
		[varBsDropdownBoxShadow]: varBsBoxShadow,
		[varBsDropdownLinkColor]: varBsBodyColor,
		[varBsDropdownLinkHoverColor]: "#fff",
		[varBsDropdownLinkHoverBg]: "#2fa4e7",
		[varBsDropdownLinkActiveColor]: "#fff",
		[varBsDropdownLinkActiveBg]: "#2fa4e7",
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: "1rem",
		[varBsDropdownItemPaddingY]: "0.25rem",
		[varBsDropdownHeaderColor]: "#868e96",
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
globalStyle(`${ceruleanScope}${dropdownDivider}`, {
	height: 0,
	margin: `${varBsDropdownDividerMarginY} 0`,
	overflow: "hidden",
	borderTop: `1px solid ${varBsDropdownDividerBg}`,
	opacity: 1,
})

// SOURCE CSS:
// .dropdown-item { display: block; width: 100%; padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x); clear: both; font-weight: 400; color: var(--bs-dropdown-link-color); text-align: inherit; text-decoration: none; white-space: nowrap; background-color: transparent; border: 0; border-radius: var(--bs-dropdown-item-border-radius, 0); }
globalStyle(`${ceruleanScope}${dropdownItem}`, {
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
globalStyle(`${ceruleanScope}${dropdownItem}:hover`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

// SOURCE CSS:
// .dropdown-item:focus { color: var(--bs-dropdown-link-hover-color); background-color: var(--bs-dropdown-link-hover-bg); }
globalStyle(`${ceruleanScope}${dropdownItem}:focus`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

// SOURCE CSS:
// .dropdown-item.active { color: var(--bs-dropdown-link-active-color); text-decoration: none; background-color: var(--bs-dropdown-link-active-bg); }
globalStyle(`${ceruleanScope}${dropdownItem}${dropdownItemActive}`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: "none",
	backgroundColor: varBsDropdownLinkActiveBg,
})

// SOURCE CSS:
// .dropdown-item:active { color: var(--bs-dropdown-link-active-color); text-decoration: none; background-color: var(--bs-dropdown-link-active-bg); }
globalStyle(`${ceruleanScope}${dropdownItem}:active`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: "none",
	backgroundColor: varBsDropdownLinkActiveBg,
})

// SOURCE CSS:
// .dropdown-item.disabled { color: var(--bs-dropdown-link-disabled-color); pointer-events: none; background-color: transparent; }
globalStyle(`${ceruleanScope}${dropdownItem}${dropdownItemDisabled}`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: "none",
	backgroundColor: "transparent",
})

// SOURCE CSS:
// .dropdown-item:disabled { color: var(--bs-dropdown-link-disabled-color); pointer-events: none; background-color: transparent; }
globalStyle(`${ceruleanScope}${dropdownItem}:disabled`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: "none",
	backgroundColor: "transparent",
})

// SOURCE CSS:
// .dropdown-header { display: block; padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x); margin-bottom: 0; font-size: 0.875rem; color: var(--bs-dropdown-header-color); white-space: nowrap; }
globalStyle(`${ceruleanScope}${dropdownHeader}`, {
	display: "block",
	padding: `${varBsDropdownHeaderPaddingY} ${varBsDropdownHeaderPaddingX}`,
	marginBottom: 0,
	fontSize: "0.875rem",
	color: varBsDropdownHeaderColor,
	whiteSpace: "nowrap",
})

// SOURCE CSS:
// .dropdown-menu.show { display: block; }
globalStyle(`${ceruleanScope}${dropdownMenu}${dropdownMenuShow}`, {
	display: "block",
})

// SOURCE CSS:
// .dropend .dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0; content: ""; border-top: 0.3em solid transparent; border-right: 0; border-bottom: 0.3em solid transparent; border-left: 0.3em solid; }
globalStyle(`${ceruleanScope}${dropend} ${ceruleanScope}${dropdownToggle}::after`, {
	display: "inline-block",
	marginLeft: "0.255em",
	verticalAlign: 0,
	content: "\"\"",
	borderTop: "0.3em solid transparent",
	borderRight: 0,
	borderBottom: "0.3em solid transparent",
	borderLeft: "0.3em solid",
	position: "relative",
})

// SOURCE CSS:
// .dropend .dropdown-toggle:empty::after { margin-left: 0; }
globalStyle(`${ceruleanScope}${dropend} ${ceruleanScope}${dropdownToggle}:empty::after`, {
	marginLeft: 0,
	position: "relative",
})

// SOURCE CSS:
// .dropdown-toggle-split { padding-right: 0.5625rem; padding-left: 0.5625rem; }
globalStyle(`${ceruleanScope}${btn}${dropdownToggleSplit}`, {
	paddingRight: "0.5625rem",
	paddingLeft: "0.5625rem",
})

// SOURCE CSS:
// .dropdown-toggle-split::after { margin-left: 0; }
globalStyle(`${ceruleanScope}${dropdownToggleSplit}::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropup .dropdown-toggle-split::after { margin-left: 0; }
globalStyle(`${ceruleanScope}${dropup} ${ceruleanScope}${dropdownToggleSplit}::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropend .dropdown-toggle-split::after { margin-left: 0; }
globalStyle(`${ceruleanScope}${dropend} ${ceruleanScope}${dropdownToggleSplit}::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .visually-hidden { width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0, 0, 0, 0) !important; white-space: nowrap !important; border: 0 !important; }
globalStyle(`${ceruleanScope}${visuallyHidden}`, {
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
globalStyle(`${ceruleanScope}${visuallyHidden}:not(caption)`, {
	position: "absolute !important",
})

// SOURCE CSS:
// .dropstart .dropdown-toggle::after { display: none; margin-left: 0.255em; vertical-align: 0.255em; content: ""; }
globalStyle(`${ceruleanScope}${dropstart} ${ceruleanScope}${dropdownToggle}::after`, {
	display: "none",
	marginLeft: "0.255em",
	verticalAlign: "0.255em",
	content: "\"\"",
	position: "relative",
})

// SOURCE CSS:
// .dropstart .dropdown-toggle::before { display: inline-block; margin-right: 0.255em; vertical-align: 0; content: ""; border-top: 0.3em solid transparent; border-right: 0.3em solid; border-bottom: 0.3em solid transparent; }
globalStyle(`${ceruleanScope}${dropstart} ${ceruleanScope}${dropdownToggle}::before`, {
	display: "inline-block",
	marginRight: "0.255em",
	verticalAlign: 0,
	content: "\"\"",
	borderTop: "0.3em solid transparent",
	borderRight: "0.3em solid",
	borderBottom: "0.3em solid transparent",
	position: "relative",
})

// SOURCE CSS:
// .dropstart .dropdown-toggle:empty::after { margin-left: 0; }
globalStyle(`${ceruleanScope}${dropstart} ${ceruleanScope}${dropdownToggle}:empty::after`, {
	marginLeft: 0,
	position: "relative",
})

// SOURCE CSS:
// .dropup .dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0.255em; content: ""; border-top: 0; border-right: 0.3em solid transparent; border-bottom: 0.3em solid; border-left: 0.3em solid transparent; }
globalStyle(`${ceruleanScope}${dropup} ${ceruleanScope}${dropdownToggle}::after`, {
	display: "inline-block",
	marginLeft: "0.255em",
	verticalAlign: "0.255em",
	content: "\"\"",
	borderTop: 0,
	borderRight: "0.3em solid transparent",
	borderBottom: "0.3em solid",
	borderLeft: "0.3em solid transparent",
	position: "relative",
})

// SOURCE CSS:
// .dropup .dropdown-toggle:empty::after { margin-left: 0; }
globalStyle(`${ceruleanScope}${dropup} ${ceruleanScope}${dropdownToggle}:empty::after`, {
	marginLeft: 0,
	position: "relative",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .dropdown-menu[data-bs-popper] { top: 100%; left: 0; margin-top: var(--bs-dropdown-spacer); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${dropdownMenu}[data-bs-popper]`, {
	top: "100%",
	left: 0,
	marginTop: varBsDropdownSpacer,
})
// SOURCE CSS:
// .dropdown-menu-start[data-bs-popper] { right: auto; left: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${dropdownMenuStart}[data-bs-popper]`, {
	right: "auto",
	left: 0,
})
// SOURCE CSS:
// .dropdown-menu-end[data-bs-popper] { right: 0; left: auto; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${dropdownMenuEnd}[data-bs-popper]`, {
	right: 0,
	left: "auto",
})
// SOURCE CSS:
// .dropdown-item-text { display: block; padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x); color: var(--bs-dropdown-link-color); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${dropdownItemText}`, {
	display: "block",
	padding: `${varBsDropdownItemPaddingY} ${varBsDropdownItemPaddingX}`,
	color: varBsDropdownLinkColor,
})
// SOURCE CSS:
// .dropdown-menu-dark { --bs-dropdown-color: #dee2e6; --bs-dropdown-bg: #343a40; --bs-dropdown-border-color: var(--bs-border-color-translucent); --bs-dropdown-box-shadow: ; --bs-dropdown-link-color: #dee2e6; --bs-dropdown-link-hover-color: #fff; --bs-dropdown-divider-bg: var(--bs-border-color-translucent); --bs-dropdown-link-hover-bg: rgba(255, 255, 255, 0.15); --bs-dropdown-link-active-color: #fff; --bs-dropdown-link-active-bg: #2fa4e7; --bs-dropdown-link-disabled-color: #adb5bd; --bs-dropdown-header-color: #adb5bd; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${dropdownMenuDark}`, {
	vars: {
		[varBsDropdownColor]: "#dee2e6",
		[varBsDropdownBg]: "#343a40",
		[varBsDropdownBorderColor]: varBsBorderColorTranslucent,
		[varBsDropdownBoxShadow]: "",
		[varBsDropdownLinkColor]: "#dee2e6",
		[varBsDropdownLinkHoverColor]: "#fff",
		[varBsDropdownDividerBg]: varBsBorderColorTranslucent,
		[varBsDropdownLinkHoverBg]: "rgba(255, 255, 255, 0.15)",
		[varBsDropdownLinkActiveColor]: "#fff",
		[varBsDropdownLinkActiveBg]: "#2fa4e7",
		[varBsDropdownLinkDisabledColor]: "#adb5bd",
		[varBsDropdownHeaderColor]: "#adb5bd",
	},
})
// SOURCE CSS:
// .dropdown-menu .dropdown-header { color: #868e96; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${dropdownMenu} ${ceruleanScope}${dropdownHeader}`, {
	color: "#868e96",
})
