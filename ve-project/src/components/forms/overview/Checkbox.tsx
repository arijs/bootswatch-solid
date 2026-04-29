import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const Checkbox: Component = () => {
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
				<div class={`${mb3} ${formCheck}`}>
					<input
						type="checkbox"
						class={`${formCheckInput} pwhook-checkbox`}
						id="exampleCheck1"
					/>
					<label class={formCheckLabel} for="exampleCheck1">
						Check me out
					</label>
				</div>
			</form>
		</div>
	)
}

export default Checkbox

// @screenshot *: 360x120 120
