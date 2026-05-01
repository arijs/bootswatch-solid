import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const TextareaAddon: Component = () => {
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
			<div class={inputGroup}>
				<span class={inputGroupText}>With textarea</span>
				<textarea class={formControl} aria-label="With textarea" />
			</div>
		</div>
	)
}

export default TextareaAddon

// @screenshot *: 360x120 120
