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

const SwitchCheckbox: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<div class={`${theme} ${mb3} ${formCheck} ${formSwitch}`}>
					<input
						class={`${theme} ${elInput} ${formCheckInput} pwhook-checkbox`}
						type="checkbox"
						id="flexSwitchCheckChecked"
						checked
					/>
					<label class={`${theme} ${elLabel} ${formCheckLabel} pwhook-checkbox-label`} for="flexSwitchCheckChecked">
						Checked switch checkbox input
					</label>
				</div>
			</form>
		</div>
	)
}

export default SwitchCheckbox

// @screenshot *: 360x120 120
