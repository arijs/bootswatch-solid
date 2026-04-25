import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { formControl, mb3 } from '../../../themes/bootstrap/forms/sizing/controls.css'
import { inputGroup, inputGroupText } from '../../../themes/bootstrap/forms/input-group/base.css'

const PrefixAddon: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={`${inputGroup} ${mb3}`}>
			<span class={inputGroupText} id="basic-addon1">
				@
			</span>
			<input
				type="text"
				class={formControl}
				placeholder="Username"
				aria-label="Username"
				aria-describedby="basic-addon1"
			/>
		</div>
	</div>
)

export default PrefixAddon

// @screenshot *: 360x120 120
