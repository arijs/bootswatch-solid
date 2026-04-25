import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { formControl, formLabel } from '../../../themes/bootstrap/forms/sizing/controls.css'
import { colMd6, g3, isValid, row, rowCol, validFeedback } from '../../../themes/bootstrap/forms/validation/base.css'

const ValidNames: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={`${row} ${g3}`}>
			<div class={`${rowCol} ${colMd6}`}>
				<label for="validationServer01" class={formLabel}>
					First name
				</label>
				<input
					type="text"
					class={`${formControl} ${isValid}`}
					id="validationServer01"
					value="Mark"
					required
				/>
				<div class={validFeedback}>Looks good!</div>
			</div>
			<div class={`${rowCol} ${colMd6}`}>
				<label for="validationServer02" class={formLabel}>
					Last name
				</label>
				<input
					type="text"
					class={`${formControl} ${isValid}`}
					id="validationServer02"
					value="Otto"
					required
				/>
				<div class={validFeedback}>Looks good!</div>
			</div>
		</form>
	</div>
)

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
