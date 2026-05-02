import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { link } from '../../../theme-contract/contents/contract.css'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	alert,
	alertBtnClose,
	alertDismissible,
	alertLink,
	alertSuccess,
} from '../../../theme-contract/ui/alerts/contract.css'
import { inputFontFamily } from '../../../theme-contract/ui/buttons/contract.css'

const SuccessAlert: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${alert} ${alertSuccess} ${alertDismissible}`}>
				A simple success alert with{' '}
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a href="#" onClick={(e) => e.preventDefault()} class={`${theme} ${alertLink} ${link}`}>
					an example link
				</a>
				. Give it a click if you like.
				<button
					type="button"
					class={`${theme} ${alertBtnClose} ${inputFontFamily}`}
					aria-label="Close"
				/>
			</div>
		</div>
	)
}

export default SuccessAlert

// @screenshot *: 360x120 120
