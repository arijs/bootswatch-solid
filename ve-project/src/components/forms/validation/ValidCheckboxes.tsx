import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { formCheck, formCheckInput, formCheckLabel } from '../../../themes/bootstrap/forms/overview/form-check.css'
import {
	colMd6,
	g3,
	isValid,
	row,
	rowCol,
	validFeedback,
} from '../../../themes/bootstrap/forms/validation/base.css'

const ValidCheckboxes: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={`${row} ${g3}`}>
			<div class={`${rowCol} ${colMd6}`}>
				<div class={formCheck}>
					<input
						class={`${formCheckInput} ${isValid}`}
						type="checkbox"
						value=""
						id="validCheck3"
						required
						checked
					/>
					<label class={formCheckLabel} for="validCheck3">
						Agree to terms and conditions
					</label>
					<div class={validFeedback}>You agreed before submitting.</div>
				</div>
			</div>
			<div class={`${rowCol} ${colMd6}`}>
				<div class={formCheck}>
					<input
						class={`${formCheckInput} ${isValid}`}
						type="checkbox"
						value=""
						id="validCheck4"
						required
					/>
					<label class={formCheckLabel} for="validCheck4">
						Do NOT Agree to terms and conditions
					</label>
					<div class={validFeedback}>You agreed before submitting.</div>
				</div>
			</div>
		</form>
	</div>
)

export default ValidCheckboxes

// @screenshot *: 360x134 134
// @screenshot brite: 360x123 123
// @screenshot litera: 360x143 143
// @screenshot quartz: 360x166 166
