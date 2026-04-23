import type { Component } from 'solid-js'
import { containerFluid } from '../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../themes/bootstrap/body.css'
import { btn } from '../../../../themes/bootstrap/ui/buttons/base.css'
import { btnOutlineWarning } from '../../../../themes/bootstrap/ui/buttons/generated.css'

const OutlineWarningButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`${btn} ${btnOutlineWarning} pwhook-btn`}>
			Warning
		</button>
	</div>
)

export default OutlineWarningButton

// @screenshot *: 360x120 120
