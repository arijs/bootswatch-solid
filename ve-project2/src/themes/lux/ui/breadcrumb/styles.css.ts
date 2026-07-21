import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { luxScope } from '../../scope.css'

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

globalStyle(`${luxScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: '0',
		[varBsBreadcrumbPaddingY]: '0',
		[varBsBreadcrumbMarginBottom]: '1rem',
		[varBsBreadcrumbBg]: '',
		[varBsBreadcrumbBorderRadius]: '',
		[varBsBreadcrumbDividerColor]: varBsSecondaryColor,
		[varBsBreadcrumbItemPaddingX]: '0.5rem',
		[varBsBreadcrumbItemActiveColor]: varBsSecondaryColor,
	},
	display: 'flex',
	flexWrap: 'wrap',
	padding: `${varBsBreadcrumbPaddingY} ${varBsBreadcrumbPaddingX}`,
	marginBottom: varBsBreadcrumbMarginBottom,
	fontSize: varBsBreadcrumbFontSize,
	listStyle: 'none',
	backgroundColor: varBsBreadcrumbBg,
})

globalStyle(`${luxScope}${breadcrumbItem} + ${luxScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${luxScope}${breadcrumbItem} + ${luxScope}${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: `${fallbackVar(varBsBreadcrumbDivider, '"/"')} `,
})

globalStyle(`${luxScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})
