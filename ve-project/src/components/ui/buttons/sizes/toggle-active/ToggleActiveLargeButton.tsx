import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnLg, btnPrimary } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const ToggleActiveLargeButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-sizes-toggle-active-large" checked autocomplete="off" />
		<label class={`${btn} ${btnPrimary} ${btnLg}`} for="id-btn-sizes-toggle-active-large">Checked Toggle Large button</label>
	</div>
)

export default ToggleActiveLargeButton

// @screenshot *: 360x120 120
