import type { Component } from 'solid-js'
import { useContext } from 'solid-js'
import { ThemeContext } from '../../../context/ThemeContext'
import {
	alert,
	alertBtnClose,
	alertDismissible,
	alertLight,
	alertLink,
} from '../../../theme-contract/ui/alerts/contract.css'

const LightAlert: Component = () => {
	const theme = useContext(ThemeContext)

	return (
		<div class="bd-example-ve2">
			<div class={`${theme} ${alert} ${alertLight} ${alertDismissible}`}>
				A simple light alert with{' '}
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

export default LightAlert

// @screenshot *: 360x120 120
