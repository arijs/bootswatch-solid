import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { formControl, mb3 } from '../../../themes/bootstrap/forms/sizing/controls.css'
import { inputGroup, inputGroupText } from '../../../themes/bootstrap/forms/input-group/base.css'

const CurrencyAddon: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={`${inputGroup} ${mb3}`}>
			<span class={inputGroupText}>$</span>
			<input type="text" class={formControl} aria-label="Amount (to the nearest dollar)" />
			<span class={inputGroupText}>.00</span>
		</div>
	</div>
)

export default CurrencyAddon

// @screenshot *: 360x120 120
