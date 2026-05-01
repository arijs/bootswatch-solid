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

const SuffixAddon: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<div class={`${theme} ${inputGroup} ${mb3}`}>
				<input
					type="text"
					class={`${theme} ${formControl}`}
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
				/>
				<span class={`${theme} ${inputGroupText}`} id="basic-addon2">
					@example.com
				</span>
			</div>
		</div>
	)
}

export default SuffixAddon

// @screenshot *: 360x120 120
