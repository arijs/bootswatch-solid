import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineDanger } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleDisabledDangerButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-disabled-danger" autocomplete="off"  />
		<label class={`${btn} ${btnOutlineDanger}`} for="id-btn-outline-toggle-disabled-danger">Toggle Danger</label>
	</div>
)

export default OutlineToggleDisabledDangerButton

// @screenshot *: 360x120 120
