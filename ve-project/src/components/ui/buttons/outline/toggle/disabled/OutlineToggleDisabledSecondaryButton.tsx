import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineSecondary } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleDisabledSecondaryButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-outline-toggle-disabled-secondary" autocomplete="off"  />
		<label class={`btn ${btn} btn-outline-secondary ${btnOutlineSecondary}`} for="id-btn-outline-toggle-disabled-secondary">Toggle Secondary</label>
	</div>
)

export default OutlineToggleDisabledSecondaryButton

// @screenshot *: 360x120 120
