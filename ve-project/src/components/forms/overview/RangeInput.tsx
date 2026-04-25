import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { form, formLabel, formRange, mb3 } from '../../../themes/bootstrap/forms/sizing/controls.css'

const RangeInput: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={form}>
			<div class={mb3}>
				<label for="customRange3" class={formLabel}>
					Example range
				</label>
				<input
					type="range"
					class={formRange}
					min="0"
					max="5"
					step="0.5"
					id="customRange3"
				/>
			</div>
		</form>
	</div>
)

export default RangeInput

// @screenshot *: 360x120 120
