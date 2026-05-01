import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const SolidToggleDisabledSecondaryButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnSecondary } = useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-solid-toggle-disabled-secondary"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnSecondary}`} for="id-btn-solid-toggle-disabled-secondary">
				Toggle Secondary
			</label>
		</div>
	)
}

export default SolidToggleDisabledSecondaryButton

// @screenshot *: 360x120 120
