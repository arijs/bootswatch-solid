import { style } from '@vanilla-extract/css'
import { varBsSecondaryColor } from '../../../../theme-contract/_vars.css'
import {
	varBsBreadcrumbBg,
	varBsBreadcrumbBorderRadius,
	varBsBreadcrumbDivider,
	varBsBreadcrumbDividerColor,
	varBsBreadcrumbFontSize,
	varBsBreadcrumbItemActivColor,
	varBsBreadcrumbItemPaddingX,
	varBsBreadcrumbMarginBottom,
	varBsBreadcrumbPaddingX,
	varBsBreadcrumbPaddingY,
} from '../../../../theme-contract/ui/breadcrumb/_vars.css'

export const breadcrumb = style({
	vars: {
		[varBsBreadcrumbPaddingX]: '0',
		[varBsBreadcrumbPaddingY]: '0',
		[varBsBreadcrumbMarginBottom]: '1rem',
		[varBsBreadcrumbBg]: '',
		[varBsBreadcrumbBorderRadius]: '',
		[varBsBreadcrumbDividerColor]: varBsSecondaryColor,
		[varBsBreadcrumbItemPaddingX]: '0.5rem',
		[varBsBreadcrumbItemActivColor]: varBsSecondaryColor,
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

export const breadcrumbItem = style({
	selectors: {
		'& + &': {
			paddingLeft: varBsBreadcrumbItemPaddingX,
		},
		'& + &::before': {
			float: 'left',
			paddingRight: varBsBreadcrumbItemPaddingX,
			color: varBsBreadcrumbDividerColor,
			content: varBsBreadcrumbDivider,
		},
		'&.active': {
			color: varBsBreadcrumbItemActivColor,
		},
	},
})

export const breadcrumbItemActive = style({
	color: varBsBreadcrumbItemActivColor,
})
