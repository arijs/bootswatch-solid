import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnLink } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleLinkButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`btn-check ${btnCheck}`} id="id-btn-solid-toggle-link" autocomplete="off" />
		<label class={`btn ${btn} btn-link ${btnLink}`} for="id-btn-solid-toggle-link">Toggle Link</label>
	</div>
)

export default SolidToggleLinkButton

// @screenshot *: 360x120 120
