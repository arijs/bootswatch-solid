import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, h1, h2, h3, h4, h5, h6 } from '../../../themes/bootstrap/contents/generated.css'

const Heading: Component = () => (
	<div class={`bd-example ${bdExample} container-fluid ${containerFluid} ${bsTheme} ${body}`}>
		<p class={`h1 ${h1}`}>Heading 1</p>
		<p class={`h2 ${h2}`}>Heading 2</p>
		<p class={`h3 ${h3}`}>Heading 3</p>
		<p class={`h4 ${h4}`}>Heading 4</p>
		<p class={`h5 ${h5}`}>Heading 5</p>
		<p class={`h6 ${h6}`}>Heading 6</p>
	</div>
)

export default Heading

// @screenshot *: 360x199 199
// @screenshot brite: 360x187 187
// @screenshot cyborg: 360x228 228
// @screenshot darkly: 360x208 208
// @screenshot flatly: 360x208 208
// @screenshot journal: 360x186 186
// @screenshot litera: 360x208 208
// @screenshot lux: 360x181 181
// @screenshot quartz: 360x239 239
