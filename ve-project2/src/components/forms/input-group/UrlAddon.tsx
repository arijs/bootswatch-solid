import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	formControl,
	formLabel,
	inputGroup,
	inputGroupText,
} from '../../../theme-contract/forms/contract.css'
import {
	elInput,
	elLabel,
} from '../../../theme-contract/global-elements/contract.css'
import {
	mb3,
} from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'forms',
	'contents/basic',
	'utilities',
]

const UrlAddon: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<label for="basic-url" class={`${theme} ${elLabel} ${formLabel}`}>
				Your vanity URL
			</label>
			<div class={`${theme} ${inputGroup} ${mb3}`}>
				<span class={`${theme} ${inputGroupText}`} id="basic-addon3">
					https://example.com/users/
				</span>
				<input
					type="text"
					class={`${theme} ${elInput} ${formControl}`}
					id="basic-url"
					aria-describedby="basic-addon3"
				/>
			</div>
		</div>
	)
}

export default UrlAddon

// @screenshot *: 360x120 120
