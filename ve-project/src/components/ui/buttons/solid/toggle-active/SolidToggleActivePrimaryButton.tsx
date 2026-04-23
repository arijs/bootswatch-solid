import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnPrimary } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleActivePrimaryButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-primary" checked autocomplete="off" />
		<label class={`${btn} ${btnPrimary}`} for="id-btn-solid-toggle-active-primary">Checked Toggle Primary</label>
	</div>
)

export default SolidToggleActivePrimaryButton

// @screenshot *: 360x120 120
