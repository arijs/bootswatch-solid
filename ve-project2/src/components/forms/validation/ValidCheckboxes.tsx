import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import {
	formCheck,
	formCheckInput,
	formCheckLabel,
	isValid,
	validFeedback,
} from '../../../theme-contract/forms/contract.css'
import { elInput, elLabel } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { colMd6, g3, row, rowCol } from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'forms',
	'contents/basic',
	'utilities/used',
]

const ValidCheckboxes: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${row} ${g3}`}>
				<div class={`${theme} ${rowCol} ${colMd6}`}>
					<div class={`${theme} ${formCheck}`}>
						<input
							class={`${theme} ${elInput} ${formCheckInput} ${isValid}`}
							type="checkbox"
							value=""
							id="validCheck3"
							required
							checked
						/>
						<label class={`${theme} ${elLabel} ${formCheckLabel}`} for="validCheck3">
							Agree to terms and conditions
						</label>
						<div class={`${theme} ${validFeedback}`}>You agreed before submitting.</div>
					</div>
				</div>
				<div class={`${theme} ${rowCol} ${colMd6}`}>
					<div class={`${theme} ${formCheck}`}>
						<input
							class={`${theme} ${elInput} ${formCheckInput} ${isValid}`}
							type="checkbox"
							value=""
							id="validCheck4"
							required
						/>
						<label class={`${theme} ${elLabel} ${formCheckLabel}`} for="validCheck4">
							Do NOT Agree to terms and conditions
						</label>
						<div class={`${theme} ${validFeedback}`}>You agreed before submitting.</div>
					</div>
				</div>
			</form>
		</div>
	)
}

export default ValidCheckboxes

// @screenshot *: 360x134 134
// @screenshot brite: 360x123 123
// @screenshot litera: 360x143 143
// @screenshot quartz: 360x166 166
