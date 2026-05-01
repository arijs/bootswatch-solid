import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	formControl,
	inputGroup,
	inputGroupText,
	mb3,
} from '../../../theme-contract/forms/contract.css'

const PrefixAddon: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<div class={`${theme} ${inputGroup} ${mb3}`}>
				<span class={`${theme} ${inputGroupText}`} id="basic-addon1">
					@
				</span>
				<input
					type="text"
					class={`${theme} ${formControl}`}
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
			</div>
		</div>
	)
}

export default PrefixAddon

// @screenshot *: 360x120 120
