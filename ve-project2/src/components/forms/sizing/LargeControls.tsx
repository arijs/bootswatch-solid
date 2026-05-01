import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	formControl,
	formControlLg,
	formSelect,
	formSelectLg,
	mb3,
} from '../../../theme-contract/forms/contract.css'

const LargeControls: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<div class={`${theme} ${mb3}`}>
				<input
					class={`${theme} ${formControl} ${formControlLg}`}
					type="text"
					placeholder=".form-control-lg"
					aria-label=".form-control-lg example"
				/>
			</div>
			<div class={`${theme} ${mb3}`}>
				<select
					class={`${theme} ${formSelect} ${formSelectLg} ${mb3}`}
					aria-label=".form-select-lg example"
				>
					<option selected>Open this select menu</option>
					<option value="1">One</option>
					<option value="2">Two</option>
					<option value="3">Three</option>
				</select>
			</div>
			<div class={`${theme} ${mb3}`}>
				<input
					type="file"
					class={`${theme} ${formControl} ${formControlLg}`}
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
