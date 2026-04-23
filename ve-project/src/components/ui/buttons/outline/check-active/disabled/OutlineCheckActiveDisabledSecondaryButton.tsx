import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnOutlineSecondary } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineCheckActiveDisabledSecondaryButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`btn ${btn} btn-outline-secondary ${btnOutlineSecondary} active`} data-bs-toggle="button" aria-pressed="true">
			Secondary
		</button>
	</div>
)

export default OutlineCheckActiveDisabledSecondaryButton

// @screenshot *: 360x120 120
