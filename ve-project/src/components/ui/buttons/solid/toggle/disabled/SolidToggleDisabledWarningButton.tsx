import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleDisabledWarningButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnWarning,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-disabled-warning" autocomplete="off"  />
		<label class={`${btn} ${btnWarning}`} for="id-btn-solid-toggle-disabled-warning">Toggle Warning</label>
	</div>
	)
}

export default SolidToggleDisabledWarningButton

// @screenshot *: 360x120 120
