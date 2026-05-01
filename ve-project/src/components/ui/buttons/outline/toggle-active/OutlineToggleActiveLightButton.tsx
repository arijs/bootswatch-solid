import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineToggleActiveLightButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineLight } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-active-light"
				checked
				autocomplete="off"
			/>
			<label class={`${btn} ${btnOutlineLight}`} for="id-btn-outline-toggle-active-light">
				Checked Toggle Light
			</label>
		</div>
	)
}

export default OutlineToggleActiveLightButton

// @screenshot *: 360x120 120
