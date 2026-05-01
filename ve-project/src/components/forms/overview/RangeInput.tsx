import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const RangeInput: Component = () => {
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
			<form class={form}>
				<div class={mb3}>
					<label for="customRange3" class={formLabel}>
						Example range
					</label>
					<input
						type="range"
						class={formRange}
						min="0"
						max="5"
						step="0.5"
						id="customRange3"
					/>
				</div>
			</form>
		</div>
	)
}

export default RangeInput

// @screenshot *: 360x120 120
