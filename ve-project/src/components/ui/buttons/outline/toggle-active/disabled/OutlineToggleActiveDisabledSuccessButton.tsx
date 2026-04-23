import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineSuccess } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleActiveDisabledSuccessButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-active-disabled-success" checked autocomplete="off"  />
		<label class={`${btn} ${btnOutlineSuccess}`} for="id-btn-outline-toggle-active-disabled-success">Checked Toggle Success</label>
	</div>
)

export default OutlineToggleActiveDisabledSuccessButton

// @screenshot *: 360x120 120
