import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnLg, btnPrimary } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const CheckDisabledLargeButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnPrimary} ${btnLg} pwhook-btn`} data-bs-toggle="button">
			Large button
		</button>
	</div>
)

export default CheckDisabledLargeButton

// @screenshot *: 360x120 120
