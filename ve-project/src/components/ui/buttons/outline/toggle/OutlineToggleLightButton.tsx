import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineLight } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleLightButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-outline-toggle-light" autocomplete="off" />
		<label class={`btn ${btn} btn-outline-light ${btnOutlineLight}`} for="id-btn-outline-toggle-light">Toggle Light</label>
	</div>
)

export default OutlineToggleLightButton

// @screenshot *: 360x120 120
