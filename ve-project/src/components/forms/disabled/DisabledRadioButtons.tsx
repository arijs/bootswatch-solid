import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const DisabledRadioButtons: Component = () => {
	const { bsTheme, body, containerFluid, colMd3, colMd6, colSm6, fieldset, floatingLabel, form, formCheck, formCheckInput, formCheckLabel, formControl, formControlFloating, formControlLg, formControlSm, formFloating, formLabel, formRange, formSelect, formSelectLg, formSelectSm, formSwitch, formText, g3, hasValidation, inputGroup, inputGroupText, invalidFeedback, isInvalid, isValid, legend, legendClear, mb3, row, rowCol, validFeedback } = useVeFormsThemeClasses()

	return (
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
}

export default DisabledRadioButtons

// @screenshot *: 360x120 120
// @screenshot quartz: 360x123 123
