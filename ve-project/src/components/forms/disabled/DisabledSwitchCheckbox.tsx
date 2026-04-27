import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const DisabledSwitchCheckbox: Component = () => {
	const { bsTheme, body, containerFluid, colMd3, colMd6, colSm6, fieldset, floatingLabel, form, formCheck, formCheckInput, formCheckLabel, formControl, formControlFloating, formControlLg, formControlSm, formFloating, formLabel, formRange, formSelect, formSelectLg, formSelectSm, formSwitch, formText, g3, hasValidation, inputGroup, inputGroupText, invalidFeedback, isInvalid, isValid, legend, legendClear, mb3, row, rowCol, validFeedback } = useVeFormsThemeClasses()

	return (
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
}

export default DisabledSwitchCheckbox

// @screenshot *: 360x120 120
