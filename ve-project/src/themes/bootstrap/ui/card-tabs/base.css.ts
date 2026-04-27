import { globalStyle, style } from '@vanilla-extract/css'
import { varBsGutterX, varBsGutterY } from '../../../../theme-contract/_vars.css'
import { varBsCardBg, varBsCardCapPaddingX, varBsCardCapPaddingY } from '../../../../theme-contract/ui/card/_vars.css'
import { navLink, navLinkActive, navTabs } from '../nav/base.css'

export const rowG4 = style({
	vars: {
		[varBsGutterX]: '1.5rem',
		[varBsGutterY]: '1.5rem',
	},
})

export const col = style({
	flex: '1 0 0%',
})

export const textCenter = style({
	textAlign: 'center !important' as 'center',
})

export const cardHeaderTabs = style([
	navTabs,
	{
		marginRight: `calc(-0.5 * ${varBsCardCapPaddingX})`,
		marginBottom: `calc(-1 * ${varBsCardCapPaddingY})`,
		marginLeft: `calc(-0.5 * ${varBsCardCapPaddingX})`,
		borderBottom: 0,
	},
])

globalStyle(`${cardHeaderTabs} ${navLink}${navLinkActive}`, {
	backgroundColor: varBsCardBg,
	borderBottomColor: varBsCardBg,
})