import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { lead, paragraph } from '../../../theme-contract/contents/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'contents/basic',
	'contents/heading',
	'utilities',
]

const Lead: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<p class={`${theme} ${lead} ${paragraph}`}>
				This is a lead paragraph. It stands out from regular paragraphs.
			</p>
		</div>
	)
}

export default Lead

// @screenshot *: 360x120 120
