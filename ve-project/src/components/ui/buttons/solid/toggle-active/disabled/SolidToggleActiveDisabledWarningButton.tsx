import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnWarning } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleActiveDisabledWarningButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-solid-toggle-active-disabled-warning" checked autocomplete="off"  />
		<label class={`btn ${btn} btn-warning ${btnWarning}`} for="id-btn-solid-toggle-active-disabled-warning">Checked Toggle Warning</label>
	</div>
)

export default SolidToggleActiveDisabledWarningButton

// @screenshot *: 360x120 120
