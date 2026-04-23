import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnInfo } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleInfoButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-info" autocomplete="off" />
		<label class={`${btn} ${btnInfo}`} for="id-btn-solid-toggle-info">Toggle Info</label>
	</div>
)

export default SolidToggleInfoButton

// @screenshot *: 360x120 120
