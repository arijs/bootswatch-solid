import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnLight } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidCheckLightButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`btn ${btn} btn-light ${btnLight}`} data-bs-toggle="button">
			Light
		</button>
	</div>
)

export default SolidCheckLightButton

// @screenshot *: 360x120 120
