import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleActiveDisabledBaseButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-disabled-base" checked autocomplete="off"  />
		<label class={`${btn}`} for="id-btn-solid-toggle-active-disabled-base">Checked Toggle Button</label>
	</div>
)

export default SolidToggleActiveDisabledBaseButton

// @screenshot *: 360x120 120
