import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	form,
	formLabel,
	formRange,
	mb3,
} from '../../../theme-contract/forms/contract.css'

const RangeInput: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<div class={`${theme} ${mb3}`}>
					<label for="customRange3" class={`${theme} ${formLabel}`}>
						Example range
					</label>
					<input
						type="range"
						class={`${theme} ${formRange}`}
						min="0"
						max="5"
						step="0.5"
						id="customRange3"
					/>
				</div>
			</form>
		</div>
	)
}

export default RangeInput

// @screenshot *: 360x120 120
