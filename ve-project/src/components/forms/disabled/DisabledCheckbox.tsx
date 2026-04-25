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

const DisabledCheckbox: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={form}>
			<div class={mb3}>
				<div class={formCheck}>
					<input
						class={formCheckInput}
						type="checkbox"
						id="disabledFieldsetCheck"
						disabled
					/>
					<label class={formCheckLabel} for="disabledFieldsetCheck">
						Can't check this
					</label>
				</div>
			</div>
		</form>
	</div>
)

export default DisabledCheckbox

// @screenshot *: 360x120 120
