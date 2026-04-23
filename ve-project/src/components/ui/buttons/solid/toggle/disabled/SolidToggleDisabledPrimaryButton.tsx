import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnPrimary } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleDisabledPrimaryButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-solid-toggle-disabled-primary" autocomplete="off"  />
		<label class={`btn ${btn} btn-primary ${btnPrimary}`} for="id-btn-solid-toggle-disabled-primary">Toggle Primary</label>
	</div>
)

export default SolidToggleDisabledPrimaryButton

// @screenshot *: 360x120 120
