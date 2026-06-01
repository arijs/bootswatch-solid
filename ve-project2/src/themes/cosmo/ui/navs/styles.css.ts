import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsEmphasisColor,
	varBsLinkColor,
	varBsLinkHoverColor,
	varBsNavUnderlineBorderWidth,
	varBsNavUnderlineLinkActiveColor,
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
	dropdownMenu,
} from '../../../../theme-contract/ui/dropdowns/contract.css'
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
import { cosmoScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/navs
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .nav { --bs-nav-link-padding-x: 1rem; --bs-nav-link-padding-y: 0.5rem; --bs-nav-link-font-weight: ; --bs-nav-link-color: var(--bs-link-color); --bs-nav-link-hover-color: var(--bs-link-hover-color); --bs-nav-link-disabled-color: var(--bs-secondary-color); display: flex; flex-wrap: wrap; padding-left: 0; margin-bottom: 0; list-style: none; }
globalStyle(`${cosmoScope}${nav}`, {
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
globalStyle(`${cosmoScope}${navLink}`, {
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
globalStyle(`${cosmoScope}${navLink}:hover`, {
	color: varBsNavLinkHoverColor,
})

// SOURCE CSS:
// .nav-link:focus { color: var(--bs-nav-link-hover-color); }
globalStyle(`${cosmoScope}${navLink}:focus`, {
	color: varBsNavLinkHoverColor,
})

// SOURCE CSS:
// .nav-link:focus-visible { outline: 0; box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25); }
globalStyle(`${cosmoScope}${navLink}:focus-visible`, {
	outline: 0,
	boxShadow: "0 0 0 0.25rem rgba(39, 128, 227, 0.25)",
})

// SOURCE CSS:
// .nav-link.disabled { color: var(--bs-nav-link-disabled-color); pointer-events: none; cursor: default; }
globalStyle(`${cosmoScope}${navLink}${navLinkDisabled}`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: "none",
	cursor: "default",
})

// SOURCE CSS:
// .nav-link:disabled { color: var(--bs-nav-link-disabled-color); pointer-events: none; cursor: default; }
globalStyle(`${cosmoScope}${navLink}:disabled`, {
	color: varBsNavLinkDisabledColor,
	pointerEvents: "none",
	cursor: "default",
})

// SOURCE CSS:
// .nav-tabs { --bs-nav-tabs-border-width: var(--bs-border-width); --bs-nav-tabs-border-color: var(--bs-border-color); --bs-nav-tabs-border-radius: var(--bs-border-radius); --bs-nav-tabs-link-hover-border-color: var(--bs-secondary-bg) var(--bs-secondary-bg) var(--bs-border-color); --bs-nav-tabs-link-active-color: var(--bs-emphasis-color); --bs-nav-tabs-link-active-bg: var(--bs-body-bg); --bs-nav-tabs-link-active-border-color: var(--bs-border-color) var(--bs-border-color) var(--bs-body-bg); border-bottom: var(--bs-nav-tabs-border-width) solid var(--bs-nav-tabs-border-color); }
globalStyle(`${cosmoScope}${navTabs}`, {
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
globalStyle(`${cosmoScope}${navTabs} ${cosmoScope}${navLink}`, {
	marginBottom: `calc(-1 * ${varBsNavTabsBorderWidth})`,
	border: `${varBsNavTabsBorderWidth} solid transparent`,
	borderTopLeftRadius: varBsNavTabsBorderRadius,
	borderTopRightRadius: varBsNavTabsBorderRadius,
})

// SOURCE CSS:
// .nav-tabs .nav-link:hover { isolation: isolate; border-color: var(--bs-nav-tabs-link-hover-border-color); }
globalStyle(`${cosmoScope}${navTabs} ${cosmoScope}${navLink}:hover`, {
	isolation: "isolate",
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

// SOURCE CSS:
// .nav-tabs .nav-link:focus { isolation: isolate; border-color: var(--bs-nav-tabs-link-hover-border-color); }
globalStyle(`${cosmoScope}${navTabs} ${cosmoScope}${navLink}:focus`, {
	isolation: "isolate",
	borderColor: varBsNavTabsLinkHoverBorderColor,
})

// SOURCE CSS:
// .nav-tabs .nav-link.active { color: var(--bs-nav-tabs-link-active-color); background-color: var(--bs-nav-tabs-link-active-bg); border-color: var(--bs-nav-tabs-link-active-border-color); }
globalStyle(`${cosmoScope}${navTabs} ${cosmoScope}${navLink}${navLinkActive}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

// SOURCE CSS:
// .nav-tabs .nav-item.show .nav-link { color: var(--bs-nav-tabs-link-active-color); background-color: var(--bs-nav-tabs-link-active-bg); border-color: var(--bs-nav-tabs-link-active-border-color); }
globalStyle(`${cosmoScope}${navTabs} ${cosmoScope}${navItem}${navItemShow} ${cosmoScope}${navLink}`, {
	color: varBsNavTabsLinkActiveColor,
	backgroundColor: varBsNavTabsLinkActiveBg,
	borderColor: varBsNavTabsLinkActiveBorderColor,
})

// SOURCE CSS:
// .nav-pills { --bs-nav-pills-border-radius: var(--bs-border-radius); --bs-nav-pills-link-active-color: #fff; --bs-nav-pills-link-active-bg: #0d6efd; }
globalStyle(`${cosmoScope}${navPills}`, {
	vars: {
		[varBsNavPillsBorderRadius]: varBsBorderRadius,
		[varBsNavPillsLinkActiveColor]: "#fff",
		[varBsNavPillsLinkActiveBg]: "#2780e3",
	},
})

// SOURCE CSS:
// .nav-pills .nav-link { border-radius: var(--bs-nav-pills-border-radius); }
globalStyle(`${cosmoScope}${navPills} ${cosmoScope}${navLink}`, {
	borderRadius: varBsNavPillsBorderRadius,
})

// SOURCE CSS:
// .nav-pills .nav-link.active { color: var(--bs-nav-pills-link-active-color); background-color: var(--bs-nav-pills-link-active-bg); }
globalStyle(`${cosmoScope}${navPills} ${cosmoScope}${navLink}${navLinkActive}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

// SOURCE CSS:
// .nav-pills .show > .nav-link { color: var(--bs-nav-pills-link-active-color); background-color: var(--bs-nav-pills-link-active-bg); }
globalStyle(`${cosmoScope}${navPills} ${show} > ${cosmoScope}${navLink}`, {
	color: varBsNavPillsLinkActiveColor,
	backgroundColor: varBsNavPillsLinkActiveBg,
})

// SOURCE CSS:
// .fade { transition: opacity 0.15s linear; }
globalStyle(`${cosmoScope}${fade}`, {
	transition: "opacity 0.15s linear",
})

// SOURCE CSS:
// .fade:not(.show) { opacity: 0; }
globalStyle(`${cosmoScope}${tabPane}${fade}:not(${show})`, {
	opacity: 0,
})

// SOURCE CSS:
// .tab-content > .tab-pane { display: none; }
globalStyle(`${cosmoScope}${tabContent} > ${cosmoScope}${tabPane}`, {
	display: "none",
})

// SOURCE CSS:
// .tab-content > .active { display: block; }
globalStyle(`${cosmoScope}${tabContent} > ${tabPaneActive}`, {
	display: "block",
})

// SOURCE CSS:
// .mb-3 { margin-bottom: 1rem !important; }
globalStyle(`${cosmoScope}${mb3}`, {
	marginBottom: "1rem !important",
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .nav-tabs .dropdown-menu { margin-top: calc(-1 * var(--bs-nav-tabs-border-width)); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${cosmoScope}${navTabs} ${cosmoScope}${dropdownMenu}`, {
	marginTop: `calc(-1 * ${varBsNavTabsBorderWidth})`,
})
// SOURCE CSS:
// .nav-underline .nav-link { padding-right: 0; padding-left: 0; border-bottom: var(--bs-nav-underline-border-width) solid transparent; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-underline" — no contract mapping
globalStyle(`.nav-underline ${cosmoScope}${navLink}`, {
	paddingRight: 0,
	paddingLeft: 0,
	borderBottom: `${varBsNavUnderlineBorderWidth} solid transparent`,
})
// SOURCE CSS:
// .nav-underline .nav-link:hover { border-bottom-color: currentcolor; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-underline" — no contract mapping
globalStyle(`.nav-underline ${cosmoScope}${navLink}:hover`, {
	borderBottomColor: "currentcolor",
})
// SOURCE CSS:
// .nav-underline .nav-link:focus { border-bottom-color: currentcolor; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-underline" — no contract mapping
globalStyle(`.nav-underline ${cosmoScope}${navLink}:focus`, {
	borderBottomColor: "currentcolor",
})
// SOURCE CSS:
// .nav-underline .nav-link.active { font-weight: 700; color: var(--bs-nav-underline-link-active-color); border-bottom-color: currentcolor; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-underline" — no contract mapping
globalStyle(`.nav-underline ${cosmoScope}${navLink}${navLinkActive}`, {
	fontWeight: 700,
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: "currentcolor",
})
// SOURCE CSS:
// .nav-underline .show > .nav-link { font-weight: 700; color: var(--bs-nav-underline-link-active-color); border-bottom-color: currentcolor; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-underline" — no contract mapping
globalStyle(`.nav-underline ${show} > ${cosmoScope}${navLink}`, {
	fontWeight: 700,
	color: varBsNavUnderlineLinkActiveColor,
	borderBottomColor: "currentcolor",
})
// SOURCE CSS:
// .nav-fill > .nav-link { flex: 1 1 auto; text-align: center; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-fill" — no contract mapping
globalStyle(`.nav-fill > ${cosmoScope}${navLink}`, {
	flex: "1 1 auto",
	textAlign: "center",
})
// SOURCE CSS:
// .nav-fill .nav-item { flex: 1 1 auto; text-align: center; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-fill" — no contract mapping
globalStyle(`.nav-fill ${cosmoScope}${navItem}`, {
	flex: "1 1 auto",
	textAlign: "center",
})
// SOURCE CSS:
// .nav-justified > .nav-link { flex-grow: 1; flex-basis: 0; text-align: center; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-justified" — no contract mapping
globalStyle(`.nav-justified > ${cosmoScope}${navLink}`, {
	flexGrow: 1,
	flexBasis: 0,
	textAlign: "center",
})
// SOURCE CSS:
// .nav-justified .nav-item { flex-grow: 1; flex-basis: 0; text-align: center; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-justified" — no contract mapping
globalStyle(`.nav-justified ${cosmoScope}${navItem}`, {
	flexGrow: 1,
	flexBasis: 0,
	textAlign: "center",
})
// SOURCE CSS:
// .nav-fill .nav-item .nav-link { width: 100%; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-fill" — no contract mapping
globalStyle(`.nav-fill ${cosmoScope}${navItem} ${cosmoScope}${navLink}`, {
	width: "100%",
})
// SOURCE CSS:
// .nav-justified .nav-item .nav-link { width: 100%; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".nav-justified" — no contract mapping
globalStyle(`.nav-justified ${cosmoScope}${navItem} ${cosmoScope}${navLink}`, {
	width: "100%",
})
