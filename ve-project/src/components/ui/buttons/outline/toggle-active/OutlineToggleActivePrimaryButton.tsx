import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineToggleActivePrimaryButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnOutlinePrimary,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-outline-toggle-active-primary" checked autocomplete="off" />
		<label class={`${btn} ${btnOutlinePrimary}`} for="id-btn-outline-toggle-active-primary">Checked Toggle Primary</label>
	</div>
	)
}

export default OutlineToggleActivePrimaryButton

// @screenshot *: 360x120 120
