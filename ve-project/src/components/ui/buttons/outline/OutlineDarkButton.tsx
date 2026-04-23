import type { Component } from 'solid-js'
import { containerFluid } from '../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../themes/bootstrap/body.css'
import { btn } from '../../../../themes/bootstrap/ui/buttons/base.css'
import { btnOutlineDark } from '../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineDarkButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`btn ${btn} btn-outline-dark ${btnOutlineDark} pwhook-btn`}>
			Dark
		</button>
	</div>
)

export default OutlineDarkButton

// @screenshot *: 360x120 120
