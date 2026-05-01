import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	formControl,
	formLabel,
	inputGroup,
	inputGroupText,
	mb3,
} from '../../../theme-contract/forms/contract.css'

const UrlAddon: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<label for="basic-url" class={`${theme} ${formLabel}`}>
				Your vanity URL
			</label>
			<div class={`${theme} ${inputGroup} ${mb3}`}>
				<span class={`${theme} ${inputGroupText}`} id="basic-addon3">
					https://example.com/users/
				</span>
				<input
					type="text"
					class={`${theme} ${formControl}`}
					id="basic-url"
					aria-describedby="basic-addon3"
				/>
			</div>
		</div>
	)
}

export default UrlAddon

// @screenshot *: 360x120 120
