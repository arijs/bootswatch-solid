import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { btn, btnSecondary } from '../../../theme-contract/ui/buttons/contract.css'
import {
frame,
frameColumn,
justifyCenter,
tooltipArrow,
tooltipInner,
tooltipVe,
} from '../../../theme-contract/ui/tooltips/contract.css'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

const HtmlTooltip: Component = () => {
const theme = useContext(ThemeContext)
const VeTooltip = (
bootstrap.Tooltip as unknown as BootstrapWithDefaults<typeof bootstrap.Tooltip>
).extendDefaultConfig({
SELECTOR_ARROW: `.${tooltipArrow}`,
SELECTOR_TOOLTIP_INNER: `.${tooltipInner}`,
}) as typeof bootstrap.Tooltip

return (
<div class={`bd-example ${theme} ${containerFluid} ${frame} ${frameColumn} ${justifyCenter}`}>
<button
type="button"
class={`${theme} ${btn} ${btnSecondary} pwhook-tooltip-trigger`}
data-bs-toggle="tooltip"
data-bs-custom-class="pwhook-tooltip"
ref={(tooltip) =>
new VeTooltip(tooltip, {
template: `<div class="${tooltipVe} ${theme} ${bodyText} pwhook-tooltip" role="tooltip"><div class="${tooltipArrow}"></div><div class="${tooltipInner}"></div></div>`,
})
}
data-bs-html="true"
title="<em>Tooltip</em> <u>with</u> <b>HTML</b>"
>
Tooltip with HTML
</button>
</div>
)
}

export default HtmlTooltip

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
