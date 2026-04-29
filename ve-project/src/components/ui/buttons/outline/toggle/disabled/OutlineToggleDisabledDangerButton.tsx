import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../../themes/runtime/hooks'

const OutlineToggleDisabledDangerButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineDanger } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				disabled
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-disabled-danger"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnOutlineDanger}`} for="id-btn-outline-toggle-disabled-danger">
				Toggle Danger
			</label>
		</div>
	)
}

export default OutlineToggleDisabledDangerButton

// @screenshot *: 360x120 120
