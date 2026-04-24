import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import { btnSecondary } from '../../../themes/bootstrap/ui/buttons/generated.css'
import {
	frame,
	frameColumn,
	justifyEnd,
	tooltipArrow,
	tooltipClass,
	tooltipInner,
} from '../../../themes/bootstrap/ui/tooltips/base.css'

const VeTooltip = (bootstrap.Tooltip as any).extendDefaultConfig({
	SELECTOR_ARROW: `.${tooltipArrow}`,
	SELECTOR_TOOLTIP_INNER: `.${tooltipInner}`,
}) as typeof bootstrap.Tooltip

const TopTooltip: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid} ${frame} ${frameColumn} ${justifyEnd}`}>
		<button
			type="button"
			class={`${btn} ${btnSecondary} pwhook-tooltip-trigger`}
			data-bs-toggle="tooltip"
			data-bs-custom-class="pwhook-tooltip"
			ref={(tooltip) =>
				new VeTooltip(tooltip, {
					template: `<div class="${tooltipClass} ${bsTheme} ${body}" role="tooltip"><div class="${tooltipArrow}"></div><div class="${tooltipInner}"></div></div>`,
				})}
			data-bs-placement="top"
			title="Tooltip on top"
		>
			Tooltip on top
		</button>
	</div>
)

export default TopTooltip

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
