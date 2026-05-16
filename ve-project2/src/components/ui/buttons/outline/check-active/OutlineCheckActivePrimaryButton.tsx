import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../theme-contract/layout/container.css'
import {
	btn, btnActiveHook, btnOutlinePrimary, inputFontFamily } from '../../../../../theme-contract/ui/buttons/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const OutlineCheckActivePrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				type="button"
				class={`${theme} ${btn} ${btnOutlinePrimary} ${btnActiveHook} ${inputFontFamily} pwhook-btn`}
				data-bs-toggle="button"
				aria-pressed="true"
			>
				Primary
			</button>
		</div>
	)
}

export default OutlineCheckActivePrimaryButton

// @screenshot *: 360x120 120
