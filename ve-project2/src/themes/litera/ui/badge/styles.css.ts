import { globalStyle } from '@vanilla-extract/css'
import { literaScope } from '../../scope.css'

import { varBsBorderRadius } from '../../../../theme-contract/_vars.css'
import {
	varBsBadgeBorderRadius,
	varBsBadgeColor,
	varBsBadgeFontSize,
	varBsBadgeFontWeight,
	varBsBadgePaddingX,
	varBsBadgePaddingY,
} from '../../../../theme-contract/ui/badge/_vars.css'

import { badge } from '../../../../theme-contract/ui/badge/contract.css'
import { btn } from '../../../../theme-contract/ui/buttons/contract.css'

globalStyle(`${literaScope}${badge}`, {
	vars: {
		[varBsBadgePaddingX]: '1.2em',
		[varBsBadgePaddingY]: '0.6em',
		[varBsBadgeFontSize]: '0.75em',
		[varBsBadgeFontWeight]: '400',
		[varBsBadgeColor]: '#fff',
		[varBsBadgeBorderRadius]: varBsBorderRadius,
	},
	display: 'inline-block',
	padding: `${varBsBadgePaddingY} ${varBsBadgePaddingX}`,
	fontSize: varBsBadgeFontSize,
	fontWeight: varBsBadgeFontWeight,
	lineHeight: '1',
	color: varBsBadgeColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	verticalAlign: 'baseline',
	borderRadius: varBsBadgeBorderRadius,
})

globalStyle(`${literaScope}${badge}:empty`, {
	display: 'none',
})

globalStyle(`${literaScope}${btn} ${literaScope}${badge}`, {
	position: 'relative',
	top: '-1px',
})
