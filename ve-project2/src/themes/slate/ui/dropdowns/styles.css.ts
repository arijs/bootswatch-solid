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
	varBsLinkColorRgb,
	varBsLinkHoverColorRgb,
	varBsTertiaryBg,
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
	horizontalRule,
	link,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'
import {
	dropdown,
	dropdownCenter,
	dropdownDivider,
	dropdownHeader,
	dropdownItem,
	dropdownMenu,
	dropdownToggle,
	dropdownToggleSplit,
	dropend,
	dropstart,
	dropup,
	dropupCenter,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import { slateScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/dropdowns
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// hr { margin: 1rem 0; color: inherit; border: 0; border-top: var(--bs-border-width) solid; opacity: 0.25; }
globalStyle(`${slateScope}${horizontalRule}`, {
	margin: "1rem 0",
	color: "inherit",
	border: 0,
	borderTop: "var(--bs-border-width) solid",
	opacity: 0.25,
})

// SOURCE CSS:
// h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1rem; }
globalStyle(`${slateScope}${h6}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1rem",
})

// SOURCE CSS:
// .h6 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); font-size: 1rem; }
// [UNMAPPED_SELECTOR] class ".h6" — no contract mapping
globalStyle(`.h6`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
	fontSize: "1rem",
})

// SOURCE CSS:
// h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${slateScope}${h5}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h5 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h5" — no contract mapping
globalStyle(`.h5`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${slateScope}${h4}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h4 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h4" — no contract mapping
globalStyle(`.h4`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${slateScope}${h3}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h3 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h3" — no contract mapping
globalStyle(`.h3`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${slateScope}${h2}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h2 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h2" — no contract mapping
globalStyle(`.h2`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
globalStyle(`${slateScope}${h1}`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// .h1 { margin-top: 0; margin-bottom: 0.5rem; font-weight: 500; line-height: 1.2; color: var(--bs-heading-color); }
// [UNMAPPED_SELECTOR] class ".h1" — no contract mapping
globalStyle(`.h1`, {
	marginTop: 0,
	marginBottom: "0.5rem",
	fontWeight: 500,
	lineHeight: 1.2,
	color: varBsHeadingColor,
})

// SOURCE CSS:
// ol { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
globalStyle(`ol`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "0.5rem",
})

// SOURCE CSS:
// ul { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
globalStyle(`ul`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "0.5rem",
})

// SOURCE CSS:
// dl { margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "dl" — map to a contract class
globalStyle(`dl`, {
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// a { color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1)); text-decoration: underline; }
// [UNMAPPED_SELECTOR] element selector "a" — map to a contract class
globalStyle(`a`, {
	color: "rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1))",
	textDecoration: "underline",
})

// SOURCE CSS:
// a:hover { --bs-link-color-rgb: var(--bs-link-hover-color-rgb); }
// [UNMAPPED_SELECTOR] element selector "a:hover" — map to a contract class
globalStyle(`a:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})

// SOURCE CSS:
// a:not([href]):not([class]) { color: inherit; text-decoration: none; }
// [UNMAPPED_SELECTOR] element selector "a:not([href]):not([class])" — map to a contract class
globalStyle(`a:not([href]):not([class])`, {
	color: "inherit",
	textDecoration: "none",
})

// SOURCE CSS:
// a:not([href]):not([class]):hover { color: inherit; text-decoration: none; }
// [UNMAPPED_SELECTOR] element selector "a:not([href]):not([class]):hover" — map to a contract class
globalStyle(`a:not([href]):not([class]):hover`, {
	color: "inherit",
	textDecoration: "none",
})

// SOURCE CSS:
// button { border-radius: 0; margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; appearance: button; }
// [UNMAPPED_SELECTOR] element selector "button" — map to a contract class
globalStyle(`button`, {
	borderRadius: 0,
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
	appearance: "button",
})

// SOURCE CSS:
// button:focus:not(:focus-visible) { outline: 0; }
// [UNMAPPED_SELECTOR] element selector "button:focus:not(:focus-visible)" — map to a contract class
globalStyle(`button:focus:not(:focus-visible)`, {
	outline: 0,
})

// SOURCE CSS:
// input { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "input" — map to a contract class
globalStyle(`input`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// select { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; text-transform: none; }
// [UNMAPPED_SELECTOR] element selector "select" — map to a contract class
globalStyle(`select`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
})

// SOURCE CSS:
// optgroup { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "optgroup" — map to a contract class
globalStyle(`optgroup`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [UNMAPPED_SELECTOR] element selector "textarea" — map to a contract class
globalStyle(`textarea`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})

// SOURCE CSS:
// [type="button"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="button"]" — map to a contract class
globalStyle(`[type="button"]`, {
	appearance: "button",
})

// SOURCE CSS:
// [type="reset"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="reset"]" — map to a contract class
globalStyle(`[type="reset"]`, {
	appearance: "button",
})

// SOURCE CSS:
// [type="submit"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="submit"]" — map to a contract class
globalStyle(`[type="submit"]`, {
	appearance: "button",
})

// SOURCE CSS:
// button:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "button:not(:disabled)" — map to a contract class
globalStyle(`button:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="button"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="button"]:not(:disabled)" — map to a contract class
globalStyle(`[type="button"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="reset"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="reset"]:not(:disabled)" — map to a contract class
globalStyle(`[type="reset"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="submit"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="submit"]:not(:disabled)" — map to a contract class
globalStyle(`[type="submit"]:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .dropup { position: relative; }
globalStyle(`${slateScope}${dropup}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropend { position: relative; }
globalStyle(`${slateScope}${dropend}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropdown { position: relative; }
globalStyle(`${slateScope}${dropdown}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropstart { position: relative; }
globalStyle(`${slateScope}${dropstart}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropup-center { position: relative; }
globalStyle(`${slateScope}${dropupCenter}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropdown-center { position: relative; }
globalStyle(`${slateScope}${dropdownCenter}`, {
	position: "relative",
})

// SOURCE CSS:
// .dropdown-toggle { white-space: nowrap; }
globalStyle(`${slateScope}${dropdownToggle}`, {
	whiteSpace: "nowrap",
})

// SOURCE CSS:
// .dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0.255em; content: ""; border-top: 0.3em solid; border-right: 0.3em solid transparent; border-bottom: 0; border-left: 0.3em solid transparent; }
globalStyle(`${slateScope}${dropdownToggle}::after`, {
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
globalStyle(`${slateScope}${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropdown-menu { --bs-dropdown-zindex: 1000; --bs-dropdown-min-width: 10rem; --bs-dropdown-padding-x: 0; --bs-dropdown-padding-y: 0.5rem; --bs-dropdown-spacer: 0.125rem; --bs-dropdown-font-size: 1rem; --bs-dropdown-color: var(--bs-body-color); --bs-dropdown-bg: var(--bs-body-bg); --bs-dropdown-border-color: var(--bs-border-color-translucent); --bs-dropdown-border-radius: var(--bs-border-radius); --bs-dropdown-border-width: var(--bs-border-width); --bs-dropdown-inner-border-radius: calc(var(--bs-border-radius) - var(--bs-border-width)); --bs-dropdown-divider-bg: var(--bs-border-color-translucent); --bs-dropdown-divider-margin-y: 0.5rem; --bs-dropdown-box-shadow: var(--bs-box-shadow); --bs-dropdown-link-color: var(--bs-body-color); --bs-dropdown-link-hover-color: var(--bs-body-color); --bs-dropdown-link-hover-bg: var(--bs-tertiary-bg); --bs-dropdown-link-active-color: #fff; --bs-dropdown-link-active-bg: #0d6efd; --bs-dropdown-link-disabled-color: var(--bs-tertiary-color); --bs-dropdown-item-padding-x: 1rem; --bs-dropdown-item-padding-y: 0.25rem; --bs-dropdown-header-color: #6c757d; --bs-dropdown-header-padding-x: 1rem; --bs-dropdown-header-padding-y: 0.5rem; position: absolute; z-index: var(--bs-dropdown-zindex); display: none; min-width: var(--bs-dropdown-min-width); padding: var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x); margin: 0; font-size: var(--bs-dropdown-font-size); color: var(--bs-dropdown-color); text-align: left; list-style: none; background-color: var(--bs-dropdown-bg); background-clip: padding-box; border: var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color); border-radius: var(--bs-dropdown-border-radius); }
globalStyle(`${slateScope}${dropdownMenu}`, {
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
		[varBsDropdownInnerBorderRadius]: "calc(var(--bs-border-radius) - var(--bs-border-width))",
		[varBsDropdownDividerBg]: varBsBorderColorTranslucent,
		[varBsDropdownDividerMarginY]: "0.5rem",
		[varBsDropdownBoxShadow]: varBsBoxShadow,
		[varBsDropdownLinkColor]: varBsBodyColor,
		[varBsDropdownLinkHoverColor]: varBsBodyColor,
		[varBsDropdownLinkHoverBg]: varBsTertiaryBg,
		[varBsDropdownLinkActiveColor]: "#fff",
		[varBsDropdownLinkActiveBg]: "#0d6efd",
		[varBsDropdownLinkDisabledColor]: varBsTertiaryColor,
		[varBsDropdownItemPaddingX]: "1rem",
		[varBsDropdownItemPaddingY]: "0.25rem",
		[varBsDropdownHeaderColor]: "#6c757d",
		[varBsDropdownHeaderPaddingX]: "1rem",
		[varBsDropdownHeaderPaddingY]: "0.5rem",
	},
	position: "absolute",
	zIndex: varBsDropdownZindex,
	display: "none",
	minWidth: varBsDropdownMinWidth,
	padding: "var(--bs-dropdown-padding-y) var(--bs-dropdown-padding-x)",
	margin: 0,
	fontSize: varBsDropdownFontSize,
	color: varBsDropdownColor,
	textAlign: "left",
	listStyle: "none",
	backgroundColor: varBsDropdownBg,
	backgroundClip: "padding-box",
	border: "var(--bs-dropdown-border-width) solid var(--bs-dropdown-border-color)",
	borderRadius: varBsDropdownBorderRadius,
})

// SOURCE CSS:
// .dropdown-divider { height: 0; margin: var(--bs-dropdown-divider-margin-y) 0; overflow: hidden; border-top: 1px solid var(--bs-dropdown-divider-bg); opacity: 1; }
globalStyle(`${slateScope}${dropdownDivider}`, {
	height: 0,
	margin: "var(--bs-dropdown-divider-margin-y) 0",
	overflow: "hidden",
	borderTop: "1px solid var(--bs-dropdown-divider-bg)",
	opacity: 1,
})

// SOURCE CSS:
// .dropdown-item { display: block; width: 100%; padding: var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x); clear: both; font-weight: 400; color: var(--bs-dropdown-link-color); text-align: inherit; text-decoration: none; white-space: nowrap; background-color: transparent; border: 0; border-radius: var(--bs-dropdown-item-border-radius, 0); }
globalStyle(`${slateScope}${dropdownItem}`, {
	display: "block",
	width: "100%",
	padding: "var(--bs-dropdown-item-padding-y) var(--bs-dropdown-item-padding-x)",
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
globalStyle(`${slateScope}${dropdownItem}:hover`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

// SOURCE CSS:
// .dropdown-item:focus { color: var(--bs-dropdown-link-hover-color); background-color: var(--bs-dropdown-link-hover-bg); }
globalStyle(`${slateScope}${dropdownItem}:focus`, {
	color: varBsDropdownLinkHoverColor,
	backgroundColor: varBsDropdownLinkHoverBg,
})

// SOURCE CSS:
// .dropdown-item.active { color: var(--bs-dropdown-link-active-color); text-decoration: none; background-color: var(--bs-dropdown-link-active-bg); }
globalStyle(`${slateScope}${dropdownItem}.active`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: "none",
	backgroundColor: varBsDropdownLinkActiveBg,
})

// SOURCE CSS:
// .dropdown-item:active { color: var(--bs-dropdown-link-active-color); text-decoration: none; background-color: var(--bs-dropdown-link-active-bg); }
globalStyle(`${slateScope}${dropdownItem}:active`, {
	color: varBsDropdownLinkActiveColor,
	textDecoration: "none",
	backgroundColor: varBsDropdownLinkActiveBg,
})

// SOURCE CSS:
// .dropdown-item.disabled { color: var(--bs-dropdown-link-disabled-color); pointer-events: none; background-color: transparent; }
globalStyle(`${slateScope}${dropdownItem}.disabled`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: "none",
	backgroundColor: "transparent",
})

// SOURCE CSS:
// .dropdown-item:disabled { color: var(--bs-dropdown-link-disabled-color); pointer-events: none; background-color: transparent; }
globalStyle(`${slateScope}${dropdownItem}:disabled`, {
	color: varBsDropdownLinkDisabledColor,
	pointerEvents: "none",
	backgroundColor: "transparent",
})

// SOURCE CSS:
// .dropdown-header { display: block; padding: var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x); margin-bottom: 0; font-size: 0.875rem; color: var(--bs-dropdown-header-color); white-space: nowrap; }
globalStyle(`${slateScope}${dropdownHeader}`, {
	display: "block",
	padding: "var(--bs-dropdown-header-padding-y) var(--bs-dropdown-header-padding-x)",
	marginBottom: 0,
	fontSize: "0.875rem",
	color: varBsDropdownHeaderColor,
	whiteSpace: "nowrap",
})

// SOURCE CSS:
// .dropdown-menu.show { display: block; }
globalStyle(`${slateScope}${dropdownMenu}.show`, {
	display: "block",
})

// SOURCE CSS:
// .dropend .dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0; content: ""; border-top: 0.3em solid transparent; border-right: 0; border-bottom: 0.3em solid transparent; border-left: 0.3em solid; }
globalStyle(`${slateScope}${dropend} ${slateScope}${dropdownToggle}::after`, {
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
globalStyle(`${slateScope}${dropend} ${slateScope}${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropdown-toggle-split { padding-right: 0.5625rem; padding-left: 0.5625rem; }
globalStyle(`${slateScope}${dropdownToggleSplit}`, {
	paddingRight: "0.5625rem",
	paddingLeft: "0.5625rem",
})

// SOURCE CSS:
// .dropdown-toggle-split::after { margin-left: 0; }
globalStyle(`${slateScope}${dropdownToggleSplit}::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropup .dropdown-toggle-split::after { margin-left: 0; }
globalStyle(`${slateScope}${dropup} ${slateScope}${dropdownToggleSplit}::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropend .dropdown-toggle-split::after { margin-left: 0; }
globalStyle(`${slateScope}${dropend} ${slateScope}${dropdownToggleSplit}::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .visually-hidden { width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0, 0, 0, 0) !important; white-space: nowrap !important; border: 0 !important; }
// [UNMAPPED_SELECTOR] class ".visually-hidden" — no contract mapping
globalStyle(`.visually-hidden`, {
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
// .visually-hidden-focusable:not(:focus):not(:focus-within) { width: 1px !important; height: 1px !important; padding: 0 !important; margin: -1px !important; overflow: hidden !important; clip: rect(0, 0, 0, 0) !important; white-space: nowrap !important; border: 0 !important; }
// [UNMAPPED_SELECTOR] class ".visually-hidden-focusable" — no contract mapping
globalStyle(`.visually-hidden-focusable:not(:focus):not(:focus-within)`, {
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
// [UNMAPPED_SELECTOR] class ".visually-hidden" — no contract mapping
globalStyle(`.visually-hidden:not(caption)`, {
	position: "absolute !important",
})

// SOURCE CSS:
// .visually-hidden-focusable:not(:focus):not(:focus-within):not(caption) { position: absolute !important; }
// [UNMAPPED_SELECTOR] class ".visually-hidden-focusable" — no contract mapping
globalStyle(`.visually-hidden-focusable:not(:focus):not(:focus-within):not(caption)`, {
	position: "absolute !important",
})

// SOURCE CSS:
// .dropstart .dropdown-toggle::after { display: none; margin-left: 0.255em; vertical-align: 0.255em; content: ""; }
globalStyle(`${slateScope}${dropstart} ${slateScope}${dropdownToggle}::after`, {
	display: "none",
	marginLeft: "0.255em",
	verticalAlign: "0.255em",
	content: "\"\"",
})

// SOURCE CSS:
// .dropstart .dropdown-toggle::before { display: inline-block; margin-right: 0.255em; vertical-align: 0; content: ""; border-top: 0.3em solid transparent; border-right: 0.3em solid; border-bottom: 0.3em solid transparent; }
globalStyle(`${slateScope}${dropstart} ${slateScope}${dropdownToggle}::before`, {
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
globalStyle(`${slateScope}${dropstart} ${slateScope}${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// SOURCE CSS:
// .dropup .dropdown-toggle::after { display: inline-block; margin-left: 0.255em; vertical-align: 0.255em; content: ""; border-top: 0; border-right: 0.3em solid transparent; border-bottom: 0.3em solid; border-left: 0.3em solid transparent; }
globalStyle(`${slateScope}${dropup} ${slateScope}${dropdownToggle}::after`, {
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
globalStyle(`${slateScope}${dropup} ${slateScope}${dropdownToggle}:empty::after`, {
	marginLeft: 0,
})

// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
// [DELTA] unmapped selector: .dropdown-menu-end
