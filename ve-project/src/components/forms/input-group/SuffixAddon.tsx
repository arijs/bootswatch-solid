import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { formControl, mb3 } from '../../../themes/bootstrap/forms/sizing/controls.css'
import { inputGroup, inputGroupText } from '../../../themes/bootstrap/forms/input-group/base.css'

const SuffixAddon: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={`${inputGroup} ${mb3}`}>
			<input
				type="text"
				class={formControl}
				placeholder="Recipient's username"
				aria-label="Recipient's username"
				aria-describedby="basic-addon2"
			/>
			<span class={inputGroupText} id="basic-addon2">
				@example.com
			</span>
		</div>
	</div>
)

export default SuffixAddon

// @screenshot *: 360x120 120
