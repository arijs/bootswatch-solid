import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const SolidToggleSecondaryButton: Component = () => {
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
		<input type="checkbox" class={`${btnCheck}`} id="id-btn-solid-toggle-secondary" autocomplete="off" />
		<label class={`${btn} ${btnSecondary}`} for="id-btn-solid-toggle-secondary">Toggle Secondary</label>
	</div>
	)
}

export default SolidToggleSecondaryButton

// @screenshot *: 360x120 120
