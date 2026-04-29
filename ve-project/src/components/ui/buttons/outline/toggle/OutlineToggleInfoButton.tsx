import type { Component } from 'solid-js'
import { useVeButtonThemeClasses } from '../../../../../themes/runtime/hooks'

const OutlineToggleInfoButton: Component = () => {
	const { bsTheme, body, containerFluid, btn, btnCheck, btnOutlineInfo } =
		useVeButtonThemeClasses()

	return (
		<div class={`bd-example ${bsTheme} ${body} ${containerFluid}`}>
			<input
				type="checkbox"
				class={`${btnCheck}`}
				id="id-btn-outline-toggle-info"
				autocomplete="off"
			/>
			<label class={`${btn} ${btnOutlineInfo}`} for="id-btn-outline-toggle-info">
				Toggle Info
			</label>
		</div>
	)
}

export default OutlineToggleInfoButton

// @screenshot *: 360x120 120
