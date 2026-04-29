import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineToggleSecondaryButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineSecondary } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-secondary"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnOutlineSecondary}`} for="id-btn-outline-toggle-secondary">
				Toggle Secondary
			</label>
		</div>
	)
}

export default OutlineToggleSecondaryButton

// @screenshot *: 360x120 120
