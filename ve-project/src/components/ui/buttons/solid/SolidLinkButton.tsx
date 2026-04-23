import type { Component } from 'solid-js'
import { containerFluid } from '../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../themes/bootstrap/body.css'
import { btn } from '../../../../themes/bootstrap/ui/buttons/base.css'
import { btnLink } from '../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidLinkButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button type="button" class={`btn ${btn} btn-link ${btnLink} pwhook-btn`}>
			Link
		</button>
	</div>
)

export default SolidLinkButton

// @screenshot *: 360x120 120
