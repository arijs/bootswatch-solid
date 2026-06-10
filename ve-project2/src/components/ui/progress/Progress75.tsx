import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	bgWarning,
	progress,
	progressBar,
	w75,
} from '../../../theme-contract/literal/contract.css'
import { textDark } from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/progress',
	'contents/basic',
	'utilities',
]

const Progress75: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${progress}`}>
				<div class={`${theme} ${progressBar} ${bgWarning} ${textDark} ${w75}`}>75%</div>
			</div>
		</div>
	)
}

export default Progress75

// @screenshot *: 360x120 120
