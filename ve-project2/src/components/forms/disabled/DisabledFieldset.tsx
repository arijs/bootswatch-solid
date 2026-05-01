import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	fieldset,
	form,
	formControl,
	formLabel,
	formSelect,
	mb3,
} from '../../../theme-contract/forms/contract.css'

const DisabledFieldset: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<fieldset class={`${theme} ${fieldset}`} disabled aria-label="Disabled fieldset example">
					<div class={`${theme} ${mb3}`}>
						<label for="disabledTextInput" class={`${theme} ${formLabel}`}>
							Disabled input
						</label>
						<input
							type="text"
							id="disabledTextInput"
							class={`${theme} ${formControl}`}
							placeholder="Disabled input"
						/>
					</div>
					<div class={`${theme} ${mb3}`}>
						<label for="disabledSelect" class={`${theme} ${formLabel}`}>
							Disabled select menu
						</label>
						<select id="disabledSelect" class={`${theme} ${formSelect}`}>
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
