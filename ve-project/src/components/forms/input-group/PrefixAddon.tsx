import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const PrefixAddon: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		colMd3,
		colMd6,
		colSm6,
		fieldset,
		floatingLabel,
		form,
		formCheck,
		formCheckInput,
		formCheckLabel,
		formControl,
		formControlFloating,
		formControlLg,
		formControlSm,
		formFloating,
		formLabel,
		formRange,
		formSelect,
		formSelectLg,
		formSelectSm,
		formSwitch,
		formText,
		g3,
		hasValidation,
		inputGroup,
		inputGroupText,
		invalidFeedback,
		isInvalid,
		isValid,
		legend,
		legendClear,
		mb3,
		row,
		rowCol,
		validFeedback,
	} = useVeFormsThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<div class={`${inputGroup} ${mb3}`}>
				<span class={inputGroupText} id="basic-addon1">
					@
				</span>
				<input
					type="text"
					class={formControl}
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
			</div>
		</div>
	)
}

export default PrefixAddon

// @screenshot *: 360x120 120
