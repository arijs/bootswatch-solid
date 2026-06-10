import {
	elButton,
} from '../../../../theme-contract/global-elements/contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../../context/ThemeContext'
import { containerFluid } from '../../../../theme-contract/layout/container.css'
import { btn, btnInfo, inputFontFamily } from '../../../../theme-contract/ui/buttons/contract.css'
export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const SolidInfoButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button
				type="button"
				class={`${theme} ${elButton} ${btn} ${btnInfo} ${inputFontFamily} pwhook-btn`}
			>
				Info
			</button>
		</div>
	)
}

export default SolidInfoButton

// @screenshot *: 360x120 120
