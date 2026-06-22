import { fallbackVar, globalStyle } from '@vanilla-extract/css'
import { briteScope } from '../../scope.css'

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

import { breadcrumb, breadcrumbItem } from '../../../../theme-contract/ui/breadcrumb/contract.css'

globalStyle(`${briteScope}${breadcrumb}`, {
	vars: {
		[varBsBreadcrumbPaddingX]: '1rem',
		[varBsBreadcrumbPaddingY]: '0.5rem',
		[varBsBreadcrumbMarginBottom]: '1rem',
		[varBsBreadcrumbBg]: '',
		[varBsBreadcrumbBorderRadius]: '0.5rem',
		[varBsBreadcrumbDividerColor]: '#000',
		[varBsBreadcrumbItemPaddingX]: '0.5rem',
		[varBsBreadcrumbItemActiveColor]: '#000',
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

globalStyle(`${briteScope}${breadcrumbItem} + ${briteScope}${breadcrumbItem}`, {
	paddingLeft: varBsBreadcrumbItemPaddingX,
})

globalStyle(`${briteScope}${breadcrumbItem} + ${briteScope}${breadcrumbItem}::before`, {
	float: 'left',
	paddingRight: varBsBreadcrumbItemPaddingX,
	color: varBsBreadcrumbDividerColor,
	content: `${fallbackVar(varBsBreadcrumbDivider, '"/"')} `,
})

globalStyle(`${briteScope}${breadcrumb}`, {
	fontWeight: '500',
	border: '2px solid #000',
})

globalStyle(`${briteScope}${breadcrumb} ${briteScope}${link}`, {
	color: '#000',
})

globalStyle(`${briteScope}[data-bs-theme=dark] ${briteScope}${breadcrumb} ${briteScope}${link}`, {
	color: '#fff',
})
