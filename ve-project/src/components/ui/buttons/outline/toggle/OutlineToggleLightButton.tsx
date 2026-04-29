import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineToggleLightButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineLight } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-light"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnOutlineLight}`} for="id-btn-outline-toggle-light">
				Toggle Light
			</label>
		</div>
	)
}

export default OutlineToggleLightButton

// @screenshot *: 360x120 120
