import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnLg, btnPrimary } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const ToggleLargeButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-sizes-toggle-large" autocomplete="off" />
		<label class={`btn ${btn} btn-primary ${btnPrimary} btn-lg ${btnLg}`} for="id-btn-sizes-toggle-large">Toggle Large button</label>
	</div>
)

export default ToggleLargeButton

// @screenshot *: 360x120 120
