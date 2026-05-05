import { globalStyle } from '@vanilla-extract/css'
import {
	listGroup,
	listGroupFlush,
	listGroupItem,
	listGroupItemAction,
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
	varBsBorderColor,
	varBsBorderRadius,
	varBsBorderWidth,
	varBsBodyBg,
	varBsBodyColor,
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
	varBsPrimary,
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
import { slateScope } from '../../scope.css'

// ── Base list-group ───────────────────────────────────────────────────────────

// SOURCE CSS:
// .list-group {
//   --bs-list-group-color: var(--bs-body-color);
//   --bs-list-group-bg: var(--bs-body-bg);
//   --bs-list-group-border-color: var(--bs-border-color);
//   --bs-list-group-border-width: var(--bs-border-width);
//   --bs-list-group-border-radius: var(--bs-border-radius);
//   --bs-list-group-item-padding-x: 1rem; --bs-list-group-item-padding-y: 0.5rem;
//   --bs-list-group-action-color: var(--bs-secondary-color);
//   --bs-list-group-action-hover-color: var(--bs-emphasis-color);
//   --bs-list-group-action-hover-bg: var(--bs-tertiary-bg);
//   --bs-list-group-action-active-color: var(--bs-body-color);
//   --bs-list-group-action-active-bg: var(--bs-secondary-bg);
//   --bs-list-group-disabled-color: var(--bs-secondary-color);
//   --bs-list-group-disabled-bg: var(--bs-body-bg);
//   --bs-list-group-active-color: #fff;
//   --bs-list-group-active-bg: #0d6efd; (= varBsPrimary)
//   --bs-list-group-active-border-color: #0d6efd; (= varBsPrimary)
//   display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0;
//   border-radius: var(--bs-list-group-border-radius);
// }
globalStyle(`${slateScope}${listGroup}`, {
	vars: {
		[varBsListGroupColor]: varBsBodyColor,
		[varBsListGroupBg]: varBsBodyBg,
		[varBsListGroupBorderColor]: varBsBorderColor,
		[varBsListGroupBorderWidth]: varBsBorderWidth,
		[varBsListGroupBorderRadius]: varBsBorderRadius,
		[varBsListGroupItemPaddingX]: '1rem',
		[varBsListGroupItemPaddingY]: '0.5rem',
		[varBsListGroupActionColor]: varBsSecondaryColor,
		[varBsListGroupActionHoverColor]: varBsEmphasisColor,
		[varBsListGroupActionHoverBg]: varBsTertiaryBg,
		[varBsListGroupActionActiveColor]: varBsBodyColor,
		[varBsListGroupActionActiveBg]: varBsSecondaryBg,
		[varBsListGroupDisabledColor]: varBsSecondaryColor,
		[varBsListGroupDisabledBg]: varBsBodyBg,
		[varBsListGroupActiveColor]: '#fff',
		[varBsListGroupActiveBg]: varBsPrimary,
		[varBsListGroupActiveBorderColor]: varBsPrimary,
	},
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: 0,
	marginBottom: 0,
	borderRadius: varBsListGroupBorderRadius,
})

// ── Flush variant ─────────────────────────────────────────────────────────────

globalStyle(`${slateScope}${listGroupFlush}`, {
	borderRadius: 0,
})

globalStyle(`${slateScope}${listGroupFlush} > ${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

globalStyle(`${slateScope}${listGroupFlush} > ${listGroupItem}:last-child`, {
	borderBottomWidth: 0,
})

// ── Item ──────────────────────────────────────────────────────────────────────

// SOURCE CSS:
// .list-group-item {
//   position: relative; display: block;
//   padding: var(--bs-list-group-item-padding-y) var(--bs-list-group-item-padding-x);
//   color: var(--bs-list-group-color); text-decoration: none;
//   background-color: var(--bs-list-group-bg);
//   border: var(--bs-list-group-border-width) solid var(--bs-list-group-border-color);
// }
globalStyle(`${slateScope}${listGroupItem}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

globalStyle(`${slateScope}${listGroupItem}:first-child`, {
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
})

globalStyle(`${slateScope}${listGroupItem}:last-child`, {
	borderBottomRightRadius: 'inherit',
	borderBottomLeftRadius: 'inherit',
})

// Disabled state
globalStyle(
	`${slateScope}${listGroupItem}${listGroupItemDisabled},` +
		`${slateScope}${listGroupItem}:disabled`,
	{
		color: varBsListGroupDisabledColor,
		pointerEvents: 'none',
		backgroundColor: varBsListGroupDisabledBg,
	},
)

// Active state
globalStyle(`${slateScope}${listGroupItem}.active`, {
	zIndex: 2,
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

// Sibling border collapse
globalStyle(`${slateScope}${listGroupItem} + ${listGroupItem}`, {
	borderTopWidth: 0,
})

globalStyle(`${slateScope}${listGroupItem} + ${listGroupItem}.active`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

// ── Action (anchor / button) items ────────────────────────────────────────────

globalStyle(`${slateScope}${listGroupItemAction}`, {
	width: '100%',
	color: varBsListGroupActionColor,
	textAlign: 'inherit',
})

globalStyle(
	`${slateScope}${listGroupItemAction}:not(.active):hover,` +
		`${slateScope}${listGroupItemAction}:not(.active):focus`,
	{
		zIndex: 1,
		color: varBsListGroupActionHoverColor,
		textDecoration: 'none',
		backgroundColor: varBsListGroupActionHoverBg,
	},
)

globalStyle(`${slateScope}${listGroupItemAction}:not(.active):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

// ── Colour variants ───────────────────────────────────────────────────────────
// Each variant sets the list-group vars; the item rules above consume them.

// SOURCE CSS (same pattern for all variants):
// .list-group-item-primary {
//   --bs-list-group-color: var(--bs-primary-text-emphasis);
//   --bs-list-group-bg: var(--bs-primary-bg-subtle);
//   --bs-list-group-border-color: var(--bs-primary-border-subtle);
//   --bs-list-group-action-hover-color: var(--bs-emphasis-color);
//   --bs-list-group-action-hover-bg: var(--bs-primary-border-subtle);
//   --bs-list-group-action-active-color: var(--bs-emphasis-color);
//   --bs-list-group-action-active-bg: var(--bs-primary-border-subtle);
//   --bs-list-group-active-color: var(--bs-primary-bg-subtle);
//   --bs-list-group-active-bg: var(--bs-primary-text-emphasis);
//   --bs-list-group-active-border-color: var(--bs-primary-text-emphasis);
// }

globalStyle(`${slateScope}${listGroupItemPrimary}`, {
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

globalStyle(`${slateScope}${listGroupItemSecondary}`, {
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

globalStyle(`${slateScope}${listGroupItemSuccess}`, {
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

globalStyle(`${slateScope}${listGroupItemInfo}`, {
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

globalStyle(`${slateScope}${listGroupItemWarning}`, {
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

globalStyle(`${slateScope}${listGroupItemDanger}`, {
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

globalStyle(`${slateScope}${listGroupItemLight}`, {
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

globalStyle(`${slateScope}${listGroupItemDark}`, {
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

globalStyle(`${slateScope}${listGroupItem}`, {
	color: '#fff',
})

globalStyle(`${slateScope}${listGroupItemLight}`, {
	color: '#272b30',
	vars: {
		[varBsListGroupBg]: '#e9ecef',
		[varBsListGroupBorderColor]: 'rgba(0, 0, 0, 0.6)',
	},
})

globalStyle(`${slateScope}${listGroupItemAction}:hover`, {
	backgroundColor: '#23272b',
})

globalStyle(`${slateScope}${listGroupItemPrimary}`, {
	vars: {
		[varBsListGroupBg]: '#3a3f44',
		[varBsListGroupBorderColor]: 'rgba(0, 0, 0, 0.6)',
	},
})

globalStyle(`${slateScope}${listGroupItemSecondary}`, {
	vars: {
		[varBsListGroupBg]: '#7a8288',
		[varBsListGroupBorderColor]: 'rgba(0, 0, 0, 0.6)',
	},
})

globalStyle(`${slateScope}${listGroupItemSuccess}`, {
	vars: {
		[varBsListGroupBg]: '#62c462',
		[varBsListGroupBorderColor]: 'rgba(0, 0, 0, 0.6)',
	},
})

globalStyle(`${slateScope}${listGroupItemInfo}`, {
	vars: {
		[varBsListGroupBg]: '#5bc0de',
		[varBsListGroupBorderColor]: 'rgba(0, 0, 0, 0.6)',
	},
})

globalStyle(`${slateScope}${listGroupItemWarning}`, {
	vars: {
		[varBsListGroupBg]: '#f89406',
		[varBsListGroupBorderColor]: 'rgba(0, 0, 0, 0.6)',
	},
})

globalStyle(`${slateScope}${listGroupItemDanger}`, {
	vars: {
		[varBsListGroupBg]: '#ee5f5b',
		[varBsListGroupBorderColor]: 'rgba(0, 0, 0, 0.6)',
	},
})

globalStyle(`${slateScope}${listGroupItemDark}`, {
	vars: {
		[varBsListGroupBg]: '#272b30',
		[varBsListGroupBorderColor]: 'rgba(0, 0, 0, 0.6)',
	},
})
