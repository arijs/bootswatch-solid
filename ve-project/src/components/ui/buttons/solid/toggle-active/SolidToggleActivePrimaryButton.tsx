import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleActivePrimaryButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnPrimary,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-primary" checked autocomplete="off" />
		<label class={`${btn} ${btnPrimary}`} for="id-btn-solid-toggle-active-primary">Checked Toggle Primary</label>
	</div>
	)
}

export default SolidToggleActivePrimaryButton

// @screenshot *: 360x120 120
