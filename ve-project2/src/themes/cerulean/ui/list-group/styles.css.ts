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
import { ceruleanScope } from '../../scope.css'

// AUTO-GENERATED family styles for bootstrap/ui/list-group
// Review [UNMAPPED] and [DELTA] comments before committing.

// SOURCE CSS:
// .list-group { --bs-list-group-color: var(--bs-body-color); --bs-list-group-bg: var(--bs-body-bg); --bs-list-group-border-color: var(--bs-border-color); --bs-list-group-border-width: var(--bs-border-width); --bs-list-group-border-radius: var(--bs-border-radius); --bs-list-group-item-padding-x: 1rem; --bs-list-group-item-padding-y: 0.5rem; --bs-list-group-action-color: var(--bs-secondary-color); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-tertiary-bg); --bs-list-group-action-active-color: var(--bs-body-color); --bs-list-group-action-active-bg: var(--bs-secondary-bg); --bs-list-group-disabled-color: var(--bs-secondary-color); --bs-list-group-disabled-bg: var(--bs-body-bg); --bs-list-group-active-color: #fff; --bs-list-group-active-bg: #0d6efd; --bs-list-group-active-border-color: #0d6efd; display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0; border-radius: var(--bs-list-group-border-radius); }
globalStyle(`${ceruleanScope}${listGroup}`, {
	vars: {
		[varBsListGroupColor]: varBsBodyColor,
		[varBsListGroupBg]: varBsBodyBg,
		[varBsListGroupBorderColor]: varBsBorderColor,
		[varBsListGroupBorderWidth]: varBsBorderWidth,
		[varBsListGroupBorderRadius]: varBsBorderRadius,
		[varBsListGroupItemPaddingX]: "1rem",
		[varBsListGroupItemPaddingY]: "0.5rem",
		[varBsListGroupActionColor]: varBsSecondaryColor,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsTertiaryBg,
		[varBsListGroupActionActiveColor]: varBsBodyColor,
		[varBsListGroupActionActiveBg]: varBsSecondaryBg,
		[varBsListGroupDisabledColor]: varBsSecondaryColor,
		[varBsListGroupDisabledBg]: varBsBodyBg,
		[varBsListGroupActiveColor]: "#fff",
		[varBsListGroupActiveBg]: "#2fa4e7",
		[varBsListGroupActiveBorderColor]: "#2fa4e7",
	},
	display: "flex",
	flexDirection: "column",
	paddingLeft: 0,
	marginBottom: 0,
	borderRadius: varBsListGroupBorderRadius,
})

