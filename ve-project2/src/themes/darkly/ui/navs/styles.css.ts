import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColor,
	varBsLinkColor,
	varBsLinkColorRgb,
	varBsLinkHoverColor,
	varBsLinkHoverColorRgb,
	varBsSecondaryColor,
} from '../../../../theme-contract/_vars.css'
import {
	varBsNavLinkColor,
	varBsNavLinkDisabledColor,
	varBsNavLinkFontSize,
	varBsNavLinkFontWeight,
	varBsNavLinkHoverColor,
	varBsNavLinkPaddingX,
	varBsNavLinkPaddingY,
	varBsNavPillsBorderRadius,
	varBsNavPillsLinkActiveBg,
	varBsNavPillsLinkActiveColor,
	varBsNavTabsBorderColor,
	varBsNavTabsBorderRadius,
	varBsNavTabsBorderWidth,
	varBsNavTabsLinkActiveBg,
	varBsNavTabsLinkActiveBorderColor,
	varBsNavTabsLinkActiveColor,
	varBsNavTabsLinkHoverBorderColor,
} from '../../../../theme-contract/ui/navs/_vars.css'
import {
	varBsCardBg,
	varBsCardCapPaddingX,
	varBsCardCapPaddingY,
} from '../../../../theme-contract/ui/card/_vars.css'
import {
	link,
	paragraph,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	cardHeaderTabs,
} from '../../../../theme-contract/ui/card-tabs/contract.css'
import {
	dropdown,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	fade,
	flexWrap,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	nav,
	navButtonReset,
	navItem,
	navItemShow,
	navLink,
	navLinkActive,
	navPills,
	navTabs,
	show,
	tabContent,
	tabPane,
	tabPaneActive,
} from '../../../../theme-contract/ui/navs/contract.css'
import {
	mb3,
} from '../../../../theme-contract/utilities/contract.css'
import { darklyScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/navs
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .nav { --bs-nav-link-padding-x: 1rem; --bs-nav-link-padding-y: 0.5rem; --bs-nav-link-font-weight: ; --bs-nav-link-color: var(--bs-link-color); --bs-nav-link-hover-color: var(--bs-link-hover-color); --bs-nav-link-disabled-color: var(--bs-secondary-color); display: flex; flex-wrap: wrap; padding-left: 0; margin-bottom: 0; list-style: none; }
globalStyle(`${darklyScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: '2rem',
		[varBsNavLinkPaddingY]: '0.5rem',
		[varBsNavLinkFontWeight]: '',
		[varBsNavLinkColor]: '#fff',
		[varBsNavLinkHoverColor]: '#fff',
		[varBsNavLinkDisabledColor]: '#888',
	},
	display: "flex",
	flexWrap: "wrap",
	paddingLeft: 0,
	marginBottom: 0,
	listStyle: "none",
})

globalStyle(`${darklyScope}${navButtonReset}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
	appearance: "button",
	borderRadius: 0,
})

