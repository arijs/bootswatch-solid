import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	formControl,
	inputGroup,
	inputGroupText,
} from '../../../theme-contract/forms/contract.css'

const TextareaAddon: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<div class={`${theme} ${inputGroup}`}>
				<span class={`${theme} ${inputGroupText}`}>With textarea</span>
				<textarea class={`${theme} ${formControl}`} aria-label="With textarea" />
			</div>
		</div>
	)
}

export default TextareaAddon

// @screenshot *: 360x120 120
