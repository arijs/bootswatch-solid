import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const InvalidRadios: Component = () => {
	const { bsTheme, body, containerFluid, colMd3, colMd6, colSm6, fieldset, floatingLabel, form, formCheck, formCheckInput, formCheckLabel, formControl, formControlFloating, formControlLg, formControlSm, formFloating, formLabel, formRange, formSelect, formSelectLg, formSelectSm, formSwitch, formText, g3, hasValidation, inputGroup, inputGroupText, invalidFeedback, isInvalid, isValid, legend, legendClear, mb3, row, rowCol, validFeedback } = useVeFormsThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={`${row} ${g3}`}>
			<div class={`${rowCol} ${colMd6}`}>
				<div class={formCheck}>
					<input
						class={`${formCheckInput} ${isInvalid}`}
						type="radio"
						name="radioGroup"
						value=""
						id="invalidRadio3"
						required
					/>
					<label class={formCheckLabel} for="invalidRadio3">
						Agree to terms and conditions
					</label>
					<div class={invalidFeedback}>You must agree before submitting.</div>
				</div>
			</div>
			<div class={`${rowCol} ${colMd6}`}>
				<div class={formCheck}>
					<input
						class={`${formCheckInput} ${isInvalid}`}
						type="radio"
						name="radioGroup"
						value=""
						id="invalidRadio4"
						required
						checked
					/>
					<label class={formCheckLabel} for="invalidRadio4">
						Do NOT Agree to terms and conditions
					</label>
					<div class={invalidFeedback}>You must agree before submitting.</div>
				</div>
			</div>
		</form>
	</div>
	)
}

export default InvalidRadios

// @screenshot *: 360x134 134
// @screenshot brite: 360x123 123
// @screenshot litera: 360x143 143
// @screenshot quartz: 360x166 166
