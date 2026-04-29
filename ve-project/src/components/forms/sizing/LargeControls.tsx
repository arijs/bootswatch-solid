import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const LargeControls: Component = () => {
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
			<div class={mb3}>
				<input
					class={`${formControl} ${formControlLg}`}
					type="text"
					placeholder=".form-control-lg"
					aria-label=".form-control-lg example"
				/>
			</div>
			<div class={mb3}>
				<select
					class={`${formSelect} ${formSelectLg} ${mb3}`}
					aria-label=".form-select-lg example"
				>
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div>
			<div class={mb3}>
				<input
					type="file"
					class={`${formControl} ${formControlLg}`}
					aria-label="Large file input example"
				/>
			</div>
		</div>
	)
}

export default LargeControls

// @screenshot *: 360x176 176
// @screenshot brite: 360x179 179
// @screenshot cyborg: 360x170 170
// @screenshot litera: 360x180 180
// @screenshot lux: 360x314 314
// @screenshot materia: 360x242 242
// @screenshot morph: 360x170 170
// @screenshot quartz: 360x208 208
// @screenshot sketchy: 360x182 182
// @screenshot vapor: 360x170 170
