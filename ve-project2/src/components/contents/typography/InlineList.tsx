import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { listInline, listInlineItem } from '../../../theme-contract/contents/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'contents/basic',
	'contents/lists',
	'utilities/used',
]

const InlineList: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

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
