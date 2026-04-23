import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { btn } from '../../../themes/bootstrap/ui/buttons/solid/base.css'
import { btnPrimary } from '../../../themes/bootstrap/ui/buttons/solid/primary.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'

const SolidPrimaryButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`pwhook-btn ${btn} ${btnPrimary}`}>
			Primary
		</button>
	</div>
)

export default SolidPrimaryButton

// @screenshot *: 360x120 120
