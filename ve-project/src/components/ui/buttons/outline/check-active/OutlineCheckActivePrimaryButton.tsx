import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnOutlinePrimary } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineCheckActivePrimaryButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`btn ${btn} btn-outline-primary ${btnOutlinePrimary} active`} data-bs-toggle="button" aria-pressed="true">
			Primary
		</button>
	</div>
)

export default OutlineCheckActivePrimaryButton

// @screenshot *: 360x120 120
