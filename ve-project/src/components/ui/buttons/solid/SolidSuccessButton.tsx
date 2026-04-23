import type { Component } from 'solid-js'
import { containerFluid } from '../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../themes/bootstrap/body.css'
import { btn } from '../../../../themes/bootstrap/ui/buttons/base.css'
import { btnSuccess } from '../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidSuccessButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnSuccess} pwhook-btn`}>
			Success
		</button>
	</div>
)

export default SolidSuccessButton

// @screenshot *: 360x120 120
