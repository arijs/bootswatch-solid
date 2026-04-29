import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleDisabledSecondaryButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineSecondary } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-disabled-secondary"
				autocomplete="off"
			/>
			<label
				class={`${btn} ${btnOutlineSecondary}`}
				for="id-btn-outline-toggle-disabled-secondary"
			>
				Toggle Secondary
			</label>
		</div>
	)
}

export default OutlineToggleDisabledSecondaryButton

// @screenshot *: 360x120 120
