import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	form,
	formControl,
	formLabel,
	formRange,
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
	'utilities/used',
]

const DisabledFileRange: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<div class={`${theme} ${mb3}`}>
					<label class={`${theme} ${elLabel} ${formLabel}`} for="disabledCustomFile">
						Upload
					</label>
					<input type="file" class={`${theme} ${elInput} ${formControl}`} id="disabledCustomFile" disabled />
				</div>
				<div class={`${theme} ${mb3}`}>
					<label for="disabledRange" class={`${theme} ${elLabel} ${formLabel}`}>
						Disabled range
					</label>
					<input
						type="range"
						class={`${theme} ${elInput} ${formRange}`}
						min="0"
						max="5"
						step="0.5"
						id="disabledRange"
						disabled
					/>
				</div>
			</form>
		</div>
	)
}

export default DisabledFileRange

// @screenshot *: 360x148 148
// @screenshot brite: 360x142 142
// @screenshot cyborg: 360x147 147
// @screenshot litera: 360x160 160
// @screenshot lux: 360x159 159
// @screenshot materia: 360x168 168
