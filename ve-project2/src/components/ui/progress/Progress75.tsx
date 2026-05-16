import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	progress,
	progressBar,
	progressBarWarning,
} from '../../../theme-contract/ui/progress/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/progress',
	'contents/basic',
	'utilities',
]

const Progress75: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<div class={`${theme} ${progress}`}>
					<div
						class={`${theme} ${progressBar} ${progressBarWarning}`}
						style={{ width: '75%' }}
					>
						75%
					</div>
				</div>
			</div>
		</div>
	)
}

export default Progress75

// @screenshot *: 360x120 120
