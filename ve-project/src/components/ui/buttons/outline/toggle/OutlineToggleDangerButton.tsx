import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineDanger } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleDangerButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-danger" autocomplete="off" />
		<label class={`${btn} ${btnOutlineDanger}`} for="id-btn-outline-toggle-danger">Toggle Danger</label>
	</div>
)

export default OutlineToggleDangerButton

// @screenshot *: 360x120 120
