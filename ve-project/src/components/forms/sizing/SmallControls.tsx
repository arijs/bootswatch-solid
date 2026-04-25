import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import {
	formControl,
	formControlSm,
	formSelect,
	formSelectSm,
	mb3,
} from '../../../themes/bootstrap/forms/sizing/controls.css'

const SmallControls: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={mb3}>
			<input
				class={`${formControl} ${formControlSm}`}
				type="text"
				placeholder=".form-control-sm"
				aria-label=".form-control-sm example"
			/>
		</div>
		<div class={mb3}>
			<select class={`${formSelect} ${formSelectSm}`} aria-label=".form-select-sm example">
				<option selected>Open this select menu</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
		</div>
		<div class={mb3}>
			<input
				type="file"
				class={`${formControl} ${formControlSm}`}
				aria-label="Small file input example"
			/>
		</div>
	</div>
)

export default SmallControls

// @screenshot *: 360x125 125
// @screenshot brite: 360x124 124
// @screenshot cyborg: 360x120 120
// @screenshot litera: 360x132 132
// @screenshot lux: 360x143 143
// @screenshot materia: 360x120 120
// @screenshot morph: 360x120 120
// @screenshot quartz: 360x157 157
// @screenshot sketchy: 360x131 131
// @screenshot vapor: 360x120 120


