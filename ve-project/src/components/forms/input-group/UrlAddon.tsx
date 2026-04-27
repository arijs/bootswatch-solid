import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const UrlAddon: Component = () => {
	const { bsTheme, body, containerFluid, colMd3, colMd6, colSm6, fieldset, floatingLabel, form, formCheck, formCheckInput, formCheckLabel, formControl, formControlFloating, formControlLg, formControlSm, formFloating, formLabel, formRange, formSelect, formSelectLg, formSelectSm, formSwitch, formText, g3, hasValidation, inputGroup, inputGroupText, invalidFeedback, isInvalid, isValid, legend, legendClear, mb3, row, rowCol, validFeedback } = useVeFormsThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<label for="basic-url" class={formLabel}>
			Your vanity URL
		</label>
		<div class={`${inputGroup} ${mb3}`}>
			<span class={inputGroupText} id="basic-addon3">
				https://example.com/users/
			</span>
			<input
				type="text"
				class={formControl}
				id="basic-url"
				aria-describedby="basic-addon3"
			/>
		</div>
	</div>
	)
}

export default UrlAddon

// @screenshot *: 360x120 120
