import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnWarning } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidDisabledWarningButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnWarning} pwhook-btn`}>
			Warning
		</button>
	</div>
)

export default SolidDisabledWarningButton

// @screenshot *: 360x120 120
