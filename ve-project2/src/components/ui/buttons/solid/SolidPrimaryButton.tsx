import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../../context/ThemeContext'
import { btn, btnPrimary, inputFontFamily } from '../../../../theme-contract/ui/buttons/contract.css'
import { containerFluid } from '../../../../theme-contract/layout/container.css'
import type { Ve2StyleFamily } from '../../../../theme-runtime/style-families'
import { useVe2RequiredStyleFamilies } from '../../../../theme-runtime/style-loader-context'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/buttons',
	'contents/basic',
	'utilities',
]

const SolidPrimaryButton: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<button type="button" class={`${theme} ${btn} ${btnPrimary} ${inputFontFamily} pwhook-btn`}>
				Primary
			</button>
		</div>
	)
}

export default SolidPrimaryButton

// @screenshot *: 360x120 120
