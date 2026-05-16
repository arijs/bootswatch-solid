import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
import {
	btn, btnActiveHook, btnWarning, inputFontFamily } from '../../../../../theme-contract/ui/buttons/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const SolidCheckActiveWarningButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				type="button"
				class={`${theme} ${btn} ${btnWarning} ${btnActiveHook} ${inputFontFamily} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Warning
			</button>
		</div>
	)
}

export default SolidCheckActiveWarningButton

// @screenshot *: 360x120 120
