import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnSecondary } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleActiveSecondaryButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-secondary" checked autocomplete="off" />
		<label class={`${btn} ${btnSecondary}`} for="id-btn-solid-toggle-active-secondary">Checked Toggle Secondary</label>
	</div>
)

export default SolidToggleActiveSecondaryButton

// @screenshot *: 360x120 120
