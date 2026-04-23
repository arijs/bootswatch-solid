import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnOutlineDanger } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineCheckDisabledDangerButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`btn ${btn} btn-outline-danger ${btnOutlineDanger}`} data-bs-toggle="button">
			Danger
		</button>
	</div>
)

export default OutlineCheckDisabledDangerButton

// @screenshot *: 360x120 120
