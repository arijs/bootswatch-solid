import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnDark } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleActiveDarkButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-solid-toggle-active-dark" checked autocomplete="off" />
		<label class={`btn ${btn} btn-dark ${btnDark}`} for="id-btn-solid-toggle-active-dark">Checked Toggle Dark</label>
	</div>
)

export default SolidToggleActiveDarkButton

// @screenshot *: 360x120 120
