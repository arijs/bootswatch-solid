import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnDark } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleDarkButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-dark" autocomplete="off" />
		<label class={`${btn} ${btnDark}`} for="id-btn-solid-toggle-dark">Toggle Dark</label>
	</div>
)

export default SolidToggleDarkButton

// @screenshot *: 360x120 120
