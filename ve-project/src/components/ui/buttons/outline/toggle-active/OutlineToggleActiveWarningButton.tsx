import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnOutlineWarning } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineToggleActiveWarningButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-active-warning" checked autocomplete="off" />
		<label class={`${btn} ${btnOutlineWarning}`} for="id-btn-outline-toggle-active-warning">Checked Toggle Warning</label>
	</div>
)

export default OutlineToggleActiveWarningButton

// @screenshot *: 360x120 120
