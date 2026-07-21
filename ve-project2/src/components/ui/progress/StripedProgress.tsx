import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bgSuccess } from '../../../theme-contract/literal/contract.css'
import {
	progress,
	progressBar,
	progressBarAnimated,
	progressBarStriped,
} from '../../../theme-contract/ui/progress/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/progress',
	'contents/basic',
	'utilities/used',
]

const StripedProgress: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${progress}`}>
				<div class={`${theme} ${progressBar}`} style={{ width: '15%' }} />
				<div
					class={`${theme} ${progressBar} ${progressBarStriped} ${progressBarAnimated} ${bgSuccess}`}
					style={{ width: '40%' }}
				/>
			</div>
		</div>
	)
}

export default StripedProgress

// @screenshot *: 360x120 120
