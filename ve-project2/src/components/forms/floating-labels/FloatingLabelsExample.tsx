import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { bodyText } from '../../../theme-contract/theme-contract.css'
import {
	floatingLabel,
	form,
	formControl,
	formControlFloating,
	formFloating,
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

const FloatingLabelsExample: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example ${theme} ${bodyText} ${containerFluid}`}>
			<form class={`${theme} ${form}`}>
				<div class={`${theme} ${formFloating} ${mb3}`}>
					<input
						type="email"
						class={`${theme} ${elInput} ${formControl} ${formControlFloating}`}
						id="floatingInput"
						placeholder="name@example.com"
					/>
					<label class={`${theme} ${elLabel} ${floatingLabel}`} for="floatingInput">
						Email address
					</label>
				</div>
				<div class={`${theme} ${formFloating}`}>
					<input
						type="password"
						class={`${theme} ${elInput} ${formControl} ${formControlFloating}`}
						id="floatingPassword"
						placeholder="Password"
					/>
					<label class={`${theme} ${elLabel} ${floatingLabel}`} for="floatingPassword">
						Password
					</label>
				</div>
			</form>
		</div>
	)
}

export default FloatingLabelsExample

// @screenshot *: 360x132 208
// @screenshot brite: 360x136 136
// @screenshot cyborg: 360x128 128
// @screenshot lux: 360x120 120
// @screenshot materia: 360x128 128
// @screenshot morph: 360x120 120
// @screenshot quartz: 360x148 148
// @screenshot sketchy: 360x136 136
// @screenshot vapor: 360x120 120
