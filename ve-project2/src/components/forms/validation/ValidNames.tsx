import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	colMd6,
	formControl,
	formLabel,
	g3,
	isValid,
	row,
	rowCol,
	validFeedback,
} from '../../../theme-contract/forms/contract.css'

const ValidNames: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${row} ${g3}`}>
				<div class={`${theme} ${rowCol} ${colMd6}`}>
					<label for="validationServer01" class={`${theme} ${formLabel}`}>
						First name
					</label>
					<input
						type="text"
						class={`${theme} ${formControl} ${isValid}`}
						id="validationServer01"
						value="Mark"
						required
					/>
					<div class={`${theme} ${validFeedback}`}>Looks good!</div>
				</div>
				<div class={`${theme} ${rowCol} ${colMd6}`}>
					<label for="validationServer02" class={`${theme} ${formLabel}`}>
						Last name
					</label>
					<input
						type="text"
						class={`${theme} ${formControl} ${isValid}`}
						id="validationServer02"
						value="Otto"
						required
					/>
					<div class={`${theme} ${validFeedback}`}>Looks good!</div>
				</div>
			</form>
		</div>
	)
}

export default ValidNames

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
