import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnOutlineDark } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineCheckDarkButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnOutlineDark} pwhook-btn`} data-bs-toggle="button">
			Dark
		</button>
	</div>
)

export default OutlineCheckDarkButton

// @screenshot *: 360x120 120
