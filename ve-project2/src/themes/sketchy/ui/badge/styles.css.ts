import { globalStyle } from '@vanilla-extract/css'
import { sketchyScope } from '../../scope.css'

import { varBsBorderRadius } from '../../../../theme-contract/_vars.css'
import {
	varBsBadgeBorderRadius,
	varBsBadgeColor,
	varBsBadgeFontSize,
	varBsBadgeFontWeight,
	varBsBadgePaddingX,
	varBsBadgePaddingY,
} from '../../../../theme-contract/ui/badge/_vars.css'

import { badgePill } from '../../../../theme-contract/literal/contract.css'
import { badge } from '../../../../theme-contract/ui/badge/contract.css'
import { btn } from '../../../../theme-contract/ui/buttons/contract.css'

globalStyle(`${sketchyScope}${badge}`, {
	vars: {
		[varBsBadgePaddingX]: '1.2em',
		[varBsBadgePaddingY]: '0.5em',
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

globalStyle(`${sketchyScope}${badge}:empty`, {
	display: 'none',
})

globalStyle(`${sketchyScope}${btn} ${sketchyScope}${badge}`, {
	position: 'relative',
	top: '-1px',
})

globalStyle(`${sketchyScope}${badge}`, {
	borderRadius: '255px 25px 225px 25px/25px 225px 25px 255px',
})

globalStyle(`${sketchyScope}${badgePill}`, {
	borderRadius: '7rem 8rem 8rem 8rem/4rem 5rem 6rem 6rem',
})
