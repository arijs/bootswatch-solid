import { globalStyle } from '@vanilla-extract/css'
import {
	varBsBodyBg,
	varBsBodyColor,
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsDangerBgSubtle,
	varBsDangerBorderSubtle,
	varBsDangerTextEmphasis,
	varBsDarkBgSubtle,
	varBsDarkBorderSubtle,
	varBsDarkTextEmphasis,
	varBsEmphasisColor,
	varBsInfoBgSubtle,
	varBsInfoBorderSubtle,
	varBsInfoTextEmphasis,
	varBsLightBgSubtle,
	varBsLightBorderSubtle,
	varBsLightTextEmphasis,
	varBsLinkColorRgb,
	varBsLinkHoverColorRgb,
	varBsPrimaryBgSubtle,
	varBsPrimaryBorderSubtle,
	varBsPrimaryTextEmphasis,
	varBsSecondaryBg,
	varBsSecondaryBgSubtle,
	varBsSecondaryBorderSubtle,
	varBsSecondaryColor,
	varBsSecondaryTextEmphasis,
	varBsSuccessBgSubtle,
	varBsSuccessBorderSubtle,
	varBsSuccessTextEmphasis,
	varBsTertiaryBg,
	varBsWarningBgSubtle,
	varBsWarningBorderSubtle,
	varBsWarningTextEmphasis,
} from '../../../../theme-contract/_vars.css'
import {
	varBsListGroupActionActiveBg,
	varBsListGroupActionActiveColor,
	varBsListGroupActionColor,
	varBsListGroupActionHoverBg,
	varBsListGroupActionHoverColor,
	varBsListGroupActiveBg,
	varBsListGroupActiveBorderColor,
	varBsListGroupActiveColor,
	varBsListGroupBg,
	varBsListGroupBorderColor,
	varBsListGroupBorderRadius,
	varBsListGroupBorderWidth,
	varBsListGroupColor,
	varBsListGroupDisabledBg,
	varBsListGroupDisabledColor,
	varBsListGroupItemPaddingX,
	varBsListGroupItemPaddingY,
} from '../../../../theme-contract/ui/list-group/_vars.css'
import {
	link,
} from '../../../../theme-contract/contents/basic/contract.css'
import {
	listGroup,
	listGroupFlush,
	listGroupItem,
	listGroupItemAction,
	listGroupItemActive,
	listGroupItemDanger,
	listGroupItemDark,
	listGroupItemDisabled,
	listGroupItemInfo,
	listGroupItemLight,
	listGroupItemPrimary,
	listGroupItemSecondary,
	listGroupItemSuccess,
	listGroupItemWarning,
} from '../../../../theme-contract/ui/list-group/contract.css'
import { darklyScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/list-group
// Review [UNMAPPED] and [DELTA] comments before committing.

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
// .list-group { --bs-list-group-color: var(--bs-body-color); --bs-list-group-bg: var(--bs-body-bg); --bs-list-group-border-color: var(--bs-border-color); --bs-list-group-border-width: var(--bs-border-width); --bs-list-group-border-radius: var(--bs-border-radius); --bs-list-group-item-padding-x: 1rem; --bs-list-group-item-padding-y: 0.5rem; --bs-list-group-action-color: var(--bs-secondary-color); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-tertiary-bg); --bs-list-group-action-active-color: var(--bs-body-color); --bs-list-group-action-active-bg: var(--bs-secondary-bg); --bs-list-group-disabled-color: var(--bs-secondary-color); --bs-list-group-disabled-bg: var(--bs-body-bg); --bs-list-group-active-color: #fff; --bs-list-group-active-bg: #0d6efd; --bs-list-group-active-border-color: #0d6efd; display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0; border-radius: var(--bs-list-group-border-radius); }
globalStyle(`${darklyScope}${listGroup}`, {
	vars: {
		[varBsListGroupColor]: "#fff",
		[varBsListGroupBg]: "#303030",
		[varBsListGroupBorderColor]: "#444",
		[varBsListGroupBorderWidth]: varBsBorderWidth,
		[varBsListGroupBorderRadius]: varBsBorderRadius,
		[varBsListGroupItemPaddingX]: "1rem",
		[varBsListGroupItemPaddingY]: "0.5rem",
		[varBsListGroupActionColor]: varBsSecondaryColor,
		[varBsListGroupActionHoverColor]: "#fff",
		[varBsListGroupActionHoverBg]: "#444",
		[varBsListGroupActionActiveColor]: varBsBodyColor,
		[varBsListGroupActionActiveBg]: "#222",
		[varBsListGroupDisabledColor]: varBsSecondaryColor,
		[varBsListGroupDisabledBg]: "#303030",
		[varBsListGroupActiveColor]: "#fff",
		[varBsListGroupActiveBg]: "#375a7f",
		[varBsListGroupActiveBorderColor]: "#375a7f",
	},
	display: "flex",
	flexDirection: "column",
	paddingLeft: 0,
	marginBottom: 0,
	borderRadius: varBsListGroupBorderRadius,
})

// SOURCE CSS:
// .list-group-item { position: relative; display: block; padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x); color: var(--bs-list-group-color); text-decoration: none; background-color: var(--bs-list-group-bg); border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color); }
globalStyle(`${darklyScope}${listGroupItem}`, {
	position: "relative",
	display: "block",
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: "none",
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

// SOURCE CSS:
// .list-group-item:first-child { border-top-left-radius: inherit; border-top-right-radius: inherit; }
globalStyle(`${darklyScope}${listGroupItem}:first-child`, {
	borderTopLeftRadius: "inherit",
	borderTopRightRadius: "inherit",
})

// SOURCE CSS:
// .list-group-item:last-child { border-bottom-right-radius: inherit; border-bottom-left-radius: inherit; }
globalStyle(`${darklyScope}${listGroupItem}:last-child`, {
	borderBottomRightRadius: "inherit",
	borderBottomLeftRadius: "inherit",
})

// SOURCE CSS:
// .list-group-item.disabled { color: var(--bs-list-group-disabled-color); pointer-events: none; background-color: var(--bs-list-group-disabled-bg); }
globalStyle(`${darklyScope}${listGroupItem}${listGroupItemDisabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsListGroupDisabledBg,
})

// SOURCE CSS:
// .list-group-item:disabled { color: var(--bs-list-group-disabled-color); pointer-events: none; background-color: var(--bs-list-group-disabled-bg); }
globalStyle(`${darklyScope}${listGroupItem}:disabled`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsListGroupDisabledBg,
})

// SOURCE CSS:
// .list-group-item-action { width: 100%; color: var(--bs-list-group-action-color); text-align: inherit; }
globalStyle(`${darklyScope}${listGroupItemAction}`, {
	width: "100%",
	color: varBsListGroupActionColor,
	textAlign: "inherit",
})

// SOURCE CSS:
// .list-group-item-action:not(.active):hover { z-index: 1; color: var(--bs-list-group-action-hover-color); text-decoration: none; background-color: var(--bs-list-group-action-hover-bg); }
globalStyle(`${darklyScope}${listGroupItemAction}:not(${listGroupItemActive}):hover`, {
	zIndex: 1,
	color: varBsListGroupActionHoverColor,
	textDecoration: "none",
	backgroundColor: varBsListGroupActionHoverBg,
})

// SOURCE CSS:
// .list-group-item-action:not(.active):focus { z-index: 1; color: var(--bs-list-group-action-hover-color); text-decoration: none; background-color: var(--bs-list-group-action-hover-bg); }
globalStyle(`${darklyScope}${listGroupItemAction}:not(${listGroupItemActive}):focus`, {
	zIndex: 1,
	color: varBsListGroupActionHoverColor,
	textDecoration: "none",
	backgroundColor: varBsListGroupActionHoverBg,
})

// SOURCE CSS:
// .list-group-item-action:not(.active):active { color: var(--bs-list-group-action-active-color); background-color: var(--bs-list-group-action-active-bg); }
globalStyle(`${darklyScope}${listGroupItemAction}:not(${listGroupItemActive}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

// SOURCE CSS:
// .list-group-item-danger { --bs-list-group-color: var(--bs-danger-text-emphasis); --bs-list-group-bg: var(--bs-danger-bg-subtle); --bs-list-group-border-color: var(--bs-danger-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-danger-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-danger-border-subtle); --bs-list-group-active-color: var(--bs-danger-bg-subtle); --bs-list-group-active-bg: var(--bs-danger-text-emphasis); --bs-list-group-active-border-color: var(--bs-danger-text-emphasis); }
globalStyle(`${darklyScope}${listGroupItemDanger}`, {
	vars: {
		[varBsListGroupColor]: "#5c1e18",
		[varBsListGroupBg]: "#fadbd8",
		[varBsListGroupBorderColor]: "#f5b7b1",
		[varBsListGroupActionHoverColor]: "#000",
		[varBsListGroupActionHoverBg]: "#f5b7b1",
		[varBsListGroupActionActiveColor]: "#000",
		[varBsListGroupActionActiveBg]: "#f5b7b1",
		[varBsListGroupActiveColor]: "#fadbd8",
		[varBsListGroupActiveBg]: "#5c1e18",
		[varBsListGroupActiveBorderColor]: "#5c1e18",
	},
})

// SOURCE CSS:
// .list-group-item-dark { --bs-list-group-color: var(--bs-dark-text-emphasis); --bs-list-group-bg: var(--bs-dark-bg-subtle); --bs-list-group-border-color: var(--bs-dark-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-dark-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-dark-border-subtle); --bs-list-group-active-color: var(--bs-dark-bg-subtle); --bs-list-group-active-bg: var(--bs-dark-text-emphasis); --bs-list-group-active-border-color: var(--bs-dark-text-emphasis); }
globalStyle(`${darklyScope}${listGroupItemDark}`, {
	vars: {
		[varBsListGroupColor]: "#444",
		[varBsListGroupBg]: "#ced4da",
		[varBsListGroupBorderColor]: "#adb5bd",
		[varBsListGroupActionHoverColor]: "#000",
		[varBsListGroupActionHoverBg]: "#adb5bd",
		[varBsListGroupActionActiveColor]: "#000",
		[varBsListGroupActionActiveBg]: "#adb5bd",
		[varBsListGroupActiveColor]: "#ced4da",
		[varBsListGroupActiveBg]: "#444",
		[varBsListGroupActiveBorderColor]: "#444",
	},
})

// SOURCE CSS:
// .list-group-item-info { --bs-list-group-color: var(--bs-info-text-emphasis); --bs-list-group-bg: var(--bs-info-bg-subtle); --bs-list-group-border-color: var(--bs-info-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-info-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-info-border-subtle); --bs-list-group-active-color: var(--bs-info-bg-subtle); --bs-list-group-active-bg: var(--bs-info-text-emphasis); --bs-list-group-active-border-color: var(--bs-info-text-emphasis); }
globalStyle(`${darklyScope}${listGroupItemInfo}`, {
	vars: {
		[varBsListGroupColor]: "#153d58",
		[varBsListGroupBg]: "#d6eaf8",
		[varBsListGroupBorderColor]: "#aed6f1",
		[varBsListGroupActionHoverColor]: "#000",
		[varBsListGroupActionHoverBg]: "#aed6f1",
		[varBsListGroupActionActiveColor]: "#000",
		[varBsListGroupActionActiveBg]: "#aed6f1",
		[varBsListGroupActiveColor]: "#d6eaf8",
		[varBsListGroupActiveBg]: "#153d58",
		[varBsListGroupActiveBorderColor]: "#153d58",
	},
})

// SOURCE CSS:
// .list-group-item-light { --bs-list-group-color: var(--bs-light-text-emphasis); --bs-list-group-bg: var(--bs-light-bg-subtle); --bs-list-group-border-color: var(--bs-light-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-light-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-light-border-subtle); --bs-list-group-active-color: var(--bs-light-bg-subtle); --bs-list-group-active-bg: var(--bs-light-text-emphasis); --bs-list-group-active-border-color: var(--bs-light-text-emphasis); }
globalStyle(`${darklyScope}${listGroupItemLight}`, {
	vars: {
		[varBsListGroupColor]: "#444",
		[varBsListGroupBg]: "#fcfcfd",
		[varBsListGroupBorderColor]: "#ebebeb",
		[varBsListGroupActionHoverColor]: "#000",
		[varBsListGroupActionHoverBg]: "#ebebeb",
		[varBsListGroupActionActiveColor]: "#000",
		[varBsListGroupActionActiveBg]: "#ebebeb",
		[varBsListGroupActiveColor]: "#fcfcfd",
		[varBsListGroupActiveBg]: "#444",
		[varBsListGroupActiveBorderColor]: "#444",
	},
})

// SOURCE CSS:
// .list-group-item + .list-group-item { border-top-width: 0; }
globalStyle(`${darklyScope}${listGroupItem} + ${darklyScope}${listGroupItem}`, {
	borderTopWidth: 0,
})

// SOURCE CSS:
// .list-group-item-primary { --bs-list-group-color: var(--bs-primary-text-emphasis); --bs-list-group-bg: var(--bs-primary-bg-subtle); --bs-list-group-border-color: var(--bs-primary-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-primary-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-primary-border-subtle); --bs-list-group-active-color: var(--bs-primary-bg-subtle); --bs-list-group-active-bg: var(--bs-primary-text-emphasis); --bs-list-group-active-border-color: var(--bs-primary-text-emphasis); }
globalStyle(`${darklyScope}${listGroupItemPrimary}`, {
	vars: {
		[varBsListGroupColor]: "#162433",
		[varBsListGroupBg]: "#d7dee5",
		[varBsListGroupBorderColor]: "#afbdcc",
		[varBsListGroupActionHoverColor]: "#000",
		[varBsListGroupActionHoverBg]: "#afbdcc",
		[varBsListGroupActionActiveColor]: "#000",
		[varBsListGroupActionActiveBg]: "#afbdcc",
		[varBsListGroupActiveColor]: "#d7dee5",
		[varBsListGroupActiveBg]: "#162433",
		[varBsListGroupActiveBorderColor]: "#162433",
	},
})

// SOURCE CSS:
// .list-group-item-secondary { --bs-list-group-color: var(--bs-secondary-text-emphasis); --bs-list-group-bg: var(--bs-secondary-bg-subtle); --bs-list-group-border-color: var(--bs-secondary-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-secondary-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-secondary-border-subtle); --bs-list-group-active-color: var(--bs-secondary-bg-subtle); --bs-list-group-active-bg: var(--bs-secondary-text-emphasis); --bs-list-group-active-border-color: var(--bs-secondary-text-emphasis); }
globalStyle(`${darklyScope}${listGroupItemSecondary}`, {
	vars: {
		[varBsListGroupColor]: "#1b1b1b",
		[varBsListGroupBg]: "#dadada",
		[varBsListGroupBorderColor]: "#b4b4b4",
		[varBsListGroupActionHoverColor]: "#000",
		[varBsListGroupActionHoverBg]: "#b4b4b4",
		[varBsListGroupActionActiveColor]: "#000",
		[varBsListGroupActionActiveBg]: "#b4b4b4",
		[varBsListGroupActiveColor]: "#dadada",
		[varBsListGroupActiveBg]: "#1b1b1b",
		[varBsListGroupActiveBorderColor]: "#1b1b1b",
	},
})

// SOURCE CSS:
// .list-group-item-success { --bs-list-group-color: var(--bs-success-text-emphasis); --bs-list-group-bg: var(--bs-success-bg-subtle); --bs-list-group-border-color: var(--bs-success-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-success-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-success-border-subtle); --bs-list-group-active-color: var(--bs-success-bg-subtle); --bs-list-group-active-bg: var(--bs-success-text-emphasis); --bs-list-group-active-border-color: var(--bs-success-text-emphasis); }
globalStyle(`${darklyScope}${listGroupItemSuccess}`, {
	vars: {
		[varBsListGroupColor]: "#004b38",
		[varBsListGroupBg]: "#ccf2e8",
		[varBsListGroupBorderColor]: "#99e4d1",
		[varBsListGroupActionHoverColor]: "#000",
		[varBsListGroupActionHoverBg]: "#99e4d1",
		[varBsListGroupActionActiveColor]: "#000",
		[varBsListGroupActionActiveBg]: "#99e4d1",
		[varBsListGroupActiveColor]: "#ccf2e8",
		[varBsListGroupActiveBg]: "#004b38",
		[varBsListGroupActiveBorderColor]: "#004b38",
	},
})

// SOURCE CSS:
// .list-group-item-warning { --bs-list-group-color: var(--bs-warning-text-emphasis); --bs-list-group-bg: var(--bs-warning-bg-subtle); --bs-list-group-border-color: var(--bs-warning-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-warning-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-warning-border-subtle); --bs-list-group-active-color: var(--bs-warning-bg-subtle); --bs-list-group-active-bg: var(--bs-warning-text-emphasis); --bs-list-group-active-border-color: var(--bs-warning-text-emphasis); }
globalStyle(`${darklyScope}${listGroupItemWarning}`, {
	vars: {
		[varBsListGroupColor]: "#613e07",
		[varBsListGroupBg]: "#fdebd0",
		[varBsListGroupBorderColor]: "#fad7a0",
		[varBsListGroupActionHoverColor]: "#000",
		[varBsListGroupActionHoverBg]: "#fad7a0",
		[varBsListGroupActionActiveColor]: "#000",
		[varBsListGroupActionActiveBg]: "#fad7a0",
		[varBsListGroupActiveColor]: "#fdebd0",
		[varBsListGroupActiveBg]: "#613e07",
		[varBsListGroupActiveBorderColor]: "#613e07",
	},
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
// .list-group-flush { border-radius: 0; }
globalStyle(`${darklyScope}${listGroupFlush}`, {
	borderRadius: 0,
})

// SOURCE CSS:
// .list-group-flush > .list-group-item { border-width: 0 0 var(--bs-list-group-border-width); }
globalStyle(`${darklyScope}${listGroupFlush} > ${darklyScope}${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

// SOURCE CSS:
// .list-group-flush > .list-group-item:last-child { border-bottom-width: 0; }
globalStyle(`${darklyScope}${listGroupFlush} > ${darklyScope}${listGroupItem}:last-child`, {
	borderBottomWidth: 0,
})

// ── Delta rules (theme-specific, not in bootstrap structure) ─────────────────
globalStyle(`.list-group-numbered > ${darklyScope}${listGroupItem}::before`, {
	content: "counters(section, \".\") \". \"",
	counterIncrement: "section",
})

globalStyle(`${darklyScope}${listGroupItem}${listGroupItemActive}`, {
	zIndex: 2,
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${darklyScope}${listGroupItem} + ${darklyScope}${listGroupItem}${listGroupItemActive}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`.list-group-horizontal > ${darklyScope}${listGroupItem}:first-child:not(:last-child)`, {
	borderBottomLeftRadius: varBsListGroupBorderRadius,
	borderTopRightRadius: 0,
})

globalStyle(`.list-group-horizontal > ${darklyScope}${listGroupItem}:last-child:not(:first-child)`, {
	borderTopRightRadius: varBsListGroupBorderRadius,
	borderBottomLeftRadius: 0,
})

globalStyle(`.list-group-horizontal > ${darklyScope}${listGroupItem}${listGroupItemActive}`, {
	marginTop: 0,
})

globalStyle(`.list-group-horizontal > ${darklyScope}${listGroupItem} + ${darklyScope}${listGroupItem}`, {
	borderTopWidth: varBsListGroupBorderWidth,
	borderLeftWidth: 0,
})

globalStyle(`.list-group-horizontal > ${darklyScope}${listGroupItem} + ${darklyScope}${listGroupItem}${listGroupItemActive}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})
