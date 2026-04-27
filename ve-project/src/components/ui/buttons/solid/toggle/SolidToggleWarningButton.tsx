import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleWarningButton: Component = () => {
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
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-warning" autocomplete="off" />
		<label class={`${btn} ${btnWarning}`} for="id-btn-solid-toggle-warning">Toggle Warning</label>
	</div>
	)
}

export default SolidToggleWarningButton

// @screenshot *: 360x120 120
