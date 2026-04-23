import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnSuccess } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidCheckDisabledSuccessButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`btn ${btn} btn-success ${btnSuccess}`} data-bs-toggle="button">
			Success
		</button>
	</div>
)

export default SolidCheckDisabledSuccessButton

// @screenshot *: 360x120 120
