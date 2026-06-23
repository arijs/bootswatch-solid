import {
	elButton,
} from '../../../theme-contract/global-elements/contract.css'
import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import {
	ThemeContext,
	useVe2RequiredStyleFamilies,
	type Ve2StyleFamily,
} from '../../../context/ThemeContext'
import { link } from '../../../theme-contract/contents/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import { btnClose } from '../../../theme-contract/literal/contract.css'
import { fade, show } from '../../../theme-contract/ui/navs/contract.css'
import {
	alert,
	alertBtnClose,
	alertDismissible,
	alertLink,
	alertSuccess,
} from '../../../theme-contract/ui/alerts/contract.css'
import { inputFontFamily } from '../../../theme-contract/ui/buttons/contract.css'

export const ve2RequiredStyleFamilies: readonly Ve2StyleFamily[] = [
	'ui/alerts',
	'ui/buttons',
	'contents/basic',
	'utilities/used',
]

const SuccessAlert: Component = () => {
	const theme = useContext(ThemeContext)
	useVe2RequiredStyleFamilies(ve2RequiredStyleFamilies)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${alert} ${alertSuccess} ${alertDismissible} ${fade} ${show}`}>
				A simple success alert with{' '}
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a
					href="#"
					onClick={(e) => e.preventDefault()}
					class={`${theme} ${alertLink} ${link}`}
				>
					an example link
				</a>
				. Give it a click if you like.
				<button
					type="button"
					class={`${theme} ${elButton} ${alertBtnClose} ${btnClose} ${inputFontFamily}`}
					aria-label="Close"
				/>
			</div>
		</div>
	)
}

export default SuccessAlert

// @screenshot *: 360x120 120
