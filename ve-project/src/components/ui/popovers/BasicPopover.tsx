import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { h3 } from '../../../themes/bootstrap/contents/generated.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import { btnDanger, btnLg } from '../../../themes/bootstrap/ui/buttons/generated.css'
import {
	popoverArrow,
	popoverBody,
	popoverClass,
	popoverHeader,
} from '../../../themes/bootstrap/ui/popovers/base.css'

const VePopover = (bootstrap.Popover as any).extendDefaultConfig({
	SELECTOR_ARROW: `.${popoverArrow}`,
	SELECTOR_TITLE: `.${popoverHeader}`,
	SELECTOR_CONTENT: `.${popoverBody}`,
}) as typeof bootstrap.Popover

const BasicPopover: Component = () => (
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

export default BasicPopover

// @screenshot *: 360x120 120
