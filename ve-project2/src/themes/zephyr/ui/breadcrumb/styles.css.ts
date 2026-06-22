import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { zephyrScope } from '../../scope.css'

import { varBsSecondaryBg, varBsSecondaryColor } from '../../../../theme-contract/_vars.css'
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

globalStyle(`${zephyrScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: '1rem',
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
	fontSize: 'var(--bs-breadcrumb-font-size)',
	listStyle: 'none',
	backgroundColor: varBsBreadcrumbBg,
	borderRadius: varBsBreadcrumbBorderRadius,
})

globalStyle(`${zephyrScope}${breadcrumbItem} + ${zephyrScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${zephyrScope}${breadcrumbItem} + ${zephyrScope}${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: `${fallbackVar(varBsBreadcrumbDivider, '">"')} `,
})

globalStyle(`${zephyrScope}${breadcrumb}`, {
	fontSize: '0.875rem',
	fontWeight: '500',
	border: `1px solid ${varBsSecondaryBg}`,
	borderRadius: '0.375rem',
	boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
})

globalStyle(`${zephyrScope}${breadcrumbItem}`, {
	padding: '1rem 0.5rem 1rem 0',
})

globalStyle(`${zephyrScope}${breadcrumbItem} + ${zephyrScope}${breadcrumbItem}::before`, {
	paddingRight: '1rem',
})
