import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleActiveSecondaryButton: Component = () => {
	const {
		bsTheme,
		body,
		containerFluid,
		btn,
		btnCheck,
		btnSecondary,
	} = useVeButtonThemeClasses()

	return (
	<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-active-secondary" checked autocomplete="off" />
		<label class={`${btn} ${btnSecondary}`} for="id-btn-solid-toggle-active-secondary">Checked Toggle Secondary</label>
	</div>
	)
}

export default SolidToggleActiveSecondaryButton

// @screenshot *: 360x120 120
