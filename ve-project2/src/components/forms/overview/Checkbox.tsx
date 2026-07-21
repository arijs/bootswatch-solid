import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import {
	form,
	formCheck,
	formCheckInput,
	formCheckLabel,
} from '../../../theme-contract/forms/contract.css'
import { elInput, elLabel } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { mb3 } from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'forms',
	'contents/basic',
	'utilities/used',
]

const Checkbox: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<div class={`${theme} ${mb3} ${formCheck}`}>
					<input
						type="checkbox"
						class={`${theme} ${elInput} ${formCheckInput} pwhook-checkbox`}
						id="exampleCheck1"
					/>
					<label
						class={`${theme} ${elLabel} ${formCheckLabel} pwhook-checkbox-label`}
						for="exampleCheck1"
					>
						Check me out
					</label>
				</div>
			</form>
		</div>
	)
}

export default Checkbox

// @screenshot *: 360x120 120
