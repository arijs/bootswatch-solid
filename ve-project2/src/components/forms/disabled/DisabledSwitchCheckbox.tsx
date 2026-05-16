import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	form,
	formCheck,
	formCheckInput,
	formCheckLabel,
	formSwitch,
	mb3,
} from '../../../theme-contract/forms/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'forms',
	'contents',
	'utilities',
]

const DisabledSwitchCheckbox: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<div class={`${theme} ${mb3} ${formCheck} ${formSwitch}`}>
					<input
						class={`${theme} ${formCheckInput}`}
						type="checkbox"
						id="disabledSwitchCheckChecked"
						checked
						disabled
					/>
					<label class={`${theme} ${formCheckLabel}`} for="disabledSwitchCheckChecked">
						Disabled checked switch checkbox input
					</label>
				</div>
			</form>
		</div>
	)
}

export default DisabledSwitchCheckbox

// @screenshot *: 360x120 120
