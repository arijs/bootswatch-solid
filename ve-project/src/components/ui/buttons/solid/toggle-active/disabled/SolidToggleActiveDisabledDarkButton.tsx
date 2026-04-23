import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnDark } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleActiveDisabledDarkButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-disabled-dark" checked autocomplete="off"  />
		<label class={`${btn} ${btnDark}`} for="id-btn-solid-toggle-active-disabled-dark">Checked Toggle Dark</label>
	</div>
)

export default SolidToggleActiveDisabledDarkButton

// @screenshot *: 360x120 120
