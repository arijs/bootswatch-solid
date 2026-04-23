import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnDanger } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidCheckDisabledDangerButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`btn ${btn} btn-danger ${btnDanger}`} data-bs-toggle="button">
			Danger
		</button>
	</div>
)

export default SolidCheckDisabledDangerButton

// @screenshot *: 360x120 120
