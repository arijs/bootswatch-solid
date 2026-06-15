import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { formControl, inputGroup, inputGroupText } from '../../../theme-contract/forms/contract.css'
import { elTextarea } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'forms',
	'contents/basic',
	'utilities',
]

const TextareaAddon: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<div class={`${theme} ${inputGroup}`}>
				<span class={`${theme} ${inputGroupText}`}>With textarea</span>
				<textarea
					class={`${theme} ${elTextarea} ${formControl}`}
					aria-label="With textarea"
				/>
			</div>
		</div>
	)
}

export default TextareaAddon

// @screenshot *: 360x120 120
