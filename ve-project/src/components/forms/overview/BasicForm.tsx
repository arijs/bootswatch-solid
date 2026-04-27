import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const BasicForm: Component = () => {
	const { bsTheme, body, containerFluid, colMd3, colMd6, colSm6, fieldset, floatingLabel, form, formCheck, formCheckInput, formCheckLabel, formControl, formControlFloating, formControlLg, formControlSm, formFloating, formLabel, formRange, formSelect, formSelectLg, formSelectSm, formSwitch, formText, g3, hasValidation, inputGroup, inputGroupText, invalidFeedback, isInvalid, isValid, legend, legendClear, mb3, row, rowCol, validFeedback } = useVeFormsThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={form}>
			<div class={mb3}>
				<label for="exampleInputEmail1" class={formLabel}>
					Email address
				</label>
				<input
					type="email"
					class={`${formControl} pwhook-form-control`}
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
				/>
				<div id="emailHelp" class={formText}>
					We'll never share your email with anyone else.
				</div>
			</div>
			<div class={mb3}>
				<label for="exampleInputPassword1" class={formLabel}>
					Password
				</label>
				<input
					type="password"
					class={`${formControl} pwhook-form-control`}
					id="exampleInputPassword1"
				/>
			</div>
		</form>
	</div>
	)
}

export default BasicForm

// @screenshot *: 360x181 181
// @screenshot brite: 360x179 179
// @screenshot cyborg: 360x177 177
// @screenshot litera: 360x201 201
// @screenshot lux: 360x201 201
// @screenshot materia: 360x217 217
// @screenshot morph: 360x217 217
// @screenshot quartz: 360x221 221
// @screenshot sketchy: 360x185 185
// @screenshot slate: 360x205 205
// @screenshot superhero: 360x179 179
// @screenshot vapor: 360x177 177
// @screenshot yeti: 360x179 179
// @screenshot zephyr: 360x183 183
