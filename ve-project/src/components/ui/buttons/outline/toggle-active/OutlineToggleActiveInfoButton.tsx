import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineInfo } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleActiveInfoButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-outline-toggle-active-info" checked autocomplete="off" />
		<label class={`btn ${btn} btn-outline-info ${btnOutlineInfo}`} for="id-btn-outline-toggle-active-info">Checked Toggle Info</label>
	</div>
)

export default OutlineToggleActiveInfoButton

// @screenshot *: 360x120 120
