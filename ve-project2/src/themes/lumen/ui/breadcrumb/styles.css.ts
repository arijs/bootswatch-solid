import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { lumenScope } from '../../scope.css'

import { varBsBorderColor, varBsSecondaryColor, varBsTertiaryBg } from '../../../../theme-contract/_vars.css'
import {
	varBsBreadcrumbBg,
	varBsBreadcrumbBorderRadius,
	varBsBreadcrumbDivider,
	varBsBreadcrumbDividerColor,
	varBsBreadcrumbItemActiveColor,
	varBsBreadcrumbItemPaddingX,
	varBsBreadcrumbMarginBottom,
	varBsBreadcrumbPaddingX,
	varBsBreadcrumbPaddingY,
} from '../../../../theme-contract/ui/breadcrumb/_vars.css'

import { breadcrumb, breadcrumbItem } from '../../../../theme-contract/ui/breadcrumb/contract.css'

globalStyle(`${lumenScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: '0.75rem',
		[varBsBreadcrumbPaddingY]: '0.375rem',
		[varBsBreadcrumbMarginBottom]: '1rem',
		[varBsBreadcrumbBg]: varBsTertiaryBg,
		[varBsBreadcrumbBorderRadius]: '0.25rem',
		[varBsBreadcrumbDividerColor]: varBsSecondaryColor,
		[varBsBreadcrumbItemPaddingX]: '0.5rem',
		[varBsBreadcrumbItemActiveColor]: varBsSecondaryColor,
	},
	display: 'flex',
	flexWrap: 'wrap',
	padding: `${varBsBreadcrumbPaddingY} ${varBsBreadcrumbPaddingX}`,
	marginBottom: varBsBreadcrumbMarginBottom,
	fontSize: 'var(--bs-breadcrumb-font-size)',
	listStyle: 'none',
	backgroundColor: varBsBreadcrumbBg,
	borderRadius: varBsBreadcrumbBorderRadius,
})

globalStyle(`${lumenScope}${breadcrumbItem} + ${lumenScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${lumenScope}${breadcrumbItem} + ${lumenScope}${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: `${fallbackVar(varBsBreadcrumbDivider, '"/"')} `,
})

globalStyle(`${lumenScope}${breadcrumb}`, {
	borderColor: varBsBorderColor,
	borderStyle: 'solid',
	borderWidth: '0 1px 4px 1px',
})
