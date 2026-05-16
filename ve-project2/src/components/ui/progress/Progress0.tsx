import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { progress, progressBar } from '../../../theme-contract/ui/progress/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/progress',
	'contents/basic',
	'utilities',
]

const Progress0: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<div class={`${theme} ${progress}`}>
					<div class={`${theme} ${progressBar}`} style={{ width: '0' }}>
						0%
					</div>
				</div>
			</div>
		</div>
	)
}

export default Progress0

// @screenshot *: 360x120 120
