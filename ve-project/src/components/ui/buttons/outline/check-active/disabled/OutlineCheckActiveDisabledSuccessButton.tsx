import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn, btnActiveHook } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnOutlineSuccess } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineCheckActiveDisabledSuccessButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnOutlineSuccess} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Success
		</button>
	</div>
)

export default OutlineCheckActiveDisabledSuccessButton

// @screenshot *: 360x120 120
