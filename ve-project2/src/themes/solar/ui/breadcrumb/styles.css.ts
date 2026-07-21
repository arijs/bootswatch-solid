import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { solarScope } from '../../scope.css'

import { varBsSecondaryColor } from '../../../../theme-contract/_vars.css'
import {
	varBsBreadcrumbBg,
	varBsBreadcrumbBorderRadius,
	varBsBreadcrumbDivider,
	varBsBreadcrumbDividerColor,
	varBsBreadcrumbFontSize,
	varBsBreadcrumbItemActiveColor,
	varBsBreadcrumbItemPaddingX,
	varBsBreadcrumbMarginBottom,
	varBsBreadcrumbPaddingX,
	varBsBreadcrumbPaddingY,
} from '../../../../theme-contract/ui/breadcrumb/_vars.css'

import { active } from '../../../../theme-contract/literal/contract.css'
import { breadcrumb, breadcrumbItem } from '../../../../theme-contract/ui/breadcrumb/contract.css'

globalStyle(`${solarScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: '0.75rem',
		[varBsBreadcrumbPaddingY]: '0.375rem',
		[varBsBreadcrumbMarginBottom]: '1rem',
		[varBsBreadcrumbBg]: '#073642',
		[varBsBreadcrumbBorderRadius]: '0.25rem',
		[varBsBreadcrumbDividerColor]: varBsSecondaryColor,
		[varBsBreadcrumbItemPaddingX]: '0.5rem',
		[varBsBreadcrumbItemActiveColor]: '#adb5bd',
	},
	display: 'flex',
	flexWrap: 'wrap',
	padding: `${varBsBreadcrumbPaddingY} ${varBsBreadcrumbPaddingX}`,
	marginBottom: varBsBreadcrumbMarginBottom,
	fontSize: varBsBreadcrumbFontSize,
	listStyle: 'none',
	backgroundColor: varBsBreadcrumbBg,
	borderRadius: varBsBreadcrumbBorderRadius,
})

globalStyle(`${solarScope}${breadcrumbItem} + ${solarScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${solarScope}${breadcrumbItem} + ${solarScope}${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: `${fallbackVar(varBsBreadcrumbDivider, '"/"')} `,
})

globalStyle(`${solarScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})
