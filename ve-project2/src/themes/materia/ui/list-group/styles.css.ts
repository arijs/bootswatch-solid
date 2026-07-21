import { globalStyle } from '@vanilla-extract/css'
import { materiaScope } from '../../scope.css'

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
import { varBsCardInnerBorderRadius } from '../../../../theme-contract/ui/card/_vars.css'
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
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
} from '../../../../theme-contract/contents/heading/contract.css'

import {
	active,
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
	disabled,
	listGroupHorizontal,
	listGroupHorizontalLg,
	listGroupHorizontalMd,
	listGroupHorizontalSm,
	listGroupHorizontalXl,
	listGroupHorizontalXxl,
	listGroupNumbered,
} from '../../../../theme-contract/literal/contract.css'
import { card, cardHeader } from '../../../../theme-contract/ui/card/contract.css'
import {
	listGroup,
	listGroupFlush,
	listGroupItem,
	listGroupItemAction,
	listGroupItemDanger,
	listGroupItemDark,
	listGroupItemInfo,
	listGroupItemLight,
	listGroupItemPrimary,
	listGroupItemSecondary,
	listGroupItemSuccess,
	listGroupItemWarning,
} from '../../../../theme-contract/ui/list-group/contract.css'

globalStyle(`${materiaScope}${card} > ${materiaScope}${listGroup}`, {
	borderTop: 'inherit',
	borderBottom: 'inherit',
})

globalStyle(`${materiaScope}${card} > ${materiaScope}${listGroup}:first-child`, {
	borderTopWidth: '0',
	borderTopLeftRadius: varBsCardInnerBorderRadius,
	borderTopRightRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${materiaScope}${card} > ${materiaScope}${listGroup}:last-child`, {
	borderBottomWidth: '0',
	borderBottomRightRadius: varBsCardInnerBorderRadius,
	borderBottomLeftRadius: varBsCardInnerBorderRadius,
})

globalStyle(`${materiaScope}${card} > ${materiaScope}${cardHeader} + ${materiaScope}${listGroup}`, {
	borderTop: '0',
})

globalStyle(`${materiaScope}${listGroup}`, {
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
		[varBsListGroupActiveBg]: '#2196f3',
		[varBsListGroupActiveBorderColor]: '#2196f3',
	},
	display: 'flex',
	flexDirection: 'column',
	paddingLeft: '0',
	marginBottom: '0',
	borderRadius: varBsListGroupBorderRadius,
})

globalStyle(`${materiaScope}${listGroupNumbered}`, {
	listStyleType: 'none',
	counterReset: 'section',
})

globalStyle(`${materiaScope}${listGroupNumbered} > ${materiaScope}${listGroupItem}::before`, {
	content: 'counters(section, ".") ". "',
	counterIncrement: 'section',
})

globalStyle(`${materiaScope}${listGroupItem}`, {
	position: 'relative',
	display: 'block',
	padding: `${varBsListGroupItemPaddingY} ${varBsListGroupItemPaddingX}`,
	color: varBsListGroupColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupBg,
	border: `${varBsListGroupBorderWidth} solid ${varBsListGroupBorderColor}`,
})

globalStyle(`${materiaScope}${listGroupItem}:first-child`, {
	borderTopLeftRadius: 'inherit',
	borderTopRightRadius: 'inherit',
})

globalStyle(`${materiaScope}${listGroupItem}:last-child`, {
	borderBottomRightRadius: 'inherit',
	borderBottomLeftRadius: 'inherit',
})

globalStyle(`${materiaScope}${listGroupItem}${disabled}`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${materiaScope}${listGroupItem}:disabled`, {
	color: varBsListGroupDisabledColor,
	pointerEvents: 'none',
	backgroundColor: varBsListGroupDisabledBg,
})

globalStyle(`${materiaScope}${listGroupItem}${active}`, {
	zIndex: '2',
	color: varBsListGroupActiveColor,
	backgroundColor: varBsListGroupActiveBg,
	borderColor: varBsListGroupActiveBorderColor,
})

globalStyle(`${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	borderTopWidth: '0',
})

globalStyle(`${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	marginTop: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderTopWidth: varBsListGroupBorderWidth,
})

globalStyle(`${materiaScope}${listGroupItemAction}`, {
	width: '100%',
	color: varBsListGroupActionColor,
	textAlign: 'inherit',
})

globalStyle(`${materiaScope}${listGroupItemAction}:not(${active}):hover`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${materiaScope}${listGroupItemAction}:not(${active}):focus`, {
	zIndex: '1',
	color: varBsListGroupActionHoverColor,
	textDecoration: 'none',
	backgroundColor: varBsListGroupActionHoverBg,
})

globalStyle(`${materiaScope}${listGroupItemAction}:not(${active}):active`, {
	color: varBsListGroupActionActiveColor,
	backgroundColor: varBsListGroupActionActiveBg,
})

globalStyle(`${materiaScope}${listGroupHorizontal}`, {
	flexDirection: 'row',
})

globalStyle(`${materiaScope}${listGroupHorizontal} > ${materiaScope}${listGroupItem}:first-child:not(:last-child)`, {
	borderBottomLeftRadius: varBsListGroupBorderRadius,
	borderTopRightRadius: '0',
})

globalStyle(`${materiaScope}${listGroupHorizontal} > ${materiaScope}${listGroupItem}:last-child:not(:first-child)`, {
	borderTopRightRadius: varBsListGroupBorderRadius,
	borderBottomLeftRadius: '0',
})

globalStyle(`${materiaScope}${listGroupHorizontal} > ${materiaScope}${listGroupItem}${active}`, {
	marginTop: '0',
})

globalStyle(`${materiaScope}${listGroupHorizontal} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	borderTopWidth: varBsListGroupBorderWidth,
	borderLeftWidth: '0',
})

