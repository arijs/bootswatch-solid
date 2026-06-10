import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	clsH1,
	clsH2,
	clsH3,
	clsH4,
	clsH5,
	clsH6,
} from '../../../theme-contract/literal/contract.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'contents/basic',
	'contents/heading',
	'utilities',
]

const Heading: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<p class={`${theme} ${clsH1}`}>Heading 1</p>
			<p class={`${theme} ${clsH2}`}>Heading 2</p>
			<p class={`${theme} ${clsH3}`}>Heading 3</p>
			<p class={`${theme} ${clsH4}`}>Heading 4</p>
			<p class={`${theme} ${clsH5}`}>Heading 5</p>
			<p class={`${theme} ${clsH6}`}>Heading 6</p>
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
