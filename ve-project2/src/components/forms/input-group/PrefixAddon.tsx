import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	formControl,
	inputGroup,
	inputGroupText,
} from '../../../theme-contract/forms/contract.css'
import {
	elInput,
} from '../../../theme-contract/global-elements/contract.css'
import {
	mb3,
} from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'forms',
	'contents/basic',
	'utilities/used',
]

const PrefixAddon: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<div class={`${theme} ${inputGroup} ${mb3}`}>
				<span class={`${theme} ${inputGroupText}`} id="basic-addon1">
					@
				</span>
				<input
					type="text"
					class={`${theme} ${elInput} ${formControl}`}
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
