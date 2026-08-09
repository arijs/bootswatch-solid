import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bgDanger, w100 } from '../../../theme-contract/literal/contract.css'
import { progress, progressBar } from '../../../theme-contract/ui/progress/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/progress',
	'contents/basic',
	'utilities',
]

const Progress100: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${progress}`}>
				<div class={`${theme} ${progressBar} ${bgDanger} ${w100}`}>100%</div>
			</div>
		</div>
	)
}

export default Progress100

// @screenshot *: 360x120 120
