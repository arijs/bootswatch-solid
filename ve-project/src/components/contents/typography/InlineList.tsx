import type { Component } from 'solid-js'
import { bsTheme } from '../../../themes/bootstrap/_vars.css'
import { body } from '../../../themes/bootstrap/body.css'
import { containerFluid } from '../../../themes/bootstrap/container.css'
import { listInline, listInlineItem } from '../../../themes/bootstrap/contents/generated.css'

const InlineList: Component = () => (
	<div class={`bd-example ${containerFluid} ${bsTheme} ${body}`}>
		<ul class={`${listInline}`}>
			<li class={`${listInlineItem}`}>This is a list item.</li>
			<li class={`${listInlineItem}`}>And another one.</li>
			<li class={`${listInlineItem}`}>But they're displayed inline.</li>
		</ul>
	</div>
)

export default InlineList

// @screenshot *: 360x120 120
