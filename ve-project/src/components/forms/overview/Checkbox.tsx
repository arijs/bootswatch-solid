import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { form, mb3 } from '../../../themes/bootstrap/forms/sizing/controls.css'
import {
	formCheck,
	formCheckInput,
	formCheckLabel,
} from '../../../themes/bootstrap/forms/overview/form-check.css'

const Checkbox: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={form}>
			<div class={`${mb3} ${formCheck}`}>
				<input type="checkbox" class={`${formCheckInput} pwhook-checkbox`} id="exampleCheck1" />
				<label class={formCheckLabel} for="exampleCheck1">
					Check me out
				</label>
			</div>
		</form>
	</div>
)

export default Checkbox

// @screenshot *: 360x120 120
