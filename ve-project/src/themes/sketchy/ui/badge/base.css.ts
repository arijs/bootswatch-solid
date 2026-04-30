import { style } from '@vanilla-extract/css'
import {
varBsBadgePaddingX,
varBsBadgePaddingY,
varBsBadgeBorderRadius,
} from '../../../../theme-contract/ui/badge/_vars.css'
import {
badge as bootstrapBadge,
roundedPill as bootstrapRoundedPill,
bgPrimary,
bgSecondary,
bgSuccess,
bgDanger,
bgWarning,
bgInfo,
bgLight,
bgDark,
textDark,
} from '../../bootstrap/ui/badge/base.css'

export { bgPrimary, bgSecondary, bgSuccess, bgDanger, bgWarning, bgInfo, bgLight, bgDark, textDark }

export const badge = style([bootstrapBadge, {
vars: {
[varBsBadgePaddingX]: '1.2em',
[varBsBadgePaddingY]: '0.5em',
[varBsBadgeBorderRadius]: '255px 25px 225px 25px/25px 225px 25px 255px',
},
}])

export const roundedPill = style([bootstrapRoundedPill, {
borderRadius: '7rem 8rem 8rem 8rem/4rem 5rem 6rem 6rem !important',
}])
