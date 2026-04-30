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
import { bootstrapScope } from '../../scope.css'

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
globalStyle(`${bootstrapScope}${listGroup}`, {
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

globalStyle(`${bootstrapScope}${listGroupFlush}`, {
	borderRadius: 0,
})

globalStyle(`${bootstrapScope}${listGroupFlush} > ${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

globalStyle(`${bootstrapScope}${listGroupFlush} > ${listGroupItem}:last-child`, {
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
globalStyle(`${bootstrapScope}${listGroupItem}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

globalStyle(`${bootstrapScope}${listGroupItem}:first-child`, {
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
})

globalStyle(`${bootstrapScope}${listGroupItem}:last-child`, {
	borderBottomRightRadius: 'inherit',
	borderBottomLeftRadius: 'inherit',
})

// Disabled state
globalStyle(
	`${bootstrapScope}${listGroupItem}${listGroupItemDisabled},` +
		`${bootstrapScope}${listGroupItem}:disabled`,
	{
		color: varBsListGroupDisabledColor,
		pointerEvents: 'none',
		backgroundColor: varBsListGroupDisabledBg,
	},
)

// Active state
globalStyle(`${bootstrapScope}${listGroupItem}.active`, {
	zIndex: 2,
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

// Sibling border collapse
globalStyle(`${bootstrapScope}${listGroupItem} + ${listGroupItem}`, {
	borderTopWidth: 0,
})

globalStyle(`${bootstrapScope}${listGroupItem} + ${listGroupItem}.active`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

// ── Action (anchor / button) items ────────────────────────────────────────────

globalStyle(`${bootstrapScope}${listGroupItemAction}`, {
	width: '100%',
	color: varBsListGroupActionColor,
	textAlign: 'inherit',
})

globalStyle(
	`${bootstrapScope}${listGroupItemAction}:not(.active):hover,` +
		`${bootstrapScope}${listGroupItemAction}:not(.active):focus`,
	{
		zIndex: 1,
		color: varBsListGroupActionHoverColor,
		textDecoration: 'none',
		backgroundColor: varBsListGroupActionHoverBg,
	},
)

globalStyle(`${bootstrapScope}${listGroupItemAction}:not(.active):active`, {
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

globalStyle(`${bootstrapScope}${listGroupItemPrimary}`, {
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

globalStyle(`${bootstrapScope}${listGroupItemSecondary}`, {
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

globalStyle(`${bootstrapScope}${listGroupItemSuccess}`, {
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

globalStyle(`${bootstrapScope}${listGroupItemInfo}`, {
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

globalStyle(`${bootstrapScope}${listGroupItemWarning}`, {
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

globalStyle(`${bootstrapScope}${listGroupItemDanger}`, {
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

globalStyle(`${bootstrapScope}${listGroupItemLight}`, {
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

globalStyle(`${bootstrapScope}${listGroupItemDark}`, {
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
