import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import { btnSecondary } from '../../../themes/bootstrap/ui/buttons/generated.css'
import {
	frame,
	frameRow,
	justifyEnd,
	tooltipArrow,
	tooltipClass,
	tooltipInner,
} from '../../../themes/bootstrap/ui/tooltips/base.css'

const VeTooltip = (bootstrap.Tooltip as unknown as BootstrapWithDefaults<typeof bootstrap.Tooltip>).extendDefaultConfig({
	SELECTOR_ARROW: `.${tooltipArrow}`,
	SELECTOR_TOOLTIP_INNER: `.${tooltipInner}`,
}) as typeof bootstrap.Tooltip

const StartTooltip: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid} ${frame} ${frameRow} ${justifyEnd}`}>
		<button
			type="button"
			class={`${btn} ${btnSecondary} pwhook-tooltip-trigger`}
			data-bs-toggle="tooltip"
			data-bs-custom-class="pwhook-tooltip"
			ref={(tooltip) =>
				new VeTooltip(tooltip, {
					template: `<div class="${tooltipClass} ${bsTheme} ${body}" role="tooltip"><div class="${tooltipArrow}"></div><div class="${tooltipInner}"></div></div>`,
				})}
			data-bs-placement="left"
			title="Tooltip on start"
		>
			Tooltip on start
		</button>
	</div>
)

export default StartTooltip

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
