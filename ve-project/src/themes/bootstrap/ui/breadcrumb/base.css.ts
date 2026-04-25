import { globalStyle, style } from '@vanilla-extract/css'
import { varBsBreadcrumbBg } from '../../../../theme-contract/ui/breadcrumb/_vars.css'
import { varBsBreadcrumbBorderRadius } from '../../../../theme-contract/ui/breadcrumb/_vars.css'
import { varBsBreadcrumbDividerColor } from '../../../../theme-contract/ui/breadcrumb/_vars.css'
import { varBsBreadcrumbDivider } from '../../../../theme-contract/ui/breadcrumb/_vars.css'
import { varBsBreadcrumbFontSize } from '../../../../theme-contract/ui/breadcrumb/_vars.css'
import { varBsBreadcrumbItemActivColor } from '../../../../theme-contract/ui/breadcrumb/_vars.css'
import { varBsBreadcrumbItemPaddingX } from '../../../../theme-contract/ui/breadcrumb/_vars.css'
import { varBsBreadcrumbMarginBottom } from '../../../../theme-contract/ui/breadcrumb/_vars.css'
import { varBsBreadcrumbPaddingX } from '../../../../theme-contract/ui/breadcrumb/_vars.css'
import { varBsBreadcrumbPaddingY } from '../../../../theme-contract/ui/breadcrumb/_vars.css'

export const breadcrumb = style({
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
