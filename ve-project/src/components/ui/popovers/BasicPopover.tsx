import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'
import { useVePopoverThemeClasses } from '../../../themes/runtime/hooks'

const BasicPopover: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnDanger, btnLg, h3, popoverArrow, popoverBody, popoverClass, popoverHeader } = useVePopoverThemeClasses()
	const VePopover = (bootstrap.Popover as unknown as BootstrapWithDefaults<typeof bootstrap.Popover>).extendDefaultConfig({
		SELECTOR_ARROW: `.${popoverArrow}`,
		SELECTOR_TITLE: `.${popoverHeader}`,
		SELECTOR_CONTENT: `.${popoverBody}`,
	}) as typeof bootstrap.Popover

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<button
				type="button"
				class={`${btn} ${btnLg} ${btnDanger} pwhook-popover-trigger`}
				ref={(popover) =>
					new VePopover(popover, {
						template: `<div class="${popoverClass} ${bsTheme} ${body} pwhook-popover" role="tooltip"><div class="${popoverArrow}"></div><h3 class="${popoverHeader} ${h3}"></h3><div class="${popoverBody}"></div></div>`,
					})}
				title="Popover title"
				data-bs-content="And here's some amazing content. It's very engaging. Right?"
			>
				Click to toggle popover
			</button>
		</div>
	)
}

export default BasicPopover

// @screenshot *: 360x120 120
