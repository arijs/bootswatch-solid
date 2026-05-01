import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	progress,
	progressBar,
	progressBarSuccess,
} from '../../../theme-contract/ui/progress/contract.css'

const Progress25: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<div class={`${theme} ${progress}`}>
					<div
						class={`${theme} ${progressBar} ${progressBarSuccess}`}
						style={{ width: '25%' }}
					>
						25%
					</div>
				</div>
			</div>
		</div>
	)
}

export default Progress25

// @screenshot *: 360x120 120
