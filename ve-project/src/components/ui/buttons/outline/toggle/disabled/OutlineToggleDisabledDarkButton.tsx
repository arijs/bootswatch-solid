import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineDark } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleDisabledDarkButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-disabled-dark" autocomplete="off"  />
		<label class={`${btn} ${btnOutlineDark}`} for="id-btn-outline-toggle-disabled-dark">Toggle Dark</label>
	</div>
)

export default OutlineToggleDisabledDarkButton

// @screenshot *: 360x120 120
