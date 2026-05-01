import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	spinnerGrow,
	spinnerDark,
} from '../../../theme-contract/ui/spinners/contract.css'

const GrowDarkSpinner: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<div class={`${theme} ${spinnerGrow} ${spinnerDark}`}>
					<span class="visually-hidden">Loading...</span>
				</div>
			</div>
		</div>
	)
}

export default GrowDarkSpinner

// @screenshot *: 360x120 120
