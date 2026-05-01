import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	blockquote,
	blockquoteFooter,
	paragraph,
} from '../../../theme-contract/contents/contract.css'

const Blockquote: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<blockquote class={`${theme} ${blockquote}`}>
				<p class={`${theme} ${paragraph}`}>A well-known quote, contained in a blockquote element.</p>
				<footer class={`${theme} ${blockquoteFooter}`}>
					Someone famous in <cite title="Source Title">Source Title</cite>
				</footer>
			</blockquote>
		</div>
	)
}

export default Blockquote

// @screenshot *: 360x120 120
