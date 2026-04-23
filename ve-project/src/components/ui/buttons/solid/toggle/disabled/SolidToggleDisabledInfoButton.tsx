import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnInfo } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleDisabledInfoButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-solid-toggle-disabled-info" autocomplete="off"  />
		<label class={`btn ${btn} btn-info ${btnInfo}`} for="id-btn-solid-toggle-disabled-info">Toggle Info</label>
	</div>
)

export default SolidToggleDisabledInfoButton

// @screenshot *: 360x120 120
