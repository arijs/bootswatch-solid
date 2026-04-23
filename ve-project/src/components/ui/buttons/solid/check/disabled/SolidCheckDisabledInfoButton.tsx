import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnInfo } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidCheckDisabledInfoButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnInfo} pwhook-btn`} data-bs-toggle="button">
			Info
		</button>
	</div>
)

export default SolidCheckDisabledInfoButton

// @screenshot *: 360x120 120
