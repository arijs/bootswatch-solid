import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	formControl,
	formControlSm,
	formSelect,
	formSelectSm,
	mb3,
} from '../../../theme-contract/forms/contract.css'

const SmallControls: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<div class={`${theme} ${mb3}`}>
				<input
					class={`${theme} ${formControl} ${formControlSm}`}
					type="text"
					placeholder=".form-control-sm"
					aria-label=".form-control-sm example"
				/>
			</div>
			<div class={`${theme} ${mb3}`}>
				<select
					class={`${theme} ${formSelect} ${formSelectSm}`}
					aria-label=".form-select-sm example"
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
					class={`${theme} ${formControl} ${formControlSm}`}
					aria-label="Small file input example"
				/>
			</div>
		</div>
	)
}

export default SmallControls

// @screenshot *: 360x125 125
// @screenshot brite: 360x124 124
// @screenshot cyborg: 360x120 120
// @screenshot litera: 360x132 132
// @screenshot lux: 360x143 143
// @screenshot materia: 360x120 120
// @screenshot morph: 360x120 120
