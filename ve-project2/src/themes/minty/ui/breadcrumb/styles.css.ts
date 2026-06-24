import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { mintyScope } from '../../scope.css'

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

import { link } from '../../../../theme-contract/contents/basic/contract.css'

import { active } from '../../../../theme-contract/literal/contract.css'
import { breadcrumb, breadcrumbItem } from '../../../../theme-contract/ui/breadcrumb/contract.css'

globalStyle(`${mintyScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: '0.75rem',
		[varBsBreadcrumbPaddingY]: '0.375rem',
		[varBsBreadcrumbMarginBottom]: '1rem',
		[varBsBreadcrumbBg]: '#78c2ad',
		[varBsBreadcrumbBorderRadius]: '0.25rem',
		[varBsBreadcrumbDividerColor]: '#fff',
		[varBsBreadcrumbItemPaddingX]: '0.5rem',
		[varBsBreadcrumbItemActiveColor]: '#fff',
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

globalStyle(`${mintyScope}${breadcrumbItem} + ${mintyScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${mintyScope}${breadcrumbItem} + ${mintyScope}${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: `${fallbackVar(varBsBreadcrumbDivider, '"/"')} `,
})

globalStyle(`${mintyScope}${breadcrumbItem}${active}`, {
	color: varBsBreadcrumbItemActiveColor,
})

globalStyle(`${mintyScope}${breadcrumb} ${mintyScope}${link}`, {
	color: 'rgba(255, 255, 255, 0.55)',
})

globalStyle(`${mintyScope}${breadcrumb} ${mintyScope}${link}:hover`, {
	color: '#fff',
	textDecoration: 'none',
})
