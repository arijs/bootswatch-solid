import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import {
	formControl,
	formControlLg,
	formSelect,
	formSelectLg,
	mb3,
} from '../../../themes/bootstrap/forms/sizing/controls.css'

const LargeControls: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<div class={mb3}>
			<input
				class={`${formControl} ${formControlLg}`}
				type="text"
				placeholder=".form-control-lg"
				aria-label=".form-control-lg example"
			/>
		</div>
		<div class={mb3}>
			<select class={`${formSelect} ${formSelectLg} ${mb3}`} aria-label=".form-select-lg example">
				<option selected>Open this select menu</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</select>
		</div>
		<div class={mb3}>
			<input
				type="file"
				class={`${formControl} ${formControlLg}`}
				aria-label="Large file input example"
			/>
		</div>
	</div>
)

export default LargeControls

// @screenshot *: 360x176 176
// @screenshot brite: 360x179 179
// @screenshot cyborg: 360x170 170
// @screenshot litera: 360x180 180
// @screenshot lux: 360x314 314
// @screenshot materia: 360x242 242
// @screenshot morph: 360x170 170
// @screenshot quartz: 360x208 208
// @screenshot sketchy: 360x182 182
// @screenshot vapor: 360x170 170


