import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineToggleWarningButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineWarning } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-warning"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnOutlineWarning}`} for="id-btn-outline-toggle-warning">
				Toggle Warning
			</label>
		</div>
	)
}

export default OutlineToggleWarningButton

// @screenshot *: 360x120 120
