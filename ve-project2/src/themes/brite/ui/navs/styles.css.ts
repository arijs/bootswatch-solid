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
	varBsLinkOpacity,
	varBsSecondaryBg,
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
	link,
	paragraph,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	fade,
	flexWrap,
	modalShowHook,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	nav,
	navItem,
	navLink,
	navLinkActive,
	navPills,
	navTabs,
} from '../../../../theme-contract/ui/navs/contract.css'
import { briteScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/navs
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .nav { --bs-nav-link-padding-x: 1rem; --bs-nav-link-padding-y: 0.5rem; --bs-nav-link-font-weight: ; --bs-nav-link-color: var(--bs-link-color); --bs-nav-link-hover-color: var(--bs-link-hover-color); --bs-nav-link-disabled-color: var(--bs-secondary-color); display: flex; flex-wrap: wrap; padding-left: 0; margin-bottom: 0; list-style: none; }
globalStyle(`${briteScope}${nav}`, {
	vars: {
		[varBsNavLinkPaddingX]: "1rem",
		[varBsNavLinkPaddingY]: "0.5rem",
		[varBsNavLinkFontWeight]: "",
		[varBsNavLinkColor]: varBsLinkColor,
		[varBsNavLinkHoverColor]: varBsLinkHoverColor,
		[varBsNavLinkDisabledColor]: varBsSecondaryColor,
	},
	display: "flex",
	flexWrap: "wrap",
	paddingLeft: 0,
	marginBottom: 0,
	listStyle: "none",
})

// SOURCE CSS:
// .nav-link { display: block; padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x); font-size: var(--bs-nav-link-font-size); font-weight: var(--bs-nav-link-font-weight); color: var(--bs-nav-link-color); text-decoration: none; background: none; border: 0; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out; }
globalStyle(`${briteScope}${navLink}`, {
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
globalStyle(`${briteScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

// SOURCE CSS:
// .nav-link:focus { color: var(--bs-nav-link-hover-color); }
globalStyle(`${briteScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

// SOURCE CSS:
// .nav-link:focus-visible { outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${briteScope}${navLink}:focus-visible`, {
	outline: 0,
	boxShadow: "0 0 0 1px #000",
})

// SOURCE CSS:
// .nav-link.disabled { color: var(--bs-nav-link-disabled-color); pointer-events: none; cursor: default; }
// [UNMAPPED_SELECTOR] state class ".disabled" — no contract mapping
globalStyle(`${briteScope}${navLink}.disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: "none",
	cursor: "default",
})

// SOURCE CSS:
// .nav-link:disabled { color: var(--bs-nav-link-disabled-color); pointer-events: none; cursor: default; }
globalStyle(`${briteScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: "none",
	cursor: "default",
})

// SOURCE CSS:
// .nav-tabs { --bs-nav-tabs-border-width: var(--bs-border-width); --bs-nav-tabs-border-color: var(--bs-border-color); --bs-nav-tabs-border-radius: var(--bs-border-radius); --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color); --bs-nav-tabs-link-active-color: var(--bs-emphasis-color); --bs-nav-tabs-link-active-bg: var(--bs-body-bg); --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg); border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color); }
globalStyle(`${briteScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: varBsBorderColor,
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: `${varBsSecondaryBg} ${varBsSecondaryBg} ${varBsBorderColor}`,
		[varBsNavTabsLinkActiveColor]: varBsEmphasisColor,
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} ${varBsBodyBg}`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

// SOURCE CSS:
// .nav-tabs .nav-link { margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width)); border: var(--bs-nav-tabs-border-width) solid transparent; border-top-left-radius: var(--bs-nav-tabs-border-radius); border-top-right-radius: var(--bs-nav-tabs-border-radius); }
globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

// SOURCE CSS:
// .nav-tabs .nav-link:hover { isolation: isolate; border-color: var(--bs-nav-tabs-link-hover-border-color); }
globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}:hover`, {
	isolation: "isolate",
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

// SOURCE CSS:
// .nav-tabs .nav-link:focus { isolation: isolate; border-color: var(--bs-nav-tabs-link-hover-border-color); }
globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}:focus`, {
	isolation: "isolate",
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

// SOURCE CSS:
// .nav-tabs .nav-link.active { color: var(--bs-nav-tabs-link-active-color); background-color: var(--bs-nav-tabs-link-active-bg); border-color: var(--bs-nav-tabs-link-active-border-color); }
globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

// SOURCE CSS:
// .nav-tabs .nav-item.show .nav-link { color: var(--bs-nav-tabs-link-active-color); background-color: var(--bs-nav-tabs-link-active-bg); border-color: var(--bs-nav-tabs-link-active-border-color); }
// [UNMAPPED_SELECTOR] state class ".show" — no contract mapping
globalStyle(`${briteScope}${navTabs} ${briteScope}${navItem}.show ${briteScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

// SOURCE CSS:
// a { color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1)); text-decoration: underline; }
// [UNMAPPED_SELECTOR] element selector "a" — map to a contract class
globalStyle(`a`, {
	color: `rgba(var(--bs-link-color-rgb), ${varBsLinkOpacity} )`,
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
globalStyle(`a:hover`, {
	color: "inherit",
	textDecoration: "none",
})

// SOURCE CSS:
// a:not([href]):not([class]):hover { color: inherit; text-decoration: none; }
// [UNMAPPED_SELECTOR] element selector "a:not([href]):not([class]):hover" — map to a contract class
globalStyle(`a:hover`, {
	color: "inherit",
	textDecoration: "none",
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
globalStyle(`${briteScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: "#000",
		[varBsNavPillsLinkActiveBg]: "#a2e436",
	},
})

// SOURCE CSS:
// .nav-pills .nav-link { border-radius: var(--bs-nav-pills-border-radius); }
globalStyle(`${briteScope}${navPills} ${briteScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

// SOURCE CSS:
// .nav-pills .nav-link.active { color: var(--bs-nav-pills-link-active-color); background-color: var(--bs-nav-pills-link-active-bg); }
globalStyle(`${briteScope}${navPills} ${briteScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

// SOURCE CSS:
// .nav-pills .show > .nav-link { color: var(--bs-nav-pills-link-active-color); background-color: var(--bs-nav-pills-link-active-bg); }
// [UNMAPPED_SELECTOR] state class ".show" — no contract mapping
globalStyle(`${briteScope}${navPills} .show > ${briteScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

// SOURCE CSS:
// p { margin-top: 0; margin-bottom: 1rem; }
globalStyle(`${briteScope}${paragraph}`, {
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
globalStyle(`textarea`, {
	appearance: "button",
})

// SOURCE CSS:
// [type="reset"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="reset"]" — map to a contract class
globalStyle(`textarea`, {
	appearance: "button",
})

// SOURCE CSS:
// [type="submit"] { appearance: button; }
// [UNMAPPED_SELECTOR] element selector "[type="submit"]" — map to a contract class
globalStyle(`textarea`, {
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
globalStyle(`button:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="reset"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="reset"]:not(:disabled)" — map to a contract class
globalStyle(`button:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// [type="submit"]:not(:disabled) { cursor: pointer; }
// [UNMAPPED_SELECTOR] element selector "[type="submit"]:not(:disabled)" — map to a contract class
globalStyle(`button:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${briteScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${briteScope}${fade}:not(${modalShowHook})`, {
	opacity: 0,
})

// SOURCE CSS:
// .tab-content > .tab-pane { display: none; }
// [UNMAPPED_SELECTOR] class ".tab-content" — no contract mapping
// [UNMAPPED_SELECTOR] class ".tab-pane" — no contract mapping
globalStyle(`.tab-content > .tab-pane`, {
	display: "none",
})

// SOURCE CSS:
// .tab-content > .active { display: block; }
// [UNMAPPED_SELECTOR] class ".tab-content" — no contract mapping
// [UNMAPPED_SELECTOR] state class ".active" — no contract mapping
globalStyle(`.tab-content > .active`, {
	display: "block",
})

// SOURCE CSS:
// .mb-3 { margin-bottom: 1rem !important; }
// [UNMAPPED_SELECTOR] class ".mb-3" — no contract mapping
globalStyle(`.mb-3`, {
	marginBottom: "1rem !important",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .nav { --bs-nav-link-color: #000; --bs-nav-link-hover-color: #000; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${nav}`, {
	vars: {
		[varBsNavLinkColor]: "#000",
		[varBsNavLinkHoverColor]: "#000",
	},
})
// SOURCE CSS:
// .nav-link { transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${navLink}`, {
	transition: "color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out",
})
// SOURCE CSS:
// .nav-tabs { --bs-nav-tabs-link-hover-border-color: transparent; gap: 4px; padding: 0.4rem 0.4rem calc(0.4rem + 2px); font-weight: 500; border: 2px solid #000; border-radius: 0.5rem; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${navTabs}`, {
	vars: {
		[varBsNavTabsLinkHoverBorderColor]: "transparent",
	},
	gap: "4px",
	padding: "0.4rem 0.4rem calc(0.4rem + 2px)",
	fontWeight: 500,
	border: "2px solid #000",
	borderRadius: "0.5rem",
})
// SOURCE CSS:
// .nav-tabs .nav-link { border-width: 2px; border-radius: 0.375rem; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}`, {
	borderWidth: "2px",
	borderRadius: "0.375rem",
})
// SOURCE CSS:
// .nav-tabs .nav-link:hover { border: 2px solid #000; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}:hover`, {
	border: "2px solid #000",
})
// SOURCE CSS:
// .nav-tabs .nav-link.active { border: 2px solid #000; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}${navLinkActive}`, {
	border: "2px solid #000",
})
// SOURCE CSS:
// a { color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity, 1)); font-weight: 500; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "a" — map to a contract class
globalStyle(`a`, {
	color: `rgba(var(--bs-link-color-rgb), ${varBsLinkOpacity} )`,
	fontWeight: 500,
})
// SOURCE CSS:
// a:hover { --bs-link-color-rgb: var(--bs-link-hover-color-rgb); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "a:hover" — map to a contract class
globalStyle(`a:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})
// SOURCE CSS:
// a:hover { --bs-link-color-rgb: var(--bs-link-hover-color-rgb); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "a:hover" — map to a contract class
globalStyle(`a:hover`, {
	vars: {
		[varBsLinkColorRgb]: varBsLinkHoverColorRgb,
	},
})
// SOURCE CSS:
// .nav-pills { gap: 4px; font-weight: 500; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${navPills}`, {
	gap: "4px",
	fontWeight: 500,
})
// SOURCE CSS:
// .nav-pills .nav-link { border: 2px solid #000; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${navPills} ${briteScope}${navLink}`, {
	border: "2px solid #000",
})
// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "textarea" — map to a contract class
globalStyle(`textarea`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})
// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "textarea" — map to a contract class
globalStyle(`textarea`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})
// SOURCE CSS:
// textarea { margin: 0; font-family: inherit; font-size: inherit; line-height: inherit; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] element selector "textarea" — map to a contract class
globalStyle(`textarea`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
})
// SOURCE CSS:
// .nav:not(.nav-tabs, .nav-pills) .nav-link.active { font-weight: 700; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${nav}:not(${briteScope}${navTabs}) ${briteScope}${navLink}${navLinkActive}`, {
	fontWeight: 700,
})
// SOURCE CSS:
// .tab-content { padding: 1rem; margin-top: 1rem; border: 2px solid #000; border-radius: 0.5rem; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".tab-content" — no contract mapping
globalStyle(`.tab-content`, {
	padding: "1rem",
	marginTop: "1rem",
	border: "2px solid #000",
	borderRadius: "0.5rem",
})
