import type { Component } from 'solid-js'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { bdExample, listInline, listInlineItem } from '../../../themes/bootstrap/contents/generated.css'

const InlineList: Component = () => (
	<div class={`bd-example ${bdExample} container-fluid ${containerFluid} ${bsTheme} ${body}`}>
		<ul class={`list-inline ${listInline}`}>
			<li class={`list-inline-item ${listInlineItem}`}>This is a list item.</li>
			<li class={`list-inline-item ${listInlineItem}`}>And another one.</li>
			<li class={`list-inline-item ${listInlineItem}`}>But they're displayed inline.</li>
		</ul>
	</div>
)

export default InlineList

// @screenshot *: 360x120 120
