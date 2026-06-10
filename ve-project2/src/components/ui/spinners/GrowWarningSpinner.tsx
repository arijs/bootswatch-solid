import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { textWarning } from '../../../theme-contract/literal/contract.css'
import { spinnerGrow } from '../../../theme-contract/ui/spinners/contract.css'
import { visuallyHidden } from '../../../theme-contract/utilities/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/spinners',
	'contents/basic',
	'utilities',
]

const GrowWarningSpinner: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)
	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${spinnerGrow} ${textWarning}`}>
				<span class={`${theme} ${visuallyHidden}`}>Loading...</span>
			</div>
		</div>
	)
}

export default GrowWarningSpinner

// @screenshot *: 360x120 120
