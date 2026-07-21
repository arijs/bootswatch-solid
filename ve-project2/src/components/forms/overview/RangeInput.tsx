import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { form, formLabel, formRange } from '../../../theme-contract/forms/contract.css'
import { elInput, elLabel } from '../../../theme-contract/global-elements/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import { mb3 } from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'forms',
	'contents/basic',
	'utilities/used',
]

const RangeInput: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<div class={`${theme} ${mb3}`}>
					<label for="customRange3" class={`${theme} ${elLabel} ${formLabel}`}>
						Example range
					</label>
					<input
						type="range"
						class={`${theme} ${elInput} ${formRange}`}
						min="0"
						max="5"
						step="0.5"
						id="customRange3"
					/>
				</div>
			</form>
		</div>
	)
}

export default RangeInput

// @screenshot *: 360x120 120
