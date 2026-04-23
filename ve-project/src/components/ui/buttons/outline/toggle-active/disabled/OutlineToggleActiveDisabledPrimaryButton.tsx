import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlinePrimary } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleActiveDisabledPrimaryButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-outline-toggle-active-disabled-primary" checked autocomplete="off"  />
		<label class={`btn ${btn} btn-outline-primary ${btnOutlinePrimary}`} for="id-btn-outline-toggle-active-disabled-primary">Checked Toggle Primary</label>
	</div>
)

export default OutlineToggleActiveDisabledPrimaryButton

// @screenshot *: 360x120 120
