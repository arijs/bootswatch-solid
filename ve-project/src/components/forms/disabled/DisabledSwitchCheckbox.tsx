import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { form, mb3 } from '../../../themes/bootstrap/forms/sizing/controls.css'
import {
	formCheck,
	formCheckInput,
	formCheckLabel,
	formSwitch,
} from '../../../themes/bootstrap/forms/overview/form-check.css'

const DisabledSwitchCheckbox: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={form}>
			<div class={`${mb3} ${formCheck} ${formSwitch}`}>
				<input
					class={formCheckInput}
					type="checkbox"
					id="disabledSwitchCheckChecked"
					checked
					disabled
				/>
				<label class={formCheckLabel} for="disabledSwitchCheckChecked">
					Disabled checked switch checkbox input
				</label>
			</div>
		</form>
	</div>
)

export default DisabledSwitchCheckbox

// @screenshot *: 360x120 120


