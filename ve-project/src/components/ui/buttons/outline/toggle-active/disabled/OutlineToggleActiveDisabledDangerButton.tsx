import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineDanger } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleActiveDisabledDangerButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-outline-toggle-active-disabled-danger" checked autocomplete="off"  />
		<label class={`btn ${btn} btn-outline-danger ${btnOutlineDanger}`} for="id-btn-outline-toggle-active-disabled-danger">Checked Toggle Danger</label>
	</div>
)

export default OutlineToggleActiveDisabledDangerButton

// @screenshot *: 360x120 120
