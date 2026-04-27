import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const DisabledFieldset: Component = () => {
	const { bsTheme, body, containerFluid, colMd3, colMd6, colSm6, fieldset, floatingLabel, form, formCheck, formCheckInput, formCheckLabel, formControl, formControlFloating, formControlLg, formControlSm, formFloating, formLabel, formRange, formSelect, formSelectLg, formSelectSm, formSwitch, formText, g3, hasValidation, inputGroup, inputGroupText, invalidFeedback, isInvalid, isValid, legend, legendClear, mb3, row, rowCol, validFeedback } = useVeFormsThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={form}>
			<fieldset class={fieldset} disabled aria-label="Disabled fieldset example">
				<div class={mb3}>
					<label for="disabledTextInput" class={formLabel}>
						Disabled input
					</label>
					<input
						type="text"
						id="disabledTextInput"
						class={formControl}
						placeholder="Disabled input"
					/>
				</div>
				<div class={mb3}>
					<label for="disabledSelect" class={formLabel}>
						Disabled select menu
					</label>
					<select id="disabledSelect" class={formSelect}>
						<option>Disabled select</option>
					</select>
				</div>
			</fieldset>
		</form>
	</div>
	)
}

export default DisabledFieldset

// @screenshot *: 360x172 172
// @screenshot cyborg: 360x168 168
// @screenshot litera: 360x190 190
// @screenshot lux: 360x192 192
// @screenshot materia: 360x208 208
// @screenshot morph: 360x208 208
// @screenshot quartz: 360x228 228
// @screenshot sketchy: 360x176 176
// @screenshot slate: 360x196 196
// @screenshot superhero: 360x170 170
// @screenshot vapor: 360x168 168
// @screenshot yeti: 360x170 170
// @screenshot zephyr: 360x174 174
