import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const SwitchCheckbox: Component = () => {
	const { bsTheme, body, containerFluid, colMd3, colMd6, colSm6, fieldset, floatingLabel, form, formCheck, formCheckInput, formCheckLabel, formControl, formControlFloating, formControlLg, formControlSm, formFloating, formLabel, formRange, formSelect, formSelectLg, formSelectSm, formSwitch, formText, g3, hasValidation, inputGroup, inputGroupText, invalidFeedback, isInvalid, isValid, legend, legendClear, mb3, row, rowCol, validFeedback } = useVeFormsThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={form}>
			<div class={`${mb3} ${formCheck} ${formSwitch}`}>
				<input
					class={`${formCheckInput} pwhook-checkbox`}
					type="checkbox"
					id="flexSwitchCheckChecked"
					checked
				/>
				<label class={formCheckLabel} for="flexSwitchCheckChecked">
					Checked switch checkbox input
				</label>
			</div>
		</form>
	</div>
	)
}

export default SwitchCheckbox

// @screenshot *: 360x120 120
