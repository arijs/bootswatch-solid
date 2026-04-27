import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleActiveDisabledDarkButton: Component = () => {
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
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-disabled-dark" checked autocomplete="off"  />
		<label class={`${btn} ${btnDark}`} for="id-btn-solid-toggle-active-disabled-dark">Checked Toggle Dark</label>
	</div>
	)
}

export default SolidToggleActiveDisabledDarkButton

// @screenshot *: 360x120 120
