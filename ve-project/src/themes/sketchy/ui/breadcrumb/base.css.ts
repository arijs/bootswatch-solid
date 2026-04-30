import { style } from '@vanilla-extract/css'
import {
varBsBreadcrumbPaddingX,
varBsBreadcrumbPaddingY,
varBsBreadcrumbBorderRadius,
varBsBreadcrumbDividerColor,
varBsBreadcrumbItemActivColor,
} from '../../../../theme-contract/ui/breadcrumb/_vars.css'
import {
breadcrumb as bootstrapBreadcrumb,
breadcrumbItem,
breadcrumbItemActive,
} from '../../bootstrap/ui/breadcrumb/base.css'

export { breadcrumbItem, breadcrumbItemActive }

export const breadcrumb = style([bootstrapBreadcrumb, {
vars: {
[varBsBreadcrumbPaddingX]: '0.75rem',
[varBsBreadcrumbPaddingY]: '0.375rem',
[varBsBreadcrumbBorderRadius]: '255px 25px 225px 25px/25px 225px 25px 255px',
[varBsBreadcrumbDividerColor]: '#333',
[varBsBreadcrumbItemActivColor]: 'rgba(33, 37, 41, 0.75)',
},
border: '2px solid #333',
}])
