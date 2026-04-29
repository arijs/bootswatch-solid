import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const InvalidStateZip: Component = () => {
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
			<form class={`${row} ${g3}`}>
				<div class={`${rowCol} ${colMd3} ${colSm6}`}>
					<label for="validationServer04" class={formLabel}>
						State
					</label>
					<select class={`${formSelect} ${isInvalid}`} id="validationServer04" required>
						<option selected disabled value="">
							Choose...
						</option>
						<option>...</option>
					</select>
					<div class={invalidFeedback}>Please select a valid state.</div>
				</div>
				<div class={`${rowCol} ${colMd3} ${colSm6}`}>
					<label for="validationServer05" class={formLabel}>
						Zip
					</label>
					<input
						type="text"
						class={`${formControl} ${isInvalid}`}
						id="validationServer05"
						required
					/>
					<div class={invalidFeedback}>Please provide a valid zip.</div>
				</div>
			</form>
		</div>
	)
}

export default InvalidStateZip

// @screenshot *: 360x222 222
// @screenshot brite: 360x217 217
// @screenshot cyborg: 360x218 218
// @screenshot litera: 360x244 244
// @screenshot lux: 360x242 242
// @screenshot materia: 360x258 258
// @screenshot morph: 360x258 258
// @screenshot quartz: 360x278 278
// @screenshot sketchy: 360x226 226
// @screenshot slate: 360x246 246
// @screenshot superhero: 360x220 220
// @screenshot vapor: 360x218 218
// @screenshot yeti: 360x220 220
// @screenshot zephyr: 360x224 224
