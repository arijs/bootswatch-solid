import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleBaseButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-solid-toggle-base" autocomplete="off" />
		<label class={`btn ${btn}`} for="id-btn-solid-toggle-base">Toggle Button</label>
	</div>
)

export default SolidToggleBaseButton

// @screenshot *: 360x120 120
