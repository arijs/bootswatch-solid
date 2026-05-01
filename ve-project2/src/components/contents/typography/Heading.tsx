import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { h1, h2, h3, h4, h5, h6 } from '../../../theme-contract/contents/contract.css'

const Heading: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<p class={`${theme} ${h1}`}>Heading 1</p>
			<p class={`${theme} ${h2}`}>Heading 2</p>
			<p class={`${theme} ${h3}`}>Heading 3</p>
			<p class={`${theme} ${h4}`}>Heading 4</p>
			<p class={`${theme} ${h5}`}>Heading 5</p>
			<p class={`${theme} ${h6}`}>Heading 6</p>
		</div>
	)
}

export default Heading

// @screenshot *: 360x199 199
// @screenshot brite: 360x187 187
// @screenshot cyborg: 360x228 228
// @screenshot darkly: 360x208 208
// @screenshot flatly: 360x208 208
// @screenshot journal: 360x186 186
// @screenshot litera: 360x208 208
// @screenshot lux: 360x181 181
// @screenshot quartz: 360x239 239
