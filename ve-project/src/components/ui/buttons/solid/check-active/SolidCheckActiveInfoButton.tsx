import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn, btnActiveHook } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnInfo } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidCheckActiveInfoButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnInfo} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Info
		</button>
	</div>
)

export default SolidCheckActiveInfoButton

// @screenshot *: 360x120 120
