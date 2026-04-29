import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'
import { useVeTooltipThemeClasses } from '../../../themes/runtime/hooks'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

const HtmlTooltip: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnSecondary,
		frame,
		frameColumn,
		justifyCenter,
		tooltipArrow,
		tooltipClass,
		tooltipInner,
	} = useVeTooltipThemeClasses()
	const VeTooltip = (
		bootstrap.Tooltip as unknown as BootstrapWithDefaults<typeof bootstrap.Tooltip>
	).extendDefaultConfig({
		SELECTOR_ARROW: `.${tooltipArrow}`,
		SELECTOR_TOOLTIP_INNER: `.${tooltipInner}`,
	}) as typeof bootstrap.Tooltip

	return (
		<div
			class={`bd-example ${bsTheme} ${body} ${containerFluid} ${frame} ${frameColumn} ${justifyCenter}`}
		>
			<button
				type="button"
				class={`${btn} ${btnSecondary} pwhook-tooltip-trigger`}
				data-bs-toggle="tooltip"
				data-bs-custom-class="pwhook-tooltip"
				ref={(tooltip) =>
					new VeTooltip(tooltip, {
						template: `<div class="${tooltipClass} ${bsTheme} ${body}" role="tooltip"><div class="${tooltipArrow}"></div><div class="${tooltipInner}"></div></div>`,
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
