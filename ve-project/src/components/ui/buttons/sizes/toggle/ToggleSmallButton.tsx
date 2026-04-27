import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const ToggleSmallButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnPrimary,
		btnSm,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-sizes-toggle-small" autocomplete="off" />
		<label class={`${btn} ${btnPrimary} ${btnSm}`} for="id-btn-sizes-toggle-small">Toggle Small button</label>
	</div>
	)
}

export default ToggleSmallButton

// @screenshot *: 360x120 120
