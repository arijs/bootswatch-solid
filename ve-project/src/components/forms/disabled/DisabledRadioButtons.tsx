import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { fieldset, form, legend, legendClear, mb3 } from '../../../themes/bootstrap/forms/sizing/controls.css'
import {
	formCheck,
	formCheckInput,
	formCheckLabel,
} from '../../../themes/bootstrap/forms/overview/form-check.css'

const DisabledRadioButtons: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={form}>
			<fieldset class={`${mb3} ${fieldset}`}>
				<legend class={legend}>Disabled radios buttons</legend>
				<div class={`${legendClear} ${formCheck}`}>
					<input
						type="radio"
						name="radios"
						class={formCheckInput}
						id="disabledRadio1"
						disabled
					/>
					<label class={formCheckLabel} for="disabledRadio1">
						Disabled radio
					</label>
				</div>
				<div class={`${mb3} ${formCheck}`}>
					<input
						type="radio"
						name="radios"
						class={formCheckInput}
						id="disabledRadio2"
						disabled
					/>
					<label class={formCheckLabel} for="disabledRadio2">
						Another radio
					</label>
				</div>
			</fieldset>
		</form>
	</div>
)

export default DisabledRadioButtons

// @screenshot *: 360x120 120
// @screenshot quartz: 360x123 123
