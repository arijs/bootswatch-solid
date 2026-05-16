import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../../../context/ThemeContext'
import { containerFluid } from '../../../../../../theme-contract/layout/container.css'
import {
	btn, btnActiveHook, btnPrimary, btnSm, inputFontFamily } from '../../../../../../theme-contract/ui/buttons/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const CheckActiveDisabledSmallButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				disabled
				type="button"
				class={`${theme} ${btn} ${btnPrimary} ${btnSm} ${btnActiveHook} ${inputFontFamily} pwhook-btn`}
			>
				Small button
			</button>
		</div>
	)
}

export default CheckActiveDisabledSmallButton

// @screenshot *: 360x120 120
