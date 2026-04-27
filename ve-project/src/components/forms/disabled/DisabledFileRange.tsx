import type { Component } from 'solid-js'
import { useVeFormsThemeClasses } from '../../../themes/runtime/hooks'

const DisabledFileRange: Component = () => {
	const { bsTheme, body, containerFluid, colMd3, colMd6, colSm6, fieldset, floatingLabel, form, formCheck, formCheckInput, formCheckLabel, formControl, formControlFloating, formControlLg, formControlSm, formFloating, formLabel, formRange, formSelect, formSelectLg, formSelectSm, formSwitch, formText, g3, hasValidation, inputGroup, inputGroupText, invalidFeedback, isInvalid, isValid, legend, legendClear, mb3, row, rowCol, validFeedback } = useVeFormsThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={form}>
			<div class={mb3}>
				<label class={formLabel} for="disabledCustomFile">
					Upload
				</label>
				<input type="file" class={formControl} id="disabledCustomFile" disabled />
			</div>
			<div class={mb3}>
				<label for="disabledRange" class={formLabel}>
					Disabled range
				</label>
				<input
					type="range"
					class={formRange}
					min="0"
					max="5"
					step="0.5"
					id="disabledRange"
					disabled
				/>
			</div>
		</form>
	</div>
	)
}

export default DisabledFileRange

// @screenshot *: 360x148 148
// @screenshot brite: 360x142 142
// @screenshot cyborg: 360x147 147
// @screenshot litera: 360x160 160
// @screenshot lux: 360x159 159
// @screenshot materia: 360x168 168
// @screenshot morph: 360x167 167
// @screenshot quartz: 360x176 176
// @screenshot sandstone: 360x149 149
// @screenshot sketchy: 360x151 151
// @screenshot slate: 360x160 160
// @screenshot superhero: 360x146 146
// @screenshot vapor: 360x146 146
// @screenshot yeti: 360x146 146
// @screenshot zephyr: 360x149 149
