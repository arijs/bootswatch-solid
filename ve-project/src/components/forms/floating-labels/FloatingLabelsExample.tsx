import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const FloatingLabelsExample: Component = () => {
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
				<div class={`${formFloating} ${mb3}`}>
					<input
						type="email"
						class={`${formControl} ${formControlFloating}`}
						id="floatingInput"
						placeholder="name@example.com"
					/>
					<label class={floatingLabel} for="floatingInput">
						Email address
					</label>
				</div>
				<div class={formFloating}>
					<input
						type="password"
						class={`${formControl} ${formControlFloating}`}
						id="floatingPassword"
						placeholder="Password"
					/>
					<label class={floatingLabel} for="floatingPassword">
						Password
					</label>
				</div>
			</form>
		</div>
	)
}

export default FloatingLabelsExample

// @screenshot *: 360x132 208
// @screenshot brite: 360x136 136
// @screenshot cyborg: 360x128 128
// @screenshot lux: 360x120 120
// @screenshot materia: 360x128 128
// @screenshot morph: 360x120 120
// @screenshot quartz: 360x148 148
// @screenshot sketchy: 360x136 136
// @screenshot vapor: 360x120 120
