import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { h3 } from '../../../themes/bootstrap/contents/generated.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import { btnSecondary } from '../../../themes/bootstrap/ui/buttons/generated.css'
import {
	frame,
	frameRow,
	justifyEnd,
	popoverArrow,
	popoverBody,
	popoverHeader,
	popoverClass,
} from '../../../themes/bootstrap/ui/popovers/base.css'

const VePopover = (bootstrap.Popover as any).extendDefaultConfig({
	SELECTOR_ARROW: `.${popoverArrow}`,
	SELECTOR_TITLE: `.${popoverHeader}`,
	SELECTOR_CONTENT: `.${popoverBody}`,
}) as typeof bootstrap.Popover

const StartPopover: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid} ${frame} ${frameRow} ${justifyEnd}`}>
		<button
			type="button"
			class={`${btn} ${btnSecondary} pwhook-popover-trigger`}
			data-bs-container="body"
			data-bs-toggle="popover"
			ref={(popover) =>
				new VePopover(popover, {
					template: `<div class="${popoverClass} ${bsTheme} ${body} pwhook-popover" role="tooltip"><div class="${popoverArrow}"></div><h3 class="${popoverHeader} ${h3}"></h3><div class="${popoverBody}"></div></div>`,
				})}
			data-bs-placement="left"
			data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
		>
			Popover on start
		</button>
	</div>
)

export default StartPopover

// @screenshot *: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot litera: 360x282 282
