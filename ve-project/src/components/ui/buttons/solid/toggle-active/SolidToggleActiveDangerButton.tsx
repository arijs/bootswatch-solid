import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnDanger } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleActiveDangerButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-solid-toggle-active-danger" checked autocomplete="off" />
		<label class={`btn ${btn} btn-danger ${btnDanger}`} for="id-btn-solid-toggle-active-danger">Checked Toggle Danger</label>
	</div>
)

export default SolidToggleActiveDangerButton

// @screenshot *: 360x120 120
