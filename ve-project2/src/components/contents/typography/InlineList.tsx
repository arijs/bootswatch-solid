import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { listInline, listInlineItem } from '../../../theme-contract/contents/contract.css'

const InlineList: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<ul class={`${theme} ${listInline}`}>
				<li class={`${theme} ${listInlineItem}`}>This is a list item.</li>
				<li class={`${theme} ${listInlineItem}`}>And another one.</li>
				<li class={`${theme} ${listInlineItem}`}>But they're displayed inline.</li>
			</ul>
		</div>
	)
}

export default InlineList

// @screenshot *: 360x120 120
