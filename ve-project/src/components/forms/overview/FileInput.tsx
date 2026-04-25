import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { body } from '../../../themes/bootstrap/body.css'
import { form, formControl, formLabel, mb3 } from '../../../themes/bootstrap/forms/sizing/controls.css'

const FileInput: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<form class={form}>
			<div class={mb3}>
				<label class={formLabel} for="customFile">
					Upload
				</label>
				<input type="file" class={`${formControl} pwhook-file-input`} id="customFile" />
			</div>
		</form>
	</div>
)

export default FileInput

// @screenshot *: 360x120 120
