import { style } from '@vanilla-extract/css'
import { varAlertBorderRadius } from '../../../../theme-contract/ui/alerts/_vars.css'
import {
alert as bootstrapAlert,
alertDismissible,
alertHeading,
alertHr,
alertLink,
alertPrimary as bootstrapAlertPrimary,
alertSecondary as bootstrapAlertSecondary,
alertSuccess as bootstrapAlertSuccess,
alertDanger as bootstrapAlertDanger,
alertWarning as bootstrapAlertWarning,
alertInfo as bootstrapAlertInfo,
alertLight as bootstrapAlertLight,
alertDark as bootstrapAlertDark,
btnClose as bootstrapBtnClose,
fade,
mb0,
show,
} from '../../bootstrap/ui/alerts/base.css'

export { alertDismissible, alertHeading, alertHr, alertLink, fade, mb0, show }

export const alert = style([bootstrapAlert, {
vars: {
[varAlertBorderRadius]: '255px 25px 225px 25px/25px 225px 25px 255px',
},
}])

export const alertPrimary = bootstrapAlertPrimary
export const alertSecondary = bootstrapAlertSecondary
export const alertSuccess = bootstrapAlertSuccess
export const alertDanger = bootstrapAlertDanger
export const alertWarning = bootstrapAlertWarning
export const alertInfo = bootstrapAlertInfo
export const alertLight = bootstrapAlertLight
export const alertDark = bootstrapAlertDark

export const btnClose = style([bootstrapBtnClose, {
backgroundImage: 'none',
selectors: {
'&::before': {
content: '"X"',
color: 'inherit',
position: 'absolute',
top: '0.8rem',
right: '1rem',
},
},
}])
