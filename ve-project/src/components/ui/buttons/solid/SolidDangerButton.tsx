import type { Component } from 'solid-js'
import { containerFluid } from '../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../themes/bootstrap/body.css'
import { btn } from '../../../../themes/bootstrap/ui/buttons/base.css'
import { btnDanger } from '../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidDangerButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`btn ${btn} btn-danger ${btnDanger} pwhook-btn`}>
			Danger
		</button>
	</div>
)

export default SolidDangerButton

// @screenshot *: 360x120 120
