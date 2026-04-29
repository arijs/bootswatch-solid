import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { lead } from '../../../themes/bootstrap/contents/generated.css'

const Lead: Component = () => (
	<div class={`bd-example ${containerFluid} ${bsTheme} ${body}`}>
		<p class={`${lead}`}>This is a lead paragraph. It stands out from regular paragraphs.</p>
	</div>
)

export default Lead

// @screenshot *: 360x120 120
