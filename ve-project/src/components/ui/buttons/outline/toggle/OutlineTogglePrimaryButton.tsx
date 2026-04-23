import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlinePrimary } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineTogglePrimaryButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-outline-toggle-primary" autocomplete="off" />
		<label class={`btn ${btn} btn-outline-primary ${btnOutlinePrimary}`} for="id-btn-outline-toggle-primary">Toggle Primary</label>
	</div>
)

export default OutlineTogglePrimaryButton

// @screenshot *: 360x120 120
