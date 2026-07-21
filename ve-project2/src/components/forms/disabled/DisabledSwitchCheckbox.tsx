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
	formSwitch,
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

const DisabledSwitchCheckbox: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<div class={`${theme} ${mb3} ${formCheck} ${formSwitch}`}>
					<input
						class={`${theme} ${elInput} ${formCheckInput}`}
						type="checkbox"
						id="disabledSwitchCheckChecked"
						checked
						disabled
					/>
					<label
						class={`${theme} ${elLabel} ${formCheckLabel}`}
						for="disabledSwitchCheckChecked"
					>
						Disabled checked switch checkbox input
					</label>
				</div>
			</form>
		</div>
	)
}

export default DisabledSwitchCheckbox

// @screenshot *: 360x120 120
