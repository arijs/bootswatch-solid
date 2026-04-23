import type { Component } from 'solid-js'
import { containerFluid } from '../../../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../../../themes/bootstrap/_vars.css'
import { body } from '../../../../../themes/bootstrap/body.css'
import { btn } from '../../../../../themes/bootstrap/ui/buttons/base.css'
import { btnCheck, btnLink } from '../../../../../themes/bootstrap/ui/buttons/generated.css'

const SolidToggleActiveLinkButton: Component = () => (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-link" checked autocomplete="off" />
		<label class={`${btn} ${btnLink}`} for="id-btn-solid-toggle-active-link">Checked Toggle Link</label>
	</div>
)

export default SolidToggleActiveLinkButton

// @screenshot *: 360x120 120
