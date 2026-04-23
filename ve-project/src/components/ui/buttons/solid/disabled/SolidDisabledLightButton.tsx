import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnLight } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidDisabledLightButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnLight} pwhook-btn`}>
			Light
		</button>
	</div>
)

export default SolidDisabledLightButton

// @screenshot *: 360x120 120
