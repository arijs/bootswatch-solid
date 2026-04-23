import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnSecondary } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidCheckSecondaryButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnSecondary} pwhook-btn`} data-bs-toggle="button">
			Secondary
		</button>
	</div>
)

export default SolidCheckSecondaryButton

// @screenshot *: 360x120 120
