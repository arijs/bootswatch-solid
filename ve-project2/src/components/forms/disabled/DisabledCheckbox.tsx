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
	mb3,
} from '../../../theme-contract/forms/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'forms',
	'contents',
	'utilities',
]

const DisabledCheckbox: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<div class={`${theme} ${mb3}`}>
					<div class={`${theme} ${formCheck}`}>
						<input
							class={`${theme} ${formCheckInput}`}
							type="checkbox"
							id="disabledFieldsetCheck"
							disabled
						/>
						<label class={`${theme} ${formCheckLabel}`} for="disabledFieldsetCheck">
							Can't check this
						</label>
					</div>
				</div>
			</form>
		</div>
	)
}

export default DisabledCheckbox

// @screenshot *: 360x120 120
