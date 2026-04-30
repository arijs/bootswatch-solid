import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import { containerFluid } from '../../../theme-contract/layout/container.css'
import {
	alert,
	alertBtnClose,
	alertDismissible,
	alertLink,
	alertWarning,
} from '../../../theme-contract/ui/alerts/contract.css'

const WarningAlert: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class={`bd-example-ve2 ${theme} ${containerFluid}`}>
			<div class={`${theme} ${alert} ${alertWarning} ${alertDismissible}`}>
				A simple warning alert with{' '}
				{/* biome-ignore lint: <a> is used for demonstration purposes */}
				<a href="#" onClick={(e) => e.preventDefault()} class={alertLink}>
					an example link
				</a>
				. Give it a click if you like.
				<button type="button" class={alertBtnClose} aria-label="Close" />
			</div>
		</div>
	)
}

export default WarningAlert

// @screenshot *: 360x120 120
