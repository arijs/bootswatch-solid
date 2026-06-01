import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBorderRadius,
	varBsBorderWidth,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsNavUnderlineBorderWidth,
	varBsNavUnderlineLinkActiveColor,
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
} from '../../../../theme-contract/ui/card/_vars.css'
import {
	dropdownMenu,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
import {
	cardHeaderTabs,
} from '../../../../theme-contract/ui/card-tabs/contract.css'
import {
	flexWrap,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	fade,
	nav,
	navButtonReset,
	navItem,
	navItemShow,
	navLink,
	navLinkActive,
	navLinkDisabled,
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
import { cyborgScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/navs
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .nav { --bs-nav-link-padding-x: 1rem; --bs-nav-link-padding-y: 0.5rem; --bs-nav-link-font-weight: ; --bs-nav-link-color: var(--bs-link-color); --bs-nav-link-hover-color: var(--bs-link-hover-color); --bs-nav-link-disabled-color: var(--bs-secondary-color); display: flex; flex-wrap: wrap; padding-left: 0; margin-bottom: 0; list-style: none; }
globalStyle(`${cyborgScope}${nav}`, {
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

// Button reset for tab triggers styled as `.nav-link` (matches ve-project navButtonReset).
globalStyle(`${cyborgScope}${navButtonReset}`, {
	margin: 0,
	fontFamily: "inherit",
	fontSize: "inherit",
	lineHeight: "inherit",
	textTransform: "none",
	appearance: "button",
	borderRadius: 0,
})
globalStyle(`${cyborgScope}${navButtonReset}:not(:disabled)`, {
	cursor: "pointer",
})

// SOURCE CSS:
// .nav-link { display: block; padding: var(--bs-nav-link-padding-y) var(--bs-nav-link-padding-x); font-size: var(--bs-nav-link-font-size); font-weight: var(--bs-nav-link-font-weight); color: var(--bs-nav-link-color); text-decoration: none; background: none; border: 0; transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out; }
globalStyle(`${cyborgScope}${navLink}`, {
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
globalStyle(`${cyborgScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

// SOURCE CSS:
// .nav-link:focus { color: var(--bs-nav-link-hover-color); }
globalStyle(`${cyborgScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

// SOURCE CSS:
// .nav-link:focus-visible { outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${cyborgScope}${navLink}:focus-visible`, {
	outline: 0,
	boxShadow: "0 0 0 0.25rem rgba(42, 159, 214, 0.25)",
})

// SOURCE CSS:
// .nav-link.disabled { color: var(--bs-nav-link-disabled-color); pointer-events: none; cursor: default; }
globalStyle(`${cyborgScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: "none",
	cursor: "default",
})

// SOURCE CSS:
// .nav-link:disabled { color: var(--bs-nav-link-disabled-color); pointer-events: none; cursor: default; }
globalStyle(`${cyborgScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: "none",
	cursor: "default",
})

// SOURCE CSS:
// .nav-tabs { --bs-nav-tabs-border-width: var(--bs-border-width); --bs-nav-tabs-border-color: var(--bs-border-color); --bs-nav-tabs-border-radius: var(--bs-border-radius); --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color); --bs-nav-tabs-link-active-color: var(--bs-emphasis-color); --bs-nav-tabs-link-active-bg: var(--bs-body-bg); --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg); border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color); }
globalStyle(`${cyborgScope}${navTabs}`, {
	vars: {
		[varBsNavTabsBorderWidth]: varBsBorderWidth,
		[varBsNavTabsBorderColor]: "#282828",
		[varBsNavTabsBorderRadius]: varBsBorderRadius,
		[varBsNavTabsLinkHoverBorderColor]: "#282828",
		[varBsNavTabsLinkActiveColor]: "#fff",
		[varBsNavTabsLinkActiveBg]: "#282828",
		[varBsNavTabsLinkActiveBorderColor]: "#282828",
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
})

// SOURCE CSS:
// .nav-tabs .nav-link { margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width)); border: var(--bs-nav-tabs-border-width) solid transparent; border-top-left-radius: var(--bs-nav-tabs-border-radius); border-top-right-radius: var(--bs-nav-tabs-border-radius); }
globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
	color: "#fff",
})

// SOURCE CSS:
// .nav-tabs .nav-link:hover { isolation: isolate; border-color: var(--bs-nav-tabs-link-hover-border-color); }
globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}:hover`, {
	isolation: "isolate",
	borderColor: varBsNavTabsLinkHoverBorderColor,
	backgroundColor: "#282828",
})

// SOURCE CSS:
// .nav-tabs .nav-link:focus { isolation: isolate; border-color: var(--bs-nav-tabs-link-hover-border-color); }
globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}:focus`, {
	isolation: "isolate",
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

// SOURCE CSS:
// .nav-tabs .nav-link.active { color: var(--bs-nav-tabs-link-active-color); background-color: var(--bs-nav-tabs-link-active-bg); border-color: var(--bs-nav-tabs-link-active-border-color); }
globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: "#2a9fd6",
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

// SOURCE CSS:
// .nav-tabs .nav-item.show .nav-link { color: var(--bs-nav-tabs-link-active-color); background-color: var(--bs-nav-tabs-link-active-bg); border-color: var(--bs-nav-tabs-link-active-border-color); }
globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navItem}${navItemShow} ${cyborgScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

// SOURCE CSS:
// .nav-pills { --bs-nav-pills-border-radius: var(--bs-border-radius); --bs-nav-pills-link-active-color: #fff; --bs-nav-pills-link-active-bg: #0d6efd; }
globalStyle(`${cyborgScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: "#fff",
		[varBsNavPillsLinkActiveBg]: "#2a9fd6",
	},
})

// SOURCE CSS:
// .nav-pills .nav-link { border-radius: var(--bs-nav-pills-border-radius); }
globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
	color: "#fff",
})

// SOURCE CSS:
// .nav-pills .nav-link.active { color: var(--bs-nav-pills-link-active-color); background-color: var(--bs-nav-pills-link-active-bg); }
globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: "#2a9fd6",
})

// SOURCE CSS:
// .nav-pills .show > .nav-link { color: var(--bs-nav-pills-link-active-color); background-color: var(--bs-nav-pills-link-active-bg); }
globalStyle(`${cyborgScope}${navPills} ${show} > ${cyborgScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${cyborgScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${cyborgScope}${tabPane}${fade}:not(${show})`, {
	opacity: 0,
})

// SOURCE CSS:
// .tab-content > .tab-pane { display: none; }
globalStyle(`${cyborgScope}${tabContent} > ${cyborgScope}${tabPane}`, {
	display: "none",
})

// SOURCE CSS:
// .tab-content > .active { display: block; }
globalStyle(`${cyborgScope}${tabContent} > ${tabPaneActive}`, {
	display: "block",
})

// SOURCE CSS:
// .mb-3 { margin-bottom: 1rem !important; }
globalStyle(`${cyborgScope}${mb3}`, {
	marginBottom: "1rem !important",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .nav-tabs .dropdown-menu { margin-top: calc(-1 * var(--bs-nav-tabs-border-width)); border-top-left-radius: 0; border-top-right-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${dropdownMenu}`, {
	marginTop: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	borderTopLeftRadius: 0,
	borderTopRightRadius: 0,
})
// SOURCE CSS:
// .nav-underline .nav-link { padding-right: 0; padding-left: 0; border-bottom: var(--bs-nav-underline-border-width) solid transparent; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-underline" — no contract mapping
globalStyle(`.nav-underline ${cyborgScope}${navLink}`, {
	paddingRight: 0,
	paddingLeft: 0,
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})
// SOURCE CSS:
// .nav-underline .nav-link:hover { border-bottom-color: currentcolor; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-underline" — no contract mapping
globalStyle(`.nav-underline ${cyborgScope}${navLink}:hover`, {
	borderBottomColor: "currentcolor",
})
// SOURCE CSS:
// .nav-underline .nav-link:focus { border-bottom-color: currentcolor; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-underline" — no contract mapping
globalStyle(`.nav-underline ${cyborgScope}${navLink}:focus`, {
	borderBottomColor: "currentcolor",
})
// SOURCE CSS:
// .nav-underline .nav-link.active { font-weight: 700; color: var(--bs-nav-underline-link-active-color); border-bottom-color: currentcolor; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-underline" — no contract mapping
globalStyle(`.nav-underline ${cyborgScope}${navLink}${navLinkActive}`, {
	fontWeight: 700,
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: "currentcolor",
})
// SOURCE CSS:
// .nav-underline .show > .nav-link { font-weight: 700; color: var(--bs-nav-underline-link-active-color); border-bottom-color: currentcolor; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-underline" — no contract mapping
globalStyle(`.nav-underline ${show} > ${cyborgScope}${navLink}`, {
	fontWeight: 700,
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: "currentcolor",
})
// SOURCE CSS:
// .nav-fill > .nav-link { flex: 1 1 auto; text-align: center; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-fill" — no contract mapping
globalStyle(`.nav-fill > ${cyborgScope}${navLink}`, {
	flex: "1 1 auto",
	textAlign: "center",
})
// SOURCE CSS:
// .nav-fill .nav-item { flex: 1 1 auto; text-align: center; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-fill" — no contract mapping
globalStyle(`.nav-fill ${cyborgScope}${navItem}`, {
	flex: "1 1 auto",
	textAlign: "center",
})
// SOURCE CSS:
// .nav-justified > .nav-link { flex-grow: 1; flex-basis: 0; text-align: center; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-justified" — no contract mapping
globalStyle(`.nav-justified > ${cyborgScope}${navLink}`, {
	flexGrow: 1,
	flexBasis: 0,
	textAlign: "center",
})
// SOURCE CSS:
// .nav-justified .nav-item { flex-grow: 1; flex-basis: 0; text-align: center; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-justified" — no contract mapping
globalStyle(`.nav-justified ${cyborgScope}${navItem}`, {
	flexGrow: 1,
	flexBasis: 0,
	textAlign: "center",
})
// SOURCE CSS:
// .nav-fill .nav-item .nav-link { width: 100%; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-fill" — no contract mapping
globalStyle(`.nav-fill ${cyborgScope}${navItem} ${cyborgScope}${navLink}`, {
	width: "100%",
})
// SOURCE CSS:
// .nav-justified .nav-item .nav-link { width: 100%; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-justified" — no contract mapping
globalStyle(`.nav-justified ${cyborgScope}${navItem} ${cyborgScope}${navLink}`, {
	width: "100%",
})
// SOURCE CSS:
// .nav-pills .nav-link:hover { background-color: #282828; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${navLink}:hover`, {
	backgroundColor: "#282828",
})
// SOURCE CSS:
// .nav-tabs .nav-link.disabled { color: var(--bs-secondary-color); background-color: transparent; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}${navLinkDisabled}`, {
	color: varBsSecondaryColor,
	backgroundColor: "transparent",
})
// SOURCE CSS:
// .nav-tabs .nav-link.disabled:hover { color: var(--bs-secondary-color); background-color: transparent; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${navTabs} ${cyborgScope}${navLink}${navLinkDisabled}:hover`, {
	color: varBsSecondaryColor,
	backgroundColor: "transparent",
})
// SOURCE CSS:
// .nav-pills .nav-link.disabled { color: var(--bs-secondary-color); background-color: transparent; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${navLink}${navLinkDisabled}`, {
	color: varBsSecondaryColor,
	backgroundColor: "transparent",
})
// SOURCE CSS:
// .nav-pills .nav-link.disabled:hover { color: var(--bs-secondary-color); background-color: transparent; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cyborgScope}${navPills} ${cyborgScope}${navLink}${navLinkDisabled}:hover`, {
	color: varBsSecondaryColor,
	backgroundColor: "transparent",
})

// Bootswatch blue bg + card-header-tabs border-bottom merge (bootstrap.css cascade).
globalStyle(`${cyborgScope}${navTabs}${cardHeaderTabs} ${cyborgScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: "#2a9fd6",
	borderColor: varBsNavTabsLinkActiveBorderColor,
	borderBottomColor: varBsCardBg,
})
