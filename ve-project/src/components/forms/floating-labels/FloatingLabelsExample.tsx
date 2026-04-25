import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { form } from '../../../themes/bootstrap/forms/sizing/controls.css'
import {
	floatingLabel,
	formControl,
	formControlFloating,
	formFloating,
	mb3,
} from '../../../themes/bootstrap/forms/sizing/controls.css'

const FloatingLabelsExample: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={form}>
			<div class={`${formFloating} ${mb3}`}>
				<input
					type="email"
					class={`${formControl} ${formControlFloating}`}
					id="floatingInput"
					placeholder="name@example.com"
				/>
				<label class={floatingLabel} for="floatingInput">
					Email address
				</label>
			</div>
			<div class={formFloating}>
				<input
					type="password"
					class={`${formControl} ${formControlFloating}`}
					id="floatingPassword"
					placeholder="Password"
				/>
				<label class={floatingLabel} for="floatingPassword">
					Password
				</label>
			</div>
		</form>
	</div>
)

export default FloatingLabelsExample

// @screenshot *: 360x132 208
// @screenshot brite: 360x136 136
// @screenshot cyborg: 360x128 128
// @screenshot lux: 360x120 120
// @screenshot materia: 360x128 128
// @screenshot morph: 360x120 120
// @screenshot quartz: 360x148 148
// @screenshot sketchy: 360x136 136
// @screenshot vapor: 360x120 120
