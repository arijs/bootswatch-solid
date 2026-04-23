import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnPrimary, btnSm } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const ToggleActiveDisabledSmallButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-sizes-toggle-active-disabled-small" checked autocomplete="off"  />
		<label class={`${btn} ${btnPrimary} ${btnSm}`} for="id-btn-sizes-toggle-active-disabled-small">Checked Toggle Small button</label>
	</div>
)

export default ToggleActiveDisabledSmallButton

// @screenshot *: 360x120 120
