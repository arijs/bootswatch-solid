import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const ToggleDisabledSmallButton: Component = () => {
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
		<input disabled type="checkbox" class={`${btnCheck}`} id="id-btn-sizes-toggle-disabled-small" autocomplete="off"  />
		<label class={`${btn} ${btnPrimary} ${btnSm}`} for="id-btn-sizes-toggle-disabled-small">Toggle Small button</label>
	</div>
	)
}

export default ToggleDisabledSmallButton

// @screenshot *: 360x120 120
