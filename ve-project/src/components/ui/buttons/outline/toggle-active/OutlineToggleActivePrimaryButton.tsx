import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlinePrimary } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleActivePrimaryButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-active-primary" checked autocomplete="off" />
		<label class={`${btn} ${btnOutlinePrimary}`} for="id-btn-outline-toggle-active-primary">Checked Toggle Primary</label>
	</div>
)

export default OutlineToggleActivePrimaryButton

// @screenshot *: 360x120 120
