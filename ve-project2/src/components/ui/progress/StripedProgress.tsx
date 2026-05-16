import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	progress,
	progressBar,
	progressBarAnimated,
	progressBarStriped,
	progressBarSuccess,
} from '../../../theme-contract/ui/progress/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/progress',
	'contents',
	'utilities',
]

const StripedProgress: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<div class={`${theme} ${progress}`}>
					<div class={`${theme} ${progressBar}`} style={{ width: '15%' }} />
					<div
						class={`${theme} ${progressBar} ${progressBarStriped} ${progressBarAnimated} ${progressBarSuccess}`}
						style={{ width: '40%' }}
					/>
				</div>
			</div>
		</div>
	)
}

export default StripedProgress

// @screenshot *: 360x120 120
