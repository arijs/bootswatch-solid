import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { visuallyHidden } from '../../../theme-contract/utilities/contract.css'
import {
	spinnerBorder,
	spinnerDark,
} from '../../../theme-contract/ui/spinners/contract.css'

const BorderDarkSpinner: Component = () => {
	const theme = useContext(ThemeContext)
	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${containerFluid}`}>
				<div class={`${theme} ${spinnerBorder} ${spinnerDark}`}>
					<span class={`${theme} ${visuallyHidden}`}>Loading...</span>
				</div>
			</div>
		</div>
	)
}

export default BorderDarkSpinner

// @screenshot *: 360x120 120
