import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleActiveDisabledLightButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnLight,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-disabled-light" checked autocomplete="off"  />
		<label class={`${btn} ${btnLight}`} for="id-btn-solid-toggle-active-disabled-light">Checked Toggle Light</label>
	</div>
	)
}

export default SolidToggleActiveDisabledLightButton

// @screenshot *: 360x120 120
