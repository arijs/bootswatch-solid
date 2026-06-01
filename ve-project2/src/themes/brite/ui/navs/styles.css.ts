import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColor,
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
	flexWrap,
} from '../../../../theme-contract/ui/modal/contract.css'
import {
	fade,
	nav,
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
		[varBsNavLinkColor]: "#000",
		[varBsNavLinkHoverColor]: "#000",
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
globalStyle(`${briteScope}${navLink}${navLinkDisabled}`, {
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
		[varBsNavTabsLinkHoverBorderColor]: "transparent",
		[varBsNavTabsLinkActiveColor]: varBsEmphasisColor,
		[varBsNavTabsLinkActiveBg]: varBsBodyBg,
		[varBsNavTabsLinkActiveBorderColor]: `${varBsBorderColor} ${varBsBorderColor} ${varBsBodyBg}`,
	},
	borderBottom: `${varBsNavTabsBorderWidth} solid ${varBsNavTabsBorderColor}`,
	gap: "4px",
	padding: "0.4rem 0.4rem calc(0.4rem + 2px)",
	fontWeight: 500,
	border: "2px solid #000",
	borderRadius: "0.5rem",
})

// SOURCE CSS:
// .nav-tabs .nav-link { margin-bottom: calc(-1 * var(--bs-nav-tabs-border-width)); border: var(--bs-nav-tabs-border-width) solid transparent; border-top-left-radius: var(--bs-nav-tabs-border-radius); border-top-right-radius: var(--bs-nav-tabs-border-radius); }
globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
	borderWidth: "2px",
	borderRadius: "0.375rem",
})

// SOURCE CSS:
// .nav-tabs .nav-link:hover { isolation: isolate; border-color: var(--bs-nav-tabs-link-hover-border-color); }
globalStyle(`${briteScope}${navTabs} ${briteScope}${navLink}:hover`, {
	isolation: "isolate",
	borderColor: varBsNavTabsLinkHoverBorderColor,
	border: "2px solid #000",
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
	border: "2px solid #000",
})

// SOURCE CSS:
// .nav-tabs .nav-item.show .nav-link { color: var(--bs-nav-tabs-link-active-color); background-color: var(--bs-nav-tabs-link-active-bg); border-color: var(--bs-nav-tabs-link-active-border-color); }
globalStyle(`${briteScope}${navTabs} ${briteScope}${navItem}${navItemShow} ${briteScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

// SOURCE CSS:
// .nav-pills { --bs-nav-pills-border-radius: var(--bs-border-radius); --bs-nav-pills-link-active-color: #fff; --bs-nav-pills-link-active-bg: #0d6efd; }
globalStyle(`${briteScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: "#000",
		[varBsNavPillsLinkActiveBg]: "#a2e436",
	},
	gap: "4px",
	fontWeight: 500,
})

// SOURCE CSS:
// .nav-pills .nav-link { border-radius: var(--bs-nav-pills-border-radius); }
globalStyle(`${briteScope}${navPills} ${briteScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
	border: "2px solid #000",
})

// SOURCE CSS:
// .nav-pills .nav-link.active { color: var(--bs-nav-pills-link-active-color); background-color: var(--bs-nav-pills-link-active-bg); }
globalStyle(`${briteScope}${navPills} ${briteScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

// SOURCE CSS:
// .nav-pills .show > .nav-link { color: var(--bs-nav-pills-link-active-color); background-color: var(--bs-nav-pills-link-active-bg); }
globalStyle(`${briteScope}${navPills} ${show} > ${briteScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${briteScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${briteScope}${tabPane}${fade}:not(${show})`, {
	opacity: 0,
})

// SOURCE CSS:
// .tab-content > .tab-pane { display: none; }
globalStyle(`${briteScope}${tabContent} > ${briteScope}${tabPane}`, {
	display: "none",
})

// SOURCE CSS:
// .tab-content > .active { display: block; }
globalStyle(`${briteScope}${tabContent} > ${tabPaneActive}`, {
	display: "block",
})

// SOURCE CSS:
// .mb-3 { margin-bottom: 1rem !important; }
globalStyle(`${briteScope}${mb3}`, {
	marginBottom: "1rem !important",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .nav:not(.nav-tabs, .nav-pills) .nav-link.active { font-weight: 700; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${nav}:not(${briteScope}${navTabs}) ${briteScope}${navLink}${navLinkActive}`, {
	fontWeight: 700,
})
// SOURCE CSS:
// .tab-content { padding: 1rem; margin-top: 1rem; border: 2px solid #000; border-radius: 0.5rem; }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${briteScope}${tabContent}`, {
	padding: "1rem",
	marginTop: "1rem",
	border: "2px solid #000",
	borderRadius: "0.5rem",
})