// SOURCE CSS:
// .list-group-item { position: relative; display: block; padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x); color: var(--bs-list-group-color); text-decoration: none; background-color: var(--bs-list-group-bg); border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color); }
globalStyle(`${ceruleanScope}${listGroupItem}`, {
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
globalStyle(`${ceruleanScope}${listGroupItem}:first-child`, {
	borderTopLeftRadius: "inherit",
	borderTopRightRadius: "inherit",
})

// SOURCE CSS:
// .list-group-item:last-child { border-bottom-right-radius: inherit; border-bottom-left-radius: inherit; }
globalStyle(`${ceruleanScope}${listGroupItem}:last-child`, {
	borderBottomRightRadius: "inherit",
	borderBottomLeftRadius: "inherit",
})

// SOURCE CSS:
// .list-group-item.disabled { color: var(--bs-list-group-disabled-color); pointer-events: none; background-color: var(--bs-list-group-disabled-bg); }
globalStyle(`${ceruleanScope}${listGroupItem}${listGroupItemDisabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsListGroupDisabledBg,
})

// SOURCE CSS:
// .list-group-item:disabled { color: var(--bs-list-group-disabled-color); pointer-events: none; background-color: var(--bs-list-group-disabled-bg); }
globalStyle(`${ceruleanScope}${listGroupItem}:disabled`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: "none",
	backgroundColor: varBsListGroupDisabledBg,
})

// SOURCE CSS:
// .list-group-item-action { width: 100%; color: var(--bs-list-group-action-color); text-align: inherit; }
globalStyle(`${ceruleanScope}${listGroupItemAction}`, {
	width: "100%",
	color: varBsListGroupActionColor,
	textAlign: "inherit",
})

// SOURCE CSS:
// .list-group-item-action:not(.active):hover { z-index: 1; color: var(--bs-list-group-action-hover-color); text-decoration: none; background-color: var(--bs-list-group-action-hover-bg); }
globalStyle(`${ceruleanScope}${listGroupItemAction}:not(${listGroupItemActive}):hover`, {
	zIndex: 1,
	color: varBsListGroupActionHoverColor,
	textDecoration: "none",
	backgroundColor: varBsListGroupActionHoverBg,
})

// SOURCE CSS:
// .list-group-item-action:not(.active):focus { z-index: 1; color: var(--bs-list-group-action-hover-color); text-decoration: none; background-color: var(--bs-list-group-action-hover-bg); }
globalStyle(`${ceruleanScope}${listGroupItemAction}:not(${listGroupItemActive}):focus`, {
	zIndex: 1,
	color: varBsListGroupActionHoverColor,
	textDecoration: "none",
	backgroundColor: varBsListGroupActionHoverBg,
})

// SOURCE CSS:
// .list-group-item-action:not(.active):active { color: var(--bs-list-group-action-active-color); background-color: var(--bs-list-group-action-active-bg); }
globalStyle(`${ceruleanScope}${listGroupItemAction}:not(${listGroupItemActive}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

// SOURCE CSS:
// .list-group-item-danger { --bs-list-group-color: var(--bs-danger-text-emphasis); --bs-list-group-bg: var(--bs-danger-bg-subtle); --bs-list-group-border-color: var(--bs-danger-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-danger-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-danger-border-subtle); --bs-list-group-active-color: var(--bs-danger-bg-subtle); --bs-list-group-active-bg: var(--bs-danger-text-emphasis); --bs-list-group-active-border-color: var(--bs-danger-text-emphasis); }
globalStyle(`${ceruleanScope}${listGroupItemDanger}`, {
	vars: {
		[varBsListGroupColor]: varBsDangerTextEmphasis,
		[varBsListGroupBg]: varBsDangerBgSubtle,
		[varBsListGroupBorderColor]: varBsDangerBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsDangerBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsDangerBorderSubtle,
		[varBsListGroupActiveColor]: varBsDangerBgSubtle,
		[varBsListGroupActiveBg]: varBsDangerTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsDangerTextEmphasis,
	},
})

// SOURCE CSS:
// .list-group-item-dark { --bs-list-group-color: var(--bs-dark-text-emphasis); --bs-list-group-bg: var(--bs-dark-bg-subtle); --bs-list-group-border-color: var(--bs-dark-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-dark-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-dark-border-subtle); --bs-list-group-active-color: var(--bs-dark-bg-subtle); --bs-list-group-active-bg: var(--bs-dark-text-emphasis); --bs-list-group-active-border-color: var(--bs-dark-text-emphasis); }
globalStyle(`${ceruleanScope}${listGroupItemDark}`, {
	vars: {
		[varBsListGroupColor]: varBsDarkTextEmphasis,
		[varBsListGroupBg]: varBsDarkBgSubtle,
		[varBsListGroupBorderColor]: varBsDarkBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsDarkBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsDarkBorderSubtle,
		[varBsListGroupActiveColor]: varBsDarkBgSubtle,
		[varBsListGroupActiveBg]: varBsDarkTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsDarkTextEmphasis,
	},
})

// SOURCE CSS:
// .list-group-item-info { --bs-list-group-color: var(--bs-info-text-emphasis); --bs-list-group-bg: var(--bs-info-bg-subtle); --bs-list-group-border-color: var(--bs-info-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-info-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-info-border-subtle); --bs-list-group-active-color: var(--bs-info-bg-subtle); --bs-list-group-active-bg: var(--bs-info-text-emphasis); --bs-list-group-active-border-color: var(--bs-info-text-emphasis); }
globalStyle(`${ceruleanScope}${listGroupItemInfo}`, {
	vars: {
		[varBsListGroupColor]: varBsInfoTextEmphasis,
		[varBsListGroupBg]: varBsInfoBgSubtle,
		[varBsListGroupBorderColor]: varBsInfoBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsInfoBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsInfoBorderSubtle,
		[varBsListGroupActiveColor]: varBsInfoBgSubtle,
		[varBsListGroupActiveBg]: varBsInfoTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsInfoTextEmphasis,
	},
})

// SOURCE CSS:
// .list-group-item-light { --bs-list-group-color: var(--bs-light-text-emphasis); --bs-list-group-bg: var(--bs-light-bg-subtle); --bs-list-group-border-color: var(--bs-light-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-light-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-light-border-subtle); --bs-list-group-active-color: var(--bs-light-bg-subtle); --bs-list-group-active-bg: var(--bs-light-text-emphasis); --bs-list-group-active-border-color: var(--bs-light-text-emphasis); }
globalStyle(`${ceruleanScope}${listGroupItemLight}`, {
	vars: {
		[varBsListGroupColor]: varBsLightTextEmphasis,
		[varBsListGroupBg]: varBsLightBgSubtle,
		[varBsListGroupBorderColor]: varBsLightBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsLightBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsLightBorderSubtle,
		[varBsListGroupActiveColor]: varBsLightBgSubtle,
		[varBsListGroupActiveBg]: varBsLightTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsLightTextEmphasis,
	},
})

// SOURCE CSS:
// .list-group-item + .list-group-item { border-top-width: 0; }
globalStyle(`${ceruleanScope}${listGroupItem} + ${ceruleanScope}${listGroupItem}`, {
	borderTopWidth: 0,
})

// SOURCE CSS:
// .list-group-item-primary { --bs-list-group-color: var(--bs-primary-text-emphasis); --bs-list-group-bg: var(--bs-primary-bg-subtle); --bs-list-group-border-color: var(--bs-primary-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-primary-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-primary-border-subtle); --bs-list-group-active-color: var(--bs-primary-bg-subtle); --bs-list-group-active-bg: var(--bs-primary-text-emphasis); --bs-list-group-active-border-color: var(--bs-primary-text-emphasis); }
globalStyle(`${ceruleanScope}${listGroupItemPrimary}`, {
	vars: {
		[varBsListGroupColor]: varBsPrimaryTextEmphasis,
		[varBsListGroupBg]: varBsPrimaryBgSubtle,
		[varBsListGroupBorderColor]: varBsPrimaryBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsPrimaryBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsPrimaryBorderSubtle,
		[varBsListGroupActiveColor]: varBsPrimaryBgSubtle,
		[varBsListGroupActiveBg]: varBsPrimaryTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsPrimaryTextEmphasis,
	},
})

// SOURCE CSS:
// .list-group-item-secondary { --bs-list-group-color: var(--bs-secondary-text-emphasis); --bs-list-group-bg: var(--bs-secondary-bg-subtle); --bs-list-group-border-color: var(--bs-secondary-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-secondary-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-secondary-border-subtle); --bs-list-group-active-color: var(--bs-secondary-bg-subtle); --bs-list-group-active-bg: var(--bs-secondary-text-emphasis); --bs-list-group-active-border-color: var(--bs-secondary-text-emphasis); }
globalStyle(`${ceruleanScope}${listGroupItemSecondary}`, {
	vars: {
		[varBsListGroupColor]: varBsSecondaryTextEmphasis,
		[varBsListGroupBg]: varBsSecondaryBgSubtle,
		[varBsListGroupBorderColor]: varBsSecondaryBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsSecondaryBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsSecondaryBorderSubtle,
		[varBsListGroupActiveColor]: varBsSecondaryBgSubtle,
		[varBsListGroupActiveBg]: varBsSecondaryTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsSecondaryTextEmphasis,
	},
})

// SOURCE CSS:
// .list-group-item-success { --bs-list-group-color: var(--bs-success-text-emphasis); --bs-list-group-bg: var(--bs-success-bg-subtle); --bs-list-group-border-color: var(--bs-success-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-success-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-success-border-subtle); --bs-list-group-active-color: var(--bs-success-bg-subtle); --bs-list-group-active-bg: var(--bs-success-text-emphasis); --bs-list-group-active-border-color: var(--bs-success-text-emphasis); }
globalStyle(`${ceruleanScope}${listGroupItemSuccess}`, {
	vars: {
		[varBsListGroupColor]: varBsSuccessTextEmphasis,
		[varBsListGroupBg]: varBsSuccessBgSubtle,
		[varBsListGroupBorderColor]: varBsSuccessBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsSuccessBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsSuccessBorderSubtle,
		[varBsListGroupActiveColor]: varBsSuccessBgSubtle,
		[varBsListGroupActiveBg]: varBsSuccessTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsSuccessTextEmphasis,
	},
})

// SOURCE CSS:
// .list-group-item-warning { --bs-list-group-color: var(--bs-warning-text-emphasis); --bs-list-group-bg: var(--bs-warning-bg-subtle); --bs-list-group-border-color: var(--bs-warning-border-subtle); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-warning-border-subtle); --bs-list-group-action-active-color: var(--bs-emphasis-color); --bs-list-group-action-active-bg: var(--bs-warning-border-subtle); --bs-list-group-active-color: var(--bs-warning-bg-subtle); --bs-list-group-active-bg: var(--bs-warning-text-emphasis); --bs-list-group-active-border-color: var(--bs-warning-text-emphasis); }
globalStyle(`${ceruleanScope}${listGroupItemWarning}`, {
	vars: {
		[varBsListGroupColor]: varBsWarningTextEmphasis,
		[varBsListGroupBg]: varBsWarningBgSubtle,
		[varBsListGroupBorderColor]: varBsWarningBorderSubtle,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsWarningBorderSubtle,
		[varBsListGroupActionActiveColor]: varBsEmphasisColor,
		[varBsListGroupActionActiveBg]: varBsWarningBorderSubtle,
		[varBsListGroupActiveColor]: varBsWarningBgSubtle,
		[varBsListGroupActiveBg]: varBsWarningTextEmphasis,
		[varBsListGroupActiveBorderColor]: varBsWarningTextEmphasis,
	},
})

// SOURCE CSS:
// .list-group-flush { border-radius: 0; }
globalStyle(`${ceruleanScope}${listGroupFlush}`, {
	borderRadius: 0,
})

// SOURCE CSS:
// .list-group-flush > .list-group-item { border-width: 0 0 var(--bs-list-group-border-width); }
globalStyle(`${ceruleanScope}${listGroupFlush} > ${ceruleanScope}${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

// SOURCE CSS:
// .list-group-flush > .list-group-item:last-child { border-bottom-width: 0; }
globalStyle(`${ceruleanScope}${listGroupFlush} > ${ceruleanScope}${listGroupItem}:last-child`, {
	borderBottomWidth: 0,
})

// ── Delta rules (theme-specific overrides) ───────────────────────────────────
// SOURCE CSS:
// .list-group-numbered > .list-group-item::before { content: counters(section, ".") ". "; counter-increment: section; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".list-group-numbered" — no contract mapping
globalStyle(`.list-group-numbered > ${ceruleanScope}${listGroupItem}::before`, {
	content: "counters(section, \".\") \". \"",
	counterIncrement: "section",
})
// SOURCE CSS:
// .list-group-item.active { z-index: 2; color: var(--bs-list-group-active-color); background-color: var(--bs-list-group-active-bg); border-color: var(--bs-list-group-active-border-color); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${listGroupItem}${listGroupItemActive}`, {
	zIndex: 2,
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})
// SOURCE CSS:
// .list-group-item + .list-group-item.active { margin-top: calc(-1 * var(--bs-list-group-border-width)); border-top-width: var(--bs-list-group-border-width); }
// [DELTA] theme-specific rule not in bootstrap structure
globalStyle(`${ceruleanScope}${listGroupItem} + ${ceruleanScope}${listGroupItem}${listGroupItemActive}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})
// SOURCE CSS:
// .list-group-horizontal > .list-group-item:first-child:not(:last-child) { border-bottom-left-radius: var(--bs-list-group-border-radius); border-top-right-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".list-group-horizontal" — no contract mapping
globalStyle(`.list-group-horizontal > ${ceruleanScope}${listGroupItem}:first-child:not(:last-child)`, {
	borderBottomLeftRadius: varBsListGroupBorderRadius,
	borderTopRightRadius: 0,
})
// SOURCE CSS:
// .list-group-horizontal > .list-group-item:last-child:not(:first-child) { border-top-right-radius: var(--bs-list-group-border-radius); border-bottom-left-radius: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".list-group-horizontal" — no contract mapping
globalStyle(`.list-group-horizontal > ${ceruleanScope}${listGroupItem}:last-child:not(:first-child)`, {
	borderTopRightRadius: varBsListGroupBorderRadius,
	borderBottomLeftRadius: 0,
})
// SOURCE CSS:
// .list-group-horizontal > .list-group-item.active { margin-top: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".list-group-horizontal" — no contract mapping
globalStyle(`.list-group-horizontal > ${ceruleanScope}${listGroupItem}${listGroupItemActive}`, {
	marginTop: 0,
})
// SOURCE CSS:
// .list-group-horizontal > .list-group-item + .list-group-item { border-top-width: var(--bs-list-group-border-width); border-left-width: 0; }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".list-group-horizontal" — no contract mapping
globalStyle(`.list-group-horizontal > ${ceruleanScope}${listGroupItem} + ${ceruleanScope}${listGroupItem}`, {
	borderTopWidth: varBsListGroupBorderWidth,
	borderLeftWidth: 0,
})
// SOURCE CSS:
// .list-group-horizontal > .list-group-item + .list-group-item.active { margin-left: calc(-1 * var(--bs-list-group-border-width)); border-left-width: var(--bs-list-group-border-width); }
// [DELTA] theme-specific rule not in bootstrap structure
// [UNMAPPED_SELECTOR] class ".list-group-horizontal" — no contract mapping
globalStyle(`.list-group-horizontal > ${ceruleanScope}${listGroupItem} + ${ceruleanScope}${listGroupItem}${listGroupItemActive}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})
