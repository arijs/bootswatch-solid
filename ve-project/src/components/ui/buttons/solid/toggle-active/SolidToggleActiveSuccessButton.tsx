import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleActiveSuccessButton: Component = () => {
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
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-success" checked autocomplete="off" />
		<label class={`${btn} ${btnSuccess}`} for="id-btn-solid-toggle-active-success">Checked Toggle Success</label>
	</div>
	)
}

export default SolidToggleActiveSuccessButton

// @screenshot *: 360x120 120
