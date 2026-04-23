import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn, btnActiveHook } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnOutlineDanger } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineCheckActiveDangerButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnOutlineDanger} ${btnActiveHook} pwhook-btn`} data-bs-toggle="button" aria-pressed="true">
			Danger
		</button>
	</div>
)

export default OutlineCheckActiveDangerButton

// @screenshot *: 360x120 120
