import { globalStyle } from '@vanilla-extract/css'
import {
	badge,
	badgeDanger,
	badgeDark,
	badgeInfo,
	badgeLight,
	badgePrimary,
	badgeRoundedPill,
	badgeSecondary,
	badgeSuccess,
	badgeWarning,
} from '../../../../theme-contract/ui/badge/contract.css'
import {
	varBsBadgeBorderRadius,
	varBsBadgeColor,
	varBsBadgeFontSize,
	varBsBadgeFontWeight,
	varBsBadgePaddingX,
	varBsBadgePaddingY,
} from '../../../../theme-contract/ui/badge/_vars.css'
import {
	varBsBorderRadius,
	varBsBorderRadiusPill,
	varBsDanger,
	varBsDark,
	varBsGradient,
	varBsInfo,
	varBsLight,
	varBsPrimary,
	varBsSecondary,
	varBsSuccess,
	varBsWarning,
} from '../../../../theme-contract/_vars.css'
import { materiaScope } from '../../scope.css'

globalStyle(`${materiaScope}${badge}`, {
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
	lineHeight: 1,
	color: varBsBadgeColor,
	textAlign: 'center',
	whiteSpace: 'nowrap',
	verticalAlign: 'baseline',
	borderRadius: varBsBadgeBorderRadius,
	backgroundImage: varBsGradient,
})

globalStyle(`${materiaScope}${badge}:empty`, {
	display: 'none',
})

globalStyle(`${materiaScope}${badgePrimary}`, {
	backgroundColor: varBsPrimary,
})

globalStyle(`${materiaScope}${badgeSecondary}`, {
	backgroundColor: varBsSecondary,
	vars: { [varBsBadgeColor]: '#222' },
})

globalStyle(`${materiaScope}${badgeSuccess}`, {
	backgroundColor: varBsSuccess,
})

globalStyle(`${materiaScope}${badgeDanger}`, {
	backgroundColor: varBsDanger,
})

globalStyle(`${materiaScope}${badgeWarning}`, {
	backgroundColor: varBsWarning,
	vars: { [varBsBadgeColor]: varBsDark },
})

globalStyle(`${materiaScope}${badgeInfo}`, {
	backgroundColor: varBsInfo,
	vars: { [varBsBadgeColor]: varBsDark },
})

globalStyle(`${materiaScope}${badgeLight}`, {
	backgroundColor: varBsLight,
	vars: { [varBsBadgeColor]: '#222' },
})

globalStyle(`${materiaScope}${badgeDark}`, {
	backgroundColor: varBsDark,
})

globalStyle(`${materiaScope}${badgeRoundedPill}`, {
	vars: { [varBsBadgeBorderRadius]: varBsBorderRadiusPill },
})

