import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, blockquote, blockquoteFooter } from '../../../themes/bootstrap/contents/generated.css'

const Blockquote: Component = () => (
	<div class={`bd-example ${bdExample} container-fluid ${containerFluid} ${bsTheme} ${body}`}>
		<blockquote class={`blockquote ${blockquote}`}>
			<p>A well-known quote, contained in a blockquote element.</p>
			<footer class={`blockquote-footer ${blockquoteFooter}`}>
				Someone famous in <cite title="Source Title">Source Title</cite>
			</footer>
		</blockquote>
	</div>
)

export default Blockquote

// @screenshot *: 360x120 120
