import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnPrimary, btnSm } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const ToggleSmallButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-sizes-toggle-small" autocomplete="off" />
		<label class={`${btn} ${btnPrimary} ${btnSm}`} for="id-btn-sizes-toggle-small">Toggle Small button</label>
	</div>
)

export default ToggleSmallButton

// @screenshot *: 360x120 120
