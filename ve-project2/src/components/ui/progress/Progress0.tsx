import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { progress, progressBar } from '../../../theme-contract/ui/progress/contract.css'

const Progress0: Component = () => {
	const theme = useContext(ThemeContext)
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
