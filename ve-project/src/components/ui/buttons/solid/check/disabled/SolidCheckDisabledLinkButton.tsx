import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnLink } from '../../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidCheckDisabledLinkButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<button disabled type="button" class={`${btn} ${btnLink} pwhook-btn`} data-bs-toggle="button">
			Link
		</button>
	</div>
)

export default SolidCheckDisabledLinkButton

// @screenshot *: 360x120 120
