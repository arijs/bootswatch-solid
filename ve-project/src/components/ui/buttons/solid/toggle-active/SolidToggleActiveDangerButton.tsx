import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleActiveDangerButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnDanger,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-danger" checked autocomplete="off" />
		<label class={`${btn} ${btnDanger}`} for="id-btn-solid-toggle-active-danger">Checked Toggle Danger</label>
	</div>
	)
}

export default SolidToggleActiveDangerButton

// @screenshot *: 360x120 120