globalStyle(`${darklyScope}${navButtonReset}:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .nav-link { display: block; padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x); font-size: var(--bs-nav-link-font-size); font-weight: var(--bs-nav-link-font-weight); color: var(--bs-nav-link-color); text-decoration: none; background: none; border: 0; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out; }
globalStyle(`${darklyScope}${navLink}`, {
	display: "block",
	padding: `${varBsNavLinkPaddingY} ${varBsNavLinkPaddingX}`,
	fontSize: varBsNavLinkFontSize,
	fontWeight: varBsNavLinkFontWeight,
	color: varBsNavLinkColor,
	textDecoration: "none",
	background: "none",
	border: 0,
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
})

// SOURCE CSS:
// .nav-link:hover { color: var(--bs-nav-link-hover-color); }
globalStyle(`${darklyScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

// SOURCE CSS:
// .nav-link:focus { color: var(--bs-nav-link-hover-color); }
globalStyle(`${darklyScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

// SOURCE CSS:
// .nav-link:focus-visible { outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${darklyScope}${navLink}:focus-visible`, {
	outline: 0,
	boxShadow: "0 0 0 0.25rem rgba(55, 90, 127, 0.25)",
})

// SOURCE CSS:
// .nav-link.disabled { color: var(--bs-nav-link-disabled-color); pointer-events: none; cursor: default; }
globalStyle(`${darklyScope}${navLink}.disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: "none",
	cursor: "default",
})

// SOURCE CSS:
// .nav-link:disabled { color: var(--bs-nav-link-disabled-color); pointer-events: none; cursor: default; }
globalStyle(`${darklyScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: "none",
	cursor: "default",
})

// SOURCE CSS:
// .nav-tabs { --bs-nav-tabs-border-width: var(--bs-border-width); --bs-nav-tabs-border-color: var(--bs-border-color); --bs-nav-tabs-border-radius: var(--bs-border-radius); --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color); --bs-nav-tabs-link-active-color: var(--bs-emphasis-color); --bs-nav-tabs-link-active-bg: var(--bs-body-bg); --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg); border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color); }
globalStyle(`${darklyScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: "#444",
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: "#444 #444 transparent",
		[varBsNavTabsLinkActiveColor]: "#fff",
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: "#444 #444 transparent",
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

globalStyle(`${darklyScope}${navTabs}${cardHeaderTabs}`, {
	marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
	marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
	borderBottom: 0,
})

// SOURCE CSS:
// .nav-tabs .nav-link { margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width)); border: var(--bs-nav-tabs-border-width) solid transparent; border-top-left-radius: var(--bs-nav-tabs-border-radius); border-top-right-radius: var(--bs-nav-tabs-border-radius); }
globalStyle(`${darklyScope}${navTabs} ${darklyScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

// SOURCE CSS:
// .nav-tabs .nav-link:hover { isolation: isolate; border-color: var(--bs-nav-tabs-link-hover-border-color); }
globalStyle(`${darklyScope}${navTabs} ${darklyScope}${navLink}:hover`, {
	isolation: "isolate",
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

// SOURCE CSS:
// .nav-tabs .nav-link:focus { isolation: isolate; border-color: var(--bs-nav-tabs-link-hover-border-color); }
globalStyle(`${darklyScope}${navTabs} ${darklyScope}${navLink}:focus`, {
	isolation: "isolate",
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

// SOURCE CSS:
// .nav-tabs .nav-link.active { color: var(--bs-nav-tabs-link-active-color); background-color: var(--bs-nav-tabs-link-active-bg); border-color: var(--bs-nav-tabs-link-active-border-color); }
globalStyle(`${darklyScope}${navTabs} ${darklyScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

// SOURCE CSS:
// .nav-tabs .nav-item.show .nav-link { color: var(--bs-nav-tabs-link-active-color); background-color: var(--bs-nav-tabs-link-active-bg); border-color: var(--bs-nav-tabs-link-active-border-color); }
globalStyle(`${darklyScope}${navTabs} ${darklyScope}${navItem}${navItemShow} ${darklyScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

globalStyle(`${darklyScope}${navTabs}${cardHeaderTabs} ${darklyScope}${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderColor: `${varBsNavTabsBorderColor} ${varBsNavTabsBorderColor} ${varBsCardBg}`,
})

// SOURCE CSS:
// ol { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "ol" — map to a contract class
globalStyle(`ol`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// ul { padding-left: 2rem; margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "ul" — map to a contract class
globalStyle(`ul`, {
	paddingLeft: "2rem",
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// dl { margin-top: 0; margin-bottom: 1rem; }
// [UNMAPPED_SELECTOR] element selector "dl" — map to a contract class
globalStyle(`dl`, {
	marginTop: 0,
	marginBottom: "1rem",
})

// SOURCE CSS:
// .nav-pills { --bs-nav-pills-border-radius: var(--bs-border-radius); --bs-nav-pills-link-active-color: #fff; --bs-nav-pills-link-active-bg: #0d6efd; }
globalStyle(`${darklyScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: "#fff",
		[varBsNavPillsLinkActiveBg]: "#375a7f",
	},
})

// SOURCE CSS:
// .nav-pills .nav-link { border-radius: var(--bs-nav-pills-border-radius); }
globalStyle(`${darklyScope}${navPills} ${darklyScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

// SOURCE CSS:
// .nav-pills .nav-link.active { color: var(--bs-nav-pills-link-active-color); background-color: var(--bs-nav-pills-link-active-bg); }
globalStyle(`${darklyScope}${navPills} ${darklyScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

// SOURCE CSS:
// .nav-pills .show > .nav-link { color: var(--bs-nav-pills-link-active-color); background-color: var(--bs-nav-pills-link-active-bg); }
globalStyle(`${darklyScope}${navPills} ${show} > ${darklyScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

// SOURCE CSS:
// p { margin-top: 0; margin-bottom: 1rem; }
globalStyle(`${darklyScope}${paragraph}`, {
	marginTop: 0,
	marginBottom: "1rem",
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
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${darklyScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${darklyScope}${tabPane}${fade}:not(${show})`, {
	opacity: 0,
})

globalStyle(`${darklyScope}${tabContent} > ${darklyScope}${tabPane}`, {
	display: "none",
})

globalStyle(`${darklyScope}${tabContent} > ${tabPaneActive}`, {
	display: "block",
})

globalStyle(`${darklyScope}${mb3}`, {
	marginBottom: "1rem !important",
})

// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
// [DELTA] unmapped selector: .nav-tabs .dropdown-menu
// [DELTA] unmapped selector: .nav-underline
// [DELTA] unmapped selector: .nav-underline .nav-link
// [DELTA] unmapped selector: .nav-underline .nav-link:hover
// [DELTA] unmapped selector: .nav-underline .nav-link:focus
// [DELTA] unmapped selector: .nav-underline .nav-link.active
// [DELTA] unmapped selector: .nav-underline .show > .nav-link
// [DELTA] unmapped selector: .nav-fill > .nav-link
// [DELTA] unmapped selector: .nav-fill .nav-item
// [DELTA] unmapped selector: .nav-justified > .nav-link
// [DELTA] unmapped selector: .nav-justified .nav-item
// [DELTA] unmapped selector: .nav-fill .nav-item .nav-link
// [DELTA] unmapped selector: .nav-justified .nav-item .nav-link
