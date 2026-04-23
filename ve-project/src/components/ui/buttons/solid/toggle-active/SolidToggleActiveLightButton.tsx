import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnLight } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleActiveLightButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-solid-toggle-active-light" checked autocomplete="off" />
		<label class={`btn ${btn} btn-light ${btnLight}`} for="id-btn-solid-toggle-active-light">Checked Toggle Light</label>
	</div>
)

export default SolidToggleActiveLightButton

// @screenshot *: 360x120 120
