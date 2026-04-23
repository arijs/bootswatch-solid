import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineWarning } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleActiveDisabledWarningButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-active-disabled-warning" checked autocomplete="off"  />
		<label class={`${btn} ${btnOutlineWarning}`} for="id-btn-outline-toggle-active-disabled-warning">Checked Toggle Warning</label>
	</div>
)

export default OutlineToggleActiveDisabledWarningButton

// @screenshot *: 360x120 120
