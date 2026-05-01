import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { lead } from '../../../theme-contract/contents/contract.css'

const Lead: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<p class={`${theme} ${lead}`}>This is a lead paragraph. It stands out from regular paragraphs.</p>
		</div>
	)
}

export default Lead

// @screenshot *: 360x120 120
