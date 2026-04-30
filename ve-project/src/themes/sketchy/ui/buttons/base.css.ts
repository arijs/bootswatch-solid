import { style } from '@vanilla-extract/css'
import { varBsBtnBorderRadius } from '../../../../theme-contract/ui/buttons/_vars.css'
import {
btn as bootstrapBtn,
btnActiveHook,
btnCheckHook,
btnDisabledHook,
btnShowHook,
} from '../../../bootstrap/ui/buttons/base.css'

export { btnActiveHook, btnCheckHook, btnDisabledHook, btnShowHook }

export const btn = style([bootstrapBtn, {
vars: {
[varBsBtnBorderRadius]: '255px 25px 225px 25px/25px 225px 25px 255px',
},
}])
