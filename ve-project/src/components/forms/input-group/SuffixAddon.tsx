import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const SuffixAddon: Component = () => {
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
				<input
					type="text"
					class={formControl}
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
				/>
				<span class={inputGroupText} id="basic-addon2">
					@example.com
				</span>
			</div>
		</div>
	)
}

export default SuffixAddon

// @screenshot *: 360x120 120
