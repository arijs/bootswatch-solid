import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText, vars } from '../../../theme-contract/theme-contract.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import { fade } from '../../../theme-contract/ui/modal/contract.css'
import {
frame,
frameColumn,
justifyStart,
tooltipArrow,
tooltipInner,
tooltipShow,
tooltipVe,
} from '../../../theme-contract/ui/tooltips/contract.css'
import { createVeTooltip } from './ve-tooltip'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/tooltips',
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const BottomTooltip: Component = () => {
const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
const VeTooltip = createVeTooltip({ tooltipArrow, tooltipInner, tooltipShow })

return (
<div class={`bd-example ${theme} ${containerFluid} ${frame} ${frameColumn} ${justifyStart}`}>
<button
type="button"
class={`${theme} ${btn} ${btnSecondary} pwhook-tooltip-trigger`}
data-bs-toggle="tooltip"
data-bs-custom-class="pwhook-tooltip"
ref={(tooltip) =>
new VeTooltip(tooltip, {
template: `<div class="${tooltipVe} ${fade} ${theme} ${vars} ${bodyText} pwhook-tooltip" role="tooltip"><div class="${tooltipArrow} ${theme}"></div><div class="${tooltipInner} ${theme}"></div></div>`,
})
}
data-bs-placement="bottom"
title="Tooltip on bottom"
>
Tooltip on bottom
</button>
</div>
)
}

export default BottomTooltip

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
