import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { formControl, formLabel, mb3 } from '../../../themes/bootstrap/forms/sizing/controls.css'
import { inputGroup, inputGroupText } from '../../../themes/bootstrap/forms/input-group/base.css'

const UrlAddon: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<label for="basic-url" class={formLabel}>
			Your vanity URL
		</label>
		<div class={`${inputGroup} ${mb3}`}>
			<span class={inputGroupText} id="basic-addon3">
				https://example.com/users/
			</span>
			<input
				type="text"
				class={formControl}
				id="basic-url"
				aria-describedby="basic-addon3"
			/>
		</div>
	</div>
)

export default UrlAddon

// @screenshot *: 360x120 120
