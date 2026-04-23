import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnLight } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleDisabledLightButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-disabled-light" autocomplete="off"  />
		<label class={`${btn} ${btnLight}`} for="id-btn-solid-toggle-disabled-light">Toggle Light</label>
	</div>
)

export default SolidToggleDisabledLightButton

// @screenshot *: 360x120 120
