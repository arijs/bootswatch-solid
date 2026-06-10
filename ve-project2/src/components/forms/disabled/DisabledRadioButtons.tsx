import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	fieldset,
	form,
	formCheck,
	formCheckInput,
	formCheckLabel,
	legend,
	legendClear,
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

const DisabledRadioButtons: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<fieldset class={`${theme} ${mb3} ${fieldset}`}>
					<legend class={`${theme} ${legend}`}>Disabled radios buttons</legend>
					<div class={`${theme} ${legendClear} ${formCheck}`}>
						<input
							type="radio"
							name="radios"
							class={`${theme} ${elInput} ${formCheckInput}`}
							id="disabledRadio1"
							disabled
						/>
						<label class={`${theme} ${elLabel} ${formCheckLabel}`} for="disabledRadio1">
							Disabled radio
						</label>
					</div>
					<div class={`${theme} ${mb3} ${formCheck}`}>
						<input
							type="radio"
							name="radios"
							class={`${theme} ${elInput} ${formCheckInput}`}
							id="disabledRadio2"
							disabled
						/>
						<label class={`${theme} ${elLabel} ${formCheckLabel}`} for="disabledRadio2">
							Another radio
						</label>
					</div>
				</fieldset>
			</form>
		</div>
	)
}

export default DisabledRadioButtons

// @screenshot *: 360x120 120
// @screenshot quartz: 360x123 123