globalStyle(`${materiaScope}${listGroupHorizontal} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
	borderLeftWidth: varBsListGroupBorderWidth,
})

globalStyle(`${materiaScope}${listGroupHorizontalSm}`, {
	'@media': {
		'(min-width: 576px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalSm} > ${materiaScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalSm} > ${materiaScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalSm} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalSm} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 576px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalSm} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 576px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd}`, {
	'@media': {
		'(min-width: 768px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd} > ${materiaScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 768px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd} > ${materiaScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 768px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 768px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalMd} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 768px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg}`, {
	'@media': {
		'(min-width: 992px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg} > ${materiaScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 992px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg} > ${materiaScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 992px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 992px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalLg} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 992px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl}`, {
	'@media': {
		'(min-width: 1200px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl} > ${materiaScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 1200px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl} > ${materiaScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 1200px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 1200px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXl} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1200px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl}`, {
	'@media': {
		'(min-width: 1400px)': {
			flexDirection: 'row',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl} > ${materiaScope}${listGroupItem}:first-child:not(:last-child)`, {
	'@media': {
		'(min-width: 1400px)': {
			borderBottomLeftRadius: varBsListGroupBorderRadius,
			borderTopRightRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl} > ${materiaScope}${listGroupItem}:last-child:not(:first-child)`, {
	'@media': {
		'(min-width: 1400px)': {
			borderTopRightRadius: varBsListGroupBorderRadius,
			borderBottomLeftRadius: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl} > ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginTop: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}`, {
	'@media': {
		'(min-width: 1400px)': {
			borderTopWidth: varBsListGroupBorderWidth,
			borderLeftWidth: '0',
		},
	},
})

globalStyle(`${materiaScope}${listGroupHorizontalXxl} > ${materiaScope}${listGroupItem} + ${materiaScope}${listGroupItem}${active}`, {
	'@media': {
		'(min-width: 1400px)': {
			marginLeft: `calc(-1 * ${varBsListGroupBorderWidth})`,
			borderLeftWidth: varBsListGroupBorderWidth,
		},
	},
})

globalStyle(`${materiaScope}${listGroupFlush}`, {
	borderRadius: '0',
})

globalStyle(`${materiaScope}${listGroupFlush} > ${materiaScope}${listGroupItem}`, {
	borderWidth: `0 0 ${varBsListGroupBorderWidth}`,
})

globalStyle(`${materiaScope}${listGroupFlush} > ${materiaScope}${listGroupItem}:last-child`, {
	borderBottomWidth: '0',
})

globalStyle(`${materiaScope}${listGroupItemPrimary}`, {
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

globalStyle(`${materiaScope}${listGroupItemSecondary}`, {
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

globalStyle(`${materiaScope}${listGroupItemSuccess}`, {
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

globalStyle(`${materiaScope}${listGroupItemInfo}`, {
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

globalStyle(`${materiaScope}${listGroupItemWarning}`, {
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

globalStyle(`${materiaScope}${listGroupItemDanger}`, {
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

globalStyle(`${materiaScope}${listGroupItemLight}`, {
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

globalStyle(`${materiaScope}${listGroupItemDark}`, {
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

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h1}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH1}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h2}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH2}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h3}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH3}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h4}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH4}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h5}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH5}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${h6}`, {
	color: '#fff',
})

globalStyle(`${materiaScope}${listGroupItemAction}${active} ${materiaScope}${clsH6}`, {
	color: '#fff',
})
