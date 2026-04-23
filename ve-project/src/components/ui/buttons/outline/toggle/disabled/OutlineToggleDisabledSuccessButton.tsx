import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineSuccess } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleDisabledSuccessButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-outline-toggle-disabled-success" autocomplete="off"  />
		<label class={`btn ${btn} btn-outline-success ${btnOutlineSuccess}`} for="id-btn-outline-toggle-disabled-success">Toggle Success</label>
	</div>
)

export default OutlineToggleDisabledSuccessButton

// @screenshot *: 360x120 120
