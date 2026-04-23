import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineSuccess } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleActiveSuccessButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-active-success" checked autocomplete="off" />
		<label class={`${btn} ${btnOutlineSuccess}`} for="id-btn-outline-toggle-active-success">Checked Toggle Success</label>
	</div>
)

export default OutlineToggleActiveSuccessButton

// @screenshot *: 360x120 120
