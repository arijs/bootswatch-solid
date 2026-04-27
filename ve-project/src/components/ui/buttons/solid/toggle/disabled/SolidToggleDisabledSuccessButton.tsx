import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleDisabledSuccessButton: Component = () => {
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
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-disabled-success" autocomplete="off"  />
		<label class={`${btn} ${btnSuccess}`} for="id-btn-solid-toggle-disabled-success">Toggle Success</label>
	</div>
	)
}

export default SolidToggleDisabledSuccessButton

// @screenshot *: 360x120 120
