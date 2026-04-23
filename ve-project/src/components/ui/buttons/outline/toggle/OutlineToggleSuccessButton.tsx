import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineSuccess } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleSuccessButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-success" autocomplete="off" />
		<label class={`${btn} ${btnOutlineSuccess}`} for="id-btn-outline-toggle-success">Toggle Success</label>
	</div>
)

export default OutlineToggleSuccessButton

// @screenshot *: 360x120 120
