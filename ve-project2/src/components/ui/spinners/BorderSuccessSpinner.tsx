import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	spinnerBorder,
	spinnerSuccess,
} from '../../../theme-contract/ui/spinners/contract.css'

const BorderSuccessSpinner: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<div class={`${theme} ${spinnerBorder} ${spinnerSuccess}`}>
					<span class="visually-hidden">Loading...</span>
				</div>
			</div>
		</div>
	)
}

export default BorderSuccessSpinner

// @screenshot *: 360x120 120
