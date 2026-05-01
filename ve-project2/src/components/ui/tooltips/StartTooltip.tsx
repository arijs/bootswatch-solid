import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { vars } from '../../../theme-contract/theme-contract.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import {
frame,
frameRow,
justifyEnd,
tooltipArrow,
tooltipInner,
tooltipVe,
} from '../../../theme-contract/ui/tooltips/contract.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

const StartTooltip: Component = () => {
const theme = useContext(ThemeContext)
const VeTooltip = (
bootstrap.Tooltip as unknown as BootstrapWithDefaults<typeof bootstrap.Tooltip>
).extendDefaultConfig({
SELECTOR_ARROW: `.${tooltipArrow}`,
SELECTOR_TOOLTIP_INNER: `.${tooltipInner}`,
}) as typeof bootstrap.Tooltip

return (
<div class={`bd-example ${theme} ${containerFluid} ${frame} ${frameRow} ${justifyEnd}`}>
<button
type="button"
class={`${theme} ${btn} ${btnSecondary} pwhook-tooltip-trigger`}
data-bs-toggle="tooltip"
data-bs-custom-class="pwhook-tooltip"
ref={(tooltip) =>
new VeTooltip(tooltip, {
template: `<div class="${tooltipVe} ${theme} ${vars} pwhook-tooltip" role="tooltip"><div class="${tooltipArrow} ${theme}"></div><div class="${tooltipInner} ${theme}"></div></div>`,
})
}
data-bs-placement="left"
title="Tooltip on start"
>
Tooltip on start
</button>
</div>
)
}

export default StartTooltip

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
