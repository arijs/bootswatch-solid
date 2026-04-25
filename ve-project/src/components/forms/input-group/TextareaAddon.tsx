import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { formControl } from '../../../themes/bootstrap/forms/sizing/controls.css'
import { inputGroup, inputGroupText } from '../../../themes/bootstrap/forms/input-group/base.css'

const TextareaAddon: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={inputGroup}>
			<span class={inputGroupText}>With textarea</span>
			<textarea class={formControl} aria-label="With textarea" />
		</div>
	</div>
)

export default TextareaAddon

// @screenshot *: 360x120 120
