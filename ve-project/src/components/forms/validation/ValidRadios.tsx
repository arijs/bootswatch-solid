import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const ValidRadios: Component = () => {
	const { bsTheme, body, containerFluid, colMd3, colMd6, colSm6, fieldset, floatingLabel, form, formCheck, formCheckInput, formCheckLabel, formControl, formControlFloating, formControlLg, formControlSm, formFloating, formLabel, formRange, formSelect, formSelectLg, formSelectSm, formSwitch, formText, g3, hasValidation, inputGroup, inputGroupText, invalidFeedback, isInvalid, isValid, legend, legendClear, mb3, row, rowCol, validFeedback } = useVeFormsThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={`${row} ${g3}`}>
			<div class={`${rowCol} ${colMd6}`}>
				<div class={formCheck}>
					<input
						class={`${formCheckInput} ${isValid}`}
						type="radio"
						name="radioGroup"
						value=""
						id="validRadio3"
						required
						checked
					/>
					<label class={formCheckLabel} for="validRadio3">
						Agree to terms and conditions
					</label>
					<div class={validFeedback}>You agreed before submitting.</div>
				</div>
			</div>
			<div class={`${rowCol} ${colMd6}`}>
				<div class={formCheck}>
					<input
						class={`${formCheckInput} ${isValid}`}
						type="radio"
						name="radioGroup"
						value=""
						id="validRadio4"
						required
					/>
					<label class={formCheckLabel} for="validRadio4">
						Do NOT Agree to terms and conditions
					</label>
					<div class={validFeedback}>You agreed before submitting.</div>
				</div>
			</div>
		</form>
	</div>
	)
}

export default ValidRadios

// @screenshot *: 360x134 134
// @screenshot brite: 360x123 123
// @screenshot litera: 360x143 143
// @screenshot quartz: 360x166 166
