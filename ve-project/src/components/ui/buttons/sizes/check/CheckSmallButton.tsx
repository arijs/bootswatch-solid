import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnPrimary, btnSm } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const CheckSmallButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`btn ${btn} btn-primary ${btnPrimary} btn-sm ${btnSm}`} data-bs-toggle="button">
			Small button
		</button>
	</div>
)

export default CheckSmallButton

// @screenshot *: 360x120 120
