import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleActiveDarkButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnDark,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-dark" checked autocomplete="off" />
		<label class={`${btn} ${btnDark}`} for="id-btn-solid-toggle-active-dark">Checked Toggle Dark</label>
	</div>
	)
}

export default SolidToggleActiveDarkButton

// @screenshot *: 360x120 120
