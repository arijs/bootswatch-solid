import { style } from '@vanilla-extract/css'
import {
varBsCardBorderRadius,
} from '../../../../theme-contract/ui/card/_vars.css'
import {
card as bootstrapCard,
cardBody,
cardExample,
cardFooter as bootstrapCardFooter,
cardGridRow,
cardHeader as bootstrapCardHeader,
cardImgTop,
cardLink,
cardRow,
cardText,
cardTitle,
textMuted,
} from '../../../bootstrap/ui/card/base.css'

export {
cardBody,
cardExample,
cardGridRow,
cardImgTop,
cardLink,
cardRow,
cardText,
cardTitle,
textMuted,
}

export const card = style([bootstrapCard, {
vars: {
[varBsCardBorderRadius]: '5px 5px 5px 5px/25px 25px 25px 5px',
},
}])

export const cardHeader = style([bootstrapCardHeader, {
borderBottomWidth: '2px',
}])

export const cardFooter = style([bootstrapCardFooter, {
borderTopWidth: '2px',
}])
