import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineToggleDangerButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineDanger } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-danger"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnOutlineDanger}`} for="id-btn-outline-toggle-danger">
				Toggle Danger
			</label>
		</div>
	)
}

export default OutlineToggleDangerButton

// @screenshot *: 360x120 120
