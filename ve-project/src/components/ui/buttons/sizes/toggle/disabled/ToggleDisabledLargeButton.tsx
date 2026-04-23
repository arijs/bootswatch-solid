import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnLg, btnPrimary } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const ToggleDisabledLargeButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-sizes-toggle-disabled-large" autocomplete="off"  />
		<label class={`btn ${btn} btn-primary ${btnPrimary} btn-lg ${btnLg}`} for="id-btn-sizes-toggle-disabled-large">Toggle Large button</label>
	</div>
)

export default ToggleDisabledLargeButton

// @screenshot *: 360x120 120
