import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { form } from '../../../themes/bootstrap/forms/sizing/controls.css'
import { formControl, formLabel, formText, mb3 } from '../../../themes/bootstrap/forms/sizing/controls.css'

const BasicForm: Component = () => (
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
