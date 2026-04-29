import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import {
	blockquote,
	blockquoteFooter,
	paragraph,
} from '../../../themes/bootstrap/contents/generated.css'

const Blockquote: Component = () => (
	<div class={`bd-example ${containerFluid} ${bsTheme} ${body}`}>
		<blockquote class={`${blockquote}`}>
			<p class={paragraph}>A well-known quote, contained in a blockquote element.</p>
			<footer class={`${blockquoteFooter}`}>
				Someone famous in <cite title="Source Title">Source Title</cite>
			</footer>
		</blockquote>
	</div>
)

export default Blockquote

// @screenshot *: 360x120 120
