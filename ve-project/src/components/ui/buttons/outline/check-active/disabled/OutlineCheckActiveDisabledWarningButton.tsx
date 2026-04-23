import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnOutlineWarning } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineCheckActiveDisabledWarningButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`btn ${btn} btn-outline-warning ${btnOutlineWarning} active`} data-bs-toggle="button" aria-pressed="true">
			Warning
		</button>
	</div>
)

export default OutlineCheckActiveDisabledWarningButton

// @screenshot *: 360x120 120
