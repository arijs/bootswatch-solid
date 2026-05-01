import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'
import { useVePopoverThemeClasses } from '../../../themes/runtime/hooks'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'

const StartPopover: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnSecondary,
		frame,
		frameRow,
		h3,
		justifyEnd,
		popoverArrow,
		popoverBody,
		popoverClass,
		popoverHeader,
	} = useVePopoverThemeClasses()
	const VePopover = (
		bootstrap.Popover as unknown as BootstrapWithDefaults<typeof bootstrap.Popover>
	).extendDefaultConfig({
		SELECTOR_ARROW: `.${popoverArrow}`,
		SELECTOR_TITLE: `.${popoverHeader}`,
		SELECTOR_CONTENT: `.${popoverBody}`,
	}) as typeof bootstrap.Popover

	return (
		<div
			class={`bd-example ${bsTheme} ${body} ${containerFluid} ${frame} ${frameRow} ${justifyEnd}`}
		>
			<button
				type="button"
				class={`${btn} ${btnSecondary} pwhook-popover-trigger`}
				data-bs-container="body"
				data-bs-toggle="popover"
				ref={(popover) =>
					new VePopover(popover, {
						template: `<div class="${popoverClass} ${bsTheme} ${body} pwhook-popover" role="tooltip"><div class="${popoverArrow}"></div><h3 class="${popoverHeader} ${h3}"></h3><div class="${popoverBody}"></div></div>`,
					})
				}
				data-bs-placement="left"
				data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
			>
				Popover on start
			</button>
		</div>
	)
}

export default StartPopover

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
