import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleSuccessButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnSuccess,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-success" autocomplete="off" />
		<label class={`${btn} ${btnSuccess}`} for="id-btn-solid-toggle-success">Toggle Success</label>
	</div>
	)
}

export default SolidToggleSuccessButton

// @screenshot *: 360x120 120
