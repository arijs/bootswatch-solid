import { globalStyle, style } from '@vanilla-extract/css'
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
	varBsWhite,
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

// SOURCE CSS:
// .list-group { --bs-list-group-color: var(--bs-body-color); --bs-list-group-bg: var(--bs-body-bg); --bs-list-group-border-color: var(--bs-border-color); --bs-list-group-border-width: var(--bs-border-width); --bs-list-group-border-radius: var(--bs-border-radius); --bs-list-group-item-padding-x: 1rem; --bs-list-group-item-padding-y: 0.5rem; --bs-list-group-action-color: var(--bs-secondary-color); --bs-list-group-action-hover-color: var(--bs-emphasis-color); --bs-list-group-action-hover-bg: var(--bs-tertiary-bg); --bs-list-group-action-active-color: var(--bs-body-color); --bs-list-group-action-active-bg: var(--bs-secondary-bg); --bs-list-group-disabled-color: var(--bs-secondary-color); --bs-list-group-disabled-bg: var(--bs-body-bg); --bs-list-group-active-color: #fff; --bs-list-group-active-bg: #0d6efd; --bs-list-group-active-border-color: #0d6efd; display: flex; flex-direction: column; padding-left: 0; margin-bottom: 0; border-radius: var(--bs-list-group-border-radius); }

export const listGroup = style({
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
		[varBsListGroupActiveColor]: varBsWhite,
		[varBsListGroupActiveBg]: varBsPrimary,
		[varBsListGroupActiveBorderColor]: varBsPrimary,
	},
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: '0',
	marginBottom: '0',
	borderRadius: varBsListGroupBorderRadius,
})

export const listGroupItem = style({
	position: 'relative',
	display: 'block',
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

globalStyle(`${listGroupItem}:first-child`, {
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
})

globalStyle(`${listGroupItem}:last-child`, {
	borderBottomRightRadius: 'inherit',
	borderBottomLeftRadius: 'inherit',
})

export const listGroupItemDisabled = style({
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${listGroupItem} + ${listGroupItem}`, {
	borderTopWidth: '0',
})

export const listGroupFlush = style({
	borderRadius: '0',
})

globalStyle(`${listGroupFlush} > ${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

globalStyle(`${listGroupFlush} > ${listGroupItem}:last-child`, {
	borderBottomWidth: '0',
})

export const listGroupItemAction = style({
	width: '100%',
	color: varBsListGroupActionColor,
	textAlign: 'inherit',
})

export const listGroupItemActive = style({
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(
	`${listGroupItemAction}:not(${listGroupItemActive}):hover, ${listGroupItemAction}:not(${listGroupItemActive}):focus`,
	{
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
},
)

globalStyle(`${listGroupItemAction}:not(${listGroupItemActive}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

const contextualListGroupItem = (
	color: string,
	bg: string,
	borderColor: string,
) =>
	style({
		vars: {
			[varBsListGroupColor]: color,
			[varBsListGroupBg]: bg,
			[varBsListGroupBorderColor]: borderColor,
			[varBsListGroupActionHoverColor]: varBsEmphasisColor,
			[varBsListGroupActionHoverBg]: borderColor,
			[varBsListGroupActionActiveColor]: varBsEmphasisColor,
			[varBsListGroupActionActiveBg]: borderColor,
			[varBsListGroupActiveColor]: bg,
			[varBsListGroupActiveBg]: color,
			[varBsListGroupActiveBorderColor]: color,
		},
	})

export const listGroupItemPrimary = contextualListGroupItem(
	varBsPrimaryTextEmphasis,
	varBsPrimaryBgSubtle,
	varBsPrimaryBorderSubtle,
)

export const listGroupItemSecondary = contextualListGroupItem(
	varBsSecondaryTextEmphasis,
	varBsSecondaryBgSubtle,
	varBsSecondaryBorderSubtle,
)

export const listGroupItemSuccess = contextualListGroupItem(
	varBsSuccessTextEmphasis,
	varBsSuccessBgSubtle,
	varBsSuccessBorderSubtle,
)

export const listGroupItemInfo = contextualListGroupItem(
	varBsInfoTextEmphasis,
	varBsInfoBgSubtle,
	varBsInfoBorderSubtle,
)

export const listGroupItemWarning = contextualListGroupItem(
	varBsWarningTextEmphasis,
	varBsWarningBgSubtle,
	varBsWarningBorderSubtle,
)

export const listGroupItemDanger = contextualListGroupItem(
	varBsDangerTextEmphasis,
	varBsDangerBgSubtle,
	varBsDangerBorderSubtle,
)

export const listGroupItemLight = contextualListGroupItem(
	varBsLightTextEmphasis,
	varBsLightBgSubtle,
	varBsLightBorderSubtle,
)

export const listGroupItemDark = contextualListGroupItem(
	varBsDarkTextEmphasis,
	varBsDarkBgSubtle,
	varBsDarkBorderSubtle,
)
