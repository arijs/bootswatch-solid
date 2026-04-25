import * as bootstrap from 'bootstrap'
import type { Component } from 'solid-js'
import type { BootstrapWithDefaults } from '../bootstrapWithDefaults'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { h3 } from '../../../themes/bootstrap/contents/generated.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/base.css'
import { btnSecondary } from '../../../themes/bootstrap/ui/buttons/generated.css'
import {
	frame,
	frameRow,
	justifyStart,
	popoverArrow,
	popoverBody,
	popoverHeader,
	popoverClass,
} from '../../../themes/bootstrap/ui/popovers/base.css'

const VePopover = (bootstrap.Popover as unknown as BootstrapWithDefaults<typeof bootstrap.Popover>).extendDefaultConfig({
	SELECTOR_ARROW: `.${popoverArrow}`,
	SELECTOR_TITLE: `.${popoverHeader}`,
	SELECTOR_CONTENT: `.${popoverBody}`,
}) as typeof bootstrap.Popover

const EndPopover: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid} ${frame} ${frameRow} ${justifyStart}`}>
		<button
			type="button"
			class={`${btn} ${btnSecondary} pwhook-popover-trigger`}
			data-bs-container="body"
			data-bs-toggle="popover"
			ref={(popover) =>
				new VePopover(popover, {
					template: `<div class="${popoverClass} ${bsTheme} ${body} pwhook-popover" role="tooltip"><div class="${popoverArrow}"></div><h3 class="${popoverHeader} ${h3}"></h3><div class="${popoverBody}"></div></div>`,
				})}
			data-bs-placement="right"
			data-bs-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."
		>
			Popover on end
		</button>
	</div>
)

export default EndPopover

// @screenshot *: 360x120 120

// @screenshot bootstrap: 360x256 256
// @screenshot brite: 360x224 224
// @screenshot cerulean: 360x256 256
// @screenshot cosmo: 360x256 256
// @screenshot cyborg: 360x256 256
// @screenshot darkly: 360x256 256
// @screenshot flatly: 360x256 256
// @screenshot journal: 360x256 256
// @screenshot litera: 360x282 282
// @screenshot lumen: 360x256 256
// @screenshot lux: 360x256 256
// @screenshot materia: 360x256 256
// @screenshot minty: 360x256 256
// @screenshot morph: 360x256 256
// @screenshot pulse: 360x256 256
// @screenshot quartz: 360x256 256
// @screenshot sandstone: 360x256 256
// @screenshot simplex: 360x256 256
// @screenshot sketchy: 360x256 256
// @screenshot slate: 360x256 256
// @screenshot solar: 360x256 256
// @screenshot spacelab: 360x256 256
// @screenshot superhero: 360x256 256
// @screenshot united: 360x256 256
// @screenshot vapor: 360x256 256
// @screenshot yeti: 360x256 256
// @screenshot zephyr: 360x256 256
