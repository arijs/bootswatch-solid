import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnSuccess } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleActiveSuccessButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-solid-toggle-active-success" checked autocomplete="off" />
		<label class={`btn ${btn} btn-success ${btnSuccess}`} for="id-btn-solid-toggle-active-success">Checked Toggle Success</label>
	</div>
)

export default SolidToggleActiveSuccessButton

// @screenshot *: 360x120 120
