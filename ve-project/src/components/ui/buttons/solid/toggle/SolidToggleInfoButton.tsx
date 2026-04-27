import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleInfoButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnInfo,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-info" autocomplete="off" />
		<label class={`${btn} ${btnInfo}`} for="id-btn-solid-toggle-info">Toggle Info</label>
	</div>
	)
}

export default SolidToggleInfoButton

// @screenshot *: 360x120 120
