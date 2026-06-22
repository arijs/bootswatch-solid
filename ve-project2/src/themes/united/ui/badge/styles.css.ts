import { globalStyle } from '@vanilla-extract/css'
import { unitedScope } from '../../scope.css'

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

globalStyle(`${unitedScope}${badge}`, {
	vars: {
		[varBsBadgePaddingX]: '0.65em',
		[varBsBadgePaddingY]: '0.35em',
		[varBsBadgeFontSize]: '0.75em',
		[varBsBadgeFontWeight]: '700',
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

globalStyle(`${unitedScope}${badge}:empty`, {
	display: 'none',
})

globalStyle(`${unitedScope}${btn} ${unitedScope}${badge}`, {
	position: 'relative',
	top: '-1px',
})
