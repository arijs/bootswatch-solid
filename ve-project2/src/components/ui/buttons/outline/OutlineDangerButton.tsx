import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext, type Ve2StyleFamily, useVe2RequiredStyleFamilies } from '../../../../context/ThemeContext'
import { btn, btnOutlineDanger, inputFontFamily } from '../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../theme-contract/layout/container.css'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const OutlineDangerButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button type="button" class={`${theme} ${btn} ${btnOutlineDanger} ${inputFontFamily} pwhook-btn`}>
				Danger
			</button>
		</div>
	)
}

export default OutlineDangerButton

// @screenshot *: 360x120 120
