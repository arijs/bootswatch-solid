import type { Component } from 'solid-js'
import { containerFluid } from '../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../themes/bootstrap/body.css'
import { btn } from '../../../../themes/bootstrap/ui/buttons/base.css'
import { btnOutlineSuccess } from '../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineSuccessButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`btn ${btn} btn-outline-success ${btnOutlineSuccess} pwhook-btn`}>
			Success
		</button>
	</div>
)

export default OutlineSuccessButton

// @screenshot *: 360x120 120
