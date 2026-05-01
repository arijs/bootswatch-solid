import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineToggleActiveDangerButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineDanger } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-active-danger"
				checked
				autocomplete="off"
			/>
			<label class={`${btn} ${btnOutlineDanger}`} for="id-btn-outline-toggle-active-danger">
				Checked Toggle Danger
			</label>
		</div>
	)
}

export default OutlineToggleActiveDangerButton

// @screenshot *: 360x120 120
