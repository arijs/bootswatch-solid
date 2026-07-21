import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { formControl, inputGroup, inputGroupText } from '../../../theme-contract/forms/contract.css'
import { elInput } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { mb3 } from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'forms',
	'contents/basic',
	'utilities/used',
]

const SuffixAddon: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<div class={`${theme} ${inputGroup} ${mb3}`}>
				<input
					type="text"
					class={`${theme} ${elInput} ${formControl}`}
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
