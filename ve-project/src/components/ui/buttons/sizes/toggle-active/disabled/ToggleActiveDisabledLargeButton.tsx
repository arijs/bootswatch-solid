import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnLg, btnPrimary } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const ToggleActiveDisabledLargeButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-sizes-toggle-active-disabled-large" checked autocomplete="off"  />
		<label class={`${btn} ${btnPrimary} ${btnLg}`} for="id-btn-sizes-toggle-active-disabled-large">Checked Toggle Large button</label>
	</div>
)

export default ToggleActiveDisabledLargeButton

// @screenshot *: 360x120 120
