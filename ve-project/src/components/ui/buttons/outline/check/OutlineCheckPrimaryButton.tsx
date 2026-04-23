import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnOutlinePrimary } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineCheckPrimaryButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnOutlinePrimary} pwhook-btn`} data-bs-toggle="button">
			Primary
		</button>
	</div>
)

export default OutlineCheckPrimaryButton

// @screenshot *: 360x120 120
