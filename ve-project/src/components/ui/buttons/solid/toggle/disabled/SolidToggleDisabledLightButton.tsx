import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleDisabledLightButton: Component = () => {
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
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-disabled-light" autocomplete="off"  />
		<label class={`${btn} ${btnLight}`} for="id-btn-solid-toggle-disabled-light">Toggle Light</label>
	</div>
	)
}

export default SolidToggleDisabledLightButton

// @screenshot *: 360x120 120
