import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import {
	blockquote,
	blockquoteFooter,
	paragraph,
} from '../../../theme-contract/contents/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { clsBlockquote } from '../../../theme-contract/literal/contract.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'contents/basic',
	'contents/heading',
	'utilities/used',
]

const Blockquote: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<blockquote class={`${theme} ${blockquote} ${clsBlockquote}`}>
				<p class={`${theme} ${paragraph}`}>
					A well-known quote, contained in a blockquote element.
				</p>
				<footer class={`${theme} ${blockquoteFooter}`}>
					Someone famous in <cite title="Source Title">Source Title</cite>
				</footer>
			</blockquote>
		</div>
	)
}

export default Blockquote

// @screenshot *: 360x120 120
