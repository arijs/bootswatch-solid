import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleDisabledLightButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnOutlineLight,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-disabled-light" autocomplete="off"  />
		<label class={`${btn} ${btnOutlineLight}`} for="id-btn-outline-toggle-disabled-light">Toggle Light</label>
	</div>
	)
}

export default OutlineToggleDisabledLightButton

// @screenshot *: 360x120 120
