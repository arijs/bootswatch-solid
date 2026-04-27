import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleActiveDisabledDangerButton: Component = () => {
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
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-disabled-danger" checked autocomplete="off"  />
		<label class={`${btn} ${btnDanger}`} for="id-btn-solid-toggle-active-disabled-danger">Checked Toggle Danger</label>
	</div>
	)
}

export default SolidToggleActiveDisabledDangerButton

// @screenshot *: 360x120 120
