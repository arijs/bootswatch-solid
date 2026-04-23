import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineWarning } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleDisabledWarningButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-outline-toggle-disabled-warning" autocomplete="off"  />
		<label class={`btn ${btn} btn-outline-warning ${btnOutlineWarning}`} for="id-btn-outline-toggle-disabled-warning">Toggle Warning</label>
	</div>
)

export default OutlineToggleDisabledWarningButton

// @screenshot *: 360x120 120
